function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === 'function') {
      onResolve(val);
      isCalled = true;
    }
    onResolve = val;
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === 'function') {
      onReject = val;
      called = true;
    }
  }

  this.then = function (callbacks) {
    onResolve = callbacks;
    if (isFulfilled && !isCalled) {
      called = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callbacks) {
    onReject = callbacks;
    if (isRejected && !isCalled) {
      called = true;
      onReject(value);
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise.then((res) => {
  console.log(res);
});

//Q create a polyfill for Promise.all;
Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) {
      resolve(promises);
      return;
    }
    let pending = promises.length;
    promises.forEach((promise, inx) => {
      Promise.resolve(promise).then((res) => {
        results[inx] = res;
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};
