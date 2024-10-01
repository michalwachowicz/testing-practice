import { add, subtract, multiply, divide } from "./calculator";

describe("calculator", () => {
  describe("add", () => {
    test("adds two positive numbers", () => expect(add(2, 2)).toBe(4));

    test("adds two negative numbers", () => expect(add(-2, -2)).toBe(-4));

    test("adds two decimal numbers", () =>
      expect(add(0.1, 0.2)).toBeCloseTo(0.3));

    test("adds mixed decimal numbers", () => expect(add(-4, 2.5)).toBe(-1.5));

    test("throws an error if input is missing", () => {
      expect(() => add()).toThrow("Input is missing");
      expect(() => add(2)).toThrow("Input is missing");
    });

    test("accepts only numbers", () =>
      expect(() => add("2", "4")).toThrow("Input values must be numbers"));
  });

  describe("subtract", () => {
    test("subtracts two positive numbers", () =>
      expect(subtract(6, 4)).toBe(2));

    test("subtracts two negative numbers", () =>
      expect(subtract(-2, -3)).toBe(1));

    test("subtracts two decimal numbers", () =>
      expect(subtract(0.3, 0.2)).toBeCloseTo(0.1));

    test("throws an error if input is missing", () => {
      expect(() => subtract()).toThrow("Input is missing");
      expect(() => subtract(2)).toThrow("Input is missing");
    });

    test("accepts only numbers", () =>
      expect(() => subtract("2", "4")).toThrow("Input values must be numbers"));
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () =>
      expect(multiply(6, 4)).toBe(24));

    test("multiplies two negative numbers", () =>
      expect(multiply(-2, -3)).toBe(6));

    test("multiplies two decimal numbers", () =>
      expect(multiply(0.3, 0.2)).toBeCloseTo(0.06));

    test("throws an error if input is missing", () => {
      expect(() => multiply()).toThrow("Input is missing");
      expect(() => multiply(2)).toThrow("Input is missing");
    });

    test("accepts only numbers", () =>
      expect(() => multiply("2", "4")).toThrow("Input values must be numbers"));
  });

  describe("divide", () => {
    test("divides two positive numbers", () => expect(divide(12, 4)).toBe(3));

    test("divides two negative numbers and returns decimal value", () =>
      expect(divide(-5, -2)).toBe(2.5));

    test("divides two decimal numbers", () =>
      expect(divide(0.6, 0.2)).toBeCloseTo(3));

    test("throws an error if input is missing", () => {
      expect(() => divide()).toThrow("Input is missing");
      expect(() => divide(2)).toThrow("Input is missing");
    });

    test("throws an error if second argument is 0", () =>
      expect(() => divide(3, 0)).toThrow("You can't divide by 0"));

    test("accepts only numbers", () =>
      expect(() => divide("2", "4")).toThrow("Input values must be numbers"));
  });
});
