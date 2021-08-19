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
  const takeUntil = function(array, callback) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        results = array.slice(0, i);
      }
    }
    return results;
  };
  
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
  
  console.log('---');
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);
  
  
  assertArraysEqual(results1, data1.slice(0, 5));
  assertArraysEqual(results2, data2.slice(0, 4));
  