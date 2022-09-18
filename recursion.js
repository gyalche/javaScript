//Fibonacci sequence;

//Without recursion:
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

// console.log(fibonacci(12));

//WITH RECURSION;
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
};

//with recursion;
const fibPos = (pos) => (pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2));
// console.log(fibPos(8));

//REAL-LIFE EXAMPLE;

//1) Continuation Token from API

const getArtistName = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach((key) => {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].forEach((artist) => {
        arr.push(artist);
      });
    }
    getArtistName(dataObj[key], arr);
  });
  return arr;
};

console.log(getArtistName(artistsByGenre));
