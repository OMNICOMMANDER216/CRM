"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[20], { 126: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        l = a(1),
        c = a.n(l),
        i = a(349),
        u = a.n(i),
        d = a(350),
        f = { children: c.a.node, row: c.a.bool, check: c.a.bool, inline: c.a.bool, disabled: c.a.bool, tag: d.m, className: c.a.string, cssModule: c.a.object },
        p = function p(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.row,
          l = e.disabled,
          c = e.check,
          i = e.inline,
          f = e.tag,
          p = Object(r.a)(e, ["className", "cssModule", "row", "disabled", "check", "inline", "tag"]),
          b = Object(d.i)(u()(t, !!n && "row", c ? "form-check" : "form-group", !(!c || !i) && "form-check-inline", !(!c || !l) && "disabled"), a);return o.a.createElement(f, Object(s.a)({}, p, { className: b }));
    };p.propTypes = f, p.defaultProps = { tag: "div" }, t.a = p;
  }, 127: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        l = a(1),
        c = a.n(l),
        i = a(349),
        u = a.n(i),
        d = a(352),
        f = a.n(d),
        p = a(350),
        b = c.a.oneOfType([c.a.number, c.a.string]),
        m = c.a.oneOfType([c.a.string, c.a.number, c.a.shape({ size: b, push: Object(p.e)(b, 'Please use the prop "order"'), pull: Object(p.e)(b, 'Please use the prop "order"'), order: b, offset: b })]),
        h = { children: c.a.node, hidden: c.a.bool, check: c.a.bool, size: c.a.string, for: c.a.string, tag: p.m, className: c.a.string, cssModule: c.a.object, xs: m, sm: m, md: m, lg: m, xl: m, widths: c.a.array },
        v = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        g = function g(e, t, a) {
      return !0 === a || "" === a ? e ? "col" : "col-" + t : "auto" === a ? e ? "col-auto" : "col-" + t + "-auto" : e ? "col-" + a : "col-" + t + "-" + a;
    },
        j = function j(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.hidden,
          l = e.widths,
          c = e.tag,
          i = e.check,
          d = e.size,
          b = e.for,
          m = Object(r.a)(e, ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"]),
          h = [];l.forEach(function (t, s) {
        var r = e[t];if (delete m[t], r || "" === r) {
          var n,
              o = !s;if (f()(r)) {
            var l,
                c = o ? "-" : "-" + t + "-";n = g(o, t, r.size), h.push(Object(p.i)(u()(((l = {})[n] = r.size || "" === r.size, l["order" + c + r.order] = r.order || 0 === r.order, l["offset" + c + r.offset] = r.offset || 0 === r.offset, l))), a);
          } else n = g(o, t, r), h.push(n);
        }
      });var v = Object(p.i)(u()(t, !!n && "sr-only", !!i && "form-check-label", !!d && "col-form-label-" + d, h, !!h.length && "col-form-label"), a);return o.a.createElement(c, Object(s.a)({ htmlFor: b }, m, { className: v }));
    };j.propTypes = h, j.defaultProps = v, t.a = j;
  }, 352: function _(e, t) {
    e.exports = function (e) {
      var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
    };
  }, 44: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        l = a(1),
        c = a.n(l),
        i = a(349),
        u = a.n(i),
        d = a(350),
        f = { tag: d.m, noGutters: c.a.bool, className: c.a.string, cssModule: c.a.object, form: c.a.bool },
        p = function p(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.noGutters,
          l = e.tag,
          c = e.form,
          i = Object(r.a)(e, ["className", "cssModule", "noGutters", "tag", "form"]),
          f = Object(d.i)(u()(t, n ? "no-gutters" : null, c ? "form-row" : "row"), a);return o.a.createElement(l, Object(s.a)({}, i, { className: f }));
    };p.propTypes = f, p.defaultProps = { tag: "div" }, t.a = p;
  }, 45: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        l = a(1),
        c = a.n(l),
        i = a(349),
        u = a.n(i),
        d = a(350),
        f = { tag: d.m, inverse: c.a.bool, color: c.a.string, block: Object(d.e)(c.a.bool, 'Please use the props "body"'), body: c.a.bool, outline: c.a.bool, className: c.a.string, cssModule: c.a.object, innerRef: c.a.oneOfType([c.a.object, c.a.string, c.a.func]) },
        p = function p(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.color,
          l = e.block,
          c = e.body,
          i = e.inverse,
          f = e.outline,
          p = e.tag,
          b = e.innerRef,
          m = Object(r.a)(e, ["className", "cssModule", "color", "block", "body", "inverse", "outline", "tag", "innerRef"]),
          h = Object(d.i)(u()(t, "card", !!i && "text-white", !(!l && !c) && "card-body", !!n && (f ? "border" : "bg") + "-" + n), a);return o.a.createElement(p, Object(s.a)({}, m, { className: h, ref: b }));
    };p.propTypes = f, p.defaultProps = { tag: "div" }, t.a = p;
  }, 46: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        l = a(1),
        c = a.n(l),
        i = a(349),
        u = a.n(i),
        d = a(350),
        f = { tag: d.m, className: c.a.string, cssModule: c.a.object, innerRef: c.a.oneOfType([c.a.object, c.a.string, c.a.func]) },
        p = function p(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.innerRef,
          l = e.tag,
          c = Object(r.a)(e, ["className", "cssModule", "innerRef", "tag"]),
          i = Object(d.i)(u()(t, "card-body"), a);return o.a.createElement(l, Object(s.a)({}, c, { className: i, ref: n }));
    };p.propTypes = f, p.defaultProps = { tag: "div" }, t.a = p;
  }, 6: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(352),
        o = a.n(n),
        l = a(0),
        c = a.n(l),
        i = a(1),
        u = a.n(i),
        d = a(349),
        f = a.n(d),
        p = a(350),
        b = u.a.oneOfType([u.a.number, u.a.string]),
        m = u.a.oneOfType([u.a.bool, u.a.number, u.a.string, u.a.shape({ size: u.a.oneOfType([u.a.bool, u.a.number, u.a.string]), push: Object(p.e)(b, 'Please use the prop "order"'), pull: Object(p.e)(b, 'Please use the prop "order"'), order: b, offset: b })]),
        h = { tag: p.m, xs: m, sm: m, md: m, lg: m, xl: m, className: u.a.string, cssModule: u.a.object, widths: u.a.array },
        v = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        g = function g(e, t, a) {
      return !0 === a || "" === a ? e ? "col" : "col-" + t : "auto" === a ? e ? "col-auto" : "col-" + t + "-auto" : e ? "col-" + a : "col-" + t + "-" + a;
    },
        j = function j(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.widths,
          l = e.tag,
          i = Object(r.a)(e, ["className", "cssModule", "widths", "tag"]),
          u = [];n.forEach(function (t, s) {
        var r = e[t];if (delete i[t], r || "" === r) {
          var n = !s;if (o()(r)) {
            var l,
                c = n ? "-" : "-" + t + "-",
                d = g(n, t, r.size);u.push(Object(p.i)(f()(((l = {})[d] = r.size || "" === r.size, l["order" + c + r.order] = r.order || 0 === r.order, l["offset" + c + r.offset] = r.offset || 0 === r.offset, l)), a));
          } else {
            var b = g(n, t, r);u.push(b);
          }
        }
      }), u.length || u.push("col");var d = Object(p.i)(f()(t, u), a);return c.a.createElement(l, Object(s.a)({}, i, { className: d }));
    };j.propTypes = h, j.defaultProps = v, t.a = j;
  }, 62: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        l = a(1),
        c = a.n(l),
        i = a(349),
        u = a.n(i),
        d = a(350),
        f = { className: c.a.string, cssModule: c.a.object, size: c.a.string, bordered: c.a.bool, borderless: c.a.bool, striped: c.a.bool, inverse: Object(d.e)(c.a.bool, 'Please use the prop "dark"'), dark: c.a.bool, hover: c.a.bool, responsive: c.a.oneOfType([c.a.bool, c.a.string]), tag: d.m, responsiveTag: d.m, innerRef: c.a.oneOfType([c.a.func, c.a.string, c.a.object]) },
        p = function p(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.size,
          l = e.bordered,
          c = e.borderless,
          i = e.striped,
          f = e.inverse,
          p = e.dark,
          b = e.hover,
          m = e.responsive,
          h = e.tag,
          v = e.responsiveTag,
          g = e.innerRef,
          j = Object(r.a)(e, ["className", "cssModule", "size", "bordered", "borderless", "striped", "inverse", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]),
          O = Object(d.i)(u()(t, "table", !!n && "table-" + n, !!l && "table-bordered", !!c && "table-borderless", !!i && "table-striped", !(!p && !f) && "table-dark", !!b && "table-hover"), a),
          y = o.a.createElement(h, Object(s.a)({}, j, { ref: g, className: O }));if (m) {
        var E = !0 === m ? "table-responsive" : "table-responsive-" + m;return o.a.createElement(v, { className: E }, y);
      }return y;
    };p.propTypes = f, p.defaultProps = { tag: "table", responsiveTag: "div" }, t.a = p;
  }, 627: function _(e, t, a) {
    "use strict";
    a.r(t);var s = a(112),
        r = a(113),
        n = a(116),
        o = a(114),
        l = a(115),
        c = a(121),
        i = a(0),
        u = a.n(i),
        d = a(58),
        f = a(1),
        p = a.n(f),
        b = a(18),
        m = a(44),
        h = a(6),
        v = a(45),
        g = a(81),
        j = a(126),
        O = a(127),
        y = a(80),
        E = a(46),
        N = a(62),
        k = a(442);var M = function M(e) {
      var t = e.user,
          a = e.setRole,
          s = "/users/".concat(t._id);return u.a.createElement("tr", { key: t._id }, u.a.createElement("td", null, u.a.createElement(k.a, { to: s }, "".concat(t.firstName, " ").concat(t.lastName))), u.a.createElement("td", null, t.role), u.a.createElement("td", null, t.customers.length), u.a.createElement("td", null, u.a.createElement(j.a, null, u.a.createElement(O.a, { for: "developer" }, "Role"), u.a.createElement(y.a, { type: "select", name: "role", value: t.role, onChange: function onChange(e) {
          return a(e, t);
        }, id: "developer" }, u.a.createElement("option", { value: "select" }, "Select"), ["Bookkeeping", "Sales", "Pm", "DevAdmin", "Developer", "Compliance", "Admin"].map(function (e, t) {
        return u.a.createElement("option", { key: t, value: e }, e);
      })))));
    },
        R = a(365),
        z = a(596),
        w = function (e) {
      function t(e) {
        var a;return Object(s.a)(this, t), (a = Object(n.a)(this, Object(o.a)(t).call(this, e))).state = { filter: "" }, a.setRole = a.setRole.bind(Object(c.a)(Object(c.a)(a))), a.setFilter = a.setFilter.bind(Object(c.a)(Object(c.a)(a))), a.filter = a.filter.bind(Object(c.a)(Object(c.a)(a))), a;
      }return Object(l.a)(t, e), Object(r.a)(t, [{ key: "componentWillMount", value: function value() {
          this.props.users !== [] && this.props.usersActions.loadUsers();
        } }, { key: "setRole", value: function value(e, t) {
          e.preventDefault();var a = Object.assign({}, t);a.role = e.target.value, this.props.usersActions.updateUser(a);
        } }, { key: "setFilter", value: function value(e) {
          this.setState({ filter: e.target.value });
        } }, { key: "filter", value: function value(e) {
          var t = this;return this.state.filter ? e.filter(function (e) {
            return e.role === t.state.filter;
          }) : e;
        } }, { key: "render", value: function value() {
          var e = this;return u.a.createElement("div", { className: "animated fadeIn" }, u.a.createElement(m.a, null, u.a.createElement(h.a, { xl: 12 }, u.a.createElement(v.a, null, u.a.createElement(g.a, { className: "d-flex justify-content-between" }, u.a.createElement("span", null, u.a.createElement("i", { className: "fa fa-align-justify" }), " Users "), u.a.createElement(j.a, { className: "filter-form d-flex  align-items-end" }, u.a.createElement(O.a, { for: "developer", className: "mr-1" }, "Role"), u.a.createElement(y.a, { type: "select", name: "filter", value: this.state.filter, onChange: this.setFilter, id: "developer" }, u.a.createElement("option", { value: "" }, "Select"), ["Bookkeeping", "Sales", "Pm", "DevAdmin", "Developer", "Compliance", "Admin"].map(function (e, t) {
            return u.a.createElement("option", { key: t, value: e }, e);
          })))), u.a.createElement(E.a, null, u.a.createElement(N.a, { responsive: !0, hover: !0 }, u.a.createElement("thead", null, u.a.createElement("tr", null, u.a.createElement("th", { scope: "col" }, "name"), u.a.createElement("th", { scope: "col" }, "Role"), u.a.createElement("th", { scope: "col" }, "Customers #"), u.a.createElement("th", { scope: "col" }, "Select Role"))), u.a.createElement("tbody", null, this.filter(this.props.users).map(function (t, a) {
            return u.a.createElement(M, { key: a, user: t, setRole: e.setRole });
          }))))))));
        } }]), t;
    }(i.Component);w.prototypes = { users: p.a.array };t.default = Object(d.b)(function (e) {
      return { users: e.users };
    }, function (e) {
      return { usersActions: Object(b.bindActionCreators)(R, e) };
    })(function (e) {
      var t = function (t) {
        function a(e) {
          var t;return Object(s.a)(this, a), (t = Object(n.a)(this, Object(o.a)(a).call(this, e))).state = { redirect: !1 }, t;
        }return Object(l.a)(a, t), Object(r.a)(a, [{ key: "componentWillMount", value: function value() {
            this.props.auth.isAuthenticated && "Admin" !== this.props.auth.user.role && this.setState({ redirect: !0 });
          } }, { key: "render", value: function value() {
            return this.state.redirect ? u.a.createElement(z.a, { to: "/dashboard" }) : u.a.createElement(e, this.props);
          } }]), a;
      }(i.Component);return Object(d.b)(function (e) {
        return { auth: e.auth };
      }, null)(t);
    }(w));
  }, 80: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(57),
        o = a(117),
        l = a(0),
        c = a.n(l),
        i = a(1),
        u = a.n(i),
        d = a(349),
        f = a.n(d),
        p = a(350),
        b = { children: u.a.node, type: u.a.string, size: u.a.string, bsSize: u.a.string, state: Object(p.e)(u.a.string, 'Please use the props "valid" and "invalid" to indicate the state.'), valid: u.a.bool, invalid: u.a.bool, tag: p.m, innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]), static: Object(p.e)(u.a.bool, 'Please use the prop "plaintext"'), plaintext: u.a.bool, addon: u.a.bool, className: u.a.string, cssModule: u.a.object },
        m = function (e) {
      function t(t) {
        var a;return (a = e.call(this, t) || this).getRef = a.getRef.bind(Object(o.a)(Object(o.a)(a))), a.focus = a.focus.bind(Object(o.a)(Object(o.a)(a))), a;
      }Object(n.a)(t, e);var a = t.prototype;return a.getRef = function (e) {
        this.props.innerRef && this.props.innerRef(e), this.ref = e;
      }, a.focus = function () {
        this.ref && this.ref.focus();
      }, a.render = function () {
        var e = this.props,
            t = e.className,
            a = e.cssModule,
            n = e.type,
            o = e.bsSize,
            l = e.state,
            i = e.valid,
            u = e.invalid,
            d = e.tag,
            b = e.addon,
            m = e.static,
            h = e.plaintext,
            v = e.innerRef,
            g = Object(r.a)(e, ["className", "cssModule", "type", "bsSize", "state", "valid", "invalid", "tag", "addon", "static", "plaintext", "innerRef"]),
            j = ["radio", "checkbox"].indexOf(n) > -1,
            O = new RegExp("\\D", "g"),
            y = d || ("select" === n || "textarea" === n ? n : "input"),
            E = "form-control";h || m ? (E += "-plaintext", y = d || "input") : "file" === n ? E += "-file" : j && (E = b ? null : "form-check-input"), l && "undefined" === typeof i && "undefined" === typeof u && ("danger" === l ? u = !0 : "success" === l && (i = !0)), g.size && O.test(g.size) && (Object(p.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'), o = g.size, delete g.size);var N = Object(p.i)(f()(t, u && "is-invalid", i && "is-valid", !!o && "form-control-" + o, E), a);return ("input" === y || d && "function" === typeof d) && (g.type = n), !g.children || h || m || "select" === n || "string" !== typeof y || "select" === y || (Object(p.n)('Input with a type of "' + n + '" cannot have children. Please use "value"/"defaultValue" instead.'), delete g.children), c.a.createElement(y, Object(s.a)({}, g, { ref: v, className: N }));
      }, t;
    }(c.a.Component);m.propTypes = b, m.defaultProps = { type: "text" }, t.a = m;
  }, 81: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        l = a(1),
        c = a.n(l),
        i = a(349),
        u = a.n(i),
        d = a(350),
        f = { tag: d.m, className: c.a.string, cssModule: c.a.object },
        p = function p(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.tag,
          l = Object(r.a)(e, ["className", "cssModule", "tag"]),
          c = Object(d.i)(u()(t, "card-header"), a);return o.a.createElement(n, Object(s.a)({}, l, { className: c }));
    };p.propTypes = f, p.defaultProps = { tag: "div" }, t.a = p;
  } }]);
//# sourceMappingURL=20.3263b165.chunk.js.map
//# sourceMappingURL=20.3263b165.chunk.js.map