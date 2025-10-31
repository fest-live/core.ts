import { isCanJustReturn } from "./Primitive";

//
export type WeakKey = object | Function;
export type keyType = string | number | symbol;

//
export const isIterable = (obj) => (typeof obj?.[Symbol.iterator] == "function");
export const isKeyType = (prop: keyType | any) => (["symbol", "string", "number"].indexOf(typeof prop) >= 0);
export const isValidObj = (obj?: any)=> { return obj != null && (typeof obj == "function" || typeof obj == "object") && !(obj instanceof WeakRef); };
export const mergeByKey = (items: any[]|Set<any>, key = "id")=>{
    const entries = Array.from(items?.values?.()).map((I)=>[I?.[key],I]);
    const map = new Map(entries as any);
    return Array.from(map?.values?.() || []);
}

//
export const removeExtra = (target, value, name: keyType | null = null)=>{
    const exists = name != null && (typeof target == "object" || typeof target == "function") ? (target?.[name] ?? target) : target; let entries: any = [];
    if (value instanceof Set || value instanceof Map || Array.isArray(value) || isIterable(value)) { entries = ((exists instanceof Set || exists instanceof WeakSet) ? value?.values?.() : value?.entries?.()) || ((Array.isArray(value) || isIterable(value)) ? value : []); } else
    if (typeof value == "object" || typeof value == "function") { entries = (exists instanceof Set || exists instanceof WeakSet) ? Object.values(value) : Object.entries(value); }

    //
    let exEntries: any = []; if (Array.isArray(exists)) { exEntries = exists.entries(); } else // @ts-ignore
    if (exists instanceof Map || exists instanceof WeakMap) { exEntries = exists?.entries?.(); } else // @ts-ignore
    if (exists instanceof Set || exists instanceof WeakSet) { exEntries = exists?.values?.(); } else
    if (typeof exists == "object" || typeof exists == "function") { exEntries = Object.entries(exists); }

    //
    const keys = new Set(Array.from(entries).map((e)=>e?.[0]));
    const exe  = new Set(Array.from(exEntries).map((e)=>e?.[0]));

    // @ts-ignore // REQUIRES NEW ECMASCRIPT!!!
    const exclude = keys?.difference?.(exe);

    //
    if (Array.isArray(exists)) { const nw = exists.filter((_,I)=>!exclude.has(I)); exists.splice(0, exists.length); exists.push(...nw); } else
    if ((exists instanceof Map || exists instanceof Set) || (exists instanceof WeakMap || exists instanceof WeakSet)) { for (const k of exclude) { exists.delete(k); }; } else
    if (typeof exists == "function" || typeof exists == "object") { for (const k of exclude) { delete exists[k]; }; }; return exists;
}

//
export const objectAssign = (target, value, name: keyType | null = null, removeNotExists = true, mergeKey = "id") => {
    const exists = name != null && (typeof target == "object" || typeof target == "function") ? (target?.[name] ?? target) : target;
    let entries: any = null; if (removeNotExists) { removeExtra(exists, value); }

    //
    if (value instanceof Set || value instanceof Map || Array.isArray(value) || isIterable(value)) { entries = ((exists instanceof Set || exists instanceof WeakSet) ? value?.values?.() : value?.entries?.()) || ((Array.isArray(value) || isIterable(value)) ? value : []); } else
    if (typeof value == "object" || typeof value == "function") { entries = (exists instanceof Set || exists instanceof WeakSet) ? Object.values(value) : Object.entries(value); }

    //
    if (exists && entries && (typeof entries == "object" || typeof entries == "function")) {
        if (exists instanceof Map || exists instanceof WeakMap) // @ts-ignore
            { for (const E of entries) { exists.set(...E); }; return exists; }

        //
        if (exists instanceof Set || exists instanceof WeakSet)
            { for (const E of entries) { // @ts-ignore
                const mergeObj = E?.[mergeKey] ? Array.from(exists?.values?.() || []).find((I)=>!isNotEqual?.(I?.[mergeKey], E?.[mergeKey])) : null;
                if (mergeObj != null) { objectAssign(mergeObj, E, null, removeNotExists, mergeKey); } else { exists.add(E); }
            } return exists; }

        //
        if (typeof exists == "object" || typeof exists == "function") {
            if (Array.isArray(exists) || isIterable(exists)) {
                let I = 0; for (const E of entries)
                    { if (I < exists.length) { exists[I++] = E?.[1]; } else { exists?.push?.(E?.[1]); }; }
                return exists;
            }
            return Object.assign(exists, Object.fromEntries([...(entries||[])].filter((K)=>(typeof K != "symbol"))));
        }
    }

    //
    if (name != null) { Reflect.set(target, name, value); return target; } else
    if (typeof value == "object" || typeof value == "function")
        { return Object.assign(target, value); }; return value;
}


//
export const bindFx = (target, fx)=>{
    // !experimental `getOrInsert` feature!
    // @ts-ignore
    const be = boundCtx.getOrInsert(target, new WeakMap());
    return be.getOrInsert(fx, fx?.bind?.(target));
}

//
export const bindCtx    = (target, fx) => ((typeof fx == "function" ? bindFx(target, fx) : fx) ?? fx);

