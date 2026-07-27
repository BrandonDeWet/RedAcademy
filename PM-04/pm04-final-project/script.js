// Adding an array
let requests = [];

// Adding const variables based off our HTML page Note, The ID's are based off the id's for the labels in the HTML
const form = document.getElementById("requestForm");
const requesterName = document.getElementById("requesterName");
const department = document.getElementById("department");
const resourceType = document.getElementById("resourceType");
const details = document.getElementById("details");
const urgency = document.getElementById("priority");

// Function for adding an event listener to our form
form.addEventListener("submit",function(event){
  // Add the below to prevent the page from refreshing
  event.preventDefault();
  // Object creation for containing all request data
  const request = {
    requester: requesterName.value,
    department: department.value,
    resource: resourceType.value,
    details: details.value,
    priority: priority.value
  };
  // Pushes data into the array for the request variable above
  requests.push(request);
});

// Logs out to the Console when JS gets loaded via the HTML page
console.log("JavaScript file loaded.");

//The requestSend is the ID given to the button in HTML
const button = document.getElementById("requestSend");

button.addEventListener("click", function() {
  console.log("User clicked on the submit button")
  alert("Your Request has been sent!")
});

