"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5782], {
        7529: function(e, t, r) {
            r.d(t, {
                ZP: function() {
                    return n
                }
            });

            function n({
                enabled: e,
                enableEvents: t,
                placement: r,
                flip: n,
                offset: o,
                fixed: l,
                containerPadding: a,
                arrowElement: s,
                popperConfig: i = {}
            }) {
                var u, c, d, f, p;
                let b = function(e) {
                    let t = {};
                    return Array.isArray(e) ? (null == e || e.forEach(e => {
                        t[e.name] = e
                    }), t) : e || t
                }(i.modifiers);
                return Object.assign({}, i, {
                    placement: r,
                    enabled: e,
                    strategy: l ? "fixed" : i.strategy,
                    modifiers: function(e = {}) {
                        return Array.isArray(e) ? e : Object.keys(e).map(t => (e[t].name = t, e[t]))
                    }(Object.assign({}, b, {
                        eventListeners: {
                            enabled: t,
                            options: null == (u = b.eventListeners) ? void 0 : u.options
                        },
                        preventOverflow: Object.assign({}, b.preventOverflow, {
                            options: a ? Object.assign({
                                padding: a
                            }, null == (c = b.preventOverflow) ? void 0 : c.options) : null == (d = b.preventOverflow) ? void 0 : d.options
                        }),
                        offset: {
                            options: Object.assign({
                                offset: o
                            }, null == (f = b.offset) ? void 0 : f.options)
                        },
                        arrow: Object.assign({}, b.arrow, {
                            enabled: !!s,
                            options: Object.assign({}, null == (p = b.arrow) ? void 0 : p.options, {
                                element: s
                            })
                        }),
                        flip: Object.assign({
                            enabled: !!n
                        }, b.flip)
                    }))
                })
            }
        },
        2499: function(e, t, r) {
            r.d(t, {
                f: function() {
                    return d
                }
            });
            var n = r(67888),
                o = r(9168),
                l = r(31693),
                a = r(2265),
                s = r(22164),
                i = r(35556),
                u = r.n(i);
            let c = () => {},
                d = e => e && ("current" in e ? e.current : e),
                f = {
                    click: "mousedown",
                    mouseup: "mousedown",
                    pointerup: "pointerdown"
                };
            t.Z = function(e, t = c, {
                disabled: r,
                clickTrigger: i = "click"
            } = {}) {
                let p = (0, a.useRef)(!1),
                    b = (0, a.useRef)(!1),
                    v = (0, a.useCallback)(t => {
                        let r = d(e);
                        u()(!!r, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), p.current = !r || !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) || 0 !== t.button || !!(0, n.Z)(r, t.target) || b.current, b.current = !1
                    }, [e]),
                    g = (0, s.Z)(t => {
                        let r = d(e);
                        r && (0, n.Z)(r, t.target) && (b.current = !0)
                    }),
                    m = (0, s.Z)(e => {
                        p.current || t(e)
                    });
                (0, a.useEffect)(() => {
                    var t, n;
                    if (r || null == e) return;
                    let a = (0, l.Z)(d(e)),
                        s = a.defaultView || window,
                        u = null != (t = s.event) ? t : null == (n = s.parent) ? void 0 : n.event,
                        p = null;
                    f[i] && (p = (0, o.Z)(a, f[i], g, !0));
                    let b = (0, o.Z)(a, i, v, !0),
                        y = (0, o.Z)(a, i, e => {
                            if (e === u) {
                                u = void 0;
                                return
                            }
                            m(e)
                        }),
                        w = [];
                    return "ontouchstart" in a.documentElement && (w = [].slice.call(a.body.children).map(e => (0, o.Z)(e, "mousemove", c))), () => {
                        null == p || p(), b(), y(), w.forEach(e => e())
                    }
                }, [e, r, i, v, g, m])
            }
        },
        35573: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return x
                }
            });
            var n = r(2265),
                o = Object.prototype.hasOwnProperty;

            function l(e, t, r) {
                for (r of e.keys())
                    if (a(r, t)) return r
            }

            function a(e, t) {
                var r, n, s;
                if (e === t) return !0;
                if (e && t && (r = e.constructor) === t.constructor) {
                    if (r === Date) return e.getTime() === t.getTime();
                    if (r === RegExp) return e.toString() === t.toString();
                    if (r === Array) {
                        if ((n = e.length) === t.length)
                            for (; n-- && a(e[n], t[n]););
                        return -1 === n
                    }
                    if (r === Set) {
                        if (e.size !== t.size) return !1;
                        for (n of e)
                            if ((s = n) && "object" == typeof s && !(s = l(t, s)) || !t.has(s)) return !1;
                        return !0
                    }
                    if (r === Map) {
                        if (e.size !== t.size) return !1;
                        for (n of e)
                            if ((s = n[0]) && "object" == typeof s && !(s = l(t, s)) || !a(n[1], t.get(s))) return !1;
                        return !0
                    }
                    if (r === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
                    else if (r === DataView) {
                        if ((n = e.byteLength) === t.byteLength)
                            for (; n-- && e.getInt8(n) === t.getInt8(n););
                        return -1 === n
                    }
                    if (ArrayBuffer.isView(e)) {
                        if ((n = e.byteLength) === t.byteLength)
                            for (; n-- && e[n] === t[n];);
                        return -1 === n
                    }
                    if (!r || "object" == typeof e) {
                        for (r in n = 0, e)
                            if (o.call(e, r) && ++n && !o.call(t, r) || !(r in t) || !a(e[r], t[r])) return !1;
                        return Object.keys(t).length === n
                    }
                }
                return e != e && t != t
            }
            var s = r(40596),
                i = function(e) {
                    let t = (0, s.Z)();
                    return [e[0], (0, n.useCallback)(r => {
                        if (t()) return e[1](r)
                    }, [t, e[1]])]
                },
                u = r(48109),
                c = r(80297),
                d = r(30977),
                f = r(58775),
                p = r(88400),
                b = r(97458),
                v = r(63097),
                g = r(35926);
            let m = (0, r(19543).kZ)({
                    defaultModifiers: [p.Z, v.Z, c.Z, d.Z, b.Z, f.Z, g.Z, u.Z]
                }),
                y = ["enabled", "placement", "strategy", "modifiers"],
                w = {
                    name: "applyStyles",
                    enabled: !1,
                    phase: "afterWrite",
                    fn: () => void 0
                },
                h = {
                    name: "ariaDescribedBy",
                    enabled: !0,
                    phase: "afterWrite",
                    effect: ({
                        state: e
                    }) => () => {
                        let {
                            reference: t,
                            popper: r
                        } = e.elements;
                        if ("removeAttribute" in t) {
                            let e = (t.getAttribute("aria-describedby") || "").split(",").filter(e => e.trim() !== r.id);
                            e.length ? t.setAttribute("aria-describedby", e.join(",")) : t.removeAttribute("aria-describedby")
                        }
                    },
                    fn: ({
                        state: e
                    }) => {
                        var t;
                        let {
                            popper: r,
                            reference: n
                        } = e.elements, o = null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase();
                        if (r.id && "tooltip" === o && "setAttribute" in n) {
                            let e = n.getAttribute("aria-describedby");
                            if (e && -1 !== e.split(",").indexOf(r.id)) return;
                            n.setAttribute("aria-describedby", e ? `${e},${r.id}` : r.id)
                        }
                    }
                },
                Z = [];
            var x = function(e, t, r = {}) {
                let {
                    enabled: o = !0,
                    placement: l = "bottom",
                    strategy: s = "absolute",
                    modifiers: u = Z
                } = r, c = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(r, y), d = (0, n.useRef)(u), f = (0, n.useRef)(), p = (0, n.useCallback)(() => {
                    var e;
                    null == (e = f.current) || e.update()
                }, []), b = (0, n.useCallback)(() => {
                    var e;
                    null == (e = f.current) || e.forceUpdate()
                }, []), [v, g] = i((0, n.useState)({
                    placement: l,
                    update: p,
                    forceUpdate: b,
                    attributes: {},
                    styles: {
                        popper: {},
                        arrow: {}
                    }
                })), x = (0, n.useMemo)(() => ({
                    name: "updateStateModifier",
                    enabled: !0,
                    phase: "write",
                    requires: ["computeStyles"],
                    fn: ({
                        state: e
                    }) => {
                        let t = {},
                            r = {};
                        Object.keys(e.elements).forEach(n => {
                            t[n] = e.styles[n], r[n] = e.attributes[n]
                        }), g({
                            state: e,
                            styles: t,
                            attributes: r,
                            update: p,
                            forceUpdate: b,
                            placement: e.placement
                        })
                    }
                }), [p, b, g]), j = (0, n.useMemo)(() => (a(d.current, u) || (d.current = u), d.current), [u]);
                return (0, n.useEffect)(() => {
                    f.current && o && f.current.setOptions({
                        placement: l,
                        strategy: s,
                        modifiers: [...j, x, w]
                    })
                }, [s, l, x, o, j]), (0, n.useEffect)(() => {
                    if (o && null != e && null != t) return f.current = m(e, t, Object.assign({}, c, {
                        placement: l,
                        strategy: s,
                        modifiers: [...j, h, x]
                    })), () => {
                        null != f.current && (f.current.destroy(), f.current = void 0, g(e => Object.assign({}, e, {
                            attributes: {},
                            styles: {
                                popper: {}
                            }
                        })))
                    }
                }, [o, e, t]), v
            }
        },
        75782: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return et
                }
            });
            var n = r(9772),
                o = r.n(n),
                l = r(2265),
                a = r(23851),
                s = r(61160),
                i = r(45574),
                u = r(1032),
                c = r(56759),
                d = r(18360),
                f = r(22164);
            let p = l.createContext(null);
            var b = r(50929),
                v = r(35573),
                g = r(2499),
                m = r(7529),
                y = r(57437);
            let w = ["children", "usePopper"],
                h = () => {};

            function Z(e = {}) {
                let t = (0, l.useContext)(p),
                    [r, n] = (0, b.Z)(),
                    o = (0, l.useRef)(!1),
                    {
                        flip: a,
                        offset: s,
                        rootCloseEvent: i,
                        fixed: u = !1,
                        placement: c,
                        popperConfig: d = {},
                        enableEventListeners: f = !0,
                        usePopper: y = !!t
                    } = e,
                    w = (null == t ? void 0 : t.show) == null ? !!e.show : t.show;
                w && !o.current && (o.current = !0);
                let {
                    placement: Z,
                    setMenu: x,
                    menuElement: j,
                    toggleElement: k
                } = t || {}, O = (0, v.Z)(k, j, (0, m.ZP)({
                    placement: c || Z || "bottom-start",
                    enabled: y,
                    enableEvents: null == f ? w : f,
                    offset: s,
                    flip: a,
                    fixed: u,
                    arrowElement: r,
                    popperConfig: d
                })), C = Object.assign({
                    ref: x || h,
                    "aria-labelledby": null == k ? void 0 : k.id
                }, O.attributes.popper, {
                    style: O.styles.popper
                }), E = {
                    show: w,
                    placement: Z,
                    hasShown: o.current,
                    toggle: null == t ? void 0 : t.toggle,
                    popper: y ? O : null,
                    arrowProps: y ? Object.assign({
                        ref: n
                    }, O.attributes.arrow, {
                        style: O.styles.arrow
                    }) : {}
                };
                return (0, g.Z)(j, e => {
                    null == t || t.toggle(!1, e)
                }, {
                    clickTrigger: i,
                    disabled: !w
                }), [C, E]
            }

            function x(e) {
                let {
                    children: t,
                    usePopper: r = !0
                } = e, [n, o] = Z(Object.assign({}, function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, w), {
                    usePopper: r
                }));
                return (0, y.jsx)(y.Fragment, {
                    children: t(n, o)
                })
            }
            x.displayName = "DropdownMenu";
            var j = r(73165);
            let k = e => {
                    var t;
                    return (null == (t = e.getAttribute("role")) ? void 0 : t.toLowerCase()) === "menu"
                },
                O = () => {};

            function C() {
                let e = (0, j.gP)(),
                    {
                        show: t = !1,
                        toggle: r = O,
                        setToggle: n,
                        menuElement: o
                    } = (0, l.useContext)(p) || {},
                    a = {
                        id: e,
                        ref: n || O,
                        onClick: (0, l.useCallback)(e => {
                            r(!t, e)
                        }, [t, r]),
                        "aria-expanded": !!t
                    };
                return o && k(o) && (a["aria-haspopup"] = !0), [a, {
                    show: t,
                    toggle: r
                }]
            }

            function E({
                children: e
            }) {
                let [t, r] = C();
                return (0, y.jsx)(y.Fragment, {
                    children: e(t, r)
                })
            }
            E.displayName = "DropdownToggle";
            var D = r(79161),
                N = r(21987),
                A = r(37212),
                P = r(75604);
            let R = ["eventKey", "disabled", "onClick", "active", "as"];

            function T({
                key: e,
                href: t,
                active: r,
                disabled: n,
                onClick: o
            }) {
                let a = (0, l.useContext)(D.Z),
                    {
                        activeKey: s
                    } = (0, l.useContext)(N.Z) || {},
                    i = (0, D.h)(e, t),
                    u = null == r && null != e ? (0, D.h)(s) === i : r;
                return [{
                    onClick: (0, f.Z)(e => {
                        n || (null == o || o(e), a && !e.isPropagationStopped() && a(i, e))
                    }),
                    "aria-disabled": n || void 0,
                    "aria-selected": u,
                    [(0, P.PB)("dropdown-item")]: ""
                }, {
                    isActive: u
                }]
            }
            let M = l.forwardRef((e, t) => {
                let {
                    eventKey: r,
                    disabled: n,
                    onClick: o,
                    active: l,
                    as: a = A.ZP
                } = e, s = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, R), [i] = T({
                    key: r,
                    href: s.href,
                    disabled: n,
                    onClick: o,
                    active: l
                });
                return (0, y.jsx)(a, Object.assign({}, s, {
                    ref: t
                }, i))
            });
            M.displayName = "DropdownItem";
            var S = r(30219);

            function I() {
                let e = (0, c.Z)(),
                    t = (0, l.useRef)(null),
                    r = (0, l.useCallback)(r => {
                        t.current = r, e()
                    }, [e]);
                return [t, r]
            }

            function L({
                defaultShow: e,
                show: t,
                onSelect: r,
                onToggle: n,
                itemSelector: o = `* [${(0,P.PB)("dropdown-item")}]`,
                focusFirstItemOnShow: c,
                placement: b = "bottom-start",
                children: v
            }) {
                let g = (0, S.Z)(),
                    [m, w] = (0, i.$c)(t, e, n),
                    [h, Z] = I(),
                    x = h.current,
                    [j, O] = I(),
                    C = j.current,
                    E = (0, u.Z)(m),
                    N = (0, l.useRef)(null),
                    A = (0, l.useRef)(!1),
                    R = (0, l.useContext)(D.Z),
                    T = (0, l.useCallback)((e, t, r = null == t ? void 0 : t.type) => {
                        w(e, {
                            originalEvent: t,
                            source: r
                        })
                    }, [w]),
                    M = (0, f.Z)((e, t) => {
                        null == r || r(e, t), T(!1, t, "select"), t.isPropagationStopped() || null == R || R(e, t)
                    }),
                    L = (0, l.useMemo)(() => ({
                        toggle: T,
                        placement: b,
                        show: m,
                        menuElement: x,
                        toggleElement: C,
                        setMenu: Z,
                        setToggle: O
                    }), [T, b, m, x, C, Z, O]);
                x && E && !m && (A.current = x.contains(x.ownerDocument.activeElement));
                let B = (0, f.Z)(() => {
                        C && C.focus && C.focus()
                    }),
                    K = (0, f.Z)(() => {
                        let e = N.current,
                            t = c;
                        if (null == t && (t = !!(h.current && k(h.current)) && "keyboard"), !1 === t || "keyboard" === t && !/^key.+$/.test(e)) return;
                        let r = (0, a.Z)(h.current, o)[0];
                        r && r.focus && r.focus()
                    });
                (0, l.useEffect)(() => {
                    m ? K() : A.current && (A.current = !1, B())
                }, [m, A, B, K]), (0, l.useEffect)(() => {
                    N.current = null
                });
                let $ = (e, t) => {
                    if (!h.current) return null;
                    let r = (0, a.Z)(h.current, o),
                        n = r.indexOf(e) + t;
                    return n = Math.max(0, Math.min(n, r.length)), r[n]
                };
                return (0, d.Z)((0, l.useCallback)(() => g.document, [g]), "keydown", e => {
                    var t, r;
                    let {
                        key: n
                    } = e, o = e.target, l = null == (t = h.current) ? void 0 : t.contains(o), a = null == (r = j.current) ? void 0 : r.contains(o);
                    if (/input|textarea/i.test(o.tagName) && (" " === n || "Escape" !== n && l || "Escape" === n && "search" === o.type) || !l && !a || "Tab" === n && (!h.current || !m)) return;
                    N.current = e.type;
                    let i = {
                        originalEvent: e,
                        source: e.type
                    };
                    switch (n) {
                        case "ArrowUp":
                            {
                                let t = $(o, -1);t && t.focus && t.focus(),
                                e.preventDefault();
                                return
                            }
                        case "ArrowDown":
                            if (e.preventDefault(), m) {
                                let e = $(o, 1);
                                e && e.focus && e.focus()
                            } else w(!0, i);
                            return;
                        case "Tab":
                            (0, s.ZP)(o.ownerDocument, "keyup", e => {
                                var t;
                                ("Tab" !== e.key || e.target) && null != (t = h.current) && t.contains(e.target) || w(!1, i)
                            }, {
                                once: !0
                            });
                            break;
                        case "Escape":
                            "Escape" === n && (e.preventDefault(), e.stopPropagation()), w(!1, i)
                    }
                }), (0, y.jsx)(D.Z.Provider, {
                    value: M,
                    children: (0, y.jsx)(p.Provider, {
                        value: L,
                        children: v
                    })
                })
            }
            L.displayName = "Dropdown", L.Menu = x, L.Toggle = E, L.Item = M;
            var B = r(90505);
            let K = l.createContext({});
            K.displayName = "DropdownContext";
            var $ = r(72574);
            let z = l.forwardRef((e, t) => {
                let {
                    className: r,
                    bsPrefix: n,
                    as: l = "hr",
                    role: a = "separator",
                    ...s
                } = e;
                return n = (0, $.vE)(n, "dropdown-divider"), (0, y.jsx)(l, {
                    ref: t,
                    className: o()(r, n),
                    role: a,
                    ...s
                })
            });
            z.displayName = "DropdownDivider";
            let U = l.forwardRef((e, t) => {
                let {
                    className: r,
                    bsPrefix: n,
                    as: l = "div",
                    role: a = "heading",
                    ...s
                } = e;
                return n = (0, $.vE)(n, "dropdown-header"), (0, y.jsx)(l, {
                    ref: t,
                    className: o()(r, n),
                    role: a,
                    ...s
                })
            });
            U.displayName = "DropdownHeader";
            var _ = r(99470);
            let F = l.forwardRef((e, t) => {
                let {
                    bsPrefix: r,
                    className: n,
                    eventKey: l,
                    disabled: a = !1,
                    onClick: s,
                    active: i,
                    as: u = _.Z,
                    ...c
                } = e, d = (0, $.vE)(r, "dropdown-item"), [f, p] = T({
                    key: l,
                    href: c.href,
                    disabled: a,
                    onClick: s,
                    active: i
                });
                return (0, y.jsx)(u, { ...c,
                    ...f,
                    ref: t,
                    className: o()(n, d, p.isActive && "active", a && "disabled")
                })
            });
            F.displayName = "DropdownItem";
            let V = l.forwardRef((e, t) => {
                let {
                    className: r,
                    bsPrefix: n,
                    as: l = "span",
                    ...a
                } = e;
                return n = (0, $.vE)(n, "dropdown-item-text"), (0, y.jsx)(l, {
                    ref: t,
                    className: o()(r, n),
                    ...a
                })
            });
            V.displayName = "DropdownItemText";
            var H = r(99898),
                W = r(19697);
            r(35556);
            let q = l.createContext(null);
            q.displayName = "InputGroupContext";
            var G = r(93907);

            function J(e, t, r) {
                let n = e ? r ? "bottom-start" : "bottom-end" : r ? "bottom-end" : "bottom-start";
                return "up" === t ? n = e ? r ? "top-start" : "top-end" : r ? "top-end" : "top-start" : "end" === t ? n = e ? r ? "left-end" : "right-end" : r ? "left-start" : "right-start" : "start" === t ? n = e ? r ? "right-end" : "left-end" : r ? "right-start" : "left-start" : "down-centered" === t ? n = "bottom" : "up-centered" === t && (n = "top"), n
            }
            r(39284);
            let Q = l.forwardRef((e, t) => {
                let {
                    bsPrefix: r,
                    className: n,
                    align: a,
                    rootCloseEvent: s,
                    flip: i = !0,
                    show: u,
                    renderOnMount: c,
                    as: d = "div",
                    popperConfig: f,
                    variant: p,
                    ...b
                } = e, v = !1, g = (0, l.useContext)(G.Z), m = (0, $.vE)(r, "dropdown-menu"), {
                    align: w,
                    drop: h,
                    isRTL: x
                } = (0, l.useContext)(K);
                a = a || w;
                let j = (0, l.useContext)(q),
                    k = [];
                if (a) {
                    if ("object" == typeof a) {
                        let e = Object.keys(a);
                        if (e.length) {
                            let t = e[0],
                                r = a[t];
                            v = "start" === r, k.push("".concat(m, "-").concat(t, "-").concat(r))
                        }
                    } else "end" === a && (v = !0)
                }
                let O = J(v, h, x),
                    [C, {
                        hasShown: E,
                        popper: D,
                        show: N,
                        toggle: A
                    }] = Z({
                        flip: i,
                        rootCloseEvent: s,
                        show: u,
                        usePopper: !g && 0 === k.length,
                        offset: [0, 2],
                        popperConfig: f,
                        placement: O
                    });
                if (C.ref = (0, W.Z)(t, C.ref), (0, H.Z)(() => {
                        N && (null == D || D.update())
                    }, [N]), !E && !c && !j) return null;
                "string" != typeof d && (C.show = N, C.close = () => null == A ? void 0 : A(!1), C.align = a);
                let P = b.style;
                return null != D && D.placement && (P = { ...b.style,
                    ...C.style
                }, b["x-placement"] = D.placement), (0, y.jsx)(d, { ...b,
                    ...C,
                    style: P,
                    ...(k.length || g) && {
                        "data-bs-popper": "static"
                    },
                    className: o()(n, m, N && "show", v && "".concat(m, "-end"), p && "".concat(m, "-").concat(p), ...k)
                })
            });
            Q.displayName = "DropdownMenu";
            var X = r(12808);
            let Y = l.forwardRef((e, t) => {
                let {
                    bsPrefix: r,
                    split: n,
                    className: a,
                    childBsPrefix: s,
                    as: i = X.Z,
                    ...u
                } = e, c = (0, $.vE)(r, "dropdown-toggle"), d = (0, l.useContext)(p);
                void 0 !== s && (u.bsPrefix = s);
                let [f] = C();
                return f.ref = (0, W.Z)(f.ref, t), (0, y.jsx)(i, {
                    className: o()(a, c, n && "".concat(c, "-split"), (null == d ? void 0 : d.show) && "show"),
                    ...f,
                    ...u
                })
            });
            Y.displayName = "DropdownToggle";
            let ee = l.forwardRef((e, t) => {
                let {
                    bsPrefix: r,
                    drop: n = "down",
                    show: a,
                    className: s,
                    align: i = "start",
                    onSelect: u,
                    onToggle: c,
                    focusFirstItemOnShow: d,
                    as: p = "div",
                    navbar: b,
                    autoClose: v = !0,
                    ...g
                } = (0, B.Ch)(e, {
                    show: "onToggle"
                }), m = (0, l.useContext)(q), w = (0, $.vE)(r, "dropdown"), h = (0, $.SC)(), Z = e => !1 === v ? "click" === e : "inside" === v ? "rootClose" !== e : "outside" !== v || "select" !== e, x = (0, f.Z)((e, t) => {
                    var r;
                    (null == (r = t.originalEvent) || null == (r = r.target) || !r.classList.contains("dropdown-toggle") || "mousedown" !== t.source) && (t.originalEvent.currentTarget === document && ("keydown" !== t.source || "Escape" === t.originalEvent.key) && (t.source = "rootClose"), Z(t.source) && (null == c || c(e, t)))
                }), j = J("end" === i, n, h), k = (0, l.useMemo)(() => ({
                    align: i,
                    drop: n,
                    isRTL: h
                }), [i, n, h]);
                return (0, y.jsx)(K.Provider, {
                    value: k,
                    children: (0, y.jsx)(L, {
                        placement: j,
                        show: a,
                        onSelect: u,
                        onToggle: x,
                        focusFirstItemOnShow: d,
                        itemSelector: ".".concat(w, "-item:not(.disabled):not(:disabled)"),
                        children: m ? g.children : (0, y.jsx)(p, { ...g,
                            ref: t,
                            className: o()(s, a && "show", {
                                down: w,
                                "down-centered": "".concat(w, "-center"),
                                up: "dropup",
                                "up-centered": "dropup-center dropup",
                                end: "dropend",
                                start: "dropstart"
                            }[n])
                        })
                    })
                })
            });
            ee.displayName = "Dropdown";
            var et = Object.assign(ee, {
                Toggle: Y,
                Menu: Q,
                Item: F,
                ItemText: V,
                Divider: z,
                Header: U
            })
        }
    }
]);