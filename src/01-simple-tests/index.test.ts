// Uncomment the code below and write your tests
 import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
  
    const number1 = 2;
    const number2 = 3;
    const input = {
      a: number1,
      b: number2,
      action: Action.Add
    };
    const expectedResult = 5;
    
    const actualResult = simpleCalculator(input);
    
    expect(actualResult).toBe(expectedResult);
  });

  test('should subtract two numbers', () => {
    const number1 = 2;
    const number2 = 3;
    const input = {
      a: number1,
      b: number2,
      action: Action.Subtract
    };
    const expectedResult = -1;
    
    const actualResult = simpleCalculator(input);
    
    expect(actualResult).toBe(expectedResult);
  });

  test('should multiply two numbers', () => {
    const number1 = 2;
    const number2 = 3;
    const input = {
      a: number1,
      b: number2,
      action: Action.Multiply
    };
    const expectedResult = 6;
    
    const actualResult = simpleCalculator(input);
    
    expect(actualResult).toBe(expectedResult);
  });

  test('should divide two numbers', () => {
    const number1 = 6;
    const number2 = 3;
    const input = {
      a: number1,
      b: number2,
      action: Action.Divide
    };
    const expectedResult = 2;
    
    const actualResult = simpleCalculator(input);
    
    expect(actualResult).toBe(expectedResult);
  });

  test('should exponentiate two numbers', () => {
    const number1 = 2;
    const number2 = 3;
    const input = {
      a: number1,
      b: number2,
      action: Action.Exponentiate
    };
    const expectedResult = 8;
    
    const actualResult = simpleCalculator(input);
    
    expect(actualResult).toBe(expectedResult);
  });

  test('should return null for invalid action', () => {
    const number1 = 2;
    const number2 = 3;
    const input = {
      a: number1,
      b: number2,
      action: 'test'
    };
    const expectedResult = null;
    
    const actualResult = simpleCalculator(input);
    
    expect(actualResult).toBe(expectedResult);
  });

  test('should return null for invalid arguments', () => {
    const string1 = '2';
    const string2 = '3';
    const input = {
      a: string1,
      b: string2,
      action: Action.Add
    };
    const expectedResult = null;
    
    const actualResult = simpleCalculator(input);
    
    expect(actualResult).toBe(expectedResult);
  });
});
