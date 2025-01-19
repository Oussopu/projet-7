import { normalizeStr } from "../utils/normalizeStr.js";
import { displayRecipeCount } from "../service/displayRecipeCount.js";
import { displayRecipes } from "../service/displayRecipes.js";

const search = document.querySelector(".search-bar");

search.addEventListener("submit", (e) => {
  e.preventDefault();
  const userSearch = normalizeStr(document.querySelector(".input").value);
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

  displayRecipes([...results]);
  displayRecipeCount([...results]);
});
