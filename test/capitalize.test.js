import capitalize from '../src/capitalize';

test('Capitalize #1', () => {
  expect(capitalize('some random string')).toBe('Some random string');
});

test('Capitalize #2', () => {
  expect(capitalize('my name is michael')).toBe('My name is michael');
});

test('Capitalize #3', () => {
  expect(capitalize('')).toBe('');
});

test('Capitalize #4', () => {
  expect(capitalize('123')).toBe('123');
});

test('Capitalize #5', () => {
  expect(() => {
    capitalize(1234);
  }).toThrow('Error! The value is not string');
});
