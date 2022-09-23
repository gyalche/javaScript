class Pizza {
  constructor(size, crust, sauce) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = [];
  }
  prepare() {
    console.log('preparing');
  }
  bake() {
    console.log('baking');
  }
  ready() {
    console.log('Ready');
  }
}

//use composition for methods;
const prepare = () => {
  return {
    prepare: () => console.log('Preparing...'),
  };
};
const bake = () => {
  return {
    bake: () => console.log('Baking...'),
  };
};

const toss = () => {
  return {
    toss: () => console.log('Tossing'),
  };
};
const ready = () => {
  return {
    ready: () => console.log('Ready!'),
  };
};
const stuff = () => {
  return {
    stuff: () => console.log('Stuff!'),
  };
};
const butter = () => {
  return {
    butter: () => console.log('Butter!'),
  };
};

const createPizza = (size, crust, sauce) => {
  const pizza = {
    size: size,
    crust: crust,
    sauce: sauce,
    toppings: [],
  };
  return {
    ...pizza,
    ...prepare(),
    ...bake(),
    ...ready(),
  };
};
const createSalad = (size, dressing) => {
  return {
    size: size,
    dressing: dressing,
    ...prepare(),
    ...toss(),
    ...ready(),
  };
};

//Compare to ES6 class syntax with extends and supre()

const createStuffedButterdCrustPizza = (pizza) => {
  return {
    ...pizza,
    ...stuff(),
    ...butter(),
  };
};

const anotherPizza = createPizza('medium', 'thin', 'original');
const somebodysPizza = createStuffedButterdCrustPizza(anotherPizza);

const somebodysSalad = createSalad('side', 'ranch');

somebodysPizza.bake();
somebodysSalad.stuff();

//what about topping?
const addTopping = (pizza, topping) => {
  pizza.toppings.push(topping);
  return pizza;
};

const myPizza = createPizza('one', 'two', 'three');
console.log(myPizza);
console.log(addTopping(myPizza, 'don'));

//how to avoid mutations;
//we need to clone the pizza object to avoid mutations;

const shallowPizzaClone = (fn) => {
  return (obj, array) => {
    const newObje = { ...obj };
    return fn(newObje, array);
  };
};

let addToppings = (pizza, toppings) => {
  pizza.toppings = [...pizza.toppings, ...toppings];
  return pizza;
};

//Decorate the addToppings function with shallowPizzaClone;
addToppings = shallowPizzaClone(addToppings);
const mypizza = createPizza('one', 'two', 'three');
const mypizzaWithToppings = addToppings(mypizza, ['1', '2', '3']);
console.log(mypizzaWithToppings);
console.log(mypizza);
console.log(mypizzaWithToppings === mypizza);
