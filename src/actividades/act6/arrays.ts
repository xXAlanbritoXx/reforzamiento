const myArray: number[] = [1, 2, 3, 4, 5];

for(const num of myArray) {
  console.log(num);
}

myArray.splice(6); 
myArray.unshift(0);
myArray.push(6);


for(const num of myArray) {
  console.log(num);
}

const myArray2: number[] = [...myArray];
console.log(myArray2);

myArray2.push(7);
console.log(myArray2);

console.log(myArray);

const numberA: number[] = [1, 2, 4];
console.log(numberA);
const numberB: Array<number> = [1,2,3,4];
console.log(numberB);

const tags: string[] = ['javascript', 'typescript', 'nodejs'];
console.log(tags);
const mixed: (string | number)[] = [1, 'javascript', 2, 'typescript'];
console.log(mixed); 

const base: ReadonlyArray<number> = [40,100,20 ,40 ,55];
console.log(base);

const sortedCopy = [...base].sort();
console.log('Base ',base);
console.log('Sorted ',sortedCopy);