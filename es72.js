// CALL, APPLY AND BIND;

// const ans=prompt("what is your hobby")
// const ans2=prompt("who is fav sportman")

  function myFunction(hobby, favSportman){
        console.log(this.firstName, this.age, hobby, favSportman);
    }
const user1={
    firstName:"dawa", 
    age:12,
    // about:function(hobby, favSportman){
    //     console.log(this.firstName, this.age, hobby, favSportman);
    // }
}
const user2={
    firstName:"gyalchen", 
    age:13
}

//CALL
// user1.about.call(user2, "football", "messi");

//APPLY; ==> same as call but in apply you pass it in array or list;
// myFunction.apply(user1, ["table tennis", "dong"])

//BIND; ==> it return in functions
const func=myFunction.bind(user1, "guitar", "cobain");
func();
