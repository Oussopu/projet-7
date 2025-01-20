import { recipes } from "../../data/recipes.js";

export function getAllUstensils(filteredRecipes) {
  const allUstensils = filteredRecipes.flatMap((recipe) =>
    recipe.ustensils.map((ustensil) => ustensil.toLowerCase()),
  );
  return [...new Set(allUstensils)];
}

export const ustensils = getAllUstensils(recipes);
const ustensilDropdownContainer = document.querySelector(
  ".ustensils-dropdown-option",
);

export function populateUstensilsDropdown(ustensils) {
  ustensilDropdownContainer.innerHTML = "";

  ustensils.forEach((ustensil) => {
    const option = document.createElement("div");
    option.classList.add(
      "p-[15px]",
      "text-sm",
      "cursor-pointer",
      "hover:bg-yellow-main",
    );
    option.textContent = ustensil.charAt(0).toUpperCase() + ustensil.slice(1);
    ustensilDropdownContainer.appendChild(option);
  });
}
