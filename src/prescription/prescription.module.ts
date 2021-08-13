import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PrescriptionResolver } from './prescription.resolver';
import { PrescriptionService } from './prescription.service';

@Module({
  imports: [],
  providers: [PrescriptionResolver, PrescriptionService, PrismaService],
})
export class PrescriptionModule {}
