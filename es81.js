function hello(){
    console.log("this is hello")
}
//javascript function===>function + object + object;

// console.log(hello.name)
//you can add your own properties
// hello.isMyHello="you are learnig function object"
// console.log(hello.isMyHello)

// oly function provides prototype properties
// console.log(hello.prototype)

hello.prototype.abc={
    1:"dawa", age:"22"
}
console.log(hello.prototype.abc.age);

