//CALLBACK FUNCTION
//it is a function which is called by another function
//and it takes the function as a paremeter


var ans=prompt("enter the ans");

function one(a){
// console.log(a);
console.log("this is my first function")
    a(ans);
}

function two(haha){
    console.log("this is in two function");
    console.log(`i am giving my own words ${haha}`)
}


one(two)