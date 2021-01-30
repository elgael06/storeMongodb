import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClasificationDto } from './dto/create-clasification.dto';
import { UpdateClasificationDto } from './dto/update-clasification.dto';
import { classificationModel, classificationModelDocument } from './scheme/clasification.scheme';

@Injectable()
export class ClasificationService {
  constructor(
    @InjectModel(classificationModel.name) private clasification: Model<classificationModelDocument>,
  ) { }

  async create(createClasificationDto: CreateClasificationDto) {
    const modelo = new this.clasification({
      name: createClasificationDto.name
    });
    await modelo.save();

    return modelo._id;
  }

  async findAll():Promise<classificationModelDocument[]> {
    return await this.clasification.find({}, {_id:1,name:1});
  }

  findOne(id: number) {
    return `This action returns a #${id} clasification`;
  }

  update(id: number, updateClasificationDto: UpdateClasificationDto) {
    return `This action updates a #${id} clasification`;
  }

  remove(id: number) {
    return `This action removes a #${id} clasification`;
  }
}
