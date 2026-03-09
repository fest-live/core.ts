const normalizeSlashes = (input: any): string => {
    const value = String(input ?? "").trim();
    if (!value) return "/";
    const withLeading = value.startsWith("/") ? value : `/${value}`;
    return withLeading.replace(/\/+/g, "/");
};

export const isUserScopePath = (input: any): boolean => {
    const normalized = normalizeSlashes(input);
    return normalized === "/user" || normalized.startsWith("/user/");
};

export const stripUserScopePrefix = (input: any): string => {
    const normalized = normalizeSlashes(input);
    if (normalized === "/user") return "/";
    if (normalized.startsWith("/user/")) return normalized.slice("/user".length) || "/";
    return normalized;
};

export const toUserRelativePath = (input: any): string => {
    return stripUserScopePrefix(input).replace(/^\/+/, "");
};

export const toUserScopePath = (input: any): string => {
    const normalized = normalizeSlashes(input);
    if (isUserScopePath(normalized)) return normalized;
    if (normalized === "/") return "/user/";
    return `/user${normalized}`;
};

export const userPathCandidates = (input: any): string[] => {
    const normalized = normalizeSlashes(input);
    const stripped = stripUserScopePrefix(normalized);
    if (isUserScopePath(normalized)) {
        return Array.from(new Set([stripped, normalized]));
    }
    return [stripped];
};

