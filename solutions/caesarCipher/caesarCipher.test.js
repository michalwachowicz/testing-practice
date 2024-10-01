import { isAlphabetic, isUpperCase, caesarCipher } from "./caesarCipher";

describe("caesarCipher", () => {
  test("works with simple strings", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("abc", 2)).toBe("cde");
  });

  test("preserves original case", () =>
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"));

  test("works with non-alphabetic characters", () => {
    expect(caesarCipher("a,b,c!", 1)).toBe("b,c,d!");
    expect(caesarCipher("A,b,c!", 2)).toBe("C,d,e!");
  });

  test("wraps letters after reaching the end of alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("XYZ", 4)).toBe("BCD");
    expect(caesarCipher("Xyz", 28)).toBe("Zab");
  });

  test("works with mixed characters and wraps the letters", () => {
    expect(caesarCipher("X. yz!", 3)).toBe("A. bc!");
    expect(caesarCipher("X. yz!", 30)).toBe("B. cd!");
  });

  test("throws error if arguments are missing", () => {
    expect(() => caesarCipher()).toThrow(
      "Arguments are missing, proper usage: caesarCipher(text, shift)"
    );

    expect(() => caesarCipher("test")).toThrow(
      "Arguments are missing, proper usage: caesarCipher(text, shift)"
    );
  });

  test("throws error if arguments are mistyped", () => {
    expect(() => caesarCipher(123, 17)).toThrow(
      "First argument must be a string"
    );

    expect(() => caesarCipher("Test", "17")).toThrow(
      "Second argument must be a number"
    );
  });
});

describe("helper functions", () => {
  describe("isUpperCase", () => {
    test("returns true with upper case letters", () => {
      ["A", "Z"].forEach((char) => {
        expect(isUpperCase(char.charCodeAt(0))).toBe(true);
      });
    });

    test("returns false with lower case letters", () => {
      ["a", "z"].forEach((char) => {
        expect(isUpperCase(char.charCodeAt(0))).toBe(false);
      });
    });

    test("returns false with non-alphabetic characters", () => {
      ["1", "/"].forEach((char) => {
        expect(isUpperCase(char.charCodeAt(0))).toBe(false);
      });
    });
  });

  describe("isAlphabetic", () => {
    test("returns true with lower case letters", () => {
      ["a", "z"].forEach((char) => {
        expect(isAlphabetic(char.charCodeAt(0))).toBe(true);
      });
    });

    test("returns true with upper case letters", () => {
      ["A", "Z"].forEach((char) => {
        expect(isAlphabetic(char.charCodeAt(0))).toBe(true);
      });
    });

    test("returns false with non-alphabetic characters", () => {
      ["1", "/"].forEach((char) => {
        expect(isAlphabetic(char.charCodeAt(0))).toBe(false);
      });
    });
  });
});
