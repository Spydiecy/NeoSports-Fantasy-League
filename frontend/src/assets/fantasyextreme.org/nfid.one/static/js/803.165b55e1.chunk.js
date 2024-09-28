"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    [803], {
        63803: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => Re
            });
            var a = n(86169),
                i = n(63571),
                r = n(72234),
                s = n(11937),
                o = n(71080),
                c = n(41647),
                l = n(35858),
                d = n(84163),
                u = n(25103),
                g = n(84380),
                p = n(59464),
                m = n(63321);
            var h = n(77436);
            var v = n(82723),
                x = n(84525),
                f = n(86741),
                E = n(35176),
                y = n(4585);
            const R = {
                    jsonrpc: "2.0"
                },
                w = (0, f.R)(window, "message").pipe((0, E.p)((e => e.data && "2.0" === e.data.jsonrpc))),
                b = (0, l.O)({
                    id: "NFIDEmbedMachineV2",
                    preserveActionOrder: !0,
                    tsTypes: {},
                    type: "parallel",
                    schema: {
                        context: {},
                        events: {},
                        services: {}
                    },
                    context: {
                        messageQueue: [],
                        appMeta: {},
                        authRequest: {}
                    },
                    states: {
                        RPC_RECEIVER: {
                            invoke: {
                                src: "RPCReceiver"
                            },
                            order: 1,
                            entry: ["nfid_ready"],
                            on: {
                                RPC_MESSAGE: [{
                                    target: "RPC_RECEIVER",
                                    actions: "assignProcedure",
                                    cond: "isReady"
                                }, {
                                    target: "RPC_RECEIVER",
                                    actions: "queueRequest"
                                }]
                            }
                        },
                        AUTH: {
                            initial: "CheckAppMeta",
                            on: {
                                RESET: "AUTH.CheckAppMeta"
                            },
                            states: {
                                CheckAppMeta: {
                                    invoke: {
                                        src: "CheckApplicationMeta",
                                        onDone: {
                                            target: "CheckAuthentication",
                                            actions: "assignAppMeta"
                                        }
                                    }
                                },
                                CheckAuthentication: {
                                    invoke: {
                                        src: "CheckAuthState",
                                        onDone: {
                                            target: "Authenticated",
                                            actions: ["assignAuthSession", "nfid_authenticated"]
                                        },
                                        onError: "Authenticate"
                                    }
                                },
                                Authenticate: {
                                    invoke: {
                                        src: "AuthenticationMachine",
                                        data: e => e,
                                        onDone: [{
                                            target: "Authenticated",
                                            actions: "assignAuthSession"
                                        }]
                                    }
                                },
                                Authenticated: {
                                    entry: "nfid_authenticated",
                                    invoke: {
                                        src: () => e => {
                                            const {
                                                delegationIdentity: t
                                            } = g.wh.get();
                                            if (!t) return e("SESSION_EXPIRED");
                                            const n = (0, c.V)(t),
                                                a = .8 * n,
                                                i = Date.now();
                                            console.debug("NFIDEmbedMachineV2 delegation expires at", {
                                                expiresAt: new Date(i + n),
                                                timeoutAt: new Date(i + a)
                                            });
                                            const r = setTimeout((() => {
                                                console.debug("NFIDEmbedMachineV2 delegation expired"), e("SESSION_EXPIRED")
                                            }), a > u.x8 ? u.x8 : a);
                                            return () => clearTimeout(r)
                                        },
                                        onError: {
                                            target: "Authenticate",
                                            actions: "nfid_unauthenticated"
                                        }
                                    },
                                    on: {
                                        SESSION_EXPIRED: {
                                            target: "Authenticate",
                                            actions: "nfid_unauthenticated"
                                        }
                                    }
                                }
                            }
                        },
                        HANDLE_PROCEDURE: {
                            initial: "READY",
                            on: {
                                RESET: "HANDLE_PROCEDURE.READY"
                            },
                            states: {
                                READY: {
                                    always: [{
                                        target: "EXECUTE_PROCEDURE",
                                        cond: "isAutoApprovable"
                                    }, {
                                        target: "AWAIT_PROCEDURE_APPROVAL",
                                        cond: "hasProcedure"
                                    }]
                                },
                                AWAIT_PROCEDURE_APPROVAL: {
                                    on: {
                                        APPROVE: "EXECUTE_PROCEDURE",
                                        APPROVE_IC_GET_DELEGATION: "EXECUTE_PROCEDURE",
                                        APPROVE_IC_REQUEST_TRANSFER: "EXECUTE_PROCEDURE",
                                        CANCEL: {
                                            target: "READY",
                                            actions: ["sendRPCCancelResponse", "updateProcedure"]
                                        }
                                    }
                                },
                                EXECUTE_PROCEDURE: {
                                    invoke: {
                                        src: "ExecuteProcedureService",
                                        onDone: {
                                            actions: ["sendRPCResponse", "updateProcedure"],
                                            target: "READY"
                                        },
                                        onError: {
                                            target: "ERROR",
                                            actions: "assignError"
                                        }
                                    }
                                },
                                ERROR: {
                                    on: {
                                        RETRY: "AWAIT_PROCEDURE_APPROVAL",
                                        CANCEL_ERROR: {
                                            target: "READY",
                                            actions: ["sendRPCCancelResponse", "updateProcedure"]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    actions: {
                        assignAppMeta: (0, d.kp)(((e, t) => {
                            var n, a, i, r;
                            return {
                                appMeta: {
                                    logo: null === (n = t.data) || void 0 === n ? void 0 : n.logo,
                                    name: null === t || void 0 === t || null === (a = t.data) || void 0 === a ? void 0 : a.name,
                                    url: new URL(null === t || void 0 === t || null === (i = t.data) || void 0 === i ? void 0 : i.domain).host
                                },
                                authRequest: { ...e.authRequest,
                                    hostname: null === t || void 0 === t || null === (r = t.data) || void 0 === r ? void 0 : r.domain
                                }
                            }
                        })),
                        assignProcedure: (0, d.kp)(((e, t) => ({
                            rpcMessage: { ...t.data.rpcMessage,
                                origin: t.data.origin
                            },
                            authRequest: { ...e.authRequest,
                                sessionPublicKey: t.data.rpcMessage.params[0].sessionPublicKey,
                                derivationOrigin: t.data.rpcMessage.params[0].derivationOrigin,
                                maxTimeToLive: t.data.rpcMessage.params[0].maxTimeToLive,
                                targets: t.data.rpcMessage.params[0].targets
                            }
                        }))),
                        updateProcedure: (0, d.kp)((({
                            messageQueue: e
                        }, t) => ({
                            rpcMessage: e[0],
                            messageQueue: e.slice(1, e.length)
                        }))),
                        assignAuthSession: (0, d.kp)(((e, t) => (console.debug("assignAuthSession", {
                            event: t
                        }), {
                            authSession: t.data.authSession
                        }))),
                        queueRequest: (0, d.kp)(((e, t) => ({
                            messageQueue: [...e.messageQueue, t.data.rpcMessage]
                        }))),
                        assignError: (0, d.kp)(((e, t) => ({
                            error: t.data
                        }))),
                        nfid_ready: () => {
                            const e = window.location.ancestorOrigins ? window.location.ancestorOrigins[0] : window.document.referrer;
                            console.debug("nfid_ready", {
                                origin: e
                            }), window.parent.postMessage({
                                type: "nfid_ready"
                            }, e)
                        },
                        nfid_authenticated: () => {
                            const e = window.location.ancestorOrigins ? window.location.ancestorOrigins[0] : window.document.referrer;
                            console.debug("nfid_authenticated", {
                                origin: e
                            }), window.parent.postMessage({
                                type: "nfid_authenticated"
                            }, e)
                        },
                        nfid_unauthenticated: ({
                            rpcMessage: e
                        }) => {
                            if (null === e || void 0 === e || !e.origin) throw new Error("nfid_unauthenticated: missing requestOrigin");
                            console.debug("nfid_authenticated"), window.parent.postMessage({
                                type: "nfid_unauthenticated"
                            }, e.origin)
                        },
                        sendRPCResponse: (e, {
                            data: t
                        }) => {
                            const {
                                origin: n,
                                ...a
                            } = t;
                            console.debug("sendRPCResponse", {
                                rpcMessage: a
                            }), window.parent.postMessage(a, n)
                        },
                        sendRPCCancelResponse: ({
                            rpcMessage: e
                        }) => {
                            if (null === e || void 0 === e || !e.origin) throw new Error("nfid_unauthenticated: missing requestOrigin");
                            if (null === e || void 0 === e || !e.id) throw new Error("sendRPCCancelResponse: missing rpcMessage.id");
                            window.parent.postMessage({ ...R,
                                id: e.id,
                                error: {
                                    code: -1,
                                    message: "User canceled request"
                                }
                            }, e.origin)
                        }
                    },
                    guards: {
                        hasProcedure: e => !!e.rpcMessage,
                        isReady: (e, t, {
                            state: n
                        }) => n.matches("HANDLE_PROCEDURE.READY"),
                        isAutoApprovable: e => {
                            var t, n, a, i;
                            const r = ["ic_renewDelegation"].includes(null !== (t = null === (n = e.rpcMessage) || void 0 === n ? void 0 : n.method) && void 0 !== t ? t : "");
                            return console.debug("NFIDEmbedMachineV2", {
                                isAuthoApprovable: r,
                                context: e
                            }), ["ic_renewDelegation"].includes(null !== (a = null === (i = e.rpcMessage) || void 0 === i ? void 0 : i.method) && void 0 !== a ? a : "")
                        }
                    },
                    services: {
                        CheckApplicationMeta: async () => {
                            const e = (0, m.bd)(),
                                t = window.location.ancestorOrigins ? window.location.ancestorOrigins[0] : window.document.referrer,
                                n = { ...e,
                                    name: e.name || "application missing",
                                    domain: t
                                };
                            return console.debug("CheckApplicationMeta", {
                                applicationMeta: n
                            }), n
                        },
                        ExecuteProcedureService: async ({
                            rpcMessage: e,
                            authSession: t
                        }, n) => {
                            if (console.debug("ExecuteProcedureService", {
                                    rpcMessage: e,
                                    authSession: t
                                }), !e) throw new Error("ExecuteProcedureService: missing rpcMessage");
                            if (!t) throw new Error("ExecuteProcedureService: missing authSession");
                            const a = { ...R,
                                id: e.id,
                                origin: e.origin
                            };
                            switch (console.log({
                                rpcMessage: e,
                                event: n
                            }), e.method) {
                                case "ic_getDelegation":
                                    console.debug("ExecuteProcedureService ic_getDelegation", {
                                        rpcMessage: e
                                    });
                                    try {
                                        if ("APPROVE_IC_GET_DELEGATION" !== n.type) throw new Error("The event cannot be handled.");
                                        const e = n.data;
                                        if (e.status !== x.I.SUCCESS) throw new Error(`The delegation cannot be obtained: ${e.errorMessage}`);
                                        const t = e.authSession,
                                            i = [(0, g.oP)(t.signedDelegation)],
                                            r = t.userPublicKey;
                                        return { ...a,
                                            result: {
                                                delegations: i,
                                                userPublicKey: r
                                            }
                                        }
                                    } catch (i) {
                                        return { ...a,
                                            error: {
                                                code: 500,
                                                message: i.message
                                            }
                                        }
                                    }
                                case "ic_requestTransfer":
                                    try {
                                        if ("APPROVE_IC_REQUEST_TRANSFER" !== n.type) throw new Error("The event cannot be handled.");
                                        const e = n.data;
                                        if (e.status !== x.I.SUCCESS) throw new Error(`The request cannot be completed: ${e.errorMessage}`);
                                        return { ...a,
                                            result: {
                                                hash: e.hash
                                            }
                                        }
                                    } catch (i) {
                                        return { ...a,
                                            error: {
                                                code: 500,
                                                message: i.message
                                            }
                                        }
                                    }
                                case "ic_renewDelegation":
                                    console.debug("ExecuteProcedureService ic_renewDelegation", {
                                        rpcMessage: e
                                    });
                                    try {
                                        const {
                                            targets: t,
                                            sessionPublicKey: n,
                                            derivationOrigin: i
                                        } = e.params[0];
                                        console.debug("ExecuteProcedureService ic_renewDelegation", {
                                            targets: t,
                                            sessionPublicKey: n
                                        });
                                        const r = g.wh.get().delegationIdentity;
                                        if (!r) throw new Error("missing delegationIdentity");
                                        const s = await (0, g.AD)(r, i || e.origin, t, n),
                                            o = [(0, g.oP)(s)],
                                            c = new Uint8Array(s.publicKey);
                                        return { ...a,
                                            result: {
                                                delegations: o,
                                                userPublicKey: c
                                            }
                                        }
                                    } catch (r) {
                                        return console.error("ExecuteProcedureService ic_renewDelegation", {
                                            error: r
                                        }), { ...a,
                                            error: {
                                                code: 500,
                                                message: r.message
                                            }
                                        }
                                    }
                                case "ic_canisterCall":
                                    {
                                        const t = await (0, v.qC)(g.wh.get().delegationIdentity, v.sW.IC, [e.params[0].canisterId]);
                                        try {
                                            const n = await (0, g.TN)(e.params[0].derivationOrigin || e.origin, t, e.params[0].method, e.params[0].canisterId, e.params[0].parameters);
                                            return { ...a,
                                                result: n
                                            }
                                        } catch (r) {
                                            console.error("ExecuteProcedureService ic_canisterCall", {
                                                error: r
                                            });
                                            const e = JSON.parse(r.message);
                                            return "error" in e ? { ...a,
                                                error: {
                                                    code: 400,
                                                    message: e.error
                                                }
                                            } : { ...a,
                                                error: {
                                                    code: 500,
                                                    message: r.message
                                                }
                                            }
                                        }
                                    }
                                default:
                                    throw new Error("ExecuteProcedureService: unknown procedure")
                            }
                        },
                        AuthenticationMachine: p.A,
                        RPCReceiver: () => e => {
                            const t = w.subscribe((async ({
                                data: t,
                                origin: n
                            }) => {
                                switch (console.debug("RPCReceiverV2", {
                                    rpcMessage: t,
                                    origin: n
                                }), await (async (e, t) => {
                                    const n = e.params[0];
                                    if (n && n.derivationOrigin) {
                                        console.debug("validateRPCMessage", {
                                            derivationOrigin: n.derivationOrigin,
                                            origin: t
                                        });
                                        const a = await (0, y.I)(t, n.derivationOrigin);
                                        if ("invalid" === a.result) throw window.parent.postMessage({ ...R,
                                            id: e.id,
                                            error: {
                                                code: 400,
                                                message: a.message
                                            }
                                        }, t), new Error(a.message)
                                    }
                                })(t, n), t.method) {
                                    case "ic_renewDelegation":
                                    case "ic_canisterCall":
                                    case "ic_getDelegation":
                                    case "ic_requestTransfer":
                                        return console.debug(`RPCReceiverV2 ${t.method}`, {
                                            rpcMessage: t,
                                            origin: n
                                        }), e({
                                            type: "RPC_MESSAGE",
                                            data: {
                                                rpcMessage: t,
                                                origin: n
                                            }
                                        });
                                    default:
                                        throw new Error(`RPCReceiverV2 unknown method: ${t.method}`)
                                }
                            }));
                            return () => t.unsubscribe()
                        },
                        CheckAuthState: async () => {
                            let e;
                            console.debug("CheckAuthState");
                            try {
                                const {
                                    delegationIdentity: t
                                } = await g.wh.fromCache();
                                e = t
                            } catch {
                                throw console.debug("CheckAuthState: failed getting cache"), new Error("CheckAuthState: failed getting cache")
                            }
                            if (!e) throw new Error("CheckAuthState: no auth session in cache");
                            const {
                                anchor: t
                            } = await (0, h.eO)();
                            return {
                                authSession: {
                                    anchor: t,
                                    sessionSource: "cache",
                                    delegationIdentity: e
                                }
                            }
                        }
                    }
                });
            var A = n(53271),
                C = n(90392),
                P = n(46371),
                j = n(43143),
                I = n(51510),
                N = n(18490),
                S = n(80298),
                O = n(14128),
                T = n(89135),
                D = n(79455),
                k = n(36210),
                _ = n(2704),
                M = n(55935),
                U = n(3042);
            let q = function(e) {
                return e.FT = "ft", e.FT20 = "ft20", e.NFT = "nft", e
            }({});
            var L, B, V, F, W, H = n(36936),
                G = n(77041),
                Y = n(98674),
                $ = n(87182),
                z = n(91261),
                X = n(43520),
                J = n(605),
                K = n(2492),
                Q = n(62071),
                Z = n(38377),
                ee = n(88156),
                te = n(60636);
            let ne = (L = (0, G.Cache)(Z.s, {
                ttl: 120
            }), B = (0, G.Cache)(Z.s, {
                ttl: 120
            }), V = (0, G.Cache)(Z.s, {
                ttl: 180
            }), F = (0, G.Cache)(Z.s, {
                ttl: 60
            }), W = class {
                constructor(e) {
                    this.config = void 0, this.config = e
                }
                getTokenConfig(e) {
                    return this.config
                }
                getTokenCurrencies() {
                    return Promise.resolve([this.config.tokenStandard])
                }
                getNetworkOption() {
                    return {
                        title: this.config.blockchain,
                        icon: this.config.icon,
                        value: `${this.config.tokenStandard}&${this.config.blockchain}`
                    }
                }
                getTokensOptions() {
                    return Promise.resolve({
                        label: this.config.blockchain,
                        options: [{
                            icon: this.config.icon,
                            title: this.config.tokenStandard,
                            value: this.config.tokenStandard + "&" + this.config.blockchain,
                            subTitle: this.config.tokenStandard
                        }]
                    })
                }
                getTokenStandard() {
                    return this.config.tokenStandard
                }
                async getAllPrincipals(e) {
                    const t = await (0, g.Mv)();
                    return e ? t.reduce(((e, t) => (e[t.account.domain] ? e[t.account.domain].push(t) : e[t.account.domain] = [t], e)), {}) : t
                }
                async getProfile() {
                    return await (0, h.eO)()
                }
                async getAccounts(e = !1) {
                    const t = await (0, h.Tq)();
                    if (!e) return t;
                    return (await this.getApplications()).map(te.R).reduce(((e, t) => e.find((e => e.domain === t.domain && e.accountId === t.accountId)) ? e : [...e, t]), t)
                }
                async getApplications() {
                    return await (0, h.YL)()
                }
                async getRate(e) {
                    var t;
                    return null === (t = (await (new ee.d).getPrice([e])).find((t => t.token === e))) || void 0 === t ? void 0 : t.price
                }
                async getIdentity(e = "nfid.one", t = "0", n) {
                    return (0, k.R)(e, t, n)
                }
            }, (0, H.A)(W.prototype, "getProfile", [L], Object.getOwnPropertyDescriptor(W.prototype, "getProfile"), W.prototype), (0, H.A)(W.prototype, "getAccounts", [B], Object.getOwnPropertyDescriptor(W.prototype, "getAccounts"), W.prototype), (0, H.A)(W.prototype, "getApplications", [V], Object.getOwnPropertyDescriptor(W.prototype, "getApplications"), W.prototype), (0, H.A)(W.prototype, "getRate", [F], Object.getOwnPropertyDescriptor(W.prototype, "getRate"), W.prototype), W);
            var ae, ie, re;
            let se = (ae = (0, G.Cache)(Z.s, {
                ttl: 30
            }), ie = (0, G.Cache)(Z.s, {
                ttl: 10
            }), re = class extends ne {
                async getAccountsOptions({
                    isVault: e,
                    isRootOnly: t
                }) {
                    if (e) {
                        await (0, g.g0)(g.Z3, await (0, k.R)());
                        const e = await (0, J.E)("ICP"),
                            t = await (0, g.iF)(),
                            n = await Promise.all(t.map((e => e.id)).map((async e => await (0, g.dz)(e))));
                        return (await Promise.all(n.filter((e => e.length > 0)).map((async e => (0, z.GW)(e))))).map((e => e.map((e => {
                            var t;
                            return { ...e,
                                balance: {
                                    ICP: (0, K.Z)(Number(null === e || void 0 === e || null === (t = e.balance) || void 0 === t ? void 0 : t.ICP))
                                }
                            }
                        })))).map((n => {
                            var a, i;
                            return {
                                label: null !== (a = null === (i = t.find((e => e.id === n[0].vaults[0]))) || void 0 === i ? void 0 : i.name) && void 0 !== a ? a : "",
                                options: n.map((t => {
                                    var n, a, i, r, s;
                                    return {
                                        title: null !== (n = t.name) && void 0 !== n ? n : "",
                                        subTitle: (0, O.W5)(null !== (a = t.address) && void 0 !== a ? a : "", 6, 4),
                                        innerTitle: String(null === (i = t.balance) || void 0 === i ? void 0 : i.ICP) + " ICP",
                                        innerSubtitle: (0, O.Ub)(Number(null === (r = t.balance) || void 0 === r ? void 0 : r.ICP), e),
                                        value: null !== (s = t.address) && void 0 !== s ? s : ""
                                    }
                                }))
                            }
                        }))
                    }
                    let n = await this.getAllPrincipals(!0);
                    t && (n = {
                        "nfid.one": [n["nfid.one"].find((e => "-1" === e.account.accountId))]
                    });
                    const a = await this.getApplications(),
                        i = await Promise.all(Object.entries(n).map((async ([e, t]) => {
                            var n, i;
                            const r = await Promise.all(t.map((async ({
                                account: e,
                                principal: t
                            }) => {
                                const n = await this.getBalance(t.toString());
                                return {
                                    title: e.label.length ? e.label : (0, g.vj)(a, e.domain, e.accountId),
                                    subTitle: (0, O.W5)(C.nG.fromPrincipal({
                                        principal: t
                                    }).toHex(), 6, 4),
                                    value: t.toString(),
                                    innerTitle: (null === n || void 0 === n ? void 0 : n.toString()) + " " + this.config.tokenStandard,
                                    badgeText: "-1" === e.accountId ? "WALLET" : void 0
                                }
                            })));
                            return {
                                label: null !== (n = null === (i = a.find((t => t.domain === e))) || void 0 === i ? void 0 : i.name) && void 0 !== n ? n : e,
                                options: r
                            }
                        })));
                    return (0, Q.U)((({
                        label: e
                    }) => e), ["NFID", "NNS"])(i.sort((0, Q.u)((({
                        label: e
                    }) => e))))
                }
                async getBalance(e) {
                    const t = e.length === Y.gI ? C.nG.fromPrincipal({
                        principal: P.Principal.fromText(e)
                    }).toHex() : e;
                    return await (0, g.r1)(t)
                }
                getAddress(e, t) {
                    return Promise.resolve(t.getPrincipal().toString())
                }
                async transfer(e) {
                    if (!e.identity) throw new Error("Identity not found. Please try again");
                    console.debug("ICP Transfer request", {
                        request: e
                    });
                    try {
                        const t = "tokenId" in e ? await (0, X.BU)(e.tokenId, e.identity, e.to) : await (0, $.k)({
                            amount: (0, K.B)(String(e.amount)),
                            to: e.to,
                            ...e.memo ? {
                                memo: e.memo
                            } : {},
                            identity: e.identity
                        });
                        return setTimeout((() => {
                            "tokenId" in e ? (0, S.Tk)((e => e && Array.isArray(e) && "userTokens" === e[0])) : (0, S.Tk)((e => e && Array.isArray(e) && "AllBalanceRaw" === e[0]))
                        }), 1e3), {
                            hash: String(t)
                        }
                    } catch (t) {
                        return {
                            errorMessage: null !== t && void 0 !== t ? t : "Unknown error"
                        }
                    }
                }
            }, (0, H.A)(re.prototype, "getAccountsOptions", [ae], Object.getOwnPropertyDescriptor(re.prototype, "getAccountsOptions"), re.prototype), (0, H.A)(re.prototype, "getBalance", [ie], Object.getOwnPropertyDescriptor(re.prototype, "getBalance"), re.prototype), re);
            const oe = new class extends se {
                async getIdentity(e, t) {
                    const n = (await this.getAllPrincipals(!1)).find((t => t.principal.toString() === e));
                    if (!n) throw new Error("Account not found");
                    return await (0, k.R)(n.account.domain, n.account.accountId, t ? [...g.j4, t] : g.j4)
                }
                async getFee() {
                    return BigInt(T.yz)
                }
                async getDecimals() {
                    return T.OI
                }
                validateAddress(e) {
                    try {
                        return (0, _.Jh)(e), !0
                    } catch (t) {
                        return "Incorrect format of Principal"
                    }
                }
            }({
                icon: s.X3s,
                tokenStandard: M.u.ICP,
                feeCurrency: U.x.ICP,
                blockchain: U.J.IC,
                title: "Internet Computer",
                addressPlaceholder: "Recipient wallet address or account ID",
                type: q.FT,
                isNativeToken: !0,
                duration: "10 sec"
            });
            var ce = n(10338);
            const le = ({
                method: e,
                canisterID: t,
                args: n,
                onConfirm: a,
                onReject: i
            }) => {
                const r = new URL(origin).host,
                    {
                        data: o
                    } = (0, S.Ay)("globalIdentity", (() => (0, k.R)("nfid.one", "-1"))),
                    {
                        data: c
                    } = (0, S.Ay)(o ? ["userBalance", o.getPrincipal().toString()] : null, (([e, t]) => oe.getBalance(C.nG.fromPrincipal({
                        principal: P.Principal.fromText(t)
                    }).toHex())));
                return o ? (0, ce.jsx)(ce.Fragment, {
                    children: (0, ce.jsxs)(D.k, {
                        title: e,
                        subTitle: (0, ce.jsxs)(ce.Fragment, {
                            children: ["Request from", " ", (0, ce.jsx)("a", {
                                href: origin,
                                target: "_blank",
                                className: "text-[#146F68] no-underline",
                                rel: "noreferrer",
                                children: r
                            })]
                        }),
                        onPrimaryButtonClick: () => a(),
                        onSecondaryButtonClick: i,
                        withLogo: !0,
                        children: [(0, ce.jsxs)("div", {
                            className: (0, j.A)("rounded-xl border border-gray-200 px-3.5 py-2.5 flex-1 space-y-4", "text-gray-500 break-all text-sm mt-2.5", "overflow-auto max-h-[150px]"),
                            children: [(0, ce.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, ce.jsx)("p", {
                                    className: "font-bold",
                                    children: "Canister ID"
                                }), (0, ce.jsx)("p", {
                                    className: "",
                                    children: t
                                })]
                            }), (0, ce.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, ce.jsx)("p", {
                                    className: "font-bold",
                                    children: "Arguments"
                                }), (0, ce.jsx)("p", {
                                    className: "",
                                    children: n
                                })]
                            })]
                        }), (0, ce.jsxs)("div", {
                            className: (0, j.A)("grid grid-cols-[22px,1fr] gap-2.5 text-sm rounded-xl", "bg-orange-50 p-[15px] mt-4 text-orange-900"),
                            children: [(0, ce.jsx)(s.iqg, {
                                className: "text-orange-900 w-[22px] h-[22px] shrink-1"
                            }), (0, ce.jsxs)("p", {
                                children: [(0, ce.jsx)("span", {
                                    className: "font-bold leading-[20px]",
                                    children: "Proceed with caution."
                                }), " ", "Unable to verify the safety of this approval. Please make sure you trust this dapp."]
                            })]
                        }), c ? (0, ce.jsxs)("div", {
                            className: (0, j.A)("bg-gray-50 flex flex-col text-sm text-gray-500", "text-xs absolute bottom-0 left-0 w-full px-5 py-3 round-b-xl"),
                            children: [(0, ce.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, ce.jsx)("p", {
                                    children: "Wallet address"
                                }), (0, ce.jsx)("p", {
                                    children: "Balance:"
                                })]
                            }), (0, ce.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, ce.jsx)("p", {
                                    children: (0, O.W5)(o.getPrincipal().toString(), 6, 4)
                                }), (0, ce.jsx)("div", {
                                    className: "flex items-center space-x-0.5",
                                    children: void 0 !== c ? (0, ce.jsx)(N.B, {
                                        value: Number(c),
                                        decimals: T.OI,
                                        symbol: "ICP"
                                    }) : (0, ce.jsx)(I.y, {
                                        className: "w-3 h-3 text-gray-400"
                                    })
                                })]
                            })]
                        }) : null]
                    })
                }) : (0, ce.jsx)(s.GEI, {
                    isLoading: !0
                })
            };
            var de = n(43227),
                ue = n(10635),
                ge = n(10356),
                pe = n(28359),
                me = n(37907);
            const he = ({
                    identity: e,
                    balance: t,
                    isBalanceLoading: n
                }) => (0, ce.jsxs)("div", {
                    className: (0, j.A)("bg-gray-50 flex flex-col text-sm text-gray-500", "text-xs absolute bottom-0 left-0 w-full px-5 py-3 round-b-xl"),
                    children: [(0, ce.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, ce.jsx)("p", {
                            children: "Wallet address"
                        }), (0, ce.jsx)("p", {
                            children: "Balance"
                        })]
                    }), (0, ce.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, ce.jsx)("div", {
                            className: "lowercase",
                            children: null !== e && void 0 !== e && e.getPrincipal().toString() ? (0, O.W5)(null === e || void 0 === e ? void 0 : e.getPrincipal().toString(), 6, 4) : (0, ce.jsx)(s.EAD, {
                                className: "w-40 h-5 bg-gray-300"
                            })
                        }), (0, ce.jsx)("div", {
                            className: "flex items-center space-x-0.5",
                            children: (0, ce.jsx)("span", {
                                id: "balance",
                                children: void 0 === t || n ? (0, ce.jsx)(s.EAD, {
                                    className: "w-20 h-5 bg-gray-300"
                                }) : (0, ce.jsx)(N.B, {
                                    symbol: "ICP",
                                    value: Number(t),
                                    decimals: T.OI
                                })
                            })
                        })]
                    })]
                }),
                ve = ({
                    amount: e,
                    amountUSD: t
                }) => (0, ce.jsxs)("div", {
                    className: "flex flex-col mt-5 text-center",
                    children: [(0, ce.jsx)("p", {
                        id: "amountICP",
                        className: "text-[32px] font-medium",
                        children: e
                    }), (0, ce.jsx)("p", {
                        className: "text-sm text-gray-400",
                        children: t
                    })]
                }),
                xe = ({
                    nft: e
                }) => e ? (0, ce.jsxs)("div", {
                    className: "flex items-center h-20 mt-5 border border-gray-200 rounded-md",
                    children: [(0, ce.jsx)("img", {
                        className: "w-20 h-full rounded-[5px]",
                        src: e.assetPreview.url,
                        alt: ""
                    }), (0, ce.jsxs)("div", {
                        className: "ml-2.5 flex flex-col justify-center",
                        children: [(0, ce.jsx)("p", {
                            id: "NFTName",
                            className: "font-bold",
                            children: null === e || void 0 === e ? void 0 : e.name
                        }), (0, ce.jsx)("p", {
                            className: "text-sm text-gray-400",
                            children: null === e || void 0 === e ? void 0 : e.collection.name
                        })]
                    })]
                }) : (0, ce.jsxs)("div", {
                    className: "flex items-center h-20 mt-5 border border-gray-200 rounded-md",
                    children: [(0, ce.jsx)(s.EAD, {
                        className: "w-20 h-full rounded-[5px]"
                    }), (0, ce.jsxs)("div", {
                        className: "ml-2.5 flex flex-col justify-center space-y-2",
                        children: [(0, ce.jsx)(s.EAD, {
                            className: "w-[300px] h-5"
                        }), (0, ce.jsx)(s.EAD, {
                            className: "w-[200px] h-5"
                        })]
                    })]
                }),
                fe = ({
                    origin: e,
                    appMeta: t,
                    amount: n,
                    memo: a,
                    tokenId: i,
                    destinationAddress: o,
                    derivationOrigin: c,
                    onConfirmIC: l
                }) => {
                    var d, u, p, m, h, v;
                    const [f, E] = (0, r.useState)(void 0), {
                        user: y
                    } = (0, ge.u)(), {
                        data: R,
                        isLoading: w,
                        isValidating: b
                    } = (0, S.Ay)([null === y || void 0 === y ? void 0 : y.principal, "globalIdentity"], (() => (0, k.R)("nfid.one", "-1"))), {
                        data: A
                    } = (0, S.Ay)("usdRate", (() => g.$j.getICP2USD())), {
                        data: P,
                        isLoading: j,
                        isValidating: I
                    } = (0, S.Ay)(R ? ["userBalance", R] : null, (([e, t]) => oe.getBalance(C.nG.fromPrincipal({
                        principal: t.getPrincipal()
                    }).toHex()))), D = void 0 === P || j || I;
                    console.debug("RequestTransfer", {
                        isApproveButtonDisabled: D
                    });
                    const {
                        data: _
                    } = (0, S.Ay)(i && R ? ["nftDetails", i, R] : null, (([e, t, n]) => (0, me.qC)(t, n.getPrincipal().toString()))), {
                        data: M
                    } = (0, S.Ay)("requestFee", (() => oe.getFee()));
                    return M && "undefined" !== typeof A ? f ? (0, ce.jsx)(pe.N, {
                        initialPromise: f,
                        callback: e => l({
                            status: x.I.SUCCESS,
                            hash: null === e || void 0 === e ? void 0 : e.hash
                        }),
                        errorCallback: e => {
                            var t, n;
                            return l({
                                status: x.I.ERROR,
                                errorMessage: null !== (t = null === e || void 0 === e || null === (n = e.errorMessage) || void 0 === n ? void 0 : n.message) && void 0 !== t ? t : "Request failed"
                            })
                        },
                        title: null !== (d = null === _ || void 0 === _ ? void 0 : _.name) && void 0 !== d ? d : (Number(n) + Number(T.yz)) / T.JW + " ICP",
                        subTitle: null !== (u = null === _ || void 0 === _ ? void 0 : _.collection.name) && void 0 !== u ? u : (0, O.Ub)((Number(n) + Number(T.yz)) / T.JW, Number(A)),
                        assetImg: null !== (p = null !== (m = null === _ || void 0 === _ ? void 0 : _.assetPreview.url) && void 0 !== m ? m : null === (h = oe.getTokenConfig()) || void 0 === h ? void 0 : h.icon) && void 0 !== p ? p : "",
                        isAssetPadding: !i,
                        withToasts: !1
                    }) : (0, ce.jsxs)(ce.Fragment, {
                        children: [(0, ce.jsx)(ue.T, {
                            applicationURL: null !== (v = null === t || void 0 === t ? void 0 : t.url) && void 0 !== v ? v : t.name,
                            title: "Approve transfer",
                            subTitle: "Request from"
                        }), i ? (0, ce.jsx)(xe, {
                            nft: _
                        }) : (0, ce.jsx)(ve, {
                            amount: Number(n) / T.JW + " ICP",
                            amountUSD: (0, O.Ub)(Number(n) / T.JW, Number(A))
                        }), (0, ce.jsxs)("div", {
                            className: "flex flex-col my-5 text-sm",
                            children: [(0, ce.jsxs)("div", {
                                className: "flex items-center justify-between h-[54px]",
                                children: [(0, ce.jsx)("div", {
                                    children: "To"
                                }), (0, ce.jsx)("div", {
                                    children: (0, ce.jsx)(s.pVw, {
                                        address: o
                                    })
                                })]
                            }), (0, ce.jsxs)("div", {
                                className: "flex items-center justify-between h-[54px]",
                                children: [(0, ce.jsx)("div", {
                                    children: "Network fee"
                                }), (0, ce.jsxs)("div", {
                                    className: "text-right",
                                    children: [(0, ce.jsx)(N.B, {
                                        symbol: "ICP",
                                        value: _ ? 0 : T.yz,
                                        decimals: T.OI
                                    }), (0, ce.jsx)("br", {}), (0, ce.jsx)("span", {
                                        className: "text-xs text-gray-400",
                                        children: (0, ce.jsx)(N.B, {
                                            symbol: "ICP",
                                            value: _ ? 0 : T.yz,
                                            decimals: T.OI,
                                            usdRate: null === A || void 0 === A ? void 0 : A.toNumber()
                                        })
                                    })]
                                })]
                            }), (0, ce.jsxs)("div", {
                                className: "flex items-center justify-between h-[54px] font-bold border-t border-gray-200",
                                children: [(0, ce.jsx)("div", {
                                    children: "Total"
                                }), (0, ce.jsxs)("div", {
                                    className: "text-right",
                                    children: [(0, ce.jsx)(N.B, {
                                        symbol: "ICP",
                                        value: _ ? 0 : Number(n) + T.yz,
                                        decimals: T.OI
                                    }), (0, ce.jsx)("br", {}), (0, ce.jsx)("span", {
                                        className: "text-xs font-normal text-gray-400",
                                        children: (0, ce.jsx)(N.B, {
                                            symbol: "ICP",
                                            value: _ ? 0 : Number(n) + T.yz,
                                            decimals: T.OI,
                                            usdRate: null === A || void 0 === A ? void 0 : A.toNumber()
                                        })
                                    })]
                                })]
                            })]
                        }), (0, ce.jsxs)("div", {
                            className: "gap-2.5 grid grid-cols-2 mb-[60px]",
                            children: [(0, ce.jsx)(s.$nd, {
                                id: "rejectButton",
                                type: "stroke",
                                onClick: () => l({
                                    status: x.I.REJECTED,
                                    errorMessage: "Rejected by user"
                                }),
                                children: "Reject"
                            }), (0, ce.jsx)(s.$nd, {
                                id: D ? "approveButtonDisabled" : "approveButton",
                                type: "primary",
                                disabled: D,
                                onClick: () => E(new Promise((async t => {
                                    try {
                                        if (console.debug("RequestTransfer", {
                                                derivationOrigin: c,
                                                origin: e
                                            }), !(0, de.g$)(c || e)) throw new Error("You can not request canister calls with anonymous delegation");
                                        if (i && !_) throw new Error("Couldn't find NFT. Please try again.");
                                        let r = i ? await (0, k.R)("nfid.one", "-1", [null === _ || void 0 === _ ? void 0 : _.canisterId]) : null !== R && void 0 !== R ? R : await (0, k.R)();
                                        const s = {
                                            tokenId: i,
                                            amount: Number(n) / T.JW,
                                            ...a ? {
                                                memo: a
                                            } : {},
                                            identity: r,
                                            to: o,
                                            currency: "ICP",
                                            contract: ""
                                        };
                                        i || delete s.tokenId;
                                        t(await oe.transfer(s))
                                    } catch (s) {
                                        var r;
                                        l({
                                            status: x.I.ERROR,
                                            errorMessage: null !== (r = null === s || void 0 === s ? void 0 : s.message) && void 0 !== r ? r : "Request failed"
                                        })
                                    }
                                }))),
                                children: D ? "loading..." : "Approve"
                            }), (0, ce.jsx)(he, {
                                identity: R,
                                balance: P,
                                isBalanceLoading: j || I || b || w
                            })]
                        })]
                    }) : (0, ce.jsx)(s.GEI, {
                        isLoading: !0
                    })
                },
                Ee = ({
                    appMeta: e,
                    authRequest: t,
                    rpcMessage: n,
                    onConfirm: a,
                    onRequestICDelegation: i = () => new Error("Not implemented"),
                    onRequestICTransfer: r = () => new Error("Not implemented"),
                    onReset: s,
                    onReject: o
                }) => {
                    var c, l, d, u, g, p, m, h, v;
                    switch (console.debug("ProcedureApprovalCoordinator", {
                        rpcMessage: n
                    }), !0) {
                        case ["ic_getDelegation"].includes(n.method):
                            return (0, ce.jsx)(A.V, {
                                onReset: s,
                                appMeta: e,
                                authRequest: t,
                                handleSelectAccount: i
                            });
                        case ["ic_requestTransfer"].includes(n.method):
                            return (0, ce.jsx)(fe, {
                                origin: null !== (c = t.derivationOrigin) && void 0 !== c ? c : t.hostname,
                                appMeta: e,
                                amount: null === (l = n.params[0]) || void 0 === l ? void 0 : l.amount,
                                derivationOrigin: null === (d = n.params[0]) || void 0 === d ? void 0 : d.derivationOrigin,
                                destinationAddress: n.params[0].receiver,
                                memo: null === (u = n.params[0]) || void 0 === u ? void 0 : u.memo,
                                onConfirmIC: r,
                                tokenId: null === (g = n.params[0]) || void 0 === g ? void 0 : g.tokenId
                            });
                        case ["ic_canisterCall"].includes(n.method):
                            return (0, ce.jsx)(le, {
                                origin: null !== (p = t.derivationOrigin) && void 0 !== p ? p : t.hostname,
                                method: null === (m = n.params[0]) || void 0 === m ? void 0 : m.method,
                                canisterID: null === (h = n.params[0]) || void 0 === h ? void 0 : h.canisterId,
                                args: null === (v = n.params[0]) || void 0 === v ? void 0 : v.parameters,
                                onConfirm: a,
                                onReject: o
                            });
                        default:
                            return o("Unknown method"), (0, ce.jsx)("div", {})
                    }
                },
                ye = ({
                    error: e,
                    onRetry: t,
                    onCancel: n
                }) => (0, ce.jsxs)(s.YW0, {
                    children: [(0, ce.jsx)(s.YW0.Header, {
                        children: (0, ce.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, ce.jsx)(s.yTH, {
                                className: "text-red-500"
                            }), (0, ce.jsx)("div", {
                                className: "font-bold",
                                children: "Error"
                            })]
                        })
                    }), (0, ce.jsxs)(s.YW0.Body, {
                        children: [(0, ce.jsx)("div", {
                            className: "font-bold",
                            children: "An unexpected error has occurred."
                        }), (0, ce.jsx)("div", {
                            className: "overflow-scroll",
                            children: (null === e || void 0 === e ? void 0 : e.message) || "An unexpected error has occurred."
                        })]
                    }), (0, ce.jsx)(s.YW0.Footer, {
                        children: (0, ce.jsxs)("div", {
                            className: "flex w-full gap-2",
                            children: [(0, ce.jsx)(s.$nd, {
                                type: "stroke",
                                onClick: n,
                                className: "flex items-center justify-center flex-1",
                                children: "Cancel"
                            }), (0, ce.jsx)(s.$nd, {
                                type: "secondary",
                                onClick: t,
                                className: "flex items-center justify-center flex-1",
                                children: "Try again"
                            })]
                        })
                    })]
                });

            function Re() {
                const [e, t] = (0, a.z)(b);
                console.debug("NFIDEmbedCoordinator");
                const n = (0, r.useMemo)((() => {
                    var n;
                    switch (!0) {
                        case e.matches("HANDLE_PROCEDURE.EXECUTE_PROCEDURE"):
                        case e.matches("AUTH.CheckAppMeta"):
                        case e.matches("AUTH.CheckAuthentication"):
                        default:
                            return (0, ce.jsx)(s.GEI, {
                                isLoading: !0,
                                loadingMessage: "eth_accounts" === (null === (n = e.context.rpcMessage) || void 0 === n ? void 0 : n.method) && "Requesting account..."
                            });
                        case e.matches("AUTH.Authenticate"):
                            return (0, ce.jsx)(o.A, {
                                actor: e.children["NFIDEmbedMachineV2.AUTH.Authenticate:invocation[0]"]
                            });
                        case e.matches("HANDLE_PROCEDURE.AWAIT_PROCEDURE_APPROVAL"):
                            if (!e.context.rpcMessage) throw new Error("missing rpcMessage");
                            if (!e.context.authSession) throw new Error("missing authSession");
                            return (0, ce.jsx)(Ee, {
                                appMeta: e.context.appMeta,
                                authSession: e.context.authSession,
                                authRequest: e.context.authRequest,
                                rpcMessage: e.context.rpcMessage,
                                onConfirm: e => {
                                    console.debug("onConfirm", {
                                        data: e
                                    }), t({
                                        type: "APPROVE",
                                        data: e
                                    })
                                },
                                onRequestICDelegation: e => {
                                    t({
                                        type: "APPROVE_IC_GET_DELEGATION",
                                        data: e
                                    })
                                },
                                onRequestICTransfer: e => {
                                    console.debug("ProcedureApprovalCoordinator.requestTransfer", {
                                        data: e
                                    }), t({
                                        type: "APPROVE_IC_REQUEST_TRANSFER",
                                        data: e
                                    })
                                },
                                onReset: () => t({
                                    type: "RESET"
                                }),
                                onReject: () => t({
                                    type: "CANCEL"
                                })
                            });
                        case e.matches("HANDLE_PROCEDURE.ERROR"):
                            return (0, ce.jsx)(ye, {
                                error: e.context.error,
                                onCancel: () => t({
                                    type: "CANCEL_ERROR"
                                }),
                                onRetry: () => t({
                                    type: "RETRY"
                                })
                            })
                    }
                }), [t, e]);
                return (0, ce.jsx)(i.z, {
                    onClose: () => t({
                        type: "CANCEL"
                    }),
                    isVisible: !0,
                    className: "w-full !relative sm:!fixed",
                    children: (0, ce.jsx)(s.PoZ, {
                        children: n
                    })
                })
            }
        },
        62071: (e, t, n) => {
            n.d(t, {
                U: () => i,
                u: () => a
            });
            const a = e => (t, n) => e(t).localeCompare(e(n), "en", {
                    sensitivity: "base"
                }),
                i = (e, t) => n => {
                    const a = t.map((t => n.find((n => e(n).includes(t))))).filter((e => Boolean(e)));
                    return [...a, ...n.filter((t => !a.find((n => e(n) === e(t)))))]
                }
        }
    }
]);