import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type classificationModelDocument = classificationModel & Document; 

@Schema()
export class classificationModel {
    @Prop({ required: true,unique:true })
    name: string;
}

export const classificationModelScheme = SchemaFactory.createForClass(classificationModel);