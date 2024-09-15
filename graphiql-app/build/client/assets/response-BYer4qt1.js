import { r as c, R as T, j } from './index-wWMGXTih.js';
import { G as Oe } from './iconBase-QCAFBzlY.js';
import { u as je } from './button-CmpeQtVi.js';
function Me(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ie(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ie(Object(r), !0).forEach(function (n) {
          Me(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ie(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Se(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ee(e, t) {
  if (e == null) return {};
  var r = Se(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Pe(e, t) {
  return Re(e) || Le(e, t) || xe(e, t) || Ie();
}
function Re(e) {
  if (Array.isArray(e)) return e;
}
function Le(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      o = !1,
      i = void 0;
    try {
      for (
        var l = e[Symbol.iterator](), p;
        !(n = (p = l.next()).done) && (r.push(p.value), !(t && r.length === t));
        n = !0
      );
    } catch (h) {
      (o = !0), (i = h);
    } finally {
      try {
        !n && l.return != null && l.return();
      } finally {
        if (o) throw i;
      }
    }
    return r;
  }
}
function xe(e, t) {
  if (e) {
    if (typeof e == 'string') return ce(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ce(e, t);
  }
}
function ce(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ie() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ce(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ue(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ue(Object(r), !0).forEach(function (n) {
          Ce(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ue(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ae() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return t.reduceRight(function (o, i) {
      return i(o);
    }, n);
  };
}
function k(e) {
  return function t() {
    for (
      var r = this, n = arguments.length, o = new Array(n), i = 0;
      i < n;
      i++
    )
      o[i] = arguments[i];
    return o.length >= e.length
      ? e.apply(this, o)
      : function () {
          for (var l = arguments.length, p = new Array(l), h = 0; h < l; h++)
            p[h] = arguments[h];
          return t.apply(r, [].concat(o, p));
        };
  };
}
function K(e) {
  return {}.toString.call(e).includes('Object');
}
function _e(e) {
  return !Object.keys(e).length;
}
function B(e) {
  return typeof e == 'function';
}
function Te(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function $e(e, t) {
  return (
    K(t) || P('changeType'),
    Object.keys(t).some(function (r) {
      return !Te(e, r);
    }) && P('changeField'),
    t
  );
}
function De(e) {
  B(e) || P('selectorType');
}
function Ve(e) {
  B(e) || K(e) || P('handlerType'),
    K(e) &&
      Object.values(e).some(function (t) {
        return !B(t);
      }) &&
      P('handlersType');
}
function Ne(e) {
  e || P('initialIsRequired'),
    K(e) || P('initialType'),
    _e(e) && P('initialContent');
}
function ze(e, t) {
  throw new Error(e[t] || e.default);
}
var ke = {
    initialIsRequired: 'initial state is required',
    initialType: 'initial state should be an object',
    initialContent: "initial state shouldn't be an empty object",
    handlerType: 'handler should be an object or a function',
    handlersType: 'all handlers should be a functions',
    selectorType: 'selector should be a function',
    changeType: 'provided value of changes should be an object',
    changeField:
      'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: 'an unknown error accured in `state-local` package',
  },
  P = k(ze)(ke),
  W = { changes: $e, selector: De, handler: Ve, initial: Ne };
function qe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  W.initial(e), W.handler(t);
  var r = { current: e },
    n = k(Fe)(r, t),
    o = k(Ue)(r),
    i = k(W.changes)(e),
    l = k(Be)(r);
  function p() {
    var y =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (L) {
            return L;
          };
    return W.selector(y), y(r.current);
  }
  function h(y) {
    Ae(n, o, i, l)(y);
  }
  return [p, h];
}
function Be(e, t) {
  return B(t) ? t(e.current) : t;
}
function Ue(e, t) {
  return (e.current = se(se({}, e.current), t)), t;
}
function Fe(e, t, r) {
  return (
    B(t)
      ? t(e.current)
      : Object.keys(r).forEach(function (n) {
          var o;
          return (o = t[n]) === null || o === void 0
            ? void 0
            : o.call(t, e.current[n]);
        }),
    r
  );
}
var He = { create: qe },
  We = {
    paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs' },
  };
function Ge(e) {
  return function t() {
    for (
      var r = this, n = arguments.length, o = new Array(n), i = 0;
      i < n;
      i++
    )
      o[i] = arguments[i];
    return o.length >= e.length
      ? e.apply(this, o)
      : function () {
          for (var l = arguments.length, p = new Array(l), h = 0; h < l; h++)
            p[h] = arguments[h];
          return t.apply(r, [].concat(o, p));
        };
  };
}
function Ke(e) {
  return {}.toString.call(e).includes('Object');
}
function Ye(e) {
  return (
    e || le('configIsRequired'),
    Ke(e) || le('configType'),
    e.urls ? (Je(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function Je() {
  console.warn(de.deprecation);
}
function Qe(e, t) {
  throw new Error(e[t] || e.default);
}
var de = {
    configIsRequired: 'the configuration object is required',
    configType: 'the configuration object should be an object',
    default: 'an unknown error accured in `@monaco-editor/loader` package',
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
  },
  le = Ge(Qe)(de),
  Xe = { config: Ye },
  Ze = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return function (o) {
      return r.reduceRight(function (i, l) {
        return l(i);
      }, o);
    };
  };
function pe(e, t) {
  return (
    Object.keys(t).forEach(function (r) {
      t[r] instanceof Object && e[r] && Object.assign(t[r], pe(e[r], t[r]));
    }),
    ae(ae({}, e), t)
  );
}
var et = { type: 'cancelation', msg: 'operation is manually canceled' };
function re(e) {
  var t = !1,
    r = new Promise(function (n, o) {
      e.then(function (i) {
        return t ? o(et) : n(i);
      }),
        e.catch(o);
    });
  return (
    (r.cancel = function () {
      return (t = !0);
    }),
    r
  );
}
var tt = He.create({
    config: We,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  ge = Pe(tt, 2),
  U = ge[0],
  Y = ge[1];
function rt(e) {
  var t = Xe.config(e),
    r = t.monaco,
    n = Ee(t, ['monaco']);
  Y(function (o) {
    return { config: pe(o.config, n), monaco: r };
  });
}
function nt() {
  var e = U(function (t) {
    var r = t.monaco,
      n = t.isInitialized,
      o = t.resolve;
    return { monaco: r, isInitialized: n, resolve: o };
  });
  if (!e.isInitialized) {
    if ((Y({ isInitialized: !0 }), e.monaco))
      return e.resolve(e.monaco), re(ne);
    if (window.monaco && window.monaco.editor)
      return he(window.monaco), e.resolve(window.monaco), re(ne);
    Ze(ot, at)(ct);
  }
  return re(ne);
}
function ot(e) {
  return document.body.appendChild(e);
}
function it(e) {
  var t = document.createElement('script');
  return e && (t.src = e), t;
}
function at(e) {
  var t = U(function (n) {
      var o = n.config,
        i = n.reject;
      return { config: o, reject: i };
    }),
    r = it(''.concat(t.config.paths.vs, '/loader.js'));
  return (
    (r.onload = function () {
      return e();
    }),
    (r.onerror = t.reject),
    r
  );
}
function ct() {
  var e = U(function (r) {
      var n = r.config,
        o = r.resolve,
        i = r.reject;
      return { config: n, resolve: o, reject: i };
    }),
    t = window.require;
  t.config(e.config),
    t(
      ['vs/editor/editor.main'],
      function (r) {
        he(r), e.resolve(r);
      },
      function (r) {
        e.reject(r);
      },
    );
}
function he(e) {
  U().monaco || Y({ monaco: e });
}
function ut() {
  return U(function (e) {
    var t = e.monaco;
    return t;
  });
}
var ne = new Promise(function (e, t) {
    return Y({ resolve: e, reject: t });
  }),
  ve = { config: rt, init: nt, __getMonacoInstance: ut },
  st = {
    wrapper: { display: 'flex', position: 'relative', textAlign: 'initial' },
    fullWidth: { width: '100%' },
    hide: { display: 'none' },
  },
  oe = st,
  lt = {
    container: {
      display: 'flex',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  ft = lt;
function dt({ children: e }) {
  return T.createElement('div', { style: ft.container }, e);
}
var pt = dt,
  gt = pt;
function ht({
  width: e,
  height: t,
  isEditorReady: r,
  loading: n,
  _ref: o,
  className: i,
  wrapperProps: l,
}) {
  return T.createElement(
    'section',
    { style: { ...oe.wrapper, width: e, height: t }, ...l },
    !r && T.createElement(gt, null, n),
    T.createElement('div', {
      ref: o,
      style: { ...oe.fullWidth, ...(!r && oe.hide) },
      className: i,
    }),
  );
}
var vt = ht,
  me = c.memo(vt);
function mt(e) {
  c.useEffect(e, []);
}
var be = mt;
function bt(e, t, r = !0) {
  let n = c.useRef(!0);
  c.useEffect(
    n.current || !r
      ? () => {
          n.current = !1;
        }
      : e,
    t,
  );
}
var M = bt;
function q() {}
function _(e, t, r, n) {
  return yt(e, n) || wt(e, t, r, n);
}
function yt(e, t) {
  return e.editor.getModel(ye(e, t));
}
function wt(e, t, r, n) {
  return e.editor.createModel(t, r, n ? ye(e, n) : void 0);
}
function ye(e, t) {
  return e.Uri.parse(t);
}
function Ot({
  original: e,
  modified: t,
  language: r,
  originalLanguage: n,
  modifiedLanguage: o,
  originalModelPath: i,
  modifiedModelPath: l,
  keepCurrentOriginalModel: p = !1,
  keepCurrentModifiedModel: h = !1,
  theme: y = 'light',
  loading: L = 'Loading...',
  options: S = {},
  height: J = '100%',
  width: Q = '100%',
  className: X,
  wrapperProps: Z = {},
  beforeMount: ee = q,
  onMount: te = q,
}) {
  let [w, $] = c.useState(!1),
    [R, v] = c.useState(!0),
    m = c.useRef(null),
    g = c.useRef(null),
    D = c.useRef(null),
    b = c.useRef(te),
    s = c.useRef(ee),
    x = c.useRef(!1);
  be(() => {
    let a = ve.init();
    return (
      a
        .then((f) => (g.current = f) && v(!1))
        .catch(
          (f) =>
            (f == null ? void 0 : f.type) !== 'cancelation' &&
            console.error('Monaco initialization: error:', f),
        ),
      () => (m.current ? V() : a.cancel())
    );
  }),
    M(
      () => {
        if (m.current && g.current) {
          let a = m.current.getOriginalEditor(),
            f = _(g.current, e || '', n || r || 'text', i || '');
          f !== a.getModel() && a.setModel(f);
        }
      },
      [i],
      w,
    ),
    M(
      () => {
        if (m.current && g.current) {
          let a = m.current.getModifiedEditor(),
            f = _(g.current, t || '', o || r || 'text', l || '');
          f !== a.getModel() && a.setModel(f);
        }
      },
      [l],
      w,
    ),
    M(
      () => {
        let a = m.current.getModifiedEditor();
        a.getOption(g.current.editor.EditorOption.readOnly)
          ? a.setValue(t || '')
          : t !== a.getValue() &&
            (a.executeEdits('', [
              {
                range: a.getModel().getFullModelRange(),
                text: t || '',
                forceMoveMarkers: !0,
              },
            ]),
            a.pushUndoStop());
      },
      [t],
      w,
    ),
    M(
      () => {
        var a, f;
        (f = (a = m.current) == null ? void 0 : a.getModel()) == null ||
          f.original.setValue(e || '');
      },
      [e],
      w,
    ),
    M(
      () => {
        let { original: a, modified: f } = m.current.getModel();
        g.current.editor.setModelLanguage(a, n || r || 'text'),
          g.current.editor.setModelLanguage(f, o || r || 'text');
      },
      [r, n, o],
      w,
    ),
    M(
      () => {
        var a;
        (a = g.current) == null || a.editor.setTheme(y);
      },
      [y],
      w,
    ),
    M(
      () => {
        var a;
        (a = m.current) == null || a.updateOptions(S);
      },
      [S],
      w,
    );
  let F = c.useCallback(() => {
      var E;
      if (!g.current) return;
      s.current(g.current);
      let a = _(g.current, e || '', n || r || 'text', i || ''),
        f = _(g.current, t || '', o || r || 'text', l || '');
      (E = m.current) == null || E.setModel({ original: a, modified: f });
    }, [r, t, o, e, n, i, l]),
    H = c.useCallback(() => {
      var a;
      !x.current &&
        D.current &&
        ((m.current = g.current.editor.createDiffEditor(D.current, {
          automaticLayout: !0,
          ...S,
        })),
        F(),
        (a = g.current) == null || a.editor.setTheme(y),
        $(!0),
        (x.current = !0));
    }, [S, y, F]);
  c.useEffect(() => {
    w && b.current(m.current, g.current);
  }, [w]),
    c.useEffect(() => {
      !R && !w && H();
    }, [R, w, H]);
  function V() {
    var f, E, I, N;
    let a = (f = m.current) == null ? void 0 : f.getModel();
    p || (E = a == null ? void 0 : a.original) == null || E.dispose(),
      h || (I = a == null ? void 0 : a.modified) == null || I.dispose(),
      (N = m.current) == null || N.dispose();
  }
  return T.createElement(me, {
    width: Q,
    height: J,
    isEditorReady: w,
    loading: L,
    _ref: D,
    className: X,
    wrapperProps: Z,
  });
}
var jt = Ot;
c.memo(jt);
function Mt(e) {
  let t = c.useRef();
  return (
    c.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var St = Mt,
  G = new Map();
function Et({
  defaultValue: e,
  defaultLanguage: t,
  defaultPath: r,
  value: n,
  language: o,
  path: i,
  theme: l = 'light',
  line: p,
  loading: h = 'Loading...',
  options: y = {},
  overrideServices: L = {},
  saveViewState: S = !0,
  keepCurrentModel: J = !1,
  width: Q = '100%',
  height: X = '100%',
  className: Z,
  wrapperProps: ee = {},
  beforeMount: te = q,
  onMount: w = q,
  onChange: $,
  onValidate: R = q,
}) {
  let [v, m] = c.useState(!1),
    [g, D] = c.useState(!0),
    b = c.useRef(null),
    s = c.useRef(null),
    x = c.useRef(null),
    F = c.useRef(w),
    H = c.useRef(te),
    V = c.useRef(),
    a = c.useRef(n),
    f = St(i),
    E = c.useRef(!1),
    I = c.useRef(!1);
  be(() => {
    let u = ve.init();
    return (
      u
        .then((d) => (b.current = d) && D(!1))
        .catch(
          (d) =>
            (d == null ? void 0 : d.type) !== 'cancelation' &&
            console.error('Monaco initialization: error:', d),
        ),
      () => (s.current ? we() : u.cancel())
    );
  }),
    M(
      () => {
        var d, O, z, C;
        let u = _(b.current, e || n || '', t || o || '', i || r || '');
        u !== ((d = s.current) == null ? void 0 : d.getModel()) &&
          (S && G.set(f, (O = s.current) == null ? void 0 : O.saveViewState()),
          (z = s.current) == null || z.setModel(u),
          S && ((C = s.current) == null || C.restoreViewState(G.get(i))));
      },
      [i],
      v,
    ),
    M(
      () => {
        var u;
        (u = s.current) == null || u.updateOptions(y);
      },
      [y],
      v,
    ),
    M(
      () => {
        !s.current ||
          n === void 0 ||
          (s.current.getOption(b.current.editor.EditorOption.readOnly)
            ? s.current.setValue(n)
            : n !== s.current.getValue() &&
              ((I.current = !0),
              s.current.executeEdits('', [
                {
                  range: s.current.getModel().getFullModelRange(),
                  text: n,
                  forceMoveMarkers: !0,
                },
              ]),
              s.current.pushUndoStop(),
              (I.current = !1)));
      },
      [n],
      v,
    ),
    M(
      () => {
        var d, O;
        let u = (d = s.current) == null ? void 0 : d.getModel();
        u && o && ((O = b.current) == null || O.editor.setModelLanguage(u, o));
      },
      [o],
      v,
    ),
    M(
      () => {
        var u;
        p !== void 0 && ((u = s.current) == null || u.revealLine(p));
      },
      [p],
      v,
    ),
    M(
      () => {
        var u;
        (u = b.current) == null || u.editor.setTheme(l);
      },
      [l],
      v,
    );
  let N = c.useCallback(() => {
    var u;
    if (!(!x.current || !b.current) && !E.current) {
      H.current(b.current);
      let d = i || r,
        O = _(b.current, n || e || '', t || o || '', d || '');
      (s.current =
        (u = b.current) == null
          ? void 0
          : u.editor.create(
              x.current,
              { model: O, automaticLayout: !0, ...y },
              L,
            )),
        S && s.current.restoreViewState(G.get(d)),
        b.current.editor.setTheme(l),
        p !== void 0 && s.current.revealLine(p),
        m(!0),
        (E.current = !0);
    }
  }, [e, t, r, n, o, i, y, L, S, l, p]);
  c.useEffect(() => {
    v && F.current(s.current, b.current);
  }, [v]),
    c.useEffect(() => {
      !g && !v && N();
    }, [g, v, N]),
    (a.current = n),
    c.useEffect(() => {
      var u, d;
      v &&
        $ &&
        ((u = V.current) == null || u.dispose(),
        (V.current =
          (d = s.current) == null
            ? void 0
            : d.onDidChangeModelContent((O) => {
                I.current || $(s.current.getValue(), O);
              })));
    }, [v, $]),
    c.useEffect(() => {
      if (v) {
        let u = b.current.editor.onDidChangeMarkers((d) => {
          var z;
          let O = (z = s.current.getModel()) == null ? void 0 : z.uri;
          if (O && d.find((C) => C.path === O.path)) {
            let C = b.current.editor.getModelMarkers({ resource: O });
            R == null || R(C);
          }
        });
        return () => {
          u == null || u.dispose();
        };
      }
      return () => {};
    }, [v, R]);
  function we() {
    var u, d;
    (u = V.current) == null || u.dispose(),
      J
        ? S && G.set(i, s.current.saveViewState())
        : (d = s.current.getModel()) == null || d.dispose(),
      s.current.dispose();
  }
  return T.createElement(me, {
    width: Q,
    height: X,
    isEditorReady: v,
    loading: h,
    _ref: x,
    className: Z,
    wrapperProps: ee,
  });
}
var Pt = Et,
  fe = c.memo(Pt);
function Rt(e) {
  return Oe({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z',
        },
        child: [],
      },
    ],
  })(e);
}
const Lt = '_response_1rbvd_1',
  xt = '_responseCode_1rbvd_18',
  It = '_responseBlock_1rbvd_24',
  Ct = '_responseSummary_1rbvd_30',
  At = '_noResponse_1rbvd_58',
  _t = '_responseStatusOk_1rbvd_64',
  Tt = '_responseStatusError_1rbvd_68',
  A = {
    response: Lt,
    responseCode: xt,
    responseBlock: It,
    responseSummary: Ct,
    noResponse: At,
    responseStatusOk: _t,
    responseStatusError: Tt,
  };
function Nt({ title: e, responseStatus: t, response: r, error: n }) {
  const { t: o } = je();
  return j.jsxs('details', {
    className: A.responseBlock,
    children: [
      j.jsxs('summary', {
        className: A.responseSummary,
        children: [
          j.jsx('span', { children: e }),
          t !== null &&
            j.jsx('span', {
              className: t < 300 ? A.responseStatusOk : A.responseStatusError,
              children: e !== o('DocumentationSDL') && `${o('status')}: ${t}`,
            }),
        ],
      }),
      j.jsxs('div', {
        className: A.response,
        children: [
          t === null &&
            !n &&
            j.jsxs(j.Fragment, {
              children: [
                j.jsx(Rt, { color: '#e9c2c5', size: '8rem' }),
                j.jsx('h2', {
                  className: A.noResponse,
                  children: o('NoResponse'),
                }),
              ],
            }),
          t !== null &&
            !n &&
            r &&
            j.jsx(fe, {
              theme: 'vs-dark',
              loading: 'Loading...',
              height: '50vh',
              defaultLanguage: 'json',
              defaultValue: r,
              options: { readOnly: !0 },
            }),
          n &&
            j.jsxs('div', {
              children: [
                j.jsxs('h3', { children: [o('Error'), ':'] }),
                j.jsx(fe, {
                  theme: 'vs-dark',
                  loading: 'Loading...',
                  height: '50vh',
                  defaultLanguage: 'json',
                  defaultValue: n,
                  options: { readOnly: !0 },
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
export { Nt as R, fe as d };