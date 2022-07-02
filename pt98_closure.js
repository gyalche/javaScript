//CLOSURE

//function can return function;

// function outerFunction(){
//     function innerFunction(){
//         console.log("this is a inner function")
//     }
//     return innerFunction;
// }

// const ans=outerFunction();
// // console.log(ans)
// ans()

//   BASIC OF CLOSURE;
//what is closure?
//=> it is a function bind together with is lexical environmnet is called closure
// or a function along with its lexical scope forms a closure;

//e.g; basic example
// function x() {
//     var a=7;
//     function y(){
//         console.log((a));
//     }
//     return y;
// }
// const z=x();
// console.log(z)
// z();
//outupt will be 7;

//second example;
// function z() {
//     var b=100;
//     function x() {
//         let a=200;
//          function y() {
//         console.log(a, b)
//         }
//          y();
//     }
//      x();
   
// }
// z();

// another example of closure;

function hello(x) {
    const a="dawa";
    const b="sherpa";

    return function(){
        console.log(a, b, x)
    }
}
const ans=hello("goparma");
console.log(ans)






