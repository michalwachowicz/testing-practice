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

describe('Calculator - Subtract', () => {
  test('Subtract two integers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('Subtract two integers with string type', () => {
    expect(calculator.subtract(10, '8')).toBe(2);
  });

  test('Subtract two decimal numbers', () => {
    expect(calculator.subtract(0.4, 0.1)).toBeCloseTo(0.3);
  });

  test('Subtract two decimal numbers with string type', () => {
    expect(calculator.subtract('1', 0.2)).toBeCloseTo(0.8);
  });

  test('Subtract number from falsy value', () => {
    expect(() => calculator.subtract('', 2)).toThrow(
      'Error! The result is not a number!',
    );
  });

  test('Subtract two numbers to return NaN', () => {
    expect(() => calculator.subtract('text', 2)).toThrow(
      'Error! The result is not a number!',
    );
  });
});
