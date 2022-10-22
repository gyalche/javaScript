//map is used to store key value pairs. The key value could be both primitive and non primitive types;
//weakMap is similar to map, with key differences;

//1=> the key value in weakMap should always be an object;
//2=>if therer is no references to the object, the object will be garbage collected;

let obje = { name: 'dawa' };

const newMap = new weakMap();
newMap.set(obje, { age: 1 });
