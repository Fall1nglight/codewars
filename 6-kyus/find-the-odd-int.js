// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  // object to store number of appearances
  // for() to loop through every number
  // each number should be a key in the object

  // if the current key doesn't exist in the object
  // create one, and assign 1 to it

  // if the current key exists increase it by 1

  // for() to loop over every property of the object
  // if the current value is an odd, then return the current key

  const container = {};

  A.forEach((number) => {
    const currNum = container[number];
    currNum ? (container[number] = currNum + 1) : (container[number] = 1);
  });

  for (const [key, value] of Object.entries(container)) {
    if (value % 2 !== 0) return parseInt(key);
  }
}

console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5)
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1));
