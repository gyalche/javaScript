//promise and setTimeout;

function pst() {
  new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        console.log('resolve');
      } else {
        console.log('rejected');
      }
    }, 2000);
  });
}

pst()
  .then(() => {
    console.log('resolved');
  })
  .catch(() => {
    console.log('rejected');
  });
