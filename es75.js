const user={
    firstName:"dawa Don",
    lastName:"Goparma",
    email:"fupulamu01@gmail.com",
    age:2, 
    address:"Gokarna",
    about(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18(){
        if(this.age>=18){
            return `${this.age} "can go now"`
        }
        else{
            return `${this.age} "you are under age"`
        }
    }
    
}
const detail=user.about()
console.log(detail)

// so we can create many user statically so what we do is;
// create a function that will take input from user which will create object;
// add key value pair;
//return the object;

// function about(){
//     return `${this.firstName} is ${this.age} years old`
// }

// function is18(){
//     return `${this.age}`
// }
function createUser(firstName, lastName, email, age, address) {
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address
    user.about=function about(){
    return `${this.firstName} is ${this.age} years old`
}
    user.is18=function is18(){
    return this.age>=18;
}

    return user;
}
const user1=createUser("dawa", "sherpa", "dawa@gmail.com", 15, "gokarna");
console.log(user1)

const age=user1.is18();
console.log(age)