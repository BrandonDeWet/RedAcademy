//Practical Skill 1 Reading Error Messages
/*function showMessage() {
    console.log("Welcome to PM-03");
}
    showMessage();

let departmentName = "Helpdesk";
console.log(departmentName);*/

//Practical Skill 2: Debugging with Console and Browser Developer Tools
/*let nameInput = "Mahomed";
let departmentInput = "Technical Support";

console.log("Script loaded successfully");
console.log("Name entered:", nameInput);
console.log("Department entered:", departmentInput);

let email = "not-an-email";
if (!email.includes("@")) {
    console.warn("The email address may be invalid.");
}
try {
    throw new Error("Example validation failure");
} catch (error) {
    console.error ("Something went wrong:", error.message);
}*/

// Practical Skill 3: Error Handling with try ... catch
/*try {
    let message = JSON.parse('{status: "Open"}');
    console.log("Ticket status:" message.status);
} catch (error) {
    console.error("Could not read the ticket data")
}
try {
    let message = JSON.parse('{status: "Open"}'); // Invalid Json
    console.log(message.status);
} catch (error) {
    console.error("Could not read the ticket data", error.message );
}*/

// Practical Skill 4: DOM Manipulation
const form = document.querySelector