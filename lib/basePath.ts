const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  if (!path) return path;
  if (!path.startsWith("/")) return path;
  if (!BASE_PATH) return path;
  return `${BASE_PATH}${path}`;
}

export function isInternalHref(href: string): boolean {
  return href.startsWith("/");
}
