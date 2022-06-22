//class keyword
class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor being called");
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return 'you got that smile that only haven can make'
    }
}

const user1=new CreateUser("dawa", "sherpa", "dawa@gmail.com", 25, "gokarna");
const user2=new CreateUser("kanca", "sherpa", "dawa@gmail.com", 9, "gokarna");
const user3=new CreateUser("thsring", "sherpa", "dawa@gmail.com", 30, "gokarna");

// console.log(user1.sing());
// console.log(user1.is18());
console.log(Object.getPrototypeOf(user1))
