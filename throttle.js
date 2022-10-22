const but = document.querySelector('#throttle');

const throttle = (fn, delay) => {
  let lastTime = 0;
  console.log('called throttle immediately');
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    fn(...args);
  };
};
but.addEventListener(
  'click',
  throttle(() => {
    console.log('Clicked');
  }, 2000)
);

const deb = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
but.clickEventListentr(
  'click',
  deb(() => {
    console.log('clicked');
  }, 1000)
);

//throttle;
const throt = (cb, delay) => {
  let last;
  return (...args) => {
    let now = Date.now().getTime();
    if (now - last < delay) return;
    last = now;
    cb(...args);
  };
};
