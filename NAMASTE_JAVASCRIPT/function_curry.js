//Currying is when you break down a function that takes multiple arguments into a series of functions
//that each take only one argument. Here's an example in JavaScript:

//eg;
// let multiply = function (x, y) {
//   console.log(x * y);
// };

// const mul = multiply.bind(this, 4);
// mul(5);

//BY USING FUNCTION CLOSURE;
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

const ans = multiply(10);
const result = ans(10);
result();
