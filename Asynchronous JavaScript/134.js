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
myPromise
  .then((done) => {
    console.log('now the anser is ', done);
  })
  .catch((error) => {
    console.log(error);
  });
