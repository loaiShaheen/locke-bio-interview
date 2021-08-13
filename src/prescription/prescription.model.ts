import { ID, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PrescriptionObject {
  @Field((type) => ID)
  public id: number;

  @Field({ nullable: true })
  public name?: string;

  @Field({ nullable: true })
  public file?: Buffer;
}
