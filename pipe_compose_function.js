//Functional programming;

//higher order  function is any function whick takes a function as an argument, returns a function or both;

//oftern user pipe and compose= higher order function;

//Here is how a "compose" function works;

//start with small unary (one paramter) functions;

const add = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiply5 = (x) => x * 5;

//notice how function executes frm inside to outside & right to left;
const result = multiply5(subtract1(add(4)));
console.log(result);

//The above is NOT a compose function;
//lets make a compose function;
const compose =
  (...fns) =>
  (val) =>
    fns.reduceRight((prev, fn) => fn(prev), val);

const comResult = compose(multiply5, subtract1, add)(4);
console.log(comResult);

//Pipe function will ready from left to right, not right to left like compose;
//it is the same except uses reduce insted of reduceRight;

const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => fn(prev), val);

const pipeResult = pipe(add, subtract1, multiply5)(5);

console.log(pipeResult);

const words = 'don don don don dond don don don don don';

// const count = words.split(' ');
// console.log(count.length);

const splitOnSpace = (string) => string.split(' ');
const count = (array) => array.length;

const wordCount = pipe(splitOnSpace, count);
console.log(wordCount(words));

//Combine processes: Check for palindrome;

const pal1 = 'taco cat';
const pal2 = 'UFO tofu';
const pal3 = 'Dave';
