//METHODS
//==> methods is a function inside object;

const info=function(){
    console.log(`the firstName is ${this.firstName} and age is ${this.age}`)
}
const persons={
    firstName:"dawa",
    age:8,
    about:info
    
}
const persons1={
    firstName:"gyalchen",
    age:12,
    about:info
}

console.log(persons1?.about())
console.log(persons.about())