import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();
  if (name === 0) return [];

  return heroes.filter((heroe) => heroe.superhero.toLocaleLowerCase().includes(name));
};
