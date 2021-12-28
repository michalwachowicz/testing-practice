import Calculator from '../src/calculator';

const calculator = new Calculator();

describe('Calculator - Add', () => {
  test('Add two integer numbers', () => {
    expect(calculator.add(5, 6)).toBe(11);
  });

  test('Add two integer numbers with string type', () => {
    expect(calculator.add(5, '5')).toBe(10);
  });

  test('Add two decimal numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('Add two decimal numbers with string type', () => {
    expect(calculator.add(0.5, '0.22')).toBeCloseTo(0.72);
  });

  test('Add two values to return NaN', () => {
    expect(() => calculator.add(2, '')).toThrow(
      'Error! The result is not a number!',
    );
  });
});
