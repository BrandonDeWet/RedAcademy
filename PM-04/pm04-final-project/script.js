// Adding an array
let requests = [];

// Create a number for each new ticket
let nextTicketId = 6;

const form = document.getElementById("requestForm"); // The requestForm is the ID given to the form in HTML
const requesterName = document.getElementById("requesterName"); // The requesterName is the ID given to the text field in HTML
const emailAddress = document.getElementById("emailAddress");  // The emailAddress is the ID given to the email field in HTML
const emailError = document.getElementById("emailError"); // This const is specifically used for error handling in the event listner below
const department = document.getElementById("department"); // The department is the ID given to the drop down department field in HTML
const resourceType = document.getElementById("resourceType"); // The resourceType is the ID given to the resource type drop down field in HTML
const details = document.getElementById("details"); // The details is the ID given to the test description field in HTML
const priority = document.getElementById("priority");
const priorityLevel = document.getElementById("priorityLevel"); // The priorityLevel is the ID given to the priority field in HTML
const button = document.getElementById("requestSend"); // The requestSend is the ID given to the button in HTML

// Connect to the HTML sections used to display information
const summaryContent = document.getElementById("summaryContent");
const requestList = document.getElementById("requestList");

// Connect to the ticket count sections in the HTML
const openTicketCount = document.getElementById("openTicketCount");
const resolvedTicketCount = document.getElementById("resolvedTicketCount");

// Logs out to the Console when JS gets loaded via the HTML page
console.log("JavaScript file loaded.");

// Five existing tickets will appear every time the page loads
requests = [
  {
    id: 1,
    requester: "Tony Stark",
    email: "tonys@redpandasoftware.co.za",
    department: "Infrastructure",
    resource: "Server Unavailable",
    details: "Unable to connect to multiple redpanda servers",
    priority: "Critical",
    status: "Open",
    priorityHistory: [],
    resolutionReason: ""
  },
  {
    id: 2,
    requester: "Peter Parker",
    email: "peterp@redpandasoftware.co.za",
    department: "Database Support",
    resource: "Database Connection Timeout",
    details: "Users are unable to connect to the test server with login details.",
    priority: "Medium",
    status: "Open",
    priorityHistory: [],
    resolutionReason: ""
  },
  {
    id: 3,
    requester: "Bruce Wayne",
    email: "brucew@redpandasoftware.co.za",
    department: "DevOps",
    resource: "Software Fault",
    details: "WebPage is getting a 404 error.",
    priority: "High",
    status: "Open",
    priorityHistory: [],
    resolutionReason: ""
  },
  {
    id: 4,
    requester: "Mary Jane",
    email: "maryj@redpandasoftware.co.za",
    department: "Helpdesk",
    resource: "Software Fault",
    details: "User is unable to print report from the workstation.",
    priority: "High",
    status: "Open",
    priorityHistory: [],
    resolutionReason: ""
  },
  {
    id: 5,
    requester: "Samwise Gamgee",
    email: "samwiseg@redpandasoftware.co.za",
    department: "Production Support",
    resource: "Service Unresponsive",
    details: "A test service has stopped responding.",
    priority: "Low",
    status: "Resolved",
    priorityHistory: [],
    resolutionReason: "The service was restarted and successfully tested."
  }
];

// Log the five sample tickets
console.log("Five sample tickets have been loaded.", requests);

// Display the existing tickets as soon as the page loads
displayRequestList();

// Function for adding an event listener to our form
form.addEventListener("submit", function(event) {
  // Add the below to prevent the page from refreshing
  event.preventDefault();

  console.log("New ticket submission started.");

  // Object creation for containing all request data
  const request = {
    id: nextTicketId,
    requester: requesterName.value.trim(),
    email: emailAddress.value.trim(),
    department: department.value,
    resource: resourceType.value,
    details: details.value.trim(),
    priority: priority.value,
    status: "Open",
    priorityHistory: [],
    resolutionReason: ""
  };

  // Check that all required information has been entered
  if (
    request.requester === "" ||
    request.email === "" ||
    request.department === "" ||
    request.resource === "" ||
    request.details === "" ||
    request.priority === ""
  ) {
    alert("Please complete all required fields.");
    console.log("Ticket creation stopped: a required field is empty.");
    return;
  }

  // Pushes data into the array for the request variable above
  requests.push(request);

  // Increase the ticket number for the next new ticket
  nextTicketId++;

  console.log("Ticket created successfully:", request);

  // Calls the display summary function
  displaySummary(request);

  // Calls the Request List function
  displayRequestList();

  // Calls the priorityLevel function
  checkPriorityLevel(request.priority);

  // Alert pop up on webpage
  alert(
    `Thank you, ${request.requester}. Your ticket #${request.id} has been received. An update will be provided to ${request.email}.`
  );

  // Function to reset the form to empty after submitting
  form.reset();

  // Reset borders and errors after form submitting
  emailAddress.style.borderColor = "";
  emailError.style.display = "none";

  // Calling validate form
  validateForm();
});

// function for submit button validate if fields are populated
// !== means that it should not equal the value of null
function validateForm() {
  const emailPattern = /^[^\s@]+@redpandasoftware\.co\.za$/i;
  const isEmailValid = emailPattern.test(emailAddress.value.trim());

  if (
    requesterName.value.trim() !== "" &&
    department.value.trim() !== "" &&
    resourceType.value.trim() !== "" &&
    details.value.trim() !== "" &&
    isEmailValid && // Form only validates if email layout is correct
    priority.value.trim() !== ""
  ) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

// Escape user-entered text before displaying it as HTML
// This prevents entered text from being treated as HTML code
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function(character) {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return replacements[character];
  });
}

// Add function to display information gathered from the form
// When adding a string in JS, do not use ' but rather use ` else you will get code errors
function displaySummary(request) {
  summaryContent.innerHTML = `
    <p><strong>Ticket Number:</strong> ${request.id}</p>
    <p><strong>Requester:</strong> ${escapeHTML(request.requester)}</p>
    <p><strong>Department:</strong> ${escapeHTML(request.department)}</p>
    <p><strong>Resource:</strong> ${escapeHTML(request.resource)}</p>
    <p><strong>Description:</strong> ${escapeHTML(request.details)}</p>
    <p><strong>Priority:</strong> ${escapeHTML(request.priority)}</p>
    <p><strong>Status:</strong> ${escapeHTML(request.status)}</p>
  `;

  console.log(`Summary function has been called for ${request.requester}`);
}

// Created function to display the values and loop through the values for each request
function displayRequestList() {
  requestList.innerHTML = "";

  // Loop through every request
  requests.forEach(function(request) {

    // This const variable creates an empty list tag in the HTML to append your providedValues based on what the user typed.
    const providedValues = document.createElement("li");

    // adds my priority level to a class which can be used by the CSS
    providedValues.classList.add(request.priority);

    console.log(providedValues.className);

    // Display the ticket information
    providedValues.innerHTML = `
      <strong>Ticket #${request.id} - Priority: ${escapeHTML(request.priority)}</strong><br><br>
      <b>Name:</b> ${escapeHTML(request.requester)}<br>
      <b>Email:</b> ${escapeHTML(request.email)}<br>
      <b>Department:</b> ${escapeHTML(request.department)}<br>
      <b>Resource:</b> ${escapeHTML(request.resource)}<br>
      <b>Description:</b> ${escapeHTML(request.details)}<br>

      <p class="ticket-status">
        Status: ${escapeHTML(request.status)}
      </p>
    `;

    // Display the reason for the latest priority change, if one exists
    if (request.priorityHistory.length > 0) {
      const latestChange =
        request.priorityHistory[request.priorityHistory.length - 1];

      const reasonBox = document.createElement("div");
      reasonBox.className = "priority-reason";

      reasonBox.innerHTML = `
        <strong>Latest priority change:</strong><br>
        ${escapeHTML(latestChange.oldPriority)}
        to ${escapeHTML(latestChange.newPriority)}<br>
        <strong>Reason:</strong>
        ${escapeHTML(latestChange.reason)}
      `;

      providedValues.appendChild(reasonBox);
    }

    // Display the resolution message if the ticket has been resolved
    if (request.status === "Resolved") {
      const resolutionBox = document.createElement("div");
      resolutionBox.className = "resolution-message";

      resolutionBox.innerHTML = `
        <strong>Resolution reason:</strong><br>
        ${escapeHTML(request.resolutionReason)}
      `;

      providedValues.appendChild(resolutionBox);
    }

    // Create a section to hold the ticket action buttons
    const actionButtons = document.createElement("div");
    actionButtons.className = "ticket-actions";

    // Create the change priority button
    const changeButton = document.createElement("button");
    changeButton.type = "button";
    changeButton.textContent = "Change Priority";
    changeButton.className = "change-priority-button";

    // Critical tickets and resolved tickets cannot have their priority changed
    if (
      request.priority === "Critical" ||
      request.status === "Resolved"
    ) {
      changeButton.disabled = true;
      changeButton.title = request.priority === "Critical"
        ? "Critical tickets cannot have their priority changed."
        : "Resolved tickets cannot have their priority changed.";
    }

    // Add an event listener to the change priority button
    changeButton.addEventListener("click", function() {
      changePriority(request.id);
    });

    actionButtons.appendChild(changeButton);

    // Create the resolve ticket button
    const resolveButton = document.createElement("button");
    resolveButton.type = "button";
    resolveButton.textContent = "Mark as Resolved";
    resolveButton.className = "resolve-ticket-button";

    // Do not allow a resolved ticket to be resolved again
    if (request.status === "Resolved") {
      resolveButton.disabled = true;
      resolveButton.textContent = "Already Resolved";
    }

    // Add an event listener to the resolve button
    resolveButton.addEventListener("click", function() {
      resolveTicket(request.id);
    });

    actionButtons.appendChild(resolveButton);

    // Add the buttons to the ticket
    providedValues.appendChild(actionButtons);

    console.log(`Displaying ticket #${request.id}`);

    // Add the ticket to the HTML list
    requestList.appendChild(providedValues);
  });

  // Update ticket counts whenever the ticket list is displayed
  updateTicketCounts();

  console.log("List function called and should display on the HTML page");
}

