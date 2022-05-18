//reduce
const userCart=[
    {productId:1, productName: 'ball', price: '1'},
    {productId:2, productName: 'bat', price: '2'},
    {productId:3, productName: 'football', price: '3'},
    {productId:4, productName: 'hockey', price: '4'},

];

const amountT=userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
    
},0)// 0 is like passing the initial value


console.log(amountT);