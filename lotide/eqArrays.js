const assertEqual = function(actual, expected) {
  const x = String.fromCodePoint(0x1F44D);
  const y = String.fromCodePoint(0x1F44E);
  if (actual === expected) {
    console.log(x,x,x + ' ' + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(y,y,y + ' ' + `Assertion Failed: ${array1} !== ${array2}`);
  }
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1 [i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
