const arr = [1, 2, 3, 4, 5];

// PUSH & POP
arr.push(); // adds element(s) to the end
arr.pop(); // removes the last element

// SHIFT & UNSHIFT
arr.shift(); // removes the first element.
arr.unshift(); // adds element(s) to the beginning

// SLICE & SPLICE
arr.slice(0, 0); // slice(start, end) returns a new array containing elements from start up to (but not including) the end
arr.splice(0, 0); // array.splice(startIndex, deleteCount) | array.splice(index, 0, value) where to insert, don't remove anything, value(s) to add

// INDEX OF & LAST INDEX OF
arr.indexOf(); // search and return the first matching index (for duplicate array values)
arr.lastIndexOf(); // search and return the last matching index (for duplicate array values)

// INCLUDES
arr.includes(); // check if the value is exists in array (returns true or false)

// MAP
arr.map(); // when you want to transform every item in an array and get a new array back.
// example:
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOfTwo = secondArray.map((num) => num * 2);
console.log(multiplesOfTwo);

// example when exracting a property from objects:
const users = [
  { name: 'Lance', age: 18 },
  { name: 'John', age: 30 },
];

const names = users.map((user) => user.name);
console.log(names);

// example when creating UI elements (common in React):
const items = ['Apple', 'Banana', 'Orange'];
const listItems = items.map((item) => <li key={item}>{item}</li>);

// FOR EACH
arr.forEach(); // used for logging or debuggine
// example:
const thirdArray = [1, 2, 3, 4, 5];
thirdArray.forEach((num) => {
  console.log(num);
});

// FILTER
arr.filter(); // is used when you want to keep only the items that match a condition.
const fourthArray = [1, 2, 3, 4, 5];
const evens = fourthArray.filter((num) => num % 2 === 0);
console.log(evens);

// FIND
arr.find(); // use when you want to retrieve the first element that matches a condition.
// example:
const fifthArray = [1, 2, 3, 4, 5];
const findResult = fifthArray.find((num) => num % 2 === 0);
console.log(findResult);

// example in applications:
const applicationUsers = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Lance' },
  { id: 3, name: 'Kyle' },
];

const username = applicationUsers.find((u) => u.id === 2);
console.log(username);

// SORT
arr.sort(); // used to reorder the elements of an array.
// examples:
const shoes = ['nike', 'li-ning', 'jordan'];
shoes.sort();
console.log(shoes);

const notSortedNumbers = [13, 78, 67, 20, 22, 33];
const sortedNumbers = notSortedNumbers.sort((a, b) => a - b); // for descending .sort((a, b) => b - a)
console.log(sortedNumbers);

// for real-world use case:
const users = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);

// sort objects by name:
users.sort((a, b) => a.name.localeCompare(b.name));

arr.reduce();
