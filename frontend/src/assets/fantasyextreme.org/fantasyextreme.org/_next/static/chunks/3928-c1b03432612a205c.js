"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3928], {
        44577: function(e, t, n) {
            function a(e) {
                return {
                    id: e[0],
                    ...e[1]
                }
            }

            function r(e) {
                return {
                    id: e[0],
                    ...e[1],
                    isSub: e[2]
                }
            }
            n.d(t, {
                B: function() {
                    return a
                },
                x: function() {
                    return r
                }
            })
        },
        90483: function(e, t, n) {
            n.d(t, {
                Iu: function() {
                    return M
                },
                z5: function() {
                    return U
                },
                cU: function() {
                    return W
                },
                V5: function() {
                    return z
                },
                wt: function() {
                    return K
                },
                go: function() {
                    return ea
                },
                Dj: function() {
                    return Z
                },
                Fc: function() {
                    return ed
                },
                hq: function() {
                    return $
                },
                D6: function() {
                    return k
                },
                Wn: function() {
                    return ef
                },
                pR: function() {
                    return A
                },
                Tw: function() {
                    return V
                },
                Q4: function() {
                    return eo
                },
                zK: function() {
                    return E
                },
                eZ: function() {
                    return B
                },
                sq: function() {
                    return ey
                },
                a0: function() {
                    return Q
                },
                yx: function() {
                    return ei
                },
                p3: function() {
                    return ee
                },
                h_: function() {
                    return O
                },
                n_: function() {
                    return J
                },
                xp: function() {
                    return em
                },
                KD: function() {
                    return ep
                },
                YD: function() {
                    return D
                },
                cr: function() {
                    return F
                },
                Ld: function() {
                    return eg
                },
                WL: function() {
                    return q
                },
                ow: function() {
                    return eT
                },
                hH: function() {
                    return el
                },
                B1: function() {
                    return ec
                },
                wS: function() {
                    return L
                },
                FW: function() {
                    return H
                },
                GN: function() {
                    return j
                },
                Y6: function() {
                    return et
                },
                ve: function() {
                    return X
                },
                V8: function() {
                    return w
                },
                Nh: function() {
                    return er
                },
                Mb: function() {
                    return R
                },
                r8: function() {
                    return es
                },
                zR: function() {
                    return Y
                },
                yQ: function() {
                    return C
                },
                IZ: function() {
                    return S
                },
                x2: function() {
                    return G
                },
                mk: function() {
                    return _
                },
                vc: function() {
                    return eh
                },
                WR: function() {
                    return en
                }
            });
            var a = n(18473),
                r = n(44577),
                o = n(90023),
                i = n(96953),
                u = n(69419),
                c = n(64486),
                s = n(19212),
                l = n.n(s),
                d = n(22599),
                m = n.n(d);

            function p(e) {
                return e ? Object.entries(m().groupBy(e, e => e.matchId)) : null
            }
            var f = n(51725),
                g = n(92618);
            n(2265);
            var y = n(99903),
                T = n(97578),
                h = n(28301),
                N = n(26119);
            let v = {
                [c.bs.gold]: N.Z,
                [c.bs.free]: T.Z,
                [c.bs.bronze]: h.Z
            };
            var b = n(42126),
                I = n(73305);

            function w(e) {
                let t = {};
                for (let n of e) {
                    let e = Object.keys(n.position).find(e => "undefined" !== e);
                    if (!e) {
                        console.warn("Skipping player with missing role: ".concat(n.name));
                        continue
                    }
                    t[e] || (t[e] = []), n.positionString = e, t[e].push(n)
                }
                return t
            }

            function x(e, t) {
                var n;
                return null === (n = e.find(e => (null == e ? void 0 : e.id) == t)) || void 0 === n ? void 0 : n.name
            }
            async function F(e) {
                var t;
                let {
                    auth: n,
                    setCount: o,
                    setPlayers: i,
                    setSinglePlayers: c,
                    ids: s
                } = e;
                if (!s) return;
                let l = s.map(e => {
                    if (e) return e.id
                });
                (0, a.Z)(s, "got aids");
                let d = await n.actor.getPlayersByTeamIds(l),
                    m = (null == d ? void 0 : d.ok) ? null == d ? void 0 : d.ok[0] : null,
                    p = (null == d ? void 0 : d.ok) ? null == d ? void 0 : d.ok[1] : null,
                    f = {
                        d: 0,
                        m: 0,
                        g: 0,
                        f: 0,
                        all: 0
                    };
                for (let e in p) f[e] = Number(p[e]), f.all = Number(p[e]) + f.all;
                o(f);
                let g = null == m ? void 0 : null === (t = m.map(e => ({ ...(0, r.B)(e),
                    fantasyPrice: Number(e[1].fantasyPrice),
                    teamName: x(s, e[1].teamId),
                    points: (0, u.ij)(e[1].points) ? Number(e[1].points) : 0,
                    number: Number(e[1].number)
                }))) || void 0 === t ? void 0 : t.sort((e, t) => 0 === e.number && 0 !== t.number ? 1 : 0 === t.number && 0 !== e.number ? -1 : e.number - t.number);
                if (c) return c(g), g;
                let y = w(g);
                if (i) return i(y), g
            }

            function R(e) {
                return "initialized" == e
            }

            function _(e) {
                return !!R(e) || (o.Am.error("Please Connect with Internet Identity to perform this action", {
                    autoClose: 3e3
                }), !1)
            }
            async function P(e, t) {
                let n = (0, u.ij)(await t.getTeamById(e));
                return n ? {
                    id: e,
                    ...n
                } : null
            }
            async function O(e, t, n, a, r, o, s, l) {
                var d;
                switch (n.status) {
                    case c.TP.upcoming:
                        a(e => ({ ...e,
                            upcoming: !0
                        }));
                        break;
                    case c.TP.ongoing:
                        a(e => ({ ...e,
                            ongoing: !0
                        }));
                        break;
                    case c.TP.finished:
                        a(e => ({ ...e,
                            finished: !0
                        }))
                }
                let p = (0, u.WG)(s),
                    f = await e.getMatchesWithTournamentId(n, o, p),
                    g = null == f ? void 0 : f.matches,
                    y = null !== (d = Number(null == f ? void 0 : f.total)) && void 0 !== d ? d : 0,
                    T = (await Promise.all(null == g ? void 0 : g.map(async t => {
                        let n = await P(null == t ? void 0 : t.homeTeam, e),
                            a = await P(null == t ? void 0 : t.awayTeam, e);
                        if (!n || !a) return null;
                        let r = 5 === new Date(Number(t.time)).getDay(),
                            o = (0, i.Yp)(t.time, "MMM  D, YY"),
                            u = (0, i.Yp)(null == t ? void 0 : t.time, "hh:mm A"),
                            s = c.Ip.postpond == t.status;
                        return {
                            id: t.id,
                            homeTeam: n,
                            awayTeam: a,
                            location: null == t ? void 0 : t.location,
                            date: o,
                            time: u,
                            tournamentId: t.tournamentId,
                            tournamentName: t.tournamentName,
                            homeScore: Number(null == t ? void 0 : t.homeScore),
                            awayScore: Number(null == t ? void 0 : t.awayScore),
                            status: t.status,
                            isPostpond: s,
                            groupId: t.tournamentId + o + u,
                            isOnFriday: r
                        }
                    }))).filter(e => null != e),
                    h = (e => {
                        if (null == e) return null;
                        let t = [],
                            n = [],
                            a = null;
                        for (let r = 0; r < e.length; r++) {
                            let [o, i] = e[r], u = r + 1 < (null == e ? void 0 : e.length) ? e[r + 1][0] : null, c = o.match(/^\d+/)[0], s = u ? u.match(/^\d+/)[0] : null;
                            null === a && (a = c), a === c && (n = [...n, ...i]), c !== s ? (t.push([o, n]), n = [], a = null) : a = s
                        }
                        return t
                    })(T ? Object.entries(m().groupBy(T, e => e.groupId)) : null);
                switch (n.status) {
                    case c.TP.upcoming:
                        a(e => ({ ...e,
                            upcoming: !1
                        })), r && r(e => ({ ...e,
                            upcoming: y
                        })), t(l ? e => ({ ...e,
                            upcoming: T
                        }) : e => ({ ...e,
                            upcoming: h
                        }));
                        break;
                    case c.TP.ongoing:
                        a(e => ({ ...e,
                            ongoing: !1
                        })), r && r(e => ({ ...e,
                            ongoing: y
                        })), t(e => ({ ...e,
                            ongoing: h
                        }));
                        break;
                    case c.TP.finished:
                        a(e => ({ ...e,
                            finished: !1
                        })), r && r(e => ({ ...e,
                            finished: y
                        })), t(l ? e => ({ ...e,
                            finished: T
                        }) : e => ({ ...e,
                            finished: h
                        }))
                }
            }
            async function V(e) {
                let {
                    matchId: t,
                    actor: n,
                    setContests: r,
                    setGroupedContests: o,
                    userAuth: i
                } = e;
                if (!n) return;
                let u = null,
                    c = null == (u = t ? await n.getContestsByMatchId(t) : await n.getJoinedContests()) ? void 0 : u.map(e => {
                        var t, n, a, r, o, u;
                        e[1].entryFee = (0, g.np)(e[1].entryFee), e[1].slots = Number(e[1].slots), e[1].slotsUsed = Number(e[1].slotsUsed), e[1].teamsPerUser = Number(e[1].teamsPerUser);
                        let c = (null == i ? void 0 : i.rewardPercentage) / 100,
                            s = (null === (t = e[1]) || void 0 === t ? void 0 : t.entryFee) * (null === (n = e[1]) || void 0 === n ? void 0 : n.slotsUsed) * c,
                            l = (null === (a = e[1]) || void 0 === a ? void 0 : a.slots) - (null === (r = e[1]) || void 0 === r ? void 0 : r.slotsUsed),
                            d = null === (o = e[1].rewardDistribution) || void 0 === o ? void 0 : o.map(e => {
                                let t = {
                                        to: Number(e.to),
                                        from: Number(e.from),
                                        amount: Number(e.amount)
                                    },
                                    n = t.to - t.from + 1;
                                1 == t.from && t.amount;
                                let a = t.amount / 100;
                                return {
                                    from: t.from,
                                    to: t.to,
                                    amount: s * a / n,
                                    percentage: t.amount
                                }
                            }),
                            m = ((null === (u = d[d.length - 1]) || void 0 === u ? void 0 : u.to) / e[1].slots * 100).toFixed(1);
                        return { ...e[1],
                            id: e[0],
                            rewardDistribution: d,
                            prizePool: s.toFixed(2),
                            slotsLeft: l,
                            firstPrize: (0, g.np)(e[1].firstPrize),
                            rewardableUserPercentage: m
                        }
                    }).sort((e, t) => Number(t.id) - Number(e.id));
                r ? ((0, a.Z)(c, "tranchullll"), r(c)) : o && o(p(c))
            }
            async function B(e, t, n, r, o, i, u, s) {
                try {
                    if (!t) {
                        switch (o.status) {
                            case c.TP.upcoming:
                                s && s(e => ({ ...e,
                                    upcoming: !1
                                }));
                                break;
                            case c.TP.ongoing:
                                s && s(e => ({ ...e,
                                    ongoing: !1
                                }));
                                break;
                            case c.TP.finished:
                                s && s(e => ({ ...e,
                                    finished: !1
                                }))
                        }
                        return
                    }
                    let y = null;
                    if (s) switch (o.status) {
                        case c.TP.upcoming:
                            s(e => ({ ...e,
                                upcoming: !0
                            }));
                            break;
                        case c.TP.ongoing:
                            s(e => ({ ...e,
                                ongoing: !0
                            }));
                            break;
                        case c.TP.finished:
                            s(e => ({ ...e,
                                finished: !0
                            }))
                    }
                    y = e ? await t.getPaginatedContestsByMatchId(e, o) : await t.getFilterdContests(o);
                    var l, d, m = null !== (d = Number(null == y ? void 0 : y.total)) && void 0 !== d ? d : 0;
                    let T = null == y ? void 0 : null === (l = y.contests) || void 0 === l ? void 0 : l.map(e => {
                        var t, r, o, i, u, c;
                        e[1].entryFee = (0, g.np)(e[1].entryFee), e[1].slots = Number(e[1].slots), e[1].slotsUsed = Number(e[1].slotsUsed), e[1].teamsPerUser = Number(e[1].teamsPerUser);
                        let s = (null == n ? void 0 : n.rewardPercentage) / 100,
                            l = (null === (t = e[1]) || void 0 === t ? void 0 : t.entryFee) * (null === (r = e[1]) || void 0 === r ? void 0 : r.slotsUsed) * s,
                            d = (null === (o = e[1]) || void 0 === o ? void 0 : o.slots) - (null === (i = e[1]) || void 0 === i ? void 0 : i.slotsUsed),
                            m = null === (u = e[1].rewardDistribution) || void 0 === u ? void 0 : u.map(e => {
                                let t = {
                                        to: Number(e.to),
                                        from: Number(e.from),
                                        amount: Number(e.amount)
                                    },
                                    n = t.to - t.from + 1;
                                t.from;
                                let a = t.amount / 100;
                                return {
                                    from: t.from,
                                    to: t.to,
                                    amount: l * a / n,
                                    percentage: t.amount
                                }
                            }),
                            p = ((null === (c = m[m.length - 1]) || void 0 === c ? void 0 : c.to) / e[1].slots * 100).toFixed(1);
                        return (0, a.Z)(e, "tranchullll"), { ...e[1],
                            id: e[0],
                            rewardDistribution: m,
                            prizePool: l.toFixed(2),
                            slotsLeft: d,
                            firstPrize: (0, g.np)(e[1].firstPrize),
                            rewardableUserPercentage: p
                        }
                    }).sort((e, t) => Number(t.id) - Number(e.id));
                    i && i(T);
                    var f = p(T);
                    switch (null == f || f.filter(e => {
                        let [t, n] = e;
                        return n.some(e => e.name.includes(o.search))
                    }), o.status) {
                        case c.TP.upcoming:
                            s && s(e => ({ ...e,
                                upcoming: !1
                            })), u && u(e => ({ ...e,
                                upcoming: m
                            })), r && r(e => ({ ...e,
                                upcoming: f
                            }));
                            break;
                        case c.TP.ongoing:
                            s && s(e => ({ ...e,
                                ongoing: !1
                            })), u && u(e => ({ ...e,
                                ongoing: m
                            })), r && r(e => ({ ...e,
                                ongoing: f
                            }));
                            break;
                        case c.TP.finished:
                            s && s(e => ({ ...e,
                                finished: !1
                            })), u && u(e => ({ ...e,
                                finished: m
                            })), r && r(e => ({ ...e,
                                finished: f
                            }))
                    }
                } catch (e) {
                    switch (o.status) {
                        case c.TP.upcoming:
                            s && s(e => ({ ...e,
                                upcoming: !1
                            }));
                            break;
                        case c.TP.ongoing:
                            s && s(e => ({ ...e,
                                ongoing: !1
                            }));
                            break;
                        case c.TP.finished:
                            s && s(e => ({ ...e,
                                finished: !1
                            }))
                    }
                }
            }
            async function k(e, t, n) {
                var r;
                let o = (0, u.ij)(await e.getContest(t)),
                    i = null == o ? void 0 : null === (r = o.rewardDistribution) || void 0 === r ? void 0 : r.map(e => ({
                        to: Number(e.to),
                        from: Number(e.from),
                        amount: Number(e.amount),
                        percentage: Number(e.amount)
                    })),
                    c = { ...o,
                        slots: Number(null == o ? void 0 : o.slots),
                        slotsUsed: Number(null == o ? void 0 : o.slotsUsed),
                        minCap: Number(null == o ? void 0 : o.minCap),
                        teamsPerUser: Number(null == o ? void 0 : o.teamsPerUser),
                        entryFee: Number(null == o ? void 0 : o.entryFee),
                        rewardDistribution: i
                    };
                (0, a.Z)({
                    _contest: o,
                    contest: c
                }, "looogogogogo"), n(c)
            }
            async function A(e, t, n, a, o) {
                try {
                    var i;
                    n(!0);
                    let {
                        contest: c,
                        match: s
                    } = (0, u.ij)(await e.getContestWithMatch(t)), l = null == c ? void 0 : null === (i = c.rewardDistribution) || void 0 === i ? void 0 : i.map(e => ({
                        to: Number(e.to),
                        from: Number(e.from),
                        amount: Number(e.amount),
                        percentage: Number(e.amount)
                    })), d = { ...c,
                        slots: Number(null == c ? void 0 : c.slots),
                        slotsUsed: Number(null == c ? void 0 : c.slotsUsed),
                        minCap: Number(null == c ? void 0 : c.minCap),
                        teamsPerUser: Number(null == c ? void 0 : c.teamsPerUser),
                        entryFee: Number(null == c ? void 0 : c.entryFee),
                        rewardDistribution: l
                    };
                    if (s) {
                        let e = s[0];
                        e.homeTeam[1] = (0, u.ij)(e.homeTeam[1]), e.awayTeam[1] = (0, u.ij)(e.awayTeam[1]);
                        let t = (0, r.B)(e.homeTeam),
                            n = (0, r.B)(e.awayTeam),
                            a = { ...e,
                                homeTeam: t,
                                awayTeam: n,
                                status: eu({
                                    time: null == e ? void 0 : e.time,
                                    status: null == e ? void 0 : e.status
                                }),
                                time: Number(e.time)
                            };
                        o(a)
                    }
                    a([d]), n(!1)
                } catch (e) {
                    n(!1)
                }
            }
            async function q(e, t, n, r, o, i, u) {
                try {
                    var c;
                    (0, a.Z)(u, "my contest id is disss");
                    let s = await t.getListPlayerSquadsByMatch(e, u ? [u] : []);
                    (0, a.Z)(s, "my contest is disss");
                    let l = 0,
                        d = null == s ? void 0 : null === (c = s.map(e => {
                            e[1].hasParticipated && l++;
                            let t = e[1].joinedContestsName.join(",");
                            return { ...e[1],
                                id: e[0],
                                points: Number(e[1].points),
                                rank: Number(e[1].rank),
                                joinedContestsName: t
                            }
                        })) || void 0 === c ? void 0 : c.sort((e, t) => Number(t.creation_time) - Number(e.creation_time));
                    o(l), l >= n && i(!0), r(d)
                } catch (e) {
                    (0, a.Z)(e)
                }
            }

            function S(e) {
                return e ? { ...e,
                    points: Number(e.points),
                    creation_time: Number(e.creation_time),
                    rank: Number(null == e ? void 0 : e.rank)
                } : null
            }

            function C(e) {
                let t = (0, r.x)(e);
                return t.positionString = Object.keys(t.position)[0], t.points = Number(t.points), t
            }
            Array.prototype.groupBy || (Array.prototype.groupBy = function(e) {
                return this.reduce((t, n) => {
                    let a = e(n);
                    return t[a] || (t[a] = []), t[a].push(n), t
                }, {})
            });
            let D = (e, t) => {
                let n = "",
                    a = l()(),
                    r = l()().add(10, "minutes"),
                    o = l()(t).isBetween(a, r),
                    i = null;
                return e.isPlaying && !e.isSub ? (i = c.fI.playing, n = c.Vk.playing) : e.isPlaying && e.isSub ? (i = c.fI.substitute, n = c.Vk.substitute) : o ? (i = c.fI.notPlaying, n = c.Vk.notPlaying) : (i = null, n = c.Vk.waiting), {
                    status: n,
                    showStatus: i
                }
            };
            async function U(e) {
                window.navigator.clipboard.writeText(e.identity.getPrincipal().toString()), o.Am.success("Principal copied to clipboard", {
                    autoClose: 750
                })
            }
            async function M(e) {
                e && (window.navigator.clipboard.writeText(y.Ds.fromPrincipal({
                    principal: e.getPrincipal()
                }).toHex()), o.Am.success("Wallet Address copied to clipboard", {
                    autoClose: 750
                }))
            }
            async function W(e) {
                e && (window.navigator.clipboard.writeText(window.location.host + "?refferalId=" + e.getPrincipal().toString()), o.Am.success("Refferal link copied to clipboard", {
                    autoClose: 750
                }))
            }
            async function E(e) {
                let {
                    contestId: t,
                    matchId: n,
                    actor: o,
                    setTeams: i,
                    props: s,
                    setTeamsCounts: l,
                    setLoadingState: d,
                    setPlayerSquads: p
                } = e;
                try {
                    switch (s.status) {
                        case c.TP.upcoming:
                            d(e => ({ ...e,
                                upcoming: !0
                            }));
                            break;
                        case c.TP.ongoing:
                            d(e => ({ ...e,
                                ongoing: !0
                            }));
                            break;
                        case c.TP.finished:
                            d(e => ({ ...e,
                                finished: !0
                            }))
                    }
                    let e = (0, u.WG)(n),
                        h = (0, u.WG)(t),
                        N = await o.getFilterdRawPlayerSquadsByMatch(e, h, s),
                        v = null !== (g = Number(null == N ? void 0 : N.total)) && void 0 !== g ? g : 0;
                    var f, g, y = null == N ? void 0 : null === (f = N.teams) || void 0 === f ? void 0 : f.map(e => {
                        let t = (0, r.B)(e);
                        return { ...t,
                            creation_time: Number(null == t ? void 0 : t.creation_time),
                            points: Number(null == t ? void 0 : t.points),
                            rank: Number(null == t ? void 0 : t.rank)
                        }
                    });
                    if (p) p(y);
                    else if (i) {
                        var T = y ? Object.entries(m().groupBy(y, e => e.matchId)) : null;
                        switch (s.status) {
                            case c.TP.upcoming:
                                d(e => ({ ...e,
                                    upcoming: !1
                                })), (0, a.Z)(N, "upcoming count"), l && l(e => ({ ...e,
                                    upcoming: v
                                })), i(e => ({ ...e,
                                    upcoming: T
                                }));
                                break;
                            case c.TP.ongoing:
                                d(e => ({ ...e,
                                    ongoing: !1
                                })), l && l(e => ({ ...e,
                                    ongoing: v
                                })), i(e => ({ ...e,
                                    ongoing: T
                                }));
                                break;
                            case c.TP.finished:
                                d(e => ({ ...e,
                                    finished: !1
                                })), l && l(e => ({ ...e,
                                    finished: v
                                })), i(e => ({ ...e,
                                    finished: T
                                }))
                        }
                    }
                } catch (e) {}
            }
            async function j(e, t, n) {
                if (e) {
                    var a = await e.getTournamentsN(t);
                    n(null == a ? void 0 : a.tournaments)
                }
            }
            async function K(e) {
                var t, n, a, o, i, c, s, l;
                let {
                    actor: d,
                    squadId: m,
                    setSelectedPlayers: p,
                    setSubstitution: g,
                    setTeamFormation: y,
                    setSelectedSquad: T,
                    setMatch: h,
                    setSelectedSubstitudePlayers: N,
                    contestId: v
                } = e, b = (0, u.ij)(await d.getPlayerSquad(m)), I = null == b ? void 0 : null === (t = b.ranks) || void 0 === t ? void 0 : t.find(e => e[0] == v), F = 0;
                if (I && (F = Number(I[1])), b) {
                    let {
                        0: e,
                        1: t,
                        2: m
                    } = null == b ? void 0 : null === (n = b.formation) || void 0 === n ? void 0 : n.split("-");
                    f.tC.map(n => {
                        n.formation.defender == e && n.formation.midfielder == t && n.formation.forward == m && (y(n.formation), g(n.substitution))
                    });
                    let v = (0, u.ij)(await d.getMatch(b.matchId)),
                        I = null;
                    if (v) {
                        v.homeTeam[1] = (0, u.ij)(v.homeTeam[1]), v.awayTeam[1] = (0, u.ij)(v.awayTeam[1]);
                        let e = (0, r.B)(v.homeTeam),
                            t = (0, r.B)(v.awayTeam);
                        h(I = { ...v,
                            homeTeam: e,
                            awayTeam: t,
                            time: Number(v.time)
                        })
                    }
                    let R = [{
                            id: null == I ? void 0 : I.homeTeam.id,
                            name: null == I ? void 0 : I.homeTeam.name
                        }, {
                            id: null == I ? void 0 : I.awayTeam.id,
                            name: null == I ? void 0 : I.awayTeam.name
                        }],
                        _ = null == b ? void 0 : null === (o = b.players) || void 0 === o ? void 0 : null === (a = o.map(e => {
                            let t = (0, r.x)(e);
                            return t.positionString = Object.keys(t.position)[0], { ...t,
                                creation_time: Number(t.creation_time),
                                fantasyPrice: Number(t.fantasyPrice),
                                points: (0, u.ij)(t.points) ? Number(t.points) : 0,
                                teamName: x(R, t.teamId),
                                number: Number(t.number),
                                isSubsituteSelected: e[2]
                            }
                        })) || void 0 === a ? void 0 : a.sort((e, t) => 0 === e.number && 0 !== t.number ? 1 : 0 === t.number && 0 !== e.number ? -1 : e.number - t.number),
                        P = _.filter(e => e.isSubsituteSelected),
                        O = w(_.filter(e => !e.isSubsituteSelected)),
                        V = w(P);
                    T({ ...b,
                        players: null,
                        points: Number(b.points),
                        rank: Number(F)
                    });
                    let B = null !== (s = null === (i = Object.values(O)) || void 0 === i ? void 0 : i.flat()) && void 0 !== s ? s : [],
                        k = null !== (l = null === (c = Object.values(V)) || void 0 === c ? void 0 : c.flat()) && void 0 !== l ? l : [];
                    N({ ...V,
                        all: k
                    }), p({ ...O,
                        all: B
                    })
                }
            }
            async function z(e) {
                let {
                    actor: t,
                    matchId: n,
                    setMatch: a
                } = e, o = (0, u.ij)(await t.getMatch(n));
                if (!o) return null; {
                    o.homeTeam[1] = (0, u.ij)(o.homeTeam[1]), o.awayTeam[1] = (0, u.ij)(o.awayTeam[1]);
                    let e = (0, r.B)(o.homeTeam),
                        t = (0, r.B)(o.awayTeam),
                        i = { ...o,
                            id: n,
                            homeTeam: e,
                            awayTeam: t,
                            status: eu({
                                time: null == o ? void 0 : o.time,
                                status: null == o ? void 0 : o.status
                            }),
                            time: Number(o.time)
                        };
                    return a(i), i
                }
            }

            function G(e) {
                switch (e) {
                    case "goalKeeper":
                        return "GK";
                    case "midfielder":
                        return "MD";
                    case "forward":
                        return "FWD";
                    case "defender":
                        return "DFD";
                    default:
                        return "----"
                }
            }

            function Z() {
                return "User".concat(Math.floor(1e3 + 9e3 * Math.random()).toString().padStart(4, "0"))
            }

            function Y(e) {
                let t = "string" == typeof e ? Number(e) : e;
                return (null != t ? t : l()().valueOf()) < l()().valueOf()
            }
            async function L(e, t, n) {
                if (e) {
                    let i = await e.getTeamsByTournament(t);
                    if (null == i ? void 0 : i.ok) {
                        var a, o;
                        n(null == i ? void 0 : null === (o = i.ok) || void 0 === o ? void 0 : null === (a = o[0]) || void 0 === a ? void 0 : a.map(e => (0, r.B)(e)))
                    }
                }
            }
            async function H(e, t, n, a, r) {
                if (e) {
                    a(!0);
                    var o, i = await e.getTopPlayers(t);
                    if (i) {
                        let e = null == i ? void 0 : i.players;
                        r(Number(null !== (o = null == i ? void 0 : i.total) && void 0 !== o ? o : 0)), n(e.map(e => {
                            var t, n, a, r;
                            let o = e[0],
                                i = e[1];
                            return {
                                name: null == i ? void 0 : i.name,
                                userId: o,
                                image: null == i ? void 0 : i.image,
                                participated: Number(null == i ? void 0 : null === (t = i.assets) || void 0 === t ? void 0 : t.participated),
                                contestWon: Number(null == i ? void 0 : null === (n = i.assets) || void 0 === n ? void 0 : n.contestWon),
                                rewardsWon: Number(null == i ? void 0 : null === (a = i.assets) || void 0 === a ? void 0 : a.rewardsWon),
                                totalEarning: Number(null == i ? void 0 : null === (r = i.assets) || void 0 === r ? void 0 : r.totalEarning)
                            }
                        }))
                    } else n(null);
                    a(!1)
                }
            }
            async function J(e, t, n, a) {
                if (e) {
                    a(!0);
                    var r = await e.getUserRank(t);
                    n(r ? r.map(e => {
                        var n, a, r, o;
                        return {
                            name: null == e ? void 0 : e.name,
                            userId: t,
                            image: null == e ? void 0 : e.image,
                            participated: Number(null == e ? void 0 : null === (n = e.assets) || void 0 === n ? void 0 : n.participated),
                            contestWon: Number(null == e ? void 0 : null === (a = e.assets) || void 0 === a ? void 0 : a.contestWon),
                            rewardsWon: Number(null == e ? void 0 : null === (r = e.assets) || void 0 === r ? void 0 : r.rewardsWon),
                            totalEarning: Number(null == e ? void 0 : null === (o = e.assets) || void 0 === o ? void 0 : o.totalEarning),
                            rank: Number(null == e ? void 0 : e.rank)
                        }
                    })[0] : null), a(!1)
                }
            }
            async function X(e) {
                let {
                    actor: t,
                    fantasyTransactionActor: n,
                    page: a,
                    limit: r,
                    contestId: o
                } = e, u = await n.getMyTransactions({
                    page: a,
                    contestId: o,
                    limit: r
                });
                if (!u) return {
                    total: 0,
                    transactions: []
                }; {
                    var c;
                    let e = null == u ? void 0 : u.transaction,
                        n = Number(null !== (c = null == u ? void 0 : u.total) && void 0 !== c ? c : 0),
                        a = [],
                        r = await Promise.all(e.map(async e => {
                            var t, n;
                            let r = e[1],
                                o = e[0],
                                u = Number(null == r ? void 0 : r.amount),
                                c = BigInt(Number(null !== (t = null == r ? void 0 : r.created_at_time) && void 0 !== t ? t : 0)),
                                s = (0, i.Yp)(c, "DD-MM-YYYY"),
                                l = (0, i.Yp)(c, "hh:mm A"),
                                d = null !== (n = Object.keys(null == r ? void 0 : r.transaction_type)[0]) && void 0 !== n ? n : "";
                            return a.push(null == r ? void 0 : r.contestId), {
                                amount: u,
                                id: o,
                                date: s,
                                time: l,
                                transaction_type: d,
                                contestId: null == r ? void 0 : r.contestId,
                                title: null == r ? void 0 : r.title
                            }
                        })),
                        o = await t.getContestNames(a);
                    return o && (o = o.reduce((e, t) => {
                        let [n, a] = t;
                        return e[n] = a, e
                    }, {})), {
                        total: n,
                        transactions: r.map(e => ({ ...e,
                            contestName: o[null == e ? void 0 : e.contestId]
                        }))
                    }
                }
            }
            async function Q(e) {
                let {
                    actor: t,
                    props: n
                } = e;
                try {
                    let e = await t.getJoinedTeams(n);
                    if (!e) return {
                        total: 0,
                        results: []
                    }; {
                        var a;
                        let t = null == e ? void 0 : e.result,
                            n = Number(null !== (a = null == e ? void 0 : e.total) && void 0 !== a ? a : 0),
                            r = t.map(e => ({ ...e,
                                rank: Number(e.rank),
                                homeScore: Number(e.homeScore),
                                awayScore: Number(e.awayScore)
                            }));
                        return {
                            total: n,
                            results: r
                        }
                    }
                } catch (e) {
                    return {
                        total: 0,
                        results: []
                    }
                }
            }
            async function $(e, t, n) {
                let a = (0, u.ij)(await e.getBudget());
                a && (t(Number(a)), n && n(Number(a)))
            }
            async function ee(e, t, n, a, r, o) {
                a(!0);
                let u = await e.getMVPSMatches(n),
                    c = null == u ? void 0 : u.matches;
                null == u || u.total;
                let s = await Promise.all(null == c ? void 0 : c.map(async e => {
                    let t = (0, i.Yp)(e.time, "MMM  D, YY"),
                        n = (0, i.Yp)(null == e ? void 0 : e.time, "hh:mm A");
                    return {
                        contestWinner: { ...e.contestWinner[0][1]
                        },
                        mvps: { ...e.mvps[0][1]
                        },
                        match: {
                            id: e.matchId,
                            homeTeam: { ...e.homeTeam[1][0]
                            },
                            awayTeam: { ...e.awayTeam[1][0]
                            },
                            location: null == e ? void 0 : e.location,
                            date: t,
                            time: n,
                            tournamentId: e.tournamentId,
                            tournamentName: e.tournamentName,
                            homeScore: Number(null == e ? void 0 : e.homeScore),
                            awayScore: Number(null == e ? void 0 : e.awayScore)
                        }
                    }
                }));
                s && t(e => s), a(!1)
            }
            async function et(e, t, n) {
                let a = await e.getAssetsOfUser(t);
                if (a) {
                    var r, o, i, u;
                    n({
                        participated: null !== (r = Number(a.participated)) && void 0 !== r ? r : 0,
                        contestWon: null !== (o = Number(a.contestWon)) && void 0 !== o ? o : 0,
                        rewardsWon: null !== (i = Number(a.rewardsWon)) && void 0 !== i ? i : 0,
                        totalEarning: null !== (u = Number(a.totalEarnin)) && void 0 !== u ? u : 0
                    })
                }
            }

            function en(e, t, n) {
                return (null == e ? void 0 : e.length) > n ? "".concat(null == e ? void 0 : e.slice(t, n), "...") : e
            }

            function ea(e) {
                let [t, n] = null == e ? void 0 : e.split("@");
                if (!t || !n) return "";
                let a = t.slice(0, 3);
                return "".concat(a, "...@").concat(n)
            }

            function er(e) {
                switch (!0) {
                    case "GenericError" in e:
                        return e.GenericError.message;
                    case "TemporarilyUnavailable" in e:
                        return "Service is temporarily unavailable.";
                    case "InsufficientAllowance" in e:
                        return "Allowance: ".concat(Number(e.InsufficientAllowance.allowance));
                    case "BadBurn" in e:
                        return "Minimum burn amount: ".concat(Number(e.BadBurn.min_burn_amount));
                    case "Duplicate" in e:
                        return "Duplicate of block index: ".concat(e.Duplicate.duplicate_of);
                    case "BadFee" in e:
                        return "Expected fee: ".concat(Number(e.BadFee.expected_fee));
                    case "CreatedInFuture" in e:
                        return "Ledger time: ".concat(e.CreatedInFuture.ledger_time);
                    case "TooOld" in e:
                        return "The transaction is too old.";
                    case "InsufficientFunds" in e:
                        return "Insufficient funds. Balance: ".concat(Number(e.InsufficientFunds.balance));
                    default:
                        return "Unknown error"
                }
            }
            async function eo(e, t, n, a, r) {
                try {
                    var o;
                    a(!0);
                    let u = await e.getDetailedMatchesContests(n),
                        c = null == u ? void 0 : u.matches,
                        s = null !== (o = Number(null == u ? void 0 : u.total)) && void 0 !== o ? o : 0,
                        l = (await Promise.all(null == c ? void 0 : c.map(async t => {
                            let n = await P(null == t ? void 0 : t.homeTeam, e),
                                a = await P(null == t ? void 0 : t.awayTeam, e);
                            if (!n || !a) return null;
                            let r = (0, i.Yp)(t.time, "DD-MM-YYYY"),
                                o = (0, i.Yp)(null == t ? void 0 : t.time, "hh:mm A"),
                                u = eu({
                                    time: null == t ? void 0 : t.time,
                                    status: null == t ? void 0 : t.status
                                }),
                                c = 0;
                            return null == t || t.contests.map(e => {
                                c += Number(e.teamsPerUser)
                            }), { ...t,
                                id: t.id,
                                homeTeam: n,
                                awayTeam: a,
                                location: null == t ? void 0 : t.location,
                                teamsCreated: Number(t.teamsCreated),
                                teamsJoined: Number(t.teamsJoined),
                                status: u,
                                date: r,
                                time: o,
                                matchTime: Number(null == t ? void 0 : t.time),
                                teamsPerUser: c,
                                homeScore: Number(null == t ? void 0 : t.homeScore),
                                awayScore: Number(null == t ? void 0 : t.awayScore),
                                entryFee: (0, g.np)(null == t ? void 0 : t.entryFee)
                            }
                        }))).filter(e => null != e);
                    r && r(s), t(l), a(!1)
                } catch (e) {
                    t(null), a(!1)
                }
            }

            function ei(e) {
                switch (e) {
                    case c.TP.upcoming:
                        return "upcoming";
                    case c.TP.ongoing:
                        return "ongoing";
                    case c.TP.finished:
                        return "finished";
                    case c.TP.postponed:
                        return "postponed";
                    default:
                        return "upcoming"
                }
            }

            function eu(e) {
                let {
                    status: t,
                    time: n
                } = e, a = c.TP.upcoming;
                return ! function(e) {
                    let t = "string" == typeof e ? Number(e) : e;
                    return (null != t ? t : l()().valueOf()) > l()().valueOf()
                }(n) ? Y(n) && (a = "Match Finished" === t ? c.TP.finished : "Match Postponed" === t ? c.TP.postponed : c.TP.ongoing) : a = c.TP.upcoming, a
            }

            function ec(e) {
                let {
                    id: t,
                    hasParticipated: n,
                    Matchstatus: a,
                    teamsPerUser: r,
                    time: o,
                    isParticipating: i,
                    selectedSquad: u,
                    maximumParticipated: s,
                    participants: l
                } = e, d = "Not joined", m = Y(o), p = !1, f = a == c.Ip.finished, g = c._V.upcoming;
                m && (g = c._V.ongoing), f && (g = c._V.finished), n && (g = c._V.participated, d = c._V.participated), s && !n && (p = !0, g = "".concat(l, " / ").concat(r, " Joined"));
                let y = i || m || n || p;
                return {
                    loading: i && t == u,
                    disabled: y,
                    status: d,
                    buttonText: g
                }
            }

            function es() {
                return "ic" == c.mf.dev
            }

            function el(e) {
                return Math.floor(e / 2)
            }

            function ed() {
                let e = ["Mighty", "Brave", "Swift", "Fierce", "Valiant", "Clever", "Bold", "Fearless", "Noble", "Daring"],
                    t = ["Lions", "Eagles", "Wolves", "Tigers", "Dragons", "Warriors", "Knights", "Panthers", "Titans", "Rangers"],
                    n = e[Math.floor(Math.random() * e.length)],
                    a = t[Math.floor(Math.random() * t.length)];
                return "".concat(n, " ").concat(a)
            }

            function em(e) {
                switch (e.toLowerCase()) {
                    case c.bs.bronze:
                        return c.bs.bronze;
                    case c.bs.gold:
                        return c.bs.gold;
                    case c.bs.free:
                    default:
                        return c.bs.free
                }
            }

            function ep(e) {
                return v[em(e)]
            }
            async function ef(e) {
                let {
                    actor: t,
                    set: n,
                    all: a
                } = e;
                n(await t.getContestTypes(a))
            }

            function eg(e, t, n) {
                return parseFloat((e * t / 100 * n).toFixed(4))
            }
            async function ey() {
                try {
                    var e;
                    let t = await b.Z.get(I.YP);
                    return (null === (e = t.data["internet-computer"]) || void 0 === e ? void 0 : e.usd).toFixed(2)
                } catch (e) {
                    return (0, a.Z)(e, "errorerror"), 0
                }
            }
            async function eT(e) {
                let {
                    actor: t,
                    set: n,
                    props: r,
                    setPageCount: o,
                    setLoading: i,
                    entryFee: u,
                    slotsUsed: c
                } = e;
                try {
                    if (null == u || null == c) return;
                    i(!0);
                    let {
                        total: e,
                        map: a
                    } = await t.getRewardsTable({
                        entryFee: (0, g.uH)(u),
                        slotsUsed: c,
                        props: r
                    }), s = Number(e);
                    o(s), n(a)
                } catch (e) {
                    (0, a.Z)(e, "error rewards table ")
                }
                i(!1)
            }

            function eh(e) {
                switch (e.toLowerCase()) {
                    case c.bs.bronze:
                    case c.bs.gold:
                        return !0;
                    case c.bs.free:
                    default:
                        return !1
                }
            }
        },
        96953: function(e, t, n) {
            n.d(t, {
                Yp: function() {
                    return u
                },
                uf: function() {
                    return c
                }
            });
            var a = n(19212),
                r = n.n(a),
                o = n(64746),
                i = n.n(o);
            let u = (e, t) => e ? r()(parseInt(e.toString())).local().format(t) : r().utc().local().format(t);

            function c(e) {
                return e < 1e3 ? i()(e).format("0a").toUpperCase() : i()(e).format("0.0a").toUpperCase()
            }
        },
        51725: function(e, t, n) {
            var a, r, o, i, u, c;
            n.d(t, {
                At: function() {
                    return p
                },
                CV: function() {
                    return d
                },
                EZ: function() {
                    return g
                },
                Ns: function() {
                    return o
                },
                Op: function() {
                    return I
                },
                S$: function() {
                    return h
                },
                W3: function() {
                    return N
                },
                X9: function() {
                    return r
                },
                et: function() {
                    return y
                },
                ku: function() {
                    return b
                },
                mO: function() {
                    return f
                },
                tC: function() {
                    return s
                },
                us: function() {
                    return m
                },
                ux: function() {
                    return l
                },
                vK: function() {
                    return a
                },
                vj: function() {
                    return v
                },
                wV: function() {
                    return T
                }
            });
            let s = [{
                    formation: {
                        goalKeeper: 1,
                        defender: 3,
                        midfielder: 4,
                        forward: 3
                    },
                    substitution: {
                        goalKeeper: 1,
                        defender: 2,
                        midfielder: 1,
                        forward: 0
                    }
                }, {
                    formation: {
                        goalKeeper: 1,
                        defender: 3,
                        midfielder: 5,
                        forward: 2
                    },
                    substitution: {
                        goalKeeper: 1,
                        defender: 2,
                        midfielder: 0,
                        forward: 1
                    }
                }, {
                    formation: {
                        goalKeeper: 1,
                        defender: 4,
                        midfielder: 3,
                        forward: 3
                    },
                    substitution: {
                        goalKeeper: 1,
                        defender: 1,
                        midfielder: 2,
                        forward: 0
                    }
                }, {
                    formation: {
                        goalKeeper: 1,
                        defender: 4,
                        midfielder: 4,
                        forward: 2
                    },
                    substitution: {
                        goalKeeper: 1,
                        defender: 1,
                        midfielder: 1,
                        forward: 1
                    }
                }, {
                    formation: {
                        goalKeeper: 1,
                        defender: 4,
                        midfielder: 5,
                        forward: 1
                    },
                    substitution: {
                        goalKeeper: 1,
                        defender: 1,
                        midfielder: 0,
                        forward: 2
                    }
                }, {
                    formation: {
                        goalKeeper: 1,
                        defender: 5,
                        midfielder: 2,
                        forward: 3
                    },
                    substitution: {
                        goalKeeper: 1,
                        defender: 0,
                        midfielder: 3,
                        forward: 0
                    }
                }, {
                    formation: {
                        goalKeeper: 1,
                        defender: 5,
                        midfielder: 3,
                        forward: 2
                    },
                    substitution: {
                        goalKeeper: 1,
                        defender: 0,
                        midfielder: 2,
                        forward: 1
                    }
                }, {
                    formation: {
                        goalKeeper: 1,
                        defender: 5,
                        midfielder: 4,
                        forward: 1
                    },
                    substitution: {
                        goalKeeper: 1,
                        defender: 0,
                        midfielder: 1,
                        forward: 2
                    }
                }],
                l = {
                    goalKeeper: [],
                    defender: [],
                    midfielder: [],
                    forward: [],
                    all: []
                },
                d = 15,
                m = {
                    width: 32,
                    height: 32
                },
                p = {
                    width: 100,
                    height: 100
                },
                f = {
                    width: 63,
                    height: 71
                },
                g = 1e8,
                y = 1e4,
                T = 1e-4,
                h = 1e-7,
                N = {
                    width: 110,
                    height: 125
                };
            (i = a || (a = {})).goalKeeper = "goalKeeper", i.defender = "defender", i.midfielder = "midfielder", i.forward = "forward";
            let v = {
                name: "Fantsy Extreme",
                logo: "https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/logo/logo.png",
                url: "https://alpha.fantasyextreme.org"
            };
            (u = r || (r = {}))[u.InternetIdentity = 0] = "InternetIdentity", u[u.NFID = 1] = "NFID", (c = o || (o = {})).up = "up", c.down = "down";
            let b = 3,
                I = 8
        },
        73305: function(e, t, n) {
            n.d(t, {
                Ej: function() {
                    return u
                },
                FK: function() {
                    return o
                },
                FU: function() {
                    return h
                },
                Fd: function() {
                    return l
                },
                Ky: function() {
                    return y
                },
                Lx: function() {
                    return s
                },
                Qn: function() {
                    return c
                },
                TI: function() {
                    return T
                },
                Td: function() {
                    return m
                },
                Xn: function() {
                    return b
                },
                YP: function() {
                    return w
                },
                Yi: function() {
                    return f
                },
                dK: function() {
                    return i
                },
                ic: function() {
                    return a
                },
                j6: function() {
                    return v
                },
                kB: function() {
                    return r
                },
                m1: function() {
                    return p
                },
                nu: function() {
                    return g
                },
                qU: function() {
                    return I
                },
                vb: function() {
                    return N
                },
                zO: function() {
                    return d
                }
            });
            let a = "players",
                r = "/matches",
                o = "/gameplayrules",
                i = "/contest",
                u = "/create-team",
                c = "/teams",
                s = "/contests",
                l = "/admin-panel",
                d = "/dashboard",
                m = "/player-prices",
                p = "/my-teams",
                f = "".concat(l).concat(s),
                g = "".concat(l).concat(m),
                y = "".concat(l).concat("/stats-system"),
                T = "".concat(l).concat("/upload-league"),
                h = "".concat(l).concat("/system-settings"),
                N = "/squad-stats",
                v = "/matches/contest?",
                b = "/fantasyplayer",
                I = "/contact-us",
                w = "https://api.coingecko.com/api/v3/simple/price?ids=internet-computer&vs_currencies=usd"
        },
        64486: function(e, t, n) {
            n.d(t, {
                B$: function() {
                    return U
                },
                BG: function() {
                    return B
                },
                C8: function() {
                    return k
                },
                IE: function() {
                    return w
                },
                IG: function() {
                    return E
                },
                IW: function() {
                    return S
                },
                Ie: function() {
                    return _
                },
                Ip: function() {
                    return y
                },
                KY: function() {
                    return D
                },
                LP: function() {
                    return q
                },
                Ng: function() {
                    return I
                },
                RH: function() {
                    return x
                },
                TP: function() {
                    return g
                },
                Tm: function() {
                    return T
                },
                Vk: function() {
                    return h
                },
                _V: function() {
                    return C
                },
                bs: function() {
                    return v
                },
                eF: function() {
                    return j
                },
                fI: function() {
                    return b
                },
                fc: function() {
                    return V
                },
                g$: function() {
                    return K
                },
                gn: function() {
                    return M
                },
                mf: function() {
                    return f
                },
                oC: function() {
                    return W
                },
                rN: function() {
                    return O
                },
                uq: function() {
                    return P
                },
                wp: function() {
                    return A
                },
                ym: function() {
                    return R
                }
            });
            var a, r, o, i, u, c, s, l, d, m, p, f, g, y, T, h, N, v, b, I, w, x, F = n(51725);
            (a = f || (f = {})).dev = "local", a.prod = "ic", a.stagging = "stagging", (r = g || (g = {})).upcoming = "0", r.ongoing = "1", r.finished = "2", (o = y || (y = {})).finished = "Match Finished", o.upcoming = "Not Started", o.ongoing = "Ongoing", o.postpond = "Match Postponed", (i = T || (T = {})).goalKeeper = "goalKeeper", i.defender = "defender", i.midfielder = "midfielder", i.forward = "forward", (u = h || (h = {})).playing = "playing", u.substitute = "substitute", u.notPlaying = "not-playing", u.waiting = "waiting", (c = N || (N = {})).gold = "Gold", c.bronze = "Bronze", c.free = "Free", (s = v || (v = {})).gold = "gold", s.bronze = "bronze", s.free = "free", (l = b || (b = {})).playing = "Playing", l.substitute = "Substitute", l.notPlaying = "Not Playing", (d = I || (I = {})).simple = "0", d.grouped = "1", (m = w || (w = {})).rules = "0", m.rewardDistribution = "1";
            let R = [{
                    key: "3",
                    value: "All"
                }, {
                    key: "0",
                    value: "Upcoming"
                }, {
                    key: "1",
                    value: "In Progress"
                }, {
                    key: "2",
                    value: "Completed"
                }],
                _ = {
                    goalKeeper: "Goalkeeper",
                    defender: "Defender",
                    midfielder: "Midfielder",
                    forward: "Forward"
                },
                P = {
                    goalKeeper: 2,
                    defender: 5,
                    midfielder: 5,
                    forward: 3
                },
                O = "0",
                V = 10,
                B = 1,
                k = 10,
                A = 6,
                q = 4,
                S = 10;
            (p = x || (x = {})).matchTab = "match_tab", p.squadId = "squadId", p.matchId = "matchId", p.tournamentId = "tournament", p.contestId = "contestId";
            let C = {
                    upcoming: "Join",
                    ongoing: "Match Live",
                    finished: "Match Finished",
                    participated: "Joined"
                },
                D = {
                    name: "FX League",
                    slots: 200,
                    entryFee: 100 * F.EZ,
                    teamsPerUser: 3,
                    rewardDistribution: [{
                        from: 1,
                        to: 1,
                        amount: 50
                    }, {
                        from: 2,
                        to: 2,
                        amount: 20
                    }, {
                        from: 3,
                        to: 3,
                        amount: 10
                    }, {
                        from: 4,
                        to: 20,
                        amount: 30
                    }],
                    paymentMethod: "ryjl3-tyaaa-aaaaa-aaaba-cai",
                    minCap: 1,
                    maxCap: 0,
                    providerId: "0",
                    isDistributed: !1,
                    rules: "Teams Per User = ".concat(3, ",\n          Entry Fee = ", 100, "\n")
                },
                U = {
                    matchId: null,
                    cap: "",
                    viceCap: "",
                    players: null,
                    formation: "3-4-3"
                },
                M = {
                    status: "0",
                    page: 0,
                    limit: 10,
                    search: ""
                },
                W = {
                    contest: 2e4,
                    ranking: 2e4
                },
                E = "Gold",
                j = 1e3,
                K = {
                    additionalTransfrom: 0,
                    arrows: !0,
                    autoPlay: !0,
                    autoPlaySpeed: 5e3,
                    centerMode: !1,
                    className: "",
                    containerClass: "container-with-dots",
                    dotListClass: "",
                    draggable: !0,
                    focusOnSelect: !1,
                    infinite: !0,
                    itemClass: "",
                    keyBoardControl: !0,
                    minimumTouchDrag: 80,
                    pauseOnHover: !0,
                    renderArrowsWhenDisabled: !1,
                    renderButtonGroupOutside: !1,
                    renderDotsOutside: !1,
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
                    rewind: !1,
                    rewindWithAnimation: !1,
                    rtl: !1,
                    shouldResetAutoplay: !0,
                    showDots: !1,
                    sliderClass: "",
                    slidesToSlide: 2,
                    swipeable: !0
                }
        },
        81095: function(e, t, n) {
            n.d(t, {
                v4: function() {
                    return i
                },
                XK: function() {
                    return u
                }
            });
            var a = n(20392);
            let r = e => {
                let {
                    IDL: t
                } = e, n = t.Text, a = t.Record({
                    committed: t.Int,
                    drawn: t.Int
                }), r = t.Record({
                    inside_box_saves: t.Int,
                    pen_won: t.Int,
                    pen_saved: t.Int,
                    minutes_played: t.Int,
                    clearances: t.Int,
                    interceptions: t.Int,
                    saves: t.Int,
                    dispossesed: t.Int,
                    aerials_won: t.Int,
                    punches: t.Int,
                    pen_committed: t.Int,
                    pen_scored: t.Int,
                    offsides: t.Int,
                    blocks: t.Int,
                    pen_missed: t.Int,
                    hit_woodwork: t.Int,
                    tackles: t.Int
                }), o = t.Record({
                    redcards: t.Int,
                    yellowredcards: t.Int,
                    yellowcards: t.Int
                }), i = t.Record({
                    shots_on_goal: t.Int,
                    shots_total: t.Int
                }), u = t.Record({
                    crosses_accuracy: t.Int,
                    passes_accuracy: t.Int,
                    total_crosses: t.Int,
                    accurate_passes: t.Int,
                    passes: t.Int,
                    key_passes: t.Int
                }), c = t.Record({
                    dribbled_past: t.Int,
                    attempts: t.Int,
                    success: t.Int
                }), s = t.Record({
                    assists: t.Int,
                    scored: t.Int,
                    conceded: t.Int,
                    owngoals: t.Int,
                    team_conceded: t.Int
                }), l = t.Record({
                    won: t.Int,
                    total: t.Int
                }), d = t.Record({
                    playerId: n,
                    stats: t.Record({
                        fouls: a,
                        other: r,
                        cards: o,
                        shots: i,
                        passing: u,
                        dribbles: c,
                        goals: s,
                        duels: l
                    }),
                    matchId: n,
                    rating: t.Text
                }), m = t.Record({
                    settingValue: t.Text,
                    settingName: t.Text,
                    settingType: t.Text
                }), p = t.Record({
                    to: t.Nat,
                    from: t.Nat,
                    amount: t.Int
                }), f = t.Text, g = t.Record({
                    paymentMethod: n,
                    isDistributed: t.Bool,
                    teamsPerUser: t.Nat,
                    name: t.Text,
                    minCap: t.Nat,
                    slots: t.Nat,
                    rewardDistribution: t.Vec(p),
                    matchId: n,
                    maxCap: t.Nat,
                    entryFee: t.Nat,
                    providerId: f,
                    rules: t.Text
                }), y = t.Variant({
                    ok: t.Text,
                    err: t.Text
                }), T = t.Record({
                    status: t.Text,
                    name: t.Text,
                    color: t.Text,
                    time: t.Int,
                    isActive: t.Bool,
                    entryFee: t.Nat
                }), h = t.Record({
                    country: t.Text,
                    endDate: t.Int,
                    name: t.Text,
                    description: t.Text,
                    providerId: f,
                    startDate: t.Int
                }), N = t.Record({
                    endDate: t.Int,
                    tournamentId: n,
                    providerId: f,
                    seasonName: t.Text,
                    startDate: t.Int
                }), v = t.Variant({
                    goalKeeper: t.Null,
                    midfielder: t.Null,
                    forward: t.Null,
                    defender: t.Null
                }), b = t.Record({
                    id: n,
                    country: t.Text,
                    name: t.Text,
                    fantasyPrice: t.Nat,
                    number: t.Nat,
                    photo: t.Text,
                    teamId: n,
                    position: v,
                    providerId: f
                }), I = t.Record({
                    id: t.Text,
                    logo: t.Text,
                    name: t.Text,
                    seasonId: n,
                    players: t.Vec(b),
                    shortName: t.Text,
                    providerId: f
                }), w = t.Text, x = t.Record({
                    id: t.Text,
                    status: w,
                    awayTeamName: t.Text,
                    time: t.Int,
                    seasonId: n,
                    homeTeamName: t.Text,
                    homeScore: t.Nat,
                    awayScore: t.Nat,
                    providerId: f,
                    location: t.Text
                }), F = t.Record({
                    status: w,
                    homeTeam: n,
                    time: t.Int,
                    seasonId: n,
                    homeScore: t.Nat,
                    awayTeam: n,
                    awayScore: t.Nat,
                    providerId: f,
                    location: t.Text
                }), R = t.Variant({
                    ok: t.Tuple(t.Text, F),
                    err: t.Tuple(t.Text, t.Bool)
                }), _ = t.Text, P = t.Nat, O = t.Nat, V = t.Nat64, B = t.Variant({
                    GenericError: t.Record({
                        message: t.Text,
                        error_code: t.Nat
                    }),
                    TemporarilyUnavailable: t.Null,
                    InsufficientAllowance: t.Record({
                        allowance: P
                    }),
                    BadBurn: t.Record({
                        min_burn_amount: P
                    }),
                    Duplicate: t.Record({
                        duplicate_of: O
                    }),
                    BadFee: t.Record({
                        expected_fee: P
                    }),
                    CreatedInFuture: t.Record({
                        ledger_time: V
                    }),
                    TooOld: t.Null,
                    InsufficientFunds: t.Record({
                        balance: P
                    })
                }), k = t.Variant({
                    ok: t.Text,
                    err: B
                }), A = t.Int, q = t.Record({
                    active: t.Bool,
                    country: t.Text,
                    name: t.Text,
                    fantasyPrice: t.Nat,
                    isPlaying: t.Bool,
                    number: t.Nat,
                    isSub: t.Bool,
                    photo: t.Text,
                    teamId: n,
                    position: v,
                    providerId: f,
                    points: t.Opt(A)
                }), S = t.Record({
                    cap: n,
                    formation: t.Text,
                    name: t.Text,
                    viceCap: n,
                    matchId: n,
                    players: t.Vec(t.Tuple(n, t.Bool))
                }), C = t.Record({
                    id: n,
                    country: t.Text,
                    name: t.Text,
                    fantasyPrice: t.Nat,
                    number: t.Nat,
                    photo: t.Text,
                    teamId: n,
                    position: v,
                    providerId: f
                }), D = t.Record({
                    id: n,
                    endDate: t.Int,
                    tournamentId: n,
                    providerId: f,
                    seasonName: t.Text,
                    startDate: t.Int
                }), U = t.Record({
                    logo: t.Text,
                    name: t.Text,
                    seasonId: n,
                    shortName: t.Text,
                    providerId: f
                }), M = t.Variant({
                    ok: t.Tuple(t.Text, t.Bool),
                    err: t.Tuple(t.Text, t.Bool)
                }), W = t.Record({
                    id: t.Text,
                    logo: t.Text,
                    name: t.Text,
                    seasonId: n,
                    shortName: t.Text,
                    providerId: f
                }), E = t.Record({
                    id: n,
                    country: t.Text,
                    endDate: t.Int,
                    name: t.Text,
                    description: t.Text,
                    providerId: f,
                    startDate: t.Int
                }), j = t.Record({
                    name: t.Text,
                    email: t.Text
                }), K = t.Variant({
                    admin: t.Null,
                    user: t.Null
                }), z = t.Record({
                    name: t.Text,
                    role: K,
                    joiningDate: t.Int,
                    email: t.Text
                }), G = t.Variant({
                    ok: t.Tuple(t.Text, t.Opt(z)),
                    err: t.Text
                }), Z = t.Variant({
                    ok: t.Tuple(t.Bool, t.Nat),
                    err: t.Tuple(t.Bool, t.Text)
                }), Y = t.Record({
                    last_modified_by: n,
                    settingValue: t.Text,
                    modification_date: t.Int,
                    settingName: t.Text,
                    settingType: t.Text,
                    creation_date: t.Int
                }), L = t.Record({
                    id: n,
                    status: w,
                    homeScore: t.Nat,
                    awayScore: t.Nat
                }), H = t.Record({
                    status: t.Text,
                    page: t.Nat,
                    search: t.Text,
                    limit: t.Nat
                }), J = t.Record({
                    last_modified_by: n,
                    settingValue: t.Text,
                    modification_date: t.Int,
                    settingName: t.Text,
                    settingType: t.Text,
                    creation_date: t.Int
                }), X = t.Vec(t.Tuple(n, J)), Q = t.Record({
                    total: t.Nat,
                    settings: X
                }), $ = t.Record({
                    name: t.Text,
                    role: K,
                    joiningDate: t.Int,
                    email: t.Text
                }), ee = t.Vec(t.Tuple(n, $)), et = t.Record({
                    contestId: n,
                    isRewarded: t.Bool,
                    userId: n,
                    rank: t.Nat,
                    squadId: n,
                    transactionId: n
                }), en = t.Vec(t.Tuple(n, et)), ea = t.Record({
                    creation_time: t.Int,
                    refferedBy: n,
                    refferedUserId: n
                }), er = t.Vec(t.Tuple(n, ea)), eo = t.Record({
                    participated: t.Nat,
                    contestWon: t.Nat,
                    rewardsWon: t.Nat,
                    totalEarning: t.Nat
                }), ei = t.Record({
                    paymentMethod: n,
                    isDistributed: t.Bool,
                    teamsPerUser: t.Nat,
                    name: t.Text,
                    creatorUserId: n,
                    winner: t.Opt(n),
                    minCap: t.Nat,
                    slots: t.Nat,
                    rewardDistribution: t.Vec(p),
                    matchId: n,
                    slotsUsed: t.Nat,
                    maxCap: t.Nat,
                    entryFee: t.Nat,
                    providerId: f,
                    rules: t.Text
                }), eu = t.Record({
                    id: t.Text,
                    status: t.Text,
                    name: t.Text,
                    color: t.Text,
                    time: t.Int,
                    isActive: t.Bool,
                    entryFee: t.Nat
                }), ec = t.Vec(eu), es = t.Record({
                    logo: t.Text,
                    name: t.Text,
                    seasonId: n,
                    shortName: t.Text,
                    providerId: f
                }), el = t.Record({
                    status: w,
                    homeTeam: t.Tuple(n, t.Opt(es)),
                    time: t.Int,
                    seasonId: n,
                    homeScore: t.Nat,
                    awayTeam: t.Tuple(n, t.Opt(es)),
                    awayScore: t.Nat,
                    providerId: f,
                    location: t.Text
                }), ed = t.Record({
                    paymentMethod: n,
                    isDistributed: t.Bool,
                    teamsPerUser: t.Nat,
                    name: t.Text,
                    creatorUserId: n,
                    winner: t.Opt(n),
                    minCap: t.Nat,
                    slots: t.Nat,
                    rewardDistribution: t.Vec(p),
                    matchId: n,
                    slotsUsed: t.Nat,
                    maxCap: t.Nat,
                    entryFee: t.Nat,
                    providerId: f,
                    rules: t.Text
                }), em = t.Vec(t.Tuple(n, ed)), ep = t.Record({
                    paymentMethod: n,
                    isDistributed: t.Bool,
                    teamsPerUser: t.Nat,
                    name: t.Text,
                    creatorUserId: n,
                    winner: t.Opt(n),
                    minCap: t.Nat,
                    slots: t.Nat,
                    rewardDistribution: t.Vec(p),
                    teamsCreatedOnContest: t.Nat,
                    matchId: n,
                    slotsUsed: t.Nat,
                    maxCap: t.Nat,
                    entryFee: t.Nat,
                    providerId: f,
                    rules: t.Text,
                    teamsJoinedContest: t.Nat
                }), ef = t.Vec(ep), eg = t.Record({
                    id: n,
                    status: w,
                    contests: ef,
                    homeTeam: n,
                    time: t.Int,
                    latest: t.Bool,
                    seasonId: n,
                    homeScore: t.Nat,
                    awayTeam: n,
                    awayScore: t.Nat,
                    providerId: n,
                    teamsCreated: t.Nat,
                    location: t.Text,
                    teamsJoined: t.Nat
                }), ey = t.Vec(eg), eT = t.Record({
                    total: t.Nat,
                    matches: ey
                }), eh = t.Record({
                    firstPrize: t.Nat,
                    paymentMethod: n,
                    isDistributed: t.Bool,
                    teamsPerUser: t.Nat,
                    name: t.Text,
                    awayTeamName: t.Text,
                    creatorUserId: n,
                    winner: t.Opt(n),
                    minCap: t.Nat,
                    slots: t.Nat,
                    rewardDistribution: t.Vec(p),
                    matchId: n,
                    homeTeamName: t.Text,
                    homeScore: t.Nat,
                    awayScore: t.Nat,
                    slotsUsed: t.Nat,
                    maxCap: t.Nat,
                    entryFee: t.Nat,
                    providerId: f,
                    rules: t.Text,
                    matchName: t.Text
                }), eN = t.Vec(t.Tuple(n, eh)), ev = t.Record({
                    total: t.Nat,
                    contests: eN
                }), eb = t.Record({
                    cap: n,
                    creation_time: t.Int,
                    matchTime: t.Int,
                    formation: t.Text,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    viceCap: n,
                    hasParticipated: t.Bool,
                    matchId: n,
                    points: A,
                    matchName: t.Text
                }), eI = t.Vec(t.Tuple(n, eb)), ew = t.Record({
                    teams: eI,
                    total: t.Nat
                }), ex = t.Record({
                    matchTime: t.Int,
                    contestId: n,
                    contestName: t.Text,
                    awayTeamLogo: t.Text,
                    rank: t.Nat,
                    awayTeamName: t.Text,
                    squadId: n,
                    matchId: n,
                    squadName: t.Text,
                    homeTeamLogo: t.Text,
                    homeTeamName: t.Text,
                    homeScore: t.Nat,
                    awayScore: t.Nat,
                    leagueName: t.Text
                }), eF = t.Record({
                    cap: n,
                    creation_time: t.Int,
                    formation: t.Text,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    viceCap: n,
                    hasParticipated: t.Bool,
                    joinedContestsName: t.Vec(t.Text),
                    matchId: n,
                    points: A
                }), eR = t.Vec(t.Tuple(n, eF)), e_ = t.Record({
                    name: t.Text,
                    number: t.Int,
                    photo: t.Text
                }), eP = t.Record({
                    status: w,
                    homeTeam: t.Tuple(n, t.Opt(es)),
                    contestWinner: t.Opt(t.Tuple(n, $)),
                    mvps: t.Opt(t.Tuple(n, e_)),
                    time: t.Int,
                    seasonId: n,
                    matchId: n,
                    homeScore: t.Nat,
                    awayTeam: t.Tuple(n, t.Opt(es)),
                    awayScore: t.Nat,
                    providerId: f,
                    location: t.Text
                }), eO = t.Vec(eP), eV = t.Record({
                    total: t.Nat,
                    matches: eO
                }), eB = t.Record({
                    name: t.Text,
                    number: t.Int,
                    photo: t.Text
                }), ek = t.Record({
                    id: n,
                    status: w,
                    tournamentName: t.Text,
                    homeTeam: n,
                    time: t.Int,
                    seasonId: n,
                    homeScore: t.Nat,
                    awayTeam: n,
                    awayScore: t.Nat,
                    tournamentId: n,
                    providerId: f,
                    location: t.Text
                }), eA = t.Vec(ek), eq = t.Record({
                    total: t.Nat,
                    matches: eA
                }), eS = t.Record({
                    id: n,
                    status: w,
                    homeTeam: n,
                    time: t.Int,
                    seasonId: n,
                    homeScore: t.Nat,
                    awayTeam: n,
                    awayScore: t.Nat,
                    providerId: f,
                    location: t.Text
                }), eC = t.Record({
                    status: w,
                    homeTeam: n,
                    time: t.Int,
                    seasonId: n,
                    homeScore: t.Nat,
                    awayTeam: n,
                    awayScore: t.Nat,
                    providerId: f,
                    location: t.Text
                }), eD = t.Vec(t.Tuple(n, eC)), eU = t.Record({
                    firstPrize: t.Nat,
                    paymentMethod: n,
                    isDistributed: t.Bool,
                    teamsPerUser: t.Nat,
                    name: t.Text,
                    creatorUserId: n,
                    winner: t.Opt(n),
                    minCap: t.Nat,
                    slots: t.Nat,
                    rewardDistribution: t.Vec(p),
                    matchId: n,
                    slotsUsed: t.Nat,
                    maxCap: t.Nat,
                    entryFee: t.Nat,
                    providerId: f,
                    rules: t.Text
                }), eM = t.Record({
                    total: t.Nat,
                    contests: t.Vec(t.Tuple(_, eU))
                }), eW = t.Int, eE = t.Record({
                    active: t.Bool,
                    country: t.Text,
                    name: t.Text,
                    fantasyPrice: t.Nat,
                    isPlaying: t.Bool,
                    number: t.Nat,
                    isSub: t.Bool,
                    photo: t.Text,
                    teamId: n,
                    position: v,
                    providerId: f,
                    points: t.Opt(A)
                }), ej = t.Record({
                    cap: n,
                    creation_time: t.Int,
                    formation: t.Text,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    viceCap: n,
                    hasParticipated: t.Bool,
                    matchId: n,
                    players: t.Vec(t.Tuple(n, eE, t.Bool)),
                    ranks: t.Vec(t.Tuple(n, t.Nat)),
                    points: A
                }), eK = t.Record({
                    cap: n,
                    creation_time: t.Int,
                    formation: t.Text,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    viceCap: n,
                    hasParticipated: t.Bool,
                    matchId: n,
                    players: t.Vec(t.Tuple(n, eE, t.Bool)),
                    points: A
                }), ez = t.Vec(t.Tuple(n, eK)), eG = t.Record({
                    playerId: n,
                    stats: t.Record({
                        fouls: a,
                        other: r,
                        cards: o,
                        shots: i,
                        passing: u,
                        dribbles: c,
                        goals: s,
                        duels: l
                    }),
                    matchId: n,
                    rating: t.Text
                }), eZ = t.Record({
                    playerId: n,
                    name: t.Text,
                    stats: t.Record({
                        fouls: a,
                        other: r,
                        cards: o,
                        shots: i,
                        passing: u,
                        dribbles: c,
                        goals: s,
                        duels: l
                    }),
                    matchId: n,
                    rating: t.Text
                }), eY = t.Variant({
                    goalKeeper: t.Null,
                    midfielder: t.Null,
                    forward: t.Null,
                    defender: t.Null
                }), eL = t.Record({
                    active: t.Bool,
                    country: t.Text,
                    name: t.Text,
                    fantasyPrice: t.Nat,
                    isPlaying: t.Bool,
                    number: t.Nat,
                    isSub: t.Bool,
                    photo: t.Text,
                    teamId: n,
                    position: v,
                    providerId: f,
                    points: t.Opt(A)
                }), eH = t.Vec(t.Tuple(n, eL)), eJ = t.Variant({
                    ok: eH,
                    err: t.Text
                }), eX = t.Record({
                    d: t.Int,
                    f: t.Int,
                    g: t.Int,
                    m: t.Int
                }), eQ = t.Variant({
                    ok: t.Tuple(eH, eX),
                    err: t.Text
                }), e$ = t.Record({
                    cap: n,
                    creation_time: t.Int,
                    formation: t.Text,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    viceCap: n,
                    hasParticipated: t.Bool,
                    matchId: n,
                    players: t.Vec(t.Tuple(n, t.Bool)),
                    points: A
                }), e0 = t.Vec(t.Tuple(n, e$)), e1 = t.Record({
                    endDate: t.Int,
                    tournamentId: n,
                    providerId: f,
                    seasonName: t.Text,
                    startDate: t.Int
                }), e4 = t.Vec(t.Tuple(n, e1)), e2 = t.Record({
                    total: t.Nat,
                    seasons: e4
                }), e3 = t.Record({
                    cap: n,
                    creation_time: t.Int,
                    formation: t.Text,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    viceCap: n,
                    hasParticipated: t.Bool,
                    matchId: n,
                    players: t.Vec(t.Tuple(n, eE, t.Bool)),
                    points: A
                }), e6 = t.Record({
                    fouls: a,
                    other: r,
                    cards: o,
                    shots: i,
                    passing: u,
                    dribbles: c,
                    goals: s,
                    duels: l
                }), e5 = t.Vec(t.Tuple(n, es)), e7 = t.Variant({
                    ok: t.Tuple(e5, t.Nat),
                    err: t.Text
                }), e8 = t.Record({
                    participated: t.Nat,
                    contestWon: t.Nat,
                    rewardsWon: t.Nat,
                    totalEarning: t.Nat
                }), e9 = t.Record({
                    name: t.Text,
                    role: K,
                    assets: e8,
                    joiningDate: t.Int,
                    email: t.Text
                }), te = t.Vec(t.Tuple(n, e9)), tt = t.Record({
                    country: t.Text,
                    endDate: t.Int,
                    name: t.Text,
                    description: t.Text,
                    providerId: f,
                    startDate: t.Int
                }), tn = t.Vec(t.Tuple(n, tt)), ta = t.Record({
                    total: t.Nat,
                    tournaments: tn
                }), tr = t.Record({
                    name: t.Text,
                    rank: t.Nat,
                    role: K,
                    assets: e8,
                    joiningDate: t.Int,
                    email: t.Text
                }), to = t.Record({
                    creation_time: t.Int,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    matchId: n,
                    points: A
                }), ti = t.Record({
                    creation_time: t.Int,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    matchId: n,
                    points: A
                }), tu = t.Vec(t.Tuple(n, ti)), tc = t.Record({
                    userRank: t.Opt(t.Tuple(_, to)),
                    total: t.Nat,
                    rankings: tu
                }), ts = t.Text, tl = t.Record({
                    player: b,
                    playerId: f,
                    isActive: t.Bool,
                    teamId: f
                }), td = t.Record({
                    value: t.Text,
                    name: t.Text
                }), tm = t.Record({
                    status: t.Nat,
                    body: t.Vec(t.Nat8),
                    headers: t.Vec(td)
                }), tp = t.Record({
                    context: t.Vec(t.Nat8),
                    response: tm
                }), tf = t.Record({
                    status: t.Nat,
                    body: t.Vec(t.Nat8),
                    headers: t.Vec(td)
                }), tg = t.Record({
                    cap: n,
                    creation_time: t.Int,
                    formation: t.Text,
                    userId: n,
                    name: t.Text,
                    rank: t.Nat,
                    viceCap: n,
                    hasParticipated: t.Bool,
                    matchId: n,
                    players: t.Vec(t.Tuple(n, t.Bool)),
                    points: A
                }), ty = t.Variant({
                    ok: t.Record({
                        squad: t.Opt(tg),
                        message: t.Text
                    }),
                    err: t.Text
                }), tT = t.Record({
                    id: n,
                    isPlaying: t.Bool,
                    isSub: t.Bool
                });
                return t.Service({
                    _updatePlayersStats: t.Func([t.Vec(d)], [t.Vec(t.Bool)], []),
                    addAdminSetting: t.Func([m], [t.Bool], []),
                    addContest: t.Func([g], [y], []),
                    addContestType: t.Func([T], [t.Text], []),
                    addLeague: t.Func([h, N, t.Vec(I)], [], ["oneway"]),
                    addMatch: t.Func([x], [R], []),
                    addMatchToMvpsAdmin: t.Func([_], [], ["oneway"]),
                    addMatches: t.Func([t.Vec(x)], [t.Record({
                        err: t.Vec(t.Tuple(t.Bool, t.Text)),
                        succ: t.Vec(t.Tuple(t.Bool, F))
                    })], []),
                    addNewMatches: t.Func([t.Vec(x), _], [t.Record({
                        err: t.Vec(t.Tuple(t.Bool, t.Text)),
                        succ: t.Vec(t.Tuple(t.Bool, F))
                    })], []),
                    addParticipant: t.Func([_, _], [k], []),
                    addPlayer: t.Func([q], [], ["oneway"]),
                    addPlayerSquad: t.Func([S], [y], []),
                    addPlayerStats: t.Func([d], [t.Bool], []),
                    addPlayers: t.Func([t.Vec(C)], [], ["oneway"]),
                    addSeason: t.Func([N], [t.Bool], []),
                    addSeasons: t.Func([t.Vec(D)], [t.Bool], []),
                    addTeam: t.Func([U], [U], []),
                    addTeamLogo: t.Func([_, t.Text], [M], []),
                    addTeams: t.Func([t.Vec(W)], [t.Bool], []),
                    addTournament: t.Func([h], [], ["oneway"]),
                    addTournaments: t.Func([t.Vec(E)], [t.Bool], []),
                    addUser: t.Func([j, t.Opt(t.Text)], [G], []),
                    adminResetPlayerSquadByTeamIds: t.Func([t.Vec(_)], [], ["oneway"]),
                    airdropNFTs: t.Func([], [Z], []),
                    changeAllContestNames: t.Func([t.Record({
                        name: t.Text
                    })], [], ["oneway"]),
                    claimRewards: t.Func([], [k], []),
                    deleteAdminSetting: t.Func([t.Text], [t.Opt(Y)], []),
                    distributeRewards: t.Func([_, _], [k], []),
                    finishMatch: t.Func([L], [y], []),
                    getAdminRewards: t.Func([_], [t.Nat], ["query"]),
                    getAdminSetting: t.Func([t.Text], [t.Opt(Y)], ["query"]),
                    getAdminSettings: t.Func([H], [Q], ["query"]),
                    getAdmins: t.Func([], [ee], ["query"]),
                    getAllParticipants: t.Func([], [en], ["query"]),
                    getAllRefferals: t.Func([H], [t.Record({
                        total: t.Int,
                        refferrals: er
                    })], ["query"]),
                    getAssetsOfUser: t.Func([t.Text], [eo], ["query"]),
                    getBudget: t.Func([], [t.Opt(t.Text)], ["query"]),
                    getContest: t.Func([_], [t.Opt(ei)], ["query"]),
                    getContestNames: t.Func([t.Vec(_)], [t.Vec(t.Tuple(t.Text, t.Text))], ["query"]),
                    getContestTypes: t.Func([t.Bool], [ec], ["query"]),
                    getContestWinnerOfMatch: t.Func([_], [t.Opt(t.Tuple(_, z))], ["query"]),
                    getContestWithMatch: t.Func([_], [t.Opt(t.Record({
                        match: t.Opt(el),
                        contest: ei
                    }))], ["query"]),
                    getContestsByMatchId: t.Func([_], [em], ["query"]),
                    getContestsWinnerUserByMatchId: t.Func([_], [t.Opt(t.Tuple(_, z))], ["query"]),
                    getDatedUpcomingMatches: t.Func([t.Nat, t.Nat], [t.Vec(F)], ["query"]),
                    getDetailedMatchesContests: t.Func([H], [eT], ["query"]),
                    getEligibleUserAndNFTsCount: t.Func([], [t.Record({
                        eligibleUsersForNFTsAirdrop: t.Nat,
                        totalNftsWhichUsersHave: t.Nat
                    })], ["query"]),
                    getFilterdContests: t.Func([H], [ev], ["query"]),
                    getFilterdRawPlayerSquadsByMatch: t.Func([t.Opt(_), t.Opt(_), H], [ew], ["query"]),
                    getJoinedContests: t.Func([], [eN], ["query"]),
                    getJoinedMatches: t.Func([_], [t.Record({
                        matchesCount: t.Int,
                        joinedMatches: t.Int
                    })], ["query"]),
                    getJoinedTeams: t.Func([H], [t.Record({
                        result: t.Vec(ex),
                        total: t.Nat
                    })], ["query"]),
                    getListPlayerSquadsByMatch: t.Func([_, t.Opt(_)], [eR], ["query"]),
                    getMVPSMatches: t.Func([H], [eV], ["query"]),
                    getMVPSOfmatch: t.Func([_], [t.Opt(t.Tuple(_, eB))], ["query"]),
                    getMatch: t.Func([_], [t.Opt(el)], ["query"]),
                    getMatches: t.Func([H, t.Opt(t.Int)], [eq], ["query"]),
                    getMatchesByDateLimit: t.Func([t.Nat, H], [t.Vec(eS)], ["query"]),
                    getMatchesByTeamId: t.Func([_], [eD], ["query"]),
                    getMatchesWithTournamentId: t.Func([H, t.Opt(t.Int), t.Opt(_)], [eq], ["query"]),
                    getPaginatedContestsByMatchId: t.Func([_, H], [eM], ["query"]),
                    getParticipants: t.Func([_], [en], ["query"]),
                    getPlayer: t.Func([_], [t.Opt(q)], ["query"]),
                    getPlayerIdsByTeamIds: t.Func([t.Vec(_)], [t.Vec(_)], ["query"]),
                    getPlayerPoints: t.Func([_, _], [t.Opt(eW)], ["query"]),
                    getPlayerSquad: t.Func([_], [t.Opt(ej)], ["query"]),
                    getPlayerSquadsByMatch: t.Func([_], [ez], ["query"]),
                    getPlayerStats: t.Func([_, _], [t.Opt(eG)], ["query"]),
                    getPlayerStatsByMatchId: t.Func([_], [t.Vec(t.Tuple(_, eZ))], ["query"]),
                    getPlayersByPosition: t.Func([eY], [eJ], ["query"]),
                    getPlayersByTeamId: t.Func([_], [eQ], ["query"]),
                    getPlayersByTeamIds: t.Func([t.Vec(_)], [eQ], ["query"]),
                    getRawMatch: t.Func([_], [t.Opt(F)], ["query"]),
                    getRawPlayerSquadsByMatch: t.Func([t.Opt(_), t.Opt(_)], [e0], ["query"]),
                    getRewardPercentage: t.Func([], [t.Nat], ["query"]),
                    getRewards: t.Func([], [t.Nat], ["query"]),
                    getRewardsTable: t.Func([t.Record({
                        slotsUsed: t.Nat,
                        entryFee: t.Nat,
                        props: H
                    })], [t.Record({
                        map: t.Vec(t.Tuple(t.Nat, t.Nat)),
                        total: t.Nat
                    })], []),
                    getSeasonByProvider: t.Func([f, f], [t.Opt(D)], ["query"]),
                    getSeasons: t.Func([_], [e4], ["query"]),
                    getSeasonsN: t.Func([_, H], [e2], ["query"]),
                    getSquadWithPoints: t.Func([_], [t.Opt(e3)], ["query"]),
                    getStatsSystem: t.Func([], [e6], []),
                    getTeamById: t.Func([_], [t.Opt(U)], ["query"]),
                    getTeamByName: t.Func([t.Text], [t.Opt(t.Tuple(_, U))], ["query"]),
                    getTeamsBySeason: t.Func([_], [e7], ["query"]),
                    getTeamsByTournament: t.Func([_], [e7], ["query"]),
                    getTopPlayers: t.Func([t.Record({
                        page: t.Nat,
                        search: t.Text,
                        limit: t.Nat
                    })], [t.Record({
                        total: t.Nat,
                        players: te
                    })], ["query"]),
                    getTournamentByProvider: t.Func([f], [t.Opt(E)], ["query"]),
                    getTournaments: t.Func([], [tn], ["query"]),
                    getTournamentsN: t.Func([H], [ta], ["query"]),
                    getUpcomingMatches: t.Func([H, t.Nat], [eq], ["query"]),
                    getUser: t.Func([t.Opt(t.Text)], [t.Opt(z)], ["query"]),
                    getUserNfts: t.Func([_], [t.Nat], ["query"]),
                    getUserRank: t.Func([_], [t.Opt(tr)], ["query"]),
                    increaseContestWon: t.Func([t.Record({
                        id: _,
                        assetsVal: t.Opt(t.Nat)
                    })], [t.Bool], []),
                    increaseParticipant: t.Func([t.Record({
                        id: _,
                        assetsVal: t.Opt(t.Nat)
                    })], [t.Bool], []),
                    increaseRewardsWon: t.Func([t.Record({
                        id: _,
                        assetsVal: t.Opt(t.Nat)
                    })], [t.Bool], []),
                    increaseTotalEarning: t.Func([t.Record({
                        id: _,
                        assetsVal: t.Opt(t.Nat)
                    })], [t.Bool], []),
                    makeAdmin: t.Func([t.Principal], [t.Bool], []),
                    nDistributeRewards: t.Func([_, _], [k], []),
                    nGetSquadRanking: t.Func([_, H], [tc], ["query"]),
                    postponeMatch: t.Func([_, ts], [t.Bool], []),
                    reScheduleMatch: t.Func([_, ts], [t.Bool], []),
                    removeContest: t.Func([_], [t.Opt(ei)], []),
                    resetAndPopulateMatchDateIndex: t.Func([], [], []),
                    rewardWinner: t.Func([_, _], [t.Text], []),
                    testingGetMatches: t.Func([], [eD], ["query"]),
                    testingGetPlayerSquads: t.Func([], [t.Record({
                        squads: e0,
                        amount: t.Nat
                    })], ["query"]),
                    testingGetPlayersByProviderId: t.Func([f], [t.Vec(t.Tuple(_, q))], []),
                    testingGetRewardPercentages: t.Func([], [t.Record({
                        platformPercentage: t.Nat,
                        rewardableUsersPercentage: t.Nat
                    })], []),
                    testingGetSeasons: t.Func([], [t.Record({
                        seasons: e4,
                        amount: t.Nat
                    })], ["query"]),
                    testingGetTeamByProviderId: t.Func([f], [t.Opt(t.Tuple(_, U))], []),
                    testingIncreaseMatchTime: t.Func([_], [t.Opt(F)], []),
                    testingRemove: t.Func([], [], ["oneway"]),
                    testingStartMatch: t.Func([_, t.Nat], [t.Opt(F)], []),
                    transferPlayers: t.Func([t.Vec(tl)], [t.Vec(t.Text)], []),
                    transform: t.Func([tp], [tf], ["query"]),
                    updateAdminSetting: t.Func([m], [t.Bool], []),
                    updateContest: t.Func([g, _], [y], []),
                    updateContestType: t.Func([_, T], [t.Opt(T)], []),
                    updateMatchScore: t.Func([L], [t.Bool], []),
                    updateMatchStatus: t.Func([ts, _], [t.Bool], []),
                    updatePlayerPrices: t.Func([t.Vec(t.Record({
                        id: _,
                        fantasyPrice: t.Nat
                    }))], [t.Bool], []),
                    updatePlayerSquad: t.Func([_, S], [ty], []),
                    updatePlayerStatus: t.Func([t.Vec(tT)], [t.Vec(t.Bool)], []),
                    updatePlayersStats: t.Func([t.Vec(d)], [t.Vec(t.Bool)], []),
                    updateRanking: t.Func([_], [], ["oneway"]),
                    updateStatsSysteam: t.Func([e6], [t.Bool], []),
                    updateUser: t.Func([j], [G], []),
                    whoami: t.Func([], [t.Text], ["query"])
                })
            };
            var o = n(20357);
            let i = "wtxyj-3qaaa-aaaam-ac7ja-cai",
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.agent || new a.HttpAgent({ ...t.agentOptions
                        });
                    return t.agent && t.agentOptions && console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."), "ic" !== o.env.DFX_NETWORK && n.fetchRootKey().catch(e => {
                        console.warn("Unable to fetch root key. Check to ensure that your local replica is running"), console.error(e)
                    }), a.Actor.createActor(r, {
                        agent: n,
                        canisterId: e,
                        ...t.actorOptions
                    })
                };
            i && u(i)
        },
        14234: function(e, t, n) {
            n.d(t, {
                jb: function() {
                    return f
                },
                nE: function() {
                    return g
                },
                s7: function() {
                    return T
                },
                ex: function() {
                    return y
                }
            });
            var a = n(20392);
            let r = e => {
                let {
                    IDL: t
                } = e, n = t.Vec(t.Nat8), a = t.Record({
                    owner: t.Principal,
                    subaccount: t.Opt(n)
                }), r = t.Record({
                    icrc2: t.Bool
                }), o = t.Record({
                    maximum_number_of_accounts: t.Opt(t.Nat64),
                    icrc1_minting_account: t.Opt(a),
                    feature_flags: t.Opt(r)
                }), i = t.Record({
                    e8s: t.Nat64
                }), u = t.Text, c = t.Record({
                    secs: t.Nat64,
                    nanos: t.Nat32
                }), s = t.Record({
                    num_blocks_to_archive: t.Nat64,
                    trigger_threshold: t.Nat64,
                    max_message_size_bytes: t.Opt(t.Nat64),
                    cycles_for_archive_creation: t.Opt(t.Nat64),
                    node_max_memory_size_bytes: t.Opt(t.Nat64),
                    controller_id: t.Principal
                }), l = t.Record({
                    send_whitelist: t.Vec(t.Principal),
                    token_symbol: t.Opt(t.Text),
                    transfer_fee: t.Opt(i),
                    minting_account: u,
                    maximum_number_of_accounts: t.Opt(t.Nat64),
                    accounts_overflow_trim_quantity: t.Opt(t.Nat64),
                    transaction_window: t.Opt(c),
                    max_message_size_bytes: t.Opt(t.Nat64),
                    icrc1_minting_account: t.Opt(a),
                    archive_options: t.Opt(s),
                    initial_values: t.Vec(t.Tuple(u, i)),
                    token_name: t.Opt(t.Text),
                    feature_flags: t.Opt(r)
                });
                t.Variant({
                    Upgrade: t.Opt(o),
                    Init: l
                });
                let d = t.Vec(t.Nat8),
                    m = t.Record({
                        account: d
                    }),
                    p = t.Record({
                        account: u
                    }),
                    f = t.Record({
                        canister_id: t.Principal
                    }),
                    g = t.Record({
                        archives: t.Vec(f)
                    }),
                    y = t.Nat,
                    T = t.Variant({
                        Int: t.Int,
                        Nat: t.Nat,
                        Blob: t.Vec(t.Nat8),
                        Text: t.Text
                    }),
                    h = t.Nat64,
                    N = t.Record({
                        to: a,
                        fee: t.Opt(y),
                        memo: t.Opt(t.Vec(t.Nat8)),
                        from_subaccount: t.Opt(n),
                        created_at_time: t.Opt(h),
                        amount: y
                    }),
                    v = t.Nat,
                    b = t.Variant({
                        GenericError: t.Record({
                            message: t.Text,
                            error_code: t.Nat
                        }),
                        TemporarilyUnavailable: t.Null,
                        BadBurn: t.Record({
                            min_burn_amount: y
                        }),
                        Duplicate: t.Record({
                            duplicate_of: v
                        }),
                        BadFee: t.Record({
                            expected_fee: y
                        }),
                        CreatedInFuture: t.Record({
                            ledger_time: t.Nat64
                        }),
                        TooOld: t.Null,
                        InsufficientFunds: t.Record({
                            balance: y
                        })
                    }),
                    I = t.Variant({
                        Ok: v,
                        Err: b
                    }),
                    w = t.Record({
                        account: a,
                        spender: a
                    }),
                    x = t.Record({
                        timestamp_nanos: t.Nat64
                    }),
                    F = t.Record({
                        allowance: y,
                        expires_at: t.Opt(x)
                    }),
                    R = t.Record({
                        fee: t.Opt(y),
                        memo: t.Opt(t.Vec(t.Nat8)),
                        from_subaccount: t.Opt(n),
                        created_at_time: t.Opt(x),
                        amount: y,
                        expected_allowance: t.Opt(y),
                        expires_at: t.Opt(x),
                        spender: a
                    }),
                    _ = t.Variant({
                        GenericError: t.Record({
                            message: t.Text,
                            error_code: t.Nat
                        }),
                        TemporarilyUnavailable: t.Null,
                        Duplicate: t.Record({
                            duplicate_of: v
                        }),
                        BadFee: t.Record({
                            expected_fee: y
                        }),
                        AllowanceChanged: t.Record({
                            current_allowance: y
                        }),
                        CreatedInFuture: t.Record({
                            ledger_time: t.Nat64
                        }),
                        TooOld: t.Null,
                        Expired: t.Record({
                            ledger_time: t.Nat64
                        }),
                        InsufficientFunds: t.Record({
                            balance: y
                        })
                    }),
                    P = t.Variant({
                        Ok: v,
                        Err: _
                    }),
                    O = t.Nat64,
                    V = t.Record({
                        start: O,
                        length: t.Nat64
                    }),
                    B = t.Nat64,
                    k = t.Variant({
                        Approve: t.Record({
                            fee: i,
                            from: d,
                            allowance_e8s: t.Int,
                            allowance: i,
                            expires_at: t.Opt(x),
                            spender: d
                        }),
                        Burn: t.Record({
                            from: d,
                            amount: i,
                            spender: t.Opt(d)
                        }),
                        Mint: t.Record({
                            to: d,
                            amount: i
                        }),
                        Transfer: t.Record({
                            to: d,
                            fee: i,
                            from: d,
                            amount: i
                        }),
                        TransferFrom: t.Record({
                            to: d,
                            fee: i,
                            from: d,
                            amount: i,
                            spender: d
                        })
                    }),
                    A = t.Record({
                        memo: B,
                        icrc1_memo: t.Opt(t.Vec(t.Nat8)),
                        operation: t.Opt(k),
                        created_at_time: x
                    }),
                    q = t.Record({
                        transaction: A,
                        timestamp: x,
                        parent_hash: t.Opt(t.Vec(t.Nat8))
                    }),
                    S = t.Record({
                        blocks: t.Vec(q)
                    }),
                    C = t.Variant({
                        BadFirstBlockIndex: t.Record({
                            requested_index: O,
                            first_valid_index: O
                        }),
                        Other: t.Record({
                            error_message: t.Text,
                            error_code: t.Nat64
                        })
                    }),
                    D = t.Variant({
                        Ok: S,
                        Err: C
                    }),
                    U = t.Func([V], [D], ["query"]),
                    M = t.Record({
                        callback: U,
                        start: O,
                        length: t.Nat64
                    }),
                    W = t.Record({
                        certificate: t.Opt(t.Vec(t.Nat8)),
                        blocks: t.Vec(q),
                        chain_length: t.Nat64,
                        first_block_index: O,
                        archived_blocks: t.Vec(M)
                    }),
                    E = t.Record({
                        callback: t.Func([V], [t.Variant({
                            Ok: t.Vec(t.Vec(t.Nat8)),
                            Err: C
                        })], ["query"]),
                        start: t.Nat64,
                        length: t.Nat64
                    }),
                    j = t.Record({
                        certificate: t.Opt(t.Vec(t.Nat8)),
                        blocks: t.Vec(t.Vec(t.Nat8)),
                        chain_length: t.Nat64,
                        first_block_index: t.Nat64,
                        archived_blocks: t.Vec(E)
                    }),
                    K = t.Record({
                        to: u,
                        fee: i,
                        memo: B,
                        from_subaccount: t.Opt(n),
                        created_at_time: t.Opt(x),
                        amount: i
                    }),
                    z = t.Record({
                        to: d,
                        fee: i,
                        memo: B,
                        from_subaccount: t.Opt(n),
                        created_at_time: t.Opt(x),
                        amount: i
                    }),
                    G = t.Variant({
                        TxTooOld: t.Record({
                            allowed_window_nanos: t.Nat64
                        }),
                        BadFee: t.Record({
                            expected_fee: i
                        }),
                        TxDuplicate: t.Record({
                            duplicate_of: O
                        }),
                        TxCreatedInFuture: t.Null,
                        InsufficientFunds: t.Record({
                            balance: i
                        })
                    }),
                    Z = t.Variant({
                        Ok: O,
                        Err: G
                    }),
                    Y = t.Record({}),
                    L = t.Record({
                        transfer_fee: i
                    });
                return t.Service({
                    account_balance: t.Func([m], [i], ["query"]),
                    account_balance_dfx: t.Func([p], [i], ["query"]),
                    archives: t.Func([], [g], ["query"]),
                    decimals: t.Func([], [t.Record({
                        decimals: t.Nat32
                    })], ["query"]),
                    icrc1_balance_of: t.Func([a], [y], ["query"]),
                    icrc1_decimals: t.Func([], [t.Nat8], ["query"]),
                    icrc1_fee: t.Func([], [y], ["query"]),
                    icrc1_metadata: t.Func([], [t.Vec(t.Tuple(t.Text, T))], ["query"]),
                    icrc1_minting_account: t.Func([], [t.Opt(a)], ["query"]),
                    icrc1_name: t.Func([], [t.Text], ["query"]),
                    icrc1_supported_standards: t.Func([], [t.Vec(t.Record({
                        url: t.Text,
                        name: t.Text
                    }))], ["query"]),
                    icrc1_symbol: t.Func([], [t.Text], ["query"]),
                    icrc1_total_supply: t.Func([], [y], ["query"]),
                    icrc1_transfer: t.Func([N], [I], []),
                    icrc2_allowance: t.Func([w], [F], ["query"]),
                    icrc2_approve: t.Func([R], [P], []),
                    name: t.Func([], [t.Record({
                        name: t.Text
                    })], ["query"]),
                    query_blocks: t.Func([V], [W], ["query"]),
                    query_encoded_blocks: t.Func([V], [j], ["query"]),
                    send_dfx: t.Func([K], [O], []),
                    symbol: t.Func([], [t.Record({
                        symbol: t.Text
                    })], ["query"]),
                    transfer: t.Func([z], [Z], []),
                    transfer_fee: t.Func([Y], [L], ["query"])
                })
            };
            var o = n(20357);
            let i = "a4h2j-nqaaa-aaaam-ac3oq-cai",
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.agent || new a.HttpAgent({ ...t.agentOptions
                        });
                    return t.agent && t.agentOptions && console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."), "ic" !== o.env.DFX_NETWORK && n.fetchRootKey().catch(e => {
                        console.warn("Unable to fetch root key. Check to ensure that your local replica is running"), console.error(e)
                    }), a.Actor.createActor(r, {
                        agent: n,
                        canisterId: e,
                        ...t.actorOptions
                    })
                };
            i && u(i);
            var c = n(81095);
            let s = e => {
                let {
                    IDL: t
                } = e, n = t.Variant({
                    receive: t.Null,
                    pending: t.Null,
                    send: t.Null,
                    rejected: t.Null
                }), a = t.Nat, r = t.Record({
                    to: t.Principal,
                    title: t.Text,
                    contestId: t.Text,
                    transaction_type: n,
                    from: t.Principal,
                    user: t.Principal,
                    created_at_time: t.Int,
                    amount: a
                }), o = t.Variant({
                    ok: t.Text,
                    err: t.Tuple(t.Text, t.Bool)
                }), i = t.Record({
                    contestId: t.Opt(t.Text),
                    userId: t.Opt(t.Principal),
                    page: t.Nat,
                    limit: t.Nat
                }), u = t.Text, c = t.Record({
                    to: t.Principal,
                    title: t.Text,
                    contestId: t.Text,
                    transaction_type: n,
                    from: t.Principal,
                    user: t.Principal,
                    created_at_time: t.Int,
                    amount: a
                }), s = t.Vec(t.Tuple(u, c)), l = t.Record({
                    total: t.Nat,
                    transaction: s
                }), d = t.Vec(t.Tuple(u, c));
                return t.Service({
                    addTransaction: t.Func([r, t.Opt(t.Text)], [o], []),
                    getAllTransactions: t.Func([i], [l], ["query"]),
                    getMyTransactions: t.Func([t.Record({
                        contestId: t.Opt(t.Text),
                        page: t.Nat,
                        limit: t.Nat
                    })], [t.Record({
                        total: t.Nat,
                        transaction: d
                    })], ["query"]),
                    getTransaction: t.Func([t.Text], [t.Opt(r)], ["query"])
                })
            };
            var l = n(20357);
            let d = "wuw65-wiaaa-aaaam-ac7jq-cai",
                m = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.agent || new a.HttpAgent({ ...t.agentOptions
                        });
                    return t.agent && t.agentOptions && console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."), "ic" !== l.env.DFX_NETWORK && n.fetchRootKey().catch(e => {
                        console.warn("Unable to fetch root key. Check to ensure that your local replica is running"), console.error(e)
                    }), a.Actor.createActor(s, {
                        agent: n,
                        canisterId: e,
                        ...t.actorOptions
                    })
                };
            d && m(d), n(51313), n(29711), n(20357).env.CANISTER_ID_CKBTC_LEDGER;
            let p = (e, t, n) => {
                let a = {
                    host: "https://".concat("snxxs-viaaa-aaaam-acuba-cai", ".ic0.app")
                };
                return n ? n.agentOptions ? n.agentOptions.host = a.host : n.agentOptions = a : n = {
                    agentOptions: a
                }, t(e, n)
            };

            function f(e) {
                return p(c.v4, c.XK, e)
            }

            function g(e) {
                return p(d, m, e)
            }

            function y(e) {
                return p(i, u, e)
            }

            function T(e) {
                return p("ryjl3-tyaaa-aaaaa-aaaba-cai", u, e)
            }
        },
        92618: function(e, t, n) {
            n.d(t, {
                d2: function() {
                    return l
                },
                jj: function() {
                    return m
                },
                np: function() {
                    return d
                },
                sb: function() {
                    return s
                },
                uH: function() {
                    return p
                }
            });
            var a = n(14234),
                r = n(99903),
                o = n(18473),
                i = n(51725),
                u = n(81095),
                c = n(29711);
            async function s(e) {
                let t = await (0, a.s7)({
                        agentOptions: {
                            identity: e
                        }
                    }),
                    n = r.Ds.fromPrincipal({
                        principal: e.getPrincipal()
                    }),
                    u = parseInt((await t.account_balance({
                        account: n.bytes
                    })).e8s) / i.EZ;
                return (0, o.Z)(u, "blance"), u
            }
            async function l(e, t) {
                let n = await (0, a.ex)({
                    agentOptions: {
                        identity: t
                    }
                });
                if (!u.v4) return (0, o.Z)("no canister id"), !1;
                let r = c.Principal.fromText(u.v4),
                    i = await n.icrc2_approve({
                        amount: e,
                        spender: {
                            owner: r,
                            subaccount: []
                        },
                        fee: [],
                        memo: [],
                        from_subaccount: [],
                        created_at_time: [],
                        expected_allowance: [],
                        expires_at: []
                    });
                return (0, o.Z)(i), !!i.Ok || ((0, o.Z)(i, "errrr in approveal"), !1)
            }

            function d(e, t) {
                return t ? Number((e ? Number(e) / i.EZ : 0).toFixed(i.ku)) : e ? Number(e) / i.EZ : 0
            }

            function m(e, t) {
                return t ? Number((e ? Number(e) / i.EZ : 0).toFixed(i.Op)) : e ? Number(e) / i.EZ : 0
            }

            function p(e) {
                return Math.ceil(e * i.EZ)
            }
        },
        18473: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(64486);

            function r(e, t, n) {
                var r, o;
                ("ic" === a.mf.dev || "alpha" === a.mf.stagging) && (n ? console.log("%c ============== Error LOG \n", "color: #fffff0", "".concat(null === (r = window) || void 0 === r ? void 0 : r.location.pathname, "\n"), "=== ".concat(null != t ? t : "", "\n"), e) : console.log("%c ============== INFO LOG \n", "color: #22D3EE", "".concat(null === (o = window) || void 0 === o ? void 0 : o.location.pathname, "\n"), "=== ".concat(null != t ? t : "", "\n"), e))
            }
        },
        61507: function(e, t, n) {
            n.d(t, {
                tN: function() {
                    return u
                }
            });
            var a = n(39099),
                r = (e, t) => ({
                    auth: {
                        state: "initializing-auth",
                        connectedWithWeb2: !1,
                        actor: null,
                        client: null,
                        isLoading: !0,
                        identity: null,
                        agent: null
                    },
                    userAuth: {
                        name: "",
                        role: "",
                        userPerms: null,
                        email: "",
                        ckBalance: 0
                    },
                    setAuth: t => e(e => ({ ...e,
                        auth: t
                    })),
                    setUserAuth: t => e(e => ({ ...e,
                        userAuth: t
                    }))
                }),
                o = (e, t) => ({
                    entries: [],
                    setEntries: t => e(e => ({
                        entries: t
                    }))
                }),
                i = (e, t) => ({
                    isBlack: !1,
                    isOpen: "",
                    setIsBlack: t => e(e => ({
                        isBlack: t
                    })),
                    setIsOpen: t => e(e => ({
                        isOpen: t
                    }))
                });
            let u = (0, a.Ue)()((e, t) => ({ ...r(e, t)
            }));
            (0, a.Ue)((e, t) => ({ ...o(e, t)
            })), (0, a.Ue)((e, t) => ({ ...i(e, t)
            }))
        },
        28301: function(e, t) {
            t.Z = {
                src: "/_next/static/media/icon-bronze.23ebad16.png",
                height: 92,
                width: 80,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA30lEQVR42mOAge/H0nI+785++GtXWj5c8NXacIdLM50Pzy+3+l8davl/UZnr/xuTfY++nunjxHCzx/l/ubPCfwYG0T/V2VZ/GRgY/lR6af+/1+fxn2FbocU3WwOlf6tqpf+/O5/wf++G2v/2ugp/txdY/mDYWWT+jYFB+t+iXIX/jzZb/t+/xO8/A4Pw312lVt8ZbjTb/C91U/kfaC7/J1yD6Z+PNcOfKm/d/7d7gMbeaLByP99tdmp2keX/xgT7/3MLnP9f7PU+c63dzZMBBr5sCit9tzH15fPlcRUwMQCh12iUDwDTEwAAAABJRU5ErkJggg==",
                blurWidth: 7,
                blurHeight: 8
            }
        },
        97578: function(e, t) {
            t.Z = {
                src: "/_next/static/media/icon-free.af16b53d.png",
                height: 96,
                width: 84,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA4klEQVR42mOAgcZHnmXVt12eFV+zz2OAgdbH3m6VN91Ohe03+O+xVf1/4G7d/0nHzI7EHdFzYGh54PPffBPDf4ZZDH8YFjP8A+I/RhsZ/scdNPzLEHqC4efsY7P+nr5/6v/+m3v/n7h37P+iM/P+6W9i+MQQfJzh58yj0//uu7bv/6k7p/9fun/p/6rzK/6rbGD4yJB33ua/xTaG/wyrGP7IbWD4Z7CF4Y/tNrb/HhsV/zPEHzLwiTxmcN59r/J/p51S/x12iv133CJ1ynqluBsDDPgf06rz3q/6xmmXchlMDACbU2t9UhyD8gAAAABJRU5ErkJggg==",
                blurWidth: 7,
                blurHeight: 8
            }
        },
        26119: function(e, t) {
            t.Z = {
                src: "/_next/static/media/icon-gold.73ed7434.png",
                height: 96,
                width: 84,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA4klEQVR42mOAgWcHwooe7Q199vJGRiFc8PGuQKcbS5yPHes2+7+72uD/4Rke/+/cyD/28kWJE8OdpU7/dxWr/l8VK/VnU77avznyDH/WN5j/v3cq4T/D2dn237aWaP47NMXh//UTSf+PzHD5v7HJ9t+hFt1vDGeXe35dH8317/H55P9P35T/f30m6/+WnrB/O/N5vzI8uJ71f2O77f+5iap/Fubr/ZsdLP1naaLC/yNNOv8ZbtzI87x6JuPs1nrz/0tipf+vzFD8v7NC4+zGQnVPhFd2BVZdm2X19lCbfhVMDACZ0nZKj4cgpwAAAABJRU5ErkJggg==",
                blurWidth: 7,
                blurHeight: 8
            }
        }
    }
]);