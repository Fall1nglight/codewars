// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  // need a set to filter letters

  // convert set to a sting
  // convert set to an array using the spread operator
  // use array methods (sort, join)

  const set = new Set(s1 + s2);
  return [...set].sort().join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
console.log(
  longest('loopingisfunbutdangerous', 'lessdangerousthancoding'),
  'abcdefghilnoprstu'
);
console.log(
  longest('inmanylanguages', 'theresapairoffunctions'),
  'acefghilmnoprstuy'
);
