import { filterRecipesByTags } from "../algo/filterRecipesByTag.js";
import { activeTags } from "../utils/tagContainer.js";

export function removeTag(category, value, tagElement) {
  activeTags[category].delete(value);
  tagElement.remove();
  filterRecipesByTags();
}
