export interface RetiredRoute {
  route: string;
  disposition: "redirect" | "gone";
  destination: string | null;
  replacementLabel?: string;
  linkList: "drop" | "rewrite";
  reason: string;
}

export const RETIRED_ROUTES: RetiredRoute[];
export const RETIRED_ROUTE_PATHS: string[];

export function normalizeInternalPath(href: string): string | null;
export function getRetiredRoute(href: string): RetiredRoute | null;
export function isRetiredRoute(href: string): boolean;
export function retiredRedirectTarget(href: string): string | null;
export function rewriteMarkdownLinks(text: string): string;
export function rewriteRetiredServiceCopy(text: string): string;
export function rewritePromotionalLink<T extends { href?: string; label?: string }>(
  link: T
): T | null;
export function rewriteLinkList<T extends { href?: string; label?: string }>(
  links: T[]
): T[];
export function rewritePageLinks<T>(value: T): T;
