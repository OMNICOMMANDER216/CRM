"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[22], { 62: function _(e, t, a) {
    "use strict";
    var n = a(9),
        r = a(36),
        s = a(0),
        l = a.n(s),
        i = a(1),
        o = a.n(i),
        c = a(349),
        u = a.n(c),
        b = a(350),
        d = { className: o.a.string, cssModule: o.a.object, size: o.a.string, bordered: o.a.bool, borderless: o.a.bool, striped: o.a.bool, inverse: Object(b.e)(o.a.bool, 'Please use the prop "dark"'), dark: o.a.bool, hover: o.a.bool, responsive: o.a.oneOfType([o.a.bool, o.a.string]), tag: b.m, responsiveTag: b.m, innerRef: o.a.oneOfType([o.a.func, o.a.string, o.a.object]) },
        m = function m(e) {
      var t = e.className,
          a = e.cssModule,
          s = e.size,
          i = e.bordered,
          o = e.borderless,
          c = e.striped,
          d = e.inverse,
          m = e.dark,
          f = e.hover,
          p = e.responsive,
          v = e.tag,
          h = e.responsiveTag,
          E = e.innerRef,
          k = Object(r.a)(e, ["className", "cssModule", "size", "bordered", "borderless", "striped", "inverse", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]),
          g = Object(b.i)(u()(t, "table", !!s && "table-" + s, !!i && "table-bordered", !!o && "table-borderless", !!c && "table-striped", !(!m && !d) && "table-dark", !!f && "table-hover"), a),
          j = l.a.createElement(v, Object(n.a)({}, k, { ref: E, className: g }));if (p) {
        var y = !0 === p ? "table-responsive" : "table-responsive-" + p;return l.a.createElement(h, { className: y }, j);
      }return j;
    };m.propTypes = d, m.defaultProps = { tag: "table", responsiveTag: "div" }, t.a = m;
  }, 633: function _(e, t, a) {
    "use strict";
    a.r(t);var n = a(112),
        r = a(113),
        s = a(116),
        l = a(114),
        i = a(115),
        o = a(121),
        c = a(0),
        u = a.n(c),
        b = a(58),
        d = a(18),
        m = a(442),
        f = { h2Style: { fontSize: "1em" }, pointer: { cursor: "pointer" } },
        p = function p(e) {
      var t = e.notification,
          a = e.onClick;return u.a.createElement("tbody", null, u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement("h2", { style: f.h2Style, className: " col-5" }, t.title)), u.a.createElement("td", null, " ", u.a.createElement("p", { className: "f2 " }, t.content, " "), " "), u.a.createElement("td", null, " ", u.a.createElement("p", null, u.a.createElement(m.a, { className: "white i", to: "/customers/" + t.cu }, u.a.createElement("i", { className: "fa fa-eye" })))), u.a.createElement("td", null, u.a.createElement("p", { style: f.pointer, onClick: a }, " ", u.a.createElement("i", { className: "fa fa-archive" })))));
    },
        v = a(365),
        h = a(62),
        E = { tableStyles: { textAlign: "center" } },
        k = function (e) {
      function t(e, a) {
        var r;return Object(n.a)(this, t), (r = Object(s.a)(this, Object(l.a)(t).call(this, e, a))).onClick = r.onClick.bind(Object(o.a)(Object(o.a)(r))), r;
      }return Object(i.a)(t, e), Object(r.a)(t, [{ key: "onClick", value: function value(e) {
          this.props.userActions.archiveNotification(e);
        } }, { key: "render", value: function value() {
          var e = this,
              t = this.props,
              a = t.currentUser,
              n = t.users.find(function (e) {
            return e._id === a._id;
          }),
              r = [];return n && n.notifications[0] && (r = n.notifications ? n.notifications.map(function (t) {
            return u.a.createElement(p, { key: t._id, notification: t, onClick: function onClick() {
                return e.onClick(t);
              } });
          }).sort(function (e, t) {
            return e === t ? 0 : e ? -1 : 1;
          }) : []), r.length ? u.a.createElement("div", { className: "container-fluid white tl" }, u.a.createElement(h.a, { hover: !0, style: E.tableStyles }, u.a.createElement("thead", null, u.a.createElement("tr", null, u.a.createElement("th", null, "Event"), u.a.createElement("th", null, "message"), u.a.createElement("th", null, "View Customer"), u.a.createElement("th", null, "Archive"))), r)) : u.a.createElement("h2", null, " You have 0 Messages");
        } }]), t;
    }(u.a.Component);t.default = Object(b.b)(function (e, t) {
      return { currentUser: e.auth.user, users: e.users };
    }, function (e) {
      return { userActions: Object(d.bindActionCreators)(v, e) };
    })(k);
  } }]);
//# sourceMappingURL=22.6898b12d.chunk.js.map
//# sourceMappingURL=22.6898b12d.chunk.js.map