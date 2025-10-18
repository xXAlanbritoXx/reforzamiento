// 1. Crear un array
const characterNames = ['Leonel Messi', 'Cristiano Ronaldo', 'Neymar Jr.'];

// 2. Desestructurar characterNames
const [data1, data2, data3] = characterNames;
console.log({ data1, data2, data3 });

// 3. Obtener el dato de una sola propiedad, ignorando las demás
const [,, neimar] = characterNames;
console.log({ neimar });

// Fase 2. Crear una función que retorne un array.
// 1. Crear la función2
const returnsArrayFn = () => {
  return ['ABC', 123] as const; // Agregamos const para evitar cambios en el array.
};

// 2. Invocar la función e imprimir los valores retornados
const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers);

// Fase 3. Tarea: Implementar useState.
const useState = (initialValue: string) => {
  let value = initialValue;

  const setValue = (newValue: string) => {
    console.log(newValue);
    value = newValue; // Aunque no se usa en este ejemplo, se incluye para completar la funcionalidad
  };

  return [value, setValue] as const;
};

// Ejemplo de uso esperado:
const [name, setName] = useState('Roberto carlos');
console.log(name); // Roberto carlos

setName('Ronaldiño Gaucho'); // Imprime "Ronaldiño Gaucho"
