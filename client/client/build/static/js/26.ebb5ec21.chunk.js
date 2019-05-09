"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[26], { 616: function _(e, a, t) {
    "use strict";
    t.r(a);var n = t(0),
        c = t.n(n),
        l = t(126),
        m = t(6),
        r = t(127),
        o = t(80);a.default = function (e) {
      var a = e.customer,
          t = e.users,
          n = e.onChange;return c.a.createElement(c.a.Fragment, null, a.deposit && c.a.createElement(c.a.Fragment, null, c.a.createElement("h2", null, " Assignments"), c.a.createElement(l.a, { row: !0, className: "mt-3" }, c.a.createElement(m.a, { md: "3" }, c.a.createElement(r.a, { for: "pm" }, "Project Manager")), c.a.createElement(m.a, { xs: "12", md: "9" }, c.a.createElement(o.a, { type: "select", name: "pm", id: "pm", value: a.pm, onChange: n }, c.a.createElement("option", { value: "" }, "Select"), t && t.map(function (e, a) {
        return c.a.createElement("option", { key: a, value: e._id }, "".concat(e.firstName, " ").concat(e.lastName));
      })))), c.a.createElement(l.a, { row: !0 }, c.a.createElement(m.a, { md: "3" }, c.a.createElement(r.a, { for: "developer" }, "Developer")), c.a.createElement(m.a, { xs: "12", md: "9" }, c.a.createElement(o.a, { type: "select", name: "dev", id: "developer", value: a.dev, onChange: n }, c.a.createElement("option", { value: "" }, "Select"), t && t.map(function (e, a) {
        return c.a.createElement("option", { key: a, value: e._id }, "".concat(e.firstName, " ").concat(e.lastName));
      })))), c.a.createElement(l.a, { row: !0 }, c.a.createElement(m.a, { md: "3" }, c.a.createElement(r.a, { for: "developer" }, "Compliance Officer")), c.a.createElement(m.a, { xs: "12", md: "9" }, c.a.createElement(o.a, { type: "select", name: "compliance", id: "compliance", value: a.compliance, onChange: n }, c.a.createElement("option", { value: "" }, "Select"), t && t.map(function (e, a) {
        return c.a.createElement("option", { key: a, value: e._id }, "".concat(e.firstName, " ").concat(e.lastName));
      })))), c.a.createElement(l.a, { row: !0 }, c.a.createElement(m.a, { md: "3" }, c.a.createElement(r.a, { for: "QA" }, "QA Officer")), c.a.createElement(m.a, { xs: "12", md: "9" }, c.a.createElement(o.a, { type: "select", name: "QA", id: "QA", value: a.QA, onChange: n }, c.a.createElement("option", { value: "" }, "Select"), t && t.map(function (e, a) {
        return c.a.createElement("option", { key: a, value: e._id }, "".concat(e.firstName, " ").concat(e.lastName));
      }))))));
    };
  } }]);
//# sourceMappingURL=26.ebb5ec21.chunk.js.map
//# sourceMappingURL=26.ebb5ec21.chunk.js.map