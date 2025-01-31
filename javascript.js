document.addEventListener("DOMContentLoaded", function() {
    // Search Bar Functionality
    const searchInput = document.getElementById("search-bar");
    const productList = document.querySelectorAll(".product");

    if (searchInput && productList) {
        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            productList.forEach(product => {
                const productNameElement = product.querySelector(".product-name");
                if (productNameElement) {
                    const productName = productNameElement.textContent.toLowerCase();
                    product.style.display = productName.includes(searchTerm) ? "block" : "none";
                }
            });
        });
    }

    // Contact Seller Button Functionality
    const contactButtons = document.querySelectorAll(".contact-seller");
    contactButtons.forEach(button => {
        button.addEventListener("click", function() {
            const sellerInfo = this.getAttribute("data-seller-info");
            if (sellerInfo) {
                alert("Contact Seller: " + sellerInfo);
            } else {
                alert("Seller information not available.");
            }
        });
    });
});
