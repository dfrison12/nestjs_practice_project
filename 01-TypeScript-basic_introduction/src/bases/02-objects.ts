export const pokemonIds = [1, 20, 30, 40, 50];

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  age: 2,
};

export const charmander: Pokemon = {
  id: 4,
  name: "Charmander",
  age: 1,
};

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasur, charmander);
console.log(pokemons);
