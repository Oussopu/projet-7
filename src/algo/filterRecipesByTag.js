import { normalizeStr } from "../utils/normalizeStr.js";
import { displayRecipeCount } from "../service/displayRecipeCount.js";
import { displayRecipes } from "../service/displayRecipes.js";
import { activeTags } from "../utils/tagContainer.js";
import { recipes } from "../../data/recipes.js";

export function filterRecipesByTags() {
  let filteredRecipes = [...recipes];

  if (activeTags.ingredients.size > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      Array.from(activeTags.ingredients).every((tag) =>
        recipe.ingredients.some(
          (ingredient) => normalizeStr(ingredient.ingredient) === tag,
        ),
      ),
    );
  }

  if (activeTags.appliances.size > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      Array.from(activeTags.appliances).some(
        (tag) => normalizeStr(recipe.appliance) === tag,
      ),
    );
  }

  if (activeTags.ustensils.size > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      Array.from(activeTags.ustensils).every((tag) =>
        recipe.ustensils.some((ustensil) => normalizeStr(ustensil) === tag),
      ),
    );
  }

  displayRecipes(filteredRecipes);
  displayRecipeCount(filteredRecipes);
}
