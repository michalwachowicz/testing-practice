export default function analyzeArray(arr) {
  if (arr === undefined)
    throw new Error("Argument is missing, proper usage: analyzeArray(array)");

  if (!Array.isArray(arr)) throw new Error("Argument must be an array");

  const length = arr.length;
  if (length === 0) return {};

  const average = arr.reduce((prev, curr) => prev + Number(curr), 0) / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { average, min, max, length };
}
