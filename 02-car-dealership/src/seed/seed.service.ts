import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './cars.seed';
import { BRANDS_SEED } from './brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly cardService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    this.cardService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'SEED executed successfully';
  }
}
