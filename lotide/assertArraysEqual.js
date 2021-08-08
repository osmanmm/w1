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
  