type PathParams = Record<string, string | boolean | number | null | undefined>;

export const getEnv = (key: string) => {
    return import.meta.env[key];
};

function normalizeValue(value: unknown): string {
    if (typeof value === "boolean") {
        return value ? "1" : "0";
    }
    return String(value);
}

export function resolveUrl(
    template: string,
    params: PathParams = {}
): string {
    let url = template;
    const queryParams: Record<string, string> = {};

    // Handle query params first (::param or ::param?)
    const queryRegex = /::([a-zA-Z0-9_]+)(\?)?/g;

    url = url.replace(queryRegex, (_, key: string, optional: string) => {
        const value = params[key];

        if (value === undefined || value === null || value === "") {
            if (optional) return "";
            throw new Error(
                `resolveUrl error: Missing required query param "${key}" in "${template}"`
            );
        }

        queryParams[key] = encodeURIComponent(normalizeValue(value));
        return "";
    });

    // Handle path params (:param or :param?)
    const pathRegex = /:([a-zA-Z0-9_]+)(\?)?/g;

    url = url.replace(pathRegex, (_, key: string, optional: string) => {
        const value = params[key];

        if (value === undefined || value === null || value === "") {
            if (optional) return "";
            throw new Error(
                `resolveUrl error: Missing required URL param "${key}" in "${template}"`
            );
        }

        return encodeURIComponent(normalizeValue(value));
    });

    // Cleanup double slashes
    url = url.replace(/\/+/g, "/");

    // Remove trailing slash (except root)
    if (url.length > 1) {
        url = url.replace(/\/$/, "");
    }

    // Append query string if any
    const queryString = Object.entries(queryParams)
        .map(([k, v]) => `${k}=${v}`)
        .join("&");

    if (queryString) {
        url += `?${queryString}`;
    }

    return url;
}