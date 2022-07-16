//javascript is a synchronous programming and single threaded;

//asynchronous;

console.log('script start');

const id = setTimeout(() => {
  console.log('set time out startted');
}, 1000);
for (var i = 0; i < 100; i++) {
  console.log('for loop');
}
clearTimeout(id);
console.log('script ends');
