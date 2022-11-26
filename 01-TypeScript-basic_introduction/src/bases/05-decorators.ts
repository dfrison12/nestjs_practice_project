class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`NO QUIERO!`);
  }

  speak() {
    console.log(`NO QUIERO HABLAR`);
  }
}

// Un Decorador es una funcion que tiene acceso a la definicion de una clase, puede tener acceso a la deficion del metodo, a los parametros, etc.
// Los Decoradores se ejecutan cuando se define la clase, no cuando se instancia, por lo que podemos reescribir los metodos, modificarla, expandirla, etc.
const MyDecorator = () => {
  return (target: Function) => {
    //console.log(target);
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name.toUpperCase()}, ${this.name.toUpperCase()}!!!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.scream();
charmander.speak();
