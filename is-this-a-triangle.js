// https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  return a - b < c && b - c < a && c - a < b ? true : false;
}

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);
