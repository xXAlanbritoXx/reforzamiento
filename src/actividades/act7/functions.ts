function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Alan'));

export { greet };

function getUser(){
    return {id: 'u-001', name: 'Alan'};
}

console.log(getUser());

export { getUser };

const person = () => ({ id: 'u-002', name: 'Alan_2' });
console.log(person());