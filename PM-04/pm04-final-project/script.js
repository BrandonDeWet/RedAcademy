// Adding an array
let requests = [];

// Adding const variables based off our HTML page Note, The ID's are based off the id's in the HTML
const form = document.getElementById("requestForm");
const requesterName = document.getElementById("requesterName");
const department = document.getElementById("department");
const resourceType = document.getElementById("resourceType");
const details = document.getElementById("details");
const priorityLevel = document.getElementById("priorityLevel");

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
  // Pushes data into the array for the request variable above and calls the different functions
  requests.push(request);
  // calls the display summary function
  displaySummary(request);
  // calls the Request List function
  displayRequestList();
  // calls the priorityLevel function
  checkPriorityLevel(request.priority);
  // Function to reset the form to empty after submitting
  form.reset()
});

// Logs out to the Console when JS gets loaded via the HTML page
console.log("JavaScript file loaded.");

// Add function to display information gathered from the form
// When adding a string in JS, do not use ' but rather use ` else you will get code errors
function displaySummary(request){
  summaryContent.innerHTML = `
  <p><strong>Requester:</strong> ${request.requester}</p>
  <p><strong>Department:</strong> ${request.department}</p>
  <p><strong>Resource:</strong> ${request.resource}</p>
  <p><strong>Description:</strong> ${request.details}</p>
  <p><strong>Priority:</strong> ${request.priority}</p>
  `;
  console.log("Summary function has been called for " + request.requester)
}

// Created function to display the values and loop through the values for each request
function displayRequestList(){
  requestList.innerHTML = "";

  // Loop through every request
  requests.forEach(function(request,index){
  // This const variable creates a empty list tag in the HTML to append your providedValues based on what the user typed.
  const providedValues = document.createElement("li");
  // adds my priority level to a class which can be used by the css
  providedValues.classList.add(request.priority);
  console.log(providedValues.className)
  providedValues.innerHTML = `
  <strong>Priority ${request.priority}</strong><br><br>
  <b>Name:</b> ${request.requester}<br>
  <b>Department:</b> ${request.department}<br>
  <b>Resource:</b> ${request.resource}<br>
  <b>Description:</b> ${request.details}<br>
  `;
  console.log("List function called and should display on the HTML page")
  requestList.appendChild(providedValues);
  });

}

// Function to call Priority Level. IF statement to check if criteria is matched
// == will be the values need to match, === will be when data type and values match.
function checkPriorityLevel(priority){
  if (priority === "Low") {
    priorityLevel.innerHTML = "Request has been marked as Low Priority.";
  } else if (priority === "Medium") {
    priorityLevel.innerHTML = "Request has been marked as Medium Priority.";
  } else if (priority === "High") {
    priorityLevel.innerHTML = "Request has been marked as High Priority."
  } else if (priority === "Critical") {
    priorityLevel.innerHTML = "Request has been marked as Critical!!!"
  }
  console.log("User has created a Request with a priority level: " + priority)
}

//The requestSend is the ID given to the button in HTML
const button = document.getElementById("requestSend");
button.addEventListener("click", function(){
  console.log("User clicked on the submit button")
  alert("Thank you, your Request has been received!")
});

