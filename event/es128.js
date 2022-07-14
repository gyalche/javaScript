// console.log('hello world');
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//EVENT BUBBLING OR EVENT DELEGATION;
// child.addEventListener('click', () => {
//   console.log('bubbling ' + child.innerHTML);
// });

// parent.addEventListener('click', () => {
//   console.log('bubbling  parent');
// });

// grandparent.addEventListener('click', () => {
//   console.log('bubbling grand parent');
// });
// document.body.addEventListener('click', () => {
//   console.log('bubbling body');
// });

// //CAPUTING EVENT;
// child.addEventListener(
//   'click',
//   () => {
//     console.log('capturing !! ' + child.innerHTML);
//   },
//   true
// );

// parent.addEventListener(
//   'click',
//   () => {
//     console.log('capturing !!  parent');
//   },
//   true
// );

// grandparent.addEventListener(
//   'click',
//   () => {
//     console.log('capturing !! grandparent');
//   },
//   true
// );
// document.body.addEventListener(
//   'click',
//   () => {
//     console.log('capturing !! on body');
//   },
//   true
// );

//EVENT DELEGATION;
grandparent.addEventListener('click', (e) => {
  console.log(e.target);
});
