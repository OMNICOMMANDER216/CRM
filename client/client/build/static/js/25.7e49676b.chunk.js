"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[25], { 612: function _(e, a, t) {
    "use strict";
    t.r(a);var n = t(0),
        l = t.n(n),
        r = t(378),
        m = t.n(r),
        c = t(61),
        o = t(628),
        d = t(613),
        E = t(614),
        s = t(79),
        i = t(126),
        p = t(6),
        u = t(127),
        w = t(80),
        g = t(197),
        h = t(615);a.default = function (e) {
      var a = e.modalNote,
          t = e.closeModal,
          n = e.openModal,
          r = e.noteHandler,
          C = e.saveNote,
          v = e.errors;return l.a.createElement(l.a.Fragment, null, l.a.createElement(c.a, { color: "danger", className: "FloatingBtn", onClick: n }, l.a.createElement("i", { className: "fa fa-plus" })), l.a.createElement(o.a, { isOpen: !m.a.isEmpty(a) }, l.a.createElement(d.a, null, "Notes"), l.a.createElement(E.a, null, l.a.createElement(s.a, null, l.a.createElement(i.a, { row: !0 }, l.a.createElement(p.a, { md: "12" }, l.a.createElement(u.a, { htmlFor: "name" }, "Title")), l.a.createElement(p.a, { xs: "12", md: "12" }, l.a.createElement(w.a, { type: "date", id: "date", name: "date", placeholder: "Date", onChange: r, value: a.date }), l.a.createElement(g.a, { color: "danger" }, v && v.date))), l.a.createElement(i.a, { row: !0 }, l.a.createElement(p.a, { md: "12" }, l.a.createElement(u.a, { htmlFor: "name" }, "Comment")), l.a.createElement(p.a, { xs: "12", md: "12" }, l.a.createElement(w.a, { type: "textarea", id: "comment", name: "comment", placeholder: "Note comment", onChange: r, value: a.comment }), l.a.createElement(g.a, { color: "danger" }, v && v.comment))))), l.a.createElement(h.a, null, l.a.createElement(c.a, { color: "primary", onClick: C }, "Save"), " ", l.a.createElement(c.a, { color: "secondary", onClick: t }, "Cancel"))));
    };
  } }]);
//# sourceMappingURL=25.7e49676b.chunk.js.map
//# sourceMappingURL=25.7e49676b.chunk.js.map