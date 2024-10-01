const isUpperCase = (charCode) => {
  return charCode >= 65 && charCode <= 90;
};

const isAlphabetic = (charCode) => {
  return (charCode >= 97 && charCode <= 122) || isUpperCase(charCode);
};

const caesarCipher = (text, shift) => {
  if (text === undefined || shift === undefined)
    throw new Error(
      "Arguments are missing, proper usage: caesarCipher(text, shift)"
    );

  if (typeof text !== "string")
    throw new Error("First argument must be a string");

  if (typeof shift !== "number")
    throw new Error("Second argument must be a number");

  const cipherArray = [];

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);

    if (!isAlphabetic(charCode)) {
      cipherArray.push(text[i]);
    } else {
      const base = isUpperCase(charCode) ? 65 : 97;
      const ascii = base + (((charCode + shift) % base) % 26);

      cipherArray.push(String.fromCharCode(ascii));
    }
  }

  return cipherArray.join("");
};

export { isAlphabetic, isUpperCase, caesarCipher };
