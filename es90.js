//GETTERS AND SETTERS
class Person {
  constructor(fName, Lname, age) {
    this.fName = fName;
    this.Lname = Lname;
    this.age = age;
  }
  get fullName() {
    return `${this.fName} ${this.Lname}`;
  }
  setName(fName, Lname) {
    this.fName = fName;
    this.Lname = Lname;
  }
  set fullName(fullName) {
    //destructures
    const [fName, Lname] = fullName.split(' '); //" ": it breaks from the space
    this.fName = fName;
    this.Lname = Lname;
  }
}

const person1 = new Person('Dawa', 'Sherpa', 25);
// console.log(person1.fullName);
// person1.setName("gyalchen", "goparma");
// console.log(person1.fName, person1.Lname);

person1.fullName = 'Gyalchen Goparma';
console.log(person1);
