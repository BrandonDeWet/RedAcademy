//Array Created for Learners
const learners = [
    {
        studentNumber: "BDW001",
        name: "Brandon",
        surname: "De Wet",
        score: 85,
        attendance: 95,
        isSubmitted: true
    },
    {
        studentNumber: "RW002",
        name: "Ryan",
        surname: "Ward",
        score: 65,
        attendance: 85,
        isSubmitted: true
    },
    {
        studentNumber: "JK003",
        name: "Johan",
        surname: "Kruger",
        score: 45,
        attendance: 90,
        isSubmitted: true
    },
    {
        studentNumber: "FF004",
        name: "Firdows",
        surname: "Fakier",
        score: 75,
        attendance: 70,
        isSubmitted: true
    },
    {
        studentNumber: "EW005",
        name: "Elton",
        surname: "Williams",
        score: 120,
        attendance: 95,
        isSubmitted: true
    },
    {
        studentNumber: "ZM006",
        name: "Zaakir",
        surname: "Mitchell",
        score: 91,
        attendance: 101,
        isSubmitted: false
    }

];

// Function created to ensure learners score and attendance are based on 100 and cannot be lower than 0 and
// value must be a numeber.
function validateLearner(learner) {
    const errors = []; //Empty array which invalid entries will be pushed to.

    if (typeof learner.score !== "number" || learner.score < 0 || learner.score > 100) {
        errors.push(`Invalid score value: ${learner.score}`);
    }

    if (typeof learner.attendance !== "number" || learner.attendance < 0 || learner.score > 100) {
        errors.push(`Invalid attendance value: ${learner.attendance}`);
    }

    const isValid = errors.length === 0;
    return { isValid, errors };
}
// Function to get learner status's,
// If score is above or equal to 80 and attendance is above or equal to 90 and must have submitted is true = Excellent.
// If score is above or equal to 50 and attendance is above or equal to 80 and must have submitted is true = Competent.
// If none of the criteria is met then return Not Yet Competent
function getLearnerStatus(learner) {
    const {score, attendance, isSubmitted } = learner;

    if (score >= 80 && attendance >= 90 && isSubmitted === true) {
        return "Excellent";
    }
    else if (score >= 50 && attendance >= 80 && isSubmitted === true) {
        return "Competent";
    }
    else {
        return "Not Yet Competent"
    }
}

// Receives a learner object and returns an array of every intervention
function getInterventionReasons(learner) {
  const reasons = [];

  if (learner.score < 50) {
    reasons.push("Score below 50%");
  }
  if (learner.attendance < 80) {
    reasons.push("Attendance below 80%");
  }
  if (learner.isSubmitted === false) {
    reasons.push("Assessment not submitted");
  }

  return reasons;
}

// Function to display all learner information inside the console log.
function displayLearner(learner, status) {
    console.log("--------------------------------");
    console.log(`Student Number: ${learner.studentNumber}`);
    console.log(`Name: ${learner.name} ${learner.surname}`);
    console.log(`Score: ${learner.score}%`);
    console.log(`Attendance: ${learner.score}%`);
    console.log(`Submitted: ${learner.isSubmitted}`);
    console.log(`Status: ${status}`);
}

// Calculate average and returns as a string with 1 decimal point.
function calculateAverage(total, count) {
    if (count === 0) {
        return "0.0"; // returns string
    }
    return (total / count).toFixed(1); // This sets it to be 1 decimal point
}

// Loops through the learners array once, displaying each valid learner and builds the structure required for the summary breakdown.
function processAllLearners(learnerList) {
    let totalScore = 0;
    let excellentCount = 0;
    let compentCount = 0;
    let notYetCompetentCount = 0;
    let validCount = 0;
    const invalidLearners = [];

    for (const learner of learnerList) {
        const validation = validateLearner(learner);
// Checks invalid entries from the learners array and pushed to a invalidLearners array.
        if (!validation.isValid) {
            console.log("--------------------------------");
            console.log(`Student Number: ${learner.studentNumber}`);
            console.log(`Name: ${learner.name} ${learner.surname}`);
            console.log("Status: Invalid Data");
            validation.errors.forEach((error) => console.log(`${error}`)); //this is calling the validation const and does a forEach on the error key
            invalidLearners.push(learner);
            continue;
        }
// Will do calculations based on learner status and return how many entries are for each for the learners array.
        const status = getLearnerStatus(learner);
        displayLearner(learner, status);
        totalScore += learner.score;
        validCount++; 

        if (status === "Excellent") {
            excellentCount++;
        }
        else if (status === "Competent") {
            compentCount++;
        }
        else {
            notYetCompetentCount++;
        }
    }

    return {
        totalScore,
        validCount,
        excellentCount,
        compentCount,
        notYetCompetentCount,
        invalidLearners
    };
}

// Function to display totals of learner results
function displaySummary(stats) {
    const averageScore = calculateAverage(stats.totalScore, stats.validCount);

    console.log("========================================\nPERFORMANCE SUMMARY\n========================================");
    console.log(`Total Learners: ${stats.validCount}`);
    console.log(`Excellent Learners: ${stats.excellentCount}`);
    console.log(`Competent Learners: ${stats.compentCount}`);
    console.log(`Not Yet Competent: ${stats.notYetCompetentCount}`);
    console.log(`Average Score: ${averageScore}%`);

    if (stats.invalidLearners.length > 0) {
        console.log(`Learners Excluded: ${stats.invalidLearners.length}`);
    };
}

// Function to generate a List of learners needing intervention and reason why 
function displayInterventionReport(learnerList) {
    console.log("========================================\nLEARNERS REQUIRING INTERVENTION\n========================================");

    let interventionCount = 0;

    for (const learner of learnerList) {
        const validation = validateLearner(learner);
        if (!validation.isValid) {
            continue;
        }

        const reasons = getInterventionReasons(learner);

        if (reasons.length > 0) {
            interventionCount++;
            console.log(`${learner.name} ${learner.surname}`);
            console.log(reasons.length === 1 ? "Reason:" : "Reasons:"); //Logic allows for a reason to be passed based on condition set.
            reasons.forEach((reason) => console.log(`- ${reason}`));
            console.log("");
        }
    }

    if (interventionCount === 0) {
        console.log("No learners currently require intervention.");
    }
}

// Function to test results against expected data.
function runTests() {
    console.log("========================================\nTEST RESULTS\n========================================");
    
    const testCases = [
        { score: 85, attendance: 95, isSubmitted: true, expected: "Excellent" },
        { score: 65, attendance: 85, isSubmitted: true, expected: "Competent" },
        { score: 45, attendance: 90, isSubmitted: true, expected: "Not Yet Competent" },
        { score: 75, attendance: 70, isSubmitted: true, expected: "Not Yet Competent" },
        { score: 85, attendance: 95, isSubmitted: false, expected: "Not Yet Competent" },
        { score: 49, attendance: 79, isSubmitted: false, expected: "Not Yet Competent" },
        { score: 50, attendance: 80, isSubmitted: true, expected: "Competent" } // boundary test
    ];

    testCases.forEach((test, index) => {
        const result = getLearnerStatus(test);
        const outcome = result === test.expected ? "PASS" : "FAIL"; //Decision making condition
        console.log(`Test ${index + 1}: expected "${test.expected}", got "${result}" -> ${outcome}`);
    });
}

// Calling Functions above
console.log("========================================\nLEARNER PERFORMANCE TRACKER\n========================================");
const stats = processAllLearners(learners);
displaySummary(stats);
displayInterventionReport(learners);
runTests();