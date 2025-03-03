//Pizza Class
class Pizza {
    constructor(name, image, ingredients, sauce, cheese, price) {
        this.name = name;
        this.image = `./images/${image}`;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
    }

    getSection = () => `
        <div class="pizza-card" data-pizza="${this.name}">
            <h4>${this.name}</h4>
            <img src="${this.image}" alt="${this.name} Pizza">
        </div>
    `;
}

//Pizza Array
const pizzas = [
    new Pizza("Hawaiian", "hawaiian.jpeg", "Ham, Pineapple", "Tomato", "Mozzarella", 18.5),
    new Pizza("Buffalo", "buffalo.webp", "Chicken, Ranch", "Buffalo Sauce", "Cheddar", 20.0),
    new Pizza("Margarita", "margarita.webp", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Fresh Mozzarella", 19.2),
    new Pizza("Pepperoni", "pepperoni.jpeg", "Pepperoni", "Tomato", "Mozzarella", 17.0),
    new Pizza("Veggie", "veggie.jpeg", "Mushrooms, Broccoli, Peppers", "Tomato", "Parmesan", 16.5),
];

//Render Pizza Gallery
const displayPizzas = () => {
    document.getElementById("pizza-container").innerHTML = pizzas.map(p => p.getSection()).join("");
};

//Open modal
const openModal = (pizzaName) => {
    const pizza = pizzas.find(p => p.name === pizzaName);
    if (pizza) {
        document.getElementById("modal-title").textContent = pizza.name;
        document.getElementById("modal-image").src = pizza.image;
        document.getElementById("modal-ingredients").textContent = pizza.ingredients;
        document.getElementById("modal-sauce").textContent = pizza.sauce;
        document.getElementById("modal-cheese").textContent = pizza.cheese;
        document.getElementById("modal-price").textContent = pizza.price.toFixed(2);
        document.getElementById("pizza-modal").style.display = "block";
    }
};

//Close modal
const closeModal = () => {
    document.getElementById("pizza-modal").style.display = "none";
};

document.addEventListener("click", (e) => {
    if (e.target.closest(".pizza-card")) {
        openModal(e.target.closest(".pizza-card").dataset.pizza);
    }

    if (e.target.classList.contains("close-btn")) {
        closeModal();
    }
});

//Initialize Gallery
displayPizzas();
