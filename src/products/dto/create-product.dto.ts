import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString({ always: true})
    id_product: String;
    @IsString({ always: true})
    descripction: string;
    @IsString({ always: false })
    image: string;
    @IsNumber()
    priceSale: number;
    @IsNumber()
    pricePurchase: number;
}
