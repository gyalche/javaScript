//example 1;
//using closure to log how many times a function is called;

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

const callCounter = (fn) => {
  let count = 0;
  return (...args) => {
    //wrtie to logs, console, db, etc..;
    console.log(`Sum has been called ${(count += 1)} times`);
    return fn(...args);
  };
};

sum = callCounter(sum);
console.log(sum(1, 2, 3, 4));

//Example 2;
//Check for valid data dand number of params;

let rectangleArea = (length, width) => {
  return length * width;
};

const countParams = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorrect number of parameter for ${fn.name}`);
    }
    return fn(...params);
  };
};

const requireIntegers = (fn) => {
  return (...params) => {
    params.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`Params for ${fn.name} must be an integer`);
      }
    });
    return fn(...params);
  };
};

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20, 30));

//EXAMPLE 3;
// DECORATING AN ASYNCE API CALL FUNCTION;
//TIME DATA REQUEST DUURING DEVELOPMENT;

let requestData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const dataResponseTime = (fn) => {
  return async (url) => {
    console.time('fn');
    const data = await fn(url);
    console.timeEnd('fn');
    return data;
  };
};

const myTestFunction = async () => {
  requestData = dataResponseTime(requestData);
  const data = await requestData('https://jsonplaceholder.typicode.com/posts');
  console.log(data);
};
myTestFunction();
