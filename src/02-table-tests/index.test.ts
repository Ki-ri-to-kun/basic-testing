 import { simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 1, b: 2, action: Action.Subtract, expected: -1 },
    { a: 5, b: 5, action: Action.Subtract, expected: 0 },
    { a: 10, b: 2, action: Action.Subtract, expected: 8 },
    { a: 1, b: 2, action: Action.Multiply, expected: 2 },
    { a: 3, b: 0, action: Action.Multiply, expected: 0 },
    { a: -4, b: -2, action: Action.Multiply, expected: 8 },
    { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
    { a: 10, b: 0, action: Action.Divide, expected: Infinity },
    { a: 6, b: 2, action: Action.Divide, expected: 3 },
    { a: 1, b: 20, action: Action.Exponentiate, expected: 1 },
    { a: 2, b: 8, action: Action.Exponentiate, expected: 256 },
    { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
]; 

describe('simpleCalculator table tests', () => {
  test('should calculate properly', () => {
   testCases.forEach(({a, b, action, expected}) => {
    const input = {a, b, action};
    
    const actualResult = simpleCalculator(input);
    
    expect(actualResult).toBe(expected);
   });
   
  });
  // Consider to use Jest table tests API to test all cases above
});
