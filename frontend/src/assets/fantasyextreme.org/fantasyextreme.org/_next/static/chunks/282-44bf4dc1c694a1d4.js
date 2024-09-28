(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [282], {
        7989: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return u
                }
            });
            var r = t(2265),
                a = t(40596),
                l = t(86779);
            let i = 2147483648 - 1;

            function u() {
                let e = (0, a.Z)(),
                    n = (0, r.useRef)();
                return (0, l.Z)(() => clearTimeout(n.current)), (0, r.useMemo)(() => {
                    let t = () => clearTimeout(n.current);
                    return {
                        set: function(r, a = 0) {
                            e() && (t(), a <= i ? n.current = setTimeout(r, a) : function e(n, t, r) {
                                let a = r - Date.now();
                                n.current = a <= i ? setTimeout(t, a) : setTimeout(() => e(n, t, r), i)
                            }(n, r, Date.now() + a))
                        },
                        clear: t
                    }
                }, [])
            }
        },
        37212: function(e, n, t) {
            "use strict";
            t.d(n, {
                FT: function() {
                    return i
                }
            });
            var r = t(2265),
                a = t(57437);
            let l = ["as", "disabled"];

            function i({
                tagName: e,
                disabled: n,
                href: t,
                target: r,
                rel: a,
                role: l,
                onClick: i,
                tabIndex: u = 0,
                type: o
            }) {
                e || (e = null != t || null != r || null != a ? "a" : "button");
                let s = {
                    tagName: e
                };
                if ("button" === e) return [{
                    type: o || "button",
                    disabled: n
                }, s];
                let c = r => {
                    var a;
                    if (!n && ("a" !== e || (a = t) && "#" !== a.trim()) || r.preventDefault(), n) {
                        r.stopPropagation();
                        return
                    }
                    null == i || i(r)
                };
                return "a" === e && (t || (t = "#"), n && (t = void 0)), [{
                    role: null != l ? l : "button",
                    disabled: void 0,
                    tabIndex: n ? void 0 : u,
                    href: t,
                    target: "a" === e ? r : void 0,
                    "aria-disabled": n || void 0,
                    rel: "a" === e ? a : void 0,
                    onClick: c,
                    onKeyDown: e => {
                        " " === e.key && (e.preventDefault(), c(e))
                    }
                }, s]
            }
            let u = r.forwardRef((e, n) => {
                let {
                    as: t,
                    disabled: r
                } = e, u = function(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a
                }(e, l), [o, {
                    tagName: s
                }] = i(Object.assign({
                    tagName: t,
                    disabled: r
                }, u));
                return (0, a.jsx)(s, Object.assign({}, u, o, {
                    ref: n
                }))
            });
            u.displayName = "Button", n.ZP = u
        },
        16463: function(e, n, t) {
            "use strict";
            var r = t(71169);
            t.o(r, "useParams") && t.d(n, {
                useParams: function() {
                    return r.useParams
                }
            }), t.o(r, "usePathname") && t.d(n, {
                usePathname: function() {
                    return r.usePathname
                }
            }), t.o(r, "useRouter") && t.d(n, {
                useRouter: function() {
                    return r.useRouter
                }
            })
        },
        54623: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return x
                }
            });
            var r = t(22164),
                a = t(2265),
                l = function(e, n) {
                    let t = (0, a.useRef)(!0);
                    (0, a.useEffect)(() => {
                        if (t.current) {
                            t.current = !1;
                            return
                        }
                        return e()
                    }, n)
                },
                i = t(97682),
                u = t(7989),
                o = t(99470),
                s = t(9772),
                c = t.n(s),
                d = t(90505),
                f = t(72574),
                m = t(57437);
            let v = a.forwardRef((e, n) => {
                let {
                    className: t,
                    bsPrefix: r,
                    as: a = "div",
                    ...l
                } = e;
                return r = (0, f.vE)(r, "carousel-caption"), (0, m.jsx)(a, {
                    ref: n,
                    className: c()(t, r),
                    ...l
                })
            });
            v.displayName = "CarouselCaption";
            let h = a.forwardRef((e, n) => {
                let {
                    as: t = "div",
                    bsPrefix: r,
                    className: a,
                    ...l
                } = e, i = c()(a, (0, f.vE)(r, "carousel-item"));
                return (0, m.jsx)(t, {
                    ref: n,
                    ...l,
                    className: i
                })
            });
            h.displayName = "CarouselItem";
            var p = t(63050),
                y = t(93695),
                g = t(87064),
                b = t(94423);
            let w = a.forwardRef((e, n) => {
                let t, {
                        defaultActiveIndex: s = 0,
                        ...v
                    } = e,
                    {
                        as: h = "div",
                        bsPrefix: w,
                        slide: x = !0,
                        fade: N = !1,
                        controls: E = !0,
                        indicators: C = !0,
                        indicatorLabels: k = [],
                        activeIndex: j,
                        onSelect: R,
                        onSlide: Z,
                        onSlid: S,
                        interval: M = 5e3,
                        keyboard: I = !0,
                        onKeyDown: O,
                        pause: T = "hover",
                        onMouseOver: P,
                        onMouseOut: A,
                        wrap: D = !0,
                        touch: q = !0,
                        onTouchStart: X,
                        onTouchMove: F,
                        onTouchEnd: _,
                        prevIcon: z = (0, m.jsx)("span", {
                            "aria-hidden": "true",
                            className: "carousel-control-prev-icon"
                        }),
                        prevLabel: B = "Previous",
                        nextIcon: L = (0, m.jsx)("span", {
                            "aria-hidden": "true",
                            className: "carousel-control-next-icon"
                        }),
                        nextLabel: U = "Next",
                        variant: V,
                        className: H,
                        children: K,
                        ...W
                    } = (0, d.Ch)({
                        defaultActiveIndex: s,
                        ...v
                    }, {
                        activeIndex: "onSelect"
                    }),
                    G = (0, f.vE)(w, "carousel"),
                    J = (0, f.SC)(),
                    Q = (0, a.useRef)(null),
                    [Y, $] = (0, a.useState)("next"),
                    [ee, en] = (0, a.useState)(!1),
                    [et, er] = (0, a.useState)(!1),
                    [ea, el] = (0, a.useState)(j || 0);
                (0, a.useEffect)(() => {
                    et || j === ea || (Q.current ? $(Q.current) : $((j || 0) > ea ? "next" : "prev"), x && er(!0), el(j || 0))
                }, [j, et, ea, x]), (0, a.useEffect)(() => {
                    Q.current && (Q.current = null)
                });
                let ei = 0;
                (0, p.Ed)(K, (e, n) => {
                    ++ei, n === j && (t = e.props.interval)
                });
                let eu = (0, i.Z)(t),
                    eo = (0, a.useCallback)(e => {
                        if (et) return;
                        let n = ea - 1;
                        if (n < 0) {
                            if (!D) return;
                            n = ei - 1
                        }
                        Q.current = "prev", null == R || R(n, e)
                    }, [et, ea, R, D, ei]),
                    es = (0, r.Z)(e => {
                        if (et) return;
                        let n = ea + 1;
                        if (n >= ei) {
                            if (!D) return;
                            n = 0
                        }
                        Q.current = "next", null == R || R(n, e)
                    }),
                    ec = (0, a.useRef)();
                (0, a.useImperativeHandle)(n, () => ({
                    element: ec.current,
                    prev: eo,
                    next: es
                }));
                let ed = (0, r.Z)(() => {
                        !document.hidden && function(e) {
                            if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
                            let n = getComputedStyle(e);
                            return "none" !== n.display && "hidden" !== n.visibility && "none" !== getComputedStyle(e.parentNode).display
                        }(ec.current) && (J ? eo() : es())
                    }),
                    ef = "next" === Y ? "start" : "end";
                l(() => {
                    x || (null == Z || Z(ea, ef), null == S || S(ea, ef))
                }, [ea]);
                let em = "".concat(G, "-item-").concat(Y),
                    ev = "".concat(G, "-item-").concat(ef),
                    eh = (0, a.useCallback)(e => {
                        (0, g.Z)(e), null == Z || Z(ea, ef)
                    }, [Z, ea, ef]),
                    ep = (0, a.useCallback)(() => {
                        er(!1), null == S || S(ea, ef)
                    }, [S, ea, ef]),
                    ey = (0, a.useCallback)(e => {
                        if (I && !/input|textarea/i.test(e.target.tagName)) switch (e.key) {
                            case "ArrowLeft":
                                e.preventDefault(), J ? es(e) : eo(e);
                                return;
                            case "ArrowRight":
                                e.preventDefault(), J ? eo(e) : es(e);
                                return
                        }
                        null == O || O(e)
                    }, [I, O, eo, es, J]),
                    eg = (0, a.useCallback)(e => {
                        "hover" === T && en(!0), null == P || P(e)
                    }, [T, P]),
                    eb = (0, a.useCallback)(e => {
                        en(!1), null == A || A(e)
                    }, [A]),
                    ew = (0, a.useRef)(0),
                    ex = (0, a.useRef)(0),
                    eN = (0, u.Z)(),
                    eE = (0, a.useCallback)(e => {
                        ew.current = e.touches[0].clientX, ex.current = 0, "hover" === T && en(!0), null == X || X(e)
                    }, [T, X]),
                    eC = (0, a.useCallback)(e => {
                        e.touches && e.touches.length > 1 ? ex.current = 0 : ex.current = e.touches[0].clientX - ew.current, null == F || F(e)
                    }, [F]),
                    ek = (0, a.useCallback)(e => {
                        if (q) {
                            let n = ex.current;
                            Math.abs(n) > 40 && (n > 0 ? eo(e) : es(e))
                        }
                        "hover" === T && eN.set(() => {
                            en(!1)
                        }, M || void 0), null == _ || _(e)
                    }, [q, T, eo, es, eN, M, _]),
                    ej = null != M && !ee && !et,
                    eR = (0, a.useRef)();
                (0, a.useEffect)(() => {
                    var e, n;
                    if (!ej) return;
                    let t = J ? eo : es;
                    return eR.current = window.setInterval(document.visibilityState ? ed : t, null != (e = null != (n = eu.current) ? n : M) ? e : void 0), () => {
                        null !== eR.current && clearInterval(eR.current)
                    }
                }, [ej, eo, es, eu, M, ed, J]);
                let eZ = (0, a.useMemo)(() => C && Array.from({
                    length: ei
                }, (e, n) => e => {
                    null == R || R(n, e)
                }), [C, ei, R]);
                return (0, m.jsxs)(h, {
                    ref: ec,
                    ...W,
                    onKeyDown: ey,
                    onMouseOver: eg,
                    onMouseOut: eb,
                    onTouchStart: eE,
                    onTouchMove: eC,
                    onTouchEnd: ek,
                    className: c()(H, G, x && "slide", N && "".concat(G, "-fade"), V && "".concat(G, "-").concat(V)),
                    children: [C && (0, m.jsx)("div", {
                        className: "".concat(G, "-indicators"),
                        children: (0, p.UI)(K, (e, n) => (0, m.jsx)("button", {
                            type: "button",
                            "data-bs-target": "",
                            "aria-label": null != k && k.length ? k[n] : "Slide ".concat(n + 1),
                            className: n === ea ? "active" : void 0,
                            onClick: eZ ? eZ[n] : void 0,
                            "aria-current": n === ea
                        }, n))
                    }), (0, m.jsx)("div", {
                        className: "".concat(G, "-inner"),
                        children: (0, p.UI)(K, (e, n) => {
                            let t = n === ea;
                            return x ? (0, m.jsx)(b.Z, { in: t,
                                onEnter: t ? eh : void 0,
                                onEntered: t ? ep : void 0,
                                addEndListener: y.Z,
                                children: (n, r) => a.cloneElement(e, { ...r,
                                    className: c()(e.props.className, t && "entered" !== n && em, ("entered" === n || "exiting" === n) && "active", ("entering" === n || "exiting" === n) && ev)
                                })
                            }) : a.cloneElement(e, {
                                className: c()(e.props.className, t && "active")
                            })
                        })
                    }), E && (0, m.jsxs)(m.Fragment, {
                        children: [(D || 0 !== j) && (0, m.jsxs)(o.Z, {
                            className: "".concat(G, "-control-prev"),
                            onClick: eo,
                            children: [z, B && (0, m.jsx)("span", {
                                className: "visually-hidden",
                                children: B
                            })]
                        }), (D || j !== ei - 1) && (0, m.jsxs)(o.Z, {
                            className: "".concat(G, "-control-next"),
                            onClick: es,
                            children: [L, U && (0, m.jsx)("span", {
                                className: "visually-hidden",
                                children: U
                            })]
                        })]
                    })]
                })
            });
            w.displayName = "Carousel";
            var x = Object.assign(w, {
                Caption: v,
                Item: h
            })
        },
        63050: function(e, n, t) {
            "use strict";
            t.d(n, {
                Ed: function() {
                    return l
                },
                UI: function() {
                    return a
                },
                XW: function() {
                    return i
                }
            });
            var r = t(2265);

            function a(e, n) {
                let t = 0;
                return r.Children.map(e, e => r.isValidElement(e) ? n(e, t++) : e)
            }

            function l(e, n) {
                let t = 0;
                r.Children.forEach(e, e => {
                    r.isValidElement(e) && n(e, t++)
                })
            }

            function i(e, n) {
                return r.Children.toArray(e).some(e => r.isValidElement(e) && e.type === n)
            }
        },
        21932: function(e, n, t) {
            "use strict";
            var r = t(2265),
                a = r && "object" == typeof r && "default" in r ? r : {
                    default: r
                };
            ! function(e) {
                if (!e || "undefined" == typeof window) return;
                let n = document.createElement("style");
                n.setAttribute("type", "text/css"), n.innerHTML = e, document.head.appendChild(n)
            }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
            let l = r.forwardRef(function(e, n) {
                let {
                    style: t = {},
                    className: l = "",
                    autoFill: i = !1,
                    play: u = !0,
                    pauseOnHover: o = !1,
                    pauseOnClick: s = !1,
                    direction: c = "left",
                    speed: d = 50,
                    delay: f = 0,
                    loop: m = 0,
                    gradient: v = !1,
                    gradientColor: h = "white",
                    gradientWidth: p = 200,
                    onFinish: y,
                    onCycleComplete: g,
                    onMount: b,
                    children: w
                } = e, [x, N] = r.useState(0), [E, C] = r.useState(0), [k, j] = r.useState(1), [R, Z] = r.useState(!1), S = r.useRef(null), M = n || S, I = r.useRef(null), O = r.useCallback(() => {
                    if (I.current && M.current) {
                        let e = M.current.getBoundingClientRect(),
                            n = I.current.getBoundingClientRect(),
                            t = e.width,
                            r = n.width;
                        ("up" === c || "down" === c) && (t = e.height, r = n.height), i && t && r ? j(r < t ? Math.ceil(t / r) : 1) : j(1), N(t), C(r)
                    }
                }, [i, M, c]);
                r.useEffect(() => {
                    if (R && (O(), I.current && M.current)) {
                        let e = new ResizeObserver(() => O());
                        return e.observe(M.current), e.observe(I.current), () => {
                            e && e.disconnect()
                        }
                    }
                }, [O, M, R]), r.useEffect(() => {
                    O()
                }, [O, w]), r.useEffect(() => {
                    Z(!0)
                }, []), r.useEffect(() => {
                    "function" == typeof b && b()
                }, []);
                let T = r.useMemo(() => i ? E * k / d : E < x ? x / d : E / d, [i, x, E, k, d]),
                    P = r.useMemo(() => Object.assign(Object.assign({}, t), {
                        "--pause-on-hover": !u || o ? "paused" : "running",
                        "--pause-on-click": !u || o && !s || s ? "paused" : "running",
                        "--width": "up" === c || "down" === c ? "100vh" : "100%",
                        "--transform": "up" === c ? "rotate(-90deg)" : "down" === c ? "rotate(90deg)" : "none"
                    }), [t, u, o, s, c]),
                    A = r.useMemo(() => ({
                        "--gradient-color": h,
                        "--gradient-width": "number" == typeof p ? "".concat(p, "px") : p
                    }), [h, p]),
                    D = r.useMemo(() => ({
                        "--play": u ? "running" : "paused",
                        "--direction": "left" === c ? "normal" : "reverse",
                        "--duration": "".concat(T, "s"),
                        "--delay": "".concat(f, "s"),
                        "--iteration-count": m ? "".concat(m) : "infinite",
                        "--min-width": i ? "auto" : "100%"
                    }), [u, c, T, f, m, i]),
                    q = r.useMemo(() => ({
                        "--transform": "up" === c ? "rotate(90deg)" : "down" === c ? "rotate(-90deg)" : "none"
                    }), [c]),
                    X = r.useCallback(e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, n) => a.default.createElement(r.Fragment, {
                        key: n
                    }, r.Children.map(w, e => a.default.createElement("div", {
                        style: q,
                        className: "rfm-child"
                    }, e)))), [q, w]);
                return R ? a.default.createElement("div", {
                    ref: M,
                    style: P,
                    className: "rfm-marquee-container " + l
                }, v && a.default.createElement("div", {
                    style: A,
                    className: "rfm-overlay"
                }), a.default.createElement("div", {
                    className: "rfm-marquee",
                    style: D,
                    onAnimationIteration: g,
                    onAnimationEnd: y
                }, a.default.createElement("div", {
                    className: "rfm-initial-child-container",
                    ref: I
                }, r.Children.map(w, e => a.default.createElement("div", {
                    style: q,
                    className: "rfm-child"
                }, e))), X(k - 1)), a.default.createElement("div", {
                    className: "rfm-marquee",
                    style: D
                }, X(k))) : null
            });
            n.Z = l
        },
        55291: function() {},
        9051: function() {}
    }
]);