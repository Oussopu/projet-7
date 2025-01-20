import { displayRecipeCount } from "./service/displayRecipeCount.js";
import { displayRecipes } from "./service/displayRecipes.js";
import {
  populateIngredientsDropdown,
  ingredients,
} from "../src/service/populateIngredientsDropdown.js";
import {
  populateAppliancesDropdown,
  appliances,
} from "./service/populateAppliancesDropdown.js";
import {
  populateUstensilsDropdown,
  ustensils,
} from "../src/service/populateUstensilsDropdown.js";
import { setupDropdowns } from "./service/setUpDropdown.js";
import { setupDropdownSearch } from "../src/service/setupDropdownSearch.js";
import {
  setupDropdownClick,
  ingredientsDropdown,
  appliancesDropdown,
  ustensilsDropdown,
} from "../src/service/setupDropdownClick.js";
import { recipes } from "../../data/recipes.js";

displayRecipes(recipes);
displayRecipeCount(recipes);
populateIngredientsDropdown(ingredients);
populateAppliancesDropdown(appliances);
populateUstensilsDropdown(ustensils);
setupDropdowns();

setupDropdownSearch(".ingredients-search", ".ingredients-dropdown-option");
setupDropdownSearch(".appliances-search", ".appliances-dropdown-option");
setupDropdownSearch(".ustensils-search", ".ustensils-dropdown-option");

setupDropdownClick("ingredients", ingredientsDropdown);
setupDropdownClick("appliances", appliancesDropdown);
setupDropdownClick("ustensils", ustensilsDropdown);
