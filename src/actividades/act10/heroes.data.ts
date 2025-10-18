export interface Heroe {
  id: number;
  nombre: string;
  poder: string;
  edad: number;
  owner?: Owner;
}

export enum Owner {
  DC = "DC Comics",
  Marvel = "Marvel Comics",
}

export const heroes: Heroe[] = [
  {
    id: 1,
    nombre: "Batman",
    poder: "Dinero",
    edad: 35,
    owner: Owner.DC,
  },
  {
    id: 2,
    nombre: "Superman",
    poder: "Super fuerza",
    edad: 30,
    owner: Owner.DC,
  },
  {
    id: 3,
    nombre: "Mujer Maravilla",
    poder: "Super fuerza",
    edad: 28,
    owner: Owner.DC,
  },
  {
    id: 4,
    nombre: "Flash",
    poder: "Velocidad",
    edad: 25,
    owner: Owner.DC,
  },
  {
    id: 5,
    nombre: "Linterna Verde",
    poder: "Anillo de poder",
    edad: 27,
    owner: Owner.DC,
  },
  {
    id: 6,
    nombre: "Spiderman",
    poder: "Telaraña",
    edad: 21,
    owner: Owner.Marvel,
  },
  {
    id: 7,
    nombre: "Ironman",
    poder: "Tecnología",
    edad: 40,
    owner: Owner.Marvel,
  },
  {
    id: 8,
    nombre: "Capitán América",
    poder: "Super soldado",
    edad: 100,
    owner: Owner.Marvel,
  },
];

export default heroes;
