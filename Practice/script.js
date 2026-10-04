// 1. Array storing exactly four structurally sound booking objects
const bookingRecords = [
    { id: "ref-001", customer:"user1", serviceType: "Consulting", hours: 3, status: "Confirmed" },
    { id: "ref-002", customer:"user2", serviceType: "Design", hours: 4, status: "Pending" },
    { id: "ref-003", customer:"user3", serviceType: "Consulting", hours: 2, status: "Completed" },
    { id: "ref-004", customer:"user4", serviceType: "Design", hours: 6, status: "Confirmed" }
];
// 2. Display and Filter logic handler using native .filter() array methods
function displayBookings(filterStatus = "ALL") {
    const listElement = document.getElementById("recordList");
    listElement.innerHTML = ""; // Wipe view clean before rendering

    // Use .filter() method to isolate matching criteria records cleanly
    const filterResults = bookingRecords.filter(booking => {
        return filterStatus === "ALL" || booking.status === filterStatus;
    });
    // Render results dynamically onto the screen canvas
    filterResults.forEach(booking => {
        const li = document.createElement("li");
        li.textContent = `ID ${booking.id}: ${booking.customer} - ${booking.serviceType} ${booking.hours}hrs ${booking.status}`;
        listElement.appendChild(li);
    });
}
// 3. Dropdown change listener implementation
document.getElementById("statusFilter").addEventListener("change", function (e) {
    displayBookings(e.target.value);
});
// Run list function initially on script startup
displayBookings();

// Section B1
const form = document.getElementById("bookingForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const service = document.getElementById("serviceType").value;
    // Section B2 convert hours input to a number for calculations
    const hours = Number(document.getElementById("hours").value);
    const urgent = document.getElementById("isUrgent").checked;
    // Section B2
    const hourlyRate = 50;
    const errorBox = document.getElementById("validationError");
    errorBox.style.display = "none";
    errorBox.content = "";

    // Section B3
    // Function 1: Receives hours and rate parameters and returns multiplication product (4 Marks)
    function calculateBaseCost(hours, hourlyRate) {
        return hours * hourlyRate;
    }

    // Function 2: Calculates total values including conditional urgency variables (4 Marks)
    function calculateFinalCost(baseCost, isUrgent) {
        const surchargeRate = 1.15; // 15% increase value configuration
        if (isUrgent) {
            return baseCost * surchargeRate;
        }
        return baseCost;
    }
    const baseCost = calculateBaseCost(hours, hourlyRate);
    const finalAmount = calculateFinalCost(baseCost, urgent);


    // Section B4: String/Number validations & validation text updates (4 Marks)
    if (name.trim() === "" || service === "") {
        errorBox.textContent = "Error: Customer Name and Service Type are strictly required fields.";
        errorBox.style.display = "block";
        return; // Pauses if validation fails
    }

    if (hours === "" || isNaN(hours) || hours <= 0) {
        errorBox.textContent = "Error: Hours must present a valid positive number greater than 0.";
        errorBox.style.display = "block";
        return; // Halt processing
    }

    document.getElementById("outName").textContent = "Name: " + name;
    document.getElementById("outService").textContent = "Service: " + service;
    document.getElementById("outHours").textContent = "Hours: " + hours;
    document.getElementById("outUrgent").textContent = "Is Urgent: " + (urgent ? "Yes" : "No");
    // Section B2
    document.getElementById("outCost").textContent = "Total Cost: R" + finalAmount;
})

