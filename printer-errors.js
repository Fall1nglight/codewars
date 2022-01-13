// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  // store length of the given string
  // create a regExp and count the valid characters

  const reg = s.match(/[A-Ma-m]/g);
  return `${s.length - reg.length}/${s.length}`;
}

var s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
console.log(printerError(s), '3/56');
