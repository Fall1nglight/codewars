// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
function maskify(cc) {
  return cc.length <= 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4);
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
