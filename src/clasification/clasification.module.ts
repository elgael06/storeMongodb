import { Module } from '@nestjs/common';
import { ClasificationService } from './clasification.service';
import { ClasificationController } from './clasification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {  classificationModel,classificationModelScheme } from './scheme/clasification.scheme';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: classificationModel.name, schema:classificationModelScheme
    }])
  ],
  controllers: [ClasificationController],
  providers: [ClasificationService]
})
export class ClasificationModule {}
