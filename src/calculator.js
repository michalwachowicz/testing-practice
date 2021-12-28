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

  multiply(a, b) {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const result = aNum * bNum;

    if (isNaN(result)) throw new Error('Error! The result is not a number!');
    return result;
  }

  divide(a, b) {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    if (bNum === 0) throw new Error("Error! You can't divide by 0");

    const result = aNum / bNum;
    if (isNaN(result)) throw new Error('Error! The result is not a number!');

    return result;
  }
}
