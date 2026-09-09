//
export const renderTabName = (tabName: string) => {
    if (!tabName) return "";

    // split _ as spaces
    tabName = tabName?.replace?.(/_/g, " ") || tabName;

    // capitalize first word letter
    tabName = (tabName?.charAt?.(0)?.toUpperCase?.() + tabName?.slice?.(1)) || tabName;

    //
    return tabName;
}

// more smarter and stronger version of REMOVE_IF_HAS
export const REMOVE_IF_HAS_SIMILAR = (array: any[], old: any, idx: number = -1, srcObj: any = null) => {
    if (array?.indexOf?.(old) >= 0) { array.splice(array.indexOf(old), 1); } else
        if (idx >= 0 && idx < array?.length) { array.splice(idx, 1); } else {
            // TODO: other mechanisms of finding index
        }
}

//
export const REMOVE_IF_HAS = (array: any[], item: any) => {
    if (array?.indexOf?.(item) >= 0) { array.splice(array.indexOf(item), 1); };
};

//
export const PUSH_ONCE = (array: any[], item: any) => {
    if (array?.indexOf?.(item) < 0) { array.push(item); };
};

//
export const SPLICE_INTO_ONCE = (array: any[], item: any, index: number | string | symbol = -1) => {
    if (typeof index != "number" || index < 0 || index >= array?.length) { PUSH_ONCE(array, item); } else
        if (typeof index == "number" && array?.indexOf?.(item) < 0) { array.splice(index, 0, item); };
};

//
export const cachedPerFile = new WeakMap<File | Blob, any>();
export const cachedPerFileName = new Map<string, any>();

//
export const GET_OR_CACHE = async (file: File | Blob | Promise<File | Blob> | null) => {
    let blob: File | Blob | null = null;
    try { blob = await file; } catch (e) { blob = null; console.warn(e); }
    if (blob == null) return null;
    if (cachedPerFile.has(blob)) return cachedPerFile.get(blob);
    if (blob.type != "application/json") { return cachedPerFile.get(blob); }

    const raw = await blob.text?.()?.catch?.(console.warn.bind(console)) || "{}";
    let obj = {} as any; try { obj = JSON.parse(raw) as any; } catch (_) { try { obj = JSON.parse(raw) as any; } catch (e) { console.warn(e); } }
    cachedPerFile.set(blob, obj);
    return obj;
};

// if any other argument isn't working, such as File object (for example, while exclusion)
export const GET_OR_CACHE_BY_NAME = async (fileName: string, file?: File | Blob | Promise<File | Blob> | null) => {
    let blob: File | Blob | null = null;
    try { blob = await file; } catch (e) { blob = null; console.warn(e); }
    if (fileName == null) return null;
    if (cachedPerFileName.has(fileName)) return cachedPerFileName.get(fileName);
    const obj = blob != null ? await GET_OR_CACHE(blob) : cachedPerFileName?.get(fileName);
    if (fileName) { cachedPerFileName.set(fileName, obj); }
    return obj;
};

//
export const mergeByExists = <T extends { name: string }>(dataRef: T[], refs: T[]) => {
    // Build index maps for O(1) lookups
    const dataMap = new Map<string, { item: T; index: number }>();
    dataRef.forEach((item, index) => {
        if (item?.name) dataMap.set(item.name, { item, index });
    });

    const refsMap = new Map<string, T>();
    refs.forEach(ref => {
        if (ref?.name) refsMap.set(ref.name, ref);
    });

    // Update existing items
    for (const [name, { index }] of dataMap) {
        const ref = refsMap.get(name);
        if (ref) {
            dataRef[index] = ref;
        }
    }

    // Add new items
    for (const [name, ref] of refsMap) {
        if (!dataMap.has(name)) {
            dataRef.push(ref);
        }
    }

    // Remove deleted items (iterated backwards to maintain indices)
    for (let i = dataRef.length - 1; i >= 0; i--) {
        const item = dataRef[i];
        if (item?.name && !refsMap.has(item.name)) {
            dataRef.splice(i, 1);
        }
    }

    // sort by name
    dataRef.sort((a: T, b: T) => a?.name?.localeCompare?.(b?.name ?? ""));

    // return sorted data
    return dataRef;
}
