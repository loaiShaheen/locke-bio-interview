import { ID, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PrescriptionObject {
  @Field((type) => String)
  public id: string;

  @Field({ nullable: true })
  public name?: string;

  @Field({ nullable: true })
  public email?: string;

  @Field({ nullable: true })
  public file?: string;
}
