import { PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }
  
  // A constructor function is a special method for creating and initializing an object created within a class.

  constructor(
    public readonly id: number,
    public name: string, // Todo: inyectar dependencias
    private readonly http: PokeApiAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const { data } = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4"); ya no necesitamos axios porque ahora lo inyectamos en el constructor usando el adapter
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );

    return data.moves;
  }
}

const pokeFetch = new PokeApiFetchAdapter(); // podemos usar cualquier de las dos dependencias gracias al adapter y su interfaz
const pokeAxios = new PokeApiAdapter(); //se crea la instancia del adapter para poder usarlo en el constructor de la clase Pokemon y asi poder inyectar la dependencia http

export const charmander = new Pokemon(4, "Charmander", pokeAxios); // al crear una instancia del pokemon se ejecuta el constructor y se le pasa el id y el nombre como argumentos y se asignan a las propiedades del objeto que se esta creando (this.id = id; this.name = name;)

charmander.getMoves();
