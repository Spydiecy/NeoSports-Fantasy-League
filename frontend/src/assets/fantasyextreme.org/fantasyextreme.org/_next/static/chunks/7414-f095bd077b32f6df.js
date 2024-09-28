"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7414], {
        97161: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(57437),
                i = n(2265),
                s = n(69424);
            n(1239);
            var l = n(1724),
                c = n(64486);

            function r(e) {
                let {
                    getSelectedDate: t
                } = e, [n, r] = (0, i.useState)(0), [o, d] = (0, i.useState)(""), [h, u] = (0, i.useState)(""), [m, x] = (0, i.useState)(null), v = (0, i.useRef)(null), g = new URLSearchParams((0, l.Z)());
                g.get(c.RH.matchTab);
                let [p, f] = (0, i.useState)("");
                g.get(c.RH.tournamentId);
                let [j, w] = (0, i.useState)(""), b = () => {
                    let e = new Date,
                        t = new Date(e);
                    t.setFullYear(e.getFullYear() - 1);
                    let n = new Date(e);
                    n.setFullYear(e.getFullYear() + 1);
                    let a = [];
                    for (; t < e;) a.push(N(new Date(t))), t.setDate(t.getDate() + 1);
                    let i = !1;
                    for (; e < n;) i || (r(a.length), i = !0), a.push(N(new Date(e))), e.setDate(e.getDate() + 1);
                    return a
                };

                function N(e) {
                    return {
                        dates: "".concat(e.getDate(), " ").concat(e.toLocaleDateString("en-US", {
                            month: "short"
                        })),
                        month: e.toLocaleDateString("en-US", {
                            weekday: "short"
                        }),
                        dateInMiliseconds: e.setHours(0, 0, 0, 0)
                    }
                }
                return (0, i.useEffect)(() => {
                    let e = setTimeout(() => {
                        (null == v ? void 0 : v.current) && (null == v || v.current.goToSlide(n + 5))
                    }, 2e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [n]), (0, i.useEffect)(() => {
                    x(b())
                }, []), (0, i.useEffect)(() => {
                    (null == v ? void 0 : v.current) && (null == v || v.current.goToSlide(n + 5))
                }, []), (0, a.jsx)("div", {
                    className: "main_slider",
                    children: m && (0, a.jsx)(s.default, {
                        ref: v,
                        swipeable: !1,
                        draggable: !1,
                        responsive: {
                            desktop: {
                                breakpoint: {
                                    max: 3e3,
                                    min: 1024
                                },
                                items: 3,
                                slidesToSlide: 1
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 3,
                                slidesToSlide: 1
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 3,
                                slidesToSlide: 1
                            }
                        },
                        ssr: !0,
                        infinite: !0,
                        autoPlaySpeed: 1e3,
                        keyBoardControl: !0,
                        customTransition: "all .5",
                        containerClass: "carousel-container",
                        removeArrowOnDeviceType: ["tablet", "mobile"],
                        afterChange: (e, n) => {
                            let {
                                currentSlide: a
                            } = n;
                            t(m[a - 5].dateInMiliseconds), d(m[a - 5].dates), u(m[a - 5].month)
                        },
                        children: m.map((e, t) => (0, a.jsxs)("div", {
                            className: "slide-item",
                            children: [(0, a.jsx)("div", {
                                className: "dayOfWeek",
                                children: e.month
                            }), (0, a.jsx)("div", {
                                className: "date",
                                children: e.dates
                            })]
                        }, t))
                    })
                })
            }
        },
        72290: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var a = n(57437),
                i = n(51725),
                s = n(61507),
                l = n(2265),
                c = n(58136),
                r = n(12808),
                o = n(12514),
                d = {
                    src: "/_next/static/media/NFID.2af7c7e7.png",
                    height: 31,
                    width: 66,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAbklEQVR42mNAAtwMDJysZ2PuWv0PnM7KAAQNSZ8tGIBgDRC3MTAwLWVhYJD///Y/Y1fi5yLP5h91DDu/aTMAwTwgnsPEwJjPUM3AnMfwn92j5msZ68HvzfK3vuoyoAPlVV9sGP6/Y2cAAvv3lywAG2oh+E2pEY8AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                h = n(66648),
                u = n(16463),
                m = n(94282),
                x = function(e) {
                    let {
                        show: t,
                        hideModal: n,
                        callBackfn: x
                    } = e, [v, g] = (0, l.useState)(null), [p, f] = (0, l.useState)(!1), j = (0, u.useRouter)(), {
                        auth: w,
                        userAuth: b,
                        setUserAuth: N
                    } = (0, s.tN)(e => ({
                        auth: e.auth,
                        userAuth: e.userAuth,
                        setUserAuth: e.setUserAuth
                    })), {
                        login: A
                    } = (0, m.Z)();
                    async function y(e) {
                        g(e), A(e, j, x)
                    }
                    return (0, l.useEffect)(() => {
                        "initialized" == w.state && n()
                    }, [w.isLoading]), (0, a.jsx)(c.Z, {
                        className: "light connect-modal",
                        backdrop: !w.isLoading || "static",
                        show: t,
                        centered: !0,
                        onHide: n,
                        children: (0, a.jsxs)(c.Z.Body, {
                            children: [(0, a.jsx)(r.Z, {
                                disabled: w.isLoading,
                                className: "custome-close-btn ",
                                onClick: n,
                                children: (0, a.jsx)("i", {
                                    className: "fa fa-close "
                                })
                            }), (0, a.jsx)("div", {
                                className: "d-flex justify-content-center",
                                children: (0, a.jsx)("img", {
                                    src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/logo/logo.png",
                                    className: "connect-logo",
                                    alt: "logo"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "text-center mt-3 white-modal",
                                children: [(0, a.jsx)("p", {
                                    className: "text-left",
                                    children: "Connect With Internet Identity "
                                }), (0, a.jsxs)(r.Z, {
                                    className: "reg-btn connect-btn II",
                                    disabled: w.isLoading,
                                    onClick: () => y(i.X9.InternetIdentity),
                                    id: "handleLogin_identity",
                                    children: [(0, a.jsx)("img", {
                                        src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/infinte.png",
                                        alt: "Infinte Logo"
                                    }), w.isLoading && v == i.X9.InternetIdentity ? (0, a.jsx)(o.default, {
                                        size: "sm"
                                    }) : (0, a.jsx)("span", {
                                        className: "rgb II",
                                        children: "Connect"
                                    }), (0, a.jsx)("span", {
                                        style: {
                                            width: 55
                                        }
                                    })]
                                }), (0, a.jsx)("p", {
                                    className: "text-left second",
                                    children: "Connect With NFID "
                                }), (0, a.jsxs)(r.Z, {
                                    className: "reg-btn connect-btn NFID",
                                    disabled: w.isLoading,
                                    id: "nfid_btn",
                                    onClick: () => y(i.X9.NFID),
                                    children: [(0, a.jsx)(h.default, {
                                        alt: "NFID",
                                        src: d
                                    }), w.isLoading && v == i.X9.NFID ? (0, a.jsx)(o.default, {
                                        size: "sm"
                                    }) : (0, a.jsx)("span", {
                                        className: "rgb NFID",
                                        children: "Connect"
                                    }), (0, a.jsx)("span", {
                                        style: {
                                            width: 66
                                        }
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        74279: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return k
                }
            });
            var a, i, s, l, c, r, o, d = n(57437),
                h = n(51725),
                u = n(73305),
                m = n(64486),
                x = n(61507),
                v = n(66648),
                g = n(87138),
                p = n(29811),
                f = n(12514),
                j = n(72290),
                w = n(2265),
                b = n(90483),
                N = n(16463),
                A = n(86055),
                y = n(4410),
                I = ["title", "titleId"];

            function C() {
                return (C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Z = function(e) {
                var t = e.title,
                    n = e.titleId,
                    d = function(e, t) {
                        if (null == e) return {};
                        var n, a, i = function(e, t) {
                            if (null == e) return {};
                            var n, a, i = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (a = 0; a < s.length; a++) n = s[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                        return i
                    }(e, I);
                return y.createElement("svg", C({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 83 47",
                    "aria-labelledby": n
                }, d), t ? y.createElement("title", {
                    id: n
                }, t) : null, a || (a = y.createElement("path", {
                    fill: "#5EA570",
                    d: "M79.517 46.574H2.627A2.626 2.626 0 0 1 0 43.948V2.627A2.626 2.626 0 0 1 2.627 0h76.89a2.626 2.626 0 0 1 2.626 2.627v41.32a2.627 2.627 0 0 1-2.626 2.627Z"
                })), i || (i = y.createElement("path", {
                    fill: "#528E61",
                    d: "M79.516 0H76.04a2.626 2.626 0 0 1 2.627 2.627v41.32a2.626 2.626 0 0 1-2.627 2.627h3.475a2.627 2.627 0 0 0 2.626-2.626V2.627A2.626 2.626 0 0 0 79.516 0Z"
                })), s || (s = y.createElement("path", {
                    fill: "#8BC852",
                    d: "M72.986 33.19a.429.429 0 0 0 .394-.427V13.812a.43.43 0 0 0-.394-.429 4.753 4.753 0 0 1-4.343-4.35.42.42 0 0 0-.418-.386H13.93a.43.43 0 0 0-.428.394 4.753 4.753 0 0 1-4.342 4.342.429.429 0 0 0-.394.429v18.95c0 .224.171.41.394.429a4.753 4.753 0 0 1 4.342 4.342.429.429 0 0 0 .428.394h54.286a.43.43 0 0 0 .428-.394 4.753 4.753 0 0 1 4.342-4.342Z"
                })), l || (l = y.createElement("path", {
                    fill: "#7DBE3B",
                    d: "M72.987 13.383a4.753 4.753 0 0 1-4.343-4.35.42.42 0 0 0-.419-.386H64.04a.42.42 0 0 1 .419.386 4.753 4.753 0 0 0 4.342 4.35.43.43 0 0 1 .394.428v18.952c0 .223-.17.41-.394.428a4.753 4.753 0 0 0-4.341 4.342.43.43 0 0 1-.429.394h4.185a.43.43 0 0 0 .429-.394 4.753 4.753 0 0 1 4.342-4.342.429.429 0 0 0 .394-.428V13.81a.43.43 0 0 0-.394-.428Z"
                })), c || (c = y.createElement("path", {
                    fill: "#CBE7AF",
                    d: "M41.072 41.892c10.275 0 18.605-8.33 18.605-18.605 0-10.276-8.33-18.605-18.605-18.605s-18.605 8.33-18.605 18.605 8.33 18.605 18.605 18.605Z"
                })), r || (r = y.createElement("path", {
                    fill: "#AAD880",
                    d: "M41.072 4.682c-.685 0-1.361.038-2.027.11 9.322 1.01 16.578 8.905 16.578 18.495 0 9.59-7.256 17.485-16.578 18.495.666.072 1.342.11 2.027.11 10.275 0 18.605-8.33 18.605-18.605S51.347 4.682 41.072 4.682Z"
                })), o || (o = y.createElement("path", {
                    fill: "#5EA570",
                    d: "M43.459 22.009a56.417 56.417 0 0 1-1.268-.464V14.94c1.12.232 1.789.804 1.843.852a1.24 1.24 0 0 0 1.673-1.83c-.076-.07-1.382-1.245-3.516-1.535v-1.402a1.24 1.24 0 1 0-2.48 0v1.497a8.17 8.17 0 0 0-.69.176c-1.893.57-3.308 2.19-3.692 4.23-.35 1.856.242 3.643 1.545 4.665.714.56 1.606 1.072 2.838 1.616v8.293c-1.13-.067-1.872-.315-3.124-1.134a1.24 1.24 0 0 0-1.357 2.075c1.744 1.14 2.925 1.463 4.48 1.538v1.568a1.24 1.24 0 1 0 2.48 0v-1.662c3.034-.553 4.805-3.035 5.195-5.353.495-2.946-1.046-5.507-3.927-6.525Zm-5.055-2.367c-.571-.448-.816-1.312-.639-2.255.166-.876.764-1.939 1.947-2.307v5.381a8.63 8.63 0 0 1-1.308-.819Zm6.537 8.48c-.22 1.315-1.156 2.714-2.75 3.212v-7.146c.144.052.29.105.441.158 2.579.911 2.42 3.121 2.31 3.777Z"
                })))
            };

            function k(e) {
                let {
                    groupMatches: t,
                    loading: n,
                    tab: a,
                    admin: i
                } = e, {
                    auth: s,
                    userAuth: l,
                    setUserAuth: c
                } = (0, x.tN)(e => ({
                    auth: e.auth,
                    userAuth: e.userAuth,
                    setUserAuth: e.setUserAuth
                })), [r, o] = (0, w.useState)(null), [y, I] = (0, w.useState)(!1), C = (0, N.useRouter)(), k = e => {
                    C.push("".concat(u.kB + u.dK, "?matchId=").concat(e, "&type=").concat(m.Ng.simple))
                };
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)("div", {
                        className: "table-container web-view-table",
                        children: (0, d.jsxs)("div", {
                            className: "table-inner-container ".concat(!(!n && t && (null == t ? void 0 : t.length) == 0) && "min-height-of-table"),
                            children: [(0, d.jsxs)(p.Z, {
                                children: [(0, d.jsx)("thead", {
                                    children: (0, d.jsxs)("tr", {
                                        children: [(0, d.jsx)("th", {
                                            className: "text-center",
                                            children: "Action"
                                        }), (0, d.jsx)("th", {
                                            className: "text-center",
                                            children: "MATCHES"
                                        }), (0, d.jsx)("th", {
                                            children: "Date"
                                        }), (0, d.jsx)("th", {
                                            children: "TIME"
                                        }), (0, d.jsx)("th", {
                                            children: "location"
                                        })]
                                    })
                                }), n ? (0, d.jsx)("tbody", {
                                    className: "",
                                    children: (0, d.jsx)("tr", {
                                        children: (0, d.jsx)("td", {
                                            colSpan: 5,
                                            children: (0, d.jsx)("div", {
                                                className: "d-flex justify-content-center",
                                                children: (0, d.jsx)(f.default, {
                                                    animation: "border"
                                                })
                                            })
                                        })
                                    })
                                }) : (0, d.jsx)("tbody", {
                                    className: "",
                                    children: (0, d.jsx)("tr", {
                                        children: (0, d.jsx)("td", {
                                            colSpan: 5,
                                            children: (0, d.jsx)("div", {
                                                className: "d-flex justify-content-center",
                                                children: !n && t && (null == t ? void 0 : t.length) == 0 && (0, d.jsx)("p", {
                                                    children: "No Matches Found"
                                                })
                                            })
                                        })
                                    })
                                }), !n && (0, d.jsx)("tbody", {
                                    children: null == t ? void 0 : t.map((e, t) => {
                                        var n, l;
                                        return (0, d.jsxs)(w.Fragment, {
                                            children: [(0, d.jsx)("tr", {
                                                children: (0, d.jsx)("td", {
                                                    colSpan: 4,
                                                    children: (0, d.jsx)("h5", {
                                                        children: (0, d.jsxs)("span", {
                                                            children: [" ", null === (n = e[1][0]) || void 0 === n ? void 0 : n.tournamentName]
                                                        })
                                                    })
                                                })
                                            }), null === (l = e[1]) || void 0 === l ? void 0 : l.map(e => {
                                                var t, n, l, c;
                                                return (0, d.jsxs)("tr", {
                                                    className: "pointer ".concat(e.isPostpond && "isPostpond"),
                                                    children: [(0, d.jsx)("td", {
                                                        children: (0, d.jsxs)("div", {
                                                            className: "d-flex justify-content-center matchesBtns",
                                                            children: [(a == m.TP.upcoming || "ic" == m.mf.dev) && (0, d.jsx)(g.default, {
                                                                href: (0, b.Mb)(s.state) ? "".concat(u.Ej, "?matchId=").concat(e.id) : "#",
                                                                onClick: () => {
                                                                    (0, b.Mb)(s.state) || (I(!0), o("".concat(u.Ej, "?matchId=").concat(e.id)))
                                                                },
                                                                className: " reg-btn text-white reg-custom-btn empty text-capitalize ",
                                                                children: "Create Team"
                                                            }), i && (0, d.jsx)(g.default, {
                                                                href: "".concat(u.Yi, "?matchId=").concat(e.id, "&type=").concat(m.Ng.simple),
                                                                className: " reg-btn text-white reg-custom-btn empty text-capitalize  ",
                                                                children: "Create Contest"
                                                            }), (0, d.jsx)(g.default, {
                                                                href: "".concat(u.kB + u.dK, "?matchId=").concat(e.id, "&type=").concat(m.Ng.simple),
                                                                className: " reg-btn text-white reg-custom-btn empty text-capitalize  ",
                                                                children: "View Contests"
                                                            })]
                                                        })
                                                    }), (0, d.jsx)("td", {
                                                        onClick: () => k(e.id),
                                                        children: (0, d.jsxs)("div", {
                                                            className: "w-100 d-flex justify-content-center align-items-center text-center",
                                                            children: [(0, d.jsxs)("span", {
                                                                className: "w-half text-right d-flex align-items-center justify-content-end",
                                                                children: [(0, d.jsx)(A.ZP, {
                                                                    content: e.homeTeam.name,
                                                                    children: (0, d.jsxs)("span", {
                                                                        className: "truncate",
                                                                        children: [" ", e.homeTeam.name]
                                                                    })
                                                                }), (0, d.jsx)(v.default, {
                                                                    className: "mx-2",
                                                                    src: null == e ? void 0 : null === (n = e.homeTeam.logo) || void 0 === n ? void 0 : null === (t = n.replace("h=40", "h=200")) || void 0 === t ? void 0 : t.replace("w=40", "w=200"),
                                                                    width: h.us.width,
                                                                    height: h.us.height,
                                                                    alt: "Icon paris"
                                                                })]
                                                            }), a == m.TP.finished ? (0, d.jsxs)("span", {
                                                                className: "d-flex flex-column",
                                                                children: [(0, d.jsx)("span", {
                                                                    className: "w-80 text-center fs-6 color fw-bold",
                                                                    children: "".concat(null == e ? void 0 : e.homeScore, "-").concat(null == e ? void 0 : e.awayScore)
                                                                }), (0, d.jsxs)("span", {
                                                                    className: "w-80 text-center verses",
                                                                    children: ["vs ", (null == e ? void 0 : e.isOnFriday) && (0, d.jsx)(A.ZP, {
                                                                        content: "Contest winner of this match will get the reward",
                                                                        children: (0, d.jsxs)("span", {
                                                                            children: [(0, d.jsx)("br", {}), " ", (0, d.jsx)(Z, {})]
                                                                        })
                                                                    })]
                                                                })]
                                                            }) : (0, d.jsxs)("span", {
                                                                className: "w-80 text-center verses",
                                                                children: ["vs ", (null == e ? void 0 : e.isOnFriday) && (0, d.jsx)(A.ZP, {
                                                                    content: "Contest winner of this match will get the reward",
                                                                    children: (0, d.jsxs)("span", {
                                                                        children: [(0, d.jsx)("br", {}), " ", (0, d.jsx)(Z, {})]
                                                                    })
                                                                })]
                                                            }), (0, d.jsxs)("span", {
                                                                className: "w-half text-left d-flex align-items-center justify-content-start",
                                                                children: [(0, d.jsx)(v.default, {
                                                                    className: "mx-2",
                                                                    src: null == e ? void 0 : null === (c = e.awayTeam.logo) || void 0 === c ? void 0 : null === (l = c.replace("h=40", "h=200")) || void 0 === l ? void 0 : l.replace("w=40", "w=200"),
                                                                    width: h.us.width,
                                                                    height: h.us.height,
                                                                    alt: "Icon paris"
                                                                }), " ", (0, d.jsx)(A.ZP, {
                                                                    content: e.awayTeam.name,
                                                                    children: (0, d.jsxs)("span", {
                                                                        className: "truncate",
                                                                        children: [" ", e.awayTeam.name]
                                                                    })
                                                                })]
                                                            })]
                                                        })
                                                    }), (0, d.jsx)("td", {
                                                        onClick: () => k(e.id),
                                                        children: (0, d.jsx)("div", {
                                                            className: "text-nowrap",
                                                            children: null == e ? void 0 : e.date
                                                        })
                                                    }), (0, d.jsx)("td", {
                                                        onClick: () => k(e.id),
                                                        children: (0, d.jsx)("div", {
                                                            className: "text-nowrap",
                                                            children: null == e ? void 0 : e.time
                                                        })
                                                    }), (0, d.jsx)("td", {
                                                        onClick: () => k(e.id),
                                                        children: (0, d.jsxs)("div", {
                                                            className: "isPostpondStatus",
                                                            children: [e.isPostpond && (0, d.jsx)("span", {
                                                                children: e.status
                                                            }), (0, d.jsx)("span", {
                                                                children: null == e ? void 0 : e.location
                                                            })]
                                                        })
                                                    })]
                                                }, e.id)
                                            })]
                                        }, "group-".concat(t))
                                    })
                                })]
                            }), !0]
                        })
                    }), t && 0 != t.length ? null == t ? void 0 : t.map((e, t) => {
                        var n, l;
                        return (0, d.jsxs)(w.Fragment, {
                            children: [(0, d.jsx)("h5", {
                                className: "color Nasalization hide-on-web",
                                children: (0, d.jsxs)("span", {
                                    children: [" ", null === (n = e[1][0]) || void 0 === n ? void 0 : n.tournamentName]
                                })
                            }), null === (l = e[1]) || void 0 === l ? void 0 : l.map(e => {
                                var t, n, l, c;
                                return (0, d.jsxs)("div", {
                                    className: "mobile-match-post",
                                    children: [(0, d.jsxs)("div", {
                                        className: "match-post-header",
                                        children: [(0, d.jsxs)("div", {
                                            className: "flex-div",
                                            children: [(0, d.jsxs)("h6", {
                                                children: [(0, d.jsx)(v.default, {
                                                    src: null == e ? void 0 : null === (n = e.homeTeam.logo) || void 0 === n ? void 0 : null === (t = n.replace("h=40", "h=200")) || void 0 === t ? void 0 : t.replace("w=40", "w=200"),
                                                    width: h.us.width,
                                                    height: h.us.height,
                                                    alt: "Icon paris"
                                                }), (0, d.jsx)(A.ZP, {
                                                    content: e.homeTeam.name,
                                                    children: (0, d.jsxs)("span", {
                                                        className: "truncate",
                                                        children: [" ", e.homeTeam.name]
                                                    })
                                                })]
                                            }), (0, d.jsxs)("h6", {
                                                className: "color verses",
                                                onClick: () => k(e.id),
                                                children: [(null == e ? void 0 : e.isOnFriday) && (0, d.jsx)(A.ZP, {
                                                    content: "Contest winner of this match will get the reward",
                                                    children: (0, d.jsxs)("span", {
                                                        children: [(0, d.jsx)("br", {}), " ", (0, d.jsx)(Z, {})]
                                                    })
                                                }), (0, d.jsx)("br", {}), (0, d.jsx)("br", {}), null == e ? void 0 : e.date, " ", (0, d.jsx)("br", {}), "   ", null == e ? void 0 : e.time]
                                            }), (0, d.jsxs)("h6", {
                                                children: [(0, d.jsx)(v.default, {
                                                    src: null == e ? void 0 : null === (c = e.awayTeam.logo) || void 0 === c ? void 0 : null === (l = c.replace("h=40", "h=200")) || void 0 === l ? void 0 : l.replace("w=40", "w=200"),
                                                    width: h.us.width,
                                                    height: h.us.height,
                                                    alt: "Icon paris"
                                                }), " ", (0, d.jsx)(A.ZP, {
                                                    content: e.awayTeam.name,
                                                    children: (0, d.jsxs)("span", {
                                                        className: "truncate",
                                                        children: [" ", e.awayTeam.name]
                                                    })
                                                })]
                                            })]
                                        }), (0, d.jsx)("div", {
                                            className: "transparent-white",
                                            onClick: () => k(e.id),
                                            children: (0, d.jsxs)("div", {
                                                className: "isPostpondStatus",
                                                children: [e.isPostpond && (0, d.jsx)("span", {
                                                    children: e.status
                                                }), (0, d.jsx)("span", {
                                                    children: null == e ? void 0 : e.location
                                                })]
                                            })
                                        })]
                                    }), (0, d.jsxs)("div", {
                                        className: "match-post-footer ".concat(i && "adm"),
                                        children: [(a == m.TP.upcoming || "ic" == m.mf.dev) && (0, d.jsx)(g.default, {
                                            href: (0, b.Mb)(s.state) ? "".concat(u.Ej, "?matchId=").concat(e.id) : "#",
                                            onClick: () => {
                                                (0, b.Mb)(s.state) || (I(!0), o("".concat(u.Ej, "?matchId=").concat(e.id)))
                                            },
                                            className: " reg-btn text-white reg-custom-btn empty text-capitalize ",
                                            children: "Create Team"
                                        }), i && (0, d.jsx)(g.default, {
                                            href: "".concat(u.Yi, "?matchId=").concat(e.id, "&type=").concat(m.Ng.simple),
                                            className: " reg-btn text-white reg-custom-btn empty text-capitalize  ",
                                            children: "Create Contest"
                                        }), (0, d.jsx)(g.default, {
                                            href: "".concat(u.kB + u.dK, "?matchId=").concat(e.id, "&type=").concat(m.Ng.simple),
                                            className: " reg-btn text-white reg-custom-btn empty text-capitalize  ",
                                            children: "View Contests"
                                        })]
                                    })]
                                }, e.id)
                            })]
                        }, "mobile-group-".concat(t))
                    }) : (0, d.jsx)("p", {
                        className: "text-center text-white  hide-on-web",
                        children: "Match Not Found"
                    }), (0, d.jsx)(j.Z, {
                        show: y,
                        hideModal: function() {
                            I(!1)
                        },
                        callBackfn: () => {
                            r && C.push(r)
                        }
                    })]
                })
            }
        },
        7080: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = n(57437),
                i = n(64486);
            n(2265);
            var s = n(80808);

            function l(e) {
                let {
                    matchTab: t,
                    pageCount: n,
                    offset: l,
                    pageClicked: c,
                    LimitParam: r
                } = e, {
                    count: o,
                    offset: d
                } = {
                    [i.TP.upcoming]: {
                        count: n.upcoming,
                        offset: l.upcoming
                    },
                    [i.TP.ongoing]: {
                        count: n.ongoing,
                        offset: l.ongoing
                    },
                    [i.TP.finished]: {
                        count: n.finished,
                        offset: l.finished
                    }
                }[t] || {}, h = void 0 !== r ? r : i.fc;
                return (0, a.jsx)(a.Fragment, {
                    children: o > 0 && (0, a.jsx)("div", {
                        className: "text-right paginationstyle",
                        children: void 0 !== o && void 0 !== d && (0, a.jsx)(s.Z, {
                            itemsPerPage: h,
                            count: o,
                            offset: d,
                            pageChange: c,
                            status: t
                        })
                    })
                })
            }
        },
        80808: function(e, t, n) {
            var a = n(57437),
                i = n(2265),
                s = n(75539);
            t.Z = e => {
                let t, {
                        itemsPerPage: n,
                        count: l,
                        offset: c,
                        pageChange: r,
                        status: o,
                        first: d
                    } = e,
                    [h, u] = (0, i.useState)(c + 1),
                    m = Math.ceil(l / n),
                    x = e => {
                        u(e), r(e - 1)
                    };
                return (0, i.useEffect)(() => {
                    u(c + 1)
                }, [c]), (0, a.jsx)("div", {
                    children: (0, a.jsx)(s.Z, {
                        children: ((t = []).push((0, a.jsx)(s.Z.First, {
                            onClick: () => x(1),
                            disabled: 1 === h,
                            children: "‹‹"
                        }, "first")), d && t.push((0, a.jsx)(s.Z.First, {
                            onClick: () => x(1),
                            disabled: 1 === h,
                            children: "‹‹"
                        }, "first-conditional")), d || t.push((0, a.jsx)(s.Z.First, {
                            onClick: () => x(h - 1),
                            disabled: 1 === h,
                            children: "‹"
                        }, "first-previous")), t.push((0, a.jsx)(s.Z.Item, {
                            active: !0,
                            children: h
                        }, h)), h < m && t.push((0, a.jsx)(s.Z.Item, {
                            onClick: () => x(h + 1),
                            children: h + 1
                        }, h + 1)), h < m - 2 && t.push((0, a.jsx)(s.Z.Item, {
                            disabled: !0,
                            children: "…"
                        }, "end-ellipsis")), h < m - 1 && t.push((0, a.jsx)(s.Z.Item, {
                            onClick: () => x(m),
                            children: m
                        }, m)), t.push((0, a.jsx)(s.Z.Next, {
                            onClick: () => x(h + 1),
                            disabled: h === m,
                            children: "›"
                        }, "next")), t)
                    })
                })
            }
        },
        1724: function(e, t, n) {
            var a = n(16463),
                i = n(2265);
            t.Z = function() {
                let [e, t] = (0, i.useState)(""), n = (0, a.useParams)();
                return (0, i.useEffect)(() => {
                    t(window.location.search)
                }, [n]), e
            }
        },
        94282: function(e, t, n) {
            var a = n(14234),
                i = n(18473),
                s = n(57389),
                l = n(2265),
                c = n(69419),
                r = n(90483),
                o = n(73305),
                d = n(92618),
                h = n(20585),
                u = n(51725),
                m = n(61507),
                x = n(16463);
            t.Z = () => {
                let {
                    auth: e,
                    setAuth: t,
                    userAuth: n,
                    setUserAuth: v
                } = (0, m.tN)(e => ({
                    auth: e.auth,
                    setAuth: e.setAuth,
                    userAuth: e.userAuth,
                    setUserAuth: e.setUserAuth
                })), g = (0, x.useRouter)(), p = (0, l.useCallback)(async () => {
                    (0, i.Z)("INIIITINNNNG"), t({ ...e,
                        isLoading: !0
                    });
                    let l = await h.NFID.init({
                            application: {
                                name: u.vj.name,
                                logo: u.vj.logo
                            },
                            idleOptions: {
                                disableIdle: !0,
                                disableDefaultIdleCallback: !0
                            }
                        }),
                        c = await s.AuthClient.create({
                            idleOptions: {
                                disableIdle: !0,
                                disableDefaultIdleCallback: !0
                            }
                        });
                    if (await c.isAuthenticated()) return {
                        success: !1,
                        actor: await N(c)
                    };
                    if (l.isAuthenticated) return {
                        success: !1,
                        actor: await N(void 0, l.getIdentity())
                    }; {
                        let i = (0, a.jb)(),
                            s = await i.getRewardPercentage();
                        return t({ ...e,
                            state: "anonymous",
                            actor: i,
                            client: c,
                            isLoading: !1
                        }), v({ ...n,
                            rewardPercentage: Number(s)
                        }), {
                            success: !1,
                            actor: i
                        }
                    }
                }, [t]), f = (0, l.useCallback)(async (n, a, i) => {
                    if ("anonymous" === e.state) {
                        if (t({ ...e,
                                isLoading: !0
                            }), n === u.X9.InternetIdentity) {
                            var s, l;
                            if (!e.client) {
                                p(), console.error("AuthClient not initialized");
                                return
                            }
                            await e.client.login({
                                maxTimeToLive: BigInt(2592e12),
                                derivationOrigin: "https://w2utv-nyaaa-aaaam-ac7iq-cai.icp0.io",
                                identityProvider: "https://identity.ic0.app/#authorize",
                                onSuccess: () => {
                                    N(e.client).then(() => {
                                        var e;
                                        let t = null === (e = window) || void 0 === e ? void 0 : e.location;
                                        (null == t ? void 0 : t.pathname) == "/" && g.push(o.zO), i && i()
                                    })
                                },
                                onError: () => {
                                    t({ ...e,
                                        isLoading: !1
                                    })
                                }
                            }), null === (l = e.client.idleManager) || void 0 === l || null === (s = l.registerCallback) || void 0 === s || s.call(l, () => {
                                e.client && e.client.login({
                                    onSuccess: async () => {
                                        N(e.client)
                                    }
                                })
                            })
                        } else if (n === u.X9.NFID) try {
                            let e = await h.NFID.init({
                                    application: {
                                        name: u.vj.name,
                                        logo: u.vj.logo
                                    },
                                    idleOptions: {
                                        disableIdle: !0,
                                        disableDefaultIdleCallback: !0
                                    }
                                }),
                                t = await e.getDelegation({
                                    maxTimeToLive: BigInt(2592e12),
                                    derivationOrigin: "https://w2utv-nyaaa-aaaam-ac7iq-cai.icp0.io"
                                });
                            N(void 0, t).then(() => {
                                var e;
                                let t = null === (e = window) || void 0 === e ? void 0 : e.location;
                                (null == t ? void 0 : t.pathname) == "/" && g.push(o.zO)
                            })
                        } catch (n) {
                            t({ ...e,
                                isLoading: !1
                            })
                        }
                    }
                }, [e.state, e.client, t]), j = (0, l.useCallback)(async () => {
                    if (t({ ...e,
                            isLoading: !0
                        }), "initialized" === e.state) {
                        (0, i.Z)("LOGGIN OUT"), e.client instanceof s.AuthClient ? await e.client.logout() : h.NFID._authClient.isAuthenticated && await h.NFID._authClient.logout();
                        let n = (0, a.jb)();
                        v({
                            name: "",
                            role: "",
                            userPerms: null,
                            rewardPercentage: 0,
                            email: "",
                            balance: 0
                        }), t({ ...e,
                            state: "anonymous",
                            actor: n,
                            isLoading: !1
                        })
                    } else(0, i.Z)(e.client, "cant logout")
                }, [e.state, e.client, t, v]), w = (0, l.useCallback)(e => e.hasOwnProperty("admin") ? {
                    admin: !0
                } : {
                    admin: !1
                }, []), b = (0, l.useCallback)(async () => {
                    let t = await (0, d.sb)(e.identity);
                    return v({ ...n,
                        balance: t
                    }), t
                }, [t, v, n]), N = (0, l.useCallback)(async (n, s) => {
                    try {
                        if (!n && !s) return (0, i.Z)("Unexpected error while authenticating");
                        let A = n ? n.getIdentity() : s,
                            y = await (0, c.x_)({
                                identity: A,
                                host: "https:icp0.io"
                            });
                        if (!A) return (0, i.Z)("Unexpected error while authenticating");
                        let I = (0, a.jb)({
                                agentOptions: {
                                    identity: A
                                }
                            }),
                            C = await I.getUser([]),
                            Z = await I.getRewardPercentage(),
                            k = (0, c.ij)(C),
                            E = await (0, d.sb)(A);
                        if (k) {
                            let e = w(null == k ? void 0 : k.role);
                            v({
                                name: null == k ? void 0 : k.name,
                                role: null == k ? void 0 : k.role,
                                email: null == k ? void 0 : k.email,
                                userPerms: e,
                                rewardPercentage: Z ? Number(Z) : 0,
                                balance: E
                            })
                        } else {
                            let e = {
                                name: (0, r.Dj)(),
                                email: ""
                            };
                            var l, o, h, u, m, x, g, p, f, j, b, N = new URL(null === (o = window) || void 0 === o ? void 0 : null === (l = o.location) || void 0 === l ? void 0 : l.href).searchParams.get("refferalId");
                            (0, i.Z)(N, "fasdfadsftempRefferal");
                            let t = await I.addUser(e, N ? [N] : []);
                            if (null == t ? void 0 : t.ok) {
                                t.ok[1] = (0, c.ij)(null == t ? void 0 : null === (h = t.ok) || void 0 === h ? void 0 : h[1]);
                                let e = w(null == t ? void 0 : null === (m = t.ok) || void 0 === m ? void 0 : null === (u = m[1]) || void 0 === u ? void 0 : u.role),
                                    n = await I.getRewardPercentage();
                                v({
                                    name: null == t ? void 0 : null === (g = t.ok) || void 0 === g ? void 0 : null === (x = g[1]) || void 0 === x ? void 0 : x.name,
                                    role: null == t ? void 0 : null === (f = t.ok) || void 0 === f ? void 0 : null === (p = f[1]) || void 0 === p ? void 0 : p.role,
                                    email: null == t ? void 0 : null === (b = t.ok) || void 0 === b ? void 0 : null === (j = b[1]) || void 0 === j ? void 0 : j.email,
                                    userPerms: e,
                                    rewardPercentage: n ? Number(n) : 0,
                                    balance: E
                                })
                            }(0, i.Z)(t, "created user")
                        }
                        return t({ ...e,
                            state: "initialized",
                            actor: I,
                            client: null != n ? n : e.client,
                            isLoading: !1,
                            identity: A,
                            agent: y
                        }), I
                    } catch (n) {
                        throw t({ ...e,
                            state: "error"
                        }), v({
                            name: "",
                            role: "",
                            userPerms: null,
                            rewardPercentage: 0,
                            email: "",
                            balance: 0
                        }), (0, i.Z)(n, "Error while authenticating"), Error("encountered an error while authenticating")
                    }
                }, [w, t, v, e]);
                return {
                    auth: e,
                    userAuth: n,
                    initAuth: p,
                    login: f,
                    logout: j,
                    authenticate: N,
                    updateBalance: b
                }
            }
        },
        43705: function(e, t) {
            t.Z = {
                src: "/_next/static/media/calender.f08318c1.png",
                height: 30,
                width: 30,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnUlEQVR42i3MuwrCQBCF4UOewC5FKkXwUiZg0EbLFEIKdxERi0XERoJIXsGntbNwY+fPxOKbmZxDVnrXiaLbolHn1n83y177RBxHgoAWpYl2B/ZJjCdqHPRxG8ON2jpGixwLrLBEicI6RtDXpRZ0fsqe8DylT63j48IxwEhxl7EzsmGf0TEajFFgRjlH3v9Ax7MVwR1nXA035UPRVz/lTmR4ckDGXQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        }
    }
]);