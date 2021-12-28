export default class Calculator {
  add(a, b) {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const result = aNum + bNum;

    if (isNaN(result)) throw new Error('Error! The result is not a number!');
    return result;
  }

  subtract(a, b) {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const result = aNum - bNum;

    if (isNaN(result)) throw new Error('Error! The result is not a number!');
    return result;
  }

  multiply(a, b) {}

  divide(a, b) {}
}
