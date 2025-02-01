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
import { activeTags } from "../utils/tagContainer.js";

const input = document.querySelector(".input");
const errorMessage = document.querySelector(".error-message");

export const forLoop = () => {
  input.addEventListener("input", () => {
    applyFilters();
  });
};

export function applyFilters() {
  const userSearch = normalizeStr(input.value);
  let results = new Set();

  for (let recipe of recipes) {
    if (userSearch.length >= 3) {
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
    } else {
      results.add(recipe);
    }
  }

  let finalResults = new Set();
  for (let recipe of results) {
    let matchesTags = true;

    for (let tag of activeTags.ingredients) {
      if (
        !recipe.ingredients.some((ing) => normalizeStr(ing.ingredient) === tag)
      ) {
        matchesTags = false;
        break;
      }
    }

    for (let tag of activeTags.appliances) {
      if (normalizeStr(recipe.appliance) !== tag) {
        matchesTags = false;
        break;
      }
    }

    for (let tag of activeTags.ustensils) {
      if (!recipe.ustensils.some((ust) => normalizeStr(ust) === tag)) {
        matchesTags = false;
        break;
      }
    }

    if (matchesTags) {
      finalResults.add(recipe);
    }
  }

  if (finalResults.size === 0) {
    errorMessage.classList.remove("hidden");
    errorMessage.innerHTML = `Aucune recette ne contient ‘${userSearch}’. Vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
  } else {
    errorMessage.classList.add("hidden");
  }

  displayRecipes([...finalResults]);
  displayRecipeCount([...finalResults]);

  const updatedIngredients = getAllIngredients([...finalResults]);
  populateIngredientsDropdown(updatedIngredients);

  const updatedAppliances = getAllAppliances([...finalResults]);
  populateAppliancesDropdown(updatedAppliances);

  const updatedUstensils = getAllUstensils([...finalResults]);
  populateUstensilsDropdown(updatedUstensils);
}
