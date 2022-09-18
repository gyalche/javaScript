class Car {
  constructor(name, model, weight, color) {
    (this.name = name),
      (this.model = model),
      (this.weight = weight),
      (this.color = color);
  }

  drive(){
      
  }

}

const ferrari = new Car('ferrari', '250', 250, 'red');
console.log(ferrari);
