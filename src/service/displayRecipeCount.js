export const displayRecipeCount = (recipesToDisplay) => {
  const recipeCountElement = document.getElementById("recipe-count");
  recipeCountElement.textContent = `${recipesToDisplay.length} recettes`;
};
