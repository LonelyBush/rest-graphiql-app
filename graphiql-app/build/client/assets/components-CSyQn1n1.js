var wp = Object.defineProperty;
var Sp = (e, t, n) =>
  t in e
    ? wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Fl = (e, t, n) => Sp(e, typeof t != 'symbol' ? t + '' : t, n);
function rf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
function lf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var of = { exports: {} },
  Ji = {},
  af = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sl = Symbol.for('react.element'),
  Ep = Symbol.for('react.portal'),
  xp = Symbol.for('react.fragment'),
  kp = Symbol.for('react.strict_mode'),
  _p = Symbol.for('react.profiler'),
  Cp = Symbol.for('react.provider'),
  Rp = Symbol.for('react.context'),
  Pp = Symbol.for('react.forward_ref'),
  Lp = Symbol.for('react.suspense'),
  Tp = Symbol.for('react.memo'),
  Np = Symbol.for('react.lazy'),
  xs = Symbol.iterator;
function Dp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (xs && e[xs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var uf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sf = Object.assign,
  cf = {};
function wr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cf),
    (this.updater = n || uf);
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function ff() {}
ff.prototype = wr.prototype;
function Ga(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cf),
    (this.updater = n || uf);
}
var Za = (Ga.prototype = new ff());
Za.constructor = Ga;
sf(Za, wr.prototype);
Za.isPureReactComponent = !0;
var ks = Array.isArray,
  df = Object.prototype.hasOwnProperty,
  qa = { current: null },
  hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function pf(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      df.call(t, r) && !hf.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Sl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: qa.current,
  };
}
function Op(e, t) {
  return {
    $$typeof: Sl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ba(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Sl;
}
function Mp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _s = /\/+/g;
function wo(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Mp('' + e.key)
    : t.toString(36);
}
function ri(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Sl:
          case Ep:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + wo(o, 0) : r),
      ks(l)
        ? ((n = ''),
          e != null && (n = e.replace(_s, '$&/') + '/'),
          ri(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (ba(l) &&
            (l = Op(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(_s, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), ks(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + wo(i, a);
      o += ri(i, t, n, u, l);
    }
  else if (((u = Dp(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + wo(i, a++)), (o += ri(i, t, n, u, l));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return o;
}
function jl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ri(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function zp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  li = { transition: null },
  Fp = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: li,
    ReactCurrentOwner: qa,
  };
function mf() {
  throw Error('act(...) is not supported in production builds of React.');
}
Y.Children = {
  map: jl,
  forEach: function (e, t, n) {
    jl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      jl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ba(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
Y.Component = wr;
Y.Fragment = xp;
Y.Profiler = _p;
Y.PureComponent = Ga;
Y.StrictMode = kp;
Y.Suspense = Lp;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fp;
Y.act = mf;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = sf({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = qa.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      df.call(t, u) &&
        !hf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Sl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Rp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cp, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = pf;
Y.createFactory = function (e) {
  var t = pf.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Pp, render: e };
};
Y.isValidElement = ba;
Y.lazy = function (e) {
  return { $$typeof: Np, _payload: { _status: -1, _result: e }, _init: zp };
};
Y.memo = function (e, t) {
  return { $$typeof: Tp, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = li.transition;
  li.transition = {};
  try {
    e();
  } finally {
    li.transition = t;
  }
};
Y.unstable_act = mf;
Y.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return Be.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
Y.useId = function () {
  return Be.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return Be.current.useRef(e);
};
Y.useState = function (e) {
  return Be.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return Be.current.useTransition();
};
Y.version = '18.3.1';
af.exports = Y;
var g = af.exports;
const jp = lf(g),
  Ip = rf({ __proto__: null, default: jp }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Up = g,
  Ap = Symbol.for('react.element'),
  $p = Symbol.for('react.fragment'),
  Bp = Object.prototype.hasOwnProperty,
  Hp = Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vp = { key: !0, ref: !0, __self: !0, __source: !0 };
function vf(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Bp.call(t, r) && !Vp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ap,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Hp.current,
  };
}
Ji.Fragment = $p;
Ji.jsx = vf;
Ji.jsxs = vf;
of.exports = Ji;
var o1 = of.exports,
  yf = { exports: {} },
  nt = {},
  gf = { exports: {} },
  wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, I) {
    var H = z.length;
    z.push(I);
    e: for (; 0 < H; ) {
      var te = (H - 1) >>> 1,
        le = z[te];
      if (0 < l(le, I)) (z[te] = I), (z[H] = le), (H = te);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var I = z[0],
      H = z.pop();
    if (H !== I) {
      z[0] = H;
      e: for (var te = 0, le = z.length, Ve = le >>> 1; te < Ve; ) {
        var We = 2 * (te + 1) - 1,
          Tt = z[We],
          Pe = We + 1,
          lt = z[Pe];
        if (0 > l(Tt, H))
          Pe < le && 0 > l(lt, Tt)
            ? ((z[te] = lt), (z[Pe] = H), (te = Pe))
            : ((z[te] = Tt), (z[We] = H), (te = We));
        else if (Pe < le && 0 > l(lt, H)) (z[te] = lt), (z[Pe] = H), (te = Pe);
        else break e;
      }
    }
    return I;
  }
  function l(z, I) {
    var H = z.sortIndex - I.sortIndex;
    return H !== 0 ? H : z.id - I.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    c = null,
    d = 3,
    x = !1,
    y = !1,
    k = !1,
    L = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(z) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null) r(s);
      else if (I.startTime <= z)
        r(s), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(s);
    }
  }
  function S(z) {
    if (((k = !1), m(z), !y))
      if (n(u) !== null) (y = !0), je(R);
      else {
        var I = n(s);
        I !== null && Kt(S, I.startTime - z);
      }
  }
  function R(z, I) {
    (y = !1), k && ((k = !1), p(v), (v = -1)), (x = !0);
    var H = d;
    try {
      for (
        m(I), c = n(u);
        c !== null && (!(c.expirationTime > I) || (z && !A()));

      ) {
        var te = c.callback;
        if (typeof te == 'function') {
          (c.callback = null), (d = c.priorityLevel);
          var le = te(c.expirationTime <= I);
          (I = e.unstable_now()),
            typeof le == 'function' ? (c.callback = le) : c === n(u) && r(u),
            m(I);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var Ve = !0;
      else {
        var We = n(s);
        We !== null && Kt(S, We.startTime - I), (Ve = !1);
      }
      return Ve;
    } finally {
      (c = null), (d = H), (x = !1);
    }
  }
  var C = !1,
    T = null,
    v = -1,
    M = 5,
    O = -1;
  function A() {
    return !(e.unstable_now() - O < M);
  }
  function X() {
    if (T !== null) {
      var z = e.unstable_now();
      O = z;
      var I = !0;
      try {
        I = T(!0, z);
      } finally {
        I ? pe() : ((C = !1), (T = null));
      }
    } else C = !1;
  }
  var pe;
  if (typeof h == 'function')
    pe = function () {
      h(X);
    };
  else if (typeof MessageChannel < 'u') {
    var ae = new MessageChannel(),
      xe = ae.port2;
    (ae.port1.onmessage = X),
      (pe = function () {
        xe.postMessage(null);
      });
  } else
    pe = function () {
      L(X, 0);
    };
  function je(z) {
    (T = z), C || ((C = !0), pe());
  }
  function Kt(z, I) {
    v = L(function () {
      z(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), je(R));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (M = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var H = d;
      d = I;
      try {
        return z();
      } finally {
        d = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, I) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var H = d;
      d = z;
      try {
        return I();
      } finally {
        d = H;
      }
    }),
    (e.unstable_scheduleCallback = function (z, I, H) {
      var te = e.unstable_now();
      switch (
        (typeof H == 'object' && H !== null
          ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? te + H : te))
          : (H = te),
        z)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = H + le),
        (z = {
          id: f++,
          callback: I,
          priorityLevel: z,
          startTime: H,
          expirationTime: le,
          sortIndex: -1,
        }),
        H > te
          ? ((z.sortIndex = H),
            t(s, z),
            n(u) === null &&
              z === n(s) &&
              (k ? (p(v), (v = -1)) : (k = !0), Kt(S, H - te)))
          : ((z.sortIndex = le), t(u, z), y || x || ((y = !0), je(R))),
        z
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (z) {
      var I = d;
      return function () {
        var H = d;
        d = I;
        try {
          return z.apply(this, arguments);
        } finally {
          d = H;
        }
      };
    });
})(wf);
gf.exports = wf;
var Wp = gf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kp = g,
  tt = Wp;
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Sf = new Set(),
  el = {};
function In(e, t) {
  cr(e, t), cr(e + 'Capture', t);
}
function cr(e, t) {
  for (el[e] = t, e = 0; e < t.length; e++) Sf.add(t[e]);
}
var Ut = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  qo = Object.prototype.hasOwnProperty,
  Qp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cs = {},
  Rs = {};
function Yp(e) {
  return qo.call(Rs, e)
    ? !0
    : qo.call(Cs, e)
      ? !1
      : Qp.test(e)
        ? (Rs[e] = !0)
        : ((Cs[e] = !0), !1);
}
function Xp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Jp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Xp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function He(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var De = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    De[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  De[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  De[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  De[e] = new He(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    De[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  De[e] = new He(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  De[e] = new He(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  De[e] = new He(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  De[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var eu = /[\-:]([a-z])/g;
function tu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(eu, tu);
    De[t] = new He(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(eu, tu);
    De[t] = new He(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(eu, tu);
  De[t] = new He(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  De[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
De.xlinkHref = new He(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  De[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nu(e, t, n, r) {
  var l = De.hasOwnProperty(t) ? De[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Jp(t, n, l, r) && (n = null),
    r || l === null
      ? Yp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Il = Symbol.for('react.element'),
  Kn = Symbol.for('react.portal'),
  Qn = Symbol.for('react.fragment'),
  ru = Symbol.for('react.strict_mode'),
  bo = Symbol.for('react.profiler'),
  Ef = Symbol.for('react.provider'),
  xf = Symbol.for('react.context'),
  lu = Symbol.for('react.forward_ref'),
  ea = Symbol.for('react.suspense'),
  ta = Symbol.for('react.suspense_list'),
  iu = Symbol.for('react.memo'),
  Zt = Symbol.for('react.lazy'),
  kf = Symbol.for('react.offscreen'),
  Ps = Symbol.iterator;
function Lr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ps && e[Ps]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var he = Object.assign,
  So;
function $r(e) {
  if (So === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      So = (t && t[1]) || '';
    }
  return (
    `
` +
    So +
    e
  );
}
var Eo = !1;
function xo(e, t) {
  if (!e || Eo) return '';
  Eo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Eo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? $r(e) : '';
}
function Gp(e) {
  switch (e.tag) {
    case 5:
      return $r(e.type);
    case 16:
      return $r('Lazy');
    case 13:
      return $r('Suspense');
    case 19:
      return $r('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = xo(e.type, !1)), e;
    case 11:
      return (e = xo(e.type.render, !1)), e;
    case 1:
      return (e = xo(e.type, !0)), e;
    default:
      return '';
  }
}
function na(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Qn:
      return 'Fragment';
    case Kn:
      return 'Portal';
    case bo:
      return 'Profiler';
    case ru:
      return 'StrictMode';
    case ea:
      return 'Suspense';
    case ta:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case xf:
        return (e.displayName || 'Context') + '.Consumer';
      case Ef:
        return (e._context.displayName || 'Context') + '.Provider';
      case lu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case iu:
        return (
          (t = e.displayName || null), t !== null ? t : na(e.type) || 'Memo'
        );
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return na(e(t));
        } catch {}
    }
  return null;
}
function Zp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return na(t);
    case 8:
      return t === ru ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function _f(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function qp(e) {
  var t = _f(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ul(e) {
  e._valueTracker || (e._valueTracker = qp(e));
}
function Cf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = _f(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ra(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ls(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Rf(e, t) {
  (t = t.checked), t != null && nu(e, 'checked', t, !1);
}
function la(e, t) {
  Rf(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? ia(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ia(e, t.type, dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ts(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ia(e, t, n) {
  (t !== 'number' || wi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Br = Array.isArray;
function lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + dn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function oa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ns(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function Pf(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ds(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Lf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function aa(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Lf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Al,
  Tf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Al = Al || document.createElement('div'),
          Al.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Al.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function tl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  bp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Kr).forEach(function (e) {
  bp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kr[t] = Kr[e]);
  });
});
function Nf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Kr.hasOwnProperty(e) && Kr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Df(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Nf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var em = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ua(e, t) {
  if (t) {
    if (em[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function sa(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ca = null;
function ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fa = null,
  ir = null,
  or = null;
function Os(e) {
  if ((e = kl(e))) {
    if (typeof fa != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = eo(t)), fa(e.stateNode, e.type, t));
  }
}
function Of(e) {
  ir ? (or ? or.push(e) : (or = [e])) : (ir = e);
}
function Mf() {
  if (ir) {
    var e = ir,
      t = or;
    if (((or = ir = null), Os(e), t)) for (e = 0; e < t.length; e++) Os(t[e]);
  }
}
function zf(e, t) {
  return e(t);
}
function Ff() {}
var ko = !1;
function jf(e, t, n) {
  if (ko) return e(t, n);
  ko = !0;
  try {
    return zf(e, t, n);
  } finally {
    (ko = !1), (ir !== null || or !== null) && (Ff(), Mf());
  }
}
function nl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = eo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var da = !1;
if (Ut)
  try {
    var Tr = {};
    Object.defineProperty(Tr, 'passive', {
      get: function () {
        da = !0;
      },
    }),
      window.addEventListener('test', Tr, Tr),
      window.removeEventListener('test', Tr, Tr);
  } catch {
    da = !1;
  }
function tm(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Qr = !1,
  Si = null,
  Ei = !1,
  ha = null,
  nm = {
    onError: function (e) {
      (Qr = !0), (Si = e);
    },
  };
function rm(e, t, n, r, l, i, o, a, u) {
  (Qr = !1), (Si = null), tm.apply(nm, arguments);
}
function lm(e, t, n, r, l, i, o, a, u) {
  if ((rm.apply(this, arguments), Qr)) {
    if (Qr) {
      var s = Si;
      (Qr = !1), (Si = null);
    } else throw Error(N(198));
    Ei || ((Ei = !0), (ha = s));
  }
}
function Un(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function If(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ms(e) {
  if (Un(e) !== e) throw Error(N(188));
}
function im(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Un(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ms(l), e;
        if (i === r) return Ms(l), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Uf(e) {
  return (e = im(e)), e !== null ? Af(e) : null;
}
function Af(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Af(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $f = tt.unstable_scheduleCallback,
  zs = tt.unstable_cancelCallback,
  om = tt.unstable_shouldYield,
  am = tt.unstable_requestPaint,
  ye = tt.unstable_now,
  um = tt.unstable_getCurrentPriorityLevel,
  au = tt.unstable_ImmediatePriority,
  Bf = tt.unstable_UserBlockingPriority,
  xi = tt.unstable_NormalPriority,
  sm = tt.unstable_LowPriority,
  Hf = tt.unstable_IdlePriority,
  Gi = null,
  Ct = null;
function cm(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == 'function')
    try {
      Ct.onCommitFiberRoot(Gi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : hm,
  fm = Math.log,
  dm = Math.LN2;
function hm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((fm(e) / dm) | 0)) | 0;
}
var $l = 64,
  Bl = 4194304;
function Hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ki(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Hr(a)) : ((i &= o), i !== 0 && (r = Hr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Hr(o)) : i !== 0 && (r = Hr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function pm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function mm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - yt(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = pm(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function pa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Vf() {
  var e = $l;
  return ($l <<= 1), !($l & 4194240) && ($l = 64), e;
}
function _o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function El(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function vm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - yt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function uu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var q = 0;
function Wf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Kf,
  su,
  Qf,
  Yf,
  Xf,
  ma = !1,
  Hl = [],
  rn = null,
  ln = null,
  on = null,
  rl = new Map(),
  ll = new Map(),
  bt = [],
  ym =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Fs(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      rn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ln = null;
      break;
    case 'mouseover':
    case 'mouseout':
      on = null;
      break;
    case 'pointerover':
    case 'pointerout':
      rl.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ll.delete(t.pointerId);
  }
}
function Nr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = kl(t)), t !== null && su(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function gm(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (rn = Nr(rn, e, t, n, r, l)), !0;
    case 'dragenter':
      return (ln = Nr(ln, e, t, n, r, l)), !0;
    case 'mouseover':
      return (on = Nr(on, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return rl.set(i, Nr(rl.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), ll.set(i, Nr(ll.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Jf(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = Un(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = If(n)), t !== null)) {
          (e.blockedOn = t),
            Xf(e.priority, function () {
              Qf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ii(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ca = r), n.target.dispatchEvent(r), (ca = null);
    } else return (t = kl(n)), t !== null && su(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function js(e, t, n) {
  ii(e) && n.delete(t);
}
function wm() {
  (ma = !1),
    rn !== null && ii(rn) && (rn = null),
    ln !== null && ii(ln) && (ln = null),
    on !== null && ii(on) && (on = null),
    rl.forEach(js),
    ll.forEach(js);
}
function Dr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ma ||
      ((ma = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, wm)));
}
function il(e) {
  function t(l) {
    return Dr(l, e);
  }
  if (0 < Hl.length) {
    Dr(Hl[0], e);
    for (var n = 1; n < Hl.length; n++) {
      var r = Hl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && Dr(rn, e),
      ln !== null && Dr(ln, e),
      on !== null && Dr(on, e),
      rl.forEach(t),
      ll.forEach(t),
      n = 0;
    n < bt.length;
    n++
  )
    (r = bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && ((n = bt[0]), n.blockedOn === null); )
    Jf(n), n.blockedOn === null && bt.shift();
}
var ar = Ht.ReactCurrentBatchConfig,
  _i = !0;
function Sm(e, t, n, r) {
  var l = q,
    i = ar.transition;
  ar.transition = null;
  try {
    (q = 1), cu(e, t, n, r);
  } finally {
    (q = l), (ar.transition = i);
  }
}
function Em(e, t, n, r) {
  var l = q,
    i = ar.transition;
  ar.transition = null;
  try {
    (q = 4), cu(e, t, n, r);
  } finally {
    (q = l), (ar.transition = i);
  }
}
function cu(e, t, n, r) {
  if (_i) {
    var l = va(e, t, n, r);
    if (l === null) zo(e, t, r, Ci, n), Fs(e, r);
    else if (gm(l, e, t, n, r)) r.stopPropagation();
    else if ((Fs(e, r), t & 4 && -1 < ym.indexOf(e))) {
      for (; l !== null; ) {
        var i = kl(l);
        if (
          (i !== null && Kf(i),
          (i = va(e, t, n, r)),
          i === null && zo(e, t, r, Ci, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else zo(e, t, r, null, n);
  }
}
var Ci = null;
function va(e, t, n, r) {
  if (((Ci = null), (e = ou(r)), (e = kn(e)), e !== null))
    if (((t = Un(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = If(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function Gf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (um()) {
        case au:
          return 1;
        case Bf:
          return 4;
        case xi:
        case sm:
          return 16;
        case Hf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  fu = null,
  oi = null;
function Zf() {
  if (oi) return oi;
  var e,
    t = fu,
    n = t.length,
    r,
    l = 'value' in tn ? tn.value : tn.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (oi = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ai(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vl() {
  return !0;
}
function Is() {
  return !1;
}
function rt(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Vl
        : Is),
      (this.isPropagationStopped = Is),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Vl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vl));
      },
      persist: function () {},
      isPersistent: Vl,
    }),
    t
  );
}
var Sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  du = rt(Sr),
  xl = he({}, Sr, { view: 0, detail: 0 }),
  xm = rt(xl),
  Co,
  Ro,
  Or,
  Zi = he({}, xl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Or &&
            (Or && e.type === 'mousemove'
              ? ((Co = e.screenX - Or.screenX), (Ro = e.screenY - Or.screenY))
              : (Ro = Co = 0),
            (Or = e)),
          Co);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ro;
    },
  }),
  Us = rt(Zi),
  km = he({}, Zi, { dataTransfer: 0 }),
  _m = rt(km),
  Cm = he({}, xl, { relatedTarget: 0 }),
  Po = rt(Cm),
  Rm = he({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pm = rt(Rm),
  Lm = he({}, Sr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tm = rt(Lm),
  Nm = he({}, Sr, { data: 0 }),
  As = rt(Nm),
  Dm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Om = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Mm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function zm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mm[e]) ? !!t[e] : !1;
}
function hu() {
  return zm;
}
var Fm = he({}, xl, {
    key: function (e) {
      if (e.key) {
        var t = Dm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ai(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Om[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hu,
    charCode: function (e) {
      return e.type === 'keypress' ? ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ai(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  jm = rt(Fm),
  Im = he({}, Zi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $s = rt(Im),
  Um = he({}, xl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hu,
  }),
  Am = rt(Um),
  $m = he({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bm = rt($m),
  Hm = he({}, Zi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vm = rt(Hm),
  Wm = [9, 13, 27, 32],
  pu = Ut && 'CompositionEvent' in window,
  Yr = null;
Ut && 'documentMode' in document && (Yr = document.documentMode);
var Km = Ut && 'TextEvent' in window && !Yr,
  qf = Ut && (!pu || (Yr && 8 < Yr && 11 >= Yr)),
  Bs = ' ',
  Hs = !1;
function bf(e, t) {
  switch (e) {
    case 'keyup':
      return Wm.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ed(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Yn = !1;
function Qm(e, t) {
  switch (e) {
    case 'compositionend':
      return ed(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Hs = !0), Bs);
    case 'textInput':
      return (e = t.data), e === Bs && Hs ? null : e;
    default:
      return null;
  }
}
function Ym(e, t) {
  if (Yn)
    return e === 'compositionend' || (!pu && bf(e, t))
      ? ((e = Zf()), (oi = fu = tn = null), (Yn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return qf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Xm = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Xm[e.type] : t === 'textarea';
}
function td(e, t, n, r) {
  Of(r),
    (t = Ri(t, 'onChange')),
    0 < t.length &&
      ((n = new du('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Xr = null,
  ol = null;
function Jm(e) {
  dd(e, 0);
}
function qi(e) {
  var t = Gn(e);
  if (Cf(t)) return e;
}
function Gm(e, t) {
  if (e === 'change') return t;
}
var nd = !1;
if (Ut) {
  var Lo;
  if (Ut) {
    var To = 'oninput' in document;
    if (!To) {
      var Ws = document.createElement('div');
      Ws.setAttribute('oninput', 'return;'),
        (To = typeof Ws.oninput == 'function');
    }
    Lo = To;
  } else Lo = !1;
  nd = Lo && (!document.documentMode || 9 < document.documentMode);
}
function Ks() {
  Xr && (Xr.detachEvent('onpropertychange', rd), (ol = Xr = null));
}
function rd(e) {
  if (e.propertyName === 'value' && qi(ol)) {
    var t = [];
    td(t, ol, e, ou(e)), jf(Jm, t);
  }
}
function Zm(e, t, n) {
  e === 'focusin'
    ? (Ks(), (Xr = t), (ol = n), Xr.attachEvent('onpropertychange', rd))
    : e === 'focusout' && Ks();
}
function qm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return qi(ol);
}
function bm(e, t) {
  if (e === 'click') return qi(t);
}
function ev(e, t) {
  if (e === 'input' || e === 'change') return qi(t);
}
function tv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == 'function' ? Object.is : tv;
function al(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!qo.call(t, l) || !wt(e[l], t[l])) return !1;
  }
  return !0;
}
function Qs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ys(e, t) {
  var n = Qs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qs(n);
  }
}
function ld(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ld(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function id() {
  for (var e = window, t = wi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wi(e.document);
  }
  return t;
}
function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function nv(e) {
  var t = id(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ld(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && mu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ys(n, i));
        var o = Ys(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var rv = Ut && 'documentMode' in document && 11 >= document.documentMode,
  Xn = null,
  ya = null,
  Jr = null,
  ga = !1;
function Xs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ga ||
    Xn == null ||
    Xn !== wi(r) ||
    ((r = Xn),
    'selectionStart' in r && mu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Jr && al(Jr, r)) ||
      ((Jr = r),
      (r = Ri(ya, 'onSelect')),
      0 < r.length &&
        ((t = new du('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xn))));
}
function Wl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Jn = {
    animationend: Wl('Animation', 'AnimationEnd'),
    animationiteration: Wl('Animation', 'AnimationIteration'),
    animationstart: Wl('Animation', 'AnimationStart'),
    transitionend: Wl('Transition', 'TransitionEnd'),
  },
  No = {},
  od = {};
Ut &&
  ((od = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Jn.animationend.animation,
    delete Jn.animationiteration.animation,
    delete Jn.animationstart.animation),
  'TransitionEvent' in window || delete Jn.transitionend.transition);
function bi(e) {
  if (No[e]) return No[e];
  if (!Jn[e]) return e;
  var t = Jn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in od) return (No[e] = t[n]);
  return e;
}
var ad = bi('animationend'),
  ud = bi('animationiteration'),
  sd = bi('animationstart'),
  cd = bi('transitionend'),
  fd = new Map(),
  Js =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function mn(e, t) {
  fd.set(e, t), In(t, [e]);
}
for (var Do = 0; Do < Js.length; Do++) {
  var Oo = Js[Do],
    lv = Oo.toLowerCase(),
    iv = Oo[0].toUpperCase() + Oo.slice(1);
  mn(lv, 'on' + iv);
}
mn(ad, 'onAnimationEnd');
mn(ud, 'onAnimationIteration');
mn(sd, 'onAnimationStart');
mn('dblclick', 'onDoubleClick');
mn('focusin', 'onFocus');
mn('focusout', 'onBlur');
mn(cd, 'onTransitionEnd');
cr('onMouseEnter', ['mouseout', 'mouseover']);
cr('onMouseLeave', ['mouseout', 'mouseover']);
cr('onPointerEnter', ['pointerout', 'pointerover']);
cr('onPointerLeave', ['pointerout', 'pointerover']);
In(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
In(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
In('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
In(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
In(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
In(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Vr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  ov = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Vr));
function Gs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), lm(r, t, void 0, e), (e.currentTarget = null);
}
function dd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          Gs(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Gs(l, a, s), (i = u);
        }
    }
  }
  if (Ei) throw ((e = ha), (Ei = !1), (ha = null), e);
}
function ie(e, t) {
  var n = t[ka];
  n === void 0 && (n = t[ka] = new Set());
  var r = e + '__bubble';
  n.has(r) || (hd(t, e, 2, !1), n.add(r));
}
function Mo(e, t, n) {
  var r = 0;
  t && (r |= 4), hd(n, e, r, t);
}
var Kl = '_reactListening' + Math.random().toString(36).slice(2);
function ul(e) {
  if (!e[Kl]) {
    (e[Kl] = !0),
      Sf.forEach(function (n) {
        n !== 'selectionchange' && (ov.has(n) || Mo(n, !1, e), Mo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kl] || ((t[Kl] = !0), Mo('selectionchange', !1, t));
  }
}
function hd(e, t, n, r) {
  switch (Gf(t)) {
    case 1:
      var l = Sm;
      break;
    case 4:
      l = Em;
      break;
    default:
      l = cu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !da ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function zo(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = kn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  jf(function () {
    var s = i,
      f = ou(n),
      c = [];
    e: {
      var d = fd.get(e);
      if (d !== void 0) {
        var x = du,
          y = e;
        switch (e) {
          case 'keypress':
            if (ai(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = jm;
            break;
          case 'focusin':
            (y = 'focus'), (x = Po);
            break;
          case 'focusout':
            (y = 'blur'), (x = Po);
            break;
          case 'beforeblur':
          case 'afterblur':
            x = Po;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = Us;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = _m;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = Am;
            break;
          case ad:
          case ud:
          case sd:
            x = Pm;
            break;
          case cd:
            x = Bm;
            break;
          case 'scroll':
            x = xm;
            break;
          case 'wheel':
            x = Vm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = Tm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = $s;
        }
        var k = (t & 4) !== 0,
          L = !k && e === 'scroll',
          p = k ? (d !== null ? d + 'Capture' : null) : d;
        k = [];
        for (var h = s, m; h !== null; ) {
          m = h;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              p !== null && ((S = nl(h, p)), S != null && k.push(sl(h, S, m)))),
            L)
          )
            break;
          h = h.return;
        }
        0 < k.length &&
          ((d = new x(d, y, null, n, f)), c.push({ event: d, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== ca &&
            (y = n.relatedTarget || n.fromElement) &&
            (kn(y) || y[At]))
        )
          break e;
        if (
          (x || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = s),
              (y = y ? kn(y) : null),
              y !== null &&
                ((L = Un(y)), y !== L || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = s)),
          x !== y)
        ) {
          if (
            ((k = Us),
            (S = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = $s),
              (S = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (L = x == null ? d : Gn(x)),
            (m = y == null ? d : Gn(y)),
            (d = new k(S, h + 'leave', x, n, f)),
            (d.target = L),
            (d.relatedTarget = m),
            (S = null),
            kn(f) === s &&
              ((k = new k(p, h + 'enter', y, n, f)),
              (k.target = m),
              (k.relatedTarget = L),
              (S = k)),
            (L = S),
            x && y)
          )
            t: {
              for (k = x, p = y, h = 0, m = k; m; m = Vn(m)) h++;
              for (m = 0, S = p; S; S = Vn(S)) m++;
              for (; 0 < h - m; ) (k = Vn(k)), h--;
              for (; 0 < m - h; ) (p = Vn(p)), m--;
              for (; h--; ) {
                if (k === p || (p !== null && k === p.alternate)) break t;
                (k = Vn(k)), (p = Vn(p));
              }
              k = null;
            }
          else k = null;
          x !== null && Zs(c, d, x, k, !1),
            y !== null && L !== null && Zs(c, L, y, k, !0);
        }
      }
      e: {
        if (
          ((d = s ? Gn(s) : window),
          (x = d.nodeName && d.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && d.type === 'file'))
        )
          var R = Gm;
        else if (Vs(d))
          if (nd) R = ev;
          else {
            R = qm;
            var C = Zm;
          }
        else
          (x = d.nodeName) &&
            x.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (R = bm);
        if (R && (R = R(e, s))) {
          td(c, R, n, f);
          break e;
        }
        C && C(e, d, s),
          e === 'focusout' &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === 'number' &&
            ia(d, 'number', d.value);
      }
      switch (((C = s ? Gn(s) : window), e)) {
        case 'focusin':
          (Vs(C) || C.contentEditable === 'true') &&
            ((Xn = C), (ya = s), (Jr = null));
          break;
        case 'focusout':
          Jr = ya = Xn = null;
          break;
        case 'mousedown':
          ga = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ga = !1), Xs(c, n, f);
          break;
        case 'selectionchange':
          if (rv) break;
        case 'keydown':
        case 'keyup':
          Xs(c, n, f);
      }
      var T;
      if (pu)
        e: {
          switch (e) {
            case 'compositionstart':
              var v = 'onCompositionStart';
              break e;
            case 'compositionend':
              v = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              v = 'onCompositionUpdate';
              break e;
          }
          v = void 0;
        }
      else
        Yn
          ? bf(e, n) && (v = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (v = 'onCompositionStart');
      v &&
        (qf &&
          n.locale !== 'ko' &&
          (Yn || v !== 'onCompositionStart'
            ? v === 'onCompositionEnd' && Yn && (T = Zf())
            : ((tn = f),
              (fu = 'value' in tn ? tn.value : tn.textContent),
              (Yn = !0))),
        (C = Ri(s, v)),
        0 < C.length &&
          ((v = new As(v, e, null, n, f)),
          c.push({ event: v, listeners: C }),
          T ? (v.data = T) : ((T = ed(n)), T !== null && (v.data = T)))),
        (T = Km ? Qm(e, n) : Ym(e, n)) &&
          ((s = Ri(s, 'onBeforeInput')),
          0 < s.length &&
            ((f = new As('onBeforeInput', 'beforeinput', null, n, f)),
            c.push({ event: f, listeners: s }),
            (f.data = T)));
    }
    dd(c, t);
  });
}
function sl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ri(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = nl(e, n)),
      i != null && r.unshift(sl(e, i, l)),
      (i = nl(e, t)),
      i != null && r.push(sl(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = nl(n, i)), u != null && o.unshift(sl(n, u, a)))
        : l || ((u = nl(n, i)), u != null && o.push(sl(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var av = /\r\n?/g,
  uv = /\u0000|\uFFFD/g;
function qs(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      av,
      `
`,
    )
    .replace(uv, '');
}
function Ql(e, t, n) {
  if (((t = qs(t)), qs(e) !== t && n)) throw Error(N(425));
}
function Pi() {}
var wa = null,
  Sa = null;
function Ea(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xa = typeof setTimeout == 'function' ? setTimeout : void 0,
  sv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  bs = typeof Promise == 'function' ? Promise : void 0,
  cv =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof bs < 'u'
        ? function (e) {
            return bs.resolve(null).then(e).catch(fv);
          }
        : xa;
function fv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), il(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  il(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function ec(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Er = Math.random().toString(36).slice(2),
  _t = '__reactFiber$' + Er,
  cl = '__reactProps$' + Er,
  At = '__reactContainer$' + Er,
  ka = '__reactEvents$' + Er,
  dv = '__reactListeners$' + Er,
  hv = '__reactHandles$' + Er;
function kn(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[_t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ec(e); e !== null; ) {
          if ((n = e[_t])) return n;
          e = ec(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function kl(e) {
  return (
    (e = e[_t] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function eo(e) {
  return e[cl] || null;
}
var _a = [],
  Zn = -1;
function vn(e) {
  return { current: e };
}
function oe(e) {
  0 > Zn || ((e.current = _a[Zn]), (_a[Zn] = null), Zn--);
}
function re(e, t) {
  Zn++, (_a[Zn] = e.current), (e.current = t);
}
var hn = {},
  Fe = vn(hn),
  Ye = vn(!1),
  Nn = hn;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Li() {
  oe(Ye), oe(Fe);
}
function tc(e, t, n) {
  if (Fe.current !== hn) throw Error(N(168));
  re(Fe, t), re(Ye, n);
}
function pd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Zp(e) || 'Unknown', l));
  return he({}, n, r);
}
function Ti(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hn),
    (Nn = Fe.current),
    re(Fe, e),
    re(Ye, Ye.current),
    !0
  );
}
function nc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = pd(e, t, Nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Ye),
      oe(Fe),
      re(Fe, e))
    : oe(Ye),
    re(Ye, n);
}
var Mt = null,
  to = !1,
  jo = !1;
function md(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function pv(e) {
  (to = !0), md(e);
}
function yn() {
  if (!jo && Mt !== null) {
    jo = !0;
    var e = 0,
      t = q;
    try {
      var n = Mt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mt = null), (to = !1);
    } catch (l) {
      throw (Mt !== null && (Mt = Mt.slice(e + 1)), $f(au, yn), l);
    } finally {
      (q = t), (jo = !1);
    }
  }
  return null;
}
var qn = [],
  bn = 0,
  Ni = null,
  Di = 0,
  ot = [],
  at = 0,
  Dn = null,
  Ft = 1,
  jt = '';
function En(e, t) {
  (qn[bn++] = Di), (qn[bn++] = Ni), (Ni = e), (Di = t);
}
function vd(e, t, n) {
  (ot[at++] = Ft), (ot[at++] = jt), (ot[at++] = Dn), (Dn = e);
  var r = Ft;
  e = jt;
  var l = 32 - yt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - yt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ft = (1 << (32 - yt(t) + l)) | (n << l) | r),
      (jt = i + e);
  } else (Ft = (1 << i) | (n << l) | r), (jt = e);
}
function vu(e) {
  e.return !== null && (En(e, 1), vd(e, 1, 0));
}
function yu(e) {
  for (; e === Ni; )
    (Ni = qn[--bn]), (qn[bn] = null), (Di = qn[--bn]), (qn[bn] = null);
  for (; e === Dn; )
    (Dn = ot[--at]),
      (ot[at] = null),
      (jt = ot[--at]),
      (ot[at] = null),
      (Ft = ot[--at]),
      (ot[at] = null);
}
var et = null,
  be = null,
  ce = !1,
  vt = null;
function yd(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (et = e), (be = an(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (et = e), (be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dn !== null ? { id: Ft, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (et = e),
            (be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ra(e) {
  if (ce) {
    var t = be;
    if (t) {
      var n = t;
      if (!rc(e, t)) {
        if (Ca(e)) throw Error(N(418));
        t = an(n.nextSibling);
        var r = et;
        t && rc(e, t)
          ? yd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (et = e));
      }
    } else {
      if (Ca(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (et = e);
    }
  }
}
function lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  et = e;
}
function Yl(e) {
  if (e !== et) return !1;
  if (!ce) return lc(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ea(e.type, e.memoizedProps))),
    t && (t = be))
  ) {
    if (Ca(e)) throw (gd(), Error(N(418)));
    for (; t; ) yd(e, t), (t = an(t.nextSibling));
  }
  if ((lc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              be = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      be = null;
    }
  } else be = et ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function gd() {
  for (var e = be; e; ) e = an(e.nextSibling);
}
function dr() {
  (be = et = null), (ce = !1);
}
function gu(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var mv = Ht.ReactCurrentBatchConfig;
function Mr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Xl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function ic(e) {
  var t = e._init;
  return t(e._payload);
}
function wd(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function l(p, h) {
    return (p = fn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, S) {
    return h === null || h.tag !== 6
      ? ((h = Vo(m, p.mode, S)), (h.return = p), h)
      : ((h = l(h, m)), (h.return = p), h);
  }
  function u(p, h, m, S) {
    var R = m.type;
    return R === Qn
      ? f(p, h, m.props.children, S, m.key)
      : h !== null &&
          (h.elementType === R ||
            (typeof R == 'object' &&
              R !== null &&
              R.$$typeof === Zt &&
              ic(R) === h.type))
        ? ((S = l(h, m.props)), (S.ref = Mr(p, h, m)), (S.return = p), S)
        : ((S = pi(m.type, m.key, m.props, null, p.mode, S)),
          (S.ref = Mr(p, h, m)),
          (S.return = p),
          S);
  }
  function s(p, h, m, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Wo(m, p.mode, S)), (h.return = p), h)
      : ((h = l(h, m.children || [])), (h.return = p), h);
  }
  function f(p, h, m, S, R) {
    return h === null || h.tag !== 7
      ? ((h = Tn(m, p.mode, S, R)), (h.return = p), h)
      : ((h = l(h, m)), (h.return = p), h);
  }
  function c(p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Vo('' + h, p.mode, m)), (h.return = p), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Il:
          return (
            (m = pi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = Mr(p, null, h)),
            (m.return = p),
            m
          );
        case Kn:
          return (h = Wo(h, p.mode, m)), (h.return = p), h;
        case Zt:
          var S = h._init;
          return c(p, S(h._payload), m);
      }
      if (Br(h) || Lr(h))
        return (h = Tn(h, p.mode, m, null)), (h.return = p), h;
      Xl(p, h);
    }
    return null;
  }
  function d(p, h, m, S) {
    var R = h !== null ? h.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return R !== null ? null : a(p, h, '' + m, S);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Il:
          return m.key === R ? u(p, h, m, S) : null;
        case Kn:
          return m.key === R ? s(p, h, m, S) : null;
        case Zt:
          return (R = m._init), d(p, h, R(m._payload), S);
      }
      if (Br(m) || Lr(m)) return R !== null ? null : f(p, h, m, S, null);
      Xl(p, m);
    }
    return null;
  }
  function x(p, h, m, S, R) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (p = p.get(m) || null), a(h, p, '' + S, R);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case Il:
          return (p = p.get(S.key === null ? m : S.key) || null), u(h, p, S, R);
        case Kn:
          return (p = p.get(S.key === null ? m : S.key) || null), s(h, p, S, R);
        case Zt:
          var C = S._init;
          return x(p, h, m, C(S._payload), R);
      }
      if (Br(S) || Lr(S)) return (p = p.get(m) || null), f(h, p, S, R, null);
      Xl(h, S);
    }
    return null;
  }
  function y(p, h, m, S) {
    for (
      var R = null, C = null, T = h, v = (h = 0), M = null;
      T !== null && v < m.length;
      v++
    ) {
      T.index > v ? ((M = T), (T = null)) : (M = T.sibling);
      var O = d(p, T, m[v], S);
      if (O === null) {
        T === null && (T = M);
        break;
      }
      e && T && O.alternate === null && t(p, T),
        (h = i(O, h, v)),
        C === null ? (R = O) : (C.sibling = O),
        (C = O),
        (T = M);
    }
    if (v === m.length) return n(p, T), ce && En(p, v), R;
    if (T === null) {
      for (; v < m.length; v++)
        (T = c(p, m[v], S)),
          T !== null &&
            ((h = i(T, h, v)), C === null ? (R = T) : (C.sibling = T), (C = T));
      return ce && En(p, v), R;
    }
    for (T = r(p, T); v < m.length; v++)
      (M = x(T, p, v, m[v], S)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? v : M.key),
          (h = i(M, h, v)),
          C === null ? (R = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        T.forEach(function (A) {
          return t(p, A);
        }),
      ce && En(p, v),
      R
    );
  }
  function k(p, h, m, S) {
    var R = Lr(m);
    if (typeof R != 'function') throw Error(N(150));
    if (((m = R.call(m)), m == null)) throw Error(N(151));
    for (
      var C = (R = null), T = h, v = (h = 0), M = null, O = m.next();
      T !== null && !O.done;
      v++, O = m.next()
    ) {
      T.index > v ? ((M = T), (T = null)) : (M = T.sibling);
      var A = d(p, T, O.value, S);
      if (A === null) {
        T === null && (T = M);
        break;
      }
      e && T && A.alternate === null && t(p, T),
        (h = i(A, h, v)),
        C === null ? (R = A) : (C.sibling = A),
        (C = A),
        (T = M);
    }
    if (O.done) return n(p, T), ce && En(p, v), R;
    if (T === null) {
      for (; !O.done; v++, O = m.next())
        (O = c(p, O.value, S)),
          O !== null &&
            ((h = i(O, h, v)), C === null ? (R = O) : (C.sibling = O), (C = O));
      return ce && En(p, v), R;
    }
    for (T = r(p, T); !O.done; v++, O = m.next())
      (O = x(T, p, v, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? v : O.key),
          (h = i(O, h, v)),
          C === null ? (R = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        T.forEach(function (X) {
          return t(p, X);
        }),
      ce && En(p, v),
      R
    );
  }
  function L(p, h, m, S) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Qn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Il:
          e: {
            for (var R = m.key, C = h; C !== null; ) {
              if (C.key === R) {
                if (((R = m.type), R === Qn)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (h = l(C, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  C.elementType === R ||
                  (typeof R == 'object' &&
                    R !== null &&
                    R.$$typeof === Zt &&
                    ic(R) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = l(C, m.props)),
                    (h.ref = Mr(p, C, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            m.type === Qn
              ? ((h = Tn(m.props.children, p.mode, S, m.key)),
                (h.return = p),
                (p = h))
              : ((S = pi(m.type, m.key, m.props, null, p.mode, S)),
                (S.ref = Mr(p, h, m)),
                (S.return = p),
                (p = S));
          }
          return o(p);
        case Kn:
          e: {
            for (C = m.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = l(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Wo(m, p.mode, S)), (h.return = p), (p = h);
          }
          return o(p);
        case Zt:
          return (C = m._init), L(p, h, C(m._payload), S);
      }
      if (Br(m)) return y(p, h, m, S);
      if (Lr(m)) return k(p, h, m, S);
      Xl(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = l(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Vo(m, p.mode, S)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return L;
}
var hr = wd(!0),
  Sd = wd(!1),
  Oi = vn(null),
  Mi = null,
  er = null,
  wu = null;
function Su() {
  wu = er = Mi = null;
}
function Eu(e) {
  var t = Oi.current;
  oe(Oi), (e._currentValue = t);
}
function Pa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ur(e, t) {
  (Mi = e),
    (wu = er = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (wu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), er === null)) {
      if (Mi === null) throw Error(N(308));
      (er = e), (Mi.dependencies = { lanes: 0, firstContext: e });
    } else er = er.next = e;
  return t;
}
var _n = null;
function xu(e) {
  _n === null ? (_n = [e]) : _n.push(e);
}
function Ed(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), xu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function ku(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), xu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function ui(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uu(e, n);
  }
}
function oc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zi(e, t, n, r) {
  var l = e.updateQueue;
  qt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var c = l.baseState;
    (o = 0), (f = s = u = null), (a = i);
    do {
      var d = a.lane,
        x = a.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            k = a;
          switch (((d = t), (x = n), k.tag)) {
            case 1:
              if (((y = k.payload), typeof y == 'function')) {
                c = y.call(x, c, d);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = k.payload),
                (d = typeof y == 'function' ? y.call(x, c, d) : y),
                d == null)
              )
                break e;
              c = he({}, c, d);
              break e;
            case 2:
              qt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = l.effects),
          d === null ? (l.effects = [a]) : d.push(a));
      } else
        (x = {
          eventTime: x,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = x), (u = c)) : (f = f.next = x),
          (o |= d);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = c),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Mn |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function ac(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var _l = {},
  Rt = vn(_l),
  fl = vn(_l),
  dl = vn(_l);
function Cn(e) {
  if (e === _l) throw Error(N(174));
  return e;
}
function _u(e, t) {
  switch ((re(dl, t), re(fl, e), re(Rt, _l), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : aa(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = aa(t, e));
  }
  oe(Rt), re(Rt, t);
}
function pr() {
  oe(Rt), oe(fl), oe(dl);
}
function kd(e) {
  Cn(dl.current);
  var t = Cn(Rt.current),
    n = aa(t, e.type);
  t !== n && (re(fl, e), re(Rt, n));
}
function Cu(e) {
  fl.current === e && (oe(Rt), oe(fl));
}
var fe = vn(0);
function Fi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Io = [];
function Ru() {
  for (var e = 0; e < Io.length; e++)
    Io[e]._workInProgressVersionPrimary = null;
  Io.length = 0;
}
var si = Ht.ReactCurrentDispatcher,
  Uo = Ht.ReactCurrentBatchConfig,
  On = 0,
  de = null,
  ke = null,
  Ce = null,
  ji = !1,
  Gr = !1,
  hl = 0,
  vv = 0;
function Oe() {
  throw Error(N(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Lu(e, t, n, r, l, i) {
  if (
    ((On = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (si.current = e === null || e.memoizedState === null ? Sv : Ev),
    (e = n(r, l)),
    Gr)
  ) {
    i = 0;
    do {
      if (((Gr = !1), (hl = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (Ce = ke = null),
        (t.updateQueue = null),
        (si.current = xv),
        (e = n(r, l));
    } while (Gr);
  }
  if (
    ((si.current = Ii),
    (t = ke !== null && ke.next !== null),
    (On = 0),
    (Ce = ke = de = null),
    (ji = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Tu() {
  var e = hl !== 0;
  return (hl = 0), e;
}
function kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (de.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function ft() {
  if (ke === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Ce === null ? de.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (ke = e);
  else {
    if (e === null) throw Error(N(310));
    (ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Ce === null ? (de.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function pl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ao(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ke,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var f = s.lane;
      if ((On & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var c = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = c), (o = r)) : (u = u.next = c),
          (de.lanes |= f),
          (Mn |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      wt(r, t.memoizedState) || (Qe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (de.lanes |= i), (Mn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $o(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    wt(i, t.memoizedState) || (Qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function _d() {}
function Cd(e, t) {
  var n = de,
    r = ft(),
    l = t(),
    i = !wt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Qe = !0)),
    (r = r.queue),
    Nu(Ld.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ml(9, Pd.bind(null, n, r, l, t), void 0, null),
      Re === null)
    )
      throw Error(N(349));
    On & 30 || Rd(n, t, l);
  }
  return l;
}
function Rd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Td(t) && Nd(e);
}
function Ld(e, t, n) {
  return n(function () {
    Td(t) && Nd(e);
  });
}
function Td(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Nd(e) {
  var t = $t(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function uc(e) {
  var t = kt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wv.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function ml(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Dd() {
  return ft().memoizedState;
}
function ci(e, t, n, r) {
  var l = kt();
  (de.flags |= e),
    (l.memoizedState = ml(1 | t, n, void 0, r === void 0 ? null : r));
}
function no(e, t, n, r) {
  var l = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var o = ke.memoizedState;
    if (((i = o.destroy), r !== null && Pu(r, o.deps))) {
      l.memoizedState = ml(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (l.memoizedState = ml(1 | t, n, i, r));
}
function sc(e, t) {
  return ci(8390656, 8, e, t);
}
function Nu(e, t) {
  return no(2048, 8, e, t);
}
function Od(e, t) {
  return no(4, 2, e, t);
}
function Md(e, t) {
  return no(4, 4, e, t);
}
function zd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Fd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), no(4, 4, zd.bind(null, t, e), n)
  );
}
function Du() {}
function jd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Id(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ud(e, t, n) {
  return On & 21
    ? (wt(n, t) || ((n = Vf()), (de.lanes |= n), (Mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
}
function yv(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Uo.transition;
  Uo.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (Uo.transition = r);
  }
}
function Ad() {
  return ft().memoizedState;
}
function gv(e, t, n) {
  var r = cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $d(e))
  )
    Bd(t, n);
  else if (((n = Ed(e, t, n, r)), n !== null)) {
    var l = $e();
    gt(n, e, r, l), Hd(n, t, r);
  }
}
function wv(e, t, n) {
  var r = cn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($d(e)) Bd(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), wt(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), xu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ed(e, t, l, r)),
      n !== null && ((l = $e()), gt(n, e, r, l), Hd(n, t, r));
  }
}
function $d(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function Bd(e, t) {
  Gr = ji = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uu(e, n);
  }
}
var Ii = {
    readContext: ct,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  Sv = {
    readContext: ct,
    useCallback: function (e, t) {
      return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: sc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ci(4194308, 4, zd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ci(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ci(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gv.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: uc,
    useDebugValue: Du,
    useDeferredValue: function (e) {
      return (kt().memoizedState = e);
    },
    useTransition: function () {
      var e = uc(!1),
        t = e[0];
      return (e = yv.bind(null, e[1])), (kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        l = kt();
      if (ce) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Re === null)) throw Error(N(349));
        On & 30 || Rd(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        sc(Ld.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ml(9, Pd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = kt(),
        t = Re.identifierPrefix;
      if (ce) {
        var n = jt,
          r = Ft;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = hl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = vv++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ev = {
    readContext: ct,
    useCallback: jd,
    useContext: ct,
    useEffect: Nu,
    useImperativeHandle: Fd,
    useInsertionEffect: Od,
    useLayoutEffect: Md,
    useMemo: Id,
    useReducer: Ao,
    useRef: Dd,
    useState: function () {
      return Ao(pl);
    },
    useDebugValue: Du,
    useDeferredValue: function (e) {
      var t = ft();
      return Ud(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Ao(pl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: _d,
    useSyncExternalStore: Cd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  },
  xv = {
    readContext: ct,
    useCallback: jd,
    useContext: ct,
    useEffect: Nu,
    useImperativeHandle: Fd,
    useInsertionEffect: Od,
    useLayoutEffect: Md,
    useMemo: Id,
    useReducer: $o,
    useRef: Dd,
    useState: function () {
      return $o(pl);
    },
    useDebugValue: Du,
    useDeferredValue: function (e) {
      var t = ft();
      return ke === null ? (t.memoizedState = e) : Ud(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = $o(pl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: _d,
    useSyncExternalStore: Cd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  };
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function La(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ro = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Un(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      l = cn(e),
      i = It(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, l)),
      t !== null && (gt(t, e, l, r), ui(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      l = cn(e),
      i = It(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, l)),
      t !== null && (gt(t, e, l, r), ui(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $e(),
      r = cn(e),
      l = It(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = un(e, l, r)),
      t !== null && (gt(t, e, r, n), ui(t, e, r));
  },
};
function cc(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !al(n, r) || !al(l, i)
        : !0
  );
}
function Vd(e, t, n) {
  var r = !1,
    l = hn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = ct(i))
      : ((l = Xe(t) ? Nn : Fe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fr(e, l) : hn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ro),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function fc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ro.enqueueReplaceState(t, t.state, null);
}
function Ta(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ku(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = ct(i))
    : ((i = Xe(t) ? Nn : Fe.current), (l.context = fr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (La(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ro.enqueueReplaceState(l, l.state, null),
      zi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function mr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Gp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Bo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Na(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kv = typeof WeakMap == 'function' ? WeakMap : Map;
function Wd(e, t, n) {
  (n = It(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ai || ((Ai = !0), ($a = r)), Na(e, t);
    }),
    n
  );
}
function Kd(e, t, n) {
  (n = It(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Na(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Na(e, t),
          typeof r != 'function' &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function dc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Iv.bind(null, e, t, n)), t.then(e, e));
}
function hc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pc(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var _v = Ht.ReactCurrentOwner,
  Qe = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Sd(t, null, n, r) : hr(t, e.child, n, r);
}
function mc(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    ur(t, l),
    (r = Lu(e, t, n, r, i, l)),
    (n = Tu()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Bt(e, t, l))
      : (ce && n && vu(t), (t.flags |= 1), Ae(e, t, r, l), t.child)
  );
}
function vc(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Au(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Qd(e, t, i, r, l))
      : ((e = pi(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : al), n(o, r) && e.ref === t.ref)
    )
      return Bt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = fn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Qd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (al(i, r) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return (t.lanes = e.lanes), Bt(e, t, l);
  }
  return Da(e, t, n, r, l);
}
function Yd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(nr, Ze),
        (Ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(nr, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        re(nr, Ze),
        (Ze |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(nr, Ze),
      (Ze |= r);
  return Ae(e, t, l, n), t.child;
}
function Xd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Da(e, t, n, r, l) {
  var i = Xe(n) ? Nn : Fe.current;
  return (
    (i = fr(t, i)),
    ur(t, l),
    (n = Lu(e, t, n, r, i, l)),
    (r = Tu()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Bt(e, t, l))
      : (ce && r && vu(t), (t.flags |= 1), Ae(e, t, n, l), t.child)
  );
}
function yc(e, t, n, r, l) {
  if (Xe(n)) {
    var i = !0;
    Ti(t);
  } else i = !1;
  if ((ur(t, l), t.stateNode === null))
    fi(e, t), Vd(t, n, r), Ta(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = ct(s))
      : ((s = Xe(n) ? Nn : Fe.current), (s = fr(t, s)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && fc(t, o, r, s)),
      (qt = !1);
    var d = t.memoizedState;
    (o.state = d),
      zi(t, r, o, l),
      (u = t.memoizedState),
      a !== r || d !== u || Ye.current || qt
        ? (typeof f == 'function' && (La(t, n, f, r), (u = t.memoizedState)),
          (a = qt || cc(t, n, a, r, d, u, s))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      xd(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ht(t.type, a)),
      (o.props = s),
      (c = t.pendingProps),
      (d = o.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = ct(u))
        : ((u = Xe(n) ? Nn : Fe.current), (u = fr(t, u)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== c || d !== u) && fc(t, o, r, u)),
      (qt = !1),
      (d = t.memoizedState),
      (o.state = d),
      zi(t, r, o, l);
    var y = t.memoizedState;
    a !== c || d !== y || Ye.current || qt
      ? (typeof x == 'function' && (La(t, n, x, r), (y = t.memoizedState)),
        (s = qt || cc(t, n, s, r, d, y, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, y, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, u)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Oa(e, t, n, r, i, l);
}
function Oa(e, t, n, r, l, i) {
  Xd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && nc(t, n, !1), Bt(e, t, i);
  (r = t.stateNode), (_v.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = hr(t, e.child, null, i)), (t.child = hr(t, null, a, i)))
      : Ae(e, t, a, i),
    (t.memoizedState = r.state),
    l && nc(t, n, !0),
    t.child
  );
}
function Jd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? tc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && tc(e, t.context, !1),
    _u(e, t.containerInfo);
}
function gc(e, t, n, r, l) {
  return dr(), gu(l), (t.flags |= 256), Ae(e, t, n, r), t.child;
}
var Ma = { dehydrated: null, treeContext: null, retryLane: 0 };
function za(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gd(e, t, n) {
  var r = t.pendingProps,
    l = fe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    re(fe, l & 1),
    e === null)
  )
    return (
      Ra(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = oo(o, r, 0, null)),
              (e = Tn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = za(n)),
              (t.memoizedState = Ma),
              e)
            : Ou(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Cv(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = fn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = fn(a, i)) : ((i = Tn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? za(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ma),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ou(e, t) {
  return (
    (t = oo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Jl(e, t, n, r) {
  return (
    r !== null && gu(r),
    hr(t, e.child, null, n),
    (e = Ou(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cv(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bo(Error(N(422)))), Jl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = oo({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = Tn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && hr(t, e.child, null, o),
          (t.child.memoizedState = za(o)),
          (t.memoizedState = Ma),
          i);
  if (!(t.mode & 1)) return Jl(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(N(419))), (r = Bo(i, r, void 0)), Jl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Qe || a)) {
    if (((r = Re), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), $t(e, l), gt(r, e, l, -1));
    }
    return Uu(), (r = Bo(Error(N(421)))), Jl(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Uv.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (be = an(l.nextSibling)),
      (et = t),
      (ce = !0),
      (vt = null),
      e !== null &&
        ((ot[at++] = Ft),
        (ot[at++] = jt),
        (ot[at++] = Dn),
        (Ft = e.id),
        (jt = e.overflow),
        (Dn = t)),
      (t = Ou(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pa(e.return, t, n);
}
function Ho(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Zd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Ae(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wc(e, n, t);
        else if (e.tag === 19) wc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Fi(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ho(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Fi(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ho(t, !0, n, null, i);
        break;
      case 'together':
        Ho(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Rv(e, t, n) {
  switch (t.tag) {
    case 3:
      Jd(t), dr();
      break;
    case 5:
      kd(t);
      break;
    case 1:
      Xe(t.type) && Ti(t);
      break;
    case 4:
      _u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      re(Oi, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Gd(e, t, n)
            : (re(fe, fe.current & 1),
              (e = Bt(e, t, n)),
              e !== null ? e.sibling : null);
      re(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Zd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        re(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yd(e, t, n);
  }
  return Bt(e, t, n);
}
var qd, Fa, bd, eh;
qd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fa = function () {};
bd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Cn(Rt.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = ra(e, l)), (r = ra(e, r)), (i = []);
        break;
      case 'select':
        (l = he({}, l, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = oa(e, l)), (r = oa(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Pi);
    }
    ua(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (el.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (i = i || []).push(s, '' + u)
              : s !== 'suppressContentEditableWarning' &&
                s !== 'suppressHydrationWarning' &&
                (el.hasOwnProperty(s)
                  ? (u != null && s === 'onScroll' && ie('scroll', e),
                    i || a === u || (i = []))
                  : (i = i || []).push(s, u));
    }
    n && (i = i || []).push('style', n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
eh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zr(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Pv(e, t, n) {
  var r = t.pendingProps;
  switch ((yu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(t), null;
    case 1:
      return Xe(t.type) && Li(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pr(),
        oe(Ye),
        oe(Fe),
        Ru(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (Va(vt), (vt = null)))),
        Fa(e, t),
        Me(t),
        null
      );
    case 5:
      Cu(t);
      var l = Cn(dl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        bd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Me(t), null;
        }
        if (((e = Cn(Rt.current)), Yl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[_t] = t), (r[cl] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ie('cancel', r), ie('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ie('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Vr.length; l++) ie(Vr[l], r);
              break;
            case 'source':
              ie('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ie('error', r), ie('load', r);
              break;
            case 'details':
              ie('toggle', r);
              break;
            case 'input':
              Ls(r, i), ie('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ie('invalid', r);
              break;
            case 'textarea':
              Ns(r, i), ie('invalid', r);
          }
          ua(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ql(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ql(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : el.hasOwnProperty(o) &&
                  a != null &&
                  o === 'onScroll' &&
                  ie('scroll', r);
            }
          switch (n) {
            case 'input':
              Ul(r), Ts(r, i, !0);
              break;
            case 'textarea':
              Ul(r), Ds(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Pi);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Lf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[_t] = t),
            (e[cl] = r),
            qd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = sa(n, r)), n)) {
              case 'dialog':
                ie('cancel', e), ie('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ie('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Vr.length; l++) ie(Vr[l], e);
                l = r;
                break;
              case 'source':
                ie('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ie('error', e), ie('load', e), (l = r);
                break;
              case 'details':
                ie('toggle', e), (l = r);
                break;
              case 'input':
                Ls(e, r), (l = ra(e, r)), ie('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = he({}, r, { value: void 0 })),
                  ie('invalid', e);
                break;
              case 'textarea':
                Ns(e, r), (l = oa(e, r)), ie('invalid', e);
                break;
              default:
                l = r;
            }
            ua(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === 'style'
                  ? Df(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Tf(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && tl(e, u)
                        : typeof u == 'number' && tl(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (el.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && ie('scroll', e)
                          : u != null && nu(e, i, u, o));
              }
            switch (n) {
              case 'input':
                Ul(e), Ts(e, r, !1);
                break;
              case 'textarea':
                Ul(e), Ds(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + dn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? lr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      lr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Pi);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) eh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = Cn(dl.current)), Cn(Rt.current), Yl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_t] = t),
            (i = r.nodeValue !== n) && ((e = et), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ql(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ql(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_t] = t),
            (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (oe(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && be !== null && t.mode & 1 && !(t.flags & 128))
          gd(), dr(), (t.flags |= 98560), (i = !1);
        else if (((i = Yl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[_t] = t;
          } else
            dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (i = !1);
        } else vt !== null && (Va(vt), (vt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? _e === 0 && (_e = 3) : Uu())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        pr(), Fa(e, t), e === null && ul(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return Eu(t.type._context), Me(t), null;
    case 17:
      return Xe(t.type) && Li(), Me(t), null;
    case 19:
      if ((oe(fe), (i = t.memoizedState), i === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) zr(i, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    zr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ye() > vr &&
            ((t.flags |= 128), (r = !0), zr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !ce)
            )
              return Me(t), null;
          } else
            2 * ye() - i.renderingStartTime > vr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ye()),
          (t.sibling = null),
          (n = fe.current),
          re(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ze & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Lv(e, t) {
  switch ((yu(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && Li(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pr(),
        oe(Ye),
        oe(Fe),
        Ru(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Cu(t), null;
    case 13:
      if (
        (oe(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        dr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(fe), null;
    case 4:
      return pr(), null;
    case 10:
      return Eu(t.type._context), null;
    case 22:
    case 23:
      return Iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gl = !1,
  ze = !1,
  Tv = typeof WeakSet == 'function' ? WeakSet : Set,
  j = null;
function tr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function ja(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var Sc = !1;
function Nv(e, t) {
  if (((wa = _i), (e = id()), mu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var x;
              c !== n || (l !== 0 && c.nodeType !== 3) || (a = o + l),
                c !== i || (r !== 0 && c.nodeType !== 3) || (u = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (x = c.firstChild) !== null;

            )
              (d = c), (c = x);
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++s === l && (a = o),
                d === i && ++f === r && (u = o),
                (x = c.nextSibling) !== null)
              )
                break;
              (c = d), (d = c.parentNode);
            }
            c = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Sa = { focusedElem: e, selectionRange: n }, _i = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var k = y.memoizedProps,
                    L = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ht(t.type, k),
                      L,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          ve(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (y = Sc), (Sc = !1), y;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ja(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function lo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ia(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function th(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), th(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_t], delete t[cl], delete t[ka], delete t[dv], delete t[hv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function nh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ec(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || nh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ua(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ua(e, t, n), e = e.sibling; e !== null; ) Ua(e, t, n), (e = e.sibling);
}
function Aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), (e = e.sibling);
}
var Te = null,
  pt = !1;
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) rh(e, t, n), (n = n.sibling);
}
function rh(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
    try {
      Ct.onCommitFiberUnmount(Gi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || tr(n, t);
    case 6:
      var r = Te,
        l = pt;
      (Te = null),
        Jt(e, t, n),
        (Te = r),
        (pt = l),
        Te !== null &&
          (pt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (pt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fo(e.parentNode, n)
              : e.nodeType === 1 && Fo(e, n),
            il(e))
          : Fo(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (l = pt),
        (Te = n.stateNode.containerInfo),
        (pt = !0),
        Jt(e, t, n),
        (Te = r),
        (pt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ja(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Jt(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (tr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Jt(e, t, n);
      break;
    case 21:
      Jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), Jt(e, t, n), (ze = r))
        : Jt(e, t, n);
      break;
    default:
      Jt(e, t, n);
  }
}
function xc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tv()),
      t.forEach(function (r) {
        var l = Av.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Te = a.stateNode), (pt = !1);
              break e;
            case 3:
              (Te = a.stateNode.containerInfo), (pt = !0);
              break e;
            case 4:
              (Te = a.stateNode.containerInfo), (pt = !0);
              break e;
          }
          a = a.return;
        }
        if (Te === null) throw Error(N(160));
        rh(i, o, l), (Te = null), (pt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ve(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) lh(t, e), (t = t.sibling);
}
function lh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), xt(e), r & 4)) {
        try {
          Zr(3, e, e.return), lo(3, e);
        } catch (k) {
          ve(e, e.return, k);
        }
        try {
          Zr(5, e, e.return);
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      break;
    case 1:
      dt(t, e), xt(e), r & 512 && n !== null && tr(n, n.return);
      break;
    case 5:
      if (
        (dt(t, e),
        xt(e),
        r & 512 && n !== null && tr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          tl(l, '');
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && Rf(l, i),
              sa(a, o);
            var s = sa(a, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                c = u[o + 1];
              f === 'style'
                ? Df(l, c)
                : f === 'dangerouslySetInnerHTML'
                  ? Tf(l, c)
                  : f === 'children'
                    ? tl(l, c)
                    : nu(l, f, c, s);
            }
            switch (a) {
              case 'input':
                la(l, i);
                break;
              case 'textarea':
                Pf(l, i);
                break;
              case 'select':
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? lr(l, !!i.multiple, x, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? lr(l, !!i.multiple, i.defaultValue, !0)
                      : lr(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[cl] = i;
          } catch (k) {
            ve(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((dt(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (dt(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          il(t.containerInfo);
        } catch (k) {
          ve(e, e.return, k);
        }
      break;
    case 4:
      dt(t, e), xt(e);
      break;
    case 13:
      dt(t, e),
        xt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Fu = ye())),
        r & 4 && xc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (s = ze) || f), dt(t, e), (ze = s)) : dt(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (j = e, f = e.child; f !== null; ) {
            for (c = j = f; j !== null; ) {
              switch (((d = j), (x = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, d, d.return);
                  break;
                case 1:
                  tr(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (k) {
                      ve(r, n, k);
                    }
                  }
                  break;
                case 5:
                  tr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    _c(c);
                    continue;
                  }
              }
              x !== null ? ((x.return = d), (j = x)) : _c(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (l = c.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = c.stateNode),
                      (u = c.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (a.style.display = Nf('display', o)));
              } catch (k) {
                ve(e, e.return, k);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = s ? '' : c.memoizedProps;
              } catch (k) {
                ve(e, e.return, k);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      dt(t, e), xt(e), r & 4 && xc(e);
      break;
    case 21:
      break;
    default:
      dt(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (tl(l, ''), (r.flags &= -33));
          var i = Ec(e);
          Aa(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ec(e);
          Ua(e, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dv(e, t, n) {
  (j = e), ih(e);
}
function ih(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Gl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || ze;
        a = Gl;
        var s = ze;
        if (((Gl = o), (ze = u) && !s))
          for (j = l; j !== null; )
            (o = j),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Cc(l)
                : u !== null
                  ? ((u.return = o), (j = u))
                  : Cc(l);
        for (; i !== null; ) (j = i), ih(i), (i = i.sibling);
        (j = l), (Gl = a), (ze = s);
      }
      kc(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : kc(e);
  }
}
function kc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && ac(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ac(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && il(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ze || (t.flags & 512 && Ia(t));
      } catch (d) {
        ve(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function _c(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Cc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            lo(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, l, u);
            }
          }
          var i = t.return;
          try {
            Ia(t);
          } catch (u) {
            ve(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ia(t);
          } catch (u) {
            ve(t, o, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var Ov = Math.ceil,
  Ui = Ht.ReactCurrentDispatcher,
  Mu = Ht.ReactCurrentOwner,
  st = Ht.ReactCurrentBatchConfig,
  J = 0,
  Re = null,
  Se = null,
  Ne = 0,
  Ze = 0,
  nr = vn(0),
  _e = 0,
  vl = null,
  Mn = 0,
  io = 0,
  zu = 0,
  qr = null,
  Ke = null,
  Fu = 0,
  vr = 1 / 0,
  Ot = null,
  Ai = !1,
  $a = null,
  sn = null,
  Zl = !1,
  nn = null,
  $i = 0,
  br = 0,
  Ba = null,
  di = -1,
  hi = 0;
function $e() {
  return J & 6 ? ye() : di !== -1 ? di : (di = ye());
}
function cn(e) {
  return e.mode & 1
    ? J & 2 && Ne !== 0
      ? Ne & -Ne
      : mv.transition !== null
        ? (hi === 0 && (hi = Vf()), hi)
        : ((e = q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gf(e.type))),
          e)
    : 1;
}
function gt(e, t, n, r) {
  if (50 < br) throw ((br = 0), (Ba = null), Error(N(185)));
  El(e, n, r),
    (!(J & 2) || e !== Re) &&
      (e === Re && (!(J & 2) && (io |= n), _e === 4 && en(e, Ne)),
      Je(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((vr = ye() + 500), to && yn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  mm(e, t);
  var r = ki(e, e === Re ? Ne : 0);
  if (r === 0)
    n !== null && zs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && zs(n), t === 1))
      e.tag === 0 ? pv(Rc.bind(null, e)) : md(Rc.bind(null, e)),
        cv(function () {
          !(J & 6) && yn();
        }),
        (n = null);
    else {
      switch (Wf(r)) {
        case 1:
          n = au;
          break;
        case 4:
          n = Bf;
          break;
        case 16:
          n = xi;
          break;
        case 536870912:
          n = Hf;
          break;
        default:
          n = xi;
      }
      n = hh(n, oh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function oh(e, t) {
  if (((di = -1), (hi = 0), J & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = ki(e, e === Re ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bi(e, r);
  else {
    t = r;
    var l = J;
    J |= 2;
    var i = uh();
    (Re !== e || Ne !== t) && ((Ot = null), (vr = ye() + 500), Ln(e, t));
    do
      try {
        Fv();
        break;
      } catch (a) {
        ah(e, a);
      }
    while (!0);
    Su(),
      (Ui.current = i),
      (J = l),
      Se !== null ? (t = 0) : ((Re = null), (Ne = 0), (t = _e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = pa(e)), l !== 0 && ((r = l), (t = Ha(e, l)))), t === 1)
    )
      throw ((n = vl), Ln(e, 0), en(e, r), Je(e, ye()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Mv(l) &&
          ((t = Bi(e, r)),
          t === 2 && ((i = pa(e)), i !== 0 && ((r = i), (t = Ha(e, i)))),
          t === 1))
      )
        throw ((n = vl), Ln(e, 0), en(e, r), Je(e, ye()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          xn(e, Ke, Ot);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = Fu + 500 - ye()), 10 < t))
          ) {
            if (ki(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = xa(xn.bind(null, e, Ke, Ot), t);
            break;
          }
          xn(e, Ke, Ot);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - yt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Ov(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xa(xn.bind(null, e, Ke, Ot), r);
            break;
          }
          xn(e, Ke, Ot);
          break;
        case 5:
          xn(e, Ke, Ot);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Je(e, ye()), e.callbackNode === n ? oh.bind(null, e) : null;
}
function Ha(e, t) {
  var n = qr;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = Bi(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && Va(t)),
    e
  );
}
function Va(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function Mv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!wt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~zu,
      t &= ~io,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Rc(e) {
  if (J & 6) throw Error(N(327));
  sr();
  var t = ki(e, 0);
  if (!(t & 1)) return Je(e, ye()), null;
  var n = Bi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pa(e);
    r !== 0 && ((t = r), (n = Ha(e, r)));
  }
  if (n === 1) throw ((n = vl), Ln(e, 0), en(e, t), Je(e, ye()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, Ke, Ot),
    Je(e, ye()),
    null
  );
}
function ju(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((vr = ye() + 500), to && yn());
  }
}
function zn(e) {
  nn !== null && nn.tag === 0 && !(J & 6) && sr();
  var t = J;
  J |= 1;
  var n = st.transition,
    r = q;
  try {
    if (((st.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (st.transition = n), (J = t), !(J & 6) && yn();
  }
}
function Iu() {
  (Ze = nr.current), oe(nr);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sv(n)), Se !== null))
    for (n = Se.return; n !== null; ) {
      var r = n;
      switch ((yu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Li();
          break;
        case 3:
          pr(), oe(Ye), oe(Fe), Ru();
          break;
        case 5:
          Cu(r);
          break;
        case 4:
          pr();
          break;
        case 13:
          oe(fe);
          break;
        case 19:
          oe(fe);
          break;
        case 10:
          Eu(r.type._context);
          break;
        case 22:
        case 23:
          Iu();
      }
      n = n.return;
    }
  if (
    ((Re = e),
    (Se = e = fn(e.current, null)),
    (Ne = Ze = t),
    (_e = 0),
    (vl = null),
    (zu = io = Mn = 0),
    (Ke = qr = null),
    _n !== null)
  ) {
    for (t = 0; t < _n.length; t++)
      if (((n = _n[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    _n = null;
  }
  return e;
}
function ah(e, t) {
  do {
    var n = Se;
    try {
      if ((Su(), (si.current = Ii), ji)) {
        for (var r = de.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ji = !1;
      }
      if (
        ((On = 0),
        (Ce = ke = de = null),
        (Gr = !1),
        (hl = 0),
        (Mu.current = null),
        n === null || n.return === null)
      ) {
        (_e = 1), (vl = t), (Se = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Ne),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = hc(o);
          if (x !== null) {
            (x.flags &= -257),
              pc(x, o, a, i, t),
              x.mode & 1 && dc(i, s, t),
              (t = x),
              (u = s);
            var y = t.updateQueue;
            if (y === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              dc(i, s, t), Uu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (ce && a.mode & 1) {
          var L = hc(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              pc(L, o, a, i, t),
              gu(mr(u, a));
            break e;
          }
        }
        (i = u = mr(u, a)),
          _e !== 4 && (_e = 2),
          qr === null ? (qr = [i]) : qr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Wd(i, u, t);
              oc(i, p);
              break e;
            case 1:
              a = u;
              var h = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (sn === null || !sn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Kd(i, a, t);
                oc(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ch(n);
    } catch (R) {
      (t = R), Se === n && n !== null && (Se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uh() {
  var e = Ui.current;
  return (Ui.current = Ii), e === null ? Ii : e;
}
function Uu() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    Re === null || (!(Mn & 268435455) && !(io & 268435455)) || en(Re, Ne);
}
function Bi(e, t) {
  var n = J;
  J |= 2;
  var r = uh();
  (Re !== e || Ne !== t) && ((Ot = null), Ln(e, t));
  do
    try {
      zv();
      break;
    } catch (l) {
      ah(e, l);
    }
  while (!0);
  if ((Su(), (J = n), (Ui.current = r), Se !== null)) throw Error(N(261));
  return (Re = null), (Ne = 0), _e;
}
function zv() {
  for (; Se !== null; ) sh(Se);
}
function Fv() {
  for (; Se !== null && !om(); ) sh(Se);
}
function sh(e) {
  var t = dh(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? ch(e) : (Se = t),
    (Mu.current = null);
}
function ch(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lv(n, t)), n !== null)) {
        (n.flags &= 32767), (Se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (Se = null);
        return;
      }
    } else if (((n = Pv(n, t, Ze)), n !== null)) {
      Se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function xn(e, t, n) {
  var r = q,
    l = st.transition;
  try {
    (st.transition = null), (q = 1), jv(e, t, n, r);
  } finally {
    (st.transition = l), (q = r);
  }
  return null;
}
function jv(e, t, n, r) {
  do sr();
  while (nn !== null);
  if (J & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (vm(e, i),
    e === Re && ((Se = Re = null), (Ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zl ||
      ((Zl = !0),
      hh(xi, function () {
        return sr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = st.transition), (st.transition = null);
    var o = q;
    q = 1;
    var a = J;
    (J |= 4),
      (Mu.current = null),
      Nv(e, n),
      lh(n, e),
      nv(Sa),
      (_i = !!wa),
      (Sa = wa = null),
      (e.current = n),
      Dv(n),
      am(),
      (J = a),
      (q = o),
      (st.transition = i);
  } else e.current = n;
  if (
    (Zl && ((Zl = !1), (nn = e), ($i = l)),
    (i = e.pendingLanes),
    i === 0 && (sn = null),
    cm(n.stateNode),
    Je(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ai) throw ((Ai = !1), (e = $a), ($a = null), e);
  return (
    $i & 1 && e.tag !== 0 && sr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ba ? br++ : ((br = 0), (Ba = e))) : (br = 0),
    yn(),
    null
  );
}
function sr() {
  if (nn !== null) {
    var e = Wf($i),
      t = st.transition,
      n = q;
    try {
      if (((st.transition = null), (q = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), ($i = 0), J & 6)) throw Error(N(331));
        var l = J;
        for (J |= 4, j = e.current; j !== null; ) {
          var i = j,
            o = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (j = s; j !== null; ) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (j = c);
                  else
                    for (; j !== null; ) {
                      f = j;
                      var d = f.sibling,
                        x = f.return;
                      if ((th(f), f === s)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = x), (j = d);
                        break;
                      }
                      j = x;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var k = y.child;
                if (k !== null) {
                  y.child = null;
                  do {
                    var L = k.sibling;
                    (k.sibling = null), (k = L);
                  } while (k !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (j = o);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (j = p);
                break e;
              }
              j = i.return;
            }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          o = j;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (j = m);
          else
            e: for (o = h; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lo(9, a);
                  }
                } catch (R) {
                  ve(a, a.return, R);
                }
              if (a === o) {
                j = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (j = S);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((J = l), yn(), Ct && typeof Ct.onPostCommitFiberRoot == 'function')
        )
          try {
            Ct.onPostCommitFiberRoot(Gi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (st.transition = t);
    }
  }
  return !1;
}
function Pc(e, t, n) {
  (t = mr(n, t)),
    (t = Wd(e, t, 1)),
    (e = un(e, t, 1)),
    (t = $e()),
    e !== null && (El(e, 1, t), Je(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) Pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (sn === null || !sn.has(r)))
        ) {
          (e = mr(n, e)),
            (e = Kd(t, e, 1)),
            (t = un(t, e, 1)),
            (e = $e()),
            t !== null && (El(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Iv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Re === e &&
      (Ne & n) === n &&
      (_e === 4 || (_e === 3 && (Ne & 130023424) === Ne && 500 > ye() - Fu)
        ? Ln(e, 0)
        : (zu |= n)),
    Je(e, t);
}
function fh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bl), (Bl <<= 1), !(Bl & 130023424) && (Bl = 4194304))
      : (t = 1));
  var n = $e();
  (e = $t(e, t)), e !== null && (El(e, t, n), Je(e, n));
}
function Uv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), fh(e, n);
}
function Av(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), fh(e, n);
}
var dh;
dh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), Rv(e, t, n);
      Qe = !!(e.flags & 131072);
    }
  else (Qe = !1), ce && t.flags & 1048576 && vd(t, Di, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fi(e, t), (e = t.pendingProps);
      var l = fr(t, Fe.current);
      ur(t, n), (l = Lu(null, t, r, e, l, n));
      var i = Tu();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((i = !0), Ti(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ku(t),
            (l.updater = ro),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ta(t, r, e, n),
            (t = Oa(null, t, r, !0, i, n)))
          : ((t.tag = 0), ce && i && vu(t), Ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fi(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Bv(r)),
          (e = ht(r, e)),
          l)
        ) {
          case 0:
            t = Da(null, t, r, e, n);
            break e;
          case 1:
            t = yc(null, t, r, e, n);
            break e;
          case 11:
            t = mc(null, t, r, e, n);
            break e;
          case 14:
            t = vc(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        Da(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        yc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Jd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          xd(e, t),
          zi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = mr(Error(N(423)), t)), (t = gc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mr(Error(N(424)), t)), (t = gc(e, t, r, n, l));
            break e;
          } else
            for (
              be = an(t.stateNode.containerInfo.firstChild),
                et = t,
                ce = !0,
                vt = null,
                n = Sd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dr(), r === l)) {
            t = Bt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        kd(t),
        e === null && Ra(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ea(r, l) ? (o = null) : i !== null && Ea(r, i) && (t.flags |= 32),
        Xd(e, t),
        Ae(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ra(t), null;
    case 13:
      return Gd(e, t, n);
    case 4:
      return (
        _u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        mc(e, t, r, l, n)
      );
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          re(Oi, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (wt(i.value, o)) {
            if (i.children === l.children && !Ye.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = It(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Pa(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Pa(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ur(t, n),
        (l = ct(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ht(r, t.pendingProps)),
        (l = ht(r.type, l)),
        vc(e, t, r, l, n)
      );
    case 15:
      return Qd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        fi(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), Ti(t)) : (e = !1),
        ur(t, n),
        Vd(t, r, l),
        Ta(t, r, l, n),
        Oa(null, t, r, !0, e, n)
      );
    case 19:
      return Zd(e, t, n);
    case 22:
      return Yd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function hh(e, t) {
  return $f(e, t);
}
function $v(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new $v(e, t, n, r);
}
function Au(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bv(e) {
  if (typeof e == 'function') return Au(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lu)) return 11;
    if (e === iu) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function pi(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Au(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Qn:
        return Tn(n.children, l, i, t);
      case ru:
        (o = 8), (l |= 8);
        break;
      case bo:
        return (
          (e = ut(12, n, t, l | 2)), (e.elementType = bo), (e.lanes = i), e
        );
      case ea:
        return (e = ut(13, n, t, l)), (e.elementType = ea), (e.lanes = i), e;
      case ta:
        return (e = ut(19, n, t, l)), (e.elementType = ta), (e.lanes = i), e;
      case kf:
        return oo(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ef:
              o = 10;
              break e;
            case xf:
              o = 9;
              break e;
            case lu:
              o = 11;
              break e;
            case iu:
              o = 14;
              break e;
            case Zt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = ut(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Tn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function oo(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = kf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vo(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Wo(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hv(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _o(0)),
    (this.expirationTimes = _o(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _o(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function $u(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new Hv(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ut(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ku(i),
    e
  );
}
function Vv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ph(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (Un(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return pd(e, n, t);
  }
  return t;
}
function mh(e, t, n, r, l, i, o, a, u) {
  return (
    (e = $u(n, r, !0, e, l, i, o, a, u)),
    (e.context = ph(null)),
    (n = e.current),
    (r = $e()),
    (l = cn(n)),
    (i = It(r, l)),
    (i.callback = t ?? null),
    un(n, i, l),
    (e.current.lanes = l),
    El(e, l, r),
    Je(e, r),
    e
  );
}
function ao(e, t, n, r) {
  var l = t.current,
    i = $e(),
    o = cn(l);
  return (
    (n = ph(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(l, t, o)),
    e !== null && (gt(e, l, o, i), ui(e, l, o)),
    o
  );
}
function Hi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bu(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function Wv() {
  return null;
}
var vh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hu(e) {
  this._internalRoot = e;
}
uo.prototype.render = Hu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ao(e, t, null, null);
};
uo.prototype.unmount = Hu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function () {
      ao(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function uo(e) {
  this._internalRoot = e;
}
uo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Yf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++);
    bt.splice(n, 0, e), n === 0 && Jf(e);
  }
};
function Vu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function so(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Tc() {}
function Kv(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var s = Hi(o);
        i.call(s);
      };
    }
    var o = mh(t, r, e, 0, null, !1, !1, '', Tc);
    return (
      (e._reactRootContainer = o),
      (e[At] = o.current),
      ul(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = Hi(u);
      a.call(s);
    };
  }
  var u = $u(e, 0, !1, null, null, !1, !1, '', Tc);
  return (
    (e._reactRootContainer = u),
    (e[At] = u.current),
    ul(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      ao(t, u, n, r);
    }),
    u
  );
}
function co(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = Hi(o);
        a.call(u);
      };
    }
    ao(t, o, e, l);
  } else o = Kv(n, t, e, l, r);
  return Hi(o);
}
Kf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 &&
          (uu(t, n | 1), Je(t, ye()), !(J & 6) && ((vr = ye() + 500), yn()));
      }
      break;
    case 13:
      zn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var l = $e();
          gt(r, e, 1, l);
        }
      }),
        Bu(e, 1);
  }
};
su = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = $e();
      gt(t, e, 134217728, n);
    }
    Bu(e, 134217728);
  }
};
Qf = function (e) {
  if (e.tag === 13) {
    var t = cn(e),
      n = $t(e, t);
    if (n !== null) {
      var r = $e();
      gt(n, e, t, r);
    }
    Bu(e, t);
  }
};
Yf = function () {
  return q;
};
Xf = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
fa = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((la(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = eo(r);
            if (!l) throw Error(N(90));
            Cf(r), la(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Pf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && lr(e, !!n.multiple, t, !1);
  }
};
zf = ju;
Ff = zn;
var Qv = { usingClientEntryPoint: !1, Events: [kl, Gn, eo, Of, Mf, ju] },
  Fr = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Yv = {
    bundleType: Fr.bundleType,
    version: Fr.version,
    rendererPackageName: Fr.rendererPackageName,
    rendererConfig: Fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Uf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fr.findFiberByHostInstance || Wv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ql.isDisabled && ql.supportsFiber)
    try {
      (Gi = ql.inject(Yv)), (Ct = ql);
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qv;
nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vu(t)) throw Error(N(200));
  return Vv(e, t, null, n);
};
nt.createRoot = function (e, t) {
  if (!Vu(e)) throw Error(N(299));
  var n = !1,
    r = '',
    l = vh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = $u(e, 1, !1, null, null, n, !1, r, l)),
    (e[At] = t.current),
    ul(e.nodeType === 8 ? e.parentNode : e),
    new Hu(t)
  );
};
nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = Uf(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
  return zn(e);
};
nt.hydrate = function (e, t, n) {
  if (!so(t)) throw Error(N(200));
  return co(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
  if (!Vu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = vh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = mh(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[At] = t.current),
    ul(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new uo(t);
};
nt.render = function (e, t, n) {
  if (!so(t)) throw Error(N(200));
  return co(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
  if (!so(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (zn(function () {
        co(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
nt.unstable_batchedUpdates = ju;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!so(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return co(e, t, n, !1, r);
};
nt.version = '18.3.1-next-f1338f8080-20240426';
function yh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yh);
    } catch (e) {
      console.error(e);
    }
}
yh(), (yf.exports = nt);
var gh = yf.exports;
const Xv = lf(gh),
  Jv = rf({ __proto__: null, default: Xv }, [gh]);
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function se() {
  return (
    (se = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    se.apply(this, arguments)
  );
}
var we;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(we || (we = {}));
const Nc = 'popstate';
function a1(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return yl(
      '',
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : pn(l);
  }
  return Zv(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function yr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Gv() {
  return Math.random().toString(36).substr(2, 8);
}
function Dc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function yl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    se(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Vt(t) : t,
      { state: n, key: (t && t.key) || r || Gv() },
    )
  );
}
function pn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Vt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Zv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = we.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), o.replaceState(se({}, o.state, { idx: s }), ''));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    a = we.Pop;
    let L = f(),
      p = L == null ? null : L - s;
    (s = L), u && u({ action: a, location: k.location, delta: p });
  }
  function d(L, p) {
    a = we.Push;
    let h = yl(k.location, L, p);
    s = f() + 1;
    let m = Dc(h, s),
      S = k.createHref(h);
    try {
      o.pushState(m, '', S);
    } catch (R) {
      if (R instanceof DOMException && R.name === 'DataCloneError') throw R;
      l.location.assign(S);
    }
    i && u && u({ action: a, location: k.location, delta: 1 });
  }
  function x(L, p) {
    a = we.Replace;
    let h = yl(k.location, L, p);
    s = f();
    let m = Dc(h, s),
      S = k.createHref(h);
    o.replaceState(m, '', S),
      i && u && u({ action: a, location: k.location, delta: 0 });
  }
  function y(L) {
    let p = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      h = typeof L == 'string' ? L : pn(L);
    return (
      (h = h.replace(/ $/, '%20')),
      V(
        p,
        'No window.location.(origin|href) available to create URL for href: ' +
          h,
      ),
      new URL(h, p)
    );
  }
  let k = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(L) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Nc, c),
        (u = L),
        () => {
          l.removeEventListener(Nc, c), (u = null);
        }
      );
    },
    createHref(L) {
      return t(l, L);
    },
    createURL: y,
    encodeLocation(L) {
      let p = y(L);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: x,
    go(L) {
      return o.go(L);
    },
  };
  return k;
}
var ee;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ee || (ee = {}));
const qv = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function bv(e) {
  return e.index === !0;
}
function gl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, String(i)],
        a = typeof l.id == 'string' ? l.id : o.join('-');
      if (
        (V(
          l.index !== !0 || !l.children,
          'Cannot specify children on an index route',
        ),
        V(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        bv(l))
      ) {
        let u = se({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = se({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = gl(l.children, t, o, r)), u
        );
      }
    })
  );
}
function zt(e, t, n) {
  return n === void 0 && (n = '/'), mi(e, t, n, !1);
}
function mi(e, t, n, r) {
  let l = typeof t == 'string' ? Vt(t) : t,
    i = St(l.pathname || '/', n);
  if (i == null) return null;
  let o = wh(e);
  ty(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let s = dy(i);
    a = cy(o[u], s, r);
  }
  return a;
}
function ey(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function wh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith('/') &&
      (V(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Pt([r, u.relativePath]),
      f = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (V(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".'),
      ),
      wh(i.children, t, f, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: uy(s, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
      else for (let u of Sh(i.path)) l(i, o, u);
    }),
    t
  );
}
function Sh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = Sh(r.join('/')),
    a = [];
  return (
    a.push(...o.map((u) => (u === '' ? i : [i, u].join('/')))),
    l && a.push(...o),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function ty(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : sy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const ny = /^:[\w-]+$/,
  ry = 3,
  ly = 2,
  iy = 1,
  oy = 10,
  ay = -2,
  Oc = (e) => e === '*';
function uy(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Oc) && (r += ay),
    t && (r += ly),
    n
      .filter((l) => !Oc(l))
      .reduce((l, i) => l + (ny.test(i) ? ry : i === '' ? iy : oy), r)
  );
}
function sy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function cy(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    i = '/',
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      f = i === '/' ? t : t.slice(i.length) || '/',
      c = Vi(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        f,
      ),
      d = u.route;
    if (
      (!c &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (c = Vi(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          f,
        )),
      !c)
    )
      return null;
    Object.assign(l, c.params),
      o.push({
        params: l,
        pathname: Pt([i, c.pathname]),
        pathnameBase: my(Pt([i, c.pathnameBase])),
        route: d,
      }),
      c.pathnameBase !== '/' && (i = Pt([i, c.pathnameBase]));
  }
  return o;
}
function Vi(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fy(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, c) => {
      let { paramName: d, isOptional: x } = f;
      if (d === '*') {
        let k = a[c] || '';
        o = i.slice(0, i.length - k.length).replace(/(.)\/+$/, '$1');
      }
      const y = a[c];
      return (
        x && !y ? (s[d] = void 0) : (s[d] = (y || '').replace(/%2F/g, '/')), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function fy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    yr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function dy(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      yr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function St(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function hy(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Vt(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : py(n, t)) : t,
    search: vy(r),
    hash: yy(l),
  };
}
function py(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Ko(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Eh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Wu(e, t) {
  let n = Eh(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ku(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Vt(e))
    : ((l = se({}, e)),
      V(
        !l.pathname || !l.pathname.includes('?'),
        Ko('?', 'pathname', 'search', l),
      ),
      V(
        !l.pathname || !l.pathname.includes('#'),
        Ko('#', 'pathname', 'hash', l),
      ),
      V(!l.search || !l.search.includes('#'), Ko('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && o.startsWith('..')) {
      let d = o.split('/');
      for (; d[0] === '..'; ) d.shift(), (c -= 1);
      l.pathname = d.join('/');
    }
    a = c >= 0 ? t[c] : '/';
  }
  let u = hy(l, a),
    s = o && o !== '/' && o.endsWith('/'),
    f = (i || o === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || f) && (u.pathname += '/'), u;
}
const Pt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  my = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  vy = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  yy = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class gy {
  constructor(t, n) {
    (this.type = 'DataWithResponseInit'),
      (this.data = t),
      (this.init = n || null);
  }
}
function wy(e, t) {
  return new gy(e, typeof t == 'number' ? { status: t } : t);
}
class Wi extends Error {}
class Sy {
  constructor(t, n) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      V(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects',
      );
    let r;
    (this.abortPromise = new Promise((i, o) => (r = o))),
      (this.controller = new AbortController());
    let l = () => r(new Wi('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', l)),
      this.controller.signal.addEventListener('abort', l),
      (this.data = Object.entries(t).reduce((i, o) => {
        let [a, u] = o;
        return Object.assign(i, { [a]: this.trackPromise(a, u) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = n);
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, void 0, l),
      (l) => this.onSettle(r, t, l),
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, '_tracked', { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof Wi)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => r }),
        Promise.reject(r)
      );
    if (
      (this.pendingKeysSet.delete(n),
      this.done && this.unlistenAbortSignal(),
      r === void 0 && l === void 0)
    ) {
      let i = new Error(
        'Deferred data for key "' +
          n +
          '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.',
      );
      return (
        Object.defineProperty(t, '_error', { get: () => i }),
        this.emit(!1, n),
        Promise.reject(i)
      );
    }
    return l === void 0
      ? (Object.defineProperty(t, '_error', { get: () => r }),
        this.emit(!1, n),
        Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => l }),
        this.emit(!1, n),
        l);
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)),
      this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((l) => {
          this.subscribe((i) => {
            t.removeEventListener('abort', r), (i || this.done) && l(i);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      V(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds',
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: xy(l) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function Ey(e) {
  return e instanceof Promise && e._tracked === !0;
}
function xy(e) {
  if (!Ey(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const xh = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == 'number'
    ? (r = { status: r })
    : typeof r.status > 'u' && (r.status = 302);
  let l = new Headers(r.headers);
  return l.set('Location', t), new Response(null, se({}, r, { headers: l }));
};
class Fn {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function xr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const kh = ['post', 'put', 'patch', 'delete'],
  ky = new Set(kh),
  _y = ['get', ...kh],
  Cy = new Set(_y),
  Ry = new Set([301, 302, 303, 307, 308]),
  Py = new Set([307, 308]),
  Qo = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ly = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  jr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Qu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ty = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  _h = 'remix-router-transitions';
function u1(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  V(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter',
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    l = (E) => ({ hasErrorBoundary: w(E) });
  } else l = Ty;
  let i = {},
    o = gl(e.routes, l, void 0, i),
    a,
    u = e.basename || '/',
    s = e.unstable_dataStrategy || zy,
    f = e.unstable_patchRoutesOnNavigation,
    c = se(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    d = null,
    x = new Set(),
    y = 1e3,
    k = new Set(),
    L = null,
    p = null,
    h = null,
    m = e.hydrationData != null,
    S = zt(o, e.history.location, u),
    R = null;
  if (S == null && !f) {
    let w = Ue(404, { pathname: e.history.location.pathname }),
      { matches: E, route: _ } = Hc(o);
    (S = E), (R = { [_.id]: w });
  }
  S &&
    !e.hydrationData &&
    Nl(S, o, e.history.location.pathname).active &&
    (S = null);
  let C;
  if (S)
    if (S.some((w) => w.route.lazy)) C = !1;
    else if (!S.some((w) => w.route.loader)) C = !0;
    else if (c.v7_partialHydration) {
      let w = e.hydrationData ? e.hydrationData.loaderData : null,
        E = e.hydrationData ? e.hydrationData.errors : null,
        _ = (P) =>
          P.route.loader
            ? typeof P.route.loader == 'function' &&
              P.route.loader.hydrate === !0
              ? !1
              : (w && w[P.route.id] !== void 0) ||
                (E && E[P.route.id] !== void 0)
            : !0;
      if (E) {
        let P = S.findIndex((F) => E[F.route.id] !== void 0);
        C = S.slice(0, P + 1).every(_);
      } else C = S.every(_);
    } else C = e.hydrationData != null;
  else if (((C = !1), (S = []), c.v7_partialHydration)) {
    let w = Nl(null, o, e.history.location.pathname);
    w.active && w.matches && (S = w.matches);
  }
  let T,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: C,
      navigation: Qo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || R,
      fetchers: new Map(),
      blockers: new Map(),
    },
    M = we.Pop,
    O = !1,
    A,
    X = !1,
    pe = new Map(),
    ae = null,
    xe = !1,
    je = !1,
    Kt = [],
    z = new Set(),
    I = new Map(),
    H = 0,
    te = -1,
    le = new Map(),
    Ve = new Set(),
    We = new Map(),
    Tt = new Map(),
    Pe = new Set(),
    lt = new Map(),
    wn = new Map(),
    tp = new Map(),
    mo = !1;
  function np() {
    if (
      ((d = e.history.listen((w) => {
        let { action: E, location: _, delta: P } = w;
        if (mo) {
          mo = !1;
          return;
        }
        yr(
          wn.size === 0 || P != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let F = ys({
          currentLocation: v.location,
          nextLocation: _,
          historyAction: E,
        });
        if (F && P != null) {
          (mo = !0),
            e.history.go(P * -1),
            Ll(F, {
              state: 'blocked',
              location: _,
              proceed() {
                Ll(F, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  e.history.go(P);
              },
              reset() {
                let U = new Map(v.blockers);
                U.set(F, jr), Ie({ blockers: U });
              },
            });
          return;
        }
        return Sn(E, _);
      })),
      n)
    ) {
      Yy(t, pe);
      let w = () => Xy(t, pe);
      t.addEventListener('pagehide', w),
        (ae = () => t.removeEventListener('pagehide', w));
    }
    return v.initialized || Sn(we.Pop, v.location, { initialHydration: !0 }), T;
  }
  function rp() {
    d && d(),
      ae && ae(),
      x.clear(),
      A && A.abort(),
      v.fetchers.forEach((w, E) => Pl(E)),
      v.blockers.forEach((w, E) => vs(E));
  }
  function lp(w) {
    return x.add(w), () => x.delete(w);
  }
  function Ie(w, E) {
    E === void 0 && (E = {}), (v = se({}, v, w));
    let _ = [],
      P = [];
    c.v7_fetcherPersist &&
      v.fetchers.forEach((F, U) => {
        F.state === 'idle' && (Pe.has(U) ? P.push(U) : _.push(U));
      }),
      [...x].forEach((F) =>
        F(v, {
          deletedFetchers: P,
          unstable_viewTransitionOpts: E.viewTransitionOpts,
          unstable_flushSync: E.flushSync === !0,
        }),
      ),
      c.v7_fetcherPersist &&
        (_.forEach((F) => v.fetchers.delete(F)), P.forEach((F) => Pl(F)));
  }
  function An(w, E, _) {
    var P, F;
    let { flushSync: U } = _ === void 0 ? {} : _,
      B =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        mt(v.navigation.formMethod) &&
        v.navigation.state === 'loading' &&
        ((P = w.state) == null ? void 0 : P._isRedirect) !== !0,
      D;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (D = E.actionData)
        : (D = null)
      : B
        ? (D = v.actionData)
        : (D = null);
    let W = E.loaderData
        ? $c(v.loaderData, E.loaderData, E.matches || [], E.errors)
        : v.loaderData,
      $ = v.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((Z, ne) => $.set(ne, jr)));
    let K =
      O === !0 ||
      (v.navigation.formMethod != null &&
        mt(v.navigation.formMethod) &&
        ((F = w.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      xe ||
        M === we.Pop ||
        (M === we.Push
          ? e.history.push(w, w.state)
          : M === we.Replace && e.history.replace(w, w.state));
    let b;
    if (M === we.Pop) {
      let Z = pe.get(v.location.pathname);
      Z && Z.has(w.pathname)
        ? (b = { currentLocation: v.location, nextLocation: w })
        : pe.has(w.pathname) &&
          (b = { currentLocation: w, nextLocation: v.location });
    } else if (X) {
      let Z = pe.get(v.location.pathname);
      Z
        ? Z.add(w.pathname)
        : ((Z = new Set([w.pathname])), pe.set(v.location.pathname, Z)),
        (b = { currentLocation: v.location, nextLocation: w });
    }
    Ie(
      se({}, E, {
        actionData: D,
        loaderData: W,
        historyAction: M,
        location: w,
        initialized: !0,
        navigation: Qo,
        revalidation: 'idle',
        restoreScrollPosition: ws(w, E.matches || v.matches),
        preventScrollReset: K,
        blockers: $,
      }),
      { viewTransitionOpts: b, flushSync: U === !0 },
    ),
      (M = we.Pop),
      (O = !1),
      (X = !1),
      (xe = !1),
      (je = !1),
      (Kt = []);
  }
  async function ss(w, E) {
    if (typeof w == 'number') {
      e.history.go(w);
      return;
    }
    let _ = Wa(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        w,
        c.v7_relativeSplatPath,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative,
      ),
      {
        path: P,
        submission: F,
        error: U,
      } = Mc(c.v7_normalizeFormMethod, !1, _, E),
      B = v.location,
      D = yl(v.location, P, E && E.state);
    D = se({}, D, e.history.encodeLocation(D));
    let W = E && E.replace != null ? E.replace : void 0,
      $ = we.Push;
    W === !0
      ? ($ = we.Replace)
      : W === !1 ||
        (F != null &&
          mt(F.formMethod) &&
          F.formAction === v.location.pathname + v.location.search &&
          ($ = we.Replace));
    let K =
        E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
      b = (E && E.unstable_flushSync) === !0,
      Z = ys({ currentLocation: B, nextLocation: D, historyAction: $ });
    if (Z) {
      Ll(Z, {
        state: 'blocked',
        location: D,
        proceed() {
          Ll(Z, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: D,
          }),
            ss(w, E);
        },
        reset() {
          let ne = new Map(v.blockers);
          ne.set(Z, jr), Ie({ blockers: ne });
        },
      });
      return;
    }
    return await Sn($, D, {
      submission: F,
      pendingError: U,
      preventScrollReset: K,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition,
      flushSync: b,
    });
  }
  function ip() {
    if (
      (vo(),
      Ie({ revalidation: 'loading' }),
      v.navigation.state !== 'submitting')
    ) {
      if (v.navigation.state === 'idle') {
        Sn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Sn(M || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function Sn(w, E, _) {
    A && A.abort(),
      (A = null),
      (M = w),
      (xe = (_ && _.startUninterruptedRevalidation) === !0),
      mp(v.location, v.matches),
      (O = (_ && _.preventScrollReset) === !0),
      (X = (_ && _.enableViewTransition) === !0);
    let P = a || o,
      F = _ && _.overrideNavigation,
      U = zt(P, E, u),
      B = (_ && _.flushSync) === !0,
      D = Nl(U, P, E.pathname);
    if ((D.active && D.matches && (U = D.matches), !U)) {
      let { error: G, notFoundMatches: Le, route: ge } = yo(E.pathname);
      An(
        E,
        { matches: Le, loaderData: {}, errors: { [ge.id]: G } },
        { flushSync: B },
      );
      return;
    }
    if (
      v.initialized &&
      !je &&
      $y(v.location, E) &&
      !(_ && _.submission && mt(_.submission.formMethod))
    ) {
      An(E, { matches: U }, { flushSync: B });
      return;
    }
    A = new AbortController();
    let W = Wn(e.history, E, A.signal, _ && _.submission),
      $;
    if (_ && _.pendingError)
      $ = [rr(U).route.id, { type: ee.error, error: _.pendingError }];
    else if (_ && _.submission && mt(_.submission.formMethod)) {
      let G = await op(W, E, _.submission, U, D.active, {
        replace: _.replace,
        flushSync: B,
      });
      if (G.shortCircuited) return;
      if (G.pendingActionResult) {
        let [Le, ge] = G.pendingActionResult;
        if (qe(ge) && xr(ge.error) && ge.error.status === 404) {
          (A = null),
            An(E, {
              matches: G.matches,
              loaderData: {},
              errors: { [Le]: ge.error },
            });
          return;
        }
      }
      (U = G.matches || U),
        ($ = G.pendingActionResult),
        (F = Yo(E, _.submission)),
        (B = !1),
        (D.active = !1),
        (W = Wn(e.history, W.url, W.signal));
    }
    let {
      shortCircuited: K,
      matches: b,
      loaderData: Z,
      errors: ne,
    } = await ap(
      W,
      E,
      U,
      D.active,
      F,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      B,
      $,
    );
    K ||
      ((A = null),
      An(E, se({ matches: b || U }, Bc($), { loaderData: Z, errors: ne })));
  }
  async function op(w, E, _, P, F, U) {
    U === void 0 && (U = {}), vo();
    let B = Ky(E, _);
    if ((Ie({ navigation: B }, { flushSync: U.flushSync === !0 }), F)) {
      let $ = await Dl(P, E.pathname, w.signal);
      if ($.type === 'aborted') return { shortCircuited: !0 };
      if ($.type === 'error') {
        let { boundaryId: K, error: b } = Tl(E.pathname, $);
        return {
          matches: $.partialMatches,
          pendingActionResult: [K, { type: ee.error, error: b }],
        };
      } else if ($.matches) P = $.matches;
      else {
        let { notFoundMatches: K, error: b, route: Z } = yo(E.pathname);
        return {
          matches: K,
          pendingActionResult: [Z.id, { type: ee.error, error: b }],
        };
      }
    }
    let D,
      W = Wr(P, E);
    if (!W.route.action && !W.route.lazy)
      D = {
        type: ee.error,
        error: Ue(405, {
          method: w.method,
          pathname: E.pathname,
          routeId: W.route.id,
        }),
      };
    else if (((D = (await Rr('action', w, [W], P))[0]), w.signal.aborted))
      return { shortCircuited: !0 };
    if (Pn(D)) {
      let $;
      return (
        U && U.replace != null
          ? ($ = U.replace)
          : ($ =
              Ic(D.response.headers.get('Location'), new URL(w.url), u) ===
              v.location.pathname + v.location.search),
        await Cr(w, D, { submission: _, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (Rn(D)) throw Ue(400, { type: 'defer-action' });
    if (qe(D)) {
      let $ = rr(P, W.route.id);
      return (
        (U && U.replace) !== !0 && (M = we.Push),
        { matches: P, pendingActionResult: [$.route.id, D] }
      );
    }
    return { matches: P, pendingActionResult: [W.route.id, D] };
  }
  async function ap(w, E, _, P, F, U, B, D, W, $, K) {
    let b = F || Yo(E, U),
      Z = U || B || Qc(b),
      ne = !xe && (!c.v7_partialHydration || !W);
    if (P) {
      if (ne) {
        let me = cs(K);
        Ie(se({ navigation: b }, me !== void 0 ? { actionData: me } : {}), {
          flushSync: $,
        });
      }
      let Q = await Dl(_, E.pathname, w.signal);
      if (Q.type === 'aborted') return { shortCircuited: !0 };
      if (Q.type === 'error') {
        let { boundaryId: me, error: Ge } = Tl(E.pathname, Q);
        return {
          matches: Q.partialMatches,
          loaderData: {},
          errors: { [me]: Ge },
        };
      } else if (Q.matches) _ = Q.matches;
      else {
        let { error: me, notFoundMatches: Ge, route: ue } = yo(E.pathname);
        return { matches: Ge, loaderData: {}, errors: { [ue.id]: me } };
      }
    }
    let G = a || o,
      [Le, ge] = zc(
        e.history,
        v,
        _,
        Z,
        E,
        c.v7_partialHydration && W === !0,
        c.v7_skipActionErrorRevalidation,
        je,
        Kt,
        z,
        Pe,
        We,
        Ve,
        G,
        u,
        K,
      );
    if (
      (go(
        (Q) =>
          !(_ && _.some((me) => me.route.id === Q)) ||
          (Le && Le.some((me) => me.route.id === Q)),
      ),
      (te = ++H),
      Le.length === 0 && ge.length === 0)
    ) {
      let Q = ps();
      return (
        An(
          E,
          se(
            {
              matches: _,
              loaderData: {},
              errors: K && qe(K[1]) ? { [K[0]]: K[1].error } : null,
            },
            Bc(K),
            Q ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: $ },
        ),
        { shortCircuited: !0 }
      );
    }
    if (ne) {
      let Q = {};
      if (!P) {
        Q.navigation = b;
        let me = cs(K);
        me !== void 0 && (Q.actionData = me);
      }
      ge.length > 0 && (Q.fetchers = up(ge)), Ie(Q, { flushSync: $ });
    }
    ge.forEach((Q) => {
      I.has(Q.key) && Yt(Q.key), Q.controller && I.set(Q.key, Q.controller);
    });
    let Pr = () => ge.forEach((Q) => Yt(Q.key));
    A && A.signal.addEventListener('abort', Pr);
    let { loaderResults: Xt, fetcherResults: $n } = await fs(
      v.matches,
      _,
      Le,
      ge,
      w,
    );
    if (w.signal.aborted) return { shortCircuited: !0 };
    A && A.signal.removeEventListener('abort', Pr),
      ge.forEach((Q) => I.delete(Q.key));
    let Bn = Vc([...Xt, ...$n]);
    if (Bn) {
      if (Bn.idx >= Le.length) {
        let Q = ge[Bn.idx - Le.length].key;
        Ve.add(Q);
      }
      return await Cr(w, Bn.result, { replace: D }), { shortCircuited: !0 };
    }
    let { loaderData: Hn, errors: Et } = Ac(v, _, Le, Xt, K, ge, $n, lt);
    lt.forEach((Q, me) => {
      Q.subscribe((Ge) => {
        (Ge || Q.done) && lt.delete(me);
      });
    }),
      c.v7_partialHydration &&
        W &&
        v.errors &&
        Object.entries(v.errors)
          .filter((Q) => {
            let [me] = Q;
            return !Le.some((Ge) => Ge.route.id === me);
          })
          .forEach((Q) => {
            let [me, Ge] = Q;
            Et = Object.assign(Et || {}, { [me]: Ge });
          });
    let Ol = ps(),
      Ml = ms(te),
      zl = Ol || Ml || ge.length > 0;
    return se(
      { matches: _, loaderData: Hn, errors: Et },
      zl ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function cs(w) {
    if (w && !qe(w[1])) return { [w[0]]: w[1].data };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function up(w) {
    return (
      w.forEach((E) => {
        let _ = v.fetchers.get(E.key),
          P = Ir(void 0, _ ? _.data : void 0);
        v.fetchers.set(E.key, P);
      }),
      new Map(v.fetchers)
    );
  }
  function sp(w, E, _, P) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    I.has(w) && Yt(w);
    let F = (P && P.unstable_flushSync) === !0,
      U = a || o,
      B = Wa(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        _,
        c.v7_relativeSplatPath,
        E,
        P == null ? void 0 : P.relative,
      ),
      D = zt(U, B, u),
      W = Nl(D, U, B);
    if ((W.active && W.matches && (D = W.matches), !D)) {
      Nt(w, E, Ue(404, { pathname: B }), { flushSync: F });
      return;
    }
    let {
      path: $,
      submission: K,
      error: b,
    } = Mc(c.v7_normalizeFormMethod, !0, B, P);
    if (b) {
      Nt(w, E, b, { flushSync: F });
      return;
    }
    let Z = Wr(D, $);
    if (((O = (P && P.preventScrollReset) === !0), K && mt(K.formMethod))) {
      cp(w, E, $, Z, D, W.active, F, K);
      return;
    }
    We.set(w, { routeId: E, path: $ }), fp(w, E, $, Z, D, W.active, F, K);
  }
  async function cp(w, E, _, P, F, U, B, D) {
    vo(), We.delete(w);
    function W(ue) {
      if (!ue.route.action && !ue.route.lazy) {
        let Dt = Ue(405, { method: D.formMethod, pathname: _, routeId: E });
        return Nt(w, E, Dt, { flushSync: B }), !0;
      }
      return !1;
    }
    if (!U && W(P)) return;
    let $ = v.fetchers.get(w);
    Qt(w, Qy(D, $), { flushSync: B });
    let K = new AbortController(),
      b = Wn(e.history, _, K.signal, D);
    if (U) {
      let ue = await Dl(F, _, b.signal);
      if (ue.type === 'aborted') return;
      if (ue.type === 'error') {
        let { error: Dt } = Tl(_, ue);
        Nt(w, E, Dt, { flushSync: B });
        return;
      } else if (ue.matches) {
        if (((F = ue.matches), (P = Wr(F, _)), W(P))) return;
      } else {
        Nt(w, E, Ue(404, { pathname: _ }), { flushSync: B });
        return;
      }
    }
    I.set(w, K);
    let Z = H,
      G = (await Rr('action', b, [P], F))[0];
    if (b.signal.aborted) {
      I.get(w) === K && I.delete(w);
      return;
    }
    if (c.v7_fetcherPersist && Pe.has(w)) {
      if (Pn(G) || qe(G)) {
        Qt(w, Gt(void 0));
        return;
      }
    } else {
      if (Pn(G))
        if ((I.delete(w), te > Z)) {
          Qt(w, Gt(void 0));
          return;
        } else
          return Ve.add(w), Qt(w, Ir(D)), Cr(b, G, { fetcherSubmission: D });
      if (qe(G)) {
        Nt(w, E, G.error);
        return;
      }
    }
    if (Rn(G)) throw Ue(400, { type: 'defer-action' });
    let Le = v.navigation.location || v.location,
      ge = Wn(e.history, Le, K.signal),
      Pr = a || o,
      Xt =
        v.navigation.state !== 'idle'
          ? zt(Pr, v.navigation.location, u)
          : v.matches;
    V(Xt, "Didn't find any matches after fetcher action");
    let $n = ++H;
    le.set(w, $n);
    let Bn = Ir(D, G.data);
    v.fetchers.set(w, Bn);
    let [Hn, Et] = zc(
      e.history,
      v,
      Xt,
      D,
      Le,
      !1,
      c.v7_skipActionErrorRevalidation,
      je,
      Kt,
      z,
      Pe,
      We,
      Ve,
      Pr,
      u,
      [P.route.id, G],
    );
    Et.filter((ue) => ue.key !== w).forEach((ue) => {
      let Dt = ue.key,
        Es = v.fetchers.get(Dt),
        gp = Ir(void 0, Es ? Es.data : void 0);
      v.fetchers.set(Dt, gp),
        I.has(Dt) && Yt(Dt),
        ue.controller && I.set(Dt, ue.controller);
    }),
      Ie({ fetchers: new Map(v.fetchers) });
    let Ol = () => Et.forEach((ue) => Yt(ue.key));
    K.signal.addEventListener('abort', Ol);
    let { loaderResults: Ml, fetcherResults: zl } = await fs(
      v.matches,
      Xt,
      Hn,
      Et,
      ge,
    );
    if (K.signal.aborted) return;
    K.signal.removeEventListener('abort', Ol),
      le.delete(w),
      I.delete(w),
      Et.forEach((ue) => I.delete(ue.key));
    let Q = Vc([...Ml, ...zl]);
    if (Q) {
      if (Q.idx >= Hn.length) {
        let ue = Et[Q.idx - Hn.length].key;
        Ve.add(ue);
      }
      return Cr(ge, Q.result);
    }
    let { loaderData: me, errors: Ge } = Ac(
      v,
      v.matches,
      Hn,
      Ml,
      void 0,
      Et,
      zl,
      lt,
    );
    if (v.fetchers.has(w)) {
      let ue = Gt(G.data);
      v.fetchers.set(w, ue);
    }
    ms($n),
      v.navigation.state === 'loading' && $n > te
        ? (V(M, 'Expected pending action'),
          A && A.abort(),
          An(v.navigation.location, {
            matches: Xt,
            loaderData: me,
            errors: Ge,
            fetchers: new Map(v.fetchers),
          }))
        : (Ie({
            errors: Ge,
            loaderData: $c(v.loaderData, me, Xt, Ge),
            fetchers: new Map(v.fetchers),
          }),
          (je = !1));
  }
  async function fp(w, E, _, P, F, U, B, D) {
    let W = v.fetchers.get(w);
    Qt(w, Ir(D, W ? W.data : void 0), { flushSync: B });
    let $ = new AbortController(),
      K = Wn(e.history, _, $.signal);
    if (U) {
      let G = await Dl(F, _, K.signal);
      if (G.type === 'aborted') return;
      if (G.type === 'error') {
        let { error: Le } = Tl(_, G);
        Nt(w, E, Le, { flushSync: B });
        return;
      } else if (G.matches) (F = G.matches), (P = Wr(F, _));
      else {
        Nt(w, E, Ue(404, { pathname: _ }), { flushSync: B });
        return;
      }
    }
    I.set(w, $);
    let b = H,
      ne = (await Rr('loader', K, [P], F))[0];
    if (
      (Rn(ne) && (ne = (await Th(ne, K.signal, !0)) || ne),
      I.get(w) === $ && I.delete(w),
      !K.signal.aborted)
    ) {
      if (Pe.has(w)) {
        Qt(w, Gt(void 0));
        return;
      }
      if (Pn(ne))
        if (te > b) {
          Qt(w, Gt(void 0));
          return;
        } else {
          Ve.add(w), await Cr(K, ne);
          return;
        }
      if (qe(ne)) {
        Nt(w, E, ne.error);
        return;
      }
      V(!Rn(ne), 'Unhandled fetcher deferred data'), Qt(w, Gt(ne.data));
    }
  }
  async function Cr(w, E, _) {
    let {
      submission: P,
      fetcherSubmission: F,
      replace: U,
    } = _ === void 0 ? {} : _;
    E.response.headers.has('X-Remix-Revalidate') && (je = !0);
    let B = E.response.headers.get('Location');
    V(B, 'Expected a Location header on the redirect Response'),
      (B = Ic(B, new URL(w.url), u));
    let D = yl(v.location, B, { _isRedirect: !0 });
    if (n) {
      let ne = !1;
      if (E.response.headers.has('X-Remix-Reload-Document')) ne = !0;
      else if (Qu.test(B)) {
        const G = e.history.createURL(B);
        ne = G.origin !== t.location.origin || St(G.pathname, u) == null;
      }
      if (ne) {
        U ? t.location.replace(B) : t.location.assign(B);
        return;
      }
    }
    A = null;
    let W =
        U === !0 || E.response.headers.has('X-Remix-Replace')
          ? we.Replace
          : we.Push,
      { formMethod: $, formAction: K, formEncType: b } = v.navigation;
    !P && !F && $ && K && b && (P = Qc(v.navigation));
    let Z = P || F;
    if (Py.has(E.response.status) && Z && mt(Z.formMethod))
      await Sn(W, D, {
        submission: se({}, Z, { formAction: B }),
        preventScrollReset: O,
      });
    else {
      let ne = Yo(D, P);
      await Sn(W, D, {
        overrideNavigation: ne,
        fetcherSubmission: F,
        preventScrollReset: O,
      });
    }
  }
  async function Rr(w, E, _, P) {
    try {
      let F = await Fy(s, w, E, _, P, i, l);
      return await Promise.all(
        F.map((U, B) => {
          if (Hy(U)) {
            let D = U.result;
            return {
              type: ee.redirect,
              response: Uy(D, E, _[B].route.id, P, u, c.v7_relativeSplatPath),
            };
          }
          return Iy(U);
        }),
      );
    } catch (F) {
      return _.map(() => ({ type: ee.error, error: F }));
    }
  }
  async function fs(w, E, _, P, F) {
    let [U, ...B] = await Promise.all([
      _.length ? Rr('loader', F, _, E) : [],
      ...P.map((D) => {
        if (D.matches && D.match && D.controller) {
          let W = Wn(e.history, D.path, D.controller.signal);
          return Rr('loader', W, [D.match], D.matches).then(($) => $[0]);
        } else
          return Promise.resolve({
            type: ee.error,
            error: Ue(404, { pathname: D.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Kc(
          w,
          _,
          U,
          U.map(() => F.signal),
          !1,
          v.loaderData,
        ),
        Kc(
          w,
          P.map((D) => D.match),
          B,
          P.map((D) => (D.controller ? D.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: U, fetcherResults: B }
    );
  }
  function vo() {
    (je = !0),
      Kt.push(...go()),
      We.forEach((w, E) => {
        I.has(E) && (z.add(E), Yt(E));
      });
  }
  function Qt(w, E, _) {
    _ === void 0 && (_ = {}),
      v.fetchers.set(w, E),
      Ie(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      );
  }
  function Nt(w, E, _, P) {
    P === void 0 && (P = {});
    let F = rr(v.matches, E);
    Pl(w),
      Ie(
        { errors: { [F.route.id]: _ }, fetchers: new Map(v.fetchers) },
        { flushSync: (P && P.flushSync) === !0 },
      );
  }
  function ds(w) {
    return (
      c.v7_fetcherPersist &&
        (Tt.set(w, (Tt.get(w) || 0) + 1), Pe.has(w) && Pe.delete(w)),
      v.fetchers.get(w) || Ly
    );
  }
  function Pl(w) {
    let E = v.fetchers.get(w);
    I.has(w) && !(E && E.state === 'loading' && le.has(w)) && Yt(w),
      We.delete(w),
      le.delete(w),
      Ve.delete(w),
      Pe.delete(w),
      z.delete(w),
      v.fetchers.delete(w);
  }
  function dp(w) {
    if (c.v7_fetcherPersist) {
      let E = (Tt.get(w) || 0) - 1;
      E <= 0 ? (Tt.delete(w), Pe.add(w)) : Tt.set(w, E);
    } else Pl(w);
    Ie({ fetchers: new Map(v.fetchers) });
  }
  function Yt(w) {
    let E = I.get(w);
    V(E, 'Expected fetch controller: ' + w), E.abort(), I.delete(w);
  }
  function hs(w) {
    for (let E of w) {
      let _ = ds(E),
        P = Gt(_.data);
      v.fetchers.set(E, P);
    }
  }
  function ps() {
    let w = [],
      E = !1;
    for (let _ of Ve) {
      let P = v.fetchers.get(_);
      V(P, 'Expected fetcher: ' + _),
        P.state === 'loading' && (Ve.delete(_), w.push(_), (E = !0));
    }
    return hs(w), E;
  }
  function ms(w) {
    let E = [];
    for (let [_, P] of le)
      if (P < w) {
        let F = v.fetchers.get(_);
        V(F, 'Expected fetcher: ' + _),
          F.state === 'loading' && (Yt(_), le.delete(_), E.push(_));
      }
    return hs(E), E.length > 0;
  }
  function hp(w, E) {
    let _ = v.blockers.get(w) || jr;
    return wn.get(w) !== E && wn.set(w, E), _;
  }
  function vs(w) {
    v.blockers.delete(w), wn.delete(w);
  }
  function Ll(w, E) {
    let _ = v.blockers.get(w) || jr;
    V(
      (_.state === 'unblocked' && E.state === 'blocked') ||
        (_.state === 'blocked' && E.state === 'blocked') ||
        (_.state === 'blocked' && E.state === 'proceeding') ||
        (_.state === 'blocked' && E.state === 'unblocked') ||
        (_.state === 'proceeding' && E.state === 'unblocked'),
      'Invalid blocker state transition: ' + _.state + ' -> ' + E.state,
    );
    let P = new Map(v.blockers);
    P.set(w, E), Ie({ blockers: P });
  }
  function ys(w) {
    let { currentLocation: E, nextLocation: _, historyAction: P } = w;
    if (wn.size === 0) return;
    wn.size > 1 && yr(!1, 'A router only supports one blocker at a time');
    let F = Array.from(wn.entries()),
      [U, B] = F[F.length - 1],
      D = v.blockers.get(U);
    if (
      !(D && D.state === 'proceeding') &&
      B({ currentLocation: E, nextLocation: _, historyAction: P })
    )
      return U;
  }
  function yo(w) {
    let E = Ue(404, { pathname: w }),
      _ = a || o,
      { matches: P, route: F } = Hc(_);
    return go(), { notFoundMatches: P, route: F, error: E };
  }
  function Tl(w, E) {
    return {
      boundaryId: rr(E.partialMatches).route.id,
      error: Ue(400, {
        type: 'route-discovery',
        pathname: w,
        message:
          E.error != null && 'message' in E.error ? E.error : String(E.error),
      }),
    };
  }
  function go(w) {
    let E = [];
    return (
      lt.forEach((_, P) => {
        (!w || w(P)) && (_.cancel(), E.push(P), lt.delete(P));
      }),
      E
    );
  }
  function pp(w, E, _) {
    if (((L = w), (h = E), (p = _ || null), !m && v.navigation === Qo)) {
      m = !0;
      let P = ws(v.location, v.matches);
      P != null && Ie({ restoreScrollPosition: P });
    }
    return () => {
      (L = null), (h = null), (p = null);
    };
  }
  function gs(w, E) {
    return (
      (p &&
        p(
          w,
          E.map((P) => ey(P, v.loaderData)),
        )) ||
      w.key
    );
  }
  function mp(w, E) {
    if (L && h) {
      let _ = gs(w, E);
      L[_] = h();
    }
  }
  function ws(w, E) {
    if (L) {
      let _ = gs(w, E),
        P = L[_];
      if (typeof P == 'number') return P;
    }
    return null;
  }
  function Nl(w, E, _) {
    if (f) {
      if (k.has(_)) return { active: !1, matches: w };
      if (w) {
        if (Object.keys(w[0].params).length > 0)
          return { active: !0, matches: mi(E, _, u, !0) };
      } else return { active: !0, matches: mi(E, _, u, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function Dl(w, E, _) {
    let P = w;
    for (;;) {
      let F = a == null,
        U = a || o;
      try {
        await My(f, E, P, U, i, l, tp, _);
      } catch (W) {
        return { type: 'error', error: W, partialMatches: P };
      } finally {
        F && (o = [...o]);
      }
      if (_.aborted) return { type: 'aborted' };
      let B = zt(U, E, u);
      if (B) return Ss(E, k), { type: 'success', matches: B };
      let D = mi(U, E, u, !0);
      if (
        !D ||
        (P.length === D.length &&
          P.every((W, $) => W.route.id === D[$].route.id))
      )
        return Ss(E, k), { type: 'success', matches: null };
      P = D;
    }
  }
  function Ss(w, E) {
    if (E.size >= y) {
      let _ = E.values().next().value;
      E.delete(_);
    }
    E.add(w);
  }
  function vp(w) {
    (i = {}), (a = gl(w, l, void 0, i));
  }
  function yp(w, E) {
    let _ = a == null;
    Rh(w, E, a || o, i, l), _ && ((o = [...o]), Ie({}));
  }
  return (
    (T = {
      get basename() {
        return u;
      },
      get future() {
        return c;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: np,
      subscribe: lp,
      enableScrollRestoration: pp,
      navigate: ss,
      fetch: sp,
      revalidate: ip,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: ds,
      deleteFetcher: dp,
      dispose: rp,
      getBlocker: hp,
      deleteBlocker: vs,
      patchRoutes: yp,
      _internalFetchControllers: I,
      _internalActiveDeferreds: lt,
      _internalSetRoutes: vp,
    }),
    T
  );
}
function Ny(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Wa(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === o)) {
        s = c;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let f = Ku(l || '.', Wu(u, i), St(e.pathname, n) || e.pathname, a === 'path');
  return (
    l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      s &&
      s.route.index &&
      !Yu(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (f.pathname = f.pathname === '/' ? n : Pt([n, f.pathname])),
    pn(f)
  );
}
function Mc(e, t, n, r) {
  if (!r || !Ny(r)) return { path: n };
  if (r.formMethod && !Wy(r.formMethod))
    return { path: n, error: Ue(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ue(400, { type: 'invalid-body' }) }),
    i = r.formMethod || 'get',
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = Ph(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!mt(o)) return l();
      let d =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((x, y) => {
                let [k, L] = y;
                return (
                  '' +
                  x +
                  k +
                  '=' +
                  L +
                  `
`
                );
              }, '')
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!mt(o)) return l();
      try {
        let d = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  V(
    typeof FormData == 'function',
    'FormData is not available in this environment',
  );
  let u, s;
  if (r.formData) (u = Ka(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Ka(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Uc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Uc(u));
    } catch {
      return l();
    }
  let f = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (mt(f.formMethod)) return { path: n, submission: f };
  let c = Vt(n);
  return (
    t && c.search && Yu(c.search) && u.append('index', ''),
    (c.search = '?' + u),
    { path: pn(c), submission: f }
  );
}
function Dy(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function zc(e, t, n, r, l, i, o, a, u, s, f, c, d, x, y, k) {
  let L = k ? (qe(k[1]) ? k[1].error : k[1].data) : void 0,
    p = e.createURL(t.location),
    h = e.createURL(l),
    m = k && qe(k[1]) ? k[0] : void 0,
    S = m ? Dy(n, m) : n,
    R = k ? k[1].statusCode : void 0,
    C = o && R && R >= 400,
    T = S.filter((M, O) => {
      let { route: A } = M;
      if (A.lazy) return !0;
      if (A.loader == null) return !1;
      if (i)
        return typeof A.loader != 'function' || A.loader.hydrate
          ? !0
          : t.loaderData[A.id] === void 0 &&
              (!t.errors || t.errors[A.id] === void 0);
      if (
        Oy(t.loaderData, t.matches[O], M) ||
        u.some((ae) => ae === M.route.id)
      )
        return !0;
      let X = t.matches[O],
        pe = M;
      return Fc(
        M,
        se(
          {
            currentUrl: p,
            currentParams: X.params,
            nextUrl: h,
            nextParams: pe.params,
          },
          r,
          {
            actionResult: L,
            actionStatus: R,
            defaultShouldRevalidate: C
              ? !1
              : a ||
                p.pathname + p.search === h.pathname + h.search ||
                p.search !== h.search ||
                Ch(X, pe),
          },
        ),
      );
    }),
    v = [];
  return (
    c.forEach((M, O) => {
      if (i || !n.some((xe) => xe.route.id === M.routeId) || f.has(O)) return;
      let A = zt(x, M.path, y);
      if (!A) {
        v.push({
          key: O,
          routeId: M.routeId,
          path: M.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let X = t.fetchers.get(O),
        pe = Wr(A, M.path),
        ae = !1;
      d.has(O)
        ? (ae = !1)
        : s.has(O)
          ? (s.delete(O), (ae = !0))
          : X && X.state !== 'idle' && X.data === void 0
            ? (ae = a)
            : (ae = Fc(
                pe,
                se(
                  {
                    currentUrl: p,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: h,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: L,
                    actionStatus: R,
                    defaultShouldRevalidate: C ? !1 : a,
                  },
                ),
              )),
        ae &&
          v.push({
            key: O,
            routeId: M.routeId,
            path: M.path,
            matches: A,
            match: pe,
            controller: new AbortController(),
          });
    }),
    [T, v]
  );
}
function Oy(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Ch(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Fc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function My(e, t, n, r, l, i, o, a) {
  let u = [t, ...n.map((s) => s.route.id)].join('-');
  try {
    let s = o.get(u);
    s ||
      ((s = e({
        path: t,
        matches: n,
        patch: (f, c) => {
          a.aborted || Rh(f, c, r, l, i);
        },
      })),
      o.set(u, s)),
      s && By(s) && (await s);
  } finally {
    o.delete(u);
  }
}
function Rh(e, t, n, r, l) {
  if (e) {
    var i;
    let o = r[e];
    V(o, 'No route found to patch children into: routeId = ' + e);
    let a = gl(
      t,
      l,
      [
        e,
        'patch',
        String(((i = o.children) == null ? void 0 : i.length) || '0'),
      ],
      r,
    );
    o.children ? o.children.push(...a) : (o.children = a);
  } else {
    let o = gl(t, l, ['patch', String(n.length || '0')], r);
    n.push(...o);
  }
}
async function jc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, 'No route found in manifest');
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== 'hasErrorBoundary';
    yr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !u && !qv.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, se({}, t(l), { lazy: void 0 }));
}
function zy(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Fy(e, t, n, r, l, i, o, a) {
  let u = r.reduce((c, d) => c.add(d.route.id), new Set()),
    s = new Set(),
    f = await e({
      matches: l.map((c) => {
        let d = u.has(c.route.id);
        return se({}, c, {
          shouldLoad: d,
          resolve: (y) => (
            s.add(c.route.id),
            d
              ? jy(t, n, c, i, o, y, a)
              : Promise.resolve({ type: ee.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((c) =>
      V(
        s.has(c.route.id),
        '`match.resolve()` was not called for route id "' +
          c.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    f.filter((c, d) => u.has(l[d].route.id))
  );
}
async function jy(e, t, n, r, l, i, o) {
  let a,
    u,
    s = (f) => {
      let c,
        d = new Promise((k, L) => (c = L));
      (u = () => c()), t.signal.addEventListener('abort', u);
      let x = (k) =>
          typeof f != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']'),
                ),
              )
            : f(
                { request: t, params: n.params, context: o },
                ...(k !== void 0 ? [k] : []),
              ),
        y;
      return (
        i
          ? (y = i((k) => x(k)))
          : (y = (async () => {
              try {
                return { type: 'data', result: await x() };
              } catch (k) {
                return { type: 'error', result: k };
              }
            })()),
        Promise.race([y, d])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let c,
          [d] = await Promise.all([
            s(f).catch((x) => {
              c = x;
            }),
            jc(n.route, l, r),
          ]);
        if (c !== void 0) throw c;
        a = d;
      } else if ((await jc(n.route, l, r), (f = n.route[e]), f)) a = await s(f);
      else if (e === 'action') {
        let c = new URL(t.url),
          d = c.pathname + c.search;
        throw Ue(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: ee.data, result: void 0 };
    else if (f) a = await s(f);
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search;
      throw Ue(404, { pathname: d });
    }
    V(
      a.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (f) {
    return { type: ee.error, result: f };
  } finally {
    u && t.signal.removeEventListener('abort', u);
  }
  return a;
}
async function Iy(e) {
  let { result: t, type: n } = e;
  if (Lh(t)) {
    let s;
    try {
      let f = t.headers.get('Content-Type');
      f && /\bapplication\/json\b/.test(f)
        ? t.body == null
          ? (s = null)
          : (s = await t.json())
        : (s = await t.text());
    } catch (f) {
      return { type: ee.error, error: f };
    }
    return n === ee.error
      ? {
          type: ee.error,
          error: new Fn(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: ee.data, data: s, statusCode: t.status, headers: t.headers };
  }
  if (n === ee.error) {
    if (Wc(t)) {
      var r;
      if (t.data instanceof Error) {
        var l;
        return {
          type: ee.error,
          error: t.data,
          statusCode: (l = t.init) == null ? void 0 : l.status,
        };
      }
      t = new Fn(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: ee.error, error: t, statusCode: xr(t) ? t.status : void 0 };
  }
  if (Vy(t)) {
    var i, o;
    return {
      type: ee.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Wc(t)) {
    var a, u;
    return {
      type: ee.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: ee.data, data: t };
}
function Uy(e, t, n, r, l, i) {
  let o = e.headers.get('Location');
  if (
    (V(
      o,
      'Redirects returned/thrown from loaders/actions must have a Location header',
    ),
    !Qu.test(o))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = Wa(new URL(t.url), a, l, !0, o, i)), e.headers.set('Location', o);
  }
  return e;
}
function Ic(e, t, n) {
  if (Qu.test(e)) {
    let r = e,
      l = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      i = St(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Wn(e, t, n, r) {
  let l = e.createURL(Ph(t)).toString(),
    i = { signal: n };
  if (r && mt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': a })),
          (i.body = JSON.stringify(r.json)))
        : a === 'text/plain'
          ? (i.body = r.text)
          : a === 'application/x-www-form-urlencoded' && r.formData
            ? (i.body = Ka(r.formData))
            : (i.body = r.formData);
  }
  return new Request(l, i);
}
function Ka(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Uc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Ay(e, t, n, r, l, i) {
  let o = {},
    a = null,
    u,
    s = !1,
    f = {},
    c = r && qe(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((d, x) => {
      let y = t[x].route.id;
      if (
        (V(!Pn(d), 'Cannot handle redirect results in processLoaderData'),
        qe(d))
      ) {
        let k = d.error;
        c !== void 0 && ((k = c), (c = void 0)), (a = a || {});
        {
          let L = rr(e, y);
          a[L.route.id] == null && (a[L.route.id] = k);
        }
        (o[y] = void 0),
          s || ((s = !0), (u = xr(d.error) ? d.error.status : 500)),
          d.headers && (f[y] = d.headers);
      } else
        Rn(d)
          ? (l.set(y, d.deferredData),
            (o[y] = d.deferredData.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !s &&
              (u = d.statusCode),
            d.headers && (f[y] = d.headers))
          : ((o[y] = d.data),
            d.statusCode && d.statusCode !== 200 && !s && (u = d.statusCode),
            d.headers && (f[y] = d.headers));
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: f }
  );
}
function Ac(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = Ay(t, n, r, l, a);
  for (let f = 0; f < i.length; f++) {
    let { key: c, match: d, controller: x } = i[f];
    V(
      o !== void 0 && o[f] !== void 0,
      'Did not find corresponding fetcher result',
    );
    let y = o[f];
    if (!(x && x.signal.aborted))
      if (qe(y)) {
        let k = rr(e.matches, d == null ? void 0 : d.route.id);
        (s && s[k.route.id]) || (s = se({}, s, { [k.route.id]: y.error })),
          e.fetchers.delete(c);
      } else if (Pn(y)) V(!1, 'Unhandled fetcher revalidation redirect');
      else if (Rn(y)) V(!1, 'Unhandled fetcher deferred data');
      else {
        let k = Gt(y.data);
        e.fetchers.set(c, k);
      }
  }
  return { loaderData: u, errors: s };
}
function $c(e, t, n, r) {
  let l = se({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function Bc(e) {
  return e
    ? qe(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function rr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Hc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function Ue(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: l,
      type: i,
      message: o,
    } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        i === 'route-discovery'
          ? (u =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                o))
          : l && n && r
            ? (u =
                'You made a ' +
                l +
                ' request to "' +
                n +
                '" but ' +
                ('did not provide a `loader` for route "' + r + '", ') +
                'so there is no way to handle the request.')
            : i === 'defer-action'
              ? (u = 'defer() is not supported in actions')
              : i === 'invalid-body' &&
                (u = 'Unable to encode submission body'))
      : e === 403
        ? ((a = 'Forbidden'),
          (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = 'Method Not Allowed'),
            l && n && r
              ? (u =
                  'You made a ' +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Fn(e || 500, a, new Error(u), !0)
  );
}
function Vc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Pn(n)) return { result: n, idx: t };
  }
}
function Ph(e) {
  let t = typeof e == 'string' ? Vt(e) : e;
  return pn(se({}, t, { hash: '' }));
}
function $y(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function By(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function Hy(e) {
  return Lh(e.result) && Ry.has(e.result.status);
}
function Rn(e) {
  return e.type === ee.deferred;
}
function qe(e) {
  return e.type === ee.error;
}
function Pn(e) {
  return (e && e.type) === ee.redirect;
}
function Wc(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function Vy(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Lh(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Wy(e) {
  return Cy.has(e.toLowerCase());
}
function mt(e) {
  return ky.has(e.toLowerCase());
}
async function Kc(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((c) => c.route.id === u.route.id),
      f = s != null && !Ch(s, u) && (i && i[u.route.id]) !== void 0;
    if (Rn(a) && (l || f)) {
      let c = r[o];
      V(c, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Th(a, c, l).then((d) => {
          d && (n[o] = d || n[o]);
        });
    }
  }
}
async function Th(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ee.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ee.error, error: l };
      }
    return { type: ee.data, data: e.deferredData.data };
  }
}
function Yu(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Wr(e, t) {
  let n = typeof t == 'string' ? Vt(t).search : t.search;
  if (e[e.length - 1].route.index && Yu(n || '')) return e[e.length - 1];
  let r = Eh(e);
  return r[r.length - 1];
}
function Qc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Yo(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Ky(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ir(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Qy(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Gt(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Yy(e, t) {
  try {
    let n = e.sessionStorage.getItem(_h);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function Xy(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(_h, JSON.stringify(n));
    } catch (r) {
      yr(
        !1,
        'Failed to save applied view transitions in sessionStorage (' +
          r +
          ').',
      );
    }
  }
}
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ki() {
  return (
    (Ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ki.apply(this, arguments)
  );
}
const kr = g.createContext(null),
  fo = g.createContext(null),
  Qi = g.createContext(null),
  Lt = g.createContext(null),
  Xu = g.createContext(null),
  Wt = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Nh = g.createContext(null);
function Ju(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Cl() || V(!1);
  let { basename: r, navigator: l } = g.useContext(Lt),
    { hash: i, pathname: o, search: a } = Rl(e, { relative: n }),
    u = o;
  return (
    r !== '/' && (u = o === '/' ? r : Pt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function Cl() {
  return g.useContext(Xu) != null;
}
function gn() {
  return Cl() || V(!1), g.useContext(Xu).location;
}
function Dh(e) {
  g.useContext(Lt).static || g.useLayoutEffect(e);
}
function Jy() {
  let { isDataRoute: e } = g.useContext(Wt);
  return e ? fg() : Gy();
}
function Gy() {
  Cl() || V(!1);
  let e = g.useContext(kr),
    { basename: t, future: n, navigator: r } = g.useContext(Lt),
    { matches: l } = g.useContext(Wt),
    { pathname: i } = gn(),
    o = JSON.stringify(Wu(l, n.v7_relativeSplatPath)),
    a = g.useRef(!1);
  return (
    Dh(() => {
      a.current = !0;
    }),
    g.useCallback(
      function (s, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof s == 'number') {
          r.go(s);
          return;
        }
        let c = Ku(s, JSON.parse(o), i, f.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Pt([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f);
      },
      [t, r, o, i, e],
    )
  );
}
const Zy = g.createContext(null);
function qy(e) {
  let t = g.useContext(Wt).outlet;
  return t && g.createElement(Zy.Provider, { value: e }, t);
}
function Rl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = g.useContext(Lt),
    { matches: l } = g.useContext(Wt),
    { pathname: i } = gn(),
    o = JSON.stringify(Wu(l, r.v7_relativeSplatPath));
  return g.useMemo(() => Ku(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function by(e, t, n, r) {
  Cl() || V(!1);
  let { navigator: l } = g.useContext(Lt),
    { matches: i } = g.useContext(Wt),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let s = gn(),
    f;
  f = s;
  let c = f.pathname || '/',
    d = c;
  if (u !== '/') {
    let k = u.replace(/^\//, '').split('/');
    d = '/' + c.replace(/^\//, '').split('/').slice(k.length).join('/');
  }
  let x = zt(e, { pathname: d });
  return lg(
    x &&
      x.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, a, k.params),
          pathname: Pt([
            u,
            l.encodeLocation
              ? l.encodeLocation(k.pathname).pathname
              : k.pathname,
          ]),
          pathnameBase:
            k.pathnameBase === '/'
              ? u
              : Pt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(k.pathnameBase).pathname
                    : k.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
    r,
  );
}
function eg() {
  let e = Mh(),
    t = xr(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement('h2', null, 'Unexpected Application Error!'),
    g.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? g.createElement('pre', { style: l }, n) : null,
    null,
  );
}
const tg = g.createElement(eg, null);
class ng extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          Wt.Provider,
          { value: this.props.routeContext },
          g.createElement(Nh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function rg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = g.useContext(kr);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(Wt.Provider, { value: t }, r)
  );
}
function lg(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = o.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0,
    );
    f >= 0 || V(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let c = o[f];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = f),
        c.route.id)
      ) {
        let { loaderData: d, errors: x } = n,
          y =
            c.route.loader &&
            d[c.route.id] === void 0 &&
            (!x || x[c.route.id] === void 0);
        if (c.route.lazy || y) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, c, d) => {
    let x,
      y = !1,
      k = null,
      L = null;
    n &&
      ((x = a && c.route.id ? a[c.route.id] : void 0),
      (k = c.route.errorElement || tg),
      u &&
        (s < 0 && d === 0
          ? ((y = !0), (L = null))
          : s === d &&
            ((y = !0), (L = c.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, d + 1)),
      h = () => {
        let m;
        return (
          x
            ? (m = k)
            : y
              ? (m = L)
              : c.route.Component
                ? (m = g.createElement(c.route.Component, null))
                : c.route.element
                  ? (m = c.route.element)
                  : (m = f),
          g.createElement(rg, {
            match: c,
            routeContext: { outlet: f, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
      ? g.createElement(ng, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: x,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Oh = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Oh || {}),
  wl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(wl || {});
function ig(e) {
  let t = g.useContext(kr);
  return t || V(!1), t;
}
function og(e) {
  let t = g.useContext(fo);
  return t || V(!1), t;
}
function ag(e) {
  let t = g.useContext(Wt);
  return t || V(!1), t;
}
function Gu(e) {
  let t = ag(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function ug() {
  return Gu(wl.UseRouteId);
}
function Mh() {
  var e;
  let t = g.useContext(Nh),
    n = og(wl.UseRouteError),
    r = Gu(wl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sg() {
  let e = g.useContext(Qi);
  return e == null ? void 0 : e._data;
}
function cg() {
  let e = g.useContext(Qi);
  return e == null ? void 0 : e._error;
}
function fg() {
  let { router: e } = ig(Oh.UseNavigateStable),
    t = Gu(wl.UseNavigateStable),
    n = g.useRef(!1);
  return (
    Dh(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, Ki({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function s1(e) {
  return qy(e.context);
}
function dg(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = we.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  Cl() && V(!1);
  let u = t.replace(/^\/*/, '/'),
    s = g.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: Ki({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o],
    );
  typeof r == 'string' && (r = Vt(r));
  let {
      pathname: f = '/',
      search: c = '',
      hash: d = '',
      state: x = null,
      key: y = 'default',
    } = r,
    k = g.useMemo(() => {
      let L = St(f, u);
      return L == null
        ? null
        : {
            location: { pathname: L, search: c, hash: d, state: x, key: y },
            navigationType: l,
          };
    }, [u, f, c, d, x, y, l]);
  return k == null
    ? null
    : g.createElement(
        Lt.Provider,
        { value: s },
        g.createElement(Xu.Provider, { children: n, value: k }),
      );
}
function hg(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return g.createElement(
    mg,
    { resolve: r, errorElement: n },
    g.createElement(vg, null, t),
  );
}
var it = (function (e) {
  return (
    (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error'),
    e
  );
})(it || {});
const pg = new Promise(() => {});
class mg extends g.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error('<Await> caught the following error during render', t, n);
  }
  render() {
    let { children: t, errorElement: n, resolve: r } = this.props,
      l = null,
      i = it.pending;
    if (!(r instanceof Promise))
      (i = it.success),
        (l = Promise.resolve()),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_data', { get: () => r });
    else if (this.state.error) {
      i = it.error;
      let o = this.state.error;
      (l = Promise.reject().catch(() => {})),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_error', { get: () => o });
    } else
      r._tracked
        ? ((l = r),
          (i =
            '_error' in l ? it.error : '_data' in l ? it.success : it.pending))
        : ((i = it.pending),
          Object.defineProperty(r, '_tracked', { get: () => !0 }),
          (l = r.then(
            (o) => Object.defineProperty(r, '_data', { get: () => o }),
            (o) => Object.defineProperty(r, '_error', { get: () => o }),
          )));
    if (i === it.error && l._error instanceof Wi) throw pg;
    if (i === it.error && !n) throw l._error;
    if (i === it.error)
      return g.createElement(Qi.Provider, { value: l, children: n });
    if (i === it.success)
      return g.createElement(Qi.Provider, { value: l, children: t });
    throw l;
  }
}
function vg(e) {
  let { children: t } = e,
    n = sg(),
    r = typeof t == 'function' ? t(n) : t;
  return g.createElement(g.Fragment, null, r);
}
function c1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: g.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: g.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: g.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gr() {
  return (
    (gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gr.apply(this, arguments)
  );
}
function Zu(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const vi = 'get',
  Xo = 'application/x-www-form-urlencoded';
function ho(e) {
  return e != null && typeof e.tagName == 'string';
}
function yg(e) {
  return ho(e) && e.tagName.toLowerCase() === 'button';
}
function gg(e) {
  return ho(e) && e.tagName.toLowerCase() === 'form';
}
function wg(e) {
  return ho(e) && e.tagName.toLowerCase() === 'input';
}
function Sg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Eg(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Sg(e);
}
let bl = null;
function xg() {
  if (bl === null)
    try {
      new FormData(document.createElement('form'), 0), (bl = !1);
    } catch {
      bl = !0;
    }
  return bl;
}
const kg = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Jo(e) {
  return e != null && !kg.has(e) ? null : e;
}
function _g(e, t) {
  let n, r, l, i, o;
  if (gg(e)) {
    let a = e.getAttribute('action');
    (r = a ? St(a, t) : null),
      (n = e.getAttribute('method') || vi),
      (l = Jo(e.getAttribute('enctype')) || Xo),
      (i = new FormData(e));
  } else if (yg(e) || (wg(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let u = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = u ? St(u, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || vi),
      (l =
        Jo(e.getAttribute('formenctype')) ||
        Jo(a.getAttribute('enctype')) ||
        Xo),
      (i = new FormData(a, e)),
      !xg())
    ) {
      let { name: s, type: f, value: c } = e;
      if (f === 'image') {
        let d = s ? s + '.' : '';
        i.append(d + 'x', '0'), i.append(d + 'y', '0');
      } else s && i.append(s, c);
    }
  } else {
    if (ho(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (n = vi), (r = null), (l = Xo), (o = e);
  }
  return (
    i && l === 'text/plain' && ((o = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: i, body: o }
  );
}
const Cg = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Rg = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  Pg = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Lg = '6';
try {
  window.__reactRouterVersion = Lg;
} catch {}
const zh = g.createContext({ isTransitioning: !1 }),
  Tg = g.createContext(new Map()),
  Ng = 'startTransition',
  Yc = Ip[Ng],
  Dg = 'flushSync',
  Xc = Jv[Dg];
function Og(e) {
  Yc ? Yc(e) : e();
}
function Ur(e) {
  Xc ? Xc(e) : e();
}
let Mg = class {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
};
function d1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = g.useState(n.state),
    [o, a] = g.useState(),
    [u, s] = g.useState({ isTransitioning: !1 }),
    [f, c] = g.useState(),
    [d, x] = g.useState(),
    [y, k] = g.useState(),
    L = g.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    h = g.useCallback(
      (v) => {
        p ? Og(v) : v();
      },
      [p],
    ),
    m = g.useCallback(
      (v, M) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: A,
          unstable_viewTransitionOpts: X,
        } = M;
        O.forEach((ae) => L.current.delete(ae)),
          v.fetchers.forEach((ae, xe) => {
            ae.data !== void 0 && L.current.set(xe, ae.data);
          });
        let pe =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!X || pe) {
          A ? Ur(() => i(v)) : h(() => i(v));
          return;
        }
        if (A) {
          Ur(() => {
            d && (f && f.resolve(), d.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: X.currentLocation,
                nextLocation: X.nextLocation,
              });
          });
          let ae = n.window.document.startViewTransition(() => {
            Ur(() => i(v));
          });
          ae.finished.finally(() => {
            Ur(() => {
              c(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Ur(() => x(ae));
          return;
        }
        d
          ? (f && f.resolve(),
            d.skipTransition(),
            k({
              state: v,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }))
          : (a(v),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }));
      },
      [n.window, d, f, L, h],
    );
  g.useLayoutEffect(() => n.subscribe(m), [n, m]),
    g.useEffect(() => {
      u.isTransitioning && !u.flushSync && c(new Mg());
    }, [u]),
    g.useEffect(() => {
      if (f && o && n.window) {
        let v = o,
          M = f.promise,
          O = n.window.document.startViewTransition(async () => {
            h(() => i(v)), await M;
          });
        O.finished.finally(() => {
          c(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          x(O);
      }
    }, [h, o, f, n.window]),
    g.useEffect(() => {
      f && o && l.location.key === o.location.key && f.resolve();
    }, [f, d, l.location, o]),
    g.useEffect(() => {
      !u.isTransitioning &&
        y &&
        (a(y.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        k(void 0));
    }, [u.isTransitioning, y]),
    g.useEffect(() => {}, []);
  let S = g.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, M, O) =>
          n.navigate(v, {
            state: M,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (v, M, O) =>
          n.navigate(v, {
            replace: !0,
            state: M,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n],
    ),
    R = n.basename || '/',
    C = g.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: R }),
      [n, S, R],
    ),
    T = g.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return g.createElement(
    g.Fragment,
    null,
    g.createElement(
      kr.Provider,
      { value: C },
      g.createElement(
        fo.Provider,
        { value: l },
        g.createElement(
          Tg.Provider,
          { value: L.current },
          g.createElement(
            zh.Provider,
            { value: u },
            g.createElement(
              dg,
              {
                basename: R,
                location: l.location,
                navigationType: l.historyAction,
                navigator: S,
                future: T,
              },
              l.initialized || n.future.v7_partialHydration
                ? g.createElement(zg, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
const zg = g.memo(Fg);
function Fg(e) {
  let { routes: t, future: n, state: r } = e;
  return by(t, void 0, r, n);
}
const jg =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Ig = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fh = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: f,
        unstable_viewTransition: c,
      } = t,
      d = Zu(t, Cg),
      { basename: x } = g.useContext(Lt),
      y,
      k = !1;
    if (typeof s == 'string' && Ig.test(s) && ((y = s), jg))
      try {
        let m = new URL(window.location.href),
          S = s.startsWith('//') ? new URL(m.protocol + s) : new URL(s),
          R = St(S.pathname, x);
        S.origin === m.origin && R != null
          ? (s = R + S.search + S.hash)
          : (k = !0);
      } catch {}
    let L = Ju(s, { relative: l }),
      p = $g(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: c,
      });
    function h(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return g.createElement(
      'a',
      gr({}, d, { href: y || L, onClick: k || i ? r : h, ref: n, target: u }),
    );
  }),
  Ug = g.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: i = '',
        end: o = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: f,
      } = t,
      c = Zu(t, Rg),
      d = Rl(u, { relative: c.relative }),
      x = gn(),
      y = g.useContext(fo),
      { navigator: k, basename: L } = g.useContext(Lt),
      p = y != null && Qg(d) && s === !0,
      h = k.encodeLocation ? k.encodeLocation(d).pathname : d.pathname,
      m = x.pathname,
      S =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    l ||
      ((m = m.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (h = h.toLowerCase())),
      S && L && (S = St(S, L) || S);
    const R = h !== '/' && h.endsWith('/') ? h.length - 1 : h.length;
    let C = m === h || (!o && m.startsWith(h) && m.charAt(R) === '/'),
      T =
        S != null &&
        (S === h || (!o && S.startsWith(h) && S.charAt(h.length) === '/')),
      v = { isActive: C, isPending: T, isTransitioning: p },
      M = C ? r : void 0,
      O;
    typeof i == 'function'
      ? (O = i(v))
      : (O = [
          i,
          C ? 'active' : null,
          T ? 'pending' : null,
          p ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let A = typeof a == 'function' ? a(v) : a;
    return g.createElement(
      Fh,
      gr({}, c, {
        'aria-current': M,
        className: O,
        ref: n,
        style: A,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof f == 'function' ? f(v) : f,
    );
  }),
  Ag = g.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: i,
        state: o,
        method: a = vi,
        action: u,
        onSubmit: s,
        relative: f,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = e,
      x = Zu(e, Pg),
      y = Wg(),
      k = Kg(u, { relative: f }),
      L = a.toLowerCase() === 'get' ? 'get' : 'post',
      p = (h) => {
        if ((s && s(h), h.defaultPrevented)) return;
        h.preventDefault();
        let m = h.nativeEvent.submitter,
          S = (m == null ? void 0 : m.getAttribute('formmethod')) || a;
        y(m || h.currentTarget, {
          fetcherKey: n,
          method: S,
          navigate: r,
          replace: i,
          state: o,
          relative: f,
          preventScrollReset: c,
          unstable_viewTransition: d,
        });
      };
    return g.createElement(
      'form',
      gr({ ref: t, method: L, action: k, onSubmit: l ? s : p }, x),
    );
  });
var Yi;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Yi || (Yi = {}));
var Jc;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Jc || (Jc = {}));
function jh(e) {
  let t = g.useContext(kr);
  return t || V(!1), t;
}
function $g(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Jy(),
    s = gn(),
    f = Rl(e, { relative: o });
  return g.useCallback(
    (c) => {
      if (Eg(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : pn(s) === pn(f);
        u(e, {
          replace: d,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, f, r, l, n, e, i, o, a],
  );
}
function Bg() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.',
    );
}
let Hg = 0,
  Vg = () => '__' + String(++Hg) + '__';
function Wg() {
  let { router: e } = jh(Yi.UseSubmit),
    { basename: t } = g.useContext(Lt),
    n = ug();
  return g.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), Bg();
      let { action: i, method: o, encType: a, formData: u, body: s } = _g(r, t);
      if (l.navigate === !1) {
        let f = l.fetcherKey || Vg();
        e.fetch(f, n, l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || o,
          formEncType: l.encType || a,
          unstable_flushSync: l.unstable_flushSync,
        });
      } else
        e.navigate(l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || o,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          unstable_flushSync: l.unstable_flushSync,
          unstable_viewTransition: l.unstable_viewTransition,
        });
    },
    [e, t, n],
  );
}
function Kg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = g.useContext(Lt),
    l = g.useContext(Wt);
  l || V(!1);
  let [i] = l.matches.slice(-1),
    o = gr({}, Rl(e || '.', { relative: n })),
    a = gn();
  if (e == null) {
    o.search = a.search;
    let u = new URLSearchParams(o.search);
    u.has('index') &&
      u.get('index') === '' &&
      (u.delete('index'), (o.search = u.toString() ? '?' + u.toString() : ''));
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : Pt([r, o.pathname])),
    pn(o)
  );
}
function Qg(e, t) {
  t === void 0 && (t = {});
  let n = g.useContext(zh);
  n == null && V(!1);
  let { basename: r } = jh(Yi.useViewTransitionState),
    l = Rl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = St(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = St(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Vi(l.pathname, o) != null || Vi(l.pathname, i) != null;
}
var Yg = -1,
  Xg = -2,
  Jg = -3,
  Gg = -4,
  Zg = -5,
  qg = -6,
  bg = -7,
  e0 = 'B',
  t0 = 'D',
  Ih = 'E',
  n0 = 'M',
  r0 = 'N',
  Uh = 'P',
  l0 = 'R',
  i0 = 'S',
  o0 = 'Y',
  a0 = 'U',
  u0 = 'Z',
  Ah = class {
    constructor() {
      Fl(this, 'promise');
      Fl(this, 'resolve');
      Fl(this, 'reject');
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function s0() {
  const e = new TextDecoder();
  let t = '';
  return new TransformStream({
    transform(n, r) {
      const l = e.decode(n, { stream: !0 }),
        i = (t + l).split(`
`);
      t = i.pop() || '';
      for (const o of i) r.enqueue(o);
    },
    flush(n) {
      t && n.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Go =
  typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function Qa(e) {
  const { hydrated: t, values: n } = this;
  if (typeof e == 'number') return Gc.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const r = n.length;
  for (const l of e) n.push(l);
  return (t.length = n.length), Gc.call(this, r);
}
function Gc(e) {
  const { hydrated: t, values: n, deferred: r, plugins: l } = this;
  let i;
  const o = [
    [
      e,
      (u) => {
        i = u;
      },
    ],
  ];
  let a = [];
  for (; o.length > 0; ) {
    const [u, s] = o.pop();
    switch (u) {
      case bg:
        s(void 0);
        continue;
      case Zg:
        s(null);
        continue;
      case Xg:
        s(NaN);
        continue;
      case qg:
        s(1 / 0);
        continue;
      case Jg:
        s(-1 / 0);
        continue;
      case Gg:
        s(-0);
        continue;
    }
    if (t[u]) {
      s(t[u]);
      continue;
    }
    const f = n[u];
    if (!f || typeof f != 'object') {
      (t[u] = f), s(f);
      continue;
    }
    if (Array.isArray(f))
      if (typeof f[0] == 'string') {
        const [c, d, x] = f;
        switch (c) {
          case t0:
            s((t[u] = new Date(d)));
            continue;
          case a0:
            s((t[u] = new URL(d)));
            continue;
          case e0:
            s((t[u] = BigInt(d)));
            continue;
          case l0:
            s((t[u] = new RegExp(d, x)));
            continue;
          case o0:
            s((t[u] = Symbol.for(d)));
            continue;
          case i0:
            const y = new Set();
            t[u] = y;
            for (let S = 1; S < f.length; S++)
              o.push([
                f[S],
                (R) => {
                  y.add(R);
                },
              ]);
            s(y);
            continue;
          case n0:
            const k = new Map();
            t[u] = k;
            for (let S = 1; S < f.length; S += 2) {
              const R = [];
              o.push([
                f[S + 1],
                (C) => {
                  R[1] = C;
                },
              ]),
                o.push([
                  f[S],
                  (C) => {
                    R[0] = C;
                  },
                ]),
                a.push(() => {
                  k.set(R[0], R[1]);
                });
            }
            s(k);
            continue;
          case r0:
            const L = Object.create(null);
            t[u] = L;
            for (const S of Object.keys(d).reverse()) {
              const R = [];
              o.push([
                d[S],
                (C) => {
                  R[1] = C;
                },
              ]),
                o.push([
                  Number(S.slice(1)),
                  (C) => {
                    R[0] = C;
                  },
                ]),
                a.push(() => {
                  L[R[0]] = R[1];
                });
            }
            s(L);
            continue;
          case Uh:
            if (t[d]) s((t[u] = t[d]));
            else {
              const S = new Ah();
              (r[d] = S), s((t[u] = S.promise));
            }
            continue;
          case Ih:
            const [, p, h] = f;
            let m = h && Go && Go[h] ? new Go[h](p) : new Error(p);
            (t[u] = m), s(m);
            continue;
          case u0:
            s((t[u] = t[d]));
            continue;
          default:
            if (Array.isArray(l)) {
              const S = [],
                R = f.slice(1);
              for (let C = 0; C < R.length; C++) {
                const T = R[C];
                o.push([
                  T,
                  (v) => {
                    S[C] = v;
                  },
                ]);
              }
              a.push(() => {
                for (const C of l) {
                  const T = C(f[0], ...S);
                  if (T) {
                    s((t[u] = T.value));
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const c = [];
        t[u] = c;
        for (let d = 0; d < f.length; d++) {
          const x = f[d];
          x !== Yg &&
            o.push([
              x,
              (y) => {
                c[d] = y;
              },
            ]);
        }
        s(c);
        continue;
      }
    else {
      const c = {};
      t[u] = c;
      for (const d of Object.keys(f).reverse()) {
        const x = [];
        o.push([
          f[d],
          (y) => {
            x[1] = y;
          },
        ]),
          o.push([
            Number(d.slice(1)),
            (y) => {
              x[0] = y;
            },
          ]),
          a.push(() => {
            c[x[0]] = x[1];
          });
      }
      s(c);
      continue;
    }
  }
  for (; a.length > 0; ) a.pop()();
  return i;
}
async function c0(e, t) {
  const { plugins: n } = t ?? {},
    r = new Ah(),
    l = e.pipeThrough(s0()).getReader(),
    i = { values: [], hydrated: [], deferred: {}, plugins: n },
    o = await f0.call(i, l);
  let a = r.promise;
  return (
    o.done
      ? r.resolve()
      : (a = d0
          .call(i, l)
          .then(r.resolve)
          .catch((u) => {
            for (const s of Object.values(i.deferred)) s.reject(u);
            r.reject(u);
          })),
    { done: a.then(() => l.closed), value: o.value }
  );
}
async function f0(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let n;
  try {
    n = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: Qa.call(this, n) };
}
async function d0(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const n = t.value;
    switch (n[0]) {
      case Uh: {
        const r = n.indexOf(':'),
          l = Number(n.slice(1, r)),
          i = this.deferred[l];
        if (!i) throw new Error(`Deferred ID ${l} not found in stream`);
        const o = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          throw new SyntaxError();
        }
        const u = Qa.call(this, a);
        i.resolve(u);
        break;
      }
      case Ih: {
        const r = n.indexOf(':'),
          l = Number(n.slice(1, r)),
          i = this.deferred[l];
        if (!i) throw new Error(`Deferred ID ${l} not found in stream`);
        const o = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          throw new SyntaxError();
        }
        const u = Qa.call(this, a);
        i.reject(u);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
/**
 * @remix-run/server-runtime v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const $h = Symbol('SingleFetchRedirect');
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ee() {
  return (
    (Ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ee.apply(this, arguments)
  );
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jn(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ async function Bh(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(n),
      window.__remixContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function h0(e, t, n) {
  let r = e
      .map((i) => {
        var o;
        let a = t[i.route.id],
          u = n.routes[i.route.id];
        return [
          u.css ? u.css.map((s) => ({ rel: 'stylesheet', href: s })) : [],
          (a == null || (o = a.links) === null || o === void 0
            ? void 0
            : o.call(a)) || [],
        ];
      })
      .flat(2),
    l = w0(e, n);
  return Vh(r, l);
}
async function Hh(e, t) {
  var n, r;
  if ((!e.css && !t.links) || !E0()) return;
  let l = [
    ((n = e.css) === null || n === void 0
      ? void 0
      : n.map((a) => ({ rel: 'stylesheet', href: a }))) ?? [],
    ((r = t.links) === null || r === void 0 ? void 0 : r.call(t)) ?? [],
  ].flat(1);
  if (l.length === 0) return;
  let i = [];
  for (let a of l)
    !qu(a) &&
      a.rel === 'stylesheet' &&
      i.push({ ...a, rel: 'preload', as: 'style' });
  let o = i.filter(
    (a) =>
      (!a.media || window.matchMedia(a.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`),
  );
  await Promise.all(o.map(p0));
}
async function p0(e) {
  return new Promise((t) => {
    let n = document.createElement('link');
    Object.assign(n, e);
    function r() {
      document.head.contains(n) && document.head.removeChild(n);
    }
    (n.onload = () => {
      r(), t();
    }),
      (n.onerror = () => {
        r(), t();
      }),
      document.head.appendChild(n);
  });
}
function qu(e) {
  return e != null && typeof e.page == 'string';
}
function m0(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function v0(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let i = await Bh(t.routes[l.route.id], n);
      return i.links ? i.links() : [];
    }),
  );
  return Vh(
    r
      .flat(1)
      .filter(m0)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' },
      ),
  );
}
function Zc(e, t, n, r, l, i) {
  let o = Wh(e),
    a = (f, c) => (n[c] ? f.route.id !== n[c].route.id : !0),
    u = (f, c) => {
      var d;
      return (
        n[c].pathname !== f.pathname ||
        (((d = n[c].route.path) === null || d === void 0
          ? void 0
          : d.endsWith('*')) &&
          n[c].params['*'] !== f.params['*'])
      );
    };
  return i === 'data' && l.search !== o.search
    ? t.filter((f, c) => {
        if (!r.routes[f.route.id].hasLoader) return !1;
        if (a(f, c) || u(f, c)) return !0;
        if (f.route.shouldRevalidate) {
          var x;
          let y = f.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams:
              ((x = n[0]) === null || x === void 0 ? void 0 : x.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: f.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof y == 'boolean') return y;
        }
        return !0;
      })
    : t.filter((f, c) => {
        let d = r.routes[f.route.id];
        return (i === 'assets' || d.hasLoader) && (a(f, c) || u(f, c));
      });
}
function y0(e, t, n) {
  let r = Wh(e);
  return bu(
    t
      .filter(
        (l) =>
          n.routes[l.route.id].hasLoader &&
          !n.routes[l.route.id].hasClientLoader,
      )
      .map((l) => {
        let { pathname: i, search: o } = r,
          a = new URLSearchParams(o);
        return a.set('_data', l.route.id), `${i}?${a}`;
      }),
  );
}
function g0(e, t) {
  return bu(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1),
  );
}
function w0(e, t) {
  return bu(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1),
  );
}
function bu(e) {
  return [...new Set(e)];
}
function S0(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Vh(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((l, i) => {
    if (t && !qu(i) && i.as === 'script' && i.href && r.has(i.href)) return l;
    let a = JSON.stringify(S0(i));
    return n.has(a) || (n.add(a), l.push({ key: a, link: i })), l;
  }, []);
}
function Wh(e) {
  let t = Vt(e);
  return t.search === void 0 && (t.search = ''), t;
}
let ei;
function E0() {
  if (ei !== void 0) return ei;
  let e = document.createElement('link');
  return (ei = e.relList.supports('preload')), (e = null), ei;
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const x0 = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  },
  k0 = /[&><\u2028\u2029]/g;
function ti(e) {
  return e.replace(k0, (t) => x0[t]);
}
function qc(e) {
  return { __html: e };
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _0(e) {
  return e.headers.get('X-Remix-Catch') != null;
}
function C0(e) {
  return e.headers.get('X-Remix-Error') != null;
}
function R0(e) {
  return (
    es(e) &&
    e.status >= 400 &&
    e.headers.get('X-Remix-Error') == null &&
    e.headers.get('X-Remix-Catch') == null &&
    e.headers.get('X-Remix-Response') == null
  );
}
function P0(e) {
  return e.headers.get('X-Remix-Redirect') != null;
}
function L0(e) {
  var t;
  return !!(
    (t = e.headers.get('Content-Type')) !== null &&
    t !== void 0 &&
    t.match(/text\/remix-deferred/)
  );
}
function es(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function T0(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
async function Kh(e, t, n = 0) {
  let r = new URL(e.url);
  r.searchParams.set('_data', t),
    n > 0 && (await new Promise((a) => setTimeout(a, 5 ** n * 10)));
  let l = await ts(e),
    i = window.__remixRevalidation,
    o = await fetch(r.href, l).catch((a) => {
      if (
        typeof i == 'number' &&
        i === window.__remixRevalidation &&
        (a == null ? void 0 : a.name) === 'TypeError' &&
        n < 3
      )
        return Kh(e, t, n + 1);
      throw a;
    });
  if (C0(o)) {
    let a = await o.json(),
      u = new Error(a.message);
    return (u.stack = a.stack), u;
  }
  if (R0(o)) {
    let a = await o.text(),
      u = new Error(a);
    return (u.stack = void 0), u;
  }
  return o;
}
async function ts(e) {
  let t = { signal: e.signal };
  if (e.method !== 'GET') {
    t.method = e.method;
    let n = e.headers.get('Content-Type');
    n && /\bapplication\/json\b/.test(n)
      ? ((t.headers = { 'Content-Type': n }),
        (t.body = JSON.stringify(await e.json())))
      : n && /\btext\/plain\b/.test(n)
        ? ((t.headers = { 'Content-Type': n }), (t.body = await e.text()))
        : n && /\bapplication\/x-www-form-urlencoded\b/.test(n)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
const N0 = '__deferred_promise:';
async function D0(e) {
  if (!e)
    throw new Error('parseDeferredReadableStream requires stream argument');
  let t,
    n = {};
  try {
    let r = O0(e),
      i = (await r.next()).value;
    if (!i) throw new Error('no critical data');
    let o = JSON.parse(i);
    if (typeof o == 'object' && o !== null)
      for (let [a, u] of Object.entries(o))
        typeof u != 'string' ||
          !u.startsWith(N0) ||
          ((t = t || {}),
          (t[a] = new Promise((s, f) => {
            n[a] = {
              resolve: (c) => {
                s(c), delete n[a];
              },
              reject: (c) => {
                f(c), delete n[a];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let a of r) {
            let [u, ...s] = a.split(':'),
              f = s.join(':'),
              c = JSON.parse(f);
            if (u === 'data')
              for (let [d, x] of Object.entries(c)) n[d] && n[d].resolve(x);
            else if (u === 'error')
              for (let [d, x] of Object.entries(c)) {
                let y = new Error(x.message);
                (y.stack = x.stack), n[d] && n[d].reject(y);
              }
          }
          for (let [a, u] of Object.entries(n))
            u.reject(new Wi(`Deferred ${a} will never be resolved`));
        } catch (a) {
          for (let u of Object.values(n)) u.reject(a);
        }
      })(),
      new Sy({ ...o, ...t })
    );
  } catch (r) {
    for (let l of Object.values(n)) l.reject(r);
    throw r;
  }
}
async function* O0(e) {
  let t = e.getReader(),
    n = [],
    r = [],
    l = !1,
    i = new TextEncoder(),
    o = new TextDecoder(),
    a = async () => {
      if (r.length > 0) return r.shift();
      for (; !l && r.length === 0; ) {
        let s = await t.read();
        if (s.done) {
          l = !0;
          break;
        }
        n.push(s.value);
        try {
          let c = o.decode(bc(...n)).split(`

`);
          if (
            (c.length >= 2 &&
              (r.push(...c.slice(0, -1)),
              (n = [
                i.encode(
                  c.slice(-1).join(`

`),
                ),
              ])),
            r.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        r.length > 0 ||
          (n.length > 0 &&
            ((r = o
              .decode(bc(...n))
              .split(
                `

`,
              )
              .filter((f) => f)),
            (n = []))),
        r.shift()
      );
    },
    u = await a();
  for (; u; ) yield u, (u = await a());
}
function bc(...e) {
  let t = new Uint8Array(e.reduce((r, l) => r + l.length, 0)),
    n = 0;
  for (let r of e) t.set(r, n), (n += r.length);
  return t;
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function h1(e, t) {
  return async ({ request: n, matches: r }) =>
    n.method !== 'GET' ? M0(n, r) : z0(e, t, n, r);
}
function M0(e, t) {
  return Promise.all(
    t.map(async (n) => {
      let r,
        l = await n.resolve(async (i) => ({
          type: 'data',
          result: await i(async () => {
            let a = ns(e.url),
              u = await ts(e),
              { data: s, status: f } = await Ya(a, u);
            return (r = f), Xa(s, n.route.id);
          }),
        }));
      return es(l.result) || xr(l.result)
        ? l
        : { type: l.type, result: wy(l.result, r) };
    }),
  );
}
function z0(e, t, n, r) {
  let l;
  return Promise.all(
    r.map(async (i) =>
      i.resolve(async (o) => {
        let a,
          u = F0(ns(n.url)),
          s = await ts(n);
        return (
          e.routes[i.route.id].hasClientLoader
            ? (a = await o(async () => {
                u.searchParams.set('_routes', i.route.id);
                let { data: f } = await Ya(u, s);
                return ef(f, i.route.id);
              }))
            : (a = await o(async () => {
                l ||
                  ((u = Qh(
                    e,
                    t,
                    r.map((c) => c.route),
                    r.filter((c) => c.shouldLoad).map((c) => c.route),
                    u,
                  )),
                  (l = Ya(u, s).then(({ data: c }) => c)));
                let f = await l;
                return ef(f, i.route.id);
              })),
          { type: 'data', result: a }
        );
      }),
    ),
  );
}
function F0(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let n = [];
  for (let r of t) r && n.push(r);
  for (let r of n) e.searchParams.append('index', r);
  return e;
}
function Qh(e, t, n, r, l) {
  let i = (s) => s.filter((f) => e.routes[f].hasLoader).join(',');
  if (
    !n.some((s) => {
      var f, c;
      return (
        ((f = t[s.id]) === null || f === void 0
          ? void 0
          : f.shouldRevalidate) ||
        ((c = e.routes[s.id]) === null || c === void 0
          ? void 0
          : c.hasClientLoader)
      );
    })
  )
    return l;
  let a = i(n.map((s) => s.id)),
    u = i(
      r
        .filter((s) => {
          var f;
          return !(
            (f = e.routes[s.id]) !== null &&
            f !== void 0 &&
            f.hasClientLoader
          );
        })
        .map((s) => s.id),
    );
  return a !== u && l.searchParams.set('_routes', u), l;
}
function ns(e) {
  let t = typeof e == 'string' ? new URL(e, window.location.origin) : e;
  return (
    t.pathname === '/'
      ? (t.pathname = '_root.data')
      : (t.pathname = `${t.pathname.replace(/\/$/, '')}.data`),
    t
  );
}
async function Ya(e, t) {
  let n = await fetch(e, t);
  jn(n.body, 'No response body to decode');
  try {
    let r = await j0(n.body, window);
    return { status: n.status, data: r.value };
  } catch (r) {
    throw (
      (console.error(r),
      new Error(
        `Unable to decode turbo-stream response from URL: ${e.toString()}`,
      ))
    );
  }
}
function j0(e, t) {
  return c0(e, {
    plugins: [
      (n, ...r) => {
        if (n === 'SanitizedError') {
          let [l, i, o] = r,
            a = Error;
          l && l in t && typeof t[l] == 'function' && (a = t[l]);
          let u = new a(i);
          return (u.stack = o), { value: u };
        }
        if (n === 'ErrorResponse') {
          let [l, i, o] = r;
          return { value: new Fn(i, o, l) };
        }
        if (n === 'SingleFetchRedirect') return { value: { [$h]: r[0] } };
      },
    ],
  });
}
function ef(e, t) {
  let n = e[$h];
  return n ? Xa(n, t) : e[t] !== void 0 ? Xa(e[t], t) : null;
}
function Xa(e, t) {
  if ('error' in e) throw e.error;
  if ('redirect' in e) {
    let n = {};
    return (
      e.revalidate && (n['X-Remix-Revalidate'] = 'yes'),
      e.reload && (n['X-Remix-Reload-Document'] = 'yes'),
      e.replace && (n['X-Remix-Replace'] = 'yes'),
      xh(e.redirect, { status: e.status, headers: n })
    );
  } else {
    if ('data' in e) return e.data;
    throw new Error(`No response found for routeId "${t}"`);
  }
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ class p1 extends g.Component {
  constructor(t) {
    super(t), (this.state = { error: t.error || null, location: t.location });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  render() {
    return this.state.error
      ? g.createElement(Yh, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
}
function Yh({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let n = g.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (xr(e))
    return g.createElement(
      Ja,
      { title: 'Unhandled Thrown Response!' },
      g.createElement(
        'h1',
        { style: { fontSize: '24px' } },
        e.status,
        ' ',
        e.statusText,
      ),
      n,
    );
  let r;
  if (e instanceof Error) r = e;
  else {
    let l =
      e == null
        ? 'Unknown Error'
        : typeof e == 'object' && 'toString' in e
          ? e.toString()
          : JSON.stringify(e);
    r = new Error(l);
  }
  return g.createElement(
    Ja,
    { title: 'Application Error!', isOutsideRemixApp: t },
    g.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    g.createElement(
      'pre',
      {
        style: {
          padding: '2rem',
          background: 'hsla(10, 50%, 50%, 0.1)',
          color: 'red',
          overflow: 'auto',
        },
      },
      r.stack,
    ),
    n,
  );
}
function Ja({ title: e, renderScripts: t, isOutsideRemixApp: n, children: r }) {
  var l;
  let { routeModules: i } = _r();
  return (l = i.root) !== null && l !== void 0 && l.Layout && !n
    ? r
    : g.createElement(
        'html',
        { lang: 'en' },
        g.createElement(
          'head',
          null,
          g.createElement('meta', { charSet: 'utf-8' }),
          g.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          g.createElement('title', null, e),
        ),
        g.createElement(
          'body',
          null,
          g.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            r,
            t ? g.createElement(n1, null) : null,
          ),
        ),
      );
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function I0() {
  return g.createElement(
    Ja,
    { title: 'Loading...', renderScripts: !0 },
    g.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `,
      },
    }),
  );
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xh(e) {
  let t = {};
  return (
    Object.values(e).forEach((n) => {
      let r = n.parentId || '';
      t[r] || (t[r] = []), t[r].push(n);
    }),
    t
  );
}
function U0(e, t, n) {
  let r = Jh(t),
    l =
      t.HydrateFallback && (!n || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? I0
          : void 0,
    i = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => g.createElement(Yh, { error: Mh() })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(r
          ? {
              element: g.createElement(
                t.Layout,
                null,
                g.createElement(r, null),
              ),
            }
          : { Component: r }),
        ...(i
          ? {
              errorElement: g.createElement(
                t.Layout,
                null,
                g.createElement(i, null),
              ),
            }
          : { ErrorBoundary: i }),
        ...(l
          ? {
              hydrateFallbackElement: g.createElement(
                t.Layout,
                null,
                g.createElement(l, null),
              ),
            }
          : { HydrateFallback: l }),
      }
    : { Component: r, ErrorBoundary: i, HydrateFallback: l };
}
function m1(e, t, n, r, l, i) {
  return rs(t, n, r, l, i, '', Xh(t), e);
}
function ni(e, t, n) {
  if (n) {
    let o = `You cannot call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} in SPA Mode (routeId: "${t.id}")`;
    throw (console.error(o), new Fn(400, 'Bad Request', new Error(o), !0));
  }
  let l = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction))
    throw (console.error(l), new Fn(400, 'Bad Request', new Error(l), !0));
}
function Zo(e, t) {
  let n = e === 'clientAction' ? 'a' : 'an',
    r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
  throw (console.error(r), new Fn(405, 'Method Not Allowed', new Error(r), !0));
}
function rs(e, t, n, r, l, i = '', o = Xh(e), a) {
  return (o[i] || []).map((u) => {
    let s = t[u.id];
    async function f(m, S, R) {
      if (typeof R == 'function') return await R();
      let C = await $0(m, u);
      return S ? B0(C) : C;
    }
    function c(m, S, R) {
      return u.hasLoader ? f(m, S, R) : Promise.resolve(null);
    }
    function d(m, S, R) {
      if (!u.hasAction) throw Zo('action', u.id);
      return f(m, S, R);
    }
    async function x(m) {
      let S = t[u.id],
        R = S ? Hh(u, S) : Promise.resolve();
      try {
        return m();
      } finally {
        await R;
      }
    }
    let y = { id: u.id, index: u.index, path: u.path };
    if (s) {
      var k, L, p;
      Object.assign(y, {
        ...y,
        ...U0(u, s, l),
        handle: s.handle,
        shouldRevalidate: a
          ? tf(u.id, s.shouldRevalidate, a)
          : s.shouldRevalidate,
      });
      let m =
          n == null || (k = n.loaderData) === null || k === void 0
            ? void 0
            : k[u.id],
        S =
          n == null || (L = n.errors) === null || L === void 0
            ? void 0
            : L[u.id],
        R =
          a == null &&
          (((p = s.clientLoader) === null || p === void 0
            ? void 0
            : p.hydrate) === !0 ||
            !u.hasLoader);
      (y.loader = async ({ request: C, params: T }, v) => {
        try {
          return await x(
            async () => (
              jn(s, 'No `routeModule` available for critical-route loader'),
              s.clientLoader
                ? s.clientLoader({
                    request: C,
                    params: T,
                    async serverLoader() {
                      if ((ni('loader', u, l), R)) {
                        if (S !== void 0) throw S;
                        return m;
                      }
                      return c(C, !0, v);
                    },
                  })
                : l
                  ? null
                  : c(C, !1, v)
            ),
          );
        } finally {
          R = !1;
        }
      }),
        (y.loader.hydrate = V0(u, s, l)),
        (y.action = ({ request: C, params: T }, v) =>
          x(async () => {
            if (
              (jn(s, 'No `routeModule` available for critical-route action'),
              !s.clientAction)
            ) {
              if (l) throw Zo('clientAction', u.id);
              return d(C, !1, v);
            }
            return s.clientAction({
              request: C,
              params: T,
              async serverAction() {
                return ni('action', u, l), d(C, !0, v);
              },
            });
          }));
    } else
      u.hasClientLoader ||
        (y.loader = ({ request: m }, S) =>
          x(() => (l ? Promise.resolve(null) : c(m, !1, S)))),
        u.hasClientAction ||
          (y.action = ({ request: m }, S) =>
            x(() => {
              if (l) throw Zo('clientAction', u.id);
              return d(m, !1, S);
            })),
        (y.lazy = async () => {
          let m = await A0(u, t),
            S = { ...m };
          if (m.clientLoader) {
            let R = m.clientLoader;
            S.loader = (C, T) =>
              R({
                ...C,
                async serverLoader() {
                  return ni('loader', u, l), c(C.request, !0, T);
                },
              });
          }
          if (m.clientAction) {
            let R = m.clientAction;
            S.action = (C, T) =>
              R({
                ...C,
                async serverAction() {
                  return ni('action', u, l), d(C.request, !0, T);
                },
              });
          }
          return (
            a && (S.shouldRevalidate = tf(u.id, m.shouldRevalidate, a)),
            {
              ...(S.loader ? { loader: S.loader } : {}),
              ...(S.action ? { action: S.action } : {}),
              hasErrorBoundary: S.hasErrorBoundary,
              shouldRevalidate: S.shouldRevalidate,
              handle: S.handle,
              Component: S.Component,
              ErrorBoundary: S.ErrorBoundary,
            }
          );
        });
    let h = rs(e, t, n, r, l, u.id, o, a);
    return h.length > 0 && (y.children = h), y;
  });
}
function tf(e, t, n) {
  let r = !1;
  return (l) =>
    r ? (t ? t(l) : l.defaultShouldRevalidate) : ((r = !0), n.has(e));
}
async function A0(e, t) {
  let n = await Bh(e, t);
  return (
    await Hh(e, n),
    {
      Component: Jh(n),
      ErrorBoundary: n.ErrorBoundary,
      clientAction: n.clientAction,
      clientLoader: n.clientLoader,
      handle: n.handle,
      links: n.links,
      meta: n.meta,
      shouldRevalidate: n.shouldRevalidate,
    }
  );
}
async function $0(e, t) {
  let n = await Kh(e, t.id);
  if (n instanceof Error) throw n;
  if (P0(n)) throw H0(n);
  if (_0(n)) throw n;
  return L0(n) && n.body ? await D0(n.body) : n;
}
function B0(e) {
  if (T0(e)) return e.data;
  if (es(e)) {
    let t = e.headers.get('Content-Type');
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
  }
  return e;
}
function H0(e) {
  let t = parseInt(e.headers.get('X-Remix-Status'), 10) || 302,
    n = e.headers.get('X-Remix-Redirect'),
    r = {},
    l = e.headers.get('X-Remix-Revalidate');
  l && (r['X-Remix-Revalidate'] = l);
  let i = e.headers.get('X-Remix-Reload-Document');
  i && (r['X-Remix-Reload-Document'] = i);
  let o = e.headers.get('X-Remix-Replace');
  return o && (r['X-Remix-Replace'] = o), xh(n, { status: t, headers: r });
}
function Jh(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0))
    return e.default;
}
function V0(e, t, n) {
  return (
    (n && e.id !== 'root') ||
    (t.clientLoader != null &&
      (t.clientLoader.hydrate === !0 || e.hasLoader !== !0))
  );
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const yi = new Set(),
  W0 = 1e3,
  Xi = new Set(),
  K0 = 7680;
function ls(e, t) {
  return e.unstable_lazyRouteDiscovery === !0 && !t;
}
function Q0(e, t) {
  let n = new Set(t.state.matches.map((o) => o.route.id)),
    r = t.state.location.pathname.split('/').filter(Boolean),
    l = ['/'];
  for (r.pop(); r.length > 0; ) l.push(`/${r.join('/')}`), r.pop();
  l.forEach((o) => {
    let a = zt(t.routes, o, t.basename);
    a && a.forEach((u) => n.add(u.route.id));
  });
  let i = [...n].reduce((o, a) => Object.assign(o, { [a]: e.routes[a] }), {});
  return { ...e, routes: i };
}
function v1(e, t, n, r, l) {
  if (ls(n, r))
    return async ({ path: i, patch: o }) => {
      Xi.has(i) || (await Gh([i], e, t, n, r, l, o));
    };
}
function y1(e, t, n, r, l) {
  g.useEffect(() => {
    var i;
    if (
      !ls(r, l) ||
      ((i = navigator.connection) === null || i === void 0
        ? void 0
        : i.saveData) === !0
    )
      return;
    function o(c) {
      let d =
        c.tagName === 'FORM'
          ? c.getAttribute('action')
          : c.getAttribute('href');
      if (!d) return;
      let x = new URL(d, window.location.origin);
      Xi.has(x.pathname) || yi.add(x.pathname);
    }
    async function a() {
      let c = Array.from(yi.keys()).filter((d) =>
        Xi.has(d) ? (yi.delete(d), !1) : !0,
      );
      if (c.length !== 0)
        try {
          await Gh(c, t, n, r, l, e.basename, e.patchRoutes);
        } catch (d) {
          console.error('Failed to fetch manifest patches', d);
        }
    }
    document.body
      .querySelectorAll('a[data-discover], form[data-discover]')
      .forEach((c) => o(c)),
      a();
    let u = X0(a, 100);
    function s(c) {
      return c.nodeType === Node.ELEMENT_NODE;
    }
    let f = new MutationObserver((c) => {
      let d = new Set();
      c.forEach((x) => {
        [x.target, ...x.addedNodes].forEach((y) => {
          s(y) &&
            (((y.tagName === 'A' && y.getAttribute('data-discover')) ||
              (y.tagName === 'FORM' && y.getAttribute('data-discover'))) &&
              d.add(y),
            y.tagName !== 'A' &&
              y
                .querySelectorAll('a[data-discover], form[data-discover]')
                .forEach((k) => d.add(k)));
        });
      }),
        d.forEach((x) => o(x)),
        u();
    });
    return (
      f.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => f.disconnect()
    );
  }, [r, l, t, n, e]);
}
async function Gh(e, t, n, r, l, i, o) {
  let a = `${i ?? '/'}/__manifest`.replace(/\/+/g, '/'),
    u = new URL(a, window.location.origin);
  if (
    (u.searchParams.set('version', t.version),
    e.forEach((y) => u.searchParams.append('p', y)),
    u.toString().length > K0)
  ) {
    yi.clear();
    return;
  }
  let s = await fetch(u);
  if (s.ok) {
    if (s.status >= 400) throw new Error(await s.text());
  } else throw new Error(`${s.status} ${s.statusText}`);
  let f = await s.json(),
    c = new Set(Object.keys(t.routes)),
    d = Object.values(f).reduce(
      (y, k) => (c.has(k.id) ? y : Object.assign(y, { [k.id]: k })),
      {},
    );
  Object.assign(t.routes, d), e.forEach((y) => Y0(y, Xi));
  let x = new Set();
  Object.values(d).forEach((y) => {
    (!y.parentId || !d[y.parentId]) && x.add(y.parentId);
  }),
    x.forEach((y) => o(y || null, rs(d, n, null, r, l, y)));
}
function Y0(e, t) {
  if (t.size >= W0) {
    let n = t.values().next().value;
    t.delete(n);
  }
  t.add(e);
}
function X0(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), (n = window.setTimeout(() => e(...r), t));
  };
}
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zh() {
  let e = g.useContext(kr);
  return (
    jn(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    e
  );
}
function po() {
  let e = g.useContext(fo);
  return (
    jn(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    e
  );
}
const qh = g.createContext(void 0);
qh.displayName = 'Remix';
function _r() {
  let e = g.useContext(qh);
  return jn(e, 'You must render this element inside a <Remix> element'), e;
}
function bh(e, t) {
  let [n, r] = g.useState(!1),
    [l, i] = g.useState(!1),
    {
      onFocus: o,
      onBlur: a,
      onMouseEnter: u,
      onMouseLeave: s,
      onTouchStart: f,
    } = t,
    c = g.useRef(null);
  g.useEffect(() => {
    if ((e === 'render' && i(!0), e === 'viewport')) {
      let y = (L) => {
          L.forEach((p) => {
            i(p.isIntersecting);
          });
        },
        k = new IntersectionObserver(y, { threshold: 0.5 });
      return (
        c.current && k.observe(c.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [e]);
  let d = () => {
      e === 'intent' && r(!0);
    },
    x = () => {
      e === 'intent' && (r(!1), i(!1));
    };
  return (
    g.useEffect(() => {
      if (n) {
        let y = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(y);
        };
      }
    }, [n]),
    [
      l,
      c,
      {
        onFocus: Ar(o, d),
        onBlur: Ar(a, x),
        onMouseEnter: Ar(u, d),
        onMouseLeave: Ar(s, x),
        onTouchStart: Ar(f, d),
      },
    ]
  );
}
const is = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function os(e, t, n) {
  return e === 'render' && !t && !n ? 'true' : void 0;
}
let J0 = g.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
    let i = typeof e == 'string' && is.test(e),
      o = Ju(e),
      [a, u, s] = bh(t, r);
    return g.createElement(
      g.Fragment,
      null,
      g.createElement(
        Ug,
        Ee({}, r, s, {
          ref: ep(l, u),
          to: e,
          'data-discover': os(n, i, r.reloadDocument),
        }),
      ),
      a && !i ? g.createElement(us, { page: o }) : null,
    );
  },
);
J0.displayName = 'NavLink';
let G0 = g.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
    let i = typeof e == 'string' && is.test(e),
      o = Ju(e),
      [a, u, s] = bh(t, r);
    return g.createElement(
      g.Fragment,
      null,
      g.createElement(
        Fh,
        Ee({}, r, s, {
          ref: ep(l, u),
          to: e,
          'data-discover': os(n, i, r.reloadDocument),
        }),
      ),
      a && !i ? g.createElement(us, { page: o }) : null,
    );
  },
);
G0.displayName = 'Link';
let Z0 = g.forwardRef(({ discover: e = 'render', ...t }, n) => {
  let r = typeof t.action == 'string' && is.test(t.action);
  return g.createElement(
    Ag,
    Ee({}, t, { ref: n, 'data-discover': os(e, r, t.reloadDocument) }),
  );
});
Z0.displayName = 'Form';
function Ar(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function as(e, t, n) {
  if (n && !gi) return [e[0]];
  if (t) {
    let r = e.findIndex((l) => t[l.route.id] !== void 0);
    return e.slice(0, r + 1);
  }
  return e;
}
function g1() {
  let { isSpaMode: e, manifest: t, routeModules: n, criticalCss: r } = _r(),
    { errors: l, matches: i } = po(),
    o = as(i, l, e),
    a = g.useMemo(() => h0(o, n, t), [o, n, t]);
  return g.createElement(
    g.Fragment,
    null,
    r
      ? g.createElement('style', { dangerouslySetInnerHTML: { __html: r } })
      : null,
    a.map(({ key: u, link: s }) =>
      qu(s)
        ? g.createElement(us, Ee({ key: u }, s))
        : g.createElement('link', Ee({ key: u }, s)),
    ),
  );
}
function us({ page: e, ...t }) {
  let { router: n } = Zh(),
    r = g.useMemo(() => zt(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? g.createElement(b0, Ee({ page: e, matches: r }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function q0(e) {
  let { manifest: t, routeModules: n } = _r(),
    [r, l] = g.useState([]);
  return (
    g.useEffect(() => {
      let i = !1;
      return (
        v0(e, t, n).then((o) => {
          i || l(o);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function b0({ page: e, matches: t, ...n }) {
  let r = gn(),
    { future: l, manifest: i, routeModules: o } = _r(),
    { matches: a } = po(),
    u = g.useMemo(() => Zc(e, t, a, i, r, 'data'), [e, t, a, i, r]),
    s = g.useMemo(() => Zc(e, t, a, i, r, 'assets'), [e, t, a, i, r]),
    f = g.useMemo(() => y0(e, u, i), [u, e, i]),
    c = g.useMemo(() => g0(s, i), [s, i]),
    d = q0(s),
    x = null;
  if (!l.unstable_singleFetch)
    x = f.map((y) =>
      g.createElement(
        'link',
        Ee({ key: y, rel: 'prefetch', as: 'fetch', href: y }, n),
      ),
    );
  else if (u.length > 0) {
    let y = Qh(
      i,
      o,
      t.map((k) => k.route),
      u.map((k) => k.route),
      ns(e),
    );
    y.searchParams.get('_routes') !== '' &&
      (x = g.createElement(
        'link',
        Ee(
          {
            key: y.pathname + y.search,
            rel: 'prefetch',
            as: 'fetch',
            href: y.pathname + y.search,
          },
          n,
        ),
      ));
  }
  return g.createElement(
    g.Fragment,
    null,
    x,
    c.map((y) =>
      g.createElement('link', Ee({ key: y, rel: 'modulepreload', href: y }, n)),
    ),
    d.map(({ key: y, link: k }) => g.createElement('link', Ee({ key: y }, k))),
  );
}
function w1() {
  let { isSpaMode: e, routeModules: t } = _r(),
    { errors: n, matches: r, loaderData: l } = po(),
    i = gn(),
    o = as(r, n, e),
    a = null;
  n && (a = n[o[o.length - 1].route.id]);
  let u = [],
    s = null,
    f = [];
  for (let c = 0; c < o.length; c++) {
    let d = o[c],
      x = d.route.id,
      y = l[x],
      k = d.params,
      L = t[x],
      p = [],
      h = {
        id: x,
        data: y,
        meta: [],
        params: d.params,
        pathname: d.pathname,
        handle: d.route.handle,
        error: a,
      };
    if (
      ((f[c] = h),
      L != null && L.meta
        ? (p =
            typeof L.meta == 'function'
              ? L.meta({
                  data: y,
                  params: k,
                  location: i,
                  matches: f,
                  error: a,
                })
              : Array.isArray(L.meta)
                ? [...L.meta]
                : L.meta)
        : s && (p = [...s]),
      (p = p || []),
      !Array.isArray(p))
    )
      throw new Error(
        'The route at ' +
          d.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`,
      );
    (h.meta = p), (f[c] = h), (u = [...p]), (s = u);
  }
  return g.createElement(
    g.Fragment,
    null,
    u.flat().map((c) => {
      if (!c) return null;
      if ('tagName' in c) {
        let { tagName: d, ...x } = c;
        if (!e1(d))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${d}. Expected either 'link' or 'meta'`,
            ),
            null
          );
        let y = d;
        return g.createElement(y, Ee({ key: JSON.stringify(x) }, x));
      }
      if ('title' in c)
        return g.createElement('title', { key: 'title' }, String(c.title));
      if (
        ('charset' in c &&
          (c.charSet ?? (c.charSet = c.charset), delete c.charset),
        'charSet' in c && c.charSet != null)
      )
        return typeof c.charSet == 'string'
          ? g.createElement('meta', { key: 'charSet', charSet: c.charSet })
          : null;
      if ('script:ld+json' in c)
        try {
          let d = JSON.stringify(c['script:ld+json']);
          return g.createElement('script', {
            key: `script:ld+json:${d}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: { __html: d },
          });
        } catch {
          return null;
        }
      return g.createElement('meta', Ee({ key: JSON.stringify(c) }, c));
    }),
  );
}
function e1(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
function t1(e) {
  return g.createElement(hg, e);
}
let gi = !1;
function n1(e) {
  let {
      manifest: t,
      serverHandoffString: n,
      abortDelay: r,
      serializeError: l,
      isSpaMode: i,
      future: o,
      renderMeta: a,
    } = _r(),
    { router: u, static: s, staticContext: f } = Zh(),
    { matches: c } = po(),
    d = ls(o, i);
  a && (a.didRenderScripts = !0);
  let x = as(c, null, i);
  g.useEffect(() => {
    gi = !0;
  }, []);
  let y = (C, T) => {
      let v;
      return (
        l && T instanceof Error ? (v = l(T)) : (v = T),
        `${JSON.stringify(C)}:__remixContext.p(!1, ${ti(JSON.stringify(v))})`
      );
    },
    k = (C, T, v) => {
      let M;
      try {
        M = JSON.stringify(v);
      } catch (O) {
        return y(T, O);
      }
      return `${JSON.stringify(T)}:__remixContext.p(${ti(M)})`;
    },
    L = (C, T, v) => {
      let M;
      return (
        l && v instanceof Error ? (M = l(v)) : (M = v),
        `__remixContext.r(${JSON.stringify(C)}, ${JSON.stringify(T)}, !1, ${ti(JSON.stringify(M))})`
      );
    },
    p = (C, T, v) => {
      let M;
      try {
        M = JSON.stringify(v);
      } catch (O) {
        return L(C, T, O);
      }
      return `__remixContext.r(${JSON.stringify(C)}, ${JSON.stringify(T)}, ${ti(M)})`;
    },
    h = [],
    m = g.useMemo(() => {
      var C;
      let T = o.unstable_singleFetch
          ? 'window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());'
          : '',
        v = f ? `window.__remixContext = ${n};${T}` : ' ',
        M = o.unstable_singleFetch || f == null ? void 0 : f.activeDeferreds;
      v += M
        ? [
            '__remixContext.p = function(v,e,p,x) {',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p=Promise.reject(x);',
            '  } else {',
            '    p=Promise.resolve(v);',
            '  }',
            '  return p;',
            '};',
            '__remixContext.n = function(i,k) {',
            '  __remixContext.t = __remixContext.t || {};',
            '  __remixContext.t[i] = __remixContext.t[i] || {};',
            '  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});',
            typeof r == 'number'
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${r});`
              : '',
            '  return p;',
            '};',
            '__remixContext.r = function(i,k,v,e,p,x) {',
            '  p = __remixContext.t[i][k];',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p.e(x);',
            '  } else {',
            '    p.r(v);',
            '  }',
            '};',
          ].join(`
`) +
          Object.entries(M).map(([A, X]) => {
            let pe = new Set(X.pendingKeys),
              ae = X.deferredKeys.map((xe) => {
                if (pe.has(xe))
                  return (
                    h.push(
                      g.createElement(nf, {
                        key: `${A} | ${xe}`,
                        deferredData: X,
                        routeId: A,
                        dataKey: xe,
                        scriptProps: e,
                        serializeData: p,
                        serializeError: L,
                      }),
                    ),
                    `${JSON.stringify(xe)}:__remixContext.n(${JSON.stringify(A)}, ${JSON.stringify(xe)})`
                  );
                {
                  let je = X.data[xe];
                  return typeof je._error < 'u'
                    ? y(xe, je._error)
                    : k(A, xe, je._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(A)}], {${ae}});`;
          }).join(`
`) +
          (h.length > 0 ? `__remixContext.a=${h.length};` : '')
        : '';
      let O = s
        ? `${(C = t.hmr) !== null && C !== void 0 && C.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${d ? '' : `import ${JSON.stringify(t.url)}`};
${x.map(
  (A, X) =>
    `import * as route${X} from ${JSON.stringify(t.routes[A.route.id].module)};`,
).join(`
`)}
${d ? `window.__remixManifest = ${JSON.stringify(Q0(t, u), null, 2)};` : ''}
window.__remixRouteModules = {${x.map((A, X) => `${JSON.stringify(A.route.id)}:route${X}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
        : ' ';
      return g.createElement(
        g.Fragment,
        null,
        g.createElement(
          'script',
          Ee({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: qc(v),
            type: void 0,
          }),
        ),
        g.createElement(
          'script',
          Ee({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: qc(O),
            type: 'module',
            async: !0,
          }),
        ),
      );
    }, []);
  if (!s && typeof __remixContext == 'object' && __remixContext.a)
    for (let C = 0; C < __remixContext.a; C++)
      h.push(
        g.createElement(nf, {
          key: C,
          scriptProps: e,
          serializeData: p,
          serializeError: L,
        }),
      );
  let S = x
      .map((C) => {
        let T = t.routes[C.route.id];
        return (T.imports || []).concat([T.module]);
      })
      .flat(1),
    R = gi ? [] : t.entry.imports.concat(S);
  return gi
    ? null
    : g.createElement(
        g.Fragment,
        null,
        d
          ? null
          : g.createElement('link', {
              rel: 'modulepreload',
              href: t.url,
              crossOrigin: e.crossOrigin,
            }),
        g.createElement('link', {
          rel: 'modulepreload',
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        l1(R).map((C) =>
          g.createElement('link', {
            key: C,
            rel: 'modulepreload',
            href: C,
            crossOrigin: e.crossOrigin,
          }),
        ),
        m,
        h,
      );
}
function nf({
  dataKey: e,
  deferredData: t,
  routeId: n,
  scriptProps: r,
  serializeData: l,
  serializeError: i,
}) {
  return (
    typeof document > 'u' &&
      t &&
      e &&
      n &&
      jn(
        t.pendingKeys.includes(e),
        `Deferred data for route ${n} with key ${e} was not pending but tried to render a script for it.`,
      ),
    g.createElement(
      g.Suspense,
      {
        fallback:
          typeof document > 'u' && t && e && n
            ? null
            : g.createElement(
                'script',
                Ee({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: ' ' },
                }),
              ),
      },
      typeof document > 'u' && t && e && n
        ? g.createElement(t1, {
            resolve: t.data[e],
            errorElement: g.createElement(r1, {
              dataKey: e,
              routeId: n,
              scriptProps: r,
              serializeError: i,
            }),
            children: (o) =>
              g.createElement(
                'script',
                Ee({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: l(n, e, o) },
                }),
              ),
          })
        : g.createElement(
            'script',
            Ee({}, r, {
              async: !0,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: { __html: ' ' },
            }),
          ),
    )
  );
}
function r1({ dataKey: e, routeId: t, scriptProps: n, serializeError: r }) {
  let l = cg();
  return g.createElement(
    'script',
    Ee({}, n, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: r(t, e, l) },
    }),
  );
}
function l1(e) {
  return [...new Set(e)];
}
function ep(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
export {
  Fn as E,
  g1 as L,
  w1 as M,
  s1 as O,
  qh as R,
  n1 as S,
  rs as a,
  u1 as b,
  m1 as c,
  j0 as d,
  a1 as e,
  c1 as f,
  h1 as g,
  v1 as h,
  jn as i,
  p1 as j,
  d1 as k,
  gh as l,
  zt as m,
  o1 as n,
  g as r,
  V0 as s,
  y1 as u,
};
