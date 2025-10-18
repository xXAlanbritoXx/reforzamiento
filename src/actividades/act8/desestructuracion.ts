
// 1. Crear un objeto denominado person
const person = {
  name: 'Tony Stark',
  age: 42,
  key: 'Iroman'
};

// 2. Desestructurar person para almacenar sus propiedades en constantes
const { name, age, key } = person;
console.log({ name, age, key }); // Imprime como un objeto
console.log(name, age, key); // Imprime solo el valor de las propiedades.

// 3. Usar alias como nombre para almacenar el valor de las propiedades.
const { name: nameHero, age: ageHero, key: keyHero } = person; // Alias de propiedades
console.log({ nameHero, ageHero, keyHero }); // Imprime como un objeto

// 4. Crear una nueva interface denominado Hero
interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

// 5. Crear una función denominada useContext.
const useContext = ({ name, age, key, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age
    },
    rank
  }
}

// 7. Invoca la función useContext() utilizando el objeto person como parámetro y después imprime lo retornado.
const context = useContext(person);
console.log(context);

// 8. Ahora desestructura el objeto obtenido de la llamada de useContext:
const { keyName, user, rank } = useContext(person);
console.log({ keyName, user, rank });

// 9. A continuación, desestructura el objeto user y cambiar los nombres de las propiedades por alias.
const { name: nameH, age: ageH } = user;
console.log({ keyName, nameH, ageH, rank });