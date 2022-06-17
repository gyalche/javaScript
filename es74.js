const user={
    firstName:"dawa", 
    age:"24",
    about:function(){
        console.log(this.firstName, this.age)
    }
}
//dont do this mistake
// const myFun=user.about;//=> 
// myFun(); //=> it will give you an undefined because you are calling a function and this will be windows object

// do this; bind
const myFun=user.about.bind(user);
myFun();

// call
const ha=user.about.call(user);
ha();

// apply
const ap=user.about.apply(user);
ap();