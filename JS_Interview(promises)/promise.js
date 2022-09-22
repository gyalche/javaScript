console.log('start');
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 0);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the video ${video}`);
    }, 1000);
  });
}

importantAction('dawa sherpa')
  .then((res) => {
    console.log(res);
    shareTheVideo('Football')
      .then((a) => {
        console.log(a);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(error);
  });

//PROMISING CHAINING;
importantAction('Don is Don')
  .then((res) => {
    console.log(res);
    return shareTheVideo('don is don');
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo('don is don');
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo('don is don');
  });

//PROMISE COMBINATOR;
//=>it helps use to execute more that one promise at one time and return the result accordingly;
//=>if one is failed all will be failed;

//Promise.all => promise combintor;
Promise.all([importantAction('action one'), shareTheVideo('action two')])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Promise.raise is another promise combinator
//=> we only get that promise that is rejected or resolved first;
Promise.raise([importantAction('action one'), shareTheVideo('action two')])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Promise.allsettled
//=>if if one promise failed it will returen all other promises that is passed;
Promise.allSettled([importantAction('action one'), shareTheVideo('action two')])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//Promise.any;
//=>It only returns the first fullfilled promise and ignore all other;
Promise.any([importantAction('action one'), shareTheVideo('action two')])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// const message = importantAction('Dawa don', (message) => {
//   console.log(message);
//   shareTheVideo('DAWA DON VIDEO IS TO BE SHARED', (action) => {
//     console.log(action);
//   });
// });

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) resolve('dawa is done');
//     else reject('new error');
//   }, 2000);
// });
// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {
//     console.log('you failed');
//   });
console.log('stop');
