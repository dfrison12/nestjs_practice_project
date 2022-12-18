import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
  Body,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe) //usamos el validation pipe a nivel controlador, para que se aplique a todos los metodos sino deberiamos repetir codigo lo cual va en contra de la DRY(Don't repeat yourself)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    //utilizamos el pipe ParseUUIDPipe para validar que el id sea un uuid
    console.log(id);
    return this.carsService.findOneById(id); //se usa el + para convertir el string a number, tambien se puede usar Number(id)
  }

  @Post()
  //@UsePipes(ValidationPipe) //usamos el validation pipe a nivel metodo, para que se aplique solo a este metodo
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
