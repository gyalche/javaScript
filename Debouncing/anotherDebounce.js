const myInput = document.getElementById('input-event');

// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       func.call(this, ...args);
//     }, delay);
//   };
// }

// function mySuggestion(e) {
//   console.log(e.target.value);
// }
// const decorator = debounce(mySuggestion, 300);
// function debounce(cb, delay) {
//   let timeOut;
//   return function (...args) {
//     if (timeOut) clearTimeout(timeOut);
//     timeOut = setTimeout(() => {
//       cb.call(...args);
//     });
//   };
// }
// const mySuggestion = (e) => {
//   return e.target.value;
// };
// const decorator = debounce(mySuggestion, 300);

myInput.addEventListener('input', decorator);

//throttle;

const throttle = (cb, delary) => {
  let last = 0;
  return (...args) => {
    let now = Date.now().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};
const mySuggestion = (e) => {
  return e.target.value;
};
const dec = throttle(mySuggestion, 300);
