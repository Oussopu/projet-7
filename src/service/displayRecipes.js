function createRecipeCard(recipe) {
    return `
      <div class="h-[731px] w-[30%] rounded-3xl bg-white mb-[66px]">
        <div class="h-[35%] rounded-t-3xl relative">
          <img src="../public/img/${recipe.image}" alt="${recipe.name}" class="h-full w-full object-cover rounded-t-3xl">
          <div class="flex items-center justify-center absolute top-[20px] right-[10px] text-xs text-black-grey font-manrope bg-yellow-main h-[26px] w-[63px] rounded-2xl">
            ${recipe.time}min
          </div>
        </div>
        <div class="p-[25px]">
          <h2 class="pt-[7px] font-anton text-lg">${recipe.name}</h2>
          <h3 class="pt-[30px] text-xs font-manrope font-bold text-medium-grey">RECETTE</h3>
          <p class="pt-[15px] font-manrope text-sm text-black-grey">
            ${recipe.description.substring(0, 125)}...
          </p>
          <h3 class="pt-[32px] text-xs font-manrope font-bold text-medium-grey">INGRÉDIENTS</h3>
          <div class="flex flex-wrap">
            ${recipe.ingredients.map(ingredient => `
              <div class="w-[45%] pt-[20px]">
                <p class="font-manrope text-sm text-black-grey">${ingredient.ingredient}</p>
                <p class="font-manrope text-sm text-medium-grey">
                  ${ingredient.quantity || ''} ${ingredient.unit || ''}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  }

export const displayRecipes = (recipesToDisplay) => {
    const cardsContainer = document.getElementById("main-recipes")
    cardsContainer.innerHTML = ""
    recipesToDisplay.forEach(recipe => {
      const recipeCard = createRecipeCard(recipe)
      cardsContainer.innerHTML += recipeCard
    })
  }
