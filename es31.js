//using const for creating array

const fruits=['apple','mango']
fruits.push('apple')
console.log(fruits);
for(let fruit of fruits) {
    console.log(fruit)
}

// for in loops
for(let num in fruits) {
    console.log(fruits[num].toUpperCase())
}
//destructing the array
const mans=['fruits','apple','mango','apple','apple','apple','apple','apple','apple','apple','apple']
let[my1,my2, ...newMans]=mans
console.log(my1),
console.log(my2)
console.log(newMans)
