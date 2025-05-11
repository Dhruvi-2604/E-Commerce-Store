let cart = [];

function addToCart(product, price) {
    cart.push({ name: product, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

function showCart() {
    document.getElementById("cart-modal").style.display = "block";
}

function hideCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function checkout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
        hideCart();
    } else {
        alert("Your cart is empty.");
    }
}
