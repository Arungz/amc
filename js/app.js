document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display products
    if (window.location.pathname.includes("shop.html")) {
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => {
                const productList = document.getElementById("product-list");
                data.forEach(product => {
                    const productItem = document.createElement("div");
                    productItem.innerHTML = `<h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                        <button onclick="addToCart(${product.id})">Add to Cart</button>`;
                    productList.appendChild(productItem);
                });
            });
    }
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
