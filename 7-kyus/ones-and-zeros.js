// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = (arr) => {
  const reversedArr = arr.reverse();
  let sum = 0;

  for (let i = 0; i < reversedArr.length; i++) {
    if (reversedArr[i] === 0) continue;
    sum += Math.pow(2, i);
  }

  return sum;
};

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);
