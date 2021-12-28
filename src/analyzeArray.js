export default function analyzeArray(arr) {
  const sorted = arr.sort();
  const length = arr.length;
  const min = length && sorted[0];
  const max = length && sorted[length - 1];
  const average =
    length && sorted.reduce((prev, next) => prev + next, 0) / length;

  return { average, min, max, length };
}
