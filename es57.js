//FILTER METHOD

const numbers=[1,2,3,4,5,6,7,8,9];

// const isEven=function(number){
//     return number%2!=0;
// }

//OR
const ans=numbers.filter(isEven=>{
    return isEven%2===0;
});
console.log(ans);