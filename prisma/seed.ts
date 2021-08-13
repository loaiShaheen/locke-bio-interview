import { PrismaClient, Prisma } from '@prisma/client';
import * as PDFDocument from 'pdfkit';
const prisma = new PrismaClient();

const data = [
  {
    name: 'john doe',
    file: 'this is the first file text',
  },
  {
    name: 'Firstname Jim',
    file: 'this is the second file text',
  },
  {
    name: 'John Lastname',
    file: 'this is the second file text',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of data) {
    const file: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        size: 'LETTER',
        bufferPages: true,
      });
      doc.text(u.file);
      doc.end();

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
    });

    const prescription = await prisma.prescription.create({
      data: {
        name: u.name,
        file,
      },
    });

    console.log(`Created prescription with id: ${prescription.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
