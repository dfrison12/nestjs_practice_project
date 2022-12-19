import { Brand } from './entities/brand.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Audi',
    //   cratedAt: 1620000000000,
    // },
    // {
    //   id: uuid(),
    //   name: 'BMW',
    //   cratedAt: 1620000000000,
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      cratedAt: Date.now(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    if (!brandDB) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = Date.now();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brandDB;
    });
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
