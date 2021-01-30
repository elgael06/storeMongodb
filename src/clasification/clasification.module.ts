import { Module } from '@nestjs/common';
import { ClasificationService } from './clasification.service';
import { ClasificationController } from './clasification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { classificarion, classificarionScheme } from './scheme/clasification.scheme';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: classificarion.name, schema:classificarionScheme
    }])
  ],
  controllers: [ClasificationController],
  providers: [ClasificationService]
})
export class ClasificationModule {}
