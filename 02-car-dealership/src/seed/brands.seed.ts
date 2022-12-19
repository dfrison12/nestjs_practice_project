import { v4 as uuid } from 'uuid';
import { Brand } from '../../src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'BMW',
    cratedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Jeep',
    cratedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Ford',
    cratedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Toyota',
    cratedAt: new Date().getTime(),
  },
];
