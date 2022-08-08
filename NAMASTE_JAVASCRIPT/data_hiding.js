//data hiding;
// function counter(){
//     var count=0;
//     function incrementCounter(){
//         count ++;
//         console.log(count )
//     }
//     return incrementCounter;
//     //write return to access the count
// }

// // console.log(count)

// //now to access it ;
// var counter1=counter();
// counter1();

//NOW USING A COUNSTRUCTOR FUNCTION FOR SCALEABLE;
function Counter() {
    var count = 0;

    //increment constructor function
    this.incremmentCounter=function() {
        count ++;
        console.log(count);
    }

    //decrement constructor  function;
    this.decrementCounter=function() {
        count --;
        console.log(count);
    }
}

var counter1=new Counter();
counter1.incremmentCounter();
counter1.decrementCounter();