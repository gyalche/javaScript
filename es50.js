// REST PARAMETER

function myFunction(a,b, ...c){
    console.log(`a value is ${a}`);
    console.log(`b value is ${b}`);
    console.log(`c value is ${c}`);


    //converting c array to object
    // const cObj={...[c]}
    // console.log(`c value is`, cObj);

}
myFunction(1,2,3,4,5,5,6,7,7,);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

const initialValue=0;
const total=array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
)
console.log(total);