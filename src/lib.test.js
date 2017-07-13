const lib = require('./lib');

describe('square', () => {
  test('should return 0', () => {
    expect(lib.square(0)).toBe(0);
  });

  test('should return 4', () => {
    expect(lib.square(2)).toBe(4);
  });

  test('should return 10000', () => {
    expect(lib.square(100)).toBe(10000);
  });

  test('should return 25', () => {
    expect(lib.square(-5)).toBe(25);
  });
});

describe('greet', () => {
  let logSpy;

  beforeAll(() => {
    logSpy = jest.spyOn(console, 'log')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    logSpy.mockReset();
    logSpy.mockRestore();
  });

  test('should call "console.log" with "Hello test"', () => {
    lib.greet('test');
    expect(logSpy).toHaveBeenCalledWith('Hello test');
  });
});

describe('repeat', () => {
  let logSpy;
  let testFunc;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log')
      .mockImplementation(() => {});
    testFunc = jest.fn();
  });

  afterEach(() => {
    logSpy.mockReset();
    logSpy.mockRestore();
  });

  test('should be called 3 times', () => {
    lib.repeat(testFunc, 3);
    expect(testFunc).toHaveBeenCalledTimes(3);
  });

  test('should not call console.log', () => {
    lib.repeat(testFunc, 3);
    expect(logSpy).not.toHaveBeenCalled();
  });

  test('should call console.log', () => {
    lib.repeat(testFunc, -1);
    expect(logSpy).toHaveBeenCalled();
  });
});

describe('wrap', () => {
  let testFunc;

  beforeEach(() => {
    testFunc = jest.fn();
  });

  test('should call testFunc with zero args', () => {
    const wrappedFunc = lib.wrap(testFunc);
    wrappedFunc();
    expect(testFunc).toHaveBeenCalledWith();
  });

  test('should call testFunc with two args: "first", "2"', () => {
    const wrappedFunc = lib.wrap(testFunc, 'first', 2);
    wrappedFunc();
    expect(testFunc).toHaveBeenCalledWith('first', 2);
  });
});

describe('notUsed', () => {
  let logSpy;

  beforeAll(() => {
    logSpy = jest.spyOn(console, 'log')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    logSpy.mockReset();
    logSpy.mockRestore();
  });

  test('should call "console.log" with "not used"', () => {
    lib.notUsed();
    expect(logSpy).toHaveBeenCalledWith('not used');
  });
});
