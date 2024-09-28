"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6055], {
        86055: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return ef
                }
            });
            var r, i = n(19543),
                o = n(30977),
                a = n(63097),
                s = n(80297),
                c = n(29327),
                u = n(26247),
                p = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach(function(e) {
                            var n = t.styles[e] || {},
                                r = t.attributes[e] || {},
                                i = t.elements[e];
                            (0, u.Re)(i) && (0, c.Z)(i) && (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
                                var t = r[e];
                                !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                            }))
                        })
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(t.elements).forEach(function(e) {
                                    var r = t.elements[e],
                                        i = t.attributes[e] || {},
                                        o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                            return e[t] = "", e
                                        }, {});
                                    (0, u.Re)(r) && (0, c.Z)(r) && (Object.assign(r.style, o), Object.keys(i).forEach(function(e) {
                                        r.removeAttribute(e)
                                    }))
                                })
                            }
                    },
                    requires: ["computeStyles"]
                },
                f = n(97458),
                d = n(58775),
                l = n(35926),
                v = n(48109),
                m = n(88400),
                b = [o.Z, a.Z, s.Z, p, f.Z, d.Z, l.Z, v.Z, m.Z],
                h = (0, i.kZ)({
                    defaultModifiers: b
                }),
                g = "tippy-content",
                y = "tippy-arrow",
                O = "tippy-svg-arrow",
                E = {
                    passive: !0,
                    capture: !0
                },
                w = function() {
                    return document.body
                };

            function A(e, t, n) {
                if (Array.isArray(e)) {
                    var r = e[t];
                    return null == r ? Array.isArray(n) ? n[t] : n : r
                }
                return e
            }

            function T(e, t) {
                var n = ({}).toString.call(e);
                return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
            }

            function x(e, t) {
                return "function" == typeof e ? e.apply(void 0, t) : e
            }

            function j(e, t) {
                var n;
                return 0 === t ? e : function(r) {
                    clearTimeout(n), n = setTimeout(function() {
                        e(r)
                    }, t)
                }
            }

            function k(e) {
                return [].concat(e)
            }

            function C(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function L(e) {
                return [].slice.call(e)
            }

            function D(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return void 0 !== e[n] && (t[n] = e[n]), t
                }, {})
            }

            function S() {
                return document.createElement("div")
            }

            function _(e) {
                return ["Element", "Fragment"].some(function(t) {
                    return T(e, t)
                })
            }

            function N(e, t) {
                e.forEach(function(e) {
                    e && (e.style.transitionDuration = t + "ms")
                })
            }

            function V(e, t) {
                e.forEach(function(e) {
                    e && e.setAttribute("data-state", t)
                })
            }

            function P(e, t, n) {
                var r = t + "EventListener";
                ["transitionend", "webkitTransitionEnd"].forEach(function(t) {
                    e[r](t, n)
                })
            }

            function R(e, t) {
                for (var n, r = t; r;) {
                    if (e.contains(r)) return !0;
                    r = null == r.getRootNode ? void 0 : null == (n = r.getRootNode()) ? void 0 : n.host
                }
                return !1
            }
            var H = {
                    isTouch: !1
                },
                I = 0;

            function M() {
                !H.isTouch && (H.isTouch = !0, window.performance && document.addEventListener("mousemove", U))
            }

            function U() {
                var e = performance.now();
                e - I < 20 && (H.isTouch = !1, document.removeEventListener("mousemove", U)), I = e
            }

            function $() {
                var e = document.activeElement;
                if (e && e._tippy && e._tippy.reference === e) {
                    var t = e._tippy;
                    e.blur && !t.state.isVisible && e.blur()
                }
            }
            var Z = !!("undefined" != typeof window && "undefined" != typeof document) && !!window.msCrypto,
                B = Object.assign({
                    appendTo: w,
                    aria: {
                        content: "auto",
                        expanded: "auto"
                    },
                    delay: 0,
                    duration: [300, 250],
                    getReferenceClientRect: null,
                    hideOnClick: !0,
                    ignoreAttributes: !1,
                    interactive: !1,
                    interactiveBorder: 2,
                    interactiveDebounce: 0,
                    moveTransition: "",
                    offset: [0, 10],
                    onAfterUpdate: function() {},
                    onBeforeUpdate: function() {},
                    onCreate: function() {},
                    onDestroy: function() {},
                    onHidden: function() {},
                    onHide: function() {},
                    onMount: function() {},
                    onShow: function() {},
                    onShown: function() {},
                    onTrigger: function() {},
                    onUntrigger: function() {},
                    onClickOutside: function() {},
                    placement: "top",
                    plugins: [],
                    popperOptions: {},
                    render: null,
                    showOnCreate: !1,
                    touch: !0,
                    trigger: "mouseenter focus",
                    triggerTarget: null
                }, {
                    animateFill: !1,
                    followCursor: !1,
                    inlinePositioning: !1,
                    sticky: !1
                }, {
                    allowHTML: !1,
                    animation: "fade",
                    arrow: !0,
                    content: "",
                    inertia: !1,
                    maxWidth: 350,
                    role: "tooltip",
                    theme: "",
                    zIndex: 9999
                }),
                W = Object.keys(B);

            function q(e) {
                var t = (e.plugins || []).reduce(function(t, n) {
                    var r, i = n.name,
                        o = n.defaultValue;
                    return i && (t[i] = void 0 !== e[i] ? e[i] : null != (r = B[i]) ? r : o), t
                }, {});
                return Object.assign({}, e, t)
            }

            function F(e, t) {
                var n, r = Object.assign({}, t, {
                    content: x(t.content, [e])
                }, t.ignoreAttributes ? {} : ((n = t.plugins) ? Object.keys(q(Object.assign({}, B, {
                    plugins: n
                }))) : W).reduce(function(t, n) {
                    var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                    if (!r) return t;
                    if ("content" === n) t[n] = r;
                    else try {
                        t[n] = JSON.parse(r)
                    } catch (e) {
                        t[n] = r
                    }
                    return t
                }, {}));
                return r.aria = Object.assign({}, B.aria, r.aria), r.aria = {
                    expanded: "auto" === r.aria.expanded ? t.interactive : r.aria.expanded,
                    content: "auto" === r.aria.content ? t.interactive ? null : "describedby" : r.aria.content
                }, r
            }

            function z(e, t) {
                e.innerHTML = t
            }

            function J(e) {
                var t = S();
                return !0 === e ? t.className = y : (t.className = O, _(e) ? t.appendChild(e) : z(t, e)), t
            }

            function X(e, t) {
                _(t.content) ? (z(e, ""), e.appendChild(t.content)) : "function" != typeof t.content && (t.allowHTML ? z(e, t.content) : e.textContent = t.content)
            }

            function Y(e) {
                var t = e.firstElementChild,
                    n = L(t.children);
                return {
                    box: t,
                    content: n.find(function(e) {
                        return e.classList.contains(g)
                    }),
                    arrow: n.find(function(e) {
                        return e.classList.contains(y) || e.classList.contains(O)
                    }),
                    backdrop: n.find(function(e) {
                        return e.classList.contains("tippy-backdrop")
                    })
                }
            }

            function G(e) {
                var t = S(),
                    n = S();
                n.className = "tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
                var r = S();

                function i(n, r) {
                    var i = Y(t),
                        o = i.box,
                        a = i.content,
                        s = i.arrow;
                    r.theme ? o.setAttribute("data-theme", r.theme) : o.removeAttribute("data-theme"), "string" == typeof r.animation ? o.setAttribute("data-animation", r.animation) : o.removeAttribute("data-animation"), r.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"), o.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth, r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"), (n.content !== r.content || n.allowHTML !== r.allowHTML) && X(a, e.props), r.arrow ? s ? n.arrow !== r.arrow && (o.removeChild(s), o.appendChild(J(r.arrow))) : o.appendChild(J(r.arrow)) : s && o.removeChild(s)
                }
                return r.className = g, r.setAttribute("data-state", "hidden"), X(r, e.props), t.appendChild(n), n.appendChild(r), i(e.props, e.props), {
                    popper: t,
                    onUpdate: i
                }
            }
            G.$$tippy = !0;
            var K = 1,
                Q = [],
                ee = [];

            function et(e, t) {
                void 0 === t && (t = {});
                var n = B.plugins.concat(t.plugins || []);
                document.addEventListener("touchstart", M, E), window.addEventListener("blur", $);
                var r = Object.assign({}, t, {
                        plugins: n
                    }),
                    i = (_(e) ? [e] : T(e, "NodeList") ? L(e) : Array.isArray(e) ? e : L(document.querySelectorAll(e))).reduce(function(e, t) {
                        var n = t && function(e, t) {
                            var n, r, i, o, a, s, c, u, p = F(e, Object.assign({}, B, q(D(t)))),
                                f = !1,
                                d = !1,
                                l = !1,
                                v = !1,
                                m = [],
                                b = j(eb, p.interactiveDebounce),
                                g = K++,
                                y = (n = p.plugins).filter(function(e, t) {
                                    return n.indexOf(e) === t
                                }),
                                O = {
                                    id: g,
                                    reference: e,
                                    popper: S(),
                                    popperInstance: null,
                                    props: p,
                                    state: {
                                        isEnabled: !0,
                                        isVisible: !1,
                                        isDestroyed: !1,
                                        isMounted: !1,
                                        isShown: !1
                                    },
                                    plugins: y,
                                    clearDelayTimeouts: function() {
                                        clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o)
                                    },
                                    setProps: function(t) {
                                        if (!O.state.isDestroyed) {
                                            en("onBeforeUpdate", [O, t]), ev();
                                            var n = O.props,
                                                r = F(e, Object.assign({}, n, D(t), {
                                                    ignoreAttributes: !0
                                                }));
                                            O.props = r, el(), n.interactiveDebounce !== r.interactiveDebounce && (eo(), b = j(eb, r.interactiveDebounce)), n.triggerTarget && !r.triggerTarget ? k(n.triggerTarget).forEach(function(e) {
                                                e.removeAttribute("aria-expanded")
                                            }) : r.triggerTarget && e.removeAttribute("aria-expanded"), ei(), et(), M && M(n, r), O.popperInstance && (eO(), ew().forEach(function(e) {
                                                requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
                                            })), en("onAfterUpdate", [O, t])
                                        }
                                    },
                                    setContent: function(e) {
                                        O.setProps({
                                            content: e
                                        })
                                    },
                                    show: function() {
                                        var t, n, r, i = O.state.isVisible,
                                            o = O.state.isDestroyed,
                                            a = !O.state.isEnabled,
                                            s = H.isTouch && !O.props.touch,
                                            p = A(O.props.duration, 0, B.duration);
                                        if (!(i || o || a || s || (u || e).hasAttribute("disabled")) && (en("onShow", [O], !1), !1 !== O.props.onShow(O))) {
                                            if (O.state.isVisible = !0, J() && (I.style.visibility = "visible"), et(), eu(), O.state.isMounted || (I.style.transition = "none"), J()) {
                                                var f = Y(I);
                                                N([f.box, f.content], 0)
                                            }
                                            c = function() {
                                                var e;
                                                if (O.state.isVisible && !v) {
                                                    if (v = !0, I.offsetHeight, I.style.transition = O.props.moveTransition, J() && O.props.animation) {
                                                        var t = Y(I),
                                                            n = t.box,
                                                            r = t.content;
                                                        N([n, r], p), V([n, r], "visible")
                                                    }
                                                    er(), ei(), C(ee, O), null == (e = O.popperInstance) || e.forceUpdate(), en("onMount", [O]), O.props.animation && J() && ef(p, function() {
                                                        O.state.isShown = !0, en("onShown", [O])
                                                    })
                                                }
                                            }, n = O.props.appendTo, r = u || e, (t = O.props.interactive && n === w || "parent" === n ? r.parentNode : x(n, [r])).contains(I) || t.appendChild(I), O.state.isMounted = !0, eO()
                                        }
                                    },
                                    hide: function() {
                                        var e, t = !O.state.isVisible,
                                            n = O.state.isDestroyed,
                                            r = !O.state.isEnabled,
                                            i = A(O.props.duration, 1, B.duration);
                                        if (!t && !n && !r && (en("onHide", [O], !1), !1 !== O.props.onHide(O))) {
                                            if (O.state.isVisible = !1, O.state.isShown = !1, v = !1, f = !1, J() && (I.style.visibility = "hidden"), eo(), ep(), et(!0), J()) {
                                                var o = Y(I),
                                                    a = o.box,
                                                    s = o.content;
                                                O.props.animation && (N([a, s], i), V([a, s], "hidden"))
                                            }(er(), ei(), O.props.animation) ? J() && (e = O.unmount, ef(i, function() {
                                                !O.state.isVisible && I.parentNode && I.parentNode.contains(I) && e()
                                            })): O.unmount()
                                        }
                                    },
                                    hideWithInteractivity: function(e) {
                                        X().addEventListener("mousemove", b), C(Q, b), b(e)
                                    },
                                    enable: function() {
                                        O.state.isEnabled = !0
                                    },
                                    disable: function() {
                                        O.hide(), O.state.isEnabled = !1
                                    },
                                    unmount: function() {
                                        O.state.isVisible && O.hide(), O.state.isMounted && (eE(), ew().forEach(function(e) {
                                            e._tippy.unmount()
                                        }), I.parentNode && I.parentNode.removeChild(I), ee = ee.filter(function(e) {
                                            return e !== O
                                        }), O.state.isMounted = !1, en("onHidden", [O]))
                                    },
                                    destroy: function() {
                                        O.state.isDestroyed || (O.clearDelayTimeouts(), O.unmount(), ev(), delete e._tippy, O.state.isDestroyed = !0, en("onDestroy", [O]))
                                    }
                                };
                            if (!p.render) return O;
                            var _ = p.render(O),
                                I = _.popper,
                                M = _.onUpdate;
                            I.setAttribute("data-tippy-root", ""), I.id = "tippy-" + O.id, O.popper = I, e._tippy = O, I._tippy = O;
                            var U = y.map(function(e) {
                                    return e.fn(O)
                                }),
                                $ = e.hasAttribute("aria-expanded");
                            return el(), ei(), et(), en("onCreate", [O]), p.showOnCreate && eA(), I.addEventListener("mouseenter", function() {
                                O.props.interactive && O.state.isVisible && O.clearDelayTimeouts()
                            }), I.addEventListener("mouseleave", function() {
                                O.props.interactive && O.props.trigger.indexOf("mouseenter") >= 0 && X().addEventListener("mousemove", b)
                            }), O;

                            function W() {
                                var e = O.props.touch;
                                return Array.isArray(e) ? e : [e, 0]
                            }

                            function z() {
                                return "hold" === W()[0]
                            }

                            function J() {
                                var e;
                                return !!(null != (e = O.props.render) && e.$$tippy)
                            }

                            function X() {
                                var t, n, r = (u || e).parentNode;
                                return r && null != (n = k(r)[0]) && null != (t = n.ownerDocument) && t.body ? n.ownerDocument : document
                            }

                            function G(e) {
                                return O.state.isMounted && !O.state.isVisible || H.isTouch || a && "focus" === a.type ? 0 : A(O.props.delay, e ? 0 : 1, B.delay)
                            }

                            function et(e) {
                                void 0 === e && (e = !1), I.style.pointerEvents = O.props.interactive && !e ? "" : "none", I.style.zIndex = "" + O.props.zIndex
                            }

                            function en(e, t, n) {
                                if (void 0 === n && (n = !0), U.forEach(function(n) {
                                        n[e] && n[e].apply(n, t)
                                    }), n) {
                                    var r;
                                    (r = O.props)[e].apply(r, t)
                                }
                            }

                            function er() {
                                var t = O.props.aria;
                                if (t.content) {
                                    var n = "aria-" + t.content,
                                        r = I.id;
                                    k(O.props.triggerTarget || e).forEach(function(e) {
                                        var t = e.getAttribute(n);
                                        if (O.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
                                        else {
                                            var i = t && t.replace(r, "").trim();
                                            i ? e.setAttribute(n, i) : e.removeAttribute(n)
                                        }
                                    })
                                }
                            }

                            function ei() {
                                !$ && O.props.aria.expanded && k(O.props.triggerTarget || e).forEach(function(t) {
                                    O.props.interactive ? t.setAttribute("aria-expanded", O.state.isVisible && t === (u || e) ? "true" : "false") : t.removeAttribute("aria-expanded")
                                })
                            }

                            function eo() {
                                X().removeEventListener("mousemove", b), Q = Q.filter(function(e) {
                                    return e !== b
                                })
                            }

                            function ea(t) {
                                if (!H.isTouch || !l && "mousedown" !== t.type) {
                                    var n = t.composedPath && t.composedPath()[0] || t.target;
                                    if (!(O.props.interactive && R(I, n))) {
                                        if (k(O.props.triggerTarget || e).some(function(e) {
                                                return R(e, n)
                                            })) {
                                            if (H.isTouch || O.state.isVisible && O.props.trigger.indexOf("click") >= 0) return
                                        } else en("onClickOutside", [O, t]);
                                        !0 !== O.props.hideOnClick || (O.clearDelayTimeouts(), O.hide(), d = !0, setTimeout(function() {
                                            d = !1
                                        }), O.state.isMounted || ep())
                                    }
                                }
                            }

                            function es() {
                                l = !0
                            }

                            function ec() {
                                l = !1
                            }

                            function eu() {
                                var e = X();
                                e.addEventListener("mousedown", ea, !0), e.addEventListener("touchend", ea, E), e.addEventListener("touchstart", ec, E), e.addEventListener("touchmove", es, E)
                            }

                            function ep() {
                                var e = X();
                                e.removeEventListener("mousedown", ea, !0), e.removeEventListener("touchend", ea, E), e.removeEventListener("touchstart", ec, E), e.removeEventListener("touchmove", es, E)
                            }

                            function ef(e, t) {
                                var n = Y(I).box;

                                function r(e) {
                                    e.target === n && (P(n, "remove", r), t())
                                }
                                if (0 === e) return t();
                                P(n, "remove", s), P(n, "add", r), s = r
                            }

                            function ed(t, n, r) {
                                void 0 === r && (r = !1), k(O.props.triggerTarget || e).forEach(function(e) {
                                    e.addEventListener(t, n, r), m.push({
                                        node: e,
                                        eventType: t,
                                        handler: n,
                                        options: r
                                    })
                                })
                            }

                            function el() {
                                z() && (ed("touchstart", em, {
                                    passive: !0
                                }), ed("touchend", eh, {
                                    passive: !0
                                })), O.props.trigger.split(/\s+/).filter(Boolean).forEach(function(e) {
                                    if ("manual" !== e) switch (ed(e, em), e) {
                                        case "mouseenter":
                                            ed("mouseleave", eh);
                                            break;
                                        case "focus":
                                            ed(Z ? "focusout" : "blur", eg);
                                            break;
                                        case "focusin":
                                            ed("focusout", eg)
                                    }
                                })
                            }

                            function ev() {
                                m.forEach(function(e) {
                                    var t = e.node,
                                        n = e.eventType,
                                        r = e.handler,
                                        i = e.options;
                                    t.removeEventListener(n, r, i)
                                }), m = []
                            }

                            function em(e) {
                                var t, n = !1;
                                if (!(!O.state.isEnabled || ey(e)) && !d) {
                                    var r = (null == (t = a) ? void 0 : t.type) === "focus";
                                    a = e, u = e.currentTarget, ei(), !O.state.isVisible && T(e, "MouseEvent") && Q.forEach(function(t) {
                                        return t(e)
                                    }), "click" === e.type && (0 > O.props.trigger.indexOf("mouseenter") || f) && !1 !== O.props.hideOnClick && O.state.isVisible ? n = !0 : eA(e), "click" === e.type && (f = !n), n && !r && eT(e)
                                }
                            }

                            function eb(t) {
                                var n, r, i, o = t.target,
                                    a = (u || e).contains(o) || I.contains(o);
                                ("mousemove" !== t.type || !a) && (n = ew().concat(I).map(function(e) {
                                    var t, n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                                    return n ? {
                                        popperRect: e.getBoundingClientRect(),
                                        popperState: n,
                                        props: p
                                    } : null
                                }).filter(Boolean), r = t.clientX, i = t.clientY, n.every(function(e) {
                                    var t = e.popperRect,
                                        n = e.popperState,
                                        o = e.props.interactiveBorder,
                                        a = n.placement.split("-")[0],
                                        s = n.modifiersData.offset;
                                    if (!s) return !0;
                                    var c = "bottom" === a ? s.top.y : 0,
                                        u = "top" === a ? s.bottom.y : 0,
                                        p = "right" === a ? s.left.x : 0,
                                        f = "left" === a ? s.right.x : 0,
                                        d = t.top - i + c > o,
                                        l = i - t.bottom - u > o,
                                        v = t.left - r + p > o,
                                        m = r - t.right - f > o;
                                    return d || l || v || m
                                }) && (eo(), eT(t)))
                            }

                            function eh(e) {
                                if (!(ey(e) || O.props.trigger.indexOf("click") >= 0 && f)) {
                                    if (O.props.interactive) {
                                        O.hideWithInteractivity(e);
                                        return
                                    }
                                    eT(e)
                                }
                            }

                            function eg(t) {
                                0 > O.props.trigger.indexOf("focusin") && t.target !== (u || e) || O.props.interactive && t.relatedTarget && I.contains(t.relatedTarget) || eT(t)
                            }

                            function ey(e) {
                                return !!H.isTouch && z() !== e.type.indexOf("touch") >= 0
                            }

                            function eO() {
                                eE();
                                var t = O.props,
                                    n = t.popperOptions,
                                    r = t.placement,
                                    i = t.offset,
                                    o = t.getReferenceClientRect,
                                    a = t.moveTransition,
                                    s = J() ? Y(I).arrow : null,
                                    p = o ? {
                                        getBoundingClientRect: o,
                                        contextElement: o.contextElement || u || e
                                    } : e,
                                    f = [{
                                        name: "offset",
                                        options: {
                                            offset: i
                                        }
                                    }, {
                                        name: "preventOverflow",
                                        options: {
                                            padding: {
                                                top: 2,
                                                bottom: 2,
                                                left: 5,
                                                right: 5
                                            }
                                        }
                                    }, {
                                        name: "flip",
                                        options: {
                                            padding: 5
                                        }
                                    }, {
                                        name: "computeStyles",
                                        options: {
                                            adaptive: !a
                                        }
                                    }, {
                                        name: "$$tippy",
                                        enabled: !0,
                                        phase: "beforeWrite",
                                        requires: ["computeStyles"],
                                        fn: function(e) {
                                            var t = e.state;
                                            if (J()) {
                                                var n = Y(I).box;
                                                ["placement", "reference-hidden", "escaped"].forEach(function(e) {
                                                    "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e)
                                                }), t.attributes.popper = {}
                                            }
                                        }
                                    }];
                                J() && s && f.push({
                                    name: "arrow",
                                    options: {
                                        element: s,
                                        padding: 3
                                    }
                                }), f.push.apply(f, (null == n ? void 0 : n.modifiers) || []), O.popperInstance = h(p, I, Object.assign({}, n, {
                                    placement: r,
                                    onFirstUpdate: c,
                                    modifiers: f
                                }))
                            }

                            function eE() {
                                O.popperInstance && (O.popperInstance.destroy(), O.popperInstance = null)
                            }

                            function ew() {
                                return L(I.querySelectorAll("[data-tippy-root]"))
                            }

                            function eA(e) {
                                O.clearDelayTimeouts(), e && en("onTrigger", [O, e]), eu();
                                var t = G(!0),
                                    n = W(),
                                    i = n[0],
                                    o = n[1];
                                H.isTouch && "hold" === i && o && (t = o), t ? r = setTimeout(function() {
                                    O.show()
                                }, t) : O.show()
                            }

                            function eT(e) {
                                if (O.clearDelayTimeouts(), en("onUntrigger", [O, e]), !O.state.isVisible) {
                                    ep();
                                    return
                                }
                                if (!(O.props.trigger.indexOf("mouseenter") >= 0 && O.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0) || !f) {
                                    var t = G(!1);
                                    t ? i = setTimeout(function() {
                                        O.state.isVisible && O.hide()
                                    }, t) : o = requestAnimationFrame(function() {
                                        O.hide()
                                    })
                                }
                            }
                        }(t, r);
                        return n && e.push(n), e
                    }, []);
                return _(e) ? i[0] : i
            }
            et.defaultProps = B, et.setDefaultProps = function(e) {
                Object.keys(e).forEach(function(t) {
                    B[t] = e[t]
                })
            }, et.currentInput = H, Object.assign({}, p, {
                effect: function(e) {
                    var t = e.state,
                        n = {
                            popper: {
                                position: t.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow)
                }
            }), et.setDefaultProps({
                render: G
            });
            var en = n(2265),
                er = n(54887);

            function ei(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }
            var eo = "undefined" != typeof window && "undefined" != typeof document;

            function ea(e, t) {
                e && ("function" == typeof e && e(t), ({}).hasOwnProperty.call(e, "current") && (e.current = t))
            }

            function es() {
                return eo && document.createElement("div")
            }
            var ec = eo ? en.useLayoutEffect : en.useEffect;

            function eu(e, t, n) {
                n.split(/\s+/).forEach(function(n) {
                    n && e.classList[t](n)
                })
            }
            var ep = {
                    name: "className",
                    defaultValue: "",
                    fn: function(e) {
                        var t = e.popper.firstElementChild,
                            n = function() {
                                var t;
                                return !!(null == (t = e.props.render) ? void 0 : t.$$tippy)
                            };

                        function r() {
                            (!e.props.className || n()) && eu(t, "add", e.props.className)
                        }
                        return {
                            onCreate: r,
                            onBeforeUpdate: function() {
                                n() && eu(t, "remove", e.props.className)
                            },
                            onAfterUpdate: r
                        }
                    }
                },
                ef = (r = function(e) {
                    var t, n, r, i = e.children,
                        o = e.content,
                        a = e.visible,
                        s = e.singleton,
                        c = e.render,
                        u = e.reference,
                        p = e.disabled,
                        f = void 0 !== p && p,
                        d = e.ignoreAttributes,
                        l = (e.__source, e.__self, ei(e, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"])),
                        v = void 0 !== a,
                        m = void 0 !== s,
                        b = (0, en.useState)(!1),
                        h = b[0],
                        g = b[1],
                        y = (0, en.useState)({}),
                        O = y[0],
                        E = y[1],
                        w = (0, en.useState)(),
                        A = w[0],
                        T = w[1],
                        x = (t = function() {
                            return {
                                container: es(),
                                renders: 1
                            }
                        }, (n = (0, en.useRef)()).current || (n.current = t()), n.current),
                        j = Object.assign({
                            ignoreAttributes: void 0 === d || d
                        }, l, {
                            content: x.container
                        });
                    v && (j.trigger = "manual", j.hideOnClick = !1), m && (f = !0);
                    var k = j,
                        C = j.plugins || [];
                    c && (k = Object.assign({}, j, {
                        plugins: m && null != s.data ? [].concat(C, [{
                            fn: function() {
                                return {
                                    onTrigger: function(e, t) {
                                        var n = s.data.children.find(function(e) {
                                            return e.instance.reference === t.currentTarget
                                        });
                                        e.state.$$activeSingletonInstance = n.instance, T(n.content)
                                    }
                                }
                            }
                        }]) : C,
                        render: function() {
                            return {
                                popper: x.container
                            }
                        }
                    }));
                    var L = [u].concat(i ? [i.type] : []);
                    return ec(function() {
                        var e = u;
                        u && u.hasOwnProperty("current") && (e = u.current);
                        var t = et(e || x.ref || es(), Object.assign({}, k, {
                            plugins: [ep].concat(j.plugins || [])
                        }));
                        return x.instance = t, f && t.disable(), a && t.show(), m && s.hook({
                                instance: t,
                                content: o,
                                props: k,
                                setSingletonContent: T
                            }), g(!0),
                            function() {
                                t.destroy(), null == s || s.cleanup(t)
                            }
                    }, L), ec(function() {
                        if (1 === x.renders) {
                            x.renders++;
                            return
                        }
                        var e, t, n, r, i, c, u, p = x.instance;
                        p.setProps((e = p.props, Object.assign({}, t = k, {
                            popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
                                modifiers: (i = [].concat((null == (n = e.popperOptions) ? void 0 : n.modifiers) || [], (null == (r = t.popperOptions) ? void 0 : r.modifiers) || []), c = [], i.forEach(function(e) {
                                    c.find(function(t) {
                                        return function e(t, n) {
                                            if (t === n) return !0;
                                            if ("object" != typeof t || null == t || "object" != typeof n || null == n || Object.keys(t).length !== Object.keys(n).length) return !1;
                                            for (var r in t)
                                                if (!n.hasOwnProperty(r) || !e(t[r], n[r])) return !1;
                                            return !0
                                        }(e, t)
                                    }) || c.push(e)
                                }), c)
                            })
                        }))), null == (u = p.popperInstance) || u.forceUpdate(), f ? p.disable() : p.enable(), v && (a ? p.show() : p.hide()), m && s.hook({
                            instance: p,
                            content: o,
                            props: k,
                            setSingletonContent: T
                        })
                    }), ec(function() {
                        if (c) {
                            var e, t = x.instance;
                            t.setProps({
                                popperOptions: Object.assign({}, t.props.popperOptions, {
                                    modifiers: [].concat(((null == (e = t.props.popperOptions) ? void 0 : e.modifiers) || []).filter(function(e) {
                                        return "$$tippyReact" !== e.name
                                    }), [{
                                        name: "$$tippyReact",
                                        enabled: !0,
                                        phase: "beforeWrite",
                                        requires: ["computeStyles"],
                                        fn: function(e) {
                                            var t, n = e.state,
                                                r = null == (t = n.modifiersData) ? void 0 : t.hide;
                                            (O.placement !== n.placement || O.referenceHidden !== (null == r ? void 0 : r.isReferenceHidden) || O.escaped !== (null == r ? void 0 : r.hasPopperEscaped)) && E({
                                                placement: n.placement,
                                                referenceHidden: null == r ? void 0 : r.isReferenceHidden,
                                                escaped: null == r ? void 0 : r.hasPopperEscaped
                                            }), n.attributes.popper = {}
                                        }
                                    }])
                                })
                            })
                        }
                    }, [O.placement, O.referenceHidden, O.escaped].concat(L)), en.createElement(en.Fragment, null, i ? (0, en.cloneElement)(i, {
                        ref: function(e) {
                            x.ref = e, ea(i.ref, e)
                        }
                    }) : null, h && (0, er.createPortal)(c ? c((r = {
                        "data-placement": O.placement
                    }, O.referenceHidden && (r["data-reference-hidden"] = ""), O.escaped && (r["data-escaped"] = ""), r), A, x.instance) : o, x.container))
                }, (0, en.forwardRef)(function(e, t) {
                    var n = e.children,
                        i = ei(e, ["children"]);
                    return en.createElement(r, Object.assign({}, void 0, i), n ? (0, en.cloneElement)(n, {
                        ref: function(e) {
                            ea(t, e), ea(n.ref, e)
                        }
                    }) : null)
                }))
        }
    }
]);