// Module 4 Assignment


// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE

(function(window) {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using the 'speak' method of either helloSpeaker or byeSpeaker

  for (var i = 0; i < names.length; i++) {
    name = names[i];
    var firstLetter = name.charAt(0);
    
    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.

    if (firstLetter.toLowerCase() == "j") {
      byeSpeaker.speak(name);
    } 
    else {
      helloSpeaker.speak(name);
    }

  }; // end of for loop

}) (window);
