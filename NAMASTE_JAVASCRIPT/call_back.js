//what is callback function;

function x(y) {
    console.log("x")
    y();
}
x(function y(){
    console.log("y")

})

//how calback is used in a asynchronous ;
setTimeout(function() {
    console.log("timer")
}, 5000);

//crete ac closure;
function attachEventListeners(){
    let count=0;
    document.getElementById("clickMe").
    addEventListener("click", function xyz(){
        console.log("Button clicked", count++);
    })
}
attachEventListeners();

//Garbage collection and removeElventlistener;
