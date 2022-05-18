//importnat array method


const numbers=[1,2,3,4,5];

function myFunction(number, index){
    // console.log("index is ", index);
    // console.log(`${number} * 2=${number*2}`);
    console.log(`index is ${index} number is ${number}`);
}

// for(let i=0; i<numbers.length; i++){
//     myFunction(numbers[i], i);
// }

//foreach (foreach is similar to call back, it takes first function as a paremeter);

// numbers.forEach(myFunction);


//USING ANNONYMOUS FUNCTIONS 
numbers.forEach(function(number, index){
    // console.log(`the  index is ${index} and the number is ${number}`)
    console.log(`the multiplication of number ${number*2} `)
})
