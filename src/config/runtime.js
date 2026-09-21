export function withBase(path = "") {
  const normalizedPath = String(path).replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

export function routerBasename() {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return baseUrl.endsWith("/") && baseUrl !== "/" ? baseUrl.slice(0, -1) : baseUrl;
}
