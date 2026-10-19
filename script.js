
const recipes = [
    {
        id: 1,
        title: "Rainbow Nourish Bowl",
        category: "lunch",
        tag: "Healthy",
        description: "A colorful bowl packed with roasted vegetables, grains, greens and a creamy dressing.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
        time: "25 min",
        rating: "4.9",
        servings: "2",
        ingredients: [
            "1 cup cooked quinoa",
            "1 cup roasted vegetables",
            "2 cups mixed greens",
            "1/2 avocado",
            "2 tbsp tahini",
            "1 tbsp lemon juice"
        ],
        method: [
            "Prepare quinoa and roast vegetables until tender.",
            "Whisk tahini, lemon juice and a splash of water into a dressing.",
            "Layer greens, quinoa, vegetables and avocado.",
            "Drizzle with dressing and serve."
        ]
    },

    {
        id: 2,
        title: "Creamy Tomato Pasta",
        category: "dinner",
        tag: "Italian",
        description: "Silky tomato sauce, garlic and parmesan come together in this weeknight favorite.",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
        time: "30 min",
        rating: "4.8",
        servings: "4",
        ingredients: [
            "300g pasta",
            "400g crushed tomatoes",
            "3 garlic cloves",
            "1/2 cup cream",
            "1/3 cup parmesan",
            "Fresh basil"
        ],
        method: [
            "Cook pasta until al dente and reserve some pasta water.",
            "Sauté garlic and add tomatoes.",
            "Simmer the sauce for 10 minutes.",
            "Add cream and parmesan.",
            "Toss with pasta.",
            "Finish with fresh basil."
        ]
    },

    {
        id: 3,
        title: "Fluffy Berry Pancakes",
        category: "breakfast",
        tag: "Breakfast",
        description: "Soft, golden pancakes loaded with berries and finished with maple syrup.",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
        time: "20 min",
        rating: "4.9",
        servings: "3",
        ingredients: [
            "1 1/2 cups flour",
            "1 tbsp sugar",
            "1 tsp baking powder",
            "1 egg",
            "1 cup milk",
            "1 cup mixed berries",
            "Maple syrup"
        ],
        method: [
            "Whisk the dry ingredients.",
            "Mix egg and milk separately.",
            "Combine wet and dry ingredients.",
            "Fold in half of the berries.",
            "Cook pancakes on a lightly greased pan.",
            "Serve with berries and maple syrup."
        ]
    },

    {
        id: 4,
        title: "Crispy Veggie Tacos",
        category: "dinner",
        tag: "Mexican",
        description: "Crunchy tortillas filled with spiced vegetables, beans, salsa and fresh lime.",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85",
        time: "25 min",
        rating: "4.7",
        servings: "4",
        ingredients: [
            "8 tortillas",
            "1 bell pepper",
            "1 cup black beans",
            "1 cup corn",
            "1 tsp cumin",
            "Salsa",
            "Fresh lime"
        ],
        method: [
            "Sauté peppers and corn with cumin.",
            "Warm the black beans.",
            "Heat tortillas.",
            "Fill tortillas with vegetables and beans.",
            "Top with salsa.",
            "Finish with fresh lime."
        ]
    },

    {
        id: 5,
        title: "Chocolate Lava Cake",
        category: "dessert",
        tag: "Dessert",
        description: "Warm chocolate cake with a rich molten center — perfect for dinner parties.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
        time: "25 min",
        rating: "5.0",
        servings: "4",
        ingredients: [
            "100g dark chocolate",
            "100g butter",
            "2 eggs",
            "2 egg yolks",
            "50g sugar",
            "30g flour"
        ],
        method: [
            "Melt chocolate and butter together.",
            "Whisk eggs, yolks and sugar.",
            "Fold the chocolate mixture into the eggs.",
            "Add flour.",
            "Pour into greased ramekins.",
            "Bake at 200°C for 10–12 minutes."
        ]
    },

    {
        id: 6,
        title: "Avocado Toast",
        category: "breakfast",
        tag: "Quick",
        description: "Crispy toast, creamy avocado, chili flakes and a squeeze of lemon.",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85",
        time: "10 min",
        rating: "4.8",
        servings: "2",
        ingredients: [
            "2 slices sourdough bread",
            "1 ripe avocado",
            "1/2 lemon",
            "Chili flakes",
            "Salt",
            "Black pepper"
        ],
        method: [
            "Toast the bread until crispy.",
            "Mash avocado with lemon juice.",
            "Add salt and black pepper.",
            "Spread avocado over toast.",
            "Finish with chili flakes.",
            "Serve immediately."
        ]
    }
];

