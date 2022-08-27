const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('thrtoole');

// const updateDebounceText = debounce((text) => {
//   debounceText.textContent = text;
// });
const updateDebounceText = debounce(() => {
  incrementCount(debounceText);
});

// const updateThrottleText = throttle((text) => {
//   throttleText.textContent = text;
// });
const updateThrottleText = throttle(() => {
  incrementCount(throttleText);
});

// input.addEventListener('input', (e) => {
//   defaultText.textContent = e.target.value;
//   updateDebounceText(e.target.value);
//   updateThrottleText(e.target.value);
// });

function debounce(cb, delay = 1000) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      cb(...args);
      //   console.log(...args);
    }, delay);
  };
}

//throttle;
function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };
  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}

document.addEventListener('mousemove', (e) => {
  incrementCount(defaultText);
  updateDebounceText();
  updateThrottleText();
});
function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
