const mainButton = document.querySelector('button');
// console.log(mainButton.textContent);
const body = document.body;
const currentColor = document.querySelector('.current-color');

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 265);
  const green = Math.floor(Math.random() * 265);
  const blue = Math.floor(Math.random() * 265);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}

mainButton.addEventListener('click', () => {
  const randomColor = randomColorGenerator();
  //   console.log(randomColor);
  body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});
