const arr = [2, 34, 1, 2, 3, 4, 5];

const filt = function (a) {
  return a % 2 !== 0;
};

const ans = arr.filter(filt);
console.log(ans);
