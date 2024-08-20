let cart = [];
let totalPrice = 0;

function addToCart(foodName, price) {
    cart.push({ name: foodName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} so'm`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = totalPrice;
}

function checkout() {
    alert('Buyurtmangiz qabul qilindi!');
    cart = [];
    totalPrice = 0;
    updateCart();
}
