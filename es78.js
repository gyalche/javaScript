
const userMethods={
        about:function about(){
            return `${this.firstName} is ${this.age} years old`
        },
        is18:function is18(){
            return this.age>=18;
        }
}

function createUser(firstName, lastName, email, age, address) {
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;

    return user;
}
const user1=createUser("dawa", "sherpa", "dawa@gmail.com", 25, "gokarna");
const user2=createUser("kanca", "sherpa", "dawa@gmail.com", 9, "gokarna");
const user3=createUser("thsring", "sherpa", "dawa@gmail.com", 30, "gokarna");

console.log(user1.about())
console.log(user2.about())
console.log(user3.about())


