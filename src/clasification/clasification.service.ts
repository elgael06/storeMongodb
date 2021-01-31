import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { iResponse } from 'src/app/interface/iResponse';
import { CreateClasificationDto } from './dto/create-clasification.dto';
import { UpdateClasificationDto } from './dto/update-clasification.dto';
import { classificationModel, classificationModelDocument } from './scheme/clasification.scheme';

@Injectable()
export class ClasificationService {
  constructor(
    @InjectModel(classificationModel.name) private clasification: Model<classificationModelDocument>,
  ) { }

  async create(createClasificationDto: CreateClasificationDto):Promise<iResponse> {
    try {      
      const modelo = new this.clasification({
        name: createClasificationDto.name
      });
      await modelo.save();
  
      return {status:true,message:modelo._id};
    } catch (error) {
      return {status:false,message:error.name};
      
    }
  }

  async findAll(): Promise<iResponse> {
    let res:iResponse;
    try {
      const data = await this.clasification.find({}, { _id: 1, name: 1 });
      res = { data, status: true, message:!data ? 'Not found!' : 'Find all success.'};      
    } catch (error) {
      res = { status: false, message: error.name };
    }
    return res;
  }

  async findOne(id: string): Promise<iResponse> {
    try {
      const item = await this.clasification.findOne({ _id: Types.ObjectId(id) },{ _id: 1, name: 1 });      
      return { status:item != null, item };
    } catch (error) { return { status:false, message: `select one #${id}. Error:${error.name}` };}
  }

  async update(id: string, updateClasificationDto: UpdateClasificationDto):Promise<iResponse> {
    try {      
      await this.clasification.updateOne(
        { _id: Types.ObjectId(id) },
        { name: updateClasificationDto.name }
      );
      return { status: true, message: `This action updates a #${id} clasification` };
    } catch (error) {
      return {status:true,message:error.name};
    }
  }

  async remove(id: string):Promise<iResponse> {
    try {
      await this.clasification.deleteOne({_id:Types.ObjectId( id )});
      return { status: true, message: `This action removes a #${id} clasification` };
    } catch (error) {
      return {status:true,message:error.name};
    }
  }
}
