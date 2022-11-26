import axios from "axios";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

// export class Pokemon {
//   public id: number = 1;
//   public name: string = "no name";

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

//Mejor Forma de hacerlo -- Forma Corta

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.coom/${this.id}.png`;
  }

  constructor(
    public readonly id: number,
    public name: string // public imageUrl: string
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!!`);
  }

  speak() {
    console.log(`${this.name} ${this.name} says hello`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/4`
    );
    console.log(data.moves[0].version_group_details);
    return data.moves;
  }
}

export const charmander = new Pokemon(
  4,
  "Charmander"
  //   `https://pokeon.com//4.jpg`
);

charmander.scream();
charmander.speak();
charmander.getMoves();

// charmander.id = 10; // el readonly le quita la posibilidad de ser editado.
// console.log(charmander.getMoves());