const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

let activeFilter = "all";

function renderRecipes() {
    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();

    const filteredRecipes = recipes.filter(recipe => {
        const matchesCategory =
            activeFilter === "all" ||
            recipe.category === activeFilter;

        const searchableText = `
            ${recipe.title}
            ${recipe.description}
            ${recipe.tag}
            ${recipe.category}
        `.toLowerCase();

        const matchesSearch =
            searchableText.includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = "";

    filteredRecipes.forEach(recipe => {
        const card = document.createElement("article");

        card.className = "recipe-card";
        card.dataset.id = recipe.id;

        card.innerHTML = `
            <img
                src="${recipe.image}"
                alt="${recipe.title}"
                loading="lazy"
            >

            <div class="recipe-content">

                <span class="tag">
                    ${recipe.tag}
                </span>

                <h3>
                    ${recipe.title}
                </h3>

                <p>
                    ${recipe.description}
                </p>

                <div class="card-bottom">

                    <span>
                        ⏱ ${recipe.time}
                    </span>

                    <span class="rating">
                        ★ ${recipe.rating}
                    </span>

                </div>

            </div>
        `;

        grid.appendChild(card);
    });

    if (filteredRecipes.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

document
    .querySelectorAll(".filter")
    .forEach(button => {
        button.addEventListener(
            "click",
            function () {
                document
                    .querySelectorAll(".filter")
                    .forEach(btn => {
                        btn.classList.remove("active");
                    });

                this.classList.add("active");

                activeFilter = this.dataset.filter;

                renderRecipes();
            }
        );
    });

searchInput.addEventListener(
    "input",
    renderRecipes
);

document
    .querySelectorAll("[data-category-link]")
    .forEach(link => {
        link.addEventListener(
            "click",
            function () {
                activeFilter = this.dataset.categoryLink;

                document
                    .querySelectorAll(".filter")
                    .forEach(button => {
                        button.classList.toggle(
                            "active",
                            button.dataset.filter === activeFilter
                        );
                    });

                renderRecipes();
            }
        );
    });

const modal = document.getElementById("recipeModal");

const modalImage = document.getElementById("modalImage");

const modalCategory = document.getElementById("modalCategory");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalTime = document.getElementById("modalTime");

const modalRating = document.getElementById("modalRating");

const modalServings = document.getElementById("modalServings");

const modalIngredients = document.getElementById("modalIngredients");

const modalMethod = document.getElementById("modalMethod");

function openRecipe(recipeId) {
    const recipe = recipes.find(
        item => item.id === recipeId
    );

    if (!recipe) {
        return;
    }

    modalImage.src = recipe.image;

    modalImage.alt = recipe.title;

    modalCategory.textContent = recipe.tag;

    modalTitle.textContent = recipe.title;

    modalDescription.textContent = recipe.description;

    modalTime.textContent = recipe.time;

    modalRating.textContent = recipe.rating;

    modalServings.textContent = recipe.servings;

    modalIngredients.innerHTML = recipe.ingredients
        .map(
            ingredient =>
                `<li>${ingredient}</li>`
        )
        .join("");

    modalMethod.innerHTML = recipe.method
        .map(
            step =>
                `<li>${step}</li>`
        )
        .join("");

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}

grid.addEventListener(
    "click",
    function (event) {
        const card = event.target.closest(
            ".recipe-card"
        );

        if (!card) {
            return;
        }

        const recipeId = Number(
            card.dataset.id
        );

        openRecipe(recipeId);
    }
);

function closeModal() {
    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}

document
    .getElementById("modalClose")
    .addEventListener(
        "click",
        closeModal
    );

modal.addEventListener(
    "click",
    function (event) {
        if (event.target === modal) {
            closeModal();
        }
    }
);

document.addEventListener(
    "keydown",
    function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }
);

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");

menuToggle.addEventListener(
    "click",
    function () {
        mainNav.classList.toggle("open");
    }
);

mainNav
    .querySelectorAll("a")
    .forEach(link => {
        link.addEventListener(
            "click",
            function () {
                mainNav.classList.remove("open");
            }
        );
    });

const newsletterForm =
    document.getElementById("newsletterForm");

const emailInput =
    document.getElementById("emailInput");

const formMessage =
    document.getElementById("formMessage");

newsletterForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (!email) {
            return;
        }

        formMessage.textContent =
            `Thanks! ${email} has been added to the TasteTrail list.`;

        newsletterForm.reset();
    }
);

renderRecipes();

