const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');

function myChange(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}
myChange(heading1, 'one', 'red', '1000')
  .then(() => {
    return myChange(heading2, 'two', 'green', '2000');
  })
  .then(() => {
    return myChange(heading3, 'three', 'blue', '3000');
  })
  .then(() => {
    return myChange(heading4, 'four', 'yellow', '4000');
  });
