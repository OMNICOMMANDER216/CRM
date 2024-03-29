"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[23], { 626: function _(e, t, a) {
    "use strict";
    a.r(t);var r = a(112),
        n = a(113),
        o = a(116),
        s = a(114),
        c = a(115),
        l = a(0),
        i = a.n(l),
        d = a(58),
        m = a(18),
        u = a(604),
        p = a(597),
        f = a(193),
        h = a(44),
        b = a(6),
        E = a(45),
        v = a(81),
        g = a(46),
        C = a(79),
        j = a(126),
        O = a(127),
        S = a(80),
        y = a(197),
        B = a(194),
        _ = a(61),
        k = function (e) {
      function t(e) {
        var a;return Object(r.a)(this, t), (a = Object(o.a)(this, Object(s.a)(t).call(this, e))).toggle = function () {
          a.setState({ collapse: !a.state.collapse });
        }, a.toggleFade = function () {
          a.setState(function (e) {
            return { fadeIn: !e };
          });
        }, a.state = { collapse: !0, fadeIn: !0, timeout: 300 }, a;
      }return Object(c.a)(t, e), Object(n.a)(t, [{ key: "render", value: function value() {
          var e = this,
              t = this.props,
              a = t.folder,
              r = t.board,
              n = t.customers,
              o = t.selectedCustomer,
              s = t.onSave,
              c = t.onChange,
              l = t.updateCustomer,
              d = t.errors,
              m = t.redirect,
              u = n.map(function (e) {
            return { value: e._id, label: e.name };
          });return i.a.createElement(f.a, null, a && i.a.createElement(i.a.Fragment, null, i.a.createElement("h2", null, " ", a.name, " "), i.a.createElement("div", { className: "animated fadeIn" }, i.a.createElement(h.a, null, i.a.createElement(b.a, { xs: "12", md: "12" }, i.a.createElement(E.a, null, i.a.createElement(v.a, null, i.a.createElement("strong", null, " Add Board")), i.a.createElement(g.a, null, i.a.createElement(C.a, { action: "", method: "post", encType: "multipart/form-data", id: "board-form", ref: function ref(t) {
              return e.myFormRef = t;
            } }, i.a.createElement(i.a.Fragment, null, i.a.createElement(j.a, { row: !0 }, i.a.createElement(b.a, { md: "3" }, i.a.createElement(O.a, { htmlFor: "name" }, "Board Name")), i.a.createElement(b.a, { xs: "12", md: "9" }, i.a.createElement(S.a, { type: "text", id: "name", name: "name", placeholder: "Board Name", onChange: c, value: r && r && r.name }), i.a.createElement(y.a, { color: "danger" }, d.name))), i.a.createElement(j.a, { row: !0 }, i.a.createElement(b.a, { md: "3" }, i.a.createElement(O.a, { htmlFor: "name" }, "Board Description")), i.a.createElement(b.a, { xs: "12", md: "9" }, i.a.createElement(S.a, { type: "textarea", id: "description", name: "description", placeholder: "Board description", rows: "7", onChange: c, value: r && r && r.description }), i.a.createElement(y.a, { color: "danger" }, d.description))), i.a.createElement(j.a, { row: !0, className: "mt-3" }, i.a.createElement(b.a, { md: "3" }, i.a.createElement(O.a, { for: "pm" }, "Customer")), i.a.createElement(b.a, { xs: "12", md: "9" }, i.a.createElement(p.a, { value: o, onChange: l, options: u }), i.a.createElement(y.a, { color: "danger" }, d.customer)))))), i.a.createElement(B.a, { className: "d-flex justify-content-center" }, i.a.createElement(_.a, { type: "submit", onClick: s, size: "md", color: "primary", className: "m-2" }, i.a.createElement("i", { className: "fa fa-dot-circle-o" }), " Submit"), i.a.createElement(_.a, { type: "reset", onClick: m, size: "md", color: "danger", className: "m-2" }, i.a.createElement("i", { className: "fa fa-ban" }), " Back"))))))));
        } }]), t;
    }(l.Component),
        w = { _id: void 0, name: "", customer: "", description: "", folder: "", columns: [], groups: [] },
        N = a(376),
        x = a(129),
        A = function (e) {
      function t(e, a) {
        var n;return Object(r.a)(this, t), (n = Object(o.a)(this, Object(s.a)(t).call(this, e, a))).updateBoard = function (e) {
          var t = Object.assign({}, n.state.board);return t[e.target.name] = e.target.value, n.setState({ board: t });
        }, n.updateCustomer = function (e) {
          var t = Object.assign({}, n.state.selectedCustomer),
              a = Object.assign({}, n.state.board);return a.customer = e.value, t = e, n.setState({ selectedCustomer: t, board: a });
        }, n.saveBoard = function (e) {
          e.preventDefault();var t = Object.assign({}, n.state.board);Object(N.validateAll)(t, { name: "required|string", customer: "required|string" }).then(function () {
            t.folder = n.state.folder._id, n.setState({ saving: !0 }), !t._id && n.props.foldersActions.addBoard(t), t._id && n.props.foldersActions.updateBoard(t), n.setState({ toDashboard: !0 });
          }).catch(function (e) {
            console.log(e);var t = {};e.forEach(function (e) {
              return t[e.field] = e.message;
            }), n.setState({ errors: t });
          });
        }, n.redirect = function () {
          n.setState({ toDashboard: !0 });
        }, n.state = { folder: Object.assign({}, n.props.folder), board: {}, selectedCustomer: {}, errors: {}, saving: !1, disabledAdvance: !1, disabledLive: !1, toDashboard: !1, assign: !1 }, n;
      }return Object(c.a)(t, e), Object(n.a)(t, [{ key: "componentWillReceiveProps", value: function value(e) {
          this.props.folder && this.props.folder._id !== e.folder._id && this.setState({ folder: Object.assign({}, e.folder) });
        } }, { key: "componentWillMount", value: function value() {
          if (this.props.location.state && this.props.location.state.boardId) {
            var e = this.props.location.state.boardId,
                t = this.props.folder.boards.find(function (t) {
              return t._id === e;
            }),
                a = { value: t.customer, label: this.props.customers.length && this.props.customers.find(function (e) {
                return e._id === t.customer;
              }).name };this.setState({ board: t, selectedCustomer: a });
          } else this.setState({ board: w });
        } }, { key: "componentDidMount", value: function value() {
          this.setState({ users: this.props.users });
        } }, { key: "render", value: function value() {
          return this.state.toDashboard ? i.a.createElement(u.a, { to: "/dashboard" }) : i.a.createElement(k, { folder: this.props.folder, board: this.state.board, selectedCustomer: this.state.selectedCustomer, customers: this.props.customers, onSave: this.saveBoard, onChange: this.updateBoard, updateCustomer: this.updateCustomer, errors: this.state.errors, saving: this.state.saving, redirect: this.redirect, currentUser: this.props.currentUser });
        } }]), t;
    }(i.a.Component);t.default = Object(d.b)(function (e, t) {
      return { folder: e.folders.find(function (e) {
          return e._id === t.match.params.folder_id;
        }), folders: e.folders, customers: e.customers, currentUser: e.auth.user };
    }, function (e) {
      return { foldersActions: Object(m.bindActionCreators)(x, e) };
    })(A);
  } }]);
//# sourceMappingURL=23.96bb44c4.chunk.js.map
//# sourceMappingURL=23.96bb44c4.chunk.js.map