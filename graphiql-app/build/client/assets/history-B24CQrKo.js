import { d as p, r as B, j as t } from './index-DeHznlkS.js';
import { a as l } from './react-redux-ulQB2trU.js';
import { u as f } from './useAuth-hook-6GkHdI7V.js';
import { u as g, B as h } from './button-DYUIl9Ir.js';
import { L as j } from './components-D8uQ7O_9.js';
import './auth-context-CQxQiTwU.js';
const x = '_historyBlock_803f7_1',
  _ = '_buttonBlock_803f7_11',
  y = '_resultBlock_803f7_16',
  L = '_method_803f7_21',
  b = '_linksBlock_803f7_25',
  e = {
    historyBlock: x,
    buttonBlock: _,
    resultBlock: y,
    method: L,
    linksBlock: b,
  };
function T() {
  const { t: r } = g(),
    { user: i, loading: a } = f(),
    n = p();
  B.useEffect(() => {
    a || n(i ? '/history' : '/');
  }, [i, a, n]);
  const u = l((s) => s.restLinks.restLinks),
    d = l((s) => s.graphiQLLinks.graphiQLLinks),
    c = [...u, ...d].sort((s, o) => {
      const m = new Date(s.data).getTime(),
        k = new Date(o.data).getTime();
      return m - k;
    });
  return t.jsx('div', {
    className: e.historyBlock,
    children:
      c.length === 0
        ? t.jsxs(t.Fragment, {
            children: [
              t.jsxs('p', { children: [r('NoHistory'), ' '] }),
              t.jsxs('div', {
                className: e.buttonBlock,
                children: [
                  ' ',
                  t.jsx(h, {
                    btnType: 'button',
                    to: '/REST/GET',
                    children: r('RESTClient'),
                  }),
                  t.jsx(h, {
                    btnType: 'button',
                    to: '/graphiql',
                    children: r('GraphiQLClient'),
                  }),
                ],
              }),
            ],
          })
        : t.jsxs(t.Fragment, {
            children: [
              ' ',
              t.jsx('h2', { children: r('HistoryRequests') }),
              t.jsx('div', {
                className: e.linksBlock,
                children: c.map((s, o) =>
                  t.jsxs(
                    'div',
                    {
                      className: e.resultBlock,
                      children: [
                        t.jsx(
                          'p',
                          {
                            className: e.method,
                            children: s.requestData.method,
                          },
                          s.requestData.method + o,
                        ),
                        t.jsx(
                          j,
                          {
                            to: `${s.urlPage}`,
                            children: `${s.requestData.url}`,
                          },
                          s.urlPage + o,
                        ),
                      ],
                    },
                    s.requestData.method + s.urlPage + o,
                  ),
                ),
              }),
            ],
          }),
  });
}
function R() {
  return t.jsx(T, {});
}
export { R as default };
