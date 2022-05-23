//FIND METHOD

const users=[
    {userId:1, userName:"dawa"},
    {userId:2, userName:"kancha"},
    {userId:3, userName:"tika"},
    {userId:4, userName:"nupu"},
    {userId:5, userName:"tshering"},

];

const ans=users.slice(0).find((user)=>{
   return user.userName.length>2
})
console.log(ans);