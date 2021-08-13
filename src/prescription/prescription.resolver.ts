import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrescriptionObject } from './prescription.model';
import * as PDFDocument from 'pdfkit';
import { PrismaService } from 'src/prisma.service';
import * as fs from 'fs';

@Resolver((of) => PrescriptionObject)
export class PrescriptionResolver {
  constructor(private prismaService: PrismaService) {}

  /**
   * lists prescriptions to find id
   */
  @Query(() => [PrescriptionObject])
  async findPrescriptions() {
    return await this.prismaService.prescription.findMany();
  }

  /**
   * fetches the prescription and downloads it locally as a PDF
   * @param id - prescription id for fetching the correct prescripion
   */
  @Query((returns) => String)
  async downloadPrescription(@Args('id', { type: () => String }) id: string) {
    const prescription = await this.prismaService.prescription.findFirst({
      where: {
        id,
      },
    });

    const asdf = fs.writeFile(
      `${prescription.name}-prescription.pdf`,
      prescription.file,
      (err) => {
        if (err) throw err;
      },
    );

    return 'done';
  }

  /**
   * creates a prescription by creating a buffer from the input text and saving it in the db
   * @param input - written prescripion which will be the text of the file
   * @param name - patient name used for naming prescription
   */
  @Mutation((returns) => String)
  async createPrescription(
    @Args('input', { type: () => String }) input: string,
    @Args('name', { type: () => String }) name: string,
  ) {
    const file: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        size: 'LETTER',
        bufferPages: true,
      });
      doc.text(input);
      doc.end();

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
    });

    await this.prismaService.prescription.create({
      data: {
        name,
        file,
      },
    });

    return 'done';
  }
}
