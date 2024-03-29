"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[7], { 120: function _(t, e, n) {
    "use strict";
    e.a = function () {
      return localStorage.getItem("jwtToken");
    };
  }, 129: function _(t, e, n) {
    "use strict";
    n.r(e);var a = n(3),
        r = n(5),
        o = n.n(r),
        c = { loadFolders: function loadFolders() {
        return o.a.get("/api/folders").then(function (t) {
          return t.data;
        });
      } },
        u = n(56);function i(t) {
      return { type: a.a.LOAD_FOLDERS_SUCCESS, folders: t };
    }function d(t) {
      return { type: a.a.ADD_BOARD, folder: t };
    }function s(t) {
      return { type: a.a.UPDATE_BOARD, folder: t };
    }function l(t) {
      return { type: a.a.REMOVE_BOARD, folder: t };
    }function E(t) {
      return { type: a.a.LOAD_FOLDERS_FAILED, message: t };
    }function S(t) {
      return { type: a.a.LOAD_FOLDERS_FAILED, message: t };
    }function f() {
      return function (t) {
        try {
          c.loadFolders().then(function (e) {
            return t(i(e.data));
          });
        } catch (e) {
          return t(E(e.message));
        }
      };
    }function _(t) {
      return function (e) {
        try {
          u.a.addBoard(t).then(function (t) {
            return e(d(t.data));
          });
        } catch (n) {
          return e(E(n.message));
        }
      };
    }function A(t) {
      return function (e) {
        try {
          u.a.updateBoard(t).then(function (t) {
            return e(s(t.data));
          });
        } catch (n) {
          return e(E(n.message));
        }
      };
    }function C(t) {
      return function (e) {
        try {
          u.a.deleteBoardById(t._id).then(function (t) {
            return e(l(t.data));
          });
        } catch (n) {
          return e(E(n.message));
        }
      };
    }function p(t, e) {
      return function (n) {
        try {
          u.a.moveBoard(t, e).then(function (t) {
            return n(i(t.data));
          });
        } catch (a) {
          return n(E(a.message));
        }
      };
    }n.d(e, "loadFoldersSuccess", function () {
      return i;
    }), n.d(e, "addBoardSuccess", function () {
      return d;
    }), n.d(e, "updateBoardSuccess", function () {
      return s;
    }), n.d(e, "deleteBoardSuccess", function () {
      return l;
    }), n.d(e, "loadFoldersFailed", function () {
      return E;
    }), n.d(e, "moveBoardFailed", function () {
      return S;
    }), n.d(e, "loadFolders", function () {
      return f;
    }), n.d(e, "addBoard", function () {
      return _;
    }), n.d(e, "updateBoard", function () {
      return A;
    }), n.d(e, "deleteBoard", function () {
      return C;
    }), n.d(e, "moveBoard", function () {
      return p;
    });
  }, 212: function _(t, e, n) {
    t.exports = n(346);
  }, 297: function _(t, e, n) {}, 299: function _(t, e, n) {}, 3: function _(t, e, n) {
    "use strict";
    e.a = { LOAD_CUSTOMERS_SUCCESS: "LOAD_CUSTOMERS_SUCCESS", LOAD_CUSTOMERS_FAILED: "LOAD_CUSTOMERS_FAILED", CREATE_CUSTOMER_SUCCESS: "CREATE_CUSTOMER_SUCCESS", CREATE_CUSTOMER_FAILED: "CREATE_CUSTOMER_FAILED", UPDATE_CUSTOMER_SUCCESS: "UPDATE_CUSTOMER_SUCCESS", UPDATE_CUSTOMER_FAILED: "UPDATE_CUSTOMER_FAILED", REMOVE_CUSTOMER_SUCCESS: "REMOVE_CUSTOMER_SUCCESS", REMOVE_CUSTOMER_FAILED: "REMOVE_CUSTOMER_FAILED", SET_CURRENT_USER: "SET_CURRENT_USER", LOAD_USERS_SUCCESS: "LOAD_USERS_SUCCESS", LOAD_USERS_FAILED: "LOAD_USERS_FAILED", UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS", UPDATE_USER_FAILED: "UPDATE_USER_FAILED", LOAD_NOTIFICATIONS_SUCCESS: null, LOAD_NOTIFICATIONS_FAILED: null, LOAD_FOLDERS_SUCCESS: "LOAD_FOLDERS_SUCCESS", LOAD_FOLDERS_FAILED: "LOAD_FOLDERS_FAILED", ADD_BOARD: "ADD_BOARD", UPDATE_BOARD: "UPDATE_BOARD", REMOVE_BOARD: "REMOVE_BOARD", SET_SIDE_TASK: "SET_SIDE_TASK", UPDATE_SIDE_TASK: "UPDATE_SIDE_TASK" };
  }, 346: function _(t, e, n) {
    "use strict";
    n.r(e);n(213), n(242);var a = n(58);n(248), n(277), n(281), n(283);!function () {
      if ("function" === typeof window.CustomEvent) return !1;function t(t, e) {
        e = e || { bubbles: !1, cancelable: !1, detail: void 0 };var n = document.createEvent("CustomEvent");return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
      }t.prototype = window.Event.prototype, window.CustomEvent = t;
    }();var r = n(0),
        o = n.n(r),
        c = n(118),
        u = n.n(c),
        i = (n(297), n(112)),
        d = n(113),
        s = n(116),
        l = n(114),
        E = n(115),
        S = n(18),
        f = n(624),
        _ = n(631),
        A = n(598),
        C = n(47),
        p = n.n(C),
        D = (n(299), n(305), n(129)),
        h = function h() {
      return o.a.createElement("div", { className: "animated fadeIn pt-3 text-center" }, "Loading...");
    },
        T = p()({ loader: function loader() {
        return Promise.all([n.e(33), n.e(8)]).then(n.bind(null, 622));
      }, loading: h }),
        m = p()({ loader: function loader() {
        return n.e(9).then(n.bind(null, 635));
      }, loading: h }),
        O = p()({ loader: function loader() {
        return Promise.all([n.e(3), n.e(10)]).then(n.bind(null, 605));
      }, loading: h }),
        U = p()({ loader: function loader() {
        return Promise.all([n.e(3), n.e(11)]).then(n.bind(null, 608));
      }, loading: h }),
        R = p()({ loader: function loader() {
        return Promise.all([n.e(3), n.e(12)]).then(n.bind(null, 609));
      }, loading: h }),
        L = function (t) {
      function e(t) {
        var n;return Object(i.a)(this, e), (n = Object(s.a)(this, Object(l.a)(e).call(this, t))).state = { loading: !1 }, n;
      }return Object(E.a)(e, t), Object(d.a)(e, [{ key: "componentDidMount", value: function value() {
          this.state.loading || this.props.folders.length || (this.props.foldersActions.loadFolders(), this.setState({ loading: !0 }));
        } }, { key: "render", value: function value() {
          return o.a.createElement(f.a, null, o.a.createElement(_.a, null, o.a.createElement(A.a, { exact: !0, path: "/login", name: "Login Page", component: m }), o.a.createElement(A.a, { exact: !0, path: "/register", name: "Register Page", component: O }), o.a.createElement(A.a, { exact: !0, path: "/404", name: "Page 404", component: U }), o.a.createElement(A.a, { exact: !0, path: "/500", name: "Page 500", component: R }), o.a.createElement(A.a, { path: "/", name: "Home", component: T })));
        } }]), e;
    }(r.Component);var v = Object(a.b)(function (t) {
      return { folders: t.folders };
    }, function (t) {
      return { foldersActions: Object(S.bindActionCreators)(D, t) };
    })(L);Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g = n(200),
        b = n(201),
        B = n(202),
        I = n.n(B),
        y = n(12),
        F = n(3),
        j = { users: [], customers: [], notifications: [], folders: [], auth: { isAuthenticated: !1, user: {} }, sideTask: [], loading: !1 };var w = n(188),
        P = n.n(w);var M = n(198);var k = Object(S.combineReducers)({ customers: function customers() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.customers,
            e = arguments.length > 1 ? arguments[1] : void 0;switch (e.type) {case F.a.LOAD_CUSTOMERS_SUCCESS:
            return e.customers.sort(function (t, e) {
              return t.name.localeCompare(e.name);
            });case F.a.CREATE_CUSTOMER_SUCCESS:
            return [].concat(Object(y.a)(t), [Object.assign({}, e.customer)]);case F.a.UPDATE_CUSTOMER_SUCCESS:
            return [].concat(Object(y.a)(t.filter(function (t) {
              return t._id !== e.customer._id;
            }).sort(function (t, e) {
              return t.name.localeCompare(e.name);
            })), [Object.assign({}, e.customer)]);case F.a.REMOVE_CUSTOMER_SUCCESS:
            return Object(y.a)(t.filter(function (t) {
              return t._id !== e.id;
            }).sort(function (t, e) {
              return t.name.localeCompare(e.name);
            }));default:
            return t;}
      }, users: function users() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.users,
            e = arguments.length > 1 ? arguments[1] : void 0;switch (e.type) {case F.a.LOAD_USERS_SUCCESS:
            return e.users.sort(function (t, e) {
              return t.firstName.localeCompare(e.firstName);
            });case F.a.UPDATE_USER_SUCCESS:
            return [].concat(Object(y.a)(t.filter(function (t) {
              return t._id !== e.user._id;
            })), [Object.assign({}, e.user)]);default:
            return t;}
      }, notifications: function notifications() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.notifications,
            e = arguments.length > 1 ? arguments[1] : void 0;switch (e.type) {case F.a.LOAD_NOTIFICATIONS_SUCCESS:
            return e.notifications.sort(function (t, e) {
              return t.createdAt.localeCompare(e.createdAt);
            });default:
            return t;}
      }, auth: function auth() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.auth,
            e = arguments.length > 1 ? arguments[1] : void 0;switch (e.type) {case F.a.SET_CURRENT_USER:
            return { isAuthenticated: !P()(e.user), user: e.user };default:
            return t;}
      }, folders: function folders() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.folders,
            e = arguments.length > 1 ? arguments[1] : void 0;switch (e.type) {case F.a.LOAD_FOLDERS_SUCCESS:
            return e.folders.sort(function (t, e) {
              return t.createdAt.localeCompare(e.createdAt);
            });case F.a.ADD_BOARD:case F.a.UPDATE_BOARD:case F.a.REMOVE_BOARD:
            return [].concat(Object(y.a)(t.filter(function (t) {
              return t._id !== e.folder._id;
            })), [e.folder]).sort(function (t, e) {
              return t.createdAt.localeCompare(e.createdAt);
            });default:
            return t;}
      }, sideTask: function sideTask() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.sideTask,
            e = arguments.length > 1 ? arguments[1] : void 0;switch (e.type) {case F.a.SET_SIDE_TASK:
            return [Object(M.a)({}, e.task)];case F.a.UPDATE_SIDE_TASK:
            return Object(y.a)(t.filter(function (t) {
              return t._id !== e.task._id;
            }));default:
            return t;}
      } });var N = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return Object(S.createStore)(k, t, Object(b.composeWithDevTools)(Object(S.applyMiddleware)(g.a, I()())));
    }();u.a.render(o.a.createElement(a.a, { store: N }, o.a.createElement(v, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (t) {
      t.unregister();
    });
  }, 56: function _(t, e, n) {
    "use strict";
    var a = n(5),
        r = n.n(a),
        o = n(120),
        c = Object(o.a)(),
        u = { addBoard: function addBoard(t) {
        return r.a.post("/api/boards", { data: t, headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(c), "Access-Control-Allow-Methods": "*" }, mode: "cors" }).then(function (t) {
          return t.data;
        });
      }, loadBoards: function loadBoards() {
        return r.a.get("/api/boards", { headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(c) } }).then(function (t) {
          return t.data;
        });
      }, loadBoardById: function loadBoardById(t) {
        return r.a.get("/api/boards/".concat(t), { headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(c) } }).then(function (t) {
          return t.data;
        });
      }, loadBoardsInit: function loadBoardsInit(t) {
        return r.a.get("/api/boards", { headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(t) } }).then(function (t) {
          return t.data;
        });
      }, updateBoard: function updateBoard(t) {
        return r.a.put("/api/boards", { method: "PUT", data: t, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (t) {
          return t.data;
        });
      }, addBoardColumn: function addBoardColumn(t) {
        return r.a.put("/api/boards/data", { method: "PUT", data: t, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (t) {
          return t.data;
        });
      }, removeBoardColumn: function removeBoardColumn(t) {
        return r.a.put("/api/boards/removeColumn", { method: "PUT", data: t, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (t) {
          return t.data;
        });
      }, moveBoard: function moveBoard(t, e) {
        return r.a.put("/api/boards/moveBoard", { method: "PUT", data: t, moveTo: e, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (t) {
          return t.data;
        });
      }, deleteBoardById: function deleteBoardById(t) {
        return r.a.delete("/api/boards/".concat(t), { headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(c) } }).then(function (t) {
          return t.data;
        });
      }, updateBoardAssign: function updateBoardAssign(t) {
        return r.a.put("/api/boards/assign", { method: "PUT", data: t, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" }, mode: "cors" }).then(function (t) {
          return t.data;
        });
      } };e.a = u;
  } }, [[212, 36, 31]]]);
//# sourceMappingURL=main.1b485416.chunk.js.map
//# sourceMappingURL=main.1b485416.chunk.js.map