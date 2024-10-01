export default function reverseString(value) {
  const str = typeof value === "string" ? value : value.toString();
  if (str.length === 0) return "";

  return str.split("").reverse().join("");
}
