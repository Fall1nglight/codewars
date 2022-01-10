// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  // split the string on spaces into words
  // split each word into letters, reverse them, then join them
  // join each word on spaces

  return str
    .split(' ')
    .map((w) => w.split('').reverse().join(''))
    .join(' ');
}

console.log(
  reverseWords('The quick brown fox jumps over the lazy dog.'),
  'ehT kciuq nworb xof spmuj revo eht yzal .god'
);
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
