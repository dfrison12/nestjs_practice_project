import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './cars.seed';
import { BRANDS_SEED } from './brands.seed';

@Injectable()
export class SeedService {
  populateDB() {
    return 'SEED executed successfully';
  }
}
