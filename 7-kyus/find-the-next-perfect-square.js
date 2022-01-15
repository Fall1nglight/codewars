// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  // check if the number is a perfect square
  // if it is not return -1
  // calculate the square root of the number
  // then increase it by 1
  // finally, use Math.pow

  if (Math.sqrt(sq) % 1 !== 0) return -1;
  const baseNumber = Math.sqrt(sq);
  return Math.pow(baseNumber + 1, 2);

  // short version
  // return Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(319225), 320356);
console.log(findNextSquare(15241383936), 15241630849);
console.log(findNextSquare(155), -1);
console.log(findNextSquare(342786627), -1);
