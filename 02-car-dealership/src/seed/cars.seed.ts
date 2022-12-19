import { Car } from '../../src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'BMW',
    model: 'M3',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Wrangler',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
];
