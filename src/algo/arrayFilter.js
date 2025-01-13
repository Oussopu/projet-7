import { normalizeStr } from "../utils/normalizeStr.js"
import { displayRecipeCount } from "../service/displayRecipeCount.js"
import { displayRecipes } from "../service/displayRecipes.js"

const search = document.querySelector(".search-bar")

search.addEventListener("submit", (e) => {
  e.preventDefault()
  const userSearch = normalizeStr(document.querySelector(".input").value)

  const results = recipes.filter(recipe => {
    const matchName = normalizeStr(recipe.name).includes(userSearch)
    const matchIngredient = recipe.ingredients.some(ingredient =>
      normalizeStr(ingredient.ingredient).includes(userSearch))
    const matchDescription = normalizeStr(recipe.description).includes(userSearch)

    return matchName || matchIngredient || matchDescription
  })

  displayRecipes(results)
  displayRecipeCount(results)
})