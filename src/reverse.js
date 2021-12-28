export default function reverse(str) {
  if (typeof str !== 'string') {
    throw new Error('Error! The value is not string');
  }
  return str.split('').reverse().join('');
}
