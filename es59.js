//SORT
 
const number=[5,9,3,2,1];

number.sort((a,b)=>{
    // return a-b; //ascending order 

    //descending order
    return b-a;
});
console.log(number);

const products=[
    {productId:1, productName:"food", price:1234 },
    {productId:2, productName:"ball", price:134 },
    {productId:3, productName:"clothes", price:654 },
    {productId:4, productName:"shoe", price:234 },

]
//LowToHigh
products.sort((a,b)=>{
    return a.price - b.price;
})
console.log(products);

//HighToLow
const highToLow=products.slice(0).sort((a, b)=>{
    return b.price-a.price;
});
console.log(highToLow);