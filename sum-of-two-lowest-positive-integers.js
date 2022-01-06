// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, 'Sum should be 13');
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, 'Sum should be 6');
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, 'Sum should be 10');
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, 'Sum should be 24');
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, 'Sum should be 16');

// 15-28-4-3-43

// a-b

// 15-28
