import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { classificarion } from "src/clasification/scheme/clasification.scheme";

export type familyDocument = family & Document;

@Schema()
export class family { 
    @Prop({ required: true,unique:true })
    name: string;
    @Prop({ required: true ,ref:classificarion.name})
    clasification: Types.ObjectId | string;
}
export const familySchema = SchemaFactory.createForClass(family);