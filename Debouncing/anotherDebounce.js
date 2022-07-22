const myInput = document.getElementById('input-event');

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

function mySuggestion(e) {
  console.log(e.target.value);
}
const decorator = debounce(mySuggestion, 300);

myInput.addEventListener('input', decorator);
