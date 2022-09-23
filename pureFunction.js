//Same input always gives the same output;

//Impure example:
let x = 1;
const increment = () => (x += 1);
console.log(increment()); //it mutates the x value;
console.log(x); // the value of x is now 2;

//Impure example 2;
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
  array.push(data);
  return array;
};
console.log(addToArray(myArray, 4));
console.log(myArray);

//Refactored Example 1:
const pureIncrement = (num) => (num += 1);
console.log(pureIncrement(x));
console.log(x);

//Refactored Example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);

//Note: If you have a nested data structure, it will not work, it will mutates
// for that we have to user deep copy;

// These common higher  order function are pure functions;

