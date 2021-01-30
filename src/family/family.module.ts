import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyController } from './family.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { family, familySchema } from './schemes/family.scheme';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: family.name, schema:familySchema
    }])
  ],
  controllers: [FamilyController],
  providers: [FamilyService]
})
export class FamilyModule {}
