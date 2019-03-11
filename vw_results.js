"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Gabriel Fuentes 
   Date: 3.5.19   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/





/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

// Declares reportHTML to be a heading of the array raceTitle.
var reportHTML = "<h1>" + raceTitle + "</h1>";

// Loop to add the candidates for each district
for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);

    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>"

    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>"
}

// Sets the HTML of the section element to reportHTML
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

// Function to set the candiate data like party canidate, name, votes, and percentage of votes
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
// A for loop to take arrays and loop them in new variables
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j] + race[raceNum][j];
        
        var candidateParty = party[raceNum][j];

        var candidateVotes = votes[raceNum][j];

        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        rowHTML += "<tr><td>" + candidateName + " (" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + " (" + candidatePercent.toFixed(1) + ")</td>";
// for loop to add the value of the function to show a bar with a color, amount and its different for every party, percent of votes they got
        for (var k = 0; k < candidatePercent; k++) {
          rowHTML  += createBar(candidateParty,candidatePercent);
            
        }

        rowHTML+= "</tr>";
    }
    return  rowHTML;
}

// Function to set a value for a party candidate
function createBar(partyType) {
    var barHTML = "";

// A set of statements so that if the condition is met it will have the barHTML set to the output of the condition based on the party the candidate is in.
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>"
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
            break;
    }

    return barHTML;
}

