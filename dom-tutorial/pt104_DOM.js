//select element using query selector;

//selecting id("#main-heading")
const mainHeading=document.querySelector("#main_heading");
console.log(mainHeading);


//selecting class;
const header=document.querySelector(".header");
console.log(header)

//selecting multiple class with same name;
//when you select a multiple class with same name it will only give you the firstr output;
//to get all use ALL  e.g: document.querySelectorALL
// const navitems=document.querySelector(".nav-items");


//to get all ;
const navitems=document.querySelectorAll(".nav-items");

console.log(navitems)