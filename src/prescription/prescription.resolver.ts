import { Query, Resolver } from '@nestjs/graphql';
import { PrescriptionObject } from './prescription.model';
import { PrescriptionService } from './prescription.service';

@Resolver((of) => PrescriptionObject)
export class PrescriptionResolver {
  constructor(private prescriptionService: PrescriptionService) {}

  @Query(() => String)
  async test() {
    return this.prescriptionService.find();
  }
}
