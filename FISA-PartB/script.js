let bookingRecords = [
    { id: "ref-001", customer:"user1", productType: "Chair", finalTotal: 300, status: "Confirmed" },
    { id: "ref-002", customer:"user2", productType: "Desk", finalTotal: 400, status: "Pending" },
    { id: "ref-003", customer:"user3", productType: "Table", finalTotal: 200, status: "Completed" },
];

function displayBookings(filterStatus = "ALL") {
    const listElement = document.getElementById("recordList");
    listElement.innerHTML = "";

    const filterResults = bookingRecords.filter(booking => {
        return filterStatus === "ALL" || booking.status === filterStatus;
    });

    filterResults.forEach(booking => {
        const li = document.createElement("li");
        li.textContent = `ID: ${booking.id}: ${booking.customer} | Product Type: ${booking.productType} | Total Price: R${booking.finalTotal} | Status: ${booking.status}`;
        listElement.appendChild(li);
    });
}

document.getElementById("statusFilter").addEventListener("change", function (e) {
    displayBookings(e.target.value);
});

displayBookings();

const furnitureList = document.getElementById("bookingForm");
furnitureList.addEventListener("submit", function (event){
   event.preventDefault();
    const name = document.getElementById("customerName").value;
    const product = document.getElementById("productName").value;
    const quantity = Number(document.getElementById("quantity").value);
    const price = Number(document.getElementById("price").value);
    const member = document.getElementById("isMember").checked;
    const delivery = document.getElementById("isDelivered").checked;
    const subTotal = price * quantity;
    const discountMember = subTotal * 0.10;
    const discountedPrice = subTotal - discountMember;
    const errorBox = document.getElementById("validationError");

    if (name.trim() === "" || product === "") {
        errorBox.textContent = "Error: Customer Name and Product are strictly required fields.";
        errorBox.style.display = "block";
        return;
    }

    if (quantity === "" || isNaN(quantity) || quantity <= 0) {
        errorBox.textContent = "Error: Quantity must present a valid positive number greater than 0.";
        errorBox.style.display = "block";
        return;
    }

    document.getElementById("outName").textContent = `Customer Name: ${name}`;
    document.getElementById("outProduct").textContent = `Product: ${product}`;
    document.getElementById("outQuantity").textContent = `Quantity: ${quantity}`;
    document.getElementById("outPrice").textContent = `Price: ${price}`;
    document.getElementById("isMember").textContent = "Member - " + (member ? "Yes" : "No");
    document.getElementById("isDelivered").textContent = "Requested for Delivery - " + (delivery ? "Yes" : "No");
    document.getElementById("outSubtotal").textContent = `Total Price: R${subTotal}`;
    if (member) {
        document.getElementById("outMemberDiscountTotal").textContent=`Total Discounted Price: R${discountedPrice}`;
    }

    function calculateSubtotal(quantity, price) {
       return quantity * price;
    }

    function calculateFinalCost(baseCost, member) {
        const discountRate = 0.10;
        if (member) {
            return baseCost * discountRate;
        }
        return baseCost;
    }
    const baseCost = calculateSubtotal(quantity, price);
    const totalDiscount = calculateFinalCost(baseCost, member);

    console.log(`Base Price: R${baseCost}`)
    console.log(`Total Discount: ${totalDiscount}%`)

    const request = {
    customerName: name,
    productType: product,
    finalPrice: baseCost,
    status: "pending",
  };
    bookingRecords.push(request);

});

