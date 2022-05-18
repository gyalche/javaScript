//BLOCK SCOPE VS FUNCTIONAL SCOPE

//let and const are block scope
//var is functional scope

{
    var is=prompt("Enter a number to find out even or odd numbers");
    if(is%2===0){
        const ans=console.log(`the number is even ${is}`);
        
    }
    else{
        console.log('the ans is odd');
    }
}
console.log(is);
var firstName="dawa";
{
    var firstName="sherpa";

}
console.log(firstName);
