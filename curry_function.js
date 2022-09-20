//currtying function=>it takes a function that receive mor than one paramter and break it into a sereis of the
// unary functions therefore curryed function takes only one paramter at a time;

const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

const ans = buildSandwich('wheet');
const ans2 = ans('flour');
const ans3 = ans2('rice');

//or you can pass in a single way;
const mysandwitch = buildSandwich('Bacon')('Lettuce')('Tomato');
console.log(mysandwitch);

//another example;
const buildSand = (ing1) => (ing2) => (ing3) => `${ing1} ${ing2} ${ing3}`;
const answered = buildSand('one')('two')('three');
console.log(answered);

//Another Example of a curried function;
const curriedMultiply = (x) => (y) => x * y;
const mul = curriedMultiply(4)(4);
console.log(mul);

//Another Example;
const addCutomer =
  (fn) =>
  (...args) => {
    console.log('saving customer Info');
    return fn(...args);
  };

const processOrder =
  (fn) =>
  (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
  };

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed`);
};

completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = addCutomer(completeOrder);
completeOrder('1000');

//Require a function with a fixed number of paramters;
const curry = (fn) => {
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args); //bind creates a new function
    }
    return fn(...args);
  });
};
