// Section B1: - creating an array of objects
const equipmentList = [
    {id: "ref-01", itemName: "Bag", category: "Accessory", branch: "1", status: "Maintenance", replacementValue: 200 },
    {id: "ref-02", itemName: "Shoe", category: "Clothing", branch: "1", status: "Confirmed", replacementValue: 250 },
    {id: "ref-03", itemName: "Top", category: "Clothing", branch: "2", status: "Maintenance", replacementValue: 100 },
    {id: "ref-04", itemName: "Pants", category: "Clothing", branch: "2", status: "Pending", replacementValue: 300 },
    {id: "ref-05", itemName: "Bag", category: "Accessory", branch: "3", status: "Closed", replacementValue: 80 }
];
// creating a readable format in the console output.
equipmentList.forEach(function (item) {
    console.log(`ID: ${item.id}
    Item: ${item.itemName}
    Category: ${item.category}
    Branch: ${item.branch}
    Status: ${item.status}
    Replacement Value: R${item.replacementValue}
    `);
    });

// ####################################################################################################################
// Section B2 - creating a filter for Maintenance
const maintenanceItems = equipmentList.filter(function (item){
   return item.status === "Maintenance";
});
// Creating a loop to display all statuses for Maintenance
maintenanceItems.forEach(function (item){
   console.log(
       `Item: ${item.itemName}
       Branch: ${item.branch}
       Status: ${item.status}
       `
   );
});

// ####################################################################################################################
// Section B3 - Creating formatted labels using map  Note: Maps create an array.
const equipmentLabels = equipmentList.map(function (item){
   return item.itemName + " - " + item.category;
});
console.log(equipmentLabels);
// Calculate the total replacement Value
const totalReplacementValue = maintenanceItems.reduce(function (total, item){
    return total + item.replacementValue;
},0);

console.log("Total Replacement value R" + totalReplacementValue);

// ####################################################################################################################
// Section B4 - Creating validation based on HTML dropdown
const branchSelection = document.getElementById("branchSelection");
const equipmentDisplay = document.getElementById("equipmentDisplay");

function displayEquipment(branch) {
    //Creating a filter here
    const filteredEquipment = equipmentList.filter(function (item){
        return branch === "" || item.branch === branch;
    });

    equipmentDisplay.innerHTML = "";
    // Checks if item exists
    if (filteredEquipment.length === 0) {
        equipmentDisplay.textContent = "No Equipment found for this branch.";
        return;
    }
    // Display matching equipment
    filteredEquipment.forEach(function (item){
        const equipmentItem = document.createElement("p");

        equipmentItem.textContent = `
        Item: ${item.itemName}
        Branch: ${item.branch}
        Status: ${item.status}
        `
        equipmentDisplay.appendChild(equipmentItem);
        // Section B6 - Testing and Debugging
        console.log(`Selected Branch: ${item.branch}`);
        console.log(`Filtered Equipment: ${item.itemName}`);
    });
}
// Add an event listener to when the branch list updates
branchSelection.addEventListener("change", function (){
    displayEquipment(branchSelection.value);
});
displayEquipment("");

// ####################################################################################################################
// Section B5 - Using fetch() to make a GET request and display on the HTML page
const apiRequest = document.getElementById("apiRequest");

async function fetchEquipment() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2");

        // Checking to see if response was successful
        if (!response.ok) {
            throw new Error("Failed to retrieve data");
        }

        const data = await response.json();

        // Display the returned records
        data.forEach(function (record){
           const result = document.createElement("p");

           result.textContent = `
           ID: ${record.id}
           Title: ${record.title}
           `;
           apiRequest.appendChild(result);
        });
    } catch (error) {
        apiRequest.textContent = "Unable to load data. Please try again later.";
        console.error("API error:", error);
    }
}
fetchEquipment();

// ####################################################################################################################