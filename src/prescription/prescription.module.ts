import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrescriptionResolver } from './prescription.resolver';

@Module({
  imports: [],
  providers: [PrescriptionResolver, PrismaService],
})
export class PrescriptionModule {}
