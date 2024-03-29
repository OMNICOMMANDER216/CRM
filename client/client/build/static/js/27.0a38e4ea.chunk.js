"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[27], { 352: function _(e, a) {
    e.exports = function (e) {
      var a = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == a || "function" == a);
    };
  }, 6: function _(e, a, t) {
    "use strict";
    var n = t(9),
        l = t(36),
        r = t(352),
        o = t.n(r),
        c = t(0),
        s = t.n(c),
        m = t(1),
        u = t.n(m),
        i = t(349),
        p = t.n(i),
        d = t(350),
        f = u.a.oneOfType([u.a.number, u.a.string]),
        E = u.a.oneOfType([u.a.bool, u.a.number, u.a.string, u.a.shape({ size: u.a.oneOfType([u.a.bool, u.a.number, u.a.string]), push: Object(d.e)(f, 'Please use the prop "order"'), pull: Object(d.e)(f, 'Please use the prop "order"'), order: f, offset: f })]),
        h = { tag: d.m, xs: E, sm: E, md: E, lg: E, xl: E, className: u.a.string, cssModule: u.a.object, widths: u.a.array },
        y = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        v = function v(e, a, t) {
      return !0 === t || "" === t ? e ? "col" : "col-" + a : "auto" === t ? e ? "col-auto" : "col-" + a + "-auto" : e ? "col-" + t : "col-" + a + "-" + t;
    },
        g = function g(e) {
      var a = e.className,
          t = e.cssModule,
          r = e.widths,
          c = e.tag,
          m = Object(l.a)(e, ["className", "cssModule", "widths", "tag"]),
          u = [];r.forEach(function (a, n) {
        var l = e[a];if (delete m[a], l || "" === l) {
          var r = !n;if (o()(l)) {
            var c,
                s = r ? "-" : "-" + a + "-",
                i = v(r, a, l.size);u.push(Object(d.i)(p()(((c = {})[i] = l.size || "" === l.size, c["order" + s + l.order] = l.order || 0 === l.order, c["offset" + s + l.offset] = l.offset || 0 === l.offset, c)), t));
          } else {
            var f = v(r, a, l);u.push(f);
          }
        }
      }), u.length || u.push("col");var i = Object(d.i)(p()(a, u), t);return s.a.createElement(c, Object(n.a)({}, m, { className: i }));
    };g.propTypes = h, g.defaultProps = y, a.a = g;
  }, 617: function _(e, a, t) {
    "use strict";
    t.r(a);var n = t(0),
        l = t.n(n),
        r = t(378),
        o = t.n(r),
        c = t(628),
        s = t(613),
        m = t(614),
        u = t(79),
        i = t(126),
        p = t(6),
        d = t(127),
        f = t(80),
        E = t(197),
        h = t(615),
        y = t(61);a.default = function (e) {
      var a = e.modalColumn,
          t = e.closeModal,
          n = e.columnHandler,
          r = e.saveColumn,
          v = e.errors;return l.a.createElement(l.a.Fragment, null, l.a.createElement(c.a, { isOpen: !o.a.isEmpty(a) }, l.a.createElement(s.a, null, "Columns"), l.a.createElement(m.a, null, l.a.createElement(u.a, null, l.a.createElement(i.a, { row: !0 }, l.a.createElement(p.a, { md: "12" }, l.a.createElement(d.a, { htmlFor: "name" }, "Title")), l.a.createElement(p.a, { xs: "12", md: "12" }, l.a.createElement(f.a, { type: "title", id: "title", name: "title", placeholder: "title", onChange: n, value: a.title }), l.a.createElement(E.a, { color: "danger" }, v && v.title))), l.a.createElement(i.a, { row: !0 }, l.a.createElement(p.a, { md: "12" }, l.a.createElement(d.a, { htmlFor: "name" }, "Column Type")), l.a.createElement(p.a, { xs: "12", md: "12" }, l.a.createElement(f.a, { type: "select", name: "type", value: a.type, onChange: n, id: "type" }, l.a.createElement("option", { value: "select" }, "Select"), ["name", "user", "date", "status", "priority", "last_updated", "date"].map(function (e, a) {
        return l.a.createElement("option", { key: a, value: e }, e);
      })), l.a.createElement(E.a, { color: "danger" }, v && v.type))))), l.a.createElement(h.a, null, l.a.createElement(y.a, { color: "primary", onClick: r }, "Save"), " ", l.a.createElement(y.a, { color: "secondary", onClick: t }, "Cancel"))));
    };
  } }]);
//# sourceMappingURL=27.0a38e4ea.chunk.js.map
//# sourceMappingURL=27.0a38e4ea.chunk.js.map