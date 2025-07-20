<!DOCTYPE html>
<html>
<head>
  <title>Conditional Logic Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    button {
      margin: 5px;
      padding: 10px;
    }
    #output {
      margin-top: 20px;
      padding: 10px;
      border: 1px solid #ccc;
      background-color: #f9f9f9;
      min-height: 50px;
    }
  </style>
</head>
<body>
  <h2>Choose an option</h2>
  <button onclick="checkPositiveNumber()">Check Positive Number</button>
  <button onclick="checkVotingEligibility()">Check Voting Eligibility</button>
  <button onclick="evaluateGrade()">Evaluate Grade</button>
  <button onclick="showDayOfWeek()">Show Day of the Week</button>

  <div id="output"></div>

  <script>
    function printResult(message) {
      document.getElementById("output").innerText = message;
    }

    // 1. Check if a number is positive
    function checkPositiveNumber() {
      let num = parseInt(prompt("Enter a number:"));
      if (isNaN(num)) {
        printResult("Please enter a valid number.");
      } else if (num > 0) {
        printResult(`${num} is positive`);
      } else {
        printResult(`${num} is not positive`);
      }
    }

    // 2. Check voting eligibility
    function checkVotingEligibility() {
      let age = parseInt(prompt("Enter your age:"));
      if (isNaN(age)) {
        printResult("Please enter a valid age.");
      } else if (age >= 18) {
        printResult("You are eligible to vote.");
      } else {
        printResult("You are not eligible to vote.");
      }
    }

    // 3. Grade evaluation
    function evaluateGrade() {
      let score = parseInt(prompt("Enter your score:"));
      if (isNaN(score)) {
        printResult("Please enter a valid score.");
      } else if (score >= 90) {
        printResult("Grade: A");
      } else if (score >= 80) {
        printResult("Grade: B");
      } else if (score >= 70) {
        printResult("Grade: C");
      } else if (score >= 60) {
        printResult("Grade: D");
      } else {
        printResult("Grade: F");
      }
    }

    // 4. Day of the week
    function showDayOfWeek() {
      let day = parseInt(prompt("Enter a day number (0–6):"));
      let dayName;
      switch (day) {
        case 0:
          dayName = "Sunday";
          break;
        case 1:
          dayName = "Monday";
          break;
        case 2:
          dayName = "Tuesday";
          break;
        case 3:
          dayName = "Wednesday";
          break;
        case 4:
          dayName = "Thursday";
          break;
        case 5:
          dayName = "Friday";
          break;
        case 6:
          dayName = "Saturday";
          break;
        default:
          dayName = "Invalid day number. Please enter a number between 0 and 6.";
      }
      printResult(dayName);
    }
  </script>
</body>
</html>