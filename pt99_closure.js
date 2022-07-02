//square
function myFunction(power){
    return function(number){
        return number ** power;
    }
}
const square=myFunction(3);
const ans=square(2);
//for cube
const cube=myFunction(3);
const ans2=cube(3);
console.log(ans)
console.log(ans2)