(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7231], {
        27801: function(s, e, n) {
            Promise.resolve().then(n.bind(n, 95018))
        },
        9772: function(s, e) {
            var n;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var l = {}.hasOwnProperty;

                function i() {
                    for (var s = [], e = 0; e < arguments.length; e++) {
                        var n = arguments[e];
                        if (n) {
                            var c = typeof n;
                            if ("string" === c || "number" === c) s.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var r = i.apply(null, n);
                                    r && s.push(r)
                                }
                            } else if ("object" === c) {
                                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                    s.push(n.toString());
                                    continue
                                }
                                for (var a in n) l.call(n, a) && n[a] && s.push(a)
                            }
                        }
                    }
                    return s.join(" ")
                }
                s.exports ? (i.default = i, s.exports = i) : void 0 !== (n = (function() {
                    return i
                }).apply(e, [])) && (s.exports = n)
            }()
        },
        6712: function(s, e, n) {
            "use strict";
            var l = n(9772),
                i = n.n(l),
                c = n(2265),
                r = n(72574),
                a = n(57437);
            let h = c.forwardRef((s, e) => {
                let [{
                    className: n,
                    ...l
                }, {
                    as: c = "div",
                    bsPrefix: h,
                    spans: t
                }] = function(s) {
                    let {
                        as: e,
                        bsPrefix: n,
                        className: l,
                        ...c
                    } = s;
                    n = (0, r.vE)(n, "col");
                    let a = (0, r.pi)(),
                        h = (0, r.zG)(),
                        t = [],
                        d = [];
                    return a.forEach(s => {
                        let e, l, i;
                        let r = c[s];
                        delete c[s], "object" == typeof r && null != r ? {
                            span: e,
                            offset: l,
                            order: i
                        } = r : e = r;
                        let a = s !== h ? "-".concat(s) : "";
                        e && t.push(!0 === e ? "".concat(n).concat(a) : "".concat(n).concat(a, "-").concat(e)), null != i && d.push("order".concat(a, "-").concat(i)), null != l && d.push("offset".concat(a, "-").concat(l))
                    }), [{ ...c,
                        className: i()(l, ...t, ...d)
                    }, {
                        as: e,
                        bsPrefix: n,
                        spans: t
                    }]
                }(s);
                return (0, a.jsx)(c, { ...l,
                    ref: e,
                    className: i()(n, !t.length && h)
                })
            });
            h.displayName = "Col", e.Z = h
        },
        72824: function(s, e, n) {
            "use strict";
            var l = n(9772),
                i = n.n(l),
                c = n(2265),
                r = n(72574),
                a = n(57437);
            let h = c.forwardRef((s, e) => {
                let {
                    bsPrefix: n,
                    fluid: l = !1,
                    as: c = "div",
                    className: h,
                    ...t
                } = s, d = (0, r.vE)(n, "container");
                return (0, a.jsx)(c, {
                    ref: e,
                    ...t,
                    className: i()(h, l ? "".concat(d).concat("string" == typeof l ? "-".concat(l) : "-fluid") : d)
                })
            });
            h.displayName = "Container", e.Z = h
        },
        358: function(s, e, n) {
            "use strict";
            var l = n(9772),
                i = n.n(l),
                c = n(2265),
                r = n(72574),
                a = n(57437);
            let h = c.forwardRef((s, e) => {
                let {
                    bsPrefix: n,
                    className: l,
                    as: c = "div",
                    ...h
                } = s, t = (0, r.vE)(n, "row"), d = (0, r.pi)(), o = (0, r.zG)(), x = "".concat(t, "-cols"), j = [];
                return d.forEach(s => {
                    let e;
                    let n = h[s];
                    delete h[s], null != n && "object" == typeof n ? {
                        cols: e
                    } = n : e = n, null != e && j.push("".concat(x).concat(s !== o ? "-".concat(s) : "", "-").concat(e))
                }), (0, a.jsx)(c, {
                    ref: e,
                    ...h,
                    className: i()(l, t, ...j)
                })
            });
            h.displayName = "Row", e.Z = h
        },
        72574: function(s, e, n) {
            "use strict";
            n.d(e, {
                SC: function() {
                    return d
                },
                pi: function() {
                    return h
                },
                vE: function() {
                    return a
                },
                zG: function() {
                    return t
                }
            });
            var l = n(2265);
            n(57437);
            let i = l.createContext({
                    prefixes: {},
                    breakpoints: ["xxl", "xl", "lg", "md", "sm", "xs"],
                    minBreakpoint: "xs"
                }),
                {
                    Consumer: c,
                    Provider: r
                } = i;

            function a(s, e) {
                let {
                    prefixes: n
                } = (0, l.useContext)(i);
                return s || n[e] || e
            }

            function h() {
                let {
                    breakpoints: s
                } = (0, l.useContext)(i);
                return s
            }

            function t() {
                let {
                    minBreakpoint: s
                } = (0, l.useContext)(i);
                return s
            }

            function d() {
                let {
                    dir: s
                } = (0, l.useContext)(i);
                return "rtl" === s
            }
        },
        95018: function(s, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var l = n(57437);
            n(2265);
            var i = n(72824),
                c = n(358),
                r = n(6712);

            function a() {
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(i.Z, {
                        fluid: !0,
                        className: "inner-page",
                        children: (0, l.jsx)(c.Z, {
                            children: (0, l.jsx)(i.Z, {
                                children: (0, l.jsxs)(c.Z, {
                                    children: [(0, l.jsxs)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        children: [(0, l.jsx)("h2", {
                                            className: "animedown",
                                            children: (0, l.jsx)("span", {
                                                children: "Fantasy Extreme Gameplay Rules"
                                            })
                                        }), (0, l.jsx)("h5", {
                                            className: "whitecolor animedown",
                                            children: "We are providing a comprehensive guide on how you can become a manager and enter the contests on Fantasy Extreme. Please refer to the below guidelines."
                                        }), (0, l.jsxs)("p", {
                                            className: "whitecolor animedown",
                                            children: [(0, l.jsx)("span", {
                                                className: "color",
                                                children: "1."
                                            }), " Select a match from upcoming matches."]
                                        }), (0, l.jsxs)("p", {
                                            className: "whitecolor animedown",
                                            children: [(0, l.jsx)("span", {
                                                className: "color",
                                                children: "2."
                                            }), " Create your virtual team.(Multiple users can create multiple teams for each single match)"]
                                        }), (0, l.jsxs)("p", {
                                            className: "whitecolor animedown",
                                            children: [(0, l.jsx)("span", {
                                                className: "color",
                                                children: "3."
                                            }), " Select 3 forwards, 5 midfielders, 5 defenders, and 2 goalkeepers, in order to complete your team selection."]
                                        }), (0, l.jsxs)("p", {
                                            className: "whitecolor animedown",
                                            children: [(0, l.jsx)("span", {
                                                className: "color",
                                                children: "4."
                                            }), " Join the contest. (Maximum 3 teams from a single player can join one contest)"]
                                        }), (0, l.jsxs)("p", {
                                            className: "whitecolor animedown",
                                            children: [(0, l.jsx)("span", {
                                                className: "color",
                                                children: "5."
                                            }), " Access live standing during the match to track your team performances."]
                                        }), (0, l.jsxs)("p", {
                                            className: "whitecolor animedown",
                                            children: [(0, l.jsx)("span", {
                                                className: "color",
                                                children: "6."
                                            }), " Get instant updates on your team’s victory as the contest concludes."]
                                        }), (0, l.jsxs)("p", {
                                            className: "whitecolor animedown",
                                            children: [(0, l.jsx)("span", {
                                                className: "color",
                                                children: "7."
                                            }), " Earn instant rewards right after each match your team wins."]
                                        }), (0, l.jsx)("h5", {
                                            className: "whitecolor animedown",
                                            children: "Follow these steps to enhance your Fantasy Extreme experience and lead your team to victory!"
                                        }), (0, l.jsx)("div", {
                                            className: "spacer-50"
                                        })]
                                    }), (0, l.jsx)(r.Z, {
                                        xl: "12",
                                        lg: "12",
                                        md: "12",
                                        children: (0, l.jsxs)("div", {
                                            className: "gray-panel",
                                            children: [(0, l.jsx)("h4", {
                                                className: "animedown Nasalization",
                                                children: (0, l.jsx)("span", {
                                                    children: "Shots"
                                                })
                                            }), (0, l.jsxs)("ul", {
                                                className: "points-list animedown",
                                                children: [(0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "total shots"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "1"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "shots on goal"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "2"
                                                    })]
                                                })]
                                            }), (0, l.jsx)("h4", {
                                                className: "animedown Nasalization",
                                                children: (0, l.jsx)("span", {
                                                    children: "Goals"
                                                })
                                            }), (0, l.jsxs)("ul", {
                                                className: "points-list animedown",
                                                children: [(0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "goals scored"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "10"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "goals assists"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "6"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "goals conceded"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "-2"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "goals owngoals"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "-3"
                                                    })]
                                                })]
                                            }), (0, l.jsx)("h4", {
                                                className: "animedown Nasalization",
                                                children: (0, l.jsx)("span", {
                                                    children: "Fouls "
                                                })
                                            }), (0, l.jsxs)("ul", {
                                                className: "points-list animedown",
                                                children: [(0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "fouls drawn"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "2"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "fouls committed"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "-2"
                                                    })]
                                                })]
                                            }), (0, l.jsx)("h4", {
                                                className: "animedown Nasalization",
                                                children: (0, l.jsx)("span", {
                                                    children: "Cards"
                                                })
                                            }), (0, l.jsxs)("ul", {
                                                className: "points-list animedown",
                                                children: [(0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "cards yellowcards"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "-3"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "cards redcards"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "-5"
                                                    })]
                                                })]
                                            }), (0, l.jsx)("h4", {
                                                className: "animedown Nasalization",
                                                children: (0, l.jsx)("span", {
                                                    children: "Passing"
                                                })
                                            }), (0, l.jsxs)("ul", {
                                                className: "points-list animedown",
                                                children: [(0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "passing total crosses"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "2"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "passing crosses accuracy"
                                                    }), (0, l.jsx)("h6", {
                                                        children: " 2 for > 50% < 70% 4 for > 70%"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "passing passes"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "1"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "passing accurate passes"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "2"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "passing passes accuracy"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3 for > 50% < 70 % 6 for > 70%"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "passing key passes"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3"
                                                    })]
                                                })]
                                            }), (0, l.jsx)("h4", {
                                                className: "animedown Nasalization",
                                                children: (0, l.jsx)("span", {
                                                    children: "Dribbles"
                                                })
                                            }), (0, l.jsxs)("ul", {
                                                className: "points-list animedown",
                                                children: [(0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "dribbles attempts"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "1 for 1 attempt"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "dribbles success"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "5"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "dribbles dribbled past"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3"
                                                    })]
                                                })]
                                            }), (0, l.jsx)("h4", {
                                                className: "animedown Nasalization",
                                                children: (0, l.jsx)("span", {
                                                    children: "Duels"
                                                })
                                            }), (0, l.jsx)("ul", {
                                                className: "points-list animedown",
                                                children: (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "duels won"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "2"
                                                    })]
                                                })
                                            }), (0, l.jsx)("h4", {
                                                className: "animedown Nasalization",
                                                children: (0, l.jsx)("span", {
                                                    children: "Other"
                                                })
                                            }), (0, l.jsxs)("ul", {
                                                className: "points-list animedown m-0",
                                                children: [(0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "aerials won"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "offsides"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "-1"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "saves"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "2"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "inside box saves"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "pen scored"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "7"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "pen missed"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "-5"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "pen saved"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "7"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "pen won"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "hit woodwork"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "tackles"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "blocks"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "5"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "interceptions"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "3"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "clearances"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "1 for 1"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "dispossesed"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "-3"
                                                    })]
                                                }), (0, l.jsxs)("li", {
                                                    children: [(0, l.jsx)("h6", {
                                                        children: "minutes played"
                                                    }), (0, l.jsx)("h6", {
                                                        children: "< 60 1 > = 60 2"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        }
    },
    function(s) {
        s.O(0, [2971, 7023, 1744], function() {
            return s(s.s = 27801)
        }), _N_E = s.O()
    }
]);