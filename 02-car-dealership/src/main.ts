import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo deja la data que estoy esperando, si agrego data extra dentro del body que no esta en el dto, la data extra no se va a guardar ni considerar.
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
main();
