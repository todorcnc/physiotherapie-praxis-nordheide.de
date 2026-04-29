export function withBase(path = "") {
  const normalizedPath = String(path).replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

export function routerBasename() {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return baseUrl.endsWith("/") && baseUrl !== "/" ? baseUrl.slice(0, -1) : baseUrl;
}

export function normalizeGithubPagesRedirect() {
  const currentUrl = new URL(window.location.href);
  const redirectPath = currentUrl.searchParams.get("p");

  if (!redirectPath) {
    return;
  }

  const redirectQuery = currentUrl.searchParams.get("q");
  const normalizedPath = redirectPath.startsWith("/") ? redirectPath : `/${redirectPath}`;
  const nextUrl = `${normalizedPath}${redirectQuery ? `?${redirectQuery}` : ""}${currentUrl.hash}`;

  window.history.replaceState(null, "", nextUrl);
}
