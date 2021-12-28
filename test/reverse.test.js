import reverse from '../src/reverse';

test('Reverse #1', () => {
  expect(reverse('abc')).toBe('cba');
});

test('Reverse #2', () => {
  expect(reverse('My name is...')).toBe('...si eman yM');
});

test('Reverse #3', () => {
  expect(reverse('')).toBe('');
});

test('Reverse #4', () => {
  expect(() => {
    reverse(123);
  }).toThrow('Error! The value is not string');
});
