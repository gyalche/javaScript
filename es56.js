//map method

const users=[
    {
        firstName:"dawa", age:21
    },
    {
        firstName:"avishek", age:24
    }
]

// users.map(name => {
//     const ans=name.firstName;
//     console.log(ans);
// })

const userNames=users.map(name => {
    return name.age;
})
console.log(userNames);