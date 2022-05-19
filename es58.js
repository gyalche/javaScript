//reduce
const userCart=[
    {productId:1, productName: 'ball', price: 1},
    {productId:2, productName: 'bat', price: 2},
    {productId:3, productName: 'football', price: 3},
    {productId:4, productName: 'hockey', price: 4},

];


const amountT=userCart.reduce((totalPrice, currentProduct)=>{
  const totl= totalPrice + currentProduct.price;
  return (totl);
   
    
},0);
console.log(amountT);// 0 is like passing the initial value




const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array){
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);
