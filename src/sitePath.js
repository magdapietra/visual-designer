// Vite supplies the repository base path in production; local development uses /.
export function sitePath(value) {
  return import.meta.env.BASE_URL + value.replace(/^\//, '');
}