//
export const callByProp = (unwrap, prop: keyType, cb, ctx)=>{
    if (
        prop == null ||
        //(prop == $extractKey$ || prop == $originalKey$ || prop == $registryKey$) ||
        (typeof prop == "symbol" || typeof prop == "object" || typeof prop == "function")
    ) return;

    //
    const callIfNotNull = (v, ...args)=>{
        if (v != null) { return cb?.(v, ...args); }
    }

    //
    if (unwrap instanceof Map || unwrap instanceof WeakMap) {
        if (unwrap.has(prop as any)) { return callIfNotNull?.(unwrap.get(prop as any), prop); }
    } else
        if (unwrap instanceof Set || unwrap instanceof WeakSet) {
            if (unwrap.has(prop as any)) { return callIfNotNull?.(prop, prop); }
        } else
            if (Array.isArray(unwrap) && (typeof prop == "string" && [...prop?.matchAll?.(/^\d+$/g)]?.length == 1) && Number.isInteger(typeof prop == "string" ? parseInt(prop) : prop)) {
                const index = typeof prop == "string" ? parseInt(prop) : prop;
                return callIfNotNull?.(unwrap?.[index], index, null, "@add");
            } else
                if (typeof unwrap == "function" || typeof unwrap == "object") { return callIfNotNull?.(unwrap?.[prop], prop); }
}

//
export const objectAssignNotEqual = (dst, src = {})=>{ Object.entries(src)?.forEach?.(([k,v])=>{ if (isNotEqual(v, dst[k])) { dst[k] = v; }; }); return dst; }
export const callByAllProp = (unwrap, cb, ctx)=>{
    if (unwrap == null) return;

    //
    let keys: any = [];

    if (unwrap instanceof Set || unwrap instanceof Map || typeof unwrap?.keys == "function") {
        return [...(unwrap?.keys?.() || keys)]?.forEach?.((prop: keyType | any) => callByProp(unwrap, prop, cb, ctx));
    }

    if (Array.isArray(unwrap) || isIterable(unwrap)) {
        return [...unwrap]?.forEach?.((v, I) => callByProp(unwrap, I, cb, ctx));
    }

    if (typeof unwrap == "object" || typeof unwrap == "function") {
        return [...(Object.keys(unwrap) || keys)]?.forEach?.((prop: keyType | any) => callByProp(unwrap, prop, cb, ctx));
    }
}

//
export const isObjectNotEqual = (a, b)=>{
    if (a == null && b == null) return false;
    if (a == null || b == null) return true; // @ts-ignore
    if (a instanceof Map || a instanceof WeakMap) { return a.size != b.size || Array.from(a.entries()).some(([k, v]) => !b.has(k) || !isNotEqual(v, b.get(k))); } // @ts-ignore
    if (a instanceof Set || a instanceof WeakSet) { return a.size != b.size || Array.from(a.values()).some((v) => !b.has(v)); } // @ts-ignore
    if (Array.isArray(a) || Array.isArray(b)) { return a.length != b.length || a.some((v, i) => !isNotEqual(v, b[i])); }
    if (typeof a == "object" || typeof b == "object") { return JSON.stringify(a) != JSON.stringify(b); }
    return a != b;
}

//
export const isNotEqual = (a, b)=>{
    if (a == null && b == null) return false;
    if (a == null || b == null) return true;
    if (typeof a == "boolean" && typeof b == "boolean") {
        return a != b;
    }
    if (typeof a == "number" && typeof b == "number") {
        return !(a == b || (Math.abs(a - b) < 1e-9));
    }
    if (typeof a == "string" && typeof b == "string") {
        return ((a != "" && b != "") && a != b) || a !== b;
    }
    if ((typeof a) != (typeof b)) {
        return a !== b;
    }
    return (a && b && a != b) || a !== b;
}

//
export const boundCtx  = new WeakMap();

//
export const isArrayInvalidKey = (key: keyType | null | undefined | any, src?: any) => {
    const invalidForArray = key == null || (key as any) < 0 || typeof key != "number" || (key as any) == Symbol.iterator || (src != null ? key >= (src?.length || 0) : false);
    return (src != null ? Array.isArray(src) && invalidForArray : false);
};

//
export const inProxy = new WeakMap();
export const contextify = (pc: any, name: any) => { return (typeof pc?.[name] == "function" ? pc?.[name]?.bind?.(pc) : pc?.[name]); }

//
export const deepOperateAndClone = (obj: any, operation: (el: any, key: number|string, obj: any)=>any, $prev?: [any, number|string]|null)=>{
    if (Array.isArray(obj)) {
        if (obj.every(isCanJustReturn)) return obj.map(operation);
        return obj.map((value, index) => deepOperateAndClone(value, operation, [obj, index] as [any, number|string]));
    }
    if (obj instanceof Map) {
        const entries = Array.from(obj.entries());
        const values = entries.map(([key, value]) => value);
        if (values.every(isCanJustReturn)) return new Map(entries.map(([key, value]) => [key, operation(value, key, obj)]));
        return new Map(entries.map(([key, value]) => [key, deepOperateAndClone(value, operation, [obj, key] as [any, number|string])]));
    }
    if (obj instanceof Set) {
        const entries = Array.from(obj.entries());
        const values = entries.map(([key, value]) => value);
        if (entries.every(isCanJustReturn)) return new Set(values.map(operation));
        return new Set(values.map(value => deepOperateAndClone(value, operation, [obj, value] as [any, number|string])));
    }
    if (typeof obj == "object" && (obj?.constructor == Object && Object.prototype.toString.call(obj) == "[object Object]")) {
        const entries = Array.from(Object.entries(obj));
        const values = entries.map(([key, value]) => value);
        if (values.every(isCanJustReturn)) return Object.fromEntries(entries.map(([key, value]) => [key, operation(value, key, obj)]));
        return Object.fromEntries(entries.map(([key, value]) => [key, deepOperateAndClone(value, operation, [obj, key] as [any, number|string])]));
    }
    return operation(obj, $prev?.[1] ?? "", $prev?.[0] ?? null);
}

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
