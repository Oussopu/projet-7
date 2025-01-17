import { normalizeStr } from "../utils/normalizeStr.js"

export function setupDropdownSearch(inputSelector, optionsContainerSelector) {
  document.querySelectorAll(inputSelector).forEach(input => {
    input.addEventListener("input", () => {
      const searchValue = normalizeStr(input.value)
      const optionsContainer = input.closest(".dropdown-main").querySelector(optionsContainerSelector)

      let results = new Set()

      for (let option of optionsContainer.querySelectorAll("div")) {
        const optionText = normalizeStr(option.textContent)

        if (optionText.includes(searchValue)) {
          results.add(option)
          option.classList.remove("hidden")
        } else {
          option.classList.add("hidden")
        }
      }
    })
  })
}