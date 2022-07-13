// const navItem=document.getElementsByClassName("nav-items");
//get element by tag name;
const navItem=document.getElementsByTagName("a")
console.log(navItem.length)

// for(let i=0; i<navItem.length; i++) {
//     // console.log(navItem[i]);
//     const navItems=navItem[i];
//     navItems.style.backgroundColor="none";
//     navItems.style.color="green"
//     navItems.style.fontWeight="bold"

// }

// for(let navItems of navItem){
//     // console.log(navItems)
//     navItems.style.backgroundColor="none";
//     navItems.style.color="green"
//     navItems.style.fontWeight="bold"
// }

//converting innto array;
// const cary=Array.from(navItem)
// console.log(Array.isArray(cary))