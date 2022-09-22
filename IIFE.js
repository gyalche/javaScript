//IIFE=>Immediately-Invoked Function Expression;

//with anonymous function;
(() => {
  //do stuff here;
})();

//with function expression;
(function () {
  //do stuff here;
})();

//with a function name(allows for recursion)
(function myIIFE() {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log('finished');
})((num = 0));

//Reason 3) The module pattern;
const Score = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

Score.increment();
console.log(Score.current());
Score.increment();

console.log(Score.current());
Score.reset();
console.log(Score.current());
