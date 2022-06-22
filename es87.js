// subclass and parent

class Animals{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }
}

class Dog extends Animals{

}
const shylock=new Dog("German sherpard", 4);

console.log(shylock.isCute())