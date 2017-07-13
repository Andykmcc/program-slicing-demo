describe('greetTeamFrice', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockReset();
    logSpy.mockRestore();
  });

  test('should log out greeting 4 times', () => {
    require('./index');
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy).toHaveBeenCalledWith('Hello Team');
  });

  test('should log out greeting 4 times', () => {
    require('./index-1');
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy).toHaveBeenCalledWith('Hello Team');
  });

  test('should log out greeting 4 times', () => {
    require('./index-2');
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy).toHaveBeenCalledWith('Hello Team');
  });

  test('should log out greeting 4 times', () => {
    require('./index-3');
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy).toHaveBeenCalledWith('Hello Team');
  });

  test('should log out greeting 4 times', () => {
    require('./index-4');
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy).toHaveBeenCalledWith('Hello Team');
  });
});
