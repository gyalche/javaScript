//understand callback;
// function myFunc(another) {
//   console.log('This is my 1st function');
//   another();
// }
// function myFunc2() {
//   console.log('this is my 2nd function');
// }

// myFunc(myFunc2);

// function getTwoNumber(number1, number2, callback) {
//   console.log(number1, number2);
//   callback(number1, number2);
// }

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }
// getTwoNumber(2, 3, addTwoNumber);

function getTwoNumberAndAdd(number1, number2, onSucces, onFailure) {
  //   console.log(number1, number2);
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    onSucces(number1, number2);
  } else {
    onFailure();
  }
}

getTwoNumberAndAdd(
  1,
  2,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log('wrong data type');
    console.log('please pass number onley');
  }
);
