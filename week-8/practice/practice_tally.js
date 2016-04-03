// Tally Votes in JavaScript Pairing Challenge.

// I worked on this challenge with:
// This challenge took me [#] hours.

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property
of the respective office in voteCount.  After Alex's votes have been tallied,
voteCount would be ...
  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }
*/


/* Once the votes have been tallied, assign each officer position the name of the
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode
// You're going to need two different functions...one that tallies all of the votes and modifies the properties of the voteCount object, and one function that takes the highest values associated to properties in voteCount and prints the winning officers.
//Step 1: First off, create an array that has each of the offices as a string element, i.e. "president", "vice-president", etc.  That way you will be able to more easily iterate through the votes object using the .hasOwnProperty tool.
//Step 2: Create a function called "tally".
//Step 3: Use a for...in... loop to allow yourself to iterate through all of the properties in the votes object...this will allow you to set a var to each voter.

// __________________________________________

for (var voter in votes) {
  if(voteCount["president"].hasOwnProperty(votes[voter]["president"])) {
    voteCount["president"][votes[voter]["president"]]++;
  }
  else {
    voteCount["president"][votes[voter]["president"]] = 1;
  }
}
for (var voter in votes) {
  if(voteCount["vicePresident"].hasOwnProperty(votes[voter]["vicePresident"])) {
    voteCount["vicePresident"][votes[voter]["vicePresident"]]++;
  }
  else {
    voteCount["vicePresident"][votes[voter]["vicePresident"]] = 1;
  }
}
for (var voter in votes) {
  if(voteCount["secretary"].hasOwnProperty(votes[voter]["secretary"])) {
    voteCount["secretary"][votes[voter]["secretary"]]++;
  }
  else {
    voteCount["secretary"][votes[voter]["secretary"]] = 1;
  }
}
for (var voter in votes) {
  if(voteCount["treasurer"].hasOwnProperty(votes[voter]["treasurer"])) {
    voteCount["treasurer"][votes[voter]["treasurer"]]++;
  }
  else {
    voteCount["treasurer"][votes[voter]["treasurer"]] = 1;
  }
}
console.log(voteCount)

var tallies = voteCount["president"];
var record = 0;

for (var name in tallies){
  if(tallies[name] > record){
    record = tallies[name];
    winner = name;
  }
}
officers["president"] = winner;

var tallies = voteCount["vicePresident"];
var record = 0;

for (var name in tallies){
  if(tallies[name] > record){
    record = tallies[name];
    winner = name;
  }
}
officers["vicePresident"] = winner;
// for (var position in voteCount){
//   var tallies = voteCount[position];
//   var record = 0;

//   for (var name in tallies){
//     if(tallies[name] > record){
//       record = tallies[name];
//       winner = name;
//     }
//   }
// officers[position] = winner
// }
// var offices = ["president", "vicePresident", "secretary", "treasurer"];
//   for (var voter in votes) {
//     for (var i=0; i < offices.length; i++){
//       if ((voteCount[offices[i]]).hasOwnProperty(votes[voter][offices[i]])) {
//       voteCount[offices[i]][votes[voter][offices[i]]]++;
//       }
//       else {
//         voteCount[offices[i]][votes[voter][offices[i]]] = 1;
//       }
//     }
// };
// console.log(voteCount);

// Initial Solution

// var declareWinner = function() {
//   for (var office in voteCount){
//     var scores = voteCount[office];
//     var record = 0;
//     var winner;

//     for (var name in scores) {
//       if ((scores[name]) > record) {
//         record = scores[name];
//         winner = name;
//       }
//     }
//     officers[office] = winner;
//   }
// };

// declareWinner();





// __________________________________________
// Refactored Solution






// __________________________________________
// Reflection






// __________________________________________
// Test Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)