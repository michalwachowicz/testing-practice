export default function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Error! The value is not string');
  }
  if (str.length < 1) return '';
  return str[0].toUpperCase() + str.substring(1);
}
