console.log('start');

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 0);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Share the video ${video}`);
    }, 1000);
  });
}
const result = async () => {
  try {
    const message1 = await importantAction('one');
    const message2 = await shareTheVideo('two');
    console.log({ message1, message2 });
  } catch (error) {
    console.log('promises failed', error);
  }
};
result();
console.log('end');
