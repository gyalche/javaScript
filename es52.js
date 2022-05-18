//PARAM DESTRUCTURING

//OBJECT

const detail={
    firstName:"dawa",
    age:"24",
    num:"8765"
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.age);
// }

function printDetails({firstName,age, num}){
    console.log(firstName);
    console.log(age);
    console.log(num);
}
printDetails(detail);