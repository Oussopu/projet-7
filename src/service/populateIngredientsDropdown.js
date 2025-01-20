import { recipes } from "../../data/recipes.js";

export function getAllIngredients(filteredRecipes) {
  const allIngredients = filteredRecipes.flatMap((recipe) =>
    recipe.ingredients.map((ingredient) => ingredient.ingredient.toLowerCase()),
  );
  return [...new Set(allIngredients)];
}

export const ingredients = getAllIngredients(recipes);
const ingredientsDropdownContainer = document.querySelector(
  ".ingredients-dropdown-option",
);

export function populateIngredientsDropdown(ingredients) {
  ingredientsDropdownContainer.innerHTML = "";

  ingredients.forEach((ingredient) => {
    const option = document.createElement("div");
    option.classList.add(
      "p-[15px]",
      "text-sm",
      "cursor-pointer",
      "hover:bg-yellow-main",
    );
    option.textContent =
      ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
    ingredientsDropdownContainer.appendChild(option);
  });
}
