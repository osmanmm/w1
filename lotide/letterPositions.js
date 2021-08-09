const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length)
      return false;
    for (let i = arr1.length; i--;) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
const x = String.fromCodePoint(0x1F44D);
  const y = String.fromCodePoint(0x1F44E);
const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(` ${x} Assertion passed: ${array1} === ${array2}`);
    } else {
      console.log(`${y}  Assertion failed: ${array1} !== ${array2}`);
      
    }
  };
  const letterPositions = function(sentence) {
    const results = {};
    for(letters of sentence)
    {
        results[letters] = [];

    }
    
    for(let b in results)
    {
        for(let a = 0; a < sentence.length; a++)
        {
            if(b === sentence[a])
            {
                results[b].push(a);
                    }
        }
    }
    return results;
  };
  console.log(letterPositions('lighthouse labs'))
  assertArraysEqual(letterPositions("hello").e, [1]);