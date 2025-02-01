import { normalizeStr } from "../utils/normalizeStr.js";
import { tagsContainer, activeTags } from "../utils/tagContainer.js";
import { removeTag } from "./removeTag.js";
import { applyFilters } from "../algo/forLoop.js";

export function addTag(category, value) {
  const normalizedValue = normalizeStr(value);

  if (activeTags[category].has(normalizedValue)) return;

  activeTags[category].add(normalizedValue);

  const tag = document.createElement("div");
  tag.classList.add(
    "tag",
    "flex",
    "items-center",
    "bg-yellow-main",
    "p-2",
    "rounded-xl",
  );
  tag.innerHTML = `
      <span>${value}</span>
      <button class="ml-2 text-black-grey">&times;</button>
    `;

  document
    .querySelectorAll(".option-dropdown, .dropdown-option")
    .forEach((content) => {
      content.classList.add("hidden");
    });
  document
    .querySelectorAll(".arrow-top")
    .forEach((arrow) => arrow.classList.add("hidden"));
  document
    .querySelectorAll(".arrow-down")
    .forEach((arrow) => arrow.classList.remove("hidden"));

  tag.querySelector("button").addEventListener("click", () => {
    removeTag(category, normalizedValue, tag);
  });

  tagsContainer.appendChild(tag);

  applyFilters();
}
