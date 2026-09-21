// Adding an array
let requests = [];

const form = document.getElementById("requestForm"); // The requestForm is the ID given to the form in HTML
const requesterName = document.getElementById("requesterName"); // The requesterName is the ID given to the text field in HTML
const emailAddress = document.getElementById("emailAddress");  // The emailAddress is the ID given to the email field in HTML
const emailError = document.getElementById("emailError"); // This const is specifically used for error handling in the event listner below
const department = document.getElementById("department"); // The department is the ID given to the drop down department field in HTML
const resourceType = document.getElementById("resourceType"); // The resourceType is the ID given to the resource type drop down  field in HTML
const details = document.getElementById("details"); // The details is the ID given to the test description field in HTML
const priority = document.getElementById("priority");
const priorityLevel = document.getElementById("priorityLevel"); // The priorityLevel is the ID given to the priority field in HTML
const button = document.getElementById("requestSend"); // The requestSend is the ID given to the button in HTML

// Logs out to the Console when JS gets loaded via the HTML page
console.log("JavaScript file loaded.");

// Function for adding an event listener to our form
form.addEventListener("submit",function(event){
  // Add the below to prevent the page from refreshing
  event.preventDefault();
  // Object creation for containing all request data
  const request = {
    requester: requesterName.value,
    email: emailAddress.value,
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
  // Alert pop up on webpage
  alert(`Thank you, ${request.requester} your Request has been received, and an update will be provided to ${request.email}.`)
  // Function to reset the form to empty after submitting
  form.reset()
  // Reset borders and errors after form submitting
  emailAddress.style.borderColor = '';
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
    isEmailValid && // Form only validates if email layout is correct
    priority.value.trim() !== ""
  ) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

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
  console.log(`Summary function has been called for ${request.requester}`);
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
    <b>Email:</b> ${request.email}<br>
    <b>Department:</b> ${request.department}<br>
    <b>Resource:</b> ${request.resource}<br>
    <b>Description:</b> ${request.details}<br>
    `;
  console.log("List function called and should display on the HTML page")
  requestList.appendChild(providedValues);
  });
}

// Function to call Priority Level. IF statement to check if criteria is matched
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
  console.log(`User has created a Request with a priority level: ${priority}`);
}


// add event lister for the function validate form
requesterName.addEventListener('input',function (event) {
  // replaces any number with a blank line
  this.value = this.value.replace(/[0-9]/g, '');
});

department.addEventListener("change", validateForm);
resourceType.addEventListener("change", validateForm);
details.addEventListener("input", validateForm);
priority.addEventListener("change", validateForm);

// Event listener to add validation to my email html field
emailAddress.addEventListener('input', function (event) {
  const emailValue = this.value.trim();
  const emailPattern = /^[^\s@]+@redpandasoftware\.co\.za$/i;
  
  if (emailPattern.test(emailValue)) {
    emailError.style.display = 'none';
    emailAddress.style.borderColor = 'green'; 
  } else {
    emailError.style.display = 'block';
    emailAddress.style.borderColor = 'red';
  }
  validateForm();
});
