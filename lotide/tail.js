const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log("All matched. Test case passed");
} else{
    console.log("Not matched. Test case not passed");
}

  }
  const tail = function(arr){
    return arr.slice(1);
  }
  
  //assertEqual(1,1);
//   assertEqual("Lighthouse", "Labs");
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result, ["Lighthouse", "Labs"]);
console.log(result);