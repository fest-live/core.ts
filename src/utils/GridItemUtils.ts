import { cvt_cs_to_os } from "./Convert";
import { roundNearest } from "./Primitive";
import type { GridArgsType, GridItemType, GridLayoutLike } from "./Types";

/** Canonical `[columns, rows]` for launcher / speed-dial style grids. */
export const normalizeGridLayout = (layout: GridLayoutLike, fallback: [number, number] = [4, 8]): [number, number] => {
    if (Array.isArray(layout) && layout.length >= 2) {
        return [
            Math.max(1, Math.floor(Number(layout[0]) || fallback[0])),
            Math.max(1, Math.floor(Number(layout[1]) || fallback[1]))
        ];
    }
    if (layout && typeof layout === "object") {
        const o = layout as { columns?: number; rows?: number };
        return [
            Math.max(1, Math.floor(Number(o.columns) || fallback[0])),
            Math.max(1, Math.floor(Number(o.rows) || fallback[1]))
        ];
    }
    return [fallback[0], fallback[1]];
};

/** Clamp cell indices to grid bounds (inclusive). */
export const clampGridCellTuple = (cell: [number, number], layout: GridLayoutLike): [number, number] => {
    const [cols, rows] = normalizeGridLayout(layout);
    const x = Math.max(0, Math.min(cols - 1, Math.floor(Number(cell[0]) || 0)));
    const y = Math.max(0, Math.min(rows - 1, Math.floor(Number(cell[1]) || 0)));
    return [x, y];
};

/**
 * Point in grid **local** CSS pixels (origin top-left of grid content box), orientation index from `orientOf(grid)`.
 * Used by launcher hit-testing; DOM wrappers live in `fest/dom`.
 */
export const resolveLocalPointToGridCell = (
    localPx: [number, number],
    size: [number, number],
    layout: GridLayoutLike,
    orient: number,
    options?: {
        mode?: "floor" | "round";
        redirect?: Pick<GridArgsType, "items" | "item" | "list">;
    }
): [number, number] => {
    const L = normalizeGridLayout(layout);
    const w = Math.max(1, size[0] || 1);
    const h = Math.max(1, size[1] || 1);
    const osCoord = cvt_cs_to_os(localPx, [w, h], orient);
    const normalizedArgs: GridArgsType = {
        item: options?.redirect?.item ?? { id: "" },
        list: options?.redirect?.list ?? [],
        items: options?.redirect?.items ?? new Map(),
        layout: L,
        size: [w, h]
    };
    const projected = convertOrientPxToCX(osCoord, normalizedArgs, orient);
    const mode = options?.mode ?? "floor";
    const normalizedCell: [number, number] =
        mode === "round"
            ? [Math.round(projected[0]), Math.round(projected[1])]
            : [Math.floor(projected[0]), Math.floor(projected[1])];
    const redirected = redirectCell(normalizedCell, normalizedArgs);
    return clampGridCellTuple(redirected, L);
};

/** Normalize grid item collections for algorithms that expect an array (Orient desktop uses `Map`, SpeedDial uses arrays). */
export const gridItemsAsArray = (items: GridArgsType["items"] | null | undefined): GridItemType[] => {
    if (items == null) return [];
    if (Array.isArray(items)) return items;
    if (items instanceof Map) return Array.from(items.values());
    if (items instanceof Set) return Array.from(items);
    if (typeof (items as Iterable<GridItemType>)[Symbol.iterator] === "function") {
        return Array.from(items as Iterable<GridItemType>);
    }
    return [];
};

//
const get = (items, id)=>{ if (typeof items?.get == "function") { const item = items?.get?.(id); if (item) { return item; }; }; return Array.from(items?.values?.()||items||[])?.find?.((item: any)=>(item?.id == id || item == id)); }

//
export const getSpan = (el, ax)=>{ const prop = el.style.getPropertyValue(["--ox-c-span", "--ox-r-span"][ax]), factor = ((parseFloat(prop || "1") || 1) - 1); return Math.min(Math.max(factor-1, 0), 1); }
/**
 * Find a non-busy cell near the preferred cell in a grid layout.
 * If the preferred cell is busy, searches nearby cells to find an available one.
 * @param $preCell - Preferred cell coordinates [column, row]
 * @param gridArgs - Grid arguments containing items, layout, and size information
 * @returns Cell coordinates [column, row] that are not busy
 */
