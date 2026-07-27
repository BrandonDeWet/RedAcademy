// Logs out to the Console when JS gets loaded via the HTML page
console.log("JavaScript file loaded.");

//The requestSend is the ID given to the button in HTML
const button = document.getElementById("requestSend");

button.addEventListener("click", function() {
  console.log("User clicked on the submit button")
  alert("Your Request has been sent!")
});

