// Moved app into index
const lib = require('./lib');
const _ = require('lodash');

function greetTeamFrice () {
  const greetAndy = lib.wrap(lib.greet, 'Team');

  lib.repeat(greetAndy, lib.square(2));
}

// just call whatever app gave us
greetTeamFrice();
