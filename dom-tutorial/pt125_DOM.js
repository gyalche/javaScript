const allButton = document.querySelectorAll('.my-button button');

allButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.style.backroundColor = 'yellow';
    e.tagret.style.color = 'red';
  });
});
