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

describe('Calculator - Multiply', () => {
  test('Multiply two integers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('Multiply two integers with string value', () => {
    expect(calculator.multiply(2, '2')).toBe(4);
  });

  test('Multiply two decimal numbers', () => {
    expect(calculator.multiply(2, 2.5)).toBeCloseTo(5);
  });

  test('Multiply two decimal numbers with string value', () => {
    expect(calculator.multiply(2, '3.6')).toBeCloseTo(7.2);
  });

  test('Multiply by falsy value', () => {
    expect(() => calculator.multiply(2, false)).toThrow(
      'Error! The result is not a number!',
    );
  });

  test('Multiply two numbers to return NaN', () => {
    expect(() => calculator.multiply(2, 'test')).toThrow(
      'Error! The result is not a number!',
    );
  });
});

describe('Calculator - Divide', () => {
  test('Divide two integers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('Divide two integers with string value', () => {
    expect(calculator.divide(2, '2')).toBe(1);
  });

  test('Divide two decimal numbers', () => {
    expect(calculator.divide(5.2, 2)).toBeCloseTo(2.6);
  });

  test('Divide two decimal numbers with string value', () => {
    expect(calculator.divide(5, '2.5')).toBeCloseTo(2);
  });

  test('Divide by 0', () => {
    expect(() => calculator.divide(2, 0)).toThrow(
      "Error! You can't divide by 0",
    );
  });

  test('Divide two numbers to return NaN', () => {
    expect(() => calculator.divide(2, 'test')).toThrow(
      'Error! The result is not a number!',
    );
  });
});
