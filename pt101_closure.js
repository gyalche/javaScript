function func(){
    let counter=0;
    return function(){
        if(counter<1){
            console.log("HI this is your first call to me ")
            counter++;
        }else{
            console.log("I have already been called recently ")
        }
    }
}
const myFunc=func();
myFunc();
myFunc();

// close with i;
function x() {
    for(var i=1; i<=5; i++){
    function close(x) {
            
        setTimeout(function(){
            console.log(x)
        },x*1000 )
    }
    close(i)
    
    }
}
x();




