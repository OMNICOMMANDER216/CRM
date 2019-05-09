"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[29], { 620: function _(e, n, a) {
    "use strict";
    a.r(n);var t = a(0),
        r = a.n(t),
        s = r.a.lazy(function () {
      return a.e(30).then(a.bind(null, 595));
    });n.default = function (e) {
      var n = e.tasks,
          a = e.users,
          i = e.isEditingHandler,
          d = e.saveHandler,
          l = e.changeHandler,
          u = e.editActive,
          c = e.setSideTask,
          o = e.sideTask,
          k = e.removeTask;return n = n.sort(function (e, n) {
        return e._id.localeCompare(n._id);
      }), r.a.createElement(t.Fragment, null, n.map(function (e, n) {
        return r.a.createElement(s, { key: e._id + n, task: e, users: a, isEditingHandler: i, changeHandler: l, saveHandler: d, editActive: u, setSideTask: c, sideTask: o, removeTask: k });
      }));
    };
  } }]);
//# sourceMappingURL=29.38c46dd9.chunk.js.map
//# sourceMappingURL=29.38c46dd9.chunk.js.map