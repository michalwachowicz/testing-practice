import analyzeArray from "./analyzeArray";

describe("analyzeArray", () => {
  test("throws an error if argument is missing", () =>
    expect(() => analyzeArray()).toThrow(
      "Argument is missing, proper usage: analyzeArray(array)"
    ));

  test("throws an error if argument is not array", () =>
    expect(() => analyzeArray({})).toThrow("Argument must be an array"));

  test("returns empty object if array is empty", () =>
    expect(analyzeArray([])).toEqual({}));

  test("works with single item arrays", () => {
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });

    expect(analyzeArray([2])).toEqual({
      average: 2,
      min: 2,
      max: 2,
      length: 1,
    });
  });

  test("works with multiple item arrays", () =>
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    }));

  test("works with string value arrays", () =>
    expect(analyzeArray(["2", "4", "6", "8"])).toEqual({
      average: 5,
      min: 2,
      max: 8,
      length: 4,
    }));
});
