const raisinAlarm = function(arr) {
  let result = "All good!";
  for (let ing of arr) {
    if (ing == "🍇") {
      result = "Raisin Alert!";
    }
  }
  return result;
}
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); 



const raisinAlarmArray = function(arr) {
  let result = [];
  for (let ing of arr) {
    
    if (ing.includes("🍇")) {
      result.push("Raisin Alert");
    } else {
      result.push("All Good!");
    }
  }
  return result;
}


console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));