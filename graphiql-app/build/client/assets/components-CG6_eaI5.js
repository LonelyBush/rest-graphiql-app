var Wh = Object.defineProperty;
var Kh = (e, t, n) =>
  t in e
    ? Wh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Dl = (e, t, n) => Kh(e, typeof t != 'symbol' ? t + '' : t, n);
import { r as w, g as Qh, R as Yh } from './jsx-runtime-56DGgGmo.js';
function Xh(e, t) {
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
var Hc = { exports: {} },
  et = {},
  $c = { exports: {} },
  Vc = {};
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
    var $ = z.length;
    z.push(I);
    e: for (; 0 < $; ) {
      var ee = ($ - 1) >>> 1,
        re = z[ee];
      if (0 < l(re, I)) (z[ee] = I), (z[$] = re), ($ = ee);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var I = z[0],
      $ = z.pop();
    if ($ !== I) {
      z[0] = $;
      e: for (var ee = 0, re = z.length, He = re >>> 1; ee < He; ) {
        var $e = 2 * (ee + 1) - 1,
          _t = z[$e],
          Re = $e + 1,
          nt = z[Re];
        if (0 > l(_t, $))
          Re < re && 0 > l(nt, _t)
            ? ((z[ee] = nt), (z[Re] = $), (ee = Re))
            : ((z[ee] = _t), (z[$e] = $), (ee = $e));
        else if (Re < re && 0 > l(nt, $)) (z[ee] = nt), (z[Re] = $), (ee = Re);
        else break e;
      }
    }
    return I;
  }
  function l(z, I) {
    var $ = z.sortIndex - I.sortIndex;
    return $ !== 0 ? $ : z.id - I.id;
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
    d = 1,
    c = null,
    f = 3,
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
      if (n(u) !== null) (y = !0), Fe(R);
      else {
        var I = n(s);
        I !== null && Vt(S, I.startTime - z);
      }
  }
  function R(z, I) {
    (y = !1), k && ((k = !1), p(v), (v = -1)), (x = !0);
    var $ = f;
    try {
      for (
        m(I), c = n(u);
        c !== null && (!(c.expirationTime > I) || (z && !A()));

      ) {
        var ee = c.callback;
        if (typeof ee == 'function') {
          (c.callback = null), (f = c.priorityLevel);
          var re = ee(c.expirationTime <= I);
          (I = e.unstable_now()),
            typeof re == 'function' ? (c.callback = re) : c === n(u) && r(u),
            m(I);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var He = !0;
      else {
        var $e = n(s);
        $e !== null && Vt(S, $e.startTime - I), (He = !1);
      }
      return He;
    } finally {
      (c = null), (f = $), (x = !1);
    }
  }
  var P = !1,
    T = null,
    v = -1,
    O = 5,
    M = -1;
  function A() {
    return !(e.unstable_now() - M < O);
  }
  function Y() {
    if (T !== null) {
      var z = e.unstable_now();
      M = z;
      var I = !0;
      try {
        I = T(!0, z);
      } finally {
        I ? he() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var he;
  if (typeof h == 'function')
    he = function () {
      h(Y);
    };
  else if (typeof MessageChannel < 'u') {
    var oe = new MessageChannel(),
      Ee = oe.port2;
    (oe.port1.onmessage = Y),
      (he = function () {
        Ee.postMessage(null);
      });
  } else
    he = function () {
      L(Y, 0);
    };
  function Fe(z) {
    (T = z), P || ((P = !0), he());
  }
  function Vt(z, I) {
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
      y || x || ((y = !0), Fe(R));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (O = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = f;
      }
      var $ = f;
      f = I;
      try {
        return z();
      } finally {
        f = $;
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
      var $ = f;
      f = z;
      try {
        return I();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (z, I, $) {
      var ee = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? ee + $ : ee))
          : ($ = ee),
        z)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = $ + re),
        (z = {
          id: d++,
          callback: I,
          priorityLevel: z,
          startTime: $,
          expirationTime: re,
          sortIndex: -1,
        }),
        $ > ee
          ? ((z.sortIndex = $),
            t(s, z),
            n(u) === null &&
              z === n(s) &&
              (k ? (p(v), (v = -1)) : (k = !0), Vt(S, $ - ee)))
          : ((z.sortIndex = re), t(u, z), y || x || ((y = !0), Fe(R))),
        z
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (z) {
      var I = f;
      return function () {
        var $ = f;
        f = I;
        try {
          return z.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    });
})(Vc);
$c.exports = Vc;
var Jh = $c.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gh = w,
  be = Jh;
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
var Wc = new Set(),
  Zr = {};
function Fn(e, t) {
  ur(e, t), ur(e + 'Capture', t);
}
function ur(e, t) {
  for (Zr[e] = t, e = 0; e < t.length; e++) Wc.add(t[e]);
}
var jt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Vo = Object.prototype.hasOwnProperty,
  Zh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ss = {},
  cs = {};
function qh(e) {
  return Vo.call(cs, e)
    ? !0
    : Vo.call(ss, e)
      ? !1
      : Zh.test(e)
        ? (cs[e] = !0)
        : ((ss[e] = !0), !1);
}
function bh(e, t, n, r) {
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
function ep(e, t, n, r) {
  if (t === null || typeof t > 'u' || bh(e, t, n, r)) return !0;
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
function Be(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ne[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ne[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ne[e] = new Be(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ne[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ne[e] = new Be(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ne[e] = new Be(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ne[e] = new Be(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ne[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ha = /[\-:]([a-z])/g;
function $a(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ha, $a);
    Ne[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ha, $a);
    Ne[t] = new Be(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ha, $a);
  Ne[t] = new Be(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ne[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Be(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ne[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Va(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (ep(t, n, l, r) && (n = null),
    r || l === null
      ? qh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Bt = Gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ml = Symbol.for('react.element'),
  Vn = Symbol.for('react.portal'),
  Wn = Symbol.for('react.fragment'),
  Wa = Symbol.for('react.strict_mode'),
  Wo = Symbol.for('react.profiler'),
  Kc = Symbol.for('react.provider'),
  Qc = Symbol.for('react.context'),
  Ka = Symbol.for('react.forward_ref'),
  Ko = Symbol.for('react.suspense'),
  Qo = Symbol.for('react.suspense_list'),
  Qa = Symbol.for('react.memo'),
  Jt = Symbol.for('react.lazy'),
  Yc = Symbol.for('react.offscreen'),
  ds = Symbol.iterator;
function Pr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ds && e[ds]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var fe = Object.assign,
  co;
function Ir(e) {
  if (co === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      co = (t && t[1]) || '';
    }
  return (
    `
` +
    co +
    e
  );
}
var fo = !1;
function ho(e, t) {
  if (!e || fo) return '';
  fo = !0;
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
    (fo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ir(e) : '';
}
function tp(e) {
  switch (e.tag) {
    case 5:
      return Ir(e.type);
    case 16:
      return Ir('Lazy');
    case 13:
      return Ir('Suspense');
    case 19:
      return Ir('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = ho(e.type, !1)), e;
    case 11:
      return (e = ho(e.type.render, !1)), e;
    case 1:
      return (e = ho(e.type, !0)), e;
    default:
      return '';
  }
}
function Yo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Wn:
      return 'Fragment';
    case Vn:
      return 'Portal';
    case Wo:
      return 'Profiler';
    case Wa:
      return 'StrictMode';
    case Ko:
      return 'Suspense';
    case Qo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Qc:
        return (e.displayName || 'Context') + '.Consumer';
      case Kc:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ka:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Qa:
        return (
          (t = e.displayName || null), t !== null ? t : Yo(e.type) || 'Memo'
        );
      case Jt:
        (t = e._payload), (e = e._init);
        try {
          return Yo(e(t));
        } catch {}
    }
  return null;
}
function np(e) {
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
      return Yo(t);
    case 8:
      return t === Wa ? 'StrictMode' : 'Mode';
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
function cn(e) {
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
function Xc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function rp(e) {
  var t = Xc(e) ? 'checked' : 'value',
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
function Ol(e) {
  e._valueTracker || (e._valueTracker = rp(e));
}
function Jc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Xc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xo(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fs(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Gc(e, t) {
  (t = t.checked), t != null && Va(e, 'checked', t, !1);
}
function Jo(e, t) {
  Gc(e, t);
  var n = cn(t.value),
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
    ? Go(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Go(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hs(e, t, n) {
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
function Go(e, t, n) {
  (t !== 'number' || fi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ur = Array.isArray;
function nr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + cn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ps(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Ur(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Zc(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function ms(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function qc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function qo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? qc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var zl,
  bc = (function (e) {
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
        zl = zl || document.createElement('div'),
          zl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = zl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $r = {
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
  lp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys($r).forEach(function (e) {
  lp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($r[t] = $r[e]);
  });
});
function ed(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || ($r.hasOwnProperty(e) && $r[e])
      ? ('' + t).trim()
      : t + 'px';
}
function td(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = ed(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var ip = fe(
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
function bo(e, t) {
  if (t) {
    if (ip[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function ea(e, t) {
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
var ta = null;
function Ya(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var na = null,
  rr = null,
  lr = null;
function vs(e) {
  if ((e = wl(e))) {
    if (typeof na != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Qi(t)), na(e.stateNode, e.type, t));
  }
}
function nd(e) {
  rr ? (lr ? lr.push(e) : (lr = [e])) : (rr = e);
}
function rd() {
  if (rr) {
    var e = rr,
      t = lr;
    if (((lr = rr = null), vs(e), t)) for (e = 0; e < t.length; e++) vs(t[e]);
  }
}
function ld(e, t) {
  return e(t);
}
function id() {}
var po = !1;
function od(e, t, n) {
  if (po) return e(t, n);
  po = !0;
  try {
    return ld(e, t, n);
  } finally {
    (po = !1), (rr !== null || lr !== null) && (id(), rd());
  }
}
function br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Qi(n);
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
var ra = !1;
if (jt)
  try {
    var Rr = {};
    Object.defineProperty(Rr, 'passive', {
      get: function () {
        ra = !0;
      },
    }),
      window.addEventListener('test', Rr, Rr),
      window.removeEventListener('test', Rr, Rr);
  } catch {
    ra = !1;
  }
function op(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Vr = !1,
  hi = null,
  pi = !1,
  la = null,
  ap = {
    onError: function (e) {
      (Vr = !0), (hi = e);
    },
  };
function up(e, t, n, r, l, i, o, a, u) {
  (Vr = !1), (hi = null), op.apply(ap, arguments);
}
function sp(e, t, n, r, l, i, o, a, u) {
  if ((up.apply(this, arguments), Vr)) {
    if (Vr) {
      var s = hi;
      (Vr = !1), (hi = null);
    } else throw Error(N(198));
    pi || ((pi = !0), (la = s));
  }
}
function jn(e) {
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
function ad(e) {
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
function ys(e) {
  if (jn(e) !== e) throw Error(N(188));
}
function cp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(N(188));
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
        if (i === n) return ys(l), e;
        if (i === r) return ys(l), t;
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
function ud(e) {
  return (e = cp(e)), e !== null ? sd(e) : null;
}
function sd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cd = be.unstable_scheduleCallback,
  gs = be.unstable_cancelCallback,
  dp = be.unstable_shouldYield,
  fp = be.unstable_requestPaint,
  ve = be.unstable_now,
  hp = be.unstable_getCurrentPriorityLevel,
  Xa = be.unstable_ImmediatePriority,
  dd = be.unstable_UserBlockingPriority,
  mi = be.unstable_NormalPriority,
  pp = be.unstable_LowPriority,
  fd = be.unstable_IdlePriority,
  $i = null,
  kt = null;
function mp(e) {
  if (kt && typeof kt.onCommitFiberRoot == 'function')
    try {
      kt.onCommitFiberRoot($i, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : gp,
  vp = Math.log,
  yp = Math.LN2;
function gp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vp(e) / yp) | 0)) | 0;
}
var Fl = 64,
  jl = 4194304;
function Ar(e) {
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
function vi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Ar(a)) : ((i &= o), i !== 0 && (r = Ar(i)));
  } else (o = n & ~l), o !== 0 ? (r = Ar(o)) : i !== 0 && (r = Ar(i));
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
      (n = 31 - mt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function wp(e, t) {
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
function Sp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - mt(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = wp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function ia(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hd() {
  var e = Fl;
  return (Fl <<= 1), !(Fl & 4194240) && (Fl = 64), e;
}
function mo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function Ep(e, t) {
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
    var l = 31 - mt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ja(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Z = 0;
function pd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var md,
  Ga,
  vd,
  yd,
  gd,
  oa = !1,
  Il = [],
  tn = null,
  nn = null,
  rn = null,
  el = new Map(),
  tl = new Map(),
  Zt = [],
  xp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function ws(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      nn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      rn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      el.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      tl.delete(t.pointerId);
  }
}
function _r(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = wl(t)), t !== null && Ga(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function kp(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (tn = _r(tn, e, t, n, r, l)), !0;
    case 'dragenter':
      return (nn = _r(nn, e, t, n, r, l)), !0;
    case 'mouseover':
      return (rn = _r(rn, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return el.set(i, _r(el.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), tl.set(i, _r(tl.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function wd(e) {
  var t = En(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ad(n)), t !== null)) {
          (e.blockedOn = t),
            gd(e.priority, function () {
              vd(n);
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
function ql(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ta = r), n.target.dispatchEvent(r), (ta = null);
    } else return (t = wl(n)), t !== null && Ga(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ss(e, t, n) {
  ql(e) && n.delete(t);
}
function Cp() {
  (oa = !1),
    tn !== null && ql(tn) && (tn = null),
    nn !== null && ql(nn) && (nn = null),
    rn !== null && ql(rn) && (rn = null),
    el.forEach(Ss),
    tl.forEach(Ss);
}
function Lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    oa ||
      ((oa = !0),
      be.unstable_scheduleCallback(be.unstable_NormalPriority, Cp)));
}
function nl(e) {
  function t(l) {
    return Lr(l, e);
  }
  if (0 < Il.length) {
    Lr(Il[0], e);
    for (var n = 1; n < Il.length; n++) {
      var r = Il[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && Lr(tn, e),
      nn !== null && Lr(nn, e),
      rn !== null && Lr(rn, e),
      el.forEach(t),
      tl.forEach(t),
      n = 0;
    n < Zt.length;
    n++
  )
    (r = Zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
    wd(n), n.blockedOn === null && Zt.shift();
}
var ir = Bt.ReactCurrentBatchConfig,
  yi = !0;
function Pp(e, t, n, r) {
  var l = Z,
    i = ir.transition;
  ir.transition = null;
  try {
    (Z = 1), Za(e, t, n, r);
  } finally {
    (Z = l), (ir.transition = i);
  }
}
function Rp(e, t, n, r) {
  var l = Z,
    i = ir.transition;
  ir.transition = null;
  try {
    (Z = 4), Za(e, t, n, r);
  } finally {
    (Z = l), (ir.transition = i);
  }
}
function Za(e, t, n, r) {
  if (yi) {
    var l = aa(e, t, n, r);
    if (l === null) Po(e, t, r, gi, n), ws(e, r);
    else if (kp(l, e, t, n, r)) r.stopPropagation();
    else if ((ws(e, r), t & 4 && -1 < xp.indexOf(e))) {
      for (; l !== null; ) {
        var i = wl(l);
        if (
          (i !== null && md(i),
          (i = aa(e, t, n, r)),
          i === null && Po(e, t, r, gi, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Po(e, t, r, null, n);
  }
}
var gi = null;
function aa(e, t, n, r) {
  if (((gi = null), (e = Ya(r)), (e = En(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ad(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (gi = e), null;
}
function Sd(e) {
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
      switch (hp()) {
        case Xa:
          return 1;
        case dd:
          return 4;
        case mi:
        case pp:
          return 16;
        case fd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null,
  qa = null,
  bl = null;
function Ed() {
  if (bl) return bl;
  var e,
    t = qa,
    n = t.length,
    r,
    l = 'value' in bt ? bt.value : bt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (bl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ei(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ul() {
  return !0;
}
function Es() {
  return !1;
}
function tt(e) {
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
        ? Ul
        : Es),
      (this.isPropagationStopped = Es),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ul));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ul));
      },
      persist: function () {},
      isPersistent: Ul,
    }),
    t
  );
}
var yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ba = tt(yr),
  gl = fe({}, yr, { view: 0, detail: 0 }),
  _p = tt(gl),
  vo,
  yo,
  Tr,
  Vi = fe({}, gl, {
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
    getModifierState: eu,
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
        : (e !== Tr &&
            (Tr && e.type === 'mousemove'
              ? ((vo = e.screenX - Tr.screenX), (yo = e.screenY - Tr.screenY))
              : (yo = vo = 0),
            (Tr = e)),
          vo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : yo;
    },
  }),
  xs = tt(Vi),
  Lp = fe({}, Vi, { dataTransfer: 0 }),
  Tp = tt(Lp),
  Np = fe({}, gl, { relatedTarget: 0 }),
  go = tt(Np),
  Dp = fe({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mp = tt(Dp),
  Op = fe({}, yr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zp = tt(Op),
  Fp = fe({}, yr, { data: 0 }),
  ks = tt(Fp),
  jp = {
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
  Ip = {
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
  Up = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Up[e]) ? !!t[e] : !1;
}
function eu() {
  return Ap;
}
var Bp = fe({}, gl, {
    key: function (e) {
      if (e.key) {
        var t = jp[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ei(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Ip[e.keyCode] || 'Unidentified'
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
    getModifierState: eu,
    charCode: function (e) {
      return e.type === 'keypress' ? ei(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ei(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Hp = tt(Bp),
  $p = fe({}, Vi, {
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
  Cs = tt($p),
  Vp = fe({}, gl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eu,
  }),
  Wp = tt(Vp),
  Kp = fe({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qp = tt(Kp),
  Yp = fe({}, Vi, {
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
  Xp = tt(Yp),
  Jp = [9, 13, 27, 32],
  tu = jt && 'CompositionEvent' in window,
  Wr = null;
jt && 'documentMode' in document && (Wr = document.documentMode);
var Gp = jt && 'TextEvent' in window && !Wr,
  xd = jt && (!tu || (Wr && 8 < Wr && 11 >= Wr)),
  Ps = ' ',
  Rs = !1;
function kd(e, t) {
  switch (e) {
    case 'keyup':
      return Jp.indexOf(t.keyCode) !== -1;
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
function Cd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Kn = !1;
function Zp(e, t) {
  switch (e) {
    case 'compositionend':
      return Cd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Rs = !0), Ps);
    case 'textInput':
      return (e = t.data), e === Ps && Rs ? null : e;
    default:
      return null;
  }
}
function qp(e, t) {
  if (Kn)
    return e === 'compositionend' || (!tu && kd(e, t))
      ? ((e = Ed()), (bl = qa = bt = null), (Kn = !1), e)
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
      return xd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var bp = {
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
function _s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!bp[e.type] : t === 'textarea';
}
function Pd(e, t, n, r) {
  nd(r),
    (t = wi(t, 'onChange')),
    0 < t.length &&
      ((n = new ba('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Kr = null,
  rl = null;
function em(e) {
  jd(e, 0);
}
function Wi(e) {
  var t = Xn(e);
  if (Jc(t)) return e;
}
function tm(e, t) {
  if (e === 'change') return t;
}
var Rd = !1;
if (jt) {
  var wo;
  if (jt) {
    var So = 'oninput' in document;
    if (!So) {
      var Ls = document.createElement('div');
      Ls.setAttribute('oninput', 'return;'),
        (So = typeof Ls.oninput == 'function');
    }
    wo = So;
  } else wo = !1;
  Rd = wo && (!document.documentMode || 9 < document.documentMode);
}
function Ts() {
  Kr && (Kr.detachEvent('onpropertychange', _d), (rl = Kr = null));
}
function _d(e) {
  if (e.propertyName === 'value' && Wi(rl)) {
    var t = [];
    Pd(t, rl, e, Ya(e)), od(em, t);
  }
}
function nm(e, t, n) {
  e === 'focusin'
    ? (Ts(), (Kr = t), (rl = n), Kr.attachEvent('onpropertychange', _d))
    : e === 'focusout' && Ts();
}
function rm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Wi(rl);
}
function lm(e, t) {
  if (e === 'click') return Wi(t);
}
function im(e, t) {
  if (e === 'input' || e === 'change') return Wi(t);
}
function om(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == 'function' ? Object.is : om;
function ll(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Vo.call(t, l) || !yt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ns(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ds(e, t) {
  var n = Ns(e);
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
    n = Ns(n);
  }
}
function Ld(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ld(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Td() {
  for (var e = window, t = fi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fi(e.document);
  }
  return t;
}
function nu(e) {
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
function am(e) {
  var t = Td(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ld(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && nu(n)) {
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
          (l = Ds(n, i));
        var o = Ds(n, r);
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
var um = jt && 'documentMode' in document && 11 >= document.documentMode,
  Qn = null,
  ua = null,
  Qr = null,
  sa = !1;
function Ms(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sa ||
    Qn == null ||
    Qn !== fi(r) ||
    ((r = Qn),
    'selectionStart' in r && nu(r)
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
    (Qr && ll(Qr, r)) ||
      ((Qr = r),
      (r = wi(ua, 'onSelect')),
      0 < r.length &&
        ((t = new ba('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qn))));
}
function Al(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Yn = {
    animationend: Al('Animation', 'AnimationEnd'),
    animationiteration: Al('Animation', 'AnimationIteration'),
    animationstart: Al('Animation', 'AnimationStart'),
    transitionend: Al('Transition', 'TransitionEnd'),
  },
  Eo = {},
  Nd = {};
jt &&
  ((Nd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Yn.animationend.animation,
    delete Yn.animationiteration.animation,
    delete Yn.animationstart.animation),
  'TransitionEvent' in window || delete Yn.transitionend.transition);
function Ki(e) {
  if (Eo[e]) return Eo[e];
  if (!Yn[e]) return e;
  var t = Yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nd) return (Eo[e] = t[n]);
  return e;
}
var Dd = Ki('animationend'),
  Md = Ki('animationiteration'),
  Od = Ki('animationstart'),
  zd = Ki('transitionend'),
  Fd = new Map(),
  Os =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function hn(e, t) {
  Fd.set(e, t), Fn(t, [e]);
}
for (var xo = 0; xo < Os.length; xo++) {
  var ko = Os[xo],
    sm = ko.toLowerCase(),
    cm = ko[0].toUpperCase() + ko.slice(1);
  hn(sm, 'on' + cm);
}
hn(Dd, 'onAnimationEnd');
hn(Md, 'onAnimationIteration');
hn(Od, 'onAnimationStart');
hn('dblclick', 'onDoubleClick');
hn('focusin', 'onFocus');
hn('focusout', 'onBlur');
hn(zd, 'onTransitionEnd');
ur('onMouseEnter', ['mouseout', 'mouseover']);
ur('onMouseLeave', ['mouseout', 'mouseover']);
ur('onPointerEnter', ['pointerout', 'pointerover']);
ur('onPointerLeave', ['pointerout', 'pointerover']);
Fn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Fn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Fn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Fn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Fn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Fn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Br =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  dm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Br));
function zs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), sp(r, t, void 0, e), (e.currentTarget = null);
}
function jd(e, t) {
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
          zs(l, a, s), (i = u);
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
          zs(l, a, s), (i = u);
        }
    }
  }
  if (pi) throw ((e = la), (pi = !1), (la = null), e);
}
function le(e, t) {
  var n = t[pa];
  n === void 0 && (n = t[pa] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Id(t, e, 2, !1), n.add(r));
}
function Co(e, t, n) {
  var r = 0;
  t && (r |= 4), Id(n, e, r, t);
}
var Bl = '_reactListening' + Math.random().toString(36).slice(2);
function il(e) {
  if (!e[Bl]) {
    (e[Bl] = !0),
      Wc.forEach(function (n) {
        n !== 'selectionchange' && (dm.has(n) || Co(n, !1, e), Co(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bl] || ((t[Bl] = !0), Co('selectionchange', !1, t));
  }
}
function Id(e, t, n, r) {
  switch (Sd(t)) {
    case 1:
      var l = Pp;
      break;
    case 4:
      l = Rp;
      break;
    default:
      l = Za;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ra ||
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
function Po(e, t, n, r, l) {
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
          if (((o = En(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  od(function () {
    var s = i,
      d = Ya(n),
      c = [];
    e: {
      var f = Fd.get(e);
      if (f !== void 0) {
        var x = ba,
          y = e;
        switch (e) {
          case 'keypress':
            if (ei(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = Hp;
            break;
          case 'focusin':
            (y = 'focus'), (x = go);
            break;
          case 'focusout':
            (y = 'blur'), (x = go);
            break;
          case 'beforeblur':
          case 'afterblur':
            x = go;
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
            x = xs;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = Tp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = Wp;
            break;
          case Dd:
          case Md:
          case Od:
            x = Mp;
            break;
          case zd:
            x = Qp;
            break;
          case 'scroll':
            x = _p;
            break;
          case 'wheel':
            x = Xp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = zp;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = Cs;
        }
        var k = (t & 4) !== 0,
          L = !k && e === 'scroll',
          p = k ? (f !== null ? f + 'Capture' : null) : f;
        k = [];
        for (var h = s, m; h !== null; ) {
          m = h;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              p !== null && ((S = br(h, p)), S != null && k.push(ol(h, S, m)))),
            L)
          )
            break;
          h = h.return;
        }
        0 < k.length &&
          ((f = new x(f, y, null, n, d)), c.push({ event: f, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== ta &&
            (y = n.relatedTarget || n.fromElement) &&
            (En(y) || y[It]))
        )
          break e;
        if (
          (x || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = s),
              (y = y ? En(y) : null),
              y !== null &&
                ((L = jn(y)), y !== L || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = s)),
          x !== y)
        ) {
          if (
            ((k = xs),
            (S = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = Cs),
              (S = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (L = x == null ? f : Xn(x)),
            (m = y == null ? f : Xn(y)),
            (f = new k(S, h + 'leave', x, n, d)),
            (f.target = L),
            (f.relatedTarget = m),
            (S = null),
            En(d) === s &&
              ((k = new k(p, h + 'enter', y, n, d)),
              (k.target = m),
              (k.relatedTarget = L),
              (S = k)),
            (L = S),
            x && y)
          )
            t: {
              for (k = x, p = y, h = 0, m = k; m; m = Hn(m)) h++;
              for (m = 0, S = p; S; S = Hn(S)) m++;
              for (; 0 < h - m; ) (k = Hn(k)), h--;
              for (; 0 < m - h; ) (p = Hn(p)), m--;
              for (; h--; ) {
                if (k === p || (p !== null && k === p.alternate)) break t;
                (k = Hn(k)), (p = Hn(p));
              }
              k = null;
            }
          else k = null;
          x !== null && Fs(c, f, x, k, !1),
            y !== null && L !== null && Fs(c, L, y, k, !0);
        }
      }
      e: {
        if (
          ((f = s ? Xn(s) : window),
          (x = f.nodeName && f.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && f.type === 'file'))
        )
          var R = tm;
        else if (_s(f))
          if (Rd) R = im;
          else {
            R = rm;
            var P = nm;
          }
        else
          (x = f.nodeName) &&
            x.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (R = lm);
        if (R && (R = R(e, s))) {
          Pd(c, R, n, d);
          break e;
        }
        P && P(e, f, s),
          e === 'focusout' &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === 'number' &&
            Go(f, 'number', f.value);
      }
      switch (((P = s ? Xn(s) : window), e)) {
        case 'focusin':
          (_s(P) || P.contentEditable === 'true') &&
            ((Qn = P), (ua = s), (Qr = null));
          break;
        case 'focusout':
          Qr = ua = Qn = null;
          break;
        case 'mousedown':
          sa = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (sa = !1), Ms(c, n, d);
          break;
        case 'selectionchange':
          if (um) break;
        case 'keydown':
        case 'keyup':
          Ms(c, n, d);
      }
      var T;
      if (tu)
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
        Kn
          ? kd(e, n) && (v = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (v = 'onCompositionStart');
      v &&
        (xd &&
          n.locale !== 'ko' &&
          (Kn || v !== 'onCompositionStart'
            ? v === 'onCompositionEnd' && Kn && (T = Ed())
            : ((bt = d),
              (qa = 'value' in bt ? bt.value : bt.textContent),
              (Kn = !0))),
        (P = wi(s, v)),
        0 < P.length &&
          ((v = new ks(v, e, null, n, d)),
          c.push({ event: v, listeners: P }),
          T ? (v.data = T) : ((T = Cd(n)), T !== null && (v.data = T)))),
        (T = Gp ? Zp(e, n) : qp(e, n)) &&
          ((s = wi(s, 'onBeforeInput')),
          0 < s.length &&
            ((d = new ks('onBeforeInput', 'beforeinput', null, n, d)),
            c.push({ event: d, listeners: s }),
            (d.data = T)));
    }
    jd(c, t);
  });
}
function ol(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = br(e, n)),
      i != null && r.unshift(ol(e, i, l)),
      (i = br(e, t)),
      i != null && r.push(ol(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = br(n, i)), u != null && o.unshift(ol(n, u, a)))
        : l || ((u = br(n, i)), u != null && o.push(ol(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var fm = /\r\n?/g,
  hm = /\u0000|\uFFFD/g;
function js(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      fm,
      `
`,
    )
    .replace(hm, '');
}
function Hl(e, t, n) {
  if (((t = js(t)), js(e) !== t && n)) throw Error(N(425));
}
function Si() {}
var ca = null,
  da = null;
function fa(e, t) {
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
var ha = typeof setTimeout == 'function' ? setTimeout : void 0,
  pm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Is = typeof Promise == 'function' ? Promise : void 0,
  mm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Is < 'u'
        ? function (e) {
            return Is.resolve(null).then(e).catch(vm);
          }
        : ha;
function vm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ro(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), nl(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  nl(t);
}
function ln(e) {
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
function Us(e) {
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
var gr = Math.random().toString(36).slice(2),
  xt = '__reactFiber$' + gr,
  al = '__reactProps$' + gr,
  It = '__reactContainer$' + gr,
  pa = '__reactEvents$' + gr,
  ym = '__reactListeners$' + gr,
  gm = '__reactHandles$' + gr;
function En(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[It] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Us(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = Us(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wl(e) {
  return (
    (e = e[xt] || e[It]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Qi(e) {
  return e[al] || null;
}
var ma = [],
  Jn = -1;
function pn(e) {
  return { current: e };
}
function ie(e) {
  0 > Jn || ((e.current = ma[Jn]), (ma[Jn] = null), Jn--);
}
function ne(e, t) {
  Jn++, (ma[Jn] = e.current), (e.current = t);
}
var dn = {},
  ze = pn(dn),
  Ke = pn(!1),
  Ln = dn;
function sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
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
function Qe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ei() {
  ie(Ke), ie(ze);
}
function As(e, t, n) {
  if (ze.current !== dn) throw Error(N(168));
  ne(ze, t), ne(Ke, n);
}
function Ud(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, np(e) || 'Unknown', l));
  return fe({}, n, r);
}
function xi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (Ln = ze.current),
    ne(ze, e),
    ne(Ke, Ke.current),
    !0
  );
}
function Bs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Ud(e, t, Ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(Ke),
      ie(ze),
      ne(ze, e))
    : ie(Ke),
    ne(Ke, n);
}
var Dt = null,
  Yi = !1,
  _o = !1;
function Ad(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function wm(e) {
  (Yi = !0), Ad(e);
}
function mn() {
  if (!_o && Dt !== null) {
    _o = !0;
    var e = 0,
      t = Z;
    try {
      var n = Dt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), (Yi = !1);
    } catch (l) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), cd(Xa, mn), l);
    } finally {
      (Z = t), (_o = !1);
    }
  }
  return null;
}
var Gn = [],
  Zn = 0,
  ki = null,
  Ci = 0,
  lt = [],
  it = 0,
  Tn = null,
  Ot = 1,
  zt = '';
function wn(e, t) {
  (Gn[Zn++] = Ci), (Gn[Zn++] = ki), (ki = e), (Ci = t);
}
function Bd(e, t, n) {
  (lt[it++] = Ot), (lt[it++] = zt), (lt[it++] = Tn), (Tn = e);
  var r = Ot;
  e = zt;
  var l = 32 - mt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - mt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ot = (1 << (32 - mt(t) + l)) | (n << l) | r),
      (zt = i + e);
  } else (Ot = (1 << i) | (n << l) | r), (zt = e);
}
function ru(e) {
  e.return !== null && (wn(e, 1), Bd(e, 1, 0));
}
function lu(e) {
  for (; e === ki; )
    (ki = Gn[--Zn]), (Gn[Zn] = null), (Ci = Gn[--Zn]), (Gn[Zn] = null);
  for (; e === Tn; )
    (Tn = lt[--it]),
      (lt[it] = null),
      (zt = lt[--it]),
      (lt[it] = null),
      (Ot = lt[--it]),
      (lt[it] = null);
}
var qe = null,
  Ze = null,
  se = !1,
  pt = null;
function Hd(e, t) {
  var n = ot(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (Ze = ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tn !== null ? { id: Ot, overflow: zt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function va(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ya(e) {
  if (se) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!Hs(e, t)) {
        if (va(e)) throw Error(N(418));
        t = ln(n.nextSibling);
        var r = qe;
        t && Hs(e, t)
          ? Hd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e));
      }
    } else {
      if (va(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e);
    }
  }
}
function $s(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function $l(e) {
  if (e !== qe) return !1;
  if (!se) return $s(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !fa(e.type, e.memoizedProps))),
    t && (t = Ze))
  ) {
    if (va(e)) throw ($d(), Error(N(418)));
    for (; t; ) Hd(e, t), (t = ln(t.nextSibling));
  }
  if (($s(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ze = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = qe ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function $d() {
  for (var e = Ze; e; ) e = ln(e.nextSibling);
}
function cr() {
  (Ze = qe = null), (se = !1);
}
function iu(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var Sm = Bt.ReactCurrentBatchConfig;
function Nr(e, t, n) {
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
function Vl(e, t) {
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
function Vs(e) {
  var t = e._init;
  return t(e._payload);
}
function Vd(e) {
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
    return (p = sn(p, h)), (p.index = 0), (p.sibling = null), p;
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
      ? ((h = zo(m, p.mode, S)), (h.return = p), h)
      : ((h = l(h, m)), (h.return = p), h);
  }
  function u(p, h, m, S) {
    var R = m.type;
    return R === Wn
      ? d(p, h, m.props.children, S, m.key)
      : h !== null &&
          (h.elementType === R ||
            (typeof R == 'object' &&
              R !== null &&
              R.$$typeof === Jt &&
              Vs(R) === h.type))
        ? ((S = l(h, m.props)), (S.ref = Nr(p, h, m)), (S.return = p), S)
        : ((S = ai(m.type, m.key, m.props, null, p.mode, S)),
          (S.ref = Nr(p, h, m)),
          (S.return = p),
          S);
  }
  function s(p, h, m, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Fo(m, p.mode, S)), (h.return = p), h)
      : ((h = l(h, m.children || [])), (h.return = p), h);
  }
  function d(p, h, m, S, R) {
    return h === null || h.tag !== 7
      ? ((h = _n(m, p.mode, S, R)), (h.return = p), h)
      : ((h = l(h, m)), (h.return = p), h);
  }
  function c(p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = zo('' + h, p.mode, m)), (h.return = p), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Ml:
          return (
            (m = ai(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = Nr(p, null, h)),
            (m.return = p),
            m
          );
        case Vn:
          return (h = Fo(h, p.mode, m)), (h.return = p), h;
        case Jt:
          var S = h._init;
          return c(p, S(h._payload), m);
      }
      if (Ur(h) || Pr(h))
        return (h = _n(h, p.mode, m, null)), (h.return = p), h;
      Vl(p, h);
    }
    return null;
  }
  function f(p, h, m, S) {
    var R = h !== null ? h.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return R !== null ? null : a(p, h, '' + m, S);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Ml:
          return m.key === R ? u(p, h, m, S) : null;
        case Vn:
          return m.key === R ? s(p, h, m, S) : null;
        case Jt:
          return (R = m._init), f(p, h, R(m._payload), S);
      }
      if (Ur(m) || Pr(m)) return R !== null ? null : d(p, h, m, S, null);
      Vl(p, m);
    }
    return null;
  }
  function x(p, h, m, S, R) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (p = p.get(m) || null), a(h, p, '' + S, R);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case Ml:
          return (p = p.get(S.key === null ? m : S.key) || null), u(h, p, S, R);
        case Vn:
          return (p = p.get(S.key === null ? m : S.key) || null), s(h, p, S, R);
        case Jt:
          var P = S._init;
          return x(p, h, m, P(S._payload), R);
      }
      if (Ur(S) || Pr(S)) return (p = p.get(m) || null), d(h, p, S, R, null);
      Vl(h, S);
    }
    return null;
  }
  function y(p, h, m, S) {
    for (
      var R = null, P = null, T = h, v = (h = 0), O = null;
      T !== null && v < m.length;
      v++
    ) {
      T.index > v ? ((O = T), (T = null)) : (O = T.sibling);
      var M = f(p, T, m[v], S);
      if (M === null) {
        T === null && (T = O);
        break;
      }
      e && T && M.alternate === null && t(p, T),
        (h = i(M, h, v)),
        P === null ? (R = M) : (P.sibling = M),
        (P = M),
        (T = O);
    }
    if (v === m.length) return n(p, T), se && wn(p, v), R;
    if (T === null) {
      for (; v < m.length; v++)
        (T = c(p, m[v], S)),
          T !== null &&
            ((h = i(T, h, v)), P === null ? (R = T) : (P.sibling = T), (P = T));
      return se && wn(p, v), R;
    }
    for (T = r(p, T); v < m.length; v++)
      (O = x(T, p, v, m[v], S)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? v : O.key),
          (h = i(O, h, v)),
          P === null ? (R = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        T.forEach(function (A) {
          return t(p, A);
        }),
      se && wn(p, v),
      R
    );
  }
  function k(p, h, m, S) {
    var R = Pr(m);
    if (typeof R != 'function') throw Error(N(150));
    if (((m = R.call(m)), m == null)) throw Error(N(151));
    for (
      var P = (R = null), T = h, v = (h = 0), O = null, M = m.next();
      T !== null && !M.done;
      v++, M = m.next()
    ) {
      T.index > v ? ((O = T), (T = null)) : (O = T.sibling);
      var A = f(p, T, M.value, S);
      if (A === null) {
        T === null && (T = O);
        break;
      }
      e && T && A.alternate === null && t(p, T),
        (h = i(A, h, v)),
        P === null ? (R = A) : (P.sibling = A),
        (P = A),
        (T = O);
    }
    if (M.done) return n(p, T), se && wn(p, v), R;
    if (T === null) {
      for (; !M.done; v++, M = m.next())
        (M = c(p, M.value, S)),
          M !== null &&
            ((h = i(M, h, v)), P === null ? (R = M) : (P.sibling = M), (P = M));
      return se && wn(p, v), R;
    }
    for (T = r(p, T); !M.done; v++, M = m.next())
      (M = x(T, p, v, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? v : M.key),
          (h = i(M, h, v)),
          P === null ? (R = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        T.forEach(function (Y) {
          return t(p, Y);
        }),
      se && wn(p, v),
      R
    );
  }
  function L(p, h, m, S) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Wn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ml:
          e: {
            for (var R = m.key, P = h; P !== null; ) {
              if (P.key === R) {
                if (((R = m.type), R === Wn)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (h = l(P, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  P.elementType === R ||
                  (typeof R == 'object' &&
                    R !== null &&
                    R.$$typeof === Jt &&
                    Vs(R) === P.type)
                ) {
                  n(p, P.sibling),
                    (h = l(P, m.props)),
                    (h.ref = Nr(p, P, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === Wn
              ? ((h = _n(m.props.children, p.mode, S, m.key)),
                (h.return = p),
                (p = h))
              : ((S = ai(m.type, m.key, m.props, null, p.mode, S)),
                (S.ref = Nr(p, h, m)),
                (S.return = p),
                (p = S));
          }
          return o(p);
        case Vn:
          e: {
            for (P = m.key; h !== null; ) {
              if (h.key === P)
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
            (h = Fo(m, p.mode, S)), (h.return = p), (p = h);
          }
          return o(p);
        case Jt:
          return (P = m._init), L(p, h, P(m._payload), S);
      }
      if (Ur(m)) return y(p, h, m, S);
      if (Pr(m)) return k(p, h, m, S);
      Vl(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = l(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = zo(m, p.mode, S)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return L;
}
var dr = Vd(!0),
  Wd = Vd(!1),
  Pi = pn(null),
  Ri = null,
  qn = null,
  ou = null;
function au() {
  ou = qn = Ri = null;
}
function uu(e) {
  var t = Pi.current;
  ie(Pi), (e._currentValue = t);
}
function ga(e, t, n) {
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
function or(e, t) {
  (Ri = e),
    (ou = qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (ou !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
      if (Ri === null) throw Error(N(308));
      (qn = e), (Ri.dependencies = { lanes: 0, firstContext: e });
    } else qn = qn.next = e;
  return t;
}
var xn = null;
function su(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function Kd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), su(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ut(e, r)
  );
}
function Ut(e, t) {
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
var Gt = !1;
function cu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qd(e, t) {
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
function Ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ut(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), su(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ut(e, n)
  );
}
function ti(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ja(e, n);
  }
}
function Ws(e, t) {
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
function _i(e, t, n, r) {
  var l = e.updateQueue;
  Gt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = s) : (a.next = s),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var c = l.baseState;
    (o = 0), (d = s = u = null), (a = i);
    do {
      var f = a.lane,
        x = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
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
          switch (((f = t), (x = n), k.tag)) {
            case 1:
              if (((y = k.payload), typeof y == 'function')) {
                c = y.call(x, c, f);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = k.payload),
                (f = typeof y == 'function' ? y.call(x, c, f) : y),
                f == null)
              )
                break e;
              c = fe({}, c, f);
              break e;
            case 2:
              Gt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = l.effects),
          f === null ? (l.effects = [a]) : f.push(a));
      } else
        (x = {
          eventTime: x,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((s = d = x), (u = c)) : (d = d.next = x),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = c),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Dn |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function Ks(e, t, n) {
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
var Sl = {},
  Ct = pn(Sl),
  ul = pn(Sl),
  sl = pn(Sl);
function kn(e) {
  if (e === Sl) throw Error(N(174));
  return e;
}
function du(e, t) {
  switch ((ne(sl, t), ne(ul, e), ne(Ct, Sl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = qo(t, e));
  }
  ie(Ct), ne(Ct, t);
}
function fr() {
  ie(Ct), ie(ul), ie(sl);
}
function Yd(e) {
  kn(sl.current);
  var t = kn(Ct.current),
    n = qo(t, e.type);
  t !== n && (ne(ul, e), ne(Ct, n));
}
function fu(e) {
  ul.current === e && (ie(Ct), ie(ul));
}
var ce = pn(0);
function Li(e) {
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
var Lo = [];
function hu() {
  for (var e = 0; e < Lo.length; e++)
    Lo[e]._workInProgressVersionPrimary = null;
  Lo.length = 0;
}
var ni = Bt.ReactCurrentDispatcher,
  To = Bt.ReactCurrentBatchConfig,
  Nn = 0,
  de = null,
  xe = null,
  Ce = null,
  Ti = !1,
  Yr = !1,
  cl = 0,
  Em = 0;
function De() {
  throw Error(N(321));
}
function pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yt(e[n], t[n])) return !1;
  return !0;
}
function mu(e, t, n, r, l, i) {
  if (
    ((Nn = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ni.current = e === null || e.memoizedState === null ? Pm : Rm),
    (e = n(r, l)),
    Yr)
  ) {
    i = 0;
    do {
      if (((Yr = !1), (cl = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (Ce = xe = null),
        (t.updateQueue = null),
        (ni.current = _m),
        (e = n(r, l));
    } while (Yr);
  }
  if (
    ((ni.current = Ni),
    (t = xe !== null && xe.next !== null),
    (Nn = 0),
    (Ce = xe = de = null),
    (Ti = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function vu() {
  var e = cl !== 0;
  return (cl = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (de.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function st() {
  if (xe === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Ce === null ? de.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (xe = e);
  else {
    if (e === null) throw Error(N(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      Ce === null ? (de.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function dl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function No(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = xe,
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
      var d = s.lane;
      if ((Nn & d) === d)
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
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = c), (o = r)) : (u = u.next = c),
          (de.lanes |= d),
          (Dn |= d);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      yt(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (de.lanes |= i), (Dn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Do(e) {
  var t = st(),
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
    yt(i, t.memoizedState) || (We = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Xd() {}
function Jd(e, t) {
  var n = de,
    r = st(),
    l = t(),
    i = !yt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (We = !0)),
    (r = r.queue),
    yu(qd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fl(9, Zd.bind(null, n, r, l, t), void 0, null),
      Pe === null)
    )
      throw Error(N(349));
    Nn & 30 || Gd(n, t, l);
  }
  return l;
}
function Gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bd(t) && ef(e);
}
function qd(e, t, n) {
  return n(function () {
    bd(t) && ef(e);
  });
}
function bd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function ef(e) {
  var t = Ut(e, 1);
  t !== null && vt(t, e, 1, -1);
}
function Qs(e) {
  var t = Et();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Cm.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function fl(e, t, n, r) {
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
function tf() {
  return st().memoizedState;
}
function ri(e, t, n, r) {
  var l = Et();
  (de.flags |= e),
    (l.memoizedState = fl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xi(e, t, n, r) {
  var l = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var o = xe.memoizedState;
    if (((i = o.destroy), r !== null && pu(r, o.deps))) {
      l.memoizedState = fl(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (l.memoizedState = fl(1 | t, n, i, r));
}
function Ys(e, t) {
  return ri(8390656, 8, e, t);
}
function yu(e, t) {
  return Xi(2048, 8, e, t);
}
function nf(e, t) {
  return Xi(4, 2, e, t);
}
function rf(e, t) {
  return Xi(4, 4, e, t);
}
function lf(e, t) {
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
function of(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Xi(4, 4, lf.bind(null, t, e), n)
  );
}
function gu() {}
function af(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uf(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sf(e, t, n) {
  return Nn & 21
    ? (yt(n, t) || ((n = hd()), (de.lanes |= n), (Dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function xm(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = To.transition;
  To.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (To.transition = r);
  }
}
function cf() {
  return st().memoizedState;
}
function km(e, t, n) {
  var r = un(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    df(e))
  )
    ff(t, n);
  else if (((n = Kd(e, t, n, r)), n !== null)) {
    var l = Ae();
    vt(n, e, r, l), hf(n, t, r);
  }
}
function Cm(e, t, n) {
  var r = un(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (df(e)) ff(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = a), yt(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), su(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Kd(e, t, l, r)),
      n !== null && ((l = Ae()), vt(n, e, r, l), hf(n, t, r));
  }
}
function df(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function ff(e, t) {
  Yr = Ti = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ja(e, n);
  }
}
var Ni = {
    readContext: ut,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  Pm = {
    readContext: ut,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: Ys,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ri(4194308, 4, lf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Et();
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
        (e = e.dispatch = km.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qs,
    useDebugValue: gu,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = Qs(!1),
        t = e[0];
      return (e = xm.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        l = Et();
      if (se) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(N(349));
        Nn & 30 || Gd(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ys(qd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        fl(9, Zd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = Pe.identifierPrefix;
      if (se) {
        var n = zt,
          r = Ot;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = cl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Em++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Rm = {
    readContext: ut,
    useCallback: af,
    useContext: ut,
    useEffect: yu,
    useImperativeHandle: of,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: uf,
    useReducer: No,
    useRef: tf,
    useState: function () {
      return No(dl);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = st();
      return sf(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = No(dl)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Xd,
    useSyncExternalStore: Jd,
    useId: cf,
    unstable_isNewReconciler: !1,
  },
  _m = {
    readContext: ut,
    useCallback: af,
    useContext: ut,
    useEffect: yu,
    useImperativeHandle: of,
    useInsertionEffect: nf,
    useLayoutEffect: rf,
    useMemo: uf,
    useReducer: Do,
    useRef: tf,
    useState: function () {
      return Do(dl);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = st();
      return xe === null ? (t.memoizedState = e) : sf(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Do(dl)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Xd,
    useSyncExternalStore: Jd,
    useId: cf,
    unstable_isNewReconciler: !1,
  };
function dt(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ji = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = un(e),
      i = Ft(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = on(e, i, l)),
      t !== null && (vt(t, e, l, r), ti(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = un(e),
      i = Ft(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = on(e, i, l)),
      t !== null && (vt(t, e, l, r), ti(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = un(e),
      l = Ft(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = on(e, l, r)),
      t !== null && (vt(t, e, r, n), ti(t, e, r));
  },
};
function Xs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ll(n, r) || !ll(l, i)
        : !0
  );
}
function pf(e, t, n) {
  var r = !1,
    l = dn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = ut(i))
      : ((l = Qe(t) ? Ln : ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? sr(e, l) : dn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ji),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Js(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ji.enqueueReplaceState(t, t.state, null);
}
function Sa(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), cu(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = ut(i))
    : ((i = Qe(t) ? Ln : ze.current), (l.context = sr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (wa(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ji.enqueueReplaceState(l, l.state, null),
      _i(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function hr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += tp(r)), (r = r.return);
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
function Mo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Lm = typeof WeakMap == 'function' ? WeakMap : Map;
function mf(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Mi || ((Mi = !0), (Da = r)), Ea(e, t);
    }),
    n
  );
}
function vf(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ea(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ea(e, t),
          typeof r != 'function' &&
            (an === null ? (an = new Set([this])) : an.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function Gs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = $m.bind(null, e, t, n)), t.then(e, e));
}
function Zs(e) {
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
function qs(e, t, n, r, l) {
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
              : ((t = Ft(-1, 1)), (t.tag = 2), on(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Tm = Bt.ReactCurrentOwner,
  We = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? Wd(t, null, n, r) : dr(t, e.child, n, r);
}
function bs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    or(t, l),
    (r = mu(e, t, n, r, i, l)),
    (n = vu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        At(e, t, l))
      : (se && n && ru(t), (t.flags |= 1), Ue(e, t, r, l), t.child)
  );
}
function ec(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Ru(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), yf(e, t, i, r, l))
      : ((e = ai(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ll), n(o, r) && e.ref === t.ref)
    )
      return At(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = sn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ll(i, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), At(e, t, l);
  }
  return xa(e, t, n, r, l);
}
function gf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(er, Je),
        (Je |= n);
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
          ne(er, Je),
          (Je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(er, Je),
        (Je |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(er, Je),
      (Je |= r);
  return Ue(e, t, l, n), t.child;
}
function wf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function xa(e, t, n, r, l) {
  var i = Qe(n) ? Ln : ze.current;
  return (
    (i = sr(t, i)),
    or(t, l),
    (n = mu(e, t, n, r, i, l)),
    (r = vu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        At(e, t, l))
      : (se && r && ru(t), (t.flags |= 1), Ue(e, t, n, l), t.child)
  );
}
function tc(e, t, n, r, l) {
  if (Qe(n)) {
    var i = !0;
    xi(t);
  } else i = !1;
  if ((or(t, l), t.stateNode === null))
    li(e, t), pf(t, n, r), Sa(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = ut(s))
      : ((s = Qe(n) ? Ln : ze.current), (s = sr(t, s)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && Js(t, o, r, s)),
      (Gt = !1);
    var f = t.memoizedState;
    (o.state = f),
      _i(t, r, o, l),
      (u = t.memoizedState),
      a !== r || f !== u || Ke.current || Gt
        ? (typeof d == 'function' && (wa(t, n, d, r), (u = t.memoizedState)),
          (a = Gt || Xs(t, n, a, r, f, u, s))
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
      Qd(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : dt(t.type, a)),
      (o.props = s),
      (c = t.pendingProps),
      (f = o.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = ut(u))
        : ((u = Qe(n) ? Ln : ze.current), (u = sr(t, u)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== c || f !== u) && Js(t, o, r, u)),
      (Gt = !1),
      (f = t.memoizedState),
      (o.state = f),
      _i(t, r, o, l);
    var y = t.memoizedState;
    a !== c || f !== y || Ke.current || Gt
      ? (typeof x == 'function' && (wa(t, n, x, r), (y = t.memoizedState)),
        (s = Gt || Xs(t, n, s, r, f, y, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, y, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, u)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ka(e, t, n, r, i, l);
}
function ka(e, t, n, r, l, i) {
  wf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Bs(t, n, !1), At(e, t, i);
  (r = t.stateNode), (Tm.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = dr(t, e.child, null, i)), (t.child = dr(t, null, a, i)))
      : Ue(e, t, a, i),
    (t.memoizedState = r.state),
    l && Bs(t, n, !0),
    t.child
  );
}
function Sf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? As(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && As(e, t.context, !1),
    du(e, t.containerInfo);
}
function nc(e, t, n, r, l) {
  return cr(), iu(l), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var Ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ef(e, t, n) {
  var r = t.pendingProps,
    l = ce.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ne(ce, l & 1),
    e === null)
  )
    return (
      ya(t),
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
                : (i = qi(o, r, 0, null)),
              (e = _n(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Pa(n)),
              (t.memoizedState = Ca),
              e)
            : wu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Nm(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = sn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = sn(a, i)) : ((i = _n(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Pa(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ca),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = sn(i, { mode: 'visible', children: r.children })),
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
function wu(e, t) {
  return (
    (t = qi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wl(e, t, n, r) {
  return (
    r !== null && iu(r),
    dr(t, e.child, null, n),
    (e = wu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Nm(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Mo(Error(N(422)))), Wl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = qi({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = _n(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && dr(t, e.child, null, o),
          (t.child.memoizedState = Pa(o)),
          (t.memoizedState = Ca),
          i);
  if (!(t.mode & 1)) return Wl(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(N(419))), (r = Mo(i, r, void 0)), Wl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), We || a)) {
    if (((r = Pe), r !== null)) {
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
          ((i.retryLane = l), Ut(e, l), vt(r, e, l, -1));
    }
    return Pu(), (r = Mo(Error(N(421)))), Wl(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ze = ln(l.nextSibling)),
      (qe = t),
      (se = !0),
      (pt = null),
      e !== null &&
        ((lt[it++] = Ot),
        (lt[it++] = zt),
        (lt[it++] = Tn),
        (Ot = e.id),
        (zt = e.overflow),
        (Tn = t)),
      (t = wu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ga(e.return, t, n);
}
function Oo(e, t, n, r, l) {
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
function xf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Ue(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rc(e, n, t);
        else if (e.tag === 19) rc(e, n, t);
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
  if ((ne(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Li(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Oo(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Li(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Oo(t, !0, n, null, i);
        break;
      case 'together':
        Oo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function li(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function At(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Dm(e, t, n) {
  switch (t.tag) {
    case 3:
      Sf(t), cr();
      break;
    case 5:
      Yd(t);
      break;
    case 1:
      Qe(t.type) && xi(t);
      break;
    case 4:
      du(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ne(Pi, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ef(e, t, n)
            : (ne(ce, ce.current & 1),
              (e = At(e, t, n)),
              e !== null ? e.sibling : null);
      ne(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ne(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gf(e, t, n);
  }
  return At(e, t, n);
}
var kf, Ra, Cf, Pf;
kf = function (e, t) {
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
Ra = function () {};
Cf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kn(Ct.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = Xo(e, l)), (r = Xo(e, r)), (i = []);
        break;
      case 'select':
        (l = fe({}, l, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = Zo(e, l)), (r = Zo(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Si);
    }
    bo(n, r);
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
            (Zr.hasOwnProperty(s)
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
                (Zr.hasOwnProperty(s)
                  ? (u != null && s === 'onScroll' && le('scroll', e),
                    i || a === u || (i = []))
                  : (i = i || []).push(s, u));
    }
    n && (i = i || []).push('style', n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Pf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dr(e, t) {
  if (!se)
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
function Mm(e, t, n) {
  var r = t.pendingProps;
  switch ((lu(t), t.tag)) {
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
      return Qe(t.type) && Ei(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        fr(),
        ie(Ke),
        ie(ze),
        hu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($l(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (za(pt), (pt = null)))),
        Ra(e, t),
        Me(t),
        null
      );
    case 5:
      fu(t);
      var l = kn(sl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Me(t), null;
        }
        if (((e = kn(Ct.current)), $l(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[xt] = t), (r[al] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              le('cancel', r), le('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              le('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Br.length; l++) le(Br[l], r);
              break;
            case 'source':
              le('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              le('error', r), le('load', r);
              break;
            case 'details':
              le('toggle', r);
              break;
            case 'input':
              fs(r, i), le('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                le('invalid', r);
              break;
            case 'textarea':
              ps(r, i), le('invalid', r);
          }
          bo(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Hl(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Hl(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : Zr.hasOwnProperty(o) &&
                  a != null &&
                  o === 'onScroll' &&
                  le('scroll', r);
            }
          switch (n) {
            case 'input':
              Ol(r), hs(r, i, !0);
              break;
            case 'textarea':
              Ol(r), ms(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Si);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = qc(n)),
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
            (e[xt] = t),
            (e[al] = r),
            kf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ea(n, r)), n)) {
              case 'dialog':
                le('cancel', e), le('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                le('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Br.length; l++) le(Br[l], e);
                l = r;
                break;
              case 'source':
                le('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                le('error', e), le('load', e), (l = r);
                break;
              case 'details':
                le('toggle', e), (l = r);
                break;
              case 'input':
                fs(e, r), (l = Xo(e, r)), le('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = fe({}, r, { value: void 0 })),
                  le('invalid', e);
                break;
              case 'textarea':
                ps(e, r), (l = Zo(e, r)), le('invalid', e);
                break;
              default:
                l = r;
            }
            bo(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === 'style'
                  ? td(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && bc(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && qr(e, u)
                        : typeof u == 'number' && qr(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Zr.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && le('scroll', e)
                          : u != null && Va(e, i, u, o));
              }
            switch (n) {
              case 'input':
                Ol(e), hs(e, r, !1);
                break;
              case 'textarea':
                Ol(e), ms(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + cn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? nr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      nr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Si);
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
      if (e && t.stateNode != null) Pf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = kn(sl.current)), kn(Ct.current), $l(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (i = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (ie(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Ze !== null && t.mode & 1 && !(t.flags & 128))
          $d(), cr(), (t.flags |= 98560), (i = !1);
        else if (((i = $l(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[xt] = t;
          } else
            cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (i = !1);
        } else pt !== null && (za(pt), (pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? ke === 0 && (ke = 3) : Pu())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        fr(), Ra(e, t), e === null && il(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return uu(t.type._context), Me(t), null;
    case 17:
      return Qe(t.type) && Ei(), Me(t), null;
    case 19:
      if ((ie(ce), (i = t.memoizedState), i === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Dr(i, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Li(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Dr(i, !1),
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
                return ne(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > pr &&
            ((t.flags |= 128), (r = !0), Dr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Li(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Dr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !se)
            )
              return Me(t), null;
          } else
            2 * ve() - i.renderingStartTime > pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Dr(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = ce.current),
          ne(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Cu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Je & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function Om(e, t) {
  switch ((lu(t), t.tag)) {
    case 1:
      return (
        Qe(t.type) && Ei(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        fr(),
        ie(Ke),
        ie(ze),
        hu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fu(t), null;
    case 13:
      if (
        (ie(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ce), null;
    case 4:
      return fr(), null;
    case 10:
      return uu(t.type._context), null;
    case 22:
    case 23:
      return Cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kl = !1,
  Oe = !1,
  zm = typeof WeakSet == 'function' ? WeakSet : Set,
  j = null;
function bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function _a(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var lc = !1;
function Fm(e, t) {
  if (((ca = yi), (e = Td()), nu(e))) {
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
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var x;
              c !== n || (l !== 0 && c.nodeType !== 3) || (a = o + l),
                c !== i || (r !== 0 && c.nodeType !== 3) || (u = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (x = c.firstChild) !== null;

            )
              (f = c), (c = x);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++s === l && (a = o),
                f === i && ++d === r && (u = o),
                (x = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (da = { focusedElem: e, selectionRange: n }, yi = !1, j = t; j !== null; )
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
                      t.elementType === t.type ? k : dt(t.type, k),
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
          me(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (y = lc), (lc = !1), y;
}
function Xr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && _a(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Gi(e, t) {
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
function La(e) {
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
function Rf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[al], delete t[pa], delete t[ym], delete t[gm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _f(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ic(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _f(e.return)) return null;
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
function Ta(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Si));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ta(e, t, n), e = e.sibling; e !== null; ) Ta(e, t, n), (e = e.sibling);
}
function Na(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Na(e, t, n), e = e.sibling; e !== null; ) Na(e, t, n), (e = e.sibling);
}
var Le = null,
  ft = !1;
function Yt(e, t, n) {
  for (n = n.child; n !== null; ) Lf(e, t, n), (n = n.sibling);
}
function Lf(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == 'function')
    try {
      kt.onCommitFiberUnmount($i, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || bn(n, t);
    case 6:
      var r = Le,
        l = ft;
      (Le = null),
        Yt(e, t, n),
        (Le = r),
        (ft = l),
        Le !== null &&
          (ft
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode));
      break;
    case 18:
      Le !== null &&
        (ft
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ro(e.parentNode, n)
              : e.nodeType === 1 && Ro(e, n),
            nl(e))
          : Ro(Le, n.stateNode));
      break;
    case 4:
      (r = Le),
        (l = ft),
        (Le = n.stateNode.containerInfo),
        (ft = !0),
        Yt(e, t, n),
        (Le = r),
        (ft = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && _a(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Yt(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          me(n, t, a);
        }
      Yt(e, t, n);
      break;
    case 21:
      Yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), Yt(e, t, n), (Oe = r))
        : Yt(e, t, n);
      break;
    default:
      Yt(e, t, n);
  }
}
function oc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zm()),
      t.forEach(function (r) {
        var l = Wm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ct(e, t) {
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
              (Le = a.stateNode), (ft = !1);
              break e;
            case 3:
              (Le = a.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Le = a.stateNode.containerInfo), (ft = !0);
              break e;
          }
          a = a.return;
        }
        if (Le === null) throw Error(N(160));
        Lf(i, o, l), (Le = null), (ft = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        me(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tf(t, e), (t = t.sibling);
}
function Tf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), St(e), r & 4)) {
        try {
          Xr(3, e, e.return), Gi(3, e);
        } catch (k) {
          me(e, e.return, k);
        }
        try {
          Xr(5, e, e.return);
        } catch (k) {
          me(e, e.return, k);
        }
      }
      break;
    case 1:
      ct(t, e), St(e), r & 512 && n !== null && bn(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        St(e),
        r & 512 && n !== null && bn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          qr(l, '');
        } catch (k) {
          me(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && Gc(l, i),
              ea(a, o);
            var s = ea(a, i);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                c = u[o + 1];
              d === 'style'
                ? td(l, c)
                : d === 'dangerouslySetInnerHTML'
                  ? bc(l, c)
                  : d === 'children'
                    ? qr(l, c)
                    : Va(l, d, c, s);
            }
            switch (a) {
              case 'input':
                Jo(l, i);
                break;
              case 'textarea':
                Zc(l, i);
                break;
              case 'select':
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? nr(l, !!i.multiple, x, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? nr(l, !!i.multiple, i.defaultValue, !0)
                      : nr(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[al] = i;
          } catch (k) {
            me(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ct(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          me(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          nl(t.containerInfo);
        } catch (k) {
          me(e, e.return, k);
        }
      break;
    case 4:
      ct(t, e), St(e);
      break;
    case 13:
      ct(t, e),
        St(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (xu = ve())),
        r & 4 && oc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (s = Oe) || d), ct(t, e), (Oe = s)) : ct(t, e),
        St(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !d && e.mode & 1)
        )
          for (j = e, d = e.child; d !== null; ) {
            for (c = j = d; j !== null; ) {
              switch (((f = j), (x = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xr(4, f, f.return);
                  break;
                case 1:
                  bn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (k) {
                      me(r, n, k);
                    }
                  }
                  break;
                case 5:
                  bn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    uc(c);
                    continue;
                  }
              }
              x !== null ? ((x.return = f), (j = x)) : uc(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
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
                      (a.style.display = ed('display', o)));
              } catch (k) {
                me(e, e.return, k);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = s ? '' : c.memoizedProps;
              } catch (k) {
                me(e, e.return, k);
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
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), St(e), r & 4 && oc(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_f(n)) {
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
          r.flags & 32 && (qr(l, ''), (r.flags &= -33));
          var i = ic(e);
          Na(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = ic(e);
          Ta(e, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jm(e, t, n) {
  (j = e), Nf(e);
}
function Nf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Kl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Oe;
        a = Kl;
        var s = Oe;
        if (((Kl = o), (Oe = u) && !s))
          for (j = l; j !== null; )
            (o = j),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? sc(l)
                : u !== null
                  ? ((u.return = o), (j = u))
                  : sc(l);
        for (; i !== null; ) (j = i), Nf(i), (i = i.sibling);
        (j = l), (Kl = a), (Oe = s);
      }
      ac(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : ac(e);
  }
}
function ac(e) {
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
              Oe || Gi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Ks(t, i, r);
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
                Ks(t, o, n);
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
                  var d = s.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && nl(c);
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
        Oe || (t.flags & 512 && La(t));
      } catch (f) {
        me(t, t.return, f);
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
function uc(e) {
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
function sc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Gi(4, t);
          } catch (u) {
            me(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              me(t, l, u);
            }
          }
          var i = t.return;
          try {
            La(t);
          } catch (u) {
            me(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            La(t);
          } catch (u) {
            me(t, o, u);
          }
      }
    } catch (u) {
      me(t, t.return, u);
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
var Im = Math.ceil,
  Di = Bt.ReactCurrentDispatcher,
  Su = Bt.ReactCurrentOwner,
  at = Bt.ReactCurrentBatchConfig,
  X = 0,
  Pe = null,
  we = null,
  Te = 0,
  Je = 0,
  er = pn(0),
  ke = 0,
  hl = null,
  Dn = 0,
  Zi = 0,
  Eu = 0,
  Jr = null,
  Ve = null,
  xu = 0,
  pr = 1 / 0,
  Nt = null,
  Mi = !1,
  Da = null,
  an = null,
  Ql = !1,
  en = null,
  Oi = 0,
  Gr = 0,
  Ma = null,
  ii = -1,
  oi = 0;
function Ae() {
  return X & 6 ? ve() : ii !== -1 ? ii : (ii = ve());
}
function un(e) {
  return e.mode & 1
    ? X & 2 && Te !== 0
      ? Te & -Te
      : Sm.transition !== null
        ? (oi === 0 && (oi = hd()), oi)
        : ((e = Z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sd(e.type))),
          e)
    : 1;
}
function vt(e, t, n, r) {
  if (50 < Gr) throw ((Gr = 0), (Ma = null), Error(N(185)));
  yl(e, n, r),
    (!(X & 2) || e !== Pe) &&
      (e === Pe && (!(X & 2) && (Zi |= n), ke === 4 && qt(e, Te)),
      Ye(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((pr = ve() + 500), Yi && mn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  Sp(e, t);
  var r = vi(e, e === Pe ? Te : 0);
  if (r === 0)
    n !== null && gs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gs(n), t === 1))
      e.tag === 0 ? wm(cc.bind(null, e)) : Ad(cc.bind(null, e)),
        mm(function () {
          !(X & 6) && mn();
        }),
        (n = null);
    else {
      switch (pd(r)) {
        case 1:
          n = Xa;
          break;
        case 4:
          n = dd;
          break;
        case 16:
          n = mi;
          break;
        case 536870912:
          n = fd;
          break;
        default:
          n = mi;
      }
      n = Uf(n, Df.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Df(e, t) {
  if (((ii = -1), (oi = 0), X & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (ar() && e.callbackNode !== n) return null;
  var r = vi(e, e === Pe ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zi(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var i = Of();
    (Pe !== e || Te !== t) && ((Nt = null), (pr = ve() + 500), Rn(e, t));
    do
      try {
        Bm();
        break;
      } catch (a) {
        Mf(e, a);
      }
    while (!0);
    au(),
      (Di.current = i),
      (X = l),
      we !== null ? (t = 0) : ((Pe = null), (Te = 0), (t = ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ia(e)), l !== 0 && ((r = l), (t = Oa(e, l)))), t === 1)
    )
      throw ((n = hl), Rn(e, 0), qt(e, r), Ye(e, ve()), n);
    if (t === 6) qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Um(l) &&
          ((t = zi(e, r)),
          t === 2 && ((i = ia(e)), i !== 0 && ((r = i), (t = Oa(e, i)))),
          t === 1))
      )
        throw ((n = hl), Rn(e, 0), qt(e, r), Ye(e, ve()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Sn(e, Ve, Nt);
          break;
        case 3:
          if (
            (qt(e, r), (r & 130023424) === r && ((t = xu + 500 - ve()), 10 < t))
          ) {
            if (vi(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ha(Sn.bind(null, e, Ve, Nt), t);
            break;
          }
          Sn(e, Ve, Nt);
          break;
        case 4:
          if ((qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - mt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ve() - r),
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
                          : 1960 * Im(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ha(Sn.bind(null, e, Ve, Nt), r);
            break;
          }
          Sn(e, Ve, Nt);
          break;
        case 5:
          Sn(e, Ve, Nt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ye(e, ve()), e.callbackNode === n ? Df.bind(null, e) : null;
}
function Oa(e, t) {
  var n = Jr;
  return (
    e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
    (e = zi(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && za(t)),
    e
  );
}
function za(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function Um(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!yt(i(), l)) return !1;
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
function qt(e, t) {
  for (
    t &= ~Eu,
      t &= ~Zi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cc(e) {
  if (X & 6) throw Error(N(327));
  ar();
  var t = vi(e, 0);
  if (!(t & 1)) return Ye(e, ve()), null;
  var n = zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ia(e);
    r !== 0 && ((t = r), (n = Oa(e, r)));
  }
  if (n === 1) throw ((n = hl), Rn(e, 0), qt(e, t), Ye(e, ve()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Sn(e, Ve, Nt),
    Ye(e, ve()),
    null
  );
}
function ku(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((pr = ve() + 500), Yi && mn());
  }
}
function Mn(e) {
  en !== null && en.tag === 0 && !(X & 6) && ar();
  var t = X;
  X |= 1;
  var n = at.transition,
    r = Z;
  try {
    if (((at.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (at.transition = n), (X = t), !(X & 6) && mn();
  }
}
function Cu() {
  (Je = er.current), ie(er);
}
function Rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pm(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((lu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ei();
          break;
        case 3:
          fr(), ie(Ke), ie(ze), hu();
          break;
        case 5:
          fu(r);
          break;
        case 4:
          fr();
          break;
        case 13:
          ie(ce);
          break;
        case 19:
          ie(ce);
          break;
        case 10:
          uu(r.type._context);
          break;
        case 22:
        case 23:
          Cu();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (we = e = sn(e.current, null)),
    (Te = Je = t),
    (ke = 0),
    (hl = null),
    (Eu = Zi = Dn = 0),
    (Ve = Jr = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((n = xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    xn = null;
  }
  return e;
}
function Mf(e, t) {
  do {
    var n = we;
    try {
      if ((au(), (ni.current = Ni), Ti)) {
        for (var r = de.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ti = !1;
      }
      if (
        ((Nn = 0),
        (Ce = xe = de = null),
        (Yr = !1),
        (cl = 0),
        (Su.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (hl = t), (we = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Te),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = Zs(o);
          if (x !== null) {
            (x.flags &= -257),
              qs(x, o, a, i, t),
              x.mode & 1 && Gs(i, s, t),
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
              Gs(i, s, t), Pu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (se && a.mode & 1) {
          var L = Zs(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              qs(L, o, a, i, t),
              iu(hr(u, a));
            break e;
          }
        }
        (i = u = hr(u, a)),
          ke !== 4 && (ke = 2),
          Jr === null ? (Jr = [i]) : Jr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = mf(i, u, t);
              Ws(i, p);
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
                    (an === null || !an.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = vf(i, a, t);
                Ws(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ff(n);
    } catch (R) {
      (t = R), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Of() {
  var e = Di.current;
  return (Di.current = Ni), e === null ? Ni : e;
}
function Pu() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Pe === null || (!(Dn & 268435455) && !(Zi & 268435455)) || qt(Pe, Te);
}
function zi(e, t) {
  var n = X;
  X |= 2;
  var r = Of();
  (Pe !== e || Te !== t) && ((Nt = null), Rn(e, t));
  do
    try {
      Am();
      break;
    } catch (l) {
      Mf(e, l);
    }
  while (!0);
  if ((au(), (X = n), (Di.current = r), we !== null)) throw Error(N(261));
  return (Pe = null), (Te = 0), ke;
}
function Am() {
  for (; we !== null; ) zf(we);
}
function Bm() {
  for (; we !== null && !dp(); ) zf(we);
}
function zf(e) {
  var t = If(e.alternate, e, Je);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ff(e) : (we = t),
    (Su.current = null);
}
function Ff(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Om(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (we = null);
        return;
      }
    } else if (((n = Mm(n, t, Je)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function Sn(e, t, n) {
  var r = Z,
    l = at.transition;
  try {
    (at.transition = null), (Z = 1), Hm(e, t, n, r);
  } finally {
    (at.transition = l), (Z = r);
  }
  return null;
}
function Hm(e, t, n, r) {
  do ar();
  while (en !== null);
  if (X & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Ep(e, i),
    e === Pe && ((we = Pe = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ql ||
      ((Ql = !0),
      Uf(mi, function () {
        return ar(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = at.transition), (at.transition = null);
    var o = Z;
    Z = 1;
    var a = X;
    (X |= 4),
      (Su.current = null),
      Fm(e, n),
      Tf(n, e),
      am(da),
      (yi = !!ca),
      (da = ca = null),
      (e.current = n),
      jm(n),
      fp(),
      (X = a),
      (Z = o),
      (at.transition = i);
  } else e.current = n;
  if (
    (Ql && ((Ql = !1), (en = e), (Oi = l)),
    (i = e.pendingLanes),
    i === 0 && (an = null),
    mp(n.stateNode),
    Ye(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Mi) throw ((Mi = !1), (e = Da), (Da = null), e);
  return (
    Oi & 1 && e.tag !== 0 && ar(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ma ? Gr++ : ((Gr = 0), (Ma = e))) : (Gr = 0),
    mn(),
    null
  );
}
function ar() {
  if (en !== null) {
    var e = pd(Oi),
      t = at.transition,
      n = Z;
    try {
      if (((at.transition = null), (Z = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), (Oi = 0), X & 6)) throw Error(N(331));
        var l = X;
        for (X |= 4, j = e.current; j !== null; ) {
          var i = j,
            o = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (j = s; j !== null; ) {
                  var d = j;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xr(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (j = c);
                  else
                    for (; j !== null; ) {
                      d = j;
                      var f = d.sibling,
                        x = d.return;
                      if ((Rf(d), d === s)) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = x), (j = f);
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
                    Xr(9, i, i.return);
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
                      Gi(9, a);
                  }
                } catch (R) {
                  me(a, a.return, R);
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
          ((X = l), mn(), kt && typeof kt.onPostCommitFiberRoot == 'function')
        )
          try {
            kt.onPostCommitFiberRoot($i, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (at.transition = t);
    }
  }
  return !1;
}
function dc(e, t, n) {
  (t = hr(n, t)),
    (t = mf(e, t, 1)),
    (e = on(e, t, 1)),
    (t = Ae()),
    e !== null && (yl(e, 1, t), Ye(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) dc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (an === null || !an.has(r)))
        ) {
          (e = hr(n, e)),
            (e = vf(t, e, 1)),
            (t = on(t, e, 1)),
            (e = Ae()),
            t !== null && (yl(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $m(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Te & n) === n &&
      (ke === 4 || (ke === 3 && (Te & 130023424) === Te && 500 > ve() - xu)
        ? Rn(e, 0)
        : (Eu |= n)),
    Ye(e, t);
}
function jf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jl), (jl <<= 1), !(jl & 130023424) && (jl = 4194304))
      : (t = 1));
  var n = Ae();
  (e = Ut(e, t)), e !== null && (yl(e, t, n), Ye(e, n));
}
function Vm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jf(e, n);
}
function Wm(e, t) {
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
  r !== null && r.delete(t), jf(e, n);
}
var If;
If = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ke.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), Dm(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), se && t.flags & 1048576 && Bd(t, Ci, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      li(e, t), (e = t.pendingProps);
      var l = sr(t, ze.current);
      or(t, n), (l = mu(null, t, r, e, l, n));
      var i = vu();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Qe(r) ? ((i = !0), xi(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            cu(t),
            (l.updater = Ji),
            (t.stateNode = l),
            (l._reactInternals = t),
            Sa(t, r, e, n),
            (t = ka(null, t, r, !0, i, n)))
          : ((t.tag = 0), se && i && ru(t), Ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (li(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Qm(r)),
          (e = dt(r, e)),
          l)
        ) {
          case 0:
            t = xa(null, t, r, e, n);
            break e;
          case 1:
            t = tc(null, t, r, e, n);
            break e;
          case 11:
            t = bs(null, t, r, e, n);
            break e;
          case 14:
            t = ec(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : dt(r, l)),
        xa(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : dt(r, l)),
        tc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Sf(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Qd(e, t),
          _i(t, r, null, n);
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
            (l = hr(Error(N(423)), t)), (t = nc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = hr(Error(N(424)), t)), (t = nc(e, t, r, n, l));
            break e;
          } else
            for (
              Ze = ln(t.stateNode.containerInfo.firstChild),
                qe = t,
                se = !0,
                pt = null,
                n = Wd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((cr(), r === l)) {
            t = At(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yd(t),
        e === null && ya(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        fa(r, l) ? (o = null) : i !== null && fa(r, i) && (t.flags |= 32),
        wf(e, t),
        Ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ya(t), null;
    case 13:
      return Ef(e, t, n);
    case 4:
      return (
        du(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = dr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : dt(r, l)),
        bs(e, t, r, l, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          ne(Pi, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (yt(i.value, o)) {
            if (i.children === l.children && !Ke.current) {
              t = At(e, t, n);
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
                      (u = Ft(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      ga(i.return, n, t),
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
                  ga(o, n, t),
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
        Ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        or(t, n),
        (l = ut(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = dt(r, t.pendingProps)),
        (l = dt(r.type, l)),
        ec(e, t, r, l, n)
      );
    case 15:
      return yf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : dt(r, l)),
        li(e, t),
        (t.tag = 1),
        Qe(r) ? ((e = !0), xi(t)) : (e = !1),
        or(t, n),
        pf(t, r, l),
        Sa(t, r, l, n),
        ka(null, t, r, !0, e, n)
      );
    case 19:
      return xf(e, t, n);
    case 22:
      return gf(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Uf(e, t) {
  return cd(e, t);
}
function Km(e, t, n, r) {
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
function ot(e, t, n, r) {
  return new Km(e, t, n, r);
}
function Ru(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qm(e) {
  if (typeof e == 'function') return Ru(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ka)) return 11;
    if (e === Qa) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
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
function ai(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Ru(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Wn:
        return _n(n.children, l, i, t);
      case Wa:
        (o = 8), (l |= 8);
        break;
      case Wo:
        return (
          (e = ot(12, n, t, l | 2)), (e.elementType = Wo), (e.lanes = i), e
        );
      case Ko:
        return (e = ot(13, n, t, l)), (e.elementType = Ko), (e.lanes = i), e;
      case Qo:
        return (e = ot(19, n, t, l)), (e.elementType = Qo), (e.lanes = i), e;
      case Yc:
        return qi(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Kc:
              o = 10;
              break e;
            case Qc:
              o = 9;
              break e;
            case Ka:
              o = 11;
              break e;
            case Qa:
              o = 14;
              break e;
            case Jt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = ot(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function _n(e, t, n, r) {
  return (e = ot(7, e, r, t)), (e.lanes = n), e;
}
function qi(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)),
    (e.elementType = Yc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function zo(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function Fo(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ym(e, t, n, r, l) {
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
    (this.eventTimes = mo(0)),
    (this.expirationTimes = mo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function _u(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new Ym(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cu(i),
    e
  );
}
function Xm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Af(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
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
    if (Qe(n)) return Ud(e, n, t);
  }
  return t;
}
function Bf(e, t, n, r, l, i, o, a, u) {
  return (
    (e = _u(n, r, !0, e, l, i, o, a, u)),
    (e.context = Af(null)),
    (n = e.current),
    (r = Ae()),
    (l = un(n)),
    (i = Ft(r, l)),
    (i.callback = t ?? null),
    on(n, i, l),
    (e.current.lanes = l),
    yl(e, l, r),
    Ye(e, r),
    e
  );
}
function bi(e, t, n, r) {
  var l = t.current,
    i = Ae(),
    o = un(l);
  return (
    (n = Af(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ft(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = on(l, t, o)),
    e !== null && (vt(e, l, o, i), ti(e, l, o)),
    o
  );
}
function Fi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Lu(e, t) {
  fc(e, t), (e = e.alternate) && fc(e, t);
}
function Jm() {
  return null;
}
var Hf =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Tu(e) {
  this._internalRoot = e;
}
eo.prototype.render = Tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  bi(e, t, null, null);
};
eo.prototype.unmount = Tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function () {
      bi(null, e, null, null);
    }),
      (t[It] = null);
  }
};
function eo(e) {
  this._internalRoot = e;
}
eo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
    Zt.splice(n, 0, e), n === 0 && wd(e);
  }
};
function Nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function to(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function hc() {}
function Gm(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var s = Fi(o);
        i.call(s);
      };
    }
    var o = Bf(t, r, e, 0, null, !1, !1, '', hc);
    return (
      (e._reactRootContainer = o),
      (e[It] = o.current),
      il(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = Fi(u);
      a.call(s);
    };
  }
  var u = _u(e, 0, !1, null, null, !1, !1, '', hc);
  return (
    (e._reactRootContainer = u),
    (e[It] = u.current),
    il(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      bi(t, u, n, r);
    }),
    u
  );
}
function no(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = Fi(o);
        a.call(u);
      };
    }
    bi(t, o, e, l);
  } else o = Gm(n, t, e, l, r);
  return Fi(o);
}
md = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ar(t.pendingLanes);
        n !== 0 &&
          (Ja(t, n | 1), Ye(t, ve()), !(X & 6) && ((pr = ve() + 500), mn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Ut(e, 1);
        if (r !== null) {
          var l = Ae();
          vt(r, e, 1, l);
        }
      }),
        Lu(e, 1);
  }
};
Ga = function (e) {
  if (e.tag === 13) {
    var t = Ut(e, 134217728);
    if (t !== null) {
      var n = Ae();
      vt(t, e, 134217728, n);
    }
    Lu(e, 134217728);
  }
};
vd = function (e) {
  if (e.tag === 13) {
    var t = un(e),
      n = Ut(e, t);
    if (n !== null) {
      var r = Ae();
      vt(n, e, t, r);
    }
    Lu(e, t);
  }
};
yd = function () {
  return Z;
};
gd = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
na = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Jo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var l = Qi(r);
            if (!l) throw Error(N(90));
            Jc(r), Jo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Zc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && nr(e, !!n.multiple, t, !1);
  }
};
ld = ku;
id = Mn;
var Zm = { usingClientEntryPoint: !1, Events: [wl, Xn, Qi, nd, rd, ku] },
  Mr = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  qm = {
    bundleType: Mr.bundleType,
    version: Mr.version,
    rendererPackageName: Mr.rendererPackageName,
    rendererConfig: Mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ud(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mr.findFiberByHostInstance || Jm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yl.isDisabled && Yl.supportsFiber)
    try {
      ($i = Yl.inject(qm)), (kt = Yl);
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zm;
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Nu(t)) throw Error(N(200));
  return Xm(e, t, null, n);
};
et.createRoot = function (e, t) {
  if (!Nu(e)) throw Error(N(299));
  var n = !1,
    r = '',
    l = Hf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = _u(e, 1, !1, null, null, n, !1, r, l)),
    (e[It] = t.current),
    il(e.nodeType === 8 ? e.parentNode : e),
    new Tu(t)
  );
};
et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = ud(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
  return Mn(e);
};
et.hydrate = function (e, t, n) {
  if (!to(t)) throw Error(N(200));
  return no(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
  if (!Nu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = Hf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Bf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[It] = t.current),
    il(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new eo(t);
};
et.render = function (e, t, n) {
  if (!to(t)) throw Error(N(200));
  return no(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
  if (!to(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Mn(function () {
        no(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[It] = null);
        });
      }),
      !0)
    : !1;
};
et.unstable_batchedUpdates = ku;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!to(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return no(e, t, n, !1, r);
};
et.version = '18.3.1-next-f1338f8080-20240426';
function $f() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($f);
    } catch (e) {
      console.error(e);
    }
}
$f(), (Hc.exports = et);
var Vf = Hc.exports;
const bm = Qh(Vf),
  ev = Xh({ __proto__: null, default: bm }, [Vf]);
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ue.apply(this, arguments)
  );
}
var ge;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ge || (ge = {}));
const pc = 'popstate';
function f0(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return pl(
      '',
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : fn(l);
  }
  return nv(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function mr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function tv() {
  return Math.random().toString(36).substr(2, 8);
}
function mc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function pl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ue(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Ht(t) : t,
      { state: n, key: (t && t.key) || r || tv() },
    )
  );
}
function fn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Ht(e) {
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
function nv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = ge.Pop,
    u = null,
    s = d();
  s == null && ((s = 0), o.replaceState(ue({}, o.state, { idx: s }), ''));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    a = ge.Pop;
    let L = d(),
      p = L == null ? null : L - s;
    (s = L), u && u({ action: a, location: k.location, delta: p });
  }
  function f(L, p) {
    a = ge.Push;
    let h = pl(k.location, L, p);
    s = d() + 1;
    let m = mc(h, s),
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
    a = ge.Replace;
    let h = pl(k.location, L, p);
    s = d();
    let m = mc(h, s),
      S = k.createHref(h);
    o.replaceState(m, '', S),
      i && u && u({ action: a, location: k.location, delta: 0 });
  }
  function y(L) {
    let p = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      h = typeof L == 'string' ? L : fn(L);
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
        l.addEventListener(pc, c),
        (u = L),
        () => {
          l.removeEventListener(pc, c), (u = null);
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
    push: f,
    replace: x,
    go(L) {
      return o.go(L);
    },
  };
  return k;
}
var b;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(b || (b = {}));
const rv = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function lv(e) {
  return e.index === !0;
}
function ml(e, t, n, r) {
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
        lv(l))
      ) {
        let u = ue({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ue({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = ml(l.children, t, o, r)), u
        );
      }
    })
  );
}
function Mt(e, t, n) {
  return n === void 0 && (n = '/'), ui(e, t, n, !1);
}
function ui(e, t, n, r) {
  let l = typeof t == 'string' ? Ht(t) : t,
    i = gt(l.pathname || '/', n);
  if (i == null) return null;
  let o = Wf(e);
  ov(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let s = yv(i);
    a = mv(o[u], s, r);
  }
  return a;
}
function iv(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Wf(e, t, n, r) {
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
      d = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (V(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".'),
      ),
      Wf(i.children, t, d, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: hv(s, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
      else for (let u of Kf(i.path)) l(i, o, u);
    }),
    t
  );
}
function Kf(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = Kf(r.join('/')),
    a = [];
  return (
    a.push(...o.map((u) => (u === '' ? i : [i, u].join('/')))),
    l && a.push(...o),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function ov(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : pv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const av = /^:[\w-]+$/,
  uv = 3,
  sv = 2,
  cv = 1,
  dv = 10,
  fv = -2,
  vc = (e) => e === '*';
function hv(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(vc) && (r += fv),
    t && (r += sv),
    n
      .filter((l) => !vc(l))
      .reduce((l, i) => l + (av.test(i) ? uv : i === '' ? cv : dv), r)
  );
}
function pv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function mv(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    i = '/',
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      d = i === '/' ? t : t.slice(i.length) || '/',
      c = ji(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        d,
      ),
      f = u.route;
    if (
      (!c &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (c = ji(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d,
        )),
      !c)
    )
      return null;
    Object.assign(l, c.params),
      o.push({
        params: l,
        pathname: Pt([i, c.pathname]),
        pathnameBase: Sv(Pt([i, c.pathnameBase])),
        route: f,
      }),
      c.pathnameBase !== '/' && (i = Pt([i, c.pathnameBase]));
  }
  return o;
}
function ji(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = vv(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((s, d, c) => {
      let { paramName: f, isOptional: x } = d;
      if (f === '*') {
        let k = a[c] || '';
        o = i.slice(0, i.length - k.length).replace(/(.)\/+$/, '$1');
      }
      const y = a[c];
      return (
        x && !y ? (s[f] = void 0) : (s[f] = (y || '').replace(/%2F/g, '/')), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function vv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    mr(
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
function yv(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      mr(
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
function gt(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function gv(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Ht(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : wv(n, t)) : t,
    search: Ev(r),
    hash: xv(l),
  };
}
function wv(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function jo(e, t, n, r) {
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
function Qf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Du(e, t) {
  let n = Qf(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Mu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Ht(e))
    : ((l = ue({}, e)),
      V(
        !l.pathname || !l.pathname.includes('?'),
        jo('?', 'pathname', 'search', l),
      ),
      V(
        !l.pathname || !l.pathname.includes('#'),
        jo('#', 'pathname', 'hash', l),
      ),
      V(!l.search || !l.search.includes('#'), jo('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && o.startsWith('..')) {
      let f = o.split('/');
      for (; f[0] === '..'; ) f.shift(), (c -= 1);
      l.pathname = f.join('/');
    }
    a = c >= 0 ? t[c] : '/';
  }
  let u = gv(l, a),
    s = o && o !== '/' && o.endsWith('/'),
    d = (i || o === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || d) && (u.pathname += '/'), u;
}
const Pt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Sv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ev = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  xv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class kv {
  constructor(t, n) {
    (this.type = 'DataWithResponseInit'),
      (this.data = t),
      (this.init = n || null);
  }
}
function Cv(e, t) {
  return new kv(e, typeof t == 'number' ? { status: t } : t);
}
class Ii extends Error {}
class Pv {
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
    let l = () => r(new Ii('Deferred data aborted'));
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
    if (this.controller.signal.aborted && r instanceof Ii)
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
        return Object.assign(t, { [r]: _v(l) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function Rv(e) {
  return e instanceof Promise && e._tracked === !0;
}
function _v(e) {
  if (!Rv(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const Yf = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == 'number'
    ? (r = { status: r })
    : typeof r.status > 'u' && (r.status = 302);
  let l = new Headers(r.headers);
  return l.set('Location', t), new Response(null, ue({}, r, { headers: l }));
};
class On {
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
function wr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Xf = ['post', 'put', 'patch', 'delete'],
  Lv = new Set(Xf),
  Tv = ['get', ...Xf],
  Nv = new Set(Tv),
  Dv = new Set([301, 302, 303, 307, 308]),
  Mv = new Set([307, 308]),
  Io = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ov = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Or = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Ou = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Jf = 'remix-router-transitions';
function h0(e) {
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
    let g = e.detectErrorBoundary;
    l = (E) => ({ hasErrorBoundary: g(E) });
  } else l = zv;
  let i = {},
    o = ml(e.routes, l, void 0, i),
    a,
    u = e.basename || '/',
    s = e.unstable_dataStrategy || Av,
    d = e.unstable_patchRoutesOnNavigation,
    c = ue(
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
    f = null,
    x = new Set(),
    y = 1e3,
    k = new Set(),
    L = null,
    p = null,
    h = null,
    m = e.hydrationData != null,
    S = Mt(o, e.history.location, u),
    R = null;
  if (S == null && !d) {
    let g = Ie(404, { pathname: e.history.location.pathname }),
      { matches: E, route: C } = Rc(o);
    (S = E), (R = { [C.id]: g });
  }
  S &&
    !e.hydrationData &&
    Rl(S, o, e.history.location.pathname).active &&
    (S = null);
  let P;
  if (S)
    if (S.some((g) => g.route.lazy)) P = !1;
    else if (!S.some((g) => g.route.loader)) P = !0;
    else if (c.v7_partialHydration) {
      let g = e.hydrationData ? e.hydrationData.loaderData : null,
        E = e.hydrationData ? e.hydrationData.errors : null,
        C = (_) =>
          _.route.loader
            ? typeof _.route.loader == 'function' &&
              _.route.loader.hydrate === !0
              ? !1
              : (g && g[_.route.id] !== void 0) ||
                (E && E[_.route.id] !== void 0)
            : !0;
      if (E) {
        let _ = S.findIndex((F) => E[F.route.id] !== void 0);
        P = S.slice(0, _ + 1).every(C);
      } else P = S.every(C);
    } else P = e.hydrationData != null;
  else if (((P = !1), (S = []), c.v7_partialHydration)) {
    let g = Rl(null, o, e.history.location.pathname);
    g.active && g.matches && (S = g.matches);
  }
  let T,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: P,
      navigation: Io,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || R,
      fetchers: new Map(),
      blockers: new Map(),
    },
    O = ge.Pop,
    M = !1,
    A,
    Y = !1,
    he = new Map(),
    oe = null,
    Ee = !1,
    Fe = !1,
    Vt = [],
    z = new Set(),
    I = new Map(),
    $ = 0,
    ee = -1,
    re = new Map(),
    He = new Set(),
    $e = new Map(),
    _t = new Map(),
    Re = new Set(),
    nt = new Map(),
    yn = new Map(),
    Rh = new Map(),
    oo = !1;
  function _h() {
    if (
      ((f = e.history.listen((g) => {
        let { action: E, location: C, delta: _ } = g;
        if (oo) {
          oo = !1;
          return;
        }
        mr(
          yn.size === 0 || _ != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let F = ls({
          currentLocation: v.location,
          nextLocation: C,
          historyAction: E,
        });
        if (F && _ != null) {
          (oo = !0),
            e.history.go(_ * -1),
            Cl(F, {
              state: 'blocked',
              location: C,
              proceed() {
                Cl(F, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  e.history.go(_);
              },
              reset() {
                let U = new Map(v.blockers);
                U.set(F, Or), je({ blockers: U });
              },
            });
          return;
        }
        return gn(E, C);
      })),
      n)
    ) {
      qv(t, he);
      let g = () => bv(t, he);
      t.addEventListener('pagehide', g),
        (oe = () => t.removeEventListener('pagehide', g));
    }
    return v.initialized || gn(ge.Pop, v.location, { initialHydration: !0 }), T;
  }
  function Lh() {
    f && f(),
      oe && oe(),
      x.clear(),
      A && A.abort(),
      v.fetchers.forEach((g, E) => kl(E)),
      v.blockers.forEach((g, E) => rs(E));
  }
  function Th(g) {
    return x.add(g), () => x.delete(g);
  }
  function je(g, E) {
    E === void 0 && (E = {}), (v = ue({}, v, g));
    let C = [],
      _ = [];
    c.v7_fetcherPersist &&
      v.fetchers.forEach((F, U) => {
        F.state === 'idle' && (Re.has(U) ? _.push(U) : C.push(U));
      }),
      [...x].forEach((F) =>
        F(v, {
          deletedFetchers: _,
          unstable_viewTransitionOpts: E.viewTransitionOpts,
          unstable_flushSync: E.flushSync === !0,
        }),
      ),
      c.v7_fetcherPersist &&
        (C.forEach((F) => v.fetchers.delete(F)), _.forEach((F) => kl(F)));
  }
  function In(g, E, C) {
    var _, F;
    let { flushSync: U } = C === void 0 ? {} : C,
      H =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        ht(v.navigation.formMethod) &&
        v.navigation.state === 'loading' &&
        ((_ = g.state) == null ? void 0 : _._isRedirect) !== !0,
      D;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (D = E.actionData)
        : (D = null)
      : H
        ? (D = v.actionData)
        : (D = null);
    let W = E.loaderData
        ? Cc(v.loaderData, E.loaderData, E.matches || [], E.errors)
        : v.loaderData,
      B = v.blockers;
    B.size > 0 && ((B = new Map(B)), B.forEach((G, te) => B.set(te, Or)));
    let K =
      M === !0 ||
      (v.navigation.formMethod != null &&
        ht(v.navigation.formMethod) &&
        ((F = g.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      Ee ||
        O === ge.Pop ||
        (O === ge.Push
          ? e.history.push(g, g.state)
          : O === ge.Replace && e.history.replace(g, g.state));
    let q;
    if (O === ge.Pop) {
      let G = he.get(v.location.pathname);
      G && G.has(g.pathname)
        ? (q = { currentLocation: v.location, nextLocation: g })
        : he.has(g.pathname) &&
          (q = { currentLocation: g, nextLocation: v.location });
    } else if (Y) {
      let G = he.get(v.location.pathname);
      G
        ? G.add(g.pathname)
        : ((G = new Set([g.pathname])), he.set(v.location.pathname, G)),
        (q = { currentLocation: v.location, nextLocation: g });
    }
    je(
      ue({}, E, {
        actionData: D,
        loaderData: W,
        historyAction: O,
        location: g,
        initialized: !0,
        navigation: Io,
        revalidation: 'idle',
        restoreScrollPosition: os(g, E.matches || v.matches),
        preventScrollReset: K,
        blockers: B,
      }),
      { viewTransitionOpts: q, flushSync: U === !0 },
    ),
      (O = ge.Pop),
      (M = !1),
      (Y = !1),
      (Ee = !1),
      (Fe = !1),
      (Vt = []);
  }
  async function Gu(g, E) {
    if (typeof g == 'number') {
      e.history.go(g);
      return;
    }
    let C = Fa(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        g,
        c.v7_relativeSplatPath,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative,
      ),
      {
        path: _,
        submission: F,
        error: U,
      } = yc(c.v7_normalizeFormMethod, !1, C, E),
      H = v.location,
      D = pl(v.location, _, E && E.state);
    D = ue({}, D, e.history.encodeLocation(D));
    let W = E && E.replace != null ? E.replace : void 0,
      B = ge.Push;
    W === !0
      ? (B = ge.Replace)
      : W === !1 ||
        (F != null &&
          ht(F.formMethod) &&
          F.formAction === v.location.pathname + v.location.search &&
          (B = ge.Replace));
    let K =
        E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
      q = (E && E.unstable_flushSync) === !0,
      G = ls({ currentLocation: H, nextLocation: D, historyAction: B });
    if (G) {
      Cl(G, {
        state: 'blocked',
        location: D,
        proceed() {
          Cl(G, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: D,
          }),
            Gu(g, E);
        },
        reset() {
          let te = new Map(v.blockers);
          te.set(G, Or), je({ blockers: te });
        },
      });
      return;
    }
    return await gn(B, D, {
      submission: F,
      pendingError: U,
      preventScrollReset: K,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition,
      flushSync: q,
    });
  }
  function Nh() {
    if (
      (ao(),
      je({ revalidation: 'loading' }),
      v.navigation.state !== 'submitting')
    ) {
      if (v.navigation.state === 'idle') {
        gn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      gn(O || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function gn(g, E, C) {
    A && A.abort(),
      (A = null),
      (O = g),
      (Ee = (C && C.startUninterruptedRevalidation) === !0),
      Bh(v.location, v.matches),
      (M = (C && C.preventScrollReset) === !0),
      (Y = (C && C.enableViewTransition) === !0);
    let _ = a || o,
      F = C && C.overrideNavigation,
      U = Mt(_, E, u),
      H = (C && C.flushSync) === !0,
      D = Rl(U, _, E.pathname);
    if ((D.active && D.matches && (U = D.matches), !U)) {
      let { error: J, notFoundMatches: _e, route: ye } = uo(E.pathname);
      In(
        E,
        { matches: _e, loaderData: {}, errors: { [ye.id]: J } },
        { flushSync: H },
      );
      return;
    }
    if (
      v.initialized &&
      !Fe &&
      Kv(v.location, E) &&
      !(C && C.submission && ht(C.submission.formMethod))
    ) {
      In(E, { matches: U }, { flushSync: H });
      return;
    }
    A = new AbortController();
    let W = $n(e.history, E, A.signal, C && C.submission),
      B;
    if (C && C.pendingError)
      B = [tr(U).route.id, { type: b.error, error: C.pendingError }];
    else if (C && C.submission && ht(C.submission.formMethod)) {
      let J = await Dh(W, E, C.submission, U, D.active, {
        replace: C.replace,
        flushSync: H,
      });
      if (J.shortCircuited) return;
      if (J.pendingActionResult) {
        let [_e, ye] = J.pendingActionResult;
        if (Ge(ye) && wr(ye.error) && ye.error.status === 404) {
          (A = null),
            In(E, {
              matches: J.matches,
              loaderData: {},
              errors: { [_e]: ye.error },
            });
          return;
        }
      }
      (U = J.matches || U),
        (B = J.pendingActionResult),
        (F = Uo(E, C.submission)),
        (H = !1),
        (D.active = !1),
        (W = $n(e.history, W.url, W.signal));
    }
    let {
      shortCircuited: K,
      matches: q,
      loaderData: G,
      errors: te,
    } = await Mh(
      W,
      E,
      U,
      D.active,
      F,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      C && C.initialHydration === !0,
      H,
      B,
    );
    K ||
      ((A = null),
      In(E, ue({ matches: q || U }, Pc(B), { loaderData: G, errors: te })));
  }
  async function Dh(g, E, C, _, F, U) {
    U === void 0 && (U = {}), ao();
    let H = Gv(E, C);
    if ((je({ navigation: H }, { flushSync: U.flushSync === !0 }), F)) {
      let B = await _l(_, E.pathname, g.signal);
      if (B.type === 'aborted') return { shortCircuited: !0 };
      if (B.type === 'error') {
        let { boundaryId: K, error: q } = Pl(E.pathname, B);
        return {
          matches: B.partialMatches,
          pendingActionResult: [K, { type: b.error, error: q }],
        };
      } else if (B.matches) _ = B.matches;
      else {
        let { notFoundMatches: K, error: q, route: G } = uo(E.pathname);
        return {
          matches: K,
          pendingActionResult: [G.id, { type: b.error, error: q }],
        };
      }
    }
    let D,
      W = Hr(_, E);
    if (!W.route.action && !W.route.lazy)
      D = {
        type: b.error,
        error: Ie(405, {
          method: g.method,
          pathname: E.pathname,
          routeId: W.route.id,
        }),
      };
    else if (((D = (await kr('action', g, [W], _))[0]), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Pn(D)) {
      let B;
      return (
        U && U.replace != null
          ? (B = U.replace)
          : (B =
              Ec(D.response.headers.get('Location'), new URL(g.url), u) ===
              v.location.pathname + v.location.search),
        await xr(g, D, { submission: C, replace: B }),
        { shortCircuited: !0 }
      );
    }
    if (Cn(D)) throw Ie(400, { type: 'defer-action' });
    if (Ge(D)) {
      let B = tr(_, W.route.id);
      return (
        (U && U.replace) !== !0 && (O = ge.Push),
        { matches: _, pendingActionResult: [B.route.id, D] }
      );
    }
    return { matches: _, pendingActionResult: [W.route.id, D] };
  }
  async function Mh(g, E, C, _, F, U, H, D, W, B, K) {
    let q = F || Uo(E, U),
      G = U || H || Nc(q),
      te = !Ee && (!c.v7_partialHydration || !W);
    if (_) {
      if (te) {
        let pe = Zu(K);
        je(ue({ navigation: q }, pe !== void 0 ? { actionData: pe } : {}), {
          flushSync: B,
        });
      }
      let Q = await _l(C, E.pathname, g.signal);
      if (Q.type === 'aborted') return { shortCircuited: !0 };
      if (Q.type === 'error') {
        let { boundaryId: pe, error: Xe } = Pl(E.pathname, Q);
        return {
          matches: Q.partialMatches,
          loaderData: {},
          errors: { [pe]: Xe },
        };
      } else if (Q.matches) C = Q.matches;
      else {
        let { error: pe, notFoundMatches: Xe, route: ae } = uo(E.pathname);
        return { matches: Xe, loaderData: {}, errors: { [ae.id]: pe } };
      }
    }
    let J = a || o,
      [_e, ye] = gc(
        e.history,
        v,
        C,
        G,
        E,
        c.v7_partialHydration && W === !0,
        c.v7_skipActionErrorRevalidation,
        Fe,
        Vt,
        z,
        Re,
        $e,
        He,
        J,
        u,
        K,
      );
    if (
      (so(
        (Q) =>
          !(C && C.some((pe) => pe.route.id === Q)) ||
          (_e && _e.some((pe) => pe.route.id === Q)),
      ),
      (ee = ++$),
      _e.length === 0 && ye.length === 0)
    ) {
      let Q = ts();
      return (
        In(
          E,
          ue(
            {
              matches: C,
              loaderData: {},
              errors: K && Ge(K[1]) ? { [K[0]]: K[1].error } : null,
            },
            Pc(K),
            Q ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: B },
        ),
        { shortCircuited: !0 }
      );
    }
    if (te) {
      let Q = {};
      if (!_) {
        Q.navigation = q;
        let pe = Zu(K);
        pe !== void 0 && (Q.actionData = pe);
      }
      ye.length > 0 && (Q.fetchers = Oh(ye)), je(Q, { flushSync: B });
    }
    ye.forEach((Q) => {
      I.has(Q.key) && Kt(Q.key), Q.controller && I.set(Q.key, Q.controller);
    });
    let Cr = () => ye.forEach((Q) => Kt(Q.key));
    A && A.signal.addEventListener('abort', Cr);
    let { loaderResults: Qt, fetcherResults: Un } = await qu(
      v.matches,
      C,
      _e,
      ye,
      g,
    );
    if (g.signal.aborted) return { shortCircuited: !0 };
    A && A.signal.removeEventListener('abort', Cr),
      ye.forEach((Q) => I.delete(Q.key));
    let An = _c([...Qt, ...Un]);
    if (An) {
      if (An.idx >= _e.length) {
        let Q = ye[An.idx - _e.length].key;
        He.add(Q);
      }
      return await xr(g, An.result, { replace: D }), { shortCircuited: !0 };
    }
    let { loaderData: Bn, errors: wt } = kc(v, C, _e, Qt, K, ye, Un, nt);
    nt.forEach((Q, pe) => {
      Q.subscribe((Xe) => {
        (Xe || Q.done) && nt.delete(pe);
      });
    }),
      c.v7_partialHydration &&
        W &&
        v.errors &&
        Object.entries(v.errors)
          .filter((Q) => {
            let [pe] = Q;
            return !_e.some((Xe) => Xe.route.id === pe);
          })
          .forEach((Q) => {
            let [pe, Xe] = Q;
            wt = Object.assign(wt || {}, { [pe]: Xe });
          });
    let Ll = ts(),
      Tl = ns(ee),
      Nl = Ll || Tl || ye.length > 0;
    return ue(
      { matches: C, loaderData: Bn, errors: wt },
      Nl ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function Zu(g) {
    if (g && !Ge(g[1])) return { [g[0]]: g[1].data };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function Oh(g) {
    return (
      g.forEach((E) => {
        let C = v.fetchers.get(E.key),
          _ = zr(void 0, C ? C.data : void 0);
        v.fetchers.set(E.key, _);
      }),
      new Map(v.fetchers)
    );
  }
  function zh(g, E, C, _) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    I.has(g) && Kt(g);
    let F = (_ && _.unstable_flushSync) === !0,
      U = a || o,
      H = Fa(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        C,
        c.v7_relativeSplatPath,
        E,
        _ == null ? void 0 : _.relative,
      ),
      D = Mt(U, H, u),
      W = Rl(D, U, H);
    if ((W.active && W.matches && (D = W.matches), !D)) {
      Lt(g, E, Ie(404, { pathname: H }), { flushSync: F });
      return;
    }
    let {
      path: B,
      submission: K,
      error: q,
    } = yc(c.v7_normalizeFormMethod, !0, H, _);
    if (q) {
      Lt(g, E, q, { flushSync: F });
      return;
    }
    let G = Hr(D, B);
    if (((M = (_ && _.preventScrollReset) === !0), K && ht(K.formMethod))) {
      Fh(g, E, B, G, D, W.active, F, K);
      return;
    }
    $e.set(g, { routeId: E, path: B }), jh(g, E, B, G, D, W.active, F, K);
  }
  async function Fh(g, E, C, _, F, U, H, D) {
    ao(), $e.delete(g);
    function W(ae) {
      if (!ae.route.action && !ae.route.lazy) {
        let Tt = Ie(405, { method: D.formMethod, pathname: C, routeId: E });
        return Lt(g, E, Tt, { flushSync: H }), !0;
      }
      return !1;
    }
    if (!U && W(_)) return;
    let B = v.fetchers.get(g);
    Wt(g, Zv(D, B), { flushSync: H });
    let K = new AbortController(),
      q = $n(e.history, C, K.signal, D);
    if (U) {
      let ae = await _l(F, C, q.signal);
      if (ae.type === 'aborted') return;
      if (ae.type === 'error') {
        let { error: Tt } = Pl(C, ae);
        Lt(g, E, Tt, { flushSync: H });
        return;
      } else if (ae.matches) {
        if (((F = ae.matches), (_ = Hr(F, C)), W(_))) return;
      } else {
        Lt(g, E, Ie(404, { pathname: C }), { flushSync: H });
        return;
      }
    }
    I.set(g, K);
    let G = $,
      J = (await kr('action', q, [_], F))[0];
    if (q.signal.aborted) {
      I.get(g) === K && I.delete(g);
      return;
    }
    if (c.v7_fetcherPersist && Re.has(g)) {
      if (Pn(J) || Ge(J)) {
        Wt(g, Xt(void 0));
        return;
      }
    } else {
      if (Pn(J))
        if ((I.delete(g), ee > G)) {
          Wt(g, Xt(void 0));
          return;
        } else
          return He.add(g), Wt(g, zr(D)), xr(q, J, { fetcherSubmission: D });
      if (Ge(J)) {
        Lt(g, E, J.error);
        return;
      }
    }
    if (Cn(J)) throw Ie(400, { type: 'defer-action' });
    let _e = v.navigation.location || v.location,
      ye = $n(e.history, _e, K.signal),
      Cr = a || o,
      Qt =
        v.navigation.state !== 'idle'
          ? Mt(Cr, v.navigation.location, u)
          : v.matches;
    V(Qt, "Didn't find any matches after fetcher action");
    let Un = ++$;
    re.set(g, Un);
    let An = zr(D, J.data);
    v.fetchers.set(g, An);
    let [Bn, wt] = gc(
      e.history,
      v,
      Qt,
      D,
      _e,
      !1,
      c.v7_skipActionErrorRevalidation,
      Fe,
      Vt,
      z,
      Re,
      $e,
      He,
      Cr,
      u,
      [_.route.id, J],
    );
    wt
      .filter((ae) => ae.key !== g)
      .forEach((ae) => {
        let Tt = ae.key,
          us = v.fetchers.get(Tt),
          Vh = zr(void 0, us ? us.data : void 0);
        v.fetchers.set(Tt, Vh),
          I.has(Tt) && Kt(Tt),
          ae.controller && I.set(Tt, ae.controller);
      }),
      je({ fetchers: new Map(v.fetchers) });
    let Ll = () => wt.forEach((ae) => Kt(ae.key));
    K.signal.addEventListener('abort', Ll);
    let { loaderResults: Tl, fetcherResults: Nl } = await qu(
      v.matches,
      Qt,
      Bn,
      wt,
      ye,
    );
    if (K.signal.aborted) return;
    K.signal.removeEventListener('abort', Ll),
      re.delete(g),
      I.delete(g),
      wt.forEach((ae) => I.delete(ae.key));
    let Q = _c([...Tl, ...Nl]);
    if (Q) {
      if (Q.idx >= Bn.length) {
        let ae = wt[Q.idx - Bn.length].key;
        He.add(ae);
      }
      return xr(ye, Q.result);
    }
    let { loaderData: pe, errors: Xe } = kc(
      v,
      v.matches,
      Bn,
      Tl,
      void 0,
      wt,
      Nl,
      nt,
    );
    if (v.fetchers.has(g)) {
      let ae = Xt(J.data);
      v.fetchers.set(g, ae);
    }
    ns(Un),
      v.navigation.state === 'loading' && Un > ee
        ? (V(O, 'Expected pending action'),
          A && A.abort(),
          In(v.navigation.location, {
            matches: Qt,
            loaderData: pe,
            errors: Xe,
            fetchers: new Map(v.fetchers),
          }))
        : (je({
            errors: Xe,
            loaderData: Cc(v.loaderData, pe, Qt, Xe),
            fetchers: new Map(v.fetchers),
          }),
          (Fe = !1));
  }
  async function jh(g, E, C, _, F, U, H, D) {
    let W = v.fetchers.get(g);
    Wt(g, zr(D, W ? W.data : void 0), { flushSync: H });
    let B = new AbortController(),
      K = $n(e.history, C, B.signal);
    if (U) {
      let J = await _l(F, C, K.signal);
      if (J.type === 'aborted') return;
      if (J.type === 'error') {
        let { error: _e } = Pl(C, J);
        Lt(g, E, _e, { flushSync: H });
        return;
      } else if (J.matches) (F = J.matches), (_ = Hr(F, C));
      else {
        Lt(g, E, Ie(404, { pathname: C }), { flushSync: H });
        return;
      }
    }
    I.set(g, B);
    let q = $,
      te = (await kr('loader', K, [_], F))[0];
    if (
      (Cn(te) && (te = (await eh(te, K.signal, !0)) || te),
      I.get(g) === B && I.delete(g),
      !K.signal.aborted)
    ) {
      if (Re.has(g)) {
        Wt(g, Xt(void 0));
        return;
      }
      if (Pn(te))
        if (ee > q) {
          Wt(g, Xt(void 0));
          return;
        } else {
          He.add(g), await xr(K, te);
          return;
        }
      if (Ge(te)) {
        Lt(g, E, te.error);
        return;
      }
      V(!Cn(te), 'Unhandled fetcher deferred data'), Wt(g, Xt(te.data));
    }
  }
  async function xr(g, E, C) {
    let {
      submission: _,
      fetcherSubmission: F,
      replace: U,
    } = C === void 0 ? {} : C;
    E.response.headers.has('X-Remix-Revalidate') && (Fe = !0);
    let H = E.response.headers.get('Location');
    V(H, 'Expected a Location header on the redirect Response'),
      (H = Ec(H, new URL(g.url), u));
    let D = pl(v.location, H, { _isRedirect: !0 });
    if (n) {
      let te = !1;
      if (E.response.headers.has('X-Remix-Reload-Document')) te = !0;
      else if (Ou.test(H)) {
        const J = e.history.createURL(H);
        te = J.origin !== t.location.origin || gt(J.pathname, u) == null;
      }
      if (te) {
        U ? t.location.replace(H) : t.location.assign(H);
        return;
      }
    }
    A = null;
    let W =
        U === !0 || E.response.headers.has('X-Remix-Replace')
          ? ge.Replace
          : ge.Push,
      { formMethod: B, formAction: K, formEncType: q } = v.navigation;
    !_ && !F && B && K && q && (_ = Nc(v.navigation));
    let G = _ || F;
    if (Mv.has(E.response.status) && G && ht(G.formMethod))
      await gn(W, D, {
        submission: ue({}, G, { formAction: H }),
        preventScrollReset: M,
      });
    else {
      let te = Uo(D, _);
      await gn(W, D, {
        overrideNavigation: te,
        fetcherSubmission: F,
        preventScrollReset: M,
      });
    }
  }
  async function kr(g, E, C, _) {
    try {
      let F = await Bv(s, g, E, C, _, i, l);
      return await Promise.all(
        F.map((U, H) => {
          if (Yv(U)) {
            let D = U.result;
            return {
              type: b.redirect,
              response: Vv(D, E, C[H].route.id, _, u, c.v7_relativeSplatPath),
            };
          }
          return $v(U);
        }),
      );
    } catch (F) {
      return C.map(() => ({ type: b.error, error: F }));
    }
  }
  async function qu(g, E, C, _, F) {
    let [U, ...H] = await Promise.all([
      C.length ? kr('loader', F, C, E) : [],
      ..._.map((D) => {
        if (D.matches && D.match && D.controller) {
          let W = $n(e.history, D.path, D.controller.signal);
          return kr('loader', W, [D.match], D.matches).then((B) => B[0]);
        } else
          return Promise.resolve({
            type: b.error,
            error: Ie(404, { pathname: D.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Tc(
          g,
          C,
          U,
          U.map(() => F.signal),
          !1,
          v.loaderData,
        ),
        Tc(
          g,
          _.map((D) => D.match),
          H,
          _.map((D) => (D.controller ? D.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: U, fetcherResults: H }
    );
  }
  function ao() {
    (Fe = !0),
      Vt.push(...so()),
      $e.forEach((g, E) => {
        I.has(E) && (z.add(E), Kt(E));
      });
  }
  function Wt(g, E, C) {
    C === void 0 && (C = {}),
      v.fetchers.set(g, E),
      je(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (C && C.flushSync) === !0 },
      );
  }
  function Lt(g, E, C, _) {
    _ === void 0 && (_ = {});
    let F = tr(v.matches, E);
    kl(g),
      je(
        { errors: { [F.route.id]: C }, fetchers: new Map(v.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 },
      );
  }
  function bu(g) {
    return (
      c.v7_fetcherPersist &&
        (_t.set(g, (_t.get(g) || 0) + 1), Re.has(g) && Re.delete(g)),
      v.fetchers.get(g) || Ov
    );
  }
  function kl(g) {
    let E = v.fetchers.get(g);
    I.has(g) && !(E && E.state === 'loading' && re.has(g)) && Kt(g),
      $e.delete(g),
      re.delete(g),
      He.delete(g),
      Re.delete(g),
      z.delete(g),
      v.fetchers.delete(g);
  }
  function Ih(g) {
    if (c.v7_fetcherPersist) {
      let E = (_t.get(g) || 0) - 1;
      E <= 0 ? (_t.delete(g), Re.add(g)) : _t.set(g, E);
    } else kl(g);
    je({ fetchers: new Map(v.fetchers) });
  }
  function Kt(g) {
    let E = I.get(g);
    V(E, 'Expected fetch controller: ' + g), E.abort(), I.delete(g);
  }
  function es(g) {
    for (let E of g) {
      let C = bu(E),
        _ = Xt(C.data);
      v.fetchers.set(E, _);
    }
  }
  function ts() {
    let g = [],
      E = !1;
    for (let C of He) {
      let _ = v.fetchers.get(C);
      V(_, 'Expected fetcher: ' + C),
        _.state === 'loading' && (He.delete(C), g.push(C), (E = !0));
    }
    return es(g), E;
  }
  function ns(g) {
    let E = [];
    for (let [C, _] of re)
      if (_ < g) {
        let F = v.fetchers.get(C);
        V(F, 'Expected fetcher: ' + C),
          F.state === 'loading' && (Kt(C), re.delete(C), E.push(C));
      }
    return es(E), E.length > 0;
  }
  function Uh(g, E) {
    let C = v.blockers.get(g) || Or;
    return yn.get(g) !== E && yn.set(g, E), C;
  }
  function rs(g) {
    v.blockers.delete(g), yn.delete(g);
  }
  function Cl(g, E) {
    let C = v.blockers.get(g) || Or;
    V(
      (C.state === 'unblocked' && E.state === 'blocked') ||
        (C.state === 'blocked' && E.state === 'blocked') ||
        (C.state === 'blocked' && E.state === 'proceeding') ||
        (C.state === 'blocked' && E.state === 'unblocked') ||
        (C.state === 'proceeding' && E.state === 'unblocked'),
      'Invalid blocker state transition: ' + C.state + ' -> ' + E.state,
    );
    let _ = new Map(v.blockers);
    _.set(g, E), je({ blockers: _ });
  }
  function ls(g) {
    let { currentLocation: E, nextLocation: C, historyAction: _ } = g;
    if (yn.size === 0) return;
    yn.size > 1 && mr(!1, 'A router only supports one blocker at a time');
    let F = Array.from(yn.entries()),
      [U, H] = F[F.length - 1],
      D = v.blockers.get(U);
    if (
      !(D && D.state === 'proceeding') &&
      H({ currentLocation: E, nextLocation: C, historyAction: _ })
    )
      return U;
  }
  function uo(g) {
    let E = Ie(404, { pathname: g }),
      C = a || o,
      { matches: _, route: F } = Rc(C);
    return so(), { notFoundMatches: _, route: F, error: E };
  }
  function Pl(g, E) {
    return {
      boundaryId: tr(E.partialMatches).route.id,
      error: Ie(400, {
        type: 'route-discovery',
        pathname: g,
        message:
          E.error != null && 'message' in E.error ? E.error : String(E.error),
      }),
    };
  }
  function so(g) {
    let E = [];
    return (
      nt.forEach((C, _) => {
        (!g || g(_)) && (C.cancel(), E.push(_), nt.delete(_));
      }),
      E
    );
  }
  function Ah(g, E, C) {
    if (((L = g), (h = E), (p = C || null), !m && v.navigation === Io)) {
      m = !0;
      let _ = os(v.location, v.matches);
      _ != null && je({ restoreScrollPosition: _ });
    }
    return () => {
      (L = null), (h = null), (p = null);
    };
  }
  function is(g, E) {
    return (
      (p &&
        p(
          g,
          E.map((_) => iv(_, v.loaderData)),
        )) ||
      g.key
    );
  }
  function Bh(g, E) {
    if (L && h) {
      let C = is(g, E);
      L[C] = h();
    }
  }
  function os(g, E) {
    if (L) {
      let C = is(g, E),
        _ = L[C];
      if (typeof _ == 'number') return _;
    }
    return null;
  }
  function Rl(g, E, C) {
    if (d) {
      if (k.has(C)) return { active: !1, matches: g };
      if (g) {
        if (Object.keys(g[0].params).length > 0)
          return { active: !0, matches: ui(E, C, u, !0) };
      } else return { active: !0, matches: ui(E, C, u, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function _l(g, E, C) {
    let _ = g;
    for (;;) {
      let F = a == null,
        U = a || o;
      try {
        await Uv(d, E, _, U, i, l, Rh, C);
      } catch (W) {
        return { type: 'error', error: W, partialMatches: _ };
      } finally {
        F && (o = [...o]);
      }
      if (C.aborted) return { type: 'aborted' };
      let H = Mt(U, E, u);
      if (H) return as(E, k), { type: 'success', matches: H };
      let D = ui(U, E, u, !0);
      if (
        !D ||
        (_.length === D.length &&
          _.every((W, B) => W.route.id === D[B].route.id))
      )
        return as(E, k), { type: 'success', matches: null };
      _ = D;
    }
  }
  function as(g, E) {
    if (E.size >= y) {
      let C = E.values().next().value;
      E.delete(C);
    }
    E.add(g);
  }
  function Hh(g) {
    (i = {}), (a = ml(g, l, void 0, i));
  }
  function $h(g, E) {
    let C = a == null;
    Zf(g, E, a || o, i, l), C && ((o = [...o]), je({}));
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
      initialize: _h,
      subscribe: Th,
      enableScrollRestoration: Ah,
      navigate: Gu,
      fetch: zh,
      revalidate: Nh,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: bu,
      deleteFetcher: Ih,
      dispose: Lh,
      getBlocker: Uh,
      deleteBlocker: rs,
      patchRoutes: $h,
      _internalFetchControllers: I,
      _internalActiveDeferreds: nt,
      _internalSetRoutes: Hh,
    }),
    T
  );
}
function Fv(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Fa(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === o)) {
        s = c;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let d = Mu(l || '.', Du(u, i), gt(e.pathname, n) || e.pathname, a === 'path');
  return (
    l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      s &&
      s.route.index &&
      !zu(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (d.pathname = d.pathname === '/' ? n : Pt([n, d.pathname])),
    fn(d)
  );
}
function yc(e, t, n, r) {
  if (!r || !Fv(r)) return { path: n };
  if (r.formMethod && !Jv(r.formMethod))
    return { path: n, error: Ie(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ie(400, { type: 'invalid-body' }) }),
    i = r.formMethod || 'get',
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = qf(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!ht(o)) return l();
      let f =
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
          text: f,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!ht(o)) return l();
      try {
        let f = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
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
  if (r.formData) (u = ja(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = ja(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = xc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = xc(u));
    } catch {
      return l();
    }
  let d = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ht(d.formMethod)) return { path: n, submission: d };
  let c = Ht(n);
  return (
    t && c.search && zu(c.search) && u.append('index', ''),
    (c.search = '?' + u),
    { path: fn(c), submission: d }
  );
}
function jv(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function gc(e, t, n, r, l, i, o, a, u, s, d, c, f, x, y, k) {
  let L = k ? (Ge(k[1]) ? k[1].error : k[1].data) : void 0,
    p = e.createURL(t.location),
    h = e.createURL(l),
    m = k && Ge(k[1]) ? k[0] : void 0,
    S = m ? jv(n, m) : n,
    R = k ? k[1].statusCode : void 0,
    P = o && R && R >= 400,
    T = S.filter((O, M) => {
      let { route: A } = O;
      if (A.lazy) return !0;
      if (A.loader == null) return !1;
      if (i)
        return typeof A.loader != 'function' || A.loader.hydrate
          ? !0
          : t.loaderData[A.id] === void 0 &&
              (!t.errors || t.errors[A.id] === void 0);
      if (
        Iv(t.loaderData, t.matches[M], O) ||
        u.some((oe) => oe === O.route.id)
      )
        return !0;
      let Y = t.matches[M],
        he = O;
      return wc(
        O,
        ue(
          {
            currentUrl: p,
            currentParams: Y.params,
            nextUrl: h,
            nextParams: he.params,
          },
          r,
          {
            actionResult: L,
            actionStatus: R,
            defaultShouldRevalidate: P
              ? !1
              : a ||
                p.pathname + p.search === h.pathname + h.search ||
                p.search !== h.search ||
                Gf(Y, he),
          },
        ),
      );
    }),
    v = [];
  return (
    c.forEach((O, M) => {
      if (i || !n.some((Ee) => Ee.route.id === O.routeId) || d.has(M)) return;
      let A = Mt(x, O.path, y);
      if (!A) {
        v.push({
          key: M,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Y = t.fetchers.get(M),
        he = Hr(A, O.path),
        oe = !1;
      f.has(M)
        ? (oe = !1)
        : s.has(M)
          ? (s.delete(M), (oe = !0))
          : Y && Y.state !== 'idle' && Y.data === void 0
            ? (oe = a)
            : (oe = wc(
                he,
                ue(
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
                    defaultShouldRevalidate: P ? !1 : a,
                  },
                ),
              )),
        oe &&
          v.push({
            key: M,
            routeId: O.routeId,
            path: O.path,
            matches: A,
            match: he,
            controller: new AbortController(),
          });
    }),
    [T, v]
  );
}
function Iv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Gf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function wc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Uv(e, t, n, r, l, i, o, a) {
  let u = [t, ...n.map((s) => s.route.id)].join('-');
  try {
    let s = o.get(u);
    s ||
      ((s = e({
        path: t,
        matches: n,
        patch: (d, c) => {
          a.aborted || Zf(d, c, r, l, i);
        },
      })),
      o.set(u, s)),
      s && Qv(s) && (await s);
  } finally {
    o.delete(u);
  }
}
function Zf(e, t, n, r, l) {
  if (e) {
    var i;
    let o = r[e];
    V(o, 'No route found to patch children into: routeId = ' + e);
    let a = ml(
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
    let o = ml(t, l, ['patch', String(n.length || '0')], r);
    n.push(...o);
  }
}
async function Sc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, 'No route found in manifest');
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== 'hasErrorBoundary';
    mr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !u && !rv.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, ue({}, t(l), { lazy: void 0 }));
}
function Av(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Bv(e, t, n, r, l, i, o, a) {
  let u = r.reduce((c, f) => c.add(f.route.id), new Set()),
    s = new Set(),
    d = await e({
      matches: l.map((c) => {
        let f = u.has(c.route.id);
        return ue({}, c, {
          shouldLoad: f,
          resolve: (y) => (
            s.add(c.route.id),
            f
              ? Hv(t, n, c, i, o, y, a)
              : Promise.resolve({ type: b.data, result: void 0 })
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
    d.filter((c, f) => u.has(l[f].route.id))
  );
}
async function Hv(e, t, n, r, l, i, o) {
  let a,
    u,
    s = (d) => {
      let c,
        f = new Promise((k, L) => (c = L));
      (u = () => c()), t.signal.addEventListener('abort', u);
      let x = (k) =>
          typeof d != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']'),
                ),
              )
            : d(
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
        Promise.race([y, f])
      );
    };
  try {
    let d = n.route[e];
    if (n.route.lazy)
      if (d) {
        let c,
          [f] = await Promise.all([
            s(d).catch((x) => {
              c = x;
            }),
            Sc(n.route, l, r),
          ]);
        if (c !== void 0) throw c;
        a = f;
      } else if ((await Sc(n.route, l, r), (d = n.route[e]), d)) a = await s(d);
      else if (e === 'action') {
        let c = new URL(t.url),
          f = c.pathname + c.search;
        throw Ie(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: b.data, result: void 0 };
    else if (d) a = await s(d);
    else {
      let c = new URL(t.url),
        f = c.pathname + c.search;
      throw Ie(404, { pathname: f });
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
  } catch (d) {
    return { type: b.error, result: d };
  } finally {
    u && t.signal.removeEventListener('abort', u);
  }
  return a;
}
async function $v(e) {
  let { result: t, type: n } = e;
  if (bf(t)) {
    let s;
    try {
      let d = t.headers.get('Content-Type');
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (s = null)
          : (s = await t.json())
        : (s = await t.text());
    } catch (d) {
      return { type: b.error, error: d };
    }
    return n === b.error
      ? {
          type: b.error,
          error: new On(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: b.data, data: s, statusCode: t.status, headers: t.headers };
  }
  if (n === b.error) {
    if (Lc(t)) {
      var r;
      if (t.data instanceof Error) {
        var l;
        return {
          type: b.error,
          error: t.data,
          statusCode: (l = t.init) == null ? void 0 : l.status,
        };
      }
      t = new On(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: b.error, error: t, statusCode: wr(t) ? t.status : void 0 };
  }
  if (Xv(t)) {
    var i, o;
    return {
      type: b.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Lc(t)) {
    var a, u;
    return {
      type: b.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: b.data, data: t };
}
function Vv(e, t, n, r, l, i) {
  let o = e.headers.get('Location');
  if (
    (V(
      o,
      'Redirects returned/thrown from loaders/actions must have a Location header',
    ),
    !Ou.test(o))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = Fa(new URL(t.url), a, l, !0, o, i)), e.headers.set('Location', o);
  }
  return e;
}
function Ec(e, t, n) {
  if (Ou.test(e)) {
    let r = e,
      l = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      i = gt(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function $n(e, t, n, r) {
  let l = e.createURL(qf(t)).toString(),
    i = { signal: n };
  if (r && ht(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': a })),
          (i.body = JSON.stringify(r.json)))
        : a === 'text/plain'
          ? (i.body = r.text)
          : a === 'application/x-www-form-urlencoded' && r.formData
            ? (i.body = ja(r.formData))
            : (i.body = r.formData);
  }
  return new Request(l, i);
}
function ja(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function xc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Wv(e, t, n, r, l, i) {
  let o = {},
    a = null,
    u,
    s = !1,
    d = {},
    c = r && Ge(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((f, x) => {
      let y = t[x].route.id;
      if (
        (V(!Pn(f), 'Cannot handle redirect results in processLoaderData'),
        Ge(f))
      ) {
        let k = f.error;
        c !== void 0 && ((k = c), (c = void 0)), (a = a || {});
        {
          let L = tr(e, y);
          a[L.route.id] == null && (a[L.route.id] = k);
        }
        (o[y] = void 0),
          s || ((s = !0), (u = wr(f.error) ? f.error.status : 500)),
          f.headers && (d[y] = f.headers);
      } else
        Cn(f)
          ? (l.set(y, f.deferredData),
            (o[y] = f.deferredData.data),
            f.statusCode != null &&
              f.statusCode !== 200 &&
              !s &&
              (u = f.statusCode),
            f.headers && (d[y] = f.headers))
          : ((o[y] = f.data),
            f.statusCode && f.statusCode !== 200 && !s && (u = f.statusCode),
            f.headers && (d[y] = f.headers));
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: d }
  );
}
function kc(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = Wv(t, n, r, l, a);
  for (let d = 0; d < i.length; d++) {
    let { key: c, match: f, controller: x } = i[d];
    V(
      o !== void 0 && o[d] !== void 0,
      'Did not find corresponding fetcher result',
    );
    let y = o[d];
    if (!(x && x.signal.aborted))
      if (Ge(y)) {
        let k = tr(e.matches, f == null ? void 0 : f.route.id);
        (s && s[k.route.id]) || (s = ue({}, s, { [k.route.id]: y.error })),
          e.fetchers.delete(c);
      } else if (Pn(y)) V(!1, 'Unhandled fetcher revalidation redirect');
      else if (Cn(y)) V(!1, 'Unhandled fetcher deferred data');
      else {
        let k = Xt(y.data);
        e.fetchers.set(c, k);
      }
  }
  return { loaderData: u, errors: s };
}
function Cc(e, t, n, r) {
  let l = ue({}, t);
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
function Pc(e) {
  return e
    ? Ge(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function tr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Rc(e) {
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
function Ie(e, t) {
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
    new On(e || 500, a, new Error(u), !0)
  );
}
function _c(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Pn(n)) return { result: n, idx: t };
  }
}
function qf(e) {
  let t = typeof e == 'string' ? Ht(e) : e;
  return fn(ue({}, t, { hash: '' }));
}
function Kv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function Qv(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function Yv(e) {
  return bf(e.result) && Dv.has(e.result.status);
}
function Cn(e) {
  return e.type === b.deferred;
}
function Ge(e) {
  return e.type === b.error;
}
function Pn(e) {
  return (e && e.type) === b.redirect;
}
function Lc(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function Xv(e) {
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
function bf(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Jv(e) {
  return Nv.has(e.toLowerCase());
}
function ht(e) {
  return Lv.has(e.toLowerCase());
}
async function Tc(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((c) => c.route.id === u.route.id),
      d = s != null && !Gf(s, u) && (i && i[u.route.id]) !== void 0;
    if (Cn(a) && (l || d)) {
      let c = r[o];
      V(c, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await eh(a, c, l).then((f) => {
          f && (n[o] = f || n[o]);
        });
    }
  }
}
async function eh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: b.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: b.error, error: l };
      }
    return { type: b.data, data: e.deferredData.data };
  }
}
function zu(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Hr(e, t) {
  let n = typeof t == 'string' ? Ht(t).search : t.search;
  if (e[e.length - 1].route.index && zu(n || '')) return e[e.length - 1];
  let r = Qf(e);
  return r[r.length - 1];
}
function Nc(e) {
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
function Uo(e, t) {
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
function Gv(e, t) {
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
function zr(e, t) {
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
function Zv(e, t) {
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
function Xt(e) {
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
function qv(e, t) {
  try {
    let n = e.sessionStorage.getItem(Jf);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function bv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Jf, JSON.stringify(n));
    } catch (r) {
      mr(
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
 */ function Ui() {
  return (
    (Ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ui.apply(this, arguments)
  );
}
const Sr = w.createContext(null),
  ro = w.createContext(null),
  Ai = w.createContext(null),
  Rt = w.createContext(null),
  Fu = w.createContext(null),
  $t = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  th = w.createContext(null);
function ju(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  El() || V(!1);
  let { basename: r, navigator: l } = w.useContext(Rt),
    { hash: i, pathname: o, search: a } = xl(e, { relative: n }),
    u = o;
  return (
    r !== '/' && (u = o === '/' ? r : Pt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function El() {
  return w.useContext(Fu) != null;
}
function vn() {
  return El() || V(!1), w.useContext(Fu).location;
}
function nh(e) {
  w.useContext(Rt).static || w.useLayoutEffect(e);
}
function ey() {
  let { isDataRoute: e } = w.useContext($t);
  return e ? vy() : ty();
}
function ty() {
  El() || V(!1);
  let e = w.useContext(Sr),
    { basename: t, future: n, navigator: r } = w.useContext(Rt),
    { matches: l } = w.useContext($t),
    { pathname: i } = vn(),
    o = JSON.stringify(Du(l, n.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    nh(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (s, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof s == 'number') {
          r.go(s);
          return;
        }
        let c = Mu(s, JSON.parse(o), i, d.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Pt([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [t, r, o, i, e],
    )
  );
}
const ny = w.createContext(null);
function ry(e) {
  let t = w.useContext($t).outlet;
  return t && w.createElement(ny.Provider, { value: e }, t);
}
function xl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(Rt),
    { matches: l } = w.useContext($t),
    { pathname: i } = vn(),
    o = JSON.stringify(Du(l, r.v7_relativeSplatPath));
  return w.useMemo(() => Mu(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function ly(e, t, n, r) {
  El() || V(!1);
  let { navigator: l } = w.useContext(Rt),
    { matches: i } = w.useContext($t),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let s = vn(),
    d;
  d = s;
  let c = d.pathname || '/',
    f = c;
  if (u !== '/') {
    let k = u.replace(/^\//, '').split('/');
    f = '/' + c.replace(/^\//, '').split('/').slice(k.length).join('/');
  }
  let x = Mt(e, { pathname: f });
  return sy(
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
function iy() {
  let e = lh(),
    t = wr(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement('h2', null, 'Unexpected Application Error!'),
    w.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? w.createElement('pre', { style: l }, n) : null,
    null,
  );
}
const oy = w.createElement(iy, null);
class ay extends w.Component {
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
      ? w.createElement(
          $t.Provider,
          { value: this.props.routeContext },
          w.createElement(th.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function uy(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = w.useContext(Sr);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement($t.Provider, { value: t }, r)
  );
}
function sy(e, t, n, r) {
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
    let d = o.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0,
    );
    d >= 0 || V(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let c = o[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = d),
        c.route.id)
      ) {
        let { loaderData: f, errors: x } = n,
          y =
            c.route.loader &&
            f[c.route.id] === void 0 &&
            (!x || x[c.route.id] === void 0);
        if (c.route.lazy || y) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, c, f) => {
    let x,
      y = !1,
      k = null,
      L = null;
    n &&
      ((x = a && c.route.id ? a[c.route.id] : void 0),
      (k = c.route.errorElement || oy),
      u &&
        (s < 0 && f === 0
          ? ((y = !0), (L = null))
          : s === f &&
            ((y = !0), (L = c.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, f + 1)),
      h = () => {
        let m;
        return (
          x
            ? (m = k)
            : y
              ? (m = L)
              : c.route.Component
                ? (m = w.createElement(c.route.Component, null))
                : c.route.element
                  ? (m = c.route.element)
                  : (m = d),
          w.createElement(uy, {
            match: c,
            routeContext: { outlet: d, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? w.createElement(ay, {
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
var rh = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(rh || {}),
  vl = (function (e) {
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
  })(vl || {});
function cy(e) {
  let t = w.useContext(Sr);
  return t || V(!1), t;
}
function dy(e) {
  let t = w.useContext(ro);
  return t || V(!1), t;
}
function fy(e) {
  let t = w.useContext($t);
  return t || V(!1), t;
}
function Iu(e) {
  let t = fy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function hy() {
  return Iu(vl.UseRouteId);
}
function lh() {
  var e;
  let t = w.useContext(th),
    n = dy(vl.UseRouteError),
    r = Iu(vl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function py() {
  let e = w.useContext(Ai);
  return e == null ? void 0 : e._data;
}
function my() {
  let e = w.useContext(Ai);
  return e == null ? void 0 : e._error;
}
function vy() {
  let { router: e } = cy(rh.UseNavigateStable),
    t = Iu(vl.UseNavigateStable),
    n = w.useRef(!1);
  return (
    nh(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, Ui({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function p0(e) {
  return ry(e.context);
}
function yy(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = ge.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  El() && V(!1);
  let u = t.replace(/^\/*/, '/'),
    s = w.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: Ui({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o],
    );
  typeof r == 'string' && (r = Ht(r));
  let {
      pathname: d = '/',
      search: c = '',
      hash: f = '',
      state: x = null,
      key: y = 'default',
    } = r,
    k = w.useMemo(() => {
      let L = gt(d, u);
      return L == null
        ? null
        : {
            location: { pathname: L, search: c, hash: f, state: x, key: y },
            navigationType: l,
          };
    }, [u, d, c, f, x, y, l]);
  return k == null
    ? null
    : w.createElement(
        Rt.Provider,
        { value: s },
        w.createElement(Fu.Provider, { children: n, value: k }),
      );
}
function gy(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return w.createElement(
    Sy,
    { resolve: r, errorElement: n },
    w.createElement(Ey, null, t),
  );
}
var rt = (function (e) {
  return (
    (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error'),
    e
  );
})(rt || {});
const wy = new Promise(() => {});
class Sy extends w.Component {
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
      i = rt.pending;
    if (!(r instanceof Promise))
      (i = rt.success),
        (l = Promise.resolve()),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_data', { get: () => r });
    else if (this.state.error) {
      i = rt.error;
      let o = this.state.error;
      (l = Promise.reject().catch(() => {})),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_error', { get: () => o });
    } else
      r._tracked
        ? ((l = r),
          (i =
            '_error' in l ? rt.error : '_data' in l ? rt.success : rt.pending))
        : ((i = rt.pending),
          Object.defineProperty(r, '_tracked', { get: () => !0 }),
          (l = r.then(
            (o) => Object.defineProperty(r, '_data', { get: () => o }),
            (o) => Object.defineProperty(r, '_error', { get: () => o }),
          )));
    if (i === rt.error && l._error instanceof Ii) throw wy;
    if (i === rt.error && !n) throw l._error;
    if (i === rt.error)
      return w.createElement(Ai.Provider, { value: l, children: n });
    if (i === rt.success)
      return w.createElement(Ai.Provider, { value: l, children: t });
    throw l;
  }
}
function Ey(e) {
  let { children: t } = e,
    n = py(),
    r = typeof t == 'function' ? t(n) : t;
  return w.createElement(w.Fragment, null, r);
}
function m0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: w.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: w.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: w.createElement(e.ErrorBoundary),
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
 */ function vr() {
  return (
    (vr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vr.apply(this, arguments)
  );
}
function Uu(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const si = 'get',
  Ao = 'application/x-www-form-urlencoded';
function lo(e) {
  return e != null && typeof e.tagName == 'string';
}
function xy(e) {
  return lo(e) && e.tagName.toLowerCase() === 'button';
}
function ky(e) {
  return lo(e) && e.tagName.toLowerCase() === 'form';
}
function Cy(e) {
  return lo(e) && e.tagName.toLowerCase() === 'input';
}
function Py(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ry(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Py(e);
}
let Xl = null;
function _y() {
  if (Xl === null)
    try {
      new FormData(document.createElement('form'), 0), (Xl = !1);
    } catch {
      Xl = !0;
    }
  return Xl;
}
const Ly = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Bo(e) {
  return e != null && !Ly.has(e) ? null : e;
}
function Ty(e, t) {
  let n, r, l, i, o;
  if (ky(e)) {
    let a = e.getAttribute('action');
    (r = a ? gt(a, t) : null),
      (n = e.getAttribute('method') || si),
      (l = Bo(e.getAttribute('enctype')) || Ao),
      (i = new FormData(e));
  } else if (xy(e) || (Cy(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let u = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = u ? gt(u, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || si),
      (l =
        Bo(e.getAttribute('formenctype')) ||
        Bo(a.getAttribute('enctype')) ||
        Ao),
      (i = new FormData(a, e)),
      !_y())
    ) {
      let { name: s, type: d, value: c } = e;
      if (d === 'image') {
        let f = s ? s + '.' : '';
        i.append(f + 'x', '0'), i.append(f + 'y', '0');
      } else s && i.append(s, c);
    }
  } else {
    if (lo(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (n = si), (r = null), (l = Ao), (o = e);
  }
  return (
    i && l === 'text/plain' && ((o = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: i, body: o }
  );
}
const Ny = [
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
  Dy = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  My = [
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
  Oy = '6';
try {
  window.__reactRouterVersion = Oy;
} catch {}
const ih = w.createContext({ isTransitioning: !1 }),
  zy = w.createContext(new Map()),
  Fy = 'startTransition',
  Dc = Yh[Fy],
  jy = 'flushSync',
  Mc = ev[jy];
function Iy(e) {
  Dc ? Dc(e) : e();
}
function Fr(e) {
  Mc ? Mc(e) : e();
}
let Uy = class {
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
function y0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = w.useState(n.state),
    [o, a] = w.useState(),
    [u, s] = w.useState({ isTransitioning: !1 }),
    [d, c] = w.useState(),
    [f, x] = w.useState(),
    [y, k] = w.useState(),
    L = w.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    h = w.useCallback(
      (v) => {
        p ? Iy(v) : v();
      },
      [p],
    ),
    m = w.useCallback(
      (v, O) => {
        let {
          deletedFetchers: M,
          unstable_flushSync: A,
          unstable_viewTransitionOpts: Y,
        } = O;
        M.forEach((oe) => L.current.delete(oe)),
          v.fetchers.forEach((oe, Ee) => {
            oe.data !== void 0 && L.current.set(Ee, oe.data);
          });
        let he =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!Y || he) {
          A ? Fr(() => i(v)) : h(() => i(v));
          return;
        }
        if (A) {
          Fr(() => {
            f && (d && d.resolve(), f.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let oe = n.window.document.startViewTransition(() => {
            Fr(() => i(v));
          });
          oe.finished.finally(() => {
            Fr(() => {
              c(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Fr(() => x(oe));
          return;
        }
        f
          ? (d && d.resolve(),
            f.skipTransition(),
            k({
              state: v,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (a(v),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [n.window, f, d, L, h],
    );
  w.useLayoutEffect(() => n.subscribe(m), [n, m]),
    w.useEffect(() => {
      u.isTransitioning && !u.flushSync && c(new Uy());
    }, [u]),
    w.useEffect(() => {
      if (d && o && n.window) {
        let v = o,
          O = d.promise,
          M = n.window.document.startViewTransition(async () => {
            h(() => i(v)), await O;
          });
        M.finished.finally(() => {
          c(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          x(M);
      }
    }, [h, o, d, n.window]),
    w.useEffect(() => {
      d && o && l.location.key === o.location.key && d.resolve();
    }, [d, f, l.location, o]),
    w.useEffect(() => {
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
    w.useEffect(() => {}, []);
  let S = w.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, O, M) =>
          n.navigate(v, {
            state: O,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (v, O, M) =>
          n.navigate(v, {
            replace: !0,
            state: O,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n],
    ),
    R = n.basename || '/',
    P = w.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: R }),
      [n, S, R],
    ),
    T = w.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return w.createElement(
    w.Fragment,
    null,
    w.createElement(
      Sr.Provider,
      { value: P },
      w.createElement(
        ro.Provider,
        { value: l },
        w.createElement(
          zy.Provider,
          { value: L.current },
          w.createElement(
            ih.Provider,
            { value: u },
            w.createElement(
              yy,
              {
                basename: R,
                location: l.location,
                navigationType: l.historyAction,
                navigator: S,
                future: T,
              },
              l.initialized || n.future.v7_partialHydration
                ? w.createElement(Ay, {
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
const Ay = w.memo(By);
function By(e) {
  let { routes: t, future: n, state: r } = e;
  return ly(t, void 0, r, n);
}
const Hy =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  $y = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  oh = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: d,
        unstable_viewTransition: c,
      } = t,
      f = Uu(t, Ny),
      { basename: x } = w.useContext(Rt),
      y,
      k = !1;
    if (typeof s == 'string' && $y.test(s) && ((y = s), Hy))
      try {
        let m = new URL(window.location.href),
          S = s.startsWith('//') ? new URL(m.protocol + s) : new URL(s),
          R = gt(S.pathname, x);
        S.origin === m.origin && R != null
          ? (s = R + S.search + S.hash)
          : (k = !0);
      } catch {}
    let L = ju(s, { relative: l }),
      p = Ky(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: l,
        unstable_viewTransition: c,
      });
    function h(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return w.createElement(
      'a',
      vr({}, f, { href: y || L, onClick: k || i ? r : h, ref: n, target: u }),
    );
  }),
  Vy = w.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: i = '',
        end: o = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: d,
      } = t,
      c = Uu(t, Dy),
      f = xl(u, { relative: c.relative }),
      x = vn(),
      y = w.useContext(ro),
      { navigator: k, basename: L } = w.useContext(Rt),
      p = y != null && Zy(f) && s === !0,
      h = k.encodeLocation ? k.encodeLocation(f).pathname : f.pathname,
      m = x.pathname,
      S =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    l ||
      ((m = m.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (h = h.toLowerCase())),
      S && L && (S = gt(S, L) || S);
    const R = h !== '/' && h.endsWith('/') ? h.length - 1 : h.length;
    let P = m === h || (!o && m.startsWith(h) && m.charAt(R) === '/'),
      T =
        S != null &&
        (S === h || (!o && S.startsWith(h) && S.charAt(h.length) === '/')),
      v = { isActive: P, isPending: T, isTransitioning: p },
      O = P ? r : void 0,
      M;
    typeof i == 'function'
      ? (M = i(v))
      : (M = [
          i,
          P ? 'active' : null,
          T ? 'pending' : null,
          p ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let A = typeof a == 'function' ? a(v) : a;
    return w.createElement(
      oh,
      vr({}, c, {
        'aria-current': O,
        className: M,
        ref: n,
        style: A,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof d == 'function' ? d(v) : d,
    );
  }),
  Wy = w.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: i,
        state: o,
        method: a = si,
        action: u,
        onSubmit: s,
        relative: d,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = e,
      x = Uu(e, My),
      y = Jy(),
      k = Gy(u, { relative: d }),
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
          relative: d,
          preventScrollReset: c,
          unstable_viewTransition: f,
        });
      };
    return w.createElement(
      'form',
      vr({ ref: t, method: L, action: k, onSubmit: l ? s : p }, x),
    );
  });
var Bi;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Bi || (Bi = {}));
var Oc;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Oc || (Oc = {}));
function ah(e) {
  let t = w.useContext(Sr);
  return t || V(!1), t;
}
function Ky(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = ey(),
    s = vn(),
    d = xl(e, { relative: o });
  return w.useCallback(
    (c) => {
      if (Ry(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : fn(s) === fn(d);
        u(e, {
          replace: f,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, d, r, l, n, e, i, o, a],
  );
}
function Qy() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.',
    );
}
let Yy = 0,
  Xy = () => '__' + String(++Yy) + '__';
function Jy() {
  let { router: e } = ah(Bi.UseSubmit),
    { basename: t } = w.useContext(Rt),
    n = hy();
  return w.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), Qy();
      let { action: i, method: o, encType: a, formData: u, body: s } = Ty(r, t);
      if (l.navigate === !1) {
        let d = l.fetcherKey || Xy();
        e.fetch(d, n, l.action || i, {
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
function Gy(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = w.useContext(Rt),
    l = w.useContext($t);
  l || V(!1);
  let [i] = l.matches.slice(-1),
    o = vr({}, xl(e || '.', { relative: n })),
    a = vn();
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
    fn(o)
  );
}
function Zy(e, t) {
  t === void 0 && (t = {});
  let n = w.useContext(ih);
  n == null && V(!1);
  let { basename: r } = ah(Bi.useViewTransitionState),
    l = xl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = gt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = gt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ji(l.pathname, o) != null || ji(l.pathname, i) != null;
}
var qy = -1,
  by = -2,
  eg = -3,
  tg = -4,
  ng = -5,
  rg = -6,
  lg = -7,
  ig = 'B',
  og = 'D',
  uh = 'E',
  ag = 'M',
  ug = 'N',
  sh = 'P',
  sg = 'R',
  cg = 'S',
  dg = 'Y',
  fg = 'U',
  hg = 'Z',
  ch = class {
    constructor() {
      Dl(this, 'promise');
      Dl(this, 'resolve');
      Dl(this, 'reject');
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function pg() {
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
var Ho =
  typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function Ia(e) {
  const { hydrated: t, values: n } = this;
  if (typeof e == 'number') return zc.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const r = n.length;
  for (const l of e) n.push(l);
  return (t.length = n.length), zc.call(this, r);
}
function zc(e) {
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
      case lg:
        s(void 0);
        continue;
      case ng:
        s(null);
        continue;
      case by:
        s(NaN);
        continue;
      case rg:
        s(1 / 0);
        continue;
      case eg:
        s(-1 / 0);
        continue;
      case tg:
        s(-0);
        continue;
    }
    if (t[u]) {
      s(t[u]);
      continue;
    }
    const d = n[u];
    if (!d || typeof d != 'object') {
      (t[u] = d), s(d);
      continue;
    }
    if (Array.isArray(d))
      if (typeof d[0] == 'string') {
        const [c, f, x] = d;
        switch (c) {
          case og:
            s((t[u] = new Date(f)));
            continue;
          case fg:
            s((t[u] = new URL(f)));
            continue;
          case ig:
            s((t[u] = BigInt(f)));
            continue;
          case sg:
            s((t[u] = new RegExp(f, x)));
            continue;
          case dg:
            s((t[u] = Symbol.for(f)));
            continue;
          case cg:
            const y = new Set();
            t[u] = y;
            for (let S = 1; S < d.length; S++)
              o.push([
                d[S],
                (R) => {
                  y.add(R);
                },
              ]);
            s(y);
            continue;
          case ag:
            const k = new Map();
            t[u] = k;
            for (let S = 1; S < d.length; S += 2) {
              const R = [];
              o.push([
                d[S + 1],
                (P) => {
                  R[1] = P;
                },
              ]),
                o.push([
                  d[S],
                  (P) => {
                    R[0] = P;
                  },
                ]),
                a.push(() => {
                  k.set(R[0], R[1]);
                });
            }
            s(k);
            continue;
          case ug:
            const L = Object.create(null);
            t[u] = L;
            for (const S of Object.keys(f).reverse()) {
              const R = [];
              o.push([
                f[S],
                (P) => {
                  R[1] = P;
                },
              ]),
                o.push([
                  Number(S.slice(1)),
                  (P) => {
                    R[0] = P;
                  },
                ]),
                a.push(() => {
                  L[R[0]] = R[1];
                });
            }
            s(L);
            continue;
          case sh:
            if (t[f]) s((t[u] = t[f]));
            else {
              const S = new ch();
              (r[f] = S), s((t[u] = S.promise));
            }
            continue;
          case uh:
            const [, p, h] = d;
            let m = h && Ho && Ho[h] ? new Ho[h](p) : new Error(p);
            (t[u] = m), s(m);
            continue;
          case hg:
            s((t[u] = t[f]));
            continue;
          default:
            if (Array.isArray(l)) {
              const S = [],
                R = d.slice(1);
              for (let P = 0; P < R.length; P++) {
                const T = R[P];
                o.push([
                  T,
                  (v) => {
                    S[P] = v;
                  },
                ]);
              }
              a.push(() => {
                for (const P of l) {
                  const T = P(d[0], ...S);
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
        for (let f = 0; f < d.length; f++) {
          const x = d[f];
          x !== qy &&
            o.push([
              x,
              (y) => {
                c[f] = y;
              },
            ]);
        }
        s(c);
        continue;
      }
    else {
      const c = {};
      t[u] = c;
      for (const f of Object.keys(d).reverse()) {
        const x = [];
        o.push([
          d[f],
          (y) => {
            x[1] = y;
          },
        ]),
          o.push([
            Number(f.slice(1)),
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
async function mg(e, t) {
  const { plugins: n } = t ?? {},
    r = new ch(),
    l = e.pipeThrough(pg()).getReader(),
    i = { values: [], hydrated: [], deferred: {}, plugins: n },
    o = await vg.call(i, l);
  let a = r.promise;
  return (
    o.done
      ? r.resolve()
      : (a = yg
          .call(i, l)
          .then(r.resolve)
          .catch((u) => {
            for (const s of Object.values(i.deferred)) s.reject(u);
            r.reject(u);
          })),
    { done: a.then(() => l.closed), value: o.value }
  );
}
async function vg(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let n;
  try {
    n = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: Ia.call(this, n) };
}
async function yg(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const n = t.value;
    switch (n[0]) {
      case sh: {
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
        const u = Ia.call(this, a);
        i.resolve(u);
        break;
      }
      case uh: {
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
        const u = Ia.call(this, a);
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
 */ const dh = Symbol('SingleFetchRedirect');
/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Se() {
  return (
    (Se = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Se.apply(this, arguments)
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
 */ function zn(e, t) {
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
 */ async function fh(e, t) {
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
 */ function gg(e, t, n) {
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
    l = Cg(e, n);
  return ph(r, l);
}
async function hh(e, t) {
  var n, r;
  if ((!e.css && !t.links) || !Rg()) return;
  let l = [
    ((n = e.css) === null || n === void 0
      ? void 0
      : n.map((a) => ({ rel: 'stylesheet', href: a }))) ?? [],
    ((r = t.links) === null || r === void 0 ? void 0 : r.call(t)) ?? [],
  ].flat(1);
  if (l.length === 0) return;
  let i = [];
  for (let a of l)
    !Au(a) &&
      a.rel === 'stylesheet' &&
      i.push({ ...a, rel: 'preload', as: 'style' });
  let o = i.filter(
    (a) =>
      (!a.media || window.matchMedia(a.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`),
  );
  await Promise.all(o.map(wg));
}
async function wg(e) {
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
function Au(e) {
  return e != null && typeof e.page == 'string';
}
function Sg(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function Eg(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let i = await fh(t.routes[l.route.id], n);
      return i.links ? i.links() : [];
    }),
  );
  return ph(
    r
      .flat(1)
      .filter(Sg)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' },
      ),
  );
}
function Fc(e, t, n, r, l, i) {
  let o = mh(e),
    a = (d, c) => (n[c] ? d.route.id !== n[c].route.id : !0),
    u = (d, c) => {
      var f;
      return (
        n[c].pathname !== d.pathname ||
        (((f = n[c].route.path) === null || f === void 0
          ? void 0
          : f.endsWith('*')) &&
          n[c].params['*'] !== d.params['*'])
      );
    };
  return i === 'data' && l.search !== o.search
    ? t.filter((d, c) => {
        if (!r.routes[d.route.id].hasLoader) return !1;
        if (a(d, c) || u(d, c)) return !0;
        if (d.route.shouldRevalidate) {
          var x;
          let y = d.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams:
              ((x = n[0]) === null || x === void 0 ? void 0 : x.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: d.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof y == 'boolean') return y;
        }
        return !0;
      })
    : t.filter((d, c) => {
        let f = r.routes[d.route.id];
        return (i === 'assets' || f.hasLoader) && (a(d, c) || u(d, c));
      });
}
function xg(e, t, n) {
  let r = mh(e);
  return Bu(
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
function kg(e, t) {
  return Bu(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1),
  );
}
function Cg(e, t) {
  return Bu(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1),
  );
}
function Bu(e) {
  return [...new Set(e)];
}
function Pg(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function ph(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((l, i) => {
    if (t && !Au(i) && i.as === 'script' && i.href && r.has(i.href)) return l;
    let a = JSON.stringify(Pg(i));
    return n.has(a) || (n.add(a), l.push({ key: a, link: i })), l;
  }, []);
}
function mh(e) {
  let t = Ht(e);
  return t.search === void 0 && (t.search = ''), t;
}
let Jl;
function Rg() {
  if (Jl !== void 0) return Jl;
  let e = document.createElement('link');
  return (Jl = e.relList.supports('preload')), (e = null), Jl;
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
 */ const _g = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  },
  Lg = /[&><\u2028\u2029]/g;
function Gl(e) {
  return e.replace(Lg, (t) => _g[t]);
}
function jc(e) {
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
 */ function Tg(e) {
  return e.headers.get('X-Remix-Catch') != null;
}
function Ng(e) {
  return e.headers.get('X-Remix-Error') != null;
}
function Dg(e) {
  return (
    Hu(e) &&
    e.status >= 400 &&
    e.headers.get('X-Remix-Error') == null &&
    e.headers.get('X-Remix-Catch') == null &&
    e.headers.get('X-Remix-Response') == null
  );
}
function Mg(e) {
  return e.headers.get('X-Remix-Redirect') != null;
}
function Og(e) {
  var t;
  return !!(
    (t = e.headers.get('Content-Type')) !== null &&
    t !== void 0 &&
    t.match(/text\/remix-deferred/)
  );
}
function Hu(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function zg(e) {
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
async function vh(e, t, n = 0) {
  let r = new URL(e.url);
  r.searchParams.set('_data', t),
    n > 0 && (await new Promise((a) => setTimeout(a, 5 ** n * 10)));
  let l = await $u(e),
    i = window.__remixRevalidation,
    o = await fetch(r.href, l).catch((a) => {
      if (
        typeof i == 'number' &&
        i === window.__remixRevalidation &&
        (a == null ? void 0 : a.name) === 'TypeError' &&
        n < 3
      )
        return vh(e, t, n + 1);
      throw a;
    });
  if (Ng(o)) {
    let a = await o.json(),
      u = new Error(a.message);
    return (u.stack = a.stack), u;
  }
  if (Dg(o)) {
    let a = await o.text(),
      u = new Error(a);
    return (u.stack = void 0), u;
  }
  return o;
}
async function $u(e) {
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
const Fg = '__deferred_promise:';
async function jg(e) {
  if (!e)
    throw new Error('parseDeferredReadableStream requires stream argument');
  let t,
    n = {};
  try {
    let r = Ig(e),
      i = (await r.next()).value;
    if (!i) throw new Error('no critical data');
    let o = JSON.parse(i);
    if (typeof o == 'object' && o !== null)
      for (let [a, u] of Object.entries(o))
        typeof u != 'string' ||
          !u.startsWith(Fg) ||
          ((t = t || {}),
          (t[a] = new Promise((s, d) => {
            n[a] = {
              resolve: (c) => {
                s(c), delete n[a];
              },
              reject: (c) => {
                d(c), delete n[a];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let a of r) {
            let [u, ...s] = a.split(':'),
              d = s.join(':'),
              c = JSON.parse(d);
            if (u === 'data')
              for (let [f, x] of Object.entries(c)) n[f] && n[f].resolve(x);
            else if (u === 'error')
              for (let [f, x] of Object.entries(c)) {
                let y = new Error(x.message);
                (y.stack = x.stack), n[f] && n[f].reject(y);
              }
          }
          for (let [a, u] of Object.entries(n))
            u.reject(new Ii(`Deferred ${a} will never be resolved`));
        } catch (a) {
          for (let u of Object.values(n)) u.reject(a);
        }
      })(),
      new Pv({ ...o, ...t })
    );
  } catch (r) {
    for (let l of Object.values(n)) l.reject(r);
    throw r;
  }
}
async function* Ig(e) {
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
          let c = o.decode(Ic(...n)).split(`

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
              .decode(Ic(...n))
              .split(
                `

`,
              )
              .filter((d) => d)),
            (n = []))),
        r.shift()
      );
    },
    u = await a();
  for (; u; ) yield u, (u = await a());
}
function Ic(...e) {
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
 */ function g0(e, t) {
  return async ({ request: n, matches: r }) =>
    n.method !== 'GET' ? Ug(n, r) : Ag(e, t, n, r);
}
function Ug(e, t) {
  return Promise.all(
    t.map(async (n) => {
      let r,
        l = await n.resolve(async (i) => ({
          type: 'data',
          result: await i(async () => {
            let a = Vu(e.url),
              u = await $u(e),
              { data: s, status: d } = await Ua(a, u);
            return (r = d), Aa(s, n.route.id);
          }),
        }));
      return Hu(l.result) || wr(l.result)
        ? l
        : { type: l.type, result: Cv(l.result, r) };
    }),
  );
}
function Ag(e, t, n, r) {
  let l;
  return Promise.all(
    r.map(async (i) =>
      i.resolve(async (o) => {
        let a,
          u = Bg(Vu(n.url)),
          s = await $u(n);
        return (
          e.routes[i.route.id].hasClientLoader
            ? (a = await o(async () => {
                u.searchParams.set('_routes', i.route.id);
                let { data: d } = await Ua(u, s);
                return Uc(d, i.route.id);
              }))
            : (a = await o(async () => {
                l ||
                  ((u = yh(
                    e,
                    t,
                    r.map((c) => c.route),
                    r.filter((c) => c.shouldLoad).map((c) => c.route),
                    u,
                  )),
                  (l = Ua(u, s).then(({ data: c }) => c)));
                let d = await l;
                return Uc(d, i.route.id);
              })),
          { type: 'data', result: a }
        );
      }),
    ),
  );
}
function Bg(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let n = [];
  for (let r of t) r && n.push(r);
  for (let r of n) e.searchParams.append('index', r);
  return e;
}
function yh(e, t, n, r, l) {
  let i = (s) => s.filter((d) => e.routes[d].hasLoader).join(',');
  if (
    !n.some((s) => {
      var d, c;
      return (
        ((d = t[s.id]) === null || d === void 0
          ? void 0
          : d.shouldRevalidate) ||
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
          var d;
          return !(
            (d = e.routes[s.id]) !== null &&
            d !== void 0 &&
            d.hasClientLoader
          );
        })
        .map((s) => s.id),
    );
  return a !== u && l.searchParams.set('_routes', u), l;
}
function Vu(e) {
  let t = typeof e == 'string' ? new URL(e, window.location.origin) : e;
  return (
    t.pathname === '/'
      ? (t.pathname = '_root.data')
      : (t.pathname = `${t.pathname.replace(/\/$/, '')}.data`),
    t
  );
}
async function Ua(e, t) {
  let n = await fetch(e, t);
  zn(n.body, 'No response body to decode');
  try {
    let r = await Hg(n.body, window);
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
function Hg(e, t) {
  return mg(e, {
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
          return { value: new On(i, o, l) };
        }
        if (n === 'SingleFetchRedirect') return { value: { [dh]: r[0] } };
      },
    ],
  });
}
function Uc(e, t) {
  let n = e[dh];
  return n ? Aa(n, t) : e[t] !== void 0 ? Aa(e[t], t) : null;
}
function Aa(e, t) {
  if ('error' in e) throw e.error;
  if ('redirect' in e) {
    let n = {};
    return (
      e.revalidate && (n['X-Remix-Revalidate'] = 'yes'),
      e.reload && (n['X-Remix-Reload-Document'] = 'yes'),
      e.replace && (n['X-Remix-Replace'] = 'yes'),
      Yf(e.redirect, { status: e.status, headers: n })
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
 */ class w0 extends w.Component {
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
      ? w.createElement(gh, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
}
function gh({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let n = w.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (wr(e))
    return w.createElement(
      Ba,
      { title: 'Unhandled Thrown Response!' },
      w.createElement(
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
  return w.createElement(
    Ba,
    { title: 'Application Error!', isOutsideRemixApp: t },
    w.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    w.createElement(
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
function Ba({ title: e, renderScripts: t, isOutsideRemixApp: n, children: r }) {
  var l;
  let { routeModules: i } = Er();
  return (l = i.root) !== null && l !== void 0 && l.Layout && !n
    ? r
    : w.createElement(
        'html',
        { lang: 'en' },
        w.createElement(
          'head',
          null,
          w.createElement('meta', { charSet: 'utf-8' }),
          w.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          w.createElement('title', null, e),
        ),
        w.createElement(
          'body',
          null,
          w.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            r,
            t ? w.createElement(a0, null) : null,
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
 */ function $g() {
  return w.createElement(
    Ba,
    { title: 'Loading...', renderScripts: !0 },
    w.createElement('script', {
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
 */ function wh(e) {
  let t = {};
  return (
    Object.values(e).forEach((n) => {
      let r = n.parentId || '';
      t[r] || (t[r] = []), t[r].push(n);
    }),
    t
  );
}
function Vg(e, t, n) {
  let r = Sh(t),
    l =
      t.HydrateFallback && (!n || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? $g
          : void 0,
    i = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => w.createElement(gh, { error: lh() })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(r
          ? {
              element: w.createElement(
                t.Layout,
                null,
                w.createElement(r, null),
              ),
            }
          : { Component: r }),
        ...(i
          ? {
              errorElement: w.createElement(
                t.Layout,
                null,
                w.createElement(i, null),
              ),
            }
          : { ErrorBoundary: i }),
        ...(l
          ? {
              hydrateFallbackElement: w.createElement(
                t.Layout,
                null,
                w.createElement(l, null),
              ),
            }
          : { HydrateFallback: l }),
      }
    : { Component: r, ErrorBoundary: i, HydrateFallback: l };
}
function S0(e, t, n, r, l, i) {
  return Wu(t, n, r, l, i, '', wh(t), e);
}
function Zl(e, t, n) {
  if (n) {
    let o = `You cannot call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} in SPA Mode (routeId: "${t.id}")`;
    throw (console.error(o), new On(400, 'Bad Request', new Error(o), !0));
  }
  let l = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction))
    throw (console.error(l), new On(400, 'Bad Request', new Error(l), !0));
}
function $o(e, t) {
  let n = e === 'clientAction' ? 'a' : 'an',
    r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
  throw (console.error(r), new On(405, 'Method Not Allowed', new Error(r), !0));
}
function Wu(e, t, n, r, l, i = '', o = wh(e), a) {
  return (o[i] || []).map((u) => {
    let s = t[u.id];
    async function d(m, S, R) {
      if (typeof R == 'function') return await R();
      let P = await Kg(m, u);
      return S ? Qg(P) : P;
    }
    function c(m, S, R) {
      return u.hasLoader ? d(m, S, R) : Promise.resolve(null);
    }
    function f(m, S, R) {
      if (!u.hasAction) throw $o('action', u.id);
      return d(m, S, R);
    }
    async function x(m) {
      let S = t[u.id],
        R = S ? hh(u, S) : Promise.resolve();
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
        ...Vg(u, s, l),
        handle: s.handle,
        shouldRevalidate: a
          ? Ac(u.id, s.shouldRevalidate, a)
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
      (y.loader = async ({ request: P, params: T }, v) => {
        try {
          return await x(
            async () => (
              zn(s, 'No `routeModule` available for critical-route loader'),
              s.clientLoader
                ? s.clientLoader({
                    request: P,
                    params: T,
                    async serverLoader() {
                      if ((Zl('loader', u, l), R)) {
                        if (S !== void 0) throw S;
                        return m;
                      }
                      return c(P, !0, v);
                    },
                  })
                : l
                  ? null
                  : c(P, !1, v)
            ),
          );
        } finally {
          R = !1;
        }
      }),
        (y.loader.hydrate = Xg(u, s, l)),
        (y.action = ({ request: P, params: T }, v) =>
          x(async () => {
            if (
              (zn(s, 'No `routeModule` available for critical-route action'),
              !s.clientAction)
            ) {
              if (l) throw $o('clientAction', u.id);
              return f(P, !1, v);
            }
            return s.clientAction({
              request: P,
              params: T,
              async serverAction() {
                return Zl('action', u, l), f(P, !0, v);
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
              if (l) throw $o('clientAction', u.id);
              return f(m, !1, S);
            })),
        (y.lazy = async () => {
          let m = await Wg(u, t),
            S = { ...m };
          if (m.clientLoader) {
            let R = m.clientLoader;
            S.loader = (P, T) =>
              R({
                ...P,
                async serverLoader() {
                  return Zl('loader', u, l), c(P.request, !0, T);
                },
              });
          }
          if (m.clientAction) {
            let R = m.clientAction;
            S.action = (P, T) =>
              R({
                ...P,
                async serverAction() {
                  return Zl('action', u, l), f(P.request, !0, T);
                },
              });
          }
          return (
            a && (S.shouldRevalidate = Ac(u.id, m.shouldRevalidate, a)),
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
    let h = Wu(e, t, n, r, l, u.id, o, a);
    return h.length > 0 && (y.children = h), y;
  });
}
function Ac(e, t, n) {
  let r = !1;
  return (l) =>
    r ? (t ? t(l) : l.defaultShouldRevalidate) : ((r = !0), n.has(e));
}
async function Wg(e, t) {
  let n = await fh(e, t);
  return (
    await hh(e, n),
    {
      Component: Sh(n),
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
async function Kg(e, t) {
  let n = await vh(e, t.id);
  if (n instanceof Error) throw n;
  if (Mg(n)) throw Yg(n);
  if (Tg(n)) throw n;
  return Og(n) && n.body ? await jg(n.body) : n;
}
function Qg(e) {
  if (zg(e)) return e.data;
  if (Hu(e)) {
    let t = e.headers.get('Content-Type');
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
  }
  return e;
}
function Yg(e) {
  let t = parseInt(e.headers.get('X-Remix-Status'), 10) || 302,
    n = e.headers.get('X-Remix-Redirect'),
    r = {},
    l = e.headers.get('X-Remix-Revalidate');
  l && (r['X-Remix-Revalidate'] = l);
  let i = e.headers.get('X-Remix-Reload-Document');
  i && (r['X-Remix-Reload-Document'] = i);
  let o = e.headers.get('X-Remix-Replace');
  return o && (r['X-Remix-Replace'] = o), Yf(n, { status: t, headers: r });
}
function Sh(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0))
    return e.default;
}
function Xg(e, t, n) {
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
 */ const ci = new Set(),
  Jg = 1e3,
  Hi = new Set(),
  Gg = 7680;
function Ku(e, t) {
  return e.unstable_lazyRouteDiscovery === !0 && !t;
}
function Zg(e, t) {
  let n = new Set(t.state.matches.map((o) => o.route.id)),
    r = t.state.location.pathname.split('/').filter(Boolean),
    l = ['/'];
  for (r.pop(); r.length > 0; ) l.push(`/${r.join('/')}`), r.pop();
  l.forEach((o) => {
    let a = Mt(t.routes, o, t.basename);
    a && a.forEach((u) => n.add(u.route.id));
  });
  let i = [...n].reduce((o, a) => Object.assign(o, { [a]: e.routes[a] }), {});
  return { ...e, routes: i };
}
function E0(e, t, n, r, l) {
  if (Ku(n, r))
    return async ({ path: i, patch: o }) => {
      Hi.has(i) || (await Eh([i], e, t, n, r, l, o));
    };
}
function x0(e, t, n, r, l) {
  w.useEffect(() => {
    var i;
    if (
      !Ku(r, l) ||
      ((i = navigator.connection) === null || i === void 0
        ? void 0
        : i.saveData) === !0
    )
      return;
    function o(c) {
      let f =
        c.tagName === 'FORM'
          ? c.getAttribute('action')
          : c.getAttribute('href');
      if (!f) return;
      let x = new URL(f, window.location.origin);
      Hi.has(x.pathname) || ci.add(x.pathname);
    }
    async function a() {
      let c = Array.from(ci.keys()).filter((f) =>
        Hi.has(f) ? (ci.delete(f), !1) : !0,
      );
      if (c.length !== 0)
        try {
          await Eh(c, t, n, r, l, e.basename, e.patchRoutes);
        } catch (f) {
          console.error('Failed to fetch manifest patches', f);
        }
    }
    document.body
      .querySelectorAll('a[data-discover], form[data-discover]')
      .forEach((c) => o(c)),
      a();
    let u = bg(a, 100);
    function s(c) {
      return c.nodeType === Node.ELEMENT_NODE;
    }
    let d = new MutationObserver((c) => {
      let f = new Set();
      c.forEach((x) => {
        [x.target, ...x.addedNodes].forEach((y) => {
          s(y) &&
            (((y.tagName === 'A' && y.getAttribute('data-discover')) ||
              (y.tagName === 'FORM' && y.getAttribute('data-discover'))) &&
              f.add(y),
            y.tagName !== 'A' &&
              y
                .querySelectorAll('a[data-discover], form[data-discover]')
                .forEach((k) => f.add(k)));
        });
      }),
        f.forEach((x) => o(x)),
        u();
    });
    return (
      d.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => d.disconnect()
    );
  }, [r, l, t, n, e]);
}
async function Eh(e, t, n, r, l, i, o) {
  let a = `${i ?? '/'}/__manifest`.replace(/\/+/g, '/'),
    u = new URL(a, window.location.origin);
  if (
    (u.searchParams.set('version', t.version),
    e.forEach((y) => u.searchParams.append('p', y)),
    u.toString().length > Gg)
  ) {
    ci.clear();
    return;
  }
  let s = await fetch(u);
  if (s.ok) {
    if (s.status >= 400) throw new Error(await s.text());
  } else throw new Error(`${s.status} ${s.statusText}`);
  let d = await s.json(),
    c = new Set(Object.keys(t.routes)),
    f = Object.values(d).reduce(
      (y, k) => (c.has(k.id) ? y : Object.assign(y, { [k.id]: k })),
      {},
    );
  Object.assign(t.routes, f), e.forEach((y) => qg(y, Hi));
  let x = new Set();
  Object.values(f).forEach((y) => {
    (!y.parentId || !f[y.parentId]) && x.add(y.parentId);
  }),
    x.forEach((y) => o(y || null, Wu(f, n, null, r, l, y)));
}
function qg(e, t) {
  if (t.size >= Jg) {
    let n = t.values().next().value;
    t.delete(n);
  }
  t.add(e);
}
function bg(e, t) {
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
 */ function xh() {
  let e = w.useContext(Sr);
  return (
    zn(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    e
  );
}
function io() {
  let e = w.useContext(ro);
  return (
    zn(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    e
  );
}
const kh = w.createContext(void 0);
kh.displayName = 'Remix';
function Er() {
  let e = w.useContext(kh);
  return zn(e, 'You must render this element inside a <Remix> element'), e;
}
function Ch(e, t) {
  let [n, r] = w.useState(!1),
    [l, i] = w.useState(!1),
    {
      onFocus: o,
      onBlur: a,
      onMouseEnter: u,
      onMouseLeave: s,
      onTouchStart: d,
    } = t,
    c = w.useRef(null);
  w.useEffect(() => {
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
  let f = () => {
      e === 'intent' && r(!0);
    },
    x = () => {
      e === 'intent' && (r(!1), i(!1));
    };
  return (
    w.useEffect(() => {
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
        onFocus: jr(o, f),
        onBlur: jr(a, x),
        onMouseEnter: jr(u, f),
        onMouseLeave: jr(s, x),
        onTouchStart: jr(d, f),
      },
    ]
  );
}
const Qu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Yu(e, t, n) {
  return e === 'render' && !t && !n ? 'true' : void 0;
}
let e0 = w.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
    let i = typeof e == 'string' && Qu.test(e),
      o = ju(e),
      [a, u, s] = Ch(t, r);
    return w.createElement(
      w.Fragment,
      null,
      w.createElement(
        Vy,
        Se({}, r, s, {
          ref: Ph(l, u),
          to: e,
          'data-discover': Yu(n, i, r.reloadDocument),
        }),
      ),
      a && !i ? w.createElement(Ju, { page: o }) : null,
    );
  },
);
e0.displayName = 'NavLink';
let t0 = w.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
    let i = typeof e == 'string' && Qu.test(e),
      o = ju(e),
      [a, u, s] = Ch(t, r);
    return w.createElement(
      w.Fragment,
      null,
      w.createElement(
        oh,
        Se({}, r, s, {
          ref: Ph(l, u),
          to: e,
          'data-discover': Yu(n, i, r.reloadDocument),
        }),
      ),
      a && !i ? w.createElement(Ju, { page: o }) : null,
    );
  },
);
t0.displayName = 'Link';
let n0 = w.forwardRef(({ discover: e = 'render', ...t }, n) => {
  let r = typeof t.action == 'string' && Qu.test(t.action);
  return w.createElement(
    Wy,
    Se({}, t, { ref: n, 'data-discover': Yu(e, r, t.reloadDocument) }),
  );
});
n0.displayName = 'Form';
function jr(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Xu(e, t, n) {
  if (n && !di) return [e[0]];
  if (t) {
    let r = e.findIndex((l) => t[l.route.id] !== void 0);
    return e.slice(0, r + 1);
  }
  return e;
}
function k0() {
  let { isSpaMode: e, manifest: t, routeModules: n, criticalCss: r } = Er(),
    { errors: l, matches: i } = io(),
    o = Xu(i, l, e),
    a = w.useMemo(() => gg(o, n, t), [o, n, t]);
  return w.createElement(
    w.Fragment,
    null,
    r
      ? w.createElement('style', { dangerouslySetInnerHTML: { __html: r } })
      : null,
    a.map(({ key: u, link: s }) =>
      Au(s)
        ? w.createElement(Ju, Se({ key: u }, s))
        : w.createElement('link', Se({ key: u }, s)),
    ),
  );
}
function Ju({ page: e, ...t }) {
  let { router: n } = xh(),
    r = w.useMemo(() => Mt(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? w.createElement(l0, Se({ page: e, matches: r }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function r0(e) {
  let { manifest: t, routeModules: n } = Er(),
    [r, l] = w.useState([]);
  return (
    w.useEffect(() => {
      let i = !1;
      return (
        Eg(e, t, n).then((o) => {
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
function l0({ page: e, matches: t, ...n }) {
  let r = vn(),
    { future: l, manifest: i, routeModules: o } = Er(),
    { matches: a } = io(),
    u = w.useMemo(() => Fc(e, t, a, i, r, 'data'), [e, t, a, i, r]),
    s = w.useMemo(() => Fc(e, t, a, i, r, 'assets'), [e, t, a, i, r]),
    d = w.useMemo(() => xg(e, u, i), [u, e, i]),
    c = w.useMemo(() => kg(s, i), [s, i]),
    f = r0(s),
    x = null;
  if (!l.unstable_singleFetch)
    x = d.map((y) =>
      w.createElement(
        'link',
        Se({ key: y, rel: 'prefetch', as: 'fetch', href: y }, n),
      ),
    );
  else if (u.length > 0) {
    let y = yh(
      i,
      o,
      t.map((k) => k.route),
      u.map((k) => k.route),
      Vu(e),
    );
    y.searchParams.get('_routes') !== '' &&
      (x = w.createElement(
        'link',
        Se(
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
  return w.createElement(
    w.Fragment,
    null,
    x,
    c.map((y) =>
      w.createElement('link', Se({ key: y, rel: 'modulepreload', href: y }, n)),
    ),
    f.map(({ key: y, link: k }) => w.createElement('link', Se({ key: y }, k))),
  );
}
function C0() {
  let { isSpaMode: e, routeModules: t } = Er(),
    { errors: n, matches: r, loaderData: l } = io(),
    i = vn(),
    o = Xu(r, n, e),
    a = null;
  n && (a = n[o[o.length - 1].route.id]);
  let u = [],
    s = null,
    d = [];
  for (let c = 0; c < o.length; c++) {
    let f = o[c],
      x = f.route.id,
      y = l[x],
      k = f.params,
      L = t[x],
      p = [],
      h = {
        id: x,
        data: y,
        meta: [],
        params: f.params,
        pathname: f.pathname,
        handle: f.route.handle,
        error: a,
      };
    if (
      ((d[c] = h),
      L != null && L.meta
        ? (p =
            typeof L.meta == 'function'
              ? L.meta({
                  data: y,
                  params: k,
                  location: i,
                  matches: d,
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
          f.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`,
      );
    (h.meta = p), (d[c] = h), (u = [...p]), (s = u);
  }
  return w.createElement(
    w.Fragment,
    null,
    u.flat().map((c) => {
      if (!c) return null;
      if ('tagName' in c) {
        let { tagName: f, ...x } = c;
        if (!i0(f))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${f}. Expected either 'link' or 'meta'`,
            ),
            null
          );
        let y = f;
        return w.createElement(y, Se({ key: JSON.stringify(x) }, x));
      }
      if ('title' in c)
        return w.createElement('title', { key: 'title' }, String(c.title));
      if (
        ('charset' in c &&
          (c.charSet ?? (c.charSet = c.charset), delete c.charset),
        'charSet' in c && c.charSet != null)
      )
        return typeof c.charSet == 'string'
          ? w.createElement('meta', { key: 'charSet', charSet: c.charSet })
          : null;
      if ('script:ld+json' in c)
        try {
          let f = JSON.stringify(c['script:ld+json']);
          return w.createElement('script', {
            key: `script:ld+json:${f}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: { __html: f },
          });
        } catch {
          return null;
        }
      return w.createElement('meta', Se({ key: JSON.stringify(c) }, c));
    }),
  );
}
function i0(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
function o0(e) {
  return w.createElement(gy, e);
}
let di = !1;
function a0(e) {
  let {
      manifest: t,
      serverHandoffString: n,
      abortDelay: r,
      serializeError: l,
      isSpaMode: i,
      future: o,
      renderMeta: a,
    } = Er(),
    { router: u, static: s, staticContext: d } = xh(),
    { matches: c } = io(),
    f = Ku(o, i);
  a && (a.didRenderScripts = !0);
  let x = Xu(c, null, i);
  w.useEffect(() => {
    di = !0;
  }, []);
  let y = (P, T) => {
      let v;
      return (
        l && T instanceof Error ? (v = l(T)) : (v = T),
        `${JSON.stringify(P)}:__remixContext.p(!1, ${Gl(JSON.stringify(v))})`
      );
    },
    k = (P, T, v) => {
      let O;
      try {
        O = JSON.stringify(v);
      } catch (M) {
        return y(T, M);
      }
      return `${JSON.stringify(T)}:__remixContext.p(${Gl(O)})`;
    },
    L = (P, T, v) => {
      let O;
      return (
        l && v instanceof Error ? (O = l(v)) : (O = v),
        `__remixContext.r(${JSON.stringify(P)}, ${JSON.stringify(T)}, !1, ${Gl(JSON.stringify(O))})`
      );
    },
    p = (P, T, v) => {
      let O;
      try {
        O = JSON.stringify(v);
      } catch (M) {
        return L(P, T, M);
      }
      return `__remixContext.r(${JSON.stringify(P)}, ${JSON.stringify(T)}, ${Gl(O)})`;
    },
    h = [],
    m = w.useMemo(() => {
      var P;
      let T = o.unstable_singleFetch
          ? 'window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());'
          : '',
        v = d ? `window.__remixContext = ${n};${T}` : ' ',
        O = o.unstable_singleFetch || d == null ? void 0 : d.activeDeferreds;
      v += O
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
          Object.entries(O).map(([A, Y]) => {
            let he = new Set(Y.pendingKeys),
              oe = Y.deferredKeys.map((Ee) => {
                if (he.has(Ee))
                  return (
                    h.push(
                      w.createElement(Bc, {
                        key: `${A} | ${Ee}`,
                        deferredData: Y,
                        routeId: A,
                        dataKey: Ee,
                        scriptProps: e,
                        serializeData: p,
                        serializeError: L,
                      }),
                    ),
                    `${JSON.stringify(Ee)}:__remixContext.n(${JSON.stringify(A)}, ${JSON.stringify(Ee)})`
                  );
                {
                  let Fe = Y.data[Ee];
                  return typeof Fe._error < 'u'
                    ? y(Ee, Fe._error)
                    : k(A, Ee, Fe._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(A)}], {${oe}});`;
          }).join(`
`) +
          (h.length > 0 ? `__remixContext.a=${h.length};` : '')
        : '';
      let M = s
        ? `${(P = t.hmr) !== null && P !== void 0 && P.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${f ? '' : `import ${JSON.stringify(t.url)}`};
${x.map(
  (A, Y) =>
    `import * as route${Y} from ${JSON.stringify(t.routes[A.route.id].module)};`,
).join(`
`)}
${f ? `window.__remixManifest = ${JSON.stringify(Zg(t, u), null, 2)};` : ''}
window.__remixRouteModules = {${x.map((A, Y) => `${JSON.stringify(A.route.id)}:route${Y}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
        : ' ';
      return w.createElement(
        w.Fragment,
        null,
        w.createElement(
          'script',
          Se({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: jc(v),
            type: void 0,
          }),
        ),
        w.createElement(
          'script',
          Se({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: jc(M),
            type: 'module',
            async: !0,
          }),
        ),
      );
    }, []);
  if (!s && typeof __remixContext == 'object' && __remixContext.a)
    for (let P = 0; P < __remixContext.a; P++)
      h.push(
        w.createElement(Bc, {
          key: P,
          scriptProps: e,
          serializeData: p,
          serializeError: L,
        }),
      );
  let S = x
      .map((P) => {
        let T = t.routes[P.route.id];
        return (T.imports || []).concat([T.module]);
      })
      .flat(1),
    R = di ? [] : t.entry.imports.concat(S);
  return di
    ? null
    : w.createElement(
        w.Fragment,
        null,
        f
          ? null
          : w.createElement('link', {
              rel: 'modulepreload',
              href: t.url,
              crossOrigin: e.crossOrigin,
            }),
        w.createElement('link', {
          rel: 'modulepreload',
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        s0(R).map((P) =>
          w.createElement('link', {
            key: P,
            rel: 'modulepreload',
            href: P,
            crossOrigin: e.crossOrigin,
          }),
        ),
        m,
        h,
      );
}
function Bc({
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
      zn(
        t.pendingKeys.includes(e),
        `Deferred data for route ${n} with key ${e} was not pending but tried to render a script for it.`,
      ),
    w.createElement(
      w.Suspense,
      {
        fallback:
          typeof document > 'u' && t && e && n
            ? null
            : w.createElement(
                'script',
                Se({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: ' ' },
                }),
              ),
      },
      typeof document > 'u' && t && e && n
        ? w.createElement(o0, {
            resolve: t.data[e],
            errorElement: w.createElement(u0, {
              dataKey: e,
              routeId: n,
              scriptProps: r,
              serializeError: i,
            }),
            children: (o) =>
              w.createElement(
                'script',
                Se({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: l(n, e, o) },
                }),
              ),
          })
        : w.createElement(
            'script',
            Se({}, r, {
              async: !0,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: { __html: ' ' },
            }),
          ),
    )
  );
}
function u0({ dataKey: e, routeId: t, scriptProps: n, serializeError: r }) {
  let l = my();
  return w.createElement(
    'script',
    Se({}, n, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: r(t, e, l) },
    }),
  );
}
function s0(e) {
  return [...new Set(e)];
}
function Ph(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
export {
  On as E,
  t0 as L,
  C0 as M,
  p0 as O,
  kh as R,
  a0 as S,
  Wu as a,
  h0 as b,
  S0 as c,
  Hg as d,
  f0 as e,
  m0 as f,
  g0 as g,
  E0 as h,
  zn as i,
  w0 as j,
  y0 as k,
  k0 as l,
  Mt as m,
  Vf as r,
  Xg as s,
  x0 as u,
};