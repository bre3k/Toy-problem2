// Prompt the user to enter the marks
const marks = prompt("Enter the student's marks (between 0 and 100):");

// Check if the input is a valid number and is within the range
if (isNaN(marks) || marks < 0 || marks > 100) {
  alert("Invalid input. Please enter a number between 0 and 100.");
} else {
  // Calculate the grade
  let grade;
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 59) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Display the grade
  alert("The student's grade is: " + grade);
}