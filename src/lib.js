function square(a) {
  return a * a;
}

function greet (name) {
  console.log('Hello ' + name);
}

function repeat (func, n) {
  const pathNotTaken = false;

  if (n < 1) {
    console.log('you made this a noop');
  } else {
    for (let i = 0; i<n; i++) {
      func();
    }
  }
}

function wrap (func) {
  const funcArgs = Array.from(arguments).slice(1, arguments.length);

  return function () {
    func.apply(this, funcArgs);
  }
}

function notUsed () {
  console.log('not used');
}

module.exports = {
  square: square,
  greet: greet,
  repeat: repeat,
  wrap: wrap,
  notUsed: notUsed
};
