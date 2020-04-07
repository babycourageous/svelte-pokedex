export function toTitleCase(string, splitChar) {
  return string
    .toLowerCase()
    .split(splitChar)
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
}