// Function to change the priority of an existing ticket
function changePriority(ticketId) {
  console.log(`Priority change requested for ticket #${ticketId}`);

  // Find the ticket that matches the selected ticket number
  const request = requests.find(function(ticket) {
    return ticket.id === ticketId;
  });

  // Check whether the ticket exists
  if (!request) {
    console.log("Ticket not found.");
    alert("Ticket could not be found.");
    return;
  }

  // Critical tickets cannot have their priority changed
  if (request.priority === "Critical") {
    alert("Critical tickets cannot have their priority changed.");
    console.log("Priority change rejected: ticket is Critical.");
    return;
  }

  // Resolved tickets cannot be changed
  if (request.status === "Resolved") {
    alert("Resolved tickets cannot have their priority changed.");
    console.log("Priority change rejected: ticket is resolved.");
    return;
  }

  // Ask the user for the new priority
  const newPriority = prompt(
    "Current priority: " + request.priority +
    "\nEnter the new priority: Low, Medium, High or Critical"
  );

  // Stop if the user cancels the prompt
  if (newPriority === null) {
    console.log("Priority change cancelled by the user.");
    return;
  }

  // Remove unnecessary spaces
  const cleanedPriority = newPriority.trim().toLowerCase();

  // Convert the entered priority into the correct format
  let selectedPriority = "";

  if (cleanedPriority === "low") {
    selectedPriority = "Low";
  } else if (cleanedPriority === "medium") {
    selectedPriority = "Medium";
  } else if (cleanedPriority === "high") {
    selectedPriority = "High";
  } else if (cleanedPriority === "critical") {
    selectedPriority = "Critical";
  } else {
    alert("Invalid priority. Please enter Low, Medium, High or Critical.");
    console.log("Priority change rejected: invalid priority.");
    return;
  }

  // Do not record a change if the priority is unchanged
  if (selectedPriority === request.priority) {
    alert("The new priority is the same as the current priority.");
    console.log("Priority has not changed.");
    return;
  }

  // The user must provide a reason for changing the priority
  const reason = prompt("Please enter the reason for changing the priority:");

  // Stop if the user cancels the reason prompt
  if (reason === null) {
    console.log("Priority change cancelled before saving.");
    return;
  }

  // Check that the reason is not empty
  if (reason.trim() === "") {
    alert("A reason is required to change the priority.");
    console.log("Priority change rejected: no reason provided.");
    return;
  }

  // Save the old priority before updating it
  const oldPriority = request.priority;

  // Update the ticket priority
  request.priority = selectedPriority;

  // Store the reason and old/new priority for the ticket history
  request.priorityHistory.push({
    oldPriority: oldPriority,
    newPriority: selectedPriority,
    reason: reason.trim()
  });

  console.log(`Ticket #${ticketId} priority changed.`);
  console.log("Previous priority:", oldPriority);
  console.log("New priority:", selectedPriority);
  console.log("Reason:", reason.trim());

  // Refresh the ticket list and summary
  displayRequestList();
  displaySummary(request);
  checkPriorityLevel(request.priority);

  alert(`Ticket #${ticketId} priority changed to ${selectedPriority}.`);
}

