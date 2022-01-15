// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  // use for() to loop through every number to the given one
  // check if the current number is multipies of 3 or 5
  // if it is increase sum by the current value

  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }

  return sum;
}

console.log(solution(10), 23);
