//shallow copy vs deep copy(clones)

//shallow copy;
//with the spread operator;
const yArray = [1, 2, 3, 4];
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);

zArray.push(11);
console.log(zArray);
console.log(yArray);

// but if there are nested array  or objects...args
yArray.push([9, 2, 3]);
const vArray = [...yArray];
console.log(vArray);
vArray[3].push(5);
console.log(vArray);
console.log(yArray);
//nested structural data types still share a reference!

//Note: Array.from() and slice() create shallow copies, too.

//When it comes to objects, what about using Object.freeze()

const scroeObj = {
  first: 23,
  second: 34,
  third: { a: 1, b: 2, c: 3 },
};

Object.freeze(scroeObj);
scroeObj.third.a = 8;
console.log(scroeObj);
//still mutates-it is a shallow freeze;

//how do we avoid this mutations?
//instead of shalow copy deep copy is needed to avoid this

//NOW MAKE A PURE FUNCTION;
const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
};

const pureScoreHistory = pureAddToScoreHistory(yArray, 1998, deepClone);
console.log(pureScoreHistory);
