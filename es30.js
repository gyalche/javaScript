//for loop in array
let fruit=["apple", 'mango', 'orange', 'bananna']

console.log(fruit.length),
console.log(fruit[fruit.length-1]);


// for(let i=0; i<fruit.length; i++) {
//     let am=fruit[i];
    
//     console.log(am);
// }
let two=[];
for(let i=0; i<fruit.length; i++) {
    // console.log(fruit[i]);
    two.push(fruit[i].toUpperCase());
}
console.log(two)
