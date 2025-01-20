import { normalizeStr } from "../utils/normalizeStr.js";
import { displayRecipeCount } from "../service/displayRecipeCount.js";
import { displayRecipes } from "../service/displayRecipes.js";
import {
  getAllIngredients,
  populateIngredientsDropdown,
} from "../service/populateIngredientsDropdown.js";
import {
  getAllAppliances,
  populateAppliancesDropdown,
} from "../service/populateAppliancesDropdown.js";
import {
  getAllUstensils,
  populateUstensilsDropdown,
} from "../service/populateUstensilsDropdown.js";
import { recipes } from "../../data/recipes.js";

const input = document.querySelector(".input");
const errorMessage = document.querySelector(".error-message");

input.addEventListener("input", () => {
  const userSearch = normalizeStr(input.value);

  if (userSearch.length >= 3) {
    let results = new Set();

    for (let recipe of recipes) {
      if (normalizeStr(recipe.name).includes(userSearch)) {
        results.add(recipe);
      }
      for (let ingredient of recipe.ingredients) {
        if (normalizeStr(ingredient.ingredient).includes(userSearch)) {
          results.add(recipe);
        }
      }
      if (normalizeStr(recipe.description).includes(userSearch)) {
        results.add(recipe);
      }
    }

    if (results.size === 0) {
      errorMessage.classList.remove("hidden");
      errorMessage.innerHTML = `Aucune recette ne contient ‘${userSearch}’. Vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
      displayRecipes([...results]);
      displayRecipeCount([...results]);
    } else {
      errorMessage.classList.add("hidden");
      displayRecipes([...results]);
      displayRecipeCount([...results]);

      const filteredRecipes = [...results];
      const updatedIngredients = getAllIngredients(filteredRecipes);
      populateIngredientsDropdown(updatedIngredients);

      const updatedAppliances = getAllAppliances(filteredRecipes);
      populateAppliancesDropdown(updatedAppliances);

      const updatedUstensils = getAllUstensils(filteredRecipes);
      populateUstensilsDropdown(updatedUstensils);
    }
  } else {
    errorMessage.classList.add("hidden");
    displayRecipes(recipes);
    displayRecipeCount(recipes);

    const allIngredients = getAllIngredients(recipes);
    populateIngredientsDropdown(allIngredients);
    const allAppliances = getAllAppliances(recipes);
    populateAppliancesDropdown(allAppliances);
    const allUstensils = getAllUstensils(recipes);
    populateUstensilsDropdown(allUstensils);
  }
});
