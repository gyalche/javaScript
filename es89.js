class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}

class Dog extends Animals {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  run() {
    return `${this.name} runs at the speed of ${this.speed}`;
  }
}
// const shylock=new Dog("German sherpard", 4);

const germanShepard = new Dog('Shylock', 4, 45);
console.log(germanShepard.run());
console.log(germanShepard.eat());
