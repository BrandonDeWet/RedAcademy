//NOTES:
// Single line comment
/* multi line comment */

// Topic 1 Mini Activity
/*let learnerName = "Brandon De Wet";
let department = "DevOps";
let openTickets = "In Progress";

console.log("Hi " +learnerName+ ", You are currently in the " +department+ " department and have tickets " +openTickets+".");*/

// Topic 2 Mini Activity
/*const requestId = 215;
const itemRequested = "Lounge Suite";
let quantity = 1;
let isApproved = true;

console.log("Hi valued customer your purchase of " +quantity+ ", " +itemRequested+ " has been approved status is: " +isApproved+ ". Your reference number is: " +requestId+ ".");*/

// Topic 3 Mini Activity
/*let fullName = "Brandon De Wet";
let age = 28;
let hasLaptop = true;
let completeModules = ["JavaScript", "Azure", "Docker", "Kubernetes", "MS-SQL"];

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof hasLaptop);
console.log(typeof completeModules);*/

// Topic 4 Mini Activity
/*const storeItemPrice = 15.50;
let quantity = 2;
let discount = 0.10;
const vatRate = 0.15;
const subTotal = storeItemPrice * quantity;
const discountedSubtotal = subTotal * discount;
const vatAmount = subTotal * vatRate;
const finalAmount = subTotal - discountedSubtotal + vatAmount;

console.log("SubTotal: R"+subTotal+"");
console.log("Total Discount: R"+discountedSubtotal+"");
console.log("Total Vat Amount R"+vatAmount+"");
console.log("Final Total Amount R"+finalAmount+"");*/

// Topic 5 Mini Activity
/*let availableLeaveDays = 10;
let requestedLeaveDays = 4;

if (requestedLeaveDays === 0) {
    console.log("Please review your leave application");
}
    else if (requestedLeaveDays > availableLeaveDays) {
        console.log("Leave not Approved");
    }   
    else if (requestedLeaveDays <= availableLeaveDays) {
        console.log("Leave is approved");
    }
    else {
        (console.log("Thank You "));
    }*/

// Topic 6 Mini Activity
/*const vatAmount = 0.15;
function calculateVat (Item) {
    // const vatAmount = 0.15;
    return vatAmount * Item;
}
function calculateFinalTotal (Item) {
    const  vat = calculateVat(Item)
    return Item + vat;
}
const total = calculateFinalTotal(250);
console.log(`VAT: R${vatAmount} , Total: R${total}`);*/

// Topic 7 Mini Activity
/*let learnersName = ["Ryan Ward","Brandon DeWet", "Phindi M", "Shane D", "Ryan Williams"];

const firstName = learnersName.map(name => name.split(" ")[0]);
const surnames = learnersName.map(name => name.split(" ")[1]);
console.log(firstName); //First Name to display
console.log(surnames); // Surname to display
console.log(learnersName[0]); // display first user
console.log(learnersName[4]); // display last user 
console.log(learnersName.length); // get length of array
learnersName.push("Johan Kruger"); // adds learner
learnersName.shift(); // removes 1st user
console.log(learnersName);*/

// Topic 8 Mini Activity
/*const tickets = [
  { id: 101, priority: "High" },
  { id: 102, priority: "Low" },
  { id: 103, priority: "High" },
  { id: 104, priority: "Medium" },
  { id: 105, priority: "High" }
];

// Initialize a counter variable
let highPriorityCount = 0;

for (const ticket of tickets) {
  if (ticket.priority === "High") {
    highPriorityCount++;
  }
}
console.log("Number of High priority tickets:", highPriorityCount);*/

// Topic 9 Mini Activity
/*function calculateNetPay(grossPay) {
  const taxRate = 0.20; // 20% tax rate local constant
  const netPay = grossPay * (1 - taxRate);
  return netPay;
}

console.log("Net Pay:", calculateNetPay(1000)); // Output: 800
console.log(taxRate);*/

//Topic 10 Mini Activity
/*const prices = [50, 80, 120, 150, 200];
console.log("Original Prices:" + prices);

// Use map() to create pricesWithVat (adding 15% VAT)
const pricesWithVat = prices.map(price => price * 1.15);
console.log("Prices with VAT: "+ pricesWithVat);
// Use filter() to keep only prices above 100
const highPrices = pricesWithVat.filter(price => price > 100);
console.log("Prices above 100:"+ highPrices);
// Use reduce() to calculate the total price of those filtered items
const totalPrice = highPrices.reduce((sum, price) => sum + price, 0);
console.log("Total Price: R"+totalPrice.toFixed(2));*/