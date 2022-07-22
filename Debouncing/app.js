//debounce function==debounce is a decoratior function;
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}
const myInput = document.getElementById('input-event');

function mySuggestion(e) {
  console.log('suggestions for ', e.target.value);
}

const decoratedFunc = debounce(mySuggestion, 300);

myInput.addEventListener('input', decoratedFunc);

//keyup;
//input;
//change;

// myInput.addEventListener('keyup', () => {
//   console.log(myInput.value);
// });

// myInput.addEventListener('input', () => {
//   console.log(myInput.value);
// });

// myInput.addEventListener('change', () => {
//   console.log(myInput.value);
// });
