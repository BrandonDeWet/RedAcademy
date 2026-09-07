Project Name: Learner Performance & Intervention Tracker.

Project Learners:
- Brandon De Wet
- Ryan Ward

Overview:
An academy currently manages learner performance information manually using spreadsheets and written records.
Management would like a simple prototype that lecturers can use to review learner assessment performance,
attendance and submission status.

Requirements:
● Store learner information.
● Evaluate learner performance.
● Determine competency status.
● Calculate performance statistics.
● Identify learners who require intervention.
● Present a clear performance summary.

JavaScript Concepts Used:
- Variables and constants — const for values that never change (the learners array, individual functions), let for running totals and counters that update inside loops.
- Objects and arrays — each learner is an object with six properties; all learners are stored together in the learners array.
- Functions with parameters and return values — getLearnerStatus(), getInterventionReasons(), validateLearner() and calculateAverage() all take input and return a result instead of just printing it.
- Conditional logic (if / else if / else) — used to decide competency status and to catch invalid data.
- Logical and comparison operators (&&, ||, ===, <, >=) — used throughout the competency and intervention rules.
- Loops (for...of) — used to process every learner in the array without repeating code.
- Template literals — used for all console output (e.g. Student Number: ${learner.studentNumber}) instead of string concatenation.

Function Explanations:
- getLearnerStatus(learner)
    This function receives one learner object and works out their competency status. It checks the Excellent conditions first (score >= 80 && attendance >= 90 && isSubmitted === true); only if that fails does it check the Competent conditions (score >= 50 && attendance >= 80 && isSubmitted === true); if neither passes, it returns "Not Yet Competent". Checking Excellent before Competent is what stops an Excellent learner from also being counted as Competent. The function returns the result as a string rather than printing it, so the same result can be reused for both the console display and the summary counts.
- getInterventionReasons(learner)
    This function receives one learner object and checks the three intervention conditions (score below 50, attendance below 80, not submitted) independently, rather than with else if. Each condition that is true pushes a matching message onto a reasons array, and the function returns that array. We chose to return an array (rather than a single string) so a learner can carry more than one reason at once, and so the calling code can easily check reasons.length to decide whether to print "Reason:" or "Reasons:", and loop over the array to print each one on its own line.

Tests conducted explanation:
    The runTests() function in script.js runs the test table from the brief automatically and prints PASS/FAIL for each case. Two examples:
    Test 1 — Excellent case: score 85, attendance 95, submitted true. Expected Excellent. This confirms a learner comfortably above all three thresholds is classified correctly and is not also picked up as Competent.
    Test 6 — Multiple intervention reasons: score 49, attendance 79, submitted false. Expected Not Yet Competent, and getInterventionReasons() should return all three reasons at once (score below 50, attendance below 80, not submitted). This confirms the function doesn't stop checking after finding the first problem.
    We also tested a boundary case (score 50, attendance 80, submitted true → expected "Competent") to confirm the >= comparisons are inclusive at the exact threshold, and tested an invalid data case (attendance of 125) to confirm validateLearner() flags it and excludes it from the summary statistics instead of letting it silently skew the average.

Reflection:
This project really challenged my ability to apply knowledge learnt in the KM02 however I feel I did well on this practical as I was able to apply and understand what I have put down. I have used AI and W3 schools to get a better understanding.

1. What part of the program did I primarily work on?
I worked on the code for JavaScript as well as the index.html and attached evidence of testing to the evidence folder as well.

2. What problem did your team encounter?
None

3. How did you solve it?
Adding comments to my code for my partner to understand.

4. What JavaScript concept do you understand better after completing this project?
I understand functions, loops, conditional and if statements a lot better, I did have some struggles but using W3schools and a bit of AI I was able to work through this project a bit easier.