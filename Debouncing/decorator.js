function decorator(func) {
  return function () {
    func();
  };
}

const helloDecorator = decorator(hi);
helloDecorator('dawa');
