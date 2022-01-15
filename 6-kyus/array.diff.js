// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  if (!a.length || !b.length) return a;

  b.forEach((numToRemove) => {
    for (let i = 0; i < a.length; i++) {
      const numToTest = a[i];

      if (numToRemove === numToTest) {
        a.splice(i, 1);
        i--;
      }
    }
  });

  return a;
  // short version
  // return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([], [4, 5]), []);
console.log(arrayDiff([3, 4], [3]), [4]);
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2]);
console.log(arrayDiff([1, 2, 3], [1, 2]), [3]);
console.log(arrayDiff([1, 2, 2], [2]), [1]);
