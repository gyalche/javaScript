document.querySelector('#grapnparent').addEventListener(
  'click',
  function () {
    console.log('you clicked on grand parents');
  },
  true
);

const parent = document.querySelector('#parent');

parent.addEventListener(
  'click',
  function () {
    console.log('you clicke on parents');
  },
  true
);

document.querySelector('#child').addEventListener(
  'click',
  function () {
    console.log('you clicked on child');
  },
  true
);

//for event caputuring wite true at the last of the curlsy braces
