// https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  // variable to store passed years
  // variable to store current population
  // function to calculate the populate growth by each year
  // while loop to check if the current population has
  // exceeded the given number

  let yearCounter = 0;
  let currentPopulation = p0;

  const calculate = () => {
    currentPopulation += currentPopulation * (percent / 100) + aug;
    yearCounter++;
  };

  while (currentPopulation < p) {
    calculate();
  }

  return yearCounter;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
