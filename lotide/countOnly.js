const assertEqual = function(actual, expected) {
    const x = String.fromCodePoint(0x1F44D);
    const y = String.fromCodePoint(0x1F44E);
    if (actual === expected) {
      console.log(x,x,x + ' ' + `Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(y,y,y + ' ' + `Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  const countOnly = function(allItems, itemsToCount) {
    const results = {};
    for (item of allItems) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1;
        } else {
          results[item] = 1;
        }
      }
    }
    return results;
  };
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
   assertEqual(result1["Jason"], 1);
   assertEqual(result1["Karima"], undefined);
   assertEqual(result1["Fang"], 2);
   assertEqual(result1["Agouhanna"], undefined);