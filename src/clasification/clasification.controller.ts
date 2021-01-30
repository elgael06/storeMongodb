import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClasificationService } from './clasification.service';
import { CreateClasificationDto } from './dto/create-clasification.dto';
import { UpdateClasificationDto } from './dto/update-clasification.dto';

@Controller('clasification')
@UsePipes(new ValidationPipe())
export class ClasificationController {
  constructor(private readonly clasificationService: ClasificationService) {}

  @Post()
  create(@Body() createClasificationDto: CreateClasificationDto) {
    return this.clasificationService.create(createClasificationDto);
  }

  @Get()
  async findAll() {
    return await this.clasificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clasificationService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClasificationDto: UpdateClasificationDto) {
    return this.clasificationService.update(+id, updateClasificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clasificationService.remove(+id);
  }
}
