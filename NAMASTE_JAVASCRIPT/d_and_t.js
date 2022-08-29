//debouncing;

function debounce(func, delay) {
  let timeOut;

  return function (...args) {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      func.call(this, args);
    }, delay);
  };
}

function mySuggestion(e) {
  console.log(e.target.value);
}
const decorator = debounce(mySuggestion, 1000);
