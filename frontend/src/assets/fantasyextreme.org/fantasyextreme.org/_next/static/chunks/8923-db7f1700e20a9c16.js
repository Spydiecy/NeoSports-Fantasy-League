"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8923], {
        80808: function(e, t, a) {
            var n = a(57437),
                l = a(2265),
                s = a(75539);
            t.Z = e => {
                let t, {
                        itemsPerPage: a,
                        count: r,
                        offset: i,
                        pageChange: c,
                        status: o,
                        first: d
                    } = e,
                    [u, h] = (0, l.useState)(i + 1),
                    p = Math.ceil(r / a),
                    m = e => {
                        h(e), c(e - 1)
                    };
                return (0, l.useEffect)(() => {
                    h(i + 1)
                }, [i]), (0, n.jsx)("div", {
                    children: (0, n.jsx)(s.Z, {
                        children: ((t = []).push((0, n.jsx)(s.Z.First, {
                            onClick: () => m(1),
                            disabled: 1 === u,
                            children: "‹‹"
                        }, "first")), d && t.push((0, n.jsx)(s.Z.First, {
                            onClick: () => m(1),
                            disabled: 1 === u,
                            children: "‹‹"
                        }, "first-conditional")), d || t.push((0, n.jsx)(s.Z.First, {
                            onClick: () => m(u - 1),
                            disabled: 1 === u,
                            children: "‹"
                        }, "first-previous")), t.push((0, n.jsx)(s.Z.Item, {
                            active: !0,
                            children: u
                        }, u)), u < p && t.push((0, n.jsx)(s.Z.Item, {
                            onClick: () => m(u + 1),
                            children: u + 1
                        }, u + 1)), u < p - 2 && t.push((0, n.jsx)(s.Z.Item, {
                            disabled: !0,
                            children: "…"
                        }, "end-ellipsis")), u < p - 1 && t.push((0, n.jsx)(s.Z.Item, {
                            onClick: () => m(p),
                            children: p
                        }, p)), t.push((0, n.jsx)(s.Z.Next, {
                            onClick: () => m(u + 1),
                            disabled: u === p,
                            children: "›"
                        }, "next")), t)
                    })
                })
            }
        },
        59649: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = a(57437);
            a(2265);
            var l = a(21896),
                s = a(12514),
                r = e => {
                    let {
                        minHeight: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: "d-flex align-items-center justify-content-center ",
                        style: t ? {
                            minHeight: t
                        } : {},
                        children: (0, n.jsx)(s.default, {})
                    })
                },
                i = a(92618),
                c = a(80808);

            function o(e) {
                let {
                    rewardsMap: t,
                    handleSearch: a,
                    loading: s,
                    pageClicked: o,
                    offset: d,
                    pageCount: u,
                    limit: h,
                    isContestInfoModle: p
                } = e;
                return (0, n.jsx)("div", {
                    className: "rank-rewards ".concat(p && "scrollbar"),
                    children: (0, n.jsxs)(l.Z.Group, {
                        children: [(0, n.jsx)(l.Z.Control, {
                            type: "number",
                            placeholder: "Search Rank",
                            onChange: a,
                            className: "RankSearchInput"
                        }), (0, n.jsx)("ul", {
                            className: "rank-list",
                            children: s ? (0, n.jsx)(r, {
                                minHeight: 260
                            }) : (null == t ? void 0 : t.length) == 0 ? (0, n.jsx)("p", {
                                className: "my-2 text-center",
                                children: "Rank Not Found"
                            }) : null == t ? void 0 : t.map(e => {
                                let [t, a] = e;
                                return (0, n.jsxs)("li", {
                                    children: [(0, n.jsxs)("span", {
                                        className: "rank",
                                        children: ["Rank ", Number(t)]
                                    }), (0, n.jsxs)("span", {
                                        className: "amount",
                                        children: [(0, i.np)(a, !0), " ICP"]
                                    })]
                                }, Number(t))
                            })
                        }), (0, n.jsx)(c.Z, {
                            itemsPerPage: h,
                            count: u,
                            offset: d,
                            pageChange: o,
                            first: !1
                        })]
                    })
                })
            }
        },
        60804: function(e, t, a) {
            var n = a(57437),
                l = a(2265),
                s = a(58136),
                r = a(72824),
                i = a(21896),
                c = a(61507),
                o = a(18473),
                d = a(90483),
                u = a(64486),
                h = a(92618),
                p = a(22170),
                m = a.n(p),
                x = a(52555),
                v = a(90023),
                j = a(59649);
            t.Z = function(e) {
                let {
                    show: t,
                    handleClose: a,
                    defaultContest: p
                } = e, [f, g] = (0, l.useState)(!1), [y, b] = (0, l.useState)(""), [N, P] = (0, l.useState)(null), [Z, w] = (0, l.useState)(null), [F, C] = (0, l.useState)(0), [k, S] = (0, l.useState)(0), [z, I] = (0, l.useState)(0), [E, L] = (0, l.useState)(null), [R, G] = (0, l.useState)({
                    totalParticipants: u.eF,
                    entryFee: (0, h.np)(null == E ? void 0 : E.entryFee),
                    prizePool: 0,
                    prizePoolInUSD: "0"
                }), A = {
                    status: "0",
                    search: "",
                    page: 0,
                    limit: 10
                }, {
                    auth: _,
                    userAuth: D
                } = (0, c.tN)(e => ({
                    auth: e.auth,
                    userAuth: e.userAuth
                })), U = e => (e * k).toFixed(2), H = (0, l.useCallback)((e, t) => {
                    var a, n;
                    I(null !== (a = null == e ? void 0 : e.page) && void 0 !== a ? a : 0);
                    let l = null !== (n = null == e ? void 0 : e.search) && void 0 !== n ? n : "",
                        s = null != e ? e : A;
                    b(l), (0, d.ow)({
                        actor: _.actor,
                        props: { ...s,
                            search: l
                        },
                        entryFee: t ? t.entryFee : Number(R.entryFee),
                        slotsUsed: t ? Number(t.totalParticipants) : Number(R.totalParticipants),
                        set: w,
                        setPageCount: C,
                        setLoading: g
                    })
                }, [_.actor, R]);
                async function M(e) {
                    var t;
                    let a = null == N ? void 0 : N.find(t => t.id == e);
                    L(null != a ? a : null);
                    let n = (0, h.np)(null !== (t = null == a ? void 0 : a.entryFee) && void 0 !== t ? t : 0),
                        l = (0, d.Ld)(n, D.rewardPercentage, R.totalParticipants),
                        s = U(l);
                    H(void 0, {
                        entryFee: n,
                        totalParticipants: R.totalParticipants
                    }), G(e => ({ ...e,
                        entryFee: n,
                        prizePool: l,
                        prizePoolInUSD: s
                    }))
                }
                let T = m()(async e => {
                    try {
                        let t = R.prizePool;
                        "entryFee" == e.target.name ? (H(void 0, {
                            entryFee: e.target.value,
                            totalParticipants: R.totalParticipants
                        }), t = (0, d.Ld)(e.target.value, D.rewardPercentage, R.totalParticipants)) : "totalParticipants" == e.target.name && (H(void 0, {
                            entryFee: R.entryFee,
                            totalParticipants: e.target.value
                        }), t = (0, d.Ld)(R.entryFee, D.rewardPercentage, e.target.value));
                        let a = U(t);
                        G(n => ({ ...n,
                            prizePoolInUSD: a,
                            [e.target.name]: [e.target.value],
                            prizePool: t
                        }))
                    } catch (e) {
                        (0, o.Z)(e, "change calculation error")
                    }
                }, 1e3);
                async function Y(e) {
                    var t, a, n, l;
                    let s = null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : u.IG,
                        r = null !== (a = null == p ? void 0 : p.participants) && void 0 !== a ? a : u.eF,
                        i = null !== (n = e.find(e => e.name == s)) && void 0 !== n ? n : null;
                    if (!i) return;
                    L(i);
                    let c = (0, h.np)(null !== (l = null == i ? void 0 : i.entryFee) && void 0 !== l ? l : 0);
                    H(void 0, {
                        entryFee: c,
                        totalParticipants: r
                    });
                    let o = (0, d.Ld)(c, D.rewardPercentage, r),
                        m = U(o);
                    G(e => ({ ...e,
                        totalParticipants: r,
                        entryFee: c,
                        prizePool: o,
                        prizePoolInUSD: m
                    }))
                }
                let q = (0, l.useCallback)(m()(e => {
                        I(0), e.trim() ? H({ ...A,
                            search: e.trim(),
                            page: 0
                        }) : H({ ...A,
                            page: 0
                        })
                    }, 1e3), [H]),
                    B = (0, l.useCallback)(e => {
                        let t = e.target.value;
                        b(t), q(t)
                    }, [q]);
                return (0, l.useEffect)(() => {
                    N && Y(N)
                }, [N]), (0, l.useEffect)(() => {
                    _.actor && ((0, d.Wn)({
                        actor: _.actor,
                        set: P,
                        all: !1
                    }), H())
                }, [_]), (0, l.useEffect)(() => {
                    (async () => {
                        S(await (0, d.sq)())
                    })()
                }, []), (0, n.jsx)(s.Z, {
                    className: "max-h-modal",
                    centered: !0,
                    show: t,
                    onHide: a,
                    onClose: a,
                    children: (0, n.jsx)(s.Z.Body, {
                        children: (0, n.jsxs)(r.Z, {
                            children: [(0, n.jsxs)("h5", {
                                className: "Nasalization",
                                children: ["Rewards ", (0, n.jsx)("span", {
                                    children: "Calculator"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "mt-4",
                                children: [(0, n.jsxs)(i.Z.Group, {
                                    className: "my-2 mt-4",
                                    children: [(0, n.jsx)("div", {
                                        className: "d-flex justify-content-between w-100",
                                        children: (0, n.jsx)(i.Z.Label, {
                                            children: "Total Participants"
                                        })
                                    }), (0, n.jsx)(i.Z.Control, {
                                        type: "number",
                                        placeholder: "Total Participants",
                                        name: "totalParticipants",
                                        value: R.totalParticipants,
                                        max: 1e6,
                                        min: 1,
                                        onChange: function(e) {
                                            return e.target.value > x.pu ? v.Am.warning("You can't check rewards for more than " + x.pu + " participants") : e.target.value < 1 ? v.Am.warning("You can't check rewards for less than 1 participants") : void(e.persist(), G(t => ({ ...t,
                                                [e.target.name]: [e.target.value]
                                            })), T(e))
                                        }
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "d-flex justify-content-between align-items-center",
                                    children: [(0, n.jsxs)(i.Z.Group, {
                                        className: "my-2 mt-4",
                                        style: {
                                            flexGrow: 1
                                        },
                                        children: [(0, n.jsx)("div", {
                                            className: "d-flex justify-content-between grow w-100",
                                            children: (0, n.jsx)(i.Z.Label, {
                                                children: "Select Contest"
                                            })
                                        }), (0, n.jsx)(i.Z.Select, {
                                            className: "button-select small disabled-field",
                                            "aria-label": "Default select example",
                                            disabled: p && (null == p ? void 0 : p.entryFee) > 0,
                                            onChange: e => {
                                                M(e.target.value)
                                            },
                                            children: null == N ? void 0 : N.map(e => (0, n.jsx)("option", {
                                                value: e.id,
                                                selected: (null == E ? void 0 : E.id) == e.id,
                                                children: e.name
                                            }, e.id))
                                        })]
                                    }), (0, n.jsxs)(i.Z.Group, {
                                        className: "my-2 mt-4",
                                        children: [(0, n.jsx)("div", {
                                            className: "d-flex justify-content-between w-100",
                                            children: (0, n.jsx)(i.Z.Label, {
                                                children: "Entry Fee"
                                            })
                                        }), (0, n.jsx)(i.Z.Control, {
                                            type: "text",
                                            disabled: !0,
                                            placeholder: "Entry Fee",
                                            className: "disabled-field",
                                            name: "entryFee",
                                            value: R.entryFee,
                                            onChange: T
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "divider"
                                }), (0, n.jsxs)("div", {
                                    className: "pool-container ",
                                    children: [(0, n.jsx)("h6", {
                                        children: "Pool Amount"
                                    }), (0, n.jsxs)("div", {
                                        className: "amount-div",
                                        children: [(0, n.jsx)("img", {
                                            src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/infinte.png",
                                            alt: "Infinte Logo"
                                        }), (0, n.jsxs)("h5", {
                                            children: [R.prizePool, " = $", R.prizePoolInUSD]
                                        })]
                                    })]
                                })]
                            }), (0, n.jsxs)("h5", {
                                className: "Nasalization mt-3",
                                children: ["Rewards ", (0, n.jsx)("span", {
                                    children: "by Rank"
                                })]
                            }), (0, n.jsx)(j.Z, {
                                handleSearch: B,
                                rewardsMap: Z,
                                loading: f,
                                pageClicked: function(e) {
                                    I(e), H({ ...A,
                                        page: e
                                    })
                                },
                                offset: z,
                                pageCount: F,
                                limit: A.limit
                            })]
                        })
                    })
                })
            }
        },
        1724: function(e, t, a) {
            var n = a(16463),
                l = a(2265);
            t.Z = function() {
                let [e, t] = (0, l.useState)(""), a = (0, n.useParams)();
                return (0, l.useEffect)(() => {
                    t(window.location.search)
                }, [a]), e
            }
        }
    }
]);