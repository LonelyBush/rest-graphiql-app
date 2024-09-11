import { d as i } from './index-k4sjWK-j.js';
var p = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  m = i.createContext && i.createContext(p),
  b = ['attr', 'size', 'title'];
function h(t, e) {
  if (t == null) return {};
  var r = O(t, e),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    for (a = 0; a < c.length; a++)
      (n = c[a]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, n) &&
          (r[n] = t[n]);
  }
  return r;
}
function O(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function l() {
  return (
    (l = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    l.apply(this, arguments)
  );
}
function g(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function u(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? g(Object(r), !0).forEach(function (n) {
          y(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : g(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function y(t, e, r) {
  return (
    (e = w(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function w(t) {
  var e = j(t, 'string');
  return typeof e == 'symbol' ? e : e + '';
}
function j(t, e) {
  if (typeof t != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || 'default');
    if (typeof n != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(t);
}
function v(t) {
  return (
    t &&
    t.map((e, r) => i.createElement(e.tag, u({ key: r }, e.attr), v(e.child)))
  );
}
function s(t) {
  return (e) => i.createElement(P, l({ attr: u({}, t.attr) }, e), v(t.child));
}
function P(t) {
  var e = (r) => {
    var { attr: n, size: a, title: c } = t,
      d = h(t, b),
      f = a || r.size || '1em',
      o;
    return (
      r.className && (o = r.className),
      t.className && (o = (o ? o + ' ' : '') + t.className),
      i.createElement(
        'svg',
        l(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          r.attr,
          n,
          d,
          {
            className: o,
            style: u(u({ color: t.color || r.color }, r.style), t.style),
            height: f,
            width: f,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        c && i.createElement('title', null, c),
        t.children,
      )
    );
  };
  return m !== void 0 ? i.createElement(m.Consumer, null, (r) => e(r)) : e(p);
}
function C(t) {
  return s({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        },
        child: [],
      },
    ],
  })(t);
}
function x(t) {
  return s({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z',
        },
        child: [],
      },
    ],
  })(t);
}
function E(t) {
  return s({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z',
        },
        child: [],
      },
    ],
  })(t);
}
export { C as F, E as a, x as b };