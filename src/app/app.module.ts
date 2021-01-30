import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from '../products/products.module';
import { FamilyModule } from '../family/family.module';
import { ClasificationModule } from 'src/clasification/clasification.module';

@Module({

  imports: [
    MongooseModule.forRoot('mongodb://localhost/store'),
    ProductsModule,
    FamilyModule,
    ClasificationModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway,],
})
export class AppModule {}
