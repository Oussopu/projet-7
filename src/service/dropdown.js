export function setupDropdowns() {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const container = dropdown.parentElement
        const optionDropdown = container.querySelector(".option-dropdown")
        const dropdownOption = container.querySelector(".dropdown-option")
        const arrowTop = dropdown.querySelector(".arrow-top")
        const arrowDown = dropdown.querySelector(".arrow-down")
    
        dropdown.addEventListener("click", () => {
            document.querySelectorAll(".dropdown").forEach(otherDropdown => {
                const otherContainer = otherDropdown.parentElement
                const otherOptionDropdown = otherContainer.querySelector(".option-dropdown")
                const otherDropdownOption = otherContainer.querySelector(".dropdown-option")
                const otherArrowTop = otherDropdown.querySelector(".arrow-top")
                const otherArrowDown = otherDropdown.querySelector(".arrow-down")
    
                if (otherContainer !== container) {
                    otherOptionDropdown.classList.add("hidden")
                    otherDropdownOption.classList.add("hidden")
                    otherArrowTop.classList.add("hidden")
                    otherArrowDown.classList.remove("hidden")
                }
            })
          
            optionDropdown.classList.toggle("hidden")
            dropdownOption.classList.toggle("hidden")
            arrowTop.classList.toggle("hidden")
            arrowDown.classList.toggle("hidden")
        })
})


document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown-main")) {
            document.querySelectorAll(".option-dropdown, .dropdown-option").forEach(content => {
                content.classList.add("hidden")
            })
            document.querySelectorAll(".arrow-top").forEach(arrow => arrow.classList.add("hidden"))
            document.querySelectorAll(".arrow-down").forEach(arrow => arrow.classList.remove("hidden"))
        }
})
}