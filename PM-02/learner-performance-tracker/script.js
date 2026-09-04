const studentDetails = [
    {
        studentNumber: "BDW-001",
        name: "Brandon",
        surname: "De Wet",
        score: 85,
        attendance: 95,
        isSubmitted: true
    },
    {
        studentNumber: "RW-002",
        name: "Ryan",
        surname: "Ward",
        score: 65,
        attendance: 85,
        isSubmitted: true
    },
    {
        studentNumber: "JK-003",
        name: "Johan",
        surname: "Kruger",
        score: 45,
        attendance: 90,
        isSubmitted: true
    },
    {
        studentNumber: "FF-004",
        name: "Firdows",
        surname: "Fakier",
        score: 75,
        attendance: 70,
        isSubmitted: true
    },
    {
        studentNumber: "EW-005",
        name: "Elton",
        surname: "Williams",
        score: 85,
        attendance: 95,
        isSubmitted: false
    },
    {
        studentNumber: "ZM-006",
        name: "Zaakir",
        surname: "Mitchell",
        score: 49,
        attendance: 79,
        isSubmitted: false
    }

];

console.log("JavaScript has loaded.")

// Select DOM Elements:
const checkButton = document.getElementById("checkBtn");
const textInput = document.getElementById("textBlock");
const resultDisplay = document.getElementById("resultDisplay");


// Function triggered when button is clicked
checkButton.addEventListener("click",function(){
  // Add the below to prevent the page from refreshing
  const enteredStudentNumber  = textInput.value.trim().toUpperCase();

    // Ensure that there is actual values specified in the text area and not NULL
    if (enteredStudentNumber === "") {
        resultDisplay.textContent = "Please enter a student number.";
        // This prints out if there is no studentDetails.
        console.log("No student Information found!");
        return;
    }

    // Find the single student matching the entered student number
    const student = studentDetails.find(s => s.studentNumber.toUpperCase() === enteredStudentNumber);

    // If no student matches, update the UI and stop
    if (!student) {
        resultDisplay.textContent = "Student number not found. Please try again.";
        return;
    }

    // Run your exact evaluation logic on the matched student
    let message = "";
    if (student.score >= 80 && student.attendance >= 90 && student.isSubmitted === true) {
        message = `${student.name} ${student.surname} has a score: ${student.score}% and attendance: ${student.attendance}%, Result is Excellent`;
        console.log(`${student.name} ${student.surname} results are Excellent`);
    } 
    else if (student.score >= 50 && student.attendance >= 80 && student.isSubmitted === true) {
        message = `${student.name} ${student.surname} has a score: ${student.score}% and attendance: ${student.attendance}%, Result is Competent!`;
        console.log(`${student.name} ${student.surname} results are Competent`);
    } 
    else {
        message = `${student.name} ${student.surname} has a score: ${student.score}% and attendance: ${student.attendance}%, Does not meet the Requirements! Not Yet Competent.`;
        console.log(`${student.name} ${student.surname} results are Not Yet Competent.`);
    }

    // Push the text to the HTML page
    resultDisplay.textContent = message;
});
