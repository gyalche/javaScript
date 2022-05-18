// function sum(a,b){
//     if(typeof b ==="undefined"){
//         b=1;
//     }
//     return a+b;
// }

//NOW SINCE THE JS ES6 HAS PROVIDED THE DEFAULT PARAMETERS IT HAS BECOME EASYLY

function sum(a,b=0){
    return a+b;
}
const ans=sum(5);
console.log(ans);

// const array=[1,2,3,4,5];
// const deArray={...[array]}
// console.log(deArray);

// key="number";
// const haha={
//     'from':'dawa',
//     school:'gyanoday',


// }
// haha.email="gmail.com";
// haha[key]="98765433221"
// console.log(haha);