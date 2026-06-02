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

arr.map();
arr.filter();
arr.reduce();
arr.find();
arr.sort();
arr.forEach();
