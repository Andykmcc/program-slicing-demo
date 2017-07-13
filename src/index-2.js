// Moved app into index
   // Include required code directly (shallow)
const lib = {};
  // Dead code removal

lib.wrap = function (func) {
  const funcArgs = Array.from(arguments).slice(1, arguments.length);

  return function () {
    func.apply(this, funcArgs);
  }
};

lib.greet = function (name) {
  console.log('Hello ' + name);
};

lib.repeat = function (func, n) {
  const pathNotTaken = false;
  // Dead code removal
  // Was passible because Dynamic slice
  // if (n < 1) {
  //   console.log('you made this a noop');
  // } else {
    for (let i = 0; i<n; i++) {
      func();
    }
  // }
};

lib.square = function (a) {
  return a * a;
}

function greetTeamFrice () {
  const greetAndy = lib.wrap(lib.greet, 'Team');

  lib.repeat(greetAndy, lib.square(2));
}

// just call whatever app gave us
greetTeamFrice();
