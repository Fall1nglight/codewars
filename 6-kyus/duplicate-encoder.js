// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {}

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())', 'should ignore case');
console.log(duplicateEncode('(( @'), '))((');
