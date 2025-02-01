import { activeTags } from "../utils/tagContainer.js";
import { applyFilters } from "../algo/forLoop.js";

export function removeTag(category, value, tagElement) {
  activeTags[category].delete(value);
  tagElement.remove();
  applyFilters();
}
