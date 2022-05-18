const app=()=>{
    console.log('this is main function');

    const sum=(num1, num2)=>{
        const ans=num1+num2;
        return ans;
        

    };
    const mul=(num1, num2)=>num1*num2
    console.log(sum(1,2));
    console.log(mul(1,2));
}
app();