import { isArrayOrIterable } from "./Primitive";

//
export const isValidParent = (parent: Node | null) => {
    return (parent != null && parent instanceof HTMLElement && !(parent instanceof DocumentFragment || parent instanceof HTMLBodyElement)) ? parent : null;
}

//
export const indexOf = (element: Node, node: Node) => {
    return Array.from(element?.childNodes ?? []).indexOf(node as any);
}

//
export const
    MATCH = '(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)',
    REGEX = '^(?:' + MATCH + ')|^#' + MATCH + '|^\\.' + MATCH + '|^\\[' + MATCH + '(?:([*$|~^]?=)(["\'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]';

//
export const createElementVanilla = (selector): HTMLElement | DocumentFragment => {
    if (selector == ":fragment:") return document.createDocumentFragment();
    const create = document.createElement.bind(document);
    for (var node: any = create('div'), match, className = ''; selector && (match = selector.match(REGEX));) {
        if (match[1]) node = create(match[1]);
        if (match[2]) node.id = match[2];
        if (match[3]) className += ' ' + match[3];
        if (match[4]) node.setAttribute(match[4], match[7] || '');
        selector = selector.slice(match[0].length);
    }
    if (className) node.className = className.slice(1);
    return node;
};

//
export const isElement = (el: any) => { return el != null && (el instanceof Node || el instanceof Text || el instanceof Element || el instanceof HTMLElement || el instanceof DocumentFragment) ? el : null; }
export const includeSelf = (target: HTMLElement, selector: string) => { return (target.querySelector(selector) ?? (target.matches(selector) ? target : null)); }
export const hasParent = (current: any, parent: any) => { while (current) { if (!(current?.element ?? current)) { return false; }; if ((current?.element ?? current) === (parent?.element ?? parent)) return true; current = current.parentElement ?? (current.parentNode == current?.getRootNode?.({ composed: true }) ? current?.getRootNode?.({ composed: true })?.host : current?.parentNode); } }
export const passiveOpts = {};
export function addEvent(target, type, cb, opts: any = passiveOpts): any {
    target?.addEventListener?.(type, cb, opts);
    const wr = (typeof target == "object" || typeof target == "function" && !target?.deref) ? new WeakRef(target) : target;
    return () => wr?.deref?.()?.removeEventListener?.(type, cb, opts);
    //return () => target?.removeEventListener?.(type, cb, opts);
}

//
export function removeEvent(target, type, cb, opts: any = passiveOpts): any {
    target?.removeEventListener?.(type, cb, opts);
}

//
export const addEvents = (root, handlers) => {
    root = (root instanceof WeakRef ? root.deref() : root); // @ts-ignore
    return [...Object.entries(handlers)]?.map?.(([name, cb]) => (Array.isArray(cb) ? addEvent(root, name, ...cb as any) : addEvent(root, name, cb)));
}

//
export const removeEvents = (root, handlers) => {
    root = (root instanceof WeakRef ? root.deref() : root); // @ts-ignore
    return [...Object.entries(handlers)]?.map?.(([name, cb]) => (Array.isArray(cb) ? removeEvent(root, name, ...cb as any) : removeEvent(root, name, cb)));
}

//
export const bindEvents = (el, events) => {
    if (events) {
        let entries: any[] = events;
        if (events instanceof Map) {
            entries = [...events.entries()];
        } else {
            entries = [...Object.entries(events)];
        }
        return entries.map(([name, list]) => ((isArrayOrIterable(list) ? [...list as any] : list) ?? [])?.map?.((cbs)=>{
            return addEvent(el, name, cbs)
        }));
    }
}


//
export const containsOrSelf = (a: any, b: any)=>{
    if (b == null || !(b instanceof Node) && b?.element == null) return false; // if isn't node with element or just null
    if ((a == b)  || (a?.element ?? a) == (b?.element ?? b)) return true; // wrapper or element is same
    if (a?.contains?.(b?.element ?? b) || a?.getRootNode({ composed: true })?.host == (b?.element ?? b)) return true; // a contains b element
    return false;
}

// get by selector self or parent, matches by selector, include shadow DOM host
export const MOCElement = (element: HTMLElement | null, selector: string): HTMLElement | null => {
    const self = (element?.matches?.(selector) && element);
    const host = (element?.getRootNode({ composed: true }) as any ?? element?.parentElement?.getRootNode({ composed: true}) as any)?.host;
    const hostMatched = host?.matches?.(selector) && host;
    const closest = (self as any)?.closest?.(selector) ?? (hostMatched as any)?.closest?.(selector) ?? null;
    return (self ?? hostMatched ?? closest);
};

//
export const MOC = (element: HTMLElement | null, selector: string): boolean => { return !!MOCElement(element, selector); };

//
export const bindEvent = (on: any, key: string, value: any)=>{
    if (on?.[key] != null) {
        const exists = on[key];
        if (Array.isArray(value)) { exists.add(...value); } else if (typeof value == "function") { exists.add(value); }
        return on;
    }
    on[key] ??= Array.isArray(value) ? new Set(value) : (typeof value == "function" ? new Set([value]) : value);
    return on;
}
