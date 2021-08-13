import { Module } from '@nestjs/common';
import { PrescriptionResolver } from './prescription.resolver';
import { PrescriptionService } from './prescription.service';

@Module({
  imports: [],
  providers: [PrescriptionResolver, PrescriptionService],
})
export class PrescriptionModule {}
