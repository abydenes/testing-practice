export default function analyzeArray(array) {
  let average = array.reduce((a, b) => a + b) / array.length;
  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;
  return { average, min, max, length };
}
