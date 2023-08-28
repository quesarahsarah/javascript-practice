// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require('readline-sync');
let astronautCount = Number(input.question("How many astronauts are going on this mission? "));

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
// let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";
let separation = "-------------------------------------";



// Write code to generate the LC04 report here:

console.log(
    separation + "\n" +
    "> LC04 - LAUNCH CHECKLIST" + "\n" +
    separation + "\n" +
    "Date:", date + "\n" +
    "Time:", time + "\n\n" +
    separation + "\n" +
    "> ASTRONAUT INFO" + "\n" +
    separation + "\n" +
    "* count:", astronautCount + "\n" +
    "* status:", astronautStatus + "\n\n" +
    separation + "\n" +
    "> FUEL DATA" + "\n" +
    separation + "\n" +
    "* Fuel temp celsius:", fuelTempCelsius,"C" + "\n" +
    "* Fuel level:", fuelLevel + "\n\n" +
    separation + "\n" +
    "> MASS DATA" + "\n" +
    separation + "\n" +
    "* Crew mass:", crewMassKg, "kg" + "\n" +
    "* Fuel mass:", fuelMassKg, "kg" + "\n" +
    "* Shuttle mass:", shuttleMassKg, "kg" + "\n" +
    "* Total mass:", totalMassKg, "kg" + "\n\n" +
    separation + "\n" +
    "> FLIGHT PLAN" + "\n" +
    separation + "\n" +
    "* weather:", weatherStatus + "\n\n" +
    separation + "\n" +
    "> OVERALL STATUS" + "\n" +
    separation + "\n" +
    "* Clear for takeoff: YES"

);


// When done, have your TA check your code.

// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
//**bonus done**
