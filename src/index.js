const cardsContainer = document.getElementById("main-recipes")

function createRecipeCard(recipe) {
  return `
    <div class="h-[731px] w-[30%] rounded-3xl bg-white mb-[66px]">
      <div class="h-[35%] rounded-t-3xl relative">
        <img src="../public/img/${recipe.image}" alt="${recipe.name}" class="h-full w-full object-cover rounded-t-3xl">
        <div class="flex items-center justify-center absolute top-[20px] right-[10px] text-xs text-black-grey font-manrope bg-yellow-main h-[26px] w-[63px] rounded-2xl">
          ${recipe.time}min
        </div>
      </div>
      <div class="p-[25px]">
        <h2 class="pt-[7px] font-anton text-lg">${recipe.name}</h2>
        <h3 class="pt-[30px] text-xs font-manrope font-bold text-medium-grey">RECETTE</h3>
        <p class="pt-[15px] font-manrope text-sm text-black-grey">
          ${recipe.description.substring(0, 125)}...
        </p>
        <h3 class="pt-[32px] text-xs font-manrope font-bold text-medium-grey">INGRÉDIENTS</h3>
        <div class="flex flex-wrap">
          ${recipe.ingredients.map(ingredient => `
            <div class="w-[45%] pt-[20px]">
              <p class="font-manrope text-sm text-black-grey">${ingredient.ingredient}</p>
              <p class="font-manrope text-sm text-medium-grey">
                ${ingredient.quantity || ''} ${ingredient.unit || ''}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

recipes.forEach(recipe => {
  const recipeCard = createRecipeCard(recipe);
  cardsContainer.innerHTML += recipeCard;
});



const dropdowns = document.querySelectorAll(".dropdown")
const dropdownContents = document.querySelectorAll(".option-dropdown")

dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();

        const dropdownContent = dropdown.nextElementSibling
        const arrowTop = dropdown.querySelector(".arrow-top")
        const arrowDown = dropdown.querySelector(".arrow-down")
        
        const isDropdownOpen = dropdownContent.style.display === "flex";
        dropdownContent.style.display = isDropdownOpen ? "none" : "flex";
        dropdownOptionsContainer.style.display = isDropdownOpen ? "none" : "flex"
        arrowTop.style.display = isDropdownOpen ? "none" : "flex";
        arrowDown.style.display = isDropdownOpen ? "flex" : "none";

        dropdownContents.forEach((content, contentIndex) => {
            if (contentIndex !== index) {
                content.style.display = "none";

                const otherDropdown = dropdowns[contentIndex];
                otherDropdown.querySelector(".arrow-top").style.display = "none";
                otherDropdown.querySelector(".arrow-down").style.display = "flex";
            }
        });
    });
});

document.addEventListener("click", () => {
    dropdownContents.forEach(content => {
        if (!content) console.warn("Content manquant :", content);
        if (content) content.style.display = "none";
    });

    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const container = dropdown.parentElement;
        const optionDropdown = container.querySelector(".option-dropdown");
        const dropdownOption = container.querySelector(".dropdown-option"); 
        const arrowTop = dropdown.querySelector(".arrow-top");
        const arrowDown = dropdown.querySelector(".arrow-down");
    
        dropdown.addEventListener("click", () => {
            document.querySelectorAll(".dropdown").forEach(otherDropdown => {
                const otherContainer = otherDropdown.parentElement;
                const otherOptionDropdown = otherContainer.querySelector(".option-dropdown");
                const otherDropdownOption = otherContainer.querySelector(".dropdown-option");
                const otherArrowTop = otherDropdown.querySelector(".arrow-top");
                const otherArrowDown = otherDropdown.querySelector(".arrow-down");
    
                if (otherContainer !== container) {
                    otherOptionDropdown.classList.add("hidden");
                    otherDropdownOption.classList.add("hidden");
                    otherArrowTop.classList.add("hidden");
                    otherArrowDown.classList.remove("hidden");
                }
            });
          
            optionDropdown.classList.toggle("hidden");
            dropdownOption.classList.toggle("hidden");
            arrowTop.classList.toggle("hidden");
            arrowDown.classList.toggle("hidden");
        });
    });
    
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".flex")) {
            document.querySelectorAll(".option-dropdown, .dropdown-option").forEach(content => {
                content.classList.add("hidden");
            });
            document.querySelectorAll(".arrow-top").forEach(arrow => arrow.classList.add("hidden"));
            document.querySelectorAll(".arrow-down").forEach(arrow => arrow.classList.remove("hidden"));
        }
    });
});


const recipeCountElement = document.getElementById("recipe-count");

function updateRecipeCount(recipes) {
    recipeCountElement.textContent = `${recipes.length} recettes`;
}

updateRecipeCount(recipes);


function getAllIngredients(recipes) {
    const allIngredients = recipes.flatMap(recipe => 
        recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase())
    );
    return [...new Set(allIngredients)];
}

const ingredients = getAllIngredients(recipes);
console.log(ingredients); 

const dropdownOptionsContainer = document.querySelector(".dropdown-option");

function populateDropdown(ingredients) {
    dropdownOptionsContainer.innerHTML = ""; 

    ingredients.forEach(ingredient => {
        const option = document.createElement("div");
        option.classList.add("p-[10px]", "text-sm", "cursor-pointer", "hover:bg-gray-200");
        option.textContent = ingredient.charAt(0).toUpperCase() + ingredient.slice(1); 
        dropdownOptionsContainer.appendChild(option);
    });
}

populateDropdown(ingredients);