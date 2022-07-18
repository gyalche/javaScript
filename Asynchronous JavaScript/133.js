//callbacks, callback hell, pyramid of doom;
//asynchronous;
const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');

const ans = [heading1, heading2];
//callback hell;
setTimeout(() => {
  heading1.textContent = 'heading 1';
  heading1.style.color = 'violet';
  setTimeout(() => {
    heading2.textContent = 'heading 2';
    heading2.style.color = 'blue';
    setTimeout(() => {
      heading3.textContent = 'heading 3';
      heading3.style.color = 'red';
      setTimeout(() => {
        heading4.textContent = 'heading 4';
        heading4.style.color = 'pink';
        setTimeout(() => {
          heading5.textContent = 'heading5';
          heading5.style.color = 'green';
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
