//map;
const arr = [1, 2, 3, 4, 5];

const clickme = document.querySelector('#clickMe');
setTimeout(() => {
  clickme.textContent = 'add me';
}, 1000);

function double(x) {
  return x + x;
}
//multiple
function triple(x) {
  return x * 3;
}
//binary
function binary(x) {
  return x.toString(2);
}

const output = arr.map(binary);
console.log(output);
