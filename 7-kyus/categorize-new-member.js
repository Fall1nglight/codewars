// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
  // use map() and array destructuring

  return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) return 'Senior';
    return 'Open';
  });

  // short version
  // return data.map(([age, handicap]) =>
  //   age >= 55 && handicap > 7 ? 'Senior' : 'Open'
  // );
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]),
  ['Open', 'Senior', 'Open', 'Senior']
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ]),
  ['Open', 'Open', 'Open', 'Open']
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ]),
  ['Senior', 'Open', 'Open', 'Open']
);
