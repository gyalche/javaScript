//set is a collection of unique and ordered elements, just like set, weakSet is also a collection of
//unique and ordered elements with some key differences;

//1=> weakSet contains only objects and no other types;
//2=>if the object inside the weakset does not have a reference, it will be garbage collected.
//3=> weakSet has three methods add(), delete() and has()

let obj1 = {
  message: 'Hellow dawa',
};

const newSet = new weakSet([obj1]);
console.log(newSet.has(obj1));
