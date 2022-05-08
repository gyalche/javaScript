//how to clone array

let array1=["dawa",'gyalchen','goparma']
// let array2=array1.slice(0);
// let array2=[].concat(array1);
// using spread operator
let array2=[... array1].concat('dawa,','goodboy')
console.log(array1===array2);
array1.push('sherpa');

//concating in array 2
console.log(array1);
console.log(array2);