const passAny = require('./pass-any');

describe('passAny', () => {
  const ctx = {};

  beforeAll(() => {
    ctx.arr = [true, 'foo', 'bar', 'qux'];
    ctx.ctx = { foo: 1 };
  });

  afterAll(() => {
    delete ctx.arr;
    delete ctx.ctx;
  });

  test('should work with array functions', () => {
    expect(ctx.arr.filter(passAny(isString, isFunction)))
      .toEqual(ctx.arr.filter(isStringOrFunction));
  });

  test('should apply its context to the functions', () => {
    ctx.arr.forEach(passAny(checkContext).bind(ctx.ctx));

    function checkContext () {
      return expect(this).toEqual(ctx.ctx);
    }
  });

  test('should throw an error if it receives non-function args', () => {
    expect(() => ctx.arr.forEach(passAny(true, false))).toThrow();
  });
});

function isStringOrFunction (item) {
  return isString(item) || isFunction(item);
}

function isString (val) {
  return typeof val === 'string' || val instanceof String;
}

function isFunction (v) {
  return typeof v === 'function';
}
