//EVERY METHOD

// it will written true or false;

const userCart=[
    {productId:1, productName:'mobile'},
    {productId:2, productName:'samsung'},
    {productId:3, productName:'iphone'},
    {productId:4, productName:'nokia'},

]
const ans=userCart.every((eve)=>{
    return eve.productName.length>=5
})
console.log(ans);