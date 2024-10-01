const add = (a, b) => {
  if (a === undefined || b === undefined) throw new Error("Input is missing");

  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Input values must be numbers");

  return a + b;
};
const subtract = (a, b) => {
  if (a === undefined || b === undefined) throw new Error("Input is missing");

  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Input values must be numbers");

  return a - b;
};

const multiply = (a, b) => {
  if (a === undefined || b === undefined) throw new Error("Input is missing");

  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Input values must be numbers");

  return a * b;
};

const divide = (a, b) => {
  if (a === undefined || b === undefined) throw new Error("Input is missing");

  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Input values must be numbers");

  if (b === 0) throw new Error("You can't divide by 0");

  return a / b;
};

export { add, subtract, multiply, divide };
