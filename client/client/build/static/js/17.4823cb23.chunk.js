"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[17], { 352: function _(e, t) {
    e.exports = function (e) {
      var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
    };
  }, 359: function _(e, t, a) {
    "use strict";
    t.a = function (e) {
      return "Live" === e ? "success" : "QA" === e ? "secondary" : "Assigned" === e ? "warning" : "Paid" === e ? "primary" : "Low" === e ? "primary" : "Medium" === e ? "secondary" : "High" === e ? "warning" : "Urgent" === e ? "danger" : "Stuck" === e ? "danger" : "Working on it" === e ? "info" : "Waiting for review" === e ? "primary" : "Waiting on Client" === e ? "warning" : "Done" === e ? "secondary" : "Approved" === e ? "success" : "";
    };
  }, 44: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        c = a(1),
        l = a.n(c),
        i = a(349),
        u = a.n(i),
        d = a(350),
        m = { tag: d.m, noGutters: l.a.bool, className: l.a.string, cssModule: l.a.object, form: l.a.bool },
        f = function f(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.noGutters,
          c = e.tag,
          l = e.form,
          i = Object(r.a)(e, ["className", "cssModule", "noGutters", "tag", "form"]),
          m = Object(d.i)(u()(t, n ? "no-gutters" : null, l ? "form-row" : "row"), a);return o.a.createElement(c, Object(s.a)({}, i, { className: m }));
    };f.propTypes = m, f.defaultProps = { tag: "div" }, t.a = f;
  }, 45: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        c = a(1),
        l = a.n(c),
        i = a(349),
        u = a.n(i),
        d = a(350),
        m = { tag: d.m, inverse: l.a.bool, color: l.a.string, block: Object(d.e)(l.a.bool, 'Please use the props "body"'), body: l.a.bool, outline: l.a.bool, className: l.a.string, cssModule: l.a.object, innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func]) },
        f = function f(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.color,
          c = e.block,
          l = e.body,
          i = e.inverse,
          m = e.outline,
          f = e.tag,
          p = e.innerRef,
          b = Object(r.a)(e, ["className", "cssModule", "color", "block", "body", "inverse", "outline", "tag", "innerRef"]),
          g = Object(d.i)(u()(t, "card", !!i && "text-white", !(!c && !l) && "card-body", !!n && (m ? "border" : "bg") + "-" + n), a);return o.a.createElement(f, Object(s.a)({}, b, { className: g, ref: p }));
    };f.propTypes = m, f.defaultProps = { tag: "div" }, t.a = f;
  }, 46: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        c = a(1),
        l = a.n(c),
        i = a(349),
        u = a.n(i),
        d = a(350),
        m = { tag: d.m, className: l.a.string, cssModule: l.a.object, innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func]) },
        f = function f(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.innerRef,
          c = e.tag,
          l = Object(r.a)(e, ["className", "cssModule", "innerRef", "tag"]),
          i = Object(d.i)(u()(t, "card-body"), a);return o.a.createElement(c, Object(s.a)({}, l, { className: i, ref: n }));
    };f.propTypes = m, f.defaultProps = { tag: "div" }, t.a = f;
  }, 6: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(352),
        o = a.n(n),
        c = a(0),
        l = a.n(c),
        i = a(1),
        u = a.n(i),
        d = a(349),
        m = a.n(d),
        f = a(350),
        p = u.a.oneOfType([u.a.number, u.a.string]),
        b = u.a.oneOfType([u.a.bool, u.a.number, u.a.string, u.a.shape({ size: u.a.oneOfType([u.a.bool, u.a.number, u.a.string]), push: Object(f.e)(p, 'Please use the prop "order"'), pull: Object(f.e)(p, 'Please use the prop "order"'), order: p, offset: p })]),
        g = { tag: f.m, xs: b, sm: b, md: b, lg: b, xl: b, className: u.a.string, cssModule: u.a.object, widths: u.a.array },
        v = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        h = function h(e, t, a) {
      return !0 === a || "" === a ? e ? "col" : "col-" + t : "auto" === a ? e ? "col-auto" : "col-" + t + "-auto" : e ? "col-" + a : "col-" + t + "-" + a;
    },
        j = function j(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.widths,
          c = e.tag,
          i = Object(r.a)(e, ["className", "cssModule", "widths", "tag"]),
          u = [];n.forEach(function (t, s) {
        var r = e[t];if (delete i[t], r || "" === r) {
          var n = !s;if (o()(r)) {
            var c,
                l = n ? "-" : "-" + t + "-",
                d = h(n, t, r.size);u.push(Object(f.i)(m()(((c = {})[d] = r.size || "" === r.size, c["order" + l + r.order] = r.order || 0 === r.order, c["offset" + l + r.offset] = r.offset || 0 === r.offset, c)), a));
          } else {
            var p = h(n, t, r);u.push(p);
          }
        }
      }), u.length || u.push("col");var d = Object(f.i)(m()(t, u), a);return l.a.createElement(c, Object(s.a)({}, i, { className: d }));
    };j.propTypes = g, j.defaultProps = v, t.a = j;
  }, 62: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        c = a(1),
        l = a.n(c),
        i = a(349),
        u = a.n(i),
        d = a(350),
        m = { className: l.a.string, cssModule: l.a.object, size: l.a.string, bordered: l.a.bool, borderless: l.a.bool, striped: l.a.bool, inverse: Object(d.e)(l.a.bool, 'Please use the prop "dark"'), dark: l.a.bool, hover: l.a.bool, responsive: l.a.oneOfType([l.a.bool, l.a.string]), tag: d.m, responsiveTag: d.m, innerRef: l.a.oneOfType([l.a.func, l.a.string, l.a.object]) },
        f = function f(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.size,
          c = e.bordered,
          l = e.borderless,
          i = e.striped,
          m = e.inverse,
          f = e.dark,
          p = e.hover,
          b = e.responsive,
          g = e.tag,
          v = e.responsiveTag,
          h = e.innerRef,
          j = Object(r.a)(e, ["className", "cssModule", "size", "bordered", "borderless", "striped", "inverse", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]),
          E = Object(d.i)(u()(t, "table", !!n && "table-" + n, !!c && "table-bordered", !!l && "table-borderless", !!i && "table-striped", !(!f && !m) && "table-dark", !!p && "table-hover"), a),
          O = o.a.createElement(g, Object(s.a)({}, j, { ref: h, className: E }));if (b) {
        var y = !0 === b ? "table-responsive" : "table-responsive-" + b;return o.a.createElement(v, { className: y }, O);
      }return O;
    };f.propTypes = m, f.defaultProps = { tag: "table", responsiveTag: "div" }, t.a = f;
  }, 636: function _(e, t, a) {
    "use strict";
    a.r(t);var s = a(112),
        r = a(113),
        n = a(116),
        o = a(114),
        c = a(115),
        l = a(0),
        i = a.n(l),
        u = a(58),
        d = a(18),
        m = a(604),
        f = a(44),
        p = a(6),
        b = a(45),
        g = a(81),
        v = a(80),
        h = a(46),
        j = a(62),
        E = a(367),
        O = a(442),
        y = a(602),
        N = a(359);var x = function x(e) {
      var t = e.customer,
          a = e.deleteCustomer,
          s = e.isAdmin,
          r = e.isBookkeeping;return i.a.createElement("tr", { key: t._id }, i.a.createElement("td", null, i.a.createElement(O.a, { to: "/customers/".concat(t._id) }, t.name)), i.a.createElement("td", null, i.a.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://".concat(t.url) }, t.url)), i.a.createElement("td", null, t.services.toString()), i.a.createElement("td", null, i.a.createElement(O.a, { to: "{userLink}" }, i.a.createElement(y.a, { color: Object(N.a)(t.status) }, t.status))), i.a.createElement("td", { className: "text-center" }, i.a.createElement(O.a, { to: "/customers/".concat(t._id) }, i.a.createElement("i", { className: "fa fa-eye" }))), (s || r) && i.a.createElement("td", { className: "text-center" }, i.a.createElement(O.a, { to: { pathname: "/customer/edit/".concat(t._id), state: { customer: t } } }, i.a.createElement("i", { className: "fa fa-edit" }))), s && i.a.createElement("td", { className: "text-center" }, i.a.createElement("a", { href: "/customer", onClick: function onClick(e) {
          return a(e, t._id);
        } }, i.a.createElement("i", { className: "fa fa-trash" }))));
    },
        k = a(384),
        w = function (e) {
      function t(e) {
        var a;return Object(s.a)(this, t), (a = Object(n.a)(this, Object(o.a)(t).call(this, e))).deleteCustomer = function (e, t) {
          e.preventDefault(), a.props.customersActions.deleteCustomer(t);
        }, a.search = function (e) {
          a.setState({ search: e.target.value.toLowerCase() });
        }, a.state = { search: "" }, a;
      }return Object(c.a)(t, e), Object(r.a)(t, [{ key: "render", value: function value() {
          var e = this,
              t = "Admin" === this.props.currentUser.role,
              a = "Bookkeeping" === this.props.currentUser.role,
              s = this.props.customers;return s = s.filter(function (t) {
            return t.name.toLowerCase().includes(e.state.search);
          }), this.state.redirect ? i.a.createElement(m.a, { to: "/customers" }) : s ? i.a.createElement("div", { className: "animated fadeIn" }, i.a.createElement(f.a, null, i.a.createElement(p.a, { xl: 12 }, i.a.createElement(b.a, null, i.a.createElement(g.a, null, i.a.createElement(f.a, null, i.a.createElement(p.a, { xs: "4" }, i.a.createElement("i", { className: "fa fa-align-justify" }), " Customers"), i.a.createElement(p.a, { xs: "4" }, i.a.createElement(v.a, { name: "search", value: this.state.search, onChange: this.search, placeholder: "Search" })), (t || a) && i.a.createElement(p.a, { xs: "4", className: "d-flex justify-content-end" }, i.a.createElement("button", { className: "oc-btn" }, i.a.createElement(O.a, { to: "/customer/add" }, "Add New Customer"))))), i.a.createElement(h.a, null, i.a.createElement(j.a, { responsive: !0, hover: !0 }, i.a.createElement("thead", null, i.a.createElement("tr", null, i.a.createElement("th", { scope: "col" }, "Name"), i.a.createElement("th", { scope: "col" }, "Url"), i.a.createElement("th", { scope: "col" }, "Services"), i.a.createElement("th", { scope: "col" }, "Status"), i.a.createElement("th", { scope: "col", className: "text-center" }, "View"), (t || a) && i.a.createElement("th", { scope: "col", className: "text-center" }, "Edit"), t && i.a.createElement("th", { scope: "col", className: "text-center" }, "Remove"))), i.a.createElement("tbody", null, s.map(function (s, r) {
            return i.a.createElement(x, { key: r, customer: s, deleteCustomer: e.deleteCustomer, isAdmin: t, isBookkeeping: a });
          })))))))) : void 0;
        } }]), t;
    }(l.Component);t.default = Object(u.b)(function (e) {
      return { customers: e.customers, currentUser: e.auth.user };
    }, function (e) {
      return { customersActions: Object(d.bindActionCreators)(E, e) };
    })(Object(k.a)(w));
  }, 80: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(57),
        o = a(117),
        c = a(0),
        l = a.n(c),
        i = a(1),
        u = a.n(i),
        d = a(349),
        m = a.n(d),
        f = a(350),
        p = { children: u.a.node, type: u.a.string, size: u.a.string, bsSize: u.a.string, state: Object(f.e)(u.a.string, 'Please use the props "valid" and "invalid" to indicate the state.'), valid: u.a.bool, invalid: u.a.bool, tag: f.m, innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]), static: Object(f.e)(u.a.bool, 'Please use the prop "plaintext"'), plaintext: u.a.bool, addon: u.a.bool, className: u.a.string, cssModule: u.a.object },
        b = function (e) {
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
            c = e.state,
            i = e.valid,
            u = e.invalid,
            d = e.tag,
            p = e.addon,
            b = e.static,
            g = e.plaintext,
            v = e.innerRef,
            h = Object(r.a)(e, ["className", "cssModule", "type", "bsSize", "state", "valid", "invalid", "tag", "addon", "static", "plaintext", "innerRef"]),
            j = ["radio", "checkbox"].indexOf(n) > -1,
            E = new RegExp("\\D", "g"),
            O = d || ("select" === n || "textarea" === n ? n : "input"),
            y = "form-control";g || b ? (y += "-plaintext", O = d || "input") : "file" === n ? y += "-file" : j && (y = p ? null : "form-check-input"), c && "undefined" === typeof i && "undefined" === typeof u && ("danger" === c ? u = !0 : "success" === c && (i = !0)), h.size && E.test(h.size) && (Object(f.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'), o = h.size, delete h.size);var N = Object(f.i)(m()(t, u && "is-invalid", i && "is-valid", !!o && "form-control-" + o, y), a);return ("input" === O || d && "function" === typeof d) && (h.type = n), !h.children || g || b || "select" === n || "string" !== typeof O || "select" === O || (Object(f.n)('Input with a type of "' + n + '" cannot have children. Please use "value"/"defaultValue" instead.'), delete h.children), l.a.createElement(O, Object(s.a)({}, h, { ref: v, className: N }));
      }, t;
    }(l.a.Component);b.propTypes = p, b.defaultProps = { type: "text" }, t.a = b;
  }, 81: function _(e, t, a) {
    "use strict";
    var s = a(9),
        r = a(36),
        n = a(0),
        o = a.n(n),
        c = a(1),
        l = a.n(c),
        i = a(349),
        u = a.n(i),
        d = a(350),
        m = { tag: d.m, className: l.a.string, cssModule: l.a.object },
        f = function f(e) {
      var t = e.className,
          a = e.cssModule,
          n = e.tag,
          c = Object(r.a)(e, ["className", "cssModule", "tag"]),
          l = Object(d.i)(u()(t, "card-header"), a);return o.a.createElement(n, Object(s.a)({}, c, { className: l }));
    };f.propTypes = m, f.defaultProps = { tag: "div" }, t.a = f;
  } }]);
//# sourceMappingURL=17.4823cb23.chunk.js.map
//# sourceMappingURL=17.4823cb23.chunk.js.map