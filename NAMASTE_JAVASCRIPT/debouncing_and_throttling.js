const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('thrtoole');

// const updateDebounceText = debounce((text) => {
//   debounceText.textContent = text;
// });

const updateDebounceText = debounce(() => {
  incrementAmount(debounceText);
});

//throttline;
// const updateThrottleText = throttle((text) => {
//   throttleText.textContent = text;
// });
const updateThrottleText = throttle(() => {
  incrementAmount(throttleText);
});

// input.addEventListener('input', (e) => {
//   defaultText.textContent = e.target.value;
//   updateDebounceText(e.target.value);
//   updateThrottleText(e.target.value);
// });

function debounce(cb, delay = 1000) {
  let timeOut;
  return (...args) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay = 10000) {
  let shouldWait = false;
  let waitingArgs;

  const timeOutFunction = () => {
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
      shouldWait = waitingArgs;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      timeOutFunction;
    }, delay);
  };
}

document.addEventListener('mousemove', (e) => {
  incrementAmount(defaultText);
  updateDebounceText();
  updateThrottleText();
});

function incrementAmount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
