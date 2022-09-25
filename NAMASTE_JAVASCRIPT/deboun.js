const but = document.querySelector('button');
const clickLog = () => console.log(`clicked`);

const debounce = (fun, delay) => {
  let id;
  return (...args) => {
    console.log(`prev id: ${id}`);
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fun(...args);
    }, delay);
  };
};
but.addEventListener('click', debounce(clickLog, 2000));
