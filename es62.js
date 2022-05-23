//SOME METHODS
const numbers=[1,2,3,5,7,9];

// even if one condition is satisfied it will return true
const ans=numbers.some((number)=>{
    return number%2===0;
})

console.log(ans);

const products=[
    {productId:1, productName:"food", price:1234 },
    {productId:2, productName:"ball", price:134 },
    {productId:3, productName:"clothes", price:654 },
    {productId:4, productName:"shoe", price:234 },

]

const ha=products.some((product)=>{
    return product.price>1235;
})
console.log(ha);