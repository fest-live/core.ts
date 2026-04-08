//
export interface GridItemType {
    pointerId?: number;
    cell?: [number, number];
    id: string;
};

/** Tuple `[columns, rows]` or `{ columns, rows }` (speed-dial / launcher grids). */
export type GridLayoutLike =
    | [number, number]
    | readonly [number, number]
    | { columns?: number; rows?: number }
    | null
    | undefined;

//
export interface GridArgsType {
    item: GridItemType;
    list: Set<string> | string[];
    items: Map<string, GridItemType>|Set<GridItemType>|GridItemType[];
    layout: GridLayoutLike;
    size: [number, number];
};

//
export interface GridStateType {
    lists: Set<string> | string[];
    items: Map<string, GridItemType>|Set<GridItemType>|GridItemType[];
    layout: GridLayoutLike;
};
