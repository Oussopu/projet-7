import { addTag } from "./addTag.js";

export const ustensilsDropdown = document.querySelector(
  ".ustensils-dropdown-option",
);
export const appliancesDropdown = document.querySelector(
  ".appliances-dropdown-option",
);
export const ingredientsDropdown = document.querySelector(
  ".ingredients-dropdown-option",
);

export function setupDropdownClick(category, dropdownContainer) {
  dropdownContainer.addEventListener("click", (e) => {
    if (e.target.matches(".dropdown-option div")) {
      const value = e.target.textContent;
      addTag(category, value);
    }
  });
}
