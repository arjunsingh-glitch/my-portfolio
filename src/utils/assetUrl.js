/** Prefix public files with Vite's base (e.g. `/my-portfolio/` on GitHub Pages). */
export const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`
