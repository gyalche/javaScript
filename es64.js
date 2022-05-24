//SETS
// sets is iterable;
// in sets duplicate is not allowed;
// order is not guranteed;
//no index-based access but a value bassed access;

// in set you can add different array with same value;

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(["one", "two", "three"]);
// numbers.add(["one", "two", "three"]);

// // to check if particular value exits or not
// if(numbers.has(10)){
//     console.log("3 is present");
// }else{
//     console.log("It is not present");
// }

// //since set is iterable we can use for loop;
// for(let num of numbers){
//     console.log(num);
// }

// console.log(numbers);

// REAL CASE USE OF SETS
// we usually use set when we have unique value;
// no duplicate value;

const myArray = [1,2,3,4,2,3,4];

const uniqueElement=new Set(myArray);

let length = 0;
for(let element of uniqueElement){
    length++;
}
console.log(uniqueElement);
console.log(length);