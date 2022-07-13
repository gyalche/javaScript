//keypress event;
//mouseover event;

const body = document.body;

body.addEventListener('keypress', (e) => {
  console.log(e.key);
});

//mouseover event;
const mainButton = document.querySelector('.btn-headline');
// console.log(mainButton);
mainButton.addEventListener('mouseover', () => {
  console.log('mouseover event occured');
});

//mouseleave;
mainButton.addEventListener('mouseleave', () => {
  console.log('mouseover leave occured');
});
