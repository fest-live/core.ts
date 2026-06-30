/**
 * Chrome MV3 service workers (and some workers) do not expose DOM interface
 * constructors on `globalThis`. Shared app bundles that include custom elements
 * and `fest/dom` still load in the SW, so `class X extends HTMLElement` and
 * `instanceof HTMLElement` would otherwise throw ReferenceError during evaluation.
 *
 * Browser / extension pages already have these globals; this is a no-op there.
 */
export function installDomConstructorPolyfills(): void {
    const g = globalThis as unknown as Record<string, unknown>;
    if (typeof g.HTMLElement === "function") return;

    const stub = class {};
    const ensure = (name: string) => {
        if (typeof g[name] !== "function") g[name] = stub;
    };

    ensure("EventTarget");
    ensure("Node");
    ensure("Element");
    ensure("HTMLElement");
    ensure("SVGElement");
    ensure("Text");
    ensure("Comment");
    ensure("DocumentFragment");
    ensure("ShadowRoot");
    ensure("HTMLDocument");
    ensure("Document");
    ensure("HTMLBodyElement");
    ensure("HTMLHeadElement");
    ensure("HTMLCanvasElement");
    ensure("HTMLInputElement");
    ensure("HTMLLinkElement");
    ensure("HTMLStyleElement");
    ensure("HTMLPreElement");
    ensure("HTMLDivElement");
    ensure("CSSStyleRule");
    ensure("CSSLayerBlockRule");
}
