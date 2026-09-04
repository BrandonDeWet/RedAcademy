// Practice Exercise 1:
/*console.log("Learner: Brandon De Wet");
console.log("Department: DevOps.");
console.log("I want to understand basic JavaScript scripting.");*/


//Practice Exercise 2:
/*const requestNumber = "REQ-501";
const employeeName = "Fatima Jacobs";
const departmentName = "Operations";
const requestType = "Laptop Accessory";
let isApproved = false;

console.log(requestNumber);
console.log(employeeName); 
console.log(departmentName);
console.log(requestType);
console.log(isApproved);*/


//Practice Exercise 3:
/*const departmentName = "Helpdesk";
const openTicketCount = 18;
const escalationRequired = true;

console.log(
    `${departmentName} has ${openTicketCount} open tickets. Escalation required: ${escalationRequired}`
);*/

//Practice Exercise 4:
/*const numberOfTickets = 7;
const minutesPerTicket = 20;
const totalMinutes = numberOfTickets * minutesPerTicket;
const isLongWorkload = totalMinutes > 120;

console.log("Total minutes:", totalMinutes);
console.log("Long workload:", isLongWorkload);*/

//Practice Exercise 5:
/*const issueCategory = "Network";
if (issueCategory === "Password") {
    console.log("Reset password process.");
} else if (issueCategory === "Network") {
    console.log("Escalate to network team.");
} else {
    console.log("Assign to general support.");
}*/

//Practice Exercise 6:
/*function getDepartmentQueue(department) {
    if (department === "Helpdesk") {
        return "Assign to first-line support.";
    } else if (department === "DevOps") {
        return "Escalate to infrastructure queue.";
    } else if (department === "Software Support") {
        return "Assign to application support queue."; 
    } else {
        return "Assign to general support queue.";
    }
}

console.log(getDepartmentQueue("DevOps"));*/

//Practice Exercise 7:
/*const departmentNames = ["Helpdesk", "DevOps", "Software Support"];

console.log("First Deployment:", departmentNames[0]);
console.log("Total departments:", departmentNames.length);*/

//Practice Exercise 8:
/*const tasks = [
    "Check email",
    "Review support tickets",
    "Update ticket status",
    "Attend stand-up",
    "Submit report"
];

for (const task of tasks) {
    console.log(`Task to complete: ${task}`);
}*/

//Practice Exercise 9:
/*//Check if a support ticket should be escalated.
const ticketPriority = "High";
const ticketAgeDays = 4;

if (ticketPriority === "High" && ticketAgeDays >= 3) {
    console.log("Escalate this ticket to the support lead.");
} else {
    console.log("Continue with the normal support process.");
}*/

//End of PM02