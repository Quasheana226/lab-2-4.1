

// Create an empty array called shoppingList.

let shoppingList = []; // this is our empty array for the items

// Caching items from the HTML
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");

// Our button fuctionalities

// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.

function addItem(item)
if (shoppingList.includes(iten)); {
    shoppingList.push(item);
    displayList(); //log console
    renderCart();   // update web
} else {
    console.log("item already exists");
}



function removeLastitem() {
    shoppingList.pop();
    displayList();
    renderCart();

}


function displayList() {
    console.log("current shopping list", shoppingList);

}




addItemButton.addEventListener("click", function () {
    let item = itemInput.value;

    if (item === "") {
        alert("Please enter an item.");
        return;
    }

});

removeItemButton.addEventListener("click", function () {

    // if the cart is empty, send an alert
    if (shoppingList.length === 0) {
        alert("Cart is empty.");
        return;
    };


    removeLastitem();
});

// This function recreates the "shopping cart" every time an item is added or removed
function renderCart() {
    cartList.innerHTML = "";
    shoppingList.forEach(item => {   // Clear existing list
        let listItem = document.createElement("li");
        listItem.innerText = item;
        cartList.appendChild(listItem);
    });
}