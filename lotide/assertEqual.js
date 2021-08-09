const assertEqual = function(actual, expected) {
  const x = String.fromCodePoint(0x1F44D);
  const y = String.fromCodePoint(0x1F44E);
  if (actual === expected) {
    console.log(x,x,x + ' ' + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(y,y,y + ' ' + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

