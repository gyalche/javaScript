//function returing promises;
function ricePromise() {
  const bucket = ['coffe', 'chips', 'vegitables', 'salt', 'rice'];
  return new Promise((resolve, reject) => {
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
}

ricePromise()
  .then((myrice) => {
    console.log(myrice);
  })
  .catch((err) => {
    console.log(err);
  });
