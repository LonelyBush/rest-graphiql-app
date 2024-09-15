function mn(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const a in n)
        if (a !== 'default' && !(a in e)) {
          const l = Object.getOwnPropertyDescriptor(n, a);
          l &&
            Object.defineProperty(
              e,
              a,
              l.get ? l : { enumerable: !0, get: () => n[a] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
function yn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Dr = { exports: {} },
  Rt = {},
  _r = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ze = Symbol.for('react.element'),
  vn = Symbol.for('react.portal'),
  gn = Symbol.for('react.fragment'),
  bn = Symbol.for('react.strict_mode'),
  wn = Symbol.for('react.profiler'),
  En = Symbol.for('react.provider'),
  Rn = Symbol.for('react.context'),
  xn = Symbol.for('react.forward_ref'),
  Pn = Symbol.for('react.suspense'),
  Sn = Symbol.for('react.memo'),
  Dn = Symbol.for('react.lazy'),
  sr = Symbol.iterator;
function _n(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (sr && e[sr]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Cr = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mr = Object.assign,
  Lr = {};
function Be(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lr),
    (this.updater = r || Cr);
}
Be.prototype.isReactComponent = {};
Be.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Be.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function jr() {}
jr.prototype = Be.prototype;
function It(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lr),
    (this.updater = r || Cr);
}
var At = (It.prototype = new jr());
At.constructor = It;
Mr(At, Be.prototype);
At.isPureReactComponent = !0;
var ur = Array.isArray,
  Or = Object.prototype.hasOwnProperty,
  Nt = { current: null },
  Tr = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fr(e, t, r) {
  var n,
    a = {},
    l = null,
    i = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      Or.call(t, n) && !Tr.hasOwnProperty(n) && (a[n] = t[n]);
  var c = arguments.length - 2;
  if (c === 1) a.children = r;
  else if (1 < c) {
    for (var u = Array(c), f = 0; f < c; f++) u[f] = arguments[f + 2];
    a.children = u;
  }
  if (e && e.defaultProps)
    for (n in ((c = e.defaultProps), c)) a[n] === void 0 && (a[n] = c[n]);
  return {
    $$typeof: Ze,
    type: e,
    key: l,
    ref: i,
    props: a,
    _owner: Nt.current,
  };
}
function Cn(e, t) {
  return {
    $$typeof: Ze,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function kt(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ze;
}
function Mn(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var cr = /\/+/g;
function Ct(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Mn('' + e.key)
    : t.toString(36);
}
function vt(e, t, r, n, a) {
  var l = typeof e;
  (l === 'undefined' || l === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Ze:
          case vn:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (a = a(i)),
      (e = n === '' ? '.' + Ct(i, 0) : n),
      ur(a)
        ? ((r = ''),
          e != null && (r = e.replace(cr, '$&/') + '/'),
          vt(a, t, r, '', function (f) {
            return f;
          }))
        : a != null &&
          (kt(a) &&
            (a = Cn(
              a,
              r +
                (!a.key || (i && i.key === a.key)
                  ? ''
                  : ('' + a.key).replace(cr, '$&/') + '/') +
                e,
            )),
          t.push(a)),
      1
    );
  if (((i = 0), (n = n === '' ? '.' : n + ':'), ur(e)))
    for (var c = 0; c < e.length; c++) {
      l = e[c];
      var u = n + Ct(l, c);
      i += vt(l, t, r, u, a);
    }
  else if (((u = _n(e)), typeof u == 'function'))
    for (e = u.call(e), c = 0; !(l = e.next()).done; )
      (l = l.value), (u = n + Ct(l, c++)), (i += vt(l, t, r, u, a));
  else if (l === 'object')
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
  return i;
}
function mt(e, t, r) {
  if (e == null) return e;
  var n = [],
    a = 0;
  return (
    vt(e, n, '', '', function (l) {
      return t.call(r, l, a++);
    }),
    n
  );
}
function Ln(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ee = { current: null },
  gt = { transition: null },
  jn = {
    ReactCurrentDispatcher: ee,
    ReactCurrentBatchConfig: gt,
    ReactCurrentOwner: Nt,
  };
function Ur() {
  throw Error('act(...) is not supported in production builds of React.');
}
O.Children = {
  map: mt,
  forEach: function (e, t, r) {
    mt(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      mt(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mt(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!kt(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
O.Component = Be;
O.Fragment = gn;
O.Profiler = wn;
O.PureComponent = It;
O.StrictMode = bn;
O.Suspense = Pn;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jn;
O.act = Ur;
O.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var n = Mr({}, e.props),
    a = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Nt.current)),
      t.key !== void 0 && (a = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (u in t)
      Or.call(t, u) &&
        !Tr.hasOwnProperty(u) &&
        (n[u] = t[u] === void 0 && c !== void 0 ? c[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) n.children = r;
  else if (1 < u) {
    c = Array(u);
    for (var f = 0; f < u; f++) c[f] = arguments[f + 2];
    n.children = c;
  }
  return { $$typeof: Ze, type: e.type, key: a, ref: l, props: n, _owner: i };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: Rn,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: En, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Fr;
O.createFactory = function (e) {
  var t = Fr.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: xn, render: e };
};
O.isValidElement = kt;
O.lazy = function (e) {
  return { $$typeof: Dn, _payload: { _status: -1, _result: e }, _init: Ln };
};
O.memo = function (e, t) {
  return { $$typeof: Sn, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = gt.transition;
  gt.transition = {};
  try {
    e();
  } finally {
    gt.transition = t;
  }
};
O.unstable_act = Ur;
O.useCallback = function (e, t) {
  return ee.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ee.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ee.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ee.current.useEffect(e, t);
};
O.useId = function () {
  return ee.current.useId();
};
O.useImperativeHandle = function (e, t, r) {
  return ee.current.useImperativeHandle(e, t, r);
};
O.useInsertionEffect = function (e, t) {
  return ee.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ee.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ee.current.useMemo(e, t);
};
O.useReducer = function (e, t, r) {
  return ee.current.useReducer(e, t, r);
};
O.useRef = function (e) {
  return ee.current.useRef(e);
};
O.useState = function (e) {
  return ee.current.useState(e);
};
O.useSyncExternalStore = function (e, t, r) {
  return ee.current.useSyncExternalStore(e, t, r);
};
O.useTransition = function () {
  return ee.current.useTransition();
};
O.version = '18.3.1';
_r.exports = O;
var b = _r.exports;
const On = yn(b),
  ro = mn({ __proto__: null, default: On }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tn = b,
  Fn = Symbol.for('react.element'),
  Un = Symbol.for('react.fragment'),
  In = Object.prototype.hasOwnProperty,
  An = Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nn = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ir(e, t, r) {
  var n,
    a = {},
    l = null,
    i = null;
  r !== void 0 && (l = '' + r),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (n in t) In.call(t, n) && !Nn.hasOwnProperty(n) && (a[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) a[n] === void 0 && (a[n] = t[n]);
  return {
    $$typeof: Fn,
    type: e,
    key: l,
    ref: i,
    props: a,
    _owner: An.current,
  };
}
Rt.Fragment = Un;
Rt.jsx = Ir;
Rt.jsxs = Ir;
Dr.exports = Rt;
var no = Dr.exports;
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $() {
  return (
    ($ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $.apply(this, arguments)
  );
}
var Y;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Y || (Y = {}));
const dr = 'popstate';
function ao(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let { pathname: l, search: i, hash: c } = n.location;
    return Xe(
      '',
      { pathname: l, search: i, hash: c },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default',
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : qe(a);
  }
  return Bn(t, r, null, e);
}
function j(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ke(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function kn() {
  return Math.random().toString(36).substr(2, 8);
}
function fr(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Xe(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    $(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Pe(t) : t,
      { state: r, key: (t && t.key) || n || kn() },
    )
  );
}
function qe(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e;
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  );
}
function Pe(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf('?');
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function Bn(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: a = document.defaultView, v5Compat: l = !1 } = n,
    i = a.history,
    c = Y.Pop,
    u = null,
    f = y();
  f == null && ((f = 0), i.replaceState($({}, i.state, { idx: f }), ''));
  function y() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    c = Y.Pop;
    let C = y(),
      N = C == null ? null : C - f;
    (f = C), u && u({ action: c, location: P.location, delta: N });
  }
  function w(C, N) {
    c = Y.Push;
    let U = Xe(P.location, C, N);
    f = y() + 1;
    let Q = fr(U, f),
      V = P.createHref(U);
    try {
      i.pushState(Q, '', V);
    } catch (ie) {
      if (ie instanceof DOMException && ie.name === 'DataCloneError') throw ie;
      a.location.assign(V);
    }
    l && u && u({ action: c, location: P.location, delta: 1 });
  }
  function E(C, N) {
    c = Y.Replace;
    let U = Xe(P.location, C, N);
    f = y();
    let Q = fr(U, f),
      V = P.createHref(U);
    i.replaceState(Q, '', V),
      l && u && u({ action: c, location: P.location, delta: 0 });
  }
  function M(C) {
    let N = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      U = typeof C == 'string' ? C : qe(C);
    return (
      (U = U.replace(/ $/, '%20')),
      j(
        N,
        'No window.location.(origin|href) available to create URL for href: ' +
          U,
      ),
      new URL(U, N)
    );
  }
  let P = {
    get action() {
      return c;
    },
    get location() {
      return e(a, i);
    },
    listen(C) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(dr, p),
        (u = C),
        () => {
          a.removeEventListener(dr, p), (u = null);
        }
      );
    },
    createHref(C) {
      return t(a, C);
    },
    createURL: M,
    encodeLocation(C) {
      let N = M(C);
      return { pathname: N.pathname, search: N.search, hash: N.hash };
    },
    push: w,
    replace: E,
    go(C) {
      return i.go(C);
    },
  };
  return P;
}
var A;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(A || (A = {}));
const zn = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function $n(e) {
  return e.index === !0;
}
function Qe(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((a, l) => {
      let i = [...r, String(l)],
        c = typeof a.id == 'string' ? a.id : i.join('-');
      if (
        (j(
          a.index !== !0 || !a.children,
          'Cannot specify children on an index route',
        ),
        j(
          !n[c],
          'Found a route id collision on id "' +
            c +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        $n(a))
      ) {
        let u = $({}, a, t(a), { id: c });
        return (n[c] = u), u;
      } else {
        let u = $({}, a, t(a), { id: c, children: void 0 });
        return (
          (n[c] = u), a.children && (u.children = Qe(a.children, t, i, n)), u
        );
      }
    })
  );
}
function Le(e, t, r) {
  return r === void 0 && (r = '/'), bt(e, t, r, !1);
}
function bt(e, t, r, n) {
  let a = typeof t == 'string' ? Pe(t) : t,
    l = et(a.pathname || '/', r);
  if (l == null) return null;
  let i = Nr(e);
  Hn(i);
  let c = null;
  for (let u = 0; c == null && u < i.length; ++u) {
    let f = ea(l);
    c = Zn(i[u], f, n);
  }
  return c;
}
function Ar(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function Nr(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '');
  let a = (l, i, c) => {
    let u = {
      relativePath: c === void 0 ? l.path || '' : c,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    u.relativePath.startsWith('/') &&
      (j(
        u.relativePath.startsWith(n),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (u.relativePath = u.relativePath.slice(n.length)));
    let f = ye([n, u.relativePath]),
      y = r.concat(u);
    l.children &&
      l.children.length > 0 &&
      (j(
        l.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + f + '".'),
      ),
      Nr(l.children, t, y, f)),
      !(l.path == null && !l.index) &&
        t.push({ path: f, score: Xn(f, l.index), routesMeta: y });
  };
  return (
    e.forEach((l, i) => {
      var c;
      if (l.path === '' || !((c = l.path) != null && c.includes('?'))) a(l, i);
      else for (let u of kr(l.path)) a(l, i, u);
    }),
    t
  );
}
function kr(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith('?'),
    l = r.replace(/\?$/, '');
  if (n.length === 0) return a ? [l, ''] : [l];
  let i = kr(n.join('/')),
    c = [];
  return (
    c.push(...i.map((u) => (u === '' ? l : [l, u].join('/')))),
    a && c.push(...i),
    c.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function Hn(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Qn(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const Wn = /^:[\w-]+$/,
  Vn = 3,
  Kn = 2,
  Jn = 1,
  Yn = 10,
  Gn = -2,
  hr = (e) => e === '*';
function Xn(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(hr) && (n += Gn),
    t && (n += Kn),
    r
      .filter((a) => !hr(a))
      .reduce((a, l) => a + (Wn.test(l) ? Vn : l === '' ? Jn : Yn), n)
  );
}
function Qn(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Zn(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    a = {},
    l = '/',
    i = [];
  for (let c = 0; c < n.length; ++c) {
    let u = n[c],
      f = c === n.length - 1,
      y = l === '/' ? t : t.slice(l.length) || '/',
      p = pr(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: f },
        y,
      ),
      w = u.route;
    if (
      (!p &&
        f &&
        r &&
        !n[n.length - 1].route.index &&
        (p = pr(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          y,
        )),
      !p)
    )
      return null;
    Object.assign(a, p.params),
      i.push({
        params: a,
        pathname: ye([l, p.pathname]),
        pathnameBase: na(ye([l, p.pathnameBase])),
        route: w,
      }),
      p.pathnameBase !== '/' && (l = ye([l, p.pathnameBase]));
  }
  return i;
}
function pr(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = qn(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let l = a[0],
    i = l.replace(/(.)\/+$/, '$1'),
    c = a.slice(1);
  return {
    params: n.reduce((f, y, p) => {
      let { paramName: w, isOptional: E } = y;
      if (w === '*') {
        let P = c[p] || '';
        i = l.slice(0, l.length - P.length).replace(/(.)\/+$/, '$1');
      }
      const M = c[p];
      return (
        E && !M ? (f[w] = void 0) : (f[w] = (M || '').replace(/%2F/g, '/')), f
      );
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function qn(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    ke(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let n = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, c, u) => (
            n.push({ paramName: c, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (a += '\\/*$')
        : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), n]
  );
}
function ea(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ke(
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
function et(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function ta(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: a = '',
  } = typeof e == 'string' ? Pe(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : ra(r, t)) : t,
    search: aa(n),
    hash: oa(a),
  };
}
function ra(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Mt(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(n) +
      '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Br(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Bt(e, t) {
  let r = Br(e);
  return t
    ? r.map((n, a) => (a === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function zt(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == 'string'
    ? (a = Pe(e))
    : ((a = $({}, e)),
      j(
        !a.pathname || !a.pathname.includes('?'),
        Mt('?', 'pathname', 'search', a),
      ),
      j(
        !a.pathname || !a.pathname.includes('#'),
        Mt('#', 'pathname', 'hash', a),
      ),
      j(!a.search || !a.search.includes('#'), Mt('#', 'search', 'hash', a)));
  let l = e === '' || a.pathname === '',
    i = l ? '/' : a.pathname,
    c;
  if (i == null) c = r;
  else {
    let p = t.length - 1;
    if (!n && i.startsWith('..')) {
      let w = i.split('/');
      for (; w[0] === '..'; ) w.shift(), (p -= 1);
      a.pathname = w.join('/');
    }
    c = p >= 0 ? t[p] : '/';
  }
  let u = ta(a, c),
    f = i && i !== '/' && i.endsWith('/'),
    y = (l || i === '.') && r.endsWith('/');
  return !u.pathname.endsWith('/') && (f || y) && (u.pathname += '/'), u;
}
const ye = (e) => e.join('/').replace(/\/\/+/g, '/'),
  na = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  aa = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  oa = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class ia {
  constructor(t, r) {
    (this.type = 'DataWithResponseInit'),
      (this.data = t),
      (this.init = r || null);
  }
}
function oo(e, t) {
  return new ia(e, typeof t == 'number' ? { status: t } : t);
}
class Ot extends Error {}
class io {
  constructor(t, r) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      j(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects',
      );
    let n;
    (this.abortPromise = new Promise((l, i) => (n = i))),
      (this.controller = new AbortController());
    let a = () => n(new Ot('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', a)),
      this.controller.signal.addEventListener('abort', a),
      (this.data = Object.entries(t).reduce((l, i) => {
        let [c, u] = i;
        return Object.assign(l, { [c]: this.trackPromise(c, u) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = r);
  }
  trackPromise(t, r) {
    if (!(r instanceof Promise)) return r;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let n = Promise.race([r, this.abortPromise]).then(
      (a) => this.onSettle(n, t, void 0, a),
      (a) => this.onSettle(n, t, a),
    );
    return (
      n.catch(() => {}),
      Object.defineProperty(n, '_tracked', { get: () => !0 }),
      n
    );
  }
  onSettle(t, r, n, a) {
    if (this.controller.signal.aborted && n instanceof Ot)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => n }),
        Promise.reject(n)
      );
    if (
      (this.pendingKeysSet.delete(r),
      this.done && this.unlistenAbortSignal(),
      n === void 0 && a === void 0)
    ) {
      let l = new Error(
        'Deferred data for key "' +
          r +
          '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.',
      );
      return (
        Object.defineProperty(t, '_error', { get: () => l }),
        this.emit(!1, r),
        Promise.reject(l)
      );
    }
    return a === void 0
      ? (Object.defineProperty(t, '_error', { get: () => n }),
        this.emit(!1, r),
        Promise.reject(n))
      : (Object.defineProperty(t, '_data', { get: () => a }),
        this.emit(!1, r),
        a);
  }
  emit(t, r) {
    this.subscribers.forEach((n) => n(t, r));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, r) => this.pendingKeysSet.delete(r)),
      this.emit(!0);
  }
  async resolveData(t) {
    let r = !1;
    if (!this.done) {
      let n = () => this.cancel();
      t.addEventListener('abort', n),
        (r = await new Promise((a) => {
          this.subscribe((l) => {
            t.removeEventListener('abort', n), (l || this.done) && a(l);
          });
        }));
    }
    return r;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      j(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds',
      ),
      Object.entries(this.data).reduce((t, r) => {
        let [n, a] = r;
        return Object.assign(t, { [n]: sa(a) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function la(e) {
  return e instanceof Promise && e._tracked === !0;
}
function sa(e) {
  if (!la(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const lo = function (t, r) {
  r === void 0 && (r = 302);
  let n = r;
  typeof n == 'number'
    ? (n = { status: n })
    : typeof n.status > 'u' && (n.status = 302);
  let a = new Headers(n.headers);
  return a.set('Location', t), new Response(null, $({}, n, { headers: a }));
};
class Tt {
  constructor(t, r, n, a) {
    a === void 0 && (a = !1),
      (this.status = t),
      (this.statusText = r || ''),
      (this.internal = a),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function xt(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const zr = ['post', 'put', 'patch', 'delete'],
  ua = new Set(zr),
  ca = ['get', ...zr],
  da = new Set(ca),
  fa = new Set([301, 302, 303, 307, 308]),
  ha = new Set([307, 308]),
  Lt = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  pa = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Je = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  $t = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ma = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  $r = 'remix-router-transitions';
function so(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    n = !r;
  j(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter',
  );
  let a;
  if (e.mapRouteProperties) a = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let o = e.detectErrorBoundary;
    a = (s) => ({ hasErrorBoundary: o(s) });
  } else a = ma;
  let l = {},
    i = Qe(e.routes, a, void 0, l),
    c,
    u = e.basename || '/',
    f = e.unstable_dataStrategy || Ea,
    y = e.unstable_patchRoutesOnNavigation,
    p = $(
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
    w = null,
    E = new Set(),
    M = 1e3,
    P = new Set(),
    C = null,
    N = null,
    U = null,
    Q = e.hydrationData != null,
    V = Le(i, e.history.location, u),
    ie = null;
  if (V == null && !y) {
    let o = q(404, { pathname: e.history.location.pathname }),
      { matches: s, route: d } = xr(i);
    (V = s), (ie = { [d.id]: o });
  }
  V &&
    !e.hydrationData &&
    ut(V, i, e.history.location.pathname).active &&
    (V = null);
  let ue;
  if (V)
    if (V.some((o) => o.route.lazy)) ue = !1;
    else if (!V.some((o) => o.route.loader)) ue = !0;
    else if (p.v7_partialHydration) {
      let o = e.hydrationData ? e.hydrationData.loaderData : null,
        s = e.hydrationData ? e.hydrationData.errors : null,
        d = (m) =>
          m.route.loader
            ? typeof m.route.loader == 'function' &&
              m.route.loader.hydrate === !0
              ? !1
              : (o && o[m.route.id] !== void 0) ||
                (s && s[m.route.id] !== void 0)
            : !0;
      if (s) {
        let m = V.findIndex((g) => s[g.route.id] !== void 0);
        ue = V.slice(0, m + 1).every(d);
      } else ue = V.every(d);
    } else ue = e.hydrationData != null;
  else if (((ue = !1), (V = []), p.v7_partialHydration)) {
    let o = ut(null, i, e.history.location.pathname);
    o.active && o.matches && (V = o.matches);
  }
  let $e,
    h = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: V,
      initialized: ue,
      navigation: Lt,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || ie,
      fetchers: new Map(),
      blockers: new Map(),
    },
    z = Y.Pop,
    X = !1,
    k,
    te = !1,
    ae = new Map(),
    le = null,
    Oe = !1,
    Se = !1,
    rt = [],
    nt = new Set(),
    K = new Map(),
    at = 0,
    He = -1,
    Te = new Map(),
    ce = new Set(),
    Fe = new Map(),
    We = new Map(),
    de = new Set(),
    De = new Map(),
    _e = new Map(),
    Xr = new Map(),
    ot;
  function Qr() {
    if (
      ((w = e.history.listen((o) => {
        let { action: s, location: d, delta: m } = o;
        if (ot) {
          ot(), (ot = void 0);
          return;
        }
        ke(
          _e.size === 0 || m != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let g = nr({
          currentLocation: h.location,
          nextLocation: d,
          historyAction: s,
        });
        if (g && m != null) {
          let S = new Promise((_) => {
            ot = _;
          });
          e.history.go(m * -1),
            lt(g, {
              state: 'blocked',
              location: d,
              proceed() {
                lt(g, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: d,
                }),
                  S.then(() => e.history.go(m));
              },
              reset() {
                let _ = new Map(h.blockers);
                _.set(g, Je), Z({ blockers: _ });
              },
            });
          return;
        }
        return Ce(s, d);
      })),
      r)
    ) {
      Ia(t, ae);
      let o = () => Aa(t, ae);
      t.addEventListener('pagehide', o),
        (le = () => t.removeEventListener('pagehide', o));
    }
    return h.initialized || Ce(Y.Pop, h.location, { initialHydration: !0 }), $e;
  }
  function Zr() {
    w && w(),
      le && le(),
      E.clear(),
      k && k.abort(),
      h.fetchers.forEach((o, s) => it(s)),
      h.blockers.forEach((o, s) => rr(s));
  }
  function qr(o) {
    return E.add(o), () => E.delete(o);
  }
  function Z(o, s) {
    s === void 0 && (s = {}), (h = $({}, h, o));
    let d = [],
      m = [];
    p.v7_fetcherPersist &&
      h.fetchers.forEach((g, S) => {
        g.state === 'idle' && (de.has(S) ? m.push(S) : d.push(S));
      }),
      [...E].forEach((g) =>
        g(h, {
          deletedFetchers: m,
          unstable_viewTransitionOpts: s.viewTransitionOpts,
          unstable_flushSync: s.flushSync === !0,
        }),
      ),
      p.v7_fetcherPersist &&
        (d.forEach((g) => h.fetchers.delete(g)), m.forEach((g) => it(g)));
  }
  function Ue(o, s, d) {
    var m, g;
    let { flushSync: S } = d === void 0 ? {} : d,
      _ =
        h.actionData != null &&
        h.navigation.formMethod != null &&
        se(h.navigation.formMethod) &&
        h.navigation.state === 'loading' &&
        ((m = o.state) == null ? void 0 : m._isRedirect) !== !0,
      v;
    s.actionData
      ? Object.keys(s.actionData).length > 0
        ? (v = s.actionData)
        : (v = null)
      : _
        ? (v = h.actionData)
        : (v = null);
    let D = s.loaderData
        ? Er(h.loaderData, s.loaderData, s.matches || [], s.errors)
        : h.loaderData,
      R = h.blockers;
    R.size > 0 && ((R = new Map(R)), R.forEach((I, B) => R.set(B, Je)));
    let x =
      X === !0 ||
      (h.navigation.formMethod != null &&
        se(h.navigation.formMethod) &&
        ((g = o.state) == null ? void 0 : g._isRedirect) !== !0);
    c && ((i = c), (c = void 0)),
      Oe ||
        z === Y.Pop ||
        (z === Y.Push
          ? e.history.push(o, o.state)
          : z === Y.Replace && e.history.replace(o, o.state));
    let F;
    if (z === Y.Pop) {
      let I = ae.get(h.location.pathname);
      I && I.has(o.pathname)
        ? (F = { currentLocation: h.location, nextLocation: o })
        : ae.has(o.pathname) &&
          (F = { currentLocation: o, nextLocation: h.location });
    } else if (te) {
      let I = ae.get(h.location.pathname);
      I
        ? I.add(o.pathname)
        : ((I = new Set([o.pathname])), ae.set(h.location.pathname, I)),
        (F = { currentLocation: h.location, nextLocation: o });
    }
    Z(
      $({}, s, {
        actionData: v,
        loaderData: D,
        historyAction: z,
        location: o,
        initialized: !0,
        navigation: Lt,
        revalidation: 'idle',
        restoreScrollPosition: or(o, s.matches || h.matches),
        preventScrollReset: x,
        blockers: R,
      }),
      { viewTransitionOpts: F, flushSync: S === !0 },
    ),
      (z = Y.Pop),
      (X = !1),
      (te = !1),
      (Oe = !1),
      (Se = !1),
      (rt = []);
  }
  async function Gt(o, s) {
    if (typeof o == 'number') {
      e.history.go(o);
      return;
    }
    let d = Ft(
        h.location,
        h.matches,
        u,
        p.v7_prependBasename,
        o,
        p.v7_relativeSplatPath,
        s == null ? void 0 : s.fromRouteId,
        s == null ? void 0 : s.relative,
      ),
      {
        path: m,
        submission: g,
        error: S,
      } = mr(p.v7_normalizeFormMethod, !1, d, s),
      _ = h.location,
      v = Xe(h.location, m, s && s.state);
    v = $({}, v, e.history.encodeLocation(v));
    let D = s && s.replace != null ? s.replace : void 0,
      R = Y.Push;
    D === !0
      ? (R = Y.Replace)
      : D === !1 ||
        (g != null &&
          se(g.formMethod) &&
          g.formAction === h.location.pathname + h.location.search &&
          (R = Y.Replace));
    let x =
        s && 'preventScrollReset' in s ? s.preventScrollReset === !0 : void 0,
      F = (s && s.unstable_flushSync) === !0,
      I = nr({ currentLocation: _, nextLocation: v, historyAction: R });
    if (I) {
      lt(I, {
        state: 'blocked',
        location: v,
        proceed() {
          lt(I, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: v,
          }),
            Gt(o, s);
        },
        reset() {
          let B = new Map(h.blockers);
          B.set(I, Je), Z({ blockers: B });
        },
      });
      return;
    }
    return await Ce(R, v, {
      submission: g,
      pendingError: S,
      preventScrollReset: x,
      replace: s && s.replace,
      enableViewTransition: s && s.unstable_viewTransition,
      flushSync: F,
    });
  }
  function en() {
    if (
      (St(),
      Z({ revalidation: 'loading' }),
      h.navigation.state !== 'submitting')
    ) {
      if (h.navigation.state === 'idle') {
        Ce(h.historyAction, h.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Ce(z || h.historyAction, h.navigation.location, {
        overrideNavigation: h.navigation,
        enableViewTransition: te === !0,
      });
    }
  }
  async function Ce(o, s, d) {
    k && k.abort(),
      (k = null),
      (z = o),
      (Oe = (d && d.startUninterruptedRevalidation) === !0),
      dn(h.location, h.matches),
      (X = (d && d.preventScrollReset) === !0),
      (te = (d && d.enableViewTransition) === !0);
    let m = c || i,
      g = d && d.overrideNavigation,
      S = Le(m, s, u),
      _ = (d && d.flushSync) === !0,
      v = ut(S, m, s.pathname);
    if ((v.active && v.matches && (S = v.matches), !S)) {
      let { error: T, notFoundMatches: G, route: J } = Dt(s.pathname);
      Ue(
        s,
        { matches: G, loaderData: {}, errors: { [J.id]: T } },
        { flushSync: _ },
      );
      return;
    }
    if (
      h.initialized &&
      !Se &&
      _a(h.location, s) &&
      !(d && d.submission && se(d.submission.formMethod))
    ) {
      Ue(s, { matches: S }, { flushSync: _ });
      return;
    }
    k = new AbortController();
    let D = Ae(e.history, s, k.signal, d && d.submission),
      R;
    if (d && d.pendingError)
      R = [Ne(S).route.id, { type: A.error, error: d.pendingError }];
    else if (d && d.submission && se(d.submission.formMethod)) {
      let T = await tn(D, s, d.submission, S, v.active, {
        replace: d.replace,
        flushSync: _,
      });
      if (T.shortCircuited) return;
      if (T.pendingActionResult) {
        let [G, J] = T.pendingActionResult;
        if (ne(J) && xt(J.error) && J.error.status === 404) {
          (k = null),
            Ue(s, {
              matches: T.matches,
              loaderData: {},
              errors: { [G]: J.error },
            });
          return;
        }
      }
      (S = T.matches || S),
        (R = T.pendingActionResult),
        (g = jt(s, d.submission)),
        (_ = !1),
        (v.active = !1),
        (D = Ae(e.history, D.url, D.signal));
    }
    let {
      shortCircuited: x,
      matches: F,
      loaderData: I,
      errors: B,
    } = await rn(
      D,
      s,
      S,
      v.active,
      g,
      d && d.submission,
      d && d.fetcherSubmission,
      d && d.replace,
      d && d.initialHydration === !0,
      _,
      R,
    );
    x ||
      ((k = null),
      Ue(s, $({ matches: F || S }, Rr(R), { loaderData: I, errors: B })));
  }
  async function tn(o, s, d, m, g, S) {
    S === void 0 && (S = {}), St();
    let _ = Fa(s, d);
    if ((Z({ navigation: _ }, { flushSync: S.flushSync === !0 }), g)) {
      let R = await ct(m, s.pathname, o.signal);
      if (R.type === 'aborted') return { shortCircuited: !0 };
      if (R.type === 'error') {
        let { boundaryId: x, error: F } = st(s.pathname, R);
        return {
          matches: R.partialMatches,
          pendingActionResult: [x, { type: A.error, error: F }],
        };
      } else if (R.matches) m = R.matches;
      else {
        let { notFoundMatches: x, error: F, route: I } = Dt(s.pathname);
        return {
          matches: x,
          pendingActionResult: [I.id, { type: A.error, error: F }],
        };
      }
    }
    let v,
      D = Ge(m, s);
    if (!D.route.action && !D.route.lazy)
      v = {
        type: A.error,
        error: q(405, {
          method: o.method,
          pathname: s.pathname,
          routeId: D.route.id,
        }),
      };
    else if (
      ((v = (await Ve('action', h, o, [D], m, null))[D.route.id]),
      o.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (je(v)) {
      let R;
      return (
        S && S.replace != null
          ? (R = S.replace)
          : (R =
              gr(v.response.headers.get('Location'), new URL(o.url), u) ===
              h.location.pathname + h.location.search),
        await Me(o, v, !0, { submission: d, replace: R }),
        { shortCircuited: !0 }
      );
    }
    if (Re(v)) throw q(400, { type: 'defer-action' });
    if (ne(v)) {
      let R = Ne(m, D.route.id);
      return (
        (S && S.replace) !== !0 && (z = Y.Push),
        { matches: m, pendingActionResult: [R.route.id, v] }
      );
    }
    return { matches: m, pendingActionResult: [D.route.id, v] };
  }
  async function rn(o, s, d, m, g, S, _, v, D, R, x) {
    let F = g || jt(s, S),
      I = S || _ || Sr(F),
      B = !Oe && (!p.v7_partialHydration || !D);
    if (m) {
      if (B) {
        let H = Xt(x);
        Z($({ navigation: F }, H !== void 0 ? { actionData: H } : {}), {
          flushSync: R,
        });
      }
      let L = await ct(d, s.pathname, o.signal);
      if (L.type === 'aborted') return { shortCircuited: !0 };
      if (L.type === 'error') {
        let { boundaryId: H, error: re } = st(s.pathname, L);
        return {
          matches: L.partialMatches,
          loaderData: {},
          errors: { [H]: re },
        };
      } else if (L.matches) d = L.matches;
      else {
        let { error: H, notFoundMatches: re, route: W } = Dt(s.pathname);
        return { matches: re, loaderData: {}, errors: { [W.id]: H } };
      }
    }
    let T = c || i,
      [G, J] = yr(
        e.history,
        h,
        d,
        I,
        s,
        p.v7_partialHydration && D === !0,
        p.v7_skipActionErrorRevalidation,
        Se,
        rt,
        nt,
        de,
        Fe,
        ce,
        T,
        u,
        x,
      );
    if (
      (_t(
        (L) =>
          !(d && d.some((H) => H.route.id === L)) ||
          (G && G.some((H) => H.route.id === L)),
      ),
      (He = ++at),
      G.length === 0 && J.length === 0)
    ) {
      let L = er();
      return (
        Ue(
          s,
          $(
            {
              matches: d,
              loaderData: {},
              errors: x && ne(x[1]) ? { [x[0]]: x[1].error } : null,
            },
            Rr(x),
            L ? { fetchers: new Map(h.fetchers) } : {},
          ),
          { flushSync: R },
        ),
        { shortCircuited: !0 }
      );
    }
    if (B) {
      let L = {};
      if (!m) {
        L.navigation = F;
        let H = Xt(x);
        H !== void 0 && (L.actionData = H);
      }
      J.length > 0 && (L.fetchers = nn(J)), Z(L, { flushSync: R });
    }
    J.forEach((L) => {
      K.has(L.key) && be(L.key), L.controller && K.set(L.key, L.controller);
    });
    let Ke = () => J.forEach((L) => be(L.key));
    k && k.signal.addEventListener('abort', Ke);
    let { loaderResults: he, fetcherResults: Ie } = await Qt(h, d, G, J, o);
    if (o.signal.aborted) return { shortCircuited: !0 };
    k && k.signal.removeEventListener('abort', Ke),
      J.forEach((L) => K.delete(L.key));
    let we = yt(he);
    if (we)
      return await Me(o, we.result, !0, { replace: v }), { shortCircuited: !0 };
    if (((we = yt(Ie)), we))
      return (
        ce.add(we.key),
        await Me(o, we.result, !0, { replace: v }),
        { shortCircuited: !0 }
      );
    let { loaderData: dt, errors: pe } = wr(h, d, G, he, x, J, Ie, De);
    De.forEach((L, H) => {
      L.subscribe((re) => {
        (re || L.done) && De.delete(H);
      });
    }),
      p.v7_partialHydration &&
        D &&
        h.errors &&
        Object.entries(h.errors)
          .filter((L) => {
            let [H] = L;
            return !G.some((re) => re.route.id === H);
          })
          .forEach((L) => {
            let [H, re] = L;
            pe = Object.assign(pe || {}, { [H]: re });
          });
    let ft = er(),
      ht = tr(He),
      pt = ft || ht || J.length > 0;
    return $(
      { matches: d, loaderData: dt, errors: pe },
      pt ? { fetchers: new Map(h.fetchers) } : {},
    );
  }
  function Xt(o) {
    if (o && !ne(o[1])) return { [o[0]]: o[1].data };
    if (h.actionData)
      return Object.keys(h.actionData).length === 0 ? null : h.actionData;
  }
  function nn(o) {
    return (
      o.forEach((s) => {
        let d = h.fetchers.get(s.key),
          m = Ye(void 0, d ? d.data : void 0);
        h.fetchers.set(s.key, m);
      }),
      new Map(h.fetchers)
    );
  }
  function an(o, s, d, m) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    K.has(o) && be(o);
    let g = (m && m.unstable_flushSync) === !0,
      S = c || i,
      _ = Ft(
        h.location,
        h.matches,
        u,
        p.v7_prependBasename,
        d,
        p.v7_relativeSplatPath,
        s,
        m == null ? void 0 : m.relative,
      ),
      v = Le(S, _, u),
      D = ut(v, S, _);
    if ((D.active && D.matches && (v = D.matches), !v)) {
      fe(o, s, q(404, { pathname: _ }), { flushSync: g });
      return;
    }
    let {
      path: R,
      submission: x,
      error: F,
    } = mr(p.v7_normalizeFormMethod, !0, _, m);
    if (F) {
      fe(o, s, F, { flushSync: g });
      return;
    }
    let I = Ge(v, R);
    if (((X = (m && m.preventScrollReset) === !0), x && se(x.formMethod))) {
      on(o, s, R, I, v, D.active, g, x);
      return;
    }
    Fe.set(o, { routeId: s, path: R }), ln(o, s, R, I, v, D.active, g, x);
  }
  async function on(o, s, d, m, g, S, _, v) {
    St(), Fe.delete(o);
    function D(W) {
      if (!W.route.action && !W.route.lazy) {
        let me = q(405, { method: v.formMethod, pathname: d, routeId: s });
        return fe(o, s, me, { flushSync: _ }), !0;
      }
      return !1;
    }
    if (!S && D(m)) return;
    let R = h.fetchers.get(o);
    ge(o, Ua(v, R), { flushSync: _ });
    let x = new AbortController(),
      F = Ae(e.history, d, x.signal, v);
    if (S) {
      let W = await ct(g, d, F.signal);
      if (W.type === 'aborted') return;
      if (W.type === 'error') {
        let { error: me } = st(d, W);
        fe(o, s, me, { flushSync: _ });
        return;
      } else if (W.matches) {
        if (((g = W.matches), (m = Ge(g, d)), D(m))) return;
      } else {
        fe(o, s, q(404, { pathname: d }), { flushSync: _ });
        return;
      }
    }
    K.set(o, x);
    let I = at,
      T = (await Ve('action', h, F, [m], g, o))[m.route.id];
    if (F.signal.aborted) {
      K.get(o) === x && K.delete(o);
      return;
    }
    if (p.v7_fetcherPersist && de.has(o)) {
      if (je(T) || ne(T)) {
        ge(o, Ee(void 0));
        return;
      }
    } else {
      if (je(T))
        if ((K.delete(o), He > I)) {
          ge(o, Ee(void 0));
          return;
        } else
          return (
            ce.add(o), ge(o, Ye(v)), Me(F, T, !1, { fetcherSubmission: v })
          );
      if (ne(T)) {
        fe(o, s, T.error);
        return;
      }
    }
    if (Re(T)) throw q(400, { type: 'defer-action' });
    let G = h.navigation.location || h.location,
      J = Ae(e.history, G, x.signal),
      Ke = c || i,
      he =
        h.navigation.state !== 'idle'
          ? Le(Ke, h.navigation.location, u)
          : h.matches;
    j(he, "Didn't find any matches after fetcher action");
    let Ie = ++at;
    Te.set(o, Ie);
    let we = Ye(v, T.data);
    h.fetchers.set(o, we);
    let [dt, pe] = yr(
      e.history,
      h,
      he,
      v,
      G,
      !1,
      p.v7_skipActionErrorRevalidation,
      Se,
      rt,
      nt,
      de,
      Fe,
      ce,
      Ke,
      u,
      [m.route.id, T],
    );
    pe
      .filter((W) => W.key !== o)
      .forEach((W) => {
        let me = W.key,
          lr = h.fetchers.get(me),
          pn = Ye(void 0, lr ? lr.data : void 0);
        h.fetchers.set(me, pn),
          K.has(me) && be(me),
          W.controller && K.set(me, W.controller);
      }),
      Z({ fetchers: new Map(h.fetchers) });
    let ft = () => pe.forEach((W) => be(W.key));
    x.signal.addEventListener('abort', ft);
    let { loaderResults: ht, fetcherResults: pt } = await Qt(h, he, dt, pe, J);
    if (x.signal.aborted) return;
    x.signal.removeEventListener('abort', ft),
      Te.delete(o),
      K.delete(o),
      pe.forEach((W) => K.delete(W.key));
    let L = yt(ht);
    if (L) return Me(J, L.result, !1);
    if (((L = yt(pt)), L)) return ce.add(L.key), Me(J, L.result, !1);
    let { loaderData: H, errors: re } = wr(h, he, dt, ht, void 0, pe, pt, De);
    if (h.fetchers.has(o)) {
      let W = Ee(T.data);
      h.fetchers.set(o, W);
    }
    tr(Ie),
      h.navigation.state === 'loading' && Ie > He
        ? (j(z, 'Expected pending action'),
          k && k.abort(),
          Ue(h.navigation.location, {
            matches: he,
            loaderData: H,
            errors: re,
            fetchers: new Map(h.fetchers),
          }))
        : (Z({
            errors: re,
            loaderData: Er(h.loaderData, H, he, re),
            fetchers: new Map(h.fetchers),
          }),
          (Se = !1));
  }
  async function ln(o, s, d, m, g, S, _, v) {
    let D = h.fetchers.get(o);
    ge(o, Ye(v, D ? D.data : void 0), { flushSync: _ });
    let R = new AbortController(),
      x = Ae(e.history, d, R.signal);
    if (S) {
      let T = await ct(g, d, x.signal);
      if (T.type === 'aborted') return;
      if (T.type === 'error') {
        let { error: G } = st(d, T);
        fe(o, s, G, { flushSync: _ });
        return;
      } else if (T.matches) (g = T.matches), (m = Ge(g, d));
      else {
        fe(o, s, q(404, { pathname: d }), { flushSync: _ });
        return;
      }
    }
    K.set(o, R);
    let F = at,
      B = (await Ve('loader', h, x, [m], g, o))[m.route.id];
    if (
      (Re(B) && (B = (await Ht(B, x.signal, !0)) || B),
      K.get(o) === R && K.delete(o),
      !x.signal.aborted)
    ) {
      if (de.has(o)) {
        ge(o, Ee(void 0));
        return;
      }
      if (je(B))
        if (He > F) {
          ge(o, Ee(void 0));
          return;
        } else {
          ce.add(o), await Me(x, B, !1);
          return;
        }
      if (ne(B)) {
        fe(o, s, B.error);
        return;
      }
      j(!Re(B), 'Unhandled fetcher deferred data'), ge(o, Ee(B.data));
    }
  }
  async function Me(o, s, d, m) {
    let {
      submission: g,
      fetcherSubmission: S,
      replace: _,
    } = m === void 0 ? {} : m;
    s.response.headers.has('X-Remix-Revalidate') && (Se = !0);
    let v = s.response.headers.get('Location');
    j(v, 'Expected a Location header on the redirect Response'),
      (v = gr(v, new URL(o.url), u));
    let D = Xe(h.location, v, { _isRedirect: !0 });
    if (r) {
      let T = !1;
      if (s.response.headers.has('X-Remix-Reload-Document')) T = !0;
      else if ($t.test(v)) {
        const G = e.history.createURL(v);
        T = G.origin !== t.location.origin || et(G.pathname, u) == null;
      }
      if (T) {
        _ ? t.location.replace(v) : t.location.assign(v);
        return;
      }
    }
    k = null;
    let R =
        _ === !0 || s.response.headers.has('X-Remix-Replace')
          ? Y.Replace
          : Y.Push,
      { formMethod: x, formAction: F, formEncType: I } = h.navigation;
    !g && !S && x && F && I && (g = Sr(h.navigation));
    let B = g || S;
    if (ha.has(s.response.status) && B && se(B.formMethod))
      await Ce(R, D, {
        submission: $({}, B, { formAction: v }),
        preventScrollReset: X,
        enableViewTransition: d ? te : void 0,
      });
    else {
      let T = jt(D, g);
      await Ce(R, D, {
        overrideNavigation: T,
        fetcherSubmission: S,
        preventScrollReset: X,
        enableViewTransition: d ? te : void 0,
      });
    }
  }
  async function Ve(o, s, d, m, g, S) {
    let _,
      v = {};
    try {
      _ = await Ra(f, o, s, d, m, g, S, l, a);
    } catch (D) {
      return (
        m.forEach((R) => {
          v[R.route.id] = { type: A.error, error: D };
        }),
        v
      );
    }
    for (let [D, R] of Object.entries(_))
      if (Ma(R)) {
        let x = R.result;
        v[D] = {
          type: A.redirect,
          response: Sa(x, d, D, g, u, p.v7_relativeSplatPath),
        };
      } else v[D] = await Pa(R);
    return v;
  }
  async function Qt(o, s, d, m, g) {
    let S = o.matches,
      _ = Ve('loader', o, g, d, s, null),
      v = Promise.all(
        m.map(async (x) => {
          if (x.matches && x.match && x.controller) {
            let I = (
              await Ve(
                'loader',
                o,
                Ae(e.history, x.path, x.controller.signal),
                [x.match],
                x.matches,
                x.key,
              )
            )[x.match.route.id];
            return { [x.key]: I };
          } else
            return Promise.resolve({
              [x.key]: { type: A.error, error: q(404, { pathname: x.path }) },
            });
        }),
      ),
      D = await _,
      R = (await v).reduce((x, F) => Object.assign(x, F), {});
    return (
      await Promise.all([Oa(s, D, g.signal, S, o.loaderData), Ta(s, R, m)]),
      { loaderResults: D, fetcherResults: R }
    );
  }
  function St() {
    (Se = !0),
      rt.push(..._t()),
      Fe.forEach((o, s) => {
        K.has(s) && (nt.add(s), be(s));
      });
  }
  function ge(o, s, d) {
    d === void 0 && (d = {}),
      h.fetchers.set(o, s),
      Z(
        { fetchers: new Map(h.fetchers) },
        { flushSync: (d && d.flushSync) === !0 },
      );
  }
  function fe(o, s, d, m) {
    m === void 0 && (m = {});
    let g = Ne(h.matches, s);
    it(o),
      Z(
        { errors: { [g.route.id]: d }, fetchers: new Map(h.fetchers) },
        { flushSync: (m && m.flushSync) === !0 },
      );
  }
  function Zt(o) {
    return (
      p.v7_fetcherPersist &&
        (We.set(o, (We.get(o) || 0) + 1), de.has(o) && de.delete(o)),
      h.fetchers.get(o) || pa
    );
  }
  function it(o) {
    let s = h.fetchers.get(o);
    K.has(o) && !(s && s.state === 'loading' && Te.has(o)) && be(o),
      Fe.delete(o),
      Te.delete(o),
      ce.delete(o),
      de.delete(o),
      nt.delete(o),
      h.fetchers.delete(o);
  }
  function sn(o) {
    if (p.v7_fetcherPersist) {
      let s = (We.get(o) || 0) - 1;
      s <= 0 ? (We.delete(o), de.add(o)) : We.set(o, s);
    } else it(o);
    Z({ fetchers: new Map(h.fetchers) });
  }
  function be(o) {
    let s = K.get(o);
    j(s, 'Expected fetch controller: ' + o), s.abort(), K.delete(o);
  }
  function qt(o) {
    for (let s of o) {
      let d = Zt(s),
        m = Ee(d.data);
      h.fetchers.set(s, m);
    }
  }
  function er() {
    let o = [],
      s = !1;
    for (let d of ce) {
      let m = h.fetchers.get(d);
      j(m, 'Expected fetcher: ' + d),
        m.state === 'loading' && (ce.delete(d), o.push(d), (s = !0));
    }
    return qt(o), s;
  }
  function tr(o) {
    let s = [];
    for (let [d, m] of Te)
      if (m < o) {
        let g = h.fetchers.get(d);
        j(g, 'Expected fetcher: ' + d),
          g.state === 'loading' && (be(d), Te.delete(d), s.push(d));
      }
    return qt(s), s.length > 0;
  }
  function un(o, s) {
    let d = h.blockers.get(o) || Je;
    return _e.get(o) !== s && _e.set(o, s), d;
  }
  function rr(o) {
    h.blockers.delete(o), _e.delete(o);
  }
  function lt(o, s) {
    let d = h.blockers.get(o) || Je;
    j(
      (d.state === 'unblocked' && s.state === 'blocked') ||
        (d.state === 'blocked' && s.state === 'blocked') ||
        (d.state === 'blocked' && s.state === 'proceeding') ||
        (d.state === 'blocked' && s.state === 'unblocked') ||
        (d.state === 'proceeding' && s.state === 'unblocked'),
      'Invalid blocker state transition: ' + d.state + ' -> ' + s.state,
    );
    let m = new Map(h.blockers);
    m.set(o, s), Z({ blockers: m });
  }
  function nr(o) {
    let { currentLocation: s, nextLocation: d, historyAction: m } = o;
    if (_e.size === 0) return;
    _e.size > 1 && ke(!1, 'A router only supports one blocker at a time');
    let g = Array.from(_e.entries()),
      [S, _] = g[g.length - 1],
      v = h.blockers.get(S);
    if (
      !(v && v.state === 'proceeding') &&
      _({ currentLocation: s, nextLocation: d, historyAction: m })
    )
      return S;
  }
  function Dt(o) {
    let s = q(404, { pathname: o }),
      d = c || i,
      { matches: m, route: g } = xr(d);
    return _t(), { notFoundMatches: m, route: g, error: s };
  }
  function st(o, s) {
    return {
      boundaryId: Ne(s.partialMatches).route.id,
      error: q(400, {
        type: 'route-discovery',
        pathname: o,
        message:
          s.error != null && 'message' in s.error ? s.error : String(s.error),
      }),
    };
  }
  function _t(o) {
    let s = [];
    return (
      De.forEach((d, m) => {
        (!o || o(m)) && (d.cancel(), s.push(m), De.delete(m));
      }),
      s
    );
  }
  function cn(o, s, d) {
    if (((C = o), (U = s), (N = d || null), !Q && h.navigation === Lt)) {
      Q = !0;
      let m = or(h.location, h.matches);
      m != null && Z({ restoreScrollPosition: m });
    }
    return () => {
      (C = null), (U = null), (N = null);
    };
  }
  function ar(o, s) {
    return (
      (N &&
        N(
          o,
          s.map((m) => Ar(m, h.loaderData)),
        )) ||
      o.key
    );
  }
  function dn(o, s) {
    if (C && U) {
      let d = ar(o, s);
      C[d] = U();
    }
  }
  function or(o, s) {
    if (C) {
      let d = ar(o, s),
        m = C[d];
      if (typeof m == 'number') return m;
    }
    return null;
  }
  function ut(o, s, d) {
    if (y) {
      if (P.has(d)) return { active: !1, matches: o };
      if (o) {
        if (Object.keys(o[0].params).length > 0)
          return { active: !0, matches: bt(s, d, u, !0) };
      } else return { active: !0, matches: bt(s, d, u, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function ct(o, s, d) {
    let m = o;
    for (;;) {
      let g = c == null,
        S = c || i;
      try {
        await ba(y, s, m, S, l, a, Xr, d);
      } catch (D) {
        return { type: 'error', error: D, partialMatches: m };
      } finally {
        g && (i = [...i]);
      }
      if (d.aborted) return { type: 'aborted' };
      let _ = Le(S, s, u);
      if (_) return ir(s, P), { type: 'success', matches: _ };
      let v = bt(S, s, u, !0);
      if (
        !v ||
        (m.length === v.length &&
          m.every((D, R) => D.route.id === v[R].route.id))
      )
        return ir(s, P), { type: 'success', matches: null };
      m = v;
    }
  }
  function ir(o, s) {
    if (s.size >= M) {
      let d = s.values().next().value;
      s.delete(d);
    }
    s.add(o);
  }
  function fn(o) {
    (l = {}), (c = Qe(o, a, void 0, l));
  }
  function hn(o, s) {
    let d = c == null;
    Wr(o, s, c || i, l, a), d && ((i = [...i]), Z({}));
  }
  return (
    ($e = {
      get basename() {
        return u;
      },
      get future() {
        return p;
      },
      get state() {
        return h;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Qr,
      subscribe: qr,
      enableScrollRestoration: cn,
      navigate: Gt,
      fetch: an,
      revalidate: en,
      createHref: (o) => e.history.createHref(o),
      encodeLocation: (o) => e.history.encodeLocation(o),
      getFetcher: Zt,
      deleteFetcher: sn,
      dispose: Zr,
      getBlocker: un,
      deleteBlocker: rr,
      patchRoutes: hn,
      _internalFetchControllers: K,
      _internalActiveDeferreds: De,
      _internalSetRoutes: fn,
    }),
    $e
  );
}
function ya(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Ft(e, t, r, n, a, l, i, c) {
  let u, f;
  if (i) {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === i)) {
        f = p;
        break;
      }
  } else (u = t), (f = t[t.length - 1]);
  let y = zt(a || '.', Bt(u, l), et(e.pathname, r) || e.pathname, c === 'path');
  return (
    a == null && ((y.search = e.search), (y.hash = e.hash)),
    (a == null || a === '' || a === '.') &&
      f &&
      f.route.index &&
      !Wt(y.search) &&
      (y.search = y.search ? y.search.replace(/^\?/, '?index&') : '?index'),
    n &&
      r !== '/' &&
      (y.pathname = y.pathname === '/' ? r : ye([r, y.pathname])),
    qe(y)
  );
}
function mr(e, t, r, n) {
  if (!n || !ya(n)) return { path: r };
  if (n.formMethod && !ja(n.formMethod))
    return { path: r, error: q(405, { method: n.formMethod }) };
  let a = () => ({ path: r, error: q(400, { type: 'invalid-body' }) }),
    l = n.formMethod || 'get',
    i = e ? l.toUpperCase() : l.toLowerCase(),
    c = Vr(r);
  if (n.body !== void 0) {
    if (n.formEncType === 'text/plain') {
      if (!se(i)) return a();
      let w =
        typeof n.body == 'string'
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((E, M) => {
                let [P, C] = M;
                return (
                  '' +
                  E +
                  P +
                  '=' +
                  C +
                  `
`
                );
              }, '')
            : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: i,
          formAction: c,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: w,
        },
      };
    } else if (n.formEncType === 'application/json') {
      if (!se(i)) return a();
      try {
        let w = typeof n.body == 'string' ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: i,
            formAction: c,
            formEncType: n.formEncType,
            formData: void 0,
            json: w,
            text: void 0,
          },
        };
      } catch {
        return a();
      }
    }
  }
  j(
    typeof FormData == 'function',
    'FormData is not available in this environment',
  );
  let u, f;
  if (n.formData) (u = Ut(n.formData)), (f = n.formData);
  else if (n.body instanceof FormData) (u = Ut(n.body)), (f = n.body);
  else if (n.body instanceof URLSearchParams) (u = n.body), (f = br(u));
  else if (n.body == null) (u = new URLSearchParams()), (f = new FormData());
  else
    try {
      (u = new URLSearchParams(n.body)), (f = br(u));
    } catch {
      return a();
    }
  let y = {
    formMethod: i,
    formAction: c,
    formEncType: (n && n.formEncType) || 'application/x-www-form-urlencoded',
    formData: f,
    json: void 0,
    text: void 0,
  };
  if (se(y.formMethod)) return { path: r, submission: y };
  let p = Pe(r);
  return (
    t && p.search && Wt(p.search) && u.append('index', ''),
    (p.search = '?' + u),
    { path: qe(p), submission: y }
  );
}
function va(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((a) => a.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function yr(e, t, r, n, a, l, i, c, u, f, y, p, w, E, M, P) {
  let C = P ? (ne(P[1]) ? P[1].error : P[1].data) : void 0,
    N = e.createURL(t.location),
    U = e.createURL(a),
    Q = P && ne(P[1]) ? P[0] : void 0,
    V = Q ? va(r, Q) : r,
    ie = P ? P[1].statusCode : void 0,
    ue = i && ie && ie >= 400,
    $e = V.filter((z, X) => {
      let { route: k } = z;
      if (k.lazy) return !0;
      if (k.loader == null) return !1;
      if (l)
        return typeof k.loader != 'function' || k.loader.hydrate
          ? !0
          : t.loaderData[k.id] === void 0 &&
              (!t.errors || t.errors[k.id] === void 0);
      if (
        ga(t.loaderData, t.matches[X], z) ||
        u.some((le) => le === z.route.id)
      )
        return !0;
      let te = t.matches[X],
        ae = z;
      return vr(
        z,
        $(
          {
            currentUrl: N,
            currentParams: te.params,
            nextUrl: U,
            nextParams: ae.params,
          },
          n,
          {
            actionResult: C,
            actionStatus: ie,
            defaultShouldRevalidate: ue
              ? !1
              : c ||
                N.pathname + N.search === U.pathname + U.search ||
                N.search !== U.search ||
                Hr(te, ae),
          },
        ),
      );
    }),
    h = [];
  return (
    p.forEach((z, X) => {
      if (l || !r.some((Oe) => Oe.route.id === z.routeId) || y.has(X)) return;
      let k = Le(E, z.path, M);
      if (!k) {
        h.push({
          key: X,
          routeId: z.routeId,
          path: z.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let te = t.fetchers.get(X),
        ae = Ge(k, z.path),
        le = !1;
      w.has(X)
        ? (le = !1)
        : f.has(X)
          ? (f.delete(X), (le = !0))
          : te && te.state !== 'idle' && te.data === void 0
            ? (le = c)
            : (le = vr(
                ae,
                $(
                  {
                    currentUrl: N,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: U,
                    nextParams: r[r.length - 1].params,
                  },
                  n,
                  {
                    actionResult: C,
                    actionStatus: ie,
                    defaultShouldRevalidate: ue ? !1 : c,
                  },
                ),
              )),
        le &&
          h.push({
            key: X,
            routeId: z.routeId,
            path: z.path,
            matches: k,
            match: ae,
            controller: new AbortController(),
          });
    }),
    [$e, h]
  );
}
function ga(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0;
  return n || a;
}
function Hr(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function vr(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == 'boolean') return r;
  }
  return t.defaultShouldRevalidate;
}
async function ba(e, t, r, n, a, l, i, c) {
  let u = [t, ...r.map((f) => f.route.id)].join('-');
  try {
    let f = i.get(u);
    f ||
      ((f = e({
        path: t,
        matches: r,
        patch: (y, p) => {
          c.aborted || Wr(y, p, n, a, l);
        },
      })),
      i.set(u, f)),
      f && Ca(f) && (await f);
  } finally {
    i.delete(u);
  }
}
function Wr(e, t, r, n, a) {
  if (e) {
    var l;
    let i = n[e];
    j(i, 'No route found to patch children into: routeId = ' + e);
    let c = Qe(
      t,
      a,
      [
        e,
        'patch',
        String(((l = i.children) == null ? void 0 : l.length) || '0'),
      ],
      n,
    );
    i.children ? i.children.push(...c) : (i.children = c);
  } else {
    let i = Qe(t, a, ['patch', String(r.length || '0')], n);
    r.push(...i);
  }
}
async function wa(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let a = r[e.id];
  j(a, 'No route found in manifest');
  let l = {};
  for (let i in n) {
    let u = a[i] !== void 0 && i !== 'hasErrorBoundary';
    ke(
      !u,
      'Route "' +
        a.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !u && !zn.has(i) && (l[i] = n[i]);
  }
  Object.assign(a, l), Object.assign(a, $({}, t(a), { lazy: void 0 }));
}
async function Ea(e) {
  let { matches: t } = e,
    r = t.filter((a) => a.shouldLoad);
  return (await Promise.all(r.map((a) => a.resolve()))).reduce(
    (a, l, i) => Object.assign(a, { [r[i].route.id]: l }),
    {},
  );
}
async function Ra(e, t, r, n, a, l, i, c, u, f) {
  let y = l.map((E) => (E.route.lazy ? wa(E.route, u, c) : void 0)),
    p = l.map((E, M) => {
      let P = y[M],
        C = a.some((U) => U.route.id === E.route.id);
      return $({}, E, {
        shouldLoad: C,
        resolve: async (U) => (
          U &&
            n.method === 'GET' &&
            (E.route.lazy || E.route.loader) &&
            (C = !0),
          C
            ? xa(t, n, E, P, U, f)
            : Promise.resolve({ type: A.data, result: void 0 })
        ),
      });
    }),
    w = await e({
      matches: p,
      request: n,
      params: l[0].params,
      fetcherKey: i,
      context: f,
    });
  try {
    await Promise.all(y);
  } catch {}
  return w;
}
async function xa(e, t, r, n, a, l) {
  let i,
    c,
    u = (f) => {
      let y,
        p = new Promise((M, P) => (y = P));
      (c = () => y()), t.signal.addEventListener('abort', c);
      let w = (M) =>
          typeof f != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + r.route.id + ']'),
                ),
              )
            : f(
                { request: t, params: r.params, context: l },
                ...(M !== void 0 ? [M] : []),
              ),
        E = (async () => {
          try {
            return { type: 'data', result: await (a ? a((P) => w(P)) : w()) };
          } catch (M) {
            return { type: 'error', result: M };
          }
        })();
      return Promise.race([E, p]);
    };
  try {
    let f = r.route[e];
    if (n)
      if (f) {
        let y,
          [p] = await Promise.all([
            u(f).catch((w) => {
              y = w;
            }),
            n,
          ]);
        if (y !== void 0) throw y;
        i = p;
      } else if ((await n, (f = r.route[e]), f)) i = await u(f);
      else if (e === 'action') {
        let y = new URL(t.url),
          p = y.pathname + y.search;
        throw q(405, { method: t.method, pathname: p, routeId: r.route.id });
      } else return { type: A.data, result: void 0 };
    else if (f) i = await u(f);
    else {
      let y = new URL(t.url),
        p = y.pathname + y.search;
      throw q(404, { pathname: p });
    }
    j(
      i.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          r.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (f) {
    return { type: A.error, result: f };
  } finally {
    c && t.signal.removeEventListener('abort', c);
  }
  return i;
}
async function Pa(e) {
  let { result: t, type: r } = e;
  if (Kr(t)) {
    let f;
    try {
      let y = t.headers.get('Content-Type');
      y && /\bapplication\/json\b/.test(y)
        ? t.body == null
          ? (f = null)
          : (f = await t.json())
        : (f = await t.text());
    } catch (y) {
      return { type: A.error, error: y };
    }
    return r === A.error
      ? {
          type: A.error,
          error: new Tt(t.status, t.statusText, f),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: A.data, data: f, statusCode: t.status, headers: t.headers };
  }
  if (r === A.error) {
    if (Pr(t)) {
      var n;
      if (t.data instanceof Error) {
        var a;
        return {
          type: A.error,
          error: t.data,
          statusCode: (a = t.init) == null ? void 0 : a.status,
        };
      }
      t = new Tt(
        ((n = t.init) == null ? void 0 : n.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: A.error, error: t, statusCode: xt(t) ? t.status : void 0 };
  }
  if (La(t)) {
    var l, i;
    return {
      type: A.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Pr(t)) {
    var c, u;
    return {
      type: A.data,
      data: t.data,
      statusCode: (c = t.init) == null ? void 0 : c.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: A.data, data: t };
}
function Sa(e, t, r, n, a, l) {
  let i = e.headers.get('Location');
  if (
    (j(
      i,
      'Redirects returned/thrown from loaders/actions must have a Location header',
    ),
    !$t.test(i))
  ) {
    let c = n.slice(0, n.findIndex((u) => u.route.id === r) + 1);
    (i = Ft(new URL(t.url), c, a, !0, i, l)), e.headers.set('Location', i);
  }
  return e;
}
function gr(e, t, r) {
  if ($t.test(e)) {
    let n = e,
      a = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      l = et(a.pathname, r) != null;
    if (a.origin === t.origin && l) return a.pathname + a.search + a.hash;
  }
  return e;
}
function Ae(e, t, r, n) {
  let a = e.createURL(Vr(t)).toString(),
    l = { signal: r };
  if (n && se(n.formMethod)) {
    let { formMethod: i, formEncType: c } = n;
    (l.method = i.toUpperCase()),
      c === 'application/json'
        ? ((l.headers = new Headers({ 'Content-Type': c })),
          (l.body = JSON.stringify(n.json)))
        : c === 'text/plain'
          ? (l.body = n.text)
          : c === 'application/x-www-form-urlencoded' && n.formData
            ? (l.body = Ut(n.formData))
            : (l.body = n.formData);
  }
  return new Request(a, l);
}
function Ut(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == 'string' ? n : n.name);
  return t;
}
function br(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function Da(e, t, r, n, a) {
  let l = {},
    i = null,
    c,
    u = !1,
    f = {},
    y = r && ne(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((p) => {
      if (!(p.route.id in t)) return;
      let w = p.route.id,
        E = t[w];
      if (
        (j(!je(E), 'Cannot handle redirect results in processLoaderData'),
        ne(E))
      ) {
        let M = E.error;
        y !== void 0 && ((M = y), (y = void 0)), (i = i || {});
        {
          let P = Ne(e, w);
          i[P.route.id] == null && (i[P.route.id] = M);
        }
        (l[w] = void 0),
          u || ((u = !0), (c = xt(E.error) ? E.error.status : 500)),
          E.headers && (f[w] = E.headers);
      } else
        Re(E)
          ? (n.set(w, E.deferredData),
            (l[w] = E.deferredData.data),
            E.statusCode != null &&
              E.statusCode !== 200 &&
              !u &&
              (c = E.statusCode),
            E.headers && (f[w] = E.headers))
          : ((l[w] = E.data),
            E.statusCode && E.statusCode !== 200 && !u && (c = E.statusCode),
            E.headers && (f[w] = E.headers));
    }),
    y !== void 0 && r && ((i = { [r[0]]: y }), (l[r[0]] = void 0)),
    { loaderData: l, errors: i, statusCode: c || 200, loaderHeaders: f }
  );
}
function wr(e, t, r, n, a, l, i, c) {
  let { loaderData: u, errors: f } = Da(t, n, a, c);
  return (
    l.forEach((y) => {
      let { key: p, match: w, controller: E } = y,
        M = i[p];
      if (
        (j(M, 'Did not find corresponding fetcher result'),
        !(E && E.signal.aborted))
      )
        if (ne(M)) {
          let P = Ne(e.matches, w == null ? void 0 : w.route.id);
          (f && f[P.route.id]) || (f = $({}, f, { [P.route.id]: M.error })),
            e.fetchers.delete(p);
        } else if (je(M)) j(!1, 'Unhandled fetcher revalidation redirect');
        else if (Re(M)) j(!1, 'Unhandled fetcher deferred data');
        else {
          let P = Ee(M.data);
          e.fetchers.set(p, P);
        }
    }),
    { loaderData: u, errors: f }
  );
}
function Er(e, t, r, n) {
  let a = $({}, t);
  for (let l of r) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (a[i] = t[i])
        : e[i] !== void 0 && l.route.loader && (a[i] = e[i]),
      n && n.hasOwnProperty(i))
    )
      break;
  }
  return a;
}
function Rr(e) {
  return e
    ? ne(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Ne(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function xr(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function q(e, t) {
  let {
      pathname: r,
      routeId: n,
      method: a,
      type: l,
      message: i,
    } = t === void 0 ? {} : t,
    c = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((c = 'Bad Request'),
        l === 'route-discovery'
          ? (u =
              'Unable to match URL "' +
              r +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                i))
          : a && r && n
            ? (u =
                'You made a ' +
                a +
                ' request to "' +
                r +
                '" but ' +
                ('did not provide a `loader` for route "' + n + '", ') +
                'so there is no way to handle the request.')
            : l === 'defer-action'
              ? (u = 'defer() is not supported in actions')
              : l === 'invalid-body' &&
                (u = 'Unable to encode submission body'))
      : e === 403
        ? ((c = 'Forbidden'),
          (u = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((c = 'Not Found'), (u = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((c = 'Method Not Allowed'),
            a && r && n
              ? (u =
                  'You made a ' +
                  a.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  'so there is no way to handle the request.')
              : a && (u = 'Invalid request method "' + a.toUpperCase() + '"')),
    new Tt(e || 500, c, new Error(u), !0)
  );
}
function yt(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (je(a)) return { key: n, result: a };
  }
}
function Vr(e) {
  let t = typeof e == 'string' ? Pe(e) : e;
  return qe($({}, t, { hash: '' }));
}
function _a(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function Ca(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function Ma(e) {
  return Kr(e.result) && fa.has(e.result.status);
}
function Re(e) {
  return e.type === A.deferred;
}
function ne(e) {
  return e.type === A.error;
}
function je(e) {
  return (e && e.type) === A.redirect;
}
function Pr(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function La(e) {
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
function Kr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function ja(e) {
  return da.has(e.toLowerCase());
}
function se(e) {
  return ua.has(e.toLowerCase());
}
async function Oa(e, t, r, n, a) {
  let l = Object.entries(t);
  for (let i = 0; i < l.length; i++) {
    let [c, u] = l[i],
      f = e.find((w) => (w == null ? void 0 : w.route.id) === c);
    if (!f) continue;
    let y = n.find((w) => w.route.id === f.route.id),
      p = y != null && !Hr(y, f) && (a && a[f.route.id]) !== void 0;
    Re(u) &&
      p &&
      (await Ht(u, r, !1).then((w) => {
        w && (t[c] = w);
      }));
  }
}
async function Ta(e, t, r) {
  for (let n = 0; n < r.length; n++) {
    let { key: a, routeId: l, controller: i } = r[n],
      c = t[a];
    e.find((f) => (f == null ? void 0 : f.route.id) === l) &&
      Re(c) &&
      (j(
        i,
        'Expected an AbortController for revalidating fetcher deferred result',
      ),
      await Ht(c, i.signal, !0).then((f) => {
        f && (t[a] = f);
      }));
  }
}
async function Ht(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: A.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: A.error, error: a };
      }
    return { type: A.data, data: e.deferredData.data };
  }
}
function Wt(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Ge(e, t) {
  let r = typeof t == 'string' ? Pe(t).search : t.search;
  if (e[e.length - 1].route.index && Wt(r || '')) return e[e.length - 1];
  let n = Br(e);
  return n[n.length - 1];
}
function Sr(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: l,
    json: i,
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function jt(e, t) {
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
function Fa(e, t) {
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
function Ye(e, t) {
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
function Ua(e, t) {
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
function Ee(e) {
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
function Ia(e, t) {
  try {
    let r = e.sessionStorage.getItem($r);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, l] of Object.entries(n || {}))
        l && Array.isArray(l) && t.set(a, new Set(l || []));
    }
  } catch {}
}
function Aa(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem($r, JSON.stringify(r));
    } catch (n) {
      ke(
        !1,
        'Failed to save applied view transitions in sessionStorage (' +
          n +
          ').',
      );
    }
  }
}
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wt() {
  return (
    (wt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    wt.apply(this, arguments)
  );
}
const Vt = b.createContext(null),
  Na = b.createContext(null),
  Et = b.createContext(null),
  ze = b.createContext(null),
  Kt = b.createContext(null),
  ve = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jr = b.createContext(null);
function uo(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  tt() || j(!1);
  let { basename: n, navigator: a } = b.useContext(ze),
    { hash: l, pathname: i, search: c } = $a(e, { relative: r }),
    u = i;
  return (
    n !== '/' && (u = i === '/' ? n : ye([n, i])),
    a.createHref({ pathname: u, search: c, hash: l })
  );
}
function tt() {
  return b.useContext(Kt) != null;
}
function Jt() {
  return tt() || j(!1), b.useContext(Kt).location;
}
function Yr(e) {
  b.useContext(ze).static || b.useLayoutEffect(e);
}
function co() {
  let { isDataRoute: e } = b.useContext(ve);
  return e ? Za() : ka();
}
function ka() {
  tt() || j(!1);
  let e = b.useContext(Vt),
    { basename: t, future: r, navigator: n } = b.useContext(ze),
    { matches: a } = b.useContext(ve),
    { pathname: l } = Jt(),
    i = JSON.stringify(Bt(a, r.v7_relativeSplatPath)),
    c = b.useRef(!1);
  return (
    Yr(() => {
      c.current = !0;
    }),
    b.useCallback(
      function (f, y) {
        if ((y === void 0 && (y = {}), !c.current)) return;
        if (typeof f == 'number') {
          n.go(f);
          return;
        }
        let p = zt(f, JSON.parse(i), l, y.relative === 'path');
        e == null &&
          t !== '/' &&
          (p.pathname = p.pathname === '/' ? t : ye([t, p.pathname])),
          (y.replace ? n.replace : n.push)(p, y.state, y);
      },
      [t, n, i, l, e],
    )
  );
}
const Ba = b.createContext(null);
function za(e) {
  let t = b.useContext(ve).outlet;
  return t && b.createElement(Ba.Provider, { value: e }, t);
}
function fo() {
  let { matches: e } = b.useContext(ve),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function $a(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = b.useContext(ze),
    { matches: a } = b.useContext(ve),
    { pathname: l } = Jt(),
    i = JSON.stringify(Bt(a, n.v7_relativeSplatPath));
  return b.useMemo(() => zt(e, JSON.parse(i), l, r === 'path'), [e, i, l, r]);
}
function ho(e, t, r, n) {
  tt() || j(!1);
  let { navigator: a } = b.useContext(ze),
    { matches: l } = b.useContext(ve),
    i = l[l.length - 1],
    c = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let f = Jt(),
    y;
  y = f;
  let p = y.pathname || '/',
    w = p;
  if (u !== '/') {
    let P = u.replace(/^\//, '').split('/');
    w = '/' + p.replace(/^\//, '').split('/').slice(P.length).join('/');
  }
  let E = Le(e, { pathname: w });
  return Ja(
    E &&
      E.map((P) =>
        Object.assign({}, P, {
          params: Object.assign({}, c, P.params),
          pathname: ye([
            u,
            a.encodeLocation
              ? a.encodeLocation(P.pathname).pathname
              : P.pathname,
          ]),
          pathnameBase:
            P.pathnameBase === '/'
              ? u
              : ye([
                  u,
                  a.encodeLocation
                    ? a.encodeLocation(P.pathnameBase).pathname
                    : P.pathnameBase,
                ]),
        }),
      ),
    l,
    r,
    n,
  );
}
function Ha() {
  let e = Xa(),
    t = xt(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    a = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement('h2', null, 'Unexpected Application Error!'),
    b.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? b.createElement('pre', { style: a }, r) : null,
    null,
  );
}
const Wa = b.createElement(Ha, null);
class Va extends b.Component {
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
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      'React Router caught the following error during render',
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          ve.Provider,
          { value: this.props.routeContext },
          b.createElement(Jr.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Ka(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = b.useContext(Vt);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(ve.Provider, { value: t }, n)
  );
}
function Ja(e, t, r, n) {
  var a;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var l;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (l = n) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let i = e,
    c = (a = r) == null ? void 0 : a.errors;
  if (c != null) {
    let y = i.findIndex(
      (p) => p.route.id && (c == null ? void 0 : c[p.route.id]) !== void 0,
    );
    y >= 0 || j(!1), (i = i.slice(0, Math.min(i.length, y + 1)));
  }
  let u = !1,
    f = -1;
  if (r && n && n.v7_partialHydration)
    for (let y = 0; y < i.length; y++) {
      let p = i[y];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (f = y),
        p.route.id)
      ) {
        let { loaderData: w, errors: E } = r,
          M =
            p.route.loader &&
            w[p.route.id] === void 0 &&
            (!E || E[p.route.id] === void 0);
        if (p.route.lazy || M) {
          (u = !0), f >= 0 ? (i = i.slice(0, f + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((y, p, w) => {
    let E,
      M = !1,
      P = null,
      C = null;
    r &&
      ((E = c && p.route.id ? c[p.route.id] : void 0),
      (P = p.route.errorElement || Wa),
      u &&
        (f < 0 && w === 0
          ? ((M = !0), (C = null))
          : f === w &&
            ((M = !0), (C = p.route.hydrateFallbackElement || null))));
    let N = t.concat(i.slice(0, w + 1)),
      U = () => {
        let Q;
        return (
          E
            ? (Q = P)
            : M
              ? (Q = C)
              : p.route.Component
                ? (Q = b.createElement(p.route.Component, null))
                : p.route.element
                  ? (Q = p.route.element)
                  : (Q = y),
          b.createElement(Ka, {
            match: p,
            routeContext: { outlet: y, matches: N, isDataRoute: r != null },
            children: Q,
          })
        );
      };
    return r && (p.route.ErrorBoundary || p.route.errorElement || w === 0)
      ? b.createElement(Va, {
          location: r.location,
          revalidation: r.revalidation,
          component: P,
          error: E,
          children: U(),
          routeContext: { outlet: null, matches: N, isDataRoute: !0 },
        })
      : U();
  }, null);
}
var Gr = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Gr || {}),
  xe = (function (e) {
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
  })(xe || {});
function Ya(e) {
  let t = b.useContext(Vt);
  return t || j(!1), t;
}
function Yt(e) {
  let t = b.useContext(Na);
  return t || j(!1), t;
}
function Ga(e) {
  let t = b.useContext(ve);
  return t || j(!1), t;
}
function Pt(e) {
  let t = Ga(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || j(!1), r.route.id;
}
function po() {
  return Pt(xe.UseRouteId);
}
function mo() {
  let { matches: e, loaderData: t } = Yt(xe.UseMatches);
  return b.useMemo(() => e.map((r) => Ar(r, t)), [e, t]);
}
function yo() {
  let e = Yt(xe.UseActionData),
    t = Pt(xe.UseLoaderData);
  return e.actionData ? e.actionData[t] : void 0;
}
function Xa() {
  var e;
  let t = b.useContext(Jr),
    r = Yt(xe.UseRouteError),
    n = Pt(xe.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function Qa() {
  let e = b.useContext(Et);
  return e == null ? void 0 : e._data;
}
function vo() {
  let e = b.useContext(Et);
  return e == null ? void 0 : e._error;
}
function Za() {
  let { router: e } = Ya(Gr.UseNavigateStable),
    t = Pt(xe.UseNavigateStable),
    r = b.useRef(!1);
  return (
    Yr(() => {
      r.current = !0;
    }),
    b.useCallback(
      function (a, l) {
        l === void 0 && (l = {}),
          r.current &&
            (typeof a == 'number'
              ? e.navigate(a)
              : e.navigate(a, wt({ fromRouteId: t }, l)));
      },
      [e, t],
    )
  );
}
function go(e) {
  return za(e.context);
}
function bo(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: a = Y.Pop,
    navigator: l,
    static: i = !1,
    future: c,
  } = e;
  tt() && j(!1);
  let u = t.replace(/^\/*/, '/'),
    f = b.useMemo(
      () => ({
        basename: u,
        navigator: l,
        static: i,
        future: wt({ v7_relativeSplatPath: !1 }, c),
      }),
      [u, c, l, i],
    );
  typeof n == 'string' && (n = Pe(n));
  let {
      pathname: y = '/',
      search: p = '',
      hash: w = '',
      state: E = null,
      key: M = 'default',
    } = n,
    P = b.useMemo(() => {
      let C = et(y, u);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: w, state: E, key: M },
            navigationType: a,
          };
    }, [u, y, p, w, E, M, a]);
  return P == null
    ? null
    : b.createElement(
        ze.Provider,
        { value: f },
        b.createElement(Kt.Provider, { children: r, value: P }),
      );
}
function wo(e) {
  let { children: t, errorElement: r, resolve: n } = e;
  return b.createElement(
    eo,
    { resolve: n, errorElement: r },
    b.createElement(to, null, t),
  );
}
var oe = (function (e) {
  return (
    (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error'),
    e
  );
})(oe || {});
const qa = new Promise(() => {});
class eo extends b.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, r) {
    console.error('<Await> caught the following error during render', t, r);
  }
  render() {
    let { children: t, errorElement: r, resolve: n } = this.props,
      a = null,
      l = oe.pending;
    if (!(n instanceof Promise))
      (l = oe.success),
        (a = Promise.resolve()),
        Object.defineProperty(a, '_tracked', { get: () => !0 }),
        Object.defineProperty(a, '_data', { get: () => n });
    else if (this.state.error) {
      l = oe.error;
      let i = this.state.error;
      (a = Promise.reject().catch(() => {})),
        Object.defineProperty(a, '_tracked', { get: () => !0 }),
        Object.defineProperty(a, '_error', { get: () => i });
    } else
      n._tracked
        ? ((a = n),
          (l =
            '_error' in a ? oe.error : '_data' in a ? oe.success : oe.pending))
        : ((l = oe.pending),
          Object.defineProperty(n, '_tracked', { get: () => !0 }),
          (a = n.then(
            (i) => Object.defineProperty(n, '_data', { get: () => i }),
            (i) => Object.defineProperty(n, '_error', { get: () => i }),
          )));
    if (l === oe.error && a._error instanceof Ot) throw qa;
    if (l === oe.error && !r) throw a._error;
    if (l === oe.error)
      return b.createElement(Et.Provider, { value: a, children: r });
    if (l === oe.success)
      return b.createElement(Et.Provider, { value: a, children: t });
    throw a;
  }
}
function to(e) {
  let { children: t } = e,
    r = Qa(),
    n = typeof t == 'function' ? t(r) : t;
  return b.createElement(b.Fragment, null, n);
}
function Eo(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: b.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: b.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: b.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
export {
  Ot as A,
  $a as B,
  qe as C,
  io as D,
  Tt as E,
  po as F,
  ve as G,
  j as H,
  ye as I,
  pr as J,
  ze as N,
  go as O,
  On as R,
  ao as a,
  Eo as b,
  so as c,
  co as d,
  fo as e,
  oo as f,
  lo as g,
  Xa as h,
  xt as i,
  no as j,
  vo as k,
  mo as l,
  Le as m,
  Vt as n,
  Na as o,
  Pe as p,
  uo as q,
  b as r,
  wo as s,
  yo as t,
  Jt as u,
  ro as v,
  yn as w,
  bo as x,
  ho as y,
  et as z,
};