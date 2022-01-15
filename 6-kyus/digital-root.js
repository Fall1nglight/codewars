// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
  function convert(number) {
    return n.toString().split('');
  }

  while (convert(n).length !== 1) {
    n = convert(n)
      .map((n) => Number(n))
      .reduce((prev, curr) => (prev += curr));
  }

  return n;
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
