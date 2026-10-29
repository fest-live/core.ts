function ae() {
  const e = globalThis;
  if (e?.HTMLElement == null || typeof e?.HTMLElement == "function") return;
  const t = class {
  }, r = (n) => {
    typeof e[n] != "function" && (e[n] = t);
  };
  r("EventTarget"), r("Node"), r("Element"), r("HTMLElement"), r("SVGElement"), r("Text"), r("Comment"), r("DocumentFragment"), r("ShadowRoot"), r("HTMLDocument"), r("Document"), r("HTMLBodyElement"), r("HTMLHeadElement"), r("HTMLCanvasElement"), r("HTMLInputElement"), r("HTMLLinkElement"), r("HTMLStyleElement"), r("HTMLPreElement"), r("HTMLDivElement"), r("CSSStyleRule"), r("CSSLayerBlockRule");
}
var X = /* @__PURE__ */ Symbol.for("@fix"), qe = (e) => e?.some?.(m), Ge = (e) => Array.isArray(e) || e instanceof Set || e instanceof Map, m = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint" || typeof e > "u" || e == null, le = (e, t) => m(e) ? t == "number" ? Number(e) || 0 : t == "string" ? String(e) || "" : t == "boolean" ? !!e : e : null, U = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), Y = (e) => U(e, "value"), ce = (e) => m(e) ? e : Y(e) ? e?.value : e, c = (e, t) => e?.[X] ?? e ?? t ?? t, W = (e) => e != null && (typeof e == "object" || typeof e == "function") && (e instanceof WeakRef || typeof e?.deref == "function") ? W(e?.deref?.()) : e, ue = (e) => {
  if (typeof e == "function" || e == null) return e;
  const t = function() {
  };
  return t[X] = e, t;
}, Je = (e, t, r) => (e = W(e), e != null && (typeof e == "object" || typeof e == "function") ? e[t] = ce(r = W(r)) : e), ye = (e) => crypto?.getRandomValues ? crypto?.getRandomValues?.(e) : (() => {
  const t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) t[r] = Math.floor(Math.random() * 256);
  return t;
})();
function Xe(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var Ye = (e, t, r) => Math.max(e, Math.min(t, r)), Ze = (e, t) => typeof t == "function" ? t?.bind?.(e) ?? t : t, Qe = () => crypto?.randomUUID ? crypto?.randomUUID?.() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (+e ^ ye?.(/* @__PURE__ */ new Uint8Array(1))?.[0] & 15 >> +e / 4).toString(16)), et = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), tt = (e) => e && e?.replace?.(/-([a-z])/g, (t, r) => r.toUpperCase()), rt = (e, t = 0) => {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}, nt = (e, t) => !Number.isFinite(t) || t <= 0 || !Number.isFinite(e) ? 0 : Math.min(Math.max(e, 0), t), b = (e, t = 1) => Math.round(e * t) / t, it = (e, t = 1) => Math.floor(e * t) / t, st = (e, t = 1) => Math.ceil(e * t) / t, ot = (e) => typeof CSSStyleValue < "u" && e instanceof CSSStyleValue, ft = (e) => e != null && (typeof e == "boolean" ? e !== !1 : !0) && typeof e != "object" && typeof e != "function", at = (e) => typeof e == "boolean" ? e ? "" : null : typeof e == "number" ? String(e) : e, H = /* @__PURE__ */ Symbol.for("@trigger-lock"), lt = (e, t, r = "value") => {
  U(e, r) && (e[H] = !0);
  let n;
  try {
    n = t?.();
  } finally {
    U(e, r) && delete e[H];
  }
  return n;
}, ct = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const r = parseFloat(t[0][0]);
  return !Number.isNaN(r) && Number.isFinite(r) ? r : null;
}, he = /^\d+$/g, de = (e) => {
  if (typeof e != "string" || (e = e?.trim?.(), e == "" || e == null)) return null;
  const t = [...e?.matchAll?.(he)];
  if (t?.length != 1) return null;
  const r = parseInt(t[0][0]);
  return !Number.isNaN(r) && Number.isInteger(r) ? r : null;
}, ut = (e) => typeof e == "number" && !Number.isNaN(e), yt = (e) => typeof e == "string" ? de(e) != null : typeof e == "number" && Number.isInteger(e) && e >= 0, ht = (e) => Array.isArray(e) || e != null && typeof e == "object" && typeof e[Symbol.iterator] == "function", dt = (e, t, r) => {
  e = e instanceof WeakRef ? e.deref() : e;
  const n = [...Object.entries(r)].map?.(([i, s]) => e?.[t]?.call?.(e, i, s));
  return () => {
    n?.forEach?.((i) => i?.());
  };
}, Z = (e) => e instanceof WeakRef || typeof e?.deref == "function", mt = (e) => Z(e) ? W(e) : e, pt = (e) => e != null ? Z(e) ? e : typeof e == "function" || typeof e == "object" ? new WeakRef(e) : e : e, St = (e) => (typeof e == "object" || typeof e == "function") && (e?.value != null || e != null && "value" in e), gt = (e) => e != null && (typeof e == "object" || typeof e == "function"), bt = (e) => Y(e) ? e?.value : e, Pt = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), Mt = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), vt = function(e) {
  return (t) => {
    e[H] = !0;
    let r;
    try {
      r = t?.();
    } finally {
      e[H] = !1;
    }
    return r;
  };
}, Q = (e) => Array.isArray(e) ? e?.flatMap?.((t) => Array.isArray(t) ? Q(t) : t) : e, me = (e) => Q(e)?.every?.(R), R = (e) => m(e) || typeof SharedArrayBuffer == "function" && e instanceof SharedArrayBuffer || pe(e) || Array.isArray(e) && me(e), pe = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), At = (e) => typeof e == "symbol" || typeof e == "object" && Object.prototype.toString.call(e) == "[object Symbol]", Tt = (e) => e instanceof Promise || typeof e?.then == "function", wt = (e) => m(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || typeof MessagePort == "function" && e instanceof MessagePort || typeof ReadableStream == "function" && e instanceof ReadableStream || typeof WritableStream == "function" && e instanceof WritableStream || typeof TransformStream == "function" && e instanceof TransformStream || typeof ImageBitmap == "function" && e instanceof ImageBitmap || typeof VideoFrame == "function" && e instanceof VideoFrame || typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas || typeof RTCDataChannel == "function" && e instanceof RTCDataChannel || typeof AudioData == "function" && e instanceof AudioData || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream || typeof WebTransportSendStream == "function" && e instanceof WebTransportSendStream || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream, xt = (e) => {
  switch (typeof e) {
    case "number":
      return 0;
    case "string":
      return "";
    case "boolean":
      return !1;
    case "object":
      return null;
    case "function":
      return null;
    case "symbol":
      return null;
    case "bigint":
      return 0n;
  }
}, $ = /* @__PURE__ */ Symbol.for("@promise"), Se = /* @__PURE__ */ new Set([
  /* @__PURE__ */ Symbol.for("@extract"),
  /* @__PURE__ */ Symbol.for("@origin"),
  /* @__PURE__ */ Symbol.for("@registry"),
  /* @__PURE__ */ Symbol.for("@value"),
  /* @__PURE__ */ Symbol.for("@promise"),
  /* @__PURE__ */ Symbol.for("@behavior"),
  /* @__PURE__ */ Symbol.for("@trigger"),
  /* @__PURE__ */ Symbol.for("@subscribe"),
  /* @__PURE__ */ Symbol.for("@realProp"),
  /* @__PURE__ */ Symbol.for("@trigger-lock"),
  /* @__PURE__ */ Symbol.for("@trigger-less"),
  /* @__PURE__ */ Symbol.for("@trigger-control"),
  /* @__PURE__ */ Symbol.for("@isNotEqual"),
  /* @__PURE__ */ Symbol.for("@fix"),
  /* @__PURE__ */ Symbol.for("@target"),
  /* @__PURE__ */ Symbol.for("@resolved")
]), O = (e) => e instanceof Promise || typeof e?.then == "function", j = (e) => Promise.resolve(e).then((t) => ({
  status: "fulfilled",
  value: t
}), (t) => ({
  status: "rejected",
  reason: t
})), ee = (e) => Reflect.ownKeys(e).filter((t) => {
  if (Se.has(t)) return !1;
  const r = Object.getOwnPropertyDescriptor(e, t);
  return r !== void 0 && r.enumerable;
}), x = (e, t) => {
  if (e == null || m(e)) return !1;
  if (O(e) || O(e?.[$])) return !0;
  if (typeof e != "object" && typeof e != "function") return !1;
  const r = t ?? /* @__PURE__ */ new WeakSet();
  return r.has(e) ? !1 : (r.add(e), Array.isArray(e) ? e.some((n) => x(n, r)) : e instanceof Map ? [...e.values()].some((n) => x(n, r)) : e instanceof Set ? [...e.values()].some((n) => x(n, r)) : ee(e).some((n) => x(e[n], r)));
};
function _(e, t, r) {
  if (e == null || m(e) || typeof e == "symbol" || O(e)) return e;
  const n = e?.[$];
  if (O(n)) return n;
  if (typeof e != "object" && typeof e != "function" || r.has(e)) return e;
  if (r.add(e), Array.isArray(e)) {
    const s = e.map((o) => _(o, t, r));
    return t == "settled" ? Promise.allSettled(s) : Promise.all(s);
  }
  if (e instanceof Set) {
    const s = [...e.values()].map((o) => _(o, t, r));
    return t == "settled" ? Promise.allSettled(s) : Promise.all(s);
  }
  const i = {};
  if (e instanceof Map) for (const [s, o] of e.entries()) i[s] = _(o, t, r);
  else for (const s of ee(e)) i[s] = _(e[s], t, r);
  return t == "settled" ? Promise.allSettledKeyed(i) : Promise.allKeyed(i);
}
function p(e, t = "all") {
  if (O(e)) return t == "settled" ? j(e) : Promise.resolve(e);
  const r = e?.[$];
  return O(r) ? t == "settled" ? j(r) : Promise.resolve(r) : Promise.resolve(_(e, t, /* @__PURE__ */ new WeakSet()));
}
p.all = (e) => p(e, "all");
p.allSettled = (e) => p(e, "settled");
p.allKeyed = (e) => Promise.allKeyed(e);
p.allSettledKeyed = (e) => Promise.allSettledKeyed(e);
p.try = (e, ...t) => Promise.try(e, ...t).then((r) => p(r, "all"));
var ge = (e) => e instanceof Promise || typeof e?.then == "function";
function Ct(e) {
  return Promise.allKeyed(e);
}
function Ot(e) {
  return Promise.allSettledKeyed(e);
}
function Et() {
  let e, t, r = !1, n = !1;
  return {
    promise: new Promise((i, s) => {
      e = (o) => {
        !r && !n && (r = !0, i(o));
      }, t = (o) => {
        !r && !n && (n = !0, s(o));
      };
    }),
    resolve: e,
    reject: t,
    get isResolved() {
      return r;
    },
    get isRejected() {
      return n;
    }
  };
}
var Rt = class {
  queue = [];
  processing = !1;
  async add(e) {
    return new Promise((t, r) => {
      this.queue.push(async () => {
        try {
          t(await e());
        } catch (n) {
          r(n);
        }
      }), this.process();
    });
  }
  async process() {
    if (!(this.processing || this.queue.length === 0)) {
      for (this.processing = !0; this.queue.length > 0; ) await this.queue.shift()();
      this.processing = !1;
    }
  }
  get length() {
    return this.queue.length;
  }
  get isProcessing() {
    return this.processing;
  }
};
function _t(e, t, r = "Operation timed out") {
  const n = ge(e) ? e : p(e), i = new Promise((s, o) => {
    setTimeout(() => o(new Error(r)), t);
  });
  return Promise.race([n, i]);
}
async function It(e, t = 3, r = 1e3, n = 2) {
  let i;
  for (let s = 0; s <= t; s++) try {
    return await e();
  } catch (o) {
    if (i = o, s < t) {
      const f = r * Math.pow(n, s);
      await new Promise((a) => setTimeout(a, f));
    }
  }
  throw i;
}
async function Dt(e, t) {
  const r = [], n = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Promise.resolve().then(async () => {
      try {
        const f = await s();
        r[i] = f;
      } catch (f) {
        throw f;
      }
    });
    r[i] = void 0, n.push(o), n.length >= t && (await Promise.race(n), n.splice(n.findIndex((f) => f === o), 1));
  }
  return await Promise.all(n), r;
}
var be = class {
  channels = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Map();
  register(e, t) {
    this.channels.set(e, t);
    const r = this.listeners.get(e);
    if (r) for (const n of r) try {
      n(t);
    } catch (i) {
      console.error(`[ChannelRegistry] Listener error for ${e}:`, i);
    }
    return t;
  }
  get(e) {
    return this.channels.get(e);
  }
  has(e) {
    return this.channels.has(e);
  }
  unregister(e) {
    const t = this.channels.delete(e);
    if (t) {
      const r = this.listeners.get(e);
      if (r) for (const n of r) try {
        n(null);
      } catch (i) {
        console.error(`[ChannelRegistry] Unregister listener error for ${e}:`, i);
      }
    }
    return t;
  }
  onChannelChange(e, t) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set());
    const r = this.listeners.get(e);
    if (r.add(t), this.channels.has(e)) try {
      t(this.channels.get(e));
    } catch (n) {
      console.error(`[ChannelRegistry] Initial listener error for ${e}:`, n);
    }
    return () => {
      r.delete(t), r.size === 0 && this.listeners.delete(e);
    };
  }
  getChannelNames() {
    return Array.from(this.channels.keys());
  }
  clear() {
    this.channels.clear(), this.listeners.clear();
  }
}, kt = new be();
function Nt(e, t) {
  const r = {};
  for (const n of t) r[n] = (...i) => e.request(n, i);
  return r;
}
var Pe = class {
  healthChecks = /* @__PURE__ */ new Map();
  intervals = /* @__PURE__ */ new Map();
  healthStatus = /* @__PURE__ */ new Map();
  registerHealthCheck(e, t, r = 3e4) {
    this.healthChecks.set(e, t);
    const n = this.intervals.get(e);
    n && clearInterval(n);
    const i = setInterval(async () => {
      try {
        const s = await t();
        this.healthStatus.set(e, s), s || console.warn(`[ChannelHealth] Channel '${e}' is unhealthy`);
      } catch (s) {
        console.error(`[ChannelHealth] Health check failed for '${e}':`, s), this.healthStatus.set(e, !1);
      }
    }, r);
    this.intervals.set(e, i), t().then((s) => {
      this.healthStatus.set(e, s);
    }).catch(() => {
      this.healthStatus.set(e, !1);
    });
  }
  isHealthy(e) {
    return this.healthStatus.get(e) ?? !1;
  }
  getAllHealthStatuses() {
    const e = {};
    for (const [t, r] of this.healthStatus) e[t] = r;
    return e;
  }
  stopMonitoring(e) {
    const t = this.intervals.get(e);
    t && (clearInterval(t), this.intervals.delete(e)), this.healthChecks.delete(e), this.healthStatus.delete(e);
  }
  stopAllMonitoring() {
    for (const e of this.intervals.values()) clearInterval(e);
    this.intervals.clear(), this.healthChecks.clear(), this.healthStatus.clear();
  }
}, Wt = new Pe(), Ht = (e, t, r = () => null) => e?.getOrInsertComputed?.(t, () => r?.()), zt = (e, t, r = () => null) => e?.getOrInsertComputed?.(t, r), C = (e) => typeof e?.[Symbol.iterator] == "function", Ft = (e) => [
  "symbol",
  "string",
  "number"
].indexOf(typeof e) >= 0, Lt = (e) => e != null && (typeof e == "function" || typeof e == "object") && !(e instanceof WeakRef), Ut = (e, t = "id") => {
  const r = Array.from(e?.values?.()).map((i) => [i?.[t], i]), n = new Map(r);
  return Array.from(n?.values?.() || []);
}, Me = (e, t, r = null) => {
  const n = r != null && (typeof e == "object" || typeof e == "function") ? e?.[r] ?? e : e;
  let i = [];
  t instanceof Set || t instanceof Map || Array.isArray(t) || C(t) ? i = (n instanceof Set || n instanceof WeakSet ? t?.values?.() : t?.entries?.()) || (Array.isArray(t) || C(t) ? t : []) : (typeof t == "object" || typeof t == "function") && (i = n instanceof Set || n instanceof WeakSet ? Object.values(t) : Object.entries(t));
  let s = [];
  Array.isArray(n) ? s = n.entries() : n instanceof Map || n instanceof WeakMap ? s = n?.entries?.() : n instanceof Set || n instanceof WeakSet ? s = n?.values?.() : (typeof n == "object" || typeof n == "function") && (s = Object.entries(n));
  const o = new Set(Array.from(i).map((l) => l?.[0])), f = new Set(Array.from(s).map((l) => l?.[0])), a = o?.difference?.(f);
  if (Array.isArray(n)) {
    const l = n.filter((y, v) => !a.has(v));
    n.splice(0, n.length), n.push(...l);
  } else if (n instanceof Map || n instanceof Set || n instanceof WeakMap || n instanceof WeakSet) for (const l of a) n.delete(l);
  else if (typeof n == "function" || typeof n == "object") for (const l of a) delete n[l];
  return n;
}, ve = (e, t, r = null, n = !0, i = "id") => {
  const s = r != null && (typeof e == "object" || typeof e == "function") ? e?.[r] ?? e : e;
  let o = null;
  if (n && Me(s, t), t instanceof Set || t instanceof Map || Array.isArray(t) || C(t) ? o = (s instanceof Set || s instanceof WeakSet ? t?.values?.() : t?.entries?.()) || (Array.isArray(t) || C(t) ? t : []) : (typeof t == "object" || typeof t == "function") && (o = s instanceof Set || s instanceof WeakSet ? Object.values(t) : Object.entries(t)), s && o && (typeof o == "object" || typeof o == "function")) {
    if (s instanceof Map || s instanceof WeakMap) {
      for (const f of o) s.set(...f);
      return s;
    }
    if (s instanceof Set || s instanceof WeakSet) {
      for (const f of o) {
        const a = f?.[i] ? Array.from(s?.values?.() || []).find((l) => !z?.(l?.[i], f?.[i])) : null;
        a != null ? ve(a, f, null, n, i) : s.add(f);
      }
      return s;
    }
    if (typeof s == "object" || typeof s == "function") {
      if (Array.isArray(s) || C(s)) {
        let f = 0;
        for (const a of o) f < s.length ? s[f++] = a?.[1] : s?.push?.(a?.[1]);
        return s;
      }
      return Object.assign(s, Object.fromEntries([...o || []].filter((f) => typeof f != "symbol")));
    }
  }
  return r != null ? (Reflect.set(e, r, t), e) : typeof t == "object" || typeof t == "function" ? Object.assign(e, t) : t;
}, Ae = (e, t) => we.getOrInsert(e, /* @__PURE__ */ new WeakMap()).getOrInsert(t, t?.bind?.(e)), Bt = (e, t) => (typeof t == "function" ? Ae(e, t) : t) ?? t, F = (e, t, r, n) => {
  if (t == Symbol.iterator) return Te(e, r, n);
  if (t == null || typeof t == "symbol" || typeof t == "object" || typeof t == "function") return;
  const i = (s, ...o) => {
    if (s != null) return r?.(s, ...o);
  };
  if (e instanceof Map || e instanceof WeakMap) {
    if (e.has(t)) return i?.(e.get(t), t, null, "@set");
  } else if (e instanceof Set || e instanceof WeakSet) {
    if (e.has(t)) return i?.(t, t, null, "@add");
  } else if (Array.isArray(e) && typeof t == "string" && [...t?.matchAll?.(/^\d+$/g)].length == 1 && Number.isInteger(typeof t == "string" ? parseInt(t) : t)) {
    const s = typeof t == "string" ? parseInt(t) : t;
    return i?.(e?.[s], s, null, "@add");
  } else if (typeof e == "function" || typeof e == "object") return i?.(e?.[t], t, null, "@set");
}, $t = (e, t = {}) => (Object.entries(t)?.forEach?.(([r, n]) => {
  z(n, e[r]) && (e[r] = n);
}), e), Te = (e, t, r) => {
  if (e == null) return;
  let n = [];
  if (e instanceof Set || e instanceof Map || typeof e?.keys == "function") return [...e?.keys?.() || n].forEach?.((i) => F(e, i, t, r));
  if (Array.isArray(e) || C(e)) return [...e].forEach?.((i, s) => F(e, s, t, r));
  if (typeof e == "object" || typeof e == "function") return [...Object.keys(e) || n].forEach?.((i) => F(e, i, t, r));
}, Kt = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : e instanceof Map || e instanceof WeakMap ? e.size != t.size || Array.from(e.entries()).some(([r, n]) => !t.has(r) || !z(n, t.get(r))) : e instanceof Set || e instanceof WeakSet ? e.size != t.size || Array.from(e.values()).some((r) => !t.has(r)) : Array.isArray(e) || Array.isArray(t) ? e.length != t.length || e.some((r, n) => !z(r, t[n])) : typeof e == "object" || typeof t == "object" ? JSON.stringify(e) != JSON.stringify(t) : e != t, z = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : typeof e == "boolean" && typeof t == "boolean" ? e != t : typeof e == "number" && typeof t == "number" ? !(e == t || Math.abs(e - t) < 1e-9) : typeof e == "string" && typeof t == "string" ? e != "" && t != "" && e != t || e !== t : typeof e != typeof t ? e !== t : e && t && e != t || e !== t, te = /* @__PURE__ */ Symbol.for("object.boundCtx");
globalThis[te] ??= /* @__PURE__ */ new WeakMap();
var we = globalThis[te], Vt = (e, t) => {
  const r = e == null || e < 0 || typeof e != "number" || e == Symbol.iterator || (t != null ? e >= (t?.length || 0) : !1);
  return t != null ? Array.isArray(t) && r : !1;
}, jt = /* @__PURE__ */ new WeakMap(), qt = (e, t) => typeof e?.[t] == "function" ? e?.[t]?.bind?.(e) : e?.[t], D = (e, t, r) => {
  if (Array.isArray(e))
    return e.every(R) ? e.map(t) : e.map((n, i) => D(n, t, [e, i]));
  if (e instanceof Map) {
    const n = Array.from(e.entries());
    return n.map(([i, s]) => s).every(R) ? new Map(n.map(([i, s]) => [i, t(s, i, e)])) : new Map(n.map(([i, s]) => [i, D(s, t, [e, i])]));
  }
  if (e instanceof Set) {
    const n = Array.from(e.entries()), i = n.map(([s, o]) => o);
    return n.every(R) ? new Set(i.map(t)) : new Set(i.map((s) => D(s, t, [e, s])));
  }
  if (typeof e == "object" && e?.constructor == Object && Object.prototype.toString.call(e) == "[object Object]") {
    const n = Array.from(Object.entries(e));
    return n.map(([i, s]) => s).every(R) ? Object.fromEntries(n.map(([i, s]) => [i, t(s, i, e)])) : Object.fromEntries(n.map(([i, s]) => [i, D(s, t, [e, i])]));
  }
  return t(e, r?.[1] ?? "", r?.[0] ?? null);
}, Gt = (e, t, r) => {
  if (e?.[t] != null) {
    const n = e[t];
    return Array.isArray(r) ? n.add(...r) : typeof r == "function" && n.add(r), e;
  }
  return e[t] ??= Array.isArray(r) ? new Set(r) : typeof r == "function" ? /* @__PURE__ */ new Set([r]) : r, e;
}, re = /* @__PURE__ */ Symbol.for("@resolved-promise"), ne = /* @__PURE__ */ Symbol.for("@handled-promise");
globalThis[re] ??= /* @__PURE__ */ new WeakMap();
globalThis[ne] ??= /* @__PURE__ */ new WeakMap();
var g = globalThis[re], q = globalThis[ne], xe = /* @__PURE__ */ Symbol.for("@extract"), B = (e) => e instanceof Promise || typeof e?.then == "function", d = (e, t) => B(e) ? g?.has?.(e) ? t(g?.get?.(e)) : Promise.try?.(async () => {
  const r = await e;
  return g?.set?.(e, r), r;
})?.then?.(t) : t(e), Ce = class {
  #e;
  #t;
  constructor(e, t) {
    this.#e = e, this.#t = t;
  }
  defineProperty(e, t, r) {
    return c(e) instanceof Promise ? Reflect.defineProperty(e, t, r) : d(c(e), (n) => Reflect.defineProperty(n, t, r));
  }
  deleteProperty(e, t) {
    return c(e) instanceof Promise ? Reflect.deleteProperty(e, t) : d(c(e), (r) => Reflect.deleteProperty(r, t));
  }
  getPrototypeOf(e) {
    return c(e) instanceof Promise ? Reflect.getPrototypeOf(e) : d(c(e), (t) => Reflect.getPrototypeOf(t));
  }
  setPrototypeOf(e, t) {
    return c(e) instanceof Promise ? Reflect.setPrototypeOf(e, t) : d(c(e), (r) => Reflect.setPrototypeOf(r, t));
  }
  isExtensible(e) {
    return c(e) instanceof Promise ? Reflect.isExtensible(e) : d(c(e), (t) => Reflect.isExtensible(t));
  }
  preventExtensions(e) {
    return c(e) instanceof Promise ? Reflect.ownKeys(e) : d(c(e), (t) => Reflect.preventExtensions(t));
  }
  ownKeys(e) {
    const t = c(e);
    return t instanceof Promise ? Object.keys(t) : d(t, (r) => (typeof r == "object" || typeof r == "function") && r != null ? Object.keys(r) : []) ?? [];
  }
  getOwnPropertyDescriptor(e, t) {
    return c(e) instanceof Promise ? Reflect.getOwnPropertyDescriptor(e, t) : d(c(e), (r) => Reflect.getOwnPropertyDescriptor(r, t));
  }
  construct(e, t, r) {
    return d(c(e), (n) => Reflect.construct(n, t, r));
  }
  has(e, t) {
    return c(e) instanceof Promise ? Reflect.has(e, t) : d(c(e), (r) => Reflect.has(r, t));
  }
  get(e, t, r) {
    if (e = c(e), t == "promise") return e;
    if (t == "resolve" && this.#e) return (...i) => {
      const s = this.#e?.(...i);
      return this.#e = null, s;
    };
    if (t == "reject" && this.#t) return (...i) => {
      const s = this.#t?.(...i);
      return this.#t = null, s;
    };
    if (t == "then" || t == "catch" || t == "finally") {
      if (e instanceof Promise) return e?.[t]?.bind?.(e);
      {
        const i = Promise.try(() => e);
        return i?.[t]?.bind?.(i);
      }
    }
    let n;
    return g?.has?.(e) && (n = g?.get?.(e))?.[t] != null ? n = g?.get?.(e)?.[t] : n = T(d(e, async (i) => {
      if (c(i) instanceof Promise) return Reflect.get(i, t, r);
      if (m(i)) return t == Symbol.toPrimitive || t == Symbol.toStringTag ? i : void 0;
      let s;
      try {
        s = Reflect.get(i, t, r);
      } catch {
        s = e?.[t];
      }
      return typeof s == "function" ? s?.bind?.(i) : s;
    })), t == Symbol.toStringTag ? m(n) ? String(n ?? "") || "" : n?.[Symbol.toStringTag]?.() || String(n ?? "") || "" : t == Symbol.toPrimitive ? (i) => {
      if (m(n)) return le(n, i);
    } : n;
  }
  set(e, t, r) {
    return d(c(e), (n) => Reflect.set(n, t, r));
  }
  apply(e, t, r) {
    if (this.#e) {
      const n = this.#e?.(...r);
      return this.#e = null, n;
    }
    return d(c(e, this.#e), (n) => {
      if (typeof n == "function")
        return c(n) instanceof Promise, Reflect.apply(n, t, r);
    });
  }
};
function T(e, t, r) {
  return e != null && typeof e?.resolved == "function" && e[xe] != null && x(e) ? T(e.resolved(), t, r) : !B(e) && x(e) ? T(p(e), t, r) : B(e) ? g?.has?.(e) ? g?.get?.(e) : (q?.has?.(e) || e?.then?.((n) => g?.set?.(e, n)), q.getOrInsertComputed(e, () => new Proxy(ue(e), new Ce(t, r)))) : e;
}
T.allKeyed = function(e, t, r) {
  return T(Promise.allKeyed(e), t, r);
};
T.allSettledKeyed = function(e, t, r) {
  return T(Promise.allSettledKeyed(e), t, r);
};
var L = /* @__PURE__ */ new WeakMap(), Oe = class {
  _deref(e) {
    return e instanceof WeakRef || typeof e?.deref == "function" ? e?.deref?.() : e;
  }
  get(e, t, r) {
    const n = this._deref(e), i = n?.[t];
    return (t == "element" || t == "value") && n && (i == null || !(t in n)) ? n : t == "deref" ? () => this._deref(e) : typeof i == "function" ? (...s) => this._deref(e)?.[t]?.(...s) : i;
  }
  set(e, t, r, n) {
    const i = this._deref(e);
    return i ? Reflect.set(i, t, r) : !0;
  }
  has(e, t) {
    const r = this._deref(e);
    return r ? t in r : !1;
  }
  ownKeys(e) {
    const t = this._deref(e);
    return t ? Reflect.ownKeys(t) : [];
  }
  getOwnPropertyDescriptor(e, t) {
    const r = this._deref(e);
    if (r)
      return Object.getOwnPropertyDescriptor(r, t);
  }
  deleteProperty(e, t) {
    const r = this._deref(e);
    return r ? Reflect.deleteProperty(r, t) : !0;
  }
  defineProperty(e, t, r) {
    const n = this._deref(e);
    return n ? Reflect.defineProperty(n, t, r) : !0;
  }
  getPrototypeOf(e) {
    const t = this._deref(e);
    return t ? Object.getPrototypeOf(t) : null;
  }
  setPrototypeOf(e, t) {
    const r = this._deref(e);
    return r ? Reflect.setPrototypeOf(r, t) : !0;
  }
  isExtensible(e) {
    const t = this._deref(e);
    return t ? Reflect.isExtensible(t) : !1;
  }
  preventExtensions(e) {
    const t = this._deref(e);
    return t ? Reflect.preventExtensions(t) : !0;
  }
};
function Jt(e) {
  if (!(typeof e == "object" || typeof e == "function") || typeof e == "symbol") return e;
  const t = e instanceof WeakRef || typeof e?.deref == "function";
  if (e = t ? e?.deref?.() : e, e != null && L.has(e)) return L.get(e);
  const r = new Oe(), n = new Proxy(t ? e : new WeakRef(e), r);
  return L.set(e, n), n;
}
var ie = (e, t, r = 0) => {
  const n = [...t], i = [...e];
  return r % 2 && (i.reverse(), n.reverse()), [(r == 0 || r == 3 ? i[0] : n[0] - i[0]) || 0, (r == 0 || r == 1 ? i[1] : n[1] - i[1]) || 0];
}, Xt = (e, t, r = 0) => {
  const n = [...t], i = [...e];
  r % 2 && n.reverse();
  const s = [(r == 0 || r == 3 ? i[0] : n[0] - i[0]) || 0, (r == 0 || r == 1 ? i[1] : n[1] - i[1]) || 0];
  return r % 2 && s.reverse(), s;
}, Yt = (e, t = 0) => {
  const r = [...e];
  return t % 2 && r.reverse(), [(t == 0 || t == 3 ? r[0] : -r[0]) || 0, (t == 0 || t == 1 ? r[1] : -r[1]) || 0];
}, Zt = (e, t = 0) => {
  const r = [...e], n = [(t == 0 || t == 3 ? r[0] : -r[0]) || 0, (t == 0 || t == 1 ? r[1] : -r[1]) || 0];
  return t % 2 && n.reverse(), n;
}, P = (e, t = [4, 8]) => {
  if (Array.isArray(e) && e.length >= 2) return [Math.max(1, Math.floor(Number(e[0]) || t[0])), Math.max(1, Math.floor(Number(e[1]) || t[1]))];
  if (e && typeof e == "object") {
    const r = e;
    return [Math.max(1, Math.floor(Number(r.columns) || t[0])), Math.max(1, Math.floor(Number(r.rows) || t[1]))];
  }
  return [t[0], t[1]];
}, Ee = (e, t) => {
  const [r, n] = P(t);
  return [Math.max(0, Math.min(r - 1, Math.floor(Number(e[0]) || 0))), Math.max(0, Math.min(n - 1, Math.floor(Number(e[1]) || 0)))];
}, Qt = (e, t, r, n, i) => {
  const s = P(r), o = Math.max(1, t[0] || 1), f = Math.max(1, t[1] || 1), a = ie(e, [o, f], n), l = {
    item: i?.redirect?.item ?? { id: "" },
    list: i?.redirect?.list ?? [],
    items: i?.redirect?.items ?? /* @__PURE__ */ new Map(),
    layout: s,
    size: [o, f]
  }, y = Ie(a, l, n), v = (i?.mode ?? "floor") === "round" ? [Math.round(y[0]), Math.round(y[1])] : [Math.floor(y[0]), Math.floor(y[1])], w = _e(v, l);
  return Ee(w, s);
}, Re = (e) => e == null ? [] : Array.isArray(e) ? e : e instanceof Map ? Array.from(e.values()) : e instanceof Set || typeof e[Symbol.iterator] == "function" ? Array.from(e) : [], er = (e, t) => {
  const r = e.style.getPropertyValue(["--ox-c-span", "--ox-r-span"][t]), n = (parseFloat(r || "1") || 1) - 1;
  return Math.min(Math.max(n - 1, 0), 1);
}, _e = (e, t) => {
  const r = P(t?.layout ?? [4, 8]), n = {
    ...t,
    layout: r
  }, i = Re(n?.items), s = n?.item, o = (S) => i.filter((E) => !(E == s || s != null && E?.id == s.id)).some((E) => (E?.cell?.[0] || 0) == (S[0] || 0) && (E?.cell?.[1] || 0) == (S[1] || 0)), f = [...e];
  if (!o(f)) return [...f];
  const a = r[0] || 4, l = r[1] || 8, y = ([
    [f[0] + 1, f[1]],
    [f[0] - 1, f[1]],
    [f[0], f[1] + 1],
    [f[0], f[1] - 1]
  ].filter((S) => S[0] >= 0 && S[0] < a && S[1] >= 0 && S[1] < l) || []).find((S) => !o(S));
  if (y) return [...y];
  let v = 0, w = !0, h = [...f];
  for (; w && v++ < a * l; ) {
    if (!(w = o(h))) return [...h];
    h[0]++, h[0] >= a && (h[0] = 0, h[1]++, h[1] >= l && (h[1] = 0));
  }
  return [...f];
}, tr = (e, t, r = 0) => {
  const n = [...t.size], i = [...e], s = P(t.layout ?? [4, 8]);
  return r % 2 && n.reverse(), [b(i[0], n[0] / s[0]), b(i[1], n[1] / s[1])];
}, Ie = (e, t, r = 0) => {
  const n = [...t.size], i = [...e], s = P(t.layout ?? [4, 8]);
  r % 2 && n.reverse();
  const o = [s[0] / n[0], s[1] / n[1]];
  return [i[0] * o[0], i[1] * o[1]];
}, rr = (e, t, r = 0) => {
  const n = [...e], i = [...t.size], s = P(t.layout ?? [4, 8]);
  r % 2 && i.reverse();
  const o = [i[0] / s[0], i[1] / s[1]];
  return [b(n[0], o[0]), b(n[1], o[1])];
}, nr = (e, t) => {
  const r = P(t.layout ?? [4, 8]);
  return [Math.min(Math.max(b(e[0]), 0), r[0] - 1), Math.min(Math.max(b(e[1]), 0), r[1] - 1)];
}, ir = (e, t, r = 0) => {
  const n = [...e], i = [...t.size], s = P(t.layout ?? [4, 8]), o = ie(n, i, r), f = r % 2 ? [i[1], i[0]] : [i[0], i[1]];
  return [Math.min(Math.max(b(o[0] / f[0] * s[0], 1), 0), s[0] - 1), Math.min(Math.max(b(o[1] / f[1] * s[1], 1), 0), s[1] - 1)];
}, M = (e) => {
  const t = String(e ?? "").trim();
  return t ? (t.startsWith("/") ? t : `/${t}`).replace(/\/+/g, "/") : "/";
}, K = (e) => {
  const t = M(e);
  return t === "/user" || t.startsWith("/user/");
}, V = (e) => {
  const t = M(e);
  return t === "/user" ? "/" : t.startsWith("/user/") ? t.slice(5) || "/" : t;
}, sr = (e) => V(e).replace(/^\/+/, ""), or = (e) => {
  const t = M(e);
  return K(t) ? t : t === "/" ? "/user/" : `/user${t}`;
}, fr = (e) => {
  const t = M(e), r = V(t);
  return K(t) ? Array.from(/* @__PURE__ */ new Set([r, t])) : [r];
}, se = (e) => {
  const t = M(e);
  return t === "/idb" || t.startsWith("/idb/");
}, De = (e) => {
  const t = M(e);
  return t === "/idb" ? "/" : t.startsWith("/idb/") ? t.slice(4) || "/" : t;
}, ke = (e) => K(e) || se(e), Ne = (e) => {
  const t = M(e);
  return se(t) ? De(t) : V(t);
}, ar = (e) => {
  const t = M(e), r = Ne(t);
  return ke(t) ? Array.from(/* @__PURE__ */ new Set([r, t])) : [r];
}, lr = "ssre:fs", cr = "/ssre/fs", ur = "/ssre/fs/ws", yr = () => {
  try {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
  } catch {
  }
  return `fs_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}, We = (e) => !!e && typeof e == "object" && e.t === "fs" && typeof e.op == "string" && typeof e.id == "string", He = (e) => !!e && typeof e == "object" && e.t === "fs-result" && typeof e.id == "string", hr = (e) => {
  let t = e;
  if (typeof e == "string") try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  return We(t) || He(t) ? t : null;
}, dr = (e) => e ? (e = e?.replace?.(/_/g, " ") || e, e = e?.charAt?.(0)?.toUpperCase?.() + e?.slice?.(1) || e, e) : "", mr = (e, t, r = -1, n = null) => {
  e?.indexOf?.(t) >= 0 ? e.splice(e.indexOf(t), 1) : r >= 0 && r < e?.length && e.splice(r, 1);
}, pr = (e, t) => {
  e?.indexOf?.(t) >= 0 && e.splice(e.indexOf(t), 1);
}, ze = (e, t) => {
  e?.indexOf?.(t) < 0 && e.push(t);
}, Sr = (e, t, r = -1) => {
  typeof r != "number" || r < 0 || r >= e?.length ? ze(e, t) : typeof r == "number" && e?.indexOf?.(t) < 0 && e.splice(r, 0, t);
}, k = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new Map(), Fe = async (e) => {
  let t = null;
  try {
    t = await e;
  } catch (i) {
    t = null, console.warn(i);
  }
  if (t == null) return null;
  if (k.has(t) || t.type != "application/json") return k.get(t);
  const r = await t.text?.()?.catch?.(console.warn.bind(console)) || "{}";
  let n = {};
  try {
    n = JSON.parse(r);
  } catch {
    try {
      n = JSON.parse(r);
    } catch (s) {
      console.warn(s);
    }
  }
  return k.set(t, n), n;
}, gr = async (e, t) => {
  let r = null;
  try {
    r = await t;
  } catch (i) {
    r = null, console.warn(i);
  }
  if (e == null) return null;
  if (N.has(e)) return N.get(e);
  const n = r != null ? await Fe(r) : N?.get(e);
  return e && N.set(e, n), n;
}, br = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  e.forEach((i, s) => {
    i?.name && r.set(i.name, {
      item: i,
      index: s
    });
  });
  const n = /* @__PURE__ */ new Map();
  t.forEach((i) => {
    i?.name && n.set(i.name, i);
  });
  for (const [i, { index: s }] of r) {
    const o = n.get(i);
    o && (e[s] = o);
  }
  for (const [i, s] of n) r.has(i) || e.push(s);
  for (let i = e.length - 1; i >= 0; i--) {
    const s = e[i];
    s?.name && !n.has(s.name) && e.splice(i, 1);
  }
  return e.sort((i, s) => i?.name?.localeCompare?.(s?.name ?? "")), e;
}, Le = /\+?\d[\d\s().\-]{4,}\d/g, Ue = /(доб\.?|доп\.?|ext\.?|extension)\s*[:#\-x]*\s*\d+.*/i, oe = {
  defaultTrunk: "8",
  countryCode: "7",
  cityCode: null,
  stripExtensions: !0,
  minLocal: 5,
  maxLocal: 7
}, I = (e, t = {}) => {
  if (e == null) return null;
  const r = {
    ...oe,
    ...t
  };
  let n = String(e).trim();
  if (!n) return null;
  r.stripExtensions && (n = n.replace(Ue, ""));
  const i = /^\+/.test(n);
  let s = n.replace(/\D/g, "");
  if (!s) return null;
  if (i && s.startsWith(r.countryCode)) s = r.defaultTrunk + s.slice(r.countryCode.length);
  else if (s.length === 11 && s.startsWith(r.countryCode)) s = r.defaultTrunk + s.slice(1);
  else if (s.length === 10) s = r.defaultTrunk + s;
  else if (r.cityCode && s.length >= r.minLocal && s.length <= r.maxLocal) s = r.defaultTrunk + r.cityCode + s;
  else if (!(s.length === 11 && s.startsWith(r.defaultTrunk)))
    if (r.cityCode && s.length === r.cityCode.length + 7) s = r.defaultTrunk + s;
    else return null;
  return /^\d{11}$/.test(s) ? s : null;
}, G = (e) => {
  if (e == null) return [];
  const t = String(e), r = t.match(Le);
  return r?.length ? r : t.split(/[;,/|]+/).map((n) => n.trim()).filter(Boolean);
}, Be = (e, t = {}) => {
  const r = /* @__PURE__ */ new Set();
  if (Array.isArray(e)) for (const n of e) if (typeof n == "string") for (const i of G(n)) {
    const s = I(i, t);
    s && r.add(s);
  }
  else {
    const i = I(n, t);
    i && r.add(i);
  }
  else if (typeof e == "string") for (const n of G(e)) {
    const i = I(n, t);
    i && r.add(i);
  }
  else {
    const n = I(e, t);
    n && r.add(n);
  }
  return [...r];
}, $e = (e, t) => Array.isArray(e) && typeof e[1] == "number" ? e[1] : e && typeof e == "object" && typeof e.index == "number" ? e.index : t, Ke = (e) => {
  if (Array.isArray(e)) return e[0];
  if (e && typeof e == "object") {
    if ("phones" in e) return e.phones;
    if ("phone" in e) return e.phone;
  }
  return e;
};
function Pr(e, t = {}) {
  const r = {
    ...oe,
    ...t
  }, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  e.forEach((f, a) => {
    const l = $e(f, a), y = Ke(f), v = Be(y, r);
    i.has(l) || i.set(l, /* @__PURE__ */ new Set());
    const w = i.get(l);
    for (const h of v)
      w.add(h), n.has(h) || n.set(h, /* @__PURE__ */ new Set()), n.get(h).add(l);
  });
  const s = {};
  for (const [f, a] of n.entries()) a.size > 1 && (s[f] = [...a].sort((l, y) => l - y));
  const o = {};
  for (const [f, a] of i.entries()) {
    const l = [...a].filter((y) => s[y]);
    l.length && (o[f] = l.sort());
  }
  return {
    duplicatesByNumber: s,
    pairs: Object.entries(o).map(([f, a]) => [Number(f), a]).sort((f, a) => f[0] - a[0]),
    duplicatesByIndex: o,
    normalize: (f) => I(f, r)
  };
}
var fe = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
function Ve(e) {
  return e ? /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(e).trim()) : !1;
}
function A(e) {
  if (!e) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "object" && e?.timestamp) return A(e.timestamp);
  if (typeof e == "object" && e?.iso_date) return A(e.iso_date);
  if (typeof e == "object" && e?.date) return A(e.date);
  if (typeof e == "number") {
    if (e >= 1e12) return new Date(e);
    const t = Math.pow(10, 11 - (String(e | 0)?.length || 11)) | 0;
    return new Date(e * t);
  }
  if (typeof e == "string" && Ve(e)) {
    const t = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(e.trim());
    if (!t) return /* @__PURE__ */ new Date();
    const [, r, n] = t, i = /* @__PURE__ */ new Date();
    return new Date(i.getFullYear(), i.getMonth(), i.getDate(), Number(r), Number(n), 0, 0);
  }
  return new Date(String(e));
}
function Mr(e) {
  return e ? typeof e == "number" ? e >= 1e12 ? e : e * (Math.pow(10, 11 - (String(e | 0)?.length || 11)) | 0) : e instanceof Date ? e.getTime() : A(e)?.getTime?.() ?? Date.now() : Date.now();
}
var vr = (e) => {
  if (!e) return null;
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())), r = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - r);
  const n = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t.getTime() - n.getTime()) / 864e5 + 1) / 7);
}, je = (e) => e ? typeof e == "object" && (e.date || e.iso_date || e.timestamp) ? e : { iso_date: String(e) } : null, Ar = (e) => {
  const t = je(e);
  return t && A(t)?.toLocaleTimeString?.("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
    timeZone: fe()
  }) || "";
}, Tr = (e) => A(e)?.toLocaleDateString?.("en-GB", {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric",
  timeZone: fe()
}) || "", wr = (e) => {
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? "" : t.toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}, u = (e) => {
  if (e == null) return NaN;
  if (typeof e == "number" && Number.isFinite(e)) return e;
  const t = A(e);
  if (t && !Number.isNaN(t?.getTime())) return t?.getTime() ?? 0;
  const r = String(e).match(/^(\d{1,2})(?::(\d{2}))?(?::(\d{2}))?/);
  if (r) {
    const i = Number(r[1]) || 0, s = Number(r[2]) || 0, o = Number(r[3]) || 0;
    return ((i * 60 + s) * 60 + o) * 1e3;
  }
  const n = Number(e);
  return Number.isFinite(n) ? n : NaN;
}, xr = (e) => {
  const t = e instanceof Date || typeof e == "string" && e.match(/^\d{4}-\d{2}-\d{2}$/);
  let r = !1;
  try {
    r = u(e) > 0;
  } catch {
    r = !1;
  }
  return !!((t && r) ?? !1);
}, Cr = (e, t, r) => e && t ? u(e) < u(r) && u(r) < u(t) : e ? u(e) < u(r) : t ? u(r) < u(t) : !1, Or = (e, t, r, n = 7) => {
  let i = !0;
  if (e && (i &&= u(r) <= u(e)), t && (i &&= u(r) < u(t)), n) {
    const s = u(r) + n * 24 * 60 * 60 * 1e3;
    i &&= u(e) < u(s);
  }
  return i;
}, Er = (e, t) => {
  const r = u(e) || 0, n = (Number.isFinite(r) ? r : 0) - (t || 0);
  return Math.round(n / 864e5);
};
function Rr(e, t) {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => e(...n), t);
  };
}
function _r(e, t) {
  let r = !1;
  return (...n) => {
    r || (e(...n), r = !0, setTimeout(() => r = !1, t));
  };
}
function Ir(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Dr(e = "") {
  return `${e}${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}
function J(e) {
  if (e === null || typeof e != "object") return e;
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof Array) return e.map((t) => J(t));
  if (e instanceof Object) {
    const t = {};
    for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = J(e[r]));
    return t;
  }
  return e;
}
function kr(e) {
  return e == null ? !0 : typeof e == "string" ? e.trim().length === 0 : Array.isArray(e) ? e.length === 0 : typeof e == "object" ? Object.keys(e).length === 0 : !1;
}
function Nr() {
  return typeof window < "u" && typeof document < "u";
}
function Wr() {
  return typeof self < "u" && typeof window > "u";
}
ae();
export {
  lt as $avoidTrigger,
  X as $fxy,
  ce as $getValue,
  Je as $set,
  H as $triggerLock,
  Rt as AsyncQueue,
  Pe as ChannelHealthMonitor,
  be as ChannelRegistry,
  Ue as EXT_CUT_RE,
  Fe as GET_OR_CACHE,
  gr as GET_OR_CACHE_BY_NAME,
  he as INTEGER_REGEXP,
  lr as MOUNTED_FS_EVENT,
  cr as MOUNTED_FS_HTTP_PATH,
  ur as MOUNTED_FS_WS_PATH,
  Le as PHONE_CANDIDATE_RE,
  ze as PUSH_ONCE,
  T as Promised,
  pr as REMOVE_IF_HAS,
  mr as REMOVE_IF_HAS_SIMILAR,
  Sr as SPLICE_INTO_ONCE,
  Qe as UUIDv4,
  Jt as WRef,
  Ct as allKeyed,
  Ot as allSettledKeyed,
  Bt as bindCtx,
  Gt as bindEvent,
  Ae as bindFx,
  we as boundCtx,
  k as cachedPerFile,
  N as cachedPerFileName,
  Te as callByAllProp,
  F as callByProp,
  et as camelToKebab,
  yt as canBeInteger,
  st as ceilNearest,
  Cr as checkInTimeRange,
  Or as checkRemainsTime,
  Ye as clamp,
  nt as clampDimension,
  Ee as clampGridCellTuple,
  ir as clientSpaceInOrientCX,
  Er as computeTimelineOrderInGeneral,
  Dt as concurrentLimit,
  qt as contextify,
  Ie as convertOrientPxToCX,
  Nt as createChannelProxy,
  Et as createDeferred,
  yr as createMountedFsId,
  ie as cvt_cs_to_os,
  Xt as cvt_os_to_cs,
  Yt as cvt_rel_cs_to_os,
  Zt as cvt_rel_os_to_cs,
  Rr as debounce,
  J as deepClone,
  D as deepOperateAndClone,
  xt as defaultByType,
  W as deref,
  Pr as findDuplicatePhones,
  ue as fixFx,
  nr as floorInCX,
  rr as floorInOrientPx,
  it as floorNearest,
  Tr as formatAsDate,
  Ar as formatAsTime,
  wr as formatDateTime,
  u as getComparableTimeValue,
  vr as getISOWeekNumber,
  $e as getIndexForRow,
  Ht as getOrInsert,
  zt as getOrInsertComputed,
  Ke as getPhonesFromRow,
  ye as getRandomValues,
  er as getSpan,
  fe as getTimeZone,
  bt as getValue,
  Wt as globalChannelHealthMonitor,
  kt as globalChannelRegistry,
  Re as gridItemsAsArray,
  dt as handleListeners,
  x as hasPendingPromises,
  U as hasProperty,
  Y as hasValue,
  jt as inProxy,
  Vt as isArrayInvalidKey,
  ht as isArrayOrIterable,
  Nr as isBrowser,
  R as isCanJustReturn,
  wt as isCanTransfer,
  xr as isDate,
  kr as isEmpty,
  qe as isHasPrimitives,
  se as isIdbScopePath,
  C as isIterable,
  Ft as isKeyType,
  We as isMountedFsRequest,
  He as isMountedFsResponse,
  me as isNotComplexArray,
  z as isNotEqual,
  gt as isObject,
  Kt as isObjectNotEqual,
  Ge as isObservable,
  m as isPrimitive,
  Tt as isPromise,
  Ve as isPureHHMM,
  Z as isRef,
  ke as isStorageScopePath,
  At as isSymbol,
  pe as isTypedArray,
  K as isUserScopePath,
  ft as isVal,
  ut as isValidNumber,
  Lt as isValidObj,
  St as isValueRef,
  ot as isValueUnit,
  Wr as isWorker,
  tt as kebabToCamel,
  tr as makeOrientInset,
  vt as makeTriggerLess,
  br as mergeByExists,
  Ut as mergeByKey,
  P as normalizeGridLayout,
  I as normalizeOne,
  Be as normalizePhones,
  at as normalizePrimitive,
  je as normalizeSchedule,
  ve as objectAssign,
  $t as objectAssignNotEqual,
  Mr as parseAndGetCorrectTime,
  A as parseDateCorrectly,
  hr as parseMountedFsMessage,
  Pt as potentiallyAsync,
  Mt as potentiallyAsyncMap,
  _e as redirectCell,
  Me as removeExtra,
  dr as renderTabName,
  Qt as resolveLocalPointToGridCell,
  p as resolved,
  It as retry,
  b as roundNearest,
  Ir as sleep,
  G as splitCandidates,
  ar as storagePathCandidates,
  De as stripIdbScopePrefix,
  Ne as stripStorageScopePrefix,
  V as stripUserScopePrefix,
  _r as throttle,
  rt as toFiniteNumber,
  pt as toRef,
  sr as toUserRelativePath,
  or as toUserScopePath,
  le as tryParseByHint,
  de as tryStringAsInteger,
  ct as tryStringAsNumber,
  Dr as uniqueId,
  mt as unref,
  c as unwrap,
  Q as unwrapArray,
  fr as userPathCandidates,
  Xe as valueClamp,
  Ze as withCtx,
  _t as withTimeout
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY29yZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8jcmVnaW9uIHNyYy9ydW50aW1lL2RvbS1nbG9iYWxzLXBvbHlmaWxsLnRzXG5mdW5jdGlvbiBpbnN0YWxsRG9tQ29uc3RydWN0b3JQb2x5ZmlsbHMoKSB7XG5cdGNvbnN0IGcgPSBnbG9iYWxUaGlzO1xuXHRpZiAoZz8uSFRNTEVsZW1lbnQgPT0gbnVsbCB8fCB0eXBlb2YgZz8uSFRNTEVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCBzdHViID0gY2xhc3Mge307XG5cdGNvbnN0IGVuc3VyZSA9IChuYW1lKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBnW25hbWVdICE9PSBcImZ1bmN0aW9uXCIpIGdbbmFtZV0gPSBzdHViO1xuXHR9O1xuXHRlbnN1cmUoXCJFdmVudFRhcmdldFwiKTtcblx0ZW5zdXJlKFwiTm9kZVwiKTtcblx0ZW5zdXJlKFwiRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTEVsZW1lbnRcIik7XG5cdGVuc3VyZShcIlNWR0VsZW1lbnRcIik7XG5cdGVuc3VyZShcIlRleHRcIik7XG5cdGVuc3VyZShcIkNvbW1lbnRcIik7XG5cdGVuc3VyZShcIkRvY3VtZW50RnJhZ21lbnRcIik7XG5cdGVuc3VyZShcIlNoYWRvd1Jvb3RcIik7XG5cdGVuc3VyZShcIkhUTUxEb2N1bWVudFwiKTtcblx0ZW5zdXJlKFwiRG9jdW1lbnRcIik7XG5cdGVuc3VyZShcIkhUTUxCb2R5RWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTEhlYWRFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MQ2FudmFzRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTElucHV0RWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTExpbmtFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MU3R5bGVFbGVtZW50XCIpO1xuXHRlbnN1cmUoXCJIVE1MUHJlRWxlbWVudFwiKTtcblx0ZW5zdXJlKFwiSFRNTERpdkVsZW1lbnRcIik7XG5cdGVuc3VyZShcIkNTU1N0eWxlUnVsZVwiKTtcblx0ZW5zdXJlKFwiQ1NTTGF5ZXJCbG9ja1J1bGVcIik7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9QcmltaXRpdmUudHNcbnZhciAkZnh5ID0gU3ltYm9sLmZvcihcIkBmaXhcIik7XG52YXIgaXNIYXNQcmltaXRpdmVzID0gKG9ic2VydmFibGUpID0+IHtcblx0cmV0dXJuIG9ic2VydmFibGU/LnNvbWU/Lihpc1ByaW1pdGl2ZSk7XG59O1xudmFyIGlzT2JzZXJ2YWJsZSA9IChvYnNlcnZhYmxlKSA9PiB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KG9ic2VydmFibGUpIHx8IG9ic2VydmFibGUgaW5zdGFuY2VvZiBTZXQgfHwgb2JzZXJ2YWJsZSBpbnN0YW5jZW9mIE1hcDtcbn07XG52YXIgaXNQcmltaXRpdmUgPSAob2JqKSA9PiB7XG5cdHJldHVybiB0eXBlb2Ygb2JqID09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG9iaiA9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBvYmogPT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIG9iaiA9PSBcImJpZ2ludFwiIHx8IHR5cGVvZiBvYmogPT0gXCJ1bmRlZmluZWRcIiB8fCBvYmogPT0gbnVsbDtcbn07XG52YXIgdHJ5UGFyc2VCeUhpbnQgPSAodmFsdWUsIGhpbnQpID0+IHtcblx0aWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHJldHVybiBudWxsO1xuXHRpZiAoaGludCA9PSBcIm51bWJlclwiKSByZXR1cm4gTnVtYmVyKHZhbHVlKSB8fCAwO1xuXHRpZiAoaGludCA9PSBcInN0cmluZ1wiKSByZXR1cm4gU3RyaW5nKHZhbHVlKSB8fCBcIlwiO1xuXHRpZiAoaGludCA9PSBcImJvb2xlYW5cIikgcmV0dXJuICEhdmFsdWU7XG5cdHJldHVybiB2YWx1ZTtcbn07XG52YXIgaGFzUHJvcGVydHkgPSAodiwgcHJvcCA9IFwidmFsdWVcIikgPT4ge1xuXHRyZXR1cm4gKHR5cGVvZiB2ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHYgPT0gXCJmdW5jdGlvblwiKSAmJiB2ICE9IG51bGwgJiYgKHByb3AgaW4gdiB8fCB2Py5bcHJvcF0gIT0gbnVsbCk7XG59O1xudmFyIGhhc1ZhbHVlID0gKHYpID0+IHtcblx0cmV0dXJuIGhhc1Byb3BlcnR5KHYsIFwidmFsdWVcIik7XG59O1xudmFyICRnZXRWYWx1ZSA9ICgkb2JqT3JQbGFpbikgPT4ge1xuXHRpZiAoaXNQcmltaXRpdmUoJG9iak9yUGxhaW4pKSByZXR1cm4gJG9iak9yUGxhaW47XG5cdHJldHVybiBoYXNWYWx1ZSgkb2JqT3JQbGFpbikgPyAkb2JqT3JQbGFpbj8udmFsdWUgOiAkb2JqT3JQbGFpbjtcbn07XG52YXIgdW53cmFwID0gKG9iaiwgZmFsbGJhY2spID0+IHtcblx0cmV0dXJuIG9iaj8uWyRmeHldID8/IChvYmogIT0gbnVsbCA/IG9iaiA6IGZhbGxiYWNrKSA/PyBmYWxsYmFjaztcbn07XG52YXIgZGVyZWYgPSAob2JqKSA9PiB7XG5cdGlmIChvYmogIT0gbnVsbCAmJiAodHlwZW9mIG9iaiA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiKSAmJiAob2JqIGluc3RhbmNlb2YgV2Vha1JlZiB8fCB0eXBlb2Ygb2JqPy5kZXJlZiA9PSBcImZ1bmN0aW9uXCIpKSByZXR1cm4gZGVyZWYob2JqPy5kZXJlZj8uKCkpO1xuXHRyZXR1cm4gb2JqO1xufTtcbnZhciBmaXhGeCA9IChvYmopID0+IHtcblx0aWYgKHR5cGVvZiBvYmogPT0gXCJmdW5jdGlvblwiIHx8IG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuXHRjb25zdCBmeCA9IGZ1bmN0aW9uKCkge307XG5cdGZ4WyRmeHldID0gb2JqO1xuXHRyZXR1cm4gZng7XG59O1xudmFyICRzZXQgPSAocnYsIGtleSwgdmFsKSA9PiB7XG5cdHJ2ID0gZGVyZWYocnYpO1xuXHRpZiAocnYgIT0gbnVsbCAmJiAodHlwZW9mIHJ2ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHJ2ID09IFwiZnVuY3Rpb25cIikpIHJldHVybiBydltrZXldID0gJGdldFZhbHVlKHZhbCA9IGRlcmVmKHZhbCkpO1xuXHRyZXR1cm4gcnY7XG59O1xudmFyIGdldFJhbmRvbVZhbHVlcyA9IChhcnJheSkgPT4ge1xuXHRyZXR1cm4gY3J5cHRvPy5nZXRSYW5kb21WYWx1ZXMgPyBjcnlwdG8/LmdldFJhbmRvbVZhbHVlcz8uKGFycmF5KSA6ICgoKSA9PiB7XG5cdFx0Y29uc3QgdmFsdWVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkubGVuZ3RoKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB2YWx1ZXNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xuXHRcdHJldHVybiB2YWx1ZXM7XG5cdH0pKCk7XG59O1xuZnVuY3Rpb24gdmFsdWVDbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxudmFyIGNsYW1wID0gKG1pbiwgdmFsLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsLCBtYXgpKTtcbnZhciB3aXRoQ3R4ID0gKHRhcmdldCwgZ290KSA9PiB7XG5cdGlmICh0eXBlb2YgZ290ID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGdvdD8uYmluZD8uKHRhcmdldCkgPz8gZ290O1xuXHRyZXR1cm4gZ290O1xufTtcbnZhciBVVUlEdjQgPSAoKSA9PiBjcnlwdG8/LnJhbmRvbVVVSUQgPyBjcnlwdG8/LnJhbmRvbVVVSUQ/LigpIDogXCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLCAoYykgPT4gKCtjIF4gZ2V0UmFuZG9tVmFsdWVzPy4oLyogQF9fUFVSRV9fICovIG5ldyBVaW50OEFycmF5KDEpKT8uWzBdICYgMTUgPj4gK2MgLyA0KS50b1N0cmluZygxNikpO1xudmFyIGNhbWVsVG9LZWJhYiA9IChzdHIpID0+IHtcblx0aWYgKCFzdHIpIHJldHVybiBzdHI7XG5cdHJldHVybiBzdHI/LnJlcGxhY2U/LigvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xufTtcbnZhciBrZWJhYlRvQ2FtZWwgPSAoc3RyKSA9PiB7XG5cdGlmICghc3RyKSByZXR1cm4gc3RyO1xuXHRyZXR1cm4gc3RyPy5yZXBsYWNlPy4oLy0oW2Etel0pL2csIChfLCBjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufTtcbnZhciB0b0Zpbml0ZU51bWJlciA9ICh2YWx1ZSwgZmFsbGJhY2sgPSAwKSA9PiB7XG5cdGNvbnN0IG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG5cdHJldHVybiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKSA/IG51bWJlciA6IGZhbGxiYWNrO1xufTtcbnZhciBjbGFtcERpbWVuc2lvbiA9ICh2YWx1ZSwgbWF4KSA9PiB7XG5cdGlmICghTnVtYmVyLmlzRmluaXRlKG1heCkgfHwgbWF4IDw9IDApIHJldHVybiAwO1xuXHRpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiAwO1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIDApLCBtYXgpO1xufTtcbnZhciByb3VuZE5lYXJlc3QgPSAobnVtYmVyLCBOID0gMSkgPT4gTWF0aC5yb3VuZChudW1iZXIgKiBOKSAvIE47XG52YXIgZmxvb3JOZWFyZXN0ID0gKG51bWJlciwgTiA9IDEpID0+IE1hdGguZmxvb3IobnVtYmVyICogTikgLyBOO1xudmFyIGNlaWxOZWFyZXN0ID0gKG51bWJlciwgTiA9IDEpID0+IE1hdGguY2VpbChudW1iZXIgKiBOKSAvIE47XG52YXIgaXNWYWx1ZVVuaXQgPSAodmFsKSA9PiB0eXBlb2YgQ1NTU3R5bGVWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWwgaW5zdGFuY2VvZiBDU1NTdHlsZVZhbHVlO1xudmFyIGlzVmFsID0gKHYpID0+IHYgIT0gbnVsbCAmJiAodHlwZW9mIHYgPT0gXCJib29sZWFuXCIgPyB2ICE9PSBmYWxzZSA6IHRydWUpICYmIHR5cGVvZiB2ICE9IFwib2JqZWN0XCIgJiYgdHlwZW9mIHYgIT0gXCJmdW5jdGlvblwiO1xudmFyIG5vcm1hbGl6ZVByaW1pdGl2ZSA9ICh2YWwpID0+IHtcblx0cmV0dXJuIHR5cGVvZiB2YWwgPT0gXCJib29sZWFuXCIgPyB2YWwgPyBcIlwiIDogbnVsbCA6IHR5cGVvZiB2YWwgPT0gXCJudW1iZXJcIiA/IFN0cmluZyh2YWwpIDogdmFsO1xufTtcbnZhciAkdHJpZ2dlckxvY2sgPSBTeW1ib2wuZm9yKFwiQHRyaWdnZXItbG9ja1wiKTtcbnZhciAkYXZvaWRUcmlnZ2VyID0gKHJlZiwgY2IsICRwcm9wID0gXCJ2YWx1ZVwiKSA9PiB7XG5cdGlmIChoYXNQcm9wZXJ0eShyZWYsICRwcm9wKSkgcmVmWyR0cmlnZ2VyTG9ja10gPSB0cnVlO1xuXHRsZXQgcmVzdWx0O1xuXHR0cnkge1xuXHRcdHJlc3VsdCA9IGNiPy4oKTtcblx0fSBmaW5hbGx5IHtcblx0XHRpZiAoaGFzUHJvcGVydHkocmVmLCAkcHJvcCkpIGRlbGV0ZSByZWZbJHRyaWdnZXJMb2NrXTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbnZhciB0cnlTdHJpbmdBc051bWJlciA9ICh2YWwpID0+IHtcblx0aWYgKHR5cGVvZiB2YWwgIT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG1hdGNoZXMgPSBbLi4udmFsPy5tYXRjaEFsbD8uKC9eXFxkKyhcXC5cXGQrKT8kL2cpXTtcblx0aWYgKG1hdGNoZXM/Lmxlbmd0aCAhPSAxKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgdHJpZWRUb1BhcnNlID0gcGFyc2VGbG9hdChtYXRjaGVzWzBdWzBdKTtcblx0aWYgKCFOdW1iZXIuaXNOYU4odHJpZWRUb1BhcnNlKSAmJiBOdW1iZXIuaXNGaW5pdGUodHJpZWRUb1BhcnNlKSkgcmV0dXJuIHRyaWVkVG9QYXJzZTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIElOVEVHRVJfUkVHRVhQID0gL15cXGQrJC9nO1xudmFyIHRyeVN0cmluZ0FzSW50ZWdlciA9ICh2YWwpID0+IHtcblx0aWYgKHR5cGVvZiB2YWwgIT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGw7XG5cdHZhbCA9IHZhbD8udHJpbT8uKCk7XG5cdGlmICh2YWwgPT0gXCJcIiB8fCB2YWwgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG1hdGNoZXMgPSBbLi4udmFsPy5tYXRjaEFsbD8uKElOVEVHRVJfUkVHRVhQKV07XG5cdGlmIChtYXRjaGVzPy5sZW5ndGggIT0gMSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHRyaWVkVG9QYXJzZSA9IHBhcnNlSW50KG1hdGNoZXNbMF1bMF0pO1xuXHRpZiAoIU51bWJlci5pc05hTih0cmllZFRvUGFyc2UpICYmIE51bWJlci5pc0ludGVnZXIodHJpZWRUb1BhcnNlKSkgcmV0dXJuIHRyaWVkVG9QYXJzZTtcblx0cmV0dXJuIG51bGw7XG59O1xudmFyIGlzVmFsaWROdW1iZXIgPSAodmFsKSA9PiB7XG5cdHJldHVybiB0eXBlb2YgdmFsID09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2YWwpO1xufTtcbnZhciBjYW5CZUludGVnZXIgPSAodmFsdWUpID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSByZXR1cm4gdHJ5U3RyaW5nQXNJbnRlZ2VyKHZhbHVlKSAhPSBudWxsO1xuXHRlbHNlIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiB2YWx1ZSA+PSAwO1xufTtcbnZhciBpc0FycmF5T3JJdGVyYWJsZSA9IChvYmopID0+IEFycmF5LmlzQXJyYXkob2JqKSB8fCBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9ialtTeW1ib2wuaXRlcmF0b3JdID09IFwiZnVuY3Rpb25cIjtcbnZhciBoYW5kbGVMaXN0ZW5lcnMgPSAocm9vdCwgZm4sIGhhbmRsZXJzKSA9PiB7XG5cdHJvb3QgPSByb290IGluc3RhbmNlb2YgV2Vha1JlZiA/IHJvb3QuZGVyZWYoKSA6IHJvb3Q7XG5cdGNvbnN0IHVzdWJzID0gWy4uLk9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKV0ubWFwPy4oKFtuYW1lLCBjYl0pID0+IHJvb3Q/Lltmbl0/LmNhbGw/Lihyb290LCBuYW1lLCBjYikpO1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdHVzdWJzPy5mb3JFYWNoPy4oKHVuc3ViKSA9PiB1bnN1Yj8uKCkpO1xuXHR9O1xufTtcbnZhciBpc1JlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIHJlZiBpbnN0YW5jZW9mIFdlYWtSZWYgfHwgdHlwZW9mIHJlZj8uZGVyZWYgPT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciB1bnJlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIGlzUmVmKHJlZikgPyBkZXJlZihyZWYpIDogcmVmO1xufTtcbnZhciB0b1JlZiA9IChyZWYpID0+IHtcblx0cmV0dXJuIHJlZiAhPSBudWxsID8gaXNSZWYocmVmKSA/IHJlZiA6IHR5cGVvZiByZWYgPT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWYgPT0gXCJvYmplY3RcIiA/IG5ldyBXZWFrUmVmKHJlZikgOiByZWYgOiByZWY7XG59O1xudmFyIGlzVmFsdWVSZWYgPSAoZXhpc3RzKSA9PiB7XG5cdHJldHVybiAodHlwZW9mIGV4aXN0cyA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBleGlzdHMgPT0gXCJmdW5jdGlvblwiKSAmJiAoZXhpc3RzPy52YWx1ZSAhPSBudWxsIHx8IGV4aXN0cyAhPSBudWxsICYmIFwidmFsdWVcIiBpbiBleGlzdHMpO1xufTtcbnZhciBpc09iamVjdCA9IChleGlzdHMpID0+IHtcblx0cmV0dXJuIGV4aXN0cyAhPSBudWxsICYmICh0eXBlb2YgZXhpc3RzID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIpO1xufTtcbnZhciBnZXRWYWx1ZSA9ICh2YWwpID0+IHtcblx0cmV0dXJuIGhhc1ZhbHVlKHZhbCkgPyB2YWw/LnZhbHVlIDogdmFsO1xufTtcbnZhciBwb3RlbnRpYWxseUFzeW5jID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRlbHNlIHJldHVybiBjYj8uKHByb21pc2UpO1xufTtcbnZhciBwb3RlbnRpYWxseUFzeW5jTWFwID0gKHByb21pc2UsIGNiKSA9PiB7XG5cdGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgcHJvbWlzZT8udGhlbiA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm9taXNlPy50aGVuPy4oY2IpO1xuXHRlbHNlIHJldHVybiBjYj8uKHByb21pc2UpO1xufTtcbnZhciBtYWtlVHJpZ2dlckxlc3MgPSBmdW5jdGlvbihzZWxmKSB7XG5cdHJldHVybiAoY2IpID0+IHtcblx0XHRzZWxmWyR0cmlnZ2VyTG9ja10gPSB0cnVlO1xuXHRcdGxldCByZXN1bHQ7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IGNiPy4oKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2VsZlskdHJpZ2dlckxvY2tdID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59O1xudmFyIHVud3JhcEFycmF5ID0gKGFycikgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyPy5mbGF0TWFwPy4oKGVsKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZWwpKSByZXR1cm4gdW53cmFwQXJyYXkoZWwpO1xuXHRcdHJldHVybiBlbDtcblx0fSk7XG5cdGVsc2UgcmV0dXJuIGFycjtcbn07XG52YXIgaXNOb3RDb21wbGV4QXJyYXkgPSAoYXJyKSA9PiB7XG5cdHJldHVybiB1bndyYXBBcnJheShhcnIpPy5ldmVyeT8uKGlzQ2FuSnVzdFJldHVybik7XG59O1xudmFyIGlzQ2FuSnVzdFJldHVybiA9IChvYmopID0+IHtcblx0cmV0dXJuIGlzUHJpbWl0aXZlKG9iaikgfHwgdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBTaGFyZWRBcnJheUJ1ZmZlciB8fCBpc1R5cGVkQXJyYXkob2JqKSB8fCBBcnJheS5pc0FycmF5KG9iaikgJiYgaXNOb3RDb21wbGV4QXJyYXkob2JqKTtcbn07XG52YXIgaXNUeXBlZEFycmF5ID0gKHZhbHVlKSA9PiB7XG5cdHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59O1xudmFyIGlzU3ltYm9sID0gKHN5bSkgPT4gdHlwZW9mIHN5bSA9PT0gXCJzeW1ib2xcIiB8fCB0eXBlb2Ygc3ltID09IFwib2JqZWN0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgPT0gXCJbb2JqZWN0IFN5bWJvbF1cIjtcbnZhciBpc1Byb21pc2UgPSAodGFyZ2V0KSA9PiB7XG5cdHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiB0YXJnZXQ/LnRoZW4gPT0gXCJmdW5jdGlvblwiO1xufTtcbnZhciBpc0NhblRyYW5zZmVyID0gKG9iaikgPT4ge1xuXHRyZXR1cm4gaXNQcmltaXRpdmUob2JqKSB8fCB0eXBlb2YgQXJyYXlCdWZmZXIgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IHR5cGVvZiBNZXNzYWdlUG9ydCA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgTWVzc2FnZVBvcnQgfHwgdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbSB8fCB0eXBlb2YgV3JpdGFibGVTdHJlYW0gPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFdyaXRhYmxlU3RyZWFtIHx8IHR5cGVvZiBUcmFuc2Zvcm1TdHJlYW0gPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFRyYW5zZm9ybVN0cmVhbSB8fCB0eXBlb2YgSW1hZ2VCaXRtYXAgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEltYWdlQml0bWFwIHx8IHR5cGVvZiBWaWRlb0ZyYW1lID09IFwiZnVuY3Rpb25cIiAmJiBvYmogaW5zdGFuY2VvZiBWaWRlb0ZyYW1lIHx8IHR5cGVvZiBPZmZzY3JlZW5DYW52YXMgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcyB8fCB0eXBlb2YgUlRDRGF0YUNoYW5uZWwgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIFJUQ0RhdGFDaGFubmVsIHx8IHR5cGVvZiBBdWRpb0RhdGEgPT0gXCJmdW5jdGlvblwiICYmIG9iaiBpbnN0YW5jZW9mIEF1ZGlvRGF0YSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0U2VuZFN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0U2VuZFN0cmVhbSB8fCB0eXBlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbSA9PSBcImZ1bmN0aW9uXCIgJiYgb2JqIGluc3RhbmNlb2YgV2ViVHJhbnNwb3J0UmVjZWl2ZVN0cmVhbTtcbn07XG52YXIgZGVmYXVsdEJ5VHlwZSA9IChhKSA9PiB7XG5cdHN3aXRjaCAodHlwZW9mIGEpIHtcblx0XHRjYXNlIFwibnVtYmVyXCI6IHJldHVybiAwO1xuXHRcdGNhc2UgXCJzdHJpbmdcIjogcmV0dXJuIFwiXCI7XG5cdFx0Y2FzZSBcImJvb2xlYW5cIjogcmV0dXJuIGZhbHNlO1xuXHRcdGNhc2UgXCJvYmplY3RcIjogcmV0dXJuIG51bGw7XG5cdFx0Y2FzZSBcImZ1bmN0aW9uXCI6IHJldHVybiBudWxsO1xuXHRcdGNhc2UgXCJzeW1ib2xcIjogcmV0dXJuIG51bGw7XG5cdFx0Y2FzZSBcImJpZ2ludFwiOiByZXR1cm4gMG47XG5cdH1cbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9SZXNvbHZlZC50c1xudmFyICRwcm9taXNlID0gU3ltYm9sLmZvcihcIkBwcm9taXNlXCIpO1xudmFyIFNLSVBfS0VZUyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcblx0U3ltYm9sLmZvcihcIkBleHRyYWN0XCIpLFxuXHRTeW1ib2wuZm9yKFwiQG9yaWdpblwiKSxcblx0U3ltYm9sLmZvcihcIkByZWdpc3RyeVwiKSxcblx0U3ltYm9sLmZvcihcIkB2YWx1ZVwiKSxcblx0U3ltYm9sLmZvcihcIkBwcm9taXNlXCIpLFxuXHRTeW1ib2wuZm9yKFwiQGJlaGF2aW9yXCIpLFxuXHRTeW1ib2wuZm9yKFwiQHRyaWdnZXJcIiksXG5cdFN5bWJvbC5mb3IoXCJAc3Vic2NyaWJlXCIpLFxuXHRTeW1ib2wuZm9yKFwiQHJlYWxQcm9wXCIpLFxuXHRTeW1ib2wuZm9yKFwiQHRyaWdnZXItbG9ja1wiKSxcblx0U3ltYm9sLmZvcihcIkB0cmlnZ2VyLWxlc3NcIiksXG5cdFN5bWJvbC5mb3IoXCJAdHJpZ2dlci1jb250cm9sXCIpLFxuXHRTeW1ib2wuZm9yKFwiQGlzTm90RXF1YWxcIiksXG5cdFN5bWJvbC5mb3IoXCJAZml4XCIpLFxuXHRTeW1ib2wuZm9yKFwiQHRhcmdldFwiKSxcblx0U3ltYm9sLmZvcihcIkByZXNvbHZlZFwiKVxuXSk7XG52YXIgaXNUaGVuYWJsZSQyID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIHZhbHVlPy50aGVuID09IFwiZnVuY3Rpb25cIjtcbnZhciBzZXR0bGVPbmUgPSAodmFsdWUpID0+IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbigodikgPT4gKHtcblx0c3RhdHVzOiBcImZ1bGZpbGxlZFwiLFxuXHR2YWx1ZTogdlxufSksIChyZWFzb24pID0+ICh7XG5cdHN0YXR1czogXCJyZWplY3RlZFwiLFxuXHRyZWFzb25cbn0pKTtcbnZhciBvd25FbnVtZXJhYmxlS2V5cyA9IChvYmopID0+IFJlZmxlY3Qub3duS2V5cyhvYmopLmZpbHRlcigoa2V5KSA9PiB7XG5cdGlmIChTS0lQX0tFWVMuaGFzKGtleSkpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXHRyZXR1cm4gZGVzYyAhPT0gdm9pZCAwICYmIGRlc2MuZW51bWVyYWJsZTtcbn0pO1xudmFyIGhhc1BlbmRpbmdQcm9taXNlcyA9ICh2YWx1ZSwgc2VlbikgPT4ge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCBpc1ByaW1pdGl2ZSh2YWx1ZSkpIHJldHVybiBmYWxzZTtcblx0aWYgKGlzVGhlbmFibGUkMih2YWx1ZSkgfHwgaXNUaGVuYWJsZSQyKHZhbHVlPy5bJHByb21pc2VdKSkgcmV0dXJuIHRydWU7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IHNlZW5TZXQgPSBzZWVuID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuXHRpZiAoc2VlblNldC5oYXModmFsdWUpKSByZXR1cm4gZmFsc2U7XG5cdHNlZW5TZXQuYWRkKHZhbHVlKTtcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUuc29tZSgoaXRlbSkgPT4gaGFzUGVuZGluZ1Byb21pc2VzKGl0ZW0sIHNlZW5TZXQpKTtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSByZXR1cm4gWy4uLnZhbHVlLnZhbHVlcygpXS5zb21lKChpdGVtKSA9PiBoYXNQZW5kaW5nUHJvbWlzZXMoaXRlbSwgc2VlblNldCkpO1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHJldHVybiBbLi4udmFsdWUudmFsdWVzKCldLnNvbWUoKGl0ZW0pID0+IGhhc1BlbmRpbmdQcm9taXNlcyhpdGVtLCBzZWVuU2V0KSk7XG5cdHJldHVybiBvd25FbnVtZXJhYmxlS2V5cyh2YWx1ZSkuc29tZSgoa2V5KSA9PiBoYXNQZW5kaW5nUHJvbWlzZXModmFsdWVba2V5XSwgc2VlblNldCkpO1xufTtcbmZ1bmN0aW9uIHJlc29sdmVkRGVlcCh2YWx1ZSwgbW9kZSwgc2Vlbikge1xuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCBpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09IFwic3ltYm9sXCIpIHJldHVybiB2YWx1ZTtcblx0aWYgKGlzVGhlbmFibGUkMih2YWx1ZSkpIHJldHVybiB2YWx1ZTtcblx0Y29uc3Qgc2xvdCA9IHZhbHVlPy5bJHByb21pc2VdO1xuXHRpZiAoaXNUaGVuYWJsZSQyKHNsb3QpKSByZXR1cm4gc2xvdDtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybiB2YWx1ZTtcblx0aWYgKHNlZW4uaGFzKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuXHRzZWVuLmFkZCh2YWx1ZSk7XG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdmFsdWUubWFwKChpdGVtKSA9PiByZXNvbHZlZERlZXAoaXRlbSwgbW9kZSwgc2VlbikpO1xuXHRcdHJldHVybiBtb2RlID09IFwic2V0dGxlZFwiID8gUHJvbWlzZS5hbGxTZXR0bGVkKGl0ZW1zKSA6IFByb21pc2UuYWxsKGl0ZW1zKTtcblx0fVxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRjb25zdCBpdGVtcyA9IFsuLi52YWx1ZS52YWx1ZXMoKV0ubWFwKChpdGVtKSA9PiByZXNvbHZlZERlZXAoaXRlbSwgbW9kZSwgc2VlbikpO1xuXHRcdHJldHVybiBtb2RlID09IFwic2V0dGxlZFwiID8gUHJvbWlzZS5hbGxTZXR0bGVkKGl0ZW1zKSA6IFByb21pc2UuYWxsKGl0ZW1zKTtcblx0fVxuXHRjb25zdCByZWNvcmQgPSB7fTtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSBmb3IgKGNvbnN0IFtrZXksIGl0ZW1dIG9mIHZhbHVlLmVudHJpZXMoKSkgcmVjb3JkW2tleV0gPSByZXNvbHZlZERlZXAoaXRlbSwgbW9kZSwgc2Vlbik7XG5cdGVsc2UgZm9yIChjb25zdCBrZXkgb2Ygb3duRW51bWVyYWJsZUtleXModmFsdWUpKSByZWNvcmRba2V5XSA9IHJlc29sdmVkRGVlcCh2YWx1ZVtrZXldLCBtb2RlLCBzZWVuKTtcblx0cmV0dXJuIG1vZGUgPT0gXCJzZXR0bGVkXCIgPyBQcm9taXNlLmFsbFNldHRsZWRLZXllZChyZWNvcmQpIDogUHJvbWlzZS5hbGxLZXllZChyZWNvcmQpO1xufVxuZnVuY3Rpb24gcmVzb2x2ZWQodmFsdWUsIG1vZGUgPSBcImFsbFwiKSB7XG5cdGlmIChpc1RoZW5hYmxlJDIodmFsdWUpKSByZXR1cm4gbW9kZSA9PSBcInNldHRsZWRcIiA/IHNldHRsZU9uZSh2YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuXHRjb25zdCBzbG90ID0gdmFsdWU/LlskcHJvbWlzZV07XG5cdGlmIChpc1RoZW5hYmxlJDIoc2xvdCkpIHJldHVybiBtb2RlID09IFwic2V0dGxlZFwiID8gc2V0dGxlT25lKHNsb3QpIDogUHJvbWlzZS5yZXNvbHZlKHNsb3QpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc29sdmVkRGVlcCh2YWx1ZSwgbW9kZSwgLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCkpKTtcbn1cbnJlc29sdmVkLmFsbCA9ICh2YWx1ZSkgPT4gcmVzb2x2ZWQodmFsdWUsIFwiYWxsXCIpO1xucmVzb2x2ZWQuYWxsU2V0dGxlZCA9ICh2YWx1ZSkgPT4gcmVzb2x2ZWQodmFsdWUsIFwic2V0dGxlZFwiKTtcbnJlc29sdmVkLmFsbEtleWVkID0gKHZhbHVlKSA9PiBQcm9taXNlLmFsbEtleWVkKHZhbHVlKTtcbnJlc29sdmVkLmFsbFNldHRsZWRLZXllZCA9ICh2YWx1ZSkgPT4gUHJvbWlzZS5hbGxTZXR0bGVkS2V5ZWQodmFsdWUpO1xucmVzb2x2ZWQudHJ5ID0gKGNhbGxiYWNrT3JWYWx1ZSwgLi4uYXJncykgPT4gUHJvbWlzZS50cnkoY2FsbGJhY2tPclZhbHVlLCAuLi5hcmdzKS50aGVuKCh2YWx1ZSkgPT4gcmVzb2x2ZWQodmFsdWUsIFwiYWxsXCIpKTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL1Byb21pc2VVdGlscy50c1xudmFyIGlzVGhlbmFibGUkMSA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiB2YWx1ZT8udGhlbiA9PSBcImZ1bmN0aW9uXCI7XG5mdW5jdGlvbiBhbGxLZXllZChwcm9taXNlcykge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGxLZXllZChwcm9taXNlcyk7XG59XG5mdW5jdGlvbiBhbGxTZXR0bGVkS2V5ZWQocHJvbWlzZXMpIHtcblx0cmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZEtleWVkKHByb21pc2VzKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURlZmVycmVkKCkge1xuXHRsZXQgcmVzb2x2ZTtcblx0bGV0IHJlamVjdDtcblx0bGV0IGlzUmVzb2x2ZWQgPSBmYWxzZTtcblx0bGV0IGlzUmVqZWN0ZWQgPSBmYWxzZTtcblx0cmV0dXJuIHtcblx0XHRwcm9taXNlOiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcblx0XHRcdHJlc29sdmUgPSAodmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKCFpc1Jlc29sdmVkICYmICFpc1JlamVjdGVkKSB7XG5cdFx0XHRcdFx0aXNSZXNvbHZlZCA9IHRydWU7XG5cdFx0XHRcdFx0cmVzKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJlamVjdCA9IChlcnJvcikgPT4ge1xuXHRcdFx0XHRpZiAoIWlzUmVzb2x2ZWQgJiYgIWlzUmVqZWN0ZWQpIHtcblx0XHRcdFx0XHRpc1JlamVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRyZWooZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH0pLFxuXHRcdHJlc29sdmUsXG5cdFx0cmVqZWN0LFxuXHRcdGdldCBpc1Jlc29sdmVkKCkge1xuXHRcdFx0cmV0dXJuIGlzUmVzb2x2ZWQ7XG5cdFx0fSxcblx0XHRnZXQgaXNSZWplY3RlZCgpIHtcblx0XHRcdHJldHVybiBpc1JlamVjdGVkO1xuXHRcdH1cblx0fTtcbn1cbnZhciBBc3luY1F1ZXVlID0gY2xhc3Mge1xuXHRxdWV1ZSA9IFtdO1xuXHRwcm9jZXNzaW5nID0gZmFsc2U7XG5cdGFzeW5jIGFkZChvcGVyYXRpb24pIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5xdWV1ZS5wdXNoKGFzeW5jICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNvbHZlKGF3YWl0IG9wZXJhdGlvbigpKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucHJvY2VzcygpO1xuXHRcdH0pO1xuXHR9XG5cdGFzeW5jIHByb2Nlc3MoKSB7XG5cdFx0aWYgKHRoaXMucHJvY2Vzc2luZyB8fCB0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXHRcdHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cdFx0d2hpbGUgKHRoaXMucXVldWUubGVuZ3RoID4gMCkgYXdhaXQgdGhpcy5xdWV1ZS5zaGlmdCgpKCk7XG5cdFx0dGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cdH1cblx0Z2V0IGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5sZW5ndGg7XG5cdH1cblx0Z2V0IGlzUHJvY2Vzc2luZygpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9jZXNzaW5nO1xuXHR9XG59O1xuZnVuY3Rpb24gd2l0aFRpbWVvdXQocHJvbWlzZSwgdGltZW91dE1zLCB0aW1lb3V0TWVzc2FnZSA9IFwiT3BlcmF0aW9uIHRpbWVkIG91dFwiKSB7XG5cdGNvbnN0IHBlbmRpbmcgPSBpc1RoZW5hYmxlJDEocHJvbWlzZSkgPyBwcm9taXNlIDogcmVzb2x2ZWQocHJvbWlzZSk7XG5cdGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHJlamVjdCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBFcnJvcih0aW1lb3V0TWVzc2FnZSkpLCB0aW1lb3V0TXMpO1xuXHR9KTtcblx0cmV0dXJuIFByb21pc2UucmFjZShbcGVuZGluZywgdGltZW91dFByb21pc2VdKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHJldHJ5KG9wZXJhdGlvbiwgbWF4UmV0cmllcyA9IDMsIGluaXRpYWxEZWxheSA9IDFlMywgYmFja29mZk11bHRpcGxpZXIgPSAyKSB7XG5cdGxldCBsYXN0RXJyb3I7XG5cdGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDw9IG1heFJldHJpZXM7IGF0dGVtcHQrKykgdHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgb3BlcmF0aW9uKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bGFzdEVycm9yID0gZXJyb3I7XG5cdFx0aWYgKGF0dGVtcHQgPCBtYXhSZXRyaWVzKSB7XG5cdFx0XHRjb25zdCBkZWxheSA9IGluaXRpYWxEZWxheSAqIE1hdGgucG93KGJhY2tvZmZNdWx0aXBsaWVyLCBhdHRlbXB0KTtcblx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cdFx0fVxuXHR9XG5cdHRocm93IGxhc3RFcnJvcjtcbn1cbmFzeW5jIGZ1bmN0aW9uIGNvbmN1cnJlbnRMaW1pdChvcGVyYXRpb25zLCBsaW1pdCkge1xuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGNvbnN0IGV4ZWN1dGluZyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG9wZXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2ldO1xuXHRcdGNvbnN0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9wZXJhdGlvbigpO1xuXHRcdFx0XHRyZXN1bHRzW2ldID0gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmVzdWx0c1tpXSA9IHZvaWQgMDtcblx0XHRleGVjdXRpbmcucHVzaChwcm9taXNlKTtcblx0XHRpZiAoZXhlY3V0aW5nLmxlbmd0aCA+PSBsaW1pdCkge1xuXHRcdFx0YXdhaXQgUHJvbWlzZS5yYWNlKGV4ZWN1dGluZyk7XG5cdFx0XHRleGVjdXRpbmcuc3BsaWNlKGV4ZWN1dGluZy5maW5kSW5kZXgoKHApID0+IHAgPT09IHByb21pc2UpLCAxKTtcblx0XHR9XG5cdH1cblx0YXdhaXQgUHJvbWlzZS5hbGwoZXhlY3V0aW5nKTtcblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9DaGFubmVsVXRpbHMudHNcbnZhciBDaGFubmVsUmVnaXN0cnkgPSBjbGFzcyB7XG5cdGNoYW5uZWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0bGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0cmVnaXN0ZXIobmFtZSwgY2hhbm5lbCkge1xuXHRcdHRoaXMuY2hhbm5lbHMuc2V0KG5hbWUsIGNoYW5uZWwpO1xuXHRcdGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmdldChuYW1lKTtcblx0XHRpZiAobGlzdGVuZXJzKSBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykgdHJ5IHtcblx0XHRcdGxpc3RlbmVyKGNoYW5uZWwpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBbQ2hhbm5lbFJlZ2lzdHJ5XSBMaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFubmVsO1xuXHR9XG5cdGdldChuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbm5lbHMuZ2V0KG5hbWUpO1xuXHR9XG5cdGhhcyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbm5lbHMuaGFzKG5hbWUpO1xuXHR9XG5cdHVucmVnaXN0ZXIobmFtZSkge1xuXHRcdGNvbnN0IGV4aXN0ZWQgPSB0aGlzLmNoYW5uZWxzLmRlbGV0ZShuYW1lKTtcblx0XHRpZiAoZXhpc3RlZCkge1xuXHRcdFx0Y29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpO1xuXHRcdFx0aWYgKGxpc3RlbmVycykgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpIHRyeSB7XG5cdFx0XHRcdGxpc3RlbmVyKG51bGwpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgW0NoYW5uZWxSZWdpc3RyeV0gVW5yZWdpc3RlciBsaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBleGlzdGVkO1xuXHR9XG5cdG9uQ2hhbm5lbENoYW5nZShuYW1lLCBsaXN0ZW5lcikge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSB0aGlzLmxpc3RlbmVycy5zZXQobmFtZSwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKSk7XG5cdFx0Y29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpO1xuXHRcdGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuXHRcdGlmICh0aGlzLmNoYW5uZWxzLmhhcyhuYW1lKSkgdHJ5IHtcblx0XHRcdGxpc3RlbmVyKHRoaXMuY2hhbm5lbHMuZ2V0KG5hbWUpKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgW0NoYW5uZWxSZWdpc3RyeV0gSW5pdGlhbCBsaXN0ZW5lciBlcnJvciBmb3IgJHtuYW1lfTpgLCBlcnJvcik7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHRcdGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMCkgdGhpcy5saXN0ZW5lcnMuZGVsZXRlKG5hbWUpO1xuXHRcdH07XG5cdH1cblx0Z2V0Q2hhbm5lbE5hbWVzKCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hhbm5lbHMua2V5cygpKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmNoYW5uZWxzLmNsZWFyKCk7XG5cdFx0dGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcblx0fVxufTtcbnZhciBnbG9iYWxDaGFubmVsUmVnaXN0cnkgPSBuZXcgQ2hhbm5lbFJlZ2lzdHJ5KCk7XG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsUHJveHkoY2hhbm5lbCwgbWV0aG9kcykge1xuXHRjb25zdCBwcm94eSA9IHt9O1xuXHRmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSBwcm94eVttZXRob2RdID0gKC4uLmFyZ3MpID0+IHtcblx0XHRyZXR1cm4gY2hhbm5lbC5yZXF1ZXN0KG1ldGhvZCwgYXJncyk7XG5cdH07XG5cdHJldHVybiBwcm94eTtcbn1cbnZhciBDaGFubmVsSGVhbHRoTW9uaXRvciA9IGNsYXNzIHtcblx0aGVhbHRoQ2hlY2tzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0aW50ZXJ2YWxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0aGVhbHRoU3RhdHVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0cmVnaXN0ZXJIZWFsdGhDaGVjayhjaGFubmVsTmFtZSwgaGVhbHRoQ2hlY2ssIGludGVydmFsTXMgPSAzZTQpIHtcblx0XHR0aGlzLmhlYWx0aENoZWNrcy5zZXQoY2hhbm5lbE5hbWUsIGhlYWx0aENoZWNrKTtcblx0XHRjb25zdCBleGlzdGluZ0ludGVydmFsID0gdGhpcy5pbnRlcnZhbHMuZ2V0KGNoYW5uZWxOYW1lKTtcblx0XHRpZiAoZXhpc3RpbmdJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbChleGlzdGluZ0ludGVydmFsKTtcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGlzSGVhbHRoeSA9IGF3YWl0IGhlYWx0aENoZWNrKCk7XG5cdFx0XHRcdHRoaXMuaGVhbHRoU3RhdHVzLnNldChjaGFubmVsTmFtZSwgaXNIZWFsdGh5KTtcblx0XHRcdFx0aWYgKCFpc0hlYWx0aHkpIGNvbnNvbGUud2FybihgW0NoYW5uZWxIZWFsdGhdIENoYW5uZWwgJyR7Y2hhbm5lbE5hbWV9JyBpcyB1bmhlYWx0aHlgKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtDaGFubmVsSGVhbHRoXSBIZWFsdGggY2hlY2sgZmFpbGVkIGZvciAnJHtjaGFubmVsTmFtZX0nOmAsIGVycm9yKTtcblx0XHRcdFx0dGhpcy5oZWFsdGhTdGF0dXMuc2V0KGNoYW5uZWxOYW1lLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSwgaW50ZXJ2YWxNcyk7XG5cdFx0dGhpcy5pbnRlcnZhbHMuc2V0KGNoYW5uZWxOYW1lLCBpbnRlcnZhbCk7XG5cdFx0aGVhbHRoQ2hlY2soKS50aGVuKChpc0hlYWx0aHkpID0+IHtcblx0XHRcdHRoaXMuaGVhbHRoU3RhdHVzLnNldChjaGFubmVsTmFtZSwgaXNIZWFsdGh5KTtcblx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHR0aGlzLmhlYWx0aFN0YXR1cy5zZXQoY2hhbm5lbE5hbWUsIGZhbHNlKTtcblx0XHR9KTtcblx0fVxuXHRpc0hlYWx0aHkoY2hhbm5lbE5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFsdGhTdGF0dXMuZ2V0KGNoYW5uZWxOYW1lKSA/PyBmYWxzZTtcblx0fVxuXHRnZXRBbGxIZWFsdGhTdGF0dXNlcygpIHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IFtuYW1lLCBzdGF0dXNdIG9mIHRoaXMuaGVhbHRoU3RhdHVzKSByZXN1bHRbbmFtZV0gPSBzdGF0dXM7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRzdG9wTW9uaXRvcmluZyhjaGFubmVsTmFtZSkge1xuXHRcdGNvbnN0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbHMuZ2V0KGNoYW5uZWxOYW1lKTtcblx0XHRpZiAoaW50ZXJ2YWwpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5pbnRlcnZhbHMuZGVsZXRlKGNoYW5uZWxOYW1lKTtcblx0XHR9XG5cdFx0dGhpcy5oZWFsdGhDaGVja3MuZGVsZXRlKGNoYW5uZWxOYW1lKTtcblx0XHR0aGlzLmhlYWx0aFN0YXR1cy5kZWxldGUoY2hhbm5lbE5hbWUpO1xuXHR9XG5cdHN0b3BBbGxNb25pdG9yaW5nKCkge1xuXHRcdGZvciAoY29uc3QgaW50ZXJ2YWwgb2YgdGhpcy5pbnRlcnZhbHMudmFsdWVzKCkpIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdHRoaXMuaW50ZXJ2YWxzLmNsZWFyKCk7XG5cdFx0dGhpcy5oZWFsdGhDaGVja3MuY2xlYXIoKTtcblx0XHR0aGlzLmhlYWx0aFN0YXR1cy5jbGVhcigpO1xuXHR9XG59O1xudmFyIGdsb2JhbENoYW5uZWxIZWFsdGhNb25pdG9yID0gbmV3IENoYW5uZWxIZWFsdGhNb25pdG9yKCk7XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9VcHNlcnQudHNcbnZhciBnZXRPckluc2VydCA9IChtYXAsIGtleSwgZGVmYXVsdFZhbHVlID0gKCkgPT4gbnVsbCkgPT4ge1xuXHRyZXR1cm4gbWFwPy5nZXRPckluc2VydENvbXB1dGVkPy4oa2V5LCAoKSA9PiBkZWZhdWx0VmFsdWU/LigpKTtcbn07XG52YXIgZ2V0T3JJbnNlcnRDb21wdXRlZCA9IChtYXAsIGtleSwgY2FsbGJhY2tGdW5jdGlvbiA9ICgpID0+IG51bGwpID0+IHtcblx0cmV0dXJuIG1hcD8uZ2V0T3JJbnNlcnRDb21wdXRlZD8uKGtleSwgY2FsbGJhY2tGdW5jdGlvbik7XG59O1xuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvT2JqZWN0LnRzXG52YXIgaXNJdGVyYWJsZSA9IChvYmopID0+IHR5cGVvZiBvYmo/LltTeW1ib2wuaXRlcmF0b3JdID09IFwiZnVuY3Rpb25cIjtcbnZhciBpc0tleVR5cGUgPSAocHJvcCkgPT4gW1xuXHRcInN5bWJvbFwiLFxuXHRcInN0cmluZ1wiLFxuXHRcIm51bWJlclwiXG5dLmluZGV4T2YodHlwZW9mIHByb3ApID49IDA7XG52YXIgaXNWYWxpZE9iaiA9IChvYmopID0+IHtcblx0cmV0dXJuIG9iaiAhPSBudWxsICYmICh0eXBlb2Ygb2JqID09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2Ygb2JqID09IFwib2JqZWN0XCIpICYmICEob2JqIGluc3RhbmNlb2YgV2Vha1JlZik7XG59O1xudmFyIG1lcmdlQnlLZXkgPSAoaXRlbXMsIGtleSA9IFwiaWRcIikgPT4ge1xuXHRjb25zdCBlbnRyaWVzID0gQXJyYXkuZnJvbShpdGVtcz8udmFsdWVzPy4oKSkubWFwKChJKSA9PiBbST8uW2tleV0sIEldKTtcblx0Y29uc3QgbWFwID0gbmV3IE1hcChlbnRyaWVzKTtcblx0cmV0dXJuIEFycmF5LmZyb20obWFwPy52YWx1ZXM/LigpIHx8IFtdKTtcbn07XG52YXIgcmVtb3ZlRXh0cmEgPSAodGFyZ2V0LCB2YWx1ZSwgbmFtZSA9IG51bGwpID0+IHtcblx0Y29uc3QgZXhpc3RzID0gbmFtZSAhPSBudWxsICYmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHRhcmdldCA9PSBcImZ1bmN0aW9uXCIpID8gdGFyZ2V0Py5bbmFtZV0gPz8gdGFyZ2V0IDogdGFyZ2V0O1xuXHRsZXQgZW50cmllcyA9IFtdO1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTZXQgfHwgdmFsdWUgaW5zdGFuY2VvZiBNYXAgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNJdGVyYWJsZSh2YWx1ZSkpIGVudHJpZXMgPSAoZXhpc3RzIGluc3RhbmNlb2YgU2V0IHx8IGV4aXN0cyBpbnN0YW5jZW9mIFdlYWtTZXQgPyB2YWx1ZT8udmFsdWVzPy4oKSA6IHZhbHVlPy5lbnRyaWVzPy4oKSkgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzSXRlcmFibGUodmFsdWUpID8gdmFsdWUgOiBbXSk7XG5cdGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIGVudHJpZXMgPSBleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCA/IE9iamVjdC52YWx1ZXModmFsdWUpIDogT2JqZWN0LmVudHJpZXModmFsdWUpO1xuXHRsZXQgZXhFbnRyaWVzID0gW107XG5cdGlmIChBcnJheS5pc0FycmF5KGV4aXN0cykpIGV4RW50cmllcyA9IGV4aXN0cy5lbnRyaWVzKCk7XG5cdGVsc2UgaWYgKGV4aXN0cyBpbnN0YW5jZW9mIE1hcCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrTWFwKSBleEVudHJpZXMgPSBleGlzdHM/LmVudHJpZXM/LigpO1xuXHRlbHNlIGlmIChleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCkgZXhFbnRyaWVzID0gZXhpc3RzPy52YWx1ZXM/LigpO1xuXHRlbHNlIGlmICh0eXBlb2YgZXhpc3RzID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIpIGV4RW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGV4aXN0cyk7XG5cdGNvbnN0IGtleXMgPSBuZXcgU2V0KEFycmF5LmZyb20oZW50cmllcykubWFwKChlKSA9PiBlPy5bMF0pKTtcblx0Y29uc3QgZXhlID0gbmV3IFNldChBcnJheS5mcm9tKGV4RW50cmllcykubWFwKChlKSA9PiBlPy5bMF0pKTtcblx0Y29uc3QgZXhjbHVkZSA9IGtleXM/LmRpZmZlcmVuY2U/LihleGUpO1xuXHRpZiAoQXJyYXkuaXNBcnJheShleGlzdHMpKSB7XG5cdFx0Y29uc3QgbncgPSBleGlzdHMuZmlsdGVyKChfLCBJKSA9PiAhZXhjbHVkZS5oYXMoSSkpO1xuXHRcdGV4aXN0cy5zcGxpY2UoMCwgZXhpc3RzLmxlbmd0aCk7XG5cdFx0ZXhpc3RzLnB1c2goLi4ubncpO1xuXHR9IGVsc2UgaWYgKGV4aXN0cyBpbnN0YW5jZW9mIE1hcCB8fCBleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha01hcCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrU2V0KSBmb3IgKGNvbnN0IGsgb2YgZXhjbHVkZSkgZXhpc3RzLmRlbGV0ZShrKTtcblx0ZWxzZSBpZiAodHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcIm9iamVjdFwiKSBmb3IgKGNvbnN0IGsgb2YgZXhjbHVkZSkgZGVsZXRlIGV4aXN0c1trXTtcblx0cmV0dXJuIGV4aXN0cztcbn07XG52YXIgb2JqZWN0QXNzaWduID0gKHRhcmdldCwgdmFsdWUsIG5hbWUgPSBudWxsLCByZW1vdmVOb3RFeGlzdHMgPSB0cnVlLCBtZXJnZUtleSA9IFwiaWRcIikgPT4ge1xuXHRjb25zdCBleGlzdHMgPSBuYW1lICE9IG51bGwgJiYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ID09IFwiZnVuY3Rpb25cIikgPyB0YXJnZXQ/LltuYW1lXSA/PyB0YXJnZXQgOiB0YXJnZXQ7XG5cdGxldCBlbnRyaWVzID0gbnVsbDtcblx0aWYgKHJlbW92ZU5vdEV4aXN0cykgcmVtb3ZlRXh0cmEoZXhpc3RzLCB2YWx1ZSk7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFNldCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE1hcCB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc0l0ZXJhYmxlKHZhbHVlKSkgZW50cmllcyA9IChleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCA/IHZhbHVlPy52YWx1ZXM/LigpIDogdmFsdWU/LmVudHJpZXM/LigpKSB8fCAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNJdGVyYWJsZSh2YWx1ZSkgPyB2YWx1ZSA6IFtdKTtcblx0ZWxzZSBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikgZW50cmllcyA9IGV4aXN0cyBpbnN0YW5jZW9mIFNldCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrU2V0ID8gT2JqZWN0LnZhbHVlcyh2YWx1ZSkgOiBPYmplY3QuZW50cmllcyh2YWx1ZSk7XG5cdGlmIChleGlzdHMgJiYgZW50cmllcyAmJiAodHlwZW9mIGVudHJpZXMgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZW50cmllcyA9PSBcImZ1bmN0aW9uXCIpKSB7XG5cdFx0aWYgKGV4aXN0cyBpbnN0YW5jZW9mIE1hcCB8fCBleGlzdHMgaW5zdGFuY2VvZiBXZWFrTWFwKSB7XG5cdFx0XHRmb3IgKGNvbnN0IEUgb2YgZW50cmllcykgZXhpc3RzLnNldCguLi5FKTtcblx0XHRcdHJldHVybiBleGlzdHM7XG5cdFx0fVxuXHRcdGlmIChleGlzdHMgaW5zdGFuY2VvZiBTZXQgfHwgZXhpc3RzIGluc3RhbmNlb2YgV2Vha1NldCkge1xuXHRcdFx0Zm9yIChjb25zdCBFIG9mIGVudHJpZXMpIHtcblx0XHRcdFx0Y29uc3QgbWVyZ2VPYmogPSBFPy5bbWVyZ2VLZXldID8gQXJyYXkuZnJvbShleGlzdHM/LnZhbHVlcz8uKCkgfHwgW10pLmZpbmQoKEkpID0+ICFpc05vdEVxdWFsPy4oST8uW21lcmdlS2V5XSwgRT8uW21lcmdlS2V5XSkpIDogbnVsbDtcblx0XHRcdFx0aWYgKG1lcmdlT2JqICE9IG51bGwpIG9iamVjdEFzc2lnbihtZXJnZU9iaiwgRSwgbnVsbCwgcmVtb3ZlTm90RXhpc3RzLCBtZXJnZUtleSk7XG5cdFx0XHRcdGVsc2UgZXhpc3RzLmFkZChFKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBleGlzdHM7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgZXhpc3RzID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGV4aXN0cyA9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGV4aXN0cykgfHwgaXNJdGVyYWJsZShleGlzdHMpKSB7XG5cdFx0XHRcdGxldCBJID0gMDtcblx0XHRcdFx0Zm9yIChjb25zdCBFIG9mIGVudHJpZXMpIGlmIChJIDwgZXhpc3RzLmxlbmd0aCkgZXhpc3RzW0krK10gPSBFPy5bMV07XG5cdFx0XHRcdGVsc2UgZXhpc3RzPy5wdXNoPy4oRT8uWzFdKTtcblx0XHRcdFx0cmV0dXJuIGV4aXN0cztcblx0XHRcdH1cblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKGV4aXN0cywgT2JqZWN0LmZyb21FbnRyaWVzKFsuLi5lbnRyaWVzIHx8IFtdXS5maWx0ZXIoKEspID0+IHR5cGVvZiBLICE9IFwic3ltYm9sXCIpKSk7XG5cdFx0fVxuXHR9XG5cdGlmIChuYW1lICE9IG51bGwpIHtcblx0XHRSZWZsZWN0LnNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBPYmplY3QuYXNzaWduKHRhcmdldCwgdmFsdWUpO1xuXHRyZXR1cm4gdmFsdWU7XG59O1xudmFyIGJpbmRGeCA9ICh0YXJnZXQsIGZ4KSA9PiB7XG5cdHJldHVybiBib3VuZEN0eC5nZXRPckluc2VydCh0YXJnZXQsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKS5nZXRPckluc2VydChmeCwgZng/LmJpbmQ/Lih0YXJnZXQpKTtcbn07XG52YXIgYmluZEN0eCA9ICh0YXJnZXQsIGZ4KSA9PiAodHlwZW9mIGZ4ID09IFwiZnVuY3Rpb25cIiA/IGJpbmRGeCh0YXJnZXQsIGZ4KSA6IGZ4KSA/PyBmeDtcbnZhciBjYWxsQnlQcm9wID0gKHVud3JhcCwgcHJvcCwgY2IsIGN0eCkgPT4ge1xuXHRpZiAocHJvcCA9PSBTeW1ib2wuaXRlcmF0b3IpIHJldHVybiBjYWxsQnlBbGxQcm9wKHVud3JhcCwgY2IsIGN0eCk7XG5cdGlmIChwcm9wID09IG51bGwgfHwgdHlwZW9mIHByb3AgPT0gXCJzeW1ib2xcIiB8fCB0eXBlb2YgcHJvcCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBwcm9wID09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuXHRjb25zdCBjYWxsSWZOb3ROdWxsID0gKHYsIC4uLmFyZ3MpID0+IHtcblx0XHRpZiAodiAhPSBudWxsKSByZXR1cm4gY2I/Lih2LCAuLi5hcmdzKTtcblx0fTtcblx0aWYgKHVud3JhcCBpbnN0YW5jZW9mIE1hcCB8fCB1bndyYXAgaW5zdGFuY2VvZiBXZWFrTWFwKSB7XG5cdFx0aWYgKHVud3JhcC5oYXMocHJvcCkpIHJldHVybiBjYWxsSWZOb3ROdWxsPy4odW53cmFwLmdldChwcm9wKSwgcHJvcCwgbnVsbCwgXCJAc2V0XCIpO1xuXHR9IGVsc2UgaWYgKHVud3JhcCBpbnN0YW5jZW9mIFNldCB8fCB1bndyYXAgaW5zdGFuY2VvZiBXZWFrU2V0KSB7XG5cdFx0aWYgKHVud3JhcC5oYXMocHJvcCkpIHJldHVybiBjYWxsSWZOb3ROdWxsPy4ocHJvcCwgcHJvcCwgbnVsbCwgXCJAYWRkXCIpO1xuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodW53cmFwKSAmJiB0eXBlb2YgcHJvcCA9PSBcInN0cmluZ1wiICYmIFsuLi5wcm9wPy5tYXRjaEFsbD8uKC9eXFxkKyQvZyldLmxlbmd0aCA9PSAxICYmIE51bWJlci5pc0ludGVnZXIodHlwZW9mIHByb3AgPT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KHByb3ApIDogcHJvcCkpIHtcblx0XHRjb25zdCBpbmRleCA9IHR5cGVvZiBwcm9wID09IFwic3RyaW5nXCIgPyBwYXJzZUludChwcm9wKSA6IHByb3A7XG5cdFx0cmV0dXJuIGNhbGxJZk5vdE51bGw/Lih1bndyYXA/LltpbmRleF0sIGluZGV4LCBudWxsLCBcIkBhZGRcIik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHVud3JhcCA9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHVud3JhcCA9PSBcIm9iamVjdFwiKSByZXR1cm4gY2FsbElmTm90TnVsbD8uKHVud3JhcD8uW3Byb3BdLCBwcm9wLCBudWxsLCBcIkBzZXRcIik7XG59O1xudmFyIG9iamVjdEFzc2lnbk5vdEVxdWFsID0gKGRzdCwgc3JjID0ge30pID0+IHtcblx0T2JqZWN0LmVudHJpZXMoc3JjKT8uZm9yRWFjaD8uKChbaywgdl0pID0+IHtcblx0XHRpZiAoaXNOb3RFcXVhbCh2LCBkc3Rba10pKSBkc3Rba10gPSB2O1xuXHR9KTtcblx0cmV0dXJuIGRzdDtcbn07XG52YXIgY2FsbEJ5QWxsUHJvcCA9ICh1bndyYXAsIGNiLCBjdHgpID0+IHtcblx0aWYgKHVud3JhcCA9PSBudWxsKSByZXR1cm47XG5cdGxldCBrZXlzID0gW107XG5cdGlmICh1bndyYXAgaW5zdGFuY2VvZiBTZXQgfHwgdW53cmFwIGluc3RhbmNlb2YgTWFwIHx8IHR5cGVvZiB1bndyYXA/LmtleXMgPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gWy4uLnVud3JhcD8ua2V5cz8uKCkgfHwga2V5c10uZm9yRWFjaD8uKChwcm9wKSA9PiBjYWxsQnlQcm9wKHVud3JhcCwgcHJvcCwgY2IsIGN0eCkpO1xuXHRpZiAoQXJyYXkuaXNBcnJheSh1bndyYXApIHx8IGlzSXRlcmFibGUodW53cmFwKSkgcmV0dXJuIFsuLi51bndyYXBdLmZvckVhY2g/LigodiwgSSkgPT4gY2FsbEJ5UHJvcCh1bndyYXAsIEksIGNiLCBjdHgpKTtcblx0aWYgKHR5cGVvZiB1bndyYXAgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdW53cmFwID09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFsuLi5PYmplY3Qua2V5cyh1bndyYXApIHx8IGtleXNdLmZvckVhY2g/LigocHJvcCkgPT4gY2FsbEJ5UHJvcCh1bndyYXAsIHByb3AsIGNiLCBjdHgpKTtcbn07XG52YXIgaXNPYmplY3ROb3RFcXVhbCA9IChhLCBiKSA9PiB7XG5cdGlmIChhID09IG51bGwgJiYgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcblx0aWYgKGEgaW5zdGFuY2VvZiBNYXAgfHwgYSBpbnN0YW5jZW9mIFdlYWtNYXApIHJldHVybiBhLnNpemUgIT0gYi5zaXplIHx8IEFycmF5LmZyb20oYS5lbnRyaWVzKCkpLnNvbWUoKFtrLCB2XSkgPT4gIWIuaGFzKGspIHx8ICFpc05vdEVxdWFsKHYsIGIuZ2V0KGspKSk7XG5cdGlmIChhIGluc3RhbmNlb2YgU2V0IHx8IGEgaW5zdGFuY2VvZiBXZWFrU2V0KSByZXR1cm4gYS5zaXplICE9IGIuc2l6ZSB8fCBBcnJheS5mcm9tKGEudmFsdWVzKCkpLnNvbWUoKHYpID0+ICFiLmhhcyh2KSk7XG5cdGlmIChBcnJheS5pc0FycmF5KGEpIHx8IEFycmF5LmlzQXJyYXkoYikpIHJldHVybiBhLmxlbmd0aCAhPSBiLmxlbmd0aCB8fCBhLnNvbWUoKHYsIGkpID0+ICFpc05vdEVxdWFsKHYsIGJbaV0pKTtcblx0aWYgKHR5cGVvZiBhID09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGIgPT0gXCJvYmplY3RcIikgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpICE9IEpTT04uc3RyaW5naWZ5KGIpO1xuXHRyZXR1cm4gYSAhPSBiO1xufTtcbnZhciBpc05vdEVxdWFsID0gKGEsIGIpID0+IHtcblx0aWYgKGEgPT0gbnVsbCAmJiBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblx0aWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiB0cnVlO1xuXHRpZiAodHlwZW9mIGEgPT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGIgPT0gXCJib29sZWFuXCIpIHJldHVybiBhICE9IGI7XG5cdGlmICh0eXBlb2YgYSA9PSBcIm51bWJlclwiICYmIHR5cGVvZiBiID09IFwibnVtYmVyXCIpIHJldHVybiAhKGEgPT0gYiB8fCBNYXRoLmFicyhhIC0gYikgPCAxZS05KTtcblx0aWYgKHR5cGVvZiBhID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGIgPT0gXCJzdHJpbmdcIikgcmV0dXJuIGEgIT0gXCJcIiAmJiBiICE9IFwiXCIgJiYgYSAhPSBiIHx8IGEgIT09IGI7XG5cdGlmICh0eXBlb2YgYSAhPSB0eXBlb2YgYikgcmV0dXJuIGEgIT09IGI7XG5cdHJldHVybiBhICYmIGIgJiYgYSAhPSBiIHx8IGEgIT09IGI7XG59O1xudmFyIGJvdW5kQ3R4U3ltYm9sID0gU3ltYm9sLmZvcihcIm9iamVjdC5ib3VuZEN0eFwiKTtcbmdsb2JhbFRoaXNbYm91bmRDdHhTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBib3VuZEN0eCA9IGdsb2JhbFRoaXNbYm91bmRDdHhTeW1ib2xdO1xudmFyIGlzQXJyYXlJbnZhbGlkS2V5ID0gKGtleSwgc3JjKSA9PiB7XG5cdGNvbnN0IGludmFsaWRGb3JBcnJheSA9IGtleSA9PSBudWxsIHx8IGtleSA8IDAgfHwgdHlwZW9mIGtleSAhPSBcIm51bWJlclwiIHx8IGtleSA9PSBTeW1ib2wuaXRlcmF0b3IgfHwgKHNyYyAhPSBudWxsID8ga2V5ID49IChzcmM/Lmxlbmd0aCB8fCAwKSA6IGZhbHNlKTtcblx0cmV0dXJuIHNyYyAhPSBudWxsID8gQXJyYXkuaXNBcnJheShzcmMpICYmIGludmFsaWRGb3JBcnJheSA6IGZhbHNlO1xufTtcbnZhciBpblByb3h5ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgY29udGV4dGlmeSA9IChwYywgbmFtZSkgPT4ge1xuXHRyZXR1cm4gdHlwZW9mIHBjPy5bbmFtZV0gPT0gXCJmdW5jdGlvblwiID8gcGM/LltuYW1lXT8uYmluZD8uKHBjKSA6IHBjPy5bbmFtZV07XG59O1xudmFyIGRlZXBPcGVyYXRlQW5kQ2xvbmUgPSAob2JqLCBvcGVyYXRpb24sICRwcmV2KSA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcblx0XHRpZiAob2JqLmV2ZXJ5KGlzQ2FuSnVzdFJldHVybikpIHJldHVybiBvYmoubWFwKG9wZXJhdGlvbik7XG5cdFx0cmV0dXJuIG9iai5tYXAoKHZhbHVlLCBpbmRleCkgPT4gZGVlcE9wZXJhdGVBbmRDbG9uZSh2YWx1ZSwgb3BlcmF0aW9uLCBbb2JqLCBpbmRleF0pKTtcblx0fVxuXHRpZiAob2JqIGluc3RhbmNlb2YgTWFwKSB7XG5cdFx0Y29uc3QgZW50cmllcyA9IEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSk7XG5cdFx0aWYgKGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlKS5ldmVyeShpc0Nhbkp1c3RSZXR1cm4pKSByZXR1cm4gbmV3IE1hcChlbnRyaWVzLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBvcGVyYXRpb24odmFsdWUsIGtleSwgb2JqKV0pKTtcblx0XHRyZXR1cm4gbmV3IE1hcChlbnRyaWVzLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBkZWVwT3BlcmF0ZUFuZENsb25lKHZhbHVlLCBvcGVyYXRpb24sIFtvYmosIGtleV0pXSkpO1xuXHR9XG5cdGlmIChvYmogaW5zdGFuY2VvZiBTZXQpIHtcblx0XHRjb25zdCBlbnRyaWVzID0gQXJyYXkuZnJvbShvYmouZW50cmllcygpKTtcblx0XHRjb25zdCB2YWx1ZXMgPSBlbnRyaWVzLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB2YWx1ZSk7XG5cdFx0aWYgKGVudHJpZXMuZXZlcnkoaXNDYW5KdXN0UmV0dXJuKSkgcmV0dXJuIG5ldyBTZXQodmFsdWVzLm1hcChvcGVyYXRpb24pKTtcblx0XHRyZXR1cm4gbmV3IFNldCh2YWx1ZXMubWFwKCh2YWx1ZSkgPT4gZGVlcE9wZXJhdGVBbmRDbG9uZSh2YWx1ZSwgb3BlcmF0aW9uLCBbb2JqLCB2YWx1ZV0pKSk7XG5cdH1cblx0aWYgKHR5cGVvZiBvYmogPT0gXCJvYmplY3RcIiAmJiBvYmo/LmNvbnN0cnVjdG9yID09IE9iamVjdCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0Y29uc3QgZW50cmllcyA9IEFycmF5LmZyb20oT2JqZWN0LmVudHJpZXMob2JqKSk7XG5cdFx0aWYgKGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlKS5ldmVyeShpc0Nhbkp1c3RSZXR1cm4pKSByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIG9wZXJhdGlvbih2YWx1ZSwga2V5LCBvYmopXSkpO1xuXHRcdHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoZW50cmllcy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgZGVlcE9wZXJhdGVBbmRDbG9uZSh2YWx1ZSwgb3BlcmF0aW9uLCBbb2JqLCBrZXldKV0pKTtcblx0fVxuXHRyZXR1cm4gb3BlcmF0aW9uKG9iaiwgJHByZXY/LlsxXSA/PyBcIlwiLCAkcHJldj8uWzBdID8/IG51bGwpO1xufTtcbnZhciBiaW5kRXZlbnQgPSAob24sIGtleSwgdmFsdWUpID0+IHtcblx0aWYgKG9uPy5ba2V5XSAhPSBudWxsKSB7XG5cdFx0Y29uc3QgZXhpc3RzID0gb25ba2V5XTtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGV4aXN0cy5hZGQoLi4udmFsdWUpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIGV4aXN0cy5hZGQodmFsdWUpO1xuXHRcdHJldHVybiBvbjtcblx0fVxuXHRvbltrZXldID8/PSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IG5ldyBTZXQodmFsdWUpIDogdHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIiA/IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFt2YWx1ZV0pIDogdmFsdWU7XG5cdHJldHVybiBvbjtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9Qcm9taXNlZC50c1xudmFyIHJlc29sdmVkU3ltYm9sID0gU3ltYm9sLmZvcihcIkByZXNvbHZlZC1wcm9taXNlXCIpO1xudmFyIGhhbmRsZWRTeW1ib2wgPSBTeW1ib2wuZm9yKFwiQGhhbmRsZWQtcHJvbWlzZVwiKTtcbmdsb2JhbFRoaXNbcmVzb2x2ZWRTeW1ib2xdID8/PSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmdsb2JhbFRoaXNbaGFuZGxlZFN5bWJvbF0gPz89IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHJlc29sdmVkTWFwID0gZ2xvYmFsVGhpc1tyZXNvbHZlZFN5bWJvbF07XG52YXIgaGFuZGxlZE1hcCA9IGdsb2JhbFRoaXNbaGFuZGxlZFN5bWJvbF07XG52YXIgJGV4dHJhY3RLZXkkID0gU3ltYm9sLmZvcihcIkBleHRyYWN0XCIpO1xudmFyIGlzVGhlbmFibGUgPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgdmFsdWU/LnRoZW4gPT0gXCJmdW5jdGlvblwiO1xudmFyIGFjdFdpdGggPSAocHJvbWlzZU9yUGxhaW4sIGNiKSA9PiB7XG5cdGlmIChpc1RoZW5hYmxlKHByb21pc2VPclBsYWluKSkge1xuXHRcdGlmIChyZXNvbHZlZE1hcD8uaGFzPy4ocHJvbWlzZU9yUGxhaW4pKSByZXR1cm4gY2IocmVzb2x2ZWRNYXA/LmdldD8uKHByb21pc2VPclBsYWluKSk7XG5cdFx0cmV0dXJuIFByb21pc2UudHJ5Py4oYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbSA9IGF3YWl0IHByb21pc2VPclBsYWluO1xuXHRcdFx0cmVzb2x2ZWRNYXA/LnNldD8uKHByb21pc2VPclBsYWluLCBpdGVtKTtcblx0XHRcdHJldHVybiBpdGVtO1xuXHRcdH0pPy50aGVuPy4oY2IpO1xuXHR9XG5cdHJldHVybiBjYihwcm9taXNlT3JQbGFpbik7XG59O1xudmFyIFByb21pc2VIYW5kbGVyID0gY2xhc3Mge1xuXHQjcmVzb2x2ZTtcblx0I3JlamVjdDtcblx0Y29uc3RydWN0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dGhpcy4jcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0dGhpcy4jcmVqZWN0ID0gcmVqZWN0O1xuXHR9XG5cdGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcikge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcik7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjcmlwdG9yKSk7XG5cdH1cblx0ZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wKSB7XG5cdFx0aWYgKHVud3JhcCh0YXJnZXQpIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0KSwgKG9iaikgPT4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShvYmosIHByb3ApKTtcblx0fVxuXHRnZXRQcm90b3R5cGVPZih0YXJnZXQpIHtcblx0XHRpZiAodW53cmFwKHRhcmdldCkgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKG9iaikpO1xuXHR9XG5cdHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pIHtcblx0XHRpZiAodW53cmFwKHRhcmdldCkgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKTtcblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0KSwgKG9iaikgPT4gUmVmbGVjdC5zZXRQcm90b3R5cGVPZihvYmosIHByb3RvKSk7XG5cdH1cblx0aXNFeHRlbnNpYmxlKHRhcmdldCkge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmlzRXh0ZW5zaWJsZShvYmopKTtcblx0fVxuXHRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpIHtcblx0XHRpZiAodW53cmFwKHRhcmdldCkgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCksIChvYmopID0+IFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnMob2JqKSk7XG5cdH1cblx0b3duS2V5cyh0YXJnZXQpIHtcblx0XHRjb25zdCB1d3AgPSB1bndyYXAodGFyZ2V0KTtcblx0XHRpZiAodXdwIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIE9iamVjdC5rZXlzKHV3cCk7XG5cdFx0cmV0dXJuIGFjdFdpdGgodXdwLCAob2JqKSA9PiB7XG5cdFx0XHRyZXR1cm4gKHR5cGVvZiBvYmogPT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09IFwiZnVuY3Rpb25cIikgJiYgb2JqICE9IG51bGwgPyBPYmplY3Qua2V5cyhvYmopIDogW107XG5cdFx0fSkgPz8gW107XG5cdH1cblx0Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcCkge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApKTtcblx0fVxuXHRjb25zdHJ1Y3QodGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpIHtcblx0XHRyZXR1cm4gYWN0V2l0aCh1bndyYXAodGFyZ2V0KSwgKGN0KSA9PiBSZWZsZWN0LmNvbnN0cnVjdChjdCwgYXJncywgbmV3VGFyZ2V0KSk7XG5cdH1cblx0aGFzKHRhcmdldCwgcHJvcCkge1xuXHRcdGlmICh1bndyYXAodGFyZ2V0KSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3ApO1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LmhhcyhvYmosIHByb3ApKTtcblx0fVxuXHRnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuXHRcdHRhcmdldCA9IHVud3JhcCh0YXJnZXQpO1xuXHRcdGlmIChwcm9wID09IFwicHJvbWlzZVwiKSByZXR1cm4gdGFyZ2V0O1xuXHRcdGlmIChwcm9wID09IFwicmVzb2x2ZVwiICYmIHRoaXMuI3Jlc29sdmUpIHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy4jcmVzb2x2ZT8uKC4uLmFyZ3MpO1xuXHRcdFx0dGhpcy4jcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH07XG5cdFx0aWYgKHByb3AgPT0gXCJyZWplY3RcIiAmJiB0aGlzLiNyZWplY3QpIHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy4jcmVqZWN0Py4oLi4uYXJncyk7XG5cdFx0XHR0aGlzLiNyZWplY3QgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHRcdGlmIChwcm9wID09IFwidGhlblwiIHx8IHByb3AgPT0gXCJjYXRjaFwiIHx8IHByb3AgPT0gXCJmaW5hbGx5XCIpIHtcblx0XHRcdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gdGFyZ2V0Py5bcHJvcF0/LmJpbmQ/Lih0YXJnZXQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0ICR0bXAgPSBQcm9taXNlLnRyeSgoKSA9PiB0YXJnZXQpO1xuXHRcdFx0XHRyZXR1cm4gJHRtcD8uW3Byb3BdPy5iaW5kPy4oJHRtcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQgPSB2b2lkIDA7XG5cdFx0aWYgKHJlc29sdmVkTWFwPy5oYXM/Lih0YXJnZXQpICYmIChyZXN1bHQgPSByZXNvbHZlZE1hcD8uZ2V0Py4odGFyZ2V0KSk/Lltwcm9wXSAhPSBudWxsKSByZXN1bHQgPSByZXNvbHZlZE1hcD8uZ2V0Py4odGFyZ2V0KT8uW3Byb3BdO1xuXHRcdGVsc2UgcmVzdWx0ID0gUHJvbWlzZWQoYWN0V2l0aCh0YXJnZXQsIGFzeW5jIChvYmopID0+IHtcblx0XHRcdGlmICh1bndyYXAob2JqKSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBSZWZsZWN0LmdldChvYmosIHByb3AsIHJlY2VpdmVyKTtcblx0XHRcdGlmIChpc1ByaW1pdGl2ZShvYmopKSByZXR1cm4gcHJvcCA9PSBTeW1ib2wudG9QcmltaXRpdmUgfHwgcHJvcCA9PSBTeW1ib2wudG9TdHJpbmdUYWcgPyBvYmogOiB2b2lkIDA7XG5cdFx0XHRsZXQgdmFsdWUgPSB2b2lkIDA7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YWx1ZSA9IFJlZmxlY3QuZ2V0KG9iaiwgcHJvcCwgcmVjZWl2ZXIpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHR2YWx1ZSA9IHRhcmdldD8uW3Byb3BdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB2YWx1ZT8uYmluZD8uKG9iaik7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSkpO1xuXHRcdGlmIChwcm9wID09IFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHJldHVybiBTdHJpbmcocmVzdWx0ID8/IFwiXCIpIHx8IFwiXCI7XG5cdFx0XHRyZXR1cm4gcmVzdWx0Py5bU3ltYm9sLnRvU3RyaW5nVGFnXT8uKCkgfHwgU3RyaW5nKHJlc3VsdCA/PyBcIlwiKSB8fCBcIlwiO1xuXHRcdH1cblx0XHRpZiAocHJvcCA9PSBTeW1ib2wudG9QcmltaXRpdmUpIHJldHVybiAoaGludCkgPT4ge1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHJldHVybiB0cnlQYXJzZUJ5SGludChyZXN1bHQsIGhpbnQpO1xuXHRcdH07XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuXHRcdHJldHVybiBhY3RXaXRoKHVud3JhcCh0YXJnZXQpLCAob2JqKSA9PiBSZWZsZWN0LnNldChvYmosIHByb3AsIHZhbHVlKSk7XG5cdH1cblx0YXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdzKSB7XG5cdFx0aWYgKHRoaXMuI3Jlc29sdmUpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuI3Jlc29sdmU/LiguLi5hcmdzKTtcblx0XHRcdHRoaXMuI3Jlc29sdmUgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0cmV0dXJuIGFjdFdpdGgodW53cmFwKHRhcmdldCwgdGhpcy4jcmVzb2x2ZSksIChvYmopID0+IHtcblx0XHRcdGlmICh0eXBlb2Ygb2JqID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRpZiAodW53cmFwKG9iaikgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gUmVmbGVjdC5hcHBseShvYmosIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShvYmosIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59O1xuZnVuY3Rpb24gUHJvbWlzZWQocHJvbWlzZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdGlmIChwcm9taXNlICE9IG51bGwgJiYgdHlwZW9mIHByb21pc2U/LnJlc29sdmVkID09IFwiZnVuY3Rpb25cIiAmJiBwcm9taXNlWyRleHRyYWN0S2V5JF0gIT0gbnVsbCAmJiBoYXNQZW5kaW5nUHJvbWlzZXMocHJvbWlzZSkpIHJldHVybiBQcm9taXNlZChwcm9taXNlLnJlc29sdmVkKCksIHJlc29sdmUsIHJlamVjdCk7XG5cdGlmICghaXNUaGVuYWJsZShwcm9taXNlKSAmJiBoYXNQZW5kaW5nUHJvbWlzZXMocHJvbWlzZSkpIHJldHVybiBQcm9taXNlZChyZXNvbHZlZChwcm9taXNlKSwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0aWYgKCFpc1RoZW5hYmxlKHByb21pc2UpKSByZXR1cm4gcHJvbWlzZTtcblx0aWYgKHJlc29sdmVkTWFwPy5oYXM/Lihwcm9taXNlKSkgcmV0dXJuIHJlc29sdmVkTWFwPy5nZXQ/Lihwcm9taXNlKTtcblx0aWYgKCFoYW5kbGVkTWFwPy5oYXM/Lihwcm9taXNlKSkgcHJvbWlzZT8udGhlbj8uKChpdGVtKSA9PiByZXNvbHZlZE1hcD8uc2V0Py4ocHJvbWlzZSwgaXRlbSkpO1xuXHRyZXR1cm4gaGFuZGxlZE1hcC5nZXRPckluc2VydENvbXB1dGVkKHByb21pc2UsICgpID0+IG5ldyBQcm94eShmaXhGeChwcm9taXNlKSwgbmV3IFByb21pc2VIYW5kbGVyKHJlc29sdmUsIHJlamVjdCkpKTtcbn1cblByb21pc2VkLmFsbEtleWVkID0gZnVuY3Rpb24ocHJvbWlzZXMsIHJlc29sdmUsIHJlamVjdCkge1xuXHRyZXR1cm4gUHJvbWlzZWQoUHJvbWlzZS5hbGxLZXllZChwcm9taXNlcyksIHJlc29sdmUsIHJlamVjdCk7XG59O1xuUHJvbWlzZWQuYWxsU2V0dGxlZEtleWVkID0gZnVuY3Rpb24ocHJvbWlzZXMsIHJlc29sdmUsIHJlamVjdCkge1xuXHRyZXR1cm4gUHJvbWlzZWQoUHJvbWlzZS5hbGxTZXR0bGVkS2V5ZWQocHJvbWlzZXMpLCByZXNvbHZlLCByZWplY3QpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL1dSZWYudHNcbnZhciBleGlzdHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBXZWFrUmVmUHJveHlIYW5kbGVyID0gY2xhc3Mge1xuXHRfZGVyZWYodGFyZ2V0KSB7XG5cdFx0cmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIFdlYWtSZWYgfHwgdHlwZW9mIHRhcmdldD8uZGVyZWYgPT0gXCJmdW5jdGlvblwiID8gdGFyZ2V0Py5kZXJlZj8uKCkgOiB0YXJnZXQ7XG5cdH1cblx0Z2V0KHRnLCBwcm9wLCBfcmVjZWl2ZXIpIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0ZyksIHZhbHVlID0gb2JqPy5bcHJvcF07XG5cdFx0aWYgKChwcm9wID09IFwiZWxlbWVudFwiIHx8IHByb3AgPT0gXCJ2YWx1ZVwiKSAmJiBvYmogJiYgKHZhbHVlID09IG51bGwgfHwgIShwcm9wIGluIG9iaikpKSByZXR1cm4gb2JqO1xuXHRcdGlmIChwcm9wID09IFwiZGVyZWZcIikgcmV0dXJuICgpID0+IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikgcmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fZGVyZWYodGcpPy5bcHJvcF0/LiguLi5hcmdzKTtcblx0XHR9O1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRzZXQodGcsIHByb3AsIHZhbHVlLCBfcmVjZWl2ZXIpIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0Zyk7XG5cdFx0aWYgKG9iaikgcmV0dXJuIFJlZmxlY3Quc2V0KG9iaiwgcHJvcCwgdmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGhhcyh0ZywgcHJvcCkge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiBwcm9wIGluIG9iajtcblx0fVxuXHRvd25LZXlzKHRnKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gW107XG5cdFx0cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhvYmopO1xuXHR9XG5cdGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0ZywgcHJvcCkge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIHZvaWQgMDtcblx0XHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuXHR9XG5cdGRlbGV0ZVByb3BlcnR5KHRnLCBwcm9wKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShvYmosIHByb3ApO1xuXHR9XG5cdGRlZmluZVByb3BlcnR5KHRnLCBwcm9wLCBkZXNjcmlwdG9yKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2NyaXB0b3IpO1xuXHR9XG5cdGdldFByb3RvdHlwZU9mKHRnKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cdH1cblx0c2V0UHJvdG90eXBlT2YodGcsIHByb3RvKSB7XG5cdFx0Y29uc3Qgb2JqID0gdGhpcy5fZGVyZWYodGcpO1xuXHRcdGlmICghb2JqKSByZXR1cm4gdHJ1ZTtcblx0XHRyZXR1cm4gUmVmbGVjdC5zZXRQcm90b3R5cGVPZihvYmosIHByb3RvKTtcblx0fVxuXHRpc0V4dGVuc2libGUodGcpIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLl9kZXJlZih0Zyk7XG5cdFx0aWYgKCFvYmopIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUob2JqKTtcblx0fVxuXHRwcmV2ZW50RXh0ZW5zaW9ucyh0Zykge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMuX2RlcmVmKHRnKTtcblx0XHRpZiAoIW9iaikgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnMob2JqKTtcblx0fVxufTtcbmZ1bmN0aW9uIFdSZWYodGFyZ2V0KSB7XG5cdGlmICghKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdGFyZ2V0ID09IFwiZnVuY3Rpb25cIikgfHwgdHlwZW9mIHRhcmdldCA9PSBcInN5bWJvbFwiKSByZXR1cm4gdGFyZ2V0O1xuXHRjb25zdCBpc1dlYWtSZWYgPSB0YXJnZXQgaW5zdGFuY2VvZiBXZWFrUmVmIHx8IHR5cGVvZiB0YXJnZXQ/LmRlcmVmID09IFwiZnVuY3Rpb25cIjtcblx0dGFyZ2V0ID0gaXNXZWFrUmVmID8gdGFyZ2V0Py5kZXJlZj8uKCkgOiB0YXJnZXQ7XG5cdGlmICh0YXJnZXQgIT0gbnVsbCAmJiBleGlzdHNNYXAuaGFzKHRhcmdldCkpIHJldHVybiBleGlzdHNNYXAuZ2V0KHRhcmdldCk7XG5cdGNvbnN0IGhhbmRsZXIgPSBuZXcgV2Vha1JlZlByb3h5SGFuZGxlcigpO1xuXHRjb25zdCBwbSA9IG5ldyBQcm94eShpc1dlYWtSZWYgPyB0YXJnZXQgOiBuZXcgV2Vha1JlZih0YXJnZXQpLCBoYW5kbGVyKTtcblx0ZXhpc3RzTWFwLnNldCh0YXJnZXQsIHBtKTtcblx0cmV0dXJuIHBtO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvdXRpbHMvQ29udmVydC50c1xudmFyIGN2dF9jc190b19vcyA9IChwb3NfaW5fY3MsIHNpemVfaW5fY3MsIG9yX2kgPSAwKSA9PiB7XG5cdGNvbnN0IHNpemVfaW5fb3MgPSBbLi4uc2l6ZV9pbl9jc107XG5cdGNvbnN0IHBvc19pbl9zd2FwID0gWy4uLnBvc19pbl9jc107XG5cdGlmIChvcl9pICUgMikge1xuXHRcdHBvc19pbl9zd2FwLnJldmVyc2UoKTtcblx0XHRzaXplX2luX29zLnJldmVyc2UoKTtcblx0fVxuXHRyZXR1cm4gWyhvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gcG9zX2luX3N3YXBbMF0gOiBzaXplX2luX29zWzBdIC0gcG9zX2luX3N3YXBbMF0pIHx8IDAsIChvcl9pID09IDAgfHwgb3JfaSA9PSAxID8gcG9zX2luX3N3YXBbMV0gOiBzaXplX2luX29zWzFdIC0gcG9zX2luX3N3YXBbMV0pIHx8IDBdO1xufTtcbnZhciBjdnRfb3NfdG9fY3MgPSAocG9zX2luX29zLCBzaXplX2luX2NzLCBvcl9pID0gMCkgPT4ge1xuXHRjb25zdCBzaXplX2luX29zID0gWy4uLnNpemVfaW5fY3NdO1xuXHRjb25zdCBwb3NfaW5fY3AgPSBbLi4ucG9zX2luX29zXTtcblx0aWYgKG9yX2kgJSAyKSBzaXplX2luX29zLnJldmVyc2UoKTtcblx0Y29uc3QgcG9zX2luX2NzID0gWyhvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gcG9zX2luX2NwWzBdIDogc2l6ZV9pbl9vc1swXSAtIHBvc19pbl9jcFswXSkgfHwgMCwgKG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyBwb3NfaW5fY3BbMV0gOiBzaXplX2luX29zWzFdIC0gcG9zX2luX2NwWzFdKSB8fCAwXTtcblx0aWYgKG9yX2kgJSAyKSBwb3NfaW5fY3MucmV2ZXJzZSgpO1xuXHRyZXR1cm4gcG9zX2luX2NzO1xufTtcbnZhciBjdnRfcmVsX2NzX3RvX29zID0gKHJlbF9pbl9jcywgb3JfaSA9IDApID0+IHtcblx0Y29uc3QgcmVsX2luX3N3YXAgPSBbLi4ucmVsX2luX2NzXTtcblx0aWYgKG9yX2kgJSAyKSByZWxfaW5fc3dhcC5yZXZlcnNlKCk7XG5cdHJldHVybiBbKG9yX2kgPT0gMCB8fCBvcl9pID09IDMgPyByZWxfaW5fc3dhcFswXSA6IC1yZWxfaW5fc3dhcFswXSkgfHwgMCwgKG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyByZWxfaW5fc3dhcFsxXSA6IC1yZWxfaW5fc3dhcFsxXSkgfHwgMF07XG59O1xudmFyIGN2dF9yZWxfb3NfdG9fY3MgPSAocmVsX2luX29zLCBvcl9pID0gMCkgPT4ge1xuXHRjb25zdCByZWxfaW5fY3AgPSBbLi4ucmVsX2luX29zXTtcblx0Y29uc3QgcG9zX2luX2NzID0gWyhvcl9pID09IDAgfHwgb3JfaSA9PSAzID8gcmVsX2luX2NwWzBdIDogLXJlbF9pbl9jcFswXSkgfHwgMCwgKG9yX2kgPT0gMCB8fCBvcl9pID09IDEgPyByZWxfaW5fY3BbMV0gOiAtcmVsX2luX2NwWzFdKSB8fCAwXTtcblx0aWYgKG9yX2kgJSAyKSBwb3NfaW5fY3MucmV2ZXJzZSgpO1xuXHRyZXR1cm4gcG9zX2luX2NzO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL0dyaWRJdGVtVXRpbHMudHNcbnZhciBub3JtYWxpemVHcmlkTGF5b3V0ID0gKGxheW91dCwgZmFsbGJhY2sgPSBbNCwgOF0pID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkobGF5b3V0KSAmJiBsYXlvdXQubGVuZ3RoID49IDIpIHJldHVybiBbTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihOdW1iZXIobGF5b3V0WzBdKSB8fCBmYWxsYmFja1swXSkpLCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKE51bWJlcihsYXlvdXRbMV0pIHx8IGZhbGxiYWNrWzFdKSldO1xuXHRpZiAobGF5b3V0ICYmIHR5cGVvZiBsYXlvdXQgPT09IFwib2JqZWN0XCIpIHtcblx0XHRjb25zdCBvID0gbGF5b3V0O1xuXHRcdHJldHVybiBbTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihOdW1iZXIoby5jb2x1bW5zKSB8fCBmYWxsYmFja1swXSkpLCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKE51bWJlcihvLnJvd3MpIHx8IGZhbGxiYWNrWzFdKSldO1xuXHR9XG5cdHJldHVybiBbZmFsbGJhY2tbMF0sIGZhbGxiYWNrWzFdXTtcbn07XG52YXIgY2xhbXBHcmlkQ2VsbFR1cGxlID0gKGNlbGwsIGxheW91dCkgPT4ge1xuXHRjb25zdCBbY29scywgcm93c10gPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dCk7XG5cdHJldHVybiBbTWF0aC5tYXgoMCwgTWF0aC5taW4oY29scyAtIDEsIE1hdGguZmxvb3IoTnVtYmVyKGNlbGxbMF0pIHx8IDApKSksIE1hdGgubWF4KDAsIE1hdGgubWluKHJvd3MgLSAxLCBNYXRoLmZsb29yKE51bWJlcihjZWxsWzFdKSB8fCAwKSkpXTtcbn07XG52YXIgcmVzb2x2ZUxvY2FsUG9pbnRUb0dyaWRDZWxsID0gKGxvY2FsUHgsIHNpemUsIGxheW91dCwgb3JpZW50LCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IEwgPSBub3JtYWxpemVHcmlkTGF5b3V0KGxheW91dCk7XG5cdGNvbnN0IHcgPSBNYXRoLm1heCgxLCBzaXplWzBdIHx8IDEpO1xuXHRjb25zdCBoID0gTWF0aC5tYXgoMSwgc2l6ZVsxXSB8fCAxKTtcblx0Y29uc3Qgb3NDb29yZCA9IGN2dF9jc190b19vcyhsb2NhbFB4LCBbdywgaF0sIG9yaWVudCk7XG5cdGNvbnN0IG5vcm1hbGl6ZWRBcmdzID0ge1xuXHRcdGl0ZW06IG9wdGlvbnM/LnJlZGlyZWN0Py5pdGVtID8/IHsgaWQ6IFwiXCIgfSxcblx0XHRsaXN0OiBvcHRpb25zPy5yZWRpcmVjdD8ubGlzdCA/PyBbXSxcblx0XHRpdGVtczogb3B0aW9ucz8ucmVkaXJlY3Q/Lml0ZW1zID8/IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCksXG5cdFx0bGF5b3V0OiBMLFxuXHRcdHNpemU6IFt3LCBoXVxuXHR9O1xuXHRjb25zdCBwcm9qZWN0ZWQgPSBjb252ZXJ0T3JpZW50UHhUb0NYKG9zQ29vcmQsIG5vcm1hbGl6ZWRBcmdzLCBvcmllbnQpO1xuXHRjb25zdCBub3JtYWxpemVkQ2VsbCA9IChvcHRpb25zPy5tb2RlID8/IFwiZmxvb3JcIikgPT09IFwicm91bmRcIiA/IFtNYXRoLnJvdW5kKHByb2plY3RlZFswXSksIE1hdGgucm91bmQocHJvamVjdGVkWzFdKV0gOiBbTWF0aC5mbG9vcihwcm9qZWN0ZWRbMF0pLCBNYXRoLmZsb29yKHByb2plY3RlZFsxXSldO1xuXHRjb25zdCByZWRpcmVjdGVkID0gcmVkaXJlY3RDZWxsKG5vcm1hbGl6ZWRDZWxsLCBub3JtYWxpemVkQXJncyk7XG5cdHJldHVybiBjbGFtcEdyaWRDZWxsVHVwbGUocmVkaXJlY3RlZCwgTCk7XG59O1xudmFyIGdyaWRJdGVtc0FzQXJyYXkgPSAoaXRlbXMpID0+IHtcblx0aWYgKGl0ZW1zID09IG51bGwpIHJldHVybiBbXTtcblx0aWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpKSByZXR1cm4gaXRlbXM7XG5cdGlmIChpdGVtcyBpbnN0YW5jZW9mIE1hcCkgcmV0dXJuIEFycmF5LmZyb20oaXRlbXMudmFsdWVzKCkpO1xuXHRpZiAoaXRlbXMgaW5zdGFuY2VvZiBTZXQpIHJldHVybiBBcnJheS5mcm9tKGl0ZW1zKTtcblx0aWYgKHR5cGVvZiBpdGVtc1tTeW1ib2wuaXRlcmF0b3JdID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZW1zKTtcblx0cmV0dXJuIFtdO1xufTtcbnZhciBnZXRTcGFuID0gKGVsLCBheCkgPT4ge1xuXHRjb25zdCBwcm9wID0gZWwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShbXCItLW94LWMtc3BhblwiLCBcIi0tb3gtci1zcGFuXCJdW2F4XSksIGZhY3RvciA9IChwYXJzZUZsb2F0KHByb3AgfHwgXCIxXCIpIHx8IDEpIC0gMTtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGZhY3RvciAtIDEsIDApLCAxKTtcbn07XG52YXIgcmVkaXJlY3RDZWxsID0gKCRwcmVDZWxsLCBncmlkQXJncykgPT4ge1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzPy5sYXlvdXQgPz8gWzQsIDhdKTtcblx0Y29uc3Qgbm9ybWFsaXplZEFyZ3MgPSB7XG5cdFx0Li4uZ3JpZEFyZ3MsXG5cdFx0bGF5b3V0XG5cdH07XG5cdGNvbnN0IGljb25zID0gZ3JpZEl0ZW1zQXNBcnJheShub3JtYWxpemVkQXJncz8uaXRlbXMpO1xuXHRjb25zdCBpdGVtID0gbm9ybWFsaXplZEFyZ3M/Lml0ZW07XG5cdGNvbnN0IGNoZWNrQnVzeSA9IChjZWxsKSA9PiB7XG5cdFx0cmV0dXJuIGljb25zLmZpbHRlcigoZSkgPT4gIShlID09IGl0ZW0gfHwgaXRlbSAhPSBudWxsICYmIGU/LmlkID09IGl0ZW0uaWQpKS5zb21lKChvbmUpID0+IChvbmU/LmNlbGw/LlswXSB8fCAwKSA9PSAoY2VsbFswXSB8fCAwKSAmJiAob25lPy5jZWxsPy5bMV0gfHwgMCkgPT0gKGNlbGxbMV0gfHwgMCkpO1xuXHR9O1xuXHRjb25zdCBwcmVDZWxsID0gWy4uLiRwcmVDZWxsXTtcblx0aWYgKCFjaGVja0J1c3kocHJlQ2VsbCkpIHJldHVybiBbLi4ucHJlQ2VsbF07XG5cdGNvbnN0IGNvbHVtbnMgPSBsYXlvdXRbMF0gfHwgNDtcblx0Y29uc3Qgcm93cyA9IGxheW91dFsxXSB8fCA4O1xuXHRjb25zdCBzdWl0YWJsZSA9IChbXG5cdFx0W3ByZUNlbGxbMF0gKyAxLCBwcmVDZWxsWzFdXSxcblx0XHRbcHJlQ2VsbFswXSAtIDEsIHByZUNlbGxbMV1dLFxuXHRcdFtwcmVDZWxsWzBdLCBwcmVDZWxsWzFdICsgMV0sXG5cdFx0W3ByZUNlbGxbMF0sIHByZUNlbGxbMV0gLSAxXVxuXHRdLmZpbHRlcigodikgPT4ge1xuXHRcdHJldHVybiB2WzBdID49IDAgJiYgdlswXSA8IGNvbHVtbnMgJiYgdlsxXSA+PSAwICYmIHZbMV0gPCByb3dzO1xuXHR9KSB8fCBbXSkuZmluZCgodikgPT4gIWNoZWNrQnVzeSh2KSk7XG5cdGlmIChzdWl0YWJsZSkgcmV0dXJuIFsuLi5zdWl0YWJsZV07XG5cdGxldCBleGNlZWQgPSAwLCBidXN5ID0gdHJ1ZSwgY29tcCA9IFsuLi5wcmVDZWxsXTtcblx0d2hpbGUgKGJ1c3kgJiYgZXhjZWVkKysgPCBjb2x1bW5zICogcm93cykge1xuXHRcdGlmICghKGJ1c3kgPSBjaGVja0J1c3koY29tcCkpKSByZXR1cm4gWy4uLmNvbXBdO1xuXHRcdGNvbXBbMF0rKztcblx0XHRpZiAoY29tcFswXSA+PSBjb2x1bW5zKSB7XG5cdFx0XHRjb21wWzBdID0gMDtcblx0XHRcdGNvbXBbMV0rKztcblx0XHRcdGlmIChjb21wWzFdID49IHJvd3MpIGNvbXBbMV0gPSAwO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gWy4uLnByZUNlbGxdO1xufTtcbnZhciBtYWtlT3JpZW50SW5zZXQgPSAoJG9yaWVudFB4LCBncmlkQXJncywgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBib3hJblB4ID0gWy4uLmdyaWRBcmdzLnNpemVdO1xuXHRjb25zdCBvcmllbnRQeCA9IFsuLi4kb3JpZW50UHhdO1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzLmxheW91dCA/PyBbNCwgOF0pO1xuXHRpZiAob3JpZW50ICUgMikgYm94SW5QeC5yZXZlcnNlKCk7XG5cdHJldHVybiBbcm91bmROZWFyZXN0KG9yaWVudFB4WzBdLCBib3hJblB4WzBdIC8gbGF5b3V0WzBdKSwgcm91bmROZWFyZXN0KG9yaWVudFB4WzFdLCBib3hJblB4WzFdIC8gbGF5b3V0WzFdKV07XG59O1xudmFyIGNvbnZlcnRPcmllbnRQeFRvQ1ggPSAoJG9yaWVudFB4LCBncmlkQXJncywgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBib3hJblB4ID0gWy4uLmdyaWRBcmdzLnNpemVdO1xuXHRjb25zdCBvcmllbnRQeCA9IFsuLi4kb3JpZW50UHhdO1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzLmxheW91dCA/PyBbNCwgOF0pO1xuXHRpZiAob3JpZW50ICUgMikgYm94SW5QeC5yZXZlcnNlKCk7XG5cdGNvbnN0IGdyaWRQeFRvQ1ggPSBbbGF5b3V0WzBdIC8gYm94SW5QeFswXSwgbGF5b3V0WzFdIC8gYm94SW5QeFsxXV07XG5cdHJldHVybiBbb3JpZW50UHhbMF0gKiBncmlkUHhUb0NYWzBdLCBvcmllbnRQeFsxXSAqIGdyaWRQeFRvQ1hbMV1dO1xufTtcbnZhciBmbG9vckluT3JpZW50UHggPSAoJG9yaWVudFB4LCBncmlkQXJncywgb3JpZW50ID0gMCkgPT4ge1xuXHRjb25zdCBvcmllbnRQeCA9IFsuLi4kb3JpZW50UHhdO1xuXHRjb25zdCBib3hJblB4ID0gWy4uLmdyaWRBcmdzLnNpemVdO1xuXHRjb25zdCBsYXlvdXQgPSBub3JtYWxpemVHcmlkTGF5b3V0KGdyaWRBcmdzLmxheW91dCA/PyBbNCwgOF0pO1xuXHRpZiAob3JpZW50ICUgMikgYm94SW5QeC5yZXZlcnNlKCk7XG5cdGNvbnN0IGluQm94ID0gW2JveEluUHhbMF0gLyBsYXlvdXRbMF0sIGJveEluUHhbMV0gLyBsYXlvdXRbMV1dO1xuXHRyZXR1cm4gW3JvdW5kTmVhcmVzdChvcmllbnRQeFswXSwgaW5Cb3hbMF0pLCByb3VuZE5lYXJlc3Qob3JpZW50UHhbMV0sIGluQm94WzFdKV07XG59O1xudmFyIGZsb29ySW5DWCA9ICgkQ1gsIGdyaWRBcmdzKSA9PiB7XG5cdGNvbnN0IGxheW91dCA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQoZ3JpZEFyZ3MubGF5b3V0ID8/IFs0LCA4XSk7XG5cdHJldHVybiBbTWF0aC5taW4oTWF0aC5tYXgocm91bmROZWFyZXN0KCRDWFswXSksIDApLCBsYXlvdXRbMF0gLSAxKSwgTWF0aC5taW4oTWF0aC5tYXgocm91bmROZWFyZXN0KCRDWFsxXSksIDApLCBsYXlvdXRbMV0gLSAxKV07XG59O1xudmFyIGNsaWVudFNwYWNlSW5PcmllbnRDWCA9ICgkY2xpZW50UHgsIGdyaWRBcmdzLCBvcmllbnQgPSAwKSA9PiB7XG5cdGNvbnN0IGNsaWVudFB4ID0gWy4uLiRjbGllbnRQeF07XG5cdGNvbnN0IHNpemUgPSBbLi4uZ3JpZEFyZ3Muc2l6ZV07XG5cdGNvbnN0IGxheW91dCA9IG5vcm1hbGl6ZUdyaWRMYXlvdXQoZ3JpZEFyZ3MubGF5b3V0ID8/IFs0LCA4XSk7XG5cdGNvbnN0IG9yaWVudFB4ID0gY3Z0X2NzX3RvX29zKGNsaWVudFB4LCBzaXplLCBvcmllbnQpO1xuXHRjb25zdCBvc1NpemUgPSBvcmllbnQgJSAyID8gW3NpemVbMV0sIHNpemVbMF1dIDogW3NpemVbMF0sIHNpemVbMV1dO1xuXHRyZXR1cm4gW01hdGgubWluKE1hdGgubWF4KHJvdW5kTmVhcmVzdChvcmllbnRQeFswXSAvIG9zU2l6ZVswXSAqIGxheW91dFswXSwgMSksIDApLCBsYXlvdXRbMF0gLSAxKSwgTWF0aC5taW4oTWF0aC5tYXgocm91bmROZWFyZXN0KG9yaWVudFB4WzFdIC8gb3NTaXplWzFdICogbGF5b3V0WzFdLCAxKSwgMCksIGxheW91dFsxXSAtIDEpXTtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9Vc2VyUGF0aC50c1xudmFyIG5vcm1hbGl6ZVNsYXNoZXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3QgdmFsdWUgPSBTdHJpbmcoaW5wdXQgPz8gXCJcIikudHJpbSgpO1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gXCIvXCI7XG5cdHJldHVybiAodmFsdWUuc3RhcnRzV2l0aChcIi9cIikgPyB2YWx1ZSA6IGAvJHt2YWx1ZX1gKS5yZXBsYWNlKC9cXC8rL2csIFwiL1wiKTtcbn07XG52YXIgaXNVc2VyU2NvcGVQYXRoID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTbGFzaGVzKGlucHV0KTtcblx0cmV0dXJuIG5vcm1hbGl6ZWQgPT09IFwiL3VzZXJcIiB8fCBub3JtYWxpemVkLnN0YXJ0c1dpdGgoXCIvdXNlci9cIik7XG59O1xudmFyIHN0cmlwVXNlclNjb3BlUHJlZml4ID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTbGFzaGVzKGlucHV0KTtcblx0aWYgKG5vcm1hbGl6ZWQgPT09IFwiL3VzZXJcIikgcmV0dXJuIFwiL1wiO1xuXHRpZiAobm9ybWFsaXplZC5zdGFydHNXaXRoKFwiL3VzZXIvXCIpKSByZXR1cm4gbm9ybWFsaXplZC5zbGljZSg1KSB8fCBcIi9cIjtcblx0cmV0dXJuIG5vcm1hbGl6ZWQ7XG59O1xudmFyIHRvVXNlclJlbGF0aXZlUGF0aCA9IChpbnB1dCkgPT4ge1xuXHRyZXR1cm4gc3RyaXBVc2VyU2NvcGVQcmVmaXgoaW5wdXQpLnJlcGxhY2UoL15cXC8rLywgXCJcIik7XG59O1xudmFyIHRvVXNlclNjb3BlUGF0aCA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2xhc2hlcyhpbnB1dCk7XG5cdGlmIChpc1VzZXJTY29wZVBhdGgobm9ybWFsaXplZCkpIHJldHVybiBub3JtYWxpemVkO1xuXHRpZiAobm9ybWFsaXplZCA9PT0gXCIvXCIpIHJldHVybiBcIi91c2VyL1wiO1xuXHRyZXR1cm4gYC91c2VyJHtub3JtYWxpemVkfWA7XG59O1xudmFyIHVzZXJQYXRoQ2FuZGlkYXRlcyA9IChpbnB1dCkgPT4ge1xuXHRjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2xhc2hlcyhpbnB1dCk7XG5cdGNvbnN0IHN0cmlwcGVkID0gc3RyaXBVc2VyU2NvcGVQcmVmaXgobm9ybWFsaXplZCk7XG5cdGlmIChpc1VzZXJTY29wZVBhdGgobm9ybWFsaXplZCkpIHJldHVybiBBcnJheS5mcm9tKC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtzdHJpcHBlZCwgbm9ybWFsaXplZF0pKTtcblx0cmV0dXJuIFtzdHJpcHBlZF07XG59O1xudmFyIGlzSWRiU2NvcGVQYXRoID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTbGFzaGVzKGlucHV0KTtcblx0cmV0dXJuIG5vcm1hbGl6ZWQgPT09IFwiL2lkYlwiIHx8IG5vcm1hbGl6ZWQuc3RhcnRzV2l0aChcIi9pZGIvXCIpO1xufTtcbnZhciBzdHJpcElkYlNjb3BlUHJlZml4ID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTbGFzaGVzKGlucHV0KTtcblx0aWYgKG5vcm1hbGl6ZWQgPT09IFwiL2lkYlwiKSByZXR1cm4gXCIvXCI7XG5cdGlmIChub3JtYWxpemVkLnN0YXJ0c1dpdGgoXCIvaWRiL1wiKSkgcmV0dXJuIG5vcm1hbGl6ZWQuc2xpY2UoNCkgfHwgXCIvXCI7XG5cdHJldHVybiBub3JtYWxpemVkO1xufTtcbnZhciBpc1N0b3JhZ2VTY29wZVBhdGggPSAoaW5wdXQpID0+IGlzVXNlclNjb3BlUGF0aChpbnB1dCkgfHwgaXNJZGJTY29wZVBhdGgoaW5wdXQpO1xudmFyIHN0cmlwU3RvcmFnZVNjb3BlUHJlZml4ID0gKGlucHV0KSA9PiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTbGFzaGVzKGlucHV0KTtcblx0aWYgKGlzSWRiU2NvcGVQYXRoKG5vcm1hbGl6ZWQpKSByZXR1cm4gc3RyaXBJZGJTY29wZVByZWZpeChub3JtYWxpemVkKTtcblx0cmV0dXJuIHN0cmlwVXNlclNjb3BlUHJlZml4KG5vcm1hbGl6ZWQpO1xufTtcbnZhciBzdG9yYWdlUGF0aENhbmRpZGF0ZXMgPSAoaW5wdXQpID0+IHtcblx0Y29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVNsYXNoZXMoaW5wdXQpO1xuXHRjb25zdCBzdHJpcHBlZCA9IHN0cmlwU3RvcmFnZVNjb3BlUHJlZml4KG5vcm1hbGl6ZWQpO1xuXHRpZiAoaXNTdG9yYWdlU2NvcGVQYXRoKG5vcm1hbGl6ZWQpKSByZXR1cm4gQXJyYXkuZnJvbSgvKiBAX19QVVJFX18gKi8gbmV3IFNldChbc3RyaXBwZWQsIG5vcm1hbGl6ZWRdKSk7XG5cdHJldHVybiBbc3RyaXBwZWRdO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL01vdW50ZWRGcy50c1xudmFyIE1PVU5URURfRlNfRVZFTlQgPSBcInNzcmU6ZnNcIjtcbnZhciBNT1VOVEVEX0ZTX0hUVFBfUEFUSCA9IFwiL3NzcmUvZnNcIjtcbnZhciBNT1VOVEVEX0ZTX1dTX1BBVEggPSBcIi9zc3JlL2ZzL3dzXCI7XG52YXIgY3JlYXRlTW91bnRlZEZzSWQgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNyeXB0by5yYW5kb21VVUlEID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBgZnNfJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMCl9YDtcbn07XG52YXIgaXNNb3VudGVkRnNSZXF1ZXN0ID0gKHZhbHVlKSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZS50ID09PSBcImZzXCIgJiYgdHlwZW9mIHZhbHVlLm9wID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZS5pZCA9PT0gXCJzdHJpbmdcIjtcbnZhciBpc01vdW50ZWRGc1Jlc3BvbnNlID0gKHZhbHVlKSA9PiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZS50ID09PSBcImZzLXJlc3VsdFwiICYmIHR5cGVvZiB2YWx1ZS5pZCA9PT0gXCJzdHJpbmdcIjtcbnZhciBwYXJzZU1vdW50ZWRGc01lc3NhZ2UgPSAocmF3KSA9PiB7XG5cdGxldCB2YWx1ZSA9IHJhdztcblx0aWYgKHR5cGVvZiByYXcgPT09IFwic3RyaW5nXCIpIHRyeSB7XG5cdFx0dmFsdWUgPSBKU09OLnBhcnNlKHJhdyk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGlmIChpc01vdW50ZWRGc1JlcXVlc3QodmFsdWUpIHx8IGlzTW91bnRlZEZzUmVzcG9uc2UodmFsdWUpKSByZXR1cm4gdmFsdWU7XG5cdHJldHVybiBudWxsO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL01hcHBlZC50c1xudmFyIHJlbmRlclRhYk5hbWUgPSAodGFiTmFtZSkgPT4ge1xuXHRpZiAoIXRhYk5hbWUpIHJldHVybiBcIlwiO1xuXHR0YWJOYW1lID0gdGFiTmFtZT8ucmVwbGFjZT8uKC9fL2csIFwiIFwiKSB8fCB0YWJOYW1lO1xuXHR0YWJOYW1lID0gdGFiTmFtZT8uY2hhckF0Py4oMCk/LnRvVXBwZXJDYXNlPy4oKSArIHRhYk5hbWU/LnNsaWNlPy4oMSkgfHwgdGFiTmFtZTtcblx0cmV0dXJuIHRhYk5hbWU7XG59O1xudmFyIFJFTU9WRV9JRl9IQVNfU0lNSUxBUiA9IChhcnJheSwgb2xkLCBpZHggPSAtMSwgc3JjT2JqID0gbnVsbCkgPT4ge1xuXHRpZiAoYXJyYXk/LmluZGV4T2Y/LihvbGQpID49IDApIGFycmF5LnNwbGljZShhcnJheS5pbmRleE9mKG9sZCksIDEpO1xuXHRlbHNlIGlmIChpZHggPj0gMCAmJiBpZHggPCBhcnJheT8ubGVuZ3RoKSBhcnJheS5zcGxpY2UoaWR4LCAxKTtcbn07XG52YXIgUkVNT1ZFX0lGX0hBUyA9IChhcnJheSwgaXRlbSkgPT4ge1xuXHRpZiAoYXJyYXk/LmluZGV4T2Y/LihpdGVtKSA+PSAwKSBhcnJheS5zcGxpY2UoYXJyYXkuaW5kZXhPZihpdGVtKSwgMSk7XG59O1xudmFyIFBVU0hfT05DRSA9IChhcnJheSwgaXRlbSkgPT4ge1xuXHRpZiAoYXJyYXk/LmluZGV4T2Y/LihpdGVtKSA8IDApIGFycmF5LnB1c2goaXRlbSk7XG59O1xudmFyIFNQTElDRV9JTlRPX09OQ0UgPSAoYXJyYXksIGl0ZW0sIGluZGV4ID0gLTEpID0+IHtcblx0aWYgKHR5cGVvZiBpbmRleCAhPSBcIm51bWJlclwiIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+PSBhcnJheT8ubGVuZ3RoKSBQVVNIX09OQ0UoYXJyYXksIGl0ZW0pO1xuXHRlbHNlIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIiAmJiBhcnJheT8uaW5kZXhPZj8uKGl0ZW0pIDwgMCkgYXJyYXkuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbn07XG52YXIgY2FjaGVkUGVyRmlsZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIGNhY2hlZFBlckZpbGVOYW1lID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBHRVRfT1JfQ0FDSEUgPSBhc3luYyAoZmlsZSkgPT4ge1xuXHRsZXQgYmxvYiA9IG51bGw7XG5cdHRyeSB7XG5cdFx0YmxvYiA9IGF3YWl0IGZpbGU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRibG9iID0gbnVsbDtcblx0XHRjb25zb2xlLndhcm4oZSk7XG5cdH1cblx0aWYgKGJsb2IgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdGlmIChjYWNoZWRQZXJGaWxlLmhhcyhibG9iKSkgcmV0dXJuIGNhY2hlZFBlckZpbGUuZ2V0KGJsb2IpO1xuXHRpZiAoYmxvYi50eXBlICE9IFwiYXBwbGljYXRpb24vanNvblwiKSByZXR1cm4gY2FjaGVkUGVyRmlsZS5nZXQoYmxvYik7XG5cdGNvbnN0IHJhdyA9IGF3YWl0IGJsb2IudGV4dD8uKCk/LmNhdGNoPy4oY29uc29sZS53YXJuLmJpbmQoY29uc29sZSkpIHx8IFwie31cIjtcblx0bGV0IG9iaiA9IHt9O1xuXHR0cnkge1xuXHRcdG9iaiA9IEpTT04ucGFyc2UocmF3KTtcblx0fSBjYXRjaCAoXykge1xuXHRcdHRyeSB7XG5cdFx0XHRvYmogPSBKU09OLnBhcnNlKHJhdyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdH1cblx0fVxuXHRjYWNoZWRQZXJGaWxlLnNldChibG9iLCBvYmopO1xuXHRyZXR1cm4gb2JqO1xufTtcbnZhciBHRVRfT1JfQ0FDSEVfQllfTkFNRSA9IGFzeW5jIChmaWxlTmFtZSwgZmlsZSkgPT4ge1xuXHRsZXQgYmxvYiA9IG51bGw7XG5cdHRyeSB7XG5cdFx0YmxvYiA9IGF3YWl0IGZpbGU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRibG9iID0gbnVsbDtcblx0XHRjb25zb2xlLndhcm4oZSk7XG5cdH1cblx0aWYgKGZpbGVOYW1lID09IG51bGwpIHJldHVybiBudWxsO1xuXHRpZiAoY2FjaGVkUGVyRmlsZU5hbWUuaGFzKGZpbGVOYW1lKSkgcmV0dXJuIGNhY2hlZFBlckZpbGVOYW1lLmdldChmaWxlTmFtZSk7XG5cdGNvbnN0IG9iaiA9IGJsb2IgIT0gbnVsbCA/IGF3YWl0IEdFVF9PUl9DQUNIRShibG9iKSA6IGNhY2hlZFBlckZpbGVOYW1lPy5nZXQoZmlsZU5hbWUpO1xuXHRpZiAoZmlsZU5hbWUpIGNhY2hlZFBlckZpbGVOYW1lLnNldChmaWxlTmFtZSwgb2JqKTtcblx0cmV0dXJuIG9iajtcbn07XG52YXIgbWVyZ2VCeUV4aXN0cyA9IChkYXRhUmVmLCByZWZzKSA9PiB7XG5cdGNvbnN0IGRhdGFNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRkYXRhUmVmLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0aWYgKGl0ZW0/Lm5hbWUpIGRhdGFNYXAuc2V0KGl0ZW0ubmFtZSwge1xuXHRcdFx0aXRlbSxcblx0XHRcdGluZGV4XG5cdFx0fSk7XG5cdH0pO1xuXHRjb25zdCByZWZzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0cmVmcy5mb3JFYWNoKChyZWYpID0+IHtcblx0XHRpZiAocmVmPy5uYW1lKSByZWZzTWFwLnNldChyZWYubmFtZSwgcmVmKTtcblx0fSk7XG5cdGZvciAoY29uc3QgW25hbWUsIHsgaW5kZXggfV0gb2YgZGF0YU1hcCkge1xuXHRcdGNvbnN0IHJlZiA9IHJlZnNNYXAuZ2V0KG5hbWUpO1xuXHRcdGlmIChyZWYpIGRhdGFSZWZbaW5kZXhdID0gcmVmO1xuXHR9XG5cdGZvciAoY29uc3QgW25hbWUsIHJlZl0gb2YgcmVmc01hcCkgaWYgKCFkYXRhTWFwLmhhcyhuYW1lKSkgZGF0YVJlZi5wdXNoKHJlZik7XG5cdGZvciAobGV0IGkgPSBkYXRhUmVmLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Y29uc3QgaXRlbSA9IGRhdGFSZWZbaV07XG5cdFx0aWYgKGl0ZW0/Lm5hbWUgJiYgIXJlZnNNYXAuaGFzKGl0ZW0ubmFtZSkpIGRhdGFSZWYuc3BsaWNlKGksIDEpO1xuXHR9XG5cdGRhdGFSZWYuc29ydCgoYSwgYikgPT4gYT8ubmFtZT8ubG9jYWxlQ29tcGFyZT8uKGI/Lm5hbWUgPz8gXCJcIikpO1xuXHRyZXR1cm4gZGF0YVJlZjtcbn07XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9QaG9uZS50c1xudmFyIFBIT05FX0NBTkRJREFURV9SRSA9IC9cXCs/XFxkW1xcZFxccygpLlxcLV17NCx9XFxkL2c7XG52YXIgRVhUX0NVVF9SRSA9IC8o0LTQvtCxXFwuP3zQtNC+0L9cXC4/fGV4dFxcLj98ZXh0ZW5zaW9uKVxccypbOiNcXC14XSpcXHMqXFxkKy4qL2k7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuXHRkZWZhdWx0VHJ1bms6IFwiOFwiLFxuXHRjb3VudHJ5Q29kZTogXCI3XCIsXG5cdGNpdHlDb2RlOiBudWxsLFxuXHRzdHJpcEV4dGVuc2lvbnM6IHRydWUsXG5cdG1pbkxvY2FsOiA1LFxuXHRtYXhMb2NhbDogN1xufTtcbnZhciBub3JtYWxpemVPbmUgPSAoaW5wdXQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IG9wdHMgPSB7XG5cdFx0Li4uREVGQVVMVF9PUFRJT05TLFxuXHRcdC4uLm9wdGlvbnNcblx0fTtcblx0bGV0IHMgPSBTdHJpbmcoaW5wdXQpLnRyaW0oKTtcblx0aWYgKCFzKSByZXR1cm4gbnVsbDtcblx0aWYgKG9wdHMuc3RyaXBFeHRlbnNpb25zKSBzID0gcy5yZXBsYWNlKEVYVF9DVVRfUkUsIFwiXCIpO1xuXHRjb25zdCBoYXNQbHVzSW5TdGFydCA9IC9eXFwrLy50ZXN0KHMpO1xuXHRsZXQgZGlnaXRzID0gcy5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG5cdGlmICghZGlnaXRzKSByZXR1cm4gbnVsbDtcblx0aWYgKGhhc1BsdXNJblN0YXJ0ICYmIGRpZ2l0cy5zdGFydHNXaXRoKG9wdHMuY291bnRyeUNvZGUpKSBkaWdpdHMgPSBvcHRzLmRlZmF1bHRUcnVuayArIGRpZ2l0cy5zbGljZShvcHRzLmNvdW50cnlDb2RlLmxlbmd0aCk7XG5cdGVsc2UgaWYgKGRpZ2l0cy5sZW5ndGggPT09IDExICYmIGRpZ2l0cy5zdGFydHNXaXRoKG9wdHMuY291bnRyeUNvZGUpKSBkaWdpdHMgPSBvcHRzLmRlZmF1bHRUcnVuayArIGRpZ2l0cy5zbGljZSgxKTtcblx0ZWxzZSBpZiAoZGlnaXRzLmxlbmd0aCA9PT0gMTApIGRpZ2l0cyA9IG9wdHMuZGVmYXVsdFRydW5rICsgZGlnaXRzO1xuXHRlbHNlIGlmIChvcHRzLmNpdHlDb2RlICYmIGRpZ2l0cy5sZW5ndGggPj0gb3B0cy5taW5Mb2NhbCAmJiBkaWdpdHMubGVuZ3RoIDw9IG9wdHMubWF4TG9jYWwpIGRpZ2l0cyA9IG9wdHMuZGVmYXVsdFRydW5rICsgb3B0cy5jaXR5Q29kZSArIGRpZ2l0cztcblx0ZWxzZSBpZiAoZGlnaXRzLmxlbmd0aCA9PT0gMTEgJiYgZGlnaXRzLnN0YXJ0c1dpdGgob3B0cy5kZWZhdWx0VHJ1bmspKSB7fSBlbHNlIGlmIChvcHRzLmNpdHlDb2RlICYmIGRpZ2l0cy5sZW5ndGggPT09IG9wdHMuY2l0eUNvZGUubGVuZ3RoICsgNykgZGlnaXRzID0gb3B0cy5kZWZhdWx0VHJ1bmsgKyBkaWdpdHM7XG5cdGVsc2UgcmV0dXJuIG51bGw7XG5cdHJldHVybiAvXlxcZHsxMX0kLy50ZXN0KGRpZ2l0cykgPyBkaWdpdHMgOiBudWxsO1xufTtcbnZhciBzcGxpdENhbmRpZGF0ZXMgPSAodmFsdWUpID0+IHtcblx0aWYgKHZhbHVlID09IG51bGwpIHJldHVybiBbXTtcblx0Y29uc3QgcyA9IFN0cmluZyh2YWx1ZSk7XG5cdGNvbnN0IG1hdGNoZXMgPSBzLm1hdGNoKFBIT05FX0NBTkRJREFURV9SRSk7XG5cdGlmIChtYXRjaGVzPy5sZW5ndGgpIHJldHVybiBtYXRjaGVzO1xuXHRyZXR1cm4gcy5zcGxpdCgvWzssL3xdKy8pLm1hcCgoeCkgPT4geC50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbn07XG52YXIgbm9ybWFsaXplUGhvbmVzID0gKHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcblx0Y29uc3Qgb3V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSBmb3IgKGNvbnN0IHYgb2YgdmFsdWUpIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikgZm9yIChjb25zdCBjYW5kIG9mIHNwbGl0Q2FuZGlkYXRlcyh2KSkge1xuXHRcdGNvbnN0IG4gPSBub3JtYWxpemVPbmUoY2FuZCwgb3B0aW9ucyk7XG5cdFx0aWYgKG4pIG91dC5hZGQobik7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Y29uc3QgbiA9IG5vcm1hbGl6ZU9uZSh2LCBvcHRpb25zKTtcblx0XHRpZiAobikgb3V0LmFkZChuKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIGZvciAoY29uc3QgYyBvZiBzcGxpdENhbmRpZGF0ZXModmFsdWUpKSB7XG5cdFx0Y29uc3QgbiA9IG5vcm1hbGl6ZU9uZShjLCBvcHRpb25zKTtcblx0XHRpZiAobikgb3V0LmFkZChuKTtcblx0fVxuXHRlbHNlIHtcblx0XHRjb25zdCBuID0gbm9ybWFsaXplT25lKHZhbHVlLCBvcHRpb25zKTtcblx0XHRpZiAobikgb3V0LmFkZChuKTtcblx0fVxuXHRyZXR1cm4gWy4uLm91dF07XG59O1xudmFyIGdldEluZGV4Rm9yUm93ID0gKHJvdywgcG9zKSA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KHJvdykgJiYgdHlwZW9mIHJvd1sxXSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHJvd1sxXTtcblx0aWYgKHJvdyAmJiB0eXBlb2Ygcm93ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiByb3cuaW5kZXggPT09IFwibnVtYmVyXCIpIHJldHVybiByb3cuaW5kZXg7XG5cdHJldHVybiBwb3M7XG59O1xudmFyIGdldFBob25lc0Zyb21Sb3cgPSAocm93KSA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KHJvdykpIHJldHVybiByb3dbMF07XG5cdGlmIChyb3cgJiYgdHlwZW9mIHJvdyA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmIChcInBob25lc1wiIGluIHJvdykgcmV0dXJuIHJvdy5waG9uZXM7XG5cdFx0aWYgKFwicGhvbmVcIiBpbiByb3cpIHJldHVybiByb3cucGhvbmU7XG5cdH1cblx0cmV0dXJuIHJvdztcbn07XG5mdW5jdGlvbiBmaW5kRHVwbGljYXRlUGhvbmVzKHJvd3MsIHVzZXJPcHRpb25zID0ge30pIHtcblx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHQuLi5ERUZBVUxUX09QVElPTlMsXG5cdFx0Li4udXNlck9wdGlvbnNcblx0fTtcblx0Y29uc3QgbnVtYmVyVG9JbmRpY2VzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgaW5kZXhUb051bWJlcnNBbGwgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRyb3dzLmZvckVhY2goKHJvdywgcG9zKSA9PiB7XG5cdFx0Y29uc3QgaWR4ID0gZ2V0SW5kZXhGb3JSb3cocm93LCBwb3MpO1xuXHRcdGNvbnN0IHBob25lc1JhdyA9IGdldFBob25lc0Zyb21Sb3cocm93KTtcblx0XHRjb25zdCBwaG9uZXMgPSBub3JtYWxpemVQaG9uZXMocGhvbmVzUmF3LCBvcHRpb25zKTtcblx0XHRpZiAoIWluZGV4VG9OdW1iZXJzQWxsLmhhcyhpZHgpKSBpbmRleFRvTnVtYmVyc0FsbC5zZXQoaWR4LCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRjb25zdCBzZXRGb3JJbmRleCA9IGluZGV4VG9OdW1iZXJzQWxsLmdldChpZHgpO1xuXHRcdGZvciAoY29uc3QgcCBvZiBwaG9uZXMpIHtcblx0XHRcdHNldEZvckluZGV4LmFkZChwKTtcblx0XHRcdGlmICghbnVtYmVyVG9JbmRpY2VzLmhhcyhwKSkgbnVtYmVyVG9JbmRpY2VzLnNldChwLCAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcblx0XHRcdG51bWJlclRvSW5kaWNlcy5nZXQocCkuYWRkKGlkeCk7XG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgZHVwbGljYXRlc0J5TnVtYmVyID0ge307XG5cdGZvciAoY29uc3QgW251bSwgc2V0XSBvZiBudW1iZXJUb0luZGljZXMuZW50cmllcygpKSBpZiAoc2V0LnNpemUgPiAxKSBkdXBsaWNhdGVzQnlOdW1iZXJbbnVtXSA9IFsuLi5zZXRdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblx0Y29uc3QgZHVwbGljYXRlc0J5SW5kZXggPSB7fTtcblx0Zm9yIChjb25zdCBbaWR4LCBzZXRdIG9mIGluZGV4VG9OdW1iZXJzQWxsLmVudHJpZXMoKSkge1xuXHRcdGNvbnN0IGR1cHMgPSBbLi4uc2V0XS5maWx0ZXIoKG4pID0+IGR1cGxpY2F0ZXNCeU51bWJlcltuXSk7XG5cdFx0aWYgKGR1cHMubGVuZ3RoKSBkdXBsaWNhdGVzQnlJbmRleFtpZHhdID0gZHVwcy5zb3J0KCk7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRkdXBsaWNhdGVzQnlOdW1iZXIsXG5cdFx0cGFpcnM6IE9iamVjdC5lbnRyaWVzKGR1cGxpY2F0ZXNCeUluZGV4KS5tYXAoKFtpZHgsIG51bXNdKSA9PiBbTnVtYmVyKGlkeCksIG51bXNdKS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSksXG5cdFx0ZHVwbGljYXRlc0J5SW5kZXgsXG5cdFx0bm9ybWFsaXplOiAocykgPT4gbm9ybWFsaXplT25lKHMsIG9wdGlvbnMpXG5cdH07XG59XG5cbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIHNyYy91dGlscy9UaW1lLnRzXG52YXIgZ2V0VGltZVpvbmUgPSAoKSA9PiB7XG5cdHJldHVybiBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG59O1xuZnVuY3Rpb24gaXNQdXJlSEhNTShzdHIpIHtcblx0aWYgKCFzdHIpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIC9eKFswMV1cXGR8MlswLTNdKTooWzAtNV1cXGQpJC8udGVzdChTdHJpbmcoc3RyKS50cmltKCkpO1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlQ29ycmVjdGx5KHN0cikge1xuXHRpZiAoIXN0cikgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpO1xuXHRpZiAoc3RyIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIG5ldyBEYXRlKHN0cik7XG5cdGlmICh0eXBlb2Ygc3RyID09IFwib2JqZWN0XCIgJiYgc3RyPy50aW1lc3RhbXApIHJldHVybiBwYXJzZURhdGVDb3JyZWN0bHkoc3RyLnRpbWVzdGFtcCk7XG5cdGlmICh0eXBlb2Ygc3RyID09IFwib2JqZWN0XCIgJiYgc3RyPy5pc29fZGF0ZSkgcmV0dXJuIHBhcnNlRGF0ZUNvcnJlY3RseShzdHIuaXNvX2RhdGUpO1xuXHRpZiAodHlwZW9mIHN0ciA9PSBcIm9iamVjdFwiICYmIHN0cj8uZGF0ZSkgcmV0dXJuIHBhcnNlRGF0ZUNvcnJlY3RseShzdHIuZGF0ZSk7XG5cdGlmICh0eXBlb2Ygc3RyID09IFwibnVtYmVyXCIpIHtcblx0XHRpZiAoc3RyID49IDB4ZThkNGE1MTAwMCkgcmV0dXJuIG5ldyBEYXRlKHN0cik7XG5cdFx0Y29uc3QgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCAxMSAtIChTdHJpbmcoc3RyIHwgMCk/Lmxlbmd0aCB8fCAxMSkpIHwgMDtcblx0XHRyZXR1cm4gbmV3IERhdGUoc3RyICogbXVsdGlwbGllcik7XG5cdH1cblx0aWYgKHR5cGVvZiBzdHIgPT0gXCJzdHJpbmdcIiAmJiBpc1B1cmVISE1NKHN0cikpIHtcblx0XHRjb25zdCBtID0gL14oWzAxXVxcZHwyWzAtM10pOihbMC01XVxcZCkkLy5leGVjKHN0ci50cmltKCkpO1xuXHRcdGlmICghbSkgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IFssIGhoLCBtbV0gPSBtO1xuXHRcdGNvbnN0IG5vdyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpO1xuXHRcdHJldHVybiBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCksIE51bWJlcihoaCksIE51bWJlcihtbSksIDAsIDApO1xuXHR9XG5cdHJldHVybiBuZXcgRGF0ZShTdHJpbmcoc3RyKSk7XG59XG5mdW5jdGlvbiBwYXJzZUFuZEdldENvcnJlY3RUaW1lKHN0cikge1xuXHRpZiAoIXN0cikgcmV0dXJuIERhdGUubm93KCk7XG5cdGlmICh0eXBlb2Ygc3RyID09IFwibnVtYmVyXCIpIHtcblx0XHRpZiAoc3RyID49IDB4ZThkNGE1MTAwMCkgcmV0dXJuIHN0cjtcblx0XHRyZXR1cm4gc3RyICogKE1hdGgucG93KDEwLCAxMSAtIChTdHJpbmcoc3RyIHwgMCk/Lmxlbmd0aCB8fCAxMSkpIHwgMCk7XG5cdH1cblx0aWYgKHN0ciBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBzdHIuZ2V0VGltZSgpO1xuXHRyZXR1cm4gcGFyc2VEYXRlQ29ycmVjdGx5KHN0cik/LmdldFRpbWU/LigpID8/IERhdGUubm93KCk7XG59XG52YXIgZ2V0SVNPV2Vla051bWJlciA9IChpbnB1dCkgPT4ge1xuXHRpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcblx0Y29uc3QgdGFyZ2V0ID0gbmV3IERhdGUoRGF0ZS5VVEMoaW5wdXQuZ2V0RnVsbFllYXIoKSwgaW5wdXQuZ2V0TW9udGgoKSwgaW5wdXQuZ2V0RGF0ZSgpKSk7XG5cdGNvbnN0IGRheU51bWJlciA9IHRhcmdldC5nZXRVVENEYXkoKSB8fCA3O1xuXHR0YXJnZXQuc2V0VVRDRGF0ZSh0YXJnZXQuZ2V0VVRDRGF0ZSgpICsgNCAtIGRheU51bWJlcik7XG5cdGNvbnN0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKHRhcmdldC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSk7XG5cdHJldHVybiBNYXRoLmNlaWwoKCh0YXJnZXQuZ2V0VGltZSgpIC0geWVhclN0YXJ0LmdldFRpbWUoKSkgLyA4NjRlNSArIDEpIC8gNyk7XG59O1xudmFyIG5vcm1hbGl6ZVNjaGVkdWxlID0gKHZhbHVlKSA9PiB7XG5cdGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICh2YWx1ZS5kYXRlIHx8IHZhbHVlLmlzb19kYXRlIHx8IHZhbHVlLnRpbWVzdGFtcCkpIHJldHVybiB2YWx1ZTtcblx0cmV0dXJuIHsgaXNvX2RhdGU6IFN0cmluZyh2YWx1ZSkgfTtcbn07XG52YXIgZm9ybWF0QXNUaW1lID0gKHRpbWUpID0+IHtcblx0Y29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVNjaGVkdWxlKHRpbWUpO1xuXHRpZiAoIW5vcm1hbGl6ZWQpIHJldHVybiBcIlwiO1xuXHRyZXR1cm4gcGFyc2VEYXRlQ29ycmVjdGx5KG5vcm1hbGl6ZWQpPy50b0xvY2FsZVRpbWVTdHJpbmc/LihcImVuLUdCXCIsIHtcblx0XHRob3VyOiBcIjItZGlnaXRcIixcblx0XHRtaW51dGU6IFwiMi1kaWdpdFwiLFxuXHRcdGhvdXIxMjogZmFsc2UsXG5cdFx0dGltZVpvbmU6IGdldFRpbWVab25lKClcblx0fSkgfHwgXCJcIjtcbn07XG52YXIgZm9ybWF0QXNEYXRlID0gKGRhdGUpID0+IHtcblx0cmV0dXJuIHBhcnNlRGF0ZUNvcnJlY3RseShkYXRlKT8udG9Mb2NhbGVEYXRlU3RyaW5nPy4oXCJlbi1HQlwiLCB7XG5cdFx0ZGF5OiBcIm51bWVyaWNcIixcblx0XHRtb250aDogXCJsb25nXCIsXG5cdFx0d2Vla2RheTogXCJsb25nXCIsXG5cdFx0eWVhcjogXCJudW1lcmljXCIsXG5cdFx0dGltZVpvbmU6IGdldFRpbWVab25lKClcblx0fSkgfHwgXCJcIjtcbn07XG52YXIgZm9ybWF0RGF0ZVRpbWUgPSAodGltZXN0YW1wKSA9PiB7XG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXHRpZiAoTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKSkgcmV0dXJuIFwiXCI7XG5cdHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKHZvaWQgMCwge1xuXHRcdHllYXI6IFwibnVtZXJpY1wiLFxuXHRcdG1vbnRoOiBcInNob3J0XCIsXG5cdFx0ZGF5OiBcIjItZGlnaXRcIixcblx0XHRob3VyOiBcIjItZGlnaXRcIixcblx0XHRtaW51dGU6IFwiMi1kaWdpdFwiXG5cdH0pO1xufTtcbnZhciBnZXRDb21wYXJhYmxlVGltZVZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gTmFOO1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcblx0Y29uc3QgZGF0ZSA9IHBhcnNlRGF0ZUNvcnJlY3RseSh2YWx1ZSk7XG5cdGlmIChkYXRlICYmICFOdW1iZXIuaXNOYU4oZGF0ZT8uZ2V0VGltZSgpKSkgcmV0dXJuIGRhdGU/LmdldFRpbWUoKSA/PyAwO1xuXHRjb25zdCBtYXRjaCA9IFN0cmluZyh2YWx1ZSkubWF0Y2goL14oXFxkezEsMn0pKD86OihcXGR7Mn0pKT8oPzo6KFxcZHsyfSkpPy8pO1xuXHRpZiAobWF0Y2gpIHtcblx0XHRjb25zdCBob3VycyA9IE51bWJlcihtYXRjaFsxXSkgfHwgMDtcblx0XHRjb25zdCBtaW51dGVzID0gTnVtYmVyKG1hdGNoWzJdKSB8fCAwO1xuXHRcdGNvbnN0IHNlY29uZHMgPSBOdW1iZXIobWF0Y2hbM10pIHx8IDA7XG5cdFx0cmV0dXJuICgoaG91cnMgKiA2MCArIG1pbnV0ZXMpICogNjAgKyBzZWNvbmRzKSAqIDFlMztcblx0fVxuXHRjb25zdCBudW1lcmljID0gTnVtYmVyKHZhbHVlKTtcblx0cmV0dXJuIE51bWJlci5pc0Zpbml0ZShudW1lcmljKSA/IG51bWVyaWMgOiBOYU47XG59O1xudmFyIGlzRGF0ZSA9IChkYXRlKSA9PiB7XG5cdGNvbnN0IGZpcnN0U3RlcCA9IGRhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBkYXRlID09IFwic3RyaW5nXCIgJiYgZGF0ZS5tYXRjaCgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8pO1xuXHRsZXQgc2Vjb25kU3RlcCA9IGZhbHNlO1xuXHR0cnkge1xuXHRcdHNlY29uZFN0ZXAgPSBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGRhdGUpID4gMDtcblx0fSBjYXRjaCB7XG5cdFx0c2Vjb25kU3RlcCA9IGZhbHNlO1xuXHR9XG5cdHJldHVybiBCb29sZWFuKChmaXJzdFN0ZXAgJiYgc2Vjb25kU3RlcCkgPz8gZmFsc2UpO1xufTtcbnZhciBjaGVja0luVGltZVJhbmdlID0gKGJlZ2luVGltZSwgZW5kVGltZSwgY3VycmVudFRpbWUpID0+IHtcblx0aWYgKGJlZ2luVGltZSAmJiBlbmRUaW1lKSByZXR1cm4gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShiZWdpblRpbWUpIDwgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShjdXJyZW50VGltZSkgJiYgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShjdXJyZW50VGltZSkgPCBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGVuZFRpbWUpO1xuXHRpZiAoYmVnaW5UaW1lKSByZXR1cm4gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShiZWdpblRpbWUpIDwgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShjdXJyZW50VGltZSk7XG5cdGlmIChlbmRUaW1lKSByZXR1cm4gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShjdXJyZW50VGltZSkgPCBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGVuZFRpbWUpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xudmFyIGNoZWNrUmVtYWluc1RpbWUgPSAoYmVnaW5UaW1lLCBlbmRUaW1lLCBjdXJyZW50VGltZSwgbWF4RGF5cyA9IDcpID0+IHtcblx0bGV0IGZhY3Rvck1hc2tlZCA9IHRydWU7XG5cdGlmIChiZWdpblRpbWUpIGZhY3Rvck1hc2tlZCAmJj0gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShjdXJyZW50VGltZSkgPD0gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShiZWdpblRpbWUpO1xuXHRpZiAoZW5kVGltZSkgZmFjdG9yTWFza2VkICYmPSBnZXRDb21wYXJhYmxlVGltZVZhbHVlKGN1cnJlbnRUaW1lKSA8IGdldENvbXBhcmFibGVUaW1lVmFsdWUoZW5kVGltZSk7XG5cdGlmIChtYXhEYXlzKSB7XG5cdFx0Y29uc3QgZGF0ZUxpbWl0ID0gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShjdXJyZW50VGltZSkgKyBtYXhEYXlzICogMjQgKiA2MCAqIDYwICogMWUzO1xuXHRcdGZhY3Rvck1hc2tlZCAmJj0gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShiZWdpblRpbWUpIDwgZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZShkYXRlTGltaXQpO1xuXHR9XG5cdHJldHVybiBmYWN0b3JNYXNrZWQ7XG59O1xudmFyIGNvbXB1dGVUaW1lbGluZU9yZGVySW5HZW5lcmFsID0gKHRpbWVPZkRheSwgbWluVGltZXN0YW1wKSA9PiB7XG5cdGNvbnN0IGRheVN0YXJ0ID0gZ2V0Q29tcGFyYWJsZVRpbWVWYWx1ZSh0aW1lT2ZEYXkpIHx8IDA7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSAoTnVtYmVyLmlzRmluaXRlKGRheVN0YXJ0KSA/IGRheVN0YXJ0IDogMCkgLSAobWluVGltZXN0YW1wIHx8IDApO1xuXHRyZXR1cm4gTWF0aC5yb3VuZChub3JtYWxpemVkIC8gODY0ZTUpO1xufTtcblxuLy8jZW5kcmVnaW9uXG4vLyNyZWdpb24gc3JjL3V0aWxzL01pc2MudHNcbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCBkZWxheSkge1xuXHRsZXQgdGltZW91dElkO1xuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dElkKTtcblx0XHR0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IGZuKC4uLmFyZ3MpLCBkZWxheSk7XG5cdH07XG59XG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgbGltaXQpIHtcblx0bGV0IGluVGhyb3R0bGUgPSBmYWxzZTtcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0aWYgKCFpblRocm90dGxlKSB7XG5cdFx0XHRmbiguLi5hcmdzKTtcblx0XHRcdGluVGhyb3R0bGUgPSB0cnVlO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiBpblRocm90dGxlID0gZmFsc2UsIGxpbWl0KTtcblx0XHR9XG5cdH07XG59XG5mdW5jdGlvbiBzbGVlcChtcykge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbmZ1bmN0aW9uIHVuaXF1ZUlkKHByZWZpeCA9IFwiXCIpIHtcblx0cmV0dXJuIGAke3ByZWZpeH0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDkpfWA7XG59XG5mdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XG5cdGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikgcmV0dXJuIG9iajtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBuZXcgRGF0ZShvYmouZ2V0VGltZSgpKTtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gZGVlcENsb25lKGl0ZW0pKTtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkge1xuXHRcdGNvbnN0IGNsb25lZCA9IHt9O1xuXHRcdGZvciAoY29uc3Qga2V5IGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIGNsb25lZFtrZXldID0gZGVlcENsb25lKG9ialtrZXldKTtcblx0XHRyZXR1cm4gY2xvbmVkO1xuXHR9XG5cdHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSByZXR1cm4gdHJ1ZTtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDA7XG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG5cdHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcblx0cmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xufVxuZnVuY3Rpb24gaXNXb3JrZXIoKSB7XG5cdHJldHVybiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xufVxuXG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBzcmMvaW5kZXgudHNcbmluc3RhbGxEb21Db25zdHJ1Y3RvclBvbHlmaWxscygpO1xuXG4vLyNlbmRyZWdpb25cbmV4cG9ydCB7ICRhdm9pZFRyaWdnZXIsICRmeHksICRnZXRWYWx1ZSwgJHNldCwgJHRyaWdnZXJMb2NrLCBBc3luY1F1ZXVlLCBDaGFubmVsSGVhbHRoTW9uaXRvciwgQ2hhbm5lbFJlZ2lzdHJ5LCBFWFRfQ1VUX1JFLCBHRVRfT1JfQ0FDSEUsIEdFVF9PUl9DQUNIRV9CWV9OQU1FLCBJTlRFR0VSX1JFR0VYUCwgTU9VTlRFRF9GU19FVkVOVCwgTU9VTlRFRF9GU19IVFRQX1BBVEgsIE1PVU5URURfRlNfV1NfUEFUSCwgUEhPTkVfQ0FORElEQVRFX1JFLCBQVVNIX09OQ0UsIFByb21pc2VkLCBSRU1PVkVfSUZfSEFTLCBSRU1PVkVfSUZfSEFTX1NJTUlMQVIsIFNQTElDRV9JTlRPX09OQ0UsIFVVSUR2NCwgV1JlZiwgYWxsS2V5ZWQsIGFsbFNldHRsZWRLZXllZCwgYmluZEN0eCwgYmluZEV2ZW50LCBiaW5kRngsIGJvdW5kQ3R4LCBjYWNoZWRQZXJGaWxlLCBjYWNoZWRQZXJGaWxlTmFtZSwgY2FsbEJ5QWxsUHJvcCwgY2FsbEJ5UHJvcCwgY2FtZWxUb0tlYmFiLCBjYW5CZUludGVnZXIsIGNlaWxOZWFyZXN0LCBjaGVja0luVGltZVJhbmdlLCBjaGVja1JlbWFpbnNUaW1lLCBjbGFtcCwgY2xhbXBEaW1lbnNpb24sIGNsYW1wR3JpZENlbGxUdXBsZSwgY2xpZW50U3BhY2VJbk9yaWVudENYLCBjb21wdXRlVGltZWxpbmVPcmRlckluR2VuZXJhbCwgY29uY3VycmVudExpbWl0LCBjb250ZXh0aWZ5LCBjb252ZXJ0T3JpZW50UHhUb0NYLCBjcmVhdGVDaGFubmVsUHJveHksIGNyZWF0ZURlZmVycmVkLCBjcmVhdGVNb3VudGVkRnNJZCwgY3Z0X2NzX3RvX29zLCBjdnRfb3NfdG9fY3MsIGN2dF9yZWxfY3NfdG9fb3MsIGN2dF9yZWxfb3NfdG9fY3MsIGRlYm91bmNlLCBkZWVwQ2xvbmUsIGRlZXBPcGVyYXRlQW5kQ2xvbmUsIGRlZmF1bHRCeVR5cGUsIGRlcmVmLCBmaW5kRHVwbGljYXRlUGhvbmVzLCBmaXhGeCwgZmxvb3JJbkNYLCBmbG9vckluT3JpZW50UHgsIGZsb29yTmVhcmVzdCwgZm9ybWF0QXNEYXRlLCBmb3JtYXRBc1RpbWUsIGZvcm1hdERhdGVUaW1lLCBnZXRDb21wYXJhYmxlVGltZVZhbHVlLCBnZXRJU09XZWVrTnVtYmVyLCBnZXRJbmRleEZvclJvdywgZ2V0T3JJbnNlcnQsIGdldE9ySW5zZXJ0Q29tcHV0ZWQsIGdldFBob25lc0Zyb21Sb3csIGdldFJhbmRvbVZhbHVlcywgZ2V0U3BhbiwgZ2V0VGltZVpvbmUsIGdldFZhbHVlLCBnbG9iYWxDaGFubmVsSGVhbHRoTW9uaXRvciwgZ2xvYmFsQ2hhbm5lbFJlZ2lzdHJ5LCBncmlkSXRlbXNBc0FycmF5LCBoYW5kbGVMaXN0ZW5lcnMsIGhhc1BlbmRpbmdQcm9taXNlcywgaGFzUHJvcGVydHksIGhhc1ZhbHVlLCBpblByb3h5LCBpc0FycmF5SW52YWxpZEtleSwgaXNBcnJheU9ySXRlcmFibGUsIGlzQnJvd3NlciwgaXNDYW5KdXN0UmV0dXJuLCBpc0NhblRyYW5zZmVyLCBpc0RhdGUsIGlzRW1wdHksIGlzSGFzUHJpbWl0aXZlcywgaXNJZGJTY29wZVBhdGgsIGlzSXRlcmFibGUsIGlzS2V5VHlwZSwgaXNNb3VudGVkRnNSZXF1ZXN0LCBpc01vdW50ZWRGc1Jlc3BvbnNlLCBpc05vdENvbXBsZXhBcnJheSwgaXNOb3RFcXVhbCwgaXNPYmplY3QsIGlzT2JqZWN0Tm90RXF1YWwsIGlzT2JzZXJ2YWJsZSwgaXNQcmltaXRpdmUsIGlzUHJvbWlzZSwgaXNQdXJlSEhNTSwgaXNSZWYsIGlzU3RvcmFnZVNjb3BlUGF0aCwgaXNTeW1ib2wsIGlzVHlwZWRBcnJheSwgaXNVc2VyU2NvcGVQYXRoLCBpc1ZhbCwgaXNWYWxpZE51bWJlciwgaXNWYWxpZE9iaiwgaXNWYWx1ZVJlZiwgaXNWYWx1ZVVuaXQsIGlzV29ya2VyLCBrZWJhYlRvQ2FtZWwsIG1ha2VPcmllbnRJbnNldCwgbWFrZVRyaWdnZXJMZXNzLCBtZXJnZUJ5RXhpc3RzLCBtZXJnZUJ5S2V5LCBub3JtYWxpemVHcmlkTGF5b3V0LCBub3JtYWxpemVPbmUsIG5vcm1hbGl6ZVBob25lcywgbm9ybWFsaXplUHJpbWl0aXZlLCBub3JtYWxpemVTY2hlZHVsZSwgb2JqZWN0QXNzaWduLCBvYmplY3RBc3NpZ25Ob3RFcXVhbCwgcGFyc2VBbmRHZXRDb3JyZWN0VGltZSwgcGFyc2VEYXRlQ29ycmVjdGx5LCBwYXJzZU1vdW50ZWRGc01lc3NhZ2UsIHBvdGVudGlhbGx5QXN5bmMsIHBvdGVudGlhbGx5QXN5bmNNYXAsIHJlZGlyZWN0Q2VsbCwgcmVtb3ZlRXh0cmEsIHJlbmRlclRhYk5hbWUsIHJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbCwgcmVzb2x2ZWQsIHJldHJ5LCByb3VuZE5lYXJlc3QsIHNsZWVwLCBzcGxpdENhbmRpZGF0ZXMsIHN0b3JhZ2VQYXRoQ2FuZGlkYXRlcywgc3RyaXBJZGJTY29wZVByZWZpeCwgc3RyaXBTdG9yYWdlU2NvcGVQcmVmaXgsIHN0cmlwVXNlclNjb3BlUHJlZml4LCB0aHJvdHRsZSwgdG9GaW5pdGVOdW1iZXIsIHRvUmVmLCB0b1VzZXJSZWxhdGl2ZVBhdGgsIHRvVXNlclNjb3BlUGF0aCwgdHJ5UGFyc2VCeUhpbnQsIHRyeVN0cmluZ0FzSW50ZWdlciwgdHJ5U3RyaW5nQXNOdW1iZXIsIHVuaXF1ZUlkLCB1bnJlZiwgdW53cmFwLCB1bndyYXBBcnJheSwgdXNlclBhdGhD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YUFBZSxNQUFPLFFBQU9BLEVBQUksSUFBSSxDQUFDcUcsTUFBU29VLEVBQVVwVSxDQUFJLENBQUM7QUFDbEUsTUFBSXJHLGFBQWUsUUFBUTtBQUMxQixVQUFNMGEsSUFBUyxDQUFDO0FBQ2hCLGVBQVd6WixLQUFPakIsRUFBSyxDQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUtBLEdBQUtpQixDQUFHLE1BQUd5WixFQUFPelosQ0FBRyxJQUFJd1osRUFBVXphLEVBQUlpQixDQUFHLENBQUM7QUFDM0csV0FBT3laO0FBQUEsRUFDUjtBQUNBLFNBQU8xYTtBQUNSO0FBQ0EsU0FBUzJhLEdBQVF6YSxHQUFPO0FBQ3ZCLFNBQUlBLEtBQVUsT0FBaUMsS0FDM0MsT0FBT0EsS0FBVSxXQUFpQkEsRUFBTSxLQUFLLEVBQUUsV0FBVyxJQUMxRCxNQUFNLFFBQVFBLENBQUssSUFBVUEsRUFBTSxXQUFXLElBQzlDLE9BQU9BLEtBQVUsV0FBaUIsT0FBTyxLQUFLQSxDQUFLLEVBQUUsV0FBVyxJQUM3RDtBQUNSO0FBQ0EsU0FBUzBhLEtBQVk7QUFDcEIsU0FBTyxPQUFPLFNBQVcsT0FBZSxPQUFPLFdBQWE7QUFDN0Q7QUFDQSxTQUFTQyxLQUFXO0FBQ25CLFNBQU8sT0FBTyxPQUFTLE9BQWUsT0FBTyxTQUFXO0FBQ3pEO0FBSUF2YixHQUErQjsiLAogICJuYW1lcyI6IFsiaW5zdGFsbERvbUNvbnN0cnVjdG9yUG9seWZpbGxzIiwgImciLCAic3R1YiIsICJlbnN1cmUiLCAibmFtZSIsICIkZnh5IiwgImlzSGFzUHJpbWl0aXZlcyIsICJvYnNlcnZhYmxlIiwgImlzUHJpbWl0aXZlIiwgImlzT2JzZXJ2YWJsZSIsICJvYmoiLCAidHJ5UGFyc2VCeUhpbnQiLCAidmFsdWUiLCAiaGludCIsICJoYXNQcm9wZXJ0eSIsICJ2IiwgInByb3AiLCAiaGFzVmFsdWUiLCAiJGdldFZhbHVlIiwgIiRvYmpPclBsYWluIiwgInVud3JhcCIsICJmYWxsYmFjayIsICJkZXJlZiIsICJmaXhGeCIsICJmeCIsICIkc2V0IiwgInJ2IiwgImtleSIsICJ2YWwiLCAiZ2V0UmFuZG9tVmFsdWVzIiwgImFycmF5IiwgInZhbHVlcyIsICJpIiwgInZhbHVlQ2xhbXAiLCAibWluIiwgIm1heCIsICJjbGFtcCIsICJ3aXRoQ3R4IiwgInRhcmdldCIsICJnb3QiLCAiVVVJRHY0IiwgImMiLCAiY2FtZWxUb0tlYmFiIiwgInN0ciIsICJrZWJhYlRvQ2FtZWwiLCAiXyIsICJjaGFyIiwgInRvRmluaXRlTnVtYmVyIiwgIm51bWJlciIsICJjbGFtcERpbWVuc2lvbiIsICJyb3VuZE5lYXJlc3QiLCAiTiIsICJmbG9vck5lYXJlc3QiLCAiY2VpbE5lYXJlc3QiLCAiaXNWYWx1ZVVuaXQiLCAiaXNWYWwiLCAibm9ybWFsaXplUHJpbWl0aXZlIiwgIiR0cmlnZ2VyTG9jayIsICIkYXZvaWRUcmlnZ2VyIiwgInJlZiIsICJjYiIsICIkcHJvcCIsICJyZXN1bHQiLCAidHJ5U3RyaW5nQXNOdW1iZXIiLCAibWF0Y2hlcyIsICJ0cmllZFRvUGFyc2UiLCAiSU5URUdFUl9SRUdFWFAiLCAidHJ5U3RyaW5nQXNJbnRlZ2VyIiwgImlzVmFsaWROdW1iZXIiLCAiY2FuQmVJbnRlZ2VyIiwgImlzQXJyYXlPckl0ZXJhYmxlIiwgImhhbmRsZUxpc3RlbmVycyIsICJyb290IiwgImZuIiwgImhhbmRsZXJzIiwgInVzdWJzIiwgInVuc3ViIiwgImlzUmVmIiwgInVucmVmIiwgInRvUmVmIiwgImlzVmFsdWVSZWYiLCAiZXhpc3RzIiwgImlzT2JqZWN0IiwgImdldFZhbHVlIiwgInBvdGVudGlhbGx5QXN5bmMiLCAicHJvbWlzZSIsICJwb3RlbnRpYWxseUFzeW5jTWFwIiwgIm1ha2VUcmlnZ2VyTGVzcyIsICJzZWxmIiwgInVud3JhcEFycmF5IiwgImFyciIsICJlbCIsICJpc05vdENvbXBsZXhBcnJheSIsICJpc0Nhbkp1c3RSZXR1cm4iLCAiaXNUeXBlZEFycmF5IiwgImlzU3ltYm9sIiwgInN5bSIsICJpc1Byb21pc2UiLCAiaXNDYW5UcmFuc2ZlciIsICJkZWZhdWx0QnlUeXBlIiwgImEiLCAiJHByb21pc2UiLCAiU0tJUF9LRVlTIiwgImlzVGhlbmFibGUkMiIsICJzZXR0bGVPbmUiLCAicmVhc29uIiwgIm93bkVudW1lcmFibGVLZXlzIiwgImRlc2MiLCAiaGFzUGVuZGluZ1Byb21pc2VzIiwgInNlZW4iLCAic2VlblNldCIsICJpdGVtIiwgInJlc29sdmVkRGVlcCIsICJtb2RlIiwgInNsb3QiLCAiaXRlbXMiLCAicmVjb3JkIiwgInJlc29sdmVkIiwgImNhbGxiYWNrT3JWYWx1ZSIsICJhcmdzIiwgImlzVGhlbmFibGUkMSIsICJhbGxLZXllZCIsICJwcm9taXNlcyIsICJhbGxTZXR0bGVkS2V5ZWQiLCAiY3JlYXRlRGVmZXJyZWQiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAiaXNSZXNvbHZlZCIsICJpc1JlamVjdGVkIiwgInJlcyIsICJyZWoiLCAiZXJyb3IiLCAiQXN5bmNRdWV1ZSIsICJvcGVyYXRpb24iLCAid2l0aFRpbWVvdXQiLCAidGltZW91dE1zIiwgInRpbWVvdXRNZXNzYWdlIiwgInBlbmRpbmciLCAidGltZW91dFByb21pc2UiLCAicmV0cnkiLCAibWF4UmV0cmllcyIsICJpbml0aWFsRGVsYXkiLCAiYmFja29mZk11bHRpcGxpZXIiLCAibGFzdEVycm9yIiwgImF0dGVtcHQiLCAiZGVsYXkiLCAiY29uY3VycmVudExpbWl0IiwgIm9wZXJhdGlvbnMiLCAibGltaXQiLCAicmVzdWx0cyIsICJleGVjdXRpbmciLCAicCIsICJDaGFubmVsUmVnaXN0cnkiLCAiY2hhbm5lbCIsICJsaXN0ZW5lcnMiLCAibGlzdGVuZXIiLCAiZXhpc3RlZCIsICJnbG9iYWxDaGFubmVsUmVnaXN0cnkiLCAiY3JlYXRlQ2hhbm5lbFByb3h5IiwgIm1ldGhvZHMiLCAicHJveHkiLCAibWV0aG9kIiwgIkNoYW5uZWxIZWFsdGhNb25pdG9yIiwgImNoYW5uZWxOYW1lIiwgImhlYWx0aENoZWNrIiwgImludGVydmFsTXMiLCAiZXhpc3RpbmdJbnRlcnZhbCIsICJpbnRlcnZhbCIsICJpc0hlYWx0aHkiLCAic3RhdHVzIiwgImdsb2JhbENoYW5uZWxIZWFsdGhNb25pdG9yIiwgImdldE9ySW5zZXJ0IiwgIm1hcCIsICJkZWZhdWx0VmFsdWUiLCAiZ2V0T3JJbnNlcnRDb21wdXRlZCIsICJjYWxsYmFja0Z1bmN0aW9uIiwgImlzSXRlcmFibGUiLCAiaXNLZXlUeXBlIiwgImlzVmFsaWRPYmoiLCAibWVyZ2VCeUtleSIsICJlbnRyaWVzIiwgIkkiLCAicmVtb3ZlRXh0cmEiLCAiZXhFbnRyaWVzIiwgImtleXMiLCAiZSIsICJleGUiLCAiZXhjbHVkZSIsICJudyIsICJrIiwgIm9iamVjdEFzc2lnbiIsICJyZW1vdmVOb3RFeGlzdHMiLCAibWVyZ2VLZXkiLCAiRSIsICJtZXJnZU9iaiIsICJpc05vdEVxdWFsIiwgIksiLCAiYmluZEZ4IiwgImJvdW5kQ3R4IiwgImJpbmRDdHgiLCAiY2FsbEJ5UHJvcCIsICJjdHgiLCAiY2FsbEJ5QWxsUHJvcCIsICJjYWxsSWZOb3ROdWxsIiwgImluZGV4IiwgIm9iamVjdEFzc2lnbk5vdEVxdWFsIiwgImRzdCIsICJzcmMiLCAiaXNPYmplY3ROb3RFcXVhbCIsICJiIiwgImJvdW5kQ3R4U3ltYm9sIiwgImlzQXJyYXlJbnZhbGlkS2V5IiwgImludmFsaWRGb3JBcnJheSIsICJpblByb3h5IiwgImNvbnRleHRpZnkiLCAicGMiLCAiZGVlcE9wZXJhdGVBbmRDbG9uZSIsICIkcHJldiIsICJiaW5kRXZlbnQiLCAib24iLCAicmVzb2x2ZWRTeW1ib2wiLCAiaGFuZGxlZFN5bWJvbCIsICJyZXNvbHZlZE1hcCIsICJoYW5kbGVkTWFwIiwgIiRleHRyYWN0S2V5JCIsICJpc1RoZW5hYmxlIiwgImFjdFdpdGgiLCAicHJvbWlzZU9yUGxhaW4iLCAiUHJvbWlzZUhhbmRsZXIiLCAiI3Jlc29sdmUiLCAiI3JlamVjdCIsICJkZXNjcmlwdG9yIiwgInByb3RvIiwgInV3cCIsICJuZXdUYXJnZXQiLCAiY3QiLCAicmVjZWl2ZXIiLCAiJHRtcCIsICJQcm9taXNlZCIsICJ0aGlzQXJnIiwgImV4aXN0c01hcCIsICJXZWFrUmVmUHJveHlIYW5kbGVyIiwgInRnIiwgIl9yZWNlaXZlciIsICJXUmVmIiwgImlzV2Vha1JlZiIsICJoYW5kbGVyIiwgInBtIiwgImN2dF9jc190b19vcyIsICJwb3NfaW5fY3MiLCAic2l6ZV9pbl9jcyIsICJvcl9pIiwgInNpemVfaW5fb3MiLCAicG9zX2luX3N3YXAiLCAiY3Z0X29zX3RvX2NzIiwgInBvc19pbl9vcyIsICJwb3NfaW5fY3AiLCAiY3Z0X3JlbF9jc190b19vcyIsICJyZWxfaW5fY3MiLCAicmVsX2luX3N3YXAiLCAiY3Z0X3JlbF9vc190b19jcyIsICJyZWxfaW5fb3MiLCAicmVsX2luX2NwIiwgIm5vcm1hbGl6ZUdyaWRMYXlvdXQiLCAibGF5b3V0IiwgIm8iLCAiY2xhbXBHcmlkQ2VsbFR1cGxlIiwgImNlbGwiLCAiY29scyIsICJyb3dzIiwgInJlc29sdmVMb2NhbFBvaW50VG9HcmlkQ2VsbCIsICJsb2NhbFB4IiwgInNpemUiLCAib3JpZW50IiwgIm9wdGlvbnMiLCAiTCIsICJ3IiwgImgiLCAib3NDb29yZCIsICJub3JtYWxpemVkQXJncyIsICJwcm9qZWN0ZWQiLCAiY29udmVydE9yaWVudFB4VG9DWCIsICJub3JtYWxpemVkQ2VsbCIsICJyZWRpcmVjdGVkIiwgInJlZGlyZWN0Q2VsbCIsICJncmlkSXRlbXNBc0FycmF5IiwgImdldFNwYW4iLCAiYXgiLCAiZmFjdG9yIiwgIiRwcmVDZWxsIiwgImdyaWRBcmdzIiwgImljb25zIiwgImNoZWNrQnVzeSIsICJvbmUiLCAicHJlQ2VsbCIsICJjb2x1bW5zIiwgInN1aXRhYmxlIiwgImV4Y2VlZCIsICJidXN5IiwgImNvbXAiLCAibWFrZU9yaWVudEluc2V0IiwgIiRvcmllbnRQeCIsICJib3hJblB4IiwgIm9yaWVudFB4IiwgImdyaWRQeFRvQ1giLCAiZmxvb3JJbk9yaWVudFB4IiwgImluQm94IiwgImZsb29ySW5DWCIsICIkQ1giLCAiY2xpZW50U3BhY2VJbk9yaWVudENYIiwgIiRjbGllbnRQeCIsICJjbGllbnRQeCIsICJvc1NpemUiLCAibm9ybWFsaXplU2xhc2hlcyIsICJpbnB1dCIsICJpc1VzZXJTY29wZVBhdGgiLCAibm9ybWFsaXplZCIsICJzdHJpcFVzZXJTY29wZVByZWZpeCIsICJ0b1VzZXJSZWxhdGl2ZVBhdGgiLCAidG9Vc2VyU2NvcGVQYXRoIiwgInVzZXJQYXRoQ2FuZGlkYXRlcyIsICJzdHJpcHBlZCIsICJpc0lkYlNjb3BlUGF0aCIsICJzdHJpcElkYlNjb3BlUHJlZml4IiwgImlzU3RvcmFnZVNjb3BlUGF0aCIsICJzdHJpcFN0b3JhZ2VTY29wZVByZWZpeCIsICJzdG9yYWdlUGF0aENhbmRpZGF0ZXMiLCAiTU9VTlRFRF9GU19FVkVOVCIsICJNT1VOVEVEX0ZTX0hUVFBfUEFUSCIsICJNT1VOVEVEX0ZTX1dTX1BBVEgiLCAiY3JlYXRlTW91bnRlZEZzSWQiLCAiaXNNb3VudGVkRnNSZXF1ZXN0IiwgImlzTW91bnRlZEZzUmVzcG9uc2UiLCAicGFyc2VNb3VudGVkRnNNZXNzYWdlIiwgInJhdyIsICJyZW5kZXJUYWJOYW1lIiwgInRhYk5hbWUiLCAiUkVNT1ZFX0lGX0hBU19TSU1JTEFSIiwgIm9sZCIsICJpZHgiLCAic3JjT2JqIiwgIlJFTU9WRV9JRl9IQVMiLCAiUFVTSF9PTkNFIiwgIlNQTElDRV9JTlRPX09OQ0UiLCAiY2FjaGVkUGVyRmlsZSIsICJjYWNoZWRQZXJGaWxlTmFtZSIsICJHRVRfT1JfQ0FDSEUiLCAiZmlsZSIsICJibG9iIiwgIkdFVF9PUl9DQUNIRV9CWV9OQU1FIiwgImZpbGVOYW1lIiwgIm1lcmdlQnlFeGlzdHMiLCAiZGF0YVJlZiIsICJyZWZzIiwgImRhdGFNYXAiLCAicmVmc01hcCIsICJQSE9ORV9DQU5ESURBVEVfUkUiLCAiRVhUX0NVVF9SRSIsICJERUZBVUxUX09QVElPTlMiLCAibm9ybWFsaXplT25lIiwgIm9wdHMiLCAicyIsICJoYXNQbHVzSW5TdGFydCIsICJkaWdpdHMiLCAic3BsaXRDYW5kaWRhdGVzIiwgIngiLCAibm9ybWFsaXplUGhvbmVzIiwgIm91dCIsICJjYW5kIiwgIm4iLCAiZ2V0SW5kZXhGb3JSb3ciLCAicm93IiwgInBvcyIsICJnZXRQaG9uZXNGcm9tUm93IiwgImZpbmREdXBsaWNhdGVQaG9uZXMiLCAidXNlck9wdGlvbnMiLCAibnVtYmVyVG9JbmRpY2VzIiwgImluZGV4VG9OdW1iZXJzQWxsIiwgInBob25lc1JhdyIsICJwaG9uZXMiLCAic2V0Rm9ySW5kZXgiLCAiZHVwbGljYXRlc0J5TnVtYmVyIiwgIm51bSIsICJzZXQiLCAiZHVwbGljYXRlc0J5SW5kZXgiLCAiZHVwcyIsICJudW1zIiwgImdldFRpbWVab25lIiwgImlzUHVyZUhITU0iLCAicGFyc2VEYXRlQ29ycmVjdGx5IiwgIm11bHRpcGxpZXIiLCAibSIsICJoaCIsICJtbSIsICJub3ciLCAicGFyc2VBbmRHZXRDb3JyZWN0VGltZSIsICJnZXRJU09XZWVrTnVtYmVyIiwgImRheU51bWJlciIsICJ5ZWFyU3RhcnQiLCAibm9ybWFsaXplU2NoZWR1bGUiLCAiZm9ybWF0QXNUaW1lIiwgInRpbWUiLCAiZm9ybWF0QXNEYXRlIiwgImRhdGUiLCAiZm9ybWF0RGF0ZVRpbWUiLCAidGltZXN0YW1wIiwgImdldENvbXBhcmFibGVUaW1lVmFsdWUiLCAibWF0Y2giLCAiaG91cnMiLCAibWludXRlcyIsICJzZWNvbmRzIiwgIm51bWVyaWMiLCAiaXNEYXRlIiwgImZpcnN0U3RlcCIsICJzZWNvbmRTdGVwIiwgImNoZWNrSW5UaW1lUmFuZ2UiLCAiYmVnaW5UaW1lIiwgImVuZFRpbWUiLCAiY3VycmVudFRpbWUiLCAiY2hlY2tSZW1haW5zVGltZSIsICJtYXhEYXlzIiwgImZhY3Rvck1hc2tlZCIsICJkYXRlTGltaXQiLCAiY29tcHV0ZVRpbWVsaW5lT3JkZXJJbkdlbmVyYWwiLCAidGltZU9mRGF5IiwgIm1pblRpbWVzdGFtcCIsICJkYXlTdGFydCIsICJkZWJvdW5jZSIsICJ0aW1lb3V0SWQiLCAidGhyb3R0bGUiLCAiaW5UaHJvdHRsZSIsICJzbGVlcCIsICJtcyIsICJ1bmlxdWVJZCIsICJwcmVmaXgiLCAiZGVlcENsb25lIiwgImNsb25lZCIsICJpc0VtcHR5IiwgImlzQnJvd3NlciIsICJpc1dvcmtlciJdCn0K
