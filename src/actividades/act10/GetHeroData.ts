import heroes, { Owner } from "./heroes.data";
import type { Heroe } from "./heroes.data";

export const getHeroById = (id: number): Heroe | undefined => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroByOwner = (owner: Owner): Heroe[] => {
  return heroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroById(2));
console.log(getHeroByOwner(Owner.DC));
console.log(getHeroByOwner(Owner.Marvel));

console.log(getHeroById(4));