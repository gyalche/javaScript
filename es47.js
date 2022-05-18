//LEXICAL SCOPE

// var a = 10; // variable a assigned to 10

// var func = function (){ // outermost function
//     var b = 20;
//     console.log("a and b is accessible (outer):", a, b);
//     var innerFunc= function (){ // innermost function
//         var c = 30;
//         console.log("a and b and c is accessible (innner):", a, b, c);
//     }
//     innerFunc();
//     return;
// }
// func(); // invoke function func 
// console.log("only a is accessible (global):", a);

let a=10
function myFunction() {
    const var1="dawa mams";

    //this is my function expressions
    const secondFun=function (){
        // const var1="dawa sherpa is a don of gokarna"
        console.log('this is my secondFunction', var1, a);
    }
    console.log(var1);
    secondFun(); 
}

myFunction(); // invoke function

console.log(`onley a is accessible globally`, a)