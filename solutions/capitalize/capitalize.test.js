import capitalize from "./capitalize";

describe("capitalize", () => {
  test("returns a string with the first letter capitalized", () =>
    expect(capitalize("test")).toBe("Test"));

  test("returns the same string if first letter is capitalized", () =>
    expect(capitalize("Hello")).toBe("Hello"));

  test("returns the same string if first character is not a letter", () =>
    expect(capitalize("22 years old!")).toBe("22 years old!"));

  test("works with empty strings", () => expect(capitalize("")).toBe(""));

  test("works with 1 character strings", () =>
    expect(capitalize("a")).toBe("A"));

  test("works with non-string inputs", () => {
    expect(capitalize(123)).toBe("123");
    expect(capitalize(true)).toBe("True");
  });
});
