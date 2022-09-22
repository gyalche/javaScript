//Promise in Javascript;

//Q 1= Whats the output?

console.log('start');
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});
promise1.then((res) => {
  console.log(res);
});
console.log('end');
//ans=> start, 1, end, 2;

//Q2
console.log('first');

const fn = () => {
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });
  console.log('middle');
};
fn().then((res) => {
  console.log(res);
});
console.log('last');

//recursively;

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
      reject(`Share the video ${video}`);
    }, 1000);
  });
}

function promRecurse(funPromises) {
  if (funPromises.length === 0) return;
  const currPromise = funPromises.shift();
  currPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  promRecurse(funPromises);
}

promRecurse([importantAction('one'), shareTheVideo('two')]);
