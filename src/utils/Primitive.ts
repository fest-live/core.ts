export const $fxy = Symbol.for("@fix");

//
export const isHasPrimitives = (observable: any) => {
    return observable?.some?.(isPrimitive);
}

//
export const isObservable = (observable: any) => {
    return Array.isArray(observable) || observable instanceof Set || observable instanceof Map;
};

//
export const isPrimitive = (obj: any)=>{
    return obj == null || typeof obj == "string" || typeof obj == "number" || typeof obj == "boolean" || typeof obj == "bigint" || typeof obj == "undefined";
}

//
export const tryParseByHint = (value: any, hint?: any)=>{
    if (!isPrimitive(value)) return null;
    if (hint == "number") { return Number(value) || 0; }
    if (hint == "string") { return String(value) || ""; }
    if (hint == "boolean") { return !!value; }
    return value;
}

//
export const hasProperty = (v: any, prop: string = "value") => {
    return (typeof v == "object" && (v?.[prop] != null || (v != null && (prop in v))));
}

//
export const hasValue = (v: any) => { return hasProperty(v, "value"); }

//
export const $getValue = ($objOrPlain: any) => {
    if (isPrimitive($objOrPlain)) return $objOrPlain;
    return hasValue($objOrPlain) ? $objOrPlain?.value : $objOrPlain;
}

//
export const unwrap = (obj, fallback?: null|undefined|((...args: any[])=>any))=>{
    return (obj?.[$fxy] ?? (fallback ?? obj));
}

//
export const deref = (obj: any) => {
    if (obj != null && (typeof obj == "object" || typeof obj == "function") && (obj instanceof WeakRef || typeof obj?.deref == "function") && obj?.deref?.() != null) {
        return deref(obj?.deref?.());
    };
    return obj;
}

//
export const fixFx = (obj) => { if (typeof obj == "function" || obj == null) return obj; const fx = function(){}; fx[$fxy] = obj; return fx; }
export const $set = (rv, key, val)=>{
    rv = deref(rv);
    if (rv != null && (typeof rv == "object" || typeof rv == "function")) {
        return (rv[key] = $getValue(val = deref(val)));
    };
    return rv;
}

//
export const getRandomValues = (array: Uint8Array) => { return crypto?.getRandomValues ? crypto?.getRandomValues?.(array) : (()=>{
    const values = new Uint8Array(array.length);
    for (let i = 0; i < array.length; i++) {
        values[i] = Math.floor(Math.random() * 256);
    }
    return values;
})(); };

//
export const clamp  = (min, val, max) => Math.max(min, Math.min(val, max));
export const withCtx = (target, got)=>{ if (typeof got == "function") { return got?.bind?.(target) ?? got; }; return got; }

//
export const UUIDv4 = () => (crypto?.randomUUID ? crypto?.randomUUID?.() : ("10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ (getRandomValues?.(new Uint8Array(1))?.[0] & (15 >> (+c / 4)))).toString(16))));

//
export const camelToKebab = (str: string) => { if (!str) return str; return str?.replace?.(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); }
export const kebabToCamel = (str: string) => { if (!str) return str; return str?.replace?.(/-([a-z])/g, (_, char) => char.toUpperCase()); }

//
export const toFiniteNumber = (value: any, fallback = 0) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
};

//
export const clampDimension = (value: number, max: number) => {
    if (!Number.isFinite(max) || max <= 0) { return 0; }
    if (!Number.isFinite(value)) { return 0; }
    return Math.min(Math.max(value, 0), max);
};

//
export const roundNearest = (number: number, N = 1)=>(Math.round(number * N) / N);

//
export const isValueUnit = (val: any) => (typeof CSSStyleValue !== "undefined" && val instanceof CSSStyleValue);
export const isVal = (v: any) => v != null && (typeof v == "boolean" ? v !== false : true) && (typeof v != "object" && typeof v != "function");
export type DatasetValue = string | number | boolean | null | undefined | { value?: string | number | boolean | null | undefined };

//
export const normalizePrimitive = (val: any) => {
    return (typeof val == "boolean" ? (val ? "" : null) : (typeof val == "number" ? String(val) : val));
}

//
export const $triggerLock  = Symbol.for("@trigger-lock");
export const $avoidTrigger = (ref: any, cb: ()=>any, $prop: string = "value")=>{
    if (hasProperty(ref, $prop)) ref[$triggerLock] = true;
    let result;
    try {
        result = cb?.();
    } finally {
        if (hasProperty(ref, $prop)) { delete ref[$triggerLock]; }
    }
    return result;
}

//
export const tryStringAsNumber = (val: string): number | null => {
    if (typeof val != "string") return null;
    const matches = [...val?.matchAll?.(/^\d+(\.\d+)?$/g)];
    if (matches?.length != 1) return null;
    const triedToParse = parseFloat(matches[0][0]);
    if (!Number.isNaN(triedToParse) && Number.isFinite(triedToParse)) { return triedToParse; };
    return null;
}

//
export const INTEGER_REGEXP = /^\d+$/g;

//
export const tryStringAsInteger = (val: string): number | null => {
    if (typeof val != "string") return null;
    val = val?.trim?.(); if (val == "" || val == null) return null;
    const matches = [...val?.matchAll?.(INTEGER_REGEXP)];
    if (matches?.length != 1) return null;
    const triedToParse = parseInt(matches[0][0]);
    if (!Number.isNaN(triedToParse) && Number.isInteger(triedToParse)) { return triedToParse; };
    return null;
}

//
export const isValidNumber = (val: any) => {
    return typeof val == "number" && !Number.isNaN(val);
}

//
export const canBeInteger = (value: any) => {
    if (typeof value == "string") {
        return tryStringAsInteger(value) != null;
    } else
        return typeof value == "number" && Number.isInteger(value) && value >= 0;
}

//
export const isArrayOrIterable = (obj) => Array.isArray(obj) || (obj != null && typeof obj == "object" && typeof obj[Symbol.iterator] == "function");
export const handleListeners = (root: any, fn: string, handlers: any) => { root = (root instanceof WeakRef ? root.deref() : root); const usubs = [...Object.entries(handlers)]?.map?.(([name, cb]) => root?.[fn]?.call?.(root, name, cb)); return ()=>{ usubs?.forEach?.((unsub)=>unsub?.()); }; }

//
export const isRef = (ref: any) => { return ref instanceof WeakRef || typeof ref?.deref == "function"; }
export const unref = (ref: any) => { return isRef(ref) ? deref(ref) : ref; }
export const toRef = (ref: any) => { return ref != null ? (isRef(ref) ? ref : ((typeof ref == "function" || typeof ref == "object") ? new WeakRef(ref) : ref)) : ref; }

//
export const isValueRef = (exists) => {
    return (typeof exists == "object" || typeof exists == "function") && (exists?.value != null || (exists != null && "value" in exists))
}

//
export const isObject = (exists) => {
    return exists != null && (typeof exists == "object" || typeof exists == "function");
}

//
export const getValue = (val: any) => {
    return (hasValue(val) ? val?.value : val);
}



//
export const potentiallyAsync = (promise, cb)=>{
    if (promise instanceof Promise || typeof promise?.then == "function")
        { return promise?.then?.(cb); } else
        { return cb?.(promise); }
    return promise;
}

//
export const potentiallyAsyncMap = (promise, cb)=>{
    if (promise instanceof Promise || typeof promise?.then == "function")
        { return promise?.then?.(cb); } else
        { return cb?.(promise); }
    return promise;
}

//
export const makeTriggerLess = function(self){
    return (cb)=>{
        self[$triggerLock] = true;
        let result;
        try {
            result = cb?.();
        } finally {
            self[$triggerLock] = false;
        }
        return result;
    }
}
