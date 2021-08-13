import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { PrescriptionModule } from './prescription/prescription.module';

@Module({
  imports: [
    PrescriptionModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
