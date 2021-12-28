import ceaserCipher from '../src/ceaserCipher';

describe('Ceaser Cipher', () => {
  test('Plain text', () => {
    expect(ceaserCipher('abc', 1)).toBe('bcd');
  });

  test('Plain text with wrapping', () => {
    expect(ceaserCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
      'bcdefghijklmnopqrstuvwxyza',
    );
  });

  test('Same case', () => {
    expect(ceaserCipher('abcdefghijklmnopqrstuvwxyz', 0)).toBe(
      'abcdefghijklmnopqrstuvwxyz',
    );
  });

  test('Negative shift', () => {
    expect(ceaserCipher('abc', -2)).toBe('yza');
  });

  test('Punctuation', () => {
    expect(ceaserCipher('a.b,c', 2)).toBe('c.d,e');
  });

  test('Upper case letters', () => {
    expect(ceaserCipher('ABC', 3)).toBe('DEF');
  });
});
