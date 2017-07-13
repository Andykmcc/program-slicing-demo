/**
 * Functional version of val typeof 'function'
 * @function module:101/is-function
 * @param {*} val - value checked to be a function
 * @return {boolean} Whether the value is a function or not
 */

function isFunction (v) {
  return typeof v === 'function';
}

/**
 * Muxes arguments across many functions and ||'s the results
 * @function module:101/pass-any
 * @param {function} funcs... - functions which return a boolean
 * @return {function} function which accepts args which it applies to funcs and ||s the results
 */

function passAny (/* funcs */) {
  var funcs = Array.prototype.slice.call(arguments);
  if (!funcs.every(isFunction)) {
    throw new TypeError('all funcs should be functions');
  }
  return function (/* arguments */) {
    var args = arguments;
    var self = this;
    return funcs.some(function (func) {
      return func.apply(self, args);
    });
  };
}

module.exports = passAny;
