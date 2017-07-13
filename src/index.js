const lib = require('./lib');

var greetAndy = lib.wrap(lib.greet, 'Andy');

lib.repeat(greetAndy, lib.square(2));
