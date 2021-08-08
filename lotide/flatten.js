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
  const flatten = function(srcArray) {
    let resultsArray = [];
    for (let i = 0; i < srcArray.length; i++) {
      if (Array.isArray(srcArray[i])) {
        for (let j = 0; j < srcArray[i].length; j++) {
          resultsArray.push(srcArray[i][j]);
        }
      } else {
        resultsArray.push(srcArray[i]);
      }
    }
    return resultsArray;
  }
  flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]