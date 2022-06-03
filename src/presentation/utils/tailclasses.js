/**
 * Remove line breaks in components styles string template literals
 * @param {string} classes - Tailwind classes in styles.js
 * @returns {string}
 */
export function tc (classes) {
  return classes.replace(/\s+/g, ' ').trim()
}
