//Promise;
//=>it is a value which we dont know currently but in future we will know it;
const bucket = ['coffe', 'chips', 'vegitables', 'salt', 'rice'];

const myPromise = new Promise((resolve, reject) => {
  if (
    bucket.includes('vegitables') &&
    bucket.includes('salt') &&
    bucket.includes('rice')
  ) {
    resolve('Fried Rice completed milf fucket');
  } else {
    reject('couldnt complte the fried rice');
  }
});

//promise consumption will be done  by browser; so it will  be called at the last;
//promise will be added in micrtask quee wearas the call back will be added in callback queue;

//microtask task will be called before callback queue;
myPromise
  .then((done) => {
    console.log('now the anser is ', done);
  })
  .catch((error) => {
    console.log(error);
  });
