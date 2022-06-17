const user1={
    key1:"value1",
    key2:"value2",
}

// there is a new way to creata object which takes the referese or address of another object e.g;
const user2=Object.create(user1);
user2.key3="value3";

console.log(user2.key1);

//__proto__
// in official ecmascript documentation
//[[prototype]]
// but __proto__ and [[prototype]] is same thing but prototype is different;

console.log(user2.__proto__);
