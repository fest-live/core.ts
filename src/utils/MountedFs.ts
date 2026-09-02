/*
 * Filename: MountedFs.ts
 * FullPath: modules/projects/core.ts/src/utils/MountedFs.ts
 * FIND:mounted-fs
 * TAG:ssre,provide,opfs
 *
 * Wire envelope for backend-mounted virtual FS (`/assets/`, extra allowed roots).
 * Lives in core so lure / ssre / SW resolve it without a package subpath.
 *
 * INVARIANT: only allowed mounts are addressable. The server rejects `..` escape.
 */

export const MOUNTED_FS_EVENT = "ssre:fs";
export const MOUNTED_FS_HTTP_PATH = "/ssre/fs";
export const MOUNTED_FS_WS_PATH = "/ssre/fs/ws";

export type MountedFsOp = "mounts" | "list" | "stat" | "read" | "write" | "mkdir" | "remove";

export type MountedFsKind = "file" | "directory";

export type MountedFsEntry = {
    name: string;
    kind: MountedFsKind;
    path: string;
    size?: number;
};

export type MountedFsFileBody = {
    name: string;
    type: string;
    encoding: "base64" | "utf8";
    body: string;
    lastModified?: number;
};

export type MountedFsRequest = {
    t: "fs";
    id: string;
    op: MountedFsOp;
    path?: string;
    file?: MountedFsFileBody;
    recursive?: boolean;
};

export type MountedFsResponse = {
    t: "fs-result";
    id: string;
    ok: boolean;
    op?: MountedFsOp;
    path?: string;
    entries?: MountedFsEntry[];
    mounts?: Array<{ virtual: string; writable: boolean }>;
    file?: MountedFsFileBody;
    stat?: { size: number; isFile: boolean; isDirectory: boolean };
    error?: string;
    /** Host attached `/ssre/fs/ws`. Client must not dial WS unless this is true. */
    ws?: boolean;
    socketio?: boolean;
};

export const createMountedFsId = (): string => {
    try {
        if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
            return crypto.randomUUID();
        }
    } catch { /* fall through */ }
    return `fs_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
};

export const isMountedFsRequest = (value: unknown): value is MountedFsRequest =>
    !!value
    && typeof value === "object"
    && (value as MountedFsRequest).t === "fs"
    && typeof (value as MountedFsRequest).op === "string"
    && typeof (value as MountedFsRequest).id === "string";

export const isMountedFsResponse = (value: unknown): value is MountedFsResponse =>
    !!value
    && typeof value === "object"
    && (value as MountedFsResponse).t === "fs-result"
    && typeof (value as MountedFsResponse).id === "string";

export const parseMountedFsMessage = (raw: unknown): MountedFsRequest | MountedFsResponse | null => {
    let value = raw;
    if (typeof raw === "string") {
        try { value = JSON.parse(raw); }
        catch { return null; }
    }
    if (isMountedFsRequest(value) || isMountedFsResponse(value)) return value;
    return null;
};
