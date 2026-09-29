//querySelector() gives JavaScript a reference to an HTML element.
const productList = document.querySelector("#productList");
const cartList = document.querySelector("#cartList");
const cartCount = document.querySelector("#cartCourt");
const cartTotal = document.querySelector("cartTotal");
const message = document.querySelector("#message");

//createElement()
const item = document.createElement("li");
const item2 = document.createElement("li");
item.textContent = "Wireless Mouse - R299";
item2.textContent = "Sony PlayStation 5 - R14 999";
cartList.appendChild(item);
cartList.appendChild(item2);

//An Array of Objects
//The products exist as JavaScript data before they become HTML.
const products = [
    {id: 1, name: "Wireless Mouse", price: 299, sale: true, stock: 7},
    {id: 2, name: "USB-C Hub", price: 449, sale: true, stock: 3},
    {id: 3, name: "Laptop Stnad", price: 599, sale: false, stock: 9},
    {id: 4, name: "Mechanical Keyboard", price: 899, sale: true, stock: 2}
];
//Before touching the DOM, confirm the data
products.forEach(function (product) {
    console.log(product.name, product.price);
});

//List Only the Products That Are on Sale

const saleProducts = products.filter(function (product)
{
    return product.sale === true;
});

console.log(saleProducts);

//Create Product Cards Dynamically

// rendering the products on the html page
function displayProducts(productArray) {
  productList.innerHTML = "";
 
  productArray.forEach(function (product) {
    const card = document.createElement("article");
    
    // ✅ ADD .product-card class HERE (was missing!)
    card.classList.add("product-card");
    
    // ✅ Add .low-stock class based on stock (correct logic)
    if (product.stock <= 3) {
      card.classList.add("low-stock");
    }
 
    const title = document.createElement("h3");
    const price = document.createElement("p");
 
    title.textContent = product.name;
    price.textContent = `R${product.price}`;
 
    card.appendChild(title);
    card.appendChild(price);
    
    // ✅ REMOVED: card.appendChild(document.querySelector(".low-stock"));
    // That line did nothing useful
    
    productList.appendChild(card);
  });
}
 
displayProducts(saleProducts);

console.log(cartList);      // the <ul> element
console.log(cartCount.textContent); //"0"