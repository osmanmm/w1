const eqArrays = require("./eqArrays");
const x = String.fromCodePoint(0x1F44D);
  const y = String.fromCodePoint(0x1F44E);
const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(` ${x} Assertion passed: ${array1} === ${array2}`);
    } else {
      console.log(`${y}  Assertion failed: ${array1} !== ${array2}`);
      assertEqual(essertArraysEqual(["1", "2", "3"], ["1", "2", 3]), true);
    }
  };
  const middle = function(array) {
    let array_result = []; 
    if (array.length <= 2 && array.length > 0) {
      return array_result;
    } else if (array.length % 2 === 0) {
        return array_result = [array[(array.length / 2) - 1], array[array.length / 2]];
      } else {
        return array_result = array[(array.length - 1) / 2];
      }
  };
  console.log(middle([1])) 
  console.log(middle([1, 2])) 
  console.log(middle([1, 2, 3, 4]) )
  console.log(middle([1, 2, 3, 4, 5]))