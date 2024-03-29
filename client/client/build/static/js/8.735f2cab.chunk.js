"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[8], { 365: function _(e, t, n) {
    "use strict";
    n.r(t);var r = n(3),
        a = n(5),
        o = n.n(a),
        u = n(120),
        c = Object(u.a)(),
        i = { getCurrentUser: function getCurrentUser() {
        return o.a.get("/api/users/currentUser", { headers: { "Content-Type": "application/json", Authorization: "Bearer " + c } }).then(function (e) {
          return e.data;
        });
      }, loadUsers: function loadUsers() {
        return o.a.get("/api/users/all", { headers: { "Content-Type": "application/json", Authorization: "Bearer " + c } }).then(function (e) {
          return e.data;
        });
      }, loadUsersInit: function loadUsersInit(e) {
        return o.a.get("/api/users/all", { headers: { "Content-Type": "application/json", Authorization: "Bearer " + e } }).then(function (e) {
          return e.data;
        });
      }, loadUserById: function loadUserById(e) {
        return o.a.get("/api/users/" + e, { headers: { "Content-Type": "application/json", Authorization: "Bearer " + c } }).then(function (e) {
          return e.data;
        });
      }, updateUser: function updateUser(e) {
        return o.a.put("/api/users/update-role", { data: e, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (e) {
          return e.data;
        });
      }, archiveNotification: function archiveNotification(e) {
        return o.a.put("/api/users/notificationArchive", { data: e, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (e) {
          return e.data;
        });
      } };n.d(t, "loadUsersSuccess", function () {
      return l;
    }), n.d(t, "loadUsersFailed", function () {
      return d;
    }), n.d(t, "loadUser", function () {
      return m;
    }), n.d(t, "updateUserSuccess", function () {
      return f;
    }), n.d(t, "updateUserFailed", function () {
      return p;
    }), n.d(t, "getCurrentUser", function () {
      return h;
    }), n.d(t, "loadUsers", function () {
      return C;
    }), n.d(t, "loadUsersInit", function () {
      return E;
    }), n.d(t, "updateUser", function () {
      return g;
    }), n.d(t, "archiveNotification", function () {
      return b;
    });var s = Object(u.a)();function l(e) {
      return { type: r.a.LOAD_USERS_SUCCESS, users: e };
    }function d(e) {
      return { type: r.a.LOAD_USERS_FAILED, message: e };
    }function m(e, t) {
      return { type: r.a.LOAD_USER, users: e, _id: t };
    }function f(e) {
      return { type: r.a.UPDATE_USER_SUCCESS, user: e };
    }function p(e) {
      return { type: r.a.UPDATE_USER_FAILED, message: e };
    }function h() {
      return function (e) {
        try {
          return i.getCurrentUser().then(function (e) {
            return console.log(e);
          }).catch(function (e) {
            console.log(e);
          });
        } catch (t) {
          return e(d(t.message));
        }
      };
    }function C() {
      return function (e) {
        try {
          return i.loadUsers().then(function (t) {
            return e(l(t.data));
          }).catch(function (e) {
            return console.log("Error with the Api request");
          });
        } catch (t) {
          return e(d(t.message));
        }
      };
    }function E(e) {
      return console.log("users"), function (t) {
        try {
          return i.loadUsersInit(e).then(function (e) {
            return t(l(e.data));
          }).catch(function (e) {
            return console.log("Error with the Api request");
          });
        } catch (n) {
          return t(d(n.message));
        }
      };
    }function g(e) {
      return function (t, n) {
        s ? o.a.defaults.headers.common.Authorization = "Bearer ".concat(s) : delete o.a.defaults.headers.common.Authorization;try {
          return i.updateUser(e).then(function (e) {
            return t(f(e.data));
          }).catch(function (e) {
            return console.log(e);
          });
        } catch (r) {
          return e._id, t(p(r.message));
        }
      };
    }function b(e) {
      return function (t, n) {
        s ? o.a.defaults.headers.common.Authorization = "Bearer ".concat(s) : delete o.a.defaults.headers.common.Authorization;try {
          return i.archiveNotification(e).then(function (e) {
            return t(f(e.data));
          }).catch(function (e) {
            return console.log("Error with the Api request");
          });
        } catch (r) {
          return e._id, t(p(r.message));
        }
      };
    }
  }, 367: function _(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "loadCustomersSuccess", function () {
      return s;
    }), n.d(t, "loadCustomersFailed", function () {
      return l;
    }), n.d(t, "createCustomerSuccess", function () {
      return d;
    }), n.d(t, "createCustomerFailed", function () {
      return m;
    }), n.d(t, "updateCustomerSuccess", function () {
      return f;
    }), n.d(t, "updateCustomerFailed", function () {
      return p;
    }), n.d(t, "deleteCustomerSuccess", function () {
      return h;
    }), n.d(t, "deleteCustomerFailed", function () {
      return C;
    }), n.d(t, "loadCustomers", function () {
      return E;
    }), n.d(t, "loadCustomersInit", function () {
      return g;
    }), n.d(t, "saveCustomer", function () {
      return b;
    }), n.d(t, "updateCustomer", function () {
      return A;
    }), n.d(t, "deleteCustomer", function () {
      return y;
    });var r = n(3),
        a = n(5),
        o = n.n(a),
        u = n(120),
        c = n(409),
        i = Object(u.a)();function s(e) {
      return { type: r.a.LOAD_CUSTOMERS_SUCCESS, customers: e };
    }function l(e) {
      return { type: r.a.LOAD_CUSTOMERS_FAILED, message: e };
    }function d(e) {
      return { type: r.a.CREATE_CUSTOMER_SUCCESS, customer: e };
    }function m(e) {
      return { type: r.a.CREATE_CUSTOMER_FAILED, message: e };
    }function f(e) {
      return { type: r.a.UPDATE_CUSTOMER_SUCCESS, customer: e };
    }function p(e) {
      return { type: r.a.UPDATE_CUSTOMER_FAILED, message: e };
    }function h(e) {
      return { type: r.a.REMOVE_CUSTOMER_SUCCESS, id: e };
    }function C(e) {
      return { type: r.a.REMOVE_CUSTOMER_FAILED, message: e };
    }function E() {
      return function (e) {
        try {
          return c.a.loadCustomers().then(function (t) {
            return e(s(t.data));
          }).catch(function (e) {
            return console.log("Error with the Api request");
          });
        } catch (t) {
          return e(l(t.message));
        }
      };
    }function g(e) {
      return function (t) {
        try {
          return c.a.loadCustomersInit(e).then(function (e) {
            return t(s(e.data));
          }).catch(function (e) {
            return console.log("Error with the Api request");
          });
        } catch (n) {
          return t(l(n.message));
        }
      };
    }function b(e) {
      return function (t, n) {
        o.a.defaults.headers.common.Authorization = "Bearer " + i;try {
          return c.a.saveCustomer(e).then(function (e) {
            return t(d(e.data));
          }).catch(function (e) {
            return console.log("Error with the Api request");
          });
        } catch (r) {
          return e.customerId, t(m(r.message));
        }
      };
    }function A(e) {
      return function (t, n) {
        o.a.defaults.headers.common.Authorization = "Bearer " + i;try {
          return c.a.updateCustomer(e).then(function (e) {
            return t(f(e.data));
          }).catch(function (e) {
            return console.log("Error with the Api request");
          });
        } catch (r) {
          return e.customerId, t(p(r.message));
        }
      };
    }function y(e) {
      return function (t, n) {
        try {
          return c.a.deleteCustomerById(e).then(function (n) {
            n.success && t(h(e));
          }).catch(function (e) {
            return console.log("Error with the Api request");
          });
        } catch (r) {
          return t(p(r.message));
        }
      };
    }
  }, 384: function _(e, t, n) {
    "use strict";
    var r = n(112),
        a = n(113),
        o = n(116),
        u = n(114),
        c = n(115),
        i = n(0),
        s = n.n(i),
        l = n(58),
        d = n(18),
        m = n(367),
        f = n(365),
        p = n(439);t.a = function (e) {
      var t = function (t) {
        function n() {
          return Object(r.a)(this, n), Object(o.a)(this, Object(u.a)(n).apply(this, arguments));
        }return Object(c.a)(n, t), Object(a.a)(n, [{ key: "componentWillMount", value: function value() {
            this.props.auth.isAuthenticated || this.props.authActions.initAuth(), this.props.users.length || this.props.userActions.loadUsers(), this.props.customers.length || this.props.customerActions.loadCustomers();
          } }, { key: "render", value: function value() {
            return s.a.createElement(e, this.props);
          } }]), n;
      }(i.Component);return Object(l.b)(function (e, t) {
        return { auth: e.auth, customers: e.customers, users: e.users };
      }, function (e) {
        return { userActions: Object(d.bindActionCreators)(f, e), customerActions: Object(d.bindActionCreators)(m, e), authActions: Object(d.bindActionCreators)(p, e) };
      })(t);
    };
  }, 409: function _(e, t, n) {
    "use strict";
    var r = n(5),
        a = n.n(r),
        o = n(120),
        u = Object(o.a)(),
        c = { loadCustomers: function loadCustomers() {
        return a.a.get("/api/customers", { headers: { "Content-Type": "application/json", Authorization: "Bearer " + u } }).then(function (e) {
          return e.data;
        });
      }, loadCustomerById: function loadCustomerById(e) {
        return a.a.get("/api/customers/" + e, { headers: { "Content-Type": "application/json", Authorization: "Bearer " + u } }).then(function (e) {
          return e.data;
        });
      }, loadCustomersInit: function loadCustomersInit(e) {
        return a.a.get("/api/customers", { headers: { "Content-Type": "application/json", Authorization: "Bearer " + e } }).then(function (e) {
          return e.data;
        });
      }, saveCustomer: function saveCustomer(e) {
        return a.a.post("/api/customers", { data: e, headers: { "Content-Type": "application/json", Authorization: "Bearer " + u, "Access-Control-Allow-Methods": "*" }, mode: "cors" }).then(function (e) {
          return e.data;
        });
      }, updateCustomer: function updateCustomer(e) {
        return a.a.put("/api/customers", { method: "PUT", data: e, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (e) {
          return e.data;
        });
      }, deleteCustomerById: function deleteCustomerById(e) {
        return a.a.delete("/api/customers/" + e, { headers: { "Content-Type": "application/json", Authorization: "Bearer " + u } }).then(function (e) {
          return e.data;
        });
      }, updateCustomerAssign: function updateCustomerAssign(e) {
        return a.a.put("/api/customers/assign", { method: "PUT", data: e, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" }, mode: "cors" }).then(function (e) {
          return e.data;
        });
      } };t.a = c;
  }, 411: function _(e, t, n) {
    "use strict";
    var r = n(112),
        a = n(113),
        o = n(116),
        u = n(114),
        c = n(115),
        i = n(0),
        s = n.n(i),
        l = n(596),
        d = n(120);t.a = function (e) {
      return function (t) {
        function n(e) {
          var t;return Object(r.a)(this, n), (t = Object(o.a)(this, Object(u.a)(n).call(this, e))).state = { loggedIn: !1 }, t;
        }return Object(c.a)(n, t), Object(a.a)(n, [{ key: "componentWillMount", value: function value() {
            Object(d.a)() && this.setState({ loggedIn: !0 });
          } }, { key: "render", value: function value() {
            return this.state.loggedIn ? s.a.createElement(e, this.props) : s.a.createElement(l.a, { to: "/login" });
          } }]), n;
      }(i.Component);
    };
  }, 439: function _(e, t, n) {
    "use strict";
    n.r(t);var r = n(3),
        a = n(5),
        o = n.n(a);var u = n(410),
        c = n.n(u),
        i = function i(e) {
      return localStorage.setItem("jwtToken", e), localStorage.setItem("currentUser", JSON.stringify(c()(e))), new Promise(function (e, t) {
        setTimeout(e, 100);
      });
    };function s(e) {
      return { type: r.a.SET_CURRENT_USER, user: e };
    }function l(e) {
      return function (t) {
        return t(s(c()(e))), i(e), Promise.resolve();
      };
    }function d() {
      return function (e) {
        var t;localStorage.removeItem("jwtToken"), (t = !1) ? o.a.defaults.headers.common.Authorization = "Bearer ".concat(t) : delete o.a.defaults.headers.common.Authorization, e(s({}));
      };
    }function m() {
      return function (e) {
        var t = localStorage.getItem("jwtToken");if (t) return e(s(c()(t)));
      };
    }function f() {}n.d(t, "setCurrentUser", function () {
      return s;
    }), n.d(t, "login", function () {
      return l;
    }), n.d(t, "logout", function () {
      return d;
    }), n.d(t, "initAuth", function () {
      return m;
    }), n.d(t, "getCurrentUser", function () {
      return f;
    });
  }, 622: function _(e, t, n) {
    "use strict";
    n.r(t);var r = n(12),
        a = n(112),
        o = n(113),
        u = n(116),
        c = n(114),
        i = n(115),
        s = n(0),
        l = n.n(s),
        d = n(58),
        m = n(631),
        f = n(598),
        p = n(604),
        h = n(193),
        C = n(384),
        E = function E(e) {
      return e.map(function (e) {
        return { name: e.name, url: "/folder", icon: "icon-layers", children: [{ name: "Add Board", url: "/addBoard/".concat(e._id), icon: "icon-pencil" }].concat(Object(r.a)(e.boards.map(function (e) {
            return { name: e.name, url: "/board/".concat(e._id) };
          }))) };
      });
    },
        g = n(383),
        b = [{ name: "Oumar", url: "/profile", image: "icon-speedometer" }, { name: "Dashboard", url: "/dashboard", icon: "icon-speedometer" }, { title: !0, name: "CUSTOMERS", wrapper: { element: "", attributes: {} }, class: "" }, { name: "Customers Overview", url: "/customers", icon: "icon-people" }, { title: !0, name: "Notification", wrapper: { element: "", attributes: {} } }, { name: "messages", url: "/notification", icon: "icon-envelope-letter" }, { title: !0, name: "PROJECTS", wrapper: { element: "", attributes: {} }, class: "" }],
        A = n(411),
        y = l.a.lazy(function () {
      return n.e(15).then(n.bind(null, 611));
    }),
        O = l.a.lazy(function () {
      return Promise.all([n.e(1), n.e(5), n.e(35), n.e(16)]).then(n.bind(null, 623));
    }),
        j = l.a.lazy(function () {
      return n.e(17).then(n.bind(null, 636));
    }),
        S = l.a.lazy(function () {
      return Promise.all([n.e(0), n.e(1), n.e(18)]).then(n.bind(null, 632));
    }),
        U = l.a.lazy(function () {
      return Promise.all([n.e(0), n.e(19)]).then(n.bind(null, 621));
    }),
        v = l.a.lazy(function () {
      return n.e(20).then(n.bind(null, 627));
    }),
        T = l.a.lazy(function () {
      return n.e(21).then(n.bind(null, 630));
    }),
        _ = l.a.lazy(function () {
      return n.e(22).then(n.bind(null, 633));
    }),
        w = l.a.lazy(function () {
      return Promise.all([n.e(0), n.e(2), n.e(34), n.e(23)]).then(n.bind(null, 626));
    }),
        z = l.a.lazy(function () {
      return Promise.all([n.e(0), n.e(1), n.e(2), n.e(4), n.e(24)]).then(n.bind(null, 629));
    }),
        I = [{ path: "/", exact: !0, name: "Home", component: k }, { path: "/logged", name: "Loggin Success", component: y }, { path: "/dashboard", name: "Dashboard", component: O }, { path: "/customers", exact: !0, name: "Customers", component: Object(A.a)(j) }, { path: "/customer/edit/:id", name: "Customers Edit", component: Object(A.a)(U) }, { path: "/customer/add", name: "Customers Add", component: Object(A.a)(U) }, { path: "/customers/:id", exact: !0, name: "Customer Detail", component: Object(A.a)(S) }, { path: "/users", exact: !0, name: "Users", component: Object(A.a)(v) }, { path: "/users/:id", exact: !0, name: "User Details", component: Object(A.a)(T) }, { path: "/Notification/", exact: !0, name: "Notification Page", component: Object(A.a)(_) }, { path: "/addBoard/:folder_id", name: "Board Add", component: Object(A.a)(w) }, { path: "/editBoard/:folder_id", name: "Edit Add", component: Object(A.a)(w) }, { path: "/board/:id", name: "Board Page", component: Object(A.a)(z) }],
        B = l.a.lazy(function () {
      return n.e(13).then(n.bind(null, 610));
    }),
        D = l.a.lazy(function () {
      return n.e(14).then(n.bind(null, 634));
    }),
        R = function (e) {
      function t() {
        var e, n;Object(a.a)(this, t);for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) {
          o[i] = arguments[i];
        }return (n = Object(u.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(o)))).loading = function () {
          return l.a.createElement("div", { className: "animated fadeIn pt-1 text-center" }, "Loading...");
        }, n;
      }return Object(i.a)(t, e), Object(o.a)(t, [{ key: "signOut", value: function value(e) {
          var t = this;e.preventDefault(), (localStorage.removeItem("jwtToken"), new Promise(function (e, t) {
            setTimeout(e, 100);
          })).then(function () {
            return t.props.history.push("/login");
          });
        } }, { key: "render", value: function value() {
          var e = this,
              t = { items: [].concat(Object(r.a)(b), Object(r.a)(E(this.props.folders))) };return l.a.createElement("div", { className: "app" }, l.a.createElement(g.e, { fixed: !0 }, l.a.createElement(s.Suspense, { fallback: this.loading() }, l.a.createElement(D, { onLogout: function onLogout(t) {
              return e.signOut(t);
            } }))), l.a.createElement("div", { className: "app-body" }, l.a.createElement(g.h, { fixed: !0, display: "lg" }, l.a.createElement(g.k, null), l.a.createElement(g.j, null), l.a.createElement(s.Suspense, null, l.a.createElement(g.m, Object.assign({ navConfig: t }, this.props))), l.a.createElement(g.i, null), l.a.createElement(g.l, null)), l.a.createElement("main", { className: "main" }, l.a.createElement(g.c, { appRoutes: I }), l.a.createElement(h.a, { fluid: !0 }, l.a.createElement(s.Suspense, { fallback: this.loading() }, l.a.createElement(m.a, null, I.map(function (e, t) {
            return e.component ? l.a.createElement(f.a, { key: t, path: e.path, exact: e.exact, name: e.name, render: function render(t) {
                return l.a.createElement(e.component, t);
              } }) : null;
          }), l.a.createElement(p.a, { from: "/", to: "/dashboard" })))))), l.a.createElement(g.d, null, l.a.createElement(s.Suspense, { fallback: this.loading() }, l.a.createElement(B, null))));
        } }]), t;
    }(s.Component);var k = t.default = Object(d.b)(function (e) {
      return { folders: e.folders };
    }, null)(Object(C.a)(R));
  } }]);
//# sourceMappingURL=8.735f2cab.chunk.js.map
//# sourceMappingURL=8.735f2cab.chunk.js.map