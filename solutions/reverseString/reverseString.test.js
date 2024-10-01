import reverseString from "./reverseString";

describe("reverseString", () => {
  test("reverses entered value", () =>
    expect(reverseString("hello!")).toBe("!olleh"));

  test("works with empty strings", () => expect(reverseString("")).toBe(""));

  test("works with a single character", () =>
    expect(reverseString("A")).toBe("A"));

  test("works with non-string input", () => {
    expect(reverseString(123)).toBe("321");
    expect(reverseString(false)).toBe("eslaf");
  });
});
