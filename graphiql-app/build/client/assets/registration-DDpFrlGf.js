import { d as S, r as b, j as r } from './index-wWMGXTih.js';
import {
  c as j,
  a as n,
  b as C,
  u as E,
  F as i,
  o as _,
  d as y,
} from './authError-C6dDEtMD.js';
import { B as R } from './react-toastify.esm-D_hN4gkv.js';
import { u as k, B as N } from './button-CmpeQtVi.js';
import { r as $ } from './auth-context-BVoH_ZDZ.js';
import { L as q } from './loading-DBB8G3ZU.js';
import { u as v } from './useAuth-hook-DYEurJeX.js';
import './iconBase-QCAFBzlY.js';
const F = '_signInFormSection_7ml70_1',
  M = '_formWrapper_7ml70_15',
  I = '_errorMessage_7ml70_35',
  f = { signInFormSection: F, formWrapper: M, errorMessage: I },
  L = (e) =>
    j().shape({
      nickname: n()
        .matches(/^[a-zA-Z0-9]*$/, e('RemoveSpecialCharacters'))
        .required(e('NicknameRequired')),
      email: n().email(e('InvalidEmail')).required(e('EmailRequired')),
      password: n()
        .required(e('PasswordRequired'))
        .matches(/.*\d.*/, e('PasswordContainsNumber'))
        .matches(/.*[A-Z].*/, e('PasswordContainsUppercase'))
        .matches(/.*[a-z].*/, e('PasswordContainsLowercase'))
        .matches(
          /.*[!@#$%^&*(),.?":{}|<>].*/,
          e('PasswordContainsSpecialCharacter'),
        )
        .min(6, e('PasswordMinLength')),
      confirmPassword: n().oneOf([C('password')], e('PasswordMustMatch')),
    });
function W() {
  var d, l, p, u;
  const { t: e } = k(),
    h = L(e),
    {
      register: a,
      handleSubmit: w,
      formState: { errors: s },
    } = E({ mode: 'onChange', resolver: _(h) }),
    { user: o, loading: c } = v(),
    m = S();
  b.useEffect(() => {
    o != null && o.displayName && m('/');
  }, [o, c, m]);
  const P = async (t) => {
    const x = $(t.nickname, t.email, t.password);
    R.promise(x, {
      pending: {
        render() {
          return 'Loading...';
        },
      },
      success: {
        render() {
          return m('/'), `${e('accessGranted')}`;
        },
      },
      error: {
        render({ data: g }) {
          return `${g instanceof Error ? e(y(g)) : ''}`;
        },
      },
    });
  };
  return c
    ? r.jsx(q, {})
    : r.jsxs('div', {
        className: f.signInFormSection,
        children: [
          r.jsx('h2', { children: e('Registration') }),
          r.jsxs('form', {
            onSubmit: w(P),
            className: f.formWrapper,
            children: [
              r.jsx(i, {
                type: 'text',
                label: e('Nickname'),
                name: 'nickname',
                placeholder: 'JohnDoe',
                register: a,
                error:
                  (d = s.nickname) != null && d.message
                    ? s.nickname.message
                    : '',
              }),
              r.jsx(i, {
                type: 'email',
                label: e('Email'),
                name: 'email',
                placeholder: 'example@gmail.com',
                register: a,
                error:
                  (l = s.email) != null && l.message ? s.email.message : '',
              }),
              r.jsx(i, {
                type: 'password',
                label: e('Password'),
                name: 'password',
                placeholder: e('Password'),
                register: a,
                error:
                  (p = s.password) != null && p.message
                    ? s.password.message
                    : '',
              }),
              r.jsx(i, {
                type: 'password',
                label: e('ConfirmPassword'),
                name: 'confirmPassword',
                placeholder: e('ConfirmPassword'),
                register: a,
                error:
                  (u = s.confirmPassword) != null && u.message
                    ? s.confirmPassword.message
                    : '',
              }),
              r.jsx(N, { btnType: 'submit', children: e('Submit') }),
            ],
          }),
        ],
      });
}
function O() {
  return r.jsx(W, {});
}
export { O as default };