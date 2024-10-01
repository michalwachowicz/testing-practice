export default function capitalize(value) {
  const str = typeof value === "string" ? value : value.toString();
  if (str.length === 0) return "";

  return str[0].toUpperCase() + str.slice(1);
}
