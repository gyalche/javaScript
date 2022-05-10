//spread operatio in objects

const first={
    name: 'first',
    second: 'second',
}

const second={
    name:'name',
    third: 'third',
    fourth: 'fourth',
}

const newName={ ...second, ...first }
console.log(newName);


//Key value pairs
//this is now you covert array to objects
const arrum=[1,23,4,5,6,6]
const keyValues={...[arrum]}
console.log(keyValues)