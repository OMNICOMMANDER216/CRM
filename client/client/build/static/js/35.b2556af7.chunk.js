"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[35], { 195: function _(t, e, n) {
    "use strict";
    var i = n(9),
        a = n(36),
        r = n(0),
        o = n.n(r),
        s = n(1),
        l = n.n(s),
        u = n(349),
        d = n.n(u),
        c = n(350),
        h = { tag: c.m, flush: l.a.bool, className: l.a.string, cssModule: l.a.object },
        f = function f(t) {
      var e = t.className,
          n = t.cssModule,
          r = t.tag,
          s = t.flush,
          l = Object(a.a)(t, ["className", "cssModule", "tag", "flush"]),
          u = Object(c.i)(d()(e, "list-group", !!s && "list-group-flush"), n);return o.a.createElement(r, Object(i.a)({}, l, { className: u }));
    };f.propTypes = h, f.defaultProps = { tag: "ul" }, e.a = f;
  }, 196: function _(t, e, n) {
    "use strict";
    var i = n(9),
        a = n(36),
        r = n(0),
        o = n.n(r),
        s = n(1),
        l = n.n(s),
        u = n(349),
        d = n.n(u),
        c = n(350),
        h = { tag: c.m, active: l.a.bool, disabled: l.a.bool, color: l.a.string, action: l.a.bool, className: l.a.any, cssModule: l.a.object },
        f = function f(t) {
      t.preventDefault();
    },
        g = function g(t) {
      var e = t.className,
          n = t.cssModule,
          r = t.tag,
          s = t.active,
          l = t.disabled,
          u = t.action,
          h = t.color,
          g = Object(a.a)(t, ["className", "cssModule", "tag", "active", "disabled", "action", "color"]),
          p = Object(c.i)(d()(e, !!s && "active", !!l && "disabled", !!u && "list-group-item-action", !!h && "list-group-item-" + h, "list-group-item"), n);return l && (g.onClick = f), o.a.createElement(r, Object(i.a)({}, g, { className: p }));
    };g.propTypes = h, g.defaultProps = { tag: "li" }, e.a = g;
  }, 352: function _(t, e) {
    t.exports = function (t) {
      var e = typeof t === "undefined" ? "undefined" : _typeof(t);return !!t && ("object" == e || "function" == e);
    };
  }, 412: function _(t, e, n) {
    t.exports = function (t) {
      "use strict";
      t = t && t.hasOwnProperty("default") ? t.default : t;var e = { rgb2hsl: n, rgb2hsv: i, rgb2hwb: a, rgb2cmyk: o, rgb2keyword: s, rgb2xyz: l, rgb2lab: u, rgb2lch: function rgb2lch(t) {
          return y(u(t));
        }, hsl2rgb: d, hsl2hsv: function hsl2hsv(t) {
          var e = t[0],
              n = t[1] / 100,
              i = t[2] / 100;return 0 === i ? [0, 0, 0] : [e, 2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n) * 100, (i + n) / 2 * 100];
        }, hsl2hwb: function hsl2hwb(t) {
          return a(d(t));
        }, hsl2cmyk: function hsl2cmyk(t) {
          return o(d(t));
        }, hsl2keyword: function hsl2keyword(t) {
          return s(d(t));
        }, hsv2rgb: c, hsv2hsl: function hsv2hsl(t) {
          var e,
              n,
              i = t[0],
              a = t[1] / 100,
              r = t[2] / 100;return e = a * r, [i, 100 * (e = (e /= (n = (2 - a) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)];
        }, hsv2hwb: function hsv2hwb(t) {
          return a(c(t));
        }, hsv2cmyk: function hsv2cmyk(t) {
          return o(c(t));
        }, hsv2keyword: function hsv2keyword(t) {
          return s(c(t));
        }, hwb2rgb: h, hwb2hsl: function hwb2hsl(t) {
          return n(h(t));
        }, hwb2hsv: function hwb2hsv(t) {
          return i(h(t));
        }, hwb2cmyk: function hwb2cmyk(t) {
          return o(h(t));
        }, hwb2keyword: function hwb2keyword(t) {
          return s(h(t));
        }, cmyk2rgb: f, cmyk2hsl: function cmyk2hsl(t) {
          return n(f(t));
        }, cmyk2hsv: function cmyk2hsv(t) {
          return i(f(t));
        }, cmyk2hwb: function cmyk2hwb(t) {
          return a(f(t));
        }, cmyk2keyword: function cmyk2keyword(t) {
          return s(f(t));
        }, keyword2rgb: w, keyword2hsl: function keyword2hsl(t) {
          return n(w(t));
        }, keyword2hsv: function keyword2hsv(t) {
          return i(w(t));
        }, keyword2hwb: function keyword2hwb(t) {
          return a(w(t));
        }, keyword2cmyk: function keyword2cmyk(t) {
          return o(w(t));
        }, keyword2lab: function keyword2lab(t) {
          return u(w(t));
        }, keyword2xyz: function keyword2xyz(t) {
          return l(w(t));
        }, xyz2rgb: p, xyz2lab: m, xyz2lch: function xyz2lch(t) {
          return y(m(t));
        }, lab2xyz: v, lab2rgb: x, lab2lch: y, lch2lab: k, lch2xyz: function lch2xyz(t) {
          return v(k(t));
        }, lch2rgb: function lch2rgb(t) {
          return x(k(t));
        } };function n(t) {
        var e,
            n,
            i = t[0] / 255,
            a = t[1] / 255,
            r = t[2] / 255,
            o = Math.min(i, a, r),
            s = Math.max(i, a, r),
            l = s - o;return s == o ? e = 0 : i == s ? e = (a - r) / l : a == s ? e = 2 + (r - i) / l : r == s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s == o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n];
      }function i(t) {
        var e,
            n,
            i = t[0],
            a = t[1],
            r = t[2],
            o = Math.min(i, a, r),
            s = Math.max(i, a, r),
            l = s - o;return n = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : i == s ? e = (a - r) / l : a == s ? e = 2 + (r - i) / l : r == s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10];
      }function a(t) {
        var e = t[0],
            i = t[1],
            a = t[2],
            r = n(t)[0],
            o = 1 / 255 * Math.min(e, Math.min(i, a)),
            a = 1 - 1 / 255 * Math.max(e, Math.max(i, a));return [r, 100 * o, 100 * a];
      }function o(t) {
        var e,
            n = t[0] / 255,
            i = t[1] / 255,
            a = t[2] / 255;return e = Math.min(1 - n, 1 - i, 1 - a), [100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
      }function s(t) {
        return _[JSON.stringify(t)];
      }function l(t) {
        var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;var a = .4124 * e + .3576 * n + .1805 * i,
            r = .2126 * e + .7152 * n + .0722 * i,
            o = .0193 * e + .1192 * n + .9505 * i;return [100 * a, 100 * r, 100 * o];
      }function u(t) {
        var e = l(t),
            n = e[0],
            i = e[1],
            a = e[2];return i /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * i - 16, 500 * (n - i), 200 * (i - a)];
      }function d(t) {
        var e,
            n,
            i,
            a,
            r,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;if (0 == s) return [r = 255 * l, r, r];e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];for (var u = 0; u < 3; u++) {
          (i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r;
        }return a;
      }function c(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * i * (1 - n),
            s = 255 * i * (1 - n * r),
            l = 255 * i * (1 - n * (1 - r)),
            i = 255 * i;switch (a) {case 0:
            return [i, l, o];case 1:
            return [s, i, o];case 2:
            return [o, i, l];case 3:
            return [o, s, i];case 4:
            return [l, o, i];case 5:
            return [i, o, s];}
      }function h(t) {
        var e,
            n,
            i,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;switch (u > 1 && (s /= u, l /= u), e = Math.floor(6 * o), i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), a = s + i * ((n = 1 - l) - s), e) {default:case 6:case 0:
            r = n, g = a, b = s;break;case 1:
            r = a, g = n, b = s;break;case 2:
            r = s, g = n, b = a;break;case 3:
            r = s, g = a, b = n;break;case 4:
            r = a, g = s, b = n;break;case 5:
            r = n, g = s, b = a;}return [255 * r, 255 * g, 255 * b];
      }function f(t) {
        var e,
            n,
            i,
            a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100,
            s = t[3] / 100;return e = 1 - Math.min(1, a * (1 - s) + s), n = 1 - Math.min(1, r * (1 - s) + s), i = 1 - Math.min(1, o * (1 - s) + s), [255 * e, 255 * n, 255 * i];
      }function p(t) {
        var e,
            n,
            i,
            a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;return n = -.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i];
      }function m(t) {
        var e = t[0],
            n = t[1],
            i = t[2];return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * n - 16, 500 * (e - n), 200 * (n - i)];
      }function v(t) {
        var e,
            n,
            i,
            a,
            r = t[0],
            o = t[1],
            s = t[2];return r <= 8 ? a = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i = i / 108.883 <= .008859 ? i = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3), [e, n, i];
      }function y(t) {
        var e,
            n,
            i,
            a = t[0],
            r = t[1],
            o = t[2];return e = Math.atan2(o, r), (n = 360 * e / 2 / Math.PI) < 0 && (n += 360), i = Math.sqrt(r * r + o * o), [a, i, n];
      }function x(t) {
        return p(v(t));
      }function k(t) {
        var e,
            n,
            i,
            a = t[0],
            r = t[1],
            o = t[2];return i = o / 360 * 2 * Math.PI, e = r * Math.cos(i), n = r * Math.sin(i), [a, e, n];
      }function w(t) {
        return M[t];
      }var M = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
          _ = {};for (var C in M) {
        _[JSON.stringify(M[C])] = C;
      }var S = function S() {
        return new T();
      };for (var P in e) {
        S[P + "Raw"] = function (t) {
          return function (n) {
            return "number" == typeof n && (n = Array.prototype.slice.call(arguments)), e[t](n);
          };
        }(P);var I = /(\w+)2(\w+)/.exec(P),
            A = I[1],
            D = I[2];(S[A] = S[A] || {})[D] = S[P] = function (t) {
          return function (n) {
            "number" == typeof n && (n = Array.prototype.slice.call(arguments));var i = e[t](n);if ("string" == typeof i || void 0 === i) return i;for (var a = 0; a < i.length; a++) {
              i[a] = Math.round(i[a]);
            }return i;
          };
        }(P);
      }var T = function T() {
        this.convs = {};
      };T.prototype.routeSpace = function (t, e) {
        var n = e[0];return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
      }, T.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, T.prototype.getValues = function (t) {
        var e = this.convs[t];if (!e) {
          var n = this.space,
              i = this.convs[n];e = S[n][t](i), this.convs[t] = e;
        }return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        T.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      });var F = S,
          O = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
          L = { getRgba: R, getHsla: N, getRgb: function getRgb(t) {
          var e = R(t);return e && e.slice(0, 3);
        }, getHsl: function getHsl(t) {
          var e = N(t);return e && e.slice(0, 3);
        }, getHwb: z, getAlpha: function getAlpha(t) {
          var e = R(t);return e ? e[3] : (e = N(t)) ? e[3] : (e = z(t)) ? e[3] : void 0;
        }, hexString: function hexString(t, e) {
          var e = void 0 !== e && 3 === t.length ? e : t[3];return "#" + j(t[0]) + j(t[1]) + j(t[2]) + (e >= 0 && e < 1 ? j(Math.round(255 * e)) : "");
        }, rgbString: function rgbString(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? B(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        }, rgbaString: B, percentString: function percentString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return E(t, e);var n = Math.round(t[0] / 255 * 100),
              i = Math.round(t[1] / 255 * 100),
              a = Math.round(t[2] / 255 * 100);return "rgb(" + n + "%, " + i + "%, " + a + "%)";
        }, percentaString: E, hslString: function hslString(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? W(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        }, hslaString: W, hwbString: function hwbString(t, e) {
          return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        }, keyword: function keyword(t) {
          return H[t.slice(0, 3)];
        } };function R(t) {
        if (t) {
          var e = [0, 0, 0],
              n = 1,
              i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
              a = "";if (i) {
            i = i[1], a = i[3];for (var r = 0; r < e.length; r++) {
              e[r] = parseInt(i[r] + i[r], 16);
            }a && (n = Math.round(parseInt(a + a, 16) / 255 * 100) / 100);
          } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
            a = i[2], i = i[1];for (var r = 0; r < e.length; r++) {
              e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
            }a && (n = Math.round(parseInt(a, 16) / 255 * 100) / 100);
          } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (var r = 0; r < e.length; r++) {
              e[r] = parseInt(i[r + 1]);
            }n = parseFloat(i[4]);
          } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (var r = 0; r < e.length; r++) {
              e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
            }n = parseFloat(i[4]);
          } else if (i = t.match(/(\w+)/)) {
            if ("transparent" == i[1]) return [0, 0, 0, 0];if (!(e = O[i[1]])) return;
          }for (var r = 0; r < e.length; r++) {
            e[r] = V(e[r], 0, 255);
          }return n = n || 0 == n ? V(n, 0, 1) : 1, e[3] = n, e;
        }
      }function N(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if (e) {
            var n = parseFloat(e[4]),
                i = V(parseInt(e[1]), 0, 360),
                a = V(parseFloat(e[2]), 0, 100),
                r = V(parseFloat(e[3]), 0, 100),
                o = V(isNaN(n) ? 1 : n, 0, 1);return [i, a, r, o];
          }
        }
      }function z(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if (e) {
            var n = parseFloat(e[4]),
                i = V(parseInt(e[1]), 0, 360),
                a = V(parseFloat(e[2]), 0, 100),
                r = V(parseFloat(e[3]), 0, 100),
                o = V(isNaN(n) ? 1 : n, 0, 1);return [i, a, r, o];
          }
        }
      }function B(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }function E(t, e) {
        var n = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            a = Math.round(t[2] / 255 * 100);return "rgba(" + n + "%, " + i + "%, " + a + "%, " + (e || t[3] || 1) + ")";
      }function W(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }function V(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }function j(t) {
        var e = t.toString(16).toUpperCase();return e.length < 2 ? "0" + e : e;
      }var H = {};for (var q in O) {
        H[O[q]] = q;
      }var U = function t(e) {
        return e instanceof t ? e : this instanceof t ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void ("string" === typeof e ? (n = L.getRgba(e)) ? this.setValues("rgb", n) : (n = L.getHsla(e)) ? this.setValues("hsl", n) : (n = L.getHwb(e)) && this.setValues("hwb", n) : "object" === (typeof e === "undefined" ? "undefined" : _typeof(e)) && (void 0 !== (n = e).r || void 0 !== n.red ? this.setValues("rgb", n) : void 0 !== n.l || void 0 !== n.lightness ? this.setValues("hsl", n) : void 0 !== n.v || void 0 !== n.value ? this.setValues("hsv", n) : void 0 !== n.w || void 0 !== n.whiteness ? this.setValues("hwb", n) : void 0 === n.c && void 0 === n.cyan || this.setValues("cmyk", n)))) : new t(e);var n;
      };(U.prototype = { isValid: function isValid() {
          return this.valid;
        }, rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        }, hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        }, hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        }, hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        }, cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        }, rgbArray: function rgbArray() {
          return this.values.rgb;
        }, hslArray: function hslArray() {
          return this.values.hsl;
        }, hsvArray: function hsvArray() {
          return this.values.hsv;
        }, hwbArray: function hwbArray() {
          var t = this.values;return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        }, cmykArray: function cmykArray() {
          return this.values.cmyk;
        }, rgbaArray: function rgbaArray() {
          var t = this.values;return t.rgb.concat([t.alpha]);
        }, hslaArray: function hslaArray() {
          var t = this.values;return t.hsl.concat([t.alpha]);
        }, alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        }, red: function red(t) {
          return this.setChannel("rgb", 0, t);
        }, green: function green(t) {
          return this.setChannel("rgb", 1, t);
        }, blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        }, hue: function hue(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        }, saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        }, lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        }, saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        }, whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        }, blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        }, value: function value(t) {
          return this.setChannel("hsv", 2, t);
        }, cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        }, magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        }, yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        }, black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        }, hexString: function hexString() {
          return L.hexString(this.values.rgb);
        }, rgbString: function rgbString() {
          return L.rgbString(this.values.rgb, this.values.alpha);
        }, rgbaString: function rgbaString() {
          return L.rgbaString(this.values.rgb, this.values.alpha);
        }, percentString: function percentString() {
          return L.percentString(this.values.rgb, this.values.alpha);
        }, hslString: function hslString() {
          return L.hslString(this.values.hsl, this.values.alpha);
        }, hslaString: function hslaString() {
          return L.hslaString(this.values.hsl, this.values.alpha);
        }, hwbString: function hwbString() {
          return L.hwbString(this.values.hwb, this.values.alpha);
        }, keyword: function keyword() {
          return L.keyword(this.values.rgb, this.values.alpha);
        }, rgbNumber: function rgbNumber() {
          var t = this.values.rgb;return t[0] << 16 | t[1] << 8 | t[2];
        }, luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var i = t[n] / 255;e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        }, contrast: function contrast(t) {
          var e = this.luminosity(),
              n = t.luminosity();return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
        }, level: function level(t) {
          var e = this.contrast(t);return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        }, dark: function dark() {
          var t = this.values.rgb;return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        }, light: function light() {
          return !this.dark();
        }, negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }return this.setValues("rgb", t), this;
        }, lighten: function lighten(t) {
          var e = this.values.hsl;return e[2] += e[2] * t, this.setValues("hsl", e), this;
        }, darken: function darken(t) {
          var e = this.values.hsl;return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        }, saturate: function saturate(t) {
          var e = this.values.hsl;return e[1] += e[1] * t, this.setValues("hsl", e), this;
        }, desaturate: function desaturate(t) {
          var e = this.values.hsl;return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        }, whiten: function whiten(t) {
          var e = this.values.hwb;return e[1] += e[1] * t, this.setValues("hwb", e), this;
        }, blacken: function blacken(t) {
          var e = this.values.hwb;return e[2] += e[2] * t, this.setValues("hwb", e), this;
        }, greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];return this.setValues("rgb", [e, e, e]), this;
        }, clearer: function clearer(t) {
          var e = this.values.alpha;return this.setValues("alpha", e - e * t), this;
        }, opaquer: function opaquer(t) {
          var e = this.values.alpha;return this.setValues("alpha", e + e * t), this;
        }, rotate: function rotate(t) {
          var e = this.values.hsl,
              n = (e[0] + t) % 360;return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this;
        }, mix: function mix(t, e) {
          var n = t,
              i = void 0 === e ? .5 : e,
              a = 2 * i - 1,
              r = this.alpha() - n.alpha(),
              o = ((a * r === -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
              s = 1 - o;return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i));
        }, toJSON: function toJSON() {
          return this.rgb();
        }, clone: function clone() {
          var t,
              e,
              n = new U(),
              i = this.values,
              a = n.values;for (var r in i) {
            i.hasOwnProperty(r) && (t = i[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
          }return n;
        } }).spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, U.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, U.prototype.getValues = function (t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) {
          n[t.charAt(i)] = e[t][i];
        }return 1 !== e.alpha && (n.a = e.alpha), n;
      }, U.prototype.setValues = function (t, e) {
        var n,
            i,
            a = this.values,
            r = this.spaces,
            o = this.maxes,
            s = 1;if (this.valid = !0, "alpha" === t) s = e;else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (n = 0; n < t.length; n++) {
            a[t][n] = e[t.charAt(n)];
          }s = e.a;
        } else if (void 0 !== e[r[t][0]]) {
          var l = r[t];for (n = 0; n < t.length; n++) {
            a[t][n] = e[l[n]];
          }s = e.alpha;
        }if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;for (n = 0; n < t.length; n++) {
          i = Math.max(0, Math.min(o[t][n], a[t][n])), a[t][n] = Math.round(i);
        }for (var u in r) {
          u !== t && (a[u] = F[t][u](a[t]));
        }return !0;
      }, U.prototype.setSpace = function (t, e) {
        var n = e[0];return void 0 === n ? this.getValues(t) : ("number" === typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
      }, U.prototype.setChannel = function (t, e, n) {
        var i = this.values[t];return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
      }, "undefined" !== typeof window && (window.Color = U);var Y = U,
          K = { noop: function noop() {}, uid: function () {
          var t = 0;return function () {
            return t++;
          };
        }(), isNullOrUndef: function isNullOrUndef(t) {
          return null === t || "undefined" === typeof t;
        }, isArray: function isArray(t) {
          if (Array.isArray && Array.isArray(t)) return !0;var e = Object.prototype.toString.call(t);return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
        }, isObject: function isObject(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        }, isFinite: function (t) {
          function e(e) {
            return t.apply(this, arguments);
          }return e.toString = function () {
            return t.toString();
          }, e;
        }(function (t) {
          return ("number" === typeof t || t instanceof Number) && isFinite(t);
        }), valueOrDefault: function valueOrDefault(t, e) {
          return "undefined" === typeof t ? e : t;
        }, valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, n) {
          return K.valueOrDefault(K.isArray(t) ? t[e] : t, n);
        }, callback: function callback(t, e, n) {
          if (t && "function" === typeof t.call) return t.apply(n, e);
        }, each: function each(t, e, n, i) {
          var a, r, o;if (K.isArray(t)) {
            if (r = t.length, i) for (a = r - 1; a >= 0; a--) {
              e.call(n, t[a], a);
            } else for (a = 0; a < r; a++) {
              e.call(n, t[a], a);
            }
          } else if (K.isObject(t)) for (o = Object.keys(t), r = o.length, a = 0; a < r; a++) {
            e.call(n, t[o[a]], o[a]);
          }
        }, arrayEquals: function arrayEquals(t, e) {
          var n, i, a, r;if (!t || !e || t.length !== e.length) return !1;for (n = 0, i = t.length; n < i; ++n) {
            if (a = t[n], r = e[n], a instanceof Array && r instanceof Array) {
              if (!K.arrayEquals(a, r)) return !1;
            } else if (a !== r) return !1;
          }return !0;
        }, clone: function clone(t) {
          if (K.isArray(t)) return t.map(K.clone);if (K.isObject(t)) {
            for (var e = {}, n = Object.keys(t), i = n.length, a = 0; a < i; ++a) {
              e[n[a]] = K.clone(t[n[a]]);
            }return e;
          }return t;
        }, _merger: function _merger(t, e, n, i) {
          var a = e[t],
              r = n[t];K.isObject(a) && K.isObject(r) ? K.merge(a, r, i) : e[t] = K.clone(r);
        }, _mergerIf: function _mergerIf(t, e, n) {
          var i = e[t],
              a = n[t];K.isObject(i) && K.isObject(a) ? K.mergeIf(i, a) : e.hasOwnProperty(t) || (e[t] = K.clone(a));
        }, merge: function merge(t, e, n) {
          var i,
              a,
              r,
              o,
              s,
              l = K.isArray(e) ? e : [e],
              u = l.length;if (!K.isObject(t)) return t;for (i = (n = n || {}).merger || K._merger, a = 0; a < u; ++a) {
            if (e = l[a], K.isObject(e)) for (r = Object.keys(e), s = 0, o = r.length; s < o; ++s) {
              i(r[s], t, e, n);
            }
          }return t;
        }, mergeIf: function mergeIf(t, e) {
          return K.merge(t, e, { merger: K._mergerIf });
        }, extend: function extend(t) {
          for (var e = function e(_e2, n) {
            t[n] = _e2;
          }, n = 1, i = arguments.length; n < i; ++n) {
            K.each(arguments[n], e);
          }return t;
        }, inherits: function inherits(t) {
          var e = this,
              n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              i = function i() {
            this.constructor = n;
          };return i.prototype = e.prototype, n.prototype = new i(), n.extend = K.inherits, t && K.extend(n.prototype, t), n.__super__ = e.prototype, n;
        } },
          X = K;K.callCallback = K.callback, K.indexOf = function (t, e, n) {
        return Array.prototype.indexOf.call(t, e, n);
      }, K.getValueOrDefault = K.valueOrDefault, K.getValueAtIndexOrDefault = K.valueAtIndexOrDefault;var G = { linear: function linear(t) {
          return t;
        }, easeInQuad: function easeInQuad(t) {
          return t * t;
        }, easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        }, easeInOutQuad: function easeInOutQuad(t) {
          return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        }, easeInCubic: function easeInCubic(t) {
          return t * t * t;
        }, easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        }, easeInOutCubic: function easeInOutCubic(t) {
          return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        }, easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        }, easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        }, easeInOutQuart: function easeInOutQuart(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        }, easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        }, easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        }, easeInOutQuint: function easeInOutQuint(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        }, easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        }, easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        }, easeInOutSine: function easeInOutSine(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1);
        }, easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        }, easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        }, easeInOutExpo: function easeInOutExpo(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        }, easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        }, easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        }, easeInOutCirc: function easeInOutCirc(t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        }, easeInElastic: function easeInElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
        }, easeOutElastic: function easeOutElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
        }, easeInOutElastic: function easeInOutElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
        }, easeInBack: function easeInBack(t) {
          var e = 1.70158;return t * t * ((e + 1) * t - e);
        }, easeOutBack: function easeOutBack(t) {
          var e = 1.70158;return (t -= 1) * t * ((e + 1) * t + e) + 1;
        }, easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        }, easeInBounce: function easeInBounce(t) {
          return 1 - G.easeOutBounce(1 - t);
        }, easeOutBounce: function easeOutBounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        }, easeInOutBounce: function easeInOutBounce(t) {
          return t < .5 ? .5 * G.easeInBounce(2 * t) : .5 * G.easeOutBounce(2 * t - 1) + .5;
        } },
          Z = { effects: G };X.easingEffects = G;var $ = Math.PI,
          J = $ / 180,
          Q = 2 * $,
          tt = $ / 2,
          et = $ / 4,
          nt = 2 * $ / 3,
          it = { clear: function clear(t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        }, roundedRect: function roundedRect(t, e, n, i, a, r) {
          if (r) {
            var o = Math.min(r, a / 2, i / 2),
                s = e + o,
                l = n + o,
                u = e + i - o,
                d = n + a - o;t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -$, -tt), t.arc(u, l, o, -tt, 0), t.arc(u, d, o, 0, tt), t.arc(s, d, o, tt, $)) : s < u ? (t.moveTo(s, n), t.arc(u, l, o, -tt, tt), t.arc(s, l, o, tt, $ + tt)) : l < d ? (t.arc(s, l, o, -$, 0), t.arc(s, d, o, 0, $)) : t.arc(s, l, o, -$, $), t.closePath(), t.moveTo(e, n);
          } else t.rect(e, n, i, a);
        }, drawPoint: function drawPoint(t, e, n, i, a, r) {
          var o,
              s,
              l,
              u,
              d,
              c = (r || 0) * J;if (!e || "object" !== (typeof e === "undefined" ? "undefined" : _typeof(e)) || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
            if (!(isNaN(n) || n <= 0)) {
              switch (t.beginPath(), e) {default:
                  t.arc(i, a, n, 0, Q), t.closePath();break;case "triangle":
                  t.moveTo(i + Math.sin(c) * n, a - Math.cos(c) * n), c += nt, t.lineTo(i + Math.sin(c) * n, a - Math.cos(c) * n), c += nt, t.lineTo(i + Math.sin(c) * n, a - Math.cos(c) * n), t.closePath();break;case "rectRounded":
                  u = n - (d = .516 * n), s = Math.cos(c + et) * u, l = Math.sin(c + et) * u, t.arc(i - s, a - l, d, c - $, c - tt), t.arc(i + l, a - s, d, c - tt, c), t.arc(i + s, a + l, d, c, c + tt), t.arc(i - l, a + s, d, c + tt, c + $), t.closePath();break;case "rect":
                  if (!r) {
                    u = Math.SQRT1_2 * n, t.rect(i - u, a - u, 2 * u, 2 * u);break;
                  }c += et;case "rectRot":
                  s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, a - l), t.lineTo(i + l, a - s), t.lineTo(i + s, a + l), t.lineTo(i - l, a + s), t.closePath();break;case "crossRot":
                  c += et;case "cross":
                  s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);break;case "star":
                  s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s), c += et, s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);break;case "line":
                  s = Math.cos(c) * n, l = Math.sin(c) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l);break;case "dash":
                  t.moveTo(i, a), t.lineTo(i + Math.cos(c) * n, a + Math.sin(c) * n);}t.fill(), t.stroke();
            }
          } else t.drawImage(e, i - e.width / 2, a - e.height / 2, e.width, e.height);
        }, _isPointInArea: function _isPointInArea(t, e) {
          return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6;
        }, clipArea: function clipArea(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        }, unclipArea: function unclipArea(t) {
          t.restore();
        }, lineTo: function lineTo(t, e, n, i) {
          var a = n.steppedLine;if (a) {
            if ("middle" === a) {
              var r = (e.x + n.x) / 2;t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y);
            } else "after" === a && !i || "after" !== a && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);t.lineTo(n.x, n.y);
          } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y);
        } },
          at = it;X.clear = it.clear, X.drawRoundedRectangle = function (t) {
        t.beginPath(), it.roundedRect.apply(it, arguments);
      };var rt = { _set: function _set(t, e) {
          return X.merge(this[t] || (this[t] = {}), e);
        } };rt._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 });var ot = rt,
          st = X.valueOrDefault,
          lt = { toLineHeight: function toLineHeight(t, e) {
          var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if (!n || "normal" === n[1]) return 1.2 * e;switch (t = +n[2], n[3]) {case "px":
              return t;case "%":
              t /= 100;}return e * t;
        }, toPadding: function toPadding(t) {
          var e, n, i, a;return X.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, a = +t.left || 0) : e = n = i = a = +t || 0, { top: e, right: n, bottom: i, left: a, height: e + i, width: a + n };
        }, _parseFont: function _parseFont(t) {
          var e = ot.global,
              n = st(t.fontSize, e.defaultFontSize),
              i = { family: st(t.fontFamily, e.defaultFontFamily), lineHeight: X.options.toLineHeight(st(t.lineHeight, e.defaultLineHeight), n), size: n, style: st(t.fontStyle, e.defaultFontStyle), weight: null, string: "" };return i.string = function (t) {
            return !t || X.isNullOrUndef(t.size) || X.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
          }(i), i;
        }, resolve: function resolve(t, e, n) {
          var i, a, r;for (i = 0, a = t.length; i < a; ++i) {
            if (void 0 !== (r = t[i]) && (void 0 !== e && "function" === typeof r && (r = r(e)), void 0 !== n && X.isArray(r) && (r = r[n]), void 0 !== r)) return r;
          }
        } },
          ut = X,
          dt = Z,
          ct = at,
          ht = lt;ut.easing = dt, ut.canvas = ct, ut.options = ht;var ft = function ft(t) {
        ut.extend(this, t), this.initialize.apply(this, arguments);
      };ut.extend(ft.prototype, { initialize: function initialize() {
          this.hidden = !1;
        }, pivot: function pivot() {
          var t = this;return t._view || (t._view = ut.clone(t._model)), t._start = {}, t;
        }, transition: function transition(t) {
          var e = this,
              n = e._model,
              i = e._start,
              a = e._view;return n && 1 !== t ? (a || (a = e._view = {}), i || (i = e._start = {}), function (t, e, n, i) {
            var a,
                r,
                o,
                s,
                l,
                u,
                d,
                c,
                h,
                f = Object.keys(n);for (a = 0, r = f.length; a < r; ++a) {
              if (o = f[a], u = n[o], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
                if (t.hasOwnProperty(o) || (t[o] = s), l = t[o], (d = typeof u === "undefined" ? "undefined" : _typeof(u)) === (typeof l === "undefined" ? "undefined" : _typeof(l))) if ("string" === d) {
                  if ((c = Y(l)).valid && (h = Y(u)).valid) {
                    e[o] = h.mix(c, i).rgbString();continue;
                  }
                } else if (ut.isFinite(l) && ut.isFinite(u)) {
                  e[o] = l + (u - l) * i;continue;
                }e[o] = u;
              }
            }
          }(i, a, n, t), e) : (e._view = n, e._start = null, e);
        }, tooltipPosition: function tooltipPosition() {
          return { x: this._model.x, y: this._model.y };
        }, hasValue: function hasValue() {
          return ut.isNumber(this._model.x) && ut.isNumber(this._model.y);
        } }), ft.extend = ut.inherits;var gt = ft,
          pt = gt.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
          mt = pt;Object.defineProperty(pt.prototype, "animationObject", { get: function get() {
          return this;
        } }), Object.defineProperty(pt.prototype, "chartInstance", { get: function get() {
          return this.chart;
        }, set: function set(t) {
          this.chart = t;
        } }), ot._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: ut.noop, onComplete: ut.noop } });var vt = { animations: [], request: null, addAnimation: function addAnimation(t, e, n, i) {
          var a,
              r,
              o = this.animations;for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), a = 0, r = o.length; a < r; ++a) {
            if (o[a].chart === t) return void (o[a] = e);
          }o.push(e), 1 === o.length && this.requestAnimationFrame();
        }, cancelAnimation: function cancelAnimation(t) {
          var e = ut.findIndex(this.animations, function (e) {
            return e.chart === t;
          });-1 !== e && (this.animations.splice(e, 1), t.animating = !1);
        }, requestAnimationFrame: function requestAnimationFrame() {
          var t = this;null === t.request && (t.request = ut.requestAnimFrame.call(window, function () {
            t.request = null, t.startDigest();
          }));
        }, startDigest: function startDigest() {
          this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
        }, advance: function advance() {
          for (var t, e, n, i, a = this.animations, r = 0; r < a.length;) {
            t = a[r], e = t.chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), ut.callback(t.render, [e, t], e), ut.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (ut.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r;
          }
        } },
          bt = ut.options.resolve,
          yt = ["push", "pop", "shift", "splice", "unshift"];function xt(t, e) {
        var n = t._chartjs;if (n) {
          var i = n.listeners,
              a = i.indexOf(e);-1 !== a && i.splice(a, 1), i.length > 0 || (yt.forEach(function (e) {
            delete t[e];
          }), delete t._chartjs);
        }
      }var kt = function kt(t, e) {
        this.initialize(t, e);
      };ut.extend(kt.prototype, { datasetElementType: null, dataElementType: null, initialize: function initialize(t, e) {
          this.chart = t, this.index = e, this.linkScales(), this.addElements();
        }, updateIndex: function updateIndex(t) {
          this.index = t;
        }, linkScales: function linkScales() {
          var t = this,
              e = t.getMeta(),
              n = t.getDataset();null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
        }, getDataset: function getDataset() {
          return this.chart.data.datasets[this.index];
        }, getMeta: function getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }, getScaleForId: function getScaleForId(t) {
          return this.chart.scales[t];
        }, _getValueScaleId: function _getValueScaleId() {
          return this.getMeta().yAxisID;
        }, _getIndexScaleId: function _getIndexScaleId() {
          return this.getMeta().xAxisID;
        }, _getValueScale: function _getValueScale() {
          return this.getScaleForId(this._getValueScaleId());
        }, _getIndexScale: function _getIndexScale() {
          return this.getScaleForId(this._getIndexScaleId());
        }, reset: function reset() {
          this.update(!0);
        }, destroy: function destroy() {
          this._data && xt(this._data, this);
        }, createMetaDataset: function createMetaDataset() {
          var t = this.datasetElementType;return t && new t({ _chart: this.chart, _datasetIndex: this.index });
        }, createMetaData: function createMetaData(t) {
          var e = this.dataElementType;return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t });
        }, addElements: function addElements() {
          var t,
              e,
              n = this.getMeta(),
              i = this.getDataset().data || [],
              a = n.data;for (t = 0, e = i.length; t < e; ++t) {
            a[t] = a[t] || this.createMetaData(t);
          }n.dataset = n.dataset || this.createMetaDataset();
        }, addElementAndReset: function addElementAndReset(t) {
          var e = this.createMetaData(t);this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
        }, buildOrUpdateElements: function buildOrUpdateElements() {
          var t,
              e,
              n = this,
              i = n.getDataset(),
              a = i.data || (i.data = []);n._data !== a && (n._data && xt(n._data, n), a && Object.isExtensible(a) && (e = n, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), yt.forEach(function (e) {
            var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                i = t[e];Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function value() {
                var e = Array.prototype.slice.call(arguments),
                    a = i.apply(this, e);return ut.each(t._chartjs.listeners, function (t) {
                  "function" === typeof t[n] && t[n].apply(t, e);
                }), a;
              } });
          }))), n._data = a), n.resyncElements();
        }, update: ut.noop, transition: function transition(t) {
          for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) {
            n[a].transition(t);
          }e.dataset && e.dataset.transition(t);
        }, draw: function draw() {
          var t = this.getMeta(),
              e = t.data || [],
              n = e.length,
              i = 0;for (t.dataset && t.dataset.draw(); i < n; ++i) {
            e[i].draw();
          }
        }, removeHoverStyle: function removeHoverStyle(t) {
          ut.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
        }, setHoverStyle: function setHoverStyle(t) {
          var e = this.chart.data.datasets[t._datasetIndex],
              n = t._index,
              i = t.custom || {},
              a = t._model,
              r = ut.getHoverColor;t.$previousStyle = { backgroundColor: a.backgroundColor, borderColor: a.borderColor, borderWidth: a.borderWidth }, a.backgroundColor = bt([i.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, n), a.borderColor = bt([i.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, n), a.borderWidth = bt([i.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, n);
        }, resyncElements: function resyncElements() {
          var t = this.getMeta(),
              e = this.getDataset().data,
              n = t.data.length,
              i = e.length;i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
        }, insertElements: function insertElements(t, e) {
          for (var n = 0; n < e; ++n) {
            this.addElementAndReset(t + n);
          }
        }, onDataPush: function onDataPush() {
          var t = arguments.length;this.insertElements(this.getDataset().data.length - t, t);
        }, onDataPop: function onDataPop() {
          this.getMeta().data.pop();
        }, onDataShift: function onDataShift() {
          this.getMeta().data.shift();
        }, onDataSplice: function onDataSplice(t, e) {
          this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
        }, onDataUnshift: function onDataUnshift() {
          this.insertElements(0, arguments.length);
        } }), kt.extend = ut.inherits;var wt = kt;ot._set("global", { elements: { arc: { backgroundColor: ot.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } });var Mt = gt.extend({ inLabelRange: function inLabelRange(t) {
          var e = this._view;return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        }, inRange: function inRange(t, e) {
          var n = this._view;if (n) {
            for (var i = ut.getAngleFromPoint(n, { x: t, y: e }), a = i.angle, r = i.distance, o = n.startAngle, s = n.endAngle; s < o;) {
              s += 2 * Math.PI;
            }for (; a > s;) {
              a -= 2 * Math.PI;
            }for (; a < o;) {
              a += 2 * Math.PI;
            }var l = a >= o && a <= s,
                u = r >= n.innerRadius && r <= n.outerRadius;return l && u;
          }return !1;
        }, getCenterPoint: function getCenterPoint() {
          var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              n = (t.innerRadius + t.outerRadius) / 2;return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
        }, getArea: function getArea() {
          var t = this._view;return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        }, tooltipPosition: function tooltipPosition() {
          var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
        }, draw: function draw() {
          var t,
              e = this._chart.ctx,
              n = this._view,
              i = n.startAngle,
              a = n.endAngle,
              r = "inner" === n.borderAlign ? .33 : 0;e.save(), e.beginPath(), e.arc(n.x, n.y, Math.max(n.outerRadius - r, 0), i, a), e.arc(n.x, n.y, n.innerRadius, a, i, !0), e.closePath(), e.fillStyle = n.backgroundColor, e.fill(), n.borderWidth && ("inner" === n.borderAlign ? (e.beginPath(), t = r / n.outerRadius, e.arc(n.x, n.y, n.outerRadius, i - t, a + t), n.innerRadius > r ? (t = r / n.innerRadius, e.arc(n.x, n.y, n.innerRadius - r, a + t, i - t, !0)) : e.arc(n.x, n.y, r, a + Math.PI / 2, i - Math.PI / 2), e.closePath(), e.clip(), e.beginPath(), e.arc(n.x, n.y, n.outerRadius, i, a), e.arc(n.x, n.y, n.innerRadius, a, i, !0), e.closePath(), e.lineWidth = 2 * n.borderWidth, e.lineJoin = "round") : (e.lineWidth = n.borderWidth, e.lineJoin = "bevel"), e.strokeStyle = n.borderColor, e.stroke()), e.restore();
        } }),
          _t = ut.valueOrDefault,
          Ct = ot.global.defaultColor;ot._set("global", { elements: { line: { tension: .4, backgroundColor: Ct, borderWidth: 3, borderColor: Ct, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } });var St = gt.extend({ draw: function draw() {
          var t,
              e,
              n,
              i,
              a = this._view,
              r = this._chart.ctx,
              o = a.spanGaps,
              s = this._children.slice(),
              l = ot.global,
              u = l.elements.line,
              d = -1;for (this._loop && s.length && s.push(s[0]), r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = _t(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = _t(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), d = -1, t = 0; t < s.length; ++t) {
            e = s[t], n = ut.previousItem(s, t), i = e._view, 0 === t ? i.skip || (r.moveTo(i.x, i.y), d = t) : (n = -1 === d ? n : s[d], i.skip || (d !== t - 1 && !o || -1 === d ? r.moveTo(i.x, i.y) : ut.canvas.lineTo(r, n._view, e._view), d = t));
          }r.stroke(), r.restore();
        } }),
          Pt = ut.valueOrDefault,
          It = ot.global.defaultColor;function At(t) {
        var e = this._view;return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }ot._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: It, borderColor: It, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } });var Dt = gt.extend({ inRange: function inRange(t, e) {
          var n = this._view;return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
        }, inLabelRange: At, inXRange: At, inYRange: function inYRange(t) {
          var e = this._view;return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
        }, getCenterPoint: function getCenterPoint() {
          var t = this._view;return { x: t.x, y: t.y };
        }, getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        }, tooltipPosition: function tooltipPosition() {
          var t = this._view;return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
        }, draw: function draw(t) {
          var e = this._view,
              n = this._chart.ctx,
              i = e.pointStyle,
              a = e.rotation,
              r = e.radius,
              o = e.x,
              s = e.y,
              l = ot.global,
              u = l.defaultColor;e.skip || (void 0 === t || ut.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = Pt(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, ut.canvas.drawPoint(n, i, r, o, s, a));
        } }),
          Tt = ot.global.defaultColor;function Ft(t) {
        return t && void 0 !== t.width;
      }function Ot(t) {
        var e, n, i, a, r;return Ft(t) ? (r = t.width / 2, e = t.x - r, n = t.x + r, i = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - r, a = t.y + r), { left: e, top: i, right: n, bottom: a };
      }function Lt(t, e, n) {
        return t === e ? n : t === n ? e : t;
      }function Rt(t, e, n) {
        var i,
            a,
            r,
            o,
            s = t.borderWidth,
            l = function (t) {
          var e = t.borderSkipped,
              n = {};return e ? (t.horizontal ? t.base > t.x && (e = Lt(e, "left", "right")) : t.base < t.y && (e = Lt(e, "bottom", "top")), n[e] = !0, n) : n;
        }(t);return ut.isObject(s) ? (i = +s.top || 0, a = +s.right || 0, r = +s.bottom || 0, o = +s.left || 0) : i = a = r = o = +s || 0, { t: l.top || i < 0 ? 0 : i > n ? n : i, r: l.right || a < 0 ? 0 : a > e ? e : a, b: l.bottom || r < 0 ? 0 : r > n ? n : r, l: l.left || o < 0 ? 0 : o > e ? e : o };
      }function Nt(t, e, n) {
        var i = null === e,
            a = null === n,
            r = !(!t || i && a) && Ot(t);return r && (i || e >= r.left && e <= r.right) && (a || n >= r.top && n <= r.bottom);
      }ot._set("global", { elements: { rectangle: { backgroundColor: Tt, borderColor: Tt, borderSkipped: "bottom", borderWidth: 0 } } });var zt = gt.extend({ draw: function draw() {
          var t = this._chart.ctx,
              e = this._view,
              n = function (t) {
            var e = Ot(t),
                n = e.right - e.left,
                i = e.bottom - e.top,
                a = Rt(t, n / 2, i / 2);return { outer: { x: e.left, y: e.top, w: n, h: i }, inner: { x: e.left + a.l, y: e.top + a.t, w: n - a.l - a.r, h: i - a.t - a.b } };
          }(e),
              i = n.outer,
              a = n.inner;t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === a.w && i.h === a.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore());
        }, height: function height() {
          var t = this._view;return t.base - t.y;
        }, inRange: function inRange(t, e) {
          return Nt(this._view, t, e);
        }, inLabelRange: function inLabelRange(t, e) {
          var n = this._view;return Ft(n) ? Nt(n, t, null) : Nt(n, null, e);
        }, inXRange: function inXRange(t) {
          return Nt(this._view, t, null);
        }, inYRange: function inYRange(t) {
          return Nt(this._view, null, t);
        }, getCenterPoint: function getCenterPoint() {
          var t,
              e,
              n = this._view;return Ft(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), { x: t, y: e };
        }, getArea: function getArea() {
          var t = this._view;return Ft(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base);
        }, tooltipPosition: function tooltipPosition() {
          var t = this._view;return { x: t.x, y: t.y };
        } }),
          Bt = {},
          Et = Mt,
          Wt = St,
          Vt = Dt,
          jt = zt;Bt.Arc = Et, Bt.Line = Wt, Bt.Point = Vt, Bt.Rectangle = jt;var Ht = ut.options.resolve;ot._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } });var qt = wt.extend({ dataElementType: Bt.Rectangle, initialize: function initialize() {
          var t;wt.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0;
        }, update: function update(t) {
          var e,
              n,
              i = this.getMeta().data;for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) {
            this.updateElement(i[e], e, t);
          }
        }, updateElement: function updateElement(t, e, n) {
          var i = this,
              a = i.getMeta(),
              r = i.getDataset(),
              o = i._resolveElementOptions(t, e);t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = { backgroundColor: o.backgroundColor, borderColor: o.borderColor, borderSkipped: o.borderSkipped, borderWidth: o.borderWidth, datasetLabel: r.label, label: i.chart.data.labels[e] }, i._updateElementGeometry(t, e, n), t.pivot();
        }, _updateElementGeometry: function _updateElementGeometry(t, e, n) {
          var i = this,
              a = t._model,
              r = i._getValueScale(),
              o = r.getBasePixel(),
              s = r.isHorizontal(),
              l = i._ruler || i.getRuler(),
              u = i.calculateBarValuePixels(i.index, e),
              d = i.calculateBarIndexPixels(i.index, e, l);a.horizontal = s, a.base = n ? o : u.base, a.x = s ? n ? o : u.head : d.center, a.y = s ? d.center : n ? o : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size;
        }, _getStacks: function _getStacks(t) {
          var e,
              n,
              i = this.chart,
              a = this._getIndexScale(),
              r = a.options.stacked,
              o = void 0 === t ? i.data.datasets.length : t + 1,
              s = [];for (e = 0; e < o; ++e) {
            (n = i.getDatasetMeta(e)).bar && i.isDatasetVisible(e) && (!1 === r || !0 === r && -1 === s.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === s.indexOf(n.stack))) && s.push(n.stack);
          }return s;
        }, getStackCount: function getStackCount() {
          return this._getStacks().length;
        }, getStackIndex: function getStackIndex(t, e) {
          var n = this._getStacks(t),
              i = void 0 !== e ? n.indexOf(e) : -1;return -1 === i ? n.length - 1 : i;
        }, getRuler: function getRuler() {
          var t,
              e,
              n = this._getIndexScale(),
              i = this.getStackCount(),
              a = this.index,
              r = n.isHorizontal(),
              o = r ? n.left : n.top,
              s = o + (r ? n.width : n.height),
              l = [];for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
            l.push(n.getPixelForValue(null, t, a));
          }return { min: ut.isNullOrUndef(n.options.barThickness) ? function (t, e) {
              var n,
                  i,
                  a,
                  r,
                  o = t.isHorizontal() ? t.width : t.height,
                  s = t.getTicks();for (a = 1, r = e.length; a < r; ++a) {
                o = Math.min(o, Math.abs(e[a] - e[a - 1]));
              }for (a = 0, r = s.length; a < r; ++a) {
                i = t.getPixelForTick(a), o = a > 0 ? Math.min(o, i - n) : o, n = i;
              }return o;
            }(n, l) : -1, pixels: l, start: o, end: s, stackCount: i, scale: n };
        }, calculateBarValuePixels: function calculateBarValuePixels(t, e) {
          var n,
              i,
              a,
              r,
              o,
              s,
              l = this.chart,
              u = this.getMeta(),
              d = this._getValueScale(),
              c = d.isHorizontal(),
              h = l.data.datasets,
              f = +d.getRightValue(h[t].data[e]),
              g = d.options.minBarLength,
              p = d.options.stacked,
              m = u.stack,
              v = 0;if (p || void 0 === p && void 0 !== m) for (n = 0; n < t; ++n) {
            (i = l.getDatasetMeta(n)).bar && i.stack === m && i.controller._getValueScaleId() === d.id && l.isDatasetVisible(n) && (a = +d.getRightValue(h[n].data[e]), (f < 0 && a < 0 || f >= 0 && a > 0) && (v += a));
          }return r = d.getPixelForValue(v), o = d.getPixelForValue(v + f), s = o - r, void 0 !== g && Math.abs(s) < g && (s = g, o = f >= 0 && !c || f < 0 && c ? r - g : r + g), { size: s, base: r, head: o, center: o + s / 2 };
        }, calculateBarIndexPixels: function calculateBarIndexPixels(t, e, n) {
          var i = n.scale.options,
              a = "flex" === i.barThickness ? function (t, e, n) {
            var i,
                a = e.pixels,
                r = a[t],
                o = t > 0 ? a[t - 1] : null,
                s = t < a.length - 1 ? a[t + 1] : null,
                l = n.categoryPercentage;return null === o && (o = r - (null === s ? e.end - e.start : s - r)), null === s && (s = r + r - o), i = r - (r - Math.min(o, s)) / 2 * l, { chunk: Math.abs(s - o) / 2 * l / e.stackCount, ratio: n.barPercentage, start: i };
          }(e, n, i) : function (t, e, n) {
            var i,
                a,
                r = n.barThickness,
                o = e.stackCount,
                s = e.pixels[t];return ut.isNullOrUndef(r) ? (i = e.min * n.categoryPercentage, a = n.barPercentage) : (i = r * o, a = 1), { chunk: i / o, ratio: a, start: s - i / 2 };
          }(e, n, i),
              r = this.getStackIndex(t, this.getMeta().stack),
              o = a.start + a.chunk * r + a.chunk / 2,
              s = Math.min(ut.valueOrDefault(i.maxBarThickness, 1 / 0), a.chunk * a.ratio);return { base: o - s / 2, head: o + s / 2, center: o, size: s };
        }, draw: function draw() {
          var t = this.chart,
              e = this._getValueScale(),
              n = this.getMeta().data,
              i = this.getDataset(),
              a = n.length,
              r = 0;for (ut.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
            isNaN(e.getRightValue(i.data[r])) || n[r].draw();
          }ut.canvas.unclipArea(t.ctx);
        }, _resolveElementOptions: function _resolveElementOptions(t, e) {
          var n,
              i,
              a,
              r = this.chart,
              o = r.data.datasets,
              s = o[this.index],
              l = t.custom || {},
              u = r.options.elements.rectangle,
              d = {},
              c = { chart: r, dataIndex: e, dataset: s, datasetIndex: this.index },
              h = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];for (n = 0, i = h.length; n < i; ++n) {
            d[a = h[n]] = Ht([l[a], s[a], u[a]], c, e);
          }return d;
        } }),
          Ut = ut.valueOrDefault,
          Yt = ut.options.resolve;ot._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function title() {
              return "";
            }, label: function label(t, e) {
              var n = e.datasets[t.datasetIndex].label || "",
                  i = e.datasets[t.datasetIndex].data[t.index];return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
            } } } });var Kt = wt.extend({ dataElementType: Bt.Point, update: function update(t) {
          var e = this,
              n = e.getMeta(),
              i = n.data;ut.each(i, function (n, i) {
            e.updateElement(n, i, t);
          });
        }, updateElement: function updateElement(t, e, n) {
          var i = this,
              a = i.getMeta(),
              r = t.custom || {},
              o = i.getScaleForId(a.xAxisID),
              s = i.getScaleForId(a.yAxisID),
              l = i._resolveElementOptions(t, e),
              u = i.getDataset().data[e],
              d = i.index,
              c = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" === (typeof u === "undefined" ? "undefined" : _typeof(u)) ? u : NaN, e, d),
              h = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = { backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, hitRadius: l.hitRadius, pointStyle: l.pointStyle, rotation: l.rotation, radius: n ? 0 : l.radius, skip: r.skip || isNaN(c) || isNaN(h), x: c, y: h }, t.pivot();
        }, setHoverStyle: function setHoverStyle(t) {
          var e = t._model,
              n = t._options,
              i = ut.getHoverColor;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Ut(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Ut(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Ut(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius;
        }, _resolveElementOptions: function _resolveElementOptions(t, e) {
          var n,
              i,
              a,
              r = this.chart,
              o = r.data.datasets,
              s = o[this.index],
              l = t.custom || {},
              u = r.options.elements.point,
              d = s.data[e],
              c = {},
              h = { chart: r, dataIndex: e, dataset: s, datasetIndex: this.index },
              f = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];for (n = 0, i = f.length; n < i; ++n) {
            c[a = f[n]] = Yt([l[a], s[a], u[a]], h, e);
          }return c.radius = Yt([l.radius, d ? d.r : void 0, s.radius, u.radius], h, e), c;
        } }),
          Xt = ut.options.resolve,
          Gt = ut.valueOrDefault;ot._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function legendCallback(t) {
          var e = [];e.push('<ul class="' + t.id + '-legend">');var n = t.data,
              i = n.datasets,
              a = n.labels;if (i.length) for (var r = 0; r < i[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
          }return e.push("</ul>"), e.join("");
        }, legend: { labels: { generateLabels: function generateLabels(t) {
              var e = t.data;return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                var a = t.getDatasetMeta(0),
                    r = e.datasets[0],
                    o = a.data[i],
                    s = o && o.custom || {},
                    l = t.options.elements.arc,
                    u = Xt([s.backgroundColor, r.backgroundColor, l.backgroundColor], void 0, i),
                    d = Xt([s.borderColor, r.borderColor, l.borderColor], void 0, i),
                    c = Xt([s.borderWidth, r.borderWidth, l.borderWidth], void 0, i);return { text: n, fillStyle: u, strokeStyle: d, lineWidth: c, hidden: isNaN(r.data[i]) || a.data[i].hidden, index: i };
              }) : [];
            } }, onClick: function onClick(t, e) {
            var n,
                i,
                a,
                r = e.index,
                o = this.chart;for (n = 0, i = (o.data.datasets || []).length; n < i; ++n) {
              (a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
            }o.update();
          } }, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function title() {
              return "";
            }, label: function label(t, e) {
              var n = e.labels[t.index],
                  i = ": " + e.datasets[t.datasetIndex].data[t.index];return ut.isArray(n) ? (n = n.slice())[0] += i : n += i, n;
            } } } });var Zt = wt.extend({ dataElementType: Bt.Arc, linkScales: ut.noop, getRingIndex: function getRingIndex(t) {
          for (var e = 0, n = 0; n < t; ++n) {
            this.chart.isDatasetVisible(n) && ++e;
          }return e;
        }, update: function update(t) {
          var e,
              n,
              i = this,
              a = i.chart,
              r = a.chartArea,
              o = a.options,
              s = r.right - r.left,
              l = r.bottom - r.top,
              u = Math.min(s, l),
              d = { x: 0, y: 0 },
              c = i.getMeta(),
              h = c.data,
              f = o.cutoutPercentage,
              g = o.circumference,
              p = i._getRingWeight(i.index);if (g < 2 * Math.PI) {
            var m = o.rotation % (2 * Math.PI),
                v = (m += 2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) + g,
                b = { x: Math.cos(m), y: Math.sin(m) },
                y = { x: Math.cos(v), y: Math.sin(v) },
                x = m <= 0 && v >= 0 || m <= 2 * Math.PI && 2 * Math.PI <= v,
                k = m <= .5 * Math.PI && .5 * Math.PI <= v || m <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
                w = m <= -Math.PI && -Math.PI <= v || m <= Math.PI && Math.PI <= v,
                M = m <= .5 * -Math.PI && .5 * -Math.PI <= v || m <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
                _ = f / 100,
                C = { x: w ? -1 : Math.min(b.x * (b.x < 0 ? 1 : _), y.x * (y.x < 0 ? 1 : _)), y: M ? -1 : Math.min(b.y * (b.y < 0 ? 1 : _), y.y * (y.y < 0 ? 1 : _)) },
                S = { x: x ? 1 : Math.max(b.x * (b.x > 0 ? 1 : _), y.x * (y.x > 0 ? 1 : _)), y: k ? 1 : Math.max(b.y * (b.y > 0 ? 1 : _), y.y * (y.y > 0 ? 1 : _)) },
                P = { width: .5 * (S.x - C.x), height: .5 * (S.y - C.y) };u = Math.min(s / P.width, l / P.height), d = { x: -.5 * (S.x + C.x), y: -.5 * (S.y + C.y) };
          }for (e = 0, n = h.length; e < n; ++e) {
            h[e]._options = i._resolveElementOptions(h[e], e);
          }for (a.borderWidth = i.getMaxBorderWidth(), a.outerRadius = Math.max((u - a.borderWidth) / 2, 0), a.innerRadius = Math.max(f ? a.outerRadius / 100 * f : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), a.offsetX = d.x * a.outerRadius, a.offsetY = d.y * a.outerRadius, c.total = i.calculateTotal(), i.outerRadius = a.outerRadius - a.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - a.radiusLength * p, 0), e = 0, n = h.length; e < n; ++e) {
            i.updateElement(h[e], e, t);
          }
        }, updateElement: function updateElement(t, e, n) {
          var i = this,
              a = i.chart,
              r = a.chartArea,
              o = a.options,
              s = o.animation,
              l = (r.left + r.right) / 2,
              u = (r.top + r.bottom) / 2,
              d = o.rotation,
              c = o.rotation,
              h = i.getDataset(),
              f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(h.data[e]) * (o.circumference / (2 * Math.PI)),
              g = n && s.animateScale ? 0 : i.innerRadius,
              p = n && s.animateScale ? 0 : i.outerRadius,
              m = t._options || {};ut.extend(t, { _datasetIndex: i.index, _index: e, _model: { backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, borderAlign: m.borderAlign, x: l + a.offsetX, y: u + a.offsetY, startAngle: d, endAngle: c, circumference: f, outerRadius: p, innerRadius: g, label: ut.valueAtIndexOrDefault(h.label, e, a.data.labels[e]) } });var v = t._model;n && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
        }, calculateTotal: function calculateTotal() {
          var t,
              e = this.getDataset(),
              n = this.getMeta(),
              i = 0;return ut.each(n.data, function (n, a) {
            t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t));
          }), i;
        }, calculateCircumference: function calculateCircumference(t) {
          var e = this.getMeta().total;return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
        }, getMaxBorderWidth: function getMaxBorderWidth(t) {
          var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l,
              u = 0,
              d = this.chart;if (!t) for (e = 0, n = d.data.datasets.length; e < n; ++e) {
            if (d.isDatasetVisible(e)) {
              i = d.getDatasetMeta(e), t = i.data, e !== this.index && (r = i.controller);break;
            }
          }if (!t) return 0;for (e = 0, n = t.length; e < n; ++e) {
            a = t[e], "inner" !== (o = r ? r._resolveElementOptions(a, e) : a._options).borderAlign && (s = o.borderWidth, l = o.hoverBorderWidth, u = l > (u = s > u ? s : u) ? l : u);
          }return u;
        }, setHoverStyle: function setHoverStyle(t) {
          var e = t._model,
              n = t._options,
              i = ut.getHoverColor;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = Gt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Gt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Gt(n.hoverBorderWidth, n.borderWidth);
        }, _resolveElementOptions: function _resolveElementOptions(t, e) {
          var n,
              i,
              a,
              r = this.chart,
              o = this.getDataset(),
              s = t.custom || {},
              l = r.options.elements.arc,
              u = {},
              d = { chart: r, dataIndex: e, dataset: o, datasetIndex: this.index },
              c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];for (n = 0, i = c.length; n < i; ++n) {
            u[a = c[n]] = Xt([s[a], o[a], l[a]], d, e);
          }return u;
        }, _getRingWeightOffset: function _getRingWeightOffset(t) {
          for (var e = 0, n = 0; n < t; ++n) {
            this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
          }return e;
        }, _getRingWeight: function _getRingWeight(t) {
          return Math.max(Gt(this.chart.data.datasets[t].weight, 1), 0);
        }, _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
          return this._getRingWeightOffset(this.chart.data.datasets.length);
        } });ot._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } });var $t = qt.extend({ _getValueScaleId: function _getValueScaleId() {
          return this.getMeta().xAxisID;
        }, _getIndexScaleId: function _getIndexScaleId() {
          return this.getMeta().yAxisID;
        } }),
          Jt = ut.valueOrDefault,
          Qt = ut.options.resolve,
          te = ut.canvas._isPointInArea;function ee(t, e) {
        return Jt(t.showLine, e.showLines);
      }ot._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } });var ne = wt.extend({ datasetElementType: Bt.Line, dataElementType: Bt.Point, update: function update(t) {
          var e,
              n,
              i = this,
              a = i.getMeta(),
              r = a.dataset,
              o = a.data || [],
              s = i.getScaleForId(a.yAxisID),
              l = i.getDataset(),
              u = ee(l, i.chart.options);for (u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._model = i._resolveLineOptions(r), r.pivot()), e = 0, n = o.length; e < n; ++e) {
            i.updateElement(o[e], e, t);
          }for (u && 0 !== r._model.tension && i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) {
            o[e].pivot();
          }
        }, updateElement: function updateElement(t, e, n) {
          var i,
              a,
              r = this,
              o = r.getMeta(),
              s = t.custom || {},
              l = r.getDataset(),
              u = r.index,
              d = l.data[e],
              c = r.getScaleForId(o.yAxisID),
              h = r.getScaleForId(o.xAxisID),
              f = o.dataset._model,
              g = r._resolvePointOptions(t, e);i = h.getPixelForValue("object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) ? d : NaN, e, u), a = n ? c.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._options = g, t._datasetIndex = u, t._index = e, t._model = { x: i, y: a, skip: s.skip || isNaN(i) || isNaN(a), radius: g.radius, pointStyle: g.pointStyle, rotation: g.rotation, backgroundColor: g.backgroundColor, borderColor: g.borderColor, borderWidth: g.borderWidth, tension: Jt(s.tension, f ? f.tension : 0), steppedLine: !!f && f.steppedLine, hitRadius: g.hitRadius };
        }, _resolvePointOptions: function _resolvePointOptions(t, e) {
          var n,
              i,
              a,
              r = this.chart,
              o = r.data.datasets[this.index],
              s = t.custom || {},
              l = r.options.elements.point,
              u = {},
              d = { chart: r, dataIndex: e, dataset: o, datasetIndex: this.index },
              c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
              h = Object.keys(c);for (n = 0, i = h.length; n < i; ++n) {
            a = h[n], u[a] = Qt([s[a], o[c[a]], o[a], l[a]], d, e);
          }return u;
        }, _resolveLineOptions: function _resolveLineOptions(t) {
          var e,
              n,
              i,
              a = this.chart,
              r = a.data.datasets[this.index],
              o = t.custom || {},
              s = a.options,
              l = s.elements.line,
              u = {},
              d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];for (e = 0, n = d.length; e < n; ++e) {
            u[i = d[e]] = Qt([o[i], r[i], l[i]]);
          }return u.spanGaps = Jt(r.spanGaps, s.spanGaps), u.tension = Jt(r.lineTension, l.tension), u.steppedLine = Qt([o.steppedLine, r.steppedLine, l.stepped]), u;
        }, calculatePointY: function calculatePointY(t, e, n) {
          var i,
              a,
              r,
              o = this.chart,
              s = this.getMeta(),
              l = this.getScaleForId(s.yAxisID),
              u = 0,
              d = 0;if (l.options.stacked) {
            for (i = 0; i < n; i++) {
              if (a = o.data.datasets[i], "line" === (r = o.getDatasetMeta(i)).type && r.yAxisID === l.id && o.isDatasetVisible(i)) {
                var c = Number(l.getRightValue(a.data[e]));c < 0 ? d += c || 0 : u += c || 0;
              }
            }var h = Number(l.getRightValue(t));return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h);
          }return l.getPixelForValue(t);
        }, updateBezierControlPoints: function updateBezierControlPoints() {
          var t,
              e,
              n,
              i,
              a = this.chart,
              r = this.getMeta(),
              o = r.dataset._model,
              s = a.chartArea,
              l = r.data || [];function u(t, e, n) {
            return Math.max(Math.min(t, n), e);
          }if (o.spanGaps && (l = l.filter(function (t) {
            return !t._model.skip;
          })), "monotone" === o.cubicInterpolationMode) ut.splineCurveMonotone(l);else for (t = 0, e = l.length; t < e; ++t) {
            n = l[t]._model, i = ut.splineCurve(ut.previousItem(l, t)._model, n, ut.nextItem(l, t)._model, o.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
          }if (a.options.elements.line.capBezierPoints) for (t = 0, e = l.length; t < e; ++t) {
            n = l[t]._model, te(n, s) && (t > 0 && te(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && te(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)));
          }
        }, draw: function draw() {
          var t,
              e = this.chart,
              n = this.getMeta(),
              i = n.data || [],
              a = e.chartArea,
              r = i.length,
              o = 0;for (ee(this.getDataset(), e.options) && (t = (n.dataset._model.borderWidth || 0) / 2, ut.canvas.clipArea(e.ctx, { left: a.left, right: a.right, top: a.top - t, bottom: a.bottom + t }), n.dataset.draw(), ut.canvas.unclipArea(e.ctx)); o < r; ++o) {
            i[o].draw(a);
          }
        }, setHoverStyle: function setHoverStyle(t) {
          var e = t._model,
              n = t._options,
              i = ut.getHoverColor;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Jt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Jt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Jt(n.hoverBorderWidth, n.borderWidth), e.radius = Jt(n.hoverRadius, n.radius);
        } }),
          ie = ut.options.resolve;ot._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function legendCallback(t) {
          var e = [];e.push('<ul class="' + t.id + '-legend">');var n = t.data,
              i = n.datasets,
              a = n.labels;if (i.length) for (var r = 0; r < i[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
          }return e.push("</ul>"), e.join("");
        }, legend: { labels: { generateLabels: function generateLabels(t) {
              var e = t.data;return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                var a = t.getDatasetMeta(0),
                    r = e.datasets[0],
                    o = a.data[i],
                    s = o.custom || {},
                    l = t.options.elements.arc,
                    u = ie([s.backgroundColor, r.backgroundColor, l.backgroundColor], void 0, i),
                    d = ie([s.borderColor, r.borderColor, l.borderColor], void 0, i),
                    c = ie([s.borderWidth, r.borderWidth, l.borderWidth], void 0, i);return { text: n, fillStyle: u, strokeStyle: d, lineWidth: c, hidden: isNaN(r.data[i]) || a.data[i].hidden, index: i };
              }) : [];
            } }, onClick: function onClick(t, e) {
            var n,
                i,
                a,
                r = e.index,
                o = this.chart;for (n = 0, i = (o.data.datasets || []).length; n < i; ++n) {
              (a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
            }o.update();
          } }, tooltips: { callbacks: { title: function title() {
              return "";
            }, label: function label(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            } } } });var ae = wt.extend({ dataElementType: Bt.Arc, linkScales: ut.noop, update: function update(t) {
          var e,
              n,
              i,
              a = this,
              r = a.getDataset(),
              o = a.getMeta(),
              s = a.chart.options.startAngle || 0,
              l = a._starts = [],
              u = a._angles = [],
              d = o.data;for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, n = r.data.length; e < n; e++) {
            l[e] = s, i = a._computeAngle(e), u[e] = i, s += i;
          }for (e = 0, n = d.length; e < n; ++e) {
            d[e]._options = a._resolveElementOptions(d[e], e), a.updateElement(d[e], e, t);
          }
        }, _updateRadius: function _updateRadius() {
          var t = this,
              e = t.chart,
              n = e.chartArea,
              i = e.options,
              a = Math.min(n.right - n.left, n.bottom - n.top);e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength;
        }, updateElement: function updateElement(t, e, n) {
          var i = this,
              a = i.chart,
              r = i.getDataset(),
              o = a.options,
              s = o.animation,
              l = a.scale,
              u = a.data.labels,
              d = l.xCenter,
              c = l.yCenter,
              h = o.startAngle,
              f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
              g = i._starts[e],
              p = g + (t.hidden ? 0 : i._angles[e]),
              m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
              v = t._options || {};ut.extend(t, { _datasetIndex: i.index, _index: e, _scale: l, _model: { backgroundColor: v.backgroundColor, borderColor: v.borderColor, borderWidth: v.borderWidth, borderAlign: v.borderAlign, x: d, y: c, innerRadius: 0, outerRadius: n ? m : f, startAngle: n && s.animateRotate ? h : g, endAngle: n && s.animateRotate ? h : p, label: ut.valueAtIndexOrDefault(u, e, u[e]) } }), t.pivot();
        }, countVisibleElements: function countVisibleElements() {
          var t = this.getDataset(),
              e = this.getMeta(),
              n = 0;return ut.each(e.data, function (e, i) {
            isNaN(t.data[i]) || e.hidden || n++;
          }), n;
        }, setHoverStyle: function setHoverStyle(t) {
          var e = t._model,
              n = t._options,
              i = ut.getHoverColor,
              a = ut.valueOrDefault;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = a(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = a(n.hoverBorderWidth, n.borderWidth);
        }, _resolveElementOptions: function _resolveElementOptions(t, e) {
          var n,
              i,
              a,
              r = this.chart,
              o = this.getDataset(),
              s = t.custom || {},
              l = r.options.elements.arc,
              u = {},
              d = { chart: r, dataIndex: e, dataset: o, datasetIndex: this.index },
              c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];for (n = 0, i = c.length; n < i; ++n) {
            u[a = c[n]] = ie([s[a], o[a], l[a]], d, e);
          }return u;
        }, _computeAngle: function _computeAngle(t) {
          var e = this,
              n = this.getMeta().count,
              i = e.getDataset(),
              a = e.getMeta();if (isNaN(i.data[t]) || a.data[t].hidden) return 0;var r = { chart: e.chart, dataIndex: t, dataset: i, datasetIndex: e.index };return ie([e.chart.options.elements.arc.angle, 2 * Math.PI / n], r, t);
        } });ot._set("pie", ut.clone(ot.doughnut)), ot._set("pie", { cutoutPercentage: 0 });var re = Zt,
          oe = ut.valueOrDefault,
          se = ut.options.resolve;ot._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } });var le = wt.extend({ datasetElementType: Bt.Line, dataElementType: Bt.Point, linkScales: ut.noop, update: function update(t) {
          var e,
              n,
              i = this,
              a = i.getMeta(),
              r = a.dataset,
              o = a.data || [],
              s = i.chart.scale,
              l = i.getDataset();for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._loop = !0, r._model = i._resolveLineOptions(r), r.pivot(), e = 0, n = o.length; e < n; ++e) {
            i.updateElement(o[e], e, t);
          }for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) {
            o[e].pivot();
          }
        }, updateElement: function updateElement(t, e, n) {
          var i = this,
              a = t.custom || {},
              r = i.getDataset(),
              o = i.chart.scale,
              s = o.getPointPositionForValue(e, r.data[e]),
              l = i._resolvePointOptions(t, e),
              u = i.getMeta().dataset._model,
              d = n ? o.xCenter : s.x,
              c = n ? o.yCenter : s.y;t._scale = o, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = { x: d, y: c, skip: a.skip || isNaN(d) || isNaN(c), radius: l.radius, pointStyle: l.pointStyle, rotation: l.rotation, backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, tension: oe(a.tension, u ? u.tension : 0), hitRadius: l.hitRadius };
        }, _resolvePointOptions: function _resolvePointOptions(t, e) {
          var n,
              i,
              a,
              r = this.chart,
              o = r.data.datasets[this.index],
              s = t.custom || {},
              l = r.options.elements.point,
              u = {},
              d = { chart: r, dataIndex: e, dataset: o, datasetIndex: this.index },
              c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
              h = Object.keys(c);for (n = 0, i = h.length; n < i; ++n) {
            a = h[n], u[a] = se([s[a], o[c[a]], o[a], l[a]], d, e);
          }return u;
        }, _resolveLineOptions: function _resolveLineOptions(t) {
          var e,
              n,
              i,
              a = this.chart,
              r = a.data.datasets[this.index],
              o = t.custom || {},
              s = a.options.elements.line,
              l = {},
              u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];for (e = 0, n = u.length; e < n; ++e) {
            l[i = u[e]] = se([o[i], r[i], s[i]]);
          }return l.tension = oe(r.lineTension, s.tension), l;
        }, updateBezierControlPoints: function updateBezierControlPoints() {
          var t,
              e,
              n,
              i,
              a = this.getMeta(),
              r = this.chart.chartArea,
              o = a.data || [];function s(t, e, n) {
            return Math.max(Math.min(t, n), e);
          }for (t = 0, e = o.length; t < e; ++t) {
            n = o[t]._model, i = ut.splineCurve(ut.previousItem(o, t, !0)._model, n, ut.nextItem(o, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, r.left, r.right), n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom), n.controlPointNextX = s(i.next.x, r.left, r.right), n.controlPointNextY = s(i.next.y, r.top, r.bottom);
          }
        }, setHoverStyle: function setHoverStyle(t) {
          var e = t._model,
              n = t._options,
              i = ut.getHoverColor;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = oe(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = oe(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = oe(n.hoverBorderWidth, n.borderWidth), e.radius = oe(n.hoverRadius, n.radius);
        } });ot._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, showLines: !1, tooltips: { callbacks: { title: function title() {
              return "";
            }, label: function label(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            } } } });var ue = { bar: qt, bubble: Kt, doughnut: Zt, horizontalBar: $t, line: ne, polarArea: ae, pie: re, radar: le, scatter: ne };function de(t, e) {
        return t.native ? { x: t.x, y: t.y } : ut.getRelativePosition(t, e);
      }function ce(t, e) {
        var n,
            i,
            a,
            r,
            o,
            s = t.data.datasets;for (i = 0, r = s.length; i < r; ++i) {
          if (t.isDatasetVisible(i)) for (n = t.getDatasetMeta(i), a = 0, o = n.data.length; a < o; ++a) {
            var l = n.data[a];l._view.skip || e(l);
          }
        }
      }function he(t, e) {
        var n = [];return ce(t, function (t) {
          t.inRange(e.x, e.y) && n.push(t);
        }), n;
      }function fe(t, e, n, i) {
        var a = Number.POSITIVE_INFINITY,
            r = [];return ce(t, function (t) {
          if (!n || t.inRange(e.x, e.y)) {
            var o = t.getCenterPoint(),
                s = i(e, o);s < a ? (r = [t], a = s) : s === a && r.push(t);
          }
        }), r;
      }function ge(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");return function (t, i) {
          var a = e ? Math.abs(t.x - i.x) : 0,
              r = n ? Math.abs(t.y - i.y) : 0;return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
        };
      }function pe(t, e, n) {
        var i = de(e, t);n.axis = n.axis || "x";var a = ge(n.axis),
            r = n.intersect ? he(t, i) : fe(t, i, !1, a),
            o = [];return r.length ? (t.data.datasets.forEach(function (e, n) {
          if (t.isDatasetVisible(n)) {
            var i = t.getDatasetMeta(n),
                a = i.data[r[0]._index];a && !a._view.skip && o.push(a);
          }
        }), o) : [];
      }var me = { modes: { single: function single(t, e) {
            var n = de(e, t),
                i = [];return ce(t, function (t) {
              if (t.inRange(n.x, n.y)) return i.push(t), i;
            }), i.slice(0, 1);
          }, label: pe, index: pe, dataset: function dataset(t, e, n) {
            var i = de(e, t);n.axis = n.axis || "xy";var a = ge(n.axis),
                r = n.intersect ? he(t, i) : fe(t, i, !1, a);return r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r;
          }, "x-axis": function xAxis(t, e) {
            return pe(t, e, { intersect: !1 });
          }, point: function point(t, e) {
            var n = de(e, t);return he(t, n);
          }, nearest: function nearest(t, e, n) {
            var i = de(e, t);n.axis = n.axis || "xy";var a = ge(n.axis);return fe(t, i, n.intersect, a);
          }, x: function x(t, e, n) {
            var i = de(e, t),
                a = [],
                r = !1;return ce(t, function (t) {
              t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
            }), n.intersect && !r && (a = []), a;
          }, y: function y(t, e, n) {
            var i = de(e, t),
                a = [],
                r = !1;return ce(t, function (t) {
              t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
            }), n.intersect && !r && (a = []), a;
          } } };function ve(t, e) {
        return ut.where(t, function (t) {
          return t.position === e;
        });
      }function be(t, e) {
        t.forEach(function (t, e) {
          return t._tmpIndex_ = e, t;
        }), t.sort(function (t, n) {
          var i = e ? n : t,
              a = e ? t : n;return i.weight === a.weight ? i._tmpIndex_ - a._tmpIndex_ : i.weight - a.weight;
        }), t.forEach(function (t) {
          delete t._tmpIndex_;
        });
      }function ye(t, e) {
        ut.each(t, function (t) {
          e[t.position] += t.isHorizontal() ? t.height : t.width;
        });
      }ot._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } });var xe,
          ke = { defaults: {}, addBox: function addBox(t, e) {
          t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
        }, removeBox: function removeBox(t, e) {
          var n = t.boxes ? t.boxes.indexOf(e) : -1;-1 !== n && t.boxes.splice(n, 1);
        }, configure: function configure(t, e, n) {
          for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) {
            i = a[o], n.hasOwnProperty(i) && (e[i] = n[i]);
          }
        }, update: function update(t, e, n) {
          if (t) {
            var i = t.options.layout || {},
                a = ut.options.toPadding(i.padding),
                r = a.left,
                o = a.right,
                s = a.top,
                l = a.bottom,
                u = ve(t.boxes, "left"),
                d = ve(t.boxes, "right"),
                c = ve(t.boxes, "top"),
                h = ve(t.boxes, "bottom"),
                f = ve(t.boxes, "chartArea");be(u, !0), be(d, !1), be(c, !0), be(h, !1);var g,
                p = u.concat(d),
                m = c.concat(h),
                v = p.concat(m),
                b = e - r - o,
                y = n - s - l,
                x = b / 2,
                k = (e - x) / p.length,
                w = b,
                M = y,
                _ = { top: s, left: r, bottom: l, right: o },
                C = [];ut.each(v, function (t) {
              var e,
                  n = t.isHorizontal();n ? (e = t.update(t.fullWidth ? b : w, y / 2), M -= e.height) : (e = t.update(k, M), w -= e.width), C.push({ horizontal: n, width: e.width, box: t });
            }), g = function (t) {
              var e = 0,
                  n = 0,
                  i = 0,
                  a = 0;return ut.each(t, function (t) {
                if (t.getPadding) {
                  var r = t.getPadding();e = Math.max(e, r.top), n = Math.max(n, r.left), i = Math.max(i, r.bottom), a = Math.max(a, r.right);
                }
              }), { top: e, left: n, bottom: i, right: a };
            }(v), ut.each(p, F), ye(p, _), ut.each(m, F), ye(m, _), ut.each(p, function (t) {
              var e = ut.findNextWhere(C, function (e) {
                return e.box === t;
              }),
                  n = { left: 0, right: 0, top: _.top, bottom: _.bottom };e && t.update(e.width, M, n);
            }), ye(v, _ = { top: s, left: r, bottom: l, right: o });var S = Math.max(g.left - _.left, 0);_.left += S, _.right += Math.max(g.right - _.right, 0);var P = Math.max(g.top - _.top, 0);_.top += P, _.bottom += Math.max(g.bottom - _.bottom, 0);var I = n - _.top - _.bottom,
                A = e - _.left - _.right;A === w && I === M || (ut.each(p, function (t) {
              t.height = I;
            }), ut.each(m, function (t) {
              t.fullWidth || (t.width = A);
            }), M = I, w = A);var D = r + S,
                T = s + P;ut.each(u.concat(c), O), D += w, T += M, ut.each(d, O), ut.each(h, O), t.chartArea = { left: _.left, top: _.top, right: _.left + w, bottom: _.top + M }, ut.each(f, function (e) {
              e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(w, M);
            });
          }function F(t) {
            var e = ut.findNextWhere(C, function (e) {
              return e.box === t;
            });if (e) if (e.horizontal) {
              var n = { left: Math.max(_.left, g.left), right: Math.max(_.right, g.right), top: 0, bottom: 0 };t.update(t.fullWidth ? b : w, y / 2, n);
            } else t.update(e.width, M);
          }function O(t) {
            t.isHorizontal() ? (t.left = t.fullWidth ? r : _.left, t.right = t.fullWidth ? e - o : _.left + w, t.top = T, t.bottom = T + t.height, T = t.bottom) : (t.left = D, t.right = D + t.width, t.top = _.top, t.bottom = _.top + M, D = t.right);
          }
        } },
          we = (xe = Object.freeze({ default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n" })) && xe.default || xe,
          Me = "$chartjs",
          _e = "chartjs-size-monitor",
          Ce = "chartjs-render-monitor",
          Se = "chartjs-render-animation",
          Pe = ["animationstart", "webkitAnimationStart"],
          Ie = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };function Ae(t, e) {
        var n = ut.getStyle(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/);return i ? Number(i[1]) : void 0;
      }var De = !!function () {
        var t = !1;try {
          var e = Object.defineProperty({}, "passive", { get: function get() {
              t = !0;
            } });window.addEventListener("e", null, e);
        } catch (n) {}return t;
      }() && { passive: !0 };function Te(t, e, n) {
        t.addEventListener(e, n, De);
      }function Fe(t, e, n) {
        t.removeEventListener(e, n, De);
      }function Oe(t, e, n, i, a) {
        return { type: t, chart: e, native: a || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null };
      }function Le(t) {
        var e = document.createElement("div");return e.className = t || "", e;
      }function Re(t, e, n) {
        var i = t[Me] || (t[Me] = {}),
            a = i.resizer = function (t) {
          var e = Le(_e),
              n = Le(_e + "-expand"),
              i = Le(_e + "-shrink");n.appendChild(Le()), i.appendChild(Le()), e.appendChild(n), e.appendChild(i), e._reset = function () {
            n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6;
          };var a = function a() {
            e._reset(), t();
          };return Te(n, "scroll", a.bind(n, "expand")), Te(i, "scroll", a.bind(i, "shrink")), e;
        }(function (t, e) {
          var n = !1,
              i = [];return function () {
            i = Array.prototype.slice.call(arguments), e = e || this, n || (n = !0, ut.requestAnimFrame.call(window, function () {
              n = !1, t.apply(e, i);
            }));
          };
        }(function () {
          if (i.resizer) {
            var a = n.options.maintainAspectRatio && t.parentNode,
                r = a ? a.clientWidth : 0;e(Oe("resize", n)), a && a.clientWidth < r && n.canvas && e(Oe("resize", n));
          }
        }));!function (t, e) {
          var n = t[Me] || (t[Me] = {}),
              i = n.renderProxy = function (t) {
            t.animationName === Se && e();
          };ut.each(Pe, function (e) {
            Te(t, e, i);
          }), n.reflow = !!t.offsetParent, t.classList.add(Ce);
        }(t, function () {
          if (i.resizer) {
            var e = t.parentNode;e && e !== a.parentNode && e.insertBefore(a, e.firstChild), a._reset();
          }
        });
      }function Ne(t) {
        var e = t[Me] || {},
            n = e.resizer;delete e.resizer, function (t) {
          var e = t[Me] || {},
              n = e.renderProxy;n && (ut.each(Pe, function (e) {
            Fe(t, e, n);
          }), delete e.renderProxy), t.classList.remove(Ce);
        }(t), n && n.parentNode && n.parentNode.removeChild(n);
      }var ze = { disableCSSInjection: !1, _enabled: "undefined" !== typeof window && "undefined" !== typeof document, _ensureLoaded: function _ensureLoaded() {
          this._loaded || (this._loaded = !0, this.disableCSSInjection || function (t, e) {
            var n = t._style || document.createElement("style");t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e));
          }(this, we));
        }, acquireContext: function acquireContext(t, e) {
          "string" === typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);var n = t && t.getContext && t.getContext("2d");return this._ensureLoaded(), n && n.canvas === t ? (function (t, e) {
            var n = t.style,
                i = t.getAttribute("height"),
                a = t.getAttribute("width");if (t[Me] = { initial: { height: i, width: a, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === a || "" === a) {
              var r = Ae(t, "width");void 0 !== r && (t.width = r);
            }if (null === i || "" === i) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
              var o = Ae(t, "height");void 0 !== r && (t.height = o);
            }
          }(t, e), n) : null;
        }, releaseContext: function releaseContext(t) {
          var e = t.canvas;if (e[Me]) {
            var n = e[Me].initial;["height", "width"].forEach(function (t) {
              var i = n[t];ut.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
            }), ut.each(n.style || {}, function (t, n) {
              e.style[n] = t;
            }), e.width = e.width, delete e[Me];
          }
        }, addEventListener: function addEventListener(t, e, n) {
          var i = t.canvas;if ("resize" !== e) {
            var a = n[Me] || (n[Me] = {}),
                r = a.proxies || (a.proxies = {}),
                o = r[t.id + "_" + e] = function (e) {
              n(function (t, e) {
                var n = Ie[t.type] || t.type,
                    i = ut.getRelativePosition(t, e);return Oe(n, e, i.x, i.y, t);
              }(e, t));
            };Te(i, e, o);
          } else Re(i, n, t);
        }, removeEventListener: function removeEventListener(t, e, n) {
          var i = t.canvas;if ("resize" !== e) {
            var a = n[Me] || {},
                r = a.proxies || {},
                o = r[t.id + "_" + e];o && Fe(i, e, o);
          } else Ne(i);
        } };ut.addEvent = Te, ut.removeEvent = Fe;var Be = ze._enabled ? ze : { acquireContext: function acquireContext(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        } },
          Ee = ut.extend({ initialize: function initialize() {}, acquireContext: function acquireContext() {}, releaseContext: function releaseContext() {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {} }, Be);ot._set("global", { plugins: {} });var We = { _plugins: [], _cacheId: 0, register: function register(t) {
          var e = this._plugins;[].concat(t).forEach(function (t) {
            -1 === e.indexOf(t) && e.push(t);
          }), this._cacheId++;
        }, unregister: function unregister(t) {
          var e = this._plugins;[].concat(t).forEach(function (t) {
            var n = e.indexOf(t);-1 !== n && e.splice(n, 1);
          }), this._cacheId++;
        }, clear: function clear() {
          this._plugins = [], this._cacheId++;
        }, count: function count() {
          return this._plugins.length;
        }, getAll: function getAll() {
          return this._plugins;
        }, notify: function notify(t, e, n) {
          var i,
              a,
              r,
              o,
              s,
              l = this.descriptors(t),
              u = l.length;for (i = 0; i < u; ++i) {
            if (a = l[i], r = a.plugin, "function" === typeof (s = r[e]) && ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1;
          }return !0;
        }, descriptors: function descriptors(t) {
          var e = t.$plugins || (t.$plugins = {});if (e.id === this._cacheId) return e.descriptors;var n = [],
              i = [],
              a = t && t.config || {},
              r = a.options && a.options.plugins || {};return this._plugins.concat(a.plugins || []).forEach(function (t) {
            var e = n.indexOf(t);if (-1 === e) {
              var a = t.id,
                  o = r[a];!1 !== o && (!0 === o && (o = ut.clone(ot.global.plugins[a])), n.push(t), i.push({ plugin: t, options: o || {} }));
            }
          }), e.descriptors = i, e.id = this._cacheId, i;
        }, _invalidate: function _invalidate(t) {
          delete t.$plugins;
        } },
          Ve = { constructors: {}, defaults: {}, registerScaleType: function registerScaleType(t, e, n) {
          this.constructors[t] = e, this.defaults[t] = ut.clone(n);
        }, getScaleConstructor: function getScaleConstructor(t) {
          return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
        }, getScaleDefaults: function getScaleDefaults(t) {
          return this.defaults.hasOwnProperty(t) ? ut.merge({}, [ot.scale, this.defaults[t]]) : {};
        }, updateScaleDefaults: function updateScaleDefaults(t, e) {
          this.defaults.hasOwnProperty(t) && (this.defaults[t] = ut.extend(this.defaults[t], e));
        }, addScalesToLayout: function addScalesToLayout(t) {
          ut.each(t.scales, function (e) {
            e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, ke.addBox(t, e);
          });
        } },
          je = ut.valueOrDefault;ot._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: ut.noop, title: function title(t, e) {
              var n = "",
                  i = e.labels,
                  a = i ? i.length : 0;if (t.length > 0) {
                var r = t[0];r.label ? n = r.label : r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index]);
              }return n;
            }, afterTitle: ut.noop, beforeBody: ut.noop, beforeLabel: ut.noop, label: function label(t, e) {
              var n = e.datasets[t.datasetIndex].label || "";return n && (n += ": "), ut.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n;
            }, labelColor: function labelColor(t, e) {
              var n = e.getDatasetMeta(t.datasetIndex),
                  i = n.data[t.index],
                  a = i._view;return { borderColor: a.borderColor, backgroundColor: a.backgroundColor };
            }, labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            }, afterLabel: ut.noop, afterBody: ut.noop, beforeFooter: ut.noop, footer: ut.noop, afterFooter: ut.noop } } });var He = { average: function average(t) {
          if (!t.length) return !1;var e,
              n,
              i = 0,
              a = 0,
              r = 0;for (e = 0, n = t.length; e < n; ++e) {
            var o = t[e];if (o && o.hasValue()) {
              var s = o.tooltipPosition();i += s.x, a += s.y, ++r;
            }
          }return { x: i / r, y: a / r };
        }, nearest: function nearest(t, e) {
          var n,
              i,
              a,
              r = e.x,
              o = e.y,
              s = Number.POSITIVE_INFINITY;for (n = 0, i = t.length; n < i; ++n) {
            var l = t[n];if (l && l.hasValue()) {
              var u = l.getCenterPoint(),
                  d = ut.distanceBetweenPoints(e, u);d < s && (s = d, a = l);
            }
          }if (a) {
            var c = a.tooltipPosition();r = c.x, o = c.y;
          }return { x: r, y: o };
        } };function qe(t, e) {
        return e && (ut.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }function Ue(t) {
        return ("string" === typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
      }function Ye(t) {
        var e = t._xScale,
            n = t._yScale || t._scale,
            i = t._index,
            a = t._datasetIndex,
            r = t._chart.getDatasetMeta(a).controller,
            o = r._getIndexScale(),
            s = r._getValueScale();return { xLabel: e ? e.getLabelForIndex(i, a) : "", yLabel: n ? n.getLabelForIndex(i, a) : "", label: o ? "" + o.getLabelForIndex(i, a) : "", value: s ? "" + s.getLabelForIndex(i, a) : "", index: i, datasetIndex: a, x: t._model.x, y: t._model.y };
      }function Ke(t) {
        var e = ot.global;return { xPadding: t.xPadding, yPadding: t.yPadding, xAlign: t.xAlign, yAlign: t.yAlign, bodyFontColor: t.bodyFontColor, _bodyFontFamily: je(t.bodyFontFamily, e.defaultFontFamily), _bodyFontStyle: je(t.bodyFontStyle, e.defaultFontStyle), _bodyAlign: t.bodyAlign, bodyFontSize: je(t.bodyFontSize, e.defaultFontSize), bodySpacing: t.bodySpacing, titleFontColor: t.titleFontColor, _titleFontFamily: je(t.titleFontFamily, e.defaultFontFamily), _titleFontStyle: je(t.titleFontStyle, e.defaultFontStyle), titleFontSize: je(t.titleFontSize, e.defaultFontSize), _titleAlign: t.titleAlign, titleSpacing: t.titleSpacing, titleMarginBottom: t.titleMarginBottom, footerFontColor: t.footerFontColor, _footerFontFamily: je(t.footerFontFamily, e.defaultFontFamily), _footerFontStyle: je(t.footerFontStyle, e.defaultFontStyle), footerFontSize: je(t.footerFontSize, e.defaultFontSize), _footerAlign: t.footerAlign, footerSpacing: t.footerSpacing, footerMarginTop: t.footerMarginTop, caretSize: t.caretSize, cornerRadius: t.cornerRadius, backgroundColor: t.backgroundColor, opacity: 0, legendColorBackground: t.multiKeyBackground, displayColors: t.displayColors, borderColor: t.borderColor, borderWidth: t.borderWidth };
      }function Xe(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding;
      }function Ge(t) {
        return qe([], Ue(t));
      }var Ze = gt.extend({ initialize: function initialize() {
          this._model = Ke(this._options), this._lastActive = [];
        }, getTitle: function getTitle() {
          var t = this._options,
              e = t.callbacks,
              n = e.beforeTitle.apply(this, arguments),
              i = e.title.apply(this, arguments),
              a = e.afterTitle.apply(this, arguments),
              r = [];return r = qe(r, Ue(n)), r = qe(r, Ue(i)), r = qe(r, Ue(a));
        }, getBeforeBody: function getBeforeBody() {
          return Ge(this._options.callbacks.beforeBody.apply(this, arguments));
        }, getBody: function getBody(t, e) {
          var n = this,
              i = n._options.callbacks,
              a = [];return ut.each(t, function (t) {
            var r = { before: [], lines: [], after: [] };qe(r.before, Ue(i.beforeLabel.call(n, t, e))), qe(r.lines, i.label.call(n, t, e)), qe(r.after, Ue(i.afterLabel.call(n, t, e))), a.push(r);
          }), a;
        }, getAfterBody: function getAfterBody() {
          return Ge(this._options.callbacks.afterBody.apply(this, arguments));
        }, getFooter: function getFooter() {
          var t = this._options.callbacks,
              e = t.beforeFooter.apply(this, arguments),
              n = t.footer.apply(this, arguments),
              i = t.afterFooter.apply(this, arguments),
              a = [];return a = qe(a, Ue(e)), a = qe(a, Ue(n)), a = qe(a, Ue(i));
        }, update: function update(t) {
          var e,
              n,
              i = this,
              a = i._options,
              r = i._model,
              o = i._model = Ke(a),
              s = i._active,
              l = i._data,
              u = { xAlign: r.xAlign, yAlign: r.yAlign },
              d = { x: r.x, y: r.y },
              c = { width: r.width, height: r.height },
              h = { x: r.caretX, y: r.caretY };if (s.length) {
            o.opacity = 1;var f = [],
                g = [];h = He[a.position].call(i, s, i._eventPosition);var p = [];for (e = 0, n = s.length; e < n; ++e) {
              p.push(Ye(s[e]));
            }a.filter && (p = p.filter(function (t) {
              return a.filter(t, l);
            })), a.itemSort && (p = p.sort(function (t, e) {
              return a.itemSort(t, e, l);
            })), ut.each(p, function (t) {
              f.push(a.callbacks.labelColor.call(i, t, i._chart)), g.push(a.callbacks.labelTextColor.call(i, t, i._chart));
            }), o.title = i.getTitle(p, l), o.beforeBody = i.getBeforeBody(p, l), o.body = i.getBody(p, l), o.afterBody = i.getAfterBody(p, l), o.footer = i.getFooter(p, l), o.x = h.x, o.y = h.y, o.caretPadding = a.caretPadding, o.labelColors = f, o.labelTextColors = g, o.dataPoints = p, c = function (t, e) {
              var n = t._chart.ctx,
                  i = 2 * e.yPadding,
                  a = 0,
                  r = e.body,
                  o = r.reduce(function (t, e) {
                return t + e.before.length + e.lines.length + e.after.length;
              }, 0);o += e.beforeBody.length + e.afterBody.length;var s = e.title.length,
                  l = e.footer.length,
                  u = e.titleFontSize,
                  d = e.bodyFontSize,
                  c = e.footerFontSize;i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += o * d, i += o ? (o - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * c, i += l ? (l - 1) * e.footerSpacing : 0;var h = 0,
                  f = function f(t) {
                a = Math.max(a, n.measureText(t).width + h);
              };return n.font = ut.fontString(u, e._titleFontStyle, e._titleFontFamily), ut.each(e.title, f), n.font = ut.fontString(d, e._bodyFontStyle, e._bodyFontFamily), ut.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? d + 2 : 0, ut.each(r, function (t) {
                ut.each(t.before, f), ut.each(t.lines, f), ut.each(t.after, f);
              }), h = 0, n.font = ut.fontString(c, e._footerFontStyle, e._footerFontFamily), ut.each(e.footer, f), { width: a += 2 * e.xPadding, height: i };
            }(this, o), u = function (t, e) {
              var n,
                  i,
                  a,
                  r,
                  o,
                  s = t._model,
                  l = t._chart,
                  u = t._chart.chartArea,
                  d = "center",
                  c = "center";s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");var h = (u.left + u.right) / 2,
                  f = (u.top + u.bottom) / 2;"center" === c ? (n = function n(t) {
                return t <= h;
              }, i = function i(t) {
                return t > h;
              }) : (n = function n(t) {
                return t <= e.width / 2;
              }, i = function i(t) {
                return t >= l.width - e.width / 2;
              }), a = function a(t) {
                return t + e.width + s.caretSize + s.caretPadding > l.width;
              }, r = function r(t) {
                return t - e.width - s.caretSize - s.caretPadding < 0;
              }, o = function o(t) {
                return t <= f ? "top" : "bottom";
              }, n(s.x) ? (d = "left", a(s.x) && (d = "center", c = o(s.y))) : i(s.x) && (d = "right", r(s.x) && (d = "center", c = o(s.y)));var g = t._options;return { xAlign: g.xAlign ? g.xAlign : d, yAlign: g.yAlign ? g.yAlign : c };
            }(this, c), d = function (t, e, n, i) {
              var a = t.x,
                  r = t.y,
                  o = t.caretSize,
                  s = t.caretPadding,
                  l = t.cornerRadius,
                  u = n.xAlign,
                  d = n.yAlign,
                  c = o + s,
                  h = l + s;return "right" === u ? a -= e.width : "center" === u && ((a -= e.width / 2) + e.width > i.width && (a = i.width - e.width), a < 0 && (a = 0)), "top" === d ? r += c : r -= "bottom" === d ? e.height + c : e.height / 2, "center" === d ? "left" === u ? a += c : "right" === u && (a -= c) : "left" === u ? a -= h : "right" === u && (a += h), { x: a, y: r };
            }(o, c, u, i._chart);
          } else o.opacity = 0;return o.xAlign = u.xAlign, o.yAlign = u.yAlign, o.x = d.x, o.y = d.y, o.width = c.width, o.height = c.height, o.caretX = h.x, o.caretY = h.y, i._model = o, t && a.custom && a.custom.call(i, o), i;
        }, drawCaret: function drawCaret(t, e) {
          var n = this._chart.ctx,
              i = this._view,
              a = this.getCaretPosition(t, e, i);n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
        }, getCaretPosition: function getCaretPosition(t, e, n) {
          var i,
              a,
              r,
              o,
              s,
              l,
              u = n.caretSize,
              d = n.cornerRadius,
              c = n.xAlign,
              h = n.yAlign,
              f = t.x,
              g = t.y,
              p = e.width,
              m = e.height;if ("center" === h) s = g + m / 2, "left" === c ? (a = (i = f) - u, r = i, o = s + u, l = s - u) : (a = (i = f + p) + u, r = i, o = s - u, l = s + u);else if ("left" === c ? (i = (a = f + d + u) - u, r = a + u) : "right" === c ? (i = (a = f + p - d - u) - u, r = a + u) : (a = n.caretX, i = a - u, r = a + u), "top" === h) s = (o = g) - u, l = o;else {
            s = (o = g + m) + u, l = o;var v = r;r = i, i = v;
          }return { x1: i, x2: a, x3: r, y1: o, y2: s, y3: l };
        }, drawTitle: function drawTitle(t, e, n) {
          var i = e.title;if (i.length) {
            t.x = Xe(e, e._titleAlign), n.textAlign = e._titleAlign, n.textBaseline = "top";var a,
                r,
                o = e.titleFontSize,
                s = e.titleSpacing;for (n.fillStyle = e.titleFontColor, n.font = ut.fontString(o, e._titleFontStyle, e._titleFontFamily), a = 0, r = i.length; a < r; ++a) {
              n.fillText(i[a], t.x, t.y), t.y += o + s, a + 1 === i.length && (t.y += e.titleMarginBottom - s);
            }
          }
        }, drawBody: function drawBody(t, e, n) {
          var i,
              a = e.bodyFontSize,
              r = e.bodySpacing,
              o = e._bodyAlign,
              s = e.body,
              l = e.displayColors,
              u = e.labelColors,
              d = 0,
              c = l ? Xe(e, "left") : 0;n.textAlign = o, n.textBaseline = "top", n.font = ut.fontString(a, e._bodyFontStyle, e._bodyFontFamily), t.x = Xe(e, o);var h = function h(e) {
            n.fillText(e, t.x + d, t.y), t.y += a + r;
          };n.fillStyle = e.bodyFontColor, ut.each(e.beforeBody, h), d = l && "right" !== o ? "center" === o ? a / 2 + 1 : a + 2 : 0, ut.each(s, function (r, o) {
            i = e.labelTextColors[o], n.fillStyle = i, ut.each(r.before, h), ut.each(r.lines, function (r) {
              l && (n.fillStyle = e.legendColorBackground, n.fillRect(c, t.y, a, a), n.lineWidth = 1, n.strokeStyle = u[o].borderColor, n.strokeRect(c, t.y, a, a), n.fillStyle = u[o].backgroundColor, n.fillRect(c + 1, t.y + 1, a - 2, a - 2), n.fillStyle = i), h(r);
            }), ut.each(r.after, h);
          }), d = 0, ut.each(e.afterBody, h), t.y -= r;
        }, drawFooter: function drawFooter(t, e, n) {
          var i = e.footer;i.length && (t.x = Xe(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = e._footerAlign, n.textBaseline = "top", n.fillStyle = e.footerFontColor, n.font = ut.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), ut.each(i, function (i) {
            n.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing;
          }));
        }, drawBackground: function drawBackground(t, e, n, i) {
          n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;var a = e.xAlign,
              r = e.yAlign,
              o = t.x,
              s = t.y,
              l = i.width,
              u = i.height,
              d = e.cornerRadius;n.beginPath(), n.moveTo(o + d, s), "top" === r && this.drawCaret(t, i), n.lineTo(o + l - d, s), n.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(t, i), n.lineTo(o + l, s + u - d), n.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(t, i), n.lineTo(o + d, s + u), n.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(t, i), n.lineTo(o, s + d), n.quadraticCurveTo(o, s, o + d, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke();
        }, draw: function draw() {
          var t = this._chart.ctx,
              e = this._view;if (0 !== e.opacity) {
            var n = { width: e.width, height: e.height },
                i = { x: e.x, y: e.y },
                a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(i, e, t, n), i.y += e.yPadding, this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), t.restore());
          }
        }, handleEvent: function handleEvent(t) {
          var e = this,
              n = e._options,
              i = !1;return e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), (i = !ut.arrayEquals(e._active, e._lastActive)) && (e._lastActive = e._active, (n.enabled || n.custom) && (e._eventPosition = { x: t.x, y: t.y }, e.update(!0), e.pivot())), i;
        } }),
          $e = He,
          Je = Ze;Je.positioners = $e;var Qe = ut.valueOrDefault;function tn() {
        return ut.merge({}, [].slice.call(arguments), { merger: function merger(t, e, n, i) {
            if ("xAxes" === t || "yAxes" === t) {
              var a,
                  r,
                  o,
                  s = n[t].length;for (e[t] || (e[t] = []), a = 0; a < s; ++a) {
                o = n[t][a], r = Qe(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? ut.merge(e[t][a], [Ve.getScaleDefaults(r), o]) : ut.merge(e[t][a], o);
              }
            } else ut._merger(t, e, n, i);
          } });
      }function en() {
        return ut.merge({}, [].slice.call(arguments), { merger: function merger(t, e, n, i) {
            var a = e[t] || {},
                r = n[t];"scales" === t ? e[t] = tn(a, r) : "scale" === t ? e[t] = ut.merge(a, [Ve.getScaleDefaults(r.type), r]) : ut._merger(t, e, n, i);
          } });
      }function nn(t) {
        return "top" === t || "bottom" === t;
      }ot._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 });var an = function an(t, e) {
        return this.construct(t, e), this;
      };ut.extend(an.prototype, { construct: function construct(t, e) {
          var n = this;e = function (t) {
            var e = (t = t || {}).data = t.data || {};return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = en(ot.global, ot[t.type], t.options || {}), t;
          }(e);var i = Ee.acquireContext(t, e),
              a = i && i.canvas,
              r = a && a.height,
              o = a && a.width;n.id = ut.uid(), n.ctx = i, n.canvas = a, n.config = e, n.width = o, n.height = r, n.aspectRatio = r ? o / r : null, n.options = e.options, n._bufferedRender = !1, n.chart = n, n.controller = n, an.instances[n.id] = n, Object.defineProperty(n, "data", { get: function get() {
              return n.config.data;
            }, set: function set(t) {
              n.config.data = t;
            } }), i && a ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item");
        }, initialize: function initialize() {
          var t = this;return We.notify(t, "beforeInit"), ut.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), We.notify(t, "afterInit"), t;
        }, clear: function clear() {
          return ut.canvas.clear(this), this;
        }, stop: function stop() {
          return vt.cancelAnimation(this), this;
        }, resize: function resize(t) {
          var e = this,
              n = e.options,
              i = e.canvas,
              a = n.maintainAspectRatio && e.aspectRatio || null,
              r = Math.max(0, Math.floor(ut.getMaximumWidth(i))),
              o = Math.max(0, Math.floor(a ? r / a : ut.getMaximumHeight(i)));if ((e.width !== r || e.height !== o) && (i.width = e.width = r, i.height = e.height = o, i.style.width = r + "px", i.style.height = o + "px", ut.retinaScale(e, n.devicePixelRatio), !t)) {
            var s = { width: r, height: o };We.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({ duration: n.responsiveAnimationDuration });
          }
        }, ensureScalesHaveIDs: function ensureScalesHaveIDs() {
          var t = this.options,
              e = t.scales || {},
              n = t.scale;ut.each(e.xAxes, function (t, e) {
            t.id = t.id || "x-axis-" + e;
          }), ut.each(e.yAxes, function (t, e) {
            t.id = t.id || "y-axis-" + e;
          }), n && (n.id = n.id || "scale");
        }, buildOrUpdateScales: function buildOrUpdateScales() {
          var t = this,
              e = t.options,
              n = t.scales || {},
              i = [],
              a = Object.keys(n).reduce(function (t, e) {
            return t[e] = !1, t;
          }, {});e.scales && (i = i.concat((e.scales.xAxes || []).map(function (t) {
            return { options: t, dtype: "category", dposition: "bottom" };
          }), (e.scales.yAxes || []).map(function (t) {
            return { options: t, dtype: "linear", dposition: "left" };
          }))), e.scale && i.push({ options: e.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), ut.each(i, function (e) {
            var i = e.options,
                r = i.id,
                o = Qe(i.type, e.dtype);nn(i.position) !== nn(e.dposition) && (i.position = e.dposition), a[r] = !0;var s = null;if (r in n && n[r].type === o) (s = n[r]).options = i, s.ctx = t.ctx, s.chart = t;else {
              var l = Ve.getScaleConstructor(o);if (!l) return;s = new l({ id: r, type: o, options: i, ctx: t.ctx, chart: t }), n[s.id] = s;
            }s.mergeTicksOptions(), e.isDefault && (t.scale = s);
          }), ut.each(a, function (t, e) {
            t || delete n[e];
          }), t.scales = n, Ve.addScalesToLayout(this);
        }, buildOrUpdateControllers: function buildOrUpdateControllers() {
          var t = this,
              e = [];return ut.each(t.data.datasets, function (n, i) {
            var a = t.getDatasetMeta(i),
                r = n.type || t.config.type;if (a.type && a.type !== r && (t.destroyDatasetMeta(i), a = t.getDatasetMeta(i)), a.type = r, a.controller) a.controller.updateIndex(i), a.controller.linkScales();else {
              var o = ue[a.type];if (void 0 === o) throw new Error('"' + a.type + '" is not a chart type.');a.controller = new o(t, i), e.push(a.controller);
            }
          }, t), e;
        }, resetElements: function resetElements() {
          var t = this;ut.each(t.data.datasets, function (e, n) {
            t.getDatasetMeta(n).controller.reset();
          }, t);
        }, reset: function reset() {
          this.resetElements(), this.tooltip.initialize();
        }, update: function update(t) {
          var e = this;if (t && "object" === (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = { duration: t, lazy: arguments[1] }), function (t) {
            var e = t.options;ut.each(t.scales, function (e) {
              ke.removeBox(t, e);
            }), e = en(ot.global, ot[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize();
          }(e), We._invalidate(e), !1 !== We.notify(e, "beforeUpdate")) {
            e.tooltip._data = e.data;var n = e.buildOrUpdateControllers();ut.each(e.data.datasets, function (t, n) {
              e.getDatasetMeta(n).controller.buildOrUpdateElements();
            }, e), e.updateLayout(), e.options.animation && e.options.animation.duration && ut.each(n, function (t) {
              t.reset();
            }), e.updateDatasets(), e.tooltip.initialize(), e.lastActive = [], We.notify(e, "afterUpdate"), e._bufferedRender ? e._bufferedRequest = { duration: t.duration, easing: t.easing, lazy: t.lazy } : e.render(t);
          }
        }, updateLayout: function updateLayout() {
          !1 !== We.notify(this, "beforeLayout") && (ke.update(this, this.width, this.height), We.notify(this, "afterScaleUpdate"), We.notify(this, "afterLayout"));
        }, updateDatasets: function updateDatasets() {
          if (!1 !== We.notify(this, "beforeDatasetsUpdate")) {
            for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
              this.updateDataset(t);
            }We.notify(this, "afterDatasetsUpdate");
          }
        }, updateDataset: function updateDataset(t) {
          var e = this.getDatasetMeta(t),
              n = { meta: e, index: t };!1 !== We.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), We.notify(this, "afterDatasetUpdate", [n]));
        }, render: function render(t) {
          var e = this;t && "object" === (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = { duration: t, lazy: arguments[1] });var n = e.options.animation,
              i = Qe(t.duration, n && n.duration),
              a = t.lazy;if (!1 !== We.notify(e, "beforeRender")) {
            var r = function r(t) {
              We.notify(e, "afterRender"), ut.callback(n && n.onComplete, [t], e);
            };if (n && i) {
              var o = new mt({ numSteps: i / 16.66, easing: t.easing || n.easing, render: function render(t, e) {
                  var n = ut.easing.effects[e.easing],
                      i = e.currentStep,
                      a = i / e.numSteps;t.draw(n(a), a, i);
                }, onAnimationProgress: n.onProgress, onAnimationComplete: r });vt.addAnimation(e, o, i, a);
            } else e.draw(), r(new mt({ numSteps: 0, chart: e }));return e;
          }
        }, draw: function draw(t) {
          var e = this;e.clear(), ut.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== We.notify(e, "beforeDraw", [t]) && (ut.each(e.boxes, function (t) {
            t.draw(e.chartArea);
          }, e), e.drawDatasets(t), e._drawTooltip(t), We.notify(e, "afterDraw", [t]));
        }, transition: function transition(t) {
          for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) {
            this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
          }this.tooltip.transition(t);
        }, drawDatasets: function drawDatasets(t) {
          var e = this;if (!1 !== We.notify(e, "beforeDatasetsDraw", [t])) {
            for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) {
              e.isDatasetVisible(n) && e.drawDataset(n, t);
            }We.notify(e, "afterDatasetsDraw", [t]);
          }
        }, drawDataset: function drawDataset(t, e) {
          var n = this.getDatasetMeta(t),
              i = { meta: n, index: t, easingValue: e };!1 !== We.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(e), We.notify(this, "afterDatasetDraw", [i]));
        }, _drawTooltip: function _drawTooltip(t) {
          var e = this.tooltip,
              n = { tooltip: e, easingValue: t };!1 !== We.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), We.notify(this, "afterTooltipDraw", [n]));
        }, getElementAtEvent: function getElementAtEvent(t) {
          return me.modes.single(this, t);
        }, getElementsAtEvent: function getElementsAtEvent(t) {
          return me.modes.label(this, t, { intersect: !0 });
        }, getElementsAtXAxis: function getElementsAtXAxis(t) {
          return me.modes["x-axis"](this, t, { intersect: !0 });
        }, getElementsAtEventForMode: function getElementsAtEventForMode(t, e, n) {
          var i = me.modes[e];return "function" === typeof i ? i(this, t, n) : [];
        }, getDatasetAtEvent: function getDatasetAtEvent(t) {
          return me.modes.dataset(this, t, { intersect: !0 });
        }, getDatasetMeta: function getDatasetMeta(t) {
          var e = this.data.datasets[t];e._meta || (e._meta = {});var n = e._meta[this.id];return n || (n = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), n;
        }, getVisibleDatasetCount: function getVisibleDatasetCount() {
          for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) {
            this.isDatasetVisible(e) && t++;
          }return t;
        }, isDatasetVisible: function isDatasetVisible(t) {
          var e = this.getDatasetMeta(t);return "boolean" === typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
        }, generateLegend: function generateLegend() {
          return this.options.legendCallback(this);
        }, destroyDatasetMeta: function destroyDatasetMeta(t) {
          var e = this.id,
              n = this.data.datasets[t],
              i = n._meta && n._meta[e];i && (i.controller.destroy(), delete n._meta[e]);
        }, destroy: function destroy() {
          var t,
              e,
              n = this,
              i = n.canvas;for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) {
            n.destroyDatasetMeta(t);
          }i && (n.unbindEvents(), ut.canvas.clear(n), Ee.releaseContext(n.ctx), n.canvas = null, n.ctx = null), We.notify(n, "destroy"), delete an.instances[n.id];
        }, toBase64Image: function toBase64Image() {
          return this.canvas.toDataURL.apply(this.canvas, arguments);
        }, initToolTip: function initToolTip() {
          var t = this;t.tooltip = new Je({ _chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips }, t);
        }, bindEvents: function bindEvents() {
          var t = this,
              e = t._listeners = {},
              n = function n() {
            t.eventHandler.apply(t, arguments);
          };ut.each(t.options.events, function (i) {
            Ee.addEventListener(t, i, n), e[i] = n;
          }), t.options.responsive && (n = function n() {
            t.resize();
          }, Ee.addEventListener(t, "resize", n), e.resize = n);
        }, unbindEvents: function unbindEvents() {
          var t = this,
              e = t._listeners;e && (delete t._listeners, ut.each(e, function (e, n) {
            Ee.removeEventListener(t, n, e);
          }));
        }, updateHoverStyle: function updateHoverStyle(t, e, n) {
          var i,
              a,
              r,
              o = n ? "setHoverStyle" : "removeHoverStyle";for (a = 0, r = t.length; a < r; ++a) {
            (i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[o](i);
          }
        }, eventHandler: function eventHandler(t) {
          var e = this,
              n = e.tooltip;if (!1 !== We.notify(e, "beforeEvent", [t])) {
            e._bufferedRender = !0, e._bufferedRequest = null;var i = e.handleEvent(t);n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), We.notify(e, "afterEvent", [t]);var a = e._bufferedRequest;return a ? e.render(a) : i && !e.animating && (e.stop(), e.render({ duration: e.options.hover.animationDuration, lazy: !0 })), e._bufferedRender = !1, e._bufferedRequest = null, e;
          }
        }, handleEvent: function handleEvent(t) {
          var e = this,
              n = e.options || {},
              i = n.hover,
              a = !1;return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), ut.callback(n.onHover || n.hover.onHover, [t.native, e.active], e), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), a = !ut.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, a;
        } }), an.instances = {};var rn = an;function on() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
      }function sn(t) {
        this.options = t || {};
      }an.Controller = an, an.types = {}, ut.configMerge = en, ut.scaleMerge = tn, ut.extend(sn.prototype, { formats: on, parse: on, format: on, add: on, diff: on, startOf: on, endOf: on, _create: function _create(t) {
          return t;
        } }), sn.override = function (t) {
        ut.extend(sn.prototype, t);
      };var ln = { _date: sn },
          un = { formatters: { values: function values(t) {
            return ut.isArray(t) ? t : "" + t;
          }, linear: function linear(t, e, n) {
            var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));var a = ut.log10(Math.abs(i)),
                r = "";if (0 !== t) {
              var o = Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1]));if (o < 1e-4) {
                var s = ut.log10(Math.abs(t));r = t.toExponential(Math.floor(s) - Math.floor(a));
              } else {
                var l = -1 * Math.floor(a);l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l);
              }
            } else r = "0";return r;
          }, logarithmic: function logarithmic(t, e, n) {
            var i = t / Math.pow(10, Math.floor(ut.log10(t)));return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : "";
          } } },
          dn = ut.valueOrDefault,
          cn = ut.valueAtIndexOrDefault;function hn(t) {
        var e,
            n,
            i = [];for (e = 0, n = t.length; e < n; ++e) {
          i.push(t[e].label);
        }return i;
      }function fn(t, e, n) {
        return ut.isArray(e) ? ut.longestText(t, n, e) : t.measureText(e).width;
      }ot._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: un.formatters.values, minor: {}, major: {} } });var gn = gt.extend({ getPadding: function getPadding() {
          return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 };
        }, getTicks: function getTicks() {
          return this._ticks;
        }, mergeTicksOptions: function mergeTicksOptions() {
          var t = this.options.ticks;for (var e in !1 === t.minor && (t.minor = { display: !1 }), !1 === t.major && (t.major = { display: !1 }), t) {
            "major" !== e && "minor" !== e && ("undefined" === typeof t.minor[e] && (t.minor[e] = t[e]), "undefined" === typeof t.major[e] && (t.major[e] = t[e]));
          }
        }, beforeUpdate: function beforeUpdate() {
          ut.callback(this.options.beforeUpdate, [this]);
        }, update: function update(t, e, n) {
          var i,
              a,
              r,
              o,
              s,
              l,
              u = this;for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = ut.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), u._maxLabelLines = 0, u.longestLabelWidth = 0, u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], s = u.afterBuildTicks(s) || s, u.beforeTickToLabelConversion(), r = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), u.ticks = r, i = 0, a = r.length; i < a; ++i) {
            o = r[i], (l = s[i]) ? l.label = o : s.push(l = { label: o, major: !1 });
          }return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize;
        }, afterUpdate: function afterUpdate() {
          ut.callback(this.options.afterUpdate, [this]);
        }, beforeSetDimensions: function beforeSetDimensions() {
          ut.callback(this.options.beforeSetDimensions, [this]);
        }, setDimensions: function setDimensions() {
          var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
        }, afterSetDimensions: function afterSetDimensions() {
          ut.callback(this.options.afterSetDimensions, [this]);
        }, beforeDataLimits: function beforeDataLimits() {
          ut.callback(this.options.beforeDataLimits, [this]);
        }, determineDataLimits: ut.noop, afterDataLimits: function afterDataLimits() {
          ut.callback(this.options.afterDataLimits, [this]);
        }, beforeBuildTicks: function beforeBuildTicks() {
          ut.callback(this.options.beforeBuildTicks, [this]);
        }, buildTicks: ut.noop, afterBuildTicks: function afterBuildTicks(t) {
          var e = this;return ut.isArray(t) && t.length ? ut.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = ut.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t);
        }, beforeTickToLabelConversion: function beforeTickToLabelConversion() {
          ut.callback(this.options.beforeTickToLabelConversion, [this]);
        }, convertTicksToLabels: function convertTicksToLabels() {
          var t = this.options.ticks;this.ticks = this.ticks.map(t.userCallback || t.callback, this);
        }, afterTickToLabelConversion: function afterTickToLabelConversion() {
          ut.callback(this.options.afterTickToLabelConversion, [this]);
        }, beforeCalculateTickRotation: function beforeCalculateTickRotation() {
          ut.callback(this.options.beforeCalculateTickRotation, [this]);
        }, calculateTickRotation: function calculateTickRotation() {
          var t = this,
              e = t.ctx,
              n = t.options.ticks,
              i = hn(t._ticks),
              a = ut.options._parseFont(n);e.font = a.string;var r = n.minRotation || 0;if (i.length && t.options.display && t.isHorizontal()) for (var o, s = ut.longestText(e, a.string, i, t.longestTextCache), l = s, u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l > u && r < n.maxRotation;) {
            var d = ut.toRadians(r);if (o = Math.cos(d), Math.sin(d) * s > t.maxHeight) {
              r--;break;
            }r++, l = o * s;
          }t.labelRotation = r;
        }, afterCalculateTickRotation: function afterCalculateTickRotation() {
          ut.callback(this.options.afterCalculateTickRotation, [this]);
        }, beforeFit: function beforeFit() {
          ut.callback(this.options.beforeFit, [this]);
        }, fit: function fit() {
          var t = this,
              e = t.minSize = { width: 0, height: 0 },
              n = hn(t._ticks),
              i = t.options,
              a = i.ticks,
              r = i.scaleLabel,
              o = i.gridLines,
              s = t._isVisible(),
              l = i.position,
              u = t.isHorizontal(),
              d = ut.options._parseFont,
              c = d(a),
              h = i.gridLines.tickMarkLength;if (e.width = u ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && o.drawTicks ? h : 0, e.height = u ? s && o.drawTicks ? h : 0 : t.maxHeight, r.display && s) {
            var f = d(r),
                g = ut.options.toPadding(r.padding),
                p = f.lineHeight + g.height;u ? e.height += p : e.width += p;
          }if (a.display && s) {
            var m = ut.longestText(t.ctx, c.string, n, t.longestTextCache),
                v = ut.numberOfLabelLines(n),
                b = .5 * c.size,
                y = t.options.ticks.padding;if (t._maxLabelLines = v, t.longestLabelWidth = m, u) {
              var x = ut.toRadians(t.labelRotation),
                  k = Math.cos(x),
                  w = Math.sin(x),
                  M = w * m + c.lineHeight * v + b;e.height = Math.min(t.maxHeight, e.height + M + y), t.ctx.font = c.string;var _,
                  C,
                  S = fn(t.ctx, n[0], c.string),
                  P = fn(t.ctx, n[n.length - 1], c.string),
                  I = t.getPixelForTick(0) - t.left,
                  A = t.right - t.getPixelForTick(n.length - 1);0 !== t.labelRotation ? (_ = "bottom" === l ? k * S : k * b, C = "bottom" === l ? k * b : k * P) : (_ = S / 2, C = P / 2), t.paddingLeft = Math.max(_ - I, 0) + 3, t.paddingRight = Math.max(C - A, 0) + 3;
            } else a.mirror ? m = 0 : m += y + b, e.width = Math.min(t.maxWidth, e.width + m), t.paddingTop = c.size / 2, t.paddingBottom = c.size / 2;
          }t.handleMargins(), t.width = e.width, t.height = e.height;
        }, handleMargins: function handleMargins() {
          var t = this;t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
        }, afterFit: function afterFit() {
          ut.callback(this.options.afterFit, [this]);
        }, isHorizontal: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        }, isFullWidth: function isFullWidth() {
          return this.options.fullWidth;
        }, getRightValue: function getRightValue(t) {
          if (ut.isNullOrUndef(t)) return NaN;if (("number" === typeof t || t instanceof Number) && !isFinite(t)) return NaN;if (t) if (this.isHorizontal()) {
            if (void 0 !== t.x) return this.getRightValue(t.x);
          } else if (void 0 !== t.y) return this.getRightValue(t.y);return t;
        }, getLabelForIndex: ut.noop, getPixelForValue: ut.noop, getValueForPixel: ut.noop, getPixelForTick: function getPixelForTick(t) {
          var e = this,
              n = e.options.offset;if (e.isHorizontal()) {
            var i = e.width - (e.paddingLeft + e.paddingRight),
                a = i / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                r = a * t + e.paddingLeft;n && (r += a / 2);var o = e.left + r;return o += e.isFullWidth() ? e.margins.left : 0;
          }var s = e.height - (e.paddingTop + e.paddingBottom);return e.top + t * (s / (e._ticks.length - 1));
        }, getPixelForDecimal: function getPixelForDecimal(t) {
          var e = this;if (e.isHorizontal()) {
            var n = e.width - (e.paddingLeft + e.paddingRight),
                i = n * t + e.paddingLeft,
                a = e.left + i;return a += e.isFullWidth() ? e.margins.left : 0;
          }return e.top + t * e.height;
        }, getBasePixel: function getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }, getBaseValue: function getBaseValue() {
          var t = this.min,
              e = this.max;return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }, _autoSkip: function _autoSkip(t) {
          var e,
              n,
              i = this,
              a = i.isHorizontal(),
              r = i.options.ticks.minor,
              o = t.length,
              s = !1,
              l = r.maxTicksLimit,
              u = i._tickSize() * (o - 1),
              d = a ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.PaddingBottom),
              c = [];for (u > d && (s = 1 + Math.floor(u / d)), o > l && (s = Math.max(s, 1 + Math.floor(o / l))), e = 0; e < o; e++) {
            n = t[e], s > 1 && e % s > 0 && delete n.label, c.push(n);
          }return c;
        }, _tickSize: function _tickSize() {
          var t = this,
              e = t.isHorizontal(),
              n = t.options.ticks.minor,
              i = ut.toRadians(t.labelRotation),
              a = Math.abs(Math.cos(i)),
              r = Math.abs(Math.sin(i)),
              o = n.autoSkipPadding || 0,
              s = t.longestLabelWidth + o || 0,
              l = ut.options._parseFont(n),
              u = t._maxLabelLines * l.lineHeight + o || 0;return e ? u * a > s * r ? s / a : u / r : u * r < s * a ? u / a : s / r;
        }, _isVisible: function _isVisible() {
          var t,
              e,
              n,
              i = this.chart,
              a = this.options.display;if ("auto" !== a) return !!a;for (t = 0, e = i.data.datasets.length; t < e; ++t) {
            if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
          }return !1;
        }, draw: function draw(t) {
          var e = this,
              n = e.options;if (e._isVisible()) {
            var i,
                a,
                r,
                o = e.chart,
                s = e.ctx,
                l = ot.global,
                u = l.defaultFontColor,
                d = n.ticks.minor,
                c = n.ticks.major || d,
                h = n.gridLines,
                f = n.scaleLabel,
                g = n.position,
                p = 0 !== e.labelRotation,
                m = d.mirror,
                v = e.isHorizontal(),
                b = ut.options._parseFont,
                y = d.display && d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                x = dn(d.fontColor, u),
                k = b(d),
                w = k.lineHeight,
                M = dn(c.fontColor, u),
                _ = b(c),
                C = d.padding,
                S = d.labelOffset,
                P = h.drawTicks ? h.tickMarkLength : 0,
                I = dn(f.fontColor, u),
                A = b(f),
                D = ut.options.toPadding(f.padding),
                T = ut.toRadians(e.labelRotation),
                F = [],
                O = h.drawBorder ? cn(h.lineWidth, 0, 0) : 0,
                L = ut._alignPixel;if ("top" === g ? (i = L(o, e.bottom, O), a = e.bottom - P, r = i - O / 2) : "bottom" === g ? (i = L(o, e.top, O), a = i + O / 2, r = e.top + P) : "left" === g ? (i = L(o, e.right, O), a = e.right - P, r = i - O / 2) : (i = L(o, e.left, O), a = i + O / 2, r = e.left + P), ut.each(y, function (i, s) {
              if (!ut.isNullOrUndef(i.label)) {
                var l,
                    u,
                    d,
                    c,
                    f,
                    b,
                    y,
                    x,
                    k,
                    M,
                    _,
                    I,
                    A,
                    D,
                    R,
                    N,
                    z = i.label;s === e.zeroLineIndex && n.offset === h.offsetGridLines ? (l = h.zeroLineWidth, u = h.zeroLineColor, d = h.zeroLineBorderDash || [], c = h.zeroLineBorderDashOffset || 0) : (l = cn(h.lineWidth, s), u = cn(h.color, s), d = h.borderDash || [], c = h.borderDashOffset || 0);var B = ut.isArray(z) ? z.length : 1,
                    E = function (t, e, n) {
                  var i = t.getPixelForTick(e);return n && (1 === t.getTicks().length ? i -= t.isHorizontal() ? Math.max(i - t.left, t.right - i) : Math.max(i - t.top, t.bottom - i) : i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i;
                }(e, s, h.offsetGridLines);if (v) {
                  var W = P + C;E < e.left - 1e-7 && (u = "rgba(0,0,0,0)"), f = y = k = _ = L(o, E, l), b = a, x = r, A = e.getPixelForTick(s) + S, "top" === g ? (M = L(o, t.top, O) + O / 2, I = t.bottom, R = ((p ? 1 : .5) - B) * w, N = p ? "left" : "center", D = e.bottom - W) : (M = t.top, I = L(o, t.bottom, O) - O / 2, R = (p ? 0 : .5) * w, N = p ? "right" : "center", D = e.top + W);
                } else {
                  var V = (m ? 0 : P) + C;E < e.top - 1e-7 && (u = "rgba(0,0,0,0)"), f = a, y = r, b = x = M = I = L(o, E, l), D = e.getPixelForTick(s) + S, R = (1 - B) * w / 2, "left" === g ? (k = L(o, t.left, O) + O / 2, _ = t.right, N = m ? "left" : "right", A = e.right - V) : (k = t.left, _ = L(o, t.right, O) - O / 2, N = m ? "right" : "left", A = e.left + V);
                }F.push({ tx1: f, ty1: b, tx2: y, ty2: x, x1: k, y1: M, x2: _, y2: I, labelX: A, labelY: D, glWidth: l, glColor: u, glBorderDash: d, glBorderDashOffset: c, rotation: -1 * T, label: z, major: i.major, textOffset: R, textAlign: N });
              }
            }), ut.each(F, function (t) {
              var e = t.glWidth,
                  n = t.glColor;if (h.display && e && n && (s.save(), s.lineWidth = e, s.strokeStyle = n, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? _.string : k.string, s.fillStyle = t.major ? M : x, s.textBaseline = "middle", s.textAlign = t.textAlign;var i = t.label,
                    a = t.textOffset;if (ut.isArray(i)) for (var r = 0; r < i.length; ++r) {
                  s.fillText("" + i[r], 0, a), a += w;
                } else s.fillText(i, 0, a);s.restore();
              }
            }), f.display) {
              var R,
                  N,
                  z = 0,
                  B = A.lineHeight / 2;if (v) R = e.left + (e.right - e.left) / 2, N = "bottom" === g ? e.bottom - B - D.bottom : e.top + B + D.top;else {
                var E = "left" === g;R = E ? e.left + B + D.top : e.right - B - D.top, N = e.top + (e.bottom - e.top) / 2, z = E ? -.5 * Math.PI : .5 * Math.PI;
              }s.save(), s.translate(R, N), s.rotate(z), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = I, s.font = A.string, s.fillText(f.labelString, 0, 0), s.restore();
            }if (O) {
              var W,
                  V,
                  j,
                  H,
                  q = O,
                  U = cn(h.lineWidth, y.length - 1, 0);v ? (W = L(o, e.left, q) - q / 2, V = L(o, e.right, U) + U / 2, j = H = i) : (j = L(o, e.top, q) - q / 2, H = L(o, e.bottom, U) + U / 2, W = V = i), s.lineWidth = O, s.strokeStyle = cn(h.color, 0), s.beginPath(), s.moveTo(W, j), s.lineTo(V, H), s.stroke();
            }
          }
        } }),
          pn = gn.extend({ getLabels: function getLabels() {
          var t = this.chart.data;return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
        }, determineDataLimits: function determineDataLimits() {
          var t,
              e = this,
              n = e.getLabels();e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex];
        }, buildTicks: function buildTicks() {
          var t = this,
              e = t.getLabels();t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
        }, getLabelForIndex: function getLabelForIndex(t, e) {
          var n = this,
              i = n.chart;return i.getDatasetMeta(e).controller._getValueScaleId() === n.id ? n.getRightValue(i.data.datasets[e].data[t]) : n.ticks[t - n.minIndex];
        }, getPixelForValue: function getPixelForValue(t, e) {
          var n,
              i = this,
              a = i.options.offset,
              r = Math.max(i.maxIndex + 1 - i.minIndex - (a ? 0 : 1), 1);if (void 0 !== t && null !== t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
            var o = i.getLabels();t = n || t;var s = o.indexOf(t);e = -1 !== s ? s : e;
          }if (i.isHorizontal()) {
            var l = i.width / r,
                u = l * (e - i.minIndex);return a && (u += l / 2), i.left + u;
          }var d = i.height / r,
              c = d * (e - i.minIndex);return a && (c += d / 2), i.top + c;
        }, getPixelForTick: function getPixelForTick(t) {
          return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
        }, getValueForPixel: function getValueForPixel(t) {
          var e = this,
              n = e.options.offset,
              i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
              a = e.isHorizontal(),
              r = (a ? e.width : e.height) / i;return t -= a ? e.left : e.top, n && (t -= r / 2), (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex;
        }, getBasePixel: function getBasePixel() {
          return this.bottom;
        } }),
          mn = { position: "bottom" };pn._defaults = mn;var vn = ut.noop,
          bn = ut.isNullOrUndef,
          yn = gn.extend({ getRightValue: function getRightValue(t) {
          return "string" === typeof t ? +t : gn.prototype.getRightValue.call(this, t);
        }, handleTickRangeOptions: function handleTickRangeOptions() {
          var t = this,
              e = t.options,
              n = e.ticks;if (n.beginAtZero) {
            var i = ut.sign(t.min),
                a = ut.sign(t.max);i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0);
          }var r = void 0 !== n.min || void 0 !== n.suggestedMin,
              o = void 0 !== n.max || void 0 !== n.suggestedMax;void 0 !== n.min ? t.min = n.min : void 0 !== n.suggestedMin && (null === t.min ? t.min = n.suggestedMin : t.min = Math.min(t.min, n.suggestedMin)), void 0 !== n.max ? t.max = n.max : void 0 !== n.suggestedMax && (null === t.max ? t.max = n.suggestedMax : t.max = Math.max(t.max, n.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, n.beginAtZero || t.min--);
        }, getTickLimit: function getTickLimit() {
          var t,
              e = this.options.ticks,
              n = e.stepSize,
              i = e.maxTicksLimit;return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t;
        }, _computeTickLimit: function _computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }, handleDirectionalChanges: vn, buildTicks: function buildTicks() {
          var t = this,
              e = t.options,
              n = e.ticks,
              i = t.getTickLimit(),
              a = { maxTicks: i = Math.max(2, i), min: n.min, max: n.max, precision: n.precision, stepSize: ut.valueOrDefault(n.fixedStepSize, n.stepSize) },
              r = t.ticks = function (t, e) {
            var n,
                i,
                a,
                r,
                o = [],
                s = t.stepSize,
                l = s || 1,
                u = t.maxTicks - 1,
                d = t.min,
                c = t.max,
                h = t.precision,
                f = e.min,
                g = e.max,
                p = ut.niceNum((g - f) / u / l) * l;if (p < 1e-14 && bn(d) && bn(c)) return [f, g];(r = Math.ceil(g / p) - Math.floor(f / p)) > u && (p = ut.niceNum(r * p / u / l) * l), s || bn(h) ? n = Math.pow(10, ut._decimalPlaces(p)) : (n = Math.pow(10, h), p = Math.ceil(p * n) / n), i = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!bn(d) && ut.almostWhole(d / p, p / 1e3) && (i = d), !bn(c) && ut.almostWhole(c / p, p / 1e3) && (a = c)), r = (a - i) / p, r = ut.almostEquals(r, Math.round(r), p / 1e3) ? Math.round(r) : Math.ceil(r), i = Math.round(i * n) / n, a = Math.round(a * n) / n, o.push(bn(d) ? i : d);for (var m = 1; m < r; ++m) {
              o.push(Math.round((i + m * p) * n) / n);
            }return o.push(bn(c) ? a : c), o;
          }(a, t);t.handleDirectionalChanges(), t.max = ut.max(r), t.min = ut.min(r), n.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
        }, convertTicksToLabels: function convertTicksToLabels() {
          var t = this;t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), gn.prototype.convertTicksToLabels.call(t);
        } }),
          xn = { position: "left", ticks: { callback: un.formatters.linear } },
          kn = yn.extend({ determineDataLimits: function determineDataLimits() {
          var t = this,
              e = t.options,
              n = t.chart,
              i = n.data,
              a = i.datasets,
              r = t.isHorizontal();function o(e) {
            return r ? e.xAxisID === t.id : e.yAxisID === t.id;
          }t.min = null, t.max = null;var s = e.stacked;if (void 0 === s && ut.each(a, function (t, e) {
            if (!s) {
              var i = n.getDatasetMeta(e);n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (s = !0);
            }
          }), e.stacked || s) {
            var l = {};ut.each(a, function (i, a) {
              var r = n.getDatasetMeta(a),
                  s = [r.type, void 0 === e.stacked && void 0 === r.stack ? a : "", r.stack].join(".");void 0 === l[s] && (l[s] = { positiveValues: [], negativeValues: [] });var u = l[s].positiveValues,
                  d = l[s].negativeValues;n.isDatasetVisible(a) && o(r) && ut.each(i.data, function (n, i) {
                var a = +t.getRightValue(n);isNaN(a) || r.data[i].hidden || (u[i] = u[i] || 0, d[i] = d[i] || 0, e.relativePoints ? u[i] = 100 : a < 0 ? d[i] += a : u[i] += a);
              });
            }), ut.each(l, function (e) {
              var n = e.positiveValues.concat(e.negativeValues),
                  i = ut.min(n),
                  a = ut.max(n);t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a);
            });
          } else ut.each(a, function (e, i) {
            var a = n.getDatasetMeta(i);n.isDatasetVisible(i) && o(a) && ut.each(e.data, function (e, n) {
              var i = +t.getRightValue(e);isNaN(i) || a.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i));
            });
          });t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
        }, _computeTickLimit: function _computeTickLimit() {
          var t;return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = ut.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight));
        }, handleDirectionalChanges: function handleDirectionalChanges() {
          this.isHorizontal() || this.ticks.reverse();
        }, getLabelForIndex: function getLabelForIndex(t, e) {
          return +this.getRightValue(this.chart.data.datasets[e].data[t]);
        }, getPixelForValue: function getPixelForValue(t) {
          var e = this,
              n = e.start,
              i = +e.getRightValue(t),
              a = e.end - n;return e.isHorizontal() ? e.left + e.width / a * (i - n) : e.bottom - e.height / a * (i - n);
        }, getValueForPixel: function getValueForPixel(t) {
          var e = this,
              n = e.isHorizontal(),
              i = n ? e.width : e.height,
              a = (n ? t - e.left : e.bottom - t) / i;return e.start + (e.end - e.start) * a;
        }, getPixelForTick: function getPixelForTick(t) {
          return this.getPixelForValue(this.ticksAsNumbers[t]);
        } }),
          wn = xn;kn._defaults = wn;var Mn = ut.valueOrDefault,
          _n = { position: "left", ticks: { callback: un.formatters.logarithmic } };function Cn(t, e) {
        return ut.isFinite(t) && t >= 0 ? t : e;
      }var Sn = gn.extend({ determineDataLimits: function determineDataLimits() {
          var t = this,
              e = t.options,
              n = t.chart,
              i = n.data,
              a = i.datasets,
              r = t.isHorizontal();function o(e) {
            return r ? e.xAxisID === t.id : e.yAxisID === t.id;
          }t.min = null, t.max = null, t.minNotZero = null;var s = e.stacked;if (void 0 === s && ut.each(a, function (t, e) {
            if (!s) {
              var i = n.getDatasetMeta(e);n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (s = !0);
            }
          }), e.stacked || s) {
            var l = {};ut.each(a, function (i, a) {
              var r = n.getDatasetMeta(a),
                  s = [r.type, void 0 === e.stacked && void 0 === r.stack ? a : "", r.stack].join(".");n.isDatasetVisible(a) && o(r) && (void 0 === l[s] && (l[s] = []), ut.each(i.data, function (e, n) {
                var i = l[s],
                    a = +t.getRightValue(e);isNaN(a) || r.data[n].hidden || a < 0 || (i[n] = i[n] || 0, i[n] += a);
              }));
            }), ut.each(l, function (e) {
              if (e.length > 0) {
                var n = ut.min(e),
                    i = ut.max(e);t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? i : Math.max(t.max, i);
              }
            });
          } else ut.each(a, function (e, i) {
            var a = n.getDatasetMeta(i);n.isDatasetVisible(i) && o(a) && ut.each(e.data, function (e, n) {
              var i = +t.getRightValue(e);isNaN(i) || a.data[n].hidden || i < 0 || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i), 0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i));
            });
          });this.handleTickRangeOptions();
        }, handleTickRangeOptions: function handleTickRangeOptions() {
          var t = this,
              e = t.options.ticks;t.min = Cn(e.min, t.min), t.max = Cn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(ut.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(ut.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(ut.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(ut.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(ut.log10(t.max))) : t.minNotZero = 1);
        }, buildTicks: function buildTicks() {
          var t = this,
              e = t.options.ticks,
              n = !t.isHorizontal(),
              i = { min: Cn(e.min), max: Cn(e.max) },
              a = t.ticks = function (t, e) {
            var n,
                i,
                a = [],
                r = Mn(t.min, Math.pow(10, Math.floor(ut.log10(e.min)))),
                o = Math.floor(ut.log10(e.max)),
                s = Math.ceil(e.max / Math.pow(10, o));0 === r ? (n = Math.floor(ut.log10(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(r), r = i * Math.pow(10, n)) : (n = Math.floor(ut.log10(r)), i = Math.floor(r / Math.pow(10, n)));var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;do {
              a.push(r), 10 === ++i && (i = 1, l = ++n >= 0 ? 1 : l), r = Math.round(i * Math.pow(10, n) * l) / l;
            } while (n < o || n === o && i < s);var u = Mn(t.max, r);return a.push(u), a;
          }(i, t);t.max = ut.max(a), t.min = ut.min(a), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && a.reverse();
        }, convertTicksToLabels: function convertTicksToLabels() {
          this.tickValues = this.ticks.slice(), gn.prototype.convertTicksToLabels.call(this);
        }, getLabelForIndex: function getLabelForIndex(t, e) {
          return +this.getRightValue(this.chart.data.datasets[e].data[t]);
        }, getPixelForTick: function getPixelForTick(t) {
          return this.getPixelForValue(this.tickValues[t]);
        }, _getFirstTickValue: function _getFirstTickValue(t) {
          var e = Math.floor(ut.log10(t)),
              n = Math.floor(t / Math.pow(10, e));return n * Math.pow(10, e);
        }, getPixelForValue: function getPixelForValue(t) {
          var e,
              n,
              i,
              a,
              r,
              o = this,
              s = o.options.ticks,
              l = s.reverse,
              u = ut.log10,
              d = o._getFirstTickValue(o.minNotZero),
              c = 0;return t = +o.getRightValue(t), l ? (i = o.end, a = o.start, r = -1) : (i = o.start, a = o.end, r = 1), o.isHorizontal() ? (e = o.width, n = l ? o.right : o.left) : (e = o.height, r *= -1, n = l ? o.top : o.bottom), t !== i && (0 === i && (c = Mn(s.fontSize, ot.global.defaultFontSize), e -= c, i = d), 0 !== t && (c += e / (u(a) - u(i)) * (u(t) - u(i))), n += r * c), n;
        }, getValueForPixel: function getValueForPixel(t) {
          var e,
              n,
              i,
              a,
              r = this,
              o = r.options.ticks,
              s = o.reverse,
              l = ut.log10,
              u = r._getFirstTickValue(r.minNotZero);if (s ? (n = r.end, i = r.start) : (n = r.start, i = r.end), r.isHorizontal() ? (e = r.width, a = s ? r.right - t : t - r.left) : (e = r.height, a = s ? t - r.top : r.bottom - t), a !== n) {
            if (0 === n) {
              var d = Mn(o.fontSize, ot.global.defaultFontSize);a -= d, e -= d, n = u;
            }a *= l(i) - l(n), a /= e, a = Math.pow(10, l(n) + a);
          }return a;
        } }),
          Pn = _n;Sn._defaults = Pn;var In = ut.valueOrDefault,
          An = ut.valueAtIndexOrDefault,
          Dn = ut.options.resolve,
          Tn = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: un.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function callback(t) {
            return t;
          } } };function Fn(t) {
        var e = t.options;return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
      }function On(t) {
        var e = t.ticks;return e.display && t.display ? In(e.fontSize, ot.global.defaultFontSize) + 2 * e.backdropPaddingY : 0;
      }function Ln(t, e, n, i, a) {
        return t === i || t === a ? { start: e - n / 2, end: e + n / 2 } : t < i || t > a ? { start: e - n, end: e } : { start: e, end: e + n };
      }function Rn(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
      }function Nn(t, e, n, i) {
        var a,
            r,
            o = n.y + i / 2;if (ut.isArray(e)) for (a = 0, r = e.length; a < r; ++a) {
          t.fillText(e[a], n.x, o), o += i;
        } else t.fillText(e, n.x, o);
      }function zn(t, e, n) {
        90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h);
      }function Bn(t) {
        return ut.isNumber(t) ? t : 0;
      }var En = yn.extend({ setDimensions: function setDimensions() {
          var t = this;t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = On(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2;
        }, determineDataLimits: function determineDataLimits() {
          var t = this,
              e = t.chart,
              n = Number.POSITIVE_INFINITY,
              i = Number.NEGATIVE_INFINITY;ut.each(e.data.datasets, function (a, r) {
            if (e.isDatasetVisible(r)) {
              var o = e.getDatasetMeta(r);ut.each(a.data, function (e, a) {
                var r = +t.getRightValue(e);isNaN(r) || o.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i));
              });
            }
          }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
        }, _computeTickLimit: function _computeTickLimit() {
          return Math.ceil(this.drawingArea / On(this.options));
        }, convertTicksToLabels: function convertTicksToLabels() {
          var t = this;yn.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t);
        }, getLabelForIndex: function getLabelForIndex(t, e) {
          return +this.getRightValue(this.chart.data.datasets[e].data[t]);
        }, fit: function fit() {
          var t = this.options;t.display && t.pointLabels.display ? function (t) {
            var e,
                n,
                i,
                a = ut.options._parseFont(t.options.pointLabels),
                r = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
                o = {};t.ctx.font = a.string, t._pointLabelSizes = [];var s,
                l,
                u,
                d = Fn(t);for (e = 0; e < d; e++) {
              i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, u = t.pointLabels[e] || "", n = ut.isArray(u) ? { w: ut.longestText(s, s.font, u), h: u.length * l } : { w: s.measureText(u).width, h: l }, t._pointLabelSizes[e] = n;var c = t.getIndexAngle(e),
                  h = ut.toDegrees(c) % 360,
                  f = Ln(h, i.x, n.w, 0, 180),
                  g = Ln(h, i.y, n.h, 90, 270);f.start < r.l && (r.l = f.start, o.l = c), f.end > r.r && (r.r = f.end, o.r = c), g.start < r.t && (r.t = g.start, o.t = c), g.end > r.b && (r.b = g.end, o.b = c);
            }t.setReductions(t.drawingArea, r, o);
          }(this) : this.setCenterPoint(0, 0, 0, 0);
        }, setReductions: function setReductions(t, e, n) {
          var i = this,
              a = e.l / Math.sin(n.l),
              r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
              o = -e.t / Math.cos(n.t),
              s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);a = Bn(a), r = Bn(r), o = Bn(o), s = Bn(s), i.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), i.setCenterPoint(a, r, o, s);
        }, setCenterPoint: function setCenterPoint(t, e, n, i) {
          var a = this,
              r = a.width - e - a.drawingArea,
              o = t + a.drawingArea,
              s = n + a.drawingArea,
              l = a.height - a.paddingTop - i - a.drawingArea;a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop);
        }, getIndexAngle: function getIndexAngle(t) {
          var e = 2 * Math.PI / Fn(this),
              n = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
              i = n * Math.PI * 2 / 360;return t * e + i;
        }, getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
          var e = this;if (null === t) return 0;var n = e.drawingArea / (e.max - e.min);return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
        }, getPointPosition: function getPointPosition(t, e) {
          var n = this.getIndexAngle(t) - Math.PI / 2;return { x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter };
        }, getPointPositionForValue: function getPointPositionForValue(t, e) {
          return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
        }, getBasePosition: function getBasePosition() {
          var t = this.min,
              e = this.max;return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
        }, draw: function draw() {
          var t = this,
              e = t.options,
              n = e.gridLines,
              i = e.ticks;if (e.display) {
            var a = t.ctx,
                r = this.getIndexAngle(0),
                o = ut.options._parseFont(i);(e.angleLines.display || e.pointLabels.display) && function (t) {
              var e = t.ctx,
                  n = t.options,
                  i = n.angleLines,
                  a = n.gridLines,
                  r = n.pointLabels,
                  o = In(i.lineWidth, a.lineWidth),
                  s = In(i.color, a.color),
                  l = On(n);e.save(), e.lineWidth = o, e.strokeStyle = s, e.setLineDash && (e.setLineDash(Dn([i.borderDash, a.borderDash, []])), e.lineDashOffset = Dn([i.borderDashOffset, a.borderDashOffset, 0]));var u = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                  d = ut.options._parseFont(r);e.font = d.string, e.textBaseline = "middle";for (var c = Fn(t) - 1; c >= 0; c--) {
                if (i.display && o && s) {
                  var h = t.getPointPosition(c, u);e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(h.x, h.y), e.stroke();
                }if (r.display) {
                  var f = 0 === c ? l / 2 : 0,
                      g = t.getPointPosition(c, u + f + 5),
                      p = An(r.fontColor, c, ot.global.defaultFontColor);e.fillStyle = p;var m = t.getIndexAngle(c),
                      v = ut.toDegrees(m);e.textAlign = Rn(v), zn(v, t._pointLabelSizes[c], g), Nn(e, t.pointLabels[c] || "", g, d.lineHeight);
                }
              }e.restore();
            }(t), ut.each(t.ticks, function (e, s) {
              if (s > 0 || i.reverse) {
                var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);if (n.display && 0 !== s && function (t, e, n, i) {
                  var a,
                      r = t.ctx,
                      o = e.circular,
                      s = Fn(t),
                      l = An(e.color, i - 1),
                      u = An(e.lineWidth, i - 1);if ((o || s) && l && u) {
                    if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);else {
                      a = t.getPointPosition(0, n), r.moveTo(a.x, a.y);for (var d = 1; d < s; d++) {
                        a = t.getPointPosition(d, n), r.lineTo(a.x, a.y);
                      }
                    }r.closePath(), r.stroke(), r.restore();
                  }
                }(t, n, l, s), i.display) {
                  var u = In(i.fontColor, ot.global.defaultFontColor);if (a.font = o.string, a.save(), a.translate(t.xCenter, t.yCenter), a.rotate(r), i.showLabelBackdrop) {
                    var d = a.measureText(e).width;a.fillStyle = i.backdropColor, a.fillRect(-d / 2 - i.backdropPaddingX, -l - o.size / 2 - i.backdropPaddingY, d + 2 * i.backdropPaddingX, o.size + 2 * i.backdropPaddingY);
                  }a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = u, a.fillText(e, 0, -l), a.restore();
                }
              }
            });
          }
        } }),
          Wn = Tn;En._defaults = Wn;var Vn = ut.valueOrDefault,
          jn = Number.MIN_SAFE_INTEGER || -9007199254740991,
          Hn = Number.MAX_SAFE_INTEGER || 9007199254740991,
          qn = { millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 } },
          Un = Object.keys(qn);function Yn(t, e) {
        return t - e;
      }function Kn(t) {
        var e,
            n,
            i,
            a = {},
            r = [];for (e = 0, n = t.length; e < n; ++e) {
          i = t[e], a[i] || (a[i] = !0, r.push(i));
        }return r;
      }function Xn(t, e, n, i) {
        var a = function (t, e, n) {
          for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
            if (a = t[(i = o + s >> 1) - 1] || null, r = t[i], !a) return { lo: null, hi: r };if (r[e] < n) o = i + 1;else {
              if (!(a[e] > n)) return { lo: a, hi: r };s = i - 1;
            }
          }return { lo: r, hi: null };
        }(t, e, n),
            r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e],
            l = s ? (n - r[e]) / s : 0,
            u = (o[i] - r[i]) * l;return r[i] + u;
      }function Gn(t, e) {
        var n = t._adapter,
            i = t.options.time,
            a = i.parser,
            r = a || i.format,
            o = e;return "function" === typeof a && (o = a(o)), ut.isFinite(o) || (o = "string" === typeof r ? n.parse(o, r) : n.parse(o)), null !== o ? +o : (a || "function" !== typeof r || (o = r(e), ut.isFinite(o) || (o = n.parse(o))), o);
      }function Zn(t, e) {
        if (ut.isNullOrUndef(e)) return null;var n = t.options.time,
            i = Gn(t, t.getRightValue(e));return null === i ? i : (n.round && (i = +t._adapter.startOf(i, n.round)), i);
      }function $n(t) {
        for (var e = Un.indexOf(t) + 1, n = Un.length; e < n; ++e) {
          if (qn[Un[e]].common) return Un[e];
        }
      }function Jn(t, e, n, i) {
        var a,
            r = t._adapter,
            o = t.options,
            s = o.time,
            l = s.unit || function (t, e, n, i) {
          var a,
              r,
              o,
              s = Un.length;for (a = Un.indexOf(t); a < s - 1; ++a) {
            if (r = qn[Un[a]], o = r.steps ? r.steps[r.steps.length - 1] : Hn, r.common && Math.ceil((n - e) / (o * r.size)) <= i) return Un[a];
          }return Un[s - 1];
        }(s.minUnit, e, n, i),
            u = $n(l),
            d = Vn(s.stepSize, s.unitStepSize),
            c = "week" === l && s.isoWeekday,
            h = o.ticks.major.enabled,
            f = qn[l],
            g = e,
            p = n,
            m = [];for (d || (d = function (t, e, n, i) {
          var a,
              r,
              o,
              s = e - t,
              l = qn[n],
              u = l.size,
              d = l.steps;if (!d) return Math.ceil(s / (i * u));for (a = 0, r = d.length; a < r && (o = d[a], !(Math.ceil(s / (u * o)) <= i)); ++a) {}return o;
        }(e, n, l, i)), c && (g = +r.startOf(g, "isoWeek", c), p = +r.startOf(p, "isoWeek", c)), g = +r.startOf(g, c ? "day" : l), (p = +r.startOf(p, c ? "day" : l)) < n && (p = +r.add(p, 1, l)), a = g, h && u && !c && !s.round && (a = +r.startOf(a, u), a = +r.add(a, ~~((g - a) / (f.size * d)) * d, l)); a < p; a = +r.add(a, d, l)) {
          m.push(+a);
        }return m.push(+a), m;
      }var Qn = gn.extend({ initialize: function initialize() {
          this.mergeTicksOptions(), gn.prototype.initialize.call(this);
        }, update: function update() {
          var t = this.options,
              e = t.time || (t.time = {}),
              n = this._adapter = new ln._date(t.adapters.date);return e.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ut.mergeIf(e.displayFormats, n.formats()), gn.prototype.update.apply(this, arguments);
        }, getRightValue: function getRightValue(t) {
          return t && void 0 !== t.t && (t = t.t), gn.prototype.getRightValue.call(this, t);
        }, determineDataLimits: function determineDataLimits() {
          var t,
              e,
              n,
              i,
              a,
              r,
              o = this,
              s = o.chart,
              l = o._adapter,
              u = o.options.time,
              d = u.unit || "day",
              c = Hn,
              h = jn,
              f = [],
              g = [],
              p = [],
              m = s.data.labels || [];for (t = 0, n = m.length; t < n; ++t) {
            p.push(Zn(o, m[t]));
          }for (t = 0, n = (s.data.datasets || []).length; t < n; ++t) {
            if (s.isDatasetVisible(t)) {
              if (a = s.data.datasets[t].data, ut.isObject(a[0])) for (g[t] = [], e = 0, i = a.length; e < i; ++e) {
                r = Zn(o, a[e]), f.push(r), g[t][e] = r;
              } else {
                for (e = 0, i = p.length; e < i; ++e) {
                  f.push(p[e]);
                }g[t] = p.slice(0);
              }
            } else g[t] = [];
          }p.length && (p = Kn(p).sort(Yn), c = Math.min(c, p[0]), h = Math.max(h, p[p.length - 1])), f.length && (f = Kn(f).sort(Yn), c = Math.min(c, f[0]), h = Math.max(h, f[f.length - 1])), c = Zn(o, u.min) || c, h = Zn(o, u.max) || h, c = c === Hn ? +l.startOf(Date.now(), d) : c, h = h === jn ? +l.endOf(Date.now(), d) + 1 : h, o.min = Math.min(c, h), o.max = Math.max(c + 1, h), o._horizontal = o.isHorizontal(), o._table = [], o._timestamps = { data: f, datasets: g, labels: p };
        }, buildTicks: function buildTicks() {
          var t,
              e,
              n,
              i = this,
              a = i.min,
              r = i.max,
              o = i.options,
              s = o.time,
              l = [],
              u = [];switch (o.ticks.source) {case "data":
              l = i._timestamps.data;break;case "labels":
              l = i._timestamps.labels;break;case "auto":default:
              l = Jn(i, a, r, i.getLabelCapacity(a));}for ("ticks" === o.bounds && l.length && (a = l[0], r = l[l.length - 1]), a = Zn(i, s.min) || a, r = Zn(i, s.max) || r, t = 0, e = l.length; t < e; ++t) {
            (n = l[t]) >= a && n <= r && u.push(n);
          }return i.min = a, i.max = r, i._unit = s.unit || function (t, e, n, i, a) {
            var r,
                o,
                s = Un.length;for (r = s - 1; r >= Un.indexOf(n); r--) {
              if (o = Un[r], qn[o].common && t._adapter.diff(a, i, o) >= e.length) return o;
            }return Un[n ? Un.indexOf(n) : 0];
          }(i, u, s.minUnit, i.min, i.max), i._majorUnit = $n(i._unit), i._table = function (t, e, n, i) {
            if ("linear" === i || !t.length) return [{ time: e, pos: 0 }, { time: n, pos: 1 }];var a,
                r,
                o,
                s,
                l,
                u = [],
                d = [e];for (a = 0, r = t.length; a < r; ++a) {
              (s = t[a]) > e && s < n && d.push(s);
            }for (d.push(n), a = 0, r = d.length; a < r; ++a) {
              l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({ time: s, pos: a / (r - 1) });
            }return u;
          }(i._timestamps.data, a, r, o.distribution), i._offsets = function (t, e, n, i, a) {
            var r,
                o,
                s = 0,
                l = 0;return a.offset && e.length && (a.time.min || (r = Xn(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - r : (Xn(t, "time", e[1], "pos") - r) / 2), a.time.max || (o = Xn(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - Xn(t, "time", e[e.length - 2], "pos")) / 2)), { start: s, end: l };
          }(i._table, u, 0, 0, o), o.ticks.reverse && u.reverse(), function (t, e, n) {
            var i,
                a,
                r,
                o,
                s = [];for (i = 0, a = e.length; i < a; ++i) {
              r = e[i], o = !!n && r === +t._adapter.startOf(r, n), s.push({ value: r, major: o });
            }return s;
          }(i, u, i._majorUnit);
        }, getLabelForIndex: function getLabelForIndex(t, e) {
          var n = this,
              i = n._adapter,
              a = n.chart.data,
              r = n.options.time,
              o = a.labels && t < a.labels.length ? a.labels[t] : "",
              s = a.datasets[e].data[t];return ut.isObject(s) && (o = n.getRightValue(s)), r.tooltipFormat ? i.format(Gn(n, o), r.tooltipFormat) : "string" === typeof o ? o : i.format(Gn(n, o), r.displayFormats.datetime);
        }, tickFormatFunction: function tickFormatFunction(t, e, n, i) {
          var a = this._adapter,
              r = this.options,
              o = r.time.displayFormats,
              s = o[this._unit],
              l = this._majorUnit,
              u = o[l],
              d = +a.startOf(t, l),
              c = r.ticks.major,
              h = c.enabled && l && u && t === d,
              f = a.format(t, i || (h ? u : s)),
              g = h ? c : r.ticks.minor,
              p = Vn(g.callback, g.userCallback);return p ? p(f, e, n) : f;
        }, convertTicksToLabels: function convertTicksToLabels(t) {
          var e,
              n,
              i = [];for (e = 0, n = t.length; e < n; ++e) {
            i.push(this.tickFormatFunction(t[e].value, e, t));
          }return i;
        }, getPixelForOffset: function getPixelForOffset(t) {
          var e = this,
              n = e.options.ticks.reverse,
              i = e._horizontal ? e.width : e.height,
              a = e._horizontal ? n ? e.right : e.left : n ? e.bottom : e.top,
              r = Xn(e._table, "time", t, "pos"),
              o = i * (e._offsets.start + r) / (e._offsets.start + 1 + e._offsets.end);return n ? a - o : a + o;
        }, getPixelForValue: function getPixelForValue(t, e, n) {
          var i = null;if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = Zn(this, t)), null !== i) return this.getPixelForOffset(i);
        }, getPixelForTick: function getPixelForTick(t) {
          var e = this.getTicks();return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
        }, getValueForPixel: function getValueForPixel(t) {
          var e = this,
              n = e._horizontal ? e.width : e.height,
              i = e._horizontal ? e.left : e.top,
              a = (n ? (t - i) / n : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end,
              r = Xn(e._table, "pos", a, "time");return e._adapter._create(r);
        }, getLabelWidth: function getLabelWidth(t) {
          var e = this.options.ticks,
              n = this.ctx.measureText(t).width,
              i = ut.toRadians(e.maxRotation),
              a = Math.cos(i),
              r = Math.sin(i),
              o = Vn(e.fontSize, ot.global.defaultFontSize);return n * a + o * r;
        }, getLabelCapacity: function getLabelCapacity(t) {
          var e = this,
              n = e.options.time.displayFormats.millisecond,
              i = e.tickFormatFunction(t, 0, [], n),
              a = e.getLabelWidth(i),
              r = e.isHorizontal() ? e.width : e.height,
              o = Math.floor(r / a);return o > 0 ? o : 1;
        } }),
          ti = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } };Qn._defaults = ti;var ei = { category: pn, linear: kn, logarithmic: Sn, radialLinear: En, time: Qn },
          ni = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };ln._date.override("function" === typeof t ? { _id: "moment", formats: function formats() {
          return ni;
        }, parse: function parse(e, n) {
          return "string" === typeof e && "string" === typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null;
        }, format: function format(e, n) {
          return t(e).format(n);
        }, add: function add(e, n, i) {
          return t(e).add(n, i).valueOf();
        }, diff: function diff(e, n, i) {
          return t.duration(t(e).diff(t(n))).as(i);
        }, startOf: function startOf(e, n, i) {
          return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf();
        }, endOf: function endOf(e, n) {
          return t(e).endOf(n).valueOf();
        }, _create: function _create(e) {
          return t(e);
        } } : {}), ot._set("global", { plugins: { filler: { propagate: !0 } } });var ii = { dataset: function dataset(t) {
          var e = t.fill,
              n = t.chart,
              i = n.getDatasetMeta(e),
              a = i && n.isDatasetVisible(e),
              r = a && i.dataset._children || [],
              o = r.length || 0;return o ? function (t, e) {
            return e < o && r[e]._view || null;
          } : null;
        }, boundary: function boundary(t) {
          var e = t.boundary,
              n = e ? e.x : null,
              i = e ? e.y : null;return function (t) {
            return { x: null === n ? t.x : n, y: null === i ? t.y : i };
          };
        } };function ai(t, e, n) {
        var i,
            a = t._model || {},
            r = a.fill;if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;if (!0 === r) return "origin";if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;switch (r) {case "bottom":
            return "start";case "top":
            return "end";case "zero":
            return "origin";case "origin":case "start":case "end":
            return r;default:
            return !1;}
      }function ri(t) {
        var e,
            n = t.el._model || {},
            i = t.el._scale || {},
            a = t.fill,
            r = null;if (isFinite(a)) return null;if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), void 0 !== r && null !== r) {
          if (void 0 !== r.x && void 0 !== r.y) return r;if (ut.isFinite(r)) return { x: (e = i.isHorizontal()) ? r : null, y: e ? null : r };
        }return null;
      }function oi(t, e, n) {
        var i,
            a = t[e],
            r = a.fill,
            o = [e];if (!n) return r;for (; !1 !== r && -1 === o.indexOf(r);) {
          if (!isFinite(r)) return r;if (!(i = t[r])) return !1;if (i.visible) return r;o.push(r), r = i.fill;
        }return !1;
      }function si(t) {
        var e = t.fill,
            n = "dataset";return !1 === e ? null : (isFinite(e) || (n = "boundary"), ii[n](t));
      }function li(t) {
        return t && !t.skip;
      }function ui(t, e, n, i, a) {
        var r;if (i && a) {
          for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r) {
            ut.canvas.lineTo(t, e[r - 1], e[r]);
          }for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r) {
            ut.canvas.lineTo(t, n[r], n[r - 1], !0);
          }
        }
      }var di = { id: "filler", afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
          var n,
              i,
              a,
              r,
              o = (t.data.datasets || []).length,
              s = e.propagate,
              l = [];for (i = 0; i < o; ++i) {
            n = t.getDatasetMeta(i), a = n.dataset, r = null, a && a._model && a instanceof Bt.Line && (r = { visible: t.isDatasetVisible(i), fill: ai(a, i, o), chart: t, el: a }), n.$filler = r, l.push(r);
          }for (i = 0; i < o; ++i) {
            (r = l[i]) && (r.fill = oi(l, i, s), r.boundary = ri(r), r.mapper = si(r));
          }
        }, beforeDatasetDraw: function beforeDatasetDraw(t, e) {
          var n = e.meta.$filler;if (n) {
            var i = t.ctx,
                a = n.el,
                r = a._view,
                o = a._children || [],
                s = n.mapper,
                l = r.backgroundColor || ot.global.defaultColor;s && l && o.length && (ut.canvas.clipArea(i, t.chartArea), function (t, e, n, i, a, r) {
              var o,
                  s,
                  l,
                  u,
                  d,
                  c,
                  h,
                  f = e.length,
                  g = i.spanGaps,
                  p = [],
                  m = [],
                  v = 0,
                  b = 0;for (t.beginPath(), o = 0, s = f + !!r; o < s; ++o) {
                u = e[l = o % f]._view, d = n(u, l, i), c = li(u), h = li(d), c && h ? (v = p.push(u), b = m.push(d)) : v && b && (g ? (c && p.push(u), h && m.push(d)) : (ui(t, p, m, v, b), v = b = 0, p = [], m = []));
              }ui(t, p, m, v, b), t.closePath(), t.fillStyle = a, t.fill();
            }(i, o, s, r, l, a._loop), ut.canvas.unclipArea(i));
          }
        } },
          ci = ut.noop,
          hi = ut.valueOrDefault;function fi(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
      }ot._set("global", { legend: { display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function onClick(t, e) {
            var n = e.datasetIndex,
                i = this.chart,
                a = i.getDatasetMeta(n);a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update();
          }, onHover: null, onLeave: null, labels: { boxWidth: 40, padding: 10, generateLabels: function generateLabels(t) {
              var e = t.data;return ut.isArray(e.datasets) ? e.datasets.map(function (e, n) {
                return { text: e.label, fillStyle: ut.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(n), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: n };
              }, this) : [];
            } } }, legendCallback: function legendCallback(t) {
          var e = [];e.push('<ul class="' + t.id + '-legend">');for (var n = 0; n < t.data.datasets.length; n++) {
            e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
          }return e.push("</ul>"), e.join("");
        } });var gi = gt.extend({ initialize: function initialize(t) {
          ut.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1;
        }, beforeUpdate: ci, update: function update(t, e, n) {
          var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
        }, afterUpdate: ci, beforeSetDimensions: ci, setDimensions: function setDimensions() {
          var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
        }, afterSetDimensions: ci, beforeBuildLabels: ci, buildLabels: function buildLabels() {
          var t = this,
              e = t.options.labels || {},
              n = ut.callback(e.generateLabels, [t.chart], t) || [];e.filter && (n = n.filter(function (n) {
            return e.filter(n, t.chart.data);
          })), t.options.reverse && n.reverse(), t.legendItems = n;
        }, afterBuildLabels: ci, beforeFit: ci, fit: function fit() {
          var t = this,
              e = t.options,
              n = e.labels,
              i = e.display,
              a = t.ctx,
              r = ut.options._parseFont(n),
              o = r.size,
              s = t.legendHitBoxes = [],
              l = t.minSize,
              u = t.isHorizontal();if (u ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) if (a.font = r.string, u) {
            var d = t.lineWidths = [0],
                c = 0;a.textAlign = "left", a.textBaseline = "top", ut.each(t.legendItems, function (t, e) {
              var i = fi(n, o),
                  r = i + o / 2 + a.measureText(t.text).width;(0 === e || d[d.length - 1] + r + n.padding > l.width) && (c += o + n.padding, d[d.length - (e > 0 ? 0 : 1)] = n.padding), s[e] = { left: 0, top: 0, width: r, height: o }, d[d.length - 1] += r + n.padding;
            }), l.height += c;
          } else {
            var h = n.padding,
                f = t.columnWidths = [],
                g = n.padding,
                p = 0,
                m = 0,
                v = o + h;ut.each(t.legendItems, function (t, e) {
              var i = fi(n, o),
                  r = i + o / 2 + a.measureText(t.text).width;e > 0 && m + v > l.height - h && (g += p + n.padding, f.push(p), p = 0, m = 0), p = Math.max(p, r), m += v, s[e] = { left: 0, top: 0, width: r, height: o };
            }), g += p, f.push(p), l.width += g;
          }t.width = l.width, t.height = l.height;
        }, afterFit: ci, isHorizontal: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        }, draw: function draw() {
          var t = this,
              e = t.options,
              n = e.labels,
              i = ot.global,
              a = i.defaultColor,
              r = i.elements.line,
              o = t.width,
              s = t.lineWidths;if (e.display) {
            var l,
                u = t.ctx,
                d = hi(n.fontColor, i.defaultFontColor),
                c = ut.options._parseFont(n),
                h = c.size;u.textAlign = "left", u.textBaseline = "middle", u.lineWidth = .5, u.strokeStyle = d, u.fillStyle = d, u.font = c.string;var f = fi(n, h),
                g = t.legendHitBoxes,
                p = t.isHorizontal();l = p ? { x: t.left + (o - s[0]) / 2 + n.padding, y: t.top + n.padding, line: 0 } : { x: t.left + n.padding, y: t.top + n.padding, line: 0 };var m = h + n.padding;ut.each(t.legendItems, function (i, d) {
              var c = u.measureText(i.text).width,
                  v = f + h / 2 + c,
                  b = l.x,
                  y = l.y;p ? d > 0 && b + v + n.padding > t.left + t.minSize.width && (y = l.y += m, l.line++, b = l.x = t.left + (o - s[l.line]) / 2 + n.padding) : d > 0 && y + m > t.top + t.minSize.height && (b = l.x = b + t.columnWidths[l.line] + n.padding, y = l.y = t.top + n.padding, l.line++), function (t, n, i) {
                if (!(isNaN(f) || f <= 0)) {
                  u.save();var o = hi(i.lineWidth, r.borderWidth);if (u.fillStyle = hi(i.fillStyle, a), u.lineCap = hi(i.lineCap, r.borderCapStyle), u.lineDashOffset = hi(i.lineDashOffset, r.borderDashOffset), u.lineJoin = hi(i.lineJoin, r.borderJoinStyle), u.lineWidth = o, u.strokeStyle = hi(i.strokeStyle, a), u.setLineDash && u.setLineDash(hi(i.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) {
                    var s = f * Math.SQRT2 / 2,
                        l = t + f / 2,
                        d = n + h / 2;ut.canvas.drawPoint(u, i.pointStyle, s, l, d);
                  } else 0 !== o && u.strokeRect(t, n, f, h), u.fillRect(t, n, f, h);u.restore();
                }
              }(b, y, i), g[d].left = b, g[d].top = y, function (t, e, n, i) {
                var a = h / 2,
                    r = f + a + t,
                    o = e + a;u.fillText(n.text, r, o), n.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(r, o), u.lineTo(r + i, o), u.stroke());
              }(b, y, i, c), p ? l.x += v + n.padding : l.y += m;
            });
          }
        }, _getLegendItemAt: function _getLegendItemAt(t, e) {
          var n,
              i,
              a,
              r = this;if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom) for (a = r.legendHitBoxes, n = 0; n < a.length; ++n) {
            if (i = a[n], t >= i.left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return r.legendItems[n];
          }return null;
        }, handleEvent: function handleEvent(t) {
          var e,
              n = this,
              i = n.options,
              a = "mouseup" === t.type ? "click" : t.type;if ("mousemove" === a) {
            if (!i.onHover && !i.onLeave) return;
          } else {
            if ("click" !== a) return;if (!i.onClick) return;
          }e = n._getLegendItemAt(t.x, t.y), "click" === a ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e));
        } });function pi(t, e) {
        var n = new gi({ ctx: t.ctx, options: e, chart: t });ke.configure(t, n, e), ke.addBox(t, n), t.legend = n;
      }var mi = { id: "legend", _element: gi, beforeInit: function beforeInit(t) {
          var e = t.options.legend;e && pi(t, e);
        }, beforeUpdate: function beforeUpdate(t) {
          var e = t.options.legend,
              n = t.legend;e ? (ut.mergeIf(e, ot.global.legend), n ? (ke.configure(t, n, e), n.options = e) : pi(t, e)) : n && (ke.removeBox(t, n), delete t.legend);
        }, afterEvent: function afterEvent(t, e) {
          var n = t.legend;n && n.handleEvent(e);
        } },
          vi = ut.noop;ot._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } });var bi = gt.extend({ initialize: function initialize(t) {
          ut.extend(this, t), this.legendHitBoxes = [];
        }, beforeUpdate: vi, update: function update(t, e, n) {
          var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
        }, afterUpdate: vi, beforeSetDimensions: vi, setDimensions: function setDimensions() {
          var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
        }, afterSetDimensions: vi, beforeBuildLabels: vi, buildLabels: vi, afterBuildLabels: vi, beforeFit: vi, fit: function fit() {
          var t = this,
              e = t.options,
              n = e.display,
              i = t.minSize,
              a = ut.isArray(e.text) ? e.text.length : 1,
              r = ut.options._parseFont(e),
              o = n ? a * r.lineHeight + 2 * e.padding : 0;t.isHorizontal() ? (i.width = t.maxWidth, i.height = o) : (i.width = o, i.height = t.maxHeight), t.width = i.width, t.height = i.height;
        }, afterFit: vi, isHorizontal: function isHorizontal() {
          var t = this.options.position;return "top" === t || "bottom" === t;
        }, draw: function draw() {
          var t = this,
              e = t.ctx,
              n = t.options;if (n.display) {
            var i,
                a,
                r,
                o = ut.options._parseFont(n),
                s = o.lineHeight,
                l = s / 2 + n.padding,
                u = 0,
                d = t.top,
                c = t.left,
                h = t.bottom,
                f = t.right;e.fillStyle = ut.valueOrDefault(n.fontColor, ot.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (a = c + (f - c) / 2, r = d + l, i = f - c) : (a = "left" === n.position ? c + l : f - l, r = d + (h - d) / 2, i = h - d, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(a, r), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";var g = n.text;if (ut.isArray(g)) for (var p = 0, m = 0; m < g.length; ++m) {
              e.fillText(g[m], 0, p, i), p += s;
            } else e.fillText(g, 0, 0, i);e.restore();
          }
        } });function yi(t, e) {
        var n = new bi({ ctx: t.ctx, options: e, chart: t });ke.configure(t, n, e), ke.addBox(t, n), t.titleBlock = n;
      }var xi = {},
          ki = di,
          wi = mi,
          Mi = { id: "title", _element: bi, beforeInit: function beforeInit(t) {
          var e = t.options.title;e && yi(t, e);
        }, beforeUpdate: function beforeUpdate(t) {
          var e = t.options.title,
              n = t.titleBlock;e ? (ut.mergeIf(e, ot.global.title), n ? (ke.configure(t, n, e), n.options = e) : yi(t, e)) : n && (ke.removeBox(t, n), delete t.titleBlock);
        } };for (var _i in xi.filler = ki, xi.legend = wi, xi.title = Mi, rn.helpers = ut, function () {
        function t(t, e, n) {
          var i;return "string" === typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i;
        }function e(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }function n(n, i, a) {
          var r = document.defaultView,
              o = ut._getParentNode(n),
              s = r.getComputedStyle(n)[i],
              l = r.getComputedStyle(o)[i],
              u = e(s),
              d = e(l),
              c = Number.POSITIVE_INFINITY;return u || d ? Math.min(u ? t(s, n, a) : c, d ? t(l, o, a) : c) : "none";
        }ut.where = function (t, e) {
          if (ut.isArray(t) && Array.prototype.filter) return t.filter(e);var n = [];return ut.each(t, function (t) {
            e(t) && n.push(t);
          }), n;
        }, ut.findIndex = Array.prototype.findIndex ? function (t, e, n) {
          return t.findIndex(e, n);
        } : function (t, e, n) {
          n = void 0 === n ? t : n;for (var i = 0, a = t.length; i < a; ++i) {
            if (e.call(n, t[i], i, t)) return i;
          }return -1;
        }, ut.findNextWhere = function (t, e, n) {
          ut.isNullOrUndef(n) && (n = -1);for (var i = n + 1; i < t.length; i++) {
            var a = t[i];if (e(a)) return a;
          }
        }, ut.findPreviousWhere = function (t, e, n) {
          ut.isNullOrUndef(n) && (n = t.length);for (var i = n - 1; i >= 0; i--) {
            var a = t[i];if (e(a)) return a;
          }
        }, ut.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, ut.almostEquals = function (t, e, n) {
          return Math.abs(t - e) < n;
        }, ut.almostWhole = function (t, e) {
          var n = Math.round(t);return n - e < t && n + e > t;
        }, ut.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, ut.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, ut.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, ut.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          var e = Math.log(t) * Math.LOG10E,
              n = Math.round(e),
              i = t === Math.pow(10, n);return i ? n : e;
        }, ut.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, ut.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, ut._decimalPlaces = function (t) {
          if (ut.isFinite(t)) {
            for (var e = 1, n = 0; Math.round(t * e) / e !== t;) {
              e *= 10, n++;
            }return n;
          }
        }, ut.getAngleFromPoint = function (t, e) {
          var n = e.x - t.x,
              i = e.y - t.y,
              a = Math.sqrt(n * n + i * i),
              r = Math.atan2(i, n);return r < -.5 * Math.PI && (r += 2 * Math.PI), { angle: r, distance: a };
        }, ut.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, ut.aliasPixel = function (t) {
          return t % 2 === 0 ? 0 : .5;
        }, ut._alignPixel = function (t, e, n) {
          var i = t.currentDevicePixelRatio,
              a = n / 2;return Math.round((e - a) * i) / i + a;
        }, ut.splineCurve = function (t, e, n, i) {
          var a = t.skip ? e : t,
              r = e,
              o = n.skip ? e : n,
              s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
              l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
              u = s / (s + l),
              d = l / (s + l);u = isNaN(u) ? 0 : u, d = isNaN(d) ? 0 : d;var c = i * u,
              h = i * d;return { previous: { x: r.x - c * (o.x - a.x), y: r.y - c * (o.y - a.y) }, next: { x: r.x + h * (o.x - a.x), y: r.y + h * (o.y - a.y) } };
        }, ut.EPSILON = Number.EPSILON || 1e-14, ut.splineCurveMonotone = function (t) {
          var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l,
              u,
              d = (t || []).map(function (t) {
            return { model: t._model, deltaK: 0, mK: 0 };
          }),
              c = d.length;for (e = 0; e < c; ++e) {
            if (!(i = d[e]).model.skip) {
              if (n = e > 0 ? d[e - 1] : null, (a = e < c - 1 ? d[e + 1] : null) && !a.model.skip) {
                var h = a.model.x - i.model.x;i.deltaK = 0 !== h ? (a.model.y - i.model.y) / h : 0;
              }!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2;
            }
          }for (e = 0; e < c - 1; ++e) {
            i = d[e], a = d[e + 1], i.model.skip || a.model.skip || (ut.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (r = i.mK / i.deltaK, o = a.mK / i.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = r * s * i.deltaK, a.mK = o * s * i.deltaK)));
          }for (e = 0; e < c; ++e) {
            (i = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null, a = e < c - 1 ? d[e + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), a && !a.model.skip && (u = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK));
          }
        }, ut.nextItem = function (t, e, n) {
          return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, ut.previousItem = function (t, e, n) {
          return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, ut.niceNum = function (t, e) {
          var n = Math.floor(ut.log10(t)),
              i = t / Math.pow(10, n);return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n);
        }, ut.requestAnimFrame = "undefined" === typeof window ? function (t) {
          t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        }, ut.getRelativePosition = function (t, e) {
          var n,
              i,
              a = t.originalEvent || t,
              r = t.target || t.srcElement,
              o = r.getBoundingClientRect(),
              s = a.touches;s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY);var l = parseFloat(ut.getStyle(r, "padding-left")),
              u = parseFloat(ut.getStyle(r, "padding-top")),
              d = parseFloat(ut.getStyle(r, "padding-right")),
              c = parseFloat(ut.getStyle(r, "padding-bottom")),
              h = o.right - o.left - l - d,
              f = o.bottom - o.top - u - c;return n = Math.round((n - o.left - l) / h * r.width / e.currentDevicePixelRatio), i = Math.round((i - o.top - u) / f * r.height / e.currentDevicePixelRatio), { x: n, y: i };
        }, ut.getConstraintWidth = function (t) {
          return n(t, "max-width", "clientWidth");
        }, ut.getConstraintHeight = function (t) {
          return n(t, "max-height", "clientHeight");
        }, ut._calculatePadding = function (t, e, n) {
          return (e = ut.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10);
        }, ut._getParentNode = function (t) {
          var e = t.parentNode;return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
        }, ut.getMaximumWidth = function (t) {
          var e = ut._getParentNode(t);if (!e) return t.clientWidth;var n = e.clientWidth,
              i = ut._calculatePadding(e, "padding-left", n),
              a = ut._calculatePadding(e, "padding-right", n),
              r = n - i - a,
              o = ut.getConstraintWidth(t);return isNaN(o) ? r : Math.min(r, o);
        }, ut.getMaximumHeight = function (t) {
          var e = ut._getParentNode(t);if (!e) return t.clientHeight;var n = e.clientHeight,
              i = ut._calculatePadding(e, "padding-top", n),
              a = ut._calculatePadding(e, "padding-bottom", n),
              r = n - i - a,
              o = ut.getConstraintHeight(t);return isNaN(o) ? r : Math.min(r, o);
        }, ut.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, ut.retinaScale = function (t, e) {
          var n = t.currentDevicePixelRatio = e || "undefined" !== typeof window && window.devicePixelRatio || 1;if (1 !== n) {
            var i = t.canvas,
                a = t.height,
                r = t.width;i.height = a * n, i.width = r * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = a + "px", i.style.width = r + "px");
          }
        }, ut.fontString = function (t, e, n) {
          return e + " " + t + "px " + n;
        }, ut.longestText = function (t, e, n, i) {
          var a = (i = i || {}).data = i.data || {},
              r = i.garbageCollect = i.garbageCollect || [];i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;var o = 0;ut.each(n, function (e) {
            void 0 !== e && null !== e && !0 !== ut.isArray(e) ? o = ut.measureText(t, a, r, o, e) : ut.isArray(e) && ut.each(e, function (e) {
              void 0 === e || null === e || ut.isArray(e) || (o = ut.measureText(t, a, r, o, e));
            });
          });var s = r.length / 2;if (s > n.length) {
            for (var l = 0; l < s; l++) {
              delete a[r[l]];
            }r.splice(0, s);
          }return o;
        }, ut.measureText = function (t, e, n, i, a) {
          var r = e[a];return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i;
        }, ut.numberOfLabelLines = function (t) {
          var e = 1;return ut.each(t, function (t) {
            ut.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, ut.color = Y ? function (t) {
          return t instanceof CanvasGradient && (t = ot.global.defaultColor), Y(t);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, ut.getHoverColor = function (t) {
          return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : ut.color(t).saturate(.5).darken(.1).rgbString();
        };
      }(), rn._adapters = ln, rn.Animation = mt, rn.animationService = vt, rn.controllers = ue, rn.DatasetController = wt, rn.defaults = ot, rn.Element = gt, rn.elements = Bt, rn.Interaction = me, rn.layouts = ke, rn.platform = Ee, rn.plugins = We, rn.Scale = gn, rn.scaleService = Ve, rn.Ticks = un, rn.Tooltip = Je, rn.helpers.each(ei, function (t, e) {
        rn.scaleService.registerScaleType(e, t, t._defaults);
      }), xi) {
        xi.hasOwnProperty(_i) && rn.plugins.register(xi[_i]);
      }rn.platform.initialize();var Ci = rn;return "undefined" !== typeof window && (window.Chart = rn), rn.Chart = rn, rn.Legend = xi.legend._element, rn.Title = xi.title._element, rn.pluginService = rn.plugins, rn.PluginBase = rn.Element.extend({}), rn.canvasHelpers = rn.helpers.canvas, rn.layoutService = rn.layouts, rn.LinearScaleBase = yn, rn.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
        rn[t] = function (e, n) {
          return new rn(e, rn.helpers.merge(n || {}, { type: t.charAt(0).toLowerCase() + t.slice(1) }));
        };
      }), Ci;
    }(function () {
      try {
        return n(385);
      } catch (t) {}
    }());
  }, 44: function _(t, e, n) {
    "use strict";
    var i = n(9),
        a = n(36),
        r = n(0),
        o = n.n(r),
        s = n(1),
        l = n.n(s),
        u = n(349),
        d = n.n(u),
        c = n(350),
        h = { tag: c.m, noGutters: l.a.bool, className: l.a.string, cssModule: l.a.object, form: l.a.bool },
        f = function f(t) {
      var e = t.className,
          n = t.cssModule,
          r = t.noGutters,
          s = t.tag,
          l = t.form,
          u = Object(a.a)(t, ["className", "cssModule", "noGutters", "tag", "form"]),
          h = Object(c.i)(d()(e, r ? "no-gutters" : null, l ? "form-row" : "row"), n);return o.a.createElement(s, Object(i.a)({}, u, { className: h }));
    };f.propTypes = h, f.defaultProps = { tag: "div" }, e.a = f;
  }, 45: function _(t, e, n) {
    "use strict";
    var i = n(9),
        a = n(36),
        r = n(0),
        o = n.n(r),
        s = n(1),
        l = n.n(s),
        u = n(349),
        d = n.n(u),
        c = n(350),
        h = { tag: c.m, inverse: l.a.bool, color: l.a.string, block: Object(c.e)(l.a.bool, 'Please use the props "body"'), body: l.a.bool, outline: l.a.bool, className: l.a.string, cssModule: l.a.object, innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func]) },
        f = function f(t) {
      var e = t.className,
          n = t.cssModule,
          r = t.color,
          s = t.block,
          l = t.body,
          u = t.inverse,
          h = t.outline,
          f = t.tag,
          g = t.innerRef,
          p = Object(a.a)(t, ["className", "cssModule", "color", "block", "body", "inverse", "outline", "tag", "innerRef"]),
          m = Object(c.i)(d()(e, "card", !!u && "text-white", !(!s && !l) && "card-body", !!r && (h ? "border" : "bg") + "-" + r), n);return o.a.createElement(f, Object(i.a)({}, p, { className: m, ref: g }));
    };f.propTypes = h, f.defaultProps = { tag: "div" }, e.a = f;
  }, 46: function _(t, e, n) {
    "use strict";
    var i = n(9),
        a = n(36),
        r = n(0),
        o = n.n(r),
        s = n(1),
        l = n.n(s),
        u = n(349),
        d = n.n(u),
        c = n(350),
        h = { tag: c.m, className: l.a.string, cssModule: l.a.object, innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func]) },
        f = function f(t) {
      var e = t.className,
          n = t.cssModule,
          r = t.innerRef,
          s = t.tag,
          l = Object(a.a)(t, ["className", "cssModule", "innerRef", "tag"]),
          u = Object(c.i)(d()(e, "card-body"), n);return o.a.createElement(s, Object(i.a)({}, l, { className: u, ref: r }));
    };f.propTypes = h, f.defaultProps = { tag: "div" }, e.a = f;
  }, 469: function _(t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return x;
      });var i = n(0),
          a = n.n(i),
          r = n(1),
          o = n.n(r),
          s = n(412),
          l = n.n(s),
          u = n(386),
          d = n.n(u),
          c = n(510),
          h = n.n(c),
          f = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];for (var i in n) {
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
        }return t;
      };function g(t, e) {
        var n = {};for (var i in t) {
          e.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }return n;
      }function p(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }function m(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" !== (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" !== typeof e ? t : e;
      }function v(t, e) {
        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }var b = "undefined" !== typeof t && Object({ NODE_ENV: "production", PUBLIC_URL: "" }) && "production",
          y = function (t) {
        function e() {
          var n, i;p(this, e);for (var a = arguments.length, r = Array(a), o = 0; o < a; o++) {
            r[o] = arguments[o];
          }return n = i = m(this, t.call.apply(t, [this].concat(r))), i.handleOnClick = function (t) {
            var e = i.chartInstance,
                n = i.props,
                a = n.getDatasetAtEvent,
                r = n.getElementAtEvent,
                o = n.getElementsAtEvent,
                s = n.onElementsClick;a && a(e.getDatasetAtEvent(t), t), r && r(e.getElementAtEvent(t), t), o && o(e.getElementsAtEvent(t), t), s && s(e.getElementsAtEvent(t), t);
          }, i.ref = function (t) {
            i.element = t;
          }, m(i, n);
        }return v(e, t), e.prototype.componentWillMount = function () {
          this.chartInstance = void 0;
        }, e.prototype.componentDidMount = function () {
          this.renderChart();
        }, e.prototype.componentDidUpdate = function () {
          if (this.props.redraw) return this.destroyChart(), void this.renderChart();this.updateChart();
        }, e.prototype.shouldComponentUpdate = function (t) {
          var e = this.props,
              n = (e.redraw, e.type),
              i = e.options,
              a = e.plugins,
              r = e.legend,
              o = e.height,
              s = e.width;if (!0 === t.redraw) return !0;if (o !== t.height || s !== t.width) return !0;if (n !== t.type) return !0;if (!d()(r, t.legend)) return !0;if (!d()(i, t.options)) return !0;var l = this.transformDataProp(t);return !d()(this.shadowDataProp, l) || !d()(a, t.plugins);
        }, e.prototype.componentWillUnmount = function () {
          this.destroyChart();
        }, e.prototype.transformDataProp = function (t) {
          var e = t.data;return "function" == typeof e ? e(this.element) : e;
        }, e.prototype.memoizeDataProps = function () {
          if (this.props.data) {
            var t = this.transformDataProp(this.props);return this.shadowDataProp = f({}, t, { datasets: t.datasets && t.datasets.map(function (t) {
                return f({}, t);
              }) }), this.saveCurrentDatasets(), t;
          }
        }, e.prototype.checkDatasets = function (t) {
          var n = "production" !== b && "prod" !== b,
              i = this.props.datasetKeyProvider !== e.getLabelAsKey,
              a = t.length > 1;if (n && a && !i) {
            var r = !1;t.forEach(function (t) {
              t.label || (r = !0);
            }), r && console.error('[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.');
          }
        }, e.prototype.getCurrentDatasets = function () {
          return this.chartInstance && this.chartInstance.config.data && this.chartInstance.config.data.datasets || [];
        }, e.prototype.saveCurrentDatasets = function () {
          var t = this;this.datasets = this.datasets || {}, this.getCurrentDatasets().forEach(function (e) {
            t.datasets[t.props.datasetKeyProvider(e)] = e;
          });
        }, e.prototype.updateChart = function () {
          var t = this,
              e = this.props.options,
              n = this.memoizeDataProps(this.props);if (this.chartInstance) {
            e && (this.chartInstance.options = l.a.helpers.configMerge(this.chartInstance.options, e));var i = this.getCurrentDatasets(),
                a = n.datasets || [];this.checkDatasets(i);var r = h()(i, this.props.datasetKeyProvider);this.chartInstance.config.data.datasets = a.map(function (e) {
              var n = r[t.props.datasetKeyProvider(e)];if (n && n.type === e.type) {
                n.data.splice(e.data.length), e.data.forEach(function (t, i) {
                  n.data[i] = e.data[i];
                });e.data;var i = g(e, ["data"]);return f({}, n, i);
              }return e;
            });n.datasets;var o = g(n, ["datasets"]);this.chartInstance.config.data = f({}, this.chartInstance.config.data, o), this.chartInstance.update();
          }
        }, e.prototype.renderChart = function () {
          var t = this.props,
              n = t.options,
              i = t.legend,
              a = t.type,
              r = t.plugins,
              o = this.element,
              s = this.memoizeDataProps();"undefined" === typeof i || d()(e.defaultProps.legend, i) || (n.legend = i), this.chartInstance = new l.a(o, { type: a, data: s, options: n, plugins: r });
        }, e.prototype.destroyChart = function () {
          this.saveCurrentDatasets();var t = Object.values(this.datasets);this.chartInstance.config.data.datasets = t, this.chartInstance.destroy();
        }, e.prototype.render = function () {
          var t = this.props,
              e = t.height,
              n = t.width,
              i = t.id;return a.a.createElement("canvas", { ref: this.ref, height: e, width: n, id: i, onClick: this.handleOnClick });
        }, e;
      }(a.a.Component);y.getLabelAsKey = function (t) {
        return t.label;
      }, y.propTypes = { data: o.a.oneOfType([o.a.object, o.a.func]).isRequired, getDatasetAtEvent: o.a.func, getElementAtEvent: o.a.func, getElementsAtEvent: o.a.func, height: o.a.number, legend: o.a.object, onElementsClick: o.a.func, options: o.a.object, plugins: o.a.arrayOf(o.a.object), redraw: o.a.bool, type: function type(t, e, n) {
          if (!l.a.controllers[t[e]]) return new Error("Invalid chart type `" + t[e] + "` supplied to `" + n + "`.");
        }, width: o.a.number, datasetKeyProvider: o.a.func }, y.defaultProps = { legend: { display: !0, position: "bottom" }, type: "doughnut", height: 150, width: 300, redraw: !1, options: {}, datasetKeyProvider: y.getLabelAsKey };var x = function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }return v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "doughnut" }));
        }, e;
      }(a.a.Component);(function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "pie" }));
        };
      })(a.a.Component), function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "line" }));
        };
      }(a.a.Component), function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "bar" }));
        };
      }(a.a.Component), function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "horizontalBar" }));
        };
      }(a.a.Component), function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "radar" }));
        };
      }(a.a.Component), function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "polarArea" }));
        };
      }(a.a.Component), function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "bubble" }));
        };
      }(a.a.Component), function (t) {
        function e() {
          return p(this, e), m(this, t.apply(this, arguments));
        }v(e, t), e.prototype.render = function () {
          var t = this;return a.a.createElement(y, f({}, this.props, { ref: function ref(e) {
              return t.chartInstance = e && e.chartInstance;
            }, type: "scatter" }));
        };
      }(a.a.Component), l.a.defaults;
    }).call(this, n(119));
  }, 510: function _(t, e, n) {
    var i = n(511),
        a = n(513)(function (t, e, n) {
      i(t, n, e);
    });t.exports = a;
  }, 511: function _(t, e, n) {
    var i = n(512);t.exports = function (t, e, n) {
      "__proto__" == e && i ? i(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n;
    };
  }, 512: function _(t, e, n) {
    var i = n(43),
        a = function () {
      try {
        var t = i(Object, "defineProperty");return t({}, "", {}), t;
      } catch (e) {}
    }();t.exports = a;
  }, 513: function _(t, e, n) {
    var i = n(514),
        a = n(515),
        r = n(373),
        o = n(203);t.exports = function (t, e) {
      return function (n, s) {
        var l = o(n) ? i : a,
            u = e ? e() : {};return l(n, t, r(s, 2), u);
      };
    };
  }, 514: function _(t, e) {
    t.exports = function (t, e, n, i) {
      for (var a = -1, r = null == t ? 0 : t.length; ++a < r;) {
        var o = t[a];e(i, o, n(o), t);
      }return i;
    };
  }, 515: function _(t, e, n) {
    var i = n(416);t.exports = function (t, e, n, a) {
      return i(t, function (t, i, r) {
        e(a, t, n(t), r);
      }), a;
    };
  }, 6: function _(t, e, n) {
    "use strict";
    var i = n(9),
        a = n(36),
        r = n(352),
        o = n.n(r),
        s = n(0),
        l = n.n(s),
        u = n(1),
        d = n.n(u),
        c = n(349),
        h = n.n(c),
        f = n(350),
        g = d.a.oneOfType([d.a.number, d.a.string]),
        p = d.a.oneOfType([d.a.bool, d.a.number, d.a.string, d.a.shape({ size: d.a.oneOfType([d.a.bool, d.a.number, d.a.string]), push: Object(f.e)(g, 'Please use the prop "order"'), pull: Object(f.e)(g, 'Please use the prop "order"'), order: g, offset: g })]),
        m = { tag: f.m, xs: p, sm: p, md: p, lg: p, xl: p, className: d.a.string, cssModule: d.a.object, widths: d.a.array },
        v = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        b = function b(t, e, n) {
      return !0 === n || "" === n ? t ? "col" : "col-" + e : "auto" === n ? t ? "col-auto" : "col-" + e + "-auto" : t ? "col-" + n : "col-" + e + "-" + n;
    },
        y = function y(t) {
      var e = t.className,
          n = t.cssModule,
          r = t.widths,
          s = t.tag,
          u = Object(a.a)(t, ["className", "cssModule", "widths", "tag"]),
          d = [];r.forEach(function (e, i) {
        var a = t[e];if (delete u[e], a || "" === a) {
          var r = !i;if (o()(a)) {
            var s,
                l = r ? "-" : "-" + e + "-",
                c = b(r, e, a.size);d.push(Object(f.i)(h()(((s = {})[c] = a.size || "" === a.size, s["order" + l + a.order] = a.order || 0 === a.order, s["offset" + l + a.offset] = a.offset || 0 === a.offset, s)), n));
          } else {
            var g = b(r, e, a);d.push(g);
          }
        }
      }), d.length || d.push("col");var c = Object(f.i)(h()(e, d), n);return l.a.createElement(s, Object(i.a)({}, u, { className: c }));
    };y.propTypes = m, y.defaultProps = v, e.a = y;
  }, 81: function _(t, e, n) {
    "use strict";
    var i = n(9),
        a = n(36),
        r = n(0),
        o = n.n(r),
        s = n(1),
        l = n.n(s),
        u = n(349),
        d = n.n(u),
        c = n(350),
        h = { tag: c.m, className: l.a.string, cssModule: l.a.object },
        f = function f(t) {
      var e = t.className,
          n = t.cssModule,
          r = t.tag,
          s = Object(a.a)(t, ["className", "cssModule", "tag"]),
          l = Object(c.i)(d()(e, "card-header"), n);return o.a.createElement(r, Object(i.a)({}, s, { className: l }));
    };f.propTypes = h, f.defaultProps = { tag: "div" }, e.a = f;
  } }]);
//# sourceMappingURL=35.b2556af7.chunk.js.map
//# sourceMappingURL=35.b2556af7.chunk.js.map