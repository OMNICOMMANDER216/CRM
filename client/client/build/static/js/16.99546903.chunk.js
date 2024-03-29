"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[16], { 623: function _(e, t, a) {
    "use strict";
    a.r(t);var n = a(112),
        r = a(113),
        c = a(116),
        l = a(114),
        s = a(115),
        i = a(0),
        o = a.n(i),
        m = a(58),
        u = a(44),
        d = a(6),
        E = a(442),
        p = a(195),
        v = a(196),
        b = a(602),
        h = function h(e) {
      var t = e.user;return o.a.createElement("div", { className: "m-4" }, o.a.createElement(p.a, null, o.a.createElement(v.a, { active: !0, tag: "button", action: !0 }, "".concat(t.firstName, " ").concat(t.lastName), " ", o.a.createElement(b.a, { color: "secondary", size: "lg" }, t.customers.length)), t.customers.map(function (e, t) {
        return o.a.createElement(v.a, { key: t, tag: "button", action: !0 }, o.a.createElement(E.a, { to: "/customers/".concat(e._id) }, e.name));
      })));
    },
        f = function (e) {
      function t() {
        return Object(n.a)(this, t), Object(c.a)(this, Object(l.a)(t).apply(this, arguments));
      }return Object(s.a)(t, e), Object(r.a)(t, [{ key: "render", value: function value() {
          var e = this.props.users.filter(function (e) {
            return "Pm" === e.role;
          });return o.a.createElement(u.a, null, e && e.map(function (e, t) {
            return o.a.createElement(d.a, { xs: "12", sm: "6", lg: "4", key: t }, o.a.createElement(h, { user: e }));
          }));
        } }]), t;
    }(i.Component),
        j = a(469),
        g = a(45),
        O = a(81),
        x = a(46),
        N = { animated_div: { width: "100%" }, card: { width: "50%", minWidth: "300px", margin: "0 auto" } },
        w = { labels: ["Total Live", "Currently in Dev", "Live this month"], datasets: [{ data: [190, 50, 8], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }] },
        y = function (e) {
      function t() {
        return Object(n.a)(this, t), Object(c.a)(this, Object(l.a)(t).apply(this, arguments));
      }return Object(s.a)(t, e), Object(r.a)(t, [{ key: "render", value: function value() {
          return o.a.createElement("div", { className: "animated fadeIn d-flex justify-content-center", style: N.animated_div }, o.a.createElement(g.a, { style: N.card }, o.a.createElement(O.a, null, "Doughnut Chart"), o.a.createElement(x.a, null, o.a.createElement("div", { className: "chart-wrapper" }, o.a.createElement(j.a, { data: w })))));
        } }]), t;
    }(i.Component),
        C = a(411),
        k = a(365),
        F = a(384),
        D = function (e) {
      function t(e) {
        var a;return Object(n.a)(this, t), (a = Object(c.a)(this, Object(l.a)(t).call(this, e))).toggle = function () {
          a.setState({ dropdownOpen: !a.state.dropdownOpen });
        }, a.onRadioBtnClick = function (e) {
          a.setState({ radioSelected: e });
        }, a.loading = function () {
          return o.a.createElement("div", { className: "animated fadeIn pt-1 text-center" }, "Loading...");
        }, a.state = { dropdownOpen: !1, radioSelected: 2 }, a;
      }return Object(s.a)(t, e), Object(r.a)(t, [{ key: "render", value: function value() {
          var e = { currentMonth: 8, monthlyProjection: 21, inDev: 45, total: 217 };return o.a.createElement("div", { className: "animated fadeIn" }, o.a.createElement(u.a, null, o.a.createElement(d.a, { xs: "12", sm: "6", lg: "3" }, o.a.createElement(g.a, { className: "text-white text-center bg-info p-4" }, o.a.createElement(x.a, { className: "pb-0" }, o.a.createElement("div", { className: "text-value" }, e.currentMonth), o.a.createElement("div", null, "Live this Month")))), o.a.createElement(d.a, { xs: "12", sm: "6", lg: "3" }, o.a.createElement(g.a, { className: "text-white text-center bg-primary p-4" }, o.a.createElement(x.a, { className: "pb-0" }, o.a.createElement("div", { className: "text-value" }, e.monthlyProjection), o.a.createElement("div", null, "Projection for Current Month")))), o.a.createElement(d.a, { xs: "12", sm: "6", lg: "3" }, o.a.createElement(g.a, { className: "text-white text-center bg-warning p-4" }, o.a.createElement(x.a, { className: "pb-0" }, o.a.createElement("div", { className: "text-value" }, e.inDev), o.a.createElement("div", null, "Currently in Development ")))), o.a.createElement(d.a, { xs: "12", sm: "6", lg: "3" }, o.a.createElement(g.a, { className: "text-white text-center bg-success p-4" }, o.a.createElement(x.a, { className: "pb-0" }, o.a.createElement("div", { className: "text-value" }, e.total), o.a.createElement("div", null, "Total Website Live"))))), o.a.createElement(u.a, null, o.a.createElement(y, { dashboardData: e })), o.a.createElement(f, { users: this.props.users }));
        } }]), t;
    }(i.Component);t.default = Object(m.b)(function (e) {
      return { users: e.users };
    }, function (e) {
      return { loadUsers: function loadUsers() {
          return e(Object(k.loadUsers)());
        } };
    })(Object(F.a)(Object(C.a)(D)));
  } }]);
//# sourceMappingURL=16.99546903.chunk.js.map
//# sourceMappingURL=16.99546903.chunk.js.map