function m(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Fe = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  le = Fe,
  Y = () => Math.random().toString(36).substring(7).split('').join('.'),
  $e = {
    INIT: `@@redux/INIT${Y()}`,
    REPLACE: `@@redux/REPLACE${Y()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Y()}`,
  },
  B = $e;
function oe(e) {
  if (typeof e != 'object' || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Ee(e, t, r) {
  if (typeof e != 'function') throw new Error(m(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(m(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(m(1));
    return r(Ee)(e, t);
  }
  let n = e,
    i = t,
    o = new Map(),
    s = o,
    c = 0,
    f = !1;
  function a() {
    s === o &&
      ((s = new Map()),
      o.forEach((y, E) => {
        s.set(E, y);
      }));
  }
  function u() {
    if (f) throw new Error(m(3));
    return i;
  }
  function l(y) {
    if (typeof y != 'function') throw new Error(m(4));
    if (f) throw new Error(m(5));
    let E = !0;
    a();
    const C = c++;
    return (
      s.set(C, y),
      function () {
        if (E) {
          if (f) throw new Error(m(6));
          (E = !1), a(), s.delete(C), (o = null);
        }
      }
    );
  }
  function p(y) {
    if (!oe(y)) throw new Error(m(7));
    if (typeof y.type > 'u') throw new Error(m(8));
    if (typeof y.type != 'string') throw new Error(m(17));
    if (f) throw new Error(m(9));
    try {
      (f = !0), (i = n(i, y));
    } finally {
      f = !1;
    }
    return (
      (o = s).forEach((C) => {
        C();
      }),
      y
    );
  }
  function _(y) {
    if (typeof y != 'function') throw new Error(m(10));
    (n = y), p({ type: B.REPLACE });
  }
  function w() {
    const y = l;
    return {
      subscribe(E) {
        if (typeof E != 'object' || E === null) throw new Error(m(11));
        function C() {
          const h = E;
          h.next && h.next(u());
        }
        return C(), { unsubscribe: y(C) };
      },
      [le]() {
        return this;
      },
    };
  }
  return (
    p({ type: B.INIT }),
    { dispatch: p, subscribe: l, getState: u, replaceReducer: _, [le]: w }
  );
}
function Le(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: B.INIT }) > 'u') throw new Error(m(12));
    if (typeof r(void 0, { type: B.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(m(13));
  });
}
function Be(e) {
  const t = Object.keys(e),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == 'function' && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let i;
  try {
    Le(r);
  } catch (o) {
    i = o;
  }
  return function (s = {}, c) {
    if (i) throw i;
    let f = !1;
    const a = {};
    for (let u = 0; u < n.length; u++) {
      const l = n[u],
        p = r[l],
        _ = s[l],
        w = p(_, c);
      if (typeof w > 'u') throw (c && c.type, new Error(m(14)));
      (a[l] = w), (f = f || w !== _);
    }
    return (f = f || n.length !== Object.keys(s).length), f ? a : s;
  };
}
function W(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...n) =>
              t(r(...n)),
        );
}
function We(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let o = () => {
      throw new Error(m(15));
    };
    const s = { getState: i.getState, dispatch: (f, ...a) => o(f, ...a) },
      c = e.map((f) => f(s));
    return (o = W(...c)(i.dispatch)), { ...i, dispatch: o };
  };
}
function Ke(e) {
  return oe(e) && 'type' in e && typeof e.type == 'string';
}
var ve = Symbol.for('immer-nothing'),
  de = Symbol.for('immer-draftable'),
  O = Symbol.for('immer-state');
function P(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var z = Object.getPrototypeOf;
function D(e) {
  return !!e && !!e[O];
}
function M(e) {
  var t;
  return e
    ? Se(e) ||
        Array.isArray(e) ||
        !!e[de] ||
        !!((t = e.constructor) != null && t[de]) ||
        G(e) ||
        H(e)
    : !1;
}
var Ue = Object.prototype.constructor.toString();
function Se(e) {
  if (!e || typeof e != 'object') return !1;
  const t = z(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object
    ? !0
    : typeof r == 'function' && Function.toString.call(r) === Ue;
}
function K(e, t) {
  X(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function X(e) {
  const t = e[O];
  return t ? t.type_ : Array.isArray(e) ? 1 : G(e) ? 2 : H(e) ? 3 : 0;
}
function V(e, t) {
  return X(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ce(e, t, r) {
  const n = X(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function qe(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function G(e) {
  return e instanceof Map;
}
function H(e) {
  return e instanceof Set;
}
function A(e) {
  return e.copy_ || e.base_;
}
function ee(e, t) {
  if (G(e)) return new Map(e);
  if (H(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = Se(e);
  if (t === !0 || (t === 'class_only' && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[O];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const s = i[o],
        c = n[s];
      c.writable === !1 && ((c.writable = !0), (c.configurable = !0)),
        (c.get || c.set) &&
          (n[s] = {
            configurable: !0,
            writable: !0,
            enumerable: c.enumerable,
            value: e[s],
          });
    }
    return Object.create(z(e), n);
  } else {
    const n = z(e);
    if (n !== null && r) return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function se(e, t = !1) {
  return (
    Q(e) ||
      D(e) ||
      !M(e) ||
      (X(e) > 1 && (e.set = e.add = e.clear = e.delete = Xe),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => se(n, !0))),
    e
  );
}
function Xe() {
  P(2);
}
function Q(e) {
  return Object.isFrozen(e);
}
var Ge = {};
function N(e) {
  const t = Ge[e];
  return t || P(0, e), t;
}
var x;
function Oe() {
  return x;
}
function He(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function pe(e, t) {
  t &&
    (N('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function te(e) {
  re(e), e.drafts_.forEach(Qe), (e.drafts_ = null);
}
function re(e) {
  e === x && (x = e.parent_);
}
function ye(e) {
  return (x = He(x, e));
}
function Qe(e) {
  const t = e[O];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function he(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[O].modified_ && (te(t), P(4)),
        M(e) && ((e = U(t, e)), t.parent_ || q(t, e)),
        t.patches_ &&
          N('Patches').generateReplacementPatches_(
            r[O].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = U(t, r, [])),
    te(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== ve ? e : void 0
  );
}
function U(e, t, r) {
  if (Q(t)) return t;
  const n = t[O];
  if (!n) return K(t, (i, o) => we(e, n, t, i, o, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return q(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let o = i,
      s = !1;
    n.type_ === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
      K(o, (c, f) => we(e, n, i, c, f, r, s)),
      q(e, i, !1),
      r &&
        e.patches_ &&
        N('Patches').generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function we(e, t, r, n, i, o, s) {
  if (D(i)) {
    const c =
        o && t && t.type_ !== 3 && !V(t.assigned_, n) ? o.concat(n) : void 0,
      f = U(e, i, c);
    if ((Ce(r, n, f), D(f))) e.canAutoFreeze_ = !1;
    else return;
  } else s && r.add(i);
  if (M(i) && !Q(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    U(e, i),
      (!t || !t.scope_.parent_) &&
        typeof n != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        q(e, i);
  }
}
function q(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && se(t, r);
}
function Ye(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : Oe(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = n,
    o = ce;
  r && ((i = [n]), (o = F));
  const { revoke: s, proxy: c } = Proxy.revocable(i, o);
  return (n.draft_ = c), (n.revoke_ = s), c;
}
var ce = {
    get(e, t) {
      if (t === O) return e;
      const r = A(e);
      if (!V(r, t)) return Je(e, r, t);
      const n = r[t];
      return e.finalized_ || !M(n)
        ? n
        : n === J(e.base_, t)
          ? (Z(e), (e.copy_[t] = ie(n, e)))
          : n;
    },
    has(e, t) {
      return t in A(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(A(e));
    },
    set(e, t, r) {
      const n = Re(A(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const i = J(A(e), t),
          o = i == null ? void 0 : i[O];
        if (o && o.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (qe(r, i) && (r !== void 0 || V(e.base_, t))) return !0;
        Z(e), ne(e);
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        J(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Z(e), ne(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = A(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== 'length',
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      P(11);
    },
    getPrototypeOf(e) {
      return z(e.base_);
    },
    setPrototypeOf() {
      P(12);
    },
  },
  F = {};
K(ce, (e, t) => {
  F[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
F.deleteProperty = function (e, t) {
  return F.set.call(this, e, t, void 0);
};
F.set = function (e, t, r) {
  return ce.set.call(this, e[0], t, r, e[0]);
};
function J(e, t) {
  const r = e[O];
  return (r ? A(r) : e)[t];
}
function Je(e, t, r) {
  var i;
  const n = Re(t, r);
  return n
    ? 'value' in n
      ? n.value
      : (i = n.get) == null
        ? void 0
        : i.call(e.draft_)
    : void 0;
}
function Re(e, t) {
  if (!(t in e)) return;
  let r = z(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = z(r);
  }
}
function ne(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ne(e.parent_));
}
function Z(e) {
  e.copy_ || (e.copy_ = ee(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Ze = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == 'function' && typeof r != 'function') {
          const o = r;
          r = t;
          const s = this;
          return function (f = o, ...a) {
            return s.produce(f, (u) => r.call(this, u, ...a));
          };
        }
        typeof r != 'function' && P(6),
          n !== void 0 && typeof n != 'function' && P(7);
        let i;
        if (M(t)) {
          const o = ye(this),
            s = ie(t, void 0);
          let c = !0;
          try {
            (i = r(s)), (c = !1);
          } finally {
            c ? te(o) : re(o);
          }
          return pe(o, n), he(i, o);
        } else if (!t || typeof t != 'object') {
          if (
            ((i = r(t)),
            i === void 0 && (i = t),
            i === ve && (i = void 0),
            this.autoFreeze_ && se(i, !0),
            n)
          ) {
            const o = [],
              s = [];
            N('Patches').generateReplacementPatches_(t, i, o, s), n(o, s);
          }
          return i;
        } else P(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == 'function')
          return (s, ...c) => this.produceWithPatches(s, (f) => t(f, ...c));
        let n, i;
        return [
          this.produce(t, r, (s, c) => {
            (n = s), (i = c);
          }),
          n,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    M(e) || P(8), D(e) && (e = Pe(e));
    const t = ye(this),
      r = ie(e, void 0);
    return (r[O].isManual_ = !0), re(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[O];
    (!r || !r.isManual_) && P(9);
    const { scope_: n } = r;
    return pe(n, t), he(void 0, n);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === 'replace') {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = N('Patches').applyPatches_;
    return D(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
  }
};
function ie(e, t) {
  const r = G(e)
    ? N('MapSet').proxyMap_(e, t)
    : H(e)
      ? N('MapSet').proxySet_(e, t)
      : Ye(e, t);
  return (t ? t.scope_ : Oe()).drafts_.push(r), r;
}
function Pe(e) {
  return D(e) || P(10, e), Te(e);
}
function Te(e) {
  if (!M(e) || Q(e)) return e;
  const t = e[O];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = ee(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = ee(e, !0);
  return (
    K(r, (n, i) => {
      Ce(r, n, Te(i));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var R = new Ze(),
  ke = R.produce;
R.produceWithPatches.bind(R);
R.setAutoFreeze.bind(R);
R.setUseStrictShallowCopy.bind(R);
R.applyPatches.bind(R);
R.createDraft.bind(R);
R.finishDraft.bind(R);
function Ve(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t);
}
function et(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t);
}
function tt(
  e,
  t = 'expected all items to be functions, instead received the following types: ',
) {
  if (!e.every((r) => typeof r == 'function')) {
    const r = e
      .map((n) =>
        typeof n == 'function' ? `function ${n.name || 'unnamed'}()` : typeof n,
      )
      .join(', ');
    throw new TypeError(`${t}[${r}]`);
  }
}
var _e = (e) => (Array.isArray(e) ? e : [e]);
function rt(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    tt(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: ',
    ),
    t
  );
}
function nt(e, t) {
  const r = [],
    { length: n } = e;
  for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
  return r;
}
var it = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  ot = typeof WeakRef < 'u' ? WeakRef : it,
  st = 0,
  me = 1;
function $() {
  return { s: st, v: void 0, o: null, p: null };
}
function ue(e, t = {}) {
  let r = $();
  const { resultEqualityCheck: n } = t;
  let i,
    o = 0;
  function s() {
    var l;
    let c = r;
    const { length: f } = arguments;
    for (let p = 0, _ = f; p < _; p++) {
      const w = arguments[p];
      if (typeof w == 'function' || (typeof w == 'object' && w !== null)) {
        let b = c.o;
        b === null && (c.o = b = new WeakMap());
        const y = b.get(w);
        y === void 0 ? ((c = $()), b.set(w, c)) : (c = y);
      } else {
        let b = c.p;
        b === null && (c.p = b = new Map());
        const y = b.get(w);
        y === void 0 ? ((c = $()), b.set(w, c)) : (c = y);
      }
    }
    const a = c;
    let u;
    if (c.s === me) u = c.v;
    else if (((u = e.apply(null, arguments)), o++, n)) {
      const p =
        ((l = i == null ? void 0 : i.deref) == null ? void 0 : l.call(i)) ?? i;
      p != null && n(p, u) && ((u = p), o !== 0 && o--),
        (i =
          (typeof u == 'object' && u !== null) || typeof u == 'function'
            ? new ot(u)
            : u);
    }
    return (a.s = me), (a.v = u), u;
  }
  return (
    (s.clearCache = () => {
      (r = $()), s.resetResultsCount();
    }),
    (s.resultsCount = () => o),
    (s.resetResultsCount = () => {
      o = 0;
    }),
    s
  );
}
function Me(e, ...t) {
  const r = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    n = (...i) => {
      let o = 0,
        s = 0,
        c,
        f = {},
        a = i.pop();
      typeof a == 'object' && ((f = a), (a = i.pop())),
        Ve(
          a,
          `createSelector expects an output function after the inputs, but received: [${typeof a}]`,
        );
      const u = { ...r, ...f },
        {
          memoize: l,
          memoizeOptions: p = [],
          argsMemoize: _ = ue,
          argsMemoizeOptions: w = [],
          devModeChecks: b = {},
        } = u,
        y = _e(p),
        E = _e(w),
        C = rt(i),
        d = l(
          function () {
            return o++, a.apply(null, arguments);
          },
          ...y,
        ),
        h = _(
          function () {
            s++;
            const T = nt(C, arguments);
            return (c = d.apply(null, T)), c;
          },
          ...E,
        );
      return Object.assign(h, {
        resultFunc: a,
        memoizedResultFunc: d,
        dependencies: C,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => c,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: l,
        argsMemoize: _,
      });
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var ct = Me(ue),
  ut = Object.assign(
    (e, t = ct) => {
      et(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const r = Object.keys(e),
        n = r.map((o) => e[o]);
      return t(n, (...o) => o.reduce((s, c, f) => ((s[r[f]] = c), s), {}));
    },
    { withTypes: () => ut },
  );
function De(e) {
  return ({ dispatch: r, getState: n }) =>
    (i) =>
    (o) =>
      typeof o == 'function' ? o(r, n, e) : i(o);
}
var ft = De(),
  at = De,
  lt = (...e) => {
    const t = Me(...e),
      r = Object.assign(
        (...n) => {
          const i = t(...n),
            o = (s, ...c) => i(D(s) ? Pe(s) : s, ...c);
          return Object.assign(o, i), o;
        },
        { withTypes: () => r },
      );
    return r;
  };
lt(ue);
var dt =
  typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == 'object' ? W : W.apply(null, arguments);
      };
function j(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(S(0));
      return {
        type: e,
        payload: i.payload,
        ...('meta' in i && { meta: i.meta }),
        ...('error' in i && { error: i.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (n) => Ke(n) && n.type === e),
    r
  );
}
var Ae = class I extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, I.prototype);
  }
  static get [Symbol.species]() {
    return I;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new I(...t[0].concat(this))
      : new I(...t.concat(this));
  }
};
function ge(e) {
  return M(e) ? ke(e, () => {}) : e;
}
function be(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && ((i = r.update(i, t, e)), e.set(t, i)), i;
  }
  if (!r.insert) throw new Error(S(10));
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function pt(e) {
  return typeof e == 'boolean';
}
var yt = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let s = new Ae();
      return r && (pt(r) ? s.push(ft) : s.push(at(r.extraArgument))), s;
    },
  ht = 'RTK_autoBatch',
  Ne = (e) => (t) => {
    setTimeout(t, e);
  },
  wt =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Ne(10),
  _t =
    (e = { type: 'raf' }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let i = !0,
        o = !1,
        s = !1;
      const c = new Set(),
        f =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
              ? wt
              : e.type === 'callback'
                ? e.queueNotification
                : Ne(e.timeout),
        a = () => {
          (s = !1), o && ((o = !1), c.forEach((u) => u()));
        };
      return Object.assign({}, n, {
        subscribe(u) {
          const l = () => i && u(),
            p = n.subscribe(l);
          return (
            c.add(u),
            () => {
              p(), c.delete(u);
            }
          );
        },
        dispatch(u) {
          var l;
          try {
            return (
              (i = !((l = u == null ? void 0 : u.meta) != null && l[ht])),
              (o = !i),
              o && (s || ((s = !0), f(a))),
              n.dispatch(u)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  mt = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let i = new Ae(e);
      return n && i.push(_t(typeof n == 'object' ? n : void 0)), i;
    },
  gt = !0;
function Bt(e) {
  const t = yt(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {};
  let c;
  if (typeof r == 'function') c = r;
  else if (oe(r)) c = Be(r);
  else throw new Error(S(1));
  let f;
  typeof n == 'function' ? (f = n(t)) : (f = t());
  let a = W;
  i && (a = dt({ trace: !gt, ...(typeof i == 'object' && i) }));
  const u = We(...f),
    l = mt(u);
  let p = typeof s == 'function' ? s(l) : l();
  const _ = a(...p);
  return Ee(c, o, _);
}
function ze(e) {
  const t = {},
    r = [];
  let n;
  const i = {
    addCase(o, s) {
      const c = typeof o == 'string' ? o : o.type;
      if (!c) throw new Error(S(28));
      if (c in t) throw new Error(S(29));
      return (t[c] = s), i;
    },
    addMatcher(o, s) {
      return r.push({ matcher: o, reducer: s }), i;
    },
    addDefaultCase(o) {
      return (n = o), i;
    },
  };
  return e(i), [t, r, n];
}
function bt(e) {
  return typeof e == 'function';
}
function Et(e, t) {
  let [r, n, i] = ze(t),
    o;
  if (bt(e)) o = () => ge(e());
  else {
    const c = ge(e);
    o = () => c;
  }
  function s(c = o(), f) {
    let a = [
      r[f.type],
      ...n.filter(({ matcher: u }) => u(f)).map(({ reducer: u }) => u),
    ];
    return (
      a.filter((u) => !!u).length === 0 && (a = [i]),
      a.reduce((u, l) => {
        if (l)
          if (D(u)) {
            const _ = l(u, f);
            return _ === void 0 ? u : _;
          } else {
            if (M(u)) return ke(u, (p) => l(p, f));
            {
              const p = l(u, f);
              if (p === void 0) {
                if (u === null) return u;
                throw new Error(S(9));
              }
              return p;
            }
          }
        return u;
      }, c)
    );
  }
  return (s.getInitialState = o), s;
}
var vt = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  St = (e = 21) => {
    let t = '',
      r = e;
    for (; r--; ) t += vt[(Math.random() * 64) | 0];
    return t;
  },
  Ct = Symbol.for('rtk-slice-createasyncthunk');
function Ot(e, t) {
  return `${e}/${t}`;
}
function Rt({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[Ct];
  return function (i) {
    const { name: o, reducerPath: s = o } = i;
    if (!o) throw new Error(S(11));
    typeof process < 'u';
    const c =
        (typeof i.reducers == 'function' ? i.reducers(kt()) : i.reducers) || {},
      f = Object.keys(c),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      u = {
        addCase(d, h) {
          const g = typeof d == 'string' ? d : d.type;
          if (!g) throw new Error(S(12));
          if (g in a.sliceCaseReducersByType) throw new Error(S(13));
          return (a.sliceCaseReducersByType[g] = h), u;
        },
        addMatcher(d, h) {
          return a.sliceMatchers.push({ matcher: d, reducer: h }), u;
        },
        exposeAction(d, h) {
          return (a.actionCreators[d] = h), u;
        },
        exposeCaseReducer(d, h) {
          return (a.sliceCaseReducersByName[d] = h), u;
        },
      };
    f.forEach((d) => {
      const h = c[d],
        g = {
          reducerName: d,
          type: Ot(o, d),
          createNotation: typeof i.reducers == 'function',
        };
      Dt(h) ? Nt(g, h, u, t) : Mt(g, h, u);
    });
    function l() {
      const [d = {}, h = [], g = void 0] =
          typeof i.extraReducers == 'function'
            ? ze(i.extraReducers)
            : [i.extraReducers],
        T = { ...d, ...a.sliceCaseReducersByType };
      return Et(i.initialState, (k) => {
        for (let v in T) k.addCase(v, T[v]);
        for (let v of a.sliceMatchers) k.addMatcher(v.matcher, v.reducer);
        for (let v of h) k.addMatcher(v.matcher, v.reducer);
        g && k.addDefaultCase(g);
      });
    }
    const p = (d) => d,
      _ = new Map();
    let w;
    function b(d, h) {
      return w || (w = l()), w(d, h);
    }
    function y() {
      return w || (w = l()), w.getInitialState();
    }
    function E(d, h = !1) {
      function g(k) {
        let v = k[d];
        return typeof v > 'u' && h && (v = y()), v;
      }
      function T(k = p) {
        const v = be(_, h, { insert: () => new WeakMap() });
        return be(v, k, {
          insert: () => {
            const ae = {};
            for (const [Ie, xe] of Object.entries(i.selectors ?? {}))
              ae[Ie] = Pt(xe, k, y, h);
            return ae;
          },
        });
      }
      return {
        reducerPath: d,
        getSelectors: T,
        get selectors() {
          return T(g);
        },
        selectSlice: g,
      };
    }
    const C = {
      name: o,
      reducer: b,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: y,
      ...E(s),
      injectInto(d, { reducerPath: h, ...g } = {}) {
        const T = h ?? s;
        return (
          d.inject({ reducerPath: T, reducer: b }, g), { ...C, ...E(T, !0) }
        );
      },
    };
    return C;
  };
}
function Pt(e, t, r, n) {
  function i(o, ...s) {
    let c = t(o);
    return typeof c > 'u' && n && (c = r()), e(c, ...s);
  }
  return (i.unwrapped = e), i;
}
var Tt = Rt();
function kt() {
  function e(t, r) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            },
          }[t.name],
          { _reducerDefinitionType: 'reducer' },
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: t,
          reducer: r,
        };
      },
      asyncThunk: e,
    }
  );
}
function Mt({ type: e, reducerName: t, createNotation: r }, n, i) {
  let o, s;
  if ('reducer' in n) {
    if (r && !At(n)) throw new Error(S(17));
    (o = n.reducer), (s = n.prepare);
  } else o = n;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, s ? j(e, s) : j(e));
}
function Dt(e) {
  return e._reducerDefinitionType === 'asyncThunk';
}
function At(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare';
}
function Nt({ type: e, reducerName: t }, r, n, i) {
  if (!i) throw new Error(S(18));
  const {
      payloadCreator: o,
      fulfilled: s,
      pending: c,
      rejected: f,
      settled: a,
      options: u,
    } = r,
    l = i(e, o, u);
  n.exposeAction(t, l),
    s && n.addCase(l.fulfilled, s),
    c && n.addCase(l.pending, c),
    f && n.addCase(l.rejected, f),
    a && n.addMatcher(l.settled, a),
    n.exposeCaseReducer(t, {
      fulfilled: s || L,
      pending: c || L,
      rejected: f || L,
      settled: a || L,
    });
}
function L() {}
var zt = (e, t) => {
    if (typeof e != 'function') throw new Error(S(32));
  },
  fe = 'listenerMiddleware',
  jt = (e) => {
    let { type: t, actionCreator: r, matcher: n, predicate: i, effect: o } = e;
    if (t) i = j(t).match;
    else if (r) (t = r.type), (i = r.match);
    else if (n) i = n;
    else if (!i) throw new Error(S(21));
    return zt(o), { predicate: i, type: t, effect: o };
  },
  It = Object.assign(
    (e) => {
      const { type: t, predicate: r, effect: n } = jt(e);
      return {
        id: St(),
        effect: n,
        type: t,
        predicate: r,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(S(22));
        },
      };
    },
    { withTypes: () => It },
  ),
  xt = Object.assign(j(`${fe}/add`), { withTypes: () => xt });
j(`${fe}/removeAll`);
var Ft = Object.assign(j(`${fe}/remove`), { withTypes: () => Ft });
function S(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const $t = (e, t) => {
    try {
      const r = JSON.stringify(t);
      localStorage.setItem(e, r);
    } catch (r) {
      throw new Error(`error ${r}`);
    }
  },
  Lt = { restLinks: [] },
  je = Tt({
    name: 'rest-links',
    initialState: Lt,
    reducers: {
      addRestLinks: (e, t) => {
        e.restLinks.push(...t.payload), $t('restfull', e.restLinks);
      },
    },
  }),
  { addRestLinks: Wt } = je.actions,
  Kt = je.reducer;
export { Bt as a, Wt as b, Tt as c, Kt as r, $t as s };