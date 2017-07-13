// Moved app into index
   // Include required code directly (shallow)
const lib = {};
  // Dead code removal

lib.wrap = function (func) {
  // come back to here...
  const funcArgs = Array.from(arguments).slice(1, arguments.length);

  return function () {
    func.apply(this, funcArgs);
  }
};

lib.greet = function (name) {
  console.log('Hello ' + name);
};

    // Got rid of a layer of closures
for (let i = 0; i < 2*2; i++) {
  lib.wrap(lib.greet, 'Team')()
}
