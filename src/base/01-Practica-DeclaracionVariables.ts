{
const a = 1; // solo aquí
let b = 2; // solo aquí
var c = 3; // ¡sale del bloque!
}
console.log(typeof a); // ReferenceError
console.log(typeof b); // ReferenceError
console.log(c); // 3  3 ← var “escapa” del bloque

console.log(x); // ReferenceError (TDZ)
let x = 10;
console.log(y); // undefined (por var hoisting, pero es mala idea)
var y = 10;

const user = { id: 1, name: 'Ana' };
user.name = 'Ana María'; // Si mutación permitida
// user = { id: 2 } // No puedes reasignar la referencia
const nums = [1, 2, 3];
nums.push(4); // Si mutación
// nums = [] // No puedes reasignar

const a = 1;
// const a = 2; // redeclaración
let b = 1;
b = 2; // reasignación
// let b = 3; // redeclaración en el mismo bloque
var c = 1;
var c = 2; // permitido con var (riesgo de pisar valores)

for (var i = 0; i < 3; i++) {
setTimeout(() => console.log('var i =', i), 0); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
setTimeout(() => console.log('let j =', j), 0); // 0, 1, 2
}