import { recipes } from "../../data/recipes.js";

export function getAllAppliances(filteredRecipes) {
  const allAppliances = filteredRecipes.map((recipe) =>
    recipe.appliance.toLowerCase(),
  );
  return [...new Set(allAppliances)];
}

export const appliances = getAllAppliances(recipes);
const applianceDropdownContainer = document.querySelector(
  ".appliances-dropdown-option",
);

export function populateAppliancesDropdown(appliances) {
  applianceDropdownContainer.innerHTML = "";

  appliances.forEach((appliance) => {
    const option = document.createElement("div");
    option.classList.add(
      "p-[15px]",
      "text-sm",
      "cursor-pointer",
      "hover:bg-yellow-main",
    );
    option.textContent = appliance.charAt(0).toUpperCase() + appliance.slice(1);
    applianceDropdownContainer.appendChild(option);
  });
}
