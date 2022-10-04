// Write your solution below:
function makeUnique(phrase) {
  let uniqueChars = [...new Set(phrase)];
  let result = uniqueChars.toString().replaceAll(`,`, ``);
  return result;
}

console.log(makeUnique("iwanttoclimbamountain"));
