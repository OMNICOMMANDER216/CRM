"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[24], { 421: function _(e, t, n) {
    "use strict";
    var a = n(5),
        o = n.n(a),
        s = n(120),
        r = Object(s.a)(),
        i = { loadTasks: function loadTasks(e) {
        return o.a.get("/api/tasks/".concat(e), { headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(r), "Access-Control-Allow-Methods": "*" } }).then(function (e) {
          return e.data;
        });
      }, loadTaskById: function loadTaskById(e) {
        return o.a.get("/api/tasks/".concat(e), { headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(r) } }).then(function (e) {
          return e.data;
        });
      }, createTask: function createTask(e) {
        return o.a.post("/api/tasks", { data: e, headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(r), "Access-Control-Allow-Methods": "*" }, mode: "cors" }).then(function (e) {
          return e.data;
        });
      }, updateTask: function updateTask(e) {
        return o.a.put("/api/tasks", { method: "PUT", data: e, headers: { "Content-Type": "application/json", "Access-Control-Allow-Methods": "*" } }).then(function (e) {
          return e.data;
        });
      }, deleteTaskById: function deleteTaskById(e) {
        return o.a.delete("/api/tasks/".concat(e), { headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(r) } }).then(function (e) {
          return e.data;
        });
      } };t.a = i;
  }, 422: function _(e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return P;
    }), n.d(t, "b", function () {
      return W;
    });var a = n(9),
        o = n(36),
        s = n(57),
        r = n(0),
        i = n.n(r),
        l = n(1),
        c = n.n(l),
        d = n(349),
        u = n.n(d),
        p = n(361),
        f = n.n(p),
        m = n(360),
        g = n.n(m),
        b = n(118),
        h = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" },
        v = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" },
        T = { SHOW: 0, CLEAR: 1, DID_MOUNT: 2, WILL_UNMOUNT: 3, ON_CHANGE: 4 },
        y = function y() {};function O(e) {
      return "number" === typeof e && !isNaN(e) && e > 0;
    }function E(e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    }var C = !("undefined" === typeof window || !window.document || !window.document.createElement);var k,
        N = ((k = function k(e, t, n) {
      var a = e[t];return !1 === a || O(a) ? null : new Error(n + " expect " + t + " \n      to be a valid Number > 0 or equal to false. " + a + " given.");
    }).isRequired = function (e, t, n) {
      if ("undefined" === typeof e[t]) return new Error("The prop " + t + " is marked as required in \n      " + n + ", but its value is undefined.");k(e, t, n);
    }, k);function _(e) {
      var t,
          n = e.delay,
          o = e.isRunning,
          s = e.closeToast,
          r = e.type,
          l = e.hide,
          c = e.className,
          d = e.style,
          p = e.controlledProgress,
          f = e.progress,
          m = e.isProgressDone,
          g = e.rtl,
          b = Object(a.a)({}, d, { animationDuration: n + "ms", animationPlayState: o ? "running" : "paused", opacity: l ? 0 : 1, transform: p ? "scaleX(" + f + ")" : null }),
          h = u()("Toastify__progress-bar", p ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar--" + r, { "Toastify__progress-bar--rtl": g }, c),
          v = ((t = {})[p && m ? "onTransitionEnd" : "onAnimationEnd"] = p && !m ? null : s, t);return i.a.createElement("div", Object(a.a)({ className: h, style: b }, v));
    }function j(e) {
      return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
    }_.propTypes = { delay: N.isRequired, isRunning: c.a.bool.isRequired, closeToast: c.a.func.isRequired, rtl: c.a.bool.isRequired, type: c.a.string, hide: c.a.bool, className: c.a.oneOfType([c.a.string, c.a.object]), progress: c.a.number, controlledProgress: c.a.bool, isProgressDone: c.a.bool }, _.defaultProps = { type: v.DEFAULT, hide: !1 };var D = C && /(msie|trident)/i.test(navigator.userAgent),
        S = function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) {
          a[o] = arguments[o];
        }return (t = e.call.apply(e, [this].concat(a)) || this).state = { isRunning: !0, preventExitTransition: !1 }, t.flag = { canCloseOnClick: !0, canDrag: !1 }, t.drag = { start: 0, x: 0, y: 0, deltaX: 0, removalDistance: 0 }, t.boundingRect = null, t.ref = null, t.pauseToast = function () {
          t.props.autoClose && t.setState({ isRunning: !1 });
        }, t.playToast = function () {
          t.props.autoClose && t.setState({ isRunning: !0 });
        }, t.onDragStart = function (e) {
          t.flag.canCloseOnClick = !0, t.flag.canDrag = !0, t.boundingRect = t.ref.getBoundingClientRect(), t.ref.style.transition = "", t.drag.start = t.drag.x = j(e.nativeEvent), t.drag.removalDistance = t.ref.offsetWidth * (t.props.draggablePercent / 100);
        }, t.onDragMove = function (e) {
          t.flag.canDrag && (t.state.isRunning && t.pauseToast(), t.drag.x = j(e), t.drag.deltaX = t.drag.x - t.drag.start, t.drag.y = function (e) {
            return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
          }(e), t.drag.start !== t.drag.x && (t.flag.canCloseOnClick = !1), t.ref.style.transform = "translateX(" + t.drag.deltaX + "px)", t.ref.style.opacity = 1 - Math.abs(t.drag.deltaX / t.drag.removalDistance));
        }, t.onDragEnd = function (e) {
          if (t.flag.canDrag) {
            if (t.flag.canDrag = !1, Math.abs(t.drag.deltaX) > t.drag.removalDistance) return void t.setState({ preventExitTransition: !0 }, t.props.closeToast);t.ref.style.transition = "transform 0.2s, opacity 0.2s", t.ref.style.transform = "translateX(0)", t.ref.style.opacity = 1;
          }
        }, t.onDragTransitionEnd = function () {
          if (t.boundingRect) {
            var e = t.boundingRect,
                n = e.top,
                a = e.bottom,
                o = e.left,
                s = e.right;t.props.pauseOnHover && t.drag.x >= o && t.drag.x <= s && t.drag.y >= n && t.drag.y <= a ? t.pauseToast() : t.playToast();
          }
        }, t.onExitTransitionEnd = function () {
          if (D) t.props.onExited();else {
            var e = t.ref.scrollHeight,
                n = t.ref.style;requestAnimationFrame(function () {
              n.minHeight = "initial", n.height = e + "px", n.transition = "all 0.4s ", requestAnimationFrame(function () {
                n.height = 0, n.padding = 0, n.margin = 0;
              }), setTimeout(function () {
                return t.props.onExited();
              }, 400);
            });
          }
        }, t;
      }Object(s.a)(t, e);var n = t.prototype;return n.componentDidMount = function () {
        this.props.onOpen(this.props.children.props), this.props.draggable && this.bindDragEvents(), this.props.pauseOnFocusLoss && this.bindFocusEvents();
      }, n.componentDidUpdate = function (e) {
        e.draggable !== this.props.draggable && (this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents()), e.pauseOnFocusLoss !== this.props.pauseOnFocusLoss && (this.props.pauseOnFocusLoss ? this.bindFocusEvents() : this.unbindFocusEvents());
      }, n.componentWillUnmount = function () {
        this.props.onClose(this.props.children.props), this.props.draggable && this.unbindDragEvents(), this.props.pauseOnFocusLoss && this.unbindFocusEvents();
      }, n.bindFocusEvents = function () {
        window.addEventListener("focus", this.playToast), window.addEventListener("blur", this.pauseToast);
      }, n.unbindFocusEvents = function () {
        window.removeEventListener("focus", this.playToast), window.removeEventListener("blur", this.pauseToast);
      }, n.bindDragEvents = function () {
        document.addEventListener("mousemove", this.onDragMove), document.addEventListener("mouseup", this.onDragEnd), document.addEventListener("touchmove", this.onDragMove), document.addEventListener("touchend", this.onDragEnd);
      }, n.unbindDragEvents = function () {
        document.removeEventListener("mousemove", this.onDragMove), document.removeEventListener("mouseup", this.onDragEnd), document.removeEventListener("touchmove", this.onDragMove), document.removeEventListener("touchend", this.onDragEnd);
      }, n.render = function () {
        var e = this,
            t = this.props,
            n = t.closeButton,
            o = t.children,
            s = t.autoClose,
            r = t.pauseOnHover,
            l = t.closeOnClick,
            c = t.type,
            d = t.hideProgressBar,
            p = t.closeToast,
            f = t.transition,
            m = t.position,
            g = t.className,
            b = t.bodyClassName,
            h = t.progressClassName,
            v = t.progressStyle,
            T = t.updateId,
            y = t.role,
            O = t.progress,
            E = t.isProgressDone,
            C = t.rtl,
            k = { className: u()("Toastify__toast", "Toastify__toast--" + c, { "Toastify__toast--rtl": C }, g) };s && r && (k.onMouseEnter = this.pauseToast, k.onMouseLeave = this.playToast), l && (k.onClick = function () {
          return e.flag.canCloseOnClick && p();
        });var N = parseFloat(O) === O;return i.a.createElement(f, { in: this.props.in, appear: !0, onExited: this.onExitTransitionEnd, position: m, preventExitTransition: this.state.preventExitTransition }, i.a.createElement("div", Object(a.a)({}, k, { ref: function ref(t) {
            return e.ref = t;
          }, onMouseDown: this.onDragStart, onTouchStart: this.onDragStart, onMouseUp: this.onDragTransitionEnd, onTouchEnd: this.onDragTransitionEnd }), i.a.createElement("div", Object(a.a)({}, this.props.in && { role: y }, { className: u()("Toastify__toast-body", b) }), o), n && n, (s || N) && i.a.createElement(_, Object(a.a)({}, T && !N ? { key: "pb-" + T } : {}, { rtl: C, delay: s, isRunning: this.state.isRunning, closeToast: p, hide: d, type: c, style: v, className: h, controlledProgress: N, isProgressDone: E, progress: O }))));
      }, t;
    }(r.Component);function w(e) {
      var t = e.closeToast,
          n = e.type,
          a = e.ariaLabel;return i.a.createElement("button", { className: "Toastify__close-button Toastify__close-button--" + n, type: "button", onClick: t, "aria-label": a }, "\u2716");
    }function R(e) {
      var t = e.enter,
          n = e.exit,
          s = e.duration,
          r = void 0 === s ? 750 : s,
          l = e.appendPosition,
          c = void 0 !== l && l;return function (e) {
        var s,
            l,
            d = e.children,
            u = e.position,
            p = e.preventExitTransition,
            f = Object(o.a)(e, ["children", "position", "preventExitTransition"]),
            m = c ? t + "--" + u : t,
            b = c ? n + "--" + u : n;Array.isArray(r) && 2 === r.length ? (s = r[0], l = r[1]) : s = l = r;return i.a.createElement(g.a, Object(a.a)({}, f, { timeout: p ? 0 : { enter: s, exit: l }, onEnter: function onEnter(e) {
            e.classList.add(m), e.style.animationFillMode = "forwards", e.style.animationDuration = .001 * s + "s";
          }, onEntered: function onEntered(e) {
            e.classList.remove(m), e.style.cssText = "";
          }, onExit: p ? y : function (e) {
            e.classList.add(b), e.style.animationFillMode = "forwards", e.style.animationDuration = .001 * l + "s";
          } }), d);
      };
    }S.propTypes = { closeButton: c.a.oneOfType([c.a.node, c.a.bool]).isRequired, autoClose: N.isRequired, children: c.a.node.isRequired, closeToast: c.a.func.isRequired, position: c.a.oneOf(E(h)).isRequired, pauseOnHover: c.a.bool.isRequired, pauseOnFocusLoss: c.a.bool.isRequired, closeOnClick: c.a.bool.isRequired, transition: c.a.func.isRequired, rtl: c.a.bool.isRequired, hideProgressBar: c.a.bool.isRequired, draggable: c.a.bool.isRequired, draggablePercent: c.a.number.isRequired, in: c.a.bool, onExited: c.a.func, onOpen: c.a.func, onClose: c.a.func, type: c.a.oneOf(E(v)), className: c.a.oneOfType([c.a.string, c.a.object]), bodyClassName: c.a.oneOfType([c.a.string, c.a.object]), progressClassName: c.a.oneOfType([c.a.string, c.a.object]), progressStyle: c.a.object, progress: c.a.number, isProgressDone: c.a.bool, updateId: c.a.oneOfType([c.a.string, c.a.number]), ariaLabel: c.a.string, containerId: c.a.oneOfType([c.a.string, c.a.number]) }, S.defaultProps = { type: v.DEFAULT, in: !0, onOpen: y, onClose: y, className: null, bodyClassName: null, progressClassName: null, updateId: null, role: "alert" }, w.propTypes = { closeToast: c.a.func, arialLabel: c.a.string }, w.defaultProps = { ariaLabel: "close" };var I = R({ enter: "Toastify__bounce-enter", exit: "Toastify__bounce-exit", appendPosition: !0 }),
        x = (R({ enter: "Toastify__slide-enter", exit: "Toastify__slide-exit", duration: [450, 750], appendPosition: !0 }), R({ enter: "Toastify__zoom-enter", exit: "Toastify__zoom-exit" }), R({ enter: "Toastify__flip-enter", exit: "Toastify__flip-exit" }), { list: new Map(), on: function on(e, t) {
        return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
      }, off: function off(e) {
        return this.list.delete(e), this;
      }, emit: function emit(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
          n[a - 1] = arguments[a];
        }this.list.has(e) && this.list.get(e).forEach(function (e) {
          return setTimeout(function () {
            e.apply(void 0, n);
          }, 0);
        });
      } }),
        P = function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) {
          a[o] = arguments[o];
        }return (t = e.call.apply(e, [this].concat(a)) || this).state = { toast: [] }, t.toastKey = 1, t.collection = {}, t.isToastActive = function (e) {
          return -1 !== t.state.toast.indexOf(e);
        }, t;
      }Object(s.a)(t, e);var n = t.prototype;return n.componentDidMount = function () {
        var e = this;x.on(T.SHOW, function (t, n) {
          return e.buildToast(t, n);
        }).on(T.CLEAR, function (t) {
          return null == t ? e.clear() : e.removeToast(t);
        }).emit(T.DID_MOUNT, this);
      }, n.componentWillUnmount = function () {
        x.off(T.SHOW).off(T.CLEAR).emit(T.WILL_UNMOUNT);
      }, n.removeToast = function (e) {
        this.setState({ toast: this.state.toast.filter(function (t) {
            return t !== e;
          }) }, this.dispatchChange);
      }, n.dispatchChange = function () {
        x.emit(T.ON_CHANGE, this.state.toast.length);
      }, n.makeCloseButton = function (e, t, n) {
        var a = this,
            o = this.props.closeButton;return Object(r.isValidElement)(e) || !1 === e ? o = e : !0 === e && (o = i.a.createElement(w, null)), !1 !== o && Object(r.cloneElement)(o, { closeToast: function closeToast() {
            return a.removeToast(t);
          }, type: n });
      }, n.getAutoCloseDelay = function (e) {
        return !1 === e || O(e) ? e : this.props.autoClose;
      }, n.canBeRendered = function (e) {
        return Object(r.isValidElement)(e) || "string" === typeof e || "number" === typeof e || "function" === typeof e;
      }, n.parseClassName = function (e) {
        return "string" === typeof e ? e : null !== e && "object" === (typeof e === "undefined" ? "undefined" : _typeof(e)) && "toString" in e ? e.toString() : null;
      }, n.belongToContainer = function (e) {
        return e.containerId === this.props.containerId;
      }, n.buildToast = function (e, t) {
        var n = this,
            a = t.delay,
            s = Object(o.a)(t, ["delay"]);if (!this.canBeRendered(e)) throw new Error("The element you provided cannot be rendered. You provided an element of type " + (typeof e === "undefined" ? "undefined" : _typeof(e)));if (this.props.enableMultiContainer && !this.belongToContainer(s)) return null;var i = s.toastId,
            l = function l() {
          return n.removeToast(i);
        },
            c = { id: i, key: s.key || this.toastKey++, type: s.type, closeToast: l, updateId: s.updateId, rtl: this.props.rtl, position: s.position || this.props.position, transition: s.transition || this.props.transition, className: this.parseClassName(s.className || this.props.toastClassName), bodyClassName: this.parseClassName(s.bodyClassName || this.props.bodyClassName), closeButton: this.makeCloseButton(s.closeButton, i, s.type), pauseOnHover: "boolean" === typeof s.pauseOnHover ? s.pauseOnHover : this.props.pauseOnHover, pauseOnFocusLoss: "boolean" === typeof s.pauseOnFocusLoss ? s.pauseOnFocusLoss : this.props.pauseOnFocusLoss, draggable: "boolean" === typeof s.draggable ? s.draggable : this.props.draggable, draggablePercent: "number" !== typeof s.draggablePercent || isNaN(s.draggablePercent) ? this.props.draggablePercent : s.draggablePercent, closeOnClick: "boolean" === typeof s.closeOnClick ? s.closeOnClick : this.props.closeOnClick, progressClassName: this.parseClassName(s.progressClassName || this.props.progressClassName), progressStyle: this.props.progressStyle, autoClose: this.getAutoCloseDelay(s.autoClose), hideProgressBar: "boolean" === typeof s.hideProgressBar ? s.hideProgressBar : this.props.hideProgressBar, progress: parseFloat(s.progress), isProgressDone: s.isProgressDone };"function" === typeof s.onOpen && (c.onOpen = s.onOpen), "function" === typeof s.onClose && (c.onClose = s.onClose), Object(r.isValidElement)(e) && "string" !== typeof e.type && "number" !== typeof e.type ? e = Object(r.cloneElement)(e, { closeToast: l }) : "function" === typeof e && (e = e({ closeToast: l })), O(a) ? setTimeout(function () {
          n.appendToast(c, e, s.staleToastId);
        }, a) : this.appendToast(c, e, s.staleToastId);
      }, n.appendToast = function (e, t, n) {
        var o,
            s = e.id,
            r = e.updateId;this.collection = Object(a.a)({}, this.collection, ((o = {})[s] = { options: e, content: t, position: e.position }, o)), this.setState({ toast: (r ? [].concat(this.state.toast) : [].concat(this.state.toast, [s])).filter(function (e) {
            return e !== n;
          }) }, this.dispatchChange);
      }, n.clear = function () {
        this.setState({ toast: [] });
      }, n.renderToast = function () {
        var e = this,
            t = {},
            n = this.props,
            o = n.className,
            s = n.style;return (n.newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection)).forEach(function (n) {
          var o = e.collection[n],
              s = o.position,
              r = o.options,
              l = o.content;t[s] || (t[s] = []), -1 !== e.state.toast.indexOf(r.id) ? t[s].push(i.a.createElement(S, Object(a.a)({}, r, { isDocumentHidden: e.state.isDocumentHidden, key: "toast-" + r.key }), l)) : (t[s].push(null), delete e.collection[n]);
        }), Object.keys(t).map(function (n) {
          var r = 1 === t[n].length && null === t[n][0],
              l = { className: u()("Toastify__toast-container", "Toastify__toast-container--" + n, { "Toastify__toast-container--rtl": e.props.rtl }, e.parseClassName(o)), style: r ? Object(a.a)({}, s, { pointerEvents: "none" }) : Object(a.a)({}, s) };return i.a.createElement(f.a, Object(a.a)({}, l, { key: "container-" + n }), t[n]);
        });
      }, n.render = function () {
        return i.a.createElement("div", { className: "Toastify" }, this.renderToast());
      }, t;
    }(r.Component);P.propTypes = { position: c.a.oneOf(E(h)), autoClose: N, closeButton: c.a.oneOfType([c.a.node, c.a.bool]), hideProgressBar: c.a.bool, pauseOnHover: c.a.bool, closeOnClick: c.a.bool, newestOnTop: c.a.bool, className: c.a.oneOfType([c.a.string, c.a.object]), style: c.a.object, toastClassName: c.a.oneOfType([c.a.string, c.a.object]), bodyClassName: c.a.oneOfType([c.a.string, c.a.object]), progressClassName: c.a.oneOfType([c.a.string, c.a.object]), progressStyle: c.a.object, transition: c.a.func, rtl: c.a.bool, draggable: c.a.bool, draggablePercent: c.a.number, pauseOnFocusLoss: c.a.bool, enableMultiContainer: c.a.bool, containerId: c.a.oneOfType([c.a.string, c.a.number]) }, P.defaultProps = { position: h.TOP_RIGHT, transition: I, rtl: !1, autoClose: 5e3, hideProgressBar: !1, closeButton: i.a.createElement(w, null), pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, newestOnTop: !1, draggable: !0, draggablePercent: 80, className: null, style: null, toastClassName: null, bodyClassName: null, progressClassName: null, progressStyle: null };var M = null,
        A = null,
        H = {},
        L = [],
        B = !1;function F(e, t) {
      return Object(a.a)({}, e, { type: t, toastId: U(e) });
    }function q() {
      return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
    }function U(e) {
      return e && ("string" === typeof e.toastId || "number" === typeof e.toastId && !isNaN(e.toastId)) ? e.toastId : q();
    }function z(e, t) {
      return M ? x.emit(T.SHOW, e, t) : (L.push({ action: T.SHOW, content: e, options: t }), B && C && (A = document.createElement("div"), document.body.appendChild(A), Object(b.render)(i.a.createElement(P, H), A))), t.toastId;
    }var W = function W(e, t) {
      return z(e, F(t, t && t.type || v.DEFAULT));
    },
        X = function X(e) {
      v[e] !== v.DEFAULT && (W[v[e].toLowerCase()] = function (t, n) {
        return z(t, F(n, n && n.type || v[e]));
      });
    };for (var G in v) {
      X(G);
    }W.warn = W.warning, W.dismiss = function (e) {
      return void 0 === e && (e = null), M && x.emit(T.CLEAR, e);
    }, W.isActive = y, W.update = function (e, t) {
      setTimeout(function () {
        if (M && "undefined" !== typeof M.collection[e]) {
          var n = M.collection[e],
              o = n.options,
              s = n.content,
              r = Object(a.a)({}, o, t, { toastId: t.toastId || e });t.toastId && t.toastId !== e ? r.staleToastId = e : r.updateId = q();var i = "undefined" !== typeof r.render ? r.render : s;delete r.render, z(i, r);
        }
      }, 0);
    }, W.done = function (e, t) {
      void 0 === t && (t = 1), W.update(e, { progress: t, isProgressDone: !0 });
    }, W.onChange = function (e) {
      "function" === typeof e && x.on(T.ON_CHANGE, e);
    }, W.configure = function (e) {
      B = !0, H = e;
    }, W.POSITION = h, W.TYPE = v, x.on(T.DID_MOUNT, function (e) {
      M = e, W.isActive = function (e) {
        return M.isToastActive(e);
      }, L.forEach(function (e) {
        x.emit(e.action, e.content, e.options);
      }), L = [];
    }).on(T.WILL_UNMOUNT, function () {
      M = null, W.isActive = y, C && A && document.body.removeChild(A);
    });
  }, 454: function _(e, t, n) {
    "use strict";
    var a = n(9),
        o = n(36),
        s = n(57),
        r = n(117),
        i = n(0),
        l = n.n(i),
        c = n(1),
        d = n.n(c),
        u = n(349),
        p = n.n(u),
        f = n(364),
        m = n(350),
        g = n(61),
        b = { caret: d.a.bool, color: d.a.string, children: d.a.node, className: d.a.string, cssModule: d.a.object, disabled: d.a.bool, onClick: d.a.func, "aria-haspopup": d.a.bool, split: d.a.bool, tag: m.m, nav: d.a.bool },
        h = { isOpen: d.a.bool.isRequired, toggle: d.a.func.isRequired, inNavbar: d.a.bool.isRequired },
        v = function (e) {
      function t(t) {
        var n;return (n = e.call(this, t) || this).onClick = n.onClick.bind(Object(r.a)(Object(r.a)(n))), n;
      }Object(s.a)(t, e);var n = t.prototype;return n.onClick = function (e) {
        this.props.disabled ? e.preventDefault() : (this.props.nav && !this.props.tag && e.preventDefault(), this.props.onClick && this.props.onClick(e), this.context.toggle(e));
      }, n.render = function () {
        var e,
            t = this.props,
            n = t.className,
            s = t.color,
            r = t.cssModule,
            i = t.caret,
            c = t.split,
            d = t.nav,
            u = t.tag,
            b = Object(o.a)(t, ["className", "color", "cssModule", "caret", "split", "nav", "tag"]),
            h = b["aria-label"] || "Toggle Dropdown",
            v = Object(m.i)(p()(n, { "dropdown-toggle": i || c, "dropdown-toggle-split": c, "nav-link": d }), r),
            T = b.children || l.a.createElement("span", { className: "sr-only" }, h);return d && !u ? (e = "a", b.href = "#") : u ? e = u : (e = g.a, b.color = s, b.cssModule = r), this.context.inNavbar ? l.a.createElement(e, Object(a.a)({}, b, { className: v, onClick: this.onClick, "aria-expanded": this.context.isOpen, children: T })) : l.a.createElement(f.c, Object(a.a)({}, b, { className: v, component: e, onClick: this.onClick, "aria-expanded": this.context.isOpen, children: T }));
      }, t;
    }(l.a.Component);v.propTypes = b, v.defaultProps = { "aria-haspopup": !0, color: "secondary" }, v.contextTypes = h, t.a = v;
  }, 455: function _(e, t, n) {
    "use strict";
    var a = n(9),
        o = n(366),
        s = n(36),
        r = n(0),
        i = n.n(r),
        l = n(1),
        c = n.n(l),
        d = n(349),
        u = n.n(d),
        p = n(364),
        f = n(350),
        m = { tag: f.m, children: c.a.node.isRequired, right: c.a.bool, flip: c.a.bool, modifiers: c.a.object, className: c.a.string, cssModule: c.a.object, persist: c.a.bool },
        g = { isOpen: c.a.bool.isRequired, direction: c.a.oneOf(["up", "down", "left", "right"]).isRequired, inNavbar: c.a.bool.isRequired },
        b = { flip: { enabled: !1 } },
        h = { up: "top", left: "left", right: "right", down: "bottom" },
        v = function v(e, t) {
      var n = e.className,
          r = e.cssModule,
          l = e.right,
          c = e.tag,
          d = e.flip,
          m = e.modifiers,
          g = e.persist,
          v = Object(s.a)(e, ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist"]),
          T = Object(f.i)(u()(n, "dropdown-menu", { "dropdown-menu-right": l, show: t.isOpen }), r),
          y = c;if (g || t.isOpen && !t.inNavbar) {
        y = p.b;var O = h[t.direction] || "bottom",
            E = l ? "end" : "start";v.placement = O + "-" + E, v.component = c, v.modifiers = d ? m : Object(o.a)({}, m, b);
      }return i.a.createElement(y, Object(a.a)({ tabIndex: "-1", role: "menu" }, v, { "aria-hidden": !t.isOpen, className: T, "x-placement": v.placement }));
    };v.propTypes = m, v.defaultProps = { tag: "div", flip: !0 }, v.contextTypes = g, t.a = v;
  }, 456: function _(e, t, n) {
    "use strict";
    var a = n(9),
        o = n(36),
        s = n(57),
        r = n(117),
        i = n(0),
        l = n.n(i),
        c = n(1),
        d = n.n(c),
        u = n(349),
        p = n.n(u),
        f = n(350),
        m = { children: d.a.node, active: d.a.bool, disabled: d.a.bool, divider: d.a.bool, tag: f.m, header: d.a.bool, onClick: d.a.func, className: d.a.string, cssModule: d.a.object, toggle: d.a.bool },
        g = { toggle: d.a.func },
        b = function (e) {
      function t(t) {
        var n;return (n = e.call(this, t) || this).onClick = n.onClick.bind(Object(r.a)(Object(r.a)(n))), n.getTabIndex = n.getTabIndex.bind(Object(r.a)(Object(r.a)(n))), n;
      }Object(s.a)(t, e);var n = t.prototype;return n.onClick = function (e) {
        this.props.disabled || this.props.header || this.props.divider ? e.preventDefault() : (this.props.onClick && this.props.onClick(e), this.props.toggle && this.context.toggle(e));
      }, n.getTabIndex = function () {
        return this.props.disabled || this.props.header || this.props.divider ? "-1" : "0";
      }, n.render = function () {
        var e = this.getTabIndex(),
            t = e > -1 ? "menuitem" : void 0,
            n = Object(f.j)(this.props, ["toggle"]),
            s = n.className,
            r = n.cssModule,
            i = n.divider,
            c = n.tag,
            d = n.header,
            u = n.active,
            m = Object(o.a)(n, ["className", "cssModule", "divider", "tag", "header", "active"]),
            g = Object(f.i)(p()(s, { disabled: m.disabled, "dropdown-item": !i && !d, active: u, "dropdown-header": d, "dropdown-divider": i }), r);return "button" === c && (d ? c = "h6" : i ? c = "div" : m.href && (c = "a")), l.a.createElement(c, Object(a.a)({ type: "button" === c && (m.onClick || this.props.toggle) ? "button" : void 0 }, m, { tabIndex: e, role: t, className: g, onClick: this.onClick }));
      }, t;
    }(l.a.Component);b.propTypes = m, b.defaultProps = { tag: "button", toggle: !0 }, b.contextTypes = g, t.a = b;
  }, 62: function _(e, t, n) {
    "use strict";
    var a = n(9),
        o = n(36),
        s = n(0),
        r = n.n(s),
        i = n(1),
        l = n.n(i),
        c = n(349),
        d = n.n(c),
        u = n(350),
        p = { className: l.a.string, cssModule: l.a.object, size: l.a.string, bordered: l.a.bool, borderless: l.a.bool, striped: l.a.bool, inverse: Object(u.e)(l.a.bool, 'Please use the prop "dark"'), dark: l.a.bool, hover: l.a.bool, responsive: l.a.oneOfType([l.a.bool, l.a.string]), tag: u.m, responsiveTag: u.m, innerRef: l.a.oneOfType([l.a.func, l.a.string, l.a.object]) },
        f = function f(e) {
      var t = e.className,
          n = e.cssModule,
          s = e.size,
          i = e.bordered,
          l = e.borderless,
          c = e.striped,
          p = e.inverse,
          f = e.dark,
          m = e.hover,
          g = e.responsive,
          b = e.tag,
          h = e.responsiveTag,
          v = e.innerRef,
          T = Object(o.a)(e, ["className", "cssModule", "size", "bordered", "borderless", "striped", "inverse", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]),
          y = Object(u.i)(d()(t, "table", !!s && "table-" + s, !!i && "table-bordered", !!l && "table-borderless", !!c && "table-striped", !(!f && !p) && "table-dark", !!m && "table-hover"), n),
          O = r.a.createElement(b, Object(a.a)({}, T, { ref: v, className: y }));if (g) {
        var E = !0 === g ? "table-responsive" : "table-responsive-" + g;return r.a.createElement(h, { className: E }, O);
      }return O;
    };f.propTypes = p, f.defaultProps = { tag: "table", responsiveTag: "div" }, t.a = f;
  }, 629: function _(e, t, n) {
    "use strict";
    n.r(t);var a = {};n.r(a), n.d(a, "setSideTask", function () {
      return w;
    }), n.d(a, "updateSideTask", function () {
      return R;
    });var o = n(198),
        s = n(12),
        r = n(112),
        i = n(113),
        l = n(116),
        c = n(114),
        d = n(115),
        u = n(0),
        p = n.n(u),
        f = n(442),
        m = n(58),
        g = n(18),
        b = n(596),
        h = n(422),
        v = n(383),
        T = n(599),
        y = n(454),
        O = n(455),
        E = n(456),
        C = n(376),
        k = n(385),
        N = n.n(k),
        _ = n(56),
        j = n(421),
        D = n(129),
        S = n(3);function w(e) {
      return { type: S.a.SET_SIDE_TASK, task: e };
    }function R(e) {
      return { type: S.a.UPDATE_SIDE_TASK, task: e };
    }var I = n(44),
        x = n(45),
        P = n(81),
        M = n(46),
        A = n(62),
        H = n(80),
        L = p.a.lazy(function () {
      return n.e(29).then(n.bind(null, 620));
    }),
        B = { icon: { color: "#fff" }, card: { minWidth: "100%" } },
        F = function F(e) {
      var t = e.group,
          n = e.users,
          a = e.columns,
          o = e.changeHandler,
          s = e.saveHandler,
          r = e.isEditingHandler,
          i = e.editActive,
          l = e.editHandler,
          c = e.setSideTask,
          d = e.sideTask,
          u = e.removeTask,
          f = e.removeColumnHandler,
          m = e.disabled;return p.a.createElement(p.a.Fragment, null, p.a.createElement("div", null, p.a.createElement(I.a, { className: "full-width" }, p.a.createElement(x.a, { style: B.card }, p.a.createElement(P.a, null, p.a.createElement("i", { className: "fa fa-align-justify" }), "  ", p.a.createElement("h3", null, " ", t.title, " ")), p.a.createElement(M.a, null, p.a.createElement(A.a, { hover: !0, bordered: !0, striped: !0, responsive: !0, size: "sm" }, p.a.createElement("thead", null, p.a.createElement("tr", null, p.a.createElement("th", null, "edit/Remove"), a.map(function (e, t) {
        return p.a.createElement("th", { key: t }, e.title, " ", p.a.createElement("button", { onClick: function onClick() {
            return f(e._id);
          }, style: B.icon }, p.a.createElement("i", { className: "fa fa-trash ml-2" })), " ");
      }))), p.a.createElement("tbody", null, p.a.createElement(L, { tasks: t.tasks, users: n, isEditingHandler: r, saveHandler: s, changeHandler: o, editActive: i, setSideTask: c, sideTask: d, removeTask: u }), p.a.createElement("tr", null, p.a.createElement("td", null, m !== t._id && p.a.createElement("button", { type: "submit", onClick: l, size: "md", color: "primary", className: "m-2" }, p.a.createElement("i", { className: "fa fa-pencil" })), p.a.createElement("button", { type: "submit", onClick: s, size: "md", color: "primary", className: "m-2" }, p.a.createElement("i", { className: "fa fa-save" }))), p.a.createElement("th", { colSpan: a.length }, p.a.createElement(H.a, { type: "text", id: t._id, name: "new", placeholder: "name", disabled: m !== t._id, onChange: o }))))))))));
    },
        q = n(378),
        U = p.a.lazy(function () {
      return Promise.all([n.e(6), n.e(27)]).then(n.bind(null, 617));
    }),
        z = p.a.lazy(function () {
      return Promise.all([n.e(5), n.e(32), n.e(28)]).then(n.bind(null, 625));
    }),
        W = function (e) {
      function t(e) {
        var n;return Object(r.a)(this, t), (n = Object(l.a)(this, Object(c.a)(t).call(this, e))).loading = function () {
          return p.a.createElement("div", { className: "animated fadeIn pt-1 text-center" }, "Loading...");
        }, n.saveColumn = function () {
          var e = Object.assign({}, n.state.modalColumn),
              t = Object.assign({}, n.state.board);t.columns.push(e);Object(C.validateAll)(e, { title: "required|string", type: "required|string" }).then(function () {
            _.a.addBoardColumn(t).then(function (e) {
              return n.setState({ board: e.data });
            });n.setState({ newTask: { column: [] } });
          }).catch(function (e) {
            var t = {};e.forEach(function (e) {
              return t[e.field] = e.message;
            }), n.setState({ errors: t });
          }), n.setState({ modalColumn: {} });
        }, n.editColumn = function (e) {
          n.setState(function (t) {
            return { modalColumn: t.columns.find(function (t) {
                return t._id === e;
              }) };
          });
        }, n.changeHandler = function (e, t) {
          if (Object(q.isEmpty)(n.state.editing)) n.setState({ newTask: e.target.value });else {
            var a = Object.assign({}, n.state.editing);a.column[e.target.name].value = e.target.value, n.setState({ editing: a });
          }
        }, n.saveHandler = function (e) {
          if (n.state.editing._id) {
            var t = Object.assign({}, n.state.board),
                a = Object.assign({}, n.state.editing);j.a.updateTask(a).then(function (e) {
              var a = t.groups.find(function (t) {
                return t._id === e.data.group;
              });a.tasks = [].concat(Object(s.a)(a.tasks.filter(function (t) {
                return t._id !== e.data._id;
              })), [e.data]), t.groups = [].concat(Object(s.a)(t.groups.filter(function (e) {
                return e._id !== a._id;
              })), [a]).sort(function (e, t) {
                return e._id.localeCompare(t._id);
              }), n.setState({ board: t, editing: {} });
            });
          } else if (n.state.newTask) {
            var o = Object.assign({}, n.state.board),
                r = {};r.group = e, r.board = n.state.board._id, r.column = [], o.columns.forEach(function (e, t) {
              r.column[t] = {}, r.column[t].dataType = e.type, r.column[t].colRef = e._id;
            }), r.column[0].value = n.state.newTask, j.a.createTask(r).then(function (e) {
              var t = o.groups.find(function (t) {
                return t._id === e.data.group;
              });t.tasks.push(e.data), o.groups = [].concat(Object(s.a)(o.groups.filter(function (e) {
                return e._id !== t._id;
              })), [t]).sort(function (e, t) {
                return e._id.localeCompare(t._id);
              }), n.setState({ board: o }), h.b.info("Task Created", { position: h.b.POSITION.TOP_CENTER });
            });
          }n.setState(function (e) {
            return { disabled: !e.disabled };
          });
        }, n.isEditingHandler = function (e) {
          n.props.sideTaskActions.setSideTask(void 0), n.setState({ editing: Object.assign({}, e), disabled: "", newTask: e });
        }, n.editHandler = function (e, t) {
          n.setState({ disabled: t, editing: {} });
        }, n.boardDeleteHandler = function () {
          n.props.foldersActions.deleteBoard(n.state.board), n.setState({ redirect: !0 });
        }, n.columnHandler = function (e) {
          var t = Object.assign({}, n.state.modalColumn);t[e.target.name] = e.target.value, n.setState({ modalColumn: t });
        }, n.editColumn = function (e) {
          n.setState(function (t) {
            return { modalColumn: t.columns.find(function (t) {
                return t._id === e;
              }) };
          });
        }, n.removeColumnHandler = function (e) {
          var t = { board: n.state.board, columnId: e };_.a.removeBoardColumn(t).then(function (e) {
            n.setState({ board: e.data });
          });
        }, n.toggle = function () {
          n.setState(function (e) {
            return { dropdownOpen: !e.dropdownOpen };
          });
        }, n.openModal = function () {
          n.setState({ modalColumn: { title: "", type: "" } });
        }, n.closeModal = function () {
          n.setState({ modalColumn: {} });
        }, n.moveBoard = function (e) {
          n.props.foldersActions.moveBoard(n.state.board, e);
        }, n.updateSideTask = function (e) {
          return n.setState({ sideTask: e });
        }, n.setSideTask = function (e) {
          Object(q.isEmpty)(n.state.sideTask) || n.state.sideTask._id !== e._id ? n.setState({ sideTask: e }) : n.setState({ sideTask: {} });
        }, n.removeTask = function (e) {
          j.a.deleteTaskById(e._id).then(function (t) {
            if (t.success) {
              var a = Object.assign({}, n.state.board),
                  o = a.groups.find(function (t) {
                return t._id === e.group;
              });o.tasks = o.tasks.filter(function (t) {
                return t._id !== e._id;
              }), a.groups = [].concat(Object(s.a)(a.groups.filter(function (e) {
                return e._id !== o._id;
              })), [o]).sort(function (e, t) {
                return e._id.localeCompare(t._id);
              }), n.setState({ board: a }), h.b.info("Task Removed !", { position: h.b.POSITION.TOP_CENTER });
            }
          });
        }, n.state = { board: {}, modalColumn: {}, newTask: "", sideTask: {}, editing: {}, dropdownOpen: !1, disabled: "", formData: {}, errors: {}, redirect: !1 }, n;
      }return Object(d.a)(t, e), Object(i.a)(t, [{ key: "componentDidMount", value: function value() {
          var e = this,
              t = this.props.match.params.id;_.a.loadBoardById(t).then(function (t) {
            var n = t.data;e.setState({ board: n });
          });
        } }, { key: "componentDidUpdate", value: function value(e) {
          var t = this;this.props.location !== e.location && _.a.loadBoardById(this.props.match.params.id).then(function (e) {
            var n = e.data;t.setState({ board: n });
          });
        } }, { key: "momentFormat", value: function value(e) {
          return N()(e).format("MMM Do YY");
        } }, { key: "render", value: function value() {
          var e = this,
              t = this.state,
              n = t.board,
              a = t.sideTask,
              o = t.newTask,
              s = t.editing,
              r = t.disabled,
              i = n.groups && n.groups.map(function (t, i) {
            return p.a.createElement(F, { key: i, group: t, columns: n.columns, users: e.props.users, boardId: n._id, newTask: o, sideTask: a, changeHandler: function changeHandler(n) {
                return e.changeHandler(n, t._id);
              }, saveHandler: function saveHandler(n) {
                return e.saveHandler(t._id);
              }, editHandler: function editHandler(n) {
                return e.editHandler(n, t._id);
              }, isEditingHandler: e.isEditingHandler, editActive: s, setSideTask: e.setSideTask, removeTask: e.removeTask, removeColumnHandler: e.removeColumnHandler, disabled: r });
          });return this.state.redirect ? p.a.createElement(b.a, { to: "/dashboard" }) : p.a.createElement(u.Fragment, null, p.a.createElement(h.a, null), p.a.createElement("div", { className: "animated fadeIn" }, p.a.createElement("h2", null, n.name, p.a.createElement(f.a, { className: "pl-1", to: { pathname: "/editBoard/".concat(n.folder), state: { boardId: n._id } } }, p.a.createElement("i", { className: "fa fa-pencil" })), p.a.createElement("button", { className: "fa-btn", onClick: this.boardDeleteHandler }, p.a.createElement("i", { className: "fa fa-trash" })), p.a.createElement("button", { className: "fa-btn", onClick: this.openModal }, p.a.createElement("i", { className: "fa fa-plus-circle" })), p.a.createElement(T.a, { isOpen: this.state.dropdownOpen, toggle: this.toggle }, p.a.createElement(y.a, { caret: !0 }, " Move board to"), p.a.createElement(O.a, null, p.a.createElement(E.a, { divider: !0 }), this.props.folders.map(function (t) {
            return p.a.createElement(E.a, { key: t._id, onClick: function onClick(n) {
                return e.moveBoard(t._id);
              } }, " ", t.name, " ");
          })))), i, p.a.createElement(U, { modalColumn: this.state.modalColumn, closeModal: this.closeModal, saveColumn: this.saveColumn, columnHandler: this.columnHandler, errors: this.state.errors }), p.a.createElement(v.a, { fixed: !0 }, p.a.createElement(u.Suspense, { fallback: this.loading() }, p.a.createElement(z, { task: this.state.sideTask, updateSideTask: this.updateSideTask })))));
        } }]), t;
    }(u.Component);t.default = Object(m.b)(function (e) {
      return { groups: e.groups, currentUser: e.auth.user, users: e.users, folders: e.folders, sideTask: Object(o.a)({}, e.sideTask[0]) };
    }, function (e) {
      return { foldersActions: Object(g.bindActionCreators)(D, e), sideTaskActions: Object(g.bindActionCreators)(a, e) };
    })(W);
  } }]);
//# sourceMappingURL=24.1c5aea23.chunk.js.map
//# sourceMappingURL=24.1c5aea23.chunk.js.map