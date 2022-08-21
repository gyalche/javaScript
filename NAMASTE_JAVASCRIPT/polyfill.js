let nameInfo = {
  firstName: 'dawa',
  lastName: 'Sherpa',
  age: 26,
};

let printName = function () {
  console.log(this.firstName + ' ' + this.lastName + ' age ' + this.age);
};

//this is a tradational bind method;
const myName = printName.bind(name);
myName();

//now we will write our own bind method;
Function.prototype.mybind = function (...args) {
  return function () {
    this.call(args[0]);
  };
};

const myName2 = printName.mybind(nameInfo);
myName2();
