//FETCH;
//fetch returns promise;
const URL = 'https://jsonplaceholder.typicode.com/posts';
// const xhr = new XMLHttpRequest();
const what = fetch(URL);
console
  .log(what)
  .then((data) => {
    return data.json();
  })
  .then((adata) => {
    console.log(adata);
  });
