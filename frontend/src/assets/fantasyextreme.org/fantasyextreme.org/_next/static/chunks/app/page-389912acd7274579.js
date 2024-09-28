(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        85320: function(e, s, l) {
            Promise.resolve().then(l.bind(l, 90379))
        },
        90379: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return R
                }
            });
            var i = l(57437),
                a = l(2265),
                n = l(87138),
                t = l(72824),
                c = l(358),
                r = l(6712),
                d = l(54623),
                o = l(16463),
                h = l(61507),
                m = l(66648),
                x = l(90483),
                u = l(64486),
                j = l(51725),
                p = l(73305),
                v = l(21932);

            function g() {
                var e;
                let [s, l] = (0, a.useState)({
                    upcoming: !0,
                    ongoing: !0,
                    finished: !0
                }), [c, r] = (0, a.useState)({
                    upcoming: null,
                    ongoing: null,
                    finished: null
                }), {
                    auth: d
                } = (0, h.tN)(e => ({
                    auth: e.auth
                })), o = {
                    status: u.rN,
                    search: "",
                    page: 0,
                    limit: 8
                };
                async function g(e) {
                    (0, x.h_)(d.actor, r, { ...o,
                        status: e,
                        page: 0
                    }, l, null, [], null, !0)
                }
                return (0, a.useEffect)(() => {
                    d.actor && g(u.TP.upcoming)
                }, [d.actor]), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("div", {
                            className: "upcoming-match-container",
                            children: (0, i.jsxs)("div", {
                                className: "upcoming-match-container-inner",
                                children: [(0, i.jsx)("ul", {
                                    className: "upcoming-matches-list",
                                    children: (0, i.jsx)(v.Z, {
                                        children: null === (e = c.upcoming) || void 0 === e ? void 0 : e.map(e => {
                                            var s, l, a, t, c, r;
                                            return (0, i.jsx)("li", {
                                                children: (0, i.jsxs)(n.default, {
                                                    href: "".concat(p.kB + p.dK, "?matchId=").concat(e.id, "&type=").concat(u.Ng.simple),
                                                    className: "upcoming-match-post",
                                                    children: [(0, i.jsx)("div", {
                                                        children: (0, i.jsxs)("h5", {
                                                            className: "d-flex",
                                                            children: [(0, i.jsx)("span", {
                                                                className: "mt-2 ",
                                                                children: null == e ? void 0 : null === (s = e.homeTeam) || void 0 === s ? void 0 : s.name
                                                            }), (0, i.jsx)("span", {
                                                                className: "mt-2 ",
                                                                children: null == e ? void 0 : null === (l = e.awayTeam) || void 0 === l ? void 0 : l.name
                                                            })]
                                                        })
                                                    }), (0, i.jsxs)("div", {
                                                        className: "d-flex align-items-center justify-content-center mt-3",
                                                        children: [(0, i.jsx)("h5", {
                                                            children: (0, i.jsx)(m.default, {
                                                                src: null == e ? void 0 : null === (t = e.homeTeam.logo) || void 0 === t ? void 0 : null === (a = t.replace("h=40", "h=200")) || void 0 === a ? void 0 : a.replace("h=40", "w=200"),
                                                                width: j.At.width,
                                                                height: j.At.height,
                                                                alt: "Batch"
                                                            })
                                                        }), (0, i.jsx)("h4", {
                                                            children: "VS"
                                                        }), (0, i.jsx)("h5", {
                                                            children: (0, i.jsx)(m.default, {
                                                                src: null == e ? void 0 : null === (r = e.awayTeam.logo) || void 0 === r ? void 0 : null === (c = r.replace("h=40", "h=200")) || void 0 === c ? void 0 : c.replace("h=40", "w=200"),
                                                                width: j.At.width,
                                                                height: j.At.height,
                                                                alt: "Batch"
                                                            })
                                                        })]
                                                    }), (0, i.jsx)("h6", {
                                                        className: "custom_",
                                                        children: null == e ? void 0 : e.location
                                                    }), (0, i.jsxs)("p", {
                                                        children: [null == e ? void 0 : e.date, " ", (0, i.jsx)("br", {}), " ", null == e ? void 0 : e.time]
                                                    })]
                                                })
                                            }, e.id)
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "text-right",
                                    children: (0, i.jsx)(t.Z, {
                                        children: (0, i.jsxs)(n.default, {
                                            href: p.kB,
                                            className: "simple-link",
                                            children: ["View All Upcoming Matches", (0, i.jsx)("i", {
                                                className: "fa fa-arrow-right mx-2"
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                })
            }

            function f(e) {
                let {
                    match: s
                } = e;
                (0, o.useRouter)();
                let {
                    auth: l
                } = (0, h.tN)(e => ({
                    auth: e.auth
                }));
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(t.Z, {
                        fluid: !0,
                        className: "header",
                        children: [(0, i.jsxs)(d.Z, {
                            fade: !0,
                            children: [(0, i.jsx)(d.Z.Item, {
                                children: (0, i.jsx)("div", {
                                    className: "bg-layer"
                                })
                            }), (0, i.jsx)(d.Z.Item, {
                                children: (0, i.jsx)("div", {
                                    className: "bg-layer"
                                })
                            }), (0, i.jsx)(d.Z.Item, {
                                children: (0, i.jsx)("div", {
                                    className: "bg-layer"
                                })
                            })]
                        }), (0, i.jsx)(g, {})]
                    })
                })
            }
            l(9051), l(55291);
            var N = l(96953),
                b = l(36761),
                w = l(92618),
                y = l(69424);

            function C() {
                let {
                    auth: e
                } = (0, h.tN)(e => ({
                    auth: e.auth
                })), [s, l] = (0, a.useState)(null), t = { ...u.g$,
                    arrows: !1,
                    autoPlay: !1,
                    infinite: !1,
                    responsive: {
                        greater: {
                            breakpoint: {
                                max: 3e3,
                                min: 1400
                            },
                            items: 4,
                            partialVisibilityGutter: 40
                        },
                        desktop: {
                            breakpoint: {
                                max: 1400,
                                min: 991
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            slidesToSlide: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 991,
                                min: 464
                            },
                            items: 2,
                            slidesToSlide: 2,
                            partialVisibilityGutter: 30
                        }
                    },
                    slidesToSlide: 2
                }, [c, r] = (0, a.useState)({
                    page: 0,
                    limit: u.LP,
                    search: "",
                    status: ""
                }), [d, o] = (0, a.useState)(0), [m, j] = (0, a.useState)(!0);
                return (0, a.useEffect)(() => {
                    (0, x.FW)(e.actor, c, l, j, o)
                }, [e.state]), (0, i.jsx)(i.Fragment, {
                    children: s && (null == s ? void 0 : s.length) != 0 && (0, i.jsx)(y.default, { ...t,
                        className: "fantasyPlayer",
                        children: s && (null == s ? void 0 : s.length) != 0 && s.map((e, s) => {
                            var l, a;
                            return (0, i.jsx)("div", {
                                className: "slide-padding",
                                children: (0, i.jsx)(n.default, {
                                    className: "player-post",
                                    href: "/fantasyplayer",
                                    children: (0, i.jsxs)("div", {
                                        className: "player-post-inner",
                                        children: [(0, i.jsx)("div", {
                                            className: "img-pnl",
                                            children: (0, i.jsxs)("div", {
                                                className: "infobox",
                                                children: [(0, i.jsx)("h3", {
                                                    className: "text-center py-3",
                                                    children: (0, x.WR)(null == e ? void 0 : e.name, 0, 9)
                                                }), (0, i.jsxs)("div", {
                                                    className: "iconBox",
                                                    children: [(0, i.jsx)(b.Z, {}), (0, i.jsx)("h6", {
                                                        children: " Contest Won"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    children: (0, i.jsx)("h2", {
                                                        className: "text-center fs-70",
                                                        children: (0, N.uf)(null == e ? void 0 : e.contestWon)
                                                    })
                                                })]
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "userInfo",
                                            children: [(0, i.jsx)("h5", {
                                                children: (0, x.WR)(null == e ? void 0 : e.name, 0, 11)
                                            }), (0, i.jsxs)("p", {
                                                children: [null == e ? void 0 : null === (l = e.userId) || void 0 === l ? void 0 : l.slice(0, 10), "...", null == e ? void 0 : null === (a = e.userId) || void 0 === a ? void 0 : a.slice(-9)]
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "txt-pnl",
                                            children: (0, i.jsxs)("div", {
                                                className: "txt-pnl-inner",
                                                children: [(0, i.jsx)("div", {
                                                    className: "spacer-80"
                                                }), (0, i.jsxs)("h6", {
                                                    children: [(0, i.jsxs)("b", {
                                                        children: [(0, i.jsx)("img", {
                                                            src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/icon-users.png",
                                                            alt: "users icon"
                                                        }), " ", "Participated:"]
                                                    }), " ", (0, i.jsx)("span", {
                                                        children: (0, N.uf)(null == e ? void 0 : e.participated)
                                                    })]
                                                }), (0, i.jsxs)("h6", {
                                                    children: [(0, i.jsxs)("b", {
                                                        children: [(0, i.jsx)("img", {
                                                            src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/icon-trophy-small.png",
                                                            alt: "icon trophy"
                                                        }), " ", "Contest Won:"]
                                                    }), (0, i.jsx)("span", {
                                                        children: (0, N.uf)(null == e ? void 0 : e.contestWon)
                                                    })]
                                                }), (0, i.jsxs)("h6", {
                                                    children: [(0, i.jsxs)("b", {
                                                        children: [(0, i.jsx)("img", {
                                                            src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/icon-gift.png",
                                                            alt: "icon Gift"
                                                        }), " ", "Rewards Won:"]
                                                    }), (0, i.jsxs)("span", {
                                                        children: [(0, w.np)(null == e ? void 0 : e.rewardsWon, !0), " ICP"]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }, s)
                        })
                    })
                })
            }

            function k() {
                var e, s;
                let [l, t] = (0, a.useState)({
                    upcoming: !0,
                    ongoing: !0,
                    finished: !0
                }), [c, r] = (0, a.useState)({
                    upcoming: null,
                    ongoing: null,
                    finished: null
                }), {
                    auth: d,
                    userAuth: o
                } = (0, h.tN)(e => ({
                    auth: e.auth,
                    userAuth: e.userAuth
                })), v = {
                    status: u.rN,
                    search: "",
                    page: 0,
                    limit: 3
                };
                async function g(e) {
                    (0, x.h_)(d.actor, r, { ...v,
                        status: e,
                        page: 0,
                        limit: 3
                    }, t, null, [], null, !0)
                }(0, a.useEffect)(() => {
                    d.actor && g(u.TP.finished)
                }, [d.actor]);
                let f = { ...u.g$,
                    arrows: !1,
                    responsive: {
                        desktop: {
                            breakpoint: {
                                max: 3e3,
                                min: 1200
                            },
                            items: 3,
                            slidesToSlide: 3,
                            partialVisibilityGutter: 40
                        },
                        tablet: {
                            breakpoint: {
                                max: 1200,
                                min: 991
                            },
                            items: 2,
                            slidesToSlide: 2,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 991,
                                min: 0
                            },
                            items: 1,
                            slidesToSlide: 1,
                            partialVisibilityGutter: 40
                        }
                    },
                    slidesToSlide: 1
                };
                return (0, i.jsx)(i.Fragment, {
                    children: (null == c ? void 0 : c.finished) && (null == c ? void 0 : null === (e = c.finished) || void 0 === e ? void 0 : e.length) != 0 && (0, i.jsx)(y.default, { ...f,
                        className: "latest-result-panel",
                        children: null == c ? void 0 : null === (s = c.finished) || void 0 === s ? void 0 : s.map((e, s) => {
                            var l, a, t, c, r, d;
                            return (0, i.jsx)("ul", {
                                className: "latest-result-list",
                                children: (0, i.jsx)("li", {
                                    children: (0, i.jsx)(n.default, {
                                        href: "".concat(p.kB + p.dK, "?matchId=").concat(e.id, "&type=").concat(u.Ng.simple),
                                        children: (0, i.jsxs)("div", {
                                            className: "latest-post",
                                            children: [(0, i.jsx)("h6", {
                                                children: e.date
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex justify-content-around",
                                                children: [(0, i.jsxs)("span", {
                                                    className: "matchTitle",
                                                    children: [null == e ? void 0 : null === (l = e.homeTeam) || void 0 === l ? void 0 : l.name, " "]
                                                }), (0, i.jsxs)("span", {
                                                    className: "matchTitle",
                                                    children: [" ", null == e ? void 0 : null === (a = e.awayTeam) || void 0 === a ? void 0 : a.name]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex-div justify-content-evenly",
                                                children: [(0, i.jsx)("h6", {
                                                    children: (0, i.jsx)("div", {
                                                        className: "mt-2 ",
                                                        children: (0, i.jsx)(m.default, {
                                                            src: null == e ? void 0 : null === (c = e.homeTeam.logo) || void 0 === c ? void 0 : null === (t = c.replace("h=40", "h=200")) || void 0 === t ? void 0 : t.replace("w=40", "w=200"),
                                                            width: j.mO.width,
                                                            height: j.mO.height,
                                                            alt: "Batch"
                                                        })
                                                    })
                                                }), (0, i.jsxs)("span", {
                                                    className: "",
                                                    children: [e.homeScore, "-", e.awayScore]
                                                }), (0, i.jsx)("h6", {
                                                    children: (0, i.jsxs)("div", {
                                                        className: "mt-2",
                                                        children: [(0, i.jsx)(m.default, {
                                                            src: null == e ? void 0 : null === (d = e.awayTeam.logo) || void 0 === d ? void 0 : null === (r = d.replace("h=40", "h=200")) || void 0 === r ? void 0 : r.replace("w=40", "w=200"),
                                                            width: j.mO.width,
                                                            height: j.mO.height,
                                                            alt: "Batch"
                                                        }), " "]
                                                    })
                                                })]
                                            }), (0, i.jsxs)("p", {
                                                children: [(0, i.jsx)("i", {
                                                    className: "fa fa-map-marker"
                                                }), " ", null == e ? void 0 : e.location]
                                            })]
                                        })
                                    })
                                })
                            }, s)
                        })
                    })
                })
            }
            l(1239);
            var Z = l(90821),
                S = () => {
                    (0, a.useRef)(null);
                    let e = { ...u.g$,
                            arrows: !0,
                            responsive: {
                                desktop: {
                                    breakpoint: {
                                        max: 3e3,
                                        min: 0
                                    },
                                    items: 1,
                                    slidesToSlide: 1,
                                    partialVisibilityGutter: 40
                                }
                            },
                            slidesToSlide: 1
                        },
                        [s, l] = (0, a.useState)(!0),
                        [t, c] = (0, a.useState)(null),
                        {
                            auth: r,
                            userAuth: d
                        } = (0, h.tN)(e => ({
                            auth: e.auth,
                            userAuth: e.userAuth
                        })),
                        o = {
                            status: u.rN,
                            search: "",
                            page: 0,
                            limit: 5
                        };
                    async function j(e) {
                        (0, x.p3)(r.actor, c, { ...o,
                            status: e,
                            page: 0,
                            limit: 5
                        }, l, [], null)
                    }
                    return (0, a.useEffect)(() => {
                        r.actor && j(u.TP.finished)
                    }, [r.actor]), (0, i.jsx)(i.Fragment, {
                        children: t && (null == t ? void 0 : t.length) != 0 && (0, i.jsx)(y.default, { ...e,
                            className: "mvpsSlider",
                            children: null == t ? void 0 : t.map((e, s) => {
                                var l, a, t, c, r, d, o, h, u, j, v, g, f, b, w, y, C, k, S, T, E;
                                return (0, i.jsxs)("div", {
                                    className: "winners-mvps pb-3 pb-md-5 ",
                                    children: [(0, i.jsx)("ul", {
                                        className: "",
                                        children: (0, i.jsx)("li", {
                                            children: (0, i.jsxs)(n.default, {
                                                href: "".concat(p.j6, "matchId=").concat(null == e ? void 0 : null === (l = e.match) || void 0 === l ? void 0 : l.id, "&type=0"),
                                                className: "latest-post",
                                                children: [(0, i.jsx)("h6", {
                                                    className: "text-center",
                                                    children: null == e ? void 0 : null === (a = e.match) || void 0 === a ? void 0 : a.date
                                                }), (0, i.jsxs)("div", {
                                                    className: "d-flex justify-content-center gap-5",
                                                    children: [(0, i.jsxs)("span", {
                                                        className: "matchTitle maxw",
                                                        children: [null == e ? void 0 : null === (c = e.match) || void 0 === c ? void 0 : null === (t = c.homeTeam) || void 0 === t ? void 0 : t.name, " "]
                                                    }), (0, i.jsx)("span", {
                                                        className: "matchTitle maxw",
                                                        children: null == e ? void 0 : null === (d = e.match) || void 0 === d ? void 0 : null === (r = d.awayTeam) || void 0 === r ? void 0 : r.name
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "flex-div justify-content-center",
                                                    children: [(0, i.jsx)("h6", {
                                                        children: (0, i.jsx)("div", {
                                                            className: "d-flex justify-content-center mt-3",
                                                            children: (0, i.jsx)("img", {
                                                                src: null == e ? void 0 : null === (h = e.match) || void 0 === h ? void 0 : null === (o = h.homeTeam) || void 0 === o ? void 0 : o.logo,
                                                                alt: "Team"
                                                            })
                                                        })
                                                    }), (0, i.jsxs)("span", {
                                                        className: "mx-5",
                                                        children: [null == e ? void 0 : null === (u = e.match) || void 0 === u ? void 0 : u.homeScore, "-", null == e ? void 0 : null === (j = e.match) || void 0 === j ? void 0 : j.awayScore]
                                                    }), (0, i.jsx)("h6", {
                                                        children: (0, i.jsxs)("div", {
                                                            className: "d-flex justify-content-center mt-3",
                                                            children: [(0, i.jsx)("img", {
                                                                src: null == e ? void 0 : null === (g = e.match) || void 0 === g ? void 0 : null === (v = g.awayTeam) || void 0 === v ? void 0 : v.logo,
                                                                alt: "Team"
                                                            }), " "]
                                                        })
                                                    })]
                                                }), (0, i.jsxs)("p", {
                                                    className: "text-center",
                                                    children: [(0, i.jsx)("i", {
                                                        className: "fa fa-map-marker"
                                                    }), " ", null == e ? void 0 : null === (f = e.match) || void 0 === f ? void 0 : f.location]
                                                })]
                                            })
                                        })
                                    }), (0, i.jsxs)("ul", {
                                        className: "winner-mvp-list",
                                        children: [(0, i.jsx)("li", {
                                            children: (0, i.jsx)("div", {
                                                className: "winner-post winner ",
                                                children: (0, i.jsxs)(n.default, {
                                                    href: "".concat(p.j6, "matchId=").concat(null == e ? void 0 : null === (b = e.match) || void 0 === b ? void 0 : b.id, "&type=0"),
                                                    children: [(0, i.jsxs)("h5", {
                                                        children: ["CONTEST ", (0, i.jsx)("span", {
                                                            children: "WINNER"
                                                        })]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "user-info-post",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "img-pnl",
                                                            children: [(0, i.jsx)("img", {
                                                                src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/cup-1.png",
                                                                alt: "Cup",
                                                                className: "trophy"
                                                            }), (0, i.jsx)("div", {
                                                                className: "userImg",
                                                                children: (0, i.jsx)(m.default, {
                                                                    src: Z.Z,
                                                                    alt: "John Doe",
                                                                    fill: !0
                                                                })
                                                            })]
                                                        }), (0, i.jsxs)("div", {
                                                            className: "txt-pnl",
                                                            children: [(0, i.jsx)("h6", {
                                                                children: (0, x.WR)(null == e ? void 0 : null === (w = e.contestWinner) || void 0 === w ? void 0 : w.name, 0, 30)
                                                            }), (0, i.jsx)("p", {
                                                                children: (0, x.go)(null !== (E = null == e ? void 0 : null === (y = e.contestWinner) || void 0 === y ? void 0 : y.email) && void 0 !== E ? E : "")
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })
                                        }), (0, i.jsx)("li", {
                                            children: (0, i.jsx)("div", {
                                                className: "winner-post mvp ",
                                                children: (0, i.jsxs)(n.default, {
                                                    href: "".concat(p.j6, "matchId=").concat(null == e ? void 0 : null === (C = e.match) || void 0 === C ? void 0 : C.id, "&type=0"),
                                                    children: [(0, i.jsxs)("h5", {
                                                        children: ["Man OF ", (0, i.jsx)("span", {
                                                            children: "MATCH"
                                                        })]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "user-info-post",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "img-pnl",
                                                            children: (0, i.jsx)("img", {
                                                                className: "MVPS_PLAYER_IMG",
                                                                src: null == e ? void 0 : null === (k = e.mvps) || void 0 === k ? void 0 : k.photo,
                                                                alt: "User"
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "txt-pnl",
                                                            children: [(0, i.jsx)("h6", {
                                                                children: (0, x.WR)(null == e ? void 0 : null === (S = e.mvps) || void 0 === S ? void 0 : S.name, 0, 30)
                                                            }), (0, i.jsxs)("p", {
                                                                children: ["Points: ", (0, N.uf)(Number(null == e ? void 0 : null === (T = e.mvps) || void 0 === T ? void 0 : T.number))]
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                }, s)
                            })
                        })
                    })
                },
                T = () => {
                    let [e, s] = (0, a.useState)(!1), l = (0, a.useRef)(null);
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)("div", {
                            className: "video-demo-pnl",
                            children: [(0, i.jsx)("div", {
                                className: "bg-layer",
                                style: {
                                    backgroundImage: "url(https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/LandingPage/Banners/banner-7.png)"
                                }
                            }), !e && (0, i.jsx)("div", {
                                className: "play-span",
                                onClick: () => {
                                    if (s(!0), null == l ? void 0 : l.current) {
                                        var e;
                                        null == l || null === (e = l.current) || void 0 === e || e.play()
                                    }
                                },
                                children: (0, i.jsx)("span", {
                                    children: (0, i.jsx)("i", {
                                        className: "fa fa-play"
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "video-pnl",
                                children: (0, i.jsx)("video", {
                                    ref: l,
                                    src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/LandingPage/Fantasy+Extreme+Demo+Final+Video+(1).mp4",
                                    controls: !0
                                })
                            })]
                        })
                    })
                };

            function E() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: "Billion-pnl",
                        children: [(0, i.jsxs)("div", {
                            className: "marketing-size-pnl",
                            children: [(0, i.jsx)("h4", {
                                children: "Market Size"
                            }), (0, i.jsx)("img", {
                                src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/LandingPage/circle.png",
                                alt: "Circle"
                            }), (0, i.jsx)("h6", {
                                children: "Curt in 2024"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "billion-count-pnl",
                            children: [(0, i.jsxs)("div", {
                                className: "flex-div",
                                children: [(0, i.jsx)("h6", {
                                    children: "$20.69 Billion"
                                }), (0, i.jsx)("h6", {
                                    children: "EST in 2021"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "billion-bar",
                                children: (0, i.jsx)("span", {
                                    style: {
                                        width: "30%"
                                    }
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex-div",
                                children: [(0, i.jsx)("h6", {
                                    children: "$27.20 Billion"
                                }), (0, i.jsx)("h6", {
                                    children: "EST in 2022"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "billion-bar",
                                children: (0, i.jsx)("span", {
                                    style: {
                                        width: "40%"
                                    }
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex-div",
                                children: [(0, i.jsx)("h6", {
                                    children: "$30.95 Billion"
                                }), (0, i.jsx)("h6", {
                                    children: "EST in 2023"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "billion-bar",
                                children: (0, i.jsx)("span", {
                                    style: {
                                        width: "50%"
                                    }
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex-div",
                                children: [(0, i.jsx)("h6", {
                                    children: "$87.07 Billion"
                                }), (0, i.jsx)("h6", {
                                    children: " EXP in 2031"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "billion-bar",
                                children: (0, i.jsx)("span", {
                                    style: {
                                        width: "80%"
                                    }
                                })
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "Billion-participants",
                        children: [(0, i.jsxs)("div", {
                            className: "txt-pnl",
                            children: [(0, i.jsx)("h4", {
                                children: "90 Million"
                            }), (0, i.jsx)("h5", {
                                children: "90 Million"
                            }), (0, i.jsx)("h6", {
                                children: "Participants"
                            })]
                        }), (0, i.jsxs)("ul", {
                            children: [(0, i.jsx)("li", {
                                children: (0, i.jsx)("img", {
                                    src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/LandingPage/Batch/batch-1.png",
                                    alt: "Batch"
                                })
                            }), (0, i.jsx)("li", {
                                children: (0, i.jsx)("img", {
                                    src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/LandingPage/Batch/batch-2.png",
                                    alt: "Batch"
                                })
                            }), (0, i.jsx)("li", {
                                children: (0, i.jsx)("img", {
                                    src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/LandingPage/Batch/batch-3.png",
                                    alt: "Batch"
                                })
                            }), (0, i.jsx)("li", {
                                children: (0, i.jsx)("img", {
                                    src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/LandingPage/Batch/batch-4.png",
                                    alt: "Batch"
                                })
                            })]
                        })]
                    })]
                })
            }
            var A = l(56704),
                B = () => {
                    let e = { ...u.g$,
                        arrows: !0,
                        responsive: {
                            desktop: {
                                breakpoint: {
                                    max: 3e3,
                                    min: 0
                                },
                                items: 1,
                                slidesToSlide: 1,
                                partialVisibilityGutter: 40
                            }
                        },
                        slidesToSlide: 1
                    };
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(y.default, { ...e,
                            children: [(0, i.jsx)("div", {
                                children: (0, i.jsxs)("div", {
                                    className: "how-it-work-post",
                                    children: [(0, i.jsx)("div", {
                                        className: "img-pnl",
                                        children: (0, i.jsx)("img", {
                                            src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/Select-Match.png",
                                            alt: "Select Match"
                                        })
                                    }), (0, i.jsxs)("h5", {
                                        children: ["Select ", (0, i.jsx)("span", {
                                            children: "Match"
                                        })]
                                    }), (0, i.jsx)("p", {
                                        children: "Choose an upcoming match from the available list."
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                children: (0, i.jsxs)("div", {
                                    className: "how-it-work-post",
                                    children: [(0, i.jsx)("div", {
                                        className: "img-pnl",
                                        children: (0, i.jsx)("img", {
                                            src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/Create-Team.png",
                                            alt: "Create Team"
                                        })
                                    }), (0, i.jsxs)("h5", {
                                        children: ["Create ", (0, i.jsx)("span", {
                                            children: "Team"
                                        })]
                                    }), (0, i.jsx)("p", {
                                        children: "Pick 15 players from the players' pool to form your team."
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                children: (0, i.jsxs)("div", {
                                    className: "how-it-work-post",
                                    children: [(0, i.jsx)("div", {
                                        className: "img-pnl",
                                        children: (0, i.jsx)("img", {
                                            src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/Join-Contest.png",
                                            alt: "Join Contest"
                                        })
                                    }), (0, i.jsxs)("h5", {
                                        children: ["Join ", (0, i.jsx)("span", {
                                            children: "Contest"
                                        })]
                                    }), (0, i.jsx)("p", {
                                        children: "Click the 'Join Contest' button to enter the contest."
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                children: (0, i.jsxs)("div", {
                                    className: "how-it-work-post",
                                    children: [(0, i.jsx)("div", {
                                        className: "img-pnl",
                                        children: (0, i.jsx)("img", {
                                            src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/Win-Rewards.png",
                                            alt: "Win Rewards"
                                        })
                                    }), (0, i.jsxs)("h5", {
                                        children: ["Win ", (0, i.jsx)("span", {
                                            children: "Rewards"
                                        })]
                                    }), (0, i.jsx)("p", {
                                        children: "Check 'My Contest' to view the rewards you earn based on the points your team scores."
                                    })]
                                })
                            })]
                        })
                    })
                };

            function R() {
                let {
                    auth: e
                } = (0, h.tN)(e => ({
                    auth: e.auth
                })), [s, l] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = () => {
                        let e = document.getElementById("MatchResult").getBoundingClientRect();
                        e.top < window.innerHeight && e.bottom >= 0 && l(!0)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []);
                let [d, o] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = () => {
                        let e = document.getElementById("howtoplaypnl").getBoundingClientRect();
                        e.top < window.innerHeight && e.bottom >= 0 && o(!0)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []);
                let [m, x] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = () => {
                        let e = document.getElementById("winnermp").getBoundingClientRect();
                        e.top < window.innerHeight && e.bottom >= 0 && x(!0)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                });
                let [j, v] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = () => {
                        let e = document.getElementById("History").getBoundingClientRect();
                        e.top < window.innerHeight && e.bottom >= 0 && v(!0)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                });
                let [g, N] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = () => {
                        let e = document.getElementById("Fantasy").getBoundingClientRect();
                        e.top < window.innerHeight && e.bottom >= 0 && N(!0)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                });
                let [b, w] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let e = () => {
                        let e = document.getElementById("Demo").getBoundingClientRect();
                        e.top < window.innerHeight && e.bottom >= 0 && w(!0)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(f, {}), (0, i.jsx)(t.Z, {
                        fluid: !0,
                        id: "Demo",
                        className: !0 == b ? "animate demo" : "demo",
                        children: (0, i.jsx)(c.Z, {
                            children: (0, i.jsx)(t.Z, {
                                children: (0, i.jsx)(c.Z, {
                                    children: (0, i.jsx)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                        children: (0, i.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, i.jsx)("h2", {
                                                children: "Demo"
                                            }), (0, i.jsx)("p", {
                                                className: "m-0 text-white",
                                                children: "Click to watch the complete demo and experience the thrill of strategic team management in Fantasy Extreme—where every decision counts!"
                                            }), (0, i.jsx)(T, {})]
                                        })
                                    })
                                })
                            })
                        })
                    }), (0, i.jsx)(t.Z, {
                        fluid: !0,
                        id: "howtoplaypnl",
                        className: !0 == d ? "animate how-to-play-pnl" : "how-to-play-pnl",
                        children: (0, i.jsx)(c.Z, {
                            children: (0, i.jsx)(t.Z, {
                                children: (0, i.jsx)(c.Z, {
                                    children: (0, i.jsxs)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                        children: [(0, i.jsx)("div", {
                                            className: "text-center",
                                            children: (0, i.jsxs)("h2", {
                                                children: ["HOW IT ", (0, i.jsx)("span", {
                                                    children: "WORKS"
                                                })]
                                            })
                                        }), (0, i.jsx)(A.Z, {}), (0, i.jsx)("div", {
                                            className: "HowtoPlaySlider",
                                            children: (0, i.jsx)(B, {})
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, i.jsx)(t.Z, {
                        fluid: !0,
                        id: "History",
                        className: !0 == j ? "animate history-panel" : "history-panel",
                        children: (0, i.jsx)(c.Z, {
                            children: (0, i.jsx)(t.Z, {
                                children: (0, i.jsx)(c.Z, {
                                    children: (0, i.jsx)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                        children: (0, i.jsxs)("div", {
                                            className: "text-panel",
                                            children: [(0, i.jsx)("div", {
                                                className: "bg-layer"
                                            }), (0, i.jsx)("h3", {
                                                className: "text-uppercase",
                                                children: "Our History"
                                            }), (0, i.jsxs)("h2", {
                                                children: ["About ", (0, i.jsx)("span", {
                                                    children: "Fantasy"
                                                })]
                                            }), (0, i.jsx)("p", {
                                                children: "Take your love for soccer to the next level with fantasy football. Build your own virtual dream team by drafting real footballers. Their performances on the pitch - goals scored, assists made, clean sheets kept - translate into points for your team. You'll compete against friends or online leagues, strategizing your picks, managing injuries, and watching your team rack up. It's a fun and engaging way to experience the beautiful game, combining the thrill of real-world soccer with the challenge of building and managing your own champion squad."
                                            }), (0, i.jsx)("div", {
                                                className: "mobile-view-center",
                                                children: (0, i.jsx)(n.default, {
                                                    href: p.kB,
                                                    className: "reg-btn mid",
                                                    children: "Play Now"
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    }), (0, i.jsx)(t.Z, {
                        fluid: !0,
                        id: "MatchResult",
                        className: !0 == s ? "animate matches-result-panel" : "matches-result-panel",
                        children: (0, i.jsx)(c.Z, {
                            children: (0, i.jsx)(t.Z, {
                                children: (0, i.jsx)(c.Z, {
                                    children: (0, i.jsxs)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                        children: [(0, i.jsx)("div", {
                                            className: "text-center",
                                            children: (0, i.jsxs)("h2", {
                                                children: ["Latest ", (0, i.jsx)("span", {
                                                    children: "Results"
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "spacer-30"
                                        }), (0, i.jsx)(k, {}), (0, i.jsx)("div", {
                                            className: "spacer-10"
                                        }), (0, i.jsx)("div", {
                                            className: "flex-div justify-content-end",
                                            children: (0, i.jsxs)(n.default, {
                                                href: "".concat(p.kB, "?").concat(u.RH.matchTab, "=2"),
                                                className: "simple-link",
                                                children: ["View All ", (0, i.jsx)("i", {
                                                    className: "fa fa-arrow-right"
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, i.jsxs)(t.Z, {
                        fluid: !0,
                        id: "Fantasy",
                        className: !0 == g ? "animate top-fantasy-panel pb-0" : "top-fantasy-panel pb-0",
                        children: [(0, i.jsx)("div", {
                            className: "bg-layer"
                        }), (0, i.jsx)(c.Z, {
                            children: (0, i.jsx)(t.Z, {
                                children: (0, i.jsxs)(c.Z, {
                                    children: [(0, i.jsx)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex-div",
                                            children: [(0, i.jsxs)("h2", {
                                                children: ["Top Fantasy ", (0, i.jsx)("span", {
                                                    children: "Players"
                                                })]
                                            }), (0, i.jsxs)(n.default, {
                                                className: "simple-link mb-3",
                                                href: "/fantasyplayer",
                                                children: ["View All", " ", (0, i.jsx)("i", {
                                                    className: "fa fa-arrow-right",
                                                    "aria-hidden": "true"
                                                })]
                                            })]
                                        })
                                    }), (0, i.jsx)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                        children: (0, i.jsx)("div", {
                                            className: "spacer-50"
                                        })
                                    }), (0, i.jsx)(C, {})]
                                })
                            })
                        })]
                    }), (0, i.jsx)(t.Z, {
                        fluid: !0,
                        id: "winnermp",
                        className: "".concat(!0 == m ? "animate" : "", " winner-mp winner-mvpscls mb-5"),
                        children: (0, i.jsx)(c.Z, {
                            children: (0, i.jsx)(t.Z, {
                                children: (0, i.jsx)(c.Z, {
                                    children: (0, i.jsxs)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                        children: [(0, i.jsx)("div", {
                                            className: "text-center",
                                            children: (0, i.jsxs)("h2", {
                                                children: ["WINNERS ", (0, i.jsx)("span", {
                                                    children: "& Man of the match"
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "spacer-10"
                                        }), (0, i.jsx)("div", {
                                            className: "mvpsMain",
                                            children: (0, i.jsx)(S, {})
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, i.jsx)(t.Z, {
                        fluid: !0,
                        id: "MarketValue",
                        className: "market-value",
                        children: (0, i.jsx)(c.Z, {
                            children: (0, i.jsx)(t.Z, {
                                children: (0, i.jsx)(c.Z, {
                                    children: (0, i.jsxs)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        sm: "12",
                                        children: [(0, i.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, i.jsxs)("h2", {
                                                children: ["Market ", (0, i.jsx)("span", {
                                                    children: "Value"
                                                })]
                                            }), (0, i.jsx)("p", {
                                                className: "whitecolor",
                                                children: "Fantasy Extreme is poised for continuous growth by attracting millions of passionate players and fans worldwide. See the explosive growth of fantasy sports below"
                                            }), (0, i.jsx)("div", {
                                                className: "spacer-30"
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "text-right",
                                            children: (0, i.jsx)("h2", {
                                                children: "4 Billion People"
                                            })
                                        }), (0, i.jsx)(E, {})]
                                    })
                                })
                            })
                        })
                    })]
                })
            }
        },
        56704: function(e, s, l) {
            "use strict";
            var i = l(57437);
            l(2265), s.Z = () => (0, i.jsxs)("ul", {
                className: "how-it-work-list",
                children: [(0, i.jsx)("li", {
                    children: (0, i.jsxs)("div", {
                        className: "how-it-work-post",
                        children: [(0, i.jsx)("div", {
                            className: "img-pnl",
                            children: (0, i.jsx)("img", {
                                src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/Select-Match.png",
                                alt: "Select Match"
                            })
                        }), (0, i.jsxs)("h5", {
                            children: ["Select ", (0, i.jsx)("span", {
                                children: "Match"
                            })]
                        }), (0, i.jsx)("p", {
                            children: "Choose an upcoming match from the available list."
                        })]
                    })
                }), (0, i.jsx)("li", {
                    children: (0, i.jsxs)("div", {
                        className: "how-it-work-post",
                        children: [(0, i.jsx)("div", {
                            className: "img-pnl",
                            children: (0, i.jsx)("img", {
                                src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/Create-Team.png",
                                alt: "Create Team"
                            })
                        }), (0, i.jsxs)("h5", {
                            children: ["Create ", (0, i.jsx)("span", {
                                children: "Team"
                            })]
                        }), (0, i.jsx)("p", {
                            children: "Pick 15 players from the players' pool to form your team."
                        })]
                    })
                }), (0, i.jsx)("li", {
                    children: (0, i.jsxs)("div", {
                        className: "how-it-work-post",
                        children: [(0, i.jsx)("div", {
                            className: "img-pnl",
                            children: (0, i.jsx)("img", {
                                src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/Join-Contest.png",
                                alt: "Join Contest"
                            })
                        }), (0, i.jsxs)("h5", {
                            children: ["Join ", (0, i.jsx)("span", {
                                children: "Contest"
                            })]
                        }), (0, i.jsx)("p", {
                            children: "Click the 'Join Contest' button to enter the contest."
                        })]
                    })
                }), (0, i.jsx)("li", {
                    children: (0, i.jsxs)("div", {
                        className: "how-it-work-post",
                        children: [(0, i.jsx)("div", {
                            className: "img-pnl",
                            children: (0, i.jsx)("img", {
                                src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/icons/Win-Rewards.png",
                                alt: "Win Rewards"
                            })
                        }), (0, i.jsxs)("h5", {
                            children: ["Win ", (0, i.jsx)("span", {
                                children: "Rewards"
                            })]
                        }), (0, i.jsx)("p", {
                            children: "Check 'My Contest' to view the rewards you earn based on the points your team scores."
                        })]
                    })
                })]
            })
        },
        36761: function(e, s, l) {
            "use strict";
            l.d(s, {
                Z: function() {
                    return a
                }
            });
            var i = l(57437);

            function a() {
                return (0, i.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "43",
                    height: "47",
                    viewBox: "0 0 43 47",
                    fill: "none",
                    children: [(0, i.jsx)("path", {
                        d: "M8.76812 15.5412C10.7924 19.6831 15.4564 23.0907 17.5475 24.4689V28.1605L9.2402 33.1452H29.8175L21.4469 28.1227V24.4689C23.538 23.0903 28.2019 19.6826 30.2262 15.5407C37.1282 14.8149 38.9943 6.46282 38.9943 1.94972C38.9943 1.43262 38.7889 0.936702 38.4233 0.571059C38.0576 0.205416 37.5617 0 37.0446 0L1.94972 0C1.43262 0 0.936702 0.205416 0.571059 0.571059C0.205416 0.936702 0 1.43262 0 1.94972C0 6.46282 1.86612 14.8149 8.76812 15.5412ZM31.1955 11.2577V3.89943H34.9443C34.6487 6.23446 33.774 9.98474 31.1955 11.2577ZM7.79887 3.89943V11.2577C5.22012 9.98474 4.34543 6.23349 4.05005 3.89943H7.79887Z",
                        fill: "#00F754",
                        fillOpacity: "0.7"
                    }), (0, i.jsx)("path", {
                        d: "M41.9202 33.1453C41.1448 33.1444 40.4014 32.8361 39.8532 32.2878C39.3049 31.7395 38.9965 30.9961 38.9956 30.2207C38.9956 29.9622 38.8929 29.7142 38.7101 29.5314C38.5273 29.3486 38.2793 29.2458 38.0208 29.2458C37.7622 29.2458 37.5143 29.3486 37.3314 29.5314C37.1486 29.7142 37.0459 29.9622 37.0459 30.2207C37.0451 30.9961 36.7367 31.7395 36.1884 32.2878C35.6401 32.8361 34.8967 33.1444 34.1213 33.1453C33.8628 33.1453 33.6148 33.248 33.432 33.4308C33.2492 33.6136 33.1465 33.8616 33.1465 34.1201C33.1465 34.3787 33.2492 34.6267 33.432 34.8095C33.6148 34.9923 33.8628 35.095 34.1213 35.095C34.8967 35.0958 35.6401 35.4042 36.1884 35.9525C36.7367 36.5008 37.0451 37.2442 37.0459 38.0196C37.0459 38.2781 37.1486 38.5261 37.3314 38.7089C37.5143 38.8917 37.7622 38.9944 38.0208 38.9944C38.2793 38.9944 38.5273 38.8917 38.7101 38.7089C38.8929 38.5261 38.9956 38.2781 38.9956 38.0196C38.9965 37.2442 39.3049 36.5008 39.8532 35.9525C40.4014 35.4042 41.1448 35.0958 41.9202 35.095C42.1788 35.095 42.4267 34.9923 42.6095 34.8095C42.7924 34.6267 42.8951 34.3787 42.8951 34.1201C42.8951 33.8616 42.7924 33.6136 42.6095 33.4308C42.4267 33.248 42.1788 33.1453 41.9202 33.1453Z",
                        fill: "#00F754",
                        fillOpacity: "0.7"
                    }), (0, i.jsx)("path", {
                        d: "M38.0208 15.3751C37.7622 15.3751 37.5143 15.4778 37.3314 15.6607C37.1486 15.8435 37.0459 16.0914 37.0459 16.35C37.0451 17.1254 36.7367 17.8688 36.1884 18.417C35.6401 18.9653 34.8967 19.2737 34.1213 19.2746C33.8628 19.2746 33.6148 19.3773 33.432 19.5601C33.2492 19.7429 33.1465 19.9909 33.1465 20.2494C33.1465 20.508 33.2492 20.7559 33.432 20.9387C33.6148 21.1216 33.8628 21.2243 34.1213 21.2243C34.8967 21.2251 35.6401 21.5335 36.1884 22.0818C36.7367 22.6301 37.0451 23.3735 37.0459 24.1488C37.0459 24.4074 37.1486 24.6554 37.3314 24.8382C37.5143 25.021 37.7622 25.1237 38.0208 25.1237C38.2793 25.1237 38.5273 25.021 38.7101 24.8382C38.8929 24.6554 38.9956 24.4074 38.9956 24.1488C38.9965 23.3735 39.3049 22.6301 39.8532 22.0818C40.4014 21.5335 41.1448 21.2251 41.9202 21.2243C42.1788 21.2243 42.4267 21.1216 42.6095 20.9387C42.7924 20.7559 42.8951 20.508 42.8951 20.2494C42.8951 19.9909 42.7924 19.7429 42.6095 19.5601C42.4267 19.3773 42.1788 19.2746 41.9202 19.2746C41.1448 19.2737 40.4014 18.9653 39.8532 18.417C39.3049 17.8688 38.9965 17.1254 38.9956 16.35C38.9956 16.0914 38.8929 15.8435 38.7101 15.6607C38.5273 15.4778 38.2793 15.3751 38.0208 15.3751Z",
                        fill: "#00F754",
                        fillOpacity: "0.7"
                    }), (0, i.jsx)("path", {
                        d: "M9.74858 26.3211C9.74858 26.0625 9.64588 25.8146 9.46305 25.6317C9.28023 25.4489 9.03227 25.3462 8.77373 25.3462C7.99834 25.3454 7.25495 25.037 6.70667 24.4887C6.15838 23.9404 5.84999 23.197 5.84915 22.4216C5.84915 22.1631 5.74644 21.9151 5.56362 21.7323C5.3808 21.5495 5.13284 21.4468 4.87429 21.4468C4.61574 21.4468 4.36778 21.5495 4.18496 21.7323C4.00214 21.9151 3.89943 22.1631 3.89943 22.4216C3.8986 23.197 3.5902 23.9404 3.04192 24.4887C2.49364 25.037 1.75025 25.3454 0.974858 25.3462C0.71631 25.3462 0.468351 25.4489 0.28553 25.6317C0.102708 25.8146 0 26.0625 0 26.3211C0 26.5796 0.102708 26.8276 0.28553 27.0104C0.468351 27.1932 0.71631 27.2959 0.974858 27.2959C1.75025 27.2968 2.49364 27.6052 3.04192 28.1534C3.5902 28.7017 3.8986 29.4451 3.89943 30.2205C3.89943 30.4791 4.00214 30.727 4.18496 30.9098C4.36778 31.0927 4.61574 31.1954 4.87429 31.1954C5.13284 31.1954 5.3808 31.0927 5.56362 30.9098C5.74644 30.727 5.84915 30.4791 5.84915 30.2205C5.84999 29.4451 6.15838 28.7017 6.70667 28.1534C7.25495 27.6052 7.99834 27.2968 8.77373 27.2959C9.03227 27.2959 9.28023 27.1932 9.46305 27.0104C9.64588 26.8276 9.74858 26.5796 9.74858 26.3211Z",
                        fill: "#00F754",
                        fillOpacity: "0.7"
                    }), (0, i.jsx)("path", {
                        d: "M7.83008 44.8437C7.83008 45.3608 8.03549 45.8567 8.40114 46.2223C8.76678 46.588 9.2627 46.7934 9.7798 46.7934H29.277C29.7941 46.7934 30.29 46.588 30.6556 46.2223C31.0213 45.8567 31.2267 45.3608 31.2267 44.8437V35.0951H7.83008V44.8437Z",
                        fill: "#00F754",
                        fillOpacity: "0.7"
                    })]
                })
            }
        },
        90821: function(e, s) {
            "use strict";
            s.Z = {
                src: "/_next/static/media/user3.5f561275.png",
                height: 169,
                width: 170,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42iXJv0sCARwF8Ncl7jU29adE0FZIS0NFEW1BEFTS0NAatQSBZVA0VENXoFKkg+aSV3YZJfTDH+CggsfhqRyCen594oMPPN4Do2CQcUqTTmM0+PbWZl0rnknQxaF3UQ62FmRpeuJ4Z3UG5ILUw8r30xkoKtl7cTJ38vnof+j8qaBhGOnIkPlxDUq1f2+lRaZ+lSi+qyAFyVjI7VsHyBM88UrQty1Hy5h6jYZAbiTKAho1rcb8V2C/m7rZbRtGdS5pygjA6IVm4CVnS+THlnzJklzRkjA7N+GnIv5vb16+1Z7PNatyqjUcv1Z3+p1bLJ6xN3poxZWAR1GoVQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        }
    },
    function(e) {
        e.O(0, [8172, 2960, 1866, 6990, 6204, 6902, 6648, 6910, 7100, 8740, 2179, 282, 3928, 2971, 7023, 1744], function() {
            return e(e.s = 85320)
        }), _N_E = e.O()
    }
]);