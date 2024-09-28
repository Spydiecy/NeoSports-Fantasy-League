(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6902], {
        22339: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                CustomPath: function() {
                    return c
                },
                encodePath: function() {
                    return h
                },
                fetchNodeKeys: function() {
                    return l
                },
                request: function() {
                    return f
                }
            });
            var n = r(29711),
                i = r(38039),
                a = r(98901),
                s = r(94312),
                o = r(36522),
                u = r(59638);
            class c {
                constructor(e, t, r) {
                    this.key = e, this.path = t, this.decodeStrategy = r
                }
            }
            let f = async e => {
                    let {
                        agent: t,
                        paths: r
                    } = e, s = n.Principal.from(e.canisterId), o = [...new Set(r)], c = o.map(e => h(e, s)), f = new Map, b = o.map((e, r) => (async () => {
                        var n;
                        try {
                            let e = await t.readState(s, {
                                    paths: [c[r]]
                                }),
                                n = await a.KB.create({
                                    certificate: e.certificate,
                                    rootKey: t.rootKey,
                                    canisterId: s
                                }),
                                {
                                    path: i,
                                    data: b
                                } = ((r, n) => {
                                    if ("subnet" !== n) return {
                                        path: n,
                                        data: (0, a.ti)(r.lookup(h(n, s)))
                                    }; {
                                        let r = l(e.certificate, s, t.rootKey);
                                        return {
                                            path: n,
                                            data: r
                                        }
                                    }
                                })(n, o[r]);
                            if (b) switch (i) {
                                case "time":
                                    f.set(i, (0, u.b)(b));
                                    break;
                                case "controllers":
                                    f.set(i, y(b));
                                    break;
                                case "module_hash":
                                    f.set(i, d(b));
                                    break;
                                case "subnet":
                                    f.set(i, b);
                                    break;
                                case "candid":
                                    f.set(i, new TextDecoder().decode(b));
                                    break;
                                default:
                                    if ("string" != typeof i && "key" in i && "path" in i) switch (i.decodeStrategy) {
                                        case "raw":
                                            f.set(i.key, b);
                                            break;
                                        case "leb128":
                                            f.set(i.key, (0, u.o)(b));
                                            break;
                                        case "cbor":
                                            f.set(i.key, p(b));
                                            break;
                                        case "hex":
                                            f.set(i.key, d(b));
                                            break;
                                        case "utf-8":
                                            f.set(i.key, g(b))
                                    }
                            } else console.warn(`Expected to find result for path ${i}, but instead found nothing.`), "string" == typeof i ? f.set(i, null) : f.set(i.key, null)
                        } catch (t) {
                            if (null === (n = null == t ? void 0 : t.message) || void 0 === n ? void 0 : n.includes("Invalid certificate")) throw new i.e(t.message);
                            "string" != typeof e && "key" in e && "path" in e ? f.set(e.key, null) : f.set(e, null), console.group(), console.warn(`Expected to find result for path ${e}, but instead found nothing.`), console.warn(t), console.groupEnd()
                        }
                    })());
                    return await Promise.all(b), f
                },
                l = (e, t, r) => {
                    let i;
                    if (!t._isPrincipal) throw Error("Invalid canisterId");
                    let s = o.decode(new Uint8Array(e)),
                        u = s.tree,
                        c = s.delegation;
                    if (c && c.subnet_id ? i = n.Principal.fromUint8Array(new Uint8Array(c.subnet_id)) : c = c || void 0 === r ? {
                            subnet_id: (i = n.Principal.selfAuthenticating(n.Principal.fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe").toUint8Array())).toUint8Array(),
                            certificate: new ArrayBuffer(0)
                        } : {
                            subnet_id: (i = n.Principal.selfAuthenticating(new Uint8Array(r))).toUint8Array(),
                            certificate: new ArrayBuffer(0)
                        }, !(0, a.Gt)({
                            canisterId: t,
                            subnetId: i,
                            tree: u
                        })) throw Error("Canister not in range");
                    let f = (0, a.OZ)(["subnet", c.subnet_id, "node"], u);
                    if (f.status !== a.GT.Found) throw Error("Node not found");
                    if (f.value instanceof ArrayBuffer) throw Error("Invalid node tree");
                    let l = (0, a.UV)(f.value),
                        h = new Map;
                    return l.forEach(e => {
                        let t = n.Principal.from(new Uint8Array(e[1])).toText(),
                            r = (0, a.OZ)(["public_key"], e[2]);
                        if (r.status !== a.GT.Found) throw Error("Public key not found");
                        let i = r.value;
                        if (44 !== i.byteLength) throw Error("Invalid public key length");
                        h.set(t, i)
                    }), {
                        subnetId: n.Principal.fromUint8Array(new Uint8Array(c.subnet_id)).toText(),
                        nodeKeys: h
                    }
                },
                h = (e, t) => {
                    let r = new TextEncoder,
                        n = new DataView(t.toUint8Array().buffer).buffer;
                    switch (e) {
                        case "time":
                            let i;
                            return [(i = "time", new DataView(r.encode(i).buffer).buffer)];
                        case "controllers":
                            let a, s;
                            return [(a = "canister", new DataView(r.encode(a).buffer).buffer), n, (s = "controllers", new DataView(r.encode(s).buffer).buffer)];
                        case "module_hash":
                            let o, u;
                            return [(o = "canister", new DataView(r.encode(o).buffer).buffer), n, (u = "module_hash", new DataView(r.encode(u).buffer).buffer)];
                        case "subnet":
                            let c;
                            return [(c = "subnet", new DataView(r.encode(c).buffer).buffer)];
                        case "candid":
                            let f, l, h;
                            return [(f = "canister", new DataView(r.encode(f).buffer).buffer), n, (l = "metadata", new DataView(r.encode(l).buffer).buffer), (h = "candid:service", new DataView(r.encode(h).buffer).buffer)];
                        default:
                            if ("key" in e && "path" in e) {
                                if (!("string" == typeof e.path || e.path instanceof ArrayBuffer)) return e.path; {
                                    let t, i;
                                    let a = e.path,
                                        s = "string" == typeof a ? new DataView(r.encode(a).buffer).buffer : a;
                                    return [(t = "canister", new DataView(r.encode(t).buffer).buffer), n, (i = "metadata", new DataView(r.encode(i).buffer).buffer), s]
                                }
                            }
                    }
                    throw Error(`An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${e} was formatted correctly.`)
                },
                d = e => (0, s.NC)(e),
                p = e => o.decode(e),
                g = e => new TextDecoder().decode(e),
                y = e => p(e).map(e => n.Principal.fromUint8Array(new Uint8Array(e)))
        },
        36522: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                CborTag: function() {
                    return i
                },
                decode: function() {
                    return g
                },
                encode: function() {
                    return h
                }
            });
            var n, i, a = r(4044),
                s = r(2061),
                o = r(94312);
            class u {
                get name() {
                    return "Principal"
                }
                get priority() {
                    return 0
                }
                match(e) {
                    return e && !0 === e._isPrincipal
                }
                encode(e) {
                    return s.value.bytes(e.toUint8Array())
                }
            }
            class c {
                get name() {
                    return "Buffer"
                }
                get priority() {
                    return 1
                }
                match(e) {
                    return e instanceof ArrayBuffer || ArrayBuffer.isView(e)
                }
                encode(e) {
                    return s.value.bytes(new Uint8Array(e))
                }
            }
            class f {
                get name() {
                    return "BigInt"
                }
                get priority() {
                    return 1
                }
                match(e) {
                    return "bigint" == typeof e
                }
                encode(e) {
                    return e > BigInt(0) ? s.value.tagged(2, s.value.bytes((0, o.H_)(e.toString(16)))) : s.value.tagged(3, s.value.bytes((0, o.H_)((BigInt("-1") * e).toString(16))))
                }
            }
            let l = s.SelfDescribeCborSerializer.withDefaultEncoders(!0);

            function h(e) {
                return l.serialize(e)
            }

            function d(e) {
                let t = e.byteLength,
                    r = BigInt(0);
                for (let n = 0; n < t; n++) r = r * BigInt(256) + BigInt(e[n]);
                return r
            }
            l.addEncoder(new u), l.addEncoder(new c), l.addEncoder(new f), (n = i || (i = {}))[n.Uint64LittleEndian = 71] = "Uint64LittleEndian", n[n.Semantic = 55799] = "Semantic";
            class p extends a.Decoder {
                createByteString(e) {
                    return (0, o.zo)(...e)
                }
                createByteStringFromHeap(e, t) {
                    return e === t ? new ArrayBuffer(0) : new Uint8Array(this._heap.slice(e, t))
                }
            }

            function g(e) {
                let t = new Uint8Array(e),
                    r = new p({
                        size: t.byteLength,
                        tags: {
                            2: e => d(e),
                            3: e => -d(e),
                            [i.Semantic]: e => e
                        }
                    });
                try {
                    return r.decodeFirst(t)
                } catch (e) {
                    throw Error(`Failed to decode CBOR: ${e}, input: ${(0,o.NC)(t)}`)
                }
            }
        },
        98901: function(e, t, r) {
            "use strict";
            r.d(t, {
                $x: function() {
                    return x
                },
                GT: function() {
                    return o
                },
                Gt: function() {
                    return B
                },
                I6: function() {
                    return function e(t) {
                        let r = e => e.split("\n").map(e => "  " + e).join("\n");
                        switch (t[0]) {
                            case s.Empty:
                                return "()";
                            case s.Fork:
                                if (t[1] instanceof Array && t[2] instanceof ArrayBuffer) {
                                    let n = e(t[1]),
                                        i = e(t[2]);
                                    return `sub(
 left:
${r(n)}
---
 right:
${r(i)}
)`
                                }
                                throw Error("Invalid tree structure for fork");
                            case s.Labeled:
                                if (t[1] instanceof ArrayBuffer && t[2] instanceof ArrayBuffer) {
                                    let n = function(e) {
                                            let t = new TextDecoder(void 0, {
                                                fatal: !0
                                            });
                                            try {
                                                return JSON.stringify(t.decode(e))
                                            } catch (t) {
                                                return `data(...${e.byteLength} bytes)`
                                            }
                                        }(t[1]),
                                        i = e(t[2]);
                                    return `label(
 label:
${r(n)}
 sub:
${r(i)}
)`
                                }
                                throw Error("Invalid tree structure for labeled");
                            case s.Leaf:
                                if (t[1]) {
                                    if (Array.isArray(t[1])) return JSON.stringify(t[1])
                                } else throw Error("Invalid tree structure for leaf");
                                return `leaf(...${t[1].byteLength} bytes)`;
                            case s.Pruned:
                                if (t[1]) {
                                    if (Array.isArray(t[1])) return JSON.stringify(t[1])
                                } else throw Error("Invalid tree structure for pruned");
                                return `pruned(${(0,h.NC)(new Uint8Array(t[1]))}`;
                            default:
                                return `unknown(${JSON.stringify(t[0])})`
                        }
                    }
                },
                Jq: function() {
                    return s
                },
                KB: function() {
                    return b
                },
                OZ: function() {
                    return E
                },
                UV: function() {
                    return function e(t) {
                        switch (t[0]) {
                            case s.Empty:
                                return [];
                            case s.Fork:
                                return e(t[1]).concat(e(t[2]));
                            default:
                                return [t]
                        }
                    }
                },
                XO: function() {
                    return _
                },
                kt: function() {
                    return y
                },
                ti: function() {
                    return w
                }
            });
            var n, i, a, s, o, u, c = r(36522),
                f = r(38039),
                l = r(53575),
                h = r(94312),
                d = r(29711),
                p = r(93024),
                g = r(59638);
            class y extends f.e {
                constructor(e) {
                    super(`Invalid certificate: ${e}`)
                }
            }(n = s || (s = {}))[n.Empty = 0] = "Empty", n[n.Fork = 1] = "Fork", n[n.Labeled = 2] = "Labeled", n[n.Leaf = 3] = "Leaf", n[n.Pruned = 4] = "Pruned";
            class b {
                constructor(e, t, r, n, i = 5) {
                    this._rootKey = t, this._canisterId = r, this._blsVerify = n, this._maxAgeInMinutes = i, this.cert = c.decode(new Uint8Array(e))
                }
                static async create(e) {
                    let t = b.createUnverified(e);
                    return await t.verify(), t
                }
                static createUnverified(e) {
                    let t = e.blsVerify;
                    return t || (t = p.O), new b(e.certificate, e.rootKey, e.canisterId, t, e.maxAgeInMinutes)
                }
                lookup(e) {
                    return E(e, this.cert.tree)
                }
                lookup_label(e) {
                    return this.lookup([e])
                }
                async verify() {
                    let e = await _(this.cert.tree),
                        t = await this._checkDelegationAndGetKey(this.cert.delegation),
                        r = this.cert.signature,
                        n = function(e) {
                            let t = m.byteLength + 96;
                            if (e.byteLength !== t) throw TypeError(`BLS DER-encoded public key must be ${t} bytes long`);
                            let r = e.slice(0, m.byteLength);
                            if (!(0, h.IA)(r, m)) throw TypeError(`BLS DER-encoded public key is invalid. Expect the following prefix: ${m}, but get ${r}`);
                            return e.slice(m.byteLength)
                        }(t),
                        i = (0, h.zo)(v("ic-state-root"), e),
                        a = !1,
                        s = w(this.lookup(["time"]));
                    if (!s) throw new y("Certificate does not contain a time");
                    let o = 6e4 * this._maxAgeInMinutes,
                        u = Date.now(),
                        c = (0, g.b)(s);
                    if (c.getTime() < u - o) throw new y(`Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` + c.toISOString() + " Current time: " + new Date(u).toISOString());
                    if (c.getTime() > u + 3e5) throw new y("Certificate is signed more than 5 minutes in the future. Certificate time: " + c.toISOString() + " Current time: " + new Date(u).toISOString());
                    try {
                        a = await this._blsVerify(new Uint8Array(n), new Uint8Array(r), new Uint8Array(i))
                    } catch (e) {
                        a = !1
                    }
                    if (!a) throw new y("Signature verification failed")
                }
                async _checkDelegationAndGetKey(e) {
                    if (!e) return this._rootKey;
                    let t = await b.createUnverified({
                        certificate: e.certificate,
                        rootKey: this._rootKey,
                        canisterId: this._canisterId,
                        blsVerify: this._blsVerify,
                        maxAgeInMinutes: 1 / 0
                    });
                    if (t.cert.delegation) throw new y("Delegation certificates cannot be nested");
                    if (await t.verify(), !B({
                            canisterId: this._canisterId,
                            subnetId: d.Principal.fromUint8Array(new Uint8Array(e.subnet_id)),
                            tree: t.cert.tree
                        })) throw new y(`Canister ${this._canisterId} not in range of delegations for subnet 0x${(0,h.NC)(e.subnet_id)}`);
                    let r = w(t.lookup(["subnet", e.subnet_id, "public_key"]));
                    if (!r) throw Error(`Could not find subnet key for subnet 0x${(0,h.NC)(e.subnet_id)}`);
                    return r
                }
            }
            let m = (0, h.H_)("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100");

            function w(e) {
                return e.status !== o.Found ? void 0 : e.value instanceof ArrayBuffer ? e.value : e.value instanceof Uint8Array ? e.value.buffer : void 0
            }
            async function _(e) {
                switch (e[0]) {
                    case s.Empty:
                        return (0, l.vp)(v("ic-hashtree-empty"));
                    case s.Pruned:
                        return e[1];
                    case s.Leaf:
                        return (0, l.vp)((0, h.zo)(v("ic-hashtree-leaf"), e[1]));
                    case s.Labeled:
                        return (0, l.vp)((0, h.zo)(v("ic-hashtree-labeled"), e[1], await _(e[2])));
                    case s.Fork:
                        return (0, l.vp)((0, h.zo)(v("ic-hashtree-fork"), await _(e[1]), await _(e[2])));
                    default:
                        throw Error("unreachable")
                }
            }

            function v(e) {
                let t = new Uint8Array([e.length]),
                    r = new TextEncoder().encode(e);
                return (0, h.zo)(t, r)
            }

            function E(e, t) {
                if (0 === e.length) {
                    if (t[0] === s.Leaf) {
                        if (!t[1]) throw Error("Invalid tree structure for leaf");
                        return t[1] instanceof ArrayBuffer ? {
                            status: o.Found,
                            value: t[1]
                        } : t[1] instanceof Uint8Array ? {
                            status: o.Found,
                            value: t[1].buffer
                        } : {
                            status: o.Found,
                            value: t[1]
                        }
                    }
                    return {
                        status: o.Found,
                        value: t
                    }
                }
                let r = x("string" == typeof e[0] ? new TextEncoder().encode(e[0]) : e[0], t);
                switch (r.status) {
                    case o.Found:
                        return E(e.slice(1), r.value);
                    case u.Greater:
                    case u.Less:
                        return {
                            status: o.Absent
                        };
                    default:
                        return r
                }
            }

            function x(e, t) {
                switch (t[0]) {
                    case s.Labeled:
                        if (function(e, t) {
                                let r = new Uint8Array(e),
                                    n = new Uint8Array(t);
                                for (let e = 0; e < r.length; e++)
                                    if (r[e] > n[e]) return !0;
                                return !1
                            }(e, t[1])) return {
                            status: u.Greater
                        };
                        if ((0, h.IA)(e, t[1])) return {
                            status: o.Found,
                            value: t[2]
                        };
                        return {
                            status: u.Less
                        };
                    case s.Fork:
                        let r = x(e, t[1]);
                        switch (r.status) {
                            case u.Greater:
                                {
                                    let r = x(e, t[2]);
                                    if (r.status === u.Less) return {
                                        status: o.Absent
                                    };
                                    return r
                                }
                            case o.Unknown:
                                {
                                    let r = x(e, t[2]);
                                    if (r.status === u.Less) return {
                                        status: o.Unknown
                                    };
                                    return r
                                }
                            default:
                                return r
                        }
                    case s.Pruned:
                        return {
                            status: o.Unknown
                        };
                    default:
                        return {
                            status: o.Absent
                        }
                }
            }

            function B(e) {
                let {
                    canisterId: t,
                    subnetId: r,
                    tree: n
                } = e, i = E(["subnet", r.toUint8Array(), "canister_ranges"], n);
                if (i.status !== o.Found || !(i.value instanceof ArrayBuffer)) throw Error(`Could not find canister ranges for subnet ${r}`);
                return c.decode(i.value).map(e => [d.Principal.fromUint8Array(e[0]), d.Principal.fromUint8Array(e[1])]).some(e => e[0].ltEq(t) && e[1].gtEq(t))
            }(i = o || (o = {})).Unknown = "unknown", i.Absent = "absent", i.Found = "found", (a = u || (u = {})).Less = "less", a.Greater = "greater"
        },
        38039: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return n
                }
            });
            class n extends Error {
                constructor(e) {
                    super(e), this.message = e, Object.setPrototypeOf(this, n.prototype)
                }
            }
        },
        20392: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ACTOR_METHOD_WITH_CERTIFICATE: function() {
                    return te
                },
                ACTOR_METHOD_WITH_HTTP_DETAILS: function() {
                    return e9
                },
                Actor: function() {
                    return e4
                },
                ActorCallError: function() {
                    return e2
                },
                AdvancedActor: function() {
                    return tr
                },
                AgentHTTPResponseError: function() {
                    return el
                },
                AnonymousIdentity: function() {
                    return X
                },
                CanisterStatus: function() {
                    return eh
                },
                Cbor: function() {
                    return et
                },
                Certificate: function() {
                    return ed.KB
                },
                CertificateVerificationError: function() {
                    return ed.kt
                },
                DER_COSE_OID: function() {
                    return eE
                },
                ED25519_OID: function() {
                    return ex
                },
                Ed25519PublicKey: function() {
                    return eO
                },
                Expiry: function() {
                    return eo
                },
                HttpAgent: function() {
                    return eq
                },
                IC_ROOT_KEY: function() {
                    return eC
                },
                IdentityInvalidError: function() {
                    return e$
                },
                LookupStatus: function() {
                    return ed.GT
                },
                MANAGEMENT_CANISTER_ID: function() {
                    return eM
                },
                NodeType: function() {
                    return ed.Jq
                },
                ProxyAgent: function() {
                    return eG
                },
                ProxyMessageKind: function() {
                    return q
                },
                ProxyStubAgent: function() {
                    return eD
                },
                QueryCallRejectedError: function() {
                    return e3
                },
                ReplicaRejectCode: function() {
                    return s
                },
                RequestStatusResponseStatus: function() {
                    return $
                },
                SECP256K1_OID: function() {
                    return eB
                },
                SignIdentity: function() {
                    return J
                },
                SubmitRequestType: function() {
                    return o
                },
                UpdateCallRejectedError: function() {
                    return e6
                },
                blsVerify: function() {
                    return ts.O
                },
                bufEquals: function() {
                    return K.IA
                },
                bufFromBufLike: function() {
                    return K.rS
                },
                check_canister_ranges: function() {
                    return ed.Gt
                },
                compare: function() {
                    return K.qu
                },
                concat: function() {
                    return K.zo
                },
                createAssetCanisterActor: function() {
                    return ti
                },
                createIdentityDescriptor: function() {
                    return ee
                },
                decodeLen: function() {
                    return ev
                },
                decodeLenBytes: function() {
                    return e_
                },
                encodeLen: function() {
                    return ew
                },
                encodeLenBytes: function() {
                    return em
                },
                fetchCandid: function() {
                    return ta
                },
                find_label: function() {
                    return ed.$x
                },
                flatten_forks: function() {
                    return ed.UV
                },
                fromHex: function() {
                    return K.H_
                },
                getDefaultAgent: function() {
                    return ez
                },
                getManagementCanister: function() {
                    return tt
                },
                hash: function() {
                    return Z.vp
                },
                hashOfMap: function() {
                    return Z.E$
                },
                hashTreeToString: function() {
                    return ed.I6
                },
                hashValue: function() {
                    return Z.fm
                },
                httpHeadersTransform: function() {
                    return ef
                },
                lookupResultToBuffer: function() {
                    return ed.ti
                },
                lookup_path: function() {
                    return ed.OZ
                },
                makeExpiryTransform: function() {
                    return ec
                },
                makeNonce: function() {
                    return ea
                },
                makeNonceTransform: function() {
                    return eu
                },
                polling: function() {
                    return G
                },
                randomNumber: function() {
                    return ei
                },
                reconstruct: function() {
                    return ed.XO
                },
                requestIdOf: function() {
                    return Z.vH
                },
                toHex: function() {
                    return K.NC
                },
                uint8ToBuf: function() {
                    return K.wy
                },
                unwrapDER: function() {
                    return eN
                },
                verify: function() {
                    return ts.T
                },
                wrapDER: function() {
                    return eI
                }
            });
            var n, i, a, s, o, u, c, f, l, h, d, p, g, y, b, m, w, _, v, E, x, B, I, N, T, A, O, S, R, U, F, P, L, k, V, C, M, j, $, q, D = {};
            r.r(D), r.d(D, {
                backoff: function() {
                    return eJ
                },
                chain: function() {
                    return eX
                },
                conditionalDelay: function() {
                    return eZ
                },
                defaultStrategy: function() {
                    return eH
                },
                maxAttempts: function() {
                    return eK
                },
                once: function() {
                    return eW
                },
                throttle: function() {
                    return eY
                },
                timeout: function() {
                    return eQ
                }
            });
            var G = {};
            r.r(G), r.d(G, {
                defaultStrategy: function() {
                    return eH
                },
                pollForResponse: function() {
                    return e0
                },
                strategy: function() {
                    return D
                }
            });
            var z = r(9109);
            (n = s || (s = {}))[n.SysFatal = 1] = "SysFatal", n[n.SysTransient = 2] = "SysTransient", n[n.DestinationInvalid = 3] = "DestinationInvalid", n[n.CanisterReject = 4] = "CanisterReject", n[n.CanisterError = 5] = "CanisterError";
            var H = r(29711),
                W = r(38039),
                Z = r(53575),
                K = r(94312),
                Y = function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                    return r
                };
            let Q = new TextEncoder().encode("\nic-request");
            class J {
                getPrincipal() {
                    return this._principal || (this._principal = H.Principal.selfAuthenticating(new Uint8Array(this.getPublicKey().toDer()))), this._principal
                }
                async transformRequest(e) {
                    let {
                        body: t
                    } = e, r = Y(e, ["body"]), n = await (0, Z.vH)(t);
                    return Object.assign(Object.assign({}, r), {
                        body: {
                            content: t,
                            sender_pubkey: this.getPublicKey().toDer(),
                            sender_sig: await this.sign((0, K.zo)(Q, n))
                        }
                    })
                }
            }
            class X {
                getPrincipal() {
                    return H.Principal.anonymous()
                }
                async transformRequest(e) {
                    return Object.assign(Object.assign({}, e), {
                        body: {
                            content: e.body
                        }
                    })
                }
            }

            function ee(e) {
                return "getPublicKey" in e ? {
                    type: "PublicKeyIdentity",
                    publicKey: (0, K.NC)(e.getPublicKey().toDer())
                } : {
                    type: "AnonymousIdentity"
                }
            }
            var et = r(36522),
                er = r(70764),
                en = r(2061);
            let ei = () => {
                if ("undefined" != typeof window && window.crypto && window.crypto.getRandomValues) {
                    let e = new Uint32Array(1);
                    return window.crypto.getRandomValues(e), e[0]
                }
                if ("undefined" != typeof crypto && crypto.getRandomValues) {
                    let e = new Uint32Array(1);
                    return crypto.getRandomValues(e), e[0]
                }
                return "undefined" != typeof crypto && crypto.randomInt ? crypto.randomInt(0, 4294967295) : Math.floor(4294967295 * Math.random())
            };

            function ea() {
                let e = new ArrayBuffer(16),
                    t = new DataView(e),
                    r = ei(),
                    n = ei(),
                    i = ei(),
                    a = ei();
                return t.setUint32(0, r), t.setUint32(4, n), t.setUint32(8, i), t.setUint32(12, a), e
            }(o || (o = {})).Call = "call";
            let es = BigInt(1e6);
            class eo {
                constructor(e) {
                    let t = BigInt(Math.floor(Date.now() + e - 6e4)) * es / BigInt(1e9) / BigInt(60) * BigInt(60) * BigInt(1e9);
                    this._value = t
                }
                toCBOR() {
                    return en.value.u64(this._value.toString(16), 16)
                }
                toHash() {
                    return (0, er.dZ)(this._value)
                }
            }

            function eu(e = ea) {
                return async t => {
                    let r = t.request.headers;
                    t.request.headers = r, "call" === t.endpoint && (t.body.nonce = e())
                }
            }

            function ec(e) {
                return async t => {
                    t.body.ingress_expiry = new eo(e)
                }
            }

            function ef(e) {
                let t = [];
                return e.forEach((e, r) => {
                    t.push([r, e])
                }), t
            }
            class el extends W.e {
                constructor(e, t) {
                    super(e), this.response = t, this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype)
                }
            }
            var eh = r(22339),
                ed = r(98901),
                ep = r(63201),
                eg = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                ey = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };
            class eb {
                constructor(e = {}) {
                    u.set(this, void 0), c.set(this, void 0), this[f] = this.entries.bind(this), this[l] = "ExpirableMap";
                    let {
                        source: t = [],
                        expirationTime: r = 6e5
                    } = e, n = Date.now();
                    eg(this, u, new Map([...t].map(([e, t]) => [e, {
                        value: t,
                        timestamp: n
                    }])), "f"), eg(this, c, r, "f")
                }
                prune() {
                    let e = Date.now();
                    for (let [t, r] of ey(this, u, "f").entries()) e - r.timestamp > ey(this, c, "f") && ey(this, u, "f").delete(t);
                    return this
                }
                set(e, t) {
                    this.prune();
                    let r = {
                        value: t,
                        timestamp: Date.now()
                    };
                    return ey(this, u, "f").set(e, r), this
                }
                get(e) {
                    let t = ey(this, u, "f").get(e);
                    if (void 0 !== t) {
                        if (Date.now() - t.timestamp > ey(this, c, "f")) {
                            ey(this, u, "f").delete(e);
                            return
                        }
                        return t.value
                    }
                }
                clear() {
                    ey(this, u, "f").clear()
                }
                entries() {
                    let e = ey(this, u, "f").entries();
                    return function*() {
                        for (let [t, r] of e) yield [t, r.value]
                    }()
                }
                values() {
                    let e = ey(this, u, "f").values();
                    return function*() {
                        for (let t of e) yield t.value
                    }()
                }
                keys() {
                    return ey(this, u, "f").keys()
                }
                forEach(e, t) {
                    for (let [r, n] of ey(this, u, "f").entries()) e.call(t, n.value, r, this)
                }
                has(e) {
                    return ey(this, u, "f").has(e)
                }
                delete(e) {
                    return ey(this, u, "f").delete(e)
                }
                get size() {
                    return ey(this, u, "f").size
                }
            }
            u = new WeakMap, c = new WeakMap, f = Symbol.iterator, l = Symbol.toStringTag;
            let em = e => {
                    if (e <= 127) return 1;
                    if (e <= 255) return 2;
                    if (e <= 65535) return 3;
                    if (e <= 16777215) return 4;
                    throw Error("Length too long (> 4 bytes)")
                },
                ew = (e, t, r) => {
                    if (r <= 127) return e[t] = r, 1;
                    if (r <= 255) return e[t] = 129, e[t + 1] = r, 2;
                    if (r <= 65535) return e[t] = 130, e[t + 1] = r >> 8, e[t + 2] = r, 3;
                    if (r <= 16777215) return e[t] = 131, e[t + 1] = r >> 16, e[t + 2] = r >> 8, e[t + 3] = r, 4;
                    throw Error("Length too long (> 4 bytes)")
                },
                e_ = (e, t) => {
                    if (e[t] < 128) return 1;
                    if (128 === e[t]) throw Error("Invalid length 0");
                    if (129 === e[t]) return 2;
                    if (130 === e[t]) return 3;
                    if (131 === e[t]) return 4;
                    throw Error("Length too long (> 4 bytes)")
                },
                ev = (e, t) => {
                    let r = e_(e, t);
                    if (1 === r) return e[t];
                    if (2 === r) return e[t + 1];
                    if (3 === r) return (e[t + 1] << 8) + e[t + 2];
                    if (4 === r) return (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3];
                    throw Error("Length too long (> 4 bytes)")
                },
                eE = Uint8Array.from([48, 12, 6, 10, 43, 6, 1, 4, 1, 131, 184, 67, 1, 1]),
                ex = Uint8Array.from([48, 5, 6, 3, 43, 101, 112]),
                eB = Uint8Array.from([48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 10]);

            function eI(e, t) {
                let r = 2 + em(e.byteLength + 1),
                    n = t.byteLength + r + e.byteLength,
                    i = 0,
                    a = new Uint8Array(1 + em(n) + n);
                return a[i++] = 48, i += ew(a, i, n), a.set(t, i), i += t.byteLength, a[i++] = 3, i += ew(a, i, e.byteLength + 1), a[i++] = 0, a.set(new Uint8Array(e), i), a
            }
            let eN = (e, t) => {
                let r = 0,
                    n = (e, t) => {
                        if (i[r++] !== e) throw Error("Expected: " + t)
                    },
                    i = new Uint8Array(e);
                if (n(48, "sequence"), r += e_(i, r), !(0, K.IA)(i.slice(r, r + t.byteLength), t)) throw Error("Not the expected OID.");
                r += t.byteLength, n(3, "bit string");
                let a = ev(i, r) - 1;
                r += e_(i, r), n(0, "0 padding");
                let s = i.slice(r);
                if (a !== s.length) throw Error(`DER payload mismatch: Expected length ${a} actual length ${s.length}`);
                return s
            };
            var eT = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                eA = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };
            class eO {
                constructor(e) {
                    if (h.set(this, void 0), d.set(this, void 0), e.byteLength !== eO.RAW_KEY_LENGTH) throw Error("An Ed25519 public key must be exactly 32bytes long");
                    eT(this, h, e, "f"), eT(this, d, eO.derEncode(e), "f")
                }
                static from(e) {
                    return this.fromDer(e.toDer())
                }
                static fromRaw(e) {
                    return new eO(e)
                }
                static fromDer(e) {
                    return new eO(this.derDecode(e))
                }
                static derEncode(e) {
                    return eI(e, ex).buffer
                }
                static derDecode(e) {
                    let t = eN(e, ex);
                    if (t.length !== this.RAW_KEY_LENGTH) throw Error("An Ed25519 public key must be exactly 32bytes long");
                    return t
                }
                get rawKey() {
                    return eA(this, h, "f")
                }
                get derKey() {
                    return eA(this, d, "f")
                }
                toDer() {
                    return this.derKey
                }
                toRaw() {
                    return this.rawKey
                }
            }
            h = new WeakMap, d = new WeakMap, eO.RAW_KEY_LENGTH = 32;
            var eS = r(59638);
            class eR {
                constructor() {
                    this.observers = []
                }
                subscribe(e) {
                    this.observers.push(e)
                }
                unsubscribe(e) {
                    this.observers = this.observers.filter(t => t !== e)
                }
                notify(e, ...t) {
                    this.observers.forEach(r => r(e, ...t))
                }
            }
            class eU extends eR {
                constructor() {
                    super()
                }
                print(e, ...t) {
                    this.notify({
                        message: e,
                        level: "info"
                    }, ...t)
                }
                warn(e, ...t) {
                    this.notify({
                        message: e,
                        level: "warn"
                    }, ...t)
                }
                error(e, t, ...r) {
                    this.notify({
                        message: e,
                        level: "error",
                        error: t
                    }, ...r)
                }
            }
            var eF = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                eP = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };
            class eL {
                constructor(e = eL.default) {
                    p.set(this, void 0), g.set(this, void 0), y.set(this, void 0), b.set(this, void 0), m.set(this, void 0), w.set(this, void 0), _.set(this, void 0), v.set(this, void 0), E.set(this, 0);
                    let {
                        initialInterval: t = 500,
                        randomizationFactor: r = .5,
                        multiplier: n = 1.5,
                        maxInterval: i = 6e4,
                        maxElapsedTime: a = 9e5,
                        maxIterations: s = 10,
                        date: o = Date
                    } = e;
                    eF(this, p, t, "f"), eF(this, g, r, "f"), eF(this, y, n, "f"), eF(this, b, i, "f"), eF(this, v, o, "f"), eF(this, m, o.now(), "f"), eF(this, w, a, "f"), eF(this, _, s, "f")
                }
                get ellapsedTimeInMsec() {
                    return eP(this, v, "f").now() - eP(this, m, "f")
                }
                get currentInterval() {
                    return eP(this, p, "f")
                }
                get count() {
                    return eP(this, E, "f")
                }
                get randomValueFromInterval() {
                    let e = eP(this, g, "f") * eP(this, p, "f"),
                        t = eP(this, p, "f") - e;
                    return Math.random() * (eP(this, p, "f") + e - t) + t
                }
                incrementCurrentInterval() {
                    var e;
                    return eF(this, p, Math.min(eP(this, p, "f") * eP(this, y, "f"), eP(this, b, "f")), "f"), eF(this, E, (e = eP(this, E, "f"), ++e), "f"), eP(this, p, "f")
                }
                next() {
                    return this.ellapsedTimeInMsec >= eP(this, w, "f") || eP(this, E, "f") >= eP(this, _, "f") ? null : (this.incrementCurrentInterval(), this.randomValueFromInterval)
                }
            }
            p = new WeakMap, g = new WeakMap, y = new WeakMap, b = new WeakMap, m = new WeakMap, w = new WeakMap, _ = new WeakMap, v = new WeakMap, E = new WeakMap, eL.default = {
                initialInterval: 500,
                randomizationFactor: .5,
                multiplier: 1.5,
                maxInterval: 6e4,
                maxElapsedTime: 9e5,
                maxIterations: 10,
                date: Date
            };
            var ek = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                eV = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };
            (i = $ || ($ = {})).Received = "received", i.Processing = "processing", i.Replied = "replied", i.Rejected = "rejected", i.Unknown = "unknown", i.Done = "done";
            let eC = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae",
                eM = "aaaaa-aa";
            class ej extends W.e {
                constructor(e) {
                    super(e), this.message = e
                }
            }
            class e$ extends W.e {
                constructor(e) {
                    super(e), this.message = e
                }
            }
            class eq {
                constructor(e = {}) {
                    var t;
                    x.add(this), this.rootKey = (0, K.H_)(eC), B.set(this, void 0), I.set(this, void 0), N.set(this, void 0), T.set(this, void 0), A.set(this, 0), O.set(this, void 0), S.set(this, !1), R.set(this, void 0), U.set(this, void 0), this._isAgent = !0, this.config = {}, F.set(this, 0), this.log = new eU, P.set(this, []), L.set(this, []), k.set(this, new eb({
                        expirationTime: 3e5
                    })), V.set(this, !0), j.set(this, (e, t) => {
                        if (!1 === eV(this, V, "f")) return e;
                        if (!t) throw new ed.kt("Invalid signature from replica signed query: no matching node key found.");
                        let {
                            status: r,
                            signatures: n = [],
                            requestId: i
                        } = e, a = new TextEncoder().encode("\vic-response");
                        for (let s of n) {
                            let n;
                            let {
                                timestamp: o,
                                identity: u
                            } = s, c = H.Principal.fromUint8Array(u).toText();
                            if ("replied" === r) {
                                let {
                                    reply: t
                                } = e;
                                n = (0, Z.E$)({
                                    status: r,
                                    reply: t,
                                    timestamp: BigInt(o),
                                    request_id: i
                                })
                            } else if ("rejected" === r) {
                                let {
                                    reject_code: t,
                                    reject_message: a,
                                    error_code: s
                                } = e;
                                n = (0, Z.E$)({
                                    status: r,
                                    reject_code: t,
                                    reject_message: a,
                                    error_code: s,
                                    timestamp: BigInt(o),
                                    request_id: i
                                })
                            } else throw Error(`Unknown status: ${r}`);
                            let f = (0, K.zo)(a, new Uint8Array(n)),
                                l = null == t ? void 0 : t.nodeKeys.get(c);
                            if (!l) throw new ed.kt("Invalid signature from replica signed query: no matching node key found.");
                            let h = eO.fromDer(l).rawKey;
                            if (ep.UN.verify(s.signature, new Uint8Array(f), new Uint8Array(h))) break;
                            throw new ed.kt(`Invalid signature from replica ${c} signed query.`)
                        }
                        return e
                    }), this.config = e, ek(this, I, e.fetch || function() {
                        let e;
                        if ("undefined" != typeof window) {
                            if (window.fetch) e = window.fetch.bind(window);
                            else throw new ej("Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present.")
                        } else if (void 0 !== r.g) {
                            if (r.g.fetch) e = r.g.fetch.bind(r.g);
                            else throw new ej("Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available.")
                        } else "undefined" != typeof self && self.fetch && (e = self.fetch.bind(self));
                        if (e) return e;
                        throw new ej("Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context.")
                    }() || fetch.bind(r.g), "f"), ek(this, N, e.fetchOptions, "f"), ek(this, T, e.callOptions, "f");
                    let n = function(e) {
                        let t;
                        if (void 0 !== e) t = new URL(e.match(/^[a-z]+:/) || "undefined" == typeof window ? e : window.location.protocol + "//" + e);
                        else {
                            let e;
                            let r = "undefined" != typeof window ? window.location : void 0,
                                n = null == r ? void 0 : r.hostname;
                            n && "string" == typeof n && (e = [".github.dev", ".gitpod.io"].some(e => n.endsWith(e)) ? n : ["ic0.app", "icp0.io", "127.0.0.1", "localhost"].find(e => n.endsWith(e))), t = new URL(r && e ? `${r.protocol}//${e}${r.port?":"+r.port:""}` : "https://icp-api.io")
                        }
                        return t.toString()
                    }(e.host);
                    if (this.host = new URL(n), void 0 !== e.verifyQuerySignatures && ek(this, V, e.verifyQuerySignatures, "f"), ek(this, R, null !== (t = e.retryTimes) && void 0 !== t ? t : 3, "f"), ek(this, U, e.backoffStrategy || (() => new eL({
                            maxIterations: eV(this, R, "f")
                        })), "f"), this.host.hostname.endsWith(".ic0.app") ? this.host.hostname = "ic0.app" : this.host.hostname.endsWith(".icp0.io") ? this.host.hostname = "icp0.io" : this.host.hostname.endsWith(".icp-api.io") && (this.host.hostname = "icp-api.io"), e.credentials) {
                        let {
                            name: t,
                            password: r
                        } = e.credentials;
                        ek(this, O, `${t}${r?":"+r:""}`, "f")
                    }
                    ek(this, B, Promise.resolve(e.identity || new X), "f"), this.addTransform("update", eu(ea)), e.useQueryNonces && this.addTransform("query", eu(ea)), e.logToConsole && this.log.subscribe(e => {
                        "error" === e.level ? console.error(e.message) : "warn" === e.level ? console.warn(e.message) : console.log(e.message)
                    })
                }
                get waterMark() {
                    return eV(this, F, "f")
                }
                static createSync(e = {}) {
                    return new this(Object.assign({}, e))
                }
                static async create(e = {
                    shouldFetchRootKey: !1
                }) {
                    let t = eq.createSync(e),
                        r = [t.syncTime()];
                    return "https://icp-api.io" !== t.host.toString() && e.shouldFetchRootKey && r.push(t.fetchRootKey()), await Promise.all(r), t
                }
                static async from(e) {
                    var t;
                    try {
                        if ("config" in e) return await eq.create(e.config);
                        return await eq.create({
                            fetch: e._fetch,
                            fetchOptions: e._fetchOptions,
                            callOptions: e._callOptions,
                            host: e._host.toString(),
                            identity: null !== (t = e._identity) && void 0 !== t ? t : void 0
                        })
                    } catch (e) {
                        throw new W.e("Failed to create agent from provided agent")
                    }
                }
                isLocal() {
                    let e = this.host.hostname;
                    return "127.0.0.1" === e || e.endsWith("127.0.0.1")
                }
                addTransform(e, t, r = t.priority || 0) {
                    if ("update" === e) {
                        let e = eV(this, L, "f").findIndex(e => (e.priority || 0) < r);
                        eV(this, L, "f").splice(e >= 0 ? e : eV(this, L, "f").length, 0, Object.assign(t, {
                            priority: r
                        }))
                    } else if ("query" === e) {
                        let e = eV(this, P, "f").findIndex(e => (e.priority || 0) < r);
                        eV(this, P, "f").splice(e >= 0 ? e : eV(this, P, "f").length, 0, Object.assign(t, {
                            priority: r
                        }))
                    }
                }
                async getPrincipal() {
                    if (!eV(this, B, "f")) throw new e$("This identity has expired due this application's security policy. Please refresh your authentication.");
                    return (await eV(this, B, "f")).getPrincipal()
                }
                async call(e, t, r) {
                    let n = await (void 0 !== r ? await r : await eV(this, B, "f"));
                    if (!n) throw new e$("This identity has expired due this application's security policy. Please refresh your authentication.");
                    let i = H.Principal.from(e),
                        a = t.effectiveCanisterId ? H.Principal.from(t.effectiveCanisterId) : i,
                        s = n.getPrincipal() || H.Principal.anonymous(),
                        u = new eo(3e5);
                    Math.abs(eV(this, A, "f")) > 3e4 && (u = new eo(3e5 + eV(this, A, "f")));
                    let c = {
                            request_type: o.Call,
                            canister_id: i,
                            method_name: t.methodName,
                            arg: t.arg,
                            sender: s,
                            ingress_expiry: u
                        },
                        f = await this._transform({
                            request: {
                                body: null,
                                method: "POST",
                                headers: Object.assign({
                                    "Content-Type": "application/cbor"
                                }, eV(this, O, "f") ? {
                                    Authorization: "Basic " + btoa(eV(this, O, "f"))
                                } : {})
                            },
                            endpoint: "call",
                            body: c
                        }),
                        l = f.body.nonce ? new Uint8Array(f.body.nonce) : void 0;
                    c.nonce = l, f = await n.transformRequest(f);
                    let h = et.encode(f.body);
                    this.log.print(`fetching "/api/v2/canister/${a.toText()}/call" with request:`, f);
                    let d = eV(this, U, "f").call(this),
                        p = eV(this, x, "m", M).call(this, {
                            request: () => eV(this, I, "f").call(this, "" + new URL(`/api/v2/canister/${a.toText()}/call`, this.host), Object.assign(Object.assign(Object.assign({}, eV(this, T, "f")), f.request), {
                                body: h
                            })),
                            backoff: d,
                            tries: 0
                        }),
                        [g, y] = await Promise.all([p, (0, Z.vH)(c)]),
                        b = await g.arrayBuffer(),
                        m = 200 === g.status && b.byteLength > 0 ? et.decode(b) : null;
                    return {
                        requestId: y,
                        response: {
                            ok: g.ok,
                            status: g.status,
                            statusText: g.statusText,
                            body: m,
                            headers: ef(g.headers)
                        },
                        requestDetails: c
                    }
                }
                async query(e, t, r) {
                    let n = eV(this, U, "f").call(this),
                        i = t.effectiveCanisterId ? H.Principal.from(t.effectiveCanisterId) : H.Principal.from(e);
                    this.log.print(`ecid ${i.toString()}`), this.log.print(`canisterId ${e.toString()}`);
                    let a = async () => {
                            let a = await (void 0 !== r ? await r : await eV(this, B, "f"));
                            if (!a) throw new e$("This identity has expired due this application's security policy. Please refresh your authentication.");
                            let s = H.Principal.from(e),
                                o = (null == a ? void 0 : a.getPrincipal()) || H.Principal.anonymous(),
                                u = {
                                    request_type: "query",
                                    canister_id: s,
                                    method_name: t.methodName,
                                    arg: t.arg,
                                    sender: o,
                                    ingress_expiry: new eo(3e5)
                                },
                                c = await (0, Z.vH)(u),
                                f = await this._transform({
                                    request: {
                                        method: "POST",
                                        headers: Object.assign({
                                            "Content-Type": "application/cbor"
                                        }, eV(this, O, "f") ? {
                                            Authorization: "Basic " + btoa(eV(this, O, "f"))
                                        } : {})
                                    },
                                    endpoint: "read",
                                    body: u
                                });
                            f = await (null == a ? void 0 : a.transformRequest(f));
                            let l = et.encode(f.body),
                                h = {
                                    canister: s.toText(),
                                    ecid: i,
                                    transformedRequest: f,
                                    body: l,
                                    requestId: c,
                                    backoff: n,
                                    tries: 0
                                };
                            return {
                                requestDetails: u,
                                query: await eV(this, x, "m", C).call(this, h)
                            }
                        },
                        s = async () => {
                            if (eV(this, V, "f")) return eV(this, k, "f").get(i.toString()) || (await this.fetchSubnetKeys(i.toString()), eV(this, k, "f").get(i.toString()))
                        },
                        [o, u] = await Promise.all([a(), s()]),
                        {
                            requestDetails: c,
                            query: f
                        } = o,
                        l = Object.assign(Object.assign({}, f), {
                            requestDetails: c
                        });
                    if (this.log.print("Query response:", l), !eV(this, V, "f")) return l;
                    try {
                        return eV(this, j, "f").call(this, l, u)
                    } catch (r) {
                        this.log.warn("Query response verification failed. Retrying with fresh subnet keys."), eV(this, k, "f").delete(e.toString()), await this.fetchSubnetKeys(i.toString());
                        let t = eV(this, k, "f").get(e.toString());
                        if (!t) throw new ed.kt("Invalid signature from replica signed query: no matching node key found.");
                        return eV(this, j, "f").call(this, l, t)
                    }
                }
                async createReadStateRequest(e, t) {
                    let r = await (void 0 !== t ? await t : await eV(this, B, "f"));
                    if (!r) throw new e$("This identity has expired due this application's security policy. Please refresh your authentication.");
                    let n = (null == r ? void 0 : r.getPrincipal()) || H.Principal.anonymous(),
                        i = await this._transform({
                            request: {
                                method: "POST",
                                headers: Object.assign({
                                    "Content-Type": "application/cbor"
                                }, eV(this, O, "f") ? {
                                    Authorization: "Basic " + btoa(eV(this, O, "f"))
                                } : {})
                            },
                            endpoint: "read_state",
                            body: {
                                request_type: "read_state",
                                paths: e.paths,
                                sender: n,
                                ingress_expiry: new eo(3e5)
                            }
                        });
                    return null == r ? void 0 : r.transformRequest(i)
                }
                async readState(e, t, r, n) {
                    let i = "string" == typeof e ? H.Principal.fromText(e) : e,
                        a = null != n ? n : await this.createReadStateRequest(t, r),
                        s = et.encode(a.body);
                    this.log.print(`fetching "/api/v2/canister/${i}/read_state" with request:`, a);
                    let o = eV(this, U, "f").call(this),
                        u = await eV(this, x, "m", M).call(this, {
                            request: () => eV(this, I, "f").call(this, "" + new URL(`/api/v2/canister/${i.toString()}/read_state`, this.host), Object.assign(Object.assign(Object.assign({}, eV(this, N, "f")), a.request), {
                                body: s
                            })),
                            backoff: o,
                            tries: 0
                        });
                    if (!u.ok) throw Error(`Server returned an error:
  Code: ${u.status} (${u.statusText})
  Body: ${await u.text()}
`);
                    let c = et.decode(await u.arrayBuffer());
                    this.log.print("Read state response:", c);
                    let f = await this.parseTimeFromResponse(c);
                    return f > 0 && (this.log.print("Read state response time:", f), ek(this, F, f, "f")), c
                }
                async parseTimeFromResponse(e) {
                    let t;
                    if (e.certificate) {
                        let r = et.decode(e.certificate);
                        if (r && "tree" in r) t = r.tree;
                        else throw Error("Could not decode time from response");
                        let n = (0, ed.OZ)(["time"], t);
                        if (n.status !== ed.GT.Found || !(n.value instanceof ArrayBuffer) && !ArrayBuffer.isView(n)) throw Error("Time was not found in the response or was not in its expected format.");
                        let i = (0, eS.b)((0, K.rS)(n.value));
                        return this.log.print("Time from response:", i), this.log.print("Time from response in milliseconds:", Number(i)), Number(i)
                    }
                    return this.log.warn("No certificate found in response"), 0
                }
                async syncTime(e) {
                    let t = await Promise.resolve().then(r.bind(r, 22339)),
                        n = Date.now();
                    try {
                        e || this.log.print("Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");
                        let r = (await t.request({
                            canisterId: null != e ? e : H.Principal.from("ryjl3-tyaaa-aaaaa-aaaba-cai"),
                            agent: this,
                            paths: ["time"]
                        })).get("time");
                        r && ek(this, A, Number(r) - Number(n), "f")
                    } catch (e) {
                        this.log.error("Caught exception while attempting to sync time", e)
                    }
                }
                async status() {
                    let e = eV(this, O, "f") ? {
                        Authorization: "Basic " + btoa(eV(this, O, "f"))
                    } : {};
                    this.log.print('fetching "/api/v2/status"');
                    let t = eV(this, U, "f").call(this),
                        r = await eV(this, x, "m", M).call(this, {
                            backoff: t,
                            request: () => eV(this, I, "f").call(this, "" + new URL("/api/v2/status", this.host), Object.assign({
                                headers: e
                            }, eV(this, N, "f"))),
                            tries: 0
                        });
                    return et.decode(await r.arrayBuffer())
                }
                async fetchRootKey() {
                    return eV(this, S, "f") || (this.rootKey = (await this.status()).root_key, ek(this, S, !0, "f")), this.rootKey
                }
                invalidateIdentity() {
                    ek(this, B, null, "f")
                }
                replaceIdentity(e) {
                    ek(this, B, Promise.resolve(e), "f")
                }
                async fetchSubnetKeys(e) {
                    let t = H.Principal.from(e),
                        r = (await (0, eh.request)({
                            canisterId: t,
                            paths: ["subnet"],
                            agent: this
                        })).get("subnet");
                    if (r && "object" == typeof r && "nodeKeys" in r) return eV(this, k, "f").set(t.toText(), r), r
                }
                _transform(e) {
                    let t = Promise.resolve(e);
                    if ("call" === e.endpoint)
                        for (let e of eV(this, L, "f")) t = t.then(t => e(t).then(e => e || t));
                    else
                        for (let e of eV(this, P, "f")) t = t.then(t => e(t).then(e => e || t));
                    return t
                }
            }
            B = new WeakMap, I = new WeakMap, N = new WeakMap, T = new WeakMap, A = new WeakMap, O = new WeakMap, S = new WeakMap, R = new WeakMap, U = new WeakMap, F = new WeakMap, P = new WeakMap, L = new WeakMap, k = new WeakMap, V = new WeakMap, j = new WeakMap, x = new WeakSet, C = async function e(t) {
                var r, n;
                let i;
                let {
                    ecid: a,
                    transformedRequest: s,
                    body: o,
                    requestId: u,
                    backoff: c,
                    tries: f
                } = t, l = 0 === f ? 0 : c.next();
                if (this.log.print(`fetching "/api/v2/canister/${a.toString()}/query" with tries:`, {
                        tries: f,
                        backoff: c,
                        delay: l
                    }), null === l) throw new W.e(`Timestamp failed to pass the watermark after retrying the configured ${eV(this,R,"f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
                l > 0 && await new Promise(e => setTimeout(e, l));
                try {
                    this.log.print(`fetching "/api/v2/canister/${a.toString()}/query" with request:`, s);
                    let e = await eV(this, I, "f").call(this, "" + new URL(`/api/v2/canister/${a.toString()}/query`, this.host), Object.assign(Object.assign(Object.assign({}, eV(this, N, "f")), s.request), {
                        body: o
                    }));
                    if (200 === e.status) {
                        let t = et.decode(await e.arrayBuffer());
                        i = Object.assign(Object.assign({}, t), {
                            httpDetails: {
                                ok: e.ok,
                                status: e.status,
                                statusText: e.statusText,
                                headers: ef(e.headers)
                            },
                            requestId: u
                        })
                    } else throw new el(`Gateway returned an error:
  Code: ${e.status} (${e.statusText})
  Body: ${await e.text()}
`, {
                        ok: e.ok,
                        status: e.status,
                        statusText: e.statusText,
                        headers: ef(e.headers)
                    })
                } catch (r) {
                    if (f < eV(this, R, "f")) return this.log.warn(`Caught exception while attempting to make query:
  ${r}
  Retrying query.`), await eV(this, x, "m", e).call(this, Object.assign(Object.assign({}, t), {
                        tries: f + 1
                    }));
                    throw r
                }
                let h = null === (n = null === (r = i.signatures) || void 0 === r ? void 0 : r[0]) || void 0 === n ? void 0 : n.timestamp;
                if (!eV(this, V, "f")) return i;
                if (!h) throw Error("Timestamp not found in query response. This suggests a malformed or malicious response.");
                let d = Number(BigInt(h) / BigInt(1e6));
                if (this.log.print("watermark and timestamp", {
                        waterMark: this.waterMark,
                        timestamp: d
                    }), Number(this.waterMark) > d) {
                    let r = new W.e("Timestamp is below the watermark. Retrying query.");
                    if (this.log.error("Timestamp is below", r, {
                            timestamp: h,
                            waterMark: this.waterMark
                        }), f < eV(this, R, "f")) return await eV(this, x, "m", e).call(this, Object.assign(Object.assign({}, t), {
                        tries: f + 1
                    }));
                    throw new W.e(`Timestamp failed to pass the watermark after retrying the configured ${eV(this,R,"f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`)
                }
                return i
            }, M = async function e(t) {
                let r;
                let {
                    request: n,
                    backoff: i,
                    tries: a
                } = t, s = 0 === a ? 0 : i.next();
                if (null === s) throw new W.e(`Timestamp failed to pass the watermark after retrying the configured ${eV(this,R,"f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
                s > 0 && await new Promise(e => setTimeout(e, s));
                try {
                    r = await n()
                } catch (t) {
                    if (eV(this, R, "f") > a) return this.log.warn(`Caught exception while attempting to make request:
  ${t}
  Retrying request.`), await eV(this, x, "m", e).call(this, {
                        request: n,
                        backoff: i,
                        tries: a + 1
                    });
                    throw t
                }
                if (r.ok) return r;
                let o = await r.clone().text(),
                    u = `Server returned an error:
  Code: ${r.status} (${r.statusText})
  Body: ${o}
`;
                if (a < eV(this, R, "f")) return await eV(this, x, "m", e).call(this, {
                    request: n,
                    backoff: i,
                    tries: a + 1
                });
                throw new el(u, {
                    ok: r.ok,
                    status: r.status,
                    statusText: r.statusText,
                    headers: ef(r.headers)
                })
            }, (a = q || (q = {})).Error = "err", a.GetPrincipal = "gp", a.GetPrincipalResponse = "gpr", a.Query = "q", a.QueryResponse = "qr", a.Call = "c", a.CallResponse = "cr", a.ReadState = "rs", a.ReadStateResponse = "rsr", a.Status = "s", a.StatusResponse = "sr";
            class eD {
                constructor(e, t) {
                    this._frontend = e, this._agent = t
                }
                onmessage(e) {
                    switch (e.type) {
                        case q.GetPrincipal:
                            this._agent.getPrincipal().then(t => {
                                this._frontend({
                                    id: e.id,
                                    type: q.GetPrincipalResponse,
                                    response: t.toText()
                                })
                            });
                            break;
                        case q.Query:
                            this._agent.query(...e.args).then(t => {
                                this._frontend({
                                    id: e.id,
                                    type: q.QueryResponse,
                                    response: t
                                })
                            });
                            break;
                        case q.Call:
                            this._agent.call(...e.args).then(t => {
                                this._frontend({
                                    id: e.id,
                                    type: q.CallResponse,
                                    response: t
                                })
                            });
                            break;
                        case q.ReadState:
                            this._agent.readState(...e.args).then(t => {
                                this._frontend({
                                    id: e.id,
                                    type: q.ReadStateResponse,
                                    response: t
                                })
                            });
                            break;
                        case q.Status:
                            this._agent.status().then(t => {
                                this._frontend({
                                    id: e.id,
                                    type: q.StatusResponse,
                                    response: t
                                })
                            });
                            break;
                        default:
                            throw Error(`Invalid message received: ${JSON.stringify(e)}`)
                    }
                }
            }
            class eG {
                constructor(e) {
                    this._backend = e, this._nextId = 0, this._pendingCalls = new Map, this.rootKey = null
                }
                onmessage(e) {
                    let t = e.id,
                        r = this._pendingCalls.get(t);
                    if (!r) throw Error("A proxy get the same message twice...");
                    this._pendingCalls.delete(t);
                    let [n, i] = r;
                    switch (e.type) {
                        case q.Error:
                            return i(e.error);
                        case q.GetPrincipalResponse:
                        case q.CallResponse:
                        case q.QueryResponse:
                        case q.ReadStateResponse:
                        case q.StatusResponse:
                            return n(e.response);
                        default:
                            throw Error(`Invalid message being sent to ProxyAgent: ${JSON.stringify(e)}`)
                    }
                }
                async getPrincipal() {
                    return this._sendAndWait({
                        id: this._nextId++,
                        type: q.GetPrincipal
                    }).then(e => {
                        if ("string" != typeof e) throw Error("Invalid principal received.");
                        return H.Principal.fromText(e)
                    })
                }
                readState(e, t) {
                    return this._sendAndWait({
                        id: this._nextId++,
                        type: q.ReadState,
                        args: [e.toString(), t]
                    })
                }
                call(e, t) {
                    return this._sendAndWait({
                        id: this._nextId++,
                        type: q.Call,
                        args: [e.toString(), t]
                    })
                }
                status() {
                    return this._sendAndWait({
                        id: this._nextId++,
                        type: q.Status
                    })
                }
                query(e, t) {
                    return this._sendAndWait({
                        id: this._nextId++,
                        type: q.Query,
                        args: [e.toString(), t]
                    })
                }
                async _sendAndWait(e) {
                    return new Promise((t, r) => {
                        this._pendingCalls.set(e.id, [t, r]), this._backend(e)
                    })
                }
                async fetchRootKey() {
                    let e = (await this.status()).root_key;
                    return this.rootKey = e, e
                }
            }

            function ez() {
                let e = "undefined" == typeof window ? void 0 === r.g ? "undefined" == typeof self ? void 0 : self.ic.agent : r.g.ic.agent : window.ic.agent;
                if (!e) throw Error("No Agent could be found.");
                return e
            }

            function eH() {
                return eX(eZ(eW(), 1e3), eJ(1e3, 1.2), eQ(3e5))
            }

            function eW() {
                let e = !0;
                return async () => !!e && (e = !1, !0)
            }

            function eZ(e, t) {
                return async (r, n, i) => {
                    if (await e(r, n, i)) return new Promise(e => setTimeout(e, t))
                }
            }

            function eK(e) {
                let t = e;
                return async (r, n, i) => {
                    if (--t <= 0) throw Error(`Failed to retrieve a reply for request after ${e} attempts:
  Request ID: ${(0,K.NC)(n)}
  Request status: ${i}
`)
                }
            }

            function eY(e) {
                return () => new Promise(t => setTimeout(t, e))
            }

            function eQ(e) {
                let t = Date.now() + e;
                return async (r, n, i) => {
                    if (Date.now() > t) throw Error(`Request timed out after ${e} msec:
  Request ID: ${(0,K.NC)(n)}
  Request status: ${i}
`)
                }
            }

            function eJ(e, t) {
                let r = e;
                return () => new Promise(e => setTimeout(() => {
                    r *= t, e()
                }, r))
            }

            function eX(...e) {
                return async (t, r, n) => {
                    for (let i of e) await i(t, r, n)
                }
            }
            async function e0(e, t, r, n, i, a) {
                var s;
                let o;
                let u = [new TextEncoder().encode("request_status"), r],
                    c = null != i ? i : await (null === (s = e.createReadStateRequest) || void 0 === s ? void 0 : s.call(e, {
                        paths: [u]
                    })),
                    f = await e.readState(t, {
                        paths: [u]
                    }, void 0, c);
                if (null == e.rootKey) throw Error("Agent root key not initialized before polling");
                let l = await ed.KB.create({
                        certificate: f.certificate,
                        rootKey: e.rootKey,
                        canisterId: t,
                        blsVerify: a
                    }),
                    h = (0, ed.ti)(l.lookup([...u, new TextEncoder().encode("status")]));
                switch (o = void 0 === h ? $.Unknown : new TextDecoder().decode(h)) {
                    case $.Replied:
                        return {
                            reply: (0, ed.ti)(l.lookup([...u, "reply"])),
                            certificate: l
                        };
                    case $.Received:
                    case $.Unknown:
                    case $.Processing:
                        return await n(t, r, o), e0(e, t, r, n, c);
                    case $.Rejected:
                        {
                            let e = new Uint8Array((0, ed.ti)(l.lookup([...u, "reject_code"])))[0],
                                t = new TextDecoder().decode((0, ed.ti)(l.lookup([...u, "reject_message"])));
                            throw Error(`Call was rejected:
  Request ID: ${(0,K.NC)(r)}
  Reject code: ${e}
  Reject text: ${t}
`)
                        }
                    case $.Done:
                        throw Error(`Call was marked as done but we never saw the reply:
  Request ID: ${(0,K.NC)(r)}
`)
                }
                throw Error("unreachable")
            }
            var e1 = ({
                IDL: e
            }) => {
                let t = e.Variant({
                        mainnet: e.Null,
                        testnet: e.Null
                    }),
                    r = e.Text,
                    n = e.Record({
                        network: t,
                        address: r,
                        min_confirmations: e.Opt(e.Nat32)
                    }),
                    i = e.Nat64,
                    a = e.Record({
                        network: t
                    }),
                    s = e.Nat64,
                    o = e.Vec(s),
                    u = e.Record({
                        network: t,
                        filter: e.Opt(e.Variant({
                            page: e.Vec(e.Nat8),
                            min_confirmations: e.Nat32
                        })),
                        address: r
                    }),
                    c = e.Vec(e.Nat8),
                    f = e.Record({
                        txid: e.Vec(e.Nat8),
                        vout: e.Nat32
                    }),
                    l = e.Record({
                        height: e.Nat32,
                        value: i,
                        outpoint: f
                    }),
                    h = e.Record({
                        next_page: e.Opt(e.Vec(e.Nat8)),
                        tip_height: e.Nat32,
                        tip_block_hash: c,
                        utxos: e.Vec(l)
                    }),
                    d = e.Record({
                        transaction: e.Vec(e.Nat8),
                        network: t
                    }),
                    p = e.Principal,
                    g = e.Record({
                        canister_id: p,
                        num_requested_changes: e.Opt(e.Nat64)
                    }),
                    y = e.Variant({
                        from_user: e.Record({
                            user_id: e.Principal
                        }),
                        from_canister: e.Record({
                            canister_version: e.Opt(e.Nat64),
                            canister_id: e.Principal
                        })
                    }),
                    b = e.Variant({
                        creation: e.Record({
                            controllers: e.Vec(e.Principal)
                        }),
                        code_deployment: e.Record({
                            mode: e.Variant({
                                reinstall: e.Null,
                                upgrade: e.Null,
                                install: e.Null
                            }),
                            module_hash: e.Vec(e.Nat8)
                        }),
                        controllers_change: e.Record({
                            controllers: e.Vec(e.Principal)
                        }),
                        code_uninstall: e.Null
                    }),
                    m = e.Record({
                        timestamp_nanos: e.Nat64,
                        canister_version: e.Nat64,
                        origin: y,
                        details: b
                    }),
                    w = e.Record({
                        controllers: e.Vec(e.Principal),
                        module_hash: e.Opt(e.Vec(e.Nat8)),
                        recent_changes: e.Vec(m),
                        total_num_changes: e.Nat64
                    }),
                    _ = e.Record({
                        canister_id: p
                    }),
                    v = e.Variant({
                        controllers: e.Null,
                        public: e.Null
                    }),
                    E = e.Record({
                        freezing_threshold: e.Nat,
                        controllers: e.Vec(e.Principal),
                        reserved_cycles_limit: e.Nat,
                        log_visibility: v,
                        wasm_memory_limit: e.Nat,
                        memory_allocation: e.Nat,
                        compute_allocation: e.Nat
                    }),
                    x = e.Record({
                        status: e.Variant({
                            stopped: e.Null,
                            stopping: e.Null,
                            running: e.Null
                        }),
                        memory_size: e.Nat,
                        cycles: e.Nat,
                        settings: E,
                        query_stats: e.Record({
                            response_payload_bytes_total: e.Nat,
                            num_instructions_total: e.Nat,
                            num_calls_total: e.Nat,
                            request_payload_bytes_total: e.Nat
                        }),
                        idle_cycles_burned_per_day: e.Nat,
                        module_hash: e.Opt(e.Vec(e.Nat8)),
                        reserved_cycles: e.Nat
                    }),
                    B = e.Record({
                        canister_id: p
                    }),
                    I = e.Record({
                        freezing_threshold: e.Opt(e.Nat),
                        controllers: e.Opt(e.Vec(e.Principal)),
                        reserved_cycles_limit: e.Opt(e.Nat),
                        log_visibility: e.Opt(v),
                        wasm_memory_limit: e.Opt(e.Nat),
                        memory_allocation: e.Opt(e.Nat),
                        compute_allocation: e.Opt(e.Nat)
                    }),
                    N = e.Record({
                        settings: e.Opt(I),
                        sender_canister_version: e.Opt(e.Nat64)
                    }),
                    T = e.Record({
                        canister_id: p
                    }),
                    A = e.Record({
                        canister_id: p
                    }),
                    O = e.Record({
                        canister_id: p
                    }),
                    S = e.Variant({
                        secp256k1: e.Null
                    }),
                    R = e.Record({
                        key_id: e.Record({
                            name: e.Text,
                            curve: S
                        }),
                        canister_id: e.Opt(p),
                        derivation_path: e.Vec(e.Vec(e.Nat8))
                    }),
                    U = e.Record({
                        public_key: e.Vec(e.Nat8),
                        chain_code: e.Vec(e.Nat8)
                    }),
                    F = e.Record({
                        canister_id: p
                    }),
                    P = e.Record({
                        idx: e.Nat64,
                        timestamp_nanos: e.Nat64,
                        content: e.Vec(e.Nat8)
                    }),
                    L = e.Record({
                        canister_log_records: e.Vec(P)
                    }),
                    k = e.Record({
                        value: e.Text,
                        name: e.Text
                    }),
                    V = e.Record({
                        status: e.Nat,
                        body: e.Vec(e.Nat8),
                        headers: e.Vec(k)
                    }),
                    C = e.Record({
                        url: e.Text,
                        method: e.Variant({
                            get: e.Null,
                            head: e.Null,
                            post: e.Null
                        }),
                        max_response_bytes: e.Opt(e.Nat64),
                        body: e.Opt(e.Vec(e.Nat8)),
                        transform: e.Opt(e.Record({
                            function: e.Func([e.Record({
                                context: e.Vec(e.Nat8),
                                response: V
                            })], [V], ["query"]),
                            context: e.Vec(e.Nat8)
                        })),
                        headers: e.Vec(k)
                    }),
                    M = e.Variant({
                        reinstall: e.Null,
                        upgrade: e.Opt(e.Record({
                            wasm_memory_persistence: e.Opt(e.Variant({
                                keep: e.Null,
                                replace: e.Null
                            })),
                            skip_pre_upgrade: e.Opt(e.Bool)
                        })),
                        install: e.Null
                    }),
                    j = e.Record({
                        hash: e.Vec(e.Nat8)
                    }),
                    $ = e.Record({
                        arg: e.Vec(e.Nat8),
                        wasm_module_hash: e.Vec(e.Nat8),
                        mode: M,
                        chunk_hashes_list: e.Vec(j),
                        target_canister: p,
                        store_canister: e.Opt(p),
                        sender_canister_version: e.Opt(e.Nat64)
                    }),
                    q = e.Vec(e.Nat8),
                    D = e.Record({
                        arg: e.Vec(e.Nat8),
                        wasm_module: q,
                        mode: M,
                        canister_id: p,
                        sender_canister_version: e.Opt(e.Nat64)
                    }),
                    G = e.Record({
                        start_at_timestamp_nanos: e.Nat64,
                        subnet_id: e.Principal
                    }),
                    z = e.Record({
                        num_block_failures_total: e.Nat64,
                        node_id: e.Principal,
                        num_blocks_proposed_total: e.Nat64
                    }),
                    H = e.Vec(e.Record({
                        timestamp_nanos: e.Nat64,
                        node_metrics: e.Vec(z)
                    })),
                    W = e.Record({
                        settings: e.Opt(I),
                        specified_id: e.Opt(p),
                        amount: e.Opt(e.Nat),
                        sender_canister_version: e.Opt(e.Nat64)
                    }),
                    Z = e.Record({
                        canister_id: p
                    }),
                    K = e.Record({
                        canister_id: p,
                        amount: e.Nat
                    }),
                    Y = e.Vec(e.Nat8),
                    Q = e.Record({
                        key_id: e.Record({
                            name: e.Text,
                            curve: S
                        }),
                        derivation_path: e.Vec(e.Vec(e.Nat8)),
                        message_hash: e.Vec(e.Nat8)
                    }),
                    J = e.Record({
                        signature: e.Vec(e.Nat8)
                    }),
                    X = e.Record({
                        canister_id: p
                    }),
                    ee = e.Record({
                        canister_id: p
                    }),
                    et = e.Record({
                        canister_id: p
                    }),
                    er = e.Vec(j),
                    en = e.Record({
                        canister_id: p,
                        sender_canister_version: e.Opt(e.Nat64)
                    }),
                    ei = e.Record({
                        canister_id: e.Principal,
                        settings: I,
                        sender_canister_version: e.Opt(e.Nat64)
                    }),
                    ea = e.Record({
                        chunk: e.Vec(e.Nat8),
                        canister_id: e.Principal
                    });
                return e.Service({
                    bitcoin_get_balance: e.Func([n], [i], []),
                    bitcoin_get_current_fee_percentiles: e.Func([a], [o], []),
                    bitcoin_get_utxos: e.Func([u], [h], []),
                    bitcoin_send_transaction: e.Func([d], [], []),
                    canister_info: e.Func([g], [w], []),
                    canister_status: e.Func([_], [x], []),
                    clear_chunk_store: e.Func([B], [], []),
                    create_canister: e.Func([N], [T], []),
                    delete_canister: e.Func([A], [], []),
                    deposit_cycles: e.Func([O], [], []),
                    ecdsa_public_key: e.Func([R], [U], []),
                    fetch_canister_logs: e.Func([F], [L], ["query"]),
                    http_request: e.Func([C], [V], []),
                    install_chunked_code: e.Func([$], [], []),
                    install_code: e.Func([D], [], []),
                    node_metrics_history: e.Func([G], [H], []),
                    provisional_create_canister_with_cycles: e.Func([W], [Z], []),
                    provisional_top_up_canister: e.Func([K], [], []),
                    raw_rand: e.Func([], [Y], []),
                    sign_with_ecdsa: e.Func([Q], [J], []),
                    start_canister: e.Func([X], [], []),
                    stop_canister: e.Func([ee], [], []),
                    stored_chunks: e.Func([et], [er], []),
                    uninstall_code: e.Func([en], [], []),
                    update_settings: e.Func([ei], [], []),
                    upload_chunk: e.Func([ea], [j], [])
                })
            };
            class e2 extends W.e {
                constructor(e, t, r, n) {
                    super(["Call failed:", `  Canister: ${e.toText()}`, `  Method: ${t} (${r})`, ...Object.getOwnPropertyNames(n).map(e => `  "${e}": ${JSON.stringify(n[e])}`)].join("\n")), this.canisterId = e, this.methodName = t, this.type = r, this.props = n
                }
            }
            class e3 extends e2 {
                constructor(e, t, r) {
                    var n;
                    super(e, t, "query", {
                        Status: r.status,
                        Code: null !== (n = s[r.reject_code]) && void 0 !== n ? n : `Unknown Code "${r.reject_code}"`,
                        Message: r.reject_message
                    }), this.result = r
                }
            }
            class e6 extends e2 {
                constructor(e, t, r, n) {
                    super(e, t, "update", Object.assign({
                        "Request ID": (0, K.NC)(r)
                    }, n.body ? Object.assign(Object.assign({}, n.body.error_code ? {
                        "Error code": n.body.error_code
                    } : {}), {
                        "Reject code": String(n.body.reject_code),
                        "Reject message": n.body.reject_message
                    }) : {
                        "HTTP status code": n.status.toString(),
                        "HTTP status text": n.statusText
                    })), this.requestId = r, this.response = n
                }
            }
            let e8 = Symbol.for("ic-agent-metadata");
            class e4 {
                constructor(e) {
                    this[e8] = Object.freeze(e)
                }
                static agentOf(e) {
                    return e[e8].config.agent
                }
                static interfaceOf(e) {
                    return e[e8].service
                }
                static canisterIdOf(e) {
                    return H.Principal.from(e[e8].config.canisterId)
                }
                static async install(e, t) {
                    let r = void 0 === e.mode ? {
                            install: null
                        } : e.mode,
                        n = e.arg ? [...new Uint8Array(e.arg)] : [],
                        i = [...new Uint8Array(e.module)],
                        a = "string" == typeof t.canisterId ? H.Principal.fromText(t.canisterId) : t.canisterId;
                    await tt(t).install_code({
                        mode: r,
                        arg: n,
                        wasm_module: i,
                        canister_id: a,
                        sender_canister_version: []
                    })
                }
                static async createCanister(e, t) {
                    var r;
                    let {
                        canister_id: n
                    } = await tt(e || {}).provisional_create_canister_with_cycles({
                        amount: [],
                        settings: [{
                            controllers: (r = t || {}).controllers ? [r.controllers] : [],
                            compute_allocation: r.compute_allocation ? [r.compute_allocation] : [],
                            freezing_threshold: r.freezing_threshold ? [r.freezing_threshold] : [],
                            memory_allocation: r.memory_allocation ? [r.memory_allocation] : [],
                            reserved_cycles_limit: [],
                            log_visibility: [],
                            wasm_memory_limit: []
                        }],
                        specified_id: [],
                        sender_canister_version: []
                    });
                    return n
                }
                static async createAndInstallCanister(e, t, r) {
                    let n = await this.createCanister(r);
                    return await this.install(Object.assign({}, t), Object.assign(Object.assign({}, r), {
                        canisterId: n
                    })), this.createActor(e, Object.assign(Object.assign({}, r), {
                        canisterId: n
                    }))
                }
                static createActorClass(e, t) {
                    let r = e({
                        IDL: er.xO
                    });
                    class n extends e4 {
                        constructor(e) {
                            if (!e.canisterId) throw new W.e(`Canister ID is required, but received ${typeof e.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
                            for (let [n, i] of (super({
                                    config: Object.assign(Object.assign(Object.assign({}, e7), e), {
                                        canisterId: "string" == typeof e.canisterId ? H.Principal.fromText(e.canisterId) : e.canisterId
                                    }),
                                    service: r
                                }), r._fields))(null == t ? void 0 : t.httpDetails) && i.annotations.push(e9), (null == t ? void 0 : t.certificate) && i.annotations.push(te), this[n] = function(e, t, r, n) {
                                let i;
                                i = r.annotations.includes("query") || r.annotations.includes("composite_query") ? async (n, ...i) => {
                                    var a, s;
                                    let o = (n = Object.assign(Object.assign({}, n), null === (s = (a = e[e8].config).queryTransform) || void 0 === s ? void 0 : s.call(a, t, i, Object.assign(Object.assign({}, e[e8].config), n)))).agent || e[e8].config.agent || ez(),
                                        u = H.Principal.from(n.canisterId || e[e8].config.canisterId),
                                        c = er.xO.encode(r.argTypes, i),
                                        f = await o.query(u, {
                                            methodName: t,
                                            arg: c,
                                            effectiveCanisterId: n.effectiveCanisterId
                                        }),
                                        l = Object.assign(Object.assign({}, f.httpDetails), {
                                            requestDetails: f.requestDetails
                                        });
                                    switch (f.status) {
                                        case "rejected":
                                            throw new e3(u, t, f);
                                        case "replied":
                                            return r.annotations.includes(e9) ? {
                                                httpDetails: l,
                                                result: e5(r.retTypes, f.reply.arg)
                                            } : e5(r.retTypes, f.reply.arg)
                                    }
                                } : async (i, ...a) => {
                                    var s, o;
                                    let u = (i = Object.assign(Object.assign({}, i), null === (o = (s = e[e8].config).callTransform) || void 0 === o ? void 0 : o.call(s, t, a, Object.assign(Object.assign({}, e[e8].config), i)))).agent || e[e8].config.agent || ez(),
                                        {
                                            canisterId: c,
                                            effectiveCanisterId: f,
                                            pollingStrategyFactory: l
                                        } = Object.assign(Object.assign(Object.assign({}, e7), e[e8].config), i),
                                        h = H.Principal.from(c),
                                        d = void 0 !== f ? H.Principal.from(f) : h,
                                        p = er.xO.encode(r.argTypes, a),
                                        {
                                            requestId: g,
                                            response: y,
                                            requestDetails: b
                                        } = await u.call(h, {
                                            methodName: t,
                                            arg: p,
                                            effectiveCanisterId: d
                                        });
                                    if (!y.ok || y.body) throw new e6(h, t, g, y);
                                    let m = l(),
                                        {
                                            certificate: w,
                                            reply: _
                                        } = await e0(u, d, g, m, n),
                                        v = r.annotations.includes(e9),
                                        E = r.annotations.includes(te),
                                        x = Object.assign(Object.assign({}, y), {
                                            requestDetails: b
                                        });
                                    if (void 0 !== _) return v && E ? {
                                        httpDetails: x,
                                        certificate: w,
                                        result: e5(r.retTypes, _)
                                    } : E ? {
                                        certificate: w,
                                        result: e5(r.retTypes, _)
                                    } : v ? {
                                        httpDetails: x,
                                        result: e5(r.retTypes, _)
                                    } : e5(r.retTypes, _);
                                    if (0 === r.retTypes.length) return v ? {
                                        httpDetails: y,
                                        result: void 0
                                    } : void 0;
                                    throw Error(`Call was returned undefined, but type [${r.retTypes.join(",")}].`)
                                };
                                let a = (...e) => i({}, ...e);
                                return a.withOptions = e => (...t) => i(e, ...t), a
                            }(this, n, i, e.blsVerify)
                        }
                    }
                    return n
                }
                static createActor(e, t) {
                    if (!t.canisterId) throw new W.e(`Canister ID is required, but received ${typeof t.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`);
                    return new(this.createActorClass(e))(t)
                }
                static createActorWithHttpDetails(e, t) {
                    return new(this.createActorClass(e, {
                        httpDetails: !0
                    }))(t)
                }
                static createActorWithExtendedDetails(e, t, r = {
                    httpDetails: !0,
                    certificate: !0
                }) {
                    return new(this.createActorClass(e, r))(t)
                }
            }

            function e5(e, t) {
                let r = er.xO.decode(e, z.lW.from(t));
                switch (r.length) {
                    case 0:
                        return;
                    case 1:
                        return r[0];
                    default:
                        return r
                }
            }
            let e7 = {
                    pollingStrategyFactory: eH
                },
                e9 = "http-details",
                te = "certificate";

            function tt(e) {
                function t(t, r) {
                    if (e.effectiveCanisterId) return {
                        effectiveCanisterId: H.Principal.from(e.effectiveCanisterId)
                    };
                    let n = r[0],
                        i = H.Principal.fromHex("");
                    return n && "object" == typeof n && n.canister_id && (i = H.Principal.from(n.canister_id)), {
                        effectiveCanisterId: i
                    }
                }
                return e4.createActor(e1, Object.assign(Object.assign(Object.assign({}, e), {
                    canisterId: H.Principal.fromHex("")
                }), {
                    callTransform: t,
                    queryTransform: t
                }))
            }
            class tr extends e4 {
                constructor(e) {
                    super(e)
                }
            }
            var tn = ({
                IDL: e
            }) => e.Service({
                retrieve: e.Func([e.Text], [e.Vec(e.Nat8)], ["query"]),
                store: e.Func([e.Text, e.Vec(e.Nat8)], [], [])
            });

            function ti(e) {
                return e4.createActor(tn, e)
            }
            async function ta(e, t) {
                t || (t = await eq.create());
                let r = (await eh.request({
                    agent: t,
                    canisterId: H.Principal.fromText(e),
                    paths: ["candid"]
                })).get("candid");
                if (r) return r;
                let n = e4.createActor(({
                    IDL: e
                }) => e.Service({
                    __get_candid_interface_tmp_hack: e.Func([], [e.Text], ["query"])
                }), {
                    agent: t,
                    canisterId: e
                });
                return await n.__get_candid_interface_tmp_hack()
            }
            var ts = r(93024)
        },
        53575: function(e, t, r) {
            "use strict";
            r.d(t, {
                E$: function() {
                    return l
                },
                fm: function() {
                    return u
                },
                vH: function() {
                    return f
                },
                vp: function() {
                    return o
                }
            });
            var n = r(70764),
                i = r(4044),
                a = r(65530),
                s = r(94312);

            function o(e) {
                return (0, s.wy)(a.J.create().update(new Uint8Array(e)).digest())
            }

            function u(e) {
                if (e instanceof i.Tagged) return u(e.value);
                if ("string" == typeof e) return c(e);
                if ("number" == typeof e) return o((0, n.dZ)(e));
                if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) return o(e);
                if (Array.isArray(e)) {
                    let t = e.map(u);
                    return o((0, s.zo)(...t))
                }
                if (e && "object" == typeof e && e._isPrincipal) return o(e.toUint8Array());
                if ("object" == typeof e && null !== e && "function" == typeof e.toHash) return u(e.toHash());
                else if ("object" == typeof e) return l(e);
                else if ("bigint" == typeof e) return o((0, n.dZ)(e));
                throw Object.assign(Error(`Attempt to hash a value of unsupported type: ${e}`), {
                    value: e
                })
            }
            let c = e => o(new TextEncoder().encode(e));

            function f(e) {
                return l(e)
            }

            function l(e) {
                let t = Object.entries(e).filter(([, e]) => void 0 !== e).map(([e, t]) => [c(e), u(t)]).sort(([e], [t]) => (0, s.qu)(e, t));
                return o((0, s.zo)(...t.map(e => (0, s.zo)(...e))))
            }
        },
        93024: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                O: function() {
                    return eN
                },
                T: function() {
                    return n
                }
            });
            var i = r(65530),
                a = r(68104),
                s = r(53554),
                o = r(91678);
            let u = o.bytesToNumberBE;

            function c(e, t) {
                if (e < 0 || e >= 1 << 8 * t) throw Error(`bad I2OSP call: value=${e} length=${t}`);
                let r = Array.from({
                    length: t
                }).fill(0);
                for (let n = t - 1; n >= 0; n--) r[n] = 255 & e, e >>>= 8;
                return new Uint8Array(r)
            }

            function f(e) {
                if (!Number.isSafeInteger(e)) throw Error("number expected")
            }

            function l(e, t, r) {
                let n;
                (0, o.FF)(r, {
                    DST: "stringOrUint8Array",
                    p: "bigint",
                    m: "isSafeInteger",
                    k: "isSafeInteger",
                    hash: "hash"
                });
                let {
                    p: i,
                    k: a,
                    m: l,
                    hash: h,
                    expand: d,
                    DST: p
                } = r;
                (0, o.gk)(e), f(t);
                let g = "string" == typeof p ? (0, o.iY)(p) : p,
                    y = Math.ceil((i.toString(2).length + a) / 8),
                    b = t * l * y;
                if ("xmd" === d) n = function(e, t, r, n) {
                    (0, o.gk)(e), (0, o.gk)(t), f(r), t.length > 255 && (t = n((0, o.eV)((0, o.iY)("H2C-OVERSIZE-DST-"), t)));
                    let {
                        outputLen: i,
                        blockLen: a
                    } = n, s = Math.ceil(r / i);
                    if (s > 255) throw Error("Invalid xmd length");
                    let u = (0, o.eV)(t, c(t.length, 1)),
                        l = c(0, a),
                        h = c(r, 2),
                        d = Array(s),
                        p = n((0, o.eV)(l, e, h, c(0, 1), u));
                    d[0] = n((0, o.eV)(p, c(1, 1), u));
                    for (let e = 1; e <= s; e++) {
                        let t = [function(e, t) {
                            let r = new Uint8Array(e.length);
                            for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
                            return r
                        }(p, d[e - 1]), c(e + 1, 1), u];
                        d[e] = n((0, o.eV)(...t))
                    }
                    return (0, o.eV)(...d).slice(0, r)
                }(e, g, b, h);
                else if ("xof" === d) n = function(e, t, r, n, i) {
                    if ((0, o.gk)(e), (0, o.gk)(t), f(r), t.length > 255 && (t = i.create({
                            dkLen: Math.ceil(2 * n / 8)
                        }).update((0, o.iY)("H2C-OVERSIZE-DST-")).update(t).digest()), r > 65535 || t.length > 255) throw Error("expand_message_xof: invalid lenInBytes");
                    return i.create({
                        dkLen: r
                    }).update(e).update(c(r, 2)).update(t).update(c(t.length, 1)).digest()
                }(e, g, b, a, h);
                else if ("_internal_pass" === d) n = e;
                else throw Error('expand must be "xmd" or "xof"');
                let m = Array(t);
                for (let e = 0; e < t; e++) {
                    let t = Array(l);
                    for (let r = 0; r < l; r++) {
                        let a = y * (r + e * l),
                            o = n.subarray(a, a + y);
                        t[r] = (0, s.wQ)(u(o), i)
                    }
                    m[e] = t
                }
                return m
            }

            function h(e, t) {
                let r = t.map(e => Array.from(e).reverse());
                return (t, n) => {
                    let [i, a, s, o] = r.map(r => r.reduce((r, n) => e.add(e.mul(r, t), n)));
                    return t = e.div(i, a), n = e.mul(n, e.div(s, o)), {
                        x: t,
                        y: n
                    }
                }
            }

            function d(e, t, r) {
                if ("function" != typeof t) throw Error("mapToCurve() must be defined");
                return {
                    hashToCurve(n, i) {
                        let a = l(n, 2, { ...r,
                                DST: r.DST,
                                ...i
                            }),
                            s = e.fromAffine(t(a[0])),
                            o = e.fromAffine(t(a[1])),
                            u = s.add(o).clearCofactor();
                        return u.assertValidity(), u
                    },
                    encodeToCurve(n, i) {
                        let a = l(n, 1, { ...r,
                                DST: r.encodeDST,
                                ...i
                            }),
                            s = e.fromAffine(t(a[0])).clearCofactor();
                        return s.assertValidity(), s
                    }
                }
            }
            var p = r(65332);
            let {
                bytesToNumberBE: g,
                hexToBytes: y
            } = o, b = BigInt(0), m = BigInt(1), w = BigInt(2), _ = BigInt(3), v = BigInt(4);

            function E(e) {
                let t = /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function(e) {
                        let t = (0, p.K)(e);
                        o.FF(t, {
                            a: "field",
                            b: "field"
                        }, {
                            allowedPrivateKeyLengths: "array",
                            wrapPrivateKey: "boolean",
                            isTorsionFree: "function",
                            clearCofactor: "function",
                            allowInfinityPoint: "boolean",
                            fromBytes: "function",
                            toBytes: "function"
                        });
                        let {
                            endo: r,
                            Fp: n,
                            a: i
                        } = t;
                        if (r) {
                            if (!n.eql(i, n.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                            if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                        }
                        return Object.freeze({ ...t
                        })
                    }(e),
                    {
                        Fp: r
                    } = t,
                    n = t.toBytes || ((e, t, n) => {
                        let i = t.toAffine();
                        return o.eV(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y))
                    }),
                    i = t.fromBytes || (e => {
                        let t = e.subarray(1);
                        return {
                            x: r.fromBytes(t.subarray(0, r.BYTES)),
                            y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES))
                        }
                    });

                function a(e) {
                    let {
                        a: n,
                        b: i
                    } = t, a = r.sqr(e), s = r.mul(a, e);
                    return r.add(r.add(s, r.mul(e, n)), i)
                }
                if (!r.eql(r.sqr(t.Gy), a(t.Gx))) throw Error("bad generator point: equation left != right");

                function u(e) {
                    return "bigint" == typeof e && b < e && e < t.n
                }

                function c(e) {
                    if (!u(e)) throw Error("Expected valid bigint: 0 < bigint < curve.n")
                }

                function f(e) {
                    let r;
                    let {
                        allowedPrivateKeyLengths: n,
                        nByteLength: i,
                        wrapPrivateKey: a,
                        n: u
                    } = t;
                    if (n && "bigint" != typeof e) {
                        if (o._t(e) && (e = o.ci(e)), "string" != typeof e || !n.includes(e.length)) throw Error("Invalid key");
                        e = e.padStart(2 * i, "0")
                    }
                    try {
                        r = "bigint" == typeof e ? e : o.bytesToNumberBE((0, o.ql)("private key", e, i))
                    } catch (t) {
                        throw Error(`private key must be ${i} bytes, hex or bigint, not ${typeof e}`)
                    }
                    return a && (r = s.wQ(r, u)), c(r), r
                }
                let l = new Map;

                function h(e) {
                    if (!(e instanceof d)) throw Error("ProjectivePoint expected")
                }
                class d {
                    constructor(e, t, n) {
                        if (this.px = e, this.py = t, this.pz = n, null == e || !r.isValid(e)) throw Error("x required");
                        if (null == t || !r.isValid(t)) throw Error("y required");
                        if (null == n || !r.isValid(n)) throw Error("z required")
                    }
                    static fromAffine(e) {
                        let {
                            x: t,
                            y: n
                        } = e || {};
                        if (!e || !r.isValid(t) || !r.isValid(n)) throw Error("invalid affine point");
                        if (e instanceof d) throw Error("projective point not allowed");
                        let i = e => r.eql(e, r.ZERO);
                        return i(t) && i(n) ? d.ZERO : new d(t, n, r.ONE)
                    }
                    get x() {
                        return this.toAffine().x
                    }
                    get y() {
                        return this.toAffine().y
                    }
                    static normalizeZ(e) {
                        let t = r.invertBatch(e.map(e => e.pz));
                        return e.map((e, r) => e.toAffine(t[r])).map(d.fromAffine)
                    }
                    static fromHex(e) {
                        let t = d.fromAffine(i((0, o.ql)("pointHex", e)));
                        return t.assertValidity(), t
                    }
                    static fromPrivateKey(e) {
                        return d.BASE.multiply(f(e))
                    }
                    _setWindowSize(e) {
                        this._WINDOW_SIZE = e, l.delete(this)
                    }
                    assertValidity() {
                        if (this.is0()) {
                            if (t.allowInfinityPoint && !r.is0(this.py)) return;
                            throw Error("bad point: ZERO")
                        }
                        let {
                            x: e,
                            y: n
                        } = this.toAffine();
                        if (!r.isValid(e) || !r.isValid(n)) throw Error("bad point: x or y not FE");
                        let i = r.sqr(n),
                            s = a(e);
                        if (!r.eql(i, s)) throw Error("bad point: equation left != right");
                        if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup")
                    }
                    hasEvenY() {
                        let {
                            y: e
                        } = this.toAffine();
                        if (r.isOdd) return !r.isOdd(e);
                        throw Error("Field doesn't support isOdd")
                    }
                    equals(e) {
                        h(e);
                        let {
                            px: t,
                            py: n,
                            pz: i
                        } = this, {
                            px: a,
                            py: s,
                            pz: o
                        } = e, u = r.eql(r.mul(t, o), r.mul(a, i)), c = r.eql(r.mul(n, o), r.mul(s, i));
                        return u && c
                    }
                    negate() {
                        return new d(this.px, r.neg(this.py), this.pz)
                    }
                    double() {
                        let {
                            a: e,
                            b: n
                        } = t, i = r.mul(n, _), {
                            px: a,
                            py: s,
                            pz: o
                        } = this, u = r.ZERO, c = r.ZERO, f = r.ZERO, l = r.mul(a, a), h = r.mul(s, s), p = r.mul(o, o), g = r.mul(a, s);
                        return g = r.add(g, g), f = r.mul(a, o), f = r.add(f, f), u = r.mul(e, f), c = r.mul(i, p), c = r.add(u, c), u = r.sub(h, c), c = r.add(h, c), c = r.mul(u, c), u = r.mul(g, u), f = r.mul(i, f), p = r.mul(e, p), g = r.sub(l, p), g = r.mul(e, g), g = r.add(g, f), f = r.add(l, l), l = r.add(f, l), l = r.add(l, p), l = r.mul(l, g), c = r.add(c, l), p = r.mul(s, o), p = r.add(p, p), l = r.mul(p, g), u = r.sub(u, l), f = r.mul(p, h), f = r.add(f, f), new d(u, c, f = r.add(f, f))
                    }
                    add(e) {
                        h(e);
                        let {
                            px: n,
                            py: i,
                            pz: a
                        } = this, {
                            px: s,
                            py: o,
                            pz: u
                        } = e, c = r.ZERO, f = r.ZERO, l = r.ZERO, p = t.a, g = r.mul(t.b, _), y = r.mul(n, s), b = r.mul(i, o), m = r.mul(a, u), w = r.add(n, i), v = r.add(s, o);
                        w = r.mul(w, v), v = r.add(y, b), w = r.sub(w, v), v = r.add(n, a);
                        let E = r.add(s, u);
                        return v = r.mul(v, E), E = r.add(y, m), v = r.sub(v, E), E = r.add(i, a), c = r.add(o, u), E = r.mul(E, c), c = r.add(b, m), E = r.sub(E, c), l = r.mul(p, v), c = r.mul(g, m), l = r.add(c, l), c = r.sub(b, l), l = r.add(b, l), f = r.mul(c, l), b = r.add(y, y), b = r.add(b, y), m = r.mul(p, m), v = r.mul(g, v), b = r.add(b, m), m = r.sub(y, m), m = r.mul(p, m), v = r.add(v, m), y = r.mul(b, v), f = r.add(f, y), y = r.mul(E, v), c = r.mul(w, c), c = r.sub(c, y), y = r.mul(w, b), l = r.mul(E, l), new d(c, f, l = r.add(l, y))
                    }
                    subtract(e) {
                        return this.add(e.negate())
                    }
                    is0() {
                        return this.equals(d.ZERO)
                    }
                    wNAF(e) {
                        return y.wNAFCached(this, l, e, e => {
                            let t = r.invertBatch(e.map(e => e.pz));
                            return e.map((e, r) => e.toAffine(t[r])).map(d.fromAffine)
                        })
                    }
                    multiplyUnsafe(e) {
                        let n = d.ZERO;
                        if (e === b) return n;
                        if (c(e), e === m) return this;
                        let {
                            endo: i
                        } = t;
                        if (!i) return y.unsafeLadder(this, e);
                        let {
                            k1neg: a,
                            k1: s,
                            k2neg: o,
                            k2: u
                        } = i.splitScalar(e), f = n, l = n, h = this;
                        for (; s > b || u > b;) s & m && (f = f.add(h)), u & m && (l = l.add(h)), h = h.double(), s >>= m, u >>= m;
                        return a && (f = f.negate()), o && (l = l.negate()), l = new d(r.mul(l.px, i.beta), l.py, l.pz), f.add(l)
                    }
                    multiply(e) {
                        let n, i;
                        c(e);
                        let {
                            endo: a
                        } = t;
                        if (a) {
                            let {
                                k1neg: t,
                                k1: s,
                                k2neg: o,
                                k2: u
                            } = a.splitScalar(e), {
                                p: c,
                                f: f
                            } = this.wNAF(s), {
                                p: l,
                                f: h
                            } = this.wNAF(u);
                            c = y.constTimeNegate(t, c), l = y.constTimeNegate(o, l), l = new d(r.mul(l.px, a.beta), l.py, l.pz), n = c.add(l), i = f.add(h)
                        } else {
                            let {
                                p: t,
                                f: r
                            } = this.wNAF(e);
                            n = t, i = r
                        }
                        return d.normalizeZ([n, i])[0]
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                        let n = d.BASE,
                            i = (e, t) => t !== b && t !== m && e.equals(n) ? e.multiply(t) : e.multiplyUnsafe(t),
                            a = i(this, t).add(i(e, r));
                        return a.is0() ? void 0 : a
                    }
                    toAffine(e) {
                        let {
                            px: t,
                            py: n,
                            pz: i
                        } = this, a = this.is0();
                        null == e && (e = a ? r.ONE : r.inv(i));
                        let s = r.mul(t, e),
                            o = r.mul(n, e),
                            u = r.mul(i, e);
                        if (a) return {
                            x: r.ZERO,
                            y: r.ZERO
                        };
                        if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                        return {
                            x: s,
                            y: o
                        }
                    }
                    isTorsionFree() {
                        let {
                            h: e,
                            isTorsionFree: r
                        } = t;
                        if (e === m) return !0;
                        if (r) return r(d, this);
                        throw Error("isTorsionFree() has not been declared for the elliptic curve")
                    }
                    clearCofactor() {
                        let {
                            h: e,
                            clearCofactor: r
                        } = t;
                        return e === m ? this : r ? r(d, this) : this.multiplyUnsafe(t.h)
                    }
                    toRawBytes(e = !0) {
                        return this.assertValidity(), n(d, this, e)
                    }
                    toHex(e = !0) {
                        return o.ci(this.toRawBytes(e))
                    }
                }
                d.BASE = new d(t.Gx, t.Gy, r.ONE), d.ZERO = new d(r.ZERO, r.ONE, r.ZERO);
                let g = t.nBitLength,
                    y = (0, p.M)(d, t.endo ? Math.ceil(g / 2) : g);
                return {
                    CURVE: t,
                    ProjectivePoint: d,
                    normPrivateKeyToScalar: f,
                    weierstrassEquation: a,
                    isWithinCurveOrder: u
                }
            }

            function x(e, t) {
                if (s.OP(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)) throw Error("mapToCurveSimpleSWU: invalid opts");
                let r = function(e, t) {
                    let r = e.ORDER,
                        n = b;
                    for (let e = r - m; e % w === b; e /= w) n += m;
                    let i = n,
                        a = w << i - m - m,
                        s = a * w,
                        o = (r - m) / s,
                        u = (o - m) / w,
                        c = s - m,
                        f = e.pow(t, o),
                        l = e.pow(t, (o + m) / w),
                        h = (t, r) => {
                            let n = f,
                                s = e.pow(r, c),
                                o = e.sqr(s);
                            o = e.mul(o, r);
                            let h = e.mul(t, o);
                            h = e.pow(h, u), h = e.mul(h, s), s = e.mul(h, r), o = e.mul(h, t);
                            let d = e.mul(o, s);
                            h = e.pow(d, a);
                            let p = e.eql(h, e.ONE);
                            s = e.mul(o, l), h = e.mul(d, n), o = e.cmov(s, o, p), d = e.cmov(h, d, p);
                            for (let t = i; t > m; t--) {
                                let r = t - w;
                                r = w << r - m;
                                let i = e.pow(d, r),
                                    a = e.eql(i, e.ONE);
                                s = e.mul(o, n), n = e.mul(n, n), i = e.mul(d, n), o = e.cmov(s, o, a), d = e.cmov(i, d, a)
                            }
                            return {
                                isValid: p,
                                value: o
                            }
                        };
                    if (e.ORDER % v === _) {
                        let r = (e.ORDER - _) / v,
                            n = e.sqrt(e.neg(t));
                        h = (t, i) => {
                            let a = e.sqr(i),
                                s = e.mul(t, i);
                            a = e.mul(a, s);
                            let o = e.pow(a, r);
                            o = e.mul(o, s);
                            let u = e.mul(o, n),
                                c = e.mul(e.sqr(o), i),
                                f = e.eql(c, t),
                                l = e.cmov(u, o, f);
                            return {
                                isValid: f,
                                value: l
                            }
                        }
                    }
                    return h
                }(e, t.Z);
                if (!e.isOdd) throw Error("Fp.isOdd is not implemented!");
                return n => {
                    let i, a, s, o, u, c, f, l;
                    i = e.sqr(n), i = e.mul(i, t.Z), a = e.sqr(i), a = e.add(a, i), s = e.add(a, e.ONE), s = e.mul(s, t.B), o = e.cmov(t.Z, e.neg(a), !e.eql(a, e.ZERO)), o = e.mul(o, t.A), a = e.sqr(s), c = e.sqr(o), u = e.mul(c, t.A), a = e.add(a, u), a = e.mul(a, s), c = e.mul(c, o), u = e.mul(c, t.B), a = e.add(a, u), f = e.mul(i, s);
                    let {
                        isValid: h,
                        value: d
                    } = r(a, c);
                    l = e.mul(i, n), l = e.mul(l, d), f = e.cmov(f, s, h), l = e.cmov(l, d, h);
                    let p = e.isOdd(n) === e.isOdd(l);
                    return l = e.cmov(e.neg(l), l, p), {
                        x: f = e.div(f, o),
                        y: l
                    }
                }
            }
            let B = BigInt(2),
                I = BigInt(3),
                N = BigInt(0),
                T = BigInt(1),
                A = BigInt(2),
                O = BigInt(3),
                S = BigInt(4),
                R = BigInt(8),
                U = BigInt(16),
                F = BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
                P = s.gN(F),
                L = s.gN(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001")),
                k = ({
                    c0: e,
                    c1: t
                }, {
                    c0: r,
                    c1: n
                }) => ({
                    c0: P.add(e, r),
                    c1: P.add(t, n)
                }),
                V = ({
                    c0: e,
                    c1: t
                }, {
                    c0: r,
                    c1: n
                }) => ({
                    c0: P.sub(e, r),
                    c1: P.sub(t, n)
                }),
                C = ({
                    c0: e,
                    c1: t
                }, r) => {
                    if ("bigint" == typeof r) return {
                        c0: P.mul(e, r),
                        c1: P.mul(t, r)
                    };
                    let {
                        c0: n,
                        c1: i
                    } = r, a = P.mul(e, n), s = P.mul(t, i);
                    return {
                        c0: P.sub(a, s),
                        c1: P.sub(P.mul(P.add(e, t), P.add(n, i)), P.add(a, s))
                    }
                },
                M = ({
                    c0: e,
                    c1: t
                }) => {
                    let r = P.add(e, t),
                        n = P.sub(e, t),
                        i = P.add(e, e);
                    return {
                        c0: P.mul(r, n),
                        c1: P.mul(i, t)
                    }
                },
                j = F * F,
                $ = {
                    ORDER: j,
                    BITS: (0, o.Dd)(j),
                    BYTES: Math.ceil((0, o.Dd)(j) / 8),
                    MASK: (0, o.dQ)((0, o.Dd)(j)),
                    ZERO: {
                        c0: P.ZERO,
                        c1: P.ZERO
                    },
                    ONE: {
                        c0: P.ONE,
                        c1: P.ZERO
                    },
                    create: e => e,
                    isValid: ({
                        c0: e,
                        c1: t
                    }) => "bigint" == typeof e && "bigint" == typeof t,
                    is0: ({
                        c0: e,
                        c1: t
                    }) => P.is0(e) && P.is0(t),
                    eql: ({
                        c0: e,
                        c1: t
                    }, {
                        c0: r,
                        c1: n
                    }) => P.eql(e, r) && P.eql(t, n),
                    neg: ({
                        c0: e,
                        c1: t
                    }) => ({
                        c0: P.neg(e),
                        c1: P.neg(t)
                    }),
                    pow: (e, t) => s.Q($, e, t),
                    invertBatch: e => s.Eg($, e),
                    add: k,
                    sub: V,
                    mul: C,
                    sqr: M,
                    addN: k,
                    subN: V,
                    mulN: C,
                    sqrN: M,
                    div: (e, t) => $.mul(e, "bigint" == typeof t ? P.inv(P.create(t)) : $.inv(t)),
                    inv: ({
                        c0: e,
                        c1: t
                    }) => {
                        let r = P.inv(P.create(e * e + t * t));
                        return {
                            c0: P.mul(r, P.create(e)),
                            c1: P.mul(r, P.create(-t))
                        }
                    },
                    sqrt: e => {
                        if ($.eql(e, $.ZERO)) return $.ZERO;
                        let t = $.pow(e, ($.ORDER + R) / U),
                            r = $.div($.sqr(t), e),
                            n = [G[0], G[2], G[4], G[6]].find(e => $.eql(e, r));
                        if (!n) throw Error("No root");
                        let i = G.indexOf(n),
                            a = G[i / 2];
                        if (!a) throw Error("Invalid root");
                        let s = $.div(t, a),
                            o = $.neg(s),
                            {
                                re: u,
                                im: c
                            } = $.reim(s),
                            {
                                re: f,
                                im: l
                            } = $.reim(o);
                        return c > l || c === l && u > f ? s : o
                    },
                    isOdd: e => {
                        let {
                            re: t,
                            im: r
                        } = $.reim(e), n = t % A, i = t === N, a = r % A;
                        return BigInt(n || i && a) == T
                    },
                    fromBytes(e) {
                        if (e.length !== $.BYTES) throw Error(`fromBytes wrong length=${e.length}`);
                        return {
                            c0: P.fromBytes(e.subarray(0, P.BYTES)),
                            c1: P.fromBytes(e.subarray(P.BYTES))
                        }
                    },
                    toBytes: ({
                        c0: e,
                        c1: t
                    }) => (0, o.eV)(P.toBytes(e), P.toBytes(t)),
                    cmov: ({
                        c0: e,
                        c1: t
                    }, {
                        c0: r,
                        c1: n
                    }, i) => ({
                        c0: P.cmov(e, r, i),
                        c1: P.cmov(t, n, i)
                    }),
                    reim: ({
                        c0: e,
                        c1: t
                    }) => ({
                        re: e,
                        im: t
                    }),
                    mulByNonresidue: ({
                        c0: e,
                        c1: t
                    }) => ({
                        c0: P.sub(e, t),
                        c1: P.add(e, t)
                    }),
                    multiplyByB: ({
                        c0: e,
                        c1: t
                    }) => {
                        let r = P.mul(e, S),
                            n = P.mul(t, S);
                        return {
                            c0: P.sub(r, n),
                            c1: P.add(r, n)
                        }
                    },
                    fromBigTuple: e => {
                        if (2 !== e.length) throw Error("Invalid tuple");
                        let t = e.map(e => P.create(e));
                        return {
                            c0: t[0],
                            c1: t[1]
                        }
                    },
                    frobeniusMap: ({
                        c0: e,
                        c1: t
                    }, r) => ({
                        c0: e,
                        c1: P.mul(t, q[r % 2])
                    })
                },
                q = [BigInt("0x1"), BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa")].map(e => P.create(e)),
                D = BigInt("0x6af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09"),
                G = [
                    [T, N],
                    [D, -D],
                    [N, T],
                    [D, D],
                    [-T, N],
                    [-D, D],
                    [N, -T],
                    [-D, -D]
                ].map(e => $.fromBigTuple(e)),
                z = ({
                    c0: e,
                    c1: t,
                    c2: r
                }, {
                    c0: n,
                    c1: i,
                    c2: a
                }) => ({
                    c0: $.add(e, n),
                    c1: $.add(t, i),
                    c2: $.add(r, a)
                }),
                H = ({
                    c0: e,
                    c1: t,
                    c2: r
                }, {
                    c0: n,
                    c1: i,
                    c2: a
                }) => ({
                    c0: $.sub(e, n),
                    c1: $.sub(t, i),
                    c2: $.sub(r, a)
                }),
                W = ({
                    c0: e,
                    c1: t,
                    c2: r
                }, n) => {
                    if ("bigint" == typeof n) return {
                        c0: $.mul(e, n),
                        c1: $.mul(t, n),
                        c2: $.mul(r, n)
                    };
                    let {
                        c0: i,
                        c1: a,
                        c2: s
                    } = n, o = $.mul(e, i), u = $.mul(t, a), c = $.mul(r, s);
                    return {
                        c0: $.add(o, $.mulByNonresidue($.sub($.mul($.add(t, r), $.add(a, s)), $.add(u, c)))),
                        c1: $.add($.sub($.mul($.add(e, t), $.add(i, a)), $.add(o, u)), $.mulByNonresidue(c)),
                        c2: $.sub($.add(u, $.mul($.add(e, r), $.add(i, s))), $.add(o, c))
                    }
                },
                Z = ({
                    c0: e,
                    c1: t,
                    c2: r
                }) => {
                    let n = $.sqr(e),
                        i = $.mul($.mul(e, t), A),
                        a = $.mul($.mul(t, r), A),
                        s = $.sqr(r);
                    return {
                        c0: $.add($.mulByNonresidue(a), n),
                        c1: $.add($.mulByNonresidue(s), i),
                        c2: $.sub($.sub($.add($.add(i, $.sqr($.add($.sub(e, t), r))), a), n), s)
                    }
                },
                K = {
                    ORDER: $.ORDER,
                    BITS: 3 * $.BITS,
                    BYTES: 3 * $.BYTES,
                    MASK: (0, o.dQ)(3 * $.BITS),
                    ZERO: {
                        c0: $.ZERO,
                        c1: $.ZERO,
                        c2: $.ZERO
                    },
                    ONE: {
                        c0: $.ONE,
                        c1: $.ZERO,
                        c2: $.ZERO
                    },
                    create: e => e,
                    isValid: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }) => $.isValid(e) && $.isValid(t) && $.isValid(r),
                    is0: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }) => $.is0(e) && $.is0(t) && $.is0(r),
                    neg: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }) => ({
                        c0: $.neg(e),
                        c1: $.neg(t),
                        c2: $.neg(r)
                    }),
                    eql: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }, {
                        c0: n,
                        c1: i,
                        c2: a
                    }) => $.eql(e, n) && $.eql(t, i) && $.eql(r, a),
                    sqrt: () => {
                        throw Error("Not implemented")
                    },
                    div: (e, t) => K.mul(e, "bigint" == typeof t ? P.inv(P.create(t)) : K.inv(t)),
                    pow: (e, t) => s.Q(K, e, t),
                    invertBatch: e => s.Eg(K, e),
                    add: z,
                    sub: H,
                    mul: W,
                    sqr: Z,
                    addN: z,
                    subN: H,
                    mulN: W,
                    sqrN: Z,
                    inv: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }) => {
                        let n = $.sub($.sqr(e), $.mulByNonresidue($.mul(r, t))),
                            i = $.sub($.mulByNonresidue($.sqr(r)), $.mul(e, t)),
                            a = $.sub($.sqr(t), $.mul(e, r)),
                            s = $.inv($.add($.mulByNonresidue($.add($.mul(r, i), $.mul(t, a))), $.mul(e, n)));
                        return {
                            c0: $.mul(s, n),
                            c1: $.mul(s, i),
                            c2: $.mul(s, a)
                        }
                    },
                    fromBytes: e => {
                        if (e.length !== K.BYTES) throw Error(`fromBytes wrong length=${e.length}`);
                        return {
                            c0: $.fromBytes(e.subarray(0, $.BYTES)),
                            c1: $.fromBytes(e.subarray($.BYTES, 2 * $.BYTES)),
                            c2: $.fromBytes(e.subarray(2 * $.BYTES))
                        }
                    },
                    toBytes: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }) => (0, o.eV)($.toBytes(e), $.toBytes(t), $.toBytes(r)),
                    cmov: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }, {
                        c0: n,
                        c1: i,
                        c2: a
                    }, s) => ({
                        c0: $.cmov(e, n, s),
                        c1: $.cmov(t, i, s),
                        c2: $.cmov(r, a, s)
                    }),
                    fromBigSix: e => {
                        if (!Array.isArray(e) || 6 !== e.length) throw Error("Invalid Fp6 usage");
                        return {
                            c0: $.fromBigTuple(e.slice(0, 2)),
                            c1: $.fromBigTuple(e.slice(2, 4)),
                            c2: $.fromBigTuple(e.slice(4, 6))
                        }
                    },
                    frobeniusMap: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }, n) => ({
                        c0: $.frobeniusMap(e, n),
                        c1: $.mul($.frobeniusMap(t, n), Y[n % 6]),
                        c2: $.mul($.frobeniusMap(r, n), Q[n % 6])
                    }),
                    mulByNonresidue: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }) => ({
                        c0: $.mulByNonresidue(r),
                        c1: e,
                        c2: t
                    }),
                    multiplyBy1: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }, n) => ({
                        c0: $.mulByNonresidue($.mul(r, n)),
                        c1: $.mul(e, n),
                        c2: $.mul(t, n)
                    }),
                    multiplyBy01({
                        c0: e,
                        c1: t,
                        c2: r
                    }, n, i) {
                        let a = $.mul(e, n),
                            s = $.mul(t, i);
                        return {
                            c0: $.add($.mulByNonresidue($.sub($.mul($.add(t, r), i), s)), a),
                            c1: $.sub($.sub($.mul($.add(n, i), $.add(e, t)), a), s),
                            c2: $.add($.sub($.mul($.add(e, r), n), a), s)
                        }
                    },
                    multiplyByFp2: ({
                        c0: e,
                        c1: t,
                        c2: r
                    }, n) => ({
                        c0: $.mul(e, n),
                        c1: $.mul(t, n),
                        c2: $.mul(r, n)
                    })
                },
                Y = [
                    [BigInt("0x1"), BigInt("0x0")],
                    [BigInt("0x0"), BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac")],
                    [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), BigInt("0x0")],
                    [BigInt("0x0"), BigInt("0x1")],
                    [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"), BigInt("0x0")],
                    [BigInt("0x0"), BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe")]
                ].map(e => $.fromBigTuple(e)),
                Q = [
                    [BigInt("0x1"), BigInt("0x0")],
                    [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaad"), BigInt("0x0")],
                    [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"), BigInt("0x0")],
                    [BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa"), BigInt("0x0")],
                    [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), BigInt("0x0")],
                    [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffeffff"), BigInt("0x0")]
                ].map(e => $.fromBigTuple(e)),
                J = BigInt("0xd201000000010000"),
                X = (0, o.Dd)(J),
                ee = ({
                    c0: e,
                    c1: t
                }, {
                    c0: r,
                    c1: n
                }) => ({
                    c0: K.add(e, r),
                    c1: K.add(t, n)
                }),
                et = ({
                    c0: e,
                    c1: t
                }, {
                    c0: r,
                    c1: n
                }) => ({
                    c0: K.sub(e, r),
                    c1: K.sub(t, n)
                }),
                er = ({
                    c0: e,
                    c1: t
                }, r) => {
                    if ("bigint" == typeof r) return {
                        c0: K.mul(e, r),
                        c1: K.mul(t, r)
                    };
                    let {
                        c0: n,
                        c1: i
                    } = r, a = K.mul(e, n), s = K.mul(t, i);
                    return {
                        c0: K.add(a, K.mulByNonresidue(s)),
                        c1: K.sub(K.mul(K.add(e, t), K.add(n, i)), K.add(a, s))
                    }
                },
                en = ({
                    c0: e,
                    c1: t
                }) => {
                    let r = K.mul(e, t);
                    return {
                        c0: K.sub(K.sub(K.mul(K.add(K.mulByNonresidue(t), e), K.add(e, t)), r), K.mulByNonresidue(r)),
                        c1: K.add(r, r)
                    }
                };

            function ei(e, t) {
                let r = $.sqr(e),
                    n = $.sqr(t);
                return {
                    first: $.add($.mulByNonresidue(n), r),
                    second: $.sub($.sub($.sqr($.add(e, t)), r), n)
                }
            }
            let ea = {
                    ORDER: $.ORDER,
                    BITS: 2 * $.BITS,
                    BYTES: 2 * $.BYTES,
                    MASK: (0, o.dQ)(2 * $.BITS),
                    ZERO: {
                        c0: K.ZERO,
                        c1: K.ZERO
                    },
                    ONE: {
                        c0: K.ONE,
                        c1: K.ZERO
                    },
                    create: e => e,
                    isValid: ({
                        c0: e,
                        c1: t
                    }) => K.isValid(e) && K.isValid(t),
                    is0: ({
                        c0: e,
                        c1: t
                    }) => K.is0(e) && K.is0(t),
                    neg: ({
                        c0: e,
                        c1: t
                    }) => ({
                        c0: K.neg(e),
                        c1: K.neg(t)
                    }),
                    eql: ({
                        c0: e,
                        c1: t
                    }, {
                        c0: r,
                        c1: n
                    }) => K.eql(e, r) && K.eql(t, n),
                    sqrt: () => {
                        throw Error("Not implemented")
                    },
                    inv: ({
                        c0: e,
                        c1: t
                    }) => {
                        let r = K.inv(K.sub(K.sqr(e), K.mulByNonresidue(K.sqr(t))));
                        return {
                            c0: K.mul(e, r),
                            c1: K.neg(K.mul(t, r))
                        }
                    },
                    div: (e, t) => ea.mul(e, "bigint" == typeof t ? P.inv(P.create(t)) : ea.inv(t)),
                    pow: (e, t) => s.Q(ea, e, t),
                    invertBatch: e => s.Eg(ea, e),
                    add: ee,
                    sub: et,
                    mul: er,
                    sqr: en,
                    addN: ee,
                    subN: et,
                    mulN: er,
                    sqrN: en,
                    fromBytes: e => {
                        if (e.length !== ea.BYTES) throw Error(`fromBytes wrong length=${e.length}`);
                        return {
                            c0: K.fromBytes(e.subarray(0, K.BYTES)),
                            c1: K.fromBytes(e.subarray(K.BYTES))
                        }
                    },
                    toBytes: ({
                        c0: e,
                        c1: t
                    }) => (0, o.eV)(K.toBytes(e), K.toBytes(t)),
                    cmov: ({
                        c0: e,
                        c1: t
                    }, {
                        c0: r,
                        c1: n
                    }, i) => ({
                        c0: K.cmov(e, r, i),
                        c1: K.cmov(t, n, i)
                    }),
                    fromBigTwelve: e => ({
                        c0: K.fromBigSix(e.slice(0, 6)),
                        c1: K.fromBigSix(e.slice(6, 12))
                    }),
                    frobeniusMap(e, t) {
                        let r = K.frobeniusMap(e.c0, t),
                            {
                                c0: n,
                                c1: i,
                                c2: a
                            } = K.frobeniusMap(e.c1, t),
                            s = es[t % 12];
                        return {
                            c0: r,
                            c1: K.create({
                                c0: $.mul(n, s),
                                c1: $.mul(i, s),
                                c2: $.mul(a, s)
                            })
                        }
                    },
                    multiplyBy014: ({
                        c0: e,
                        c1: t
                    }, r, n, i) => {
                        let a = K.multiplyBy01(e, r, n),
                            s = K.multiplyBy1(t, i);
                        return {
                            c0: K.add(K.mulByNonresidue(s), a),
                            c1: K.sub(K.sub(K.multiplyBy01(K.add(t, e), r, $.add(n, i)), a), s)
                        }
                    },
                    multiplyByFp2: ({
                        c0: e,
                        c1: t
                    }, r) => ({
                        c0: K.multiplyByFp2(e, r),
                        c1: K.multiplyByFp2(t, r)
                    }),
                    conjugate: ({
                        c0: e,
                        c1: t
                    }) => ({
                        c0: e,
                        c1: K.neg(t)
                    }),
                    _cyclotomicSquare: ({
                        c0: e,
                        c1: t
                    }) => {
                        let {
                            c0: r,
                            c1: n,
                            c2: i
                        } = e, {
                            c0: a,
                            c1: s,
                            c2: o
                        } = t, {
                            first: u,
                            second: c
                        } = ei(r, s), {
                            first: f,
                            second: l
                        } = ei(a, i), {
                            first: h,
                            second: d
                        } = ei(n, o), p = $.mulByNonresidue(d);
                        return {
                            c0: K.create({
                                c0: $.add($.mul($.sub(u, r), A), u),
                                c1: $.add($.mul($.sub(f, n), A), f),
                                c2: $.add($.mul($.sub(h, i), A), h)
                            }),
                            c1: K.create({
                                c0: $.add($.mul($.add(p, a), A), p),
                                c1: $.add($.mul($.add(c, s), A), c),
                                c2: $.add($.mul($.add(l, o), A), l)
                            })
                        }
                    },
                    _cyclotomicExp(e, t) {
                        let r = ea.ONE;
                        for (let n = X - 1; n >= 0; n--) r = ea._cyclotomicSquare(r), (0, o.H_)(t, n) && (r = ea.mul(r, e));
                        return r
                    },
                    finalExponentiate: e => {
                        let t = ea.div(ea.frobeniusMap(e, 6), e),
                            r = ea.mul(ea.frobeniusMap(t, 2), t),
                            n = ea.conjugate(ea._cyclotomicExp(r, J)),
                            i = ea.mul(ea.conjugate(ea._cyclotomicSquare(r)), n),
                            a = ea.conjugate(ea._cyclotomicExp(i, J)),
                            s = ea.conjugate(ea._cyclotomicExp(a, J)),
                            o = ea.mul(ea.conjugate(ea._cyclotomicExp(s, J)), ea._cyclotomicSquare(n)),
                            u = ea.conjugate(ea._cyclotomicExp(o, J)),
                            c = ea.frobeniusMap(ea.mul(n, s), 2),
                            f = ea.frobeniusMap(ea.mul(a, r), 3),
                            l = ea.frobeniusMap(ea.mul(o, ea.conjugate(r)), 1),
                            h = ea.mul(ea.mul(u, ea.conjugate(i)), r);
                        return ea.mul(ea.mul(ea.mul(c, f), l), h)
                    }
                },
                es = [
                    [BigInt("0x1"), BigInt("0x0")],
                    [BigInt("0x1904d3bf02bb0667c231beb4202c0d1f0fd603fd3cbd5f4f7b2443d784bab9c4f67ea53d63e7813d8d0775ed92235fb8"), BigInt("0x00fc3e2b36c4e03288e9e902231f9fb854a14787b6c7b36fec0c8ec971f63c5f282d5ac14d6c7ec22cf78a126ddc4af3")],
                    [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffeffff"), BigInt("0x0")],
                    [BigInt("0x135203e60180a68ee2e9c448d77a2cd91c3dedd930b1cf60ef396489f61eb45e304466cf3e67fa0af1ee7b04121bdea2"), BigInt("0x06af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09")],
                    [BigInt("0x00000000000000005f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), BigInt("0x0")],
                    [BigInt("0x144e4211384586c16bd3ad4afa99cc9170df3560e77982d0db45f3536814f0bd5871c1908bd478cd1ee605167ff82995"), BigInt("0x05b2cfd9013a5fd8df47fa6b48b1e045f39816240c0b8fee8beadf4d8e9c0566c63a3e6e257f87329b18fae980078116")],
                    [BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaaa"), BigInt("0x0")],
                    [BigInt("0x00fc3e2b36c4e03288e9e902231f9fb854a14787b6c7b36fec0c8ec971f63c5f282d5ac14d6c7ec22cf78a126ddc4af3"), BigInt("0x1904d3bf02bb0667c231beb4202c0d1f0fd603fd3cbd5f4f7b2443d784bab9c4f67ea53d63e7813d8d0775ed92235fb8")],
                    [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"), BigInt("0x0")],
                    [BigInt("0x06af0e0437ff400b6831e36d6bd17ffe48395dabc2d3435e77f76e17009241c5ee67992f72ec05f4c81084fbede3cc09"), BigInt("0x135203e60180a68ee2e9c448d77a2cd91c3dedd930b1cf60ef396489f61eb45e304466cf3e67fa0af1ee7b04121bdea2")],
                    [BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaad"), BigInt("0x0")],
                    [BigInt("0x05b2cfd9013a5fd8df47fa6b48b1e045f39816240c0b8fee8beadf4d8e9c0566c63a3e6e257f87329b18fae980078116"), BigInt("0x144e4211384586c16bd3ad4afa99cc9170df3560e77982d0db45f3536814f0bd5871c1908bd478cd1ee605167ff82995")]
                ].map(e => $.fromBigTuple(e)),
                eo = h($, [
                    [
                        ["0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"],
                        ["0x0", "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"],
                        ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"],
                        ["0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1", "0x0"]
                    ],
                    [
                        ["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"],
                        ["0xc", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"],
                        ["0x1", "0x0"]
                    ],
                    [
                        ["0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706", "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"],
                        ["0x0", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"],
                        ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"],
                        ["0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10", "0x0"]
                    ],
                    [
                        ["0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"],
                        ["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"],
                        ["0x12", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"],
                        ["0x1", "0x0"]
                    ]
                ].map(e => e.map(e => $.fromBigTuple(e.map(BigInt))))),
                eu = h(P, [
                    ["0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7", "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb", "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0", "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861", "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9", "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983", "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84", "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e", "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317", "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e", "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b", "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"],
                    ["0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c", "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff", "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19", "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8", "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e", "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5", "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a", "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e", "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641", "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a", "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"],
                    ["0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33", "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696", "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6", "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb", "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb", "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0", "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2", "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29", "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587", "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30", "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132", "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e", "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8", "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133", "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b", "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"],
                    ["0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1", "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d", "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2", "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416", "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d", "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac", "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c", "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9", "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a", "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55", "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8", "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092", "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc", "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7", "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f", "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"]
                ].map(e => e.map(e => BigInt(e)))),
                ec = x($, {
                    A: $.create({
                        c0: P.create(N),
                        c1: P.create(BigInt(240))
                    }),
                    B: $.create({
                        c0: P.create(BigInt(1012)),
                        c1: P.create(BigInt(1012))
                    }),
                    Z: $.create({
                        c0: P.create(BigInt(-2)),
                        c1: P.create(BigInt(-1))
                    })
                }),
                ef = x(P, {
                    A: P.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
                    B: P.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
                    Z: P.create(BigInt(11))
                }),
                el = K.create({
                    c0: $.ZERO,
                    c1: $.ONE,
                    c2: $.ZERO
                }),
                eh = ea.create({
                    c0: el,
                    c1: K.ZERO
                }),
                ed = ea.create({
                    c0: K.ZERO,
                    c1: el
                }),
                [ep, eg] = ea.invertBatch([eh, ed]);

            function ey(e, t) {
                var r, n;
                let i = t.toAffine(),
                    a = (r = i.x, n = i.y, [ea.mul(ea.frobeniusMap(ea.multiplyByFp2(ep, r), 1), eh).c0.c0, ea.mul(ea.frobeniusMap(ea.multiplyByFp2(eg, n), 1), ed).c0.c0]);
                return new e(a[0], a[1], $.ONE)
            }
            let eb = BigInt("0x1a0111ea397fe699ec02408663d4de85aa0d857d89759ad4897d29650fb85f9b409427eb4f49fffd8bfd00000000aaac"),
                em = Object.freeze({
                    DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
                    encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
                    p: P.ORDER,
                    m: 2,
                    k: 128,
                    expand: "xmd",
                    hash: i.J
                }),
                ew = ev(P.toBytes(N), {
                    infinity: !0,
                    compressed: !0
                });

            function e_(e) {
                let t = 224 & (e = e.slice())[0];
                return e[0] &= 31, {
                    compressed: !!(t >> 7 & 1),
                    infinity: !!(t >> 6 & 1),
                    sort: !!(t >> 5 & 1),
                    value: e
                }
            }

            function ev(e, t) {
                if (224 & e[0]) throw Error("setMask: non-empty mask");
                return t.compressed && (e[0] |= 128), t.infinity && (e[0] |= 64), t.sort && (e[0] |= 32), e
            }

            function eE(e) {
                e.assertValidity();
                let t = e.equals(eB.G1.ProjectivePoint.ZERO),
                    {
                        x: r,
                        y: n
                    } = e.toAffine();
                if (t) return ew.slice();
                let i = !!(n * A / P.ORDER);
                return ev((0, o.tL)(r, P.BYTES), {
                    compressed: !0,
                    sort: i
                })
            }

            function ex(e) {
                e.assertValidity();
                let t = P.BYTES;
                if (e.equals(eB.G2.ProjectivePoint.ZERO)) return (0, o.eV)(ew, (0, o.tL)(N, t));
                let {
                    x: r,
                    y: n
                } = e.toAffine(), {
                    re: i,
                    im: a
                } = $.reim(r), {
                    re: s,
                    im: u
                } = $.reim(n), c = !!((u > N ? u * A : s * A) / P.ORDER & T);
                return (0, o.eV)(ev((0, o.tL)(a, t), {
                    sort: c,
                    compressed: !0
                }), (0, o.tL)(i, t))
            }
            let eB = function(e) {
                let {
                    Fp: t,
                    Fr: r,
                    Fp2: n,
                    Fp6: i,
                    Fp12: a
                } = e.fields, u = (0, o.Dd)(e.params.x);

                function c(t) {
                    let {
                        x: r,
                        y: i
                    } = t, a = n.ONE, s = r, c = i, f = a, l = [];
                    for (let t = u - 2; t >= 0; t--) {
                        let a = n.sqr(c),
                            u = n.sqr(f),
                            h = n.multiplyByB(n.mul(u, I)),
                            d = n.mul(h, I),
                            p = n.sub(n.sub(n.sqr(n.add(c, f)), u), a);
                        if (l.push([n.sub(h, a), n.mul(n.sqr(s), I), n.neg(p)]), s = n.div(n.mul(n.mul(n.sub(a, d), s), c), B), c = n.sub(n.sqr(n.div(n.add(a, d), B)), n.mul(n.sqr(h), I)), f = n.mul(a, p), (0, o.H_)(e.params.x, t)) {
                            let e = n.sub(c, n.mul(i, f)),
                                t = n.sub(s, n.mul(r, f));
                            l.push([n.sub(n.mul(e, r), n.mul(t, i)), n.neg(e), t]);
                            let a = n.sqr(t),
                                o = n.mul(a, t),
                                u = n.mul(a, s),
                                h = n.add(n.sub(o, n.mul(u, B)), n.mul(n.sqr(e), f));
                            s = n.mul(t, h), c = n.sub(n.mul(n.sub(u, h), e), n.mul(o, c)), f = n.mul(f, o)
                        }
                    }
                    return l
                }

                function f(t, r) {
                    let {
                        x: i
                    } = e.params, s = r[0], c = r[1], f = a.ONE;
                    for (let e = 0, r = u - 2; r >= 0; r--, e++) {
                        let u = t[e];
                        if (f = a.multiplyBy014(f, u[0], n.mul(u[1], s), n.mul(u[2], c)), (0, o.H_)(i, r)) {
                            let r = t[e += 1];
                            f = a.multiplyBy014(f, r[0], n.mul(r[1], s), n.mul(r[2], c))
                        }
                        0 !== r && (f = a.sqr(f))
                    }
                    return a.conjugate(f)
                }
                let l = E({
                        n: r.ORDER,
                        ...e.G1
                    }),
                    h = Object.assign(l, d(l.ProjectivePoint, e.G1.mapToCurve, { ...e.htfDefaults,
                        ...e.G1.htfDefaults
                    })),
                    p = E({
                        n: r.ORDER,
                        ...e.G2
                    }),
                    g = Object.assign(p, d(p.ProjectivePoint, e.G2.mapToCurve, { ...e.htfDefaults,
                        ...e.G2.htfDefaults
                    })),
                    {
                        ShortSignature: y
                    } = e.G1,
                    {
                        Signature: b
                    } = e.G2;

                function m(e, t, r = !0) {
                    if (e.equals(h.ProjectivePoint.ZERO) || t.equals(g.ProjectivePoint.ZERO)) throw Error("pairing is not available for ZERO point");
                    e.assertValidity(), t.assertValidity();
                    let n = e.toAffine(),
                        i = f((t._PPRECOMPUTES || (t._PPRECOMPUTES = c(t.toAffine())), t._PPRECOMPUTES), [n.x, n.y]);
                    return r ? a.finalExponentiate(i) : i
                }

                function w(e) {
                    return e instanceof h.ProjectivePoint ? e : h.ProjectivePoint.fromHex(e)
                }

                function _(e, t) {
                    return e instanceof h.ProjectivePoint ? e : h.hashToCurve((0, o.ql)("point", e), t)
                }

                function v(e) {
                    return e instanceof g.ProjectivePoint ? e : b.fromHex(e)
                }

                function x(e, t) {
                    return e instanceof g.ProjectivePoint ? e : g.hashToCurve((0, o.ql)("point", e), t)
                }
                return h.ProjectivePoint.BASE._setWindowSize(4), {
                    getPublicKey: function(e) {
                        return h.ProjectivePoint.fromPrivateKey(e).toRawBytes(!0)
                    },
                    getPublicKeyForShortSignatures: function(e) {
                        return g.ProjectivePoint.fromPrivateKey(e).toRawBytes(!0)
                    },
                    sign: function(e, t, r) {
                        let n = x(e, r);
                        n.assertValidity();
                        let i = n.multiply(h.normPrivateKeyToScalar(t));
                        return e instanceof g.ProjectivePoint ? i : b.toRawBytes(i)
                    },
                    signShortSignature: function(e, t, r) {
                        let n = _(e, r);
                        n.assertValidity();
                        let i = n.multiply(h.normPrivateKeyToScalar(t));
                        return e instanceof h.ProjectivePoint ? i : y.toRawBytes(i)
                    },
                    verify: function(e, t, r, n) {
                        let i = w(r),
                            s = x(t, n),
                            o = h.ProjectivePoint.BASE,
                            u = v(e),
                            c = m(i.negate(), s, !1),
                            f = m(o, u, !1),
                            l = a.finalExponentiate(a.mul(f, c));
                        return a.eql(l, a.ONE)
                    },
                    verifyBatch: function(e, t, r, n) {
                        if (!t.length) throw Error("Expected non-empty messages array");
                        if (r.length !== t.length) throw Error("Pubkey count should equal msg count");
                        let i = v(e),
                            s = t.map(e => x(e, n)),
                            o = r.map(w);
                        try {
                            let e = [];
                            for (let t of new Set(s)) {
                                let r = s.reduce((e, r, n) => r === t ? e.add(o[n]) : e, h.ProjectivePoint.ZERO);
                                e.push(m(r, t, !1))
                            }
                            e.push(m(h.ProjectivePoint.BASE.negate(), i, !1));
                            let t = e.reduce((e, t) => a.mul(e, t), a.ONE),
                                r = a.finalExponentiate(t);
                            return a.eql(r, a.ONE)
                        } catch {
                            return !1
                        }
                    },
                    verifyShortSignature: function(e, t, r, n) {
                        let i = v(r),
                            s = _(t, n),
                            o = g.ProjectivePoint.BASE,
                            u = w(e),
                            c = m(s, i, !1),
                            f = m(u, o.negate(), !1),
                            l = a.finalExponentiate(a.mul(f, c));
                        return a.eql(l, a.ONE)
                    },
                    aggregatePublicKeys: function(e) {
                        if (!e.length) throw Error("Expected non-empty array");
                        let t = e.map(w).reduce((e, t) => e.add(t), h.ProjectivePoint.ZERO);
                        return e[0] instanceof h.ProjectivePoint ? (t.assertValidity(), t) : t.toRawBytes(!0)
                    },
                    aggregateSignatures: function(e) {
                        if (!e.length) throw Error("Expected non-empty array");
                        let t = e.map(v).reduce((e, t) => e.add(t), g.ProjectivePoint.ZERO);
                        return e[0] instanceof g.ProjectivePoint ? (t.assertValidity(), t) : b.toRawBytes(t)
                    },
                    aggregateShortSignatures: function(e) {
                        if (!e.length) throw Error("Expected non-empty array");
                        let t = e.map(w).reduce((e, t) => e.add(t), h.ProjectivePoint.ZERO);
                        return e[0] instanceof h.ProjectivePoint ? (t.assertValidity(), t) : y.toRawBytes(t)
                    },
                    millerLoop: f,
                    pairing: m,
                    G1: h,
                    G2: g,
                    Signature: b,
                    ShortSignature: y,
                    fields: {
                        Fr: r,
                        Fp: t,
                        Fp2: n,
                        Fp6: i,
                        Fp12: a
                    },
                    params: {
                        x: e.params.x,
                        r: e.params.r,
                        G1b: e.G1.b,
                        G2b: e.G2.b
                    },
                    utils: {
                        randomPrivateKey: () => {
                            let t = (0, s.PS)(r.ORDER);
                            return (0, s.Us)(e.randomBytes(t), r.ORDER)
                        },
                        calcPairingPrecomputes: c
                    }
                }
            }({
                fields: {
                    Fp: P,
                    Fp2: $,
                    Fp6: K,
                    Fp12: ea,
                    Fr: L
                },
                G1: {
                    Fp: P,
                    h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
                    Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
                    Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"),
                    a: P.ZERO,
                    b: S,
                    htfDefaults: { ...em,
                        m: 1,
                        DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_"
                    },
                    wrapPrivateKey: !0,
                    allowInfinityPoint: !0,
                    isTorsionFree: (e, t) => {
                        let r = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"),
                            n = new e(P.mul(t.px, r), t.py, t.pz);
                        return t.multiplyUnsafe(eB.params.x).negate().multiplyUnsafe(eB.params.x).equals(n)
                    },
                    clearCofactor: (e, t) => t.multiplyUnsafe(eB.params.x).add(t),
                    mapToCurve: e => {
                        let {
                            x: t,
                            y: r
                        } = ef(P.create(e[0]));
                        return eu(t, r)
                    },
                    fromBytes: e => {
                        let {
                            compressed: t,
                            infinity: r,
                            sort: n,
                            value: i
                        } = e_(e);
                        if (48 === i.length && t) {
                            let e = P.ORDER,
                                t = (0, o.bytesToNumberBE)(i),
                                a = P.create(t & P.MASK);
                            if (r) {
                                if (a !== N) throw Error("G1: non-empty compressed point at infinity");
                                return {
                                    x: N,
                                    y: N
                                }
                            }
                            let s = P.add(P.pow(a, O), P.create(eB.params.G1b)),
                                u = P.sqrt(s);
                            if (!u) throw Error("Invalid compressed G1 point");
                            return u * A / e !== BigInt(n) && (u = P.neg(u)), {
                                x: P.create(a),
                                y: P.create(u)
                            }
                        }
                        if (96 !== i.length || t) throw Error("Invalid point G1, expected 48/96 bytes"); {
                            let e = (0, o.bytesToNumberBE)(i.subarray(0, P.BYTES)),
                                t = (0, o.bytesToNumberBE)(i.subarray(P.BYTES));
                            if (r) {
                                if (e !== N || t !== N) throw Error("G1: non-empty point at infinity");
                                return eB.G1.ProjectivePoint.ZERO.toAffine()
                            }
                            return {
                                x: P.create(e),
                                y: P.create(t)
                            }
                        }
                    },
                    toBytes: (e, t, r) => {
                        let n = t.equals(e.ZERO),
                            {
                                x: i,
                                y: a
                            } = t.toAffine();
                        if (r) {
                            if (n) return ew.slice();
                            let e = !!(a * A / P.ORDER);
                            return ev((0, o.tL)(i, P.BYTES), {
                                compressed: !0,
                                sort: e
                            })
                        }
                        return n ? (0, o.eV)(new Uint8Array([64]), new Uint8Array(2 * P.BYTES - 1)) : (0, o.eV)((0, o.tL)(i, P.BYTES), (0, o.tL)(a, P.BYTES))
                    },
                    ShortSignature: {
                        fromHex(e) {
                            let {
                                infinity: t,
                                sort: r,
                                value: n
                            } = e_((0, o.ql)("signatureHex", e, 48)), i = P.ORDER, a = (0, o.bytesToNumberBE)(n);
                            if (t) return eB.G1.ProjectivePoint.ZERO;
                            let s = P.create(a & P.MASK),
                                u = P.add(P.pow(s, O), P.create(eB.params.G1b)),
                                c = P.sqrt(u);
                            if (!c) throw Error("Invalid compressed G1 point");
                            c * A / i !== BigInt(r) && (c = P.neg(c));
                            let f = eB.G1.ProjectivePoint.fromAffine({
                                x: s,
                                y: c
                            });
                            return f.assertValidity(), f
                        },
                        toRawBytes: e => eE(e),
                        toHex: e => (0, o.ci)(eE(e))
                    }
                },
                G2: {
                    Fp: $,
                    h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
                    Gx: $.fromBigTuple([BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"), BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")]),
                    Gy: $.fromBigTuple([BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"), BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")]),
                    a: $.ZERO,
                    b: $.fromBigTuple([S, S]),
                    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
                    htfDefaults: { ...em
                    },
                    wrapPrivateKey: !0,
                    allowInfinityPoint: !0,
                    mapToCurve: e => {
                        let {
                            x: t,
                            y: r
                        } = ec($.fromBigTuple(e));
                        return eo(t, r)
                    },
                    isTorsionFree: (e, t) => t.multiplyUnsafe(eB.params.x).negate().equals(ey(e, t)),
                    clearCofactor: (e, t) => {
                        let r = eB.params.x,
                            n = t.multiplyUnsafe(r).negate(),
                            i = ey(e, t),
                            a = t.double();
                        return a = (a = function(e, t) {
                            var r, n;
                            let i = t.toAffine(),
                                a = (r = i.x, n = i.y, [$.mul(r, eb), $.neg(n)]);
                            return new e(a[0], a[1], $.ONE)
                        }(e, a)).subtract(i), i = (i = n.add(i)).multiplyUnsafe(r).negate(), (a = (a = a.add(i)).subtract(n)).subtract(t)
                    },
                    fromBytes: e => {
                        let {
                            compressed: t,
                            infinity: r,
                            sort: n,
                            value: i
                        } = e_(e);
                        if (!t && !r && n || !t && r && n || n && r && t) throw Error("Invalid encoding flag: " + (224 & e[0]));
                        let a = P.BYTES,
                            s = (e, t, r) => (0, o.bytesToNumberBE)(e.slice(t, r));
                        if (96 === i.length && t) {
                            let e = eB.params.G2b,
                                t = P.ORDER;
                            if (r) {
                                if (i.reduce((e, t) => 0 !== e ? t + 1 : t, 0) > 0) throw Error("Invalid compressed G2 point");
                                return {
                                    x: $.ZERO,
                                    y: $.ZERO
                                }
                            }
                            let o = s(i, 0, a),
                                u = s(i, a, 2 * a),
                                c = $.create({
                                    c0: P.create(u),
                                    c1: P.create(o)
                                }),
                                f = $.add($.pow(c, O), e),
                                l = $.sqrt(f),
                                h = l.c1 === N ? l.c0 * A / t : l.c1 * A / t ? T : N;
                            return {
                                x: c,
                                y: l = n && h > 0 ? l : $.neg(l)
                            }
                        }
                        if (192 !== i.length || t) throw Error("Invalid point G2, expected 96/192 bytes"); {
                            if (r) {
                                if (i.reduce((e, t) => 0 !== e ? t + 1 : t, 0) > 0) throw Error("Invalid uncompressed G2 point");
                                return {
                                    x: $.ZERO,
                                    y: $.ZERO
                                }
                            }
                            let e = s(i, 0, a),
                                t = s(i, a, 2 * a),
                                n = s(i, 2 * a, 3 * a),
                                o = s(i, 3 * a, 4 * a);
                            return {
                                x: $.fromBigTuple([t, e]),
                                y: $.fromBigTuple([o, n])
                            }
                        }
                    },
                    toBytes: (e, t, r) => {
                        let {
                            BYTES: n,
                            ORDER: i
                        } = P, a = t.equals(e.ZERO), {
                            x: s,
                            y: u
                        } = t.toAffine();
                        if (r) {
                            if (a) return (0, o.eV)(ew, (0, o.tL)(N, n));
                            let e = !!(u.c1 === N ? u.c0 * A / i : u.c1 * A / i);
                            return (0, o.eV)(ev((0, o.tL)(s.c1, n), {
                                compressed: !0,
                                sort: e
                            }), (0, o.tL)(s.c0, n))
                        } {
                            if (a) return (0, o.eV)(new Uint8Array([64]), new Uint8Array(4 * n - 1));
                            let {
                                re: e,
                                im: t
                            } = $.reim(s), {
                                re: r,
                                im: i
                            } = $.reim(u);
                            return (0, o.eV)((0, o.tL)(t, n), (0, o.tL)(e, n), (0, o.tL)(i, n), (0, o.tL)(r, n))
                        }
                    },
                    Signature: {
                        fromHex(e) {
                            let {
                                infinity: t,
                                sort: r,
                                value: n
                            } = e_((0, o.ql)("signatureHex", e)), i = P.ORDER, a = n.length / 2;
                            if (48 !== a && 96 !== a) throw Error("Invalid compressed signature length, must be 96 or 192");
                            let s = (0, o.bytesToNumberBE)(n.slice(0, a)),
                                u = (0, o.bytesToNumberBE)(n.slice(a));
                            if (t) return eB.G2.ProjectivePoint.ZERO;
                            let c = P.create(s & P.MASK),
                                f = P.create(u),
                                l = $.create({
                                    c0: f,
                                    c1: c
                                }),
                                h = $.add($.pow(l, O), eB.params.G2b),
                                d = $.sqrt(h);
                            if (!d) throw Error("Failed to find a square root");
                            let {
                                re: p,
                                im: g
                            } = $.reim(d), y = BigInt(r), b = g > N && g * A / i !== y, m = g === N && p * A / i !== y;
                            (b || m) && (d = $.neg(d));
                            let w = eB.G2.ProjectivePoint.fromAffine({
                                x: l,
                                y: d
                            });
                            return w.assertValidity(), w
                        },
                        toRawBytes: e => ex(e),
                        toHex: e => (0, o.ci)(ex(e))
                    }
                },
                params: {
                    x: J,
                    r: L.ORDER
                },
                htfDefaults: em,
                hash: i.J,
                randomBytes: a.O6
            });
            var eI = r(94312);

            function eN(e, t, r) {
                let n = "string" == typeof e ? e : (0, eI.NC)(e),
                    i = "string" == typeof t ? t : (0, eI.NC)(t),
                    a = "string" == typeof r ? r : (0, eI.NC)(r);
                return eB.verifyShortSignature(i, a, n)
            }
        },
        94312: function(e, t, r) {
            "use strict";

            function n(...e) {
                let t = new Uint8Array(e.reduce((e, t) => e + t.byteLength, 0)),
                    r = 0;
                for (let n of e) t.set(new Uint8Array(n), r), r += n.byteLength;
                return t.buffer
            }

            function i(e) {
                return [...new Uint8Array(e)].map(e => e.toString(16).padStart(2, "0")).join("")
            }
            r.d(t, {
                H_: function() {
                    return s
                },
                IA: function() {
                    return u
                },
                NC: function() {
                    return i
                },
                qu: function() {
                    return o
                },
                rS: function() {
                    return function e(t) {
                        return t instanceof Uint8Array ? c(t) : t instanceof ArrayBuffer ? t : Array.isArray(t) ? c(new Uint8Array(t)) : "buffer" in t ? e(t.buffer) : c(new Uint8Array(t))
                    }
                },
                wy: function() {
                    return c
                },
                zo: function() {
                    return n
                }
            });
            let a = new RegExp(/^[0-9a-fA-F]+$/);

            function s(e) {
                if (!a.test(e)) throw Error("Invalid hexadecimal string.");
                return new Uint8Array([...e].reduce((e, t, r) => (e[r / 2 | 0] = (e[r / 2 | 0] || "") + t, e), []).map(e => Number.parseInt(e, 16))).buffer
            }

            function o(e, t) {
                if (e.byteLength !== t.byteLength) return e.byteLength - t.byteLength;
                let r = new Uint8Array(e),
                    n = new Uint8Array(t);
                for (let e = 0; e < r.length; e++)
                    if (r[e] !== n[e]) return r[e] - n[e];
                return 0
            }

            function u(e, t) {
                return 0 === o(e, t)
            }

            function c(e) {
                return new DataView(e.buffer, e.byteOffset, e.byteLength).buffer
            }
        },
        59638: function(e, t, r) {
            "use strict";
            r.d(t, {
                b: function() {
                    return a
                },
                o: function() {
                    return i
                }
            });
            var n = r(70764);
            let i = e => (0, n.aC)(new n.P8(e)),
                a = e => new Date(Number(i(e)) / 1e6)
        },
        70764: function(e, t, r) {
            "use strict";
            r.d(t, {
                xO: function() {
                    return n
                },
                P8: function() {
                    return s
                },
                rS: function() {
                    return u
                },
                aC: function() {
                    return p
                },
                dZ: function() {
                    return d
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                Bool: function() {
                    return ee
                },
                BoolClass: function() {
                    return O
                },
                ConstructType: function() {
                    return N
                },
                Empty: function() {
                    return Q
                },
                EmptyClass: function() {
                    return T
                },
                FixedIntClass: function() {
                    return k
                },
                FixedNatClass: function() {
                    return V
                },
                Float32: function() {
                    return ea
                },
                Float64: function() {
                    return es
                },
                FloatClass: function() {
                    return L
                },
                Func: function() {
                    return eE
                },
                FuncClass: function() {
                    return H
                },
                Int: function() {
                    return en
                },
                Int16: function() {
                    return eu
                },
                Int32: function() {
                    return ec
                },
                Int64: function() {
                    return ef
                },
                Int8: function() {
                    return eo
                },
                IntClass: function() {
                    return F
                },
                Nat: function() {
                    return ei
                },
                Nat16: function() {
                    return eh
                },
                Nat32: function() {
                    return ed
                },
                Nat64: function() {
                    return ep
                },
                Nat8: function() {
                    return el
                },
                NatClass: function() {
                    return P
                },
                Null: function() {
                    return et
                },
                NullClass: function() {
                    return S
                },
                Opt: function() {
                    return em
                },
                OptClass: function() {
                    return M
                },
                PrimitiveType: function() {
                    return I
                },
                Principal: function() {
                    return eg
                },
                PrincipalClass: function() {
                    return z
                },
                Rec: function() {
                    return ev
                },
                RecClass: function() {
                    return D
                },
                Record: function() {
                    return ew
                },
                RecordClass: function() {
                    return j
                },
                Reserved: function() {
                    return J
                },
                ReservedClass: function() {
                    return R
                },
                Service: function() {
                    return ex
                },
                ServiceClass: function() {
                    return W
                },
                Text: function() {
                    return er
                },
                TextClass: function() {
                    return U
                },
                Tuple: function() {
                    return ey
                },
                TupleClass: function() {
                    return $
                },
                Type: function() {
                    return B
                },
                Unknown: function() {
                    return X
                },
                UnknownClass: function() {
                    return A
                },
                Variant: function() {
                    return e_
                },
                VariantClass: function() {
                    return q
                },
                Vec: function() {
                    return eb
                },
                VecClass: function() {
                    return C
                },
                Visitor: function() {
                    return x
                },
                decode: function() {
                    return Y
                },
                encode: function() {
                    return K
                }
            });
            var i = r(29711);

            function a(...e) {
                let t = new Uint8Array(e.reduce((e, t) => e + t.byteLength, 0)),
                    r = 0;
                for (let n of e) t.set(new Uint8Array(n), r), r += n.byteLength;
                return t
            }
            class s {
                constructor(e, t = (null == e ? void 0 : e.byteLength) || 0) {
                    this._buffer = u(e || new ArrayBuffer(0)), this._view = new Uint8Array(this._buffer, 0, t)
                }
                get buffer() {
                    return u(this._view.slice())
                }
                get byteLength() {
                    return this._view.byteLength
                }
                read(e) {
                    let t = this._view.subarray(0, e);
                    return this._view = this._view.subarray(e), t.slice().buffer
                }
                readUint8() {
                    let e = this._view[0];
                    return this._view = this._view.subarray(1), e
                }
                write(e) {
                    let t = new Uint8Array(e),
                        r = this._view.byteLength;
                    this._view.byteOffset + this._view.byteLength + t.byteLength >= this._buffer.byteLength ? this.alloc(t.byteLength) : this._view = new Uint8Array(this._buffer, this._view.byteOffset, this._view.byteLength + t.byteLength), this._view.set(t, r)
                }
                get end() {
                    return 0 === this._view.byteLength
                }
                alloc(e) {
                    let t = new ArrayBuffer((this._buffer.byteLength + e) * 1.2 | 0),
                        r = new Uint8Array(t, 0, this._view.byteLength + e);
                    r.set(this._view), this._buffer = t, this._view = r
                }
            }

            function o(e) {
                return new DataView(e.buffer, e.byteOffset, e.byteLength).buffer
            }

            function u(e) {
                return e instanceof Uint8Array ? o(e) : e instanceof ArrayBuffer ? e : Array.isArray(e) ? o(new Uint8Array(e)) : "buffer" in e ? u(e.buffer) : o(new Uint8Array(e))
            }

            function c(e) {
                if (/^_\d+_$/.test(e) || /^_0x[0-9a-fA-F]+_$/.test(e)) {
                    let t = +e.slice(1, -1);
                    if (Number.isSafeInteger(t) && t >= 0 && t < 4294967296) return t
                }
                return function(e) {
                    let t = new TextEncoder().encode(e),
                        r = 0;
                    for (let e of t) r = (223 * r + e) % 4294967296;
                    return r
                }(e)
            }

            function f() {
                throw Error("unexpected end of buffer")
            }

            function l(e, t) {
                return e.byteLength < t && f(), e.read(t)
            }

            function h(e) {
                let t = e.readUint8();
                return void 0 === t && f(), t
            }

            function d(e) {
                if ("number" == typeof e && (e = BigInt(e)), e < BigInt(0)) throw Error("Cannot leb encode negative values.");
                let t = new s(new ArrayBuffer((e === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(e)))) + 1), 0);
                for (;;) {
                    let r = Number(e & BigInt(127));
                    if ((e /= BigInt(128)) === BigInt(0)) {
                        t.write(new Uint8Array([r]));
                        break
                    }
                    t.write(new Uint8Array([128 | r]))
                }
                return t.buffer
            }

            function p(e) {
                let t, r = BigInt(1),
                    n = BigInt(0);
                do n += BigInt(127 & (t = h(e))).valueOf() * r, r *= BigInt(128); while (t >= 128);
                return n
            }

            function g(e) {
                "number" == typeof e && (e = BigInt(e));
                let t = e < BigInt(0);
                t && (e = -e - BigInt(1));
                let r = new s(new ArrayBuffer((e === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(e)))) + 1), 0);
                for (;;) {
                    let n = function(e) {
                        let r = e % BigInt(128);
                        return t ? Number(BigInt(128) - r - BigInt(1)) : Number(r)
                    }(e);
                    if (e /= BigInt(128), t && e === BigInt(0) && (64 & n) != 0 || !t && e === BigInt(0) && (64 & n) == 0) {
                        r.write(new Uint8Array([n]));
                        break
                    }
                    r.write(new Uint8Array([128 | n]))
                }
                return r.buffer
            }

            function y(e) {
                let t = new Uint8Array(e.buffer),
                    r = 0;
                for (; r < t.byteLength; r++)
                    if (t[r] < 128) {
                        if ((64 & t[r]) == 0) return p(e);
                        break
                    }
                let n = new Uint8Array(l(e, r + 1)),
                    i = BigInt(0);
                for (let e = n.byteLength - 1; e >= 0; e--) i = i * BigInt(128) + BigInt(128 - (127 & n[e]) - 1);
                return -i - BigInt(1)
            }

            function b(e, t) {
                e = BigInt(e);
                let r = new s(new ArrayBuffer(Math.min(1, t)), 0),
                    n = 0,
                    i = BigInt(256),
                    a = BigInt(0),
                    o = Number(e % i);
                for (r.write(new Uint8Array([o])); ++n < t;) e < 0 && a === BigInt(0) && 0 !== o && (a = BigInt(1)), o = Number((e / i - a) % BigInt(256)), r.write(new Uint8Array([o])), i *= BigInt(256);
                return r.buffer
            }

            function m(e, t) {
                let r = BigInt(h(e)),
                    n = BigInt(1),
                    i = 0;
                for (; ++i < t;) n *= BigInt(256), r += n * BigInt(h(e));
                return r
            }

            function w(e) {
                let t = BigInt(e);
                if (e < 0) throw RangeError("Input must be non-negative");
                return BigInt(1) << t
            }
            let _ = "DIDL";

            function v(e, t, r) {
                return e.map((e, n) => r(e, t[n]))
            }
            class E {
                constructor() {
                    this._typs = [], this._idx = new Map
                }
                has(e) {
                    return this._idx.has(e.name)
                }
                add(e, t) {
                    let r = this._typs.length;
                    this._idx.set(e.name, r), this._typs.push(t)
                }
                merge(e, t) {
                    let r = this._idx.get(e.name),
                        n = this._idx.get(t);
                    if (void 0 === r) throw Error("Missing type index for " + e);
                    if (void 0 === n) throw Error("Missing type index for " + t);
                    this._typs[r] = this._typs[n], this._typs.splice(n, 1), this._idx.delete(t)
                }
                encode() {
                    let e = d(this._typs.length),
                        t = a(...this._typs);
                    return a(e, t)
                }
                indexOf(e) {
                    if (!this._idx.has(e)) throw Error("Missing type index for " + e);
                    return g(this._idx.get(e) || 0)
                }
            }
            class x {
                visitType(e, t) {
                    throw Error("Not implemented")
                }
                visitPrimitive(e, t) {
                    return this.visitType(e, t)
                }
                visitEmpty(e, t) {
                    return this.visitPrimitive(e, t)
                }
                visitBool(e, t) {
                    return this.visitPrimitive(e, t)
                }
                visitNull(e, t) {
                    return this.visitPrimitive(e, t)
                }
                visitReserved(e, t) {
                    return this.visitPrimitive(e, t)
                }
                visitText(e, t) {
                    return this.visitPrimitive(e, t)
                }
                visitNumber(e, t) {
                    return this.visitPrimitive(e, t)
                }
                visitInt(e, t) {
                    return this.visitNumber(e, t)
                }
                visitNat(e, t) {
                    return this.visitNumber(e, t)
                }
                visitFloat(e, t) {
                    return this.visitPrimitive(e, t)
                }
                visitFixedInt(e, t) {
                    return this.visitNumber(e, t)
                }
                visitFixedNat(e, t) {
                    return this.visitNumber(e, t)
                }
                visitPrincipal(e, t) {
                    return this.visitPrimitive(e, t)
                }
                visitConstruct(e, t) {
                    return this.visitType(e, t)
                }
                visitVec(e, t, r) {
                    return this.visitConstruct(e, r)
                }
                visitOpt(e, t, r) {
                    return this.visitConstruct(e, r)
                }
                visitRecord(e, t, r) {
                    return this.visitConstruct(e, r)
                }
                visitTuple(e, t, r) {
                    let n = t.map((e, t) => [`_${t}_`, e]);
                    return this.visitRecord(e, n, r)
                }
                visitVariant(e, t, r) {
                    return this.visitConstruct(e, r)
                }
                visitRec(e, t, r) {
                    return this.visitConstruct(t, r)
                }
                visitFunc(e, t) {
                    return this.visitConstruct(e, t)
                }
                visitService(e, t) {
                    return this.visitConstruct(e, t)
                }
            }
            class B {
                display() {
                    return this.name
                }
                valueToString(e) {
                    return Z(e)
                }
                buildTypeTable(e) {
                    e.has(this) || this._buildTypeTableImpl(e)
                }
            }
            class I extends B {
                checkType(e) {
                    if (this.name !== e.name) throw Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
                    return e
                }
                _buildTypeTableImpl(e) {}
            }
            class N extends B {
                checkType(e) {
                    if (e instanceof D) {
                        let t = e.getType();
                        if (void 0 === t) throw Error("type mismatch with uninitialized type");
                        return t
                    }
                    throw Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`)
                }
                encodeType(e) {
                    return e.indexOf(this.name)
                }
            }
            class T extends I {
                accept(e, t) {
                    return e.visitEmpty(this, t)
                }
                covariant(e) {
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue() {
                    throw Error("Empty cannot appear as a function argument")
                }
                valueToString() {
                    throw Error("Empty cannot appear as a value")
                }
                encodeType() {
                    return g(-17)
                }
                decodeValue() {
                    throw Error("Empty cannot appear as an output")
                }
                get name() {
                    return "empty"
                }
            }
            class A extends B {
                checkType(e) {
                    throw Error("Method not implemented for unknown.")
                }
                accept(e, t) {
                    throw e.visitType(this, t)
                }
                covariant(e) {
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue() {
                    throw Error("Unknown cannot appear as a function argument")
                }
                valueToString() {
                    throw Error("Unknown cannot appear as a value")
                }
                encodeType() {
                    throw Error("Unknown cannot be serialized")
                }
                decodeValue(e, t) {
                    let r = t.decodeValue(e, t);
                    return Object(r) !== r && (r = Object(r)), Object.defineProperty(r, "type", {
                        value: t instanceof D ? () => t.getType() : () => t,
                        writable: !0,
                        enumerable: !1,
                        configurable: !0
                    }), r
                }
                _buildTypeTableImpl() {
                    throw Error("Unknown cannot be serialized")
                }
                get name() {
                    return "Unknown"
                }
            }
            class O extends I {
                accept(e, t) {
                    return e.visitBool(this, t)
                }
                covariant(e) {
                    if ("boolean" == typeof e) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    return new Uint8Array([e ? 1 : 0])
                }
                encodeType() {
                    return g(-2)
                }
                decodeValue(e, t) {
                    switch (this.checkType(t), h(e)) {
                        case 0:
                            return !1;
                        case 1:
                            return !0;
                        default:
                            throw Error("Boolean value out of range")
                    }
                }
                get name() {
                    return "bool"
                }
            }
            class S extends I {
                accept(e, t) {
                    return e.visitNull(this, t)
                }
                covariant(e) {
                    if (null === e) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue() {
                    return new ArrayBuffer(0)
                }
                encodeType() {
                    return g(-1)
                }
                decodeValue(e, t) {
                    return this.checkType(t), null
                }
                get name() {
                    return "null"
                }
            }
            class R extends I {
                accept(e, t) {
                    return e.visitReserved(this, t)
                }
                covariant(e) {
                    return !0
                }
                encodeValue() {
                    return new ArrayBuffer(0)
                }
                encodeType() {
                    return g(-16)
                }
                decodeValue(e, t) {
                    return t.name !== this.name && t.decodeValue(e, t), null
                }
                get name() {
                    return "reserved"
                }
            }
            class U extends I {
                accept(e, t) {
                    return e.visitText(this, t)
                }
                covariant(e) {
                    if ("string" == typeof e) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    let t = new TextEncoder().encode(e);
                    return a(d(t.byteLength), t)
                }
                encodeType() {
                    return g(-15)
                }
                decodeValue(e, t) {
                    this.checkType(t);
                    let r = p(e),
                        n = l(e, Number(r));
                    return new TextDecoder("utf8", {
                        fatal: !0
                    }).decode(n)
                }
                get name() {
                    return "text"
                }
                valueToString(e) {
                    return '"' + e + '"'
                }
            }
            class F extends I {
                accept(e, t) {
                    return e.visitInt(this, t)
                }
                covariant(e) {
                    if ("bigint" == typeof e || Number.isInteger(e)) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    return g(e)
                }
                encodeType() {
                    return g(-4)
                }
                decodeValue(e, t) {
                    return this.checkType(t), y(e)
                }
                get name() {
                    return "int"
                }
                valueToString(e) {
                    return e.toString()
                }
            }
            class P extends I {
                accept(e, t) {
                    return e.visitNat(this, t)
                }
                covariant(e) {
                    if ("bigint" == typeof e && e >= BigInt(0) || Number.isInteger(e) && e >= 0) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    return d(e)
                }
                encodeType() {
                    return g(-3)
                }
                decodeValue(e, t) {
                    return this.checkType(t), p(e)
                }
                get name() {
                    return "nat"
                }
                valueToString(e) {
                    return e.toString()
                }
            }
            class L extends I {
                constructor(e) {
                    if (super(), this._bits = e, 32 !== e && 64 !== e) throw Error("not a valid float type")
                }
                accept(e, t) {
                    return e.visitFloat(this, t)
                }
                covariant(e) {
                    if ("number" == typeof e || e instanceof Number) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    let t = new ArrayBuffer(this._bits / 8),
                        r = new DataView(t);
                    return 32 === this._bits ? r.setFloat32(0, e, !0) : r.setFloat64(0, e, !0), t
                }
                encodeType() {
                    return g(32 === this._bits ? -13 : -14)
                }
                decodeValue(e, t) {
                    this.checkType(t);
                    let r = new DataView(l(e, this._bits / 8));
                    return 32 === this._bits ? r.getFloat32(0, !0) : r.getFloat64(0, !0)
                }
                get name() {
                    return "float" + this._bits
                }
                valueToString(e) {
                    return e.toString()
                }
            }
            class k extends I {
                constructor(e) {
                    super(), this._bits = e
                }
                accept(e, t) {
                    return e.visitFixedInt(this, t)
                }
                covariant(e) {
                    let t = w(this._bits - 1) * BigInt(-1),
                        r = w(this._bits - 1) - BigInt(1),
                        n = !1;
                    if ("bigint" == typeof e) n = e >= t && e <= r;
                    else if (Number.isInteger(e)) {
                        let i = BigInt(e);
                        n = i >= t && i <= r
                    } else n = !1;
                    if (n) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    return b(e, this._bits / 8)
                }
                encodeType() {
                    return g(-9 - (Math.log2(this._bits) - 3))
                }
                decodeValue(e, t) {
                    this.checkType(t);
                    let r = function(e, t) {
                        let r = m(e, t),
                            n = BigInt(2) ** (BigInt(8) * BigInt(t - 1) + BigInt(7));
                        return r >= n && (r -= n * BigInt(2)), r
                    }(e, this._bits / 8);
                    return this._bits <= 32 ? Number(r) : r
                }
                get name() {
                    return `int${this._bits}`
                }
                valueToString(e) {
                    return e.toString()
                }
            }
            class V extends I {
                constructor(e) {
                    super(), this._bits = e
                }
                accept(e, t) {
                    return e.visitFixedNat(this, t)
                }
                covariant(e) {
                    let t = w(this._bits);
                    if ("bigint" == typeof e && e >= BigInt(0) ? e < t : !!Number.isInteger(e) && e >= 0 && BigInt(e) < t) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    return function(e, t) {
                        if (BigInt(e) < BigInt(0)) throw Error("Cannot write negative values.");
                        return b(e, t)
                    }(e, this._bits / 8)
                }
                encodeType() {
                    return g(-5 - (Math.log2(this._bits) - 3))
                }
                decodeValue(e, t) {
                    this.checkType(t);
                    let r = m(e, this._bits / 8);
                    return this._bits <= 32 ? Number(r) : r
                }
                get name() {
                    return `nat${this._bits}`
                }
                valueToString(e) {
                    return e.toString()
                }
            }
            class C extends N {
                constructor(e) {
                    super(), this._type = e, this._blobOptimization = !1, e instanceof V && 8 === e._bits && (this._blobOptimization = !0)
                }
                accept(e, t) {
                    return e.visitVec(this, this._type, t)
                }
                covariant(e) {
                    let t = this._type instanceof V ? this._type._bits : this._type instanceof k ? this._type._bits : 0;
                    if (ArrayBuffer.isView(e) && t == 8 * e.BYTES_PER_ELEMENT || Array.isArray(e) && e.every((e, t) => {
                            try {
                                return this._type.covariant(e)
                            } catch (e) {
                                throw Error(`Invalid ${this.display()} argument: 

index ${t} -> ${e.message}`)
                            }
                        })) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    let t = d(e.length);
                    if (this._blobOptimization) return a(t, new Uint8Array(e));
                    if (ArrayBuffer.isView(e)) return a(t, new Uint8Array(e.buffer));
                    let r = new s(new ArrayBuffer(t.byteLength + e.length), 0);
                    for (let n of (r.write(t), e)) {
                        let e = this._type.encodeValue(n);
                        r.write(new Uint8Array(e))
                    }
                    return r.buffer
                }
                _buildTypeTableImpl(e) {
                    this._type.buildTypeTable(e);
                    let t = g(-19),
                        r = this._type.encodeType(e);
                    e.add(this, a(t, r))
                }
                decodeValue(e, t) {
                    let r = this.checkType(t);
                    if (!(r instanceof C)) throw Error("Not a vector type");
                    let n = Number(p(e));
                    if (this._type instanceof V) {
                        if (8 == this._type._bits) return new Uint8Array(e.read(n));
                        if (16 == this._type._bits) return new Uint16Array(e.read(2 * n));
                        if (32 == this._type._bits) return new Uint32Array(e.read(4 * n));
                        if (64 == this._type._bits) return new BigUint64Array(e.read(8 * n))
                    }
                    if (this._type instanceof k) {
                        if (8 == this._type._bits) return new Int8Array(e.read(n));
                        if (16 == this._type._bits) return new Int16Array(e.read(2 * n));
                        if (32 == this._type._bits) return new Int32Array(e.read(4 * n));
                        if (64 == this._type._bits) return new BigInt64Array(e.read(8 * n))
                    }
                    let i = [];
                    for (let t = 0; t < n; t++) i.push(this._type.decodeValue(e, r._type));
                    return i
                }
                get name() {
                    return `vec ${this._type.name}`
                }
                display() {
                    return `vec ${this._type.display()}`
                }
                valueToString(e) {
                    return "vec {" + e.map(e => this._type.valueToString(e)).join("; ") + "}"
                }
            }
            class M extends N {
                constructor(e) {
                    super(), this._type = e
                }
                accept(e, t) {
                    return e.visitOpt(this, this._type, t)
                }
                covariant(e) {
                    try {
                        if (Array.isArray(e) && (0 === e.length || 1 === e.length && this._type.covariant(e[0]))) return !0
                    } catch (t) {
                        throw Error(`Invalid ${this.display()} argument: ${Z(e)} 

-> ${t.message}`)
                    }
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    return 0 === e.length ? new Uint8Array([0]) : a(new Uint8Array([1]), this._type.encodeValue(e[0]))
                }
                _buildTypeTableImpl(e) {
                    this._type.buildTypeTable(e);
                    let t = g(-18),
                        r = this._type.encodeType(e);
                    e.add(this, a(t, r))
                }
                decodeValue(e, t) {
                    let r = this.checkType(t);
                    if (!(r instanceof M)) throw Error("Not an option type");
                    switch (h(e)) {
                        case 0:
                            return [];
                        case 1:
                            return [this._type.decodeValue(e, r._type)];
                        default:
                            throw Error("Not an option value")
                    }
                }
                get name() {
                    return `opt ${this._type.name}`
                }
                display() {
                    return `opt ${this._type.display()}`
                }
                valueToString(e) {
                    return 0 === e.length ? "null" : `opt ${this._type.valueToString(e[0])}`
                }
            }
            class j extends N {
                constructor(e = {}) {
                    super(), this._fields = Object.entries(e).sort((e, t) => c(e[0]) - c(t[0]))
                }
                accept(e, t) {
                    return e.visitRecord(this, this._fields, t)
                }
                tryAsTuple() {
                    let e = [];
                    for (let t = 0; t < this._fields.length; t++) {
                        let [r, n] = this._fields[t];
                        if (r !== `_${t}_`) return null;
                        e.push(n)
                    }
                    return e
                }
                covariant(e) {
                    if ("object" == typeof e && this._fields.every(([t, r]) => {
                            if (!e.hasOwnProperty(t)) throw Error(`Record is missing key "${t}".`);
                            try {
                                return r.covariant(e[t])
                            } catch (e) {
                                throw Error(`Invalid ${this.display()} argument: 

field ${t} -> ${e.message}`)
                            }
                        })) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    let t = this._fields.map(([t]) => e[t]);
                    return a(...v(this._fields, t, ([, e], t) => e.encodeValue(t)))
                }
                _buildTypeTableImpl(e) {
                    this._fields.forEach(([t, r]) => r.buildTypeTable(e));
                    let t = g(-20),
                        r = d(this._fields.length),
                        n = this._fields.map(([t, r]) => a(d(c(t)), r.encodeType(e)));
                    e.add(this, a(t, r, a(...n)))
                }
                decodeValue(e, t) {
                    let r = this.checkType(t);
                    if (!(r instanceof j)) throw Error("Not a record type");
                    let n = {},
                        i = 0,
                        a = 0;
                    for (; a < r._fields.length;) {
                        let [t, s] = r._fields[a];
                        if (i >= this._fields.length) {
                            s.decodeValue(e, s), a++;
                            continue
                        }
                        let [o, u] = this._fields[i], f = c(this._fields[i][0]), l = c(t);
                        if (f === l) n[o] = u.decodeValue(e, s), i++, a++;
                        else if (l > f) {
                            if (u instanceof M || u instanceof R) n[o] = [], i++;
                            else throw Error("Cannot find required field " + o)
                        } else s.decodeValue(e, s), a++
                    }
                    for (let [e, t] of this._fields.slice(i))
                        if (t instanceof M || t instanceof R) n[e] = [];
                        else throw Error("Cannot find required field " + e);
                    return n
                }
                get name() {
                    let e = this._fields.map(([e, t]) => e + ":" + t.name);
                    return `record {${e.join("; ")}}`
                }
                display() {
                    let e = this._fields.map(([e, t]) => e + ":" + t.display());
                    return `record {${e.join("; ")}}`
                }
                valueToString(e) {
                    let t = this._fields.map(([t]) => e[t]),
                        r = v(this._fields, t, ([e, t], r) => e + "=" + t.valueToString(r));
                    return `record {${r.join("; ")}}`
                }
            }
            class $ extends j {
                constructor(e) {
                    let t = {};
                    e.forEach((e, r) => t["_" + r + "_"] = e), super(t), this._components = e
                }
                accept(e, t) {
                    return e.visitTuple(this, this._components, t)
                }
                covariant(e) {
                    if (Array.isArray(e) && e.length >= this._fields.length && this._components.every((t, r) => {
                            try {
                                return t.covariant(e[r])
                            } catch (e) {
                                throw Error(`Invalid ${this.display()} argument: 

index ${r} -> ${e.message}`)
                            }
                        })) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    return a(...v(this._components, e, (e, t) => e.encodeValue(t)))
                }
                decodeValue(e, t) {
                    let r = this.checkType(t);
                    if (!(r instanceof $)) throw Error("not a tuple type");
                    if (r._components.length < this._components.length) throw Error("tuple mismatch");
                    let n = [];
                    for (let [t, i] of r._components.entries()) t >= this._components.length ? i.decodeValue(e, i) : n.push(this._components[t].decodeValue(e, i));
                    return n
                }
                display() {
                    let e = this._components.map(e => e.display());
                    return `record {${e.join("; ")}}`
                }
                valueToString(e) {
                    let t = v(this._components, e, (e, t) => e.valueToString(t));
                    return `record {${t.join("; ")}}`
                }
            }
            class q extends N {
                constructor(e = {}) {
                    super(), this._fields = Object.entries(e).sort((e, t) => c(e[0]) - c(t[0]))
                }
                accept(e, t) {
                    return e.visitVariant(this, this._fields, t)
                }
                covariant(e) {
                    if ("object" == typeof e && 1 === Object.entries(e).length && this._fields.every(([t, r]) => {
                            try {
                                return !e.hasOwnProperty(t) || r.covariant(e[t])
                            } catch (e) {
                                throw Error(`Invalid ${this.display()} argument: 

variant ${t} -> ${e.message}`)
                            }
                        })) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    for (let t = 0; t < this._fields.length; t++) {
                        let [r, n] = this._fields[t];
                        if (e.hasOwnProperty(r)) return a(d(t), n.encodeValue(e[r]))
                    }
                    throw Error("Variant has no data: " + e)
                }
                _buildTypeTableImpl(e) {
                    this._fields.forEach(([, t]) => {
                        t.buildTypeTable(e)
                    });
                    let t = g(-21),
                        r = d(this._fields.length),
                        n = this._fields.map(([t, r]) => a(d(c(t)), r.encodeType(e)));
                    e.add(this, a(t, r, ...n))
                }
                decodeValue(e, t) {
                    let r = this.checkType(t);
                    if (!(r instanceof q)) throw Error("Not a variant type");
                    let n = Number(p(e));
                    if (n >= r._fields.length) throw Error("Invalid variant index: " + n);
                    let [i, a] = r._fields[n];
                    for (let [t, r] of this._fields)
                        if (c(i) === c(t)) return {
                            [t]: r.decodeValue(e, a)
                        };
                    throw Error("Cannot find field hash " + i)
                }
                get name() {
                    let e = this._fields.map(([e, t]) => e + ":" + t.name);
                    return `variant {${e.join("; ")}}`
                }
                display() {
                    let e = this._fields.map(([e, t]) => e + ("null" === t.name ? "" : `:${t.display()}`));
                    return `variant {${e.join("; ")}}`
                }
                valueToString(e) {
                    for (let [t, r] of this._fields)
                        if (e.hasOwnProperty(t)) {
                            let n = r.valueToString(e[t]);
                            if ("null" === n) return `variant {${t}}`;
                            return `variant {${t}=${n}}`
                        }
                    throw Error("Variant has no data: " + e)
                }
            }
            class D extends N {
                constructor() {
                    super(...arguments), this._id = D._counter++, this._type = void 0
                }
                accept(e, t) {
                    if (!this._type) throw Error("Recursive type uninitialized.");
                    return e.visitRec(this, this._type, t)
                }
                fill(e) {
                    this._type = e
                }
                getType() {
                    return this._type
                }
                covariant(e) {
                    if (this._type && this._type.covariant(e)) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    if (!this._type) throw Error("Recursive type uninitialized.");
                    return this._type.encodeValue(e)
                }
                _buildTypeTableImpl(e) {
                    if (!this._type) throw Error("Recursive type uninitialized.");
                    e.add(this, new Uint8Array([])), this._type.buildTypeTable(e), e.merge(this, this._type.name)
                }
                decodeValue(e, t) {
                    if (!this._type) throw Error("Recursive type uninitialized.");
                    return this._type.decodeValue(e, t)
                }
                get name() {
                    return `rec_${this._id}`
                }
                display() {
                    if (!this._type) throw Error("Recursive type uninitialized.");
                    return `μ${this.name}.${this._type.name}`
                }
                valueToString(e) {
                    if (!this._type) throw Error("Recursive type uninitialized.");
                    return this._type.valueToString(e)
                }
            }

            function G(e) {
                if (1 !== h(e)) throw Error("Cannot decode principal");
                let t = Number(p(e));
                return i.Principal.fromUint8Array(new Uint8Array(l(e, t)))
            }
            D._counter = 0;
            class z extends I {
                accept(e, t) {
                    return e.visitPrincipal(this, t)
                }
                covariant(e) {
                    if (e && e._isPrincipal) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    let t = e.toUint8Array(),
                        r = d(t.byteLength);
                    return a(new Uint8Array([1]), r, t)
                }
                encodeType() {
                    return g(-24)
                }
                decodeValue(e, t) {
                    return this.checkType(t), G(e)
                }
                get name() {
                    return "principal"
                }
                valueToString(e) {
                    return `${this.name} "${e.toText()}"`
                }
            }
            class H extends N {
                constructor(e, t, r = []) {
                    super(), this.argTypes = e, this.retTypes = t, this.annotations = r
                }
                static argsToString(e, t) {
                    if (e.length !== t.length) throw Error("arity mismatch");
                    return "(" + e.map((e, r) => e.valueToString(t[r])).join(", ") + ")"
                }
                accept(e, t) {
                    return e.visitFunc(this, t)
                }
                covariant(e) {
                    if (Array.isArray(e) && 2 === e.length && e[0] && e[0]._isPrincipal && "string" == typeof e[1]) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue([e, t]) {
                    let r = e.toUint8Array(),
                        n = d(r.byteLength),
                        i = a(new Uint8Array([1]), n, r),
                        s = new TextEncoder().encode(t),
                        o = d(s.byteLength);
                    return a(new Uint8Array([1]), i, o, s)
                }
                _buildTypeTableImpl(e) {
                    this.argTypes.forEach(t => t.buildTypeTable(e)), this.retTypes.forEach(t => t.buildTypeTable(e));
                    let t = g(-22),
                        r = d(this.argTypes.length),
                        n = a(...this.argTypes.map(t => t.encodeType(e))),
                        i = d(this.retTypes.length),
                        s = a(...this.retTypes.map(t => t.encodeType(e))),
                        o = d(this.annotations.length),
                        u = a(...this.annotations.map(e => this.encodeAnnotation(e)));
                    e.add(this, a(t, r, n, i, s, o, u))
                }
                decodeValue(e) {
                    if (1 !== h(e)) throw Error("Cannot decode function reference");
                    let t = G(e),
                        r = Number(p(e)),
                        n = l(e, r);
                    return [t, new TextDecoder("utf8", {
                        fatal: !0
                    }).decode(n)]
                }
                get name() {
                    let e = this.argTypes.map(e => e.name).join(", "),
                        t = this.retTypes.map(e => e.name).join(", "),
                        r = " " + this.annotations.join(" ");
                    return `(${e}) -> (${t})${r}`
                }
                valueToString([e, t]) {
                    return `func "${e.toText()}".${t}`
                }
                display() {
                    let e = this.argTypes.map(e => e.display()).join(", "),
                        t = this.retTypes.map(e => e.display()).join(", "),
                        r = " " + this.annotations.join(" ");
                    return `(${e}) → (${t})${r}`
                }
                encodeAnnotation(e) {
                    if ("query" === e) return new Uint8Array([1]);
                    if ("oneway" === e) return new Uint8Array([2]);
                    if ("composite_query" === e) return new Uint8Array([3]);
                    throw Error("Illegal function annotation")
                }
            }
            class W extends N {
                constructor(e) {
                    super(), this._fields = Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0)
                }
                accept(e, t) {
                    return e.visitService(this, t)
                }
                covariant(e) {
                    if (e && e._isPrincipal) return !0;
                    throw Error(`Invalid ${this.display()} argument: ${Z(e)}`)
                }
                encodeValue(e) {
                    let t = e.toUint8Array(),
                        r = d(t.length);
                    return a(new Uint8Array([1]), r, t)
                }
                _buildTypeTableImpl(e) {
                    this._fields.forEach(([t, r]) => r.buildTypeTable(e));
                    let t = g(-23),
                        r = d(this._fields.length),
                        n = this._fields.map(([t, r]) => {
                            let n = new TextEncoder().encode(t);
                            return a(d(n.length), n, r.encodeType(e))
                        });
                    e.add(this, a(t, r, ...n))
                }
                decodeValue(e) {
                    return G(e)
                }
                get name() {
                    let e = this._fields.map(([e, t]) => e + ":" + t.name);
                    return `service {${e.join("; ")}}`
                }
                valueToString(e) {
                    return `service "${e.toText()}"`
                }
            }

            function Z(e) {
                let t = JSON.stringify(e, (e, t) => "bigint" == typeof t ? `BigInt(${t})` : t);
                return t && t.length > 400 ? t.substring(0, 397) + "..." : t
            }

            function K(e, t) {
                if (t.length < e.length) throw Error("Wrong number of message arguments");
                let r = new E;
                e.forEach(e => e.buildTypeTable(r));
                let n = new TextEncoder().encode(_),
                    i = r.encode(),
                    s = d(t.length),
                    o = a(...e.map(e => e.encodeType(r))),
                    u = a(...v(e, t, (e, t) => {
                        try {
                            e.covariant(t)
                        } catch (e) {
                            throw Error(e.message + "\n\n")
                        }
                        return e.encodeValue(t)
                    }));
                return a(n, i, s, o, u)
            }

            function Y(e, t) {
                let r = new s(t);
                if (t.byteLength < _.length) throw Error("Message length smaller than magic number");
                let n = l(r, _.length),
                    i = new TextDecoder().decode(n);
                if (i !== _) throw Error("Wrong magic number: " + JSON.stringify(i));
                let [a, o] = function(e) {
                    let t = [],
                        r = Number(p(e));
                    for (let n = 0; n < r; n++) {
                        let r = Number(y(e));
                        switch (r) {
                            case -18:
                            case -19:
                                {
                                    let n = Number(y(e));t.push([r, n]);
                                    break
                                }
                            case -20:
                            case -21:
                                {
                                    let n;
                                    let i = [],
                                        a = Number(p(e));
                                    for (; a--;) {
                                        let t = Number(p(e));
                                        if (t >= 4294967296) throw Error("field id out of 32-bit range");
                                        if ("number" == typeof n && n >= t) throw Error("field id collision or not sorted");
                                        n = t;
                                        let r = Number(y(e));
                                        i.push([t, r])
                                    }
                                    t.push([r, i]);
                                    break
                                }
                            case -22:
                                {
                                    let n = [],
                                        i = Number(p(e));
                                    for (; i--;) n.push(Number(y(e)));
                                    let a = [],
                                        s = Number(p(e));
                                    for (; s--;) a.push(Number(y(e)));
                                    let o = [],
                                        u = Number(p(e));
                                    for (; u--;) switch (Number(p(e))) {
                                        case 1:
                                            o.push("query");
                                            break;
                                        case 2:
                                            o.push("oneway");
                                            break;
                                        case 3:
                                            o.push("composite_query");
                                            break;
                                        default:
                                            throw Error("unknown annotation")
                                    }
                                    t.push([r, [n, a, o]]);
                                    break
                                }
                            case -23:
                                {
                                    let n = Number(p(e)),
                                        i = [];
                                    for (; n--;) {
                                        let t = Number(p(e)),
                                            r = new TextDecoder().decode(l(e, t)),
                                            n = y(e);
                                        i.push([r, n])
                                    }
                                    t.push([r, i]);
                                    break
                                }
                            default:
                                throw Error("Illegal op_code: " + r)
                        }
                    }
                    let n = [],
                        i = Number(p(e));
                    for (let t = 0; t < i; t++) n.push(Number(y(e)));
                    return [t, n]
                }(r);
                if (o.length < e.length) throw Error("Wrong number of return values");
                let u = a.map(e => ev());

                function c(e) {
                    if (e < -24) throw Error("future value not supported");
                    if (e < 0) switch (e) {
                        case -1:
                            return et;
                        case -2:
                            return ee;
                        case -3:
                            return ei;
                        case -4:
                            return en;
                        case -5:
                            return el;
                        case -6:
                            return eh;
                        case -7:
                            return ed;
                        case -8:
                            return ep;
                        case -9:
                            return eo;
                        case -10:
                            return eu;
                        case -11:
                            return ec;
                        case -12:
                            return ef;
                        case -13:
                            return ea;
                        case -14:
                            return es;
                        case -15:
                            return er;
                        case -16:
                            return J;
                        case -17:
                            return Q;
                        case -24:
                            return eg;
                        default:
                            throw Error("Illegal op_code: " + e)
                    }
                    if (e >= a.length) throw Error("type index out of range");
                    return u[e]
                }

                function f(e) {
                    switch (e[0]) {
                        case -19:
                            return eb(c(e[1]));
                        case -18:
                            return em(c(e[1]));
                        case -20:
                            {
                                let t = {};
                                for (let [r, n] of e[1]) t[`_${r}_`] = c(n);
                                let r = ew(t),
                                    n = r.tryAsTuple();
                                if (Array.isArray(n)) return ey(...n);
                                return r
                            }
                        case -21:
                            {
                                let t = {};
                                for (let [r, n] of e[1]) t[`_${r}_`] = c(n);
                                return e_(t)
                            }
                        case -22:
                            {
                                let [t, r, n] = e[1];
                                return eE(t.map(e => c(e)), r.map(e => c(e)), n)
                            }
                        case -23:
                            {
                                let t = {};
                                for (let [r, n] of e[1]) {
                                    let e = c(n);
                                    if (e instanceof D && (e = e.getType()), !(e instanceof H)) throw Error("Illegal service definition: services can only contain functions");
                                    t[r] = e
                                }
                                return ex(t)
                            }
                        default:
                            throw Error("Illegal op_code: " + e[0])
                    }
                }
                a.forEach((e, t) => {
                    if (-22 === e[0]) {
                        let r = f(e);
                        u[t].fill(r)
                    }
                }), a.forEach((e, t) => {
                    if (-22 !== e[0]) {
                        let r = f(e);
                        u[t].fill(r)
                    }
                });
                let h = o.map(e => c(e)),
                    d = e.map((e, t) => e.decodeValue(r, h[t]));
                for (let t = e.length; t < h.length; t++) h[t].decodeValue(r, h[t]);
                if (r.byteLength > 0) throw Error("decode: Left-over bytes");
                return d
            }
            let Q = new T,
                J = new R,
                X = new A,
                ee = new O,
                et = new S,
                er = new U,
                en = new F,
                ei = new P,
                ea = new L(32),
                es = new L(64),
                eo = new k(8),
                eu = new k(16),
                ec = new k(32),
                ef = new k(64),
                el = new V(8),
                eh = new V(16),
                ed = new V(32),
                ep = new V(64),
                eg = new z;

            function ey(...e) {
                return new $(e)
            }

            function eb(e) {
                return new C(e)
            }

            function em(e) {
                return new M(e)
            }

            function ew(e) {
                return new j(e)
            }

            function e_(e) {
                return new q(e)
            }

            function ev() {
                return new D
            }

            function eE(e, t, r = []) {
                return new H(e, t, r)
            }

            function ex(e) {
                return new W(e)
            }
            class eB {
                constructor(e, t) {
                    this.idl = e, this.ui = t, this.label = null, this.value = void 0;
                    let r = document.createElement("span");
                    r.className = "status", this.status = r, t.input && (t.input.addEventListener("blur", () => {
                        "" !== t.input.value && this.parse()
                    }), t.input.addEventListener("input", () => {
                        r.style.display = "none", t.input.classList.remove("reject")
                    }))
                }
                isRejected() {
                    return void 0 === this.value
                }
                parse(e = {}) {
                    if (this.ui.form) {
                        let t = this.ui.form.parse(e);
                        return this.value = t, t
                    }
                    if (this.ui.input) {
                        let t = this.ui.input;
                        try {
                            let r = this.ui.parse(this.idl, e, t.value);
                            if (!this.idl.covariant(r)) throw Error(`${t.value} is not of type ${this.idl.display()}`);
                            return this.status.style.display = "none", this.value = r, r
                        } catch (e) {
                            t.classList.add("reject"), this.status.style.display = "block", this.status.innerHTML = "InputError: " + e.message, this.value = void 0;
                            return
                        }
                    }
                    return null
                }
                render(e) {
                    let t = document.createElement("span");
                    if (this.label) {
                        let e = document.createElement("label");
                        e.innerText = this.label, t.appendChild(e)
                    }
                    this.ui.input && (t.appendChild(this.ui.input), t.appendChild(this.status)), this.ui.form && this.ui.form.render(t), e.appendChild(t)
                }
            }
            class eI {
                constructor(e) {
                    this.ui = e, this.form = []
                }
                renderForm(e) {
                    this.ui.container ? (this.form.forEach(e => e.render(this.ui.container)), e.appendChild(this.ui.container)) : this.form.forEach(t => t.render(e))
                }
                render(e) {
                    if (this.ui.open && this.ui.event) {
                        e.appendChild(this.ui.open);
                        let t = this;
                        t.ui.open.addEventListener(t.ui.event, () => {
                            if (t.ui.container) t.ui.container.innerHTML = "";
                            else {
                                let e = t.ui.open.nextElementSibling;
                                e && e.parentNode.removeChild(e)
                            }
                            t.generateForm(), t.renderForm(e)
                        })
                    } else this.generateForm(), this.renderForm(e)
                }
            }
            class eN extends eI {
                constructor(e, t) {
                    super(t), this.fields = e, this.ui = t
                }
                generateForm() {
                    this.form = this.fields.map(([e, t]) => {
                        let r = this.ui.render(t);
                        return this.ui.labelMap && this.ui.labelMap.hasOwnProperty(e) ? r.label = this.ui.labelMap[e] + " " : r.label = e + " ", r
                    })
                }
                parse(e) {
                    let t = {};
                    if (this.fields.forEach(([r, n], i) => {
                            let a = this.form[i].parse(e);
                            t[r] = a
                        }), !this.form.some(e => e.isRejected())) return t
                }
            }
            class eT extends eI {
                constructor(e, t) {
                    super(t), this.components = e, this.ui = t
                }
                generateForm() {
                    this.form = this.components.map(e => this.ui.render(e))
                }
                parse(e) {
                    let t = [];
                    if (this.components.forEach((r, n) => {
                            let i = this.form[n].parse(e);
                            t.push(i)
                        }), !this.form.some(e => e.isRejected())) return t
                }
            }
            class eA extends eI {
                constructor(e, t) {
                    super(t), this.fields = e, this.ui = t
                }
                generateForm() {
                    let e = this.ui.open.selectedIndex,
                        [t, r] = this.fields[e],
                        n = this.ui.render(r);
                    this.form = [n]
                }
                parse(e) {
                    let t = this.ui.open,
                        r = t.options[t.selectedIndex].value,
                        n = this.form[0].parse(e);
                    if (void 0 === n) return;
                    let i = {};
                    return i[r] = n, i
                }
            }
            class eO extends eI {
                constructor(e, t) {
                    super(t), this.ty = e, this.ui = t
                }
                generateForm() {
                    if (this.ui.open.checked) {
                        let e = this.ui.render(this.ty);
                        this.form = [e]
                    } else this.form = []
                }
                parse(e) {
                    if (0 === this.form.length) return []; {
                        let t = this.form[0].parse(e);
                        if (void 0 === t) return;
                        return [t]
                    }
                }
            }
            class eS extends eI {
                constructor(e, t) {
                    super(t), this.ty = e, this.ui = t
                }
                generateForm() {
                    let e = +this.ui.open.value;
                    this.form = [];
                    for (let t = 0; t < e; t++) {
                        let e = this.ui.render(this.ty);
                        this.form.push(e)
                    }
                }
                parse(e) {
                    let t = this.form.map(t => t.parse(e));
                    if (!this.form.some(e => e.isRejected())) return t
                }
            }
            let eR = {
                    parse: function(e, t, r) {
                        return t.random && "" === r ? e.accept(new e$, r) : e.accept(new ej, r)
                    }
                },
                eU = {
                    render: eq
                },
                eF = (e, t) => new eB(e, Object.assign(Object.assign({}, eR), t)),
                eP = (e, t) => new eN(e, Object.assign(Object.assign({}, eU), t)),
                eL = (e, t) => new eT(e, Object.assign(Object.assign({}, eU), t)),
                ek = (e, t) => new eA(e, Object.assign(Object.assign({}, eU), t)),
                eV = (e, t) => new eO(e, Object.assign(Object.assign({}, eU), t)),
                eC = (e, t) => new eS(e, Object.assign(Object.assign({}, eU), t));
            class eM extends x {
                visitType(e, t) {
                    let r = document.createElement("input");
                    return r.classList.add("argument"), r.placeholder = e.display(), eF(e, {
                        input: r
                    })
                }
                visitNull(e, t) {
                    return eF(e, {})
                }
                visitRecord(e, t, r) {
                    let n = {};
                    if (t.length > 1) {
                        let e = document.createElement("div");
                        e.classList.add("popup-form"), n = {
                            container: e
                        }
                    }
                    return eF(e, {
                        form: eP(t, n)
                    })
                }
                visitTuple(e, t, r) {
                    let n = {};
                    if (t.length > 1) {
                        let e = document.createElement("div");
                        e.classList.add("popup-form"), n = {
                            container: e
                        }
                    }
                    return eF(e, {
                        form: eL(t, n)
                    })
                }
                visitVariant(e, t, r) {
                    let n = document.createElement("select");
                    for (let [e, r] of t) {
                        let t = new Option(e);
                        n.add(t)
                    }
                    return n.selectedIndex = -1, n.classList.add("open"), eF(e, {
                        form: ek(t, {
                            open: n,
                            event: "change"
                        })
                    })
                }
                visitOpt(e, t, r) {
                    let n = document.createElement("input");
                    return n.type = "checkbox", n.classList.add("open"), eF(e, {
                        form: eV(t, {
                            open: n,
                            event: "change"
                        })
                    })
                }
                visitVec(e, t, r) {
                    let n = document.createElement("input");
                    n.type = "number", n.min = "0", n.max = "100", n.style.width = "8rem", n.placeholder = "len", n.classList.add("open");
                    let i = document.createElement("div");
                    return i.classList.add("popup-form"), eF(e, {
                        form: eC(t, {
                            open: n,
                            event: "change",
                            container: i
                        })
                    })
                }
                visitRec(e, t, r) {
                    return eq(t)
                }
            }
            class ej extends x {
                visitNull(e, t) {
                    return null
                }
                visitBool(e, t) {
                    if ("true" === t) return !0;
                    if ("false" === t) return !1;
                    throw Error(`Cannot parse ${t} as boolean`)
                }
                visitText(e, t) {
                    return t
                }
                visitFloat(e, t) {
                    return parseFloat(t)
                }
                visitFixedInt(e, t) {
                    return e._bits <= 32 ? parseInt(t, 10) : BigInt(t)
                }
                visitFixedNat(e, t) {
                    return e._bits <= 32 ? parseInt(t, 10) : BigInt(t)
                }
                visitNumber(e, t) {
                    return BigInt(t)
                }
                visitPrincipal(e, t) {
                    return i.Principal.fromText(t)
                }
                visitService(e, t) {
                    return i.Principal.fromText(t)
                }
                visitFunc(e, t) {
                    let r = t.split(".", 2);
                    return [i.Principal.fromText(r[0]), r[1]]
                }
            }
            class e$ extends x {
                visitNull(e, t) {
                    return null
                }
                visitBool(e, t) {
                    return .5 > Math.random()
                }
                visitText(e, t) {
                    return Math.random().toString(36).substring(6)
                }
                visitFloat(e, t) {
                    return Math.random()
                }
                visitInt(e, t) {
                    return BigInt(this.generateNumber(!0))
                }
                visitNat(e, t) {
                    return BigInt(this.generateNumber(!1))
                }
                visitFixedInt(e, t) {
                    let r = this.generateNumber(!0);
                    return e._bits <= 32 ? r : BigInt(t)
                }
                visitFixedNat(e, t) {
                    let r = this.generateNumber(!1);
                    return e._bits <= 32 ? r : BigInt(t)
                }
                generateNumber(e) {
                    let t = Math.floor(100 * Math.random());
                    return e && .5 > Math.random() ? -t : t
                }
            }

            function eq(e) {
                return e.accept(new eM, null)
            }
        },
        99903: function(e, t, r) {
            "use strict";
            let n, i, a, s, o;
            r.d(t, {
                Ds: function() {
                    return F
                }
            });
            var u, c = r(69419),
                f = r(9109).lW,
                l = Object.create,
                h = Object.defineProperty,
                d = Object.getOwnPropertyDescriptor,
                p = Object.getOwnPropertyNames,
                g = Object.getPrototypeOf,
                y = Object.prototype.hasOwnProperty,
                b = (e, t) => () => (t || e((t = {
                    exports: {}
                }).exports, t), t.exports);

            function m(e, ...t) {
                if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
            }

            function w(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }
            var _ = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
                v = (e, t) => e << 32 - t | e >>> t;

            function E(e) {
                return "string" == typeof e && (e = function(e) {
                    if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                    return new Uint8Array(new TextEncoder().encode(e))
                }(e)), m(e), e
            }
            new Uint8Array(new Uint32Array([287454020]).buffer)[0];
            var x = class {
                    clone() {
                        return this._cloneInto()
                    }
                },
                B = (e, t, r) => e & t ^ ~e & r,
                I = (e, t, r) => e & t ^ e & r ^ t & r,
                N = class extends x {
                    constructor(e, t, r, n) {
                        super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = _(this.buffer)
                    }
                    update(e) {
                        w(this);
                        let {
                            view: t,
                            buffer: r,
                            blockLen: n
                        } = this, i = (e = E(e)).length;
                        for (let a = 0; a < i;) {
                            let s = Math.min(n - this.pos, i - a);
                            if (s === n) {
                                let t = _(e);
                                for (; n <= i - a; a += n) this.process(t, a);
                                continue
                            }
                            r.set(e.subarray(a, a + s), this.pos), this.pos += s, a += s, this.pos === n && (this.process(t, 0), this.pos = 0)
                        }
                        return this.length += e.length, this.roundClean(), this
                    }
                    digestInto(e) {
                        w(this),
                            function(e, t) {
                                m(e);
                                let r = t.outputLen;
                                if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
                            }(e, this), this.finished = !0;
                        let {
                            buffer: t,
                            view: r,
                            blockLen: n,
                            isLE: i
                        } = this, {
                            pos: a
                        } = this;
                        t[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > n - a && (this.process(r, 0), a = 0);
                        for (let e = a; e < n; e++) t[e] = 0;
                        (function(e, t, r, n) {
                            if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                            let i = BigInt(32),
                                a = BigInt(4294967295),
                                s = Number(r >> i & a),
                                o = Number(r & a),
                                u = n ? 4 : 0,
                                c = n ? 0 : 4;
                            e.setUint32(t + u, s, n), e.setUint32(t + c, o, n)
                        })(r, n - 8, BigInt(8 * this.length), i), this.process(r, 0);
                        let s = _(e),
                            o = this.outputLen;
                        if (o % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                        let u = o / 4,
                            c = this.get();
                        if (u > c.length) throw Error("_sha2: outputLen bigger than state");
                        for (let e = 0; e < u; e++) s.setUint32(4 * e, c[e], i)
                    }
                    digest() {
                        let {
                            buffer: e,
                            outputLen: t
                        } = this;
                        this.digestInto(e);
                        let r = e.slice(0, t);
                        return this.destroy(), r
                    }
                    _cloneInto(e) {
                        e || (e = new this.constructor), e.set(...this.get());
                        let {
                            blockLen: t,
                            buffer: r,
                            length: n,
                            finished: i,
                            destroyed: a,
                            pos: s
                        } = this;
                        return e.length = n, e.pos = s, e.finished = i, e.destroyed = a, n % t && e.buffer.set(r), e
                    }
                },
                T = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                A = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                O = new Uint32Array(64),
                S = class extends N {
                    constructor() {
                        super(64, 32, 8, !1), this.A = 0 | A[0], this.B = 0 | A[1], this.C = 0 | A[2], this.D = 0 | A[3], this.E = 0 | A[4], this.F = 0 | A[5], this.G = 0 | A[6], this.H = 0 | A[7]
                    }
                    get() {
                        let {
                            A: e,
                            B: t,
                            C: r,
                            D: n,
                            E: i,
                            F: a,
                            G: s,
                            H: o
                        } = this;
                        return [e, t, r, n, i, a, s, o]
                    }
                    set(e, t, r, n, i, a, s, o) {
                        this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | a, this.G = 0 | s, this.H = 0 | o
                    }
                    process(e, t) {
                        for (let r = 0; r < 16; r++, t += 4) O[r] = e.getUint32(t, !1);
                        for (let e = 16; e < 64; e++) {
                            let t = O[e - 15],
                                r = O[e - 2],
                                n = v(t, 7) ^ v(t, 18) ^ t >>> 3,
                                i = v(r, 17) ^ v(r, 19) ^ r >>> 10;
                            O[e] = i + O[e - 7] + n + O[e - 16] | 0
                        }
                        let {
                            A: r,
                            B: n,
                            C: i,
                            D: a,
                            E: s,
                            F: o,
                            G: u,
                            H: c
                        } = this;
                        for (let e = 0; e < 64; e++) {
                            let t = c + (v(s, 6) ^ v(s, 11) ^ v(s, 25)) + B(s, o, u) + T[e] + O[e] | 0,
                                f = (v(r, 2) ^ v(r, 13) ^ v(r, 22)) + I(r, n, i) | 0;
                            c = u, u = o, o = s, s = a + t | 0, a = i, i = n, n = r, r = t + f | 0
                        }
                        r = r + this.A | 0, n = n + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, s = s + this.E | 0, o = o + this.F | 0, u = u + this.G | 0, c = c + this.H | 0, this.set(r, n, i, a, s, o, u, c)
                    }
                    roundClean() {
                        O.fill(0)
                    }
                    destroy() {
                        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                    }
                },
                R = class extends S {
                    constructor() {
                        super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28
                    }
                },
                U = (u = () => new R, n = e => u().update(E(e)).digest(), i = u(), n.outputLen = i.outputLen, n.blockLen = i.blockLen, n.create = () => u(), n),
                F = class e {
                    constructor(e) {
                        this.bytes = e
                    }
                    static fromHex(t) {
                        return new e(Uint8Array.from(f.from(t, "hex")))
                    }
                    static fromPrincipal({
                        principal: t,
                        subAccount: r = P.fromID(0)
                    }) {
                        let n = (0, c.Uo)(`
account-id`),
                            i = U.create();
                        i.update((0, c.YM)([...n, ...t.toUint8Array(), ...r.toUint8Array()]));
                        let a = i.digest();
                        return new e(new Uint8Array([...(0, c.RE)(a), ...a]))
                    }
                    toHex() {
                        return (0, c.fv)(this.bytes)
                    }
                    toUint8Array() {
                        return this.bytes
                    }
                    toNumbers() {
                        return Array.from(this.bytes)
                    }
                    toAccountIdentifierHash() {
                        return {
                            hash: this.toUint8Array()
                        }
                    }
                },
                P = class e {
                    constructor(e) {
                        this.bytes = e
                    }
                    static fromBytes(t) {
                        return 32 != t.length ? Error("Subaccount length must be 32-bytes") : new e(t)
                    }
                    static fromPrincipal(t) {
                        let r = new Uint8Array(32).fill(0),
                            n = t.toUint8Array();
                        r[0] = n.length;
                        for (let e = 0; e < n.length; e++) r[1 + e] = n[e];
                        return new e(r)
                    }
                    static fromID(t) {
                        if (t < 0) throw Error("Number cannot be negative");
                        if (t > Number.MAX_SAFE_INTEGER) throw Error("Number is too large to fit in 32 bytes.");
                        let r = new DataView(new ArrayBuffer(32));
                        if ("function" == typeof r.setBigUint64) r.setBigUint64(24, BigInt(t));
                        else {
                            let e = BigInt(1) << BigInt(32);
                            r.setUint32(24, Number(BigInt(t) >> BigInt(32))), r.setUint32(28, Number(BigInt(t) % e))
                        }
                        return new e(new Uint8Array(r.buffer))
                    }
                    toUint8Array() {
                        return this.bytes
                    }
                },
                L = r(29711);
            L.Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"), L.Principal.fromText("qhbym-qaaaa-aaaaa-aaafq-cai"), c.y5, BigInt(1095062083), BigInt(1347768404), BigInt(1e4), BigInt(1e8);
            var k = class extends Error {},
                V = class extends k {},
                C = class extends k {};
            c.y5, r(9109).lW;
            var M = b(e => {
                    e.byteLength = function(e) {
                        var t = o(e),
                            r = t[0],
                            n = t[1];
                        return (r + n) * 3 / 4 - n
                    }, e.toByteArray = function(e) {
                        var t, r, n = o(e),
                            s = n[0],
                            u = n[1],
                            c = new a((s + u) * 3 / 4 - u),
                            f = 0,
                            l = u > 0 ? s - 4 : s;
                        for (r = 0; r < l; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], c[f++] = t >> 16 & 255, c[f++] = t >> 8 & 255, c[f++] = 255 & t;
                        return 2 === u && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, c[f++] = 255 & t), 1 === u && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, c[f++] = t >> 8 & 255, c[f++] = 255 & t), c
                    }, e.fromByteArray = function(e) {
                        for (var t, r = e.length, i = r % 3, a = [], s = 0, o = r - i; s < o; s += 16383) a.push(function(e, t, r) {
                            for (var i, a = [], s = t; s < r; s += 3) a.push(n[(i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2])) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
                            return a.join("")
                        }(e, s, s + 16383 > o ? o : s + 16383));
                        return 1 === i ? a.push(n[(t = e[r - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === i && a.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), a.join("")
                    };
                    var t, r, n = [],
                        i = [],
                        a = "u" > typeof Uint8Array ? Uint8Array : Array,
                        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                    for (t = 0, r = s.length; t < r; ++t) n[t] = s[t], i[s.charCodeAt(t)] = t;

                    function o(e) {
                        var t = e.length;
                        if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                        var r = e.indexOf("="); - 1 === r && (r = t);
                        var n = r === t ? 0 : 4 - r % 4;
                        return [r, n]
                    }
                    i[45] = 62, i[95] = 63
                }),
                j = b(e => {
                    e.read = function(e, t, r, n, i) {
                        var a, s, o = 8 * i - n - 1,
                            u = (1 << o) - 1,
                            c = u >> 1,
                            f = -7,
                            l = r ? i - 1 : 0,
                            h = r ? -1 : 1,
                            d = e[t + l];
                        for (l += h, a = d & (1 << -f) - 1, d >>= -f, f += o; f > 0; a = 256 * a + e[t + l], l += h, f -= 8);
                        for (s = a & (1 << -f) - 1, a >>= -f, f += n; f > 0; s = 256 * s + e[t + l], l += h, f -= 8);
                        if (0 === a) a = 1 - c;
                        else {
                            if (a === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                            s += Math.pow(2, n), a -= c
                        }
                        return (d ? -1 : 1) * s * Math.pow(2, a - n)
                    }, e.write = function(e, t, r, n, i, a) {
                        var s, o, u, c = 8 * a - i - 1,
                            f = (1 << c) - 1,
                            l = f >> 1,
                            h = 23 === i ? 5960464477539062e-23 : 0,
                            d = n ? 0 : a - 1,
                            p = n ? 1 : -1,
                            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + l >= 1 ? t += h / u : t += h * Math.pow(2, 1 - l), t * u >= 2 && (s++, u /= 2), s + l >= f ? (o = 0, s = f) : s + l >= 1 ? (o = (t * u - 1) * Math.pow(2, i), s += l) : (o = t * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + d] = 255 & o, d += p, o /= 256, i -= 8);
                        for (s = s << i | o, c += i; c > 0; e[r + d] = 255 & s, d += p, s /= 256, c -= 8);
                        e[r + d - p] |= 128 * g
                    }
                });
            o = null != (a = b(e => {
                var t = M(),
                    r = j(),
                    n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                function i(e) {
                    if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                    let t = new Uint8Array(e);
                    return Object.setPrototypeOf(t, a.prototype), t
                }

                function a(e, t, r) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                        return u(e)
                    }
                    return s(e, t, r)
                }

                function s(e, t, r) {
                    if ("string" == typeof e) return function(e, t) {
                        if (("string" != typeof t || "" === t) && (t = "utf8"), !a.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                        let r = 0 | h(e, t),
                            n = i(r),
                            s = n.write(e, t);
                        return s !== r && (n = n.slice(0, s)), n
                    }(e, t);
                    if (ArrayBuffer.isView(e)) return function(e) {
                        if (L(e, Uint8Array)) {
                            let t = new Uint8Array(e);
                            return f(t.buffer, t.byteOffset, t.byteLength)
                        }
                        return c(e)
                    }(e);
                    if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (L(e, ArrayBuffer) || e && L(e.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (L(e, SharedArrayBuffer) || e && L(e.buffer, SharedArrayBuffer))) return f(e, t, r);
                    if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                    let n = e.valueOf && e.valueOf();
                    if (null != n && n !== e) return a.from(n, t, r);
                    let s = function(e) {
                        var t;
                        if (a.isBuffer(e)) {
                            let t = 0 | l(e.length),
                                r = i(t);
                            return 0 === r.length || e.copy(r, 0, 0, t), r
                        }
                        return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? i(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
                    }(e);
                    if (s) return s;
                    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, r);
                    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function o(e) {
                    if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function u(e) {
                    return o(e), i(e < 0 ? 0 : 0 | l(e))
                }

                function c(e) {
                    let t = e.length < 0 ? 0 : 0 | l(e.length),
                        r = i(t);
                    for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
                    return r
                }

                function f(e, t, r) {
                    let n;
                    if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                    return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), a.prototype), n
                }

                function l(e) {
                    if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                    return 0 | e
                }

                function h(e, t) {
                    if (a.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || L(e, ArrayBuffer)) return e.byteLength;
                    if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    let r = e.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    let i = !1;
                    for (;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return U(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return F(e).length;
                        default:
                            if (i) return n ? -1 : U(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function d(e, r, n) {
                    let i = !1;
                    if ((void 0 === r || r < 0) && (r = 0), r > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0) <= (r >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return function(e, t, r) {
                                let n = e.length;
                                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                                let i = "";
                                for (let n = t; n < r; ++n) i += k[e[n]];
                                return i
                            }(this, r, n);
                        case "utf8":
                        case "utf-8":
                            return b(this, r, n);
                        case "ascii":
                            return function(e, t, r) {
                                let n = "";
                                r = Math.min(e.length, r);
                                for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                                return n
                            }(this, r, n);
                        case "latin1":
                        case "binary":
                            return function(e, t, r) {
                                let n = "";
                                r = Math.min(e.length, r);
                                for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                                return n
                            }(this, r, n);
                        case "base64":
                            var a, s;
                            return a = r, s = n, 0 === a && s === this.length ? t.fromByteArray(this) : t.fromByteArray(this.slice(a, s));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return function(e, t, r) {
                                let n = e.slice(t, r),
                                    i = "";
                                for (let e = 0; e < n.length - 1; e += 2) i += String.fromCharCode(n[e] + 256 * n[e + 1]);
                                return i
                            }(this, r, n);
                        default:
                            if (i) throw TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), i = !0
                    }
                }

                function p(e, t, r) {
                    let n = e[t];
                    e[t] = e[r], e[r] = n
                }

                function g(e, t, r, n, i) {
                    var s;
                    if (0 === e.length) return -1;
                    if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (s = r = +r) != s && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                        if (i) return -1;
                        r = e.length - 1
                    } else if (r < 0) {
                        if (!i) return -1;
                        r = 0
                    }
                    if ("string" == typeof t && (t = a.from(t, n)), a.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, n, i);
                    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, i);
                    throw TypeError("val must be string, number or Buffer")
                }

                function y(e, t, r, n, i) {
                    let a, s = 1,
                        o = e.length,
                        u = t.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        s = 2, o /= 2, u /= 2, r /= 2
                    }

                    function c(e, t) {
                        return 1 === s ? e[t] : e.readUInt16BE(t * s)
                    }
                    if (i) {
                        let n = -1;
                        for (a = r; a < o; a++)
                            if (c(e, a) === c(t, -1 === n ? 0 : a - n)) {
                                if (-1 === n && (n = a), a - n + 1 === u) return n * s
                            } else -1 !== n && (a -= a - n), n = -1
                    } else
                        for (r + u > o && (r = o - u), a = r; a >= 0; a--) {
                            let r = !0;
                            for (let n = 0; n < u; n++)
                                if (c(e, a + n) !== c(t, n)) {
                                    r = !1;
                                    break
                                }
                            if (r) return a
                        }
                    return -1
                }

                function b(e, t, r) {
                    r = Math.min(e.length, r);
                    let n = [],
                        i = t;
                    for (; i < r;) {
                        let t = e[i],
                            a = null,
                            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                        if (i + s <= r) {
                            let r, n, o, u;
                            switch (s) {
                                case 1:
                                    t < 128 && (a = t);
                                    break;
                                case 2:
                                    (192 & (r = e[i + 1])) == 128 && (u = (31 & t) << 6 | 63 & r) > 127 && (a = u);
                                    break;
                                case 3:
                                    r = e[i + 1], n = e[i + 2], (192 & r) == 128 && (192 & n) == 128 && (u = (15 & t) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (u < 55296 || u > 57343) && (a = u);
                                    break;
                                case 4:
                                    r = e[i + 1], n = e[i + 2], o = e[i + 3], (192 & r) == 128 && (192 & n) == 128 && (192 & o) == 128 && (u = (15 & t) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & o) > 65535 && u < 1114112 && (a = u)
                            }
                        }
                        null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += s
                    }
                    return function(e) {
                        let t = e.length;
                        if (t <= 4096) return String.fromCharCode.apply(String, e);
                        let r = "",
                            n = 0;
                        for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                        return r
                    }(n)
                }

                function m(e, t, r) {
                    if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                    if (e + t > r) throw RangeError("Trying to access beyond buffer length")
                }

                function w(e, t, r, n, i, s) {
                    if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                    if (t > i || t < s) throw RangeError('"value" argument is out of bounds');
                    if (r + n > e.length) throw RangeError("Index out of range")
                }

                function _(e, t, r, n, i) {
                    A(t, n, i, e, r, 7);
                    let a = Number(t & BigInt(4294967295));
                    e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a;
                    let s = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, r
                }

                function v(e, t, r, n, i) {
                    A(t, n, i, e, r, 7);
                    let a = Number(t & BigInt(4294967295));
                    e[r + 7] = a, a >>= 8, e[r + 6] = a, a >>= 8, e[r + 5] = a, a >>= 8, e[r + 4] = a;
                    let s = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[r + 3] = s, s >>= 8, e[r + 2] = s, s >>= 8, e[r + 1] = s, s >>= 8, e[r] = s, r + 8
                }

                function E(e, t, r, n, i, a) {
                    if (r + n > e.length || r < 0) throw RangeError("Index out of range")
                }

                function x(e, t, n, i, a) {
                    return t = +t, n >>>= 0, a || E(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), r.write(e, t, n, i, 23, 4), n + 4
                }

                function B(e, t, n, i, a) {
                    return t = +t, n >>>= 0, a || E(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), r.write(e, t, n, i, 52, 8), n + 8
                }
                e.Buffer = a, e.SlowBuffer = function(e) {
                    return +e != e && (e = 0), a.alloc(+e)
                }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 2147483647, a.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        let e = new Uint8Array(1),
                            t = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                    } catch {
                        return !1
                    }
                }(), !a.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (a.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(a.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (a.isBuffer(this)) return this.byteOffset
                    }
                }), a.poolSize = 8192, a.from = function(e, t, r) {
                    return s(e, t, r)
                }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(e, t, r) {
                    return o(e), e <= 0 ? i(e) : void 0 !== t ? "string" == typeof r ? i(e).fill(t, r) : i(e).fill(t) : i(e)
                }, a.allocUnsafe = function(e) {
                    return u(e)
                }, a.allocUnsafeSlow = function(e) {
                    return u(e)
                }, a.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== a.prototype
                }, a.compare = function(e, t) {
                    if (L(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), L(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    let r = e.length,
                        n = t.length;
                    for (let i = 0, a = Math.min(r, n); i < a; ++i)
                        if (e[i] !== t[i]) {
                            r = e[i], n = t[i];
                            break
                        }
                    return r < n ? -1 : n < r ? 1 : 0
                }, a.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, a.concat = function(e, t) {
                    let r;
                    if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return a.alloc(0);
                    if (void 0 === t)
                        for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                    let n = a.allocUnsafe(t),
                        i = 0;
                    for (r = 0; r < e.length; ++r) {
                        let t = e[r];
                        if (L(t, Uint8Array)) i + t.length > n.length ? (a.isBuffer(t) || (t = a.from(t)), t.copy(n, i)) : Uint8Array.prototype.set.call(n, t, i);
                        else if (a.isBuffer(t)) t.copy(n, i);
                        else throw TypeError('"list" argument must be an Array of Buffers');
                        i += t.length
                    }
                    return n
                }, a.byteLength = h, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                    let e = this.length;
                    if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                    for (let t = 0; t < e; t += 2) p(this, t, t + 1);
                    return this
                }, a.prototype.swap32 = function() {
                    let e = this.length;
                    if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                    for (let t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                    return this
                }, a.prototype.swap64 = function() {
                    let e = this.length;
                    if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                    for (let t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                    return this
                }, a.prototype.toString = function() {
                    let e = this.length;
                    return 0 === e ? "" : 0 == arguments.length ? b(this, 0, e) : d.apply(this, arguments)
                }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(e) {
                    if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                    return this === e || 0 === a.compare(this, e)
                }, a.prototype.inspect = function() {
                    let t = "",
                        r = e.INSPECT_MAX_BYTES;
                    return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(e, t, r, n, i) {
                    if (L(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw RangeError("out of range index");
                    if (n >= i && t >= r) return 0;
                    if (n >= i) return -1;
                    if (t >= r) return 1;
                    if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
                    let s = i - n,
                        o = r - t,
                        u = Math.min(s, o),
                        c = this.slice(n, i),
                        f = e.slice(t, r);
                    for (let e = 0; e < u; ++e)
                        if (c[e] !== f[e]) {
                            s = c[e], o = f[e];
                            break
                        }
                    return s < o ? -1 : o < s ? 1 : 0
                }, a.prototype.includes = function(e, t, r) {
                    return -1 !== this.indexOf(e, t, r)
                }, a.prototype.indexOf = function(e, t, r) {
                    return g(this, e, t, r, !0)
                }, a.prototype.lastIndexOf = function(e, t, r) {
                    return g(this, e, t, r, !1)
                }, a.prototype.write = function(e, t, r, n) {
                    var i, a, s, o, u, c, f, l;
                    if (void 0 === t) n = "utf8", r = this.length, t = 0;
                    else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                    else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    let h = this.length - t;
                    if ((void 0 === r || r > h) && (r = h), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    let d = !1;
                    for (;;) switch (n) {
                        case "hex":
                            return function(e, t, r, n) {
                                let i;
                                r = Number(r) || 0;
                                let a = e.length - r;
                                n ? (n = Number(n)) > a && (n = a) : n = a;
                                let s = t.length;
                                for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                                    let n = parseInt(t.substr(2 * i, 2), 16);
                                    if (n != n) break;
                                    e[r + i] = n
                                }
                                return i
                            }(this, e, t, r);
                        case "utf8":
                        case "utf-8":
                            return i = t, a = r, P(U(e, this.length - i), this, i, a);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return s = t, o = r, P(function(e) {
                                let t = [];
                                for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                                return t
                            }(e), this, s, o);
                        case "base64":
                            return u = t, c = r, P(F(e), this, u, c);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return f = t, l = r, P(function(e, t) {
                                let r, n, i = [];
                                for (let a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8, i.push(r % 256), i.push(n);
                                return i
                            }(e, this.length - f), this, f, l);
                        default:
                            if (d) throw TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), d = !0
                    }
                }, a.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                }, a.prototype.slice = function(e, t) {
                    let r = this.length;
                    e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                    let n = this.subarray(e, t);
                    return Object.setPrototypeOf(n, a.prototype), n
                }, a.prototype.readUintLE = a.prototype.readUIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || m(e, t, this.length);
                    let n = this[e],
                        i = 1,
                        a = 0;
                    for (; ++a < t && (i *= 256);) n += this[e + a] * i;
                    return n
                }, a.prototype.readUintBE = a.prototype.readUIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || m(e, t, this.length);
                    let n = this[e + --t],
                        i = 1;
                    for (; t > 0 && (i *= 256);) n += this[e + --t] * i;
                    return n
                }, a.prototype.readUint8 = a.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || m(e, 1, this.length), this[e]
                }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || m(e, 2, this.length), this[e] | this[e + 1] << 8
                }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || m(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || m(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || m(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, a.prototype.readBigUInt64LE = V(function(e) {
                    O(e >>>= 0, "offset");
                    let t = this[e],
                        r = this[e + 7];
                    (void 0 === t || void 0 === r) && S(e, this.length - 8);
                    let n = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
                        i = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r;
                    return BigInt(n) + (BigInt(i) << BigInt(32))
                }), a.prototype.readBigUInt64BE = V(function(e) {
                    O(e >>>= 0, "offset");
                    let t = this[e],
                        r = this[e + 7];
                    (void 0 === t || void 0 === r) && S(e, this.length - 8);
                    let n = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                        i = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
                    return (BigInt(n) << BigInt(32)) + BigInt(i)
                }), a.prototype.readIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || m(e, t, this.length);
                    let n = this[e],
                        i = 1,
                        a = 0;
                    for (; ++a < t && (i *= 256);) n += this[e + a] * i;
                    return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
                }, a.prototype.readIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || m(e, t, this.length);
                    let n = t,
                        i = 1,
                        a = this[e + --n];
                    for (; n > 0 && (i *= 256);) a += this[e + --n] * i;
                    return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a
                }, a.prototype.readInt8 = function(e, t) {
                    return e >>>= 0, t || m(e, 1, this.length), 128 & this[e] ? -((255 - this[e] + 1) * 1) : this[e]
                }, a.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || m(e, 2, this.length);
                    let r = this[e] | this[e + 1] << 8;
                    return 32768 & r ? 4294901760 | r : r
                }, a.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || m(e, 2, this.length);
                    let r = this[e + 1] | this[e] << 8;
                    return 32768 & r ? 4294901760 | r : r
                }, a.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || m(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, a.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || m(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, a.prototype.readBigInt64LE = V(function(e) {
                    O(e >>>= 0, "offset");
                    let t = this[e],
                        r = this[e + 7];
                    return (void 0 === t || void 0 === r) && S(e, this.length - 8), (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
                }), a.prototype.readBigInt64BE = V(function(e) {
                    O(e >>>= 0, "offset");
                    let t = this[e],
                        r = this[e + 7];
                    return (void 0 === t || void 0 === r) && S(e, this.length - 8), (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
                }), a.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || m(e, 4, this.length), r.read(this, e, !0, 23, 4)
                }, a.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || m(e, 4, this.length), r.read(this, e, !1, 23, 4)
                }, a.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || m(e, 8, this.length), r.read(this, e, !0, 52, 8)
                }, a.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || m(e, 8, this.length), r.read(this, e, !1, 52, 8)
                }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(e, t, r, n) {
                    if (e = +e, t >>>= 0, r >>>= 0, !n) {
                        let n = Math.pow(2, 8 * r) - 1;
                        w(this, e, t, r, n, 0)
                    }
                    let i = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++a < r && (i *= 256);) this[t + a] = e / i & 255;
                    return t + r
                }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(e, t, r, n) {
                    if (e = +e, t >>>= 0, r >>>= 0, !n) {
                        let n = Math.pow(2, 8 * r) - 1;
                        w(this, e, t, r, n, 0)
                    }
                    let i = r - 1,
                        a = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
                    return t + r
                }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, a.prototype.writeBigUInt64LE = V(function(e, t = 0) {
                    return _(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                }), a.prototype.writeBigUInt64BE = V(function(e, t = 0) {
                    return v(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                }), a.prototype.writeIntLE = function(e, t, r, n) {
                    if (e = +e, t >>>= 0, !n) {
                        let n = Math.pow(2, 8 * r - 1);
                        w(this, e, t, r, n - 1, -n)
                    }
                    let i = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++i < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                    return t + r
                }, a.prototype.writeIntBE = function(e, t, r, n) {
                    if (e = +e, t >>>= 0, !n) {
                        let n = Math.pow(2, 8 * r - 1);
                        w(this, e, t, r, n - 1, -n)
                    }
                    let i = r - 1,
                        a = 1,
                        s = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                    return t + r
                }, a.prototype.writeInt8 = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, a.prototype.writeInt16LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, a.prototype.writeInt16BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, a.prototype.writeInt32LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, a.prototype.writeInt32BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || w(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, a.prototype.writeBigInt64LE = V(function(e, t = 0) {
                    return _(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                }), a.prototype.writeBigInt64BE = V(function(e, t = 0) {
                    return v(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                }), a.prototype.writeFloatLE = function(e, t, r) {
                    return x(this, e, t, !0, r)
                }, a.prototype.writeFloatBE = function(e, t, r) {
                    return x(this, e, t, !1, r)
                }, a.prototype.writeDoubleLE = function(e, t, r) {
                    return B(this, e, t, !0, r)
                }, a.prototype.writeDoubleBE = function(e, t, r) {
                    return B(this, e, t, !1, r)
                }, a.prototype.copy = function(e, t, r, n) {
                    if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
                    if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                    if (n < 0) throw RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                    let i = n - r;
                    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i
                }, a.prototype.fill = function(e, t, r, n) {
                    let i;
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                        if ("string" == typeof n && !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                        if (1 === e.length) {
                            let t = e.charCodeAt(0);
                            ("utf8" === n && t < 128 || "latin1" === n) && (e = t)
                        }
                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                    if (r <= t) return this;
                    if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                        for (i = t; i < r; ++i) this[i] = e;
                    else {
                        let s = a.isBuffer(e) ? e : a.from(e, n),
                            o = s.length;
                        if (0 === o) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (i = 0; i < r - t; ++i) this[i + t] = s[i % o]
                    }
                    return this
                };
                var I = {};

                function N(e, t, r) {
                    I[e] = class extends r {
                        constructor() {
                            super(), Object.defineProperty(this, "message", {
                                value: t.apply(this, arguments),
                                writable: !0,
                                configurable: !0
                            }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                        }
                        get code() {
                            return e
                        }
                        set code(e) {
                            Object.defineProperty(this, "code", {
                                configurable: !0,
                                enumerable: !0,
                                value: e,
                                writable: !0
                            })
                        }
                        toString() {
                            return `${this.name} [${e}]: ${this.message}`
                        }
                    }
                }

                function T(e) {
                    let t = "",
                        r = e.length,
                        n = "-" === e[0] ? 1 : 0;
                    for (; r >= n + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
                    return `${e.slice(0,r)}${t}`
                }

                function A(e, t, r, n, i, a) {
                    if (e > r || e < t) {
                        let n = "bigint" == typeof t ? "n" : "",
                            i;
                        throw i = a > 3 ? 0 === t || t === BigInt(0) ? `>= 0${n} and < 2${n} ** ${(a+1)*8}${n}` : `>= -(2${n} ** ${(a+1)*8-1}${n}) and < 2 ** ${(a+1)*8-1}${n}` : `>= ${t}${n} and <= ${r}${n}`, new I.ERR_OUT_OF_RANGE("value", i, e)
                    }
                    O(i, "offset"), (void 0 === n[i] || void 0 === n[i + a]) && S(i, n.length - (a + 1))
                }

                function O(e, t) {
                    if ("number" != typeof e) throw new I.ERR_INVALID_ARG_TYPE(t, "number", e)
                }

                function S(e, t, r) {
                    throw Math.floor(e) !== e ? (O(e, r), new I.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new I.ERR_BUFFER_OUT_OF_BOUNDS : new I.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${t}`, e)
                }
                N("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
                    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
                }, RangeError), N("ERR_INVALID_ARG_TYPE", function(e, t) {
                    return `The "${e}" argument must be of type number. Received type ${typeof t}`
                }, TypeError), N("ERR_OUT_OF_RANGE", function(e, t, r) {
                    let n = `The value of "${e}" is out of range.`,
                        i = r;
                    return Number.isInteger(r) && Math.abs(r) > 4294967296 ? i = T(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = T(i)), i += "n"), n += ` It must be ${t}. Received ${i}`
                }, RangeError);
                var R = /[^+/0-9A-Za-z-_]/g;

                function U(e, t) {
                    t = t || 1 / 0;
                    let r, n = e.length,
                        i = null,
                        a = [];
                    for (let s = 0; s < n; ++s) {
                        if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                            if (!i) {
                                if (r > 56319 || s + 1 === n) {
                                    (t -= 3) > -1 && a.push(239, 191, 189);
                                    continue
                                }
                                i = r;
                                continue
                            }
                            if (r < 56320) {
                                (t -= 3) > -1 && a.push(239, 191, 189), i = r;
                                continue
                            }
                            r = (i - 55296 << 10 | r - 56320) + 65536
                        } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                        if (i = null, r < 128) {
                            if ((t -= 1) < 0) break;
                            a.push(r)
                        } else if (r < 2048) {
                            if ((t -= 2) < 0) break;
                            a.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((t -= 3) < 0) break;
                            a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else if (r < 1114112) {
                            if ((t -= 4) < 0) break;
                            a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        } else throw Error("Invalid code point")
                    }
                    return a
                }

                function F(e) {
                    return t.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(R, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function P(e, t, r, n) {
                    let i;
                    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                    return i
                }

                function L(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }
                var k = function() {
                    let e = "0123456789abcdef",
                        t = Array(256);
                    for (let r = 0; r < 16; ++r) {
                        let n = 16 * r;
                        for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i]
                    }
                    return t
                }();

                function V(e) {
                    return typeof BigInt > "u" ? C : e
                }

                function C() {
                    throw Error("BigInt not supported")
                }
            })()) ? l(g(a)) : {}, ((e, t, r, n) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let i of p(t)) y.call(e, i) || i === r || h(e, i, {
                        get: () => t[i],
                        enumerable: !(n = d(t, i)) || n.enumerable
                    })
            })(!s && a && a.__esModule ? o : h(o, "default", {
                value: a,
                enumerable: !0
            }), a);
            /*! Bundled license information:

            ieee754/index.js:
              (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

            buffer/index.js:
              (*!
               * The buffer module from node.js, for the browser.
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               *)
            */
        },
        51313: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                kp: function() {
                    return l
                }
            });
            var i = r(69419);
            i.y5;
            var a = ({
                    IDL: e
                }) => {
                    let t = e.Rec(),
                        r = e.Variant({
                            Int: e.Int,
                            Nat: e.Nat,
                            Blob: e.Vec(e.Nat8),
                            Text: e.Text
                        }),
                        n = e.Vec(e.Nat8),
                        i = e.Record({
                            owner: e.Principal,
                            subaccount: e.Opt(n)
                        }),
                        a = e.Variant({
                            SetTo: i,
                            Unset: e.Null
                        }),
                        s = e.Record({
                            icrc2: e.Bool
                        }),
                        o = e.Record({
                            token_symbol: e.Opt(e.Text),
                            transfer_fee: e.Opt(e.Nat),
                            metadata: e.Opt(e.Vec(e.Tuple(e.Text, r))),
                            maximum_number_of_accounts: e.Opt(e.Nat64),
                            accounts_overflow_trim_quantity: e.Opt(e.Nat64),
                            change_fee_collector: e.Opt(a),
                            max_memo_length: e.Opt(e.Nat16),
                            token_name: e.Opt(e.Text),
                            feature_flags: e.Opt(s)
                        }),
                        u = e.Record({
                            decimals: e.Opt(e.Nat8),
                            token_symbol: e.Text,
                            transfer_fee: e.Nat,
                            metadata: e.Vec(e.Tuple(e.Text, r)),
                            minting_account: i,
                            initial_balances: e.Vec(e.Tuple(i, e.Nat)),
                            maximum_number_of_accounts: e.Opt(e.Nat64),
                            accounts_overflow_trim_quantity: e.Opt(e.Nat64),
                            fee_collector_account: e.Opt(i),
                            archive_options: e.Record({
                                num_blocks_to_archive: e.Nat64,
                                max_transactions_per_response: e.Opt(e.Nat64),
                                trigger_threshold: e.Nat64,
                                max_message_size_bytes: e.Opt(e.Nat64),
                                cycles_for_archive_creation: e.Opt(e.Nat64),
                                node_max_memory_size_bytes: e.Opt(e.Nat64),
                                controller_id: e.Principal
                            }),
                            max_memo_length: e.Opt(e.Nat16),
                            token_name: e.Text,
                            feature_flags: e.Opt(s)
                        }),
                        c = (e.Variant({
                            Upgrade: e.Opt(o),
                            Init: u
                        }), e.Nat),
                        f = e.Record({
                            start: c,
                            length: e.Nat
                        }),
                        l = e.Vec(e.Tuple(e.Text, t));
                    t.fill(e.Variant({
                        Int: e.Int,
                        Map: l,
                        Nat: e.Nat,
                        Nat64: e.Nat64,
                        Blob: e.Vec(e.Nat8),
                        Text: e.Text,
                        Array: e.Vec(t)
                    }));
                    let h = e.Record({
                            blocks: e.Vec(t)
                        }),
                        d = e.Func([f], [h], []),
                        p = e.Record({
                            certificate: e.Opt(e.Vec(e.Nat8)),
                            first_index: c,
                            blocks: e.Vec(t),
                            chain_length: e.Nat64,
                            archived_blocks: e.Vec(e.Record({
                                callback: d,
                                start: c,
                                length: e.Nat
                            }))
                        }),
                        g = e.Record({
                            certificate: e.Opt(e.Vec(e.Nat8)),
                            hash_tree: e.Vec(e.Nat8)
                        }),
                        y = e.Nat,
                        b = e.Record({
                            start: y,
                            length: e.Nat
                        }),
                        m = e.Record({
                            from: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat,
                            spender: e.Opt(i)
                        }),
                        w = e.Record({
                            to: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat
                        }),
                        _ = e.Record({
                            fee: e.Opt(e.Nat),
                            from: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat,
                            expected_allowance: e.Opt(e.Nat),
                            expires_at: e.Opt(e.Nat64),
                            spender: i
                        }),
                        v = e.Record({
                            to: i,
                            fee: e.Opt(e.Nat),
                            from: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat,
                            spender: e.Opt(i)
                        }),
                        E = e.Record({
                            burn: e.Opt(m),
                            kind: e.Text,
                            mint: e.Opt(w),
                            approve: e.Opt(_),
                            timestamp: e.Nat64,
                            transfer: e.Opt(v)
                        }),
                        x = e.Record({
                            transactions: e.Vec(E)
                        }),
                        B = e.Func([b], [x], []),
                        I = e.Record({
                            first_index: y,
                            log_length: e.Nat,
                            transactions: e.Vec(E),
                            archived_transactions: e.Vec(e.Record({
                                callback: B,
                                start: y,
                                length: e.Nat
                            }))
                        }),
                        N = e.Nat,
                        T = e.Record({
                            url: e.Text,
                            name: e.Text
                        }),
                        A = e.Nat64,
                        O = e.Record({
                            to: i,
                            fee: e.Opt(N),
                            memo: e.Opt(e.Vec(e.Nat8)),
                            from_subaccount: e.Opt(n),
                            created_at_time: e.Opt(A),
                            amount: N
                        }),
                        S = e.Variant({
                            GenericError: e.Record({
                                message: e.Text,
                                error_code: e.Nat
                            }),
                            TemporarilyUnavailable: e.Null,
                            BadBurn: e.Record({
                                min_burn_amount: N
                            }),
                            Duplicate: e.Record({
                                duplicate_of: c
                            }),
                            BadFee: e.Record({
                                expected_fee: N
                            }),
                            CreatedInFuture: e.Record({
                                ledger_time: e.Nat64
                            }),
                            TooOld: e.Null,
                            InsufficientFunds: e.Record({
                                balance: N
                            })
                        }),
                        R = e.Variant({
                            Ok: c,
                            Err: S
                        }),
                        U = e.Record({
                            account: i,
                            spender: i
                        }),
                        F = e.Record({
                            allowance: e.Nat,
                            expires_at: e.Opt(e.Nat64)
                        }),
                        P = e.Record({
                            fee: e.Opt(e.Nat),
                            memo: e.Opt(e.Vec(e.Nat8)),
                            from_subaccount: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat,
                            expected_allowance: e.Opt(e.Nat),
                            expires_at: e.Opt(e.Nat64),
                            spender: i
                        }),
                        L = e.Variant({
                            GenericError: e.Record({
                                message: e.Text,
                                error_code: e.Nat
                            }),
                            TemporarilyUnavailable: e.Null,
                            Duplicate: e.Record({
                                duplicate_of: e.Nat
                            }),
                            BadFee: e.Record({
                                expected_fee: e.Nat
                            }),
                            AllowanceChanged: e.Record({
                                current_allowance: e.Nat
                            }),
                            CreatedInFuture: e.Record({
                                ledger_time: e.Nat64
                            }),
                            TooOld: e.Null,
                            Expired: e.Record({
                                ledger_time: e.Nat64
                            }),
                            InsufficientFunds: e.Record({
                                balance: e.Nat
                            })
                        }),
                        k = e.Variant({
                            Ok: e.Nat,
                            Err: L
                        }),
                        V = e.Record({
                            to: i,
                            fee: e.Opt(N),
                            spender_subaccount: e.Opt(n),
                            from: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(A),
                            amount: N
                        }),
                        C = e.Variant({
                            GenericError: e.Record({
                                message: e.Text,
                                error_code: e.Nat
                            }),
                            TemporarilyUnavailable: e.Null,
                            InsufficientAllowance: e.Record({
                                allowance: N
                            }),
                            BadBurn: e.Record({
                                min_burn_amount: N
                            }),
                            Duplicate: e.Record({
                                duplicate_of: c
                            }),
                            BadFee: e.Record({
                                expected_fee: N
                            }),
                            CreatedInFuture: e.Record({
                                ledger_time: e.Nat64
                            }),
                            TooOld: e.Null,
                            InsufficientFunds: e.Record({
                                balance: N
                            })
                        }),
                        M = e.Variant({
                            Ok: c,
                            Err: C
                        });
                    return e.Service({
                        get_blocks: e.Func([f], [p], []),
                        get_data_certificate: e.Func([], [g], []),
                        get_transactions: e.Func([b], [I], []),
                        icrc1_balance_of: e.Func([i], [N], []),
                        icrc1_decimals: e.Func([], [e.Nat8], []),
                        icrc1_fee: e.Func([], [N], []),
                        icrc1_metadata: e.Func([], [e.Vec(e.Tuple(e.Text, r))], []),
                        icrc1_minting_account: e.Func([], [e.Opt(i)], []),
                        icrc1_name: e.Func([], [e.Text], []),
                        icrc1_supported_standards: e.Func([], [e.Vec(T)], []),
                        icrc1_symbol: e.Func([], [e.Text], []),
                        icrc1_total_supply: e.Func([], [N], []),
                        icrc1_transfer: e.Func([O], [R], []),
                        icrc2_allowance: e.Func([U], [F], []),
                        icrc2_approve: e.Func([P], [k], []),
                        icrc2_transfer_from: e.Func([V], [M], [])
                    })
                },
                s = ({
                    IDL: e
                }) => {
                    let t = e.Rec(),
                        r = e.Variant({
                            Int: e.Int,
                            Nat: e.Nat,
                            Blob: e.Vec(e.Nat8),
                            Text: e.Text
                        }),
                        n = e.Vec(e.Nat8),
                        i = e.Record({
                            owner: e.Principal,
                            subaccount: e.Opt(n)
                        }),
                        a = e.Variant({
                            SetTo: i,
                            Unset: e.Null
                        }),
                        s = e.Record({
                            icrc2: e.Bool
                        }),
                        o = e.Record({
                            token_symbol: e.Opt(e.Text),
                            transfer_fee: e.Opt(e.Nat),
                            metadata: e.Opt(e.Vec(e.Tuple(e.Text, r))),
                            maximum_number_of_accounts: e.Opt(e.Nat64),
                            accounts_overflow_trim_quantity: e.Opt(e.Nat64),
                            change_fee_collector: e.Opt(a),
                            max_memo_length: e.Opt(e.Nat16),
                            token_name: e.Opt(e.Text),
                            feature_flags: e.Opt(s)
                        }),
                        u = e.Record({
                            decimals: e.Opt(e.Nat8),
                            token_symbol: e.Text,
                            transfer_fee: e.Nat,
                            metadata: e.Vec(e.Tuple(e.Text, r)),
                            minting_account: i,
                            initial_balances: e.Vec(e.Tuple(i, e.Nat)),
                            maximum_number_of_accounts: e.Opt(e.Nat64),
                            accounts_overflow_trim_quantity: e.Opt(e.Nat64),
                            fee_collector_account: e.Opt(i),
                            archive_options: e.Record({
                                num_blocks_to_archive: e.Nat64,
                                max_transactions_per_response: e.Opt(e.Nat64),
                                trigger_threshold: e.Nat64,
                                max_message_size_bytes: e.Opt(e.Nat64),
                                cycles_for_archive_creation: e.Opt(e.Nat64),
                                node_max_memory_size_bytes: e.Opt(e.Nat64),
                                controller_id: e.Principal
                            }),
                            max_memo_length: e.Opt(e.Nat16),
                            token_name: e.Text,
                            feature_flags: e.Opt(s)
                        }),
                        c = (e.Variant({
                            Upgrade: e.Opt(o),
                            Init: u
                        }), e.Nat),
                        f = e.Record({
                            start: c,
                            length: e.Nat
                        }),
                        l = e.Vec(e.Tuple(e.Text, t));
                    t.fill(e.Variant({
                        Int: e.Int,
                        Map: l,
                        Nat: e.Nat,
                        Nat64: e.Nat64,
                        Blob: e.Vec(e.Nat8),
                        Text: e.Text,
                        Array: e.Vec(t)
                    }));
                    let h = e.Record({
                            blocks: e.Vec(t)
                        }),
                        d = e.Func([f], [h], ["query"]),
                        p = e.Record({
                            certificate: e.Opt(e.Vec(e.Nat8)),
                            first_index: c,
                            blocks: e.Vec(t),
                            chain_length: e.Nat64,
                            archived_blocks: e.Vec(e.Record({
                                callback: d,
                                start: c,
                                length: e.Nat
                            }))
                        }),
                        g = e.Record({
                            certificate: e.Opt(e.Vec(e.Nat8)),
                            hash_tree: e.Vec(e.Nat8)
                        }),
                        y = e.Nat,
                        b = e.Record({
                            start: y,
                            length: e.Nat
                        }),
                        m = e.Record({
                            from: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat,
                            spender: e.Opt(i)
                        }),
                        w = e.Record({
                            to: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat
                        }),
                        _ = e.Record({
                            fee: e.Opt(e.Nat),
                            from: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat,
                            expected_allowance: e.Opt(e.Nat),
                            expires_at: e.Opt(e.Nat64),
                            spender: i
                        }),
                        v = e.Record({
                            to: i,
                            fee: e.Opt(e.Nat),
                            from: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat,
                            spender: e.Opt(i)
                        }),
                        E = e.Record({
                            burn: e.Opt(m),
                            kind: e.Text,
                            mint: e.Opt(w),
                            approve: e.Opt(_),
                            timestamp: e.Nat64,
                            transfer: e.Opt(v)
                        }),
                        x = e.Record({
                            transactions: e.Vec(E)
                        }),
                        B = e.Func([b], [x], ["query"]),
                        I = e.Record({
                            first_index: y,
                            log_length: e.Nat,
                            transactions: e.Vec(E),
                            archived_transactions: e.Vec(e.Record({
                                callback: B,
                                start: y,
                                length: e.Nat
                            }))
                        }),
                        N = e.Nat,
                        T = e.Record({
                            url: e.Text,
                            name: e.Text
                        }),
                        A = e.Nat64,
                        O = e.Record({
                            to: i,
                            fee: e.Opt(N),
                            memo: e.Opt(e.Vec(e.Nat8)),
                            from_subaccount: e.Opt(n),
                            created_at_time: e.Opt(A),
                            amount: N
                        }),
                        S = e.Variant({
                            GenericError: e.Record({
                                message: e.Text,
                                error_code: e.Nat
                            }),
                            TemporarilyUnavailable: e.Null,
                            BadBurn: e.Record({
                                min_burn_amount: N
                            }),
                            Duplicate: e.Record({
                                duplicate_of: c
                            }),
                            BadFee: e.Record({
                                expected_fee: N
                            }),
                            CreatedInFuture: e.Record({
                                ledger_time: e.Nat64
                            }),
                            TooOld: e.Null,
                            InsufficientFunds: e.Record({
                                balance: N
                            })
                        }),
                        R = e.Variant({
                            Ok: c,
                            Err: S
                        }),
                        U = e.Record({
                            account: i,
                            spender: i
                        }),
                        F = e.Record({
                            allowance: e.Nat,
                            expires_at: e.Opt(e.Nat64)
                        }),
                        P = e.Record({
                            fee: e.Opt(e.Nat),
                            memo: e.Opt(e.Vec(e.Nat8)),
                            from_subaccount: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(e.Nat64),
                            amount: e.Nat,
                            expected_allowance: e.Opt(e.Nat),
                            expires_at: e.Opt(e.Nat64),
                            spender: i
                        }),
                        L = e.Variant({
                            GenericError: e.Record({
                                message: e.Text,
                                error_code: e.Nat
                            }),
                            TemporarilyUnavailable: e.Null,
                            Duplicate: e.Record({
                                duplicate_of: e.Nat
                            }),
                            BadFee: e.Record({
                                expected_fee: e.Nat
                            }),
                            AllowanceChanged: e.Record({
                                current_allowance: e.Nat
                            }),
                            CreatedInFuture: e.Record({
                                ledger_time: e.Nat64
                            }),
                            TooOld: e.Null,
                            Expired: e.Record({
                                ledger_time: e.Nat64
                            }),
                            InsufficientFunds: e.Record({
                                balance: e.Nat
                            })
                        }),
                        k = e.Variant({
                            Ok: e.Nat,
                            Err: L
                        }),
                        V = e.Record({
                            to: i,
                            fee: e.Opt(N),
                            spender_subaccount: e.Opt(n),
                            from: i,
                            memo: e.Opt(e.Vec(e.Nat8)),
                            created_at_time: e.Opt(A),
                            amount: N
                        }),
                        C = e.Variant({
                            GenericError: e.Record({
                                message: e.Text,
                                error_code: e.Nat
                            }),
                            TemporarilyUnavailable: e.Null,
                            InsufficientAllowance: e.Record({
                                allowance: N
                            }),
                            BadBurn: e.Record({
                                min_burn_amount: N
                            }),
                            Duplicate: e.Record({
                                duplicate_of: c
                            }),
                            BadFee: e.Record({
                                expected_fee: N
                            }),
                            CreatedInFuture: e.Record({
                                ledger_time: e.Nat64
                            }),
                            TooOld: e.Null,
                            InsufficientFunds: e.Record({
                                balance: N
                            })
                        }),
                        M = e.Variant({
                            Ok: c,
                            Err: C
                        });
                    return e.Service({
                        get_blocks: e.Func([f], [p], ["query"]),
                        get_data_certificate: e.Func([], [g], ["query"]),
                        get_transactions: e.Func([b], [I], ["query"]),
                        icrc1_balance_of: e.Func([i], [N], ["query"]),
                        icrc1_decimals: e.Func([], [e.Nat8], ["query"]),
                        icrc1_fee: e.Func([], [N], ["query"]),
                        icrc1_metadata: e.Func([], [e.Vec(e.Tuple(e.Text, r))], ["query"]),
                        icrc1_minting_account: e.Func([], [e.Opt(i)], ["query"]),
                        icrc1_name: e.Func([], [e.Text], ["query"]),
                        icrc1_supported_standards: e.Func([], [e.Vec(T)], ["query"]),
                        icrc1_symbol: e.Func([], [e.Text], ["query"]),
                        icrc1_total_supply: e.Func([], [N], ["query"]),
                        icrc1_transfer: e.Func([O], [R], []),
                        icrc2_allowance: e.Func([U], [F], ["query"]),
                        icrc2_approve: e.Func([P], [k], []),
                        icrc2_transfer_from: e.Func([V], [M], [])
                    })
                },
                o = ({
                    from_subaccount: e,
                    fee: t,
                    created_at_time: r,
                    memo: n,
                    ...a
                }) => ({ ...a,
                    fee: (0, i.WG)(t),
                    memo: (0, i.WG)(n),
                    from_subaccount: (0, i.WG)(e),
                    created_at_time: (0, i.WG)(r)
                }),
                u = ({
                    spender_subaccount: e,
                    fee: t,
                    created_at_time: r,
                    memo: n,
                    ...a
                }) => ({ ...a,
                    fee: (0, i.WG)(t),
                    memo: (0, i.WG)(n),
                    spender_subaccount: (0, i.WG)(e),
                    created_at_time: (0, i.WG)(r)
                }),
                c = ({
                    fee: e,
                    created_at_time: t,
                    memo: r,
                    from_subaccount: n,
                    expected_allowance: a,
                    expires_at: s,
                    ...o
                }) => ({ ...o,
                    fee: (0, i.WG)(e),
                    memo: (0, i.WG)(r),
                    from_subaccount: (0, i.WG)(n),
                    created_at_time: (0, i.WG)(t),
                    expected_allowance: (0, i.WG)(a),
                    expires_at: (0, i.WG)(s)
                }),
                f = class extends Error {
                    constructor({
                        msg: e,
                        errorType: t
                    }) {
                        super(e), this.errorType = t
                    }
                },
                l = class e extends i.y5 {
                    constructor() {
                        super(...arguments), this.metadata = e => this.caller(e).icrc1_metadata(), this.transactionFee = e => this.caller(e).icrc1_fee(), this.balance = e => this.caller({
                            certified: e.certified
                        }).icrc1_balance_of({
                            owner: e.owner,
                            subaccount: (0, i.WG)(e.subaccount)
                        }), this.transfer = async e => {
                            let t = await this.caller({
                                certified: !0
                            }).icrc1_transfer(o(e));
                            if ("Err" in t) throw new f({
                                errorType: t.Err,
                                msg: "Failed to transfer"
                            });
                            return t.Ok
                        }, this.totalTokensSupply = e => this.caller(e).icrc1_total_supply(), this.transferFrom = async e => {
                            let t = await this.caller({
                                certified: !0
                            }).icrc2_transfer_from(u(e));
                            if ("Err" in t) throw new f({
                                errorType: t.Err,
                                msg: "Failed to transfer from"
                            });
                            return t.Ok
                        }, this.approve = async e => {
                            let t = await this.caller({
                                certified: !0
                            }).icrc2_approve(c(e));
                            if ("Err" in t) throw new f({
                                errorType: t.Err,
                                msg: "Failed to entitle the spender to transfer the amount"
                            });
                            return t.Ok
                        }, this.allowance = async e => {
                            let {
                                certified: t,
                                ...r
                            } = e;
                            return this.caller({
                                certified: t
                            }).icrc2_allowance({ ...r
                            })
                        }
                    }
                    static create(t) {
                        let {
                            service: r,
                            certifiedService: n,
                            canisterId: o
                        } = (0, i.Dx)({
                            options: t,
                            idlFactory: s,
                            certifiedIdlFactory: a
                        });
                        return new e(o, r, n)
                    }
                };
            r(29711);
            var h = ((n = h || {}).SYMBOL = "icrc1:symbol", n.NAME = "icrc1:name", n.DECIMALS = "icrc1:decimals", n.FEE = "icrc1:fee", n.LOGO = "icrc1:logo", n)
        },
        29711: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                JSON_KEY_PRINCIPAL: function() {
                    return o
                },
                Principal: function() {
                    return f
                }
            });
            let n = "abcdefghijklmnopqrstuvwxyz234567",
                i = Object.create(null);
            for (let e = 0; e < n.length; e++) i[n[e]] = e;
            i["0"] = i.o, i["1"] = i.i;
            let a = new Uint32Array([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
            var s = r(65530);
            let o = "__principal__",
                u = e => {
                    var t;
                    return new Uint8Array((null !== (t = e.match(/.{1,2}/g)) && void 0 !== t ? t : []).map(e => parseInt(e, 16)))
                },
                c = e => e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
            class f {
                constructor(e) {
                    this._arr = e, this._isPrincipal = !0
                }
                static anonymous() {
                    return new this(new Uint8Array([4]))
                }
                static managementCanister() {
                    return this.fromHex("aaaaa-aa")
                }
                static selfAuthenticating(e) {
                    let t = s.g.create().update(new Uint8Array(e)).digest();
                    return new this(new Uint8Array([...t, 2]))
                }
                static from(e) {
                    if ("string" == typeof e) return f.fromText(e);
                    if (Object.getPrototypeOf(e) === Uint8Array.prototype) return new f(e);
                    if ("object" == typeof e && null !== e && !0 === e._isPrincipal) return new f(e._arr);
                    throw Error(`Impossible to convert ${JSON.stringify(e)} to Principal.`)
                }
                static fromHex(e) {
                    return new this(u(e))
                }
                static fromText(e) {
                    let t = e;
                    if (e.includes(o)) {
                        let r = JSON.parse(e);
                        o in r && (t = r[o])
                    }
                    let r = function(e) {
                            let t = 0,
                                r = 0,
                                n = new Uint8Array(4 * e.length / 3 | 0),
                                a = 0;
                            for (let s of e) ! function(e) {
                                let s = i[e.toLowerCase()];
                                if (void 0 === s) throw Error(`Invalid character: ${JSON.stringify(e)}`);
                                s <<= 3, r |= s >>> t, (t += 5) >= 8 && (n[a++] = r, t -= 8, r = t > 0 ? s << 5 - t & 255 : 0)
                            }(s);
                            return n.slice(0, a)
                        }(t.toLowerCase().replace(/-/g, "")),
                        n = new this(r = r.slice(4, r.length));
                    if (n.toText() !== t) throw Error(`Principal "${n.toText()}" does not have a valid checksum (original value "${t}" may not be a valid Principal ID).`);
                    return n
                }
                static fromUint8Array(e) {
                    return new this(e)
                }
                isAnonymous() {
                    return 1 === this._arr.byteLength && 4 === this._arr[0]
                }
                toUint8Array() {
                    return this._arr
                }
                toHex() {
                    return c(this._arr).toUpperCase()
                }
                toText() {
                    let e = new ArrayBuffer(4);
                    new DataView(e).setUint32(0, function(e) {
                        let t = new Uint8Array(e),
                            r = -1;
                        for (let e = 0; e < t.length; e++) r = a[(t[e] ^ r) & 255] ^ r >>> 8;
                        return (-1 ^ r) >>> 0
                    }(this._arr));
                    let t = new Uint8Array(e),
                        r = Uint8Array.from(this._arr),
                        i = (function(e) {
                            let t = 0,
                                r = 0,
                                i = "";
                            for (let s = 0; s < e.length;) {
                                var a;
                                s += (a = e[s], (t < 0 ? r |= a >> -t : r = a << t & 248, t > 3) ? (t -= 8, 1) : (t < 4 && (i += n[r >> 3], t += 5), 0))
                            }
                            return i + (t < 0 ? n[r >> 3] : "")
                        })(new Uint8Array([...t, ...r])).match(/.{1,5}/g);
                    if (!i) throw Error();
                    return i.join("-")
                }
                toString() {
                    return this.toText()
                }
                toJSON() {
                    return {
                        [o]: this.toText()
                    }
                }
                compareTo(e) {
                    for (let t = 0; t < Math.min(this._arr.length, e._arr.length); t++) {
                        if (this._arr[t] < e._arr[t]) return "lt";
                        if (this._arr[t] > e._arr[t]) return "gt"
                    }
                    return this._arr.length < e._arr.length ? "lt" : this._arr.length > e._arr.length ? "gt" : "eq"
                }
                ltEq(e) {
                    let t = this.compareTo(e);
                    return "lt" == t || "eq" == t
                }
                gtEq(e) {
                    let t = this.compareTo(e);
                    return "gt" == t || "eq" == t
                }
            }
        },
        69419: function(e, t, r) {
            "use strict";
            let n;
            r.d(t, {
                Dx: function() {
                    return l
                },
                RE: function() {
                    return w
                },
                Uo: function() {
                    return d
                },
                WG: function() {
                    return _
                },
                YM: function() {
                    return h
                },
                fv: function() {
                    return p
                },
                ij: function() {
                    return v
                },
                x_: function() {
                    return f
                },
                y5: function() {
                    return s
                }
            });
            var i = r(20392);
            r(29711);
            var a = ((n = a || {})[n.FractionalMoreThan8Decimals = 0] = "FractionalMoreThan8Decimals", n[n.InvalidFormat = 1] = "InvalidFormat", n[n.FractionalTooManyDecimals = 2] = "FractionalTooManyDecimals", n);
            BigInt(1e8);
            var s = class {
                    constructor(e, t, r) {
                        this.id = e, this.service = t, this.certifiedService = r, this.caller = ({
                            certified: e = !0
                        }) => e ? this.certifiedService : this.service
                    }
                    get canisterId() {
                        return this.id
                    }
                },
                o = e => null == e,
                u = e => !o(e),
                c = () => new i.HttpAgent({
                    host: "https://icp-api.io",
                    identity: new i.AnonymousIdentity
                }),
                f = async ({
                    identity: e,
                    host: t,
                    fetchRootKey: r = !1,
                    verifyQuerySignatures: n = !1,
                    retryTimes: a
                }) => {
                    let s = new i.HttpAgent({
                        identity: e,
                        ...u(t) && {
                            host: t
                        },
                        verifyQuerySignatures: n,
                        ...u(a) && {
                            retryTimes: a
                        }
                    });
                    return r && await s.fetchRootKey(), s
                },
                l = ({
                    options: {
                        canisterId: e,
                        serviceOverride: t,
                        certifiedServiceOverride: r,
                        agent: n,
                        callTransform: a,
                        queryTransform: s
                    },
                    idlFactory: o,
                    certifiedIdlFactory: u
                }) => {
                    let f = n ? ? c();
                    return {
                        service: t ? ? i.Actor.createActor(o, {
                            agent: f,
                            canisterId: e,
                            callTransform: a,
                            queryTransform: s
                        }),
                        certifiedService: r ? ? i.Actor.createActor(u, {
                            agent: f,
                            canisterId: e,
                            callTransform: a,
                            queryTransform: s
                        }),
                        agent: f,
                        canisterId: e
                    }
                },
                h = e => new Uint8Array(e),
                d = e => Array.from(e).map(e => e.charCodeAt(0)),
                p = e => (e instanceof Uint8Array || (e = Uint8Array.from(e)), e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), "")),
                g = "abcdefghijklmnopqrstuvwxyz234567",
                y = Object.create(null);
            for (let e = 0; e < g.length; e++) y[g[e]] = e;
            y[0] = y.o, y[1] = y.i;
            var b = new Uint32Array([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]),
                m = e => {
                    let t = -1;
                    for (let r = 0; r < e.length; r++) t = b[(e[r] ^ t) & 255] ^ t >>> 8;
                    return (-1 ^ t) >>> 0
                },
                w = e => {
                    let t = new ArrayBuffer(4);
                    return new DataView(t).setUint32(0, m(e), !1), new Uint8Array(t)
                },
                _ = e => u(e) ? [e] : [],
                v = e => e ? .[0]
        },
        51267: function(e, t, r) {
            var n;
            ! function(i) {
                "use strict";
                var a, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    o = Math.ceil,
                    u = Math.floor,
                    c = "[BigNumber Error] ",
                    f = c + "Number primitive has more than 15 significant digits: ",
                    l = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13];

                function h(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function d(e) {
                    for (var t, r, n = 1, i = e.length, a = e[0] + ""; n < i;) {
                        for (r = 14 - (t = e[n++] + "").length; r--; t = "0" + t);
                        a += t
                    }
                    for (i = a.length; 48 === a.charCodeAt(--i););
                    return a.slice(0, i + 1 || 1)
                }

                function p(e, t) {
                    var r, n, i = e.c,
                        a = t.c,
                        s = e.s,
                        o = t.s,
                        u = e.e,
                        c = t.e;
                    if (!s || !o) return null;
                    if (r = i && !i[0], n = a && !a[0], r || n) return r ? n ? 0 : -o : s;
                    if (s != o) return s;
                    if (r = s < 0, n = u == c, !i || !a) return n ? 0 : !i ^ r ? 1 : -1;
                    if (!n) return u > c ^ r ? 1 : -1;
                    for (s = 0, o = (u = i.length) < (c = a.length) ? u : c; s < o; s++)
                        if (i[s] != a[s]) return i[s] > a[s] ^ r ? 1 : -1;
                    return u == c ? 0 : u > c ^ r ? 1 : -1
                }

                function g(e, t, r, n) {
                    if (e < t || e > r || e !== u(e)) throw Error(c + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function y(e) {
                    var t = e.c.length - 1;
                    return h(e.e / 14) == t && e.c[t] % 2 != 0
                }

                function b(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function m(e, t, r) {
                    var n, i;
                    if (t < 0) {
                        for (i = r + "."; ++t; i += r);
                        e = i + e
                    } else if (n = e.length, ++t > n) {
                        for (i = r, t -= n; --t; i += r);
                        e += i
                    } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }(a = function e(t) {
                    var r, n, i, a, w, _, v, E, x, B = C.prototype = {
                            constructor: C,
                            toString: null,
                            valueOf: null
                        },
                        I = new C(1),
                        N = 20,
                        T = 4,
                        A = -7,
                        O = 21,
                        S = -1e7,
                        R = 1e7,
                        U = !1,
                        F = 1,
                        P = 0,
                        L = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: "\xa0",
                            suffix: ""
                        },
                        k = "0123456789abcdefghijklmnopqrstuvwxyz",
                        V = !0;

                    function C(e, t) {
                        var r, n, i, a, o, c, l, h, d = this;
                        if (!(d instanceof C)) return new C(e, t);
                        if (null == t) {
                            if (e && !0 === e._isBigNumber) {
                                d.s = e.s, !e.c || e.e > R ? d.c = d.e = null : e.e < S ? d.c = [d.e = 0] : (d.e = e.e, d.c = e.c.slice());
                                return
                            }
                            if ((c = "number" == typeof e) && 0 * e == 0) {
                                if (d.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (a = 0, o = e; o >= 10; o /= 10, a++);
                                    a > R ? d.c = d.e = null : (d.e = a, d.c = [e]);
                                    return
                                }
                                h = String(e)
                            } else {
                                if (!s.test(h = String(e))) return x(d, h, c);
                                d.s = 45 == h.charCodeAt(0) ? (h = h.slice(1), -1) : 1
                            }(a = h.indexOf(".")) > -1 && (h = h.replace(".", "")), (o = h.search(/e/i)) > 0 ? (a < 0 && (a = o), a += +h.slice(o + 1), h = h.substring(0, o)) : a < 0 && (a = h.length)
                        } else {
                            if (g(t, 2, k.length, "Base"), 10 == t && V) return q(d = new C(e), N + d.e + 1, T);
                            if (h = String(e), c = "number" == typeof e) {
                                if (0 * e != 0) return x(d, h, c, t);
                                if (d.s = 1 / e < 0 ? (h = h.slice(1), -1) : 1, C.DEBUG && h.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e)
                            } else d.s = 45 === h.charCodeAt(0) ? (h = h.slice(1), -1) : 1;
                            for (r = k.slice(0, t), a = o = 0, l = h.length; o < l; o++)
                                if (0 > r.indexOf(n = h.charAt(o))) {
                                    if ("." == n) {
                                        if (o > a) {
                                            a = l;
                                            continue
                                        }
                                    } else if (!i && (h == h.toUpperCase() && (h = h.toLowerCase()) || h == h.toLowerCase() && (h = h.toUpperCase()))) {
                                        i = !0, o = -1, a = 0;
                                        continue
                                    }
                                    return x(d, String(e), c, t)
                                }
                            c = !1, (a = (h = E(h, t, 10, d.s)).indexOf(".")) > -1 ? h = h.replace(".", "") : a = h.length
                        }
                        for (o = 0; 48 === h.charCodeAt(o); o++);
                        for (l = h.length; 48 === h.charCodeAt(--l););
                        if (h = h.slice(o, ++l)) {
                            if (l -= o, c && C.DEBUG && l > 15 && (e > 9007199254740991 || e !== u(e))) throw Error(f + d.s * e);
                            if ((a = a - o - 1) > R) d.c = d.e = null;
                            else if (a < S) d.c = [d.e = 0];
                            else {
                                if (d.e = a, d.c = [], o = (a + 1) % 14, a < 0 && (o += 14), o < l) {
                                    for (o && d.c.push(+h.slice(0, o)), l -= 14; o < l;) d.c.push(+h.slice(o, o += 14));
                                    o = 14 - (h = h.slice(o)).length
                                } else o -= l;
                                for (; o--; h += "0");
                                d.c.push(+h)
                            }
                        } else d.c = [d.e = 0]
                    }

                    function M(e, t, r, n) {
                        var i, a, s, o, u;
                        if (null == r ? r = T : g(r, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], s = e.e, null == t) u = d(e.c), u = 1 == n || 2 == n && (s <= A || s >= O) ? b(u, s) : m(u, s, "0");
                        else if (a = (e = q(new C(e), t, r)).e, o = (u = d(e.c)).length, 1 == n || 2 == n && (t <= a || a <= A)) {
                            for (; o < t; u += "0", o++);
                            u = b(u, a)
                        } else if (t -= s, u = m(u, a, "0"), a + 1 > o) {
                            if (--t > 0)
                                for (u += "."; t--; u += "0");
                        } else if ((t += a - o) > 0)
                            for (a + 1 == o && (u += "."); t--; u += "0");
                        return e.s < 0 && i ? "-" + u : u
                    }

                    function j(e, t) {
                        for (var r, n, i = 1, a = new C(e[0]); i < e.length; i++)(n = new C(e[i])).s && (r = p(a, n)) !== t && (0 !== r || a.s !== t) || (a = n);
                        return a
                    }

                    function $(e, t, r) {
                        for (var n = 1, i = t.length; !t[--i]; t.pop());
                        for (i = t[0]; i >= 10; i /= 10, n++);
                        return (r = n + 14 * r - 1) > R ? e.c = e.e = null : r < S ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
                    }

                    function q(e, t, r, n) {
                        var i, a, s, c, f, h, d, p = e.c;
                        if (p) {
                            e: {
                                for (i = 1, c = p[0]; c >= 10; c /= 10, i++);
                                if ((a = t - i) < 0) a += 14,
                                s = t,
                                d = u((f = p[h = 0]) / l[i - s - 1] % 10);
                                else if ((h = o((a + 1) / 14)) >= p.length) {
                                    if (n) {
                                        for (; p.length <= h; p.push(0));
                                        f = d = 0, i = 1, a %= 14, s = a - 14 + 1
                                    } else break e
                                } else {
                                    for (i = 1, f = c = p[h]; c >= 10; c /= 10, i++);
                                    a %= 14, d = (s = a - 14 + i) < 0 ? 0 : u(f / l[i - s - 1] % 10)
                                }
                                if (n = n || t < 0 || null != p[h + 1] || (s < 0 ? f : f % l[i - s - 1]), n = r < 4 ? (d || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : d > 5 || 5 == d && (4 == r || n || 6 == r && (a > 0 ? s > 0 ? f / l[i - s] : 0 : p[h - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0]) return p.length = 0, n ? (t -= e.e + 1, p[0] = l[(14 - t % 14) % 14], e.e = -t || 0) : p[0] = e.e = 0, e;
                                if (0 == a ? (p.length = h, c = 1, h--) : (p.length = h + 1, c = l[14 - a], p[h] = s > 0 ? u(f / l[i - s] % l[s]) * c : 0), n)
                                    for (;;) {
                                        if (0 == h) {
                                            for (a = 1, s = p[0]; s >= 10; s /= 10, a++);
                                            for (s = p[0] += c, c = 1; s >= 10; s /= 10, c++);
                                            a != c && (e.e++, 1e14 == p[0] && (p[0] = 1));
                                            break
                                        }
                                        if (p[h] += c, 1e14 != p[h]) break;
                                        p[h--] = 0, c = 1
                                    }
                                for (a = p.length; 0 === p[--a]; p.pop());
                            }
                            e.e > R ? e.c = e.e = null : e.e < S && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function D(e) {
                        var t, r = e.e;
                        return null === r ? e.toString() : (t = d(e.c), t = r <= A || r >= O ? b(t, r) : m(t, r, "0"), e.s < 0 ? "-" + t : t)
                    }
                    return C.clone = e, C.ROUND_UP = 0, C.ROUND_DOWN = 1, C.ROUND_CEIL = 2, C.ROUND_FLOOR = 3, C.ROUND_HALF_UP = 4, C.ROUND_HALF_DOWN = 5, C.ROUND_HALF_EVEN = 6, C.ROUND_HALF_CEIL = 7, C.ROUND_HALF_FLOOR = 8, C.EUCLID = 9, C.config = C.set = function(e) {
                        var t, r;
                        if (null != e) {
                            if ("object" == typeof e) {
                                if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (g(r = e[t], 0, 1e9, t), N = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (g(r = e[t], 0, 8, t), T = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((r = e[t]) && r.pop ? (g(r[0], -1e9, 0, t), g(r[1], 0, 1e9, t), A = r[0], O = r[1]) : (g(r, -1e9, 1e9, t), A = -(O = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE")) {
                                    if ((r = e[t]) && r.pop) g(r[0], -1e9, -1, t), g(r[1], 1, 1e9, t), S = r[0], R = r[1];
                                    else if (g(r, -1e9, 1e9, t), r) S = -(R = r < 0 ? -r : r);
                                    else throw Error(c + t + " cannot be zero: " + r)
                                }
                                if (e.hasOwnProperty(t = "CRYPTO")) {
                                    if (!!(r = e[t]) === r) {
                                        if (r) {
                                            if ("undefined" != typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) U = r;
                                            else throw U = !r, Error(c + "crypto unavailable")
                                        } else U = r
                                    } else throw Error(c + t + " not true or false: " + r)
                                }
                                if (e.hasOwnProperty(t = "MODULO_MODE") && (g(r = e[t], 0, 9, t), F = r), e.hasOwnProperty(t = "POW_PRECISION") && (g(r = e[t], 0, 1e9, t), P = r), e.hasOwnProperty(t = "FORMAT")) {
                                    if ("object" == typeof(r = e[t])) L = r;
                                    else throw Error(c + t + " not an object: " + r)
                                }
                                if (e.hasOwnProperty(t = "ALPHABET")) {
                                    if ("string" != typeof(r = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(r)) throw Error(c + t + " invalid: " + r);
                                    V = "0123456789" == r.slice(0, 10), k = r
                                }
                            } else throw Error(c + "Object expected: " + e)
                        }
                        return {
                            DECIMAL_PLACES: N,
                            ROUNDING_MODE: T,
                            EXPONENTIAL_AT: [A, O],
                            RANGE: [S, R],
                            CRYPTO: U,
                            MODULO_MODE: F,
                            POW_PRECISION: P,
                            FORMAT: L,
                            ALPHABET: k
                        }
                    }, C.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!C.DEBUG) return !0;
                        var t, r, n = e.c,
                            i = e.e,
                            a = e.s;
                        e: if ("[object Array]" == ({}).toString.call(n)) {
                            if ((1 === a || -1 === a) && i >= -1e9 && i <= 1e9 && i === u(i)) {
                                if (0 === n[0]) {
                                    if (0 === i && 1 === n.length) return !0;
                                    break e
                                }
                                if ((t = (i + 1) % 14) < 1 && (t += 14), String(n[0]).length == t) {
                                    for (t = 0; t < n.length; t++)
                                        if ((r = n[t]) < 0 || r >= 1e14 || r !== u(r)) break e;
                                    if (0 !== r) return !0
                                }
                            }
                        } else
                        if (null === n && null === i && (null === a || 1 === a || -1 === a)) return !0;
                        throw Error(c + "Invalid BigNumber: " + e)
                    }, C.maximum = C.max = function() {
                        return j(arguments, -1)
                    }, C.minimum = C.min = function() {
                        return j(arguments, 1)
                    }, C.random = (r = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return u(9007199254740992 * Math.random())
                    } : function() {
                        return (1073741824 * Math.random() | 0) * 8388608 + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var t, n, i, a, s, f = 0,
                            h = [],
                            d = new C(I);
                        if (null == e ? e = N : g(e, 0, 1e9), a = o(e / 14), U) {
                            if (crypto.getRandomValues) {
                                for (t = crypto.getRandomValues(new Uint32Array(a *= 2)); f < a;)(s = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), t[f] = n[0], t[f + 1] = n[1]) : (h.push(s % 1e14), f += 2);
                                f = a / 2
                            } else if (crypto.randomBytes) {
                                for (t = crypto.randomBytes(a *= 7); f < a;)(s = (31 & t[f]) * 281474976710656 + 1099511627776 * t[f + 1] + 4294967296 * t[f + 2] + 16777216 * t[f + 3] + (t[f + 4] << 16) + (t[f + 5] << 8) + t[f + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, f) : (h.push(s % 1e14), f += 7);
                                f = a / 7
                            } else throw U = !1, Error(c + "crypto unavailable")
                        }
                        if (!U)
                            for (; f < a;)(s = r()) < 9e15 && (h[f++] = s % 1e14);
                        for (a = h[--f], e %= 14, a && e && (s = l[14 - e], h[f] = u(a / s) * s); 0 === h[f]; h.pop(), f--);
                        if (f < 0) h = [i = 0];
                        else {
                            for (i = -1; 0 === h[0]; h.splice(0, 1), i -= 14);
                            for (f = 1, s = h[0]; s >= 10; s /= 10, f++);
                            f < 14 && (i -= 14 - f)
                        }
                        return d.e = i, d.c = h, d
                    }), C.sum = function() {
                        for (var e = 1, t = arguments, r = new C(t[0]); e < t.length;) r = r.plus(t[e++]);
                        return r
                    }, E = function() {
                        var e = "0123456789";

                        function t(e, t, r, n) {
                            for (var i, a, s = [0], o = 0, u = e.length; o < u;) {
                                for (a = s.length; a--; s[a] *= t);
                                for (s[0] += n.indexOf(e.charAt(o++)), i = 0; i < s.length; i++) s[i] > r - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / r | 0, s[i] %= r)
                            }
                            return s.reverse()
                        }
                        return function(r, n, i, a, s) {
                            var o, u, c, f, l, h, p, g, y = r.indexOf("."),
                                b = N,
                                w = T;
                            for (y >= 0 && (f = P, P = 0, r = r.replace(".", ""), h = (g = new C(n)).pow(r.length - y), P = f, g.c = t(m(d(h.c), h.e, "0"), 10, i, e), g.e = g.c.length), c = f = (p = t(r, n, i, s ? (o = k, e) : (o = e, k))).length; 0 == p[--f]; p.pop());
                            if (!p[0]) return o.charAt(0);
                            if (y < 0 ? --c : (h.c = p, h.e = c, h.s = a, p = (h = v(h, g, b, w, i)).c, l = h.r, c = h.e), y = p[u = c + b + 1], f = i / 2, l = l || u < 0 || null != p[u + 1], l = w < 4 ? (null != y || l) && (0 == w || w == (h.s < 0 ? 3 : 2)) : y > f || y == f && (4 == w || l || 6 == w && 1 & p[u - 1] || w == (h.s < 0 ? 8 : 7)), u < 1 || !p[0]) r = l ? m(o.charAt(1), -b, o.charAt(0)) : o.charAt(0);
                            else {
                                if (p.length = u, l)
                                    for (--i; ++p[--u] > i;) p[u] = 0, u || (++c, p = [1].concat(p));
                                for (f = p.length; !p[--f];);
                                for (y = 0, r = ""; y <= f; r += o.charAt(p[y++]));
                                r = m(r, c, o.charAt(0))
                            }
                            return r
                        }
                    }(), v = function() {
                        function e(e, t, r) {
                            var n, i, a, s, o = 0,
                                u = e.length,
                                c = t % 1e7,
                                f = t / 1e7 | 0;
                            for (e = e.slice(); u--;) n = f * (a = e[u] % 1e7) + (s = e[u] / 1e7 | 0) * c, o = ((i = c * a + n % 1e7 * 1e7 + o) / r | 0) + (n / 1e7 | 0) + f * s, e[u] = i % r;
                            return o && (e = [o].concat(e)), e
                        }

                        function t(e, t, r, n) {
                            var i, a;
                            if (r != n) a = r > n ? 1 : -1;
                            else
                                for (i = a = 0; i < r; i++)
                                    if (e[i] != t[i]) {
                                        a = e[i] > t[i] ? 1 : -1;
                                        break
                                    } return a
                        }

                        function r(e, t, r, n) {
                            for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, i, a, s, o) {
                            var c, f, l, d, p, g, y, b, m, w, _, v, E, x, B, I, N, T = n.s == i.s ? 1 : -1,
                                A = n.c,
                                O = i.c;
                            if (!A || !A[0] || !O || !O[0]) return new C(n.s && i.s && (A ? !O || A[0] != O[0] : O) ? A && 0 == A[0] || !O ? 0 * T : T / 0 : NaN);
                            for (m = (b = new C(T)).c = [], T = a + (f = n.e - i.e) + 1, o || (o = 1e14, f = h(n.e / 14) - h(i.e / 14), T = T / 14 | 0), l = 0; O[l] == (A[l] || 0); l++);
                            if (O[l] > (A[l] || 0) && f--, T < 0) m.push(1), d = !0;
                            else {
                                for (x = A.length, I = O.length, l = 0, T += 2, (p = u(o / (O[0] + 1))) > 1 && (O = e(O, p, o), A = e(A, p, o), I = O.length, x = A.length), E = I, _ = (w = A.slice(0, I)).length; _ < I; w[_++] = 0);
                                N = [0].concat(N = O.slice()), B = O[0], O[1] >= o / 2 && B++;
                                do {
                                    if (p = 0, (c = t(O, w, I, _)) < 0) {
                                        if (v = w[0], I != _ && (v = v * o + (w[1] || 0)), (p = u(v / B)) > 1)
                                            for (p >= o && (p = o - 1), y = (g = e(O, p, o)).length, _ = w.length; 1 == t(g, w, y, _);) p--, r(g, I < y ? N : O, y, o), y = g.length, c = 1;
                                        else 0 == p && (c = p = 1), y = (g = O.slice()).length;
                                        if (y < _ && (g = [0].concat(g)), r(w, g, _, o), _ = w.length, -1 == c)
                                            for (; 1 > t(O, w, I, _);) p++, r(w, I < _ ? N : O, _, o), _ = w.length
                                    } else 0 === c && (p++, w = [0]);
                                    m[l++] = p, w[0] ? w[_++] = A[E] || 0 : (w = [A[E]], _ = 1)
                                } while ((E++ < x || null != w[0]) && T--);
                                d = null != w[0], m[0] || m.splice(0, 1)
                            }
                            if (1e14 == o) {
                                for (l = 1, T = m[0]; T >= 10; T /= 10, l++);
                                q(b, a + (b.e = l + 14 * f - 1) + 1, s, d)
                            } else b.e = f, b.r = +d;
                            return b
                        }
                    }(), n = /^(-?)0([xbo])(?=\w[\w.]*$)/i, i = /^([^.]+)\.$/, a = /^\.([^.]+)$/, w = /^-?(Infinity|NaN)$/, _ = /^\s*\+(?=[\w.])|^\s+|\s+$/g, x = function(e, t, r, s) {
                        var o, u = r ? t : t.replace(_, "");
                        if (w.test(u)) e.s = isNaN(u) ? null : u < 0 ? -1 : 1;
                        else {
                            if (!r && (u = u.replace(n, function(e, t, r) {
                                    return o = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, s && s != o ? e : t
                                }), s && (o = s, u = u.replace(i, "$1").replace(a, "0.$1")), t != u)) return new C(u, o);
                            if (C.DEBUG) throw Error(c + "Not a" + (s ? " base " + s : "") + " number: " + t);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, B.absoluteValue = B.abs = function() {
                        var e = new C(this);
                        return e.s < 0 && (e.s = 1), e
                    }, B.comparedTo = function(e, t) {
                        return p(this, new C(e, t))
                    }, B.decimalPlaces = B.dp = function(e, t) {
                        var r, n, i;
                        if (null != e) return g(e, 0, 1e9), null == t ? t = T : g(t, 0, 8), q(new C(this), e + this.e + 1, t);
                        if (!(r = this.c)) return null;
                        if (n = ((i = r.length - 1) - h(this.e / 14)) * 14, i = r[i])
                            for (; i % 10 == 0; i /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, B.dividedBy = B.div = function(e, t) {
                        return v(this, new C(e, t), N, T)
                    }, B.dividedToIntegerBy = B.idiv = function(e, t) {
                        return v(this, new C(e, t), 0, 1)
                    }, B.exponentiatedBy = B.pow = function(e, t) {
                        var r, n, i, a, s, f, l, h, d, p = this;
                        if ((e = new C(e)).c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + D(e));
                        if (null != t && (t = new C(t)), f = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return d = new C(Math.pow(+D(p), f ? e.s * (2 - y(e)) : +D(e))), t ? d.mod(t) : d;
                        if (l = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new C(NaN);
                            (n = !l && p.isInteger() && t.isInteger()) && (p = p.mod(t))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || f && p.c[1] >= 24e7 : p.c[0] < 8e13 || f && p.c[0] <= 9999975e7))) return a = p.s < 0 && y(e) ? -0 : 0, p.e > -1 && (a = 1 / a), new C(l ? 1 / a : a);
                            P && (a = o(P / 14 + 2))
                        }
                        for (f ? (r = new C(.5), l && (e.s = 1), h = y(e)) : h = (i = Math.abs(+D(e))) % 2, d = new C(I);;) {
                            if (h) {
                                if (!(d = d.times(p)).c) break;
                                a ? d.c.length > a && (d.c.length = a) : n && (d = d.mod(t))
                            }
                            if (i) {
                                if (0 === (i = u(i / 2))) break;
                                h = i % 2
                            } else if (q(e = e.times(r), e.e + 1, 1), e.e > 14) h = y(e);
                            else {
                                if (0 == (i = +D(e))) break;
                                h = i % 2
                            }
                            p = p.times(p), a ? p.c && p.c.length > a && (p.c.length = a) : n && (p = p.mod(t))
                        }
                        return n ? d : (l && (d = I.div(d)), t ? d.mod(t) : a ? q(d, P, T, s) : d)
                    }, B.integerValue = function(e) {
                        var t = new C(this);
                        return null == e ? e = T : g(e, 0, 8), q(t, t.e + 1, e)
                    }, B.isEqualTo = B.eq = function(e, t) {
                        return 0 === p(this, new C(e, t))
                    }, B.isFinite = function() {
                        return !!this.c
                    }, B.isGreaterThan = B.gt = function(e, t) {
                        return p(this, new C(e, t)) > 0
                    }, B.isGreaterThanOrEqualTo = B.gte = function(e, t) {
                        return 1 === (t = p(this, new C(e, t))) || 0 === t
                    }, B.isInteger = function() {
                        return !!this.c && h(this.e / 14) > this.c.length - 2
                    }, B.isLessThan = B.lt = function(e, t) {
                        return 0 > p(this, new C(e, t))
                    }, B.isLessThanOrEqualTo = B.lte = function(e, t) {
                        return -1 === (t = p(this, new C(e, t))) || 0 === t
                    }, B.isNaN = function() {
                        return !this.s
                    }, B.isNegative = function() {
                        return this.s < 0
                    }, B.isPositive = function() {
                        return this.s > 0
                    }, B.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, B.minus = function(e, t) {
                        var r, n, i, a, s = this.s;
                        if (t = (e = new C(e, t)).s, !s || !t) return new C(NaN);
                        if (s != t) return e.s = -t, this.plus(e);
                        var o = this.e / 14,
                            u = e.e / 14,
                            c = this.c,
                            f = e.c;
                        if (!o || !u) {
                            if (!c || !f) return c ? (e.s = -t, e) : new C(f ? this : NaN);
                            if (!c[0] || !f[0]) return f[0] ? (e.s = -t, e) : new C(c[0] ? this : 3 == T ? -0 : 0)
                        }
                        if (o = h(o), u = h(u), c = c.slice(), s = o - u) {
                            for ((a = s < 0) ? (s = -s, i = c) : (u = o, i = f), i.reverse(), t = s; t--; i.push(0));
                            i.reverse()
                        } else
                            for (n = (a = (s = c.length) < (t = f.length)) ? s : t, s = t = 0; t < n; t++)
                                if (c[t] != f[t]) {
                                    a = c[t] < f[t];
                                    break
                                } if (a && (i = c, c = f, f = i, e.s = -e.s), (t = (n = f.length) - (r = c.length)) > 0)
                            for (; t--; c[r++] = 0);
                        for (t = 1e14 - 1; n > s;) {
                            if (c[--n] < f[n]) {
                                for (r = n; r && !c[--r]; c[r] = t);
                                --c[r], c[n] += 1e14
                            }
                            c[n] -= f[n]
                        }
                        for (; 0 == c[0]; c.splice(0, 1), --u);
                        return c[0] ? $(e, c, u) : (e.s = 3 == T ? -1 : 1, e.c = [e.e = 0], e)
                    }, B.modulo = B.mod = function(e, t) {
                        var r, n;
                        return (e = new C(e, t), this.c && e.s && (!e.c || e.c[0])) ? e.c && (!this.c || this.c[0]) ? (9 == F ? (n = e.s, e.s = 1, r = v(this, e, 0, 3), e.s = n, r.s *= n) : r = v(this, e, 0, F), (e = this.minus(r.times(e))).c[0] || 1 != F || (e.s = this.s), e) : new C(this) : new C(NaN)
                    }, B.multipliedBy = B.times = function(e, t) {
                        var r, n, i, a, s, o, u, c, f, l, d, p, g, y = this.c,
                            b = (e = new C(e, t)).c;
                        if (!y || !b || !y[0] || !b[0]) return this.s && e.s && (!y || y[0] || b) && (!b || b[0] || y) ? (e.s *= this.s, y && b ? (e.c = [0], e.e = 0) : e.c = e.e = null) : e.c = e.e = e.s = null, e;
                        for (n = h(this.e / 14) + h(e.e / 14), e.s *= this.s, (u = y.length) < (l = b.length) && (g = y, y = b, b = g, i = u, u = l, l = i), i = u + l, g = []; i--; g.push(0));
                        for (i = l; --i >= 0;) {
                            for (r = 0, d = b[i] % 1e7, p = b[i] / 1e7 | 0, a = i + (s = u); a > i;) o = p * (c = y[--s] % 1e7) + (f = y[s] / 1e7 | 0) * d, r = ((c = d * c + o % 1e7 * 1e7 + g[a] + r) / 1e14 | 0) + (o / 1e7 | 0) + p * f, g[a--] = c % 1e14;
                            g[a] = r
                        }
                        return r ? ++n : g.splice(0, 1), $(e, g, n)
                    }, B.negated = function() {
                        var e = new C(this);
                        return e.s = -e.s || null, e
                    }, B.plus = function(e, t) {
                        var r, n = this.s;
                        if (t = (e = new C(e, t)).s, !n || !t) return new C(NaN);
                        if (n != t) return e.s = -t, this.minus(e);
                        var i = this.e / 14,
                            a = e.e / 14,
                            s = this.c,
                            o = e.c;
                        if (!i || !a) {
                            if (!s || !o) return new C(n / 0);
                            if (!s[0] || !o[0]) return o[0] ? e : new C(s[0] ? this : 0 * n)
                        }
                        if (i = h(i), a = h(a), s = s.slice(), n = i - a) {
                            for (n > 0 ? (a = i, r = o) : (n = -n, r = s), r.reverse(); n--; r.push(0));
                            r.reverse()
                        }
                        for ((n = s.length) - (t = o.length) < 0 && (r = o, o = s, s = r, t = n), n = 0; t;) n = (s[--t] = s[t] + o[t] + n) / 1e14 | 0, s[t] = 1e14 === s[t] ? 0 : s[t] % 1e14;
                        return n && (s = [n].concat(s), ++a), $(e, s, a)
                    }, B.precision = B.sd = function(e, t) {
                        var r, n, i;
                        if (null != e && !!e !== e) return g(e, 1, 1e9), null == t ? t = T : g(t, 0, 8), q(new C(this), e, t);
                        if (!(r = this.c)) return null;
                        if (n = 14 * (i = r.length - 1) + 1, i = r[i]) {
                            for (; i % 10 == 0; i /= 10, n--);
                            for (i = r[0]; i >= 10; i /= 10, n++);
                        }
                        return e && this.e + 1 > n && (n = this.e + 1), n
                    }, B.shiftedBy = function(e) {
                        return g(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, B.squareRoot = B.sqrt = function() {
                        var e, t, r, n, i, a = this.c,
                            s = this.s,
                            o = this.e,
                            u = N + 4,
                            c = new C("0.5");
                        if (1 !== s || !a || !a[0]) return new C(!s || s < 0 && (!a || a[0]) ? NaN : a ? this : 1 / 0);
                        if (0 == (s = Math.sqrt(+D(this))) || s == 1 / 0 ? (((t = d(a)).length + o) % 2 == 0 && (t += "0"), s = Math.sqrt(+t), o = h((o + 1) / 2) - (o < 0 || o % 2), r = new C(t = s == 1 / 0 ? "5e" + o : (t = s.toExponential()).slice(0, t.indexOf("e") + 1) + o)) : r = new C(s + ""), r.c[0]) {
                            for ((s = (o = r.e) + u) < 3 && (s = 0);;)
                                if (i = r, r = c.times(i.plus(v(this, i, u, 1))), d(i.c).slice(0, s) === (t = d(r.c)).slice(0, s)) {
                                    if (r.e < o && --s, "9999" != (t = t.slice(s - 3, s + 1)) && (n || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || (q(r, r.e + N + 2, 1), e = !r.times(r).eq(this));
                                        break
                                    }
                                    if (!n && (q(i, i.e + N + 2, 0), i.times(i).eq(this))) {
                                        r = i;
                                        break
                                    }
                                    u += 4, s += 4, n = 1
                                }
                        }
                        return q(r, r.e + N + 1, T, e)
                    }, B.toExponential = function(e, t) {
                        return null != e && (g(e, 0, 1e9), e++), M(this, e, t, 1)
                    }, B.toFixed = function(e, t) {
                        return null != e && (g(e, 0, 1e9), e = e + this.e + 1), M(this, e, t)
                    }, B.toFormat = function(e, t, r) {
                        var n;
                        if (null == r) null != e && t && "object" == typeof t ? (r = t, t = null) : e && "object" == typeof e ? (r = e, e = t = null) : r = L;
                        else if ("object" != typeof r) throw Error(c + "Argument not an object: " + r);
                        if (n = this.toFixed(e, t), this.c) {
                            var i, a = n.split("."),
                                s = +r.groupSize,
                                o = +r.secondaryGroupSize,
                                u = r.groupSeparator || "",
                                f = a[0],
                                l = a[1],
                                h = this.s < 0,
                                d = h ? f.slice(1) : f,
                                p = d.length;
                            if (o && (i = s, s = o, o = i, p -= i), s > 0 && p > 0) {
                                for (i = p % s || s, f = d.substr(0, i); i < p; i += s) f += u + d.substr(i, s);
                                o > 0 && (f += u + d.slice(i)), h && (f = "-" + f)
                            }
                            n = l ? f + (r.decimalSeparator || "") + ((o = +r.fractionGroupSize) ? l.replace(RegExp("\\d{" + o + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : l) : f
                        }
                        return (r.prefix || "") + n + (r.suffix || "")
                    }, B.toFraction = function(e) {
                        var t, r, n, i, a, s, o, u, f, h, p, g, y = this.c;
                        if (null != e && (!(o = new C(e)).isInteger() && (o.c || 1 !== o.s) || o.lt(I))) throw Error(c + "Argument " + (o.isInteger() ? "out of range: " : "not an integer: ") + D(o));
                        if (!y) return new C(this);
                        for (t = new C(I), f = r = new C(I), n = u = new C(I), g = d(y), a = t.e = g.length - this.e - 1, t.c[0] = l[(s = a % 14) < 0 ? 14 + s : s], e = !e || o.comparedTo(t) > 0 ? a > 0 ? t : f : o, s = R, R = 1 / 0, o = new C(g), u.c[0] = 0; h = v(o, t, 0, 1), 1 != (i = r.plus(h.times(n))).comparedTo(e);) r = n, n = i, f = u.plus(h.times(i = f)), u = i, t = o.minus(h.times(i = t)), o = i;
                        return i = v(e.minus(r), n, 0, 1), u = u.plus(i.times(f)), r = r.plus(i.times(n)), u.s = f.s = this.s, a *= 2, p = 1 > v(f, n, a, T).minus(this).abs().comparedTo(v(u, r, a, T).minus(this).abs()) ? [f, n] : [u, r], R = s, p
                    }, B.toNumber = function() {
                        return +D(this)
                    }, B.toPrecision = function(e, t) {
                        return null != e && g(e, 1, 1e9), M(this, e, t, 2)
                    }, B.toString = function(e) {
                        var t, r = this,
                            n = r.s,
                            i = r.e;
                        return null === i ? n ? (t = "Infinity", n < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = i <= A || i >= O ? b(d(r.c), i) : m(d(r.c), i, "0") : 10 === e && V ? t = m(d((r = q(new C(r), N + i + 1, T)).c), r.e, "0") : (g(e, 2, k.length, "Base"), t = E(m(d(r.c), i, "0"), 10, e, n, !0)), n < 0 && r.c[0] && (t = "-" + t)), t
                    }, B.valueOf = B.toJSON = function() {
                        return D(this)
                    }, B._isBigNumber = !0, null != t && C.set(t), C
                }()).default = a.BigNumber = a, void 0 !== (n = (function() {
                    return a
                }).call(t, r, t, e)) && (e.exports = n)
            }(0)
        },
        94940: function(e, t, r) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            var n = r(48738),
                i = r(6868),
                a = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function s(e) {
                if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, o.prototype), t
            }

            function o(e, t, r) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                    return f(e)
                }
                return u(e, t, r)
            }

            function u(e, t, r) {
                if ("string" == typeof e) return function(e, t) {
                    if (("string" != typeof t || "" === t) && (t = "utf8"), !o.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                    var r = 0 | p(e, t),
                        n = s(r),
                        i = n.write(e, t);
                    return i !== r && (n = n.slice(0, i)), n
                }(e, t);
                if (ArrayBuffer.isView(e)) return function(e) {
                    if (O(e, Uint8Array)) {
                        var t = new Uint8Array(e);
                        return h(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return l(e)
                }(e);
                if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (O(e, ArrayBuffer) || e && O(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (O(e, SharedArrayBuffer) || e && O(e.buffer, SharedArrayBuffer))) return h(e, t, r);
                if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                var n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return o.from(n, t, r);
                var i = function(e) {
                    if (o.isBuffer(e)) {
                        var t, r = 0 | d(e.length),
                            n = s(r);
                        return 0 === n.length || e.copy(n, 0, 0, r), n
                    }
                    return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? s(0) : l(e) : "Buffer" === e.type && Array.isArray(e.data) ? l(e.data) : void 0
                }(e);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]("string"), t, r);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function c(e) {
                if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function f(e) {
                return c(e), s(e < 0 ? 0 : 0 | d(e))
            }

            function l(e) {
                for (var t = e.length < 0 ? 0 : 0 | d(e.length), r = s(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                return r
            }

            function h(e, t, r) {
                var n;
                if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), o.prototype), n
            }

            function d(e) {
                if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | e
            }

            function p(e, t) {
                if (o.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || O(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                var r = e.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return N(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return T(e).length;
                    default:
                        if (i) return n ? -1 : N(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function g(e, t, r) {
                var i, a, s = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return function(e, t, r) {
                            var n = e.length;
                            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                            for (var i = "", a = t; a < r; ++a) i += S[e[a]];
                            return i
                        }(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return w(this, t, r);
                    case "ascii":
                        return function(e, t, r) {
                            var n = "";
                            r = Math.min(e.length, r);
                            for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                            return n
                        }(this, t, r);
                    case "latin1":
                    case "binary":
                        return function(e, t, r) {
                            var n = "";
                            r = Math.min(e.length, r);
                            for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                            return n
                        }(this, t, r);
                    case "base64":
                        return i = t, a = r, 0 === i && a === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(i, a));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(e, t, r) {
                            for (var n = e.slice(t, r), i = "", a = 0; a < n.length - 1; a += 2) i += String.fromCharCode(n[a] + 256 * n[a + 1]);
                            return i
                        }(this, t, r);
                    default:
                        if (s) throw TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), s = !0
                }
            }

            function y(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function b(e, t, r, n, i) {
                var a;
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (a = r = +r) != a && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, n, i);
                if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, n, i);
                throw TypeError("val must be string, number or Buffer")
            }

            function m(e, t, r, n, i) {
                var a, s = 1,
                    o = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, o /= 2, u /= 2, r /= 2
                }

                function c(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (i) {
                    var f = -1;
                    for (a = r; a < o; a++)
                        if (c(e, a) === c(t, -1 === f ? 0 : a - f)) {
                            if (-1 === f && (f = a), a - f + 1 === u) return f * s
                        } else -1 !== f && (a -= a - f), f = -1
                } else
                    for (r + u > o && (r = o - u), a = r; a >= 0; a--) {
                        for (var l = !0, h = 0; h < u; h++)
                            if (c(e, a + h) !== c(t, h)) {
                                l = !1;
                                break
                            }
                        if (l) return a
                    }
                return -1
            }

            function w(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r;) {
                    var a, s, o, u, c = e[i],
                        f = null,
                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + l <= r) switch (l) {
                        case 1:
                            c < 128 && (f = c);
                            break;
                        case 2:
                            (192 & (a = e[i + 1])) == 128 && (u = (31 & c) << 6 | 63 & a) > 127 && (f = u);
                            break;
                        case 3:
                            a = e[i + 1], s = e[i + 2], (192 & a) == 128 && (192 & s) == 128 && (u = (15 & c) << 12 | (63 & a) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (f = u);
                            break;
                        case 4:
                            a = e[i + 1], s = e[i + 2], o = e[i + 3], (192 & a) == 128 && (192 & s) == 128 && (192 & o) == 128 && (u = (15 & c) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & o) > 65535 && u < 1114112 && (f = u)
                    }
                    null === f ? (f = 65533, l = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += l
                }
                return function(e) {
                    var t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                    return r
                }(n)
            }

            function _(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r) throw RangeError("Trying to access beyond buffer length")
            }

            function v(e, t, r, n, i, a) {
                if (!o.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < a) throw RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw RangeError("Index out of range")
            }

            function E(e, t, r, n, i, a) {
                if (r + n > e.length || r < 0) throw RangeError("Index out of range")
            }

            function x(e, t, r, n, a) {
                return t = +t, r >>>= 0, a || E(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(e, t, r, n, 23, 4), r + 4
            }

            function B(e, t, r, n, a) {
                return t = +t, r >>>= 0, a || E(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(e, t, r, n, 52, 8), r + 8
            }
            t.Buffer = o, t.SlowBuffer = function(e) {
                return +e != e && (e = 0), o.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 2147483647, o.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var e = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), o.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(o.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (o.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(o.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (o.isBuffer(this)) return this.byteOffset
                }
            }), o.poolSize = 8192, o.from = function(e, t, r) {
                return u(e, t, r)
            }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array), o.alloc = function(e, t, r) {
                return (c(e), e <= 0) ? s(e) : void 0 !== t ? "string" == typeof r ? s(e).fill(t, r) : s(e).fill(t) : s(e)
            }, o.allocUnsafe = function(e) {
                return f(e)
            }, o.allocUnsafeSlow = function(e) {
                return f(e)
            }, o.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== o.prototype
            }, o.compare = function(e, t) {
                if (O(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), O(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(e) || !o.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, o.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, o.concat = function(e, t) {
                if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return o.alloc(0);
                if (void 0 === t)
                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                var r, n = o.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    var a = e[r];
                    if (O(a, Uint8Array)) i + a.length > n.length ? o.from(a).copy(n, i) : Uint8Array.prototype.set.call(n, a, i);
                    else if (o.isBuffer(a)) a.copy(n, i);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    i += a.length
                }
                return n
            }, o.byteLength = p, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) y(this, t, t + 1);
                return this
            }, o.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                return this
            }, o.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                return this
            }, o.prototype.toString = function() {
                var e = this.length;
                return 0 === e ? "" : 0 == arguments.length ? w(this, 0, e) : g.apply(this, arguments)
            }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(e) {
                if (!o.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                return this === e || 0 === o.compare(this, e)
            }, o.prototype.inspect = function() {
                var e = "",
                    r = t.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
            }, a && (o.prototype[a] = o.prototype.inspect), o.prototype.compare = function(e, t, r, n, i) {
                if (O(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
                for (var a = i - n, s = r - t, u = Math.min(a, s), c = this.slice(n, i), f = e.slice(t, r), l = 0; l < u; ++l)
                    if (c[l] !== f[l]) {
                        a = c[l], s = f[l];
                        break
                    }
                return a < s ? -1 : s < a ? 1 : 0
            }, o.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, o.prototype.indexOf = function(e, t, r) {
                return b(this, e, t, r, !0)
            }, o.prototype.lastIndexOf = function(e, t, r) {
                return b(this, e, t, r, !1)
            }, o.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                var i, a, s, o, u, c, f, l, h = this.length - t;
                if ((void 0 === r || r > h) && (r = h), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var d = !1;;) switch (n) {
                    case "hex":
                        return function(e, t, r, n) {
                            r = Number(r) || 0;
                            var i = e.length - r;
                            n ? (n = Number(n)) > i && (n = i) : n = i;
                            var a = t.length;
                            n > a / 2 && (n = a / 2);
                            for (var s = 0; s < n; ++s) {
                                var o = parseInt(t.substr(2 * s, 2), 16);
                                if (o != o) break;
                                e[r + s] = o
                            }
                            return s
                        }(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return i = t, a = r, A(N(e, this.length - i), this, i, a);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return s = t, o = r, A(function(e) {
                            for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                            return t
                        }(e), this, s, o);
                    case "base64":
                        return u = t, c = r, A(T(e), this, u, c);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return f = t, l = r, A(function(e, t) {
                            for (var r, n, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8, i.push(r % 256), i.push(n);
                            return i
                        }(e, this.length - f), this, f, l);
                    default:
                        if (d) throw TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), d = !0
                }
            }, o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, o.prototype.slice = function(e, t) {
                var r = this.length;
                e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                var n = this.subarray(e, t);
                return Object.setPrototypeOf(n, o.prototype), n
            }, o.prototype.readUintLE = o.prototype.readUIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || _(e, t, this.length);
                for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) n += this[e + a] * i;
                return n
            }, o.prototype.readUintBE = o.prototype.readUIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || _(e, t, this.length);
                for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                return n
            }, o.prototype.readUint8 = o.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || _(e, 1, this.length), this[e]
            }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || _(e, 2, this.length), this[e] | this[e + 1] << 8
            }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || _(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || _(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || _(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, o.prototype.readIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || _(e, t, this.length);
                for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) n += this[e + a] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, o.prototype.readIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || _(e, t, this.length);
                for (var n = t, i = 1, a = this[e + --n]; n > 0 && (i *= 256);) a += this[e + --n] * i;
                return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a
            }, o.prototype.readInt8 = function(e, t) {
                return (e >>>= 0, t || _(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
            }, o.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || _(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, o.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || _(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, o.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || _(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, o.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || _(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, o.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || _(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, o.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || _(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, o.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || _(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, o.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || _(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, o.prototype.writeUintLE = o.prototype.writeUIntLE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, r >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    v(this, e, t, r, i, 0)
                }
                var a = 1,
                    s = 0;
                for (this[t] = 255 & e; ++s < r && (a *= 256);) this[t + s] = e / a & 255;
                return t + r
            }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, r >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    v(this, e, t, r, i, 0)
                }
                var a = r - 1,
                    s = 1;
                for (this[t + a] = 255 & e; --a >= 0 && (s *= 256);) this[t + a] = e / s & 255;
                return t + r
            }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, o.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    v(this, e, t, r, i - 1, -i)
                }
                var a = 0,
                    s = 1,
                    o = 0;
                for (this[t] = 255 & e; ++a < r && (s *= 256);) e < 0 && 0 === o && 0 !== this[t + a - 1] && (o = 1), this[t + a] = (e / s >> 0) - o & 255;
                return t + r
            }, o.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    v(this, e, t, r, i - 1, -i)
                }
                var a = r - 1,
                    s = 1,
                    o = 0;
                for (this[t + a] = 255 & e; --a >= 0 && (s *= 256);) e < 0 && 0 === o && 0 !== this[t + a + 1] && (o = 1), this[t + a] = (e / s >> 0) - o & 255;
                return t + r
            }, o.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, o.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, o.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, o.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, o.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || v(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, o.prototype.writeFloatLE = function(e, t, r) {
                return x(this, e, t, !0, r)
            }, o.prototype.writeFloatBE = function(e, t, r) {
                return x(this, e, t, !1, r)
            }, o.prototype.writeDoubleLE = function(e, t, r) {
                return B(this, e, t, !0, r)
            }, o.prototype.writeDoubleBE = function(e, t, r) {
                return B(this, e, t, !1, r)
            }, o.prototype.copy = function(e, t, r, n) {
                if (!o.isBuffer(e)) throw TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                if (n < 0) throw RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i = n - r;
                return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i
            }, o.prototype.fill = function(e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !o.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                        var i, a = e.charCodeAt(0);
                        ("utf8" === n && a < 128 || "latin1" === n) && (e = a)
                    }
                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                if (r <= t) return this;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (i = t; i < r; ++i) this[i] = e;
                else {
                    var s = o.isBuffer(e) ? e : o.from(e, n),
                        u = s.length;
                    if (0 === u) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (i = 0; i < r - t; ++i) this[i + t] = s[i % u]
                }
                return this
            };
            var I = /[^+/0-9A-Za-z-_]/g;

            function N(e, t) {
                t = t || 1 / 0;
                for (var r, n = e.length, i = null, a = [], s = 0; s < n; ++s) {
                    if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319 || s + 1 === n) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && a.push(239, 191, 189), i = r;
                            continue
                        }
                        r = (i - 55296 << 10 | r - 56320) + 65536
                    } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        a.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        a.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else if (r < 1114112) {
                        if ((t -= 4) < 0) break;
                        a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    } else throw Error("Invalid code point")
                }
                return a
            }

            function T(e) {
                return n.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(I, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function A(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i) t[i + r] = e[i];
                return i
            }

            function O(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }
            var S = function() {
                for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
                    for (var n = 16 * r, i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
                return t
            }()
        },
        89883: function(e, t, r) {
            "use strict";
            let n = r(51267).BigNumber;
            t.MT = {
                POS_INT: 0,
                NEG_INT: 1,
                BYTE_STRING: 2,
                UTF8_STRING: 3,
                ARRAY: 4,
                MAP: 5,
                TAG: 6,
                SIMPLE_FLOAT: 7
            }, t.TAG = {
                DATE_STRING: 0,
                DATE_EPOCH: 1,
                POS_BIGINT: 2,
                NEG_BIGINT: 3,
                DECIMAL_FRAC: 4,
                BIGFLOAT: 5,
                BASE64URL_EXPECTED: 21,
                BASE64_EXPECTED: 22,
                BASE16_EXPECTED: 23,
                CBOR: 24,
                URI: 32,
                BASE64URL: 33,
                BASE64: 34,
                REGEXP: 35,
                MIME: 36
            }, t.NUMBYTES = {
                ZERO: 0,
                ONE: 24,
                TWO: 25,
                FOUR: 26,
                EIGHT: 27,
                INDEFINITE: 31
            }, t.SIMPLE = {
                FALSE: 20,
                TRUE: 21,
                NULL: 22,
                UNDEFINED: 23
            }, t.SYMS = {
                NULL: Symbol("null"),
                UNDEFINED: Symbol("undef"),
                PARENT: Symbol("parent"),
                BREAK: Symbol("break"),
                STREAM: Symbol("stream")
            }, t.SHIFT32 = 4294967296, t.SHIFT16 = 65536, t.MAX_SAFE_HIGH = 2097151, t.NEG_ONE = new n(-1), t.TEN = new n(10), t.TWO = new n(2), t.PARENT = {
                ARRAY: 0,
                OBJECT: 1,
                MAP: 2,
                TAG: 3,
                BYTE_STRING: 4,
                UTF8_STRING: 5
            }
        },
        89639: function(e) {
            e.exports = function(e, t, r) {
                "use asm";
                var n = new e.Uint8Array(r);
                var i = t.pushInt;
                var a = t.pushInt32;
                var s = t.pushInt32Neg;
                var o = t.pushInt64;
                var u = t.pushInt64Neg;
                var c = t.pushFloat;
                var f = t.pushFloatSingle;
                var l = t.pushFloatDouble;
                var h = t.pushTrue;
                var d = t.pushFalse;
                var p = t.pushUndefined;
                var g = t.pushNull;
                var y = t.pushInfinity;
                var b = t.pushInfinityNeg;
                var m = t.pushNaN;
                var w = t.pushNaNNeg;
                var _ = t.pushArrayStart;
                var v = t.pushArrayStartFixed;
                var E = t.pushArrayStartFixed32;
                var x = t.pushArrayStartFixed64;
                var B = t.pushObjectStart;
                var I = t.pushObjectStartFixed;
                var N = t.pushObjectStartFixed32;
                var T = t.pushObjectStartFixed64;
                var A = t.pushByteString;
                var O = t.pushByteStringStart;
                var S = t.pushUtf8String;
                var R = t.pushUtf8StringStart;
                var U = t.pushSimpleUnassigned;
                var F = t.pushTagStart;
                var P = t.pushTagStart4;
                var L = t.pushTagStart8;
                var k = t.pushTagUnassigned;
                var V = t.pushBreak;
                var C = e.Math.pow;
                var M = 0;
                var j = 0;
                var $ = 0;

                function q(e) {
                    e = e | 0;
                    M = 0;
                    j = e;
                    while ((M | 0) < (j | 0)) {
                        $ = eY[n[M] & 255](n[M] | 0) | 0;
                        if (($ | 0) > 0) break
                    }
                    return $ | 0
                }

                function D(e) {
                    e = e | 0;
                    if (((M | 0) + (e | 0) | 0) < (j | 0)) return 0;
                    return 1
                }

                function G(e) {
                    e = e | 0;
                    return n[e | 0] << 8 | n[e + 1 | 0] | 0
                }

                function z(e) {
                    e = e | 0;
                    return n[e | 0] << 24 | n[e + 1 | 0] << 16 | n[e + 2 | 0] << 8 | n[e + 3 | 0] | 0
                }

                function H(e) {
                    e = e | 0;
                    i(e | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function W(e) {
                    e = e | 0;
                    if (D(1) | 0) return 1;
                    i(n[M + 1 | 0] | 0);
                    M = M + 2 | 0;
                    return 0
                }

                function Z(e) {
                    e = e | 0;
                    if (D(2) | 0) return 1;
                    i(G(M + 1 | 0) | 0);
                    M = M + 3 | 0;
                    return 0
                }

                function K(e) {
                    e = e | 0;
                    if (D(4) | 0) return 1;
                    a(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0);
                    M = M + 5 | 0;
                    return 0
                }

                function Y(e) {
                    e = e | 0;
                    if (D(8) | 0) return 1;
                    o(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0, G(M + 5 | 0) | 0, G(M + 7 | 0) | 0);
                    M = M + 9 | 0;
                    return 0
                }

                function Q(e) {
                    e = e | 0;
                    i(-1 - (e - 32 | 0) | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function J(e) {
                    e = e | 0;
                    if (D(1) | 0) return 1;
                    i(-1 - (n[M + 1 | 0] | 0) | 0);
                    M = M + 2 | 0;
                    return 0
                }

                function X(e) {
                    e = e | 0;
                    var t = 0;
                    if (D(2) | 0) return 1;
                    t = G(M + 1 | 0) | 0;
                    i(-1 - (t | 0) | 0);
                    M = M + 3 | 0;
                    return 0
                }

                function ee(e) {
                    e = e | 0;
                    if (D(4) | 0) return 1;
                    s(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0);
                    M = M + 5 | 0;
                    return 0
                }

                function et(e) {
                    e = e | 0;
                    if (D(8) | 0) return 1;
                    u(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0, G(M + 5 | 0) | 0, G(M + 7 | 0) | 0);
                    M = M + 9 | 0;
                    return 0
                }

                function er(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var n = 0;
                    n = e - 64 | 0;
                    if (D(n | 0) | 0) return 1;
                    t = M + 1 | 0;
                    r = (M + 1 | 0) + (n | 0) | 0;
                    A(t | 0, r | 0);
                    M = r | 0;
                    return 0
                }

                function en(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var i = 0;
                    if (D(1) | 0) return 1;
                    i = n[M + 1 | 0] | 0;
                    t = M + 2 | 0;
                    r = (M + 2 | 0) + (i | 0) | 0;
                    if (D(i + 1 | 0) | 0) return 1;
                    A(t | 0, r | 0);
                    M = r | 0;
                    return 0
                }

                function ei(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var n = 0;
                    if (D(2) | 0) return 1;
                    n = G(M + 1 | 0) | 0;
                    t = M + 3 | 0;
                    r = (M + 3 | 0) + (n | 0) | 0;
                    if (D(n + 2 | 0) | 0) return 1;
                    A(t | 0, r | 0);
                    M = r | 0;
                    return 0
                }

                function ea(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var n = 0;
                    if (D(4) | 0) return 1;
                    n = z(M + 1 | 0) | 0;
                    t = M + 5 | 0;
                    r = (M + 5 | 0) + (n | 0) | 0;
                    if (D(n + 4 | 0) | 0) return 1;
                    A(t | 0, r | 0);
                    M = r | 0;
                    return 0
                }

                function es(e) {
                    e = e | 0;
                    return 1
                }

                function eo(e) {
                    e = e | 0;
                    O();
                    M = M + 1 | 0;
                    return 0
                }

                function eu(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var n = 0;
                    n = e - 96 | 0;
                    if (D(n | 0) | 0) return 1;
                    t = M + 1 | 0;
                    r = (M + 1 | 0) + (n | 0) | 0;
                    S(t | 0, r | 0);
                    M = r | 0;
                    return 0
                }

                function ec(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var i = 0;
                    if (D(1) | 0) return 1;
                    i = n[M + 1 | 0] | 0;
                    t = M + 2 | 0;
                    r = (M + 2 | 0) + (i | 0) | 0;
                    if (D(i + 1 | 0) | 0) return 1;
                    S(t | 0, r | 0);
                    M = r | 0;
                    return 0
                }

                function ef(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var n = 0;
                    if (D(2) | 0) return 1;
                    n = G(M + 1 | 0) | 0;
                    t = M + 3 | 0;
                    r = (M + 3 | 0) + (n | 0) | 0;
                    if (D(n + 2 | 0) | 0) return 1;
                    S(t | 0, r | 0);
                    M = r | 0;
                    return 0
                }

                function el(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var n = 0;
                    if (D(4) | 0) return 1;
                    n = z(M + 1 | 0) | 0;
                    t = M + 5 | 0;
                    r = (M + 5 | 0) + (n | 0) | 0;
                    if (D(n + 4 | 0) | 0) return 1;
                    S(t | 0, r | 0);
                    M = r | 0;
                    return 0
                }

                function eh(e) {
                    e = e | 0;
                    return 1
                }

                function ed(e) {
                    e = e | 0;
                    R();
                    M = M + 1 | 0;
                    return 0
                }

                function ep(e) {
                    e = e | 0;
                    v(e - 128 | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eg(e) {
                    e = e | 0;
                    if (D(1) | 0) return 1;
                    v(n[M + 1 | 0] | 0);
                    M = M + 2 | 0;
                    return 0
                }

                function ey(e) {
                    e = e | 0;
                    if (D(2) | 0) return 1;
                    v(G(M + 1 | 0) | 0);
                    M = M + 3 | 0;
                    return 0
                }

                function eb(e) {
                    e = e | 0;
                    if (D(4) | 0) return 1;
                    E(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0);
                    M = M + 5 | 0;
                    return 0
                }

                function em(e) {
                    e = e | 0;
                    if (D(8) | 0) return 1;
                    x(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0, G(M + 5 | 0) | 0, G(M + 7 | 0) | 0);
                    M = M + 9 | 0;
                    return 0
                }

                function ew(e) {
                    e = e | 0;
                    _();
                    M = M + 1 | 0;
                    return 0
                }

                function e_(e) {
                    e = e | 0;
                    var t = 0;
                    t = e - 160 | 0;
                    if (D(t | 0) | 0) return 1;
                    I(t | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function ev(e) {
                    e = e | 0;
                    if (D(1) | 0) return 1;
                    I(n[M + 1 | 0] | 0);
                    M = M + 2 | 0;
                    return 0
                }

                function eE(e) {
                    e = e | 0;
                    if (D(2) | 0) return 1;
                    I(G(M + 1 | 0) | 0);
                    M = M + 3 | 0;
                    return 0
                }

                function ex(e) {
                    e = e | 0;
                    if (D(4) | 0) return 1;
                    N(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0);
                    M = M + 5 | 0;
                    return 0
                }

                function eB(e) {
                    e = e | 0;
                    if (D(8) | 0) return 1;
                    T(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0, G(M + 5 | 0) | 0, G(M + 7 | 0) | 0);
                    M = M + 9 | 0;
                    return 0
                }

                function eI(e) {
                    e = e | 0;
                    B();
                    M = M + 1 | 0;
                    return 0
                }

                function eN(e) {
                    e = e | 0;
                    F(e - 192 | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eT(e) {
                    e = e | 0;
                    F(e | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eA(e) {
                    e = e | 0;
                    F(e | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eO(e) {
                    e = e | 0;
                    F(e | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eS(e) {
                    e = e | 0;
                    F(e | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eR(e) {
                    e = e | 0;
                    F(e - 192 | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eU(e) {
                    e = e | 0;
                    F(e | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eF(e) {
                    e = e | 0;
                    F(e | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eP(e) {
                    e = e | 0;
                    F(e | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function eL(e) {
                    e = e | 0;
                    if (D(1) | 0) return 1;
                    F(n[M + 1 | 0] | 0);
                    M = M + 2 | 0;
                    return 0
                }

                function ek(e) {
                    e = e | 0;
                    if (D(2) | 0) return 1;
                    F(G(M + 1 | 0) | 0);
                    M = M + 3 | 0;
                    return 0
                }

                function eV(e) {
                    e = e | 0;
                    if (D(4) | 0) return 1;
                    P(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0);
                    M = M + 5 | 0;
                    return 0
                }

                function eC(e) {
                    e = e | 0;
                    if (D(8) | 0) return 1;
                    L(G(M + 1 | 0) | 0, G(M + 3 | 0) | 0, G(M + 5 | 0) | 0, G(M + 7 | 0) | 0);
                    M = M + 9 | 0;
                    return 0
                }

                function eM(e) {
                    e = e | 0;
                    U((e | 0) - 224 | 0);
                    M = M + 1 | 0;
                    return 0
                }

                function ej(e) {
                    e = e | 0;
                    d();
                    M = M + 1 | 0;
                    return 0
                }

                function e$(e) {
                    e = e | 0;
                    h();
                    M = M + 1 | 0;
                    return 0
                }

                function eq(e) {
                    e = e | 0;
                    g();
                    M = M + 1 | 0;
                    return 0
                }

                function eD(e) {
                    e = e | 0;
                    p();
                    M = M + 1 | 0;
                    return 0
                }

                function eG(e) {
                    e = e | 0;
                    if (D(1) | 0) return 1;
                    U(n[M + 1 | 0] | 0);
                    M = M + 2 | 0;
                    return 0
                }

                function ez(e) {
                    e = e | 0;
                    var t = 0;
                    var r = 0;
                    var i = 1;
                    var a = 0;
                    var s = 0;
                    var o = 0;
                    if (D(2) | 0) return 1;
                    t = n[M + 1 | 0] | 0;
                    r = n[M + 2 | 0] | 0;
                    if ((t | 0) & 128) i = -1;
                    a = +(((t | 0) & 124) >> 2);
                    s = +(((t | 0) & 3) << 8 | r);
                    if (+a == 0) c(+(+i * 5960464477539063e-23 * +s));
                    else if (+a == 31) {
                        if (+i == 1) {
                            if (+s > 0) m();
                            else y()
                        } else if (+s > 0) w();
                        else b()
                    } else c(+(+i * C(2, +(+a - 25)) * +(1024 + s)));
                    M = M + 3 | 0;
                    return 0
                }

                function eH(e) {
                    e = e | 0;
                    if (D(4) | 0) return 1;
                    f(n[M + 1 | 0] | 0, n[M + 2 | 0] | 0, n[M + 3 | 0] | 0, n[M + 4 | 0] | 0);
                    M = M + 5 | 0;
                    return 0
                }

                function eW(e) {
                    e = e | 0;
                    if (D(8) | 0) return 1;
                    l(n[M + 1 | 0] | 0, n[M + 2 | 0] | 0, n[M + 3 | 0] | 0, n[M + 4 | 0] | 0, n[M + 5 | 0] | 0, n[M + 6 | 0] | 0, n[M + 7 | 0] | 0, n[M + 8 | 0] | 0);
                    M = M + 9 | 0;
                    return 0
                }

                function eZ(e) {
                    e = e | 0;
                    return 1
                }

                function eK(e) {
                    e = e | 0;
                    V();
                    M = M + 1 | 0;
                    return 0
                }
                var eY = [H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, H, W, Z, K, Y, eZ, eZ, eZ, eZ, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, J, X, ee, et, eZ, eZ, eZ, eZ, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, er, en, ei, ea, es, eZ, eZ, eZ, eo, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, eu, ec, ef, el, eh, eZ, eZ, eZ, ed, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, ep, eg, ey, eb, em, eZ, eZ, eZ, ew, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, e_, ev, eE, ex, eB, eZ, eZ, eZ, eI, eN, eN, eN, eN, eN, eN, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eR, eL, ek, eV, eC, eZ, eZ, eZ, eZ, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, eM, ej, e$, eq, eD, eG, ez, eH, eW, eZ, eZ, eZ, eK];
                return {
                    parse: q
                }
            }
        },
        34427: function(e, t, r) {
            "use strict";
            let {
                Buffer: n
            } = r(94940), i = r(6868), a = r(51267).BigNumber, s = r(89639), o = r(73419), u = r(89883), c = r(12021), f = r(64880), {
                URL: l
            } = r(28272);
            class h {
                constructor(e) {
                    !(e = e || {}).size || e.size < 65536 ? e.size = 65536 : e.size = o.nextPowerOf2(e.size), this._heap = new ArrayBuffer(e.size), this._heap8 = new Uint8Array(this._heap), this._buffer = n.from(this._heap), this._reset(), this._knownTags = Object.assign({
                        0: e => new Date(e),
                        1: e => new Date(1e3 * e),
                        2: e => o.arrayBufferToBignumber(e),
                        3: e => u.NEG_ONE.minus(o.arrayBufferToBignumber(e)),
                        4: e => u.TEN.pow(e[0]).times(e[1]),
                        5: e => u.TWO.pow(e[0]).times(e[1]),
                        32: e => new l(e),
                        35: e => new RegExp(e)
                    }, e.tags), this.parser = s(r.g, {
                        log: console.log.bind(console),
                        pushInt: this.pushInt.bind(this),
                        pushInt32: this.pushInt32.bind(this),
                        pushInt32Neg: this.pushInt32Neg.bind(this),
                        pushInt64: this.pushInt64.bind(this),
                        pushInt64Neg: this.pushInt64Neg.bind(this),
                        pushFloat: this.pushFloat.bind(this),
                        pushFloatSingle: this.pushFloatSingle.bind(this),
                        pushFloatDouble: this.pushFloatDouble.bind(this),
                        pushTrue: this.pushTrue.bind(this),
                        pushFalse: this.pushFalse.bind(this),
                        pushUndefined: this.pushUndefined.bind(this),
                        pushNull: this.pushNull.bind(this),
                        pushInfinity: this.pushInfinity.bind(this),
                        pushInfinityNeg: this.pushInfinityNeg.bind(this),
                        pushNaN: this.pushNaN.bind(this),
                        pushNaNNeg: this.pushNaNNeg.bind(this),
                        pushArrayStart: this.pushArrayStart.bind(this),
                        pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
                        pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
                        pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
                        pushObjectStart: this.pushObjectStart.bind(this),
                        pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
                        pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
                        pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
                        pushByteString: this.pushByteString.bind(this),
                        pushByteStringStart: this.pushByteStringStart.bind(this),
                        pushUtf8String: this.pushUtf8String.bind(this),
                        pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
                        pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
                        pushTagUnassigned: this.pushTagUnassigned.bind(this),
                        pushTagStart: this.pushTagStart.bind(this),
                        pushTagStart4: this.pushTagStart4.bind(this),
                        pushTagStart8: this.pushTagStart8.bind(this),
                        pushBreak: this.pushBreak.bind(this)
                    }, this._heap)
                }
                get _depth() {
                    return this._parents.length
                }
                get _currentParent() {
                    return this._parents[this._depth - 1]
                }
                get _ref() {
                    return this._currentParent.ref
                }
                _closeParent() {
                    var e = this._parents.pop();
                    if (e.length > 0) throw Error(`Missing ${e.length} elements`);
                    switch (e.type) {
                        case u.PARENT.TAG:
                            this._push(this.createTag(e.ref[0], e.ref[1]));
                            break;
                        case u.PARENT.BYTE_STRING:
                            this._push(this.createByteString(e.ref, e.length));
                            break;
                        case u.PARENT.UTF8_STRING:
                            this._push(this.createUtf8String(e.ref, e.length));
                            break;
                        case u.PARENT.MAP:
                            if (e.values % 2 > 0) throw Error("Odd number of elements in the map");
                            this._push(this.createMap(e.ref, e.length));
                            break;
                        case u.PARENT.OBJECT:
                            if (e.values % 2 > 0) throw Error("Odd number of elements in the map");
                            this._push(this.createObject(e.ref, e.length));
                            break;
                        case u.PARENT.ARRAY:
                            this._push(this.createArray(e.ref, e.length))
                    }
                    this._currentParent && this._currentParent.type === u.PARENT.TAG && this._dec()
                }
                _dec() {
                    let e = this._currentParent;
                    e.length < 0 || (e.length--, 0 === e.length && this._closeParent())
                }
                _push(e, t) {
                    let r = this._currentParent;
                    switch (r.values++, r.type) {
                        case u.PARENT.ARRAY:
                        case u.PARENT.BYTE_STRING:
                        case u.PARENT.UTF8_STRING:
                            r.length > -1 ? this._ref[this._ref.length - r.length] = e : this._ref.push(e), this._dec();
                            break;
                        case u.PARENT.OBJECT:
                            null != r.tmpKey ? (this._ref[r.tmpKey] = e, r.tmpKey = null, this._dec()) : (r.tmpKey = e, "string" != typeof r.tmpKey && (r.type = u.PARENT.MAP, r.ref = o.buildMap(r.ref)));
                            break;
                        case u.PARENT.MAP:
                            null != r.tmpKey ? (this._ref.set(r.tmpKey, e), r.tmpKey = null, this._dec()) : r.tmpKey = e;
                            break;
                        case u.PARENT.TAG:
                            this._ref.push(e), t || this._dec();
                            break;
                        default:
                            throw Error("Unknown parent type")
                    }
                }
                _createParent(e, t, r) {
                    this._parents[this._depth] = {
                        type: t,
                        length: r,
                        ref: e,
                        values: 0,
                        tmpKey: null
                    }
                }
                _reset() {
                    this._res = [], this._parents = [{
                        type: u.PARENT.ARRAY,
                        length: -1,
                        ref: this._res,
                        values: 0,
                        tmpKey: null
                    }]
                }
                createTag(e, t) {
                    let r = this._knownTags[e];
                    return r ? r(t) : new f(e, t)
                }
                createMap(e, t) {
                    return e
                }
                createObject(e, t) {
                    return e
                }
                createArray(e, t) {
                    return e
                }
                createByteString(e, t) {
                    return n.concat(e)
                }
                createByteStringFromHeap(e, t) {
                    return e === t ? n.alloc(0) : n.from(this._heap.slice(e, t))
                }
                createInt(e) {
                    return e
                }
                createInt32(e, t) {
                    return o.buildInt32(e, t)
                }
                createInt64(e, t, r, n) {
                    return o.buildInt64(e, t, r, n)
                }
                createFloat(e) {
                    return e
                }
                createFloatSingle(e, t, r, n) {
                    return i.read([e, t, r, n], 0, !1, 23, 4)
                }
                createFloatDouble(e, t, r, n, a, s, o, u) {
                    return i.read([e, t, r, n, a, s, o, u], 0, !1, 52, 8)
                }
                createInt32Neg(e, t) {
                    return -1 - o.buildInt32(e, t)
                }
                createInt64Neg(e, t, r, n) {
                    let i = o.buildInt32(e, t),
                        s = o.buildInt32(r, n);
                    return i > u.MAX_SAFE_HIGH ? u.NEG_ONE.minus(new a(i).times(u.SHIFT32).plus(s)) : -1 - (i * u.SHIFT32 + s)
                }
                createTrue() {
                    return !0
                }
                createFalse() {
                    return !1
                }
                createNull() {
                    return null
                }
                createUndefined() {}
                createInfinity() {
                    return 1 / 0
                }
                createInfinityNeg() {
                    return -1 / 0
                }
                createNaN() {
                    return NaN
                }
                createNaNNeg() {
                    return NaN
                }
                createUtf8String(e, t) {
                    return e.join("")
                }
                createUtf8StringFromHeap(e, t) {
                    return e === t ? "" : this._buffer.toString("utf8", e, t)
                }
                createSimpleUnassigned(e) {
                    return new c(e)
                }
                pushInt(e) {
                    this._push(this.createInt(e))
                }
                pushInt32(e, t) {
                    this._push(this.createInt32(e, t))
                }
                pushInt64(e, t, r, n) {
                    this._push(this.createInt64(e, t, r, n))
                }
                pushFloat(e) {
                    this._push(this.createFloat(e))
                }
                pushFloatSingle(e, t, r, n) {
                    this._push(this.createFloatSingle(e, t, r, n))
                }
                pushFloatDouble(e, t, r, n, i, a, s, o) {
                    this._push(this.createFloatDouble(e, t, r, n, i, a, s, o))
                }
                pushInt32Neg(e, t) {
                    this._push(this.createInt32Neg(e, t))
                }
                pushInt64Neg(e, t, r, n) {
                    this._push(this.createInt64Neg(e, t, r, n))
                }
                pushTrue() {
                    this._push(this.createTrue())
                }
                pushFalse() {
                    this._push(this.createFalse())
                }
                pushNull() {
                    this._push(this.createNull())
                }
                pushUndefined() {
                    this._push(this.createUndefined())
                }
                pushInfinity() {
                    this._push(this.createInfinity())
                }
                pushInfinityNeg() {
                    this._push(this.createInfinityNeg())
                }
                pushNaN() {
                    this._push(this.createNaN())
                }
                pushNaNNeg() {
                    this._push(this.createNaNNeg())
                }
                pushArrayStart() {
                    this._createParent([], u.PARENT.ARRAY, -1)
                }
                pushArrayStartFixed(e) {
                    this._createArrayStartFixed(e)
                }
                pushArrayStartFixed32(e, t) {
                    let r = o.buildInt32(e, t);
                    this._createArrayStartFixed(r)
                }
                pushArrayStartFixed64(e, t, r, n) {
                    let i = o.buildInt64(e, t, r, n);
                    this._createArrayStartFixed(i)
                }
                pushObjectStart() {
                    this._createObjectStartFixed(-1)
                }
                pushObjectStartFixed(e) {
                    this._createObjectStartFixed(e)
                }
                pushObjectStartFixed32(e, t) {
                    let r = o.buildInt32(e, t);
                    this._createObjectStartFixed(r)
                }
                pushObjectStartFixed64(e, t, r, n) {
                    let i = o.buildInt64(e, t, r, n);
                    this._createObjectStartFixed(i)
                }
                pushByteStringStart() {
                    this._parents[this._depth] = {
                        type: u.PARENT.BYTE_STRING,
                        length: -1,
                        ref: [],
                        values: 0,
                        tmpKey: null
                    }
                }
                pushByteString(e, t) {
                    this._push(this.createByteStringFromHeap(e, t))
                }
                pushUtf8StringStart() {
                    this._parents[this._depth] = {
                        type: u.PARENT.UTF8_STRING,
                        length: -1,
                        ref: [],
                        values: 0,
                        tmpKey: null
                    }
                }
                pushUtf8String(e, t) {
                    this._push(this.createUtf8StringFromHeap(e, t))
                }
                pushSimpleUnassigned(e) {
                    this._push(this.createSimpleUnassigned(e))
                }
                pushTagStart(e) {
                    this._parents[this._depth] = {
                        type: u.PARENT.TAG,
                        length: 1,
                        ref: [e]
                    }
                }
                pushTagStart4(e, t) {
                    this.pushTagStart(o.buildInt32(e, t))
                }
                pushTagStart8(e, t, r, n) {
                    this.pushTagStart(o.buildInt64(e, t, r, n))
                }
                pushTagUnassigned(e) {
                    this._push(this.createTag(e))
                }
                pushBreak() {
                    if (this._currentParent.length > -1) throw Error("Unexpected break");
                    this._closeParent()
                }
                _createObjectStartFixed(e) {
                    if (0 === e) {
                        this._push(this.createObject({}));
                        return
                    }
                    this._createParent({}, u.PARENT.OBJECT, e)
                }
                _createArrayStartFixed(e) {
                    if (0 === e) {
                        this._push(this.createArray([]));
                        return
                    }
                    this._createParent(Array(e), u.PARENT.ARRAY, e)
                }
                _decode(e) {
                    if (0 === e.byteLength) throw Error("Input too short");
                    this._reset(), this._heap8.set(e);
                    let t = this.parser.parse(e.byteLength);
                    if (this._depth > 1) {
                        for (; 0 === this._currentParent.length;) this._closeParent();
                        if (this._depth > 1) throw Error("Undeterminated nesting")
                    }
                    if (t > 0) throw Error("Failed to parse");
                    if (0 === this._res.length) throw Error("No valid result")
                }
                decodeFirst(e) {
                    return this._decode(e), this._res[0]
                }
                decodeAll(e) {
                    return this._decode(e), this._res
                }
                static decode(e, t) {
                    return "string" == typeof e && (e = n.from(e, t || "hex")), new h({
                        size: e.length
                    }).decodeFirst(e)
                }
                static decodeAll(e, t) {
                    return "string" == typeof e && (e = n.from(e, t || "hex")), new h({
                        size: e.length
                    }).decodeAll(e)
                }
            }
            h.decodeFirst = h.decode, e.exports = h
        },
        12114: function(e, t, r) {
            "use strict";
            let {
                Buffer: n
            } = r(94940), i = r(34427), a = r(73419);
            class s extends i {
                createTag(e, t) {
                    return `${e}(${t})`
                }
                createInt(e) {
                    return super.createInt(e).toString()
                }
                createInt32(e, t) {
                    return super.createInt32(e, t).toString()
                }
                createInt64(e, t, r, n) {
                    return super.createInt64(e, t, r, n).toString()
                }
                createInt32Neg(e, t) {
                    return super.createInt32Neg(e, t).toString()
                }
                createInt64Neg(e, t, r, n) {
                    return super.createInt64Neg(e, t, r, n).toString()
                }
                createTrue() {
                    return "true"
                }
                createFalse() {
                    return "false"
                }
                createFloat(e) {
                    let t = super.createFloat(e);
                    return a.isNegativeZero(e) ? "-0_1" : `${t}_1`
                }
                createFloatSingle(e, t, r, n) {
                    let i = super.createFloatSingle(e, t, r, n);
                    return `${i}_2`
                }
                createFloatDouble(e, t, r, n, i, a, s, o) {
                    let u = super.createFloatDouble(e, t, r, n, i, a, s, o);
                    return `${u}_3`
                }
                createByteString(e, t) {
                    let r = e.join(", ");
                    return -1 === t ? `(_ ${r})` : `h'${r}`
                }
                createByteStringFromHeap(e, t) {
                    let r = n.from(super.createByteStringFromHeap(e, t)).toString("hex");
                    return `h'${r}'`
                }
                createInfinity() {
                    return "Infinity_1"
                }
                createInfinityNeg() {
                    return "-Infinity_1"
                }
                createNaN() {
                    return "NaN_1"
                }
                createNaNNeg() {
                    return "-NaN_1"
                }
                createNull() {
                    return "null"
                }
                createUndefined() {
                    return "undefined"
                }
                createSimpleUnassigned(e) {
                    return `simple(${e})`
                }
                createArray(e, t) {
                    let r = super.createArray(e, t);
                    return -1 === t ? `[_ ${r.join(", ")}]` : `[${r.join(", ")}]`
                }
                createMap(e, t) {
                    let r = super.createMap(e),
                        n = Array.from(r.keys()).reduce(o(r), "");
                    return -1 === t ? `{_ ${n}}` : `{${n}}`
                }
                createObject(e, t) {
                    let r = super.createObject(e),
                        n = Object.keys(r).reduce(o(r), "");
                    return -1 === t ? `{_ ${n}}` : `{${n}}`
                }
                createUtf8String(e, t) {
                    let r = e.join(", ");
                    return -1 === t ? `(_ ${r})` : `"${r}"`
                }
                createUtf8StringFromHeap(e, t) {
                    let r = n.from(super.createUtf8StringFromHeap(e, t)).toString("utf8");
                    return `"${r}"`
                }
                static diagnose(e, t) {
                    return "string" == typeof e && (e = n.from(e, t || "hex")), new s().decodeFirst(e)
                }
            }

            function o(e) {
                return (t, r) => t ? `${t}, ${r}: ${e[r]}` : `${r}: ${e[r]}`
            }
            e.exports = s
        },
        79152: function(e, t, r) {
            "use strict";
            let {
                Buffer: n
            } = r(94940), {
                URL: i
            } = r(28272), a = r(51267).BigNumber, s = r(73419), o = r(89883), u = o.MT, c = o.NUMBYTES, f = o.SHIFT32, l = o.SYMS, h = o.TAG, d = o.MT.SIMPLE_FLOAT << 5 | o.NUMBYTES.TWO, p = o.MT.SIMPLE_FLOAT << 5 | o.NUMBYTES.FOUR, g = o.MT.SIMPLE_FLOAT << 5 | o.NUMBYTES.EIGHT, y = o.MT.SIMPLE_FLOAT << 5 | o.SIMPLE.TRUE, b = o.MT.SIMPLE_FLOAT << 5 | o.SIMPLE.FALSE, m = o.MT.SIMPLE_FLOAT << 5 | o.SIMPLE.UNDEFINED, w = o.MT.SIMPLE_FLOAT << 5 | o.SIMPLE.NULL, _ = new a("0x20000000000000"), v = n.from("f97e00", "hex"), E = n.from("f9fc00", "hex"), x = n.from("f97c00", "hex");
            class B {
                constructor(e) {
                    e = e || {}, this.streaming = "function" == typeof e.stream, this.onData = e.stream, this.semanticTypes = [
                        [i, this._pushUrl],
                        [a, this._pushBigNumber]
                    ];
                    let t = e.genTypes || [],
                        r = t.length;
                    for (let e = 0; e < r; e++) this.addSemanticType(t[e][0], t[e][1]);
                    this._reset()
                }
                addSemanticType(e, t) {
                    let r = this.semanticTypes.length;
                    for (let n = 0; n < r; n++)
                        if (this.semanticTypes[n][0] === e) {
                            let e = this.semanticTypes[n][1];
                            return this.semanticTypes[n][1] = t, e
                        }
                    return this.semanticTypes.push([e, t]), null
                }
                push(e) {
                    return !e || (this.result[this.offset] = e, this.resultMethod[this.offset] = 0, this.resultLength[this.offset] = e.length, this.offset++, this.streaming && this.onData(this.finalize()), !0)
                }
                pushWrite(e, t, r) {
                    return this.result[this.offset] = e, this.resultMethod[this.offset] = t, this.resultLength[this.offset] = r, this.offset++, this.streaming && this.onData(this.finalize()), !0
                }
                _pushUInt8(e) {
                    return this.pushWrite(e, 1, 1)
                }
                _pushUInt16BE(e) {
                    return this.pushWrite(e, 2, 2)
                }
                _pushUInt32BE(e) {
                    return this.pushWrite(e, 3, 4)
                }
                _pushDoubleBE(e) {
                    return this.pushWrite(e, 4, 8)
                }
                _pushNaN() {
                    return this.push(v)
                }
                _pushInfinity(e) {
                    return this.push(e < 0 ? E : x)
                }
                _pushFloat(e) {
                    let t = n.allocUnsafe(2);
                    if (s.writeHalf(t, e) && s.parseHalf(t) === e) return this._pushUInt8(d) && this.push(t);
                    let r = n.allocUnsafe(4);
                    return (r.writeFloatBE(e, 0), r.readFloatBE(0) === e) ? this._pushUInt8(p) && this.push(r) : this._pushUInt8(g) && this._pushDoubleBE(e)
                }
                _pushInt(e, t, r) {
                    let n = t << 5;
                    return e < 24 ? this._pushUInt8(n | e) : e <= 255 ? this._pushUInt8(n | c.ONE) && this._pushUInt8(e) : e <= 65535 ? this._pushUInt8(n | c.TWO) && this._pushUInt16BE(e) : e <= 4294967295 ? this._pushUInt8(n | c.FOUR) && this._pushUInt32BE(e) : e <= Number.MAX_SAFE_INTEGER ? this._pushUInt8(n | c.EIGHT) && this._pushUInt32BE(Math.floor(e / f)) && this._pushUInt32BE(e % f) : t === u.NEG_INT ? this._pushFloat(r) : this._pushFloat(e)
                }
                _pushIntNum(e) {
                    return e < 0 ? this._pushInt(-e - 1, u.NEG_INT, e) : this._pushInt(e, u.POS_INT)
                }
                _pushNumber(e) {
                    switch (!1) {
                        case e == e:
                            return this._pushNaN(e);
                        case isFinite(e):
                            return this._pushInfinity(e);
                        case e % 1 != 0:
                            return this._pushIntNum(e);
                        default:
                            return this._pushFloat(e)
                    }
                }
                _pushString(e) {
                    let t = n.byteLength(e, "utf8");
                    return this._pushInt(t, u.UTF8_STRING) && this.pushWrite(e, 5, t)
                }
                _pushBoolean(e) {
                    return this._pushUInt8(e ? y : b)
                }
                _pushUndefined(e) {
                    return this._pushUInt8(m)
                }
                _pushArray(e, t) {
                    let r = t.length;
                    if (!e._pushInt(r, u.ARRAY)) return !1;
                    for (let n = 0; n < r; n++)
                        if (!e.pushAny(t[n])) return !1;
                    return !0
                }
                _pushTag(e) {
                    return this._pushInt(e, u.TAG)
                }
                _pushDate(e, t) {
                    return e._pushTag(h.DATE_EPOCH) && e.pushAny(Math.round(t / 1e3))
                }
                _pushBuffer(e, t) {
                    return e._pushInt(t.length, u.BYTE_STRING) && e.push(t)
                }
                _pushNoFilter(e, t) {
                    return e._pushBuffer(e, t.slice())
                }
                _pushRegexp(e, t) {
                    return e._pushTag(h.REGEXP) && e.pushAny(t.source)
                }
                _pushSet(e, t) {
                    if (!e._pushInt(t.size, u.ARRAY)) return !1;
                    for (let r of t)
                        if (!e.pushAny(r)) return !1;
                    return !0
                }
                _pushUrl(e, t) {
                    return e._pushTag(h.URI) && e.pushAny(t.format())
                }
                _pushBigint(e) {
                    let t = h.POS_BIGINT;
                    e.isNegative() && (e = e.negated().minus(1), t = h.NEG_BIGINT);
                    let r = e.toString(16);
                    r.length % 2 && (r = "0" + r);
                    let i = n.from(r, "hex");
                    return this._pushTag(t) && this._pushBuffer(this, i)
                }
                _pushBigNumber(e, t) {
                    if (t.isNaN()) return e._pushNaN();
                    if (!t.isFinite()) return e._pushInfinity(t.isNegative() ? -1 / 0 : 1 / 0);
                    if (t.isInteger()) return e._pushBigint(t);
                    if (!(e._pushTag(h.DECIMAL_FRAC) && e._pushInt(2, u.ARRAY))) return !1;
                    let r = t.decimalPlaces(),
                        n = t.multipliedBy(new a(10).pow(r));
                    return !!e._pushIntNum(-r) && (n.abs().isLessThan(_) ? e._pushIntNum(n.toNumber()) : e._pushBigint(n))
                }
                _pushMap(e, t) {
                    return !!e._pushInt(t.size, u.MAP) && this._pushRawMap(t.size, Array.from(t))
                }
                _pushObject(e) {
                    if (!e) return this._pushUInt8(w);
                    for (var t = this.semanticTypes.length, r = 0; r < t; r++)
                        if (e instanceof this.semanticTypes[r][0]) return this.semanticTypes[r][1].call(e, this, e);
                    var n = e.encodeCBOR;
                    if ("function" == typeof n) return n.call(e, this);
                    var i = Object.keys(e),
                        a = i.length;
                    return !!this._pushInt(a, u.MAP) && this._pushRawMap(a, i.map(t => [t, e[t]]))
                }
                _pushRawMap(e, t) {
                    t = t.map(function(e) {
                        return e[0] = B.encode(e[0]), e
                    }).sort(s.keySorter);
                    for (var r = 0; r < e; r++)
                        if (!this.push(t[r][0]) || !this.pushAny(t[r][1])) return !1;
                    return !0
                }
                write(e) {
                    return this.pushAny(e)
                }
                pushAny(e) {
                    switch (({}).toString.call(e).slice(8, -1)) {
                        case "Number":
                            return this._pushNumber(e);
                        case "String":
                            return this._pushString(e);
                        case "Boolean":
                            return this._pushBoolean(e);
                        case "Object":
                            return this._pushObject(e);
                        case "Array":
                            return this._pushArray(this, e);
                        case "Uint8Array":
                            return this._pushBuffer(this, n.isBuffer(e) ? e : n.from(e));
                        case "Null":
                            return this._pushUInt8(w);
                        case "Undefined":
                            return this._pushUndefined(e);
                        case "Map":
                            return this._pushMap(this, e);
                        case "Set":
                            return this._pushSet(this, e);
                        case "URL":
                            return this._pushUrl(this, e);
                        case "BigNumber":
                            return this._pushBigNumber(this, e);
                        case "Date":
                            return this._pushDate(this, e);
                        case "RegExp":
                            return this._pushRegexp(this, e);
                        case "Symbol":
                            switch (e) {
                                case l.NULL:
                                    return this._pushObject(null);
                                case l.UNDEFINED:
                                    return this._pushUndefined(void 0);
                                default:
                                    throw Error("Unknown symbol: " + e.toString())
                            }
                        default:
                            throw Error("Unknown type: " + typeof e + ", " + (e ? e.toString() : ""))
                    }
                }
                finalize() {
                    if (0 === this.offset) return null;
                    for (var e = this.result, t = this.resultLength, r = this.resultMethod, i = this.offset, a = 0, s = 0; s < i; s++) a += t[s];
                    var o = n.allocUnsafe(a),
                        u = 0,
                        c = 0;
                    for (s = 0; s < i; s++) {
                        switch (c = t[s], r[s]) {
                            case 0:
                                e[s].copy(o, u);
                                break;
                            case 1:
                                o.writeUInt8(e[s], u, !0);
                                break;
                            case 2:
                                o.writeUInt16BE(e[s], u, !0);
                                break;
                            case 3:
                                o.writeUInt32BE(e[s], u, !0);
                                break;
                            case 4:
                                o.writeDoubleBE(e[s], u, !0);
                                break;
                            case 5:
                                o.write(e[s], u, c, "utf8");
                                break;
                            default:
                                throw Error("unkown method")
                        }
                        u += c
                    }
                    return this._reset(), o
                }
                _reset() {
                    this.result = [], this.resultMethod = [], this.resultLength = [], this.offset = 0
                }
                static encode(e) {
                    let t = new B;
                    if (!t.pushAny(e)) throw Error("Failed to encode input");
                    return t.finalize()
                }
            }
            e.exports = B
        },
        4044: function(e, t, r) {
            "use strict";
            t.Diagnose = r(12114), t.Decoder = r(34427), t.Encoder = r(79152), t.Simple = r(12021), t.Tagged = r(64880), t.decodeAll = t.Decoder.decodeAll, t.decodeFirst = t.Decoder.decodeFirst, t.diagnose = t.Diagnose.diagnose, t.encode = t.Encoder.encode, t.decode = t.Decoder.decode, t.leveldb = {
                decode: t.Decoder.decodeAll,
                encode: t.Encoder.encode,
                buffer: !0,
                name: "cbor"
            }
        },
        12021: function(e, t, r) {
            "use strict";
            let n = r(89883),
                i = n.MT,
                a = n.SIMPLE,
                s = n.SYMS;
            class o {
                constructor(e) {
                    if ("number" != typeof e) throw Error("Invalid Simple type: " + typeof e);
                    if (e < 0 || e > 255 || (0 | e) !== e) throw Error("value must be a small positive integer: " + e);
                    this.value = e
                }
                toString() {
                    return "simple(" + this.value + ")"
                }
                inspect() {
                    return "simple(" + this.value + ")"
                }
                encodeCBOR(e) {
                    return e._pushInt(this.value, i.SIMPLE_FLOAT)
                }
                static isSimple(e) {
                    return e instanceof o
                }
                static decode(e, t) {
                    switch (null == t && (t = !0), e) {
                        case a.FALSE:
                            return !1;
                        case a.TRUE:
                            return !0;
                        case a.NULL:
                            if (t) return null;
                            return s.NULL;
                        case a.UNDEFINED:
                            if (t) return;
                            return s.UNDEFINED;
                        case -1:
                            if (!t) throw Error("Invalid BREAK");
                            return s.BREAK;
                        default:
                            return new o(e)
                    }
                }
            }
            e.exports = o
        },
        64880: function(e) {
            "use strict";
            class t {
                constructor(e, t, r) {
                    if (this.tag = e, this.value = t, this.err = r, "number" != typeof this.tag) throw Error("Invalid tag type (" + typeof this.tag + ")");
                    if (this.tag < 0 || (0 | this.tag) !== this.tag) throw Error("Tag must be a positive integer: " + this.tag)
                }
                toString() {
                    return `${this.tag}(${JSON.stringify(this.value)})`
                }
                encodeCBOR(e) {
                    return e._pushTag(this.tag), e.pushAny(this.value)
                }
                convert(e) {
                    var r;
                    if ("function" != typeof(r = null != e ? e[this.tag] : void 0) && "function" != typeof(r = t["_tag" + this.tag])) return this;
                    try {
                        return r.call(t, this.value)
                    } catch (e) {
                        return this.err = e, this
                    }
                }
            }
            e.exports = t
        },
        73419: function(e, t, r) {
            "use strict";
            let {
                Buffer: n
            } = r(94940), i = r(51267).BigNumber, a = r(89883), s = a.SHIFT32, o = a.SHIFT16;
            t.parseHalf = function(e) {
                var t, r, n;
                return (n = 128 & e[0] ? -1 : 1, t = (124 & e[0]) >> 2, r = (3 & e[0]) << 8 | e[1], t) ? 31 === t ? n * (r ? 0 / 0 : Infinity) : n * Math.pow(2, t - 25) * (1024 + r) : 5960464477539063e-23 * n * r
            }, t.arrayBufferToBignumber = function(e) {
                let t = e.byteLength,
                    r = "";
                for (let i = 0; i < t; i++) {
                    var n;
                    r += (n = e[i]) < 16 ? "0" + n.toString(16) : n.toString(16)
                }
                return new i(r, 16)
            }, t.buildMap = e => {
                let t = new Map,
                    r = Object.keys(e),
                    n = r.length;
                for (let i = 0; i < n; i++) t.set(r[i], e[r[i]]);
                return t
            }, t.buildInt32 = (e, t) => e * o + t, t.buildInt64 = (e, r, n, a) => {
                let o = t.buildInt32(e, r),
                    u = t.buildInt32(n, a);
                return o > 2097151 ? new i(o).times(s).plus(u) : o * s + u
            }, t.writeHalf = function(e, t) {
                let r = n.allocUnsafe(4);
                r.writeFloatBE(t, 0);
                let i = r.readUInt32BE(0);
                if ((8191 & i) != 0) return !1;
                var a = i >> 16 & 32768;
                let s = i >> 23 & 255,
                    o = 8388607 & i;
                if (s >= 113 && s <= 142) a += (s - 112 << 10) + (o >> 13);
                else {
                    if (!(s >= 103) || !(s < 113) || o & (1 << 126 - s) - 1) return !1;
                    a += o + 8388608 >> 126 - s
                }
                return e.writeUInt16BE(a, 0), !0
            }, t.keySorter = function(e, t) {
                var r = e[0].byteLength,
                    n = t[0].byteLength;
                return r > n ? 1 : n > r ? -1 : e[0].compare(t[0])
            }, t.isNegativeZero = e => 0 === e && 1 / e < 0, t.nextPowerOf2 = e => {
                let t = 0;
                if (e && !(e & e - 1)) return e;
                for (; 0 !== e;) e >>= 1, t += 1;
                return 1 << t
            }
        },
        28272: function(e, t, r) {
            "use strict";
            let {
                URLWithLegacySupport: n,
                format: i,
                URLSearchParams: a,
                defaultBase: s
            } = r(32374), o = r(2504);
            e.exports = {
                URL: n,
                URLSearchParams: a,
                format: i,
                relative: o,
                defaultBase: s
            }
        },
        2504: function(e, t, r) {
            "use strict";
            let {
                URLWithLegacySupport: n,
                format: i
            } = r(32374);
            e.exports = (e, t = {}, r = {}, a) => {
                let s, o = t.protocol ? t.protocol.replace(":", "") : "http";
                o = (r[o] || a || o) + ":";
                try {
                    s = new n(e)
                } catch (e) {
                    s = {}
                }
                return new n(e, i(Object.assign({}, t, {
                    protocol: o || s.protocol,
                    host: t.host || s.host
                }))).toString()
            }
        },
        32374: function(e) {
            "use strict";
            let t = self.location ? self.location.protocol + "//" + self.location.host : "",
                r = self.URL;
            class n {
                constructor(e = "", n = t) {
                    this.super = new r(e, n), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null
                }
                get hash() {
                    return this.super.hash
                }
                get host() {
                    return this.super.host
                }
                get hostname() {
                    return this.super.hostname
                }
                get href() {
                    return this.super.href
                }
                get origin() {
                    return this.super.origin
                }
                get password() {
                    return this.super.password
                }
                get pathname() {
                    return this.super.pathname
                }
                get port() {
                    return this.super.port
                }
                get protocol() {
                    return this.super.protocol
                }
                get search() {
                    return this.super.search
                }
                get searchParams() {
                    return this.super.searchParams
                }
                get username() {
                    return this.super.username
                }
                set hash(e) {
                    this.super.hash = e
                }
                set host(e) {
                    this.super.host = e
                }
                set hostname(e) {
                    this.super.hostname = e
                }
                set href(e) {
                    this.super.href = e
                }
                set origin(e) {
                    this.super.origin = e
                }
                set password(e) {
                    this.super.password = e
                }
                set pathname(e) {
                    this.super.pathname = e
                }
                set port(e) {
                    this.super.port = e
                }
                set protocol(e) {
                    this.super.protocol = e
                }
                set search(e) {
                    this.super.search = e
                }
                set searchParams(e) {
                    this.super.searchParams = e
                }
                set username(e) {
                    this.super.username = e
                }
                createObjectURL(e) {
                    return this.super.createObjectURL(e)
                }
                revokeObjectURL(e) {
                    this.super.revokeObjectURL(e)
                }
                toJSON() {
                    return this.super.toJSON()
                }
                toString() {
                    return this.super.toString()
                }
                format() {
                    return this.toString()
                }
            }
            e.exports = {
                URLWithLegacySupport: n,
                URLSearchParams: self.URLSearchParams,
                defaultBase: t,
                format: function(e) {
                    if ("string" == typeof e) return new r(e).toString();
                    if (!(e instanceof r)) {
                        let t = e.username && e.password ? `${e.username}:${e.password}@` : "",
                            r = e.auth ? e.auth + "@" : "",
                            n = e.port ? ":" + e.port : "",
                            i = e.protocol ? e.protocol + "//" : "",
                            a = e.host || "",
                            s = e.hostname || "",
                            o = e.search || (e.query ? "?" + e.query : ""),
                            u = e.hash || "",
                            c = e.pathname || "",
                            f = e.path || c + o;
                        return `${i}${t||r}${a||s+n}${f}${u}`
                    }
                }
            }
        },
        20357: function(e, t, r) {
            "use strict";
            var n, i;
            e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof(null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(88081)
        },
        88081: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, r, n, i = e.exports = {};

                            function a() {
                                throw Error("setTimeout has not been defined")
                            }

                            function s() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function o(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (r) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (r) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : a
                                } catch (e) {
                                    t = a
                                }
                                try {
                                    r = "function" == typeof clearTimeout ? clearTimeout : s
                                } catch (e) {
                                    r = s
                                }
                            }();
                            var u = [],
                                c = !1,
                                f = -1;

                            function l() {
                                c && n && (c = !1, n.length ? u = n.concat(u) : f = -1, u.length && h())
                            }

                            function h() {
                                if (!c) {
                                    var e = o(l);
                                    c = !0;
                                    for (var t = u.length; t;) {
                                        for (n = u, u = []; ++f < t;) n && n[f].run();
                                        f = -1, t = u.length
                                    }
                                    n = null, c = !1,
                                        function(e) {
                                            if (r === clearTimeout) return clearTimeout(e);
                                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                            try {
                                                r(e)
                                            } catch (t) {
                                                try {
                                                    return r.call(null, e)
                                                } catch (t) {
                                                    return r.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function d(e, t) {
                                this.fun = e, this.array = t
                            }

                            function p() {}
                            i.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                u.push(new d(e, t)), 1 !== u.length || c || o(h)
                            }, d.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
                                return []
                            }, i.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, i.cwd = function() {
                                return "/"
                            }, i.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, i.umask = function() {
                                return 0
                            }
                        }
                    },
                    r = {};

                function n(e) {
                    var i = r[e];
                    if (void 0 !== i) return i.exports;
                    var a = r[e] = {
                            exports: {}
                        },
                        s = !0;
                    try {
                        t[e](a, a.exports, n), s = !1
                    } finally {
                        s && delete r[e]
                    }
                    return a.exports
                }
                n.ab = "//";
                var i = n(229);
                e.exports = i
            }()
        },
        64746: function(e, t, r) {
            var n, i;
            void 0 !== (i = "function" == typeof(n = function() {
                var e, t, r, n, i, a = {},
                    s = {},
                    o = {
                        currentLocale: "en",
                        zeroFormat: null,
                        nullFormat: null,
                        defaultFormat: "0,0",
                        scalePercentBy100: !0
                    },
                    u = {
                        currentLocale: o.currentLocale,
                        zeroFormat: o.zeroFormat,
                        nullFormat: o.nullFormat,
                        defaultFormat: o.defaultFormat,
                        scalePercentBy100: o.scalePercentBy100
                    };

                function c(e, t) {
                    this._input = e, this._value = t
                }
                return (n = function(e) {
                    var t, r, s, o;
                    if (n.isNumeral(e)) t = e.value();
                    else if (0 === e || void 0 === e) t = 0;
                    else if (null === e || i.isNaN(e)) t = null;
                    else if ("string" == typeof e) {
                        if (u.zeroFormat && e === u.zeroFormat) t = 0;
                        else if (u.nullFormat && e === u.nullFormat || !e.replace(/[^0-9]+/g, "").length) t = null;
                        else {
                            for (r in a)
                                if ((o = "function" == typeof a[r].regexps.unformat ? a[r].regexps.unformat() : a[r].regexps.unformat) && e.match(o)) {
                                    s = a[r].unformat;
                                    break
                                }
                            t = (s = s || n._.stringToNumber)(e)
                        }
                    } else t = Number(e) || null;
                    return new c(e, t)
                }).version = "2.0.6", n.isNumeral = function(e) {
                    return e instanceof c
                }, n._ = i = {
                    numberToFormat: function(e, t, r) {
                        var i, a, o, u, c, f, l, h = s[n.options.currentLocale],
                            d = !1,
                            p = !1,
                            g = 0,
                            y = "",
                            b = "",
                            m = !1;
                        if (a = Math.abs(e = e || 0), n._.includes(t, "(") ? (d = !0, t = t.replace(/[\(|\)]/g, "")) : (n._.includes(t, "+") || n._.includes(t, "-")) && (c = n._.includes(t, "+") ? t.indexOf("+") : e < 0 ? t.indexOf("-") : -1, t = t.replace(/[\+|\-]/g, "")), n._.includes(t, "a") && (i = !!(i = t.match(/a(k|m|b|t)?/)) && i[1], n._.includes(t, " a") && (y = " "), t = t.replace(RegExp(y + "a[kmbt]?"), ""), a >= 1e12 && !i || "t" === i ? (y += h.abbreviations.trillion, e /= 1e12) : a < 1e12 && a >= 1e9 && !i || "b" === i ? (y += h.abbreviations.billion, e /= 1e9) : a < 1e9 && a >= 1e6 && !i || "m" === i ? (y += h.abbreviations.million, e /= 1e6) : (a < 1e6 && a >= 1e3 && !i || "k" === i) && (y += h.abbreviations.thousand, e /= 1e3)), n._.includes(t, "[.]") && (p = !0, t = t.replace("[.]", ".")), o = e.toString().split(".")[0], u = t.split(".")[1], f = t.indexOf(","), g = (t.split(".")[0].split(",")[0].match(/0/g) || []).length, u ? (n._.includes(u, "[") ? (u = (u = u.replace("]", "")).split("["), b = n._.toFixed(e, u[0].length + u[1].length, r, u[1].length)) : b = n._.toFixed(e, u.length, r), o = b.split(".")[0], b = n._.includes(b, ".") ? h.delimiters.decimal + b.split(".")[1] : "", p && 0 === Number(b.slice(1)) && (b = "")) : o = n._.toFixed(e, 0, r), y && !i && Number(o) >= 1e3 && y !== h.abbreviations.trillion) switch (o = String(Number(o) / 1e3), y) {
                            case h.abbreviations.thousand:
                                y = h.abbreviations.million;
                                break;
                            case h.abbreviations.million:
                                y = h.abbreviations.billion;
                                break;
                            case h.abbreviations.billion:
                                y = h.abbreviations.trillion
                        }
                        if (n._.includes(o, "-") && (o = o.slice(1), m = !0), o.length < g)
                            for (var w = g - o.length; w > 0; w--) o = "0" + o;
                        return f > -1 && (o = o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + h.delimiters.thousands)), 0 === t.indexOf(".") && (o = ""), l = o + b + (y || ""), d ? l = (d && m ? "(" : "") + l + (d && m ? ")" : "") : c >= 0 ? l = 0 === c ? (m ? "-" : "+") + l : l + (m ? "-" : "+") : m && (l = "-" + l), l
                    },
                    stringToNumber: function(e) {
                        var t, r, n, i = s[u.currentLocale],
                            a = e,
                            o = {
                                thousand: 3,
                                million: 6,
                                billion: 9,
                                trillion: 12
                            };
                        if (u.zeroFormat && e === u.zeroFormat) r = 0;
                        else if (u.nullFormat && e === u.nullFormat || !e.replace(/[^0-9]+/g, "").length) r = null;
                        else {
                            for (t in r = 1, "." !== i.delimiters.decimal && (e = e.replace(/\./g, "").replace(i.delimiters.decimal, ".")), o)
                                if (n = RegExp("[^a-zA-Z]" + i.abbreviations[t] + "(?:\\)|(\\" + i.currency.symbol + ")?(?:\\))?)?$"), a.match(n)) {
                                    r *= Math.pow(10, o[t]);
                                    break
                                }
                            r *= ((e.split("-").length + Math.min(e.split("(").length - 1, e.split(")").length - 1)) % 2 ? 1 : -1) * Number(e = e.replace(/[^0-9\.]+/g, ""))
                        }
                        return r
                    },
                    isNaN: function(e) {
                        return "number" == typeof e && isNaN(e)
                    },
                    includes: function(e, t) {
                        return -1 !== e.indexOf(t)
                    },
                    insert: function(e, t, r) {
                        return e.slice(0, r) + t + e.slice(r)
                    },
                    reduce: function(e, t) {
                        if (this === null) throw TypeError("Array.prototype.reduce called on null or undefined");
                        if ("function" != typeof t) throw TypeError(t + " is not a function");
                        var r, n = Object(e),
                            i = n.length >>> 0,
                            a = 0;
                        if (3 == arguments.length) r = arguments[2];
                        else {
                            for (; a < i && !(a in n);) a++;
                            if (a >= i) throw TypeError("Reduce of empty array with no initial value");
                            r = n[a++]
                        }
                        for (; a < i; a++) a in n && (r = t(r, n[a], a, n));
                        return r
                    },
                    multiplier: function(e) {
                        var t = e.toString().split(".");
                        return t.length < 2 ? 1 : Math.pow(10, t[1].length)
                    },
                    correctionFactor: function() {
                        var e = Array.prototype.slice.call(arguments);
                        return e.reduce(function(e, t) {
                            var r = i.multiplier(t);
                            return e > r ? e : r
                        }, 1)
                    },
                    toFixed: function(e, t, r, n) {
                        var i, a, s, o, u = e.toString().split("."),
                            c = t - (n || 0);
                        return s = Math.pow(10, i = 2 === u.length ? Math.min(Math.max(u[1].length, c), t) : c), o = (r(e + "e+" + i) / s).toFixed(i), n > t - i && (a = RegExp("\\.?0{1," + (n - (t - i)) + "}$"), o = o.replace(a, "")), o
                    }
                }, n.options = u, n.formats = a, n.locales = s, n.locale = function(e) {
                    return e && (u.currentLocale = e.toLowerCase()), u.currentLocale
                }, n.localeData = function(e) {
                    if (!e) return s[u.currentLocale];
                    if (!s[e = e.toLowerCase()]) throw Error("Unknown locale : " + e);
                    return s[e]
                }, n.reset = function() {
                    for (var e in o) u[e] = o[e]
                }, n.zeroFormat = function(e) {
                    u.zeroFormat = "string" == typeof e ? e : null
                }, n.nullFormat = function(e) {
                    u.nullFormat = "string" == typeof e ? e : null
                }, n.defaultFormat = function(e) {
                    u.defaultFormat = "string" == typeof e ? e : "0.0"
                }, n.register = function(e, t, r) {
                    if (t = t.toLowerCase(), this[e + "s"][t]) throw TypeError(t + " " + e + " already registered.");
                    return this[e + "s"][t] = r, r
                }, n.validate = function(e, t) {
                    var r, i, a, s, o, u, c, f;
                    if ("string" != typeof e && (e += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", e)), (e = e.trim()).match(/^\d+$/)) return !0;
                    if ("" === e) return !1;
                    try {
                        c = n.localeData(t)
                    } catch (e) {
                        c = n.localeData(n.locale())
                    }
                    return a = c.currency.symbol, o = c.abbreviations, r = c.delimiters.decimal, i = "." === c.delimiters.thousands ? "\\." : c.delimiters.thousands, (null === (f = e.match(/^[^\d]+/)) || (e = e.substr(1), f[0] === a)) && (null === (f = e.match(/[^\d]+$/)) || (e = e.slice(0, -1), f[0] === o.thousand || f[0] === o.million || f[0] === o.billion || f[0] === o.trillion)) && (u = RegExp(i + "{2}"), !e.match(/[^\d.,]/g) && !((s = e.split(r)).length > 2) && (s.length < 2 ? !!s[0].match(/^\d+.*\d$/) && !s[0].match(u) : 1 === s[0].length ? !!s[0].match(/^\d+$/) && !s[0].match(u) && !!s[1].match(/^\d+$/) : !!s[0].match(/^\d+.*\d$/) && !s[0].match(u) && !!s[1].match(/^\d+$/)))
                }, n.fn = c.prototype = {
                    clone: function() {
                        return n(this)
                    },
                    format: function(e, t) {
                        var r, i, s, o = this._value,
                            c = e || u.defaultFormat;
                        if (t = t || Math.round, 0 === o && null !== u.zeroFormat) i = u.zeroFormat;
                        else if (null === o && null !== u.nullFormat) i = u.nullFormat;
                        else {
                            for (r in a)
                                if (c.match(a[r].regexps.format)) {
                                    s = a[r].format;
                                    break
                                }
                            i = (s = s || n._.numberToFormat)(o, c, t)
                        }
                        return i
                    },
                    value: function() {
                        return this._value
                    },
                    input: function() {
                        return this._input
                    },
                    set: function(e) {
                        return this._value = Number(e), this
                    },
                    add: function(e) {
                        var t = i.correctionFactor.call(null, this._value, e);
                        return this._value = i.reduce([this._value, e], function(e, r, n, i) {
                            return e + Math.round(t * r)
                        }, 0) / t, this
                    },
                    subtract: function(e) {
                        var t = i.correctionFactor.call(null, this._value, e);
                        return this._value = i.reduce([e], function(e, r, n, i) {
                            return e - Math.round(t * r)
                        }, Math.round(this._value * t)) / t, this
                    },
                    multiply: function(e) {
                        return this._value = i.reduce([this._value, e], function(e, t, r, n) {
                            var a = i.correctionFactor(e, t);
                            return Math.round(e * a) * Math.round(t * a) / Math.round(a * a)
                        }, 1), this
                    },
                    divide: function(e) {
                        return this._value = i.reduce([this._value, e], function(e, t, r, n) {
                            var a = i.correctionFactor(e, t);
                            return Math.round(e * a) / Math.round(t * a)
                        }), this
                    },
                    difference: function(e) {
                        return Math.abs(n(this._value).subtract(e).value())
                    }
                }, n.register("locale", "en", {
                    delimiters: {
                        thousands: ",",
                        decimal: "."
                    },
                    abbreviations: {
                        thousand: "k",
                        million: "m",
                        billion: "b",
                        trillion: "t"
                    },
                    ordinal: function(e) {
                        var t = e % 10;
                        return 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"
                    },
                    currency: {
                        symbol: "$"
                    }
                }), n.register("format", "bps", {
                    regexps: {
                        format: /(BPS)/,
                        unformat: /(BPS)/
                    },
                    format: function(e, t, r) {
                        var i, a = n._.includes(t, " BPS") ? " " : "";
                        return e *= 1e4, t = t.replace(/\s?BPS/, ""), i = n._.numberToFormat(e, t, r), n._.includes(i, ")") ? ((i = i.split("")).splice(-1, 0, a + "BPS"), i = i.join("")) : i = i + a + "BPS", i
                    },
                    unformat: function(e) {
                        return +(1e-4 * n._.stringToNumber(e)).toFixed(15)
                    }
                }), t = {
                    base: 1024,
                    suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
                }, r = "(" + (r = (e = {
                    base: 1e3,
                    suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
                }).suffixes.concat(t.suffixes.filter(function(t) {
                    return 0 > e.suffixes.indexOf(t)
                })).join("|")).replace("B", "B(?!PS)") + ")", n.register("format", "bytes", {
                    regexps: {
                        format: /([0\s]i?b)/,
                        unformat: new RegExp(r)
                    },
                    format: function(r, i, a) {
                        var s, o, u, c = n._.includes(i, "ib") ? t : e,
                            f = n._.includes(i, " b") || n._.includes(i, " ib") ? " " : "";
                        for (s = 0, i = i.replace(/\s?i?b/, ""); s <= c.suffixes.length; s++)
                            if (o = Math.pow(c.base, s), u = Math.pow(c.base, s + 1), null === r || 0 === r || r >= o && r < u) {
                                f += c.suffixes[s], o > 0 && (r /= o);
                                break
                            }
                        return n._.numberToFormat(r, i, a) + f
                    },
                    unformat: function(r) {
                        var i, a, s = n._.stringToNumber(r);
                        if (s) {
                            for (i = e.suffixes.length - 1; i >= 0; i--) {
                                if (n._.includes(r, e.suffixes[i])) {
                                    a = Math.pow(e.base, i);
                                    break
                                }
                                if (n._.includes(r, t.suffixes[i])) {
                                    a = Math.pow(t.base, i);
                                    break
                                }
                            }
                            s *= a || 1
                        }
                        return s
                    }
                }), n.register("format", "currency", {
                    regexps: {
                        format: /(\$)/
                    },
                    format: function(e, t, r) {
                        var i, a, s = n.locales[n.options.currentLocale],
                            o = {
                                before: t.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                                after: t.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                            };
                        for (t = t.replace(/\s?\$\s?/, ""), i = n._.numberToFormat(e, t, r), e >= 0 ? (o.before = o.before.replace(/[\-\(]/, ""), o.after = o.after.replace(/[\-\)]/, "")) : !(e < 0) || n._.includes(o.before, "-") || n._.includes(o.before, "(") || (o.before = "-" + o.before), a = 0; a < o.before.length; a++) switch (o.before[a]) {
                            case "$":
                                i = n._.insert(i, s.currency.symbol, a);
                                break;
                            case " ":
                                i = n._.insert(i, " ", a + s.currency.symbol.length - 1)
                        }
                        for (a = o.after.length - 1; a >= 0; a--) switch (o.after[a]) {
                            case "$":
                                i = a === o.after.length - 1 ? i + s.currency.symbol : n._.insert(i, s.currency.symbol, -(o.after.length - (1 + a)));
                                break;
                            case " ":
                                i = a === o.after.length - 1 ? i + " " : n._.insert(i, " ", -(o.after.length - (1 + a) + s.currency.symbol.length - 1))
                        }
                        return i
                    }
                }), n.register("format", "exponential", {
                    regexps: {
                        format: /(e\+|e-)/,
                        unformat: /(e\+|e-)/
                    },
                    format: function(e, t, r) {
                        var i = ("number" != typeof e || n._.isNaN(e) ? "0e+0" : e.toExponential()).split("e");
                        return t = t.replace(/e[\+|\-]{1}0/, ""), n._.numberToFormat(Number(i[0]), t, r) + "e" + i[1]
                    },
                    unformat: function(e) {
                        var t = n._.includes(e, "e+") ? e.split("e+") : e.split("e-"),
                            r = Number(t[0]),
                            i = Number(t[1]);
                        return i = n._.includes(e, "e-") ? i *= -1 : i, n._.reduce([r, Math.pow(10, i)], function(e, t, r, i) {
                            var a = n._.correctionFactor(e, t);
                            return e * a * (t * a) / (a * a)
                        }, 1)
                    }
                }), n.register("format", "ordinal", {
                    regexps: {
                        format: /(o)/
                    },
                    format: function(e, t, r) {
                        var i = n.locales[n.options.currentLocale],
                            a = n._.includes(t, " o") ? " " : "";
                        return t = t.replace(/\s?o/, ""), a += i.ordinal(e), n._.numberToFormat(e, t, r) + a
                    }
                }), n.register("format", "percentage", {
                    regexps: {
                        format: /(%)/,
                        unformat: /(%)/
                    },
                    format: function(e, t, r) {
                        var i, a = n._.includes(t, " %") ? " " : "";
                        return n.options.scalePercentBy100 && (e *= 100), t = t.replace(/\s?\%/, ""), i = n._.numberToFormat(e, t, r), n._.includes(i, ")") ? ((i = i.split("")).splice(-1, 0, a + "%"), i = i.join("")) : i = i + a + "%", i
                    },
                    unformat: function(e) {
                        var t = n._.stringToNumber(e);
                        return n.options.scalePercentBy100 ? .01 * t : t
                    }
                }), n.register("format", "time", {
                    regexps: {
                        format: /(:)/,
                        unformat: /(:)/
                    },
                    format: function(e, t, r) {
                        var n = Math.floor(e / 60 / 60),
                            i = Math.floor((e - 3600 * n) / 60),
                            a = Math.round(e - 3600 * n - 60 * i);
                        return n + ":" + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a)
                    },
                    unformat: function(e) {
                        var t = e.split(":"),
                            r = 0;
                        return 3 === t.length ? r += 3600 * Number(t[0]) + 60 * Number(t[1]) + Number(t[2]) : 2 === t.length && (r += 60 * Number(t[0]) + Number(t[1])), Number(r)
                    }
                }), n
            }) ? n.call(t, r, t, e) : n) && (e.exports = i)
        },
        2061: function(e, t, r) {
            "use strict";
            var n = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            };
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
                }(r(52876));
            let i = n(r(72497));
            t.value = i
        },
        52876: function(e, t, r) {
            "use strict";
            var n = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = n(r(72497)),
                a = [ArrayBuffer, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
            class s {
                constructor(e, t = !1) {
                    this._serializer = e, this._stable = t, this.name = "jsonDefault", this.priority = -100
                }
                match(e) {
                    return -1 != ["undefined", "boolean", "number", "string", "object"].indexOf(typeof e)
                }
                encode(e) {
                    switch (typeof e) {
                        case "undefined":
                            return i.undefined_();
                        case "boolean":
                            return i.bool(e);
                        case "number":
                            if (Math.floor(e) === e) return i.number(e);
                            return i.doubleFloat(e);
                        case "string":
                            return i.string(e);
                        case "object":
                            if (null === e) return i.null_();
                            if (Array.isArray(e)) return i.array(e.map(e => this._serializer.serializeValue(e)));
                            if (a.find(t => e instanceof t)) return i.bytes(e.buffer);
                            if (-1 !== Object.getOwnPropertyNames(e).indexOf("toJSON")) return this.encode(e.toJSON());
                            else if (e instanceof Map) {
                                let t = new Map;
                                for (let [r, n] of e.entries()) t.set(r, this._serializer.serializeValue(n));
                                return i.map(t, this._stable)
                            } else {
                                let t = new Map;
                                for (let [r, n] of Object.entries(e)) t.set(r, this._serializer.serializeValue(n));
                                return i.map(t, this._stable)
                            }
                        default:
                            throw Error("Invalid value.")
                    }
                }
            }
            t.JsonDefaultCborEncoder = s;
            class o {
                constructor() {
                    this.name = "cborEncoder", this.priority = -90
                }
                match(e) {
                    return "object" == typeof e && "function" == typeof e.toCBOR
                }
                encode(e) {
                    return e.toCBOR()
                }
            }
            t.ToCborEncoder = o;
            class u {
                constructor() {
                    this._encoders = new Set
                }
                static withDefaultEncoders(e = !1) {
                    let t = new this;
                    return t.addEncoder(new s(t, e)), t.addEncoder(new o), t
                }
                removeEncoder(e) {
                    for (let t of this._encoders.values()) t.name == e && this._encoders.delete(t)
                }
                addEncoder(e) {
                    this._encoders.add(e)
                }
                getEncoderFor(e) {
                    let t = null;
                    for (let r of this._encoders)(!t || r.priority > t.priority) && r.match(e) && (t = r);
                    if (null === t) throw Error("Could not find an encoder for value.");
                    return t
                }
                serializeValue(e) {
                    return this.getEncoderFor(e).encode(e)
                }
                serialize(e) {
                    return this.serializeValue(e)
                }
            }
            t.CborSerializer = u;
            class c extends u {
                serialize(e) {
                    return i.raw(new Uint8Array([...new Uint8Array([217, 217, 247]), ...new Uint8Array(super.serializeValue(e))]))
                }
            }
            t.SelfDescribeCborSerializer = c
        },
        72497: function(e, t) {
            "use strict";

            function r(e, ...t) {
                let n = new Uint8Array(e.byteLength + t.reduce((e, t) => e + t.byteLength, 0));
                n.set(new Uint8Array(e), 0);
                let i = e.byteLength;
                for (let e of t) n.set(new Uint8Array(e), i), i += e.byteLength;
                return n.buffer
            }

            function n(e, t, r) {
                r = r.replace(/[^0-9a-fA-F]/g, "");
                let n = 2 ** (t - 24);
                return new Uint8Array([(e << 5) + t].concat((r = r.slice(-(2 * n)).padStart(2 * n, "0")).match(/../g).map(e => parseInt(e, 16)))).buffer
            }

            function i(e, t) {
                return t < 24 ? new Uint8Array([(e << 5) + t]).buffer : n(e, t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27, t.toString(16))
            }

            function a(e) {
                let t = [];
                for (let r = 0; r < e.length; r++) {
                    let n = e.charCodeAt(r);
                    n < 128 ? t.push(n) : n < 2048 ? t.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (r++, n = (1023 & n) << 10 | 1023 & e.charCodeAt(r), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                }
                return r(new Uint8Array(i(3, e.length)), new Uint8Array(t))
            }

            function s(e) {
                return new Uint8Array(e).buffer
            }

            function o(e) {
                if (isNaN(e)) throw RangeError("Invalid number.");
                return new Uint8Array([0 + (e = Math.min(Math.max(0, e), 23))]).buffer
            }

            function u(e, t) {
                if (isNaN(e = parseInt("" + e, t))) throw RangeError("Invalid number.");
                return n(0, 24, e = (e = Math.min(Math.max(0, e), 255)).toString(16))
            }

            function c(e, t) {
                if (isNaN(e = parseInt("" + e, t))) throw RangeError("Invalid number.");
                return n(0, 25, e = (e = Math.min(Math.max(0, e), 65535)).toString(16))
            }

            function f(e, t) {
                if (isNaN(e = parseInt("" + e, t))) throw RangeError("Invalid number.");
                return n(0, 26, e = (e = Math.min(Math.max(0, e), 4294967295)).toString(16))
            }

            function l(e, t) {
                if ("string" == typeof e && 16 == t) {
                    if (e.match(/[^0-9a-fA-F]/)) throw RangeError("Invalid number.");
                    return n(0, 27, e)
                }
                if (isNaN(e = parseInt("" + e, t))) throw RangeError("Invalid number.");
                return n(0, 27, e = (e = Math.min(Math.max(0, e), 9007199254740992)).toString(16))
            }

            function h(e) {
                if (isNaN(e)) throw RangeError("Invalid number.");
                return 0 === e ? o(0) : new Uint8Array([32 + (e = Math.min(Math.max(0, -e), 24) - 1)]).buffer
            }

            function d(e, t) {
                if (isNaN(e = parseInt("" + e, t))) throw RangeError("Invalid number.");
                return n(1, 24, e = (e = Math.min(Math.max(0, -e - 1), 255)).toString(16))
            }

            function p(e, t) {
                if (isNaN(e = parseInt("" + e, t))) throw RangeError("Invalid number.");
                return n(1, 25, e = (e = Math.min(Math.max(0, -e - 1), 65535)).toString(16))
            }

            function g(e, t) {
                if (isNaN(e = parseInt("" + e, t))) throw RangeError("Invalid number.");
                return n(1, 26, e = (e = Math.min(Math.max(0, -e - 1), 4294967295)).toString(16))
            }

            function y(e, t) {
                if ("string" == typeof e && 16 == t) {
                    if ((e = e.startsWith("-") ? e.slice(1) : "0").match(/[^0-9a-fA-F]/) || e.length > 16) throw RangeError("Invalid number.");
                    let t = !1,
                        r = e.split("").reduceRight((e, r) => {
                            if (t) return r + e;
                            let n = parseInt(r, 16) - 1;
                            return n >= 0 ? (t = !0, n.toString(16) + e) : "f" + e
                        }, "");
                    return t ? n(1, 27, r) : l(0)
                }
                if (isNaN(e = parseInt("" + e, t))) throw RangeError("Invalid number.");
                return n(1, 27, e = (e = Math.min(Math.max(0, -e - 1), 9007199254740992)).toString(16))
            }

            function b() {
                return s(new Uint8Array([245]))
            }

            function m() {
                return s(new Uint8Array([244]))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.tagged = function(e, t) {
                if (14277111 == e) return r(new Uint8Array([217, 217, 247]), t);
                if (e < 24) return r(new Uint8Array([192 + e]), t); {
                    let t = e <= 255 ? 24 : e <= 65535 ? 25 : e <= 4294967295 ? 26 : 27,
                        r = 2 ** (t - 24);
                    return new Uint8Array([192 + t].concat(e.toString(16).slice(-(2 * r)).padStart(2 * r, "0").match(/../g).map(e => parseInt(e, 16)))).buffer
                }
            }, t.raw = s, t.uSmall = o, t.u8 = u, t.u16 = c, t.u32 = f, t.u64 = l, t.iSmall = h, t.i8 = d, t.i16 = p, t.i32 = g, t.i64 = y, t.number = function(e) {
                if (e >= 0) return e < 24 ? o(e) : e <= 255 ? u(e) : e <= 65535 ? c(e) : e <= 4294967295 ? f(e) : l(e);
                return e >= -24 ? h(e) : e >= -255 ? d(e) : e >= -65535 ? p(e) : e >= -4294967295 ? g(e) : y(e)
            }, t.bytes = function(e) {
                return r(i(2, e.byteLength), e)
            }, t.string = function(e) {
                return a(e)
            }, t.array = function(e) {
                return r(i(4, e.length), ...e)
            }, t.map = function(e, t = !1) {
                e instanceof Map || (e = new Map(Object.entries(e)));
                let n = Array.from(e.entries());
                return t && (n = n.sort(([e], [t]) => e.localeCompare(t))), r(i(5, e.size), ...n.map(([e, t]) => r(a(e), t)))
            }, t.singleFloat = function(e) {
                let t = new Float32Array([e]);
                return r(new Uint8Array([250]), new Uint8Array(t.buffer))
            }, t.doubleFloat = function(e) {
                let t = new Float64Array([e]);
                return r(new Uint8Array([251]), new Uint8Array(t.buffer))
            }, t.bool = function(e) {
                return e ? b() : m()
            }, t.true_ = b, t.false_ = m, t.null_ = function() {
                return s(new Uint8Array([246]))
            }, t.undefined_ = function() {
                return s(new Uint8Array([247]))
            }
        },
        65332: function(e, t, r) {
            "use strict";
            r.d(t, {
                K: function() {
                    return u
                },
                M: function() {
                    return o
                }
            });
            var n = r(53554),
                i = r(91678); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let a = BigInt(0),
                s = BigInt(1);

            function o(e, t) {
                let r = (e, t) => {
                        let r = t.negate();
                        return e ? r : t
                    },
                    n = e => ({
                        windows: Math.ceil(t / e) + 1,
                        windowSize: 2 ** (e - 1)
                    });
                return {
                    constTimeNegate: r,
                    unsafeLadder(t, r) {
                        let n = e.ZERO,
                            i = t;
                        for (; r > a;) r & s && (n = n.add(i)), i = i.double(), r >>= s;
                        return n
                    },
                    precomputeWindow(e, t) {
                        let {
                            windows: r,
                            windowSize: i
                        } = n(t), a = [], s = e, o = s;
                        for (let e = 0; e < r; e++) {
                            o = s, a.push(o);
                            for (let e = 1; e < i; e++) o = o.add(s), a.push(o);
                            s = o.double()
                        }
                        return a
                    },
                    wNAF(t, i, a) {
                        let {
                            windows: o,
                            windowSize: u
                        } = n(t), c = e.ZERO, f = e.BASE, l = BigInt(2 ** t - 1), h = 2 ** t, d = BigInt(t);
                        for (let e = 0; e < o; e++) {
                            let t = e * u,
                                n = Number(a & l);
                            a >>= d, n > u && (n -= h, a += s);
                            let o = t + Math.abs(n) - 1,
                                p = e % 2 != 0,
                                g = n < 0;
                            0 === n ? f = f.add(r(p, i[t])) : c = c.add(r(g, i[o]))
                        }
                        return {
                            p: c,
                            f
                        }
                    },
                    wNAFCached(e, t, r, n) {
                        let i = e._WINDOW_SIZE || 1,
                            a = t.get(e);
                        return a || (a = this.precomputeWindow(e, i), 1 !== i && t.set(e, n(a))), this.wNAF(i, a, r)
                    }
                }
            }

            function u(e) {
                return (0, n.OP)(e.Fp), (0, i.FF)(e, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...(0, n.kK)(e.n, e.nBitLength),
                    ...e,
                    p: e.Fp.ORDER
                })
            }
        },
        53554: function(e, t, r) {
            "use strict";
            r.d(t, {
                DV: function() {
                    return v
                },
                Eg: function() {
                    return m
                },
                OP: function() {
                    return y
                },
                PS: function() {
                    return x
                },
                Q: function() {
                    return b
                },
                Tu: function() {
                    return p
                },
                Us: function() {
                    return B
                },
                gN: function() {
                    return _
                },
                kK: function() {
                    return w
                },
                oA: function() {
                    return h
                },
                wQ: function() {
                    return l
                }
            });
            var n = r(91678); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let i = BigInt(0),
                a = BigInt(1),
                s = BigInt(2),
                o = BigInt(3),
                u = BigInt(4),
                c = BigInt(5),
                f = BigInt(8);

            function l(e, t) {
                let r = e % t;
                return r >= i ? r : t + r
            }

            function h(e, t, r) {
                let n = e;
                for (; t-- > i;) n *= n, n %= r;
                return n
            }

            function d(e, t) {
                if (e === i || t <= i) throw Error(`invert: expected positive integers, got n=${e} mod=${t}`);
                let r = l(e, t),
                    n = t,
                    s = i,
                    o = a,
                    u = a,
                    c = i;
                for (; r !== i;) {
                    let e = n / r,
                        t = n % r,
                        i = s - u * e,
                        a = o - c * e;
                    n = r, r = t, s = u, o = c, u = i, c = a
                }
                if (n !== a) throw Error("invert: does not exist");
                return l(s, t)
            }
            BigInt(9), BigInt(16);
            let p = (e, t) => (l(e, t) & a) === a,
                g = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function y(e) {
                let t = g.reduce((e, t) => (e[t] = "function", e), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger"
                });
                return (0, n.FF)(e, t)
            }

            function b(e, t, r) {
                if (r < i) throw Error("Expected power > 0");
                if (r === i) return e.ONE;
                if (r === a) return t;
                let n = e.ONE,
                    s = t;
                for (; r > i;) r & a && (n = e.mul(n, s)), s = e.sqr(s), r >>= a;
                return n
            }

            function m(e, t) {
                let r = Array(t.length),
                    n = t.reduce((t, n, i) => e.is0(n) ? t : (r[i] = t, e.mul(t, n)), e.ONE),
                    i = e.inv(n);
                return t.reduceRight((t, n, i) => e.is0(n) ? t : (r[i] = e.mul(t, r[i]), e.mul(t, n)), i), r
            }

            function w(e, t) {
                let r = void 0 !== t ? t : e.toString(2).length;
                return {
                    nBitLength: r,
                    nByteLength: Math.ceil(r / 8)
                }
            }

            function _(e, t, r = !1, h = {}) {
                if (e <= i) throw Error(`Expected Field ORDER > 0, got ${e}`);
                let {
                    nBitLength: p,
                    nByteLength: g
                } = w(e, t);
                if (g > 2048) throw Error("Field lengths over 2048 bytes are not supported");
                let y = function(e) {
                        if (e % u === o) {
                            let t = (e + a) / u;
                            return function(e, r) {
                                let n = e.pow(r, t);
                                if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                                return n
                            }
                        }
                        if (e % f === c) {
                            let t = (e - c) / f;
                            return function(e, r) {
                                let n = e.mul(r, s),
                                    i = e.pow(n, t),
                                    a = e.mul(r, i),
                                    o = e.mul(e.mul(a, s), i),
                                    u = e.mul(a, e.sub(o, e.ONE));
                                if (!e.eql(e.sqr(u), r)) throw Error("Cannot find square root");
                                return u
                            }
                        }
                        return function(e) {
                            let t, r, n;
                            let o = (e - a) / s;
                            for (t = e - a, r = 0; t % s === i; t /= s, r++);
                            for (n = s; n < e && function(e, t, r) {
                                    if (r <= i || t < i) throw Error("Expected power/modulo > 0");
                                    if (r === a) return i;
                                    let n = a;
                                    for (; t > i;) t & a && (n = n * e % r), e = e * e % r, t >>= a;
                                    return n
                                }(n, o, e) !== e - a; n++);
                            if (1 === r) {
                                let t = (e + a) / u;
                                return function(e, r) {
                                    let n = e.pow(r, t);
                                    if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                                    return n
                                }
                            }
                            let c = (t + a) / s;
                            return function(e, i) {
                                if (e.pow(i, o) === e.neg(e.ONE)) throw Error("Cannot find square root");
                                let s = r,
                                    u = e.pow(e.mul(e.ONE, n), t),
                                    f = e.pow(i, c),
                                    l = e.pow(i, t);
                                for (; !e.eql(l, e.ONE);) {
                                    if (e.eql(l, e.ZERO)) return e.ZERO;
                                    let t = 1;
                                    for (let r = e.sqr(l); t < s && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                                    let r = e.pow(u, a << BigInt(s - t - 1));
                                    u = e.sqr(r), f = e.mul(f, r), l = e.mul(l, u), s = t
                                }
                                return f
                            }
                        }(e)
                    }(e),
                    _ = Object.freeze({
                        ORDER: e,
                        BITS: p,
                        BYTES: g,
                        MASK: (0, n.dQ)(p),
                        ZERO: i,
                        ONE: a,
                        create: t => l(t, e),
                        isValid: t => {
                            if ("bigint" != typeof t) throw Error(`Invalid field element: expected bigint, got ${typeof t}`);
                            return i <= t && t < e
                        },
                        is0: e => e === i,
                        isOdd: e => (e & a) === a,
                        neg: t => l(-t, e),
                        eql: (e, t) => e === t,
                        sqr: t => l(t * t, e),
                        add: (t, r) => l(t + r, e),
                        sub: (t, r) => l(t - r, e),
                        mul: (t, r) => l(t * r, e),
                        pow: (e, t) => b(_, e, t),
                        div: (t, r) => l(t * d(r, e), e),
                        sqrN: e => e * e,
                        addN: (e, t) => e + t,
                        subN: (e, t) => e - t,
                        mulN: (e, t) => e * t,
                        inv: t => d(t, e),
                        sqrt: h.sqrt || (e => y(_, e)),
                        invertBatch: e => m(_, e),
                        cmov: (e, t, r) => r ? t : e,
                        toBytes: e => r ? (0, n.S5)(e, g) : (0, n.tL)(e, g),
                        fromBytes: e => {
                            if (e.length !== g) throw Error(`Fp.fromBytes: expected ${g}, got ${e.length}`);
                            return r ? (0, n.ty)(e) : (0, n.bytesToNumberBE)(e)
                        }
                    });
                return Object.freeze(_)
            }

            function v(e, t) {
                if (!e.isOdd) throw Error("Field doesn't have isOdd");
                let r = e.sqrt(t);
                return e.isOdd(r) ? e.neg(r) : r
            }

            function E(e) {
                if ("bigint" != typeof e) throw Error("field order must be bigint");
                return Math.ceil(e.toString(2).length / 8)
            }

            function x(e) {
                let t = E(e);
                return t + Math.ceil(t / 2)
            }

            function B(e, t, r = !1) {
                let i = e.length,
                    s = E(t),
                    o = x(t);
                if (i < 16 || i < o || i > 1024) throw Error(`expected ${o}-1024 bytes of input, got ${i}`);
                let u = l(r ? (0, n.bytesToNumberBE)(e) : (0, n.ty)(e), t - a) + a;
                return r ? (0, n.S5)(u, s) : (0, n.tL)(u, s)
            }
        },
        91678: function(e, t, r) {
            "use strict";
            r.d(t, {
                Dd: function() {
                    return v
                },
                FF: function() {
                    return I
                },
                H_: function() {
                    return E
                },
                S5: function() {
                    return b
                },
                _t: function() {
                    return s
                },
                bytesToNumberBE: function() {
                    return p
                },
                ci: function() {
                    return c
                },
                dQ: function() {
                    return x
                },
                eV: function() {
                    return w
                },
                gk: function() {
                    return o
                },
                hexToBytes: function() {
                    return d
                },
                iY: function() {
                    return _
                },
                ql: function() {
                    return m
                },
                tL: function() {
                    return y
                },
                ty: function() {
                    return g
                }
            }); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let n = BigInt(0),
                i = BigInt(1),
                a = BigInt(2);

            function s(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }

            function o(e) {
                if (!s(e)) throw Error("Uint8Array expected")
            }
            let u = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function c(e) {
                o(e);
                let t = "";
                for (let r = 0; r < e.length; r++) t += u[e[r]];
                return t
            }

            function f(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                return BigInt("" === e ? "0" : `0x${e}`)
            }
            let l = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function h(e) {
                return e >= l._0 && e <= l._9 ? e - l._0 : e >= l._A && e <= l._F ? e - (l._A - 10) : e >= l._a && e <= l._f ? e - (l._a - 10) : void 0
            }

            function d(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, i = 0; t < r; t++, i += 2) {
                    let r = h(e.charCodeAt(i)),
                        a = h(e.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === a) throw Error('hex string expected, got non-hex character "' + (e[i] + e[i + 1]) + '" at index ' + i);
                    n[t] = 16 * r + a
                }
                return n
            }

            function p(e) {
                return f(c(e))
            }

            function g(e) {
                return o(e), f(c(Uint8Array.from(e).reverse()))
            }

            function y(e, t) {
                return d(e.toString(16).padStart(2 * t, "0"))
            }

            function b(e, t) {
                return y(e, t).reverse()
            }

            function m(e, t, r) {
                let n;
                if ("string" == typeof t) try {
                        n = d(t)
                    } catch (r) {
                        throw Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`)
                    } else if (s(t)) n = Uint8Array.from(t);
                    else throw Error(`${e} must be hex string or Uint8Array`);
                let i = n.length;
                if ("number" == typeof r && i !== r) throw Error(`${e} expected ${r} bytes, got ${i}`);
                return n
            }

            function w(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    o(n), t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            }

            function _(e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e))
            }

            function v(e) {
                let t;
                for (t = 0; e > n; e >>= i, t += 1);
                return t
            }

            function E(e, t) {
                return e >> BigInt(t) & i
            }
            let x = e => (a << BigInt(e - 1)) - i,
                B = {
                    bigint: e => "bigint" == typeof e,
                    function: e => "function" == typeof e,
                    boolean: e => "boolean" == typeof e,
                    string: e => "string" == typeof e,
                    stringOrUint8Array: e => "string" == typeof e || s(e),
                    isSafeInteger: e => Number.isSafeInteger(e),
                    array: e => Array.isArray(e),
                    field: (e, t) => t.Fp.isValid(e),
                    hash: e => "function" == typeof e && Number.isSafeInteger(e.outputLen)
                };

            function I(e, t, r = {}) {
                let n = (t, r, n) => {
                    let i = B[r];
                    if ("function" != typeof i) throw Error(`Invalid validator "${r}", expected function`);
                    let a = e[t];
                    if ((!n || void 0 !== a) && !i(a, e)) throw Error(`Invalid param ${String(t)}=${a} (${typeof a}), expected ${r}`)
                };
                for (let [e, r] of Object.entries(t)) n(e, r, !1);
                for (let [e, t] of Object.entries(r)) n(e, t, !0);
                return e
            }
        },
        63201: function(e, t, r) {
            "use strict";
            r.d(t, {
                UN: function() {
                    return L
                }
            });
            var n = r(44815);
            let i = BigInt(4294967296 - 1),
                a = BigInt(32);
            var s = {
                    split: function(e, t = !1) {
                        let r = new Uint32Array(e.length),
                            n = new Uint32Array(e.length);
                        for (let s = 0; s < e.length; s++) {
                            let {
                                h: o,
                                l: u
                            } = function(e, t = !1) {
                                return t ? {
                                    h: Number(e & i),
                                    l: Number(e >> a & i)
                                } : {
                                    h: 0 | Number(e >> a & i),
                                    l: 0 | Number(e & i)
                                }
                            }(e[s], t);
                            [r[s], n[s]] = [o, u]
                        }
                        return [r, n]
                    },
                    shrSH: (e, t, r) => e >>> r,
                    shrSL: (e, t, r) => e << 32 - r | t >>> r,
                    rotrSH: (e, t, r) => e >>> r | t << 32 - r,
                    rotrSL: (e, t, r) => e << 32 - r | t >>> r,
                    rotrBH: (e, t, r) => e << 64 - r | t >>> r - 32,
                    rotrBL: (e, t, r) => e >>> r - 32 | t << 64 - r,
                    add: function(e, t, r, n) {
                        let i = (t >>> 0) + (n >>> 0);
                        return {
                            h: e + r + (i / 4294967296 | 0) | 0,
                            l: 0 | i
                        }
                    },
                    add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
                    add3H: (e, t, r, n) => t + r + n + (e / 4294967296 | 0) | 0,
                    add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
                    add4H: (e, t, r, n, i) => t + r + n + i + (e / 4294967296 | 0) | 0,
                    add5H: (e, t, r, n, i, a) => t + r + n + i + a + (e / 4294967296 | 0) | 0,
                    add5L: (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0)
                },
                o = r(68104);
            let [u, c] = s.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e))), f = new Uint32Array(80), l = new Uint32Array(80);
            class h extends n.VR {
                constructor() {
                    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
                }
                get() {
                    let {
                        Ah: e,
                        Al: t,
                        Bh: r,
                        Bl: n,
                        Ch: i,
                        Cl: a,
                        Dh: s,
                        Dl: o,
                        Eh: u,
                        El: c,
                        Fh: f,
                        Fl: l,
                        Gh: h,
                        Gl: d,
                        Hh: p,
                        Hl: g
                    } = this;
                    return [e, t, r, n, i, a, s, o, u, c, f, l, h, d, p, g]
                }
                set(e, t, r, n, i, a, s, o, u, c, f, l, h, d, p, g) {
                    this.Ah = 0 | e, this.Al = 0 | t, this.Bh = 0 | r, this.Bl = 0 | n, this.Ch = 0 | i, this.Cl = 0 | a, this.Dh = 0 | s, this.Dl = 0 | o, this.Eh = 0 | u, this.El = 0 | c, this.Fh = 0 | f, this.Fl = 0 | l, this.Gh = 0 | h, this.Gl = 0 | d, this.Hh = 0 | p, this.Hl = 0 | g
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) f[r] = e.getUint32(t), l[r] = e.getUint32(t += 4);
                    for (let e = 16; e < 80; e++) {
                        let t = 0 | f[e - 15],
                            r = 0 | l[e - 15],
                            n = s.rotrSH(t, r, 1) ^ s.rotrSH(t, r, 8) ^ s.shrSH(t, r, 7),
                            i = s.rotrSL(t, r, 1) ^ s.rotrSL(t, r, 8) ^ s.shrSL(t, r, 7),
                            a = 0 | f[e - 2],
                            o = 0 | l[e - 2],
                            u = s.rotrSH(a, o, 19) ^ s.rotrBH(a, o, 61) ^ s.shrSH(a, o, 6),
                            c = s.rotrSL(a, o, 19) ^ s.rotrBL(a, o, 61) ^ s.shrSL(a, o, 6),
                            h = s.add4L(i, c, l[e - 7], l[e - 16]),
                            d = s.add4H(h, n, u, f[e - 7], f[e - 16]);
                        f[e] = 0 | d, l[e] = 0 | h
                    }
                    let {
                        Ah: r,
                        Al: n,
                        Bh: i,
                        Bl: a,
                        Ch: o,
                        Cl: h,
                        Dh: d,
                        Dl: p,
                        Eh: g,
                        El: y,
                        Fh: b,
                        Fl: m,
                        Gh: w,
                        Gl: _,
                        Hh: v,
                        Hl: E
                    } = this;
                    for (let e = 0; e < 80; e++) {
                        let t = s.rotrSH(g, y, 14) ^ s.rotrSH(g, y, 18) ^ s.rotrBH(g, y, 41),
                            x = s.rotrSL(g, y, 14) ^ s.rotrSL(g, y, 18) ^ s.rotrBL(g, y, 41),
                            B = g & b ^ ~g & w,
                            I = y & m ^ ~y & _,
                            N = s.add5L(E, x, I, c[e], l[e]),
                            T = s.add5H(N, v, t, B, u[e], f[e]),
                            A = 0 | N,
                            O = s.rotrSH(r, n, 28) ^ s.rotrBH(r, n, 34) ^ s.rotrBH(r, n, 39),
                            S = s.rotrSL(r, n, 28) ^ s.rotrBL(r, n, 34) ^ s.rotrBL(r, n, 39),
                            R = r & i ^ r & o ^ i & o,
                            U = n & a ^ n & h ^ a & h;
                        v = 0 | w, E = 0 | _, w = 0 | b, _ = 0 | m, b = 0 | g, m = 0 | y, ({
                            h: g,
                            l: y
                        } = s.add(0 | d, 0 | p, 0 | T, 0 | A)), d = 0 | o, p = 0 | h, o = 0 | i, h = 0 | a, i = 0 | r, a = 0 | n;
                        let F = s.add3L(A, S, U);
                        r = s.add3H(F, T, O, R), n = 0 | F
                    }({
                        h: r,
                        l: n
                    } = s.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)), ({
                        h: i,
                        l: a
                    } = s.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | a)), ({
                        h: o,
                        l: h
                    } = s.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | h)), ({
                        h: d,
                        l: p
                    } = s.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)), ({
                        h: g,
                        l: y
                    } = s.add(0 | this.Eh, 0 | this.El, 0 | g, 0 | y)), ({
                        h: b,
                        l: m
                    } = s.add(0 | this.Fh, 0 | this.Fl, 0 | b, 0 | m)), ({
                        h: w,
                        l: _
                    } = s.add(0 | this.Gh, 0 | this.Gl, 0 | w, 0 | _)), ({
                        h: v,
                        l: E
                    } = s.add(0 | this.Hh, 0 | this.Hl, 0 | v, 0 | E)), this.set(r, n, i, a, o, h, d, p, g, y, b, m, w, _, v, E)
                }
                roundClean() {
                    f.fill(0), l.fill(0)
                }
                destroy() {
                    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                }
            }
            let d = (0, o.hE)(() => new h);
            var p = r(53554),
                g = r(91678),
                y = r(65332); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let b = BigInt(0),
                m = BigInt(1),
                w = BigInt(2),
                _ = BigInt(8),
                v = {
                    zip215: !0
                },
                E = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
                x = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),
                B = BigInt(0),
                I = BigInt(1),
                N = BigInt(2),
                T = BigInt(5),
                A = BigInt(10),
                O = BigInt(20),
                S = BigInt(40),
                R = BigInt(80);

            function U(e, t) {
                let r = (0, p.wQ)(t * t * t, E),
                    n = function(e) {
                        let t = e * e % E * e % E,
                            r = (0, p.oA)(t, N, E) * t % E,
                            n = (0, p.oA)(r, I, E) * e % E,
                            i = (0, p.oA)(n, T, E) * n % E,
                            a = (0, p.oA)(i, A, E) * i % E,
                            s = (0, p.oA)(a, O, E) * a % E,
                            o = (0, p.oA)(s, S, E) * s % E,
                            u = (0, p.oA)(o, R, E) * o % E,
                            c = (0, p.oA)(u, R, E) * o % E,
                            f = (0, p.oA)(c, A, E) * i % E;
                        return {
                            pow_p_5_8: (0, p.oA)(f, N, E) * e % E,
                            b2: t
                        }
                    }(e * (0, p.wQ)(r * r * t, E)).pow_p_5_8,
                    i = (0, p.wQ)(e * r * n, E),
                    a = (0, p.wQ)(t * i * i, E),
                    s = i,
                    o = (0, p.wQ)(i * x, E),
                    u = a === e,
                    c = a === (0, p.wQ)(-e, E),
                    f = a === (0, p.wQ)(-e * x, E);
                return u && (i = s), (c || f) && (i = o), (0, p.Tu)(i, E) && (i = (0, p.wQ)(-i, E)), {
                    isValid: u || c,
                    value: i
                }
            }
            let F = (0, p.gN)(E, void 0, !0),
                P = {
                    a: BigInt(-1),
                    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
                    Fp: F,
                    n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
                    h: BigInt(8),
                    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
                    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
                    hash: d,
                    randomBytes: o.O6,
                    adjustScalarBytes: function(e) {
                        return e[0] &= 248, e[31] &= 127, e[31] |= 64, e
                    },
                    uvRatio: U
                },
                L = function(e) {
                    let t = function(e) {
                            let t = (0, y.K)(e);
                            return g.FF(e, {
                                hash: "function",
                                a: "bigint",
                                d: "bigint",
                                randomBytes: "function"
                            }, {
                                adjustScalarBytes: "function",
                                domain: "function",
                                uvRatio: "function",
                                mapToCurve: "function"
                            }), Object.freeze({ ...t
                            })
                        }(e),
                        {
                            Fp: r,
                            n: n,
                            prehash: i,
                            hash: a,
                            randomBytes: s,
                            nByteLength: o,
                            h: u
                        } = t,
                        c = w << BigInt(8 * o) - m,
                        f = r.create,
                        l = t.uvRatio || ((e, t) => {
                            try {
                                return {
                                    isValid: !0,
                                    value: r.sqrt(e * r.inv(t))
                                }
                            } catch (e) {
                                return {
                                    isValid: !1,
                                    value: b
                                }
                            }
                        }),
                        h = t.adjustScalarBytes || (e => e),
                        d = t.domain || ((e, t, r) => {
                            if (t.length || r) throw Error("Contexts/pre-hash are not supported");
                            return e
                        }),
                        E = e => "bigint" == typeof e && b < e,
                        x = (e, t) => E(e) && E(t) && e < t,
                        B = e => e === b || x(e, c);

                    function I(e, t) {
                        if (x(e, t)) return e;
                        throw Error(`Expected valid scalar < ${t}, got ${typeof e} ${e}`)
                    }

                    function N(e) {
                        return e === b ? e : I(e, n)
                    }
                    let T = new Map;

                    function A(e) {
                        if (!(e instanceof O)) throw Error("ExtendedPoint expected")
                    }
                    class O {
                        constructor(e, t, r, n) {
                            if (this.ex = e, this.ey = t, this.ez = r, this.et = n, !B(e)) throw Error("x required");
                            if (!B(t)) throw Error("y required");
                            if (!B(r)) throw Error("z required");
                            if (!B(n)) throw Error("t required")
                        }
                        get x() {
                            return this.toAffine().x
                        }
                        get y() {
                            return this.toAffine().y
                        }
                        static fromAffine(e) {
                            if (e instanceof O) throw Error("extended point not allowed");
                            let {
                                x: t,
                                y: r
                            } = e || {};
                            if (!B(t) || !B(r)) throw Error("invalid affine point");
                            return new O(t, r, m, f(t * r))
                        }
                        static normalizeZ(e) {
                            let t = r.invertBatch(e.map(e => e.ez));
                            return e.map((e, r) => e.toAffine(t[r])).map(O.fromAffine)
                        }
                        _setWindowSize(e) {
                            this._WINDOW_SIZE = e, T.delete(this)
                        }
                        assertValidity() {
                            let {
                                a: e,
                                d: r
                            } = t;
                            if (this.is0()) throw Error("bad point: ZERO");
                            let {
                                ex: n,
                                ey: i,
                                ez: a,
                                et: s
                            } = this, o = f(n * n), u = f(i * i), c = f(a * a), l = f(c * c), h = f(o * e);
                            if (f(c * f(h + u)) !== f(l + f(r * f(o * u)))) throw Error("bad point: equation left != right (1)");
                            if (f(n * i) !== f(a * s)) throw Error("bad point: equation left != right (2)")
                        }
                        equals(e) {
                            A(e);
                            let {
                                ex: t,
                                ey: r,
                                ez: n
                            } = this, {
                                ex: i,
                                ey: a,
                                ez: s
                            } = e, o = f(t * s), u = f(i * n), c = f(r * s), l = f(a * n);
                            return o === u && c === l
                        }
                        is0() {
                            return this.equals(O.ZERO)
                        }
                        negate() {
                            return new O(f(-this.ex), this.ey, this.ez, f(-this.et))
                        }
                        double() {
                            let {
                                a: e
                            } = t, {
                                ex: r,
                                ey: n,
                                ez: i
                            } = this, a = f(r * r), s = f(n * n), o = f(w * f(i * i)), u = f(e * a), c = r + n, l = f(f(c * c) - a - s), h = u + s, d = h - o, p = u - s, g = f(l * d), y = f(h * p), b = f(l * p);
                            return new O(g, y, f(d * h), b)
                        }
                        add(e) {
                            A(e);
                            let {
                                a: r,
                                d: n
                            } = t, {
                                ex: i,
                                ey: a,
                                ez: s,
                                et: o
                            } = this, {
                                ex: u,
                                ey: c,
                                ez: l,
                                et: h
                            } = e;
                            if (r === BigInt(-1)) {
                                let e = f((a - i) * (c + u)),
                                    t = f((a + i) * (c - u)),
                                    r = f(t - e);
                                if (r === b) return this.double();
                                let n = f(s * w * h),
                                    d = f(o * w * l),
                                    p = d + n,
                                    g = t + e,
                                    y = d - n,
                                    m = f(p * r),
                                    _ = f(g * y),
                                    v = f(p * y);
                                return new O(m, _, f(r * g), v)
                            }
                            let d = f(i * u),
                                p = f(a * c),
                                g = f(o * n * h),
                                y = f(s * l),
                                m = f((i + a) * (u + c) - d - p),
                                _ = y - g,
                                v = y + g,
                                E = f(p - r * d),
                                x = f(m * _),
                                B = f(v * E),
                                I = f(m * E);
                            return new O(x, B, f(_ * v), I)
                        }
                        subtract(e) {
                            return this.add(e.negate())
                        }
                        wNAF(e) {
                            return U.wNAFCached(this, T, e, O.normalizeZ)
                        }
                        multiply(e) {
                            let {
                                p: t,
                                f: r
                            } = this.wNAF(I(e, n));
                            return O.normalizeZ([t, r])[0]
                        }
                        multiplyUnsafe(e) {
                            let t = N(e);
                            return t === b ? R : this.equals(R) || t === m ? this : this.equals(S) ? this.wNAF(t).p : U.unsafeLadder(this, t)
                        }
                        isSmallOrder() {
                            return this.multiplyUnsafe(u).is0()
                        }
                        isTorsionFree() {
                            return U.unsafeLadder(this, n).is0()
                        }
                        toAffine(e) {
                            let {
                                ex: t,
                                ey: n,
                                ez: i
                            } = this, a = this.is0();
                            null == e && (e = a ? _ : r.inv(i));
                            let s = f(t * e),
                                o = f(n * e),
                                u = f(i * e);
                            if (a) return {
                                x: b,
                                y: m
                            };
                            if (u !== m) throw Error("invZ was invalid");
                            return {
                                x: s,
                                y: o
                            }
                        }
                        clearCofactor() {
                            let {
                                h: e
                            } = t;
                            return e === m ? this : this.multiplyUnsafe(e)
                        }
                        static fromHex(e, n = !1) {
                            let {
                                d: i,
                                a
                            } = t, s = r.BYTES, o = (e = (0, g.ql)("pointHex", e, s)).slice(), u = e[s - 1];
                            o[s - 1] = -129 & u;
                            let h = g.ty(o);
                            h === b || (n ? I(h, c) : I(h, r.ORDER));
                            let d = f(h * h),
                                {
                                    isValid: p,
                                    value: y
                                } = l(f(d - m), f(i * d - a));
                            if (!p) throw Error("Point.fromHex: invalid y coordinate");
                            let w = (y & m) === m,
                                _ = (128 & u) != 0;
                            if (!n && y === b && _) throw Error("Point.fromHex: x=0 and x_0=1");
                            return _ !== w && (y = f(-y)), O.fromAffine({
                                x: y,
                                y: h
                            })
                        }
                        static fromPrivateKey(e) {
                            return P(e).point
                        }
                        toRawBytes() {
                            let {
                                x: e,
                                y: t
                            } = this.toAffine(), n = g.S5(t, r.BYTES);
                            return n[n.length - 1] |= e & m ? 128 : 0, n
                        }
                        toHex() {
                            return g.ci(this.toRawBytes())
                        }
                    }
                    O.BASE = new O(t.Gx, t.Gy, m, f(t.Gx * t.Gy)), O.ZERO = new O(b, m, m, b);
                    let {
                        BASE: S,
                        ZERO: R
                    } = O, U = (0, y.M)(O, 8 * o);

                    function F(e) {
                        var t;
                        return t = g.ty(e), (0, p.wQ)(t, n)
                    }

                    function P(e) {
                        e = (0, g.ql)("private key", e, o);
                        let t = (0, g.ql)("hashed private key", a(e), 2 * o),
                            r = h(t.slice(0, o)),
                            n = t.slice(o, 2 * o),
                            i = F(r),
                            s = S.multiply(i),
                            u = s.toRawBytes();
                        return {
                            head: r,
                            prefix: n,
                            scalar: i,
                            point: s,
                            pointBytes: u
                        }
                    }

                    function L(e = new Uint8Array, ...t) {
                        return F(a(d(g.eV(...t), (0, g.ql)("context", e), !!i)))
                    }
                    return S._setWindowSize(8), {
                        CURVE: t,
                        getPublicKey: function(e) {
                            return P(e).pointBytes
                        },
                        sign: function(e, t, a = {}) {
                            var s;
                            e = (0, g.ql)("message", e), i && (e = i(e));
                            let {
                                prefix: u,
                                scalar: c,
                                pointBytes: f
                            } = P(t), l = L(a.context, u, e), h = S.multiply(l).toRawBytes(), d = (s = l + L(a.context, h, f, e) * c, (0, p.wQ)(s, n));
                            N(d);
                            let y = g.eV(h, g.S5(d, r.BYTES));
                            return (0, g.ql)("result", y, 2 * o)
                        },
                        verify: function(e, t, n, a = v) {
                            let s, o, u;
                            let {
                                context: c,
                                zip215: f
                            } = a, l = r.BYTES;
                            e = (0, g.ql)("signature", e, 2 * l), t = (0, g.ql)("message", t), i && (t = i(t));
                            let h = g.ty(e.slice(l, 2 * l));
                            try {
                                s = O.fromHex(n, f), o = O.fromHex(e.slice(0, l), f), u = S.multiplyUnsafe(h)
                            } catch (e) {
                                return !1
                            }
                            if (!f && s.isSmallOrder()) return !1;
                            let d = L(c, o.toRawBytes(), s.toRawBytes(), t);
                            return o.add(s.multiplyUnsafe(d)).subtract(u).clearCofactor().equals(O.ZERO)
                        },
                        ExtendedPoint: O,
                        utils: {
                            getExtendedPublicKey: P,
                            randomPrivateKey: () => s(r.BYTES),
                            precompute: (e = 8, t = O.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t)
                        }
                    }
                }(P);
            ({ ...P
            });
            let k = (F.ORDER + BigInt(3)) / BigInt(8);

            function V(e) {
                if (!(e instanceof H)) throw Error("RistrettoPoint expected")
            }
            F.pow(N, k), F.sqrt(F.neg(F.ONE)), F.ORDER, BigInt(5), BigInt(8), BigInt(486662), (0, p.DV)(F, F.neg(BigInt(486664)));
            let C = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"),
                M = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"),
                j = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"),
                $ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"),
                q = e => U(I, e),
                D = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                G = e => L.CURVE.Fp.create(bytesToNumberLE(e) & D);

            function z(e) {
                let {
                    d: t
                } = L.CURVE, r = L.CURVE.Fp.ORDER, n = L.CURVE.Fp.create, i = n(null * e * e), a = n((i + I) * j), s = BigInt(-1), o = n((s - t * i) * n(i + t)), {
                    isValid: u,
                    value: c
                } = U(a, o), f = n(c * e);
                isNegativeLE(f, r) || (f = n(-f)), u || (c = f), u || (s = i);
                let l = n(s * (i - I) * $ - o),
                    h = c * c,
                    d = n((c + c) * o),
                    p = n(l * C),
                    g = n(I - h),
                    y = n(I + h);
                return new L.ExtendedPoint(n(d * y), n(g * p), n(p * y), n(d * g))
            }
            class H {
                constructor(e) {
                    this.ep = e
                }
                static fromAffine(e) {
                    return new H(L.ExtendedPoint.fromAffine(e))
                }
                static hashToCurve(e) {
                    let t = z(G((e = ensureBytes("ristrettoHash", e, 64)).slice(0, 32))),
                        r = z(G(e.slice(32, 64)));
                    return new H(t.add(r))
                }
                static fromHex(e) {
                    e = ensureBytes("ristrettoHex", e, 32);
                    let {
                        a: t,
                        d: r
                    } = L.CURVE, n = L.CURVE.Fp.ORDER, i = L.CURVE.Fp.create, a = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", s = G(e);
                    if (!equalBytes(numberToBytesLE(s, 32), e) || isNegativeLE(s, n)) throw Error(a);
                    let o = i(s * s),
                        u = i(I + t * o),
                        c = i(I - t * o),
                        f = i(u * u),
                        l = i(c * c),
                        h = i(t * r * f - l),
                        {
                            isValid: d,
                            value: p
                        } = q(i(h * l)),
                        g = i(p * c),
                        y = i(p * g * h),
                        b = i((s + s) * g);
                    isNegativeLE(b, n) && (b = i(-b));
                    let m = i(u * y),
                        w = i(b * m);
                    if (!d || isNegativeLE(w, n) || m === B) throw Error(a);
                    return new H(new L.ExtendedPoint(b, m, I, w))
                }
                toRawBytes() {
                    let e, {
                            ex: t,
                            ey: r,
                            ez: n,
                            et: i
                        } = this.ep,
                        a = L.CURVE.Fp.ORDER,
                        s = L.CURVE.Fp.create,
                        o = s(s(n + r) * s(n - r)),
                        u = s(t * r),
                        c = s(u * u),
                        {
                            value: f
                        } = q(s(o * c)),
                        l = s(f * o),
                        h = s(f * u),
                        d = s(l * h * i);
                    if (isNegativeLE(i * d, a)) {
                        let n = s(null * r),
                            i = s(null * t);
                        t = n, r = i, e = s(l * M)
                    } else e = h;
                    isNegativeLE(t * d, a) && (r = s(-r));
                    let p = s((n - r) * e);
                    return isNegativeLE(p, a) && (p = s(-p)), numberToBytesLE(p, 32)
                }
                toHex() {
                    return bytesToHex(this.toRawBytes())
                }
                toString() {
                    return this.toHex()
                }
                equals(e) {
                    V(e);
                    let {
                        ex: t,
                        ey: r
                    } = this.ep, {
                        ex: n,
                        ey: i
                    } = e.ep, a = L.CURVE.Fp.create, s = a(t * i) === a(r * n), o = a(r * i) === a(t * n);
                    return s || o
                }
                add(e) {
                    return V(e), new H(this.ep.add(e.ep))
                }
                subtract(e) {
                    return V(e), new H(this.ep.subtract(e.ep))
                }
                multiply(e) {
                    return new H(this.ep.multiply(e))
                }
                multiplyUnsafe(e) {
                    return new H(this.ep.multiplyUnsafe(e))
                }
                double() {
                    return new H(this.ep.double())
                }
                negate() {
                    return new H(this.ep.negate())
                }
            }
        },
        65376: function(e, t, r) {
            "use strict";

            function n(e, ...t) {
                if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
            }

            function i(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function a(e, t) {
                n(e);
                let r = t.outputLen;
                if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            r.d(t, {
                Gg: function() {
                    return i
                },
                J8: function() {
                    return a
                },
                aI: function() {
                    return n
                }
            })
        },
        44815: function(e, t, r) {
            "use strict";
            r.d(t, {
                VR: function() {
                    return o
                },
                bc: function() {
                    return a
                },
                l3: function() {
                    return s
                }
            });
            var n = r(65376),
                i = r(68104);
            let a = (e, t, r) => e & t ^ ~e & r,
                s = (e, t, r) => e & t ^ e & r ^ t & r;
            class o extends i.kb {
                constructor(e, t, r, n) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, i.GL)(this.buffer)
                }
                update(e) {
                    (0, n.Gg)(this);
                    let {
                        view: t,
                        buffer: r,
                        blockLen: a
                    } = this, s = (e = (0, i.O0)(e)).length;
                    for (let n = 0; n < s;) {
                        let o = Math.min(a - this.pos, s - n);
                        if (o === a) {
                            let t = (0, i.GL)(e);
                            for (; a <= s - n; n += a) this.process(t, n);
                            continue
                        }
                        r.set(e.subarray(n, n + o), this.pos), this.pos += o, n += o, this.pos === a && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, n.Gg)(this), (0, n.J8)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: r,
                        blockLen: a,
                        isLE: s
                    } = this, {
                        pos: o
                    } = this;
                    t[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > a - o && (this.process(r, 0), o = 0);
                    for (let e = o; e < a; e++) t[e] = 0;
                    ! function(e, t, r, n) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, n);
                        let i = BigInt(32),
                            a = BigInt(4294967295),
                            s = Number(r >> i & a),
                            o = Number(r & a),
                            u = n ? 4 : 0,
                            c = n ? 0 : 4;
                        e.setUint32(t + u, s, n), e.setUint32(t + c, o, n)
                    }(r, a - 8, BigInt(8 * this.length), s), this.process(r, 0);
                    let u = (0, i.GL)(e),
                        c = this.outputLen;
                    if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let f = c / 4,
                        l = this.get();
                    if (f > l.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < f; e++) u.setUint32(4 * e, l[e], s)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let r = e.slice(0, t);
                    return this.destroy(), r
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: r,
                        length: n,
                        finished: i,
                        destroyed: a,
                        pos: s
                    } = this;
                    return e.length = n, e.pos = s, e.finished = i, e.destroyed = a, n % t && e.buffer.set(r), e
                }
            }
        },
        65530: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return f
                },
                g: function() {
                    return l
                }
            });
            var n = r(44815),
                i = r(68104);
            let a = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                s = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                o = new Uint32Array(64);
            class u extends n.VR {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | s[0], this.B = 0 | s[1], this.C = 0 | s[2], this.D = 0 | s[3], this.E = 0 | s[4], this.F = 0 | s[5], this.G = 0 | s[6], this.H = 0 | s[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: r,
                        D: n,
                        E: i,
                        F: a,
                        G: s,
                        H: o
                    } = this;
                    return [e, t, r, n, i, a, s, o]
                }
                set(e, t, r, n, i, a, s, o) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | a, this.G = 0 | s, this.H = 0 | o
                }
                process(e, t) {
                    for (let r = 0; r < 16; r++, t += 4) o[r] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = o[e - 15],
                            r = o[e - 2],
                            n = (0, i.np)(t, 7) ^ (0, i.np)(t, 18) ^ t >>> 3,
                            a = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ r >>> 10;
                        o[e] = a + o[e - 7] + n + o[e - 16] | 0
                    }
                    let {
                        A: r,
                        B: s,
                        C: u,
                        D: c,
                        E: f,
                        F: l,
                        G: h,
                        H: d
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = d + ((0, i.np)(f, 6) ^ (0, i.np)(f, 11) ^ (0, i.np)(f, 25)) + (0, n.bc)(f, l, h) + a[e] + o[e] | 0,
                            p = ((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) + (0, n.l3)(r, s, u) | 0;
                        d = h, h = l, l = f, f = c + t | 0, c = u, u = s, s = r, r = t + p | 0
                    }
                    r = r + this.A | 0, s = s + this.B | 0, u = u + this.C | 0, c = c + this.D | 0, f = f + this.E | 0, l = l + this.F | 0, h = h + this.G | 0, d = d + this.H | 0, this.set(r, s, u, c, f, l, h, d)
                }
                roundClean() {
                    o.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            class c extends u {
                constructor() {
                    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28
                }
            }
            let f = (0, i.hE)(() => new u),
                l = (0, i.hE)(() => new c)
        },
        68104: function(e, t, r) {
            "use strict";
            r.d(t, {
                kb: function() {
                    return f
                },
                eV: function() {
                    return c
                },
                GL: function() {
                    return a
                },
                O6: function() {
                    return h
                },
                np: function() {
                    return s
                },
                O0: function() {
                    return u
                },
                iY: function() {
                    return o
                },
                hE: function() {
                    return l
                }
            });
            let n = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;
            var i = r(65376);
            let a = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
                s = (e, t) => e << 32 - t | e >>> t;

            function o(e) {
                if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                return new Uint8Array(new TextEncoder().encode(e))
            }

            function u(e) {
                return "string" == typeof e && (e = o(e)), (0, i.aI)(e), e
            }

            function c(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    (0, i.aI)(n), t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let i = e[t];
                    r.set(i, n), n += i.length
                }
                return r
            }
            new Uint8Array(new Uint32Array([287454020]).buffer)[0];
            class f {
                clone() {
                    return this._cloneInto()
                }
            }

            function l(e) {
                let t = t => e().update(u(t)).digest(),
                    r = e();
                return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
            }

            function h(e = 32) {
                if (n && "function" == typeof n.getRandomValues) return n.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        }
    }
]);