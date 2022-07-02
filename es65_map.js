//Maps

//map is an iterable;
// it stores data in ordered fashion;

//stores key value pair;
//duplicate keys are not allowed like objects;

//DIFFERENCE BETWEEN MAPS AND OBJECTS;
//objects can only have string or symbol as key;
//in maps you can use anythings as key like array, number, string

// object literals;

// const person={
//     1:"dawa", 
//     age:"24",

// }

// for (let key in person){
//     console.log(typeof key)
// }

const person = new Map();
person.set('firstName', 'John');
person.set('lastName', 'sherpa');
person.set(1, 'one');

// console.log(person.get('firstName'));

// using for of loop;

// for(let key of person){
//     console.log(Array.isArray(key));
// }
//destructing value;

// for(let [key, value] of person){
//     console.log(key, value); 
// }

const persons1={
    id:1, 
    productName:"pants"
}

const person2={
    id:2, 
    productName:"shirts"
}

const extraInfo=new Map();
extraInfo.set(persons1,{quality:"textile", gender:"male"});
extraInfo.set(person2,{quality:"whollen", gender:"female"});


console.log(extraInfo.get(persons1).gender);
console.log(extraInfo.get(person2).quality);


