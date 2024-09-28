(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1359], {
        70164: function(e, n, i) {
            Promise.resolve().then(i.bind(i, 91282))
        },
        91282: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                default: function() {
                    return S
                }
            });
            var a = i(57437),
                t = i(2265),
                s = i(72824),
                l = i(358),
                c = i(6712),
                o = i(21896),
                r = i(12808),
                u = i(83667),
                d = i(42020),
                g = i(66648),
                h = i(61507),
                m = i(16463),
                f = i(90483),
                p = i(64486),
                v = i(74279),
                x = i(97161),
                j = i(7080),
                b = i(73305),
                N = i(1724),
                T = i(43705),
                P = i(75301);

            function S() {
                var e, n, i;
                let S = new URLSearchParams((0, N.Z)()),
                    [Z, w] = (0, t.useState)(p.rN),
                    [_, y] = (0, t.useState)(null),
                    [k, C] = (0, t.useState)(!0),
                    [R, A] = (0, t.useState)(null),
                    [E, H] = (0, t.useState)(new Date),
                    I = S.get(p.RH.tournamentId),
                    [K, L] = (0, t.useState)({
                        upcoming: !0,
                        ongoing: !0,
                        finished: !0
                    }),
                    [M, D] = (0, t.useState)({
                        upcoming: null,
                        ongoing: null,
                        finished: null
                    }),
                    [U, B] = (0, t.useState)({
                        upcoming: 0,
                        ongoing: 0,
                        finished: 0
                    }),
                    [O, z] = (0, t.useState)({
                        upcoming: 0,
                        ongoing: 0,
                        finished: 0
                    }),
                    F = {
                        status: p.rN,
                        search: "",
                        page: 0,
                        limit: 10
                    },
                    {
                        auth: G,
                        userAuth: q
                    } = (0, h.tN)(e => ({
                        auth: e.auth,
                        userAuth: e.userAuth
                    })),
                    J = (0, m.useRouter)();
                async function Q(e, n) {
                    (0, f.h_)(G.actor, D, { ...F,
                        status: e,
                        page: 0
                    }, L, z, _ ? [_] : [], n || null)
                }

                function V(e) {
                    switch (Z) {
                        case p.TP.upcoming:
                            B(n => ({ ...n,
                                upcoming: e
                            }));
                            break;
                        case p.TP.ongoing:
                            B(n => ({ ...n,
                                ongoing: e
                            }));
                            break;
                        case p.TP.finished:
                            B(n => ({ ...n,
                                finished: e
                            }));
                            break;
                        default:
                            B(n => ({ ...n,
                                upcoming: e
                            }))
                    }
                }
                let W = e => {
                        if (k) {
                            C(!1);
                            return
                        }
                        G.actor && (y(e), (0, f.h_)(G.actor, D, { ...F,
                            status: Z,
                            page: 0
                        }, L, z, [e], I || null), B({
                            upcoming: 0,
                            ongoing: 0,
                            finished: 0
                        }), z({
                            upcoming: 0,
                            ongoing: 0,
                            finished: 0
                        }))
                    },
                    X = S.get(p.RH.matchTab);
                return (0, t.useEffect)(() => {
                    let e = S.get(p.RH.matchTab);
                    e && w(e)
                }, [X]), (0, t.useEffect)(() => {
                    if (G.actor) {
                        let e = S.get(p.RH.matchTab);
                        e && w(e), (0, f.h_)(G.actor, D, { ...F,
                            status: null != e ? e : p.rN
                        }, L, z, [], I || null), (0, f.GN)(G.actor, F, A)
                    }
                }, [G.actor, I]), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(s.Z, {
                        fluid: !0,
                        className: "inner-page",
                        children: (0, a.jsx)(l.Z, {
                            children: (0, a.jsx)(s.Z, {
                                children: (0, a.jsx)(l.Z, {
                                    children: (0, a.jsxs)(c.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        children: [(0, a.jsxs)("div", {
                                            className: "calender-details-continer",
                                            children: [(0, a.jsx)("h2", {
                                                className: "animedown tablet-view-none",
                                                children: (0, a.jsx)("span", {
                                                    children: "MATCHES"
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "select-white-icon tablet-w-100 animedown",
                                                children: (0, a.jsxs)(o.Z.Select, {
                                                    "aria-label": "Default select example",
                                                    size: "lg",
                                                    className: "mySelectBtn",
                                                    value: null != I ? I : "",
                                                    onChange: e => {
                                                        let n = e.target.value;
                                                        V(0), (0, f.h_)(G.actor, D, { ...F,
                                                            status: Z,
                                                            page: 0
                                                        }, L, z, [], n || null), J.push("".concat(b.kB, "?tournament=").concat(n))
                                                    },
                                                    children: [(0, a.jsx)("option", {
                                                        value: "",
                                                        children: "Leagues"
                                                    }), null == R ? void 0 : R.map((e, n) => {
                                                        let [i, t] = e;
                                                        return (0, a.jsx)("option", {
                                                            value: i,
                                                            children: t.name
                                                        }, i)
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "mobile-view",
                                                children: p.TP.ongoing != (null != X ? X : p.rN) && (0, a.jsx)(r.Z, {
                                                    className: "trans ",
                                                    children: (0, a.jsx)(P.Z, {
                                                        onChange: e => {
                                                            if (Array.isArray(e)) {
                                                                let [n, i] = e, a = n ? n.getTime() : null;
                                                                a && W(a)
                                                            } else e && W(e.getTime());
                                                            H(e)
                                                        },
                                                        value: E,
                                                        clearIcon: null,
                                                        calendarAriaLabel: void 0,
                                                        calendarIcon: (0, a.jsx)(g.default, {
                                                            src: T.Z,
                                                            alt: "calender"
                                                        })
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "spacer-30"
                                        }), (0, a.jsxs)("div", {
                                            className: "gray-panel web-view-trans",
                                            children: [(0, a.jsxs)("div", {
                                                className: "calender-tabs-panel",
                                                children: [(0, a.jsx)("div", {
                                                    className: "Calender-chart ".concat(p.TP.ongoing == (null != X ? X : p.rN) ? "invisible remove-tranisiton" : "visible"),
                                                    children: (0, a.jsx)(x.Z, {
                                                        getSelectedDate: W
                                                    })
                                                }), (0, a.jsxs)(u.Z, {
                                                    activeKey: Z,
                                                    onSelect: function(e) {
                                                        if (!e) return;
                                                        let n = new URLSearchParams(S.toString());
                                                        n.set(p.RH.matchTab, e), window.history.pushState(null, "", "?".concat(n.toString())), e != p.TP.upcoming || M.upcoming ? e != p.TP.ongoing || M.ongoing ? e != p.TP.finished || M.finished || Q(p.TP.finished, I) : Q(p.TP.ongoing, I) : Q(p.TP.upcoming, I), w(e)
                                                    },
                                                    className: "mb-5 tabbb",
                                                    children: [(0, a.jsx)(d.Z, {
                                                        eventKey: p.TP.upcoming,
                                                        title: "Upcoming",
                                                        children: (0, a.jsx)(v.Z, {
                                                            loading: K.upcoming,
                                                            tab: Z,
                                                            groupMatches: null == M ? void 0 : M.upcoming,
                                                            admin: null === (e = q.userPerms) || void 0 === e ? void 0 : e.admin
                                                        })
                                                    }), (0, a.jsx)(d.Z, {
                                                        eventKey: p.TP.ongoing,
                                                        title: "In Progress",
                                                        children: (0, a.jsx)(v.Z, {
                                                            loading: K.ongoing,
                                                            tab: Z,
                                                            groupMatches: null == M ? void 0 : M.ongoing,
                                                            admin: null === (n = q.userPerms) || void 0 === n ? void 0 : n.admin
                                                        })
                                                    }), (0, a.jsx)(d.Z, {
                                                        eventKey: p.TP.finished,
                                                        title: "Completed",
                                                        children: (0, a.jsx)(v.Z, {
                                                            loading: K.finished,
                                                            tab: Z,
                                                            groupMatches: null == M ? void 0 : M.finished,
                                                            admin: null === (i = q.userPerms) || void 0 === i ? void 0 : i.admin
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsx)(j.Z, {
                                                matchTab: Z,
                                                pageCount: O,
                                                offset: U,
                                                pageClicked: function(e) {
                                                    G.actor && (V(e), (0, f.h_)(G.actor, D, { ...F,
                                                        status: Z,
                                                        page: e
                                                    }, L, z, _ ? [_] : [], I || null))
                                                }
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [2960, 1866, 6990, 6204, 6902, 6648, 6910, 9791, 5221, 7100, 8740, 6055, 2027, 7200, 5332, 2179, 9131, 3928, 7414, 2971, 7023, 1744], function() {
            return e(e.s = 70164)
        }), _N_E = e.O()
    }
]);