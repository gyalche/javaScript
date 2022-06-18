//NEW KEYWORD  
// 1. It cerate an empty object this={}
//2. return{}


// this is a constructor function;
function CreateUser(firstName, lastName, email, age, address) {
    // const user={};
    // const user=Object.create(createUser.prototype);
    
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age
    this.email=email;
    this.address=address;
    // user.about=userMethods.about;
    // user.is18=userMethods.is18;

    
}
CreateUser.prototype.about=function(){
            return `${this.firstName} is ${this.age} years old`
}
CreateUser.prototype.is18=function(){
    return this.age>=18;
}
CreateUser.prototype.sing=function(){
    return "bir ko santa sahid ko ragar lawrae ko nesane";
}

const user1=new CreateUser("dawa", "sherpa", "dawa@gmail.com", 25, "gokarna");
const user2=new CreateUser("kanca", "sherpa", "dawa@gmail.com", 9, "gokarna");
const user3=new CreateUser("thsring", "sherpa", "dawa@gmail.com", 30, "gokarna");

console.log(user1)
console.log(user1.about())
console.log(user1.is18())