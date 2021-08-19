const map = function(array, callback) {
    const results = [];
  for (let item of array) {
   results.push(callback(item));
    }
  
    return results;
  }
  
  const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  };
  
  const assertArraysEqual = function(array1, array2) {
    const x = String.fromCodePoint(0x1F44D);
    const y = String.fromCodePoint(0x1F44E);
    if (eqArrays(array1, array2)) {
      console.log(` ${x} Assertion passed: ${array1} === ${array2}`);
    } else {
      console.log(`${y}  Assertion failed: ${array1} !== ${array2}`);
      
    }
  };
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]);
  assertArraysEqual(results1, ['g','c','t','m','t'])
  const results2 = map(words, word => word[3]);
  assertArraysEqual(results2, ['u','t', undefined, 'o', undefined]);
  const results3 = map(words, word => word.length);
  assertArraysEqual(results3, [6, 6, 2, 5, 3]);