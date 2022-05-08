let winningNumber=19;

let guessNumber=+prompt("Guess the number");
console.log(typeof guessNumber, guessNumber);

if(guessNumber === winningNumber){
    console.log("your gues is correct");
}
else{
    console.log("you lost")
}
// (guessNumber===winningNumber)? (console.log("you won")):(console.log("you lost"));

let total=0;
let i=0;

while(i<100){
    total=total+i;
    i++;
}
console.log(total)