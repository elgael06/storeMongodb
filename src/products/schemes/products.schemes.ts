import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { family } from "src/family/schemes/family.scheme";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({ required: true })
    id_product: string;
    @Prop({ required: true })
    descripction: string;
    @Prop({ required: false, default:'' })
    image: string;
    @Prop({ required: true })
    priceSale: number;
    @Prop({ required: true })
    pricePurchase: number;
    @Prop({ required: true, default:new Date() })
    inDate: Date;
    @Prop({ required: true, default:new Date() })
    modificDate: Date;
    @Prop({ required: true, type: Array< Types.ObjectId | String>() })
    usersModific: Array< Types.ObjectId | String>;
    @Prop({ required: false, default:'',ref:family.name,type:Types.ObjectId })
    family: Types.ObjectId|string;
}

export const ProductsSchema = SchemaFactory.createForClass(Product);