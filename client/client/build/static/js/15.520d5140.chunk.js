"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[15], { 457: function _(t, n, r) {
    "use strict";
    var e = r(458),
        o = r(462),
        c = r(466),
        i = r(467),
        u = r(468);function a(t, n) {
      return n.encode ? n.strict ? c(t) : encodeURIComponent(t) : t;
    }function s(t, n) {
      return n.decode ? i(t) : t;
    }function f(t) {
      var n = t.indexOf("#");return -1 !== n && (t = t.slice(0, n)), t;
    }function l(t) {
      var n = (t = f(t)).indexOf("?");return -1 === n ? "" : t.slice(n + 1);
    }function p(t, n) {
      var r = function (t) {
        var n;switch (t.arrayFormat) {case "index":
            return function (t, r, e) {
              n = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), n ? (void 0 === e[t] && (e[t] = {}), e[t][n[1]] = r) : e[t] = r;
            };case "bracket":
            return function (t, r, e) {
              n = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), n ? void 0 !== e[t] ? e[t] = [].concat(e[t], r) : e[t] = [r] : e[t] = r;
            };case "comma":
            return function (t, n, r) {
              var e = "string" === typeof n && n.split("").indexOf(",") > -1 ? n.split(",") : n;r[t] = e;
            };default:
            return function (t, n, r) {
              void 0 !== r[t] ? r[t] = [].concat(r[t], n) : r[t] = n;
            };}
      }(n = Object.assign({ decode: !0, arrayFormat: "none" }, n)),
          o = Object.create(null);if ("string" !== typeof t) return o;if (!(t = t.trim().replace(/^[?#&]/, ""))) return o;var c = !0,
          i = !1,
          a = void 0;try {
        for (var f, l = t.split("&")[Symbol.iterator](); !(c = (f = l.next()).done); c = !0) {
          var p = f.value,
              d = u(p.replace(/\+/g, " "), "="),
              y = e(d, 2),
              v = y[0],
              h = y[1];h = void 0 === h ? null : s(h, n), r(s(v, n), h, o);
        }
      } catch (b) {
        i = !0, a = b;
      } finally {
        try {
          c || null == l.return || l.return();
        } finally {
          if (i) throw a;
        }
      }return Object.keys(o).sort().reduce(function (t, n) {
        var r = o[n];return Boolean(r) && "object" === (typeof r === "undefined" ? "undefined" : _typeof(r)) && !Array.isArray(r) ? t[n] = function t(n) {
          return Array.isArray(n) ? n.sort() : "object" === (typeof n === "undefined" ? "undefined" : _typeof(n)) ? t(Object.keys(n)).sort(function (t, n) {
            return Number(t) - Number(n);
          }).map(function (t) {
            return n[t];
          }) : n;
        }(r) : t[n] = r, t;
      }, Object.create(null));
    }n.extract = l, n.parse = p, n.stringify = function (t, n) {
      if (!t) return "";var r = function (t) {
        switch (t.arrayFormat) {case "index":
            return function (n) {
              return function (r, e) {
                var c = r.length;return void 0 === e ? r : [].concat(o(r), null === e ? [[a(n, t), "[", c, "]"].join("")] : [[a(n, t), "[", a(c, t), "]=", a(e, t)].join("")]);
              };
            };case "bracket":
            return function (n) {
              return function (r, e) {
                return void 0 === e ? r : [].concat(o(r), null === e ? [[a(n, t), "[]"].join("")] : [[a(n, t), "[]=", a(e, t)].join("")]);
              };
            };case "comma":
            return function (n) {
              return function (r, e, o) {
                return null === e || void 0 === e || 0 === e.length ? r : 0 === o ? [[a(n, t), "=", a(e, t)].join("")] : [[r, a(e, t)].join(",")];
              };
            };default:
            return function (n) {
              return function (r, e) {
                return void 0 === e ? r : [].concat(o(r), null === e ? [a(n, t)] : [[a(n, t), "=", a(e, t)].join("")]);
              };
            };}
      }(n = Object.assign({ encode: !0, strict: !0, arrayFormat: "none" }, n)),
          e = Object.keys(t);return !1 !== n.sort && e.sort(n.sort), e.map(function (e) {
        var o = t[e];return void 0 === o ? "" : null === o ? a(e, n) : Array.isArray(o) ? o.reduce(r(e), []).join("&") : a(e, n) + "=" + a(o, n);
      }).filter(function (t) {
        return t.length > 0;
      }).join("&");
    }, n.parseUrl = function (t, n) {
      return { url: f(t).split("?")[0] || "", query: p(l(t), n) };
    };
  }, 458: function _(t, n, r) {
    var e = r(459),
        o = r(460),
        c = r(461);t.exports = function (t, n) {
      return e(t) || o(t, n) || c();
    };
  }, 459: function _(t, n) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  }, 460: function _(t, n) {
    t.exports = function (t, n) {
      var r = [],
          e = !0,
          o = !1,
          c = void 0;try {
        for (var i, u = t[Symbol.iterator](); !(e = (i = u.next()).done) && (r.push(i.value), !n || r.length !== n); e = !0) {}
      } catch (a) {
        o = !0, c = a;
      } finally {
        try {
          e || null == u.return || u.return();
        } finally {
          if (o) throw c;
        }
      }return r;
    };
  }, 461: function _(t, n) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }, 462: function _(t, n, r) {
    var e = r(463),
        o = r(464),
        c = r(465);t.exports = function (t) {
      return e(t) || o(t) || c();
    };
  }, 463: function _(t, n) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var n = 0, r = new Array(t.length); n < t.length; n++) {
          r[n] = t[n];
        }return r;
      }
    };
  }, 464: function _(t, n) {
    t.exports = function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    };
  }, 465: function _(t, n) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  }, 466: function _(t, n, r) {
    "use strict";
    t.exports = function (t) {
      return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
        return "%".concat(t.charCodeAt(0).toString(16).toUpperCase());
      });
    };
  }, 467: function _(t, n, r) {
    "use strict";
    var e = new RegExp("%[a-f0-9]{2}", "gi"),
        o = new RegExp("(%[a-f0-9]{2})+", "gi");function c(t, n) {
      try {
        return decodeURIComponent(t.join(""));
      } catch (o) {}if (1 === t.length) return t;n = n || 1;var r = t.slice(0, n),
          e = t.slice(n);return Array.prototype.concat.call([], c(r), c(e));
    }function i(t) {
      try {
        return decodeURIComponent(t);
      } catch (o) {
        for (var n = t.match(e), r = 1; r < n.length; r++) {
          n = (t = c(n, r).join("")).match(e);
        }return t;
      }
    }t.exports = function (t) {
      if ("string" !== typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + (typeof t === "undefined" ? "undefined" : _typeof(t)) + "`");try {
        return t = t.replace(/\+/g, " "), decodeURIComponent(t);
      } catch (n) {
        return function (t) {
          for (var r = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, e = o.exec(t); e;) {
            try {
              r[e[0]] = decodeURIComponent(e[0]);
            } catch (n) {
              var c = i(e[0]);c !== e[0] && (r[e[0]] = c);
            }e = o.exec(t);
          }r["%C2"] = "\uFFFD";for (var u = Object.keys(r), a = 0; a < u.length; a++) {
            var s = u[a];t = t.replace(new RegExp(s, "g"), r[s]);
          }return t;
        }(t);
      }
    };
  }, 468: function _(t, n, r) {
    "use strict";
    t.exports = function (t, n) {
      if ("string" !== typeof t || "string" !== typeof n) throw new TypeError("Expected the arguments to be of type `string`");if ("" === n) return [t];var r = t.indexOf(n);return -1 === r ? [t] : [t.slice(0, r), t.slice(r + n.length)];
    };
  }, 611: function _(t, n, r) {
    "use strict";
    r.r(n);var e = r(112),
        o = r(113),
        c = r(116),
        i = r(114),
        u = r(115),
        a = r(0),
        s = r.n(a),
        f = r(58),
        l = r(18),
        p = r(604),
        d = r(457),
        y = r.n(d),
        v = r(439),
        h = r(365),
        b = r(367),
        g = function (t) {
      function n(t) {
        var r;return Object(e.a)(this, n), (r = Object(c.a)(this, Object(i.a)(n).call(this, t))).state = { redirect: !1 }, r;
      }return Object(u.a)(n, t), Object(o.a)(n, [{ key: "componentWillMount", value: function value() {
          var t = this,
              n = y.a.parse(this.props.location.search).token;this.props.usersActions.loadUsersInit(n), this.props.customersActions.loadCustomersInit(n), this.props.authActions.login(n).then(function () {
            return t.setState({ redirect: !0 });
          });
        } }, { key: "render", value: function value() {
          return this.state.redirect ? s.a.createElement(p.a, { to: "/dashboard" }) : null;
        } }]), n;
    }(a.Component);n.default = Object(f.b)(null, function (t) {
      return { authActions: Object(l.bindActionCreators)(v, t), usersActions: Object(l.bindActionCreators)(h, t), customersActions: Object(l.bindActionCreators)(b, t) };
    })(g);
  } }]);
//# sourceMappingURL=15.520d5140.chunk.js.map
//# sourceMappingURL=15.520d5140.chunk.js.map