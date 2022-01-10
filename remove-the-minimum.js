// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  // find the lowest number
  // find its index
  // create a copy of the original array
  // remove the lowest number

  const lowestNumber = Math.min(...numbers);
  const index = numbers.indexOf(lowestNumber);
  const newNumbers = [...numbers];

  newNumbers.splice(index, 1);
  return newNumbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
console.log(removeSmallest([]), []);
