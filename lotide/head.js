const assertEqual = function(actual, expected) {
    if(actual === expected){
        console.log("All matched. Test case passed");
    } else{
        console.log("Not matched. Test case not passed");
    }
  
}

const head = function(array){
    return array[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