// Function to mark a ticket as resolved
function resolveTicket(ticketId) {
  console.log(`Resolution requested for ticket #${ticketId}`);

  // Find the selected ticket
  const request = requests.find(function(ticket) {
    return ticket.id === ticketId;
  });

  // Check whether the ticket exists
  if (!request) {
    alert("Ticket could not be found.");
    console.log("Resolution rejected: ticket not found.");
    return;
  }

  // Check whether the ticket is already resolved
  if (request.status === "Resolved") {
    alert("This ticket has already been resolved.");
    console.log("Resolution rejected: ticket is already resolved.");
    return;
  }

  // Ask the user why the ticket has been resolved
  const reason = prompt("Please explain why this ticket has been resolved:");

  // Stop if the user cancels
  if (reason === null) {
    console.log("Ticket resolution cancelled by the user.");
    return;
  }

  // A resolution reason is compulsory
  if (reason.trim() === "") {
    alert("You must provide a reason for resolving this ticket.");
    console.log("Resolution rejected: no reason provided.");
    return;
  }

  // Update the ticket status and save the resolution reason
  request.status = "Resolved";
  request.resolutionReason = reason.trim();

  console.log(`Ticket #${ticketId} has been resolved.`);
  console.log("Resolution reason:", request.resolutionReason);

  // Refresh the ticket list and summary
  displayRequestList();
  displaySummary(request);

  alert(`Ticket #${ticketId} has been marked as Resolved.`);
}

// Function to call Priority Level. IF statement to check if criteria is matched
function checkPriorityLevel(priority) {
  if (priority === "Low") {
    priorityLevel.innerHTML = "Request has been marked as Low Priority.";
  } else if (priority === "Medium") {
    priorityLevel.innerHTML = "Request has been marked as Medium Priority.";
  } else if (priority === "High") {
    priorityLevel.innerHTML = "Request has been marked as High Priority.";
  } else if (priority === "Critical") {
    priorityLevel.innerHTML = "Request has been marked as Critical!!!";
  }

  console.log(`User has created or updated a Request with priority level: ${priority}`);
}

 // Function to count open and resolved tickets
function updateTicketCounts() {

    // Count tickets that are still open
    const openTickets = requests.filter(function(request) {
        return request.status === "Open";
    }).length;

    // Count tickets that have been resolved
    const resolvedTickets = requests.filter(function(request) {
        return request.status === "Resolved";
    }).length;

    // Display the counts on the HTML page
    openTicketCount.textContent = `Open Tickets: ${openTickets}`;

    resolvedTicketCount.textContent =
        `Resolved Tickets (Closed): ${resolvedTickets}`;

    // Display the counts in the browser console
    console.log("Open tickets:", openTickets);
    console.log("Resolved tickets:", resolvedTickets);
}

// add event lister for the function validate form
requesterName.addEventListener("input", function(event) {
  // replaces any number with a blank line
  this.value = this.value.replace(/[0-9]/g, "");
});

department.addEventListener("change", validateForm);
resourceType.addEventListener("change", validateForm);
details.addEventListener("input", validateForm);
priority.addEventListener("change", validateForm);

// Also validate the form when the requester name changes
requesterName.addEventListener("input", validateForm);

// Event listener to add validation to my email HTML field
emailAddress.addEventListener("input", function(event) {
  const emailValue = this.value.trim();
  const emailPattern = /^[^\s@]+@redpandasoftware\.co\.za$/i;

  if (emailPattern.test(emailValue)) {
    emailError.style.display = "none";
    emailAddress.style.borderColor = "green";
  } else {
    emailError.style.display = "block";
    emailAddress.style.borderColor = "red";
  }

  validateForm();
});

// Validate the form when the page first loads
validateForm();

console.log("Ticket management system is ready.");