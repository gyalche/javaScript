//promise chaining;
function myPromise() {
  return new Promise((resolve, reject) => {
    resolve('resolved called');
  });
}
myPromise()
  .then((value) => {
    console.log(value);
    value += 'once';
    return value;
  })
  .then((value) => {
    console.log(value);
    value += 'twice';
    return value;
  })
  .then((value) => {
    console.log(value);
  });
