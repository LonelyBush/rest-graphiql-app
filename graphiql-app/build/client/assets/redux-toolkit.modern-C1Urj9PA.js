function _(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ae = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  ue = Ae,
  H = () => Math.random().toString(36).substring(7).split('').join('.'),
  Me = {
    INIT: `@@redux/INIT${H()}`,
    REPLACE: `@@redux/REPLACE${H()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${H()}`,
  },
  j = Me;
function ne(e) {
  if (typeof e != 'object' || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function _e(e, t, r) {
  if (typeof e != 'function') throw new Error(_(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(_(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(_(1));
    return r(_e)(e, t);
  }
  let n = e,
    i = t,
    o = new Map(),
    c = o,
    u = 0,
    f = !1;
  function a() {
    c === o &&
      ((c = new Map()),
      o.forEach((h, C) => {
        c.set(C, h);
      }));
  }
  function s() {
    if (f) throw new Error(_(3));
    return i;
  }
  function l(h) {
    if (typeof h != 'function') throw new Error(_(4));
    if (f) throw new Error(_(5));
    let C = !0;
    a();
    const v = u++;
    return (
      c.set(v, h),
      function () {
        if (C) {
          if (f) throw new Error(_(6));
          (C = !1), a(), c.delete(v), (o = null);
        }
      }
    );
  }
  function p(h) {
    if (!ne(h)) throw new Error(_(7));
    if (typeof h.type > 'u') throw new Error(_(8));
    if (typeof h.type != 'string') throw new Error(_(17));
    if (f) throw new Error(_(9));
    try {
      (f = !0), (i = n(i, h));
    } finally {
      f = !1;
    }
    return (
      (o = c).forEach((v) => {
        v();
      }),
      h
    );
  }
  function P(h) {
    if (typeof h != 'function') throw new Error(_(10));
    (n = h), p({ type: j.REPLACE });
  }
  function E() {
    const h = l;
    return {
      subscribe(C) {
        if (typeof C != 'object' || C === null) throw new Error(_(11));
        function v() {
          const y = C;
          y.next && y.next(s());
        }
        return v(), { unsubscribe: h(v) };
      },
      [ue]() {
        return this;
      },
    };
  }
  return (
    p({ type: j.INIT }),
    { dispatch: p, subscribe: l, getState: s, replaceReducer: P, [ue]: E }
  );
}
function ke(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: j.INIT }) > 'u') throw new Error(_(12));
    if (typeof r(void 0, { type: j.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(_(13));
  });
}
function ze(e) {
  const t = Object.keys(e),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const c = t[o];
    typeof e[c] == 'function' && (r[c] = e[c]);
  }
  const n = Object.keys(r);
  let i;
  try {
    ke(r);
  } catch (o) {
    i = o;
  }
  return function (c = {}, u) {
    if (i) throw i;
    let f = !1;
    const a = {};
    for (let s = 0; s < n.length; s++) {
      const l = n[s],
        p = r[l],
        P = c[l],
        E = p(P, u);
      if (typeof E > 'u') throw (u && u.type, new Error(_(14)));
      (a[l] = E), (f = f || E !== P);
    }
    return (f = f || n.length !== Object.keys(c).length), f ? a : c;
  };
}
function B(...e) {
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
function Ne(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let o = () => {
      throw new Error(_(15));
    };
    const c = { getState: i.getState, dispatch: (f, ...a) => o(f, ...a) },
      u = e.map((f) => f(c));
    return (o = B(...u)(i.dispatch)), { ...i, dispatch: o };
  };
}
function xe(e) {
  return ne(e) && 'type' in e && typeof e.type == 'string';
}
var we = Symbol.for('immer-nothing'),
  se = Symbol.for('immer-draftable'),
  g = Symbol.for('immer-state');
function S(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var z = Object.getPrototypeOf;
function M(e) {
  return !!e && !!e[g];
}
function T(e) {
  var t;
  return e
    ? me(e) ||
        Array.isArray(e) ||
        !!e[se] ||
        !!((t = e.constructor) != null && t[se]) ||
        W(e) ||
        q(e)
    : !1;
}
var Fe = Object.prototype.constructor.toString();
function me(e) {
  if (!e || typeof e != 'object') return !1;
  const t = z(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object
    ? !0
    : typeof r == 'function' && Function.toString.call(r) === Fe;
}
function $(e, t) {
  L(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function L(e) {
  const t = e[g];
  return t ? t.type_ : Array.isArray(e) ? 1 : W(e) ? 2 : q(e) ? 3 : 0;
}
function J(e, t) {
  return L(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ge(e, t, r) {
  const n = L(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function Ie(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function W(e) {
  return e instanceof Map;
}
function q(e) {
  return e instanceof Set;
}
function A(e) {
  return e.copy_ || e.base_;
}
function Z(e, t) {
  if (W(e)) return new Map(e);
  if (q(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = me(e);
  if (t === !0 || (t === 'class_only' && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[g];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const c = i[o],
        u = n[c];
      u.writable === !1 && ((u.writable = !0), (u.configurable = !0)),
        (u.get || u.set) &&
          (n[c] = {
            configurable: !0,
            writable: !0,
            enumerable: u.enumerable,
            value: e[c],
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
function ie(e, t = !1) {
  return (
    X(e) ||
      M(e) ||
      !T(e) ||
      (L(e) > 1 && (e.set = e.add = e.clear = e.delete = je),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => ie(n, !0))),
    e
  );
}
function je() {
  S(2);
}
function X(e) {
  return Object.isFrozen(e);
}
var Be = {};
function k(e) {
  const t = Be[e];
  return t || S(0, e), t;
}
var x;
function be() {
  return x;
}
function $e(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function fe(e, t) {
  t &&
    (k('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function V(e) {
  ee(e), e.drafts_.forEach(Ke), (e.drafts_ = null);
}
function ee(e) {
  e === x && (x = e.parent_);
}
function ae(e) {
  return (x = $e(x, e));
}
function Ke(e) {
  const t = e[g];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function le(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[g].modified_ && (V(t), S(4)),
        T(e) && ((e = K(t, e)), t.parent_ || U(t, e)),
        t.patches_ &&
          k('Patches').generateReplacementPatches_(
            r[g].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = K(t, r, [])),
    V(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== we ? e : void 0
  );
}
function K(e, t, r) {
  if (X(t)) return t;
  const n = t[g];
  if (!n) return $(t, (i, o) => de(e, n, t, i, o, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return U(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let o = i,
      c = !1;
    n.type_ === 3 && ((o = new Set(i)), i.clear(), (c = !0)),
      $(o, (u, f) => de(e, n, i, u, f, r, c)),
      U(e, i, !1),
      r &&
        e.patches_ &&
        k('Patches').generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function de(e, t, r, n, i, o, c) {
  if (M(i)) {
    const u =
        o && t && t.type_ !== 3 && !J(t.assigned_, n) ? o.concat(n) : void 0,
      f = K(e, i, u);
    if ((ge(r, n, f), M(f))) e.canAutoFreeze_ = !1;
    else return;
  } else c && r.add(i);
  if (T(i) && !X(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    K(e, i),
      (!t || !t.scope_.parent_) &&
        typeof n != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        U(e, i);
  }
}
function U(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ie(t, r);
}
function Ue(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : be(),
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
    o = oe;
  r && ((i = [n]), (o = F));
  const { revoke: c, proxy: u } = Proxy.revocable(i, o);
  return (n.draft_ = u), (n.revoke_ = c), u;
}
var oe = {
    get(e, t) {
      if (t === g) return e;
      const r = A(e);
      if (!J(r, t)) return Le(e, r, t);
      const n = r[t];
      return e.finalized_ || !T(n)
        ? n
        : n === Q(e.base_, t)
          ? (Y(e), (e.copy_[t] = re(n, e)))
          : n;
    },
    has(e, t) {
      return t in A(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(A(e));
    },
    set(e, t, r) {
      const n = Ee(A(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const i = Q(A(e), t),
          o = i == null ? void 0 : i[g];
        if (o && o.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (Ie(r, i) && (r !== void 0 || J(e.base_, t))) return !0;
        Y(e), te(e);
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
        Q(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Y(e), te(e))
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
      S(11);
    },
    getPrototypeOf(e) {
      return z(e.base_);
    },
    setPrototypeOf() {
      S(12);
    },
  },
  F = {};
$(oe, (e, t) => {
  F[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
F.deleteProperty = function (e, t) {
  return F.set.call(this, e, t, void 0);
};
F.set = function (e, t, r) {
  return oe.set.call(this, e[0], t, r, e[0]);
};
function Q(e, t) {
  const r = e[g];
  return (r ? A(r) : e)[t];
}
function Le(e, t, r) {
  var i;
  const n = Ee(t, r);
  return n
    ? 'value' in n
      ? n.value
      : (i = n.get) == null
        ? void 0
        : i.call(e.draft_)
    : void 0;
}
function Ee(e, t) {
  if (!(t in e)) return;
  let r = z(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = z(r);
  }
}
function te(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && te(e.parent_));
}
function Y(e) {
  e.copy_ || (e.copy_ = Z(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var We = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == 'function' && typeof r != 'function') {
          const o = r;
          r = t;
          const c = this;
          return function (f = o, ...a) {
            return c.produce(f, (s) => r.call(this, s, ...a));
          };
        }
        typeof r != 'function' && S(6),
          n !== void 0 && typeof n != 'function' && S(7);
        let i;
        if (T(t)) {
          const o = ae(this),
            c = re(t, void 0);
          let u = !0;
          try {
            (i = r(c)), (u = !1);
          } finally {
            u ? V(o) : ee(o);
          }
          return fe(o, n), le(i, o);
        } else if (!t || typeof t != 'object') {
          if (
            ((i = r(t)),
            i === void 0 && (i = t),
            i === we && (i = void 0),
            this.autoFreeze_ && ie(i, !0),
            n)
          ) {
            const o = [],
              c = [];
            k('Patches').generateReplacementPatches_(t, i, o, c), n(o, c);
          }
          return i;
        } else S(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == 'function')
          return (c, ...u) => this.produceWithPatches(c, (f) => t(f, ...u));
        let n, i;
        return [
          this.produce(t, r, (c, u) => {
            (n = c), (i = u);
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
    T(e) || S(8), M(e) && (e = qe(e));
    const t = ae(this),
      r = re(e, void 0);
    return (r[g].isManual_ = !0), ee(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[g];
    (!r || !r.isManual_) && S(9);
    const { scope_: n } = r;
    return fe(n, t), le(void 0, n);
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
    const n = k('Patches').applyPatches_;
    return M(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
  }
};
function re(e, t) {
  const r = W(e)
    ? k('MapSet').proxyMap_(e, t)
    : q(e)
      ? k('MapSet').proxySet_(e, t)
      : Ue(e, t);
  return (t ? t.scope_ : be()).drafts_.push(r), r;
}
function qe(e) {
  return M(e) || S(10, e), Ce(e);
}
function Ce(e) {
  if (!T(e) || X(e)) return e;
  const t = e[g];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = Z(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = Z(e, !0);
  return (
    $(r, (n, i) => {
      ge(r, n, Ce(i));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var b = new We(),
  Pe = b.produce;
b.produceWithPatches.bind(b);
b.setAutoFreeze.bind(b);
b.setUseStrictShallowCopy.bind(b);
b.applyPatches.bind(b);
b.createDraft.bind(b);
b.finishDraft.bind(b);
function Se(e) {
  return ({ dispatch: r, getState: n }) =>
    (i) =>
    (o) =>
      typeof o == 'function' ? o(r, n, e) : i(o);
}
var Xe = Se(),
  Ge = Se,
  He =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? B
              : B.apply(null, arguments);
        };
function ye(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(O(0));
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
    (r.match = (n) => xe(n) && n.type === e),
    r
  );
}
var Oe = class N extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, N.prototype);
  }
  static get [Symbol.species]() {
    return N;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new N(...t[0].concat(this))
      : new N(...t.concat(this));
  }
};
function he(e) {
  return T(e) ? Pe(e, () => {}) : e;
}
function pe(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && ((i = r.update(i, t, e)), e.set(t, i)), i;
  }
  if (!r.insert) throw new Error(O(10));
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function Qe(e) {
  return typeof e == 'boolean';
}
var Ye = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let c = new Oe();
      return r && (Qe(r) ? c.push(Xe) : c.push(Ge(r.extraArgument))), c;
    },
  Je = 'RTK_autoBatch',
  ve = (e) => (t) => {
    setTimeout(t, e);
  },
  Ze =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : ve(10),
  Ve =
    (e = { type: 'raf' }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let i = !0,
        o = !1,
        c = !1;
      const u = new Set(),
        f =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
              ? Ze
              : e.type === 'callback'
                ? e.queueNotification
                : ve(e.timeout),
        a = () => {
          (c = !1), o && ((o = !1), u.forEach((s) => s()));
        };
      return Object.assign({}, n, {
        subscribe(s) {
          const l = () => i && s(),
            p = n.subscribe(l);
          return (
            u.add(s),
            () => {
              p(), u.delete(s);
            }
          );
        },
        dispatch(s) {
          var l;
          try {
            return (
              (i = !((l = s == null ? void 0 : s.meta) != null && l[Je])),
              (o = !i),
              o && (c || ((c = !0), f(a))),
              n.dispatch(s)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  et = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let i = new Oe(e);
      return n && i.push(Ve(typeof n == 'object' ? n : void 0)), i;
    };
function dt(e) {
  const t = Ye(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: c = void 0,
    } = e || {};
  let u;
  if (typeof r == 'function') u = r;
  else if (ne(r)) u = ze(r);
  else throw new Error(O(1));
  let f;
  typeof n == 'function' ? (f = n(t)) : (f = t());
  let a = B;
  i && (a = He({ trace: !1, ...(typeof i == 'object' && i) }));
  const s = Ne(...f),
    l = et(s);
  let p = typeof c == 'function' ? c(l) : l();
  const P = a(...p);
  return _e(u, o, P);
}
function Re(e) {
  const t = {},
    r = [];
  let n;
  const i = {
    addCase(o, c) {
      const u = typeof o == 'string' ? o : o.type;
      if (!u) throw new Error(O(28));
      if (u in t) throw new Error(O(29));
      return (t[u] = c), i;
    },
    addMatcher(o, c) {
      return r.push({ matcher: o, reducer: c }), i;
    },
    addDefaultCase(o) {
      return (n = o), i;
    },
  };
  return e(i), [t, r, n];
}
function tt(e) {
  return typeof e == 'function';
}
function rt(e, t) {
  let [r, n, i] = Re(t),
    o;
  if (tt(e)) o = () => he(e());
  else {
    const u = he(e);
    o = () => u;
  }
  function c(u = o(), f) {
    let a = [
      r[f.type],
      ...n.filter(({ matcher: s }) => s(f)).map(({ reducer: s }) => s),
    ];
    return (
      a.filter((s) => !!s).length === 0 && (a = [i]),
      a.reduce((s, l) => {
        if (l)
          if (M(s)) {
            const P = l(s, f);
            return P === void 0 ? s : P;
          } else {
            if (T(s)) return Pe(s, (p) => l(p, f));
            {
              const p = l(s, f);
              if (p === void 0) {
                if (s === null) return s;
                throw new Error(O(9));
              }
              return p;
            }
          }
        return s;
      }, u)
    );
  }
  return (c.getInitialState = o), c;
}
var nt = Symbol.for('rtk-slice-createasyncthunk');
function it(e, t) {
  return `${e}/${t}`;
}
function ot({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[nt];
  return function (i) {
    const { name: o, reducerPath: c = o } = i;
    if (!o) throw new Error(O(11));
    typeof process < 'u';
    const u =
        (typeof i.reducers == 'function' ? i.reducers(ut()) : i.reducers) || {},
      f = Object.keys(u),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      s = {
        addCase(d, y) {
          const w = typeof d == 'string' ? d : d.type;
          if (!w) throw new Error(O(12));
          if (w in a.sliceCaseReducersByType) throw new Error(O(13));
          return (a.sliceCaseReducersByType[w] = y), s;
        },
        addMatcher(d, y) {
          return a.sliceMatchers.push({ matcher: d, reducer: y }), s;
        },
        exposeAction(d, y) {
          return (a.actionCreators[d] = y), s;
        },
        exposeCaseReducer(d, y) {
          return (a.sliceCaseReducersByName[d] = y), s;
        },
      };
    f.forEach((d) => {
      const y = u[d],
        w = {
          reducerName: d,
          type: it(o, d),
          createNotation: typeof i.reducers == 'function',
        };
      ft(y) ? lt(w, y, s, t) : st(w, y, s);
    });
    function l() {
      const [d = {}, y = [], w = void 0] =
          typeof i.extraReducers == 'function'
            ? Re(i.extraReducers)
            : [i.extraReducers],
        D = { ...d, ...a.sliceCaseReducersByType };
      return rt(i.initialState, (R) => {
        for (let m in D) R.addCase(m, D[m]);
        for (let m of a.sliceMatchers) R.addMatcher(m.matcher, m.reducer);
        for (let m of y) R.addMatcher(m.matcher, m.reducer);
        w && R.addDefaultCase(w);
      });
    }
    const p = (d) => d,
      P = new Map();
    let E;
    function G(d, y) {
      return E || (E = l()), E(d, y);
    }
    function h() {
      return E || (E = l()), E.getInitialState();
    }
    function C(d, y = !1) {
      function w(R) {
        let m = R[d];
        return typeof m > 'u' && y && (m = h()), m;
      }
      function D(R = p) {
        const m = pe(P, y, { insert: () => new WeakMap() });
        return pe(m, R, {
          insert: () => {
            const ce = {};
            for (const [Te, De] of Object.entries(i.selectors ?? {}))
              ce[Te] = ct(De, R, h, y);
            return ce;
          },
        });
      }
      return {
        reducerPath: d,
        getSelectors: D,
        get selectors() {
          return D(w);
        },
        selectSlice: w,
      };
    }
    const v = {
      name: o,
      reducer: G,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: h,
      ...C(c),
      injectInto(d, { reducerPath: y, ...w } = {}) {
        const D = y ?? c;
        return (
          d.inject({ reducerPath: D, reducer: G }, w), { ...v, ...C(D, !0) }
        );
      },
    };
    return v;
  };
}
function ct(e, t, r, n) {
  function i(o, ...c) {
    let u = t(o);
    return typeof u > 'u' && n && (u = r()), e(u, ...c);
  }
  return (i.unwrapped = e), i;
}
var yt = ot();
function ut() {
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
function st({ type: e, reducerName: t, createNotation: r }, n, i) {
  let o, c;
  if ('reducer' in n) {
    if (r && !at(n)) throw new Error(O(17));
    (o = n.reducer), (c = n.prepare);
  } else o = n;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, c ? ye(e, c) : ye(e));
}
function ft(e) {
  return e._reducerDefinitionType === 'asyncThunk';
}
function at(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare';
}
function lt({ type: e, reducerName: t }, r, n, i) {
  if (!i) throw new Error(O(18));
  const {
      payloadCreator: o,
      fulfilled: c,
      pending: u,
      rejected: f,
      settled: a,
      options: s,
    } = r,
    l = i(e, o, s);
  n.exposeAction(t, l),
    c && n.addCase(l.fulfilled, c),
    u && n.addCase(l.pending, u),
    f && n.addCase(l.rejected, f),
    a && n.addMatcher(l.settled, a),
    n.exposeCaseReducer(t, {
      fulfilled: c || I,
      pending: u || I,
      rejected: f || I,
      settled: a || I,
    });
}
function I() {}
function O(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
export { dt as a, yt as c };