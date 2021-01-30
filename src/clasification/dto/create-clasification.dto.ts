import { IsString } from "class-validator";

export class CreateClasificationDto {
    @IsString()
    name: string;
}
