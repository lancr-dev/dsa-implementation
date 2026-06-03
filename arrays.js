const arr = [1, 2, 3, 4, 5];

arr.push(); // adds element(s) to the end
arr.pop(); // removes the last element

arr.shift(); // removes the first element.
arr.unshift(); // adds element(s) to the beginning

arr.slice(0, 0); // slice(start, end) returns a new array containing elements from start up to (but not including) end
arr.splice(0, 0); // array.splice(startIndex, deleteCount) | array.splice(index, 0, value) where to insert, don't remove anything, value(s) to add

arr.indexOf(); // search and return the first matching index (for duplicate array values)
arr.lastIndexOf(); // search and return the last matching index (for duplicate array values)

arr.includes(); // check if the value is exists in array (returns true or false)

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

// example when creating UI elements (common in React):
const items = ['Apple', 'Banana', 'Orange'];
const listItems = items.map((item) => <li key={item}>{item}</li>);

const names = users.map((user) => user.name);
console.log(names);

arr.forEach(); // used for logging or debuggine
// example:
const thirdArray = [1, 2, 3, 4, 5];
thirdArray.forEach((num) => {
  console.log(num);
});

arr.filter(); // is used when you want to keep only the items that match a condition.
const fourthArray = [1, 2, 3, 4, 5];
const evens = fourthArray.filter((num) => num % 2 === 0);
console.log(evens);

arr.reduce();
arr.find();
arr.sort();
