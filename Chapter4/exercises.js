let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distToMarsKm = 225000000;
let distToMoonKm = 384400;
const milesPerKm = 0.621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distToMarsKm);
console.log(typeof distToMoonKm);
console.log(typeof milesPerKm);

let milesToMars = distToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

console.log(shuttleName, "will take", daysToMars, "days to reach Mars.");

let milesToMoon = distToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName, "will take", daysToMoon, "days to reach the Moon.");