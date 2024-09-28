"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6412], {
        72290: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var a = n(57437),
                i = n(51725),
                s = n(61507),
                l = n(2265),
                o = n(58136),
                c = n(12808),
                r = n(12514),
                d = {
                    src: "/_next/static/media/NFID.2af7c7e7.png",
                    height: 31,
                    width: 66,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAbklEQVR42mNAAtwMDJysZ2PuWv0PnM7KAAQNSZ8tGIBgDRC3MTAwLWVhYJD///Y/Y1fi5yLP5h91DDu/aTMAwTwgnsPEwJjPUM3AnMfwn92j5msZ68HvzfK3vuoyoAPlVV9sGP6/Y2cAAvv3lywAG2oh+E2pEY8AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                u = n(66648),
                m = n(16463),
                h = n(94282),
                g = function(e) {
                    let {
                        show: t,
                        hideModal: n,
                        callBackfn: g
                    } = e, [v, b] = (0, l.useState)(null), [w, f] = (0, l.useState)(!1), p = (0, m.useRouter)(), {
                        auth: A,
                        userAuth: I,
                        setUserAuth: C
                    } = (0, s.tN)(e => ({
                        auth: e.auth,
                        userAuth: e.userAuth,
                        setUserAuth: e.setUserAuth
                    })), {
                        login: y
                    } = (0, h.Z)();
                    async function N(e) {
                        b(e), y(e, p, g)
                    }
                    return (0, l.useEffect)(() => {
                        "initialized" == A.state && n()
                    }, [A.isLoading]), (0, a.jsx)(o.Z, {
                        className: "light connect-modal",
                        backdrop: !A.isLoading || "static",
                        show: t,
                        centered: !0,
                        onHide: n,
                        children: (0, a.jsxs)(o.Z.Body, {
                            children: [(0, a.jsx)(c.Z, {
                                disabled: A.isLoading,
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
                                }), (0, a.jsxs)(c.Z, {
                                    className: "reg-btn connect-btn II",
                                    disabled: A.isLoading,
                                    onClick: () => N(i.X9.InternetIdentity),
                                    id: "handleLogin_identity",
                                    children: [(0, a.jsx)("img", {
                                        src: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/infinte.png",
                                        alt: "Infinte Logo"
                                    }), A.isLoading && v == i.X9.InternetIdentity ? (0, a.jsx)(r.default, {
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
                                }), (0, a.jsxs)(c.Z, {
                                    className: "reg-btn connect-btn NFID",
                                    disabled: A.isLoading,
                                    id: "nfid_btn",
                                    onClick: () => N(i.X9.NFID),
                                    children: [(0, a.jsx)(u.default, {
                                        alt: "NFID",
                                        src: d
                                    }), A.isLoading && v == i.X9.NFID ? (0, a.jsx)(r.default, {
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
        52555: function(e, t, n) {
            n.d(t, {
                QT: function() {
                    return s
                },
                Vm: function() {
                    return r
                },
                WM: function() {
                    return a
                },
                k: function() {
                    return i
                },
                n8: function() {
                    return c
                },
                pu: function() {
                    return d
                }
            });
            let a = 40,
                i = 3,
                s = /^[-a-zA-Z0-9._]+@([a-zA-Z0-9-]+?\.)+[A-Za-z]+$/,
                l = "is Required",
                o = "must be at least",
                c = {
                    contests: {
                        name: {
                            min: 5,
                            max: 40
                        },
                        slots: {
                            min: 1
                        },
                        entryFee: {
                            min: 0
                        },
                        rewardDistribution: {
                            min: 1
                        },
                        minCap: {
                            min: 1
                        },
                        maxCap: {
                            min: 1
                        },
                        teamsPerUser: {
                            min: 1
                        }
                    }
                },
                r = {
                    contest: {
                        name: {
                            req: "Contest Name ".concat(l),
                            min: "Contest Name ".concat(o, " ").concat(c.contests.name.min),
                            max: "Contest Name ".concat("must be smaller than", " ").concat(c.contests.name.max)
                        },
                        slots: {
                            req: "Slots are required",
                            min: "Slots ".concat(o, " ").concat(c.contests.slots.min)
                        },
                        entryFee: {
                            req: "Entry Fee ".concat(l),
                            min: "Entry Fee can not be less than ".concat(c.contests.entryFee.min)
                        },
                        minCap: {
                            req: "Min Cap ".concat(l),
                            min: "Min Cap can not be less than ".concat(c.contests.minCap.min)
                        },
                        maxCap: {
                            req: "Max Cap ".concat(l),
                            min: "Max Cap can not be less than ".concat(c.contests.maxCap.min)
                        },
                        teamsPerUser: {
                            req: "Teams Per User ".concat(l),
                            min: "Teams Per User can not be less than ".concat(c.contests.teamsPerUser.min)
                        },
                        rules: {
                            req: "Contest Rule ".concat(l)
                        }
                    }
                },
                d = 1e6
        },
        94282: function(e, t, n) {
            var a = n(14234),
                i = n(18473),
                s = n(57389),
                l = n(2265),
                o = n(69419),
                c = n(90483),
                r = n(73305),
                d = n(92618),
                u = n(20585),
                m = n(51725),
                h = n(61507),
                g = n(16463);
            t.Z = () => {
                let {
                    auth: e,
                    setAuth: t,
                    userAuth: n,
                    setUserAuth: v
                } = (0, h.tN)(e => ({
                    auth: e.auth,
                    setAuth: e.setAuth,
                    userAuth: e.userAuth,
                    setUserAuth: e.setUserAuth
                })), b = (0, g.useRouter)(), w = (0, l.useCallback)(async () => {
                    (0, i.Z)("INIIITINNNNG"), t({ ...e,
                        isLoading: !0
                    });
                    let l = await u.NFID.init({
                            application: {
                                name: m.vj.name,
                                logo: m.vj.logo
                            },
                            idleOptions: {
                                disableIdle: !0,
                                disableDefaultIdleCallback: !0
                            }
                        }),
                        o = await s.AuthClient.create({
                            idleOptions: {
                                disableIdle: !0,
                                disableDefaultIdleCallback: !0
                            }
                        });
                    if (await o.isAuthenticated()) return {
                        success: !1,
                        actor: await C(o)
                    };
                    if (l.isAuthenticated) return {
                        success: !1,
                        actor: await C(void 0, l.getIdentity())
                    }; {
                        let i = (0, a.jb)(),
                            s = await i.getRewardPercentage();
                        return t({ ...e,
                            state: "anonymous",
                            actor: i,
                            client: o,
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
                            }), n === m.X9.InternetIdentity) {
                            var s, l;
                            if (!e.client) {
                                w(), console.error("AuthClient not initialized");
                                return
                            }
                            await e.client.login({
                                maxTimeToLive: BigInt(2592e12),
                                derivationOrigin: "https://w2utv-nyaaa-aaaam-ac7iq-cai.icp0.io",
                                identityProvider: "https://identity.ic0.app/#authorize",
                                onSuccess: () => {
                                    C(e.client).then(() => {
                                        var e;
                                        let t = null === (e = window) || void 0 === e ? void 0 : e.location;
                                        (null == t ? void 0 : t.pathname) == "/" && b.push(r.zO), i && i()
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
                                        C(e.client)
                                    }
                                })
                            })
                        } else if (n === m.X9.NFID) try {
                            let e = await u.NFID.init({
                                    application: {
                                        name: m.vj.name,
                                        logo: m.vj.logo
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
                            C(void 0, t).then(() => {
                                var e;
                                let t = null === (e = window) || void 0 === e ? void 0 : e.location;
                                (null == t ? void 0 : t.pathname) == "/" && b.push(r.zO)
                            })
                        } catch (n) {
                            t({ ...e,
                                isLoading: !1
                            })
                        }
                    }
                }, [e.state, e.client, t]), p = (0, l.useCallback)(async () => {
                    if (t({ ...e,
                            isLoading: !0
                        }), "initialized" === e.state) {
                        (0, i.Z)("LOGGIN OUT"), e.client instanceof s.AuthClient ? await e.client.logout() : u.NFID._authClient.isAuthenticated && await u.NFID._authClient.logout();
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
                }, [e.state, e.client, t, v]), A = (0, l.useCallback)(e => e.hasOwnProperty("admin") ? {
                    admin: !0
                } : {
                    admin: !1
                }, []), I = (0, l.useCallback)(async () => {
                    let t = await (0, d.sb)(e.identity);
                    return v({ ...n,
                        balance: t
                    }), t
                }, [t, v, n]), C = (0, l.useCallback)(async (n, s) => {
                    try {
                        if (!n && !s) return (0, i.Z)("Unexpected error while authenticating");
                        let y = n ? n.getIdentity() : s,
                            N = await (0, o.x_)({
                                identity: y,
                                host: "https:icp0.io"
                            });
                        if (!y) return (0, i.Z)("Unexpected error while authenticating");
                        let x = (0, a.jb)({
                                agentOptions: {
                                    identity: y
                                }
                            }),
                            j = await x.getUser([]),
                            k = await x.getRewardPercentage(),
                            P = (0, o.ij)(j),
                            D = await (0, d.sb)(y);
                        if (P) {
                            let e = A(null == P ? void 0 : P.role);
                            v({
                                name: null == P ? void 0 : P.name,
                                role: null == P ? void 0 : P.role,
                                email: null == P ? void 0 : P.email,
                                userPerms: e,
                                rewardPercentage: k ? Number(k) : 0,
                                balance: D
                            })
                        } else {
                            let e = {
                                name: (0, c.Dj)(),
                                email: ""
                            };
                            var l, r, u, m, h, g, b, w, f, p, I, C = new URL(null === (r = window) || void 0 === r ? void 0 : null === (l = r.location) || void 0 === l ? void 0 : l.href).searchParams.get("refferalId");
                            (0, i.Z)(C, "fasdfadsftempRefferal");
                            let t = await x.addUser(e, C ? [C] : []);
                            if (null == t ? void 0 : t.ok) {
                                t.ok[1] = (0, o.ij)(null == t ? void 0 : null === (u = t.ok) || void 0 === u ? void 0 : u[1]);
                                let e = A(null == t ? void 0 : null === (h = t.ok) || void 0 === h ? void 0 : null === (m = h[1]) || void 0 === m ? void 0 : m.role),
                                    n = await x.getRewardPercentage();
                                v({
                                    name: null == t ? void 0 : null === (b = t.ok) || void 0 === b ? void 0 : null === (g = b[1]) || void 0 === g ? void 0 : g.name,
                                    role: null == t ? void 0 : null === (f = t.ok) || void 0 === f ? void 0 : null === (w = f[1]) || void 0 === w ? void 0 : w.role,
                                    email: null == t ? void 0 : null === (I = t.ok) || void 0 === I ? void 0 : null === (p = I[1]) || void 0 === p ? void 0 : p.email,
                                    userPerms: e,
                                    rewardPercentage: n ? Number(n) : 0,
                                    balance: D
                                })
                            }(0, i.Z)(t, "created user")
                        }
                        return t({ ...e,
                            state: "initialized",
                            actor: x,
                            client: null != n ? n : e.client,
                            isLoading: !1,
                            identity: y,
                            agent: N
                        }), x
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
                }, [A, t, v, e]);
                return {
                    auth: e,
                    userAuth: n,
                    initAuth: w,
                    login: f,
                    logout: p,
                    authenticate: C,
                    updateBalance: I
                }
            }
        }
    }
]);