import { Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Ford',
    //   model: 'Fusion Hybrid',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Tesla',
    //   model: 'Model 3',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Prius',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id); //buscamos el carro en la base de datos

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(
        `The id ${id} is not the same as the id ${updateCarDto.id} in the body`,
      );
    }

    this.cars = this.cars.map((car) => {
      //actualizamos el carro en la base de datos
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
    });
    return carDB; //carro actualizado
  }

  delete(id: string) {
    const car = this.findOneById(id); //buscamos el carro en la base de datos, esto se encargara de validar que existe tambien
    this.cars = this.cars.filter((car) => car.id !== id);
    return undefined;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
