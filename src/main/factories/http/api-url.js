/**
 * Factory responsable to make a API URL
 * @param {string} path - path after hostname with slashes
 * @returns {string} - Final API URL
 */
export const makeApiUrl = (path) =>
  `${process.env.NEXT_PUBLIC_API_URL}${path}`
