const resolve = require('path').resolve;
const sliceJS = require('slice-js').default;

// const filepath = resolve('./src/index.js');
const filepath = 'index.js';
const name = 'demoSlice';
const testCb = () => 'noop';

sliceJS(filename, name, testCb);
