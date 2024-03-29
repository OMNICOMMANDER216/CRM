"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[18], { 195: function _(e, t, a) {
    "use strict";
    var n = a(9),
        o = a(36),
        l = a(0),
        r = a.n(l),
        s = a(1),
        c = a.n(s),
        i = a(349),
        u = a.n(i),
        m = a(350),
        d = { tag: m.m, flush: c.a.bool, className: c.a.string, cssModule: c.a.object },
        f = function f(e) {
      var t = e.className,
          a = e.cssModule,
          l = e.tag,
          s = e.flush,
          c = Object(o.a)(e, ["className", "cssModule", "tag", "flush"]),
          i = Object(m.i)(u()(t, "list-group", !!s && "list-group-flush"), a);return r.a.createElement(l, Object(n.a)({}, c, { className: i }));
    };f.propTypes = d, f.defaultProps = { tag: "ul" }, t.a = f;
  }, 196: function _(e, t, a) {
    "use strict";
    var n = a(9),
        o = a(36),
        l = a(0),
        r = a.n(l),
        s = a(1),
        c = a.n(s),
        i = a(349),
        u = a.n(i),
        m = a(350),
        d = { tag: m.m, active: c.a.bool, disabled: c.a.bool, color: c.a.string, action: c.a.bool, className: c.a.any, cssModule: c.a.object },
        f = function f(e) {
      e.preventDefault();
    },
        p = function p(e) {
      var t = e.className,
          a = e.cssModule,
          l = e.tag,
          s = e.active,
          c = e.disabled,
          i = e.action,
          d = e.color,
          p = Object(o.a)(e, ["className", "cssModule", "tag", "active", "disabled", "action", "color"]),
          b = Object(m.i)(u()(t, !!s && "active", !!c && "disabled", !!i && "list-group-item-action", !!d && "list-group-item-" + d, "list-group-item"), a);return c && (p.onClick = f), r.a.createElement(l, Object(n.a)({}, p, { className: b }));
    };p.propTypes = d, p.defaultProps = { tag: "li" }, t.a = p;
  }, 352: function _(e, t) {
    e.exports = function (e) {
      var t = typeof e === "undefined" ? "undefined" : _typeof(e);return !!e && ("object" == t || "function" == t);
    };
  }, 6: function _(e, t, a) {
    "use strict";
    var n = a(9),
        o = a(36),
        l = a(352),
        r = a.n(l),
        s = a(0),
        c = a.n(s),
        i = a(1),
        u = a.n(i),
        m = a(349),
        d = a.n(m),
        f = a(350),
        p = u.a.oneOfType([u.a.number, u.a.string]),
        b = u.a.oneOfType([u.a.bool, u.a.number, u.a.string, u.a.shape({ size: u.a.oneOfType([u.a.bool, u.a.number, u.a.string]), push: Object(f.e)(p, 'Please use the prop "order"'), pull: Object(f.e)(p, 'Please use the prop "order"'), order: p, offset: p })]),
        h = { tag: f.m, xs: b, sm: b, md: b, lg: b, xl: b, className: u.a.string, cssModule: u.a.object, widths: u.a.array },
        g = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        E = function E(e, t, a) {
      return !0 === a || "" === a ? e ? "col" : "col-" + t : "auto" === a ? e ? "col-auto" : "col-" + t + "-auto" : e ? "col-" + a : "col-" + t + "-" + a;
    },
        N = function N(e) {
      var t = e.className,
          a = e.cssModule,
          l = e.widths,
          s = e.tag,
          i = Object(o.a)(e, ["className", "cssModule", "widths", "tag"]),
          u = [];l.forEach(function (t, n) {
        var o = e[t];if (delete i[t], o || "" === o) {
          var l = !n;if (r()(o)) {
            var s,
                c = l ? "-" : "-" + t + "-",
                m = E(l, t, o.size);u.push(Object(f.i)(d()(((s = {})[m] = o.size || "" === o.size, s["order" + c + o.order] = o.order || 0 === o.order, s["offset" + c + o.offset] = o.offset || 0 === o.offset, s)), a));
          } else {
            var p = E(l, t, o);u.push(p);
          }
        }
      }), u.length || u.push("col");var m = Object(f.i)(d()(t, u), a);return c.a.createElement(s, Object(n.a)({}, i, { className: m }));
    };N.propTypes = h, N.defaultProps = g, t.a = N;
  }, 62: function _(e, t, a) {
    "use strict";
    var n = a(9),
        o = a(36),
        l = a(0),
        r = a.n(l),
        s = a(1),
        c = a.n(s),
        i = a(349),
        u = a.n(i),
        m = a(350),
        d = { className: c.a.string, cssModule: c.a.object, size: c.a.string, bordered: c.a.bool, borderless: c.a.bool, striped: c.a.bool, inverse: Object(m.e)(c.a.bool, 'Please use the prop "dark"'), dark: c.a.bool, hover: c.a.bool, responsive: c.a.oneOfType([c.a.bool, c.a.string]), tag: m.m, responsiveTag: m.m, innerRef: c.a.oneOfType([c.a.func, c.a.string, c.a.object]) },
        f = function f(e) {
      var t = e.className,
          a = e.cssModule,
          l = e.size,
          s = e.bordered,
          c = e.borderless,
          i = e.striped,
          d = e.inverse,
          f = e.dark,
          p = e.hover,
          b = e.responsive,
          h = e.tag,
          g = e.responsiveTag,
          E = e.innerRef,
          N = Object(o.a)(e, ["className", "cssModule", "size", "bordered", "borderless", "striped", "inverse", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]),
          v = Object(m.i)(u()(t, "table", !!l && "table-" + l, !!s && "table-bordered", !!c && "table-borderless", !!i && "table-striped", !(!f && !d) && "table-dark", !!p && "table-hover"), a),
          j = r.a.createElement(h, Object(n.a)({}, N, { ref: E, className: v }));if (b) {
        var O = !0 === b ? "table-responsive" : "table-responsive-" + b;return r.a.createElement(g, { className: O }, j);
      }return j;
    };f.propTypes = d, f.defaultProps = { tag: "table", responsiveTag: "div" }, t.a = f;
  }, 632: function _(e, t, a) {
    "use strict";
    a.r(t);var n = a(12),
        o = a(112),
        l = a(113),
        r = a(116),
        s = a(114),
        c = a(115),
        i = a(0),
        u = a.n(i),
        m = a(442),
        d = a(376),
        f = a(385),
        p = a.n(f),
        b = a(44),
        h = a(6),
        g = a(45),
        E = a(81),
        N = a(46),
        v = a(195),
        j = a(196),
        O = a(62),
        y = a(409),
        M = a(5),
        C = a.n(M),
        S = a(120),
        k = Object(S.a)(),
        T = { loadNotes: function loadNotes(e) {
        return C.a.get("/api/notes/" + e, { headers: { "Content-Type": "application/json", Authorization: "Bearer " + k, "Access-Control-Allow-Methods": "*" } }).then(function (e) {
          return e.data;
        });
      }, loadNoteById: function loadNoteById(e) {
        return C.a.get("/api/notes/" + e, { headers: { "Content-Type": "application/json", Authorization: "Bearer " + k } }).then(function (e) {
          return e.data;
        });
      }, saveNote: function saveNote(e) {
        return C.a.post("/api/notes", { data: e, headers: { "Content-Type": "application/json", Authorization: "Bearer " + k, "Access-Control-Allow-Methods": "*" }, mode: "cors" }).then(function (e) {
          return e.data;
        });
      }, updateNote: function updateNote(e) {
        return C.a.put("/api/notes", { method: "PUT", data: e, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (e) {
          return e.data;
        });
      }, deleteNoteById: function deleteNoteById(e) {
        return C.a.delete("/api/notes/" + e, { headers: { "Content-Type": "application/json", Authorization: "Bearer " + k } }).then(function (e) {
          return e.data;
        });
      } },
        D = u.a.lazy(function () {
      return Promise.all([a.e(2), a.e(4), a.e(6), a.e(25)]).then(a.bind(null, 612));
    }),
        w = function (e) {
      function t(e) {
        var a;return Object(o.a)(this, t), (a = Object(r.a)(this, Object(s.a)(t).call(this, e))).noteHandler = function (e) {
          var t = Object.assign({}, a.state.modalNote);t[e.target.name] = e.target.value, a.setState({ modalNote: t });
        }, a.saveNote = function () {
          var e = Object.assign({}, a.state.modalNote);e.cu = a.state.customer._id;Object(d.validateAll)(e, { date: "required|string", comment: "required|string" }).then(function () {
            e._id ? T.updateNote(e).then(function (e) {
              e.success && a.setState(function (t) {
                return { notes: [].concat(Object(n.a)(t.notes.filter(function (t) {
                    return t._id !== e.data._id;
                  })), [Object.assign({}, e.data)]) };
              });
            }) : T.saveNote(e).then(function (e) {
              e.success && a.setState(function (t) {
                return { notes: [].concat(Object(n.a)(t.notes), [Object.assign({}, e.data)]) };
              });
            });
          }).catch(function (e) {
            console.log(e);var t = {};e.forEach(function (e) {
              return t[e.field] = e.message;
            }), a.setState({ errors: t });
          }), a.setState({ modalNote: {} });
        }, a.editNote = function (e) {
          a.setState(function (t) {
            return { modalNote: t.notes.find(function (t) {
                return t._id === e;
              }) };
          });
        }, a.deleteNote = function (e) {
          T.deleteNoteById(e).then(function (t) {
            t.success && a.setState(function (t) {
              return { notes: Object(n.a)(t.notes.filter(function (t) {
                  return t._id !== e;
                })) };
            });
          });
        }, a.openModal = function () {
          a.setState({ modalNote: { date: "", comment: "" } });
        }, a.closeModal = function () {
          a.setState({ modalNote: {} });
        }, a.state = { customer: {}, notes: [], modalNote: {}, errors: {} }, a;
      }return Object(c.a)(t, e), Object(l.a)(t, [{ key: "componentDidMount", value: function value() {
          var e = this,
              t = this.props.match.params.id;y.a.loadCustomerById(t).then(function (t) {
            t.success && T.loadNotes(t.data._id).then(function (a) {
              if (console.log(a), a.success) {
                var n = a.data.sort(function (e, t) {
                  return new Date(t.date) - new Date(e.date);
                });e.setState({ customer: t.data, notes: n });
              } else e.setState({ customer: t.data });
            });
          });
        } }, { key: "momentFormat", value: function value(e) {
          return p()(e).format("MMM Do YY");
        } }, { key: "render", value: function value() {
          var e = this,
              t = this.state.customer;return u.a.createElement("div", { className: "animated fadeIn" }, u.a.createElement(b.a, { className: "d-flex" }, u.a.createElement(h.a, { lg: 7 }, u.a.createElement(g.a, { className: "full-height" }, u.a.createElement(E.a, null, u.a.createElement(b.a, null, u.a.createElement(h.a, { lg: 4 }, u.a.createElement("strong", null, u.a.createElement("i", { className: "icon-info pr-1" }), "Customer :"), " ", t.name, " ", u.a.createElement(m.a, { className: "pl-1", to: { pathname: "/customer/edit/".concat(t._id), state: { customer: t } } }, u.a.createElement("i", { className: "fa fa-edit customerEdit" }))), u.a.createElement(h.a, { lg: 4, className: "purple" }, u.a.createElement("strong", null, "Final Change:"), " ", t.finalChangesDate ? this.momentFormat(t.finalChangesDate) : "Not Set"), u.a.createElement(h.a, { lg: 4, className: "purple" }, u.a.createElement("strong", null, "Final Change:"), " ", t.goLiveDate ? this.momentFormat(t.goLiveDate) : "Not Set"))), u.a.createElement(N.a, null, u.a.createElement(v.a, null, u.a.createElement(j.a, null, u.a.createElement("strong", null, "Name:"), " ", t.name), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Url:"), " ", t.url), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Kickoff Date:"), " ", t.kickoffDate ? this.momentFormat(t.kickoffDate) : "Not Set"), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Status:"), " ", t.status), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Services:"), " ", t.services && t.services.toString()), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Assigned Developer:"), " ", t.dev ? "".concat(t.dev.firstName, " ").concat(t.dev.lastName) : "Not Set"), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Assigned PM:"), " ", t.pm ? "".concat(t.pm.firstName, " ").concat(t.pm.lastName) : "Not Set"), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Contact Name:"), " ", t.contact && t.contact.contactName), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Contact Email:"), " ", t.contact && t.contact.contactEmail), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Contact Number:"), " ", t.contact && t.contact.contactNumber), u.a.createElement(j.a, null, u.a.createElement("strong", null, "Contact Location:"), " ", t.contact && t.contact.contactLocation))))), u.a.createElement(h.a, { lg: 5 }, u.a.createElement(g.a, { className: "full-height" }, u.a.createElement(E.a, null, u.a.createElement("strong", null, u.a.createElement("i", { className: "fa fa-history pr-1 " }), "Activities")), u.a.createElement(N.a, null, u.a.createElement(O.a, { responsive: !0, striped: !0, hover: !0 }, u.a.createElement("thead", null, u.a.createElement("tr", null, u.a.createElement("th", null, "Status"), u.a.createElement("th", null, "date"))), u.a.createElement("tbody", null, t.log && t.log.map(function (e, t) {
            return u.a.createElement("tr", { key: t }, u.a.createElement("td", null, e.status), u.a.createElement("td", null, p()(e.time).format("MMM Do YY, h:mm:ss a")));
          }))))))), u.a.createElement(D, { modalNote: this.state.modalNote, closeModal: this.closeModal, openModal: this.openModal, saveNote: this.saveNote, noteHandler: this.noteHandler, errors: this.state.errors }), u.a.createElement(O.a, { className: "mt-5 text-center" }, u.a.createElement("thead", null, u.a.createElement("tr", null, u.a.createElement("td", null, "Date"), u.a.createElement("td", null, "Note"), u.a.createElement("td", null, "Edit"), u.a.createElement("td", null, "Delete"))), u.a.createElement("tbody", null, this.state.notes.map(function (t) {
            return u.a.createElement("tr", null, u.a.createElement("td", null, t.date), u.a.createElement("td", null, t.comment), u.a.createElement("td", { className: "text-center" }, u.a.createElement("button", { className: "oc-btn", onClick: function onClick() {
                return e.editNote(t._id);
              } }, u.a.createElement("i", { className: "fa fa-edit" }))), u.a.createElement("td", { className: "text-center" }, u.a.createElement("button", { className: "oc-btn", onClick: function onClick(a) {
                return e.deleteNote(t._id);
              } }, u.a.createElement("i", { className: "fa fa-trash" }))));
          }))));
        } }]), t;
    }(i.Component);t.default = w;
  } }]);
//# sourceMappingURL=18.7e90564a.chunk.js.map
//# sourceMappingURL=18.7e90564a.chunk.js.map