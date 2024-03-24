// Prompt the user to input the speed of the car
const carSpeed = prompt("Enter the speed of the car (in km/s):");

// Convert the speed to a number
const speed = Number(carSpeed);

// Initialize the number of demerit points to 0
let demeritPoints = 0;

// Check if the speed is less than 70
if (speed < 70) {
  // Print "Ok"
  console.log("Ok");
} else {
  // Calculate the number of demerit points
  demeritPoints = Math.floor((speed - 70) / 5);

  // Print the number of demerit points
  console.log("Points: " + demeritPoints);

  // Check if the driver has more than 12 points
  if (demeritPoints > 12) {
    // Print "License suspended"
    console.log("License suspended");
  }
}