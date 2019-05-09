"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[30], { 359: function _(e, a, t) {
    "use strict";
    a.a = function (e) {
      return "Live" === e ? "success" : "QA" === e ? "secondary" : "Assigned" === e ? "warning" : "Paid" === e ? "primary" : "Low" === e ? "primary" : "Medium" === e ? "secondary" : "High" === e ? "warning" : "Urgent" === e ? "danger" : "Stuck" === e ? "danger" : "Working on it" === e ? "info" : "Waiting for review" === e ? "primary" : "Waiting on Client" === e ? "warning" : "Done" === e ? "secondary" : "Approved" === e ? "success" : "";
    };
  }, 595: function _(e, a, t) {
    "use strict";
    t.r(a);var n = t(0),
        i = t.n(n),
        r = t(80),
        c = t(602),
        l = function l(e) {
      return "name" === e ? "text" : "user" === e || "status" === e || "priority" === e ? "select" : "user" === e ? "select" : "last_updated" === e || "date" === e ? "date" : void 0;
    },
        d = t(359),
        s = t(383),
        o = t(188),
        m = t.n(o);a.default = function (e) {
      var a = e.task,
          t = e.users,
          o = e.isEditingHandler,
          u = e.saveHandler,
          p = e.changeHandler,
          y = e.editActive,
          v = e.setSideTask,
          E = e.sideTask,
          f = e.removeTask;return i.a.createElement(n.Fragment, null, i.a.createElement("tr", { className: "active" }, i.a.createElement("td", { className: "edit" }, y._id !== a._id && i.a.createElement("button", { type: "submit", onClick: function onClick() {
          return o(a);
        }, size: "md", color: "primary", className: "m-2" }, i.a.createElement("i", { className: "fa fa-pencil" })), y._id === a._id && i.a.createElement("button", { type: "submit", onClick: u, size: "md", color: "primary", className: "m-2" }, i.a.createElement("i", { className: "fa fa-save" })), i.a.createElement("button", { type: "submit", onClick: function onClick() {
          return f(a);
        }, size: "md", color: "primary", className: "m-2" }, i.a.createElement("i", { className: "fa fa-trash" })), m()(y) && i.a.createElement(s.b, { className: "d-md-down-none", disabled: !m()(E) && E._id !== a._id }, i.a.createElement("i", { onClick: function onClick() {
          return v(a);
        }, className: "fa fa-eye" }))), a.column && a.column.map(function (e, n) {
        return function (e, a, t, n, s, o) {
          return "name" === t.dataType || "last_updated" === t.dataType || "date" === t.dataType ? i.a.createElement("td", { key: e }, i.a.createElement(r.a, { type: l(t.dataType), id: t._id, name: e, placeholder: t.title, disabled: n, value: t.value || void 0, onChange: o })) : "status" === t.dataType ? i.a.createElement("td", { key: e }, i.a.createElement(c.a, { color: Object(d.a)(t.value) }, i.a.createElement(r.a, { type: l(t.dataType), name: e, id: t._id, disabled: n, onChange: o, value: t.value }, i.a.createElement("option", { value: "" }), ["Stuck", "Working on it", "Waiting for review", "Waiting on Client", "Done", "Approved"].map(function (e) {
            return i.a.createElement("option", { value: e, key: e }, e);
          })))) : "priority" === t.dataType ? i.a.createElement("td", { key: e }, i.a.createElement(c.a, { color: Object(d.a)(t.value) }, i.a.createElement(r.a, { type: l(t.dataType), name: e, id: t._id, disabled: n, onChange: o, value: t.value }, i.a.createElement("option", { value: "" }), ["Low", "Medium", "High", "Urgent"].map(function (e) {
            return i.a.createElement("option", { value: e, key: e }, e);
          })))) : "user" === t.dataType ? i.a.createElement("td", { key: e }, i.a.createElement("span", { className: "select-td" }, i.a.createElement("img", { src: "https://picsum.photos/200/300", alt: "Smiley face", width: "35", height: "35" }), i.a.createElement(r.a, { type: l(t.dataType), name: e, id: t._id, disabled: n, onChange: o, value: t.value }, i.a.createElement("option", { value: "" }), a.map(function (e) {
            return i.a.createElement("option", { value: e._id, key: e._id }, e.firstName);
          })))) : void 0;
        }(n, t, e, y._id !== a._id, 0, p);
      })), i.a.createElement("tr", { className: "spacer" }));
    };
  } }]);
//# sourceMappingURL=30.4a71a1c3.chunk.js.map
//# sourceMappingURL=30.4a71a1c3.chunk.js.map