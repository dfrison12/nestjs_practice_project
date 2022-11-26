const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          );
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args);
        };
        return wrapperFn;
      },
    };
  };
};

export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  // Implementamos el decorador para el metodo speak el cual se encarga de avisar que va a quedar deprecado y que se debe usar el metodo speak2
  @Deprecated("Most use speak2 method instead")
  speak() {
    console.log(`${this.name.toUpperCase()}, ${this.name.toUpperCase()}!!!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.speak();
