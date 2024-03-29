"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[21], { 195: function _(e, a, t) {
    "use strict";
    var s = t(9),
        r = t(36),
        n = t(0),
        o = t.n(n),
        c = t(1),
        l = t.n(c),
        i = t(349),
        u = t.n(i),
        m = t(350),
        d = { tag: m.m, flush: l.a.bool, className: l.a.string, cssModule: l.a.object },
        b = function b(e) {
      var a = e.className,
          t = e.cssModule,
          n = e.tag,
          c = e.flush,
          l = Object(r.a)(e, ["className", "cssModule", "tag", "flush"]),
          i = Object(m.i)(u()(a, "list-group", !!c && "list-group-flush"), t);return o.a.createElement(n, Object(s.a)({}, l, { className: i }));
    };b.propTypes = d, b.defaultProps = { tag: "ul" }, a.a = b;
  }, 196: function _(e, a, t) {
    "use strict";
    var s = t(9),
        r = t(36),
        n = t(0),
        o = t.n(n),
        c = t(1),
        l = t.n(c),
        i = t(349),
        u = t.n(i),
        m = t(350),
        d = { tag: m.m, active: l.a.bool, disabled: l.a.bool, color: l.a.string, action: l.a.bool, className: l.a.any, cssModule: l.a.object },
        b = function b(e) {
      e.preventDefault();
    },
        f = function f(e) {
      var a = e.className,
          t = e.cssModule,
          n = e.tag,
          c = e.active,
          l = e.disabled,
          i = e.action,
          d = e.color,
          f = Object(r.a)(e, ["className", "cssModule", "tag", "active", "disabled", "action", "color"]),
          p = Object(m.i)(u()(a, !!c && "active", !!l && "disabled", !!i && "list-group-item-action", !!d && "list-group-item-" + d, "list-group-item"), t);return l && (f.onClick = b), o.a.createElement(n, Object(s.a)({}, f, { className: p }));
    };f.propTypes = d, f.defaultProps = { tag: "li" }, a.a = f;
  }, 352: function _(e, a) {
    e.exports = function (e) {
      var a = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == a || "function" == a);
    };
  }, 359: function _(e, a, t) {
    "use strict";
    a.a = function (e) {
      return "Live" === e ? "success" : "QA" === e ? "secondary" : "Assigned" === e ? "warning" : "Paid" === e ? "primary" : "Low" === e ? "primary" : "Medium" === e ? "secondary" : "High" === e ? "warning" : "Urgent" === e ? "danger" : "Stuck" === e ? "danger" : "Working on it" === e ? "info" : "Waiting for review" === e ? "primary" : "Waiting on Client" === e ? "warning" : "Done" === e ? "secondary" : "Approved" === e ? "success" : "";
    };
  }, 44: function _(e, a, t) {
    "use strict";
    var s = t(9),
        r = t(36),
        n = t(0),
        o = t.n(n),
        c = t(1),
        l = t.n(c),
        i = t(349),
        u = t.n(i),
        m = t(350),
        d = { tag: m.m, noGutters: l.a.bool, className: l.a.string, cssModule: l.a.object, form: l.a.bool },
        b = function b(e) {
      var a = e.className,
          t = e.cssModule,
          n = e.noGutters,
          c = e.tag,
          l = e.form,
          i = Object(r.a)(e, ["className", "cssModule", "noGutters", "tag", "form"]),
          d = Object(m.i)(u()(a, n ? "no-gutters" : null, l ? "form-row" : "row"), t);return o.a.createElement(c, Object(s.a)({}, i, { className: d }));
    };b.propTypes = d, b.defaultProps = { tag: "div" }, a.a = b;
  }, 45: function _(e, a, t) {
    "use strict";
    var s = t(9),
        r = t(36),
        n = t(0),
        o = t.n(n),
        c = t(1),
        l = t.n(c),
        i = t(349),
        u = t.n(i),
        m = t(350),
        d = { tag: m.m, inverse: l.a.bool, color: l.a.string, block: Object(m.e)(l.a.bool, 'Please use the props "body"'), body: l.a.bool, outline: l.a.bool, className: l.a.string, cssModule: l.a.object, innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func]) },
        b = function b(e) {
      var a = e.className,
          t = e.cssModule,
          n = e.color,
          c = e.block,
          l = e.body,
          i = e.inverse,
          d = e.outline,
          b = e.tag,
          f = e.innerRef,
          p = Object(r.a)(e, ["className", "cssModule", "color", "block", "body", "inverse", "outline", "tag", "innerRef"]),
          g = Object(m.i)(u()(a, "card", !!i && "text-white", !(!c && !l) && "card-body", !!n && (d ? "border" : "bg") + "-" + n), t);return o.a.createElement(b, Object(s.a)({}, p, { className: g, ref: f }));
    };b.propTypes = d, b.defaultProps = { tag: "div" }, a.a = b;
  }, 46: function _(e, a, t) {
    "use strict";
    var s = t(9),
        r = t(36),
        n = t(0),
        o = t.n(n),
        c = t(1),
        l = t.n(c),
        i = t(349),
        u = t.n(i),
        m = t(350),
        d = { tag: m.m, className: l.a.string, cssModule: l.a.object, innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func]) },
        b = function b(e) {
      var a = e.className,
          t = e.cssModule,
          n = e.innerRef,
          c = e.tag,
          l = Object(r.a)(e, ["className", "cssModule", "innerRef", "tag"]),
          i = Object(m.i)(u()(a, "card-body"), t);return o.a.createElement(c, Object(s.a)({}, l, { className: i, ref: n }));
    };b.propTypes = d, b.defaultProps = { tag: "div" }, a.a = b;
  }, 6: function _(e, a, t) {
    "use strict";
    var s = t(9),
        r = t(36),
        n = t(352),
        o = t.n(n),
        c = t(0),
        l = t.n(c),
        i = t(1),
        u = t.n(i),
        m = t(349),
        d = t.n(m),
        b = t(350),
        f = u.a.oneOfType([u.a.number, u.a.string]),
        p = u.a.oneOfType([u.a.bool, u.a.number, u.a.string, u.a.shape({ size: u.a.oneOfType([u.a.bool, u.a.number, u.a.string]), push: Object(b.e)(f, 'Please use the prop "order"'), pull: Object(b.e)(f, 'Please use the prop "order"'), order: f, offset: f })]),
        g = { tag: b.m, xs: p, sm: p, md: p, lg: p, xl: p, className: u.a.string, cssModule: u.a.object, widths: u.a.array },
        v = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        j = function j(e, a, t) {
      return !0 === t || "" === t ? e ? "col" : "col-" + a : "auto" === t ? e ? "col-auto" : "col-" + a + "-auto" : e ? "col-" + t : "col-" + a + "-" + t;
    },
        E = function E(e) {
      var a = e.className,
          t = e.cssModule,
          n = e.widths,
          c = e.tag,
          i = Object(r.a)(e, ["className", "cssModule", "widths", "tag"]),
          u = [];n.forEach(function (a, s) {
        var r = e[a];if (delete i[a], r || "" === r) {
          var n = !s;if (o()(r)) {
            var c,
                l = n ? "-" : "-" + a + "-",
                m = j(n, a, r.size);u.push(Object(b.i)(d()(((c = {})[m] = r.size || "" === r.size, c["order" + l + r.order] = r.order || 0 === r.order, c["offset" + l + r.offset] = r.offset || 0 === r.offset, c)), t));
          } else {
            var f = j(n, a, r);u.push(f);
          }
        }
      }), u.length || u.push("col");var m = Object(b.i)(d()(a, u), t);return l.a.createElement(c, Object(s.a)({}, i, { className: m }));
    };E.propTypes = g, E.defaultProps = v, a.a = E;
  }, 62: function _(e, a, t) {
    "use strict";
    var s = t(9),
        r = t(36),
        n = t(0),
        o = t.n(n),
        c = t(1),
        l = t.n(c),
        i = t(349),
        u = t.n(i),
        m = t(350),
        d = { className: l.a.string, cssModule: l.a.object, size: l.a.string, bordered: l.a.bool, borderless: l.a.bool, striped: l.a.bool, inverse: Object(m.e)(l.a.bool, 'Please use the prop "dark"'), dark: l.a.bool, hover: l.a.bool, responsive: l.a.oneOfType([l.a.bool, l.a.string]), tag: m.m, responsiveTag: m.m, innerRef: l.a.oneOfType([l.a.func, l.a.string, l.a.object]) },
        b = function b(e) {
      var a = e.className,
          t = e.cssModule,
          n = e.size,
          c = e.bordered,
          l = e.borderless,
          i = e.striped,
          d = e.inverse,
          b = e.dark,
          f = e.hover,
          p = e.responsive,
          g = e.tag,
          v = e.responsiveTag,
          j = e.innerRef,
          E = Object(r.a)(e, ["className", "cssModule", "size", "bordered", "borderless", "striped", "inverse", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]),
          N = Object(m.i)(u()(a, "table", !!n && "table-" + n, !!c && "table-bordered", !!l && "table-borderless", !!i && "table-striped", !(!b && !d) && "table-dark", !!f && "table-hover"), t),
          O = o.a.createElement(g, Object(s.a)({}, E, { ref: j, className: N }));if (p) {
        var h = !0 === p ? "table-responsive" : "table-responsive-" + p;return o.a.createElement(v, { className: h }, O);
      }return O;
    };b.propTypes = d, b.defaultProps = { tag: "table", responsiveTag: "div" }, a.a = b;
  }, 630: function _(e, a, t) {
    "use strict";
    t.r(a);var s = t(112),
        r = t(113),
        n = t(116),
        o = t(114),
        c = t(115),
        l = t(0),
        i = t.n(l),
        u = t(58),
        m = t(442),
        d = t(44),
        b = t(6),
        f = t(45),
        p = t(81),
        g = t(9),
        v = t(36),
        j = t(1),
        E = t.n(j),
        N = t(349),
        O = t.n(N),
        h = t(350),
        y = { tag: h.m, top: E.a.bool, bottom: E.a.bool, className: E.a.string, cssModule: E.a.object },
        M = function M(e) {
      var a = e.className,
          t = e.cssModule,
          s = e.top,
          r = e.bottom,
          n = e.tag,
          o = Object(v.a)(e, ["className", "cssModule", "top", "bottom", "tag"]),
          c = "card-img";s && (c = "card-img-top"), r && (c = "card-img-bottom");var l = Object(h.i)(O()(a, c), t);return i.a.createElement(n, Object(g.a)({}, o, { className: l }));
    };M.propTypes = y, M.defaultProps = { tag: "img" };var w = M,
        T = t(46),
        P = t(195),
        k = t(196),
        R = t(62),
        x = t(602),
        z = t(359),
        A = function (e) {
      function a() {
        return Object(s.a)(this, a), Object(n.a)(this, Object(o.a)(a).apply(this, arguments));
      }return Object(c.a)(a, e), Object(r.a)(a, [{ key: "render", value: function value() {
          var e = this.props.user;return i.a.createElement("div", { className: "animated fadeIn" }, e && i.a.createElement(d.a, null, i.a.createElement(b.a, { className: "d-flex justify-content-center", lg: 3 }, i.a.createElement(f.a, null, i.a.createElement(p.a, null, i.a.createElement(w, { top: !0, width: "20%", src: e.image, "aria-label": "User Profile Picture", alt: "User Profile" })), i.a.createElement(T.a, null, i.a.createElement(P.a, { flush: !0 }, i.a.createElement(k.a, { tag: "a", href: "#" }, i.a.createElement("strong", null, "Name:"), " ", "".concat(e.firstName, " ").concat(e.lastName)), i.a.createElement(k.a, { tag: "a", href: "#" }, i.a.createElement("strong", null, "Role:"), " ", e.role), i.a.createElement(k.a, { tag: "a", href: "#" }, i.a.createElement("strong", null, "Number of Projects: "), " ", e.customers && e.customers.length))))), i.a.createElement(b.a, { lg: 9 }, i.a.createElement(f.a, null, i.a.createElement(p.a, null, i.a.createElement("h2", { className: "text-center" }, " List of Projects")), i.a.createElement(T.a, null, i.a.createElement(R.a, { responsive: !0, hover: !0 }, i.a.createElement("thead", null, i.a.createElement("tr", null, i.a.createElement("td", null, "#"), i.a.createElement("td", null, "Name"), i.a.createElement("td", null, "Status"), i.a.createElement("td", null, "View"))), i.a.createElement("tbody", null, e.customers && e.customers.map(function (e, a) {
            return i.a.createElement("tr", { key: a }, i.a.createElement("td", null, a + 1), i.a.createElement("td", null, e.name), i.a.createElement("td", null, i.a.createElement(x.a, { color: Object(z.a)(e.status) }, e.status)), i.a.createElement("td", null, i.a.createElement(m.a, { to: "/customers/".concat(e._id) }, i.a.createElement("i", { className: "fa fa-eye" }))));
          }))))))));
        } }]), a;
    }(l.Component);a.default = Object(u.b)(function (e, a) {
      return { user: e.users.find(function (e) {
          return e._id === a.match.params.id;
        }) };
    }, null)(A);
  }, 81: function _(e, a, t) {
    "use strict";
    var s = t(9),
        r = t(36),
        n = t(0),
        o = t.n(n),
        c = t(1),
        l = t.n(c),
        i = t(349),
        u = t.n(i),
        m = t(350),
        d = { tag: m.m, className: l.a.string, cssModule: l.a.object },
        b = function b(e) {
      var a = e.className,
          t = e.cssModule,
          n = e.tag,
          c = Object(r.a)(e, ["className", "cssModule", "tag"]),
          l = Object(m.i)(u()(a, "card-header"), t);return o.a.createElement(n, Object(s.a)({}, c, { className: l }));
    };b.propTypes = d, b.defaultProps = { tag: "div" }, a.a = b;
  } }]);
//# sourceMappingURL=21.28de7b72.chunk.js.map
//# sourceMappingURL=21.28de7b72.chunk.js.map