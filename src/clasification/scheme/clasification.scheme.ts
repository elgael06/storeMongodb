import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type classificarionDocument = classificarion & Document; 

@Schema()
export class classificarion {
    @Prop({ required: true,unique:true })
    name: string;
}

export const classificarionScheme = SchemaFactory.createForClass(classificarion);