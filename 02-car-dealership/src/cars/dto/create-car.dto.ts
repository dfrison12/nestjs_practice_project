import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand must be a string' }) //utilizamos el decorador de class-validator para validar que el campo sea un string y personalizamos el mensaje de error
  readonly brand: string; //Cunado se crea la instancia no cambian las propiedades usualmente, entonces no quiero accidentalmebte reasignar el valor de la propiedad, por eso se aconseja usar readonly

  @IsString()
  @MinLength(3, { message: 'Model must be at least 3 character long' })
  readonly model: string;
}