export const redirectCell = ($preCell: [number, number], gridArgs: GridArgsType): [number, number] => {
    const layout = normalizeGridLayout(gridArgs?.layout ?? [4, 8]);
    const normalizedArgs: GridArgsType = { ...gridArgs, layout };
    const icons = gridItemsAsArray(normalizedArgs?.items);
    const item = normalizedArgs?.item || {};
    const checkBusy = (cell): boolean => {
        return icons
            .filter((e: GridItemType) => !(e == item || e?.id == item?.id))
            .some((one) => ((one?.cell?.[0] || 0) == (cell[0] || 0) && (one?.cell?.[1] || 0) == (cell[1] || 0)));
    };

    //
    const preCell: [number, number] = [...$preCell]; // make non-conflict copy
    if (!checkBusy(preCell)) { return [...preCell]; }
    const columns = layout[0] || 4;
    const rows    = layout[1] || 8;
    const variants: [number, number][] = [
        [preCell[0] + 1, preCell[1]] as [number, number],
        [preCell[0] - 1, preCell[1]] as [number, number],
        [preCell[0], preCell[1] + 1] as [number, number],
        [preCell[0], preCell[1] - 1] as [number, number],
    ].filter((v) => { return v[0] >= 0 && v[0] < columns && v[1] >= 0 && v[1] < rows; }) || [];
    const suitable = variants.find((v) => !checkBusy(v)); if (suitable) { return [...suitable]; }

    //
    let exceed = 0, busy = true, comp = [...preCell];
    while (busy && exceed++ < columns * rows) {
        if (!(busy = checkBusy(comp))) { return [...comp] as [number, number]; }; comp[0]++;
        if (comp[0] >= columns) { comp[0] = 0; comp[1]++; if (comp[1] >= rows)  { comp[1] = 0; } }
    }
    return [...preCell];
}



/* LAST GENERATION... */
export const makeOrientInset = ($orientPx: [number, number], gridArgs: GridArgsType, orient: number = 0): [number, number] => {
    const boxInPx = [...gridArgs.size];
    const orientPx: [number, number] = [...$orientPx];
    const layout = normalizeGridLayout(gridArgs.layout ?? [4, 8]);
    if (orient%2) { boxInPx.reverse(); };
    return [
        roundNearest(orientPx[0], boxInPx[0] / layout[0]),
        roundNearest(orientPx[1], boxInPx[1] / layout[1])
    ];
}




/* LAST GENERATION... */
export const convertOrientPxToCX = ($orientPx: [number, number], gridArgs: GridArgsType, orient: number = 0): [number, number] => {
    const boxInPx = [...gridArgs.size];
    const orientPx: [number, number] = [...$orientPx];
    const layout = normalizeGridLayout(gridArgs.layout ?? [4, 8]);
    if (orient%2) { boxInPx.reverse(); };
    const gridPxToCX = [layout[0] / boxInPx[0], layout[1] / boxInPx[1]];
    return [orientPx[0] * gridPxToCX[0], orientPx[1] * gridPxToCX[1]]
}

// should be relative from grid-box (not absolute or fixed position)
export const floorInOrientPx = ($orientPx: [number, number], gridArgs: GridArgsType, orient: number = 0) => {
    const orientPx: [number, number] = [...$orientPx];
    const boxInPx = [...gridArgs.size];
    const layout = normalizeGridLayout(gridArgs.layout ?? [4, 8]);
    if (orient%2) { boxInPx.reverse(); };
    const inBox = [boxInPx[0] / layout[0], boxInPx[1] / layout[1]];
    return [roundNearest(orientPx[0], inBox[0]), roundNearest(orientPx[1], inBox[1])];
}

//
export const floorInCX = ($CX: [number, number], gridArgs: GridArgsType): [number, number] => {
    const layout = normalizeGridLayout(gridArgs.layout ?? [4, 8]);
    return [
        Math.min(Math.max(roundNearest($CX[0]), 0), layout[0] - 1),
        Math.min(Math.max(roundNearest($CX[1]), 0), layout[1] - 1)
    ];
}

//
export const clientSpaceInOrientCX = ($clientPx, gridArgs: GridArgsType, orient: number = 0): [number, number] => {
    const clientPx: [number, number] = [...$clientPx] as [number, number];
    const size: [number, number] = [...gridArgs.size] as [number, number];
    const layout = normalizeGridLayout(gridArgs.layout ?? [4, 8]);
    const orientPx = cvt_cs_to_os(clientPx, size, orient);
    const osSize = orient % 2 ? [size[1], size[0]] : [size[0], size[1]];
    return [
        Math.min(Math.max(roundNearest(orientPx[0] / osSize[0] * layout[0], 1), 0), layout[0] - 1),
        Math.min(Math.max(roundNearest(orientPx[1] / osSize[1] * layout[1], 1), 0), layout[1] - 1)
    ];
};
