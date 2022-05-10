//functions

function signSong(){
    console.log("I want to prove the sayers wrong")
}

function sum(number1, number2){
    return number1 + number2;
}

// console.log(number1,number2)

// const enter=prompt("enter a number to add");
// if(enter>10){
//     const promp=prompt("enter a number")

// const seco=prompt("enter another number");
// const ans=sum(promp, seco)
// console.log(ans);
// }

// IS EVERN OR ODD  


// function isEven(ans){
   
//     if(ans%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const pro=prompt("Enter a number")
// console.log(isEven(pro));


function findTarget(array, target){

    for(let i=0; i<array.length; i++){
        if(array[i]==target){
            return i;
        }
        else{
            return 00;
        }
       
    }
     return -1
}

    const Marray=[1,2,3,4,5];
    const find=10;
const ans=findTarget(Marray, find);
console.log(ans);


//function expressions
 const sunShine=function(){
     console.log("happy sunny holiday")
 }
 sunShine();




