//  https://www.codewars.com/kata/559590633066759614000063

function minMax(arr) {
  // find the lowest number
  // find the highest number
  // construct an array from them
  // return that array

  const lowest = Math.min(...arr);
  const highes = Math.max(...arr);
  return [lowest, highes];
}

console.log(minMax([1, 2, 3, 4, 5]), [1, 5]);
console.log(minMax([2334454, 5]), [5, 2334454]);
