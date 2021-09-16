// 3. array declare
// index, 
// length, push, 
// const numbers = [89, 35, 98, 12];
// numbers[0] = 56;

var numbers = [45, 98, 65, 72, 52, 63];
var index = numbers.indexOf(52);
var index = numbers.indexOf(159);
console.log(index);
var books = ['hablu', 'bolod', 'chouddogosti', 'battery', 'peracitamol', 'gymansium'];
var secondIndex = books[2];
console.log(secondIndex);

var friendsAge = [11, 13, 17, 12];
friendsAge.push(15);
console.log(friendsAge);

// remove an element from an array
var lastItem = friendsAge.pop();
friendsAge.pop();
console.log(lastItem);
console.log(friendsAge);

var vowels = ['a', 'e', 'i', 'o', 'u'];

// console.log(nayikas.length);
var vowelsCount = vowels.length;
console.log(vowelsCount);
//array value replace
const numbers = [89, 35, 98, 12];
numbers[0] = 56;
console.log(numbers);