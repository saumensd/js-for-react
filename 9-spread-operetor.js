const numbers = [89, 35, 98, 12];
// spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];


numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);