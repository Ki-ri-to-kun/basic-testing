 import { resolveValue, throwError, throwCustomError, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const input = 5;
    const expectedResult = 5;
    
    const actualResult = await resolveValue(input);
    
    expect(actualResult).toBe(expectedResult);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => {throwError('test')}).toThrow('test');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => {throwError()}).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
        expect(() => {throwCustomError()}).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
   await expect(rejectCustomError).rejects.toThrow(MyAwesomeError);
  });
});
