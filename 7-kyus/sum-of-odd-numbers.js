// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
function rowSumOddNumbers(n) {
  // I really hated this kata

  let sum = 1;
  let otherSum = 1;
  for (let i = 2; i <= n; i++) {
    otherSum = 0;
    for (let j = 0; j < i; j++) {
      sum += 2;
      otherSum += sum;
    }
  }
  return otherSum;

  // shorter version
  // return Math.pow(n,3);
}

console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);
