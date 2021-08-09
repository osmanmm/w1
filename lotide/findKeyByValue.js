const assertEqual = function(actual, expected) {
    const x = String.fromCodePoint(0x1F44D);
    const y = String.fromCodePoint(0x1F44E);
    if (actual === expected) {
      console.log(x,x,x + ' ' + `Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(y,y,y + ' ' + `Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  const findKeyByValue = function(obj, val) {
    let objKeys = Object.keys(obj);
    let index = 0;
    for (let element in obj) {
      if (obj[element] === val) {
        return objKeys[index];
      }
      index++;
    }
    return undefined;
  }
  


  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
//   assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//   assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));