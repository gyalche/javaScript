const persons = {
  firstname: 'dawa',
  lastname: 'sherpa',

  fullName: function () {
    console.log(this.firstname + ' ' + this.lastname + 'from ' + this.hometown);
  },
};

const fullName = function (hometown) {
  console.log(this.firstname + ' ' + this.lastname + ' from ' + hometown);
};

const person1 = {
  firstname: 'gyalchen',
  lastname: 'goparma',
};

//function borrow;
// persons.fullName.call(person1);
//it invokes direclty
fullName.call(person1, 'gokarna');

//apply;=> the only differnce is the way we pass te argumnet
// we pass the paramter in an array list[];
fullName.apply(persons, ['taplejung']);

//blind;=>the only diffrence is bind method bind the method fullName and returns the copy of the original
//and return a function;
//it can be invoked later, since it keeps the copy
const ansBind = fullName.bind(person1, 'gokarna');
console.log(ansBind);
ansBind();
