"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7200], {
        57389: function(e, t, r) {
            r.r(t), r.d(t, {
                AuthClient: function() {
                    return T
                },
                ERROR_USER_INTERRUPT: function() {
                    return D
                },
                IdbKeyVal: function() {
                    return g
                },
                IdbStorage: function() {
                    return I
                },
                IdleManager: function() {
                    return s
                },
                KEY_STORAGE_DELEGATION: function() {
                    return m
                },
                KEY_STORAGE_KEY: function() {
                    return _
                },
                LocalStorage: function() {
                    return E
                }
            });
            var n, i = r(20392),
                o = r(64245);
            let a = ["mousedown", "mousemove", "keydown", "touchstart", "wheel"];
            class s {
                constructor(e = {}) {
                    var t;
                    this.callbacks = [], this.idleTimeout = 6e5, this.timeoutID = void 0;
                    let {
                        onIdle: r,
                        idleTimeout: n = 6e5
                    } = e || {};
                    this.callbacks = r ? [r] : [], this.idleTimeout = n;
                    let i = this._resetTimer.bind(this);
                    if (window.addEventListener("load", i, !0), a.forEach(function(e) {
                            document.addEventListener(e, i, !0)
                        }), null == e ? void 0 : e.captureScroll) {
                        let r = ((e, t) => {
                            let r;
                            return (...n) => {
                                let i = this;
                                clearTimeout(r), r = window.setTimeout(function() {
                                    r = void 0, e.apply(i, n)
                                }, t)
                            }
                        })(i, null !== (t = null == e ? void 0 : e.scrollDebounce) && void 0 !== t ? t : 100);
                        window.addEventListener("scroll", r, !0)
                    }
                    i()
                }
                static create(e = {}) {
                    return new this(e)
                }
                registerCallback(e) {
                    this.callbacks.push(e)
                }
                exit() {
                    clearTimeout(this.timeoutID), window.removeEventListener("load", this._resetTimer, !0);
                    let e = this._resetTimer.bind(this);
                    a.forEach(function(t) {
                        document.removeEventListener(t, e, !0)
                    }), this.callbacks.forEach(e => e())
                }
                _resetTimer() {
                    let e = this.exit.bind(this);
                    window.clearTimeout(this.timeoutID), this.timeoutID = window.setTimeout(e, this.idleTimeout)
                }
            }
            var l = r(6512);
            let u = "auth-client-db",
                c = "ic-keyval",
                d = async (e = u, t = c, r) => (b && (null == localStorage ? void 0 : localStorage.getItem(m)) && (localStorage.removeItem(m), localStorage.removeItem(_)), await (0, l.openDB)(e, r, {
                    upgrade: e => {
                        e.objectStoreNames, e.objectStoreNames.contains(t) && e.clear(t), e.createObjectStore(t)
                    }
                }));
            async function f(e, t, r) {
                return await e.get(t, r)
            }
            async function y(e, t, r, n) {
                return await e.put(t, n, r)
            }
            async function h(e, t, r) {
                return await e.delete(t, r)
            }
            class g {
                constructor(e, t) {
                    this._db = e, this._storeName = t
                }
                static async create(e) {
                    let {
                        dbName: t = u,
                        storeName: r = c,
                        version: n = w
                    } = null != e ? e : {};
                    return new g(await d(t, r, n), r)
                }
                async set(e, t) {
                    return await y(this._db, this._storeName, e, t)
                }
                async get(e) {
                    var t;
                    return null !== (t = await f(this._db, this._storeName, e)) && void 0 !== t ? t : null
                }
                async remove(e) {
                    return await h(this._db, this._storeName, e)
                }
            }
            var p = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                v = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };
            let _ = "identity",
                m = "delegation",
                w = 1,
                b = "undefined" != typeof window;
            class E {
                constructor(e = "ic-", t) {
                    this.prefix = e, this._localStorage = t
                }
                get(e) {
                    return Promise.resolve(this._getLocalStorage().getItem(this.prefix + e))
                }
                set(e, t) {
                    return this._getLocalStorage().setItem(this.prefix + e, t), Promise.resolve()
                }
                remove(e) {
                    return this._getLocalStorage().removeItem(this.prefix + e), Promise.resolve()
                }
                _getLocalStorage() {
                    if (this._localStorage) return this._localStorage;
                    let e = "undefined" == typeof window ? void 0 === r.g ? "undefined" == typeof self ? void 0 : self.localStorage : r.g.localStorage : window.localStorage;
                    if (!e) throw Error("Could not find local storage.");
                    return e
                }
            }
            class I {
                constructor(e) {
                    n.set(this, void 0), p(this, n, null != e ? e : {}, "f")
                }
                get _db() {
                    return new Promise(e => {
                        if (this.initializedDb) {
                            e(this.initializedDb);
                            return
                        }
                        g.create(v(this, n, "f")).then(t => {
                            this.initializedDb = t, e(t)
                        })
                    })
                }
                async get(e) {
                    let t = await this._db;
                    return await t.get(e)
                }
                async set(e, t) {
                    let r = await this._db;
                    await r.set(e, t)
                }
                async remove(e) {
                    let t = await this._db;
                    await t.remove(e)
                }
            }
            n = new WeakMap;
            let O = "ECDSA",
                S = "Ed25519",
                D = "UserInterrupt";
            class T {
                constructor(e, t, r, n, i, o, a, s) {
                    this._identity = e, this._key = t, this._chain = r, this._storage = n, this.idleManager = i, this._createOptions = o, this._idpWindow = a, this._eventHandler = s, this._registerDefaultIdleCallback()
                }
                static async create(e = {}) {
                    var t, r, n;
                    let a;
                    let l = null !== (t = e.storage) && void 0 !== t ? t : new I,
                        u = null !== (r = e.keyType) && void 0 !== r ? r : O,
                        c = null;
                    if (e.identity) c = e.identity;
                    else {
                        let e = await l.get(_);
                        if (!e && b) try {
                            let t = new E,
                                r = await t.get(m),
                                n = await t.get(_);
                            r && n && u === O && (console.log("Discovered an identity stored in localstorage. Migrating to IndexedDB"), await l.set(m, r), await l.set(_, n), e = r, await t.remove(m), await t.remove(_))
                        } catch (e) {
                            console.error("error while attempting to recover localstorage: " + e)
                        }
                        if (e) try {
                            "object" == typeof e ? c = u === S && "string" == typeof e ? await o.Ed25519KeyIdentity.fromJSON(e) : await o.ECDSAKeyIdentity.fromKeyPair(e) : "string" == typeof e && (c = o.Ed25519KeyIdentity.fromJSON(e))
                        } catch (e) {}
                    }
                    let d = new i.AnonymousIdentity,
                        f = null;
                    if (c) try {
                        let t = await l.get(m);
                        if ("object" == typeof t && null !== t) throw Error("Delegation chain is incorrectly stored. A delegation chain should be stored as a string.");
                        e.identity ? d = e.identity : t && (f = o.DelegationChain.fromJSON(t), (0, o.isDelegationValid)(f) ? d = "toDer" in c ? o.PartialDelegationIdentity.fromDelegation(c, f) : o.DelegationIdentity.fromDelegation(c, f) : (await P(l), c = null))
                    } catch (e) {
                        console.error(e), await P(l), c = null
                    }
                    return (null === (n = e.idleOptions) || void 0 === n ? void 0 : n.disableIdle) ? a = void 0 : (f || e.identity) && (a = s.create(e.idleOptions)), c || (u === S ? (c = await o.Ed25519KeyIdentity.generate(), await l.set(_, JSON.stringify(c.toJSON()))) : (e.storage && u === O && console.warn(`You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${S}' as the key type, as it can serialize to a string`), c = await o.ECDSAKeyIdentity.generate(), await l.set(_, c.getKeyPair()))), new this(d, c, f, l, a, e)
                }
                _registerDefaultIdleCallback() {
                    var e, t;
                    let r = null === (e = this._createOptions) || void 0 === e ? void 0 : e.idleOptions;
                    (null == r ? void 0 : r.onIdle) || (null == r ? void 0 : r.disableDefaultIdleCallback) || null === (t = this.idleManager) || void 0 === t || t.registerCallback(() => {
                        this.logout(), location.reload()
                    })
                }
                async _handleSuccess(e, t) {
                    var r, n;
                    let i = e.delegations.map(e => ({
                            delegation: new o.Delegation(e.delegation.pubkey, e.delegation.expiration, e.delegation.targets),
                            signature: e.signature.buffer
                        })),
                        a = o.DelegationChain.fromDelegations(i, e.userPublicKey.buffer),
                        l = this._key;
                    if (!l) return;
                    this._chain = a, "toDer" in l ? this._identity = o.PartialDelegationIdentity.fromDelegation(l, this._chain) : this._identity = o.DelegationIdentity.fromDelegation(l, this._chain), null === (r = this._idpWindow) || void 0 === r || r.close();
                    let u = null === (n = this._createOptions) || void 0 === n ? void 0 : n.idleOptions;
                    this.idleManager || (null == u ? void 0 : u.disableIdle) || (this.idleManager = s.create(u), this._registerDefaultIdleCallback()), this._removeEventListener(), delete this._idpWindow, this._chain && await this._storage.set(m, JSON.stringify(this._chain.toJSON())), null == t || t(e)
                }
                getIdentity() {
                    return this._identity
                }
                async isAuthenticated() {
                    return !this.getIdentity().getPrincipal().isAnonymous() && null !== this._chain
                }
                async login(e) {
                    var t, r, n, i;
                    let o = BigInt(8) * BigInt(36e11),
                        a = new URL((null === (t = null == e ? void 0 : e.identityProvider) || void 0 === t ? void 0 : t.toString()) || "https://identity.ic0.app");
                    a.hash = "#authorize", null === (r = this._idpWindow) || void 0 === r || r.close(), this._removeEventListener(), this._eventHandler = this._getEventHandler(a, Object.assign({
                        maxTimeToLive: null !== (n = null == e ? void 0 : e.maxTimeToLive) && void 0 !== n ? n : o
                    }, e)), window.addEventListener("message", this._eventHandler), this._idpWindow = null !== (i = window.open(a.toString(), "idpWindow", null == e ? void 0 : e.windowOpenerFeatures)) && void 0 !== i ? i : void 0;
                    let s = () => {
                        this._idpWindow && (this._idpWindow.closed ? this._handleFailure(D, null == e ? void 0 : e.onError) : setTimeout(s, 500))
                    };
                    s()
                }
                _getEventHandler(e, t) {
                    return async r => {
                        var n, i, o;
                        if (r.origin !== e.origin) {
                            console.warn(`WARNING: expected origin '${e.origin}', got '${r.origin}' (ignoring)`);
                            return
                        }
                        let a = r.data;
                        switch (a.kind) {
                            case "authorize-ready":
                                {
                                    let r = Object.assign({
                                        kind: "authorize-client",
                                        sessionPublicKey: new Uint8Array(null === (n = this._key) || void 0 === n ? void 0 : n.getPublicKey().toDer()),
                                        maxTimeToLive: null == t ? void 0 : t.maxTimeToLive,
                                        allowPinAuthentication: null == t ? void 0 : t.allowPinAuthentication,
                                        derivationOrigin: null === (i = null == t ? void 0 : t.derivationOrigin) || void 0 === i ? void 0 : i.toString()
                                    }, null == t ? void 0 : t.customValues);null === (o = this._idpWindow) || void 0 === o || o.postMessage(r, e.origin);
                                    break
                                }
                            case "authorize-client-success":
                                try {
                                    await this._handleSuccess(a, null == t ? void 0 : t.onSuccess)
                                } catch (e) {
                                    this._handleFailure(e.message, null == t ? void 0 : t.onError)
                                }
                                break;
                            case "authorize-client-failure":
                                this._handleFailure(a.text, null == t ? void 0 : t.onError)
                        }
                    }
                }
                _handleFailure(e, t) {
                    var r;
                    null === (r = this._idpWindow) || void 0 === r || r.close(), null == t || t(e), this._removeEventListener(), delete this._idpWindow
                }
                _removeEventListener() {
                    this._eventHandler && window.removeEventListener("message", this._eventHandler), this._eventHandler = void 0
                }
                async logout(e = {}) {
                    if (await P(this._storage), this._identity = new i.AnonymousIdentity, this._chain = null, e.returnTo) try {
                        window.history.pushState({}, "", e.returnTo)
                    } catch (t) {
                        window.location.href = e.returnTo
                    }
                }
            }
            async function P(e) {
                await e.remove(_), await e.remove(m), await e.remove("iv")
            }
        },
        64245: function(e, t, r) {
            r.r(t), r.d(t, {
                CryptoError: function() {
                    return _
                },
                DER_COSE_OID: function() {
                    return d.DER_COSE_OID
                },
                Delegation: function() {
                    return N
                },
                DelegationChain: function() {
                    return x
                },
                DelegationIdentity: function() {
                    return k
                },
                ECDSAKeyIdentity: function() {
                    return w
                },
                ED25519_OID: function() {
                    return d.ED25519_OID
                },
                Ed25519KeyIdentity: function() {
                    return v
                },
                Ed25519PublicKey: function() {
                    return p
                },
                PartialDelegationIdentity: function() {
                    return R
                },
                PartialIdentity: function() {
                    return S
                },
                Secp256k1KeyIdentity: function() {
                    return W
                },
                WebAuthnIdentity: function() {
                    return F
                },
                isDelegationValid: function() {
                    return M
                },
                unwrapDER: function() {
                    return d.unwrapDER
                },
                wrapDER: function() {
                    return d.wrapDER
                }
            });
            var n, i, o, a, s, l, u, c, d = r(20392),
                f = r(63201),
                y = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                h = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };

            function g(e) {
                return null !== e && "object" == typeof e
            }
            class p {
                constructor(e) {
                    if (i.set(this, void 0), o.set(this, void 0), e.byteLength !== p.RAW_KEY_LENGTH) throw Error("An Ed25519 public key must be exactly 32bytes long");
                    y(this, i, e, "f"), y(this, o, p.derEncode(e), "f")
                }
                static from(e) {
                    if ("string" == typeof e) {
                        let t = (0, d.fromHex)(e);
                        return this.fromRaw(t)
                    }
                    if (g(e)) {
                        if (g(e) && Object.hasOwnProperty.call(e, "__derEncodedPublicKey__")) return this.fromDer(e);
                        if (ArrayBuffer.isView(e)) return this.fromRaw((0, d.bufFromBufLike)(e.buffer));
                        if (e instanceof ArrayBuffer) return this.fromRaw(e);
                        if ("rawKey" in e) return this.fromRaw(e.rawKey);
                        else if ("derKey" in e) return this.fromDer(e.derKey);
                        else if ("toDer" in e) return this.fromDer(e.toDer())
                    }
                    throw Error("Cannot construct Ed25519PublicKey from the provided key.")
                }
                static fromRaw(e) {
                    return new p(e)
                }
                static fromDer(e) {
                    return new p(this.derDecode(e))
                }
                static derEncode(e) {
                    let t = (0, d.wrapDER)(e, d.ED25519_OID).buffer;
                    return t.__derEncodedPublicKey__ = void 0, t
                }
                static derDecode(e) {
                    let t = (0, d.unwrapDER)(e, d.ED25519_OID);
                    if (t.length !== this.RAW_KEY_LENGTH) throw Error("An Ed25519 public key must be exactly 32bytes long");
                    return t
                }
                get rawKey() {
                    return h(this, i, "f")
                }
                get derKey() {
                    return h(this, o, "f")
                }
                toDer() {
                    return this.derKey
                }
                toRaw() {
                    return this.rawKey
                }
            }
            i = new WeakMap, o = new WeakMap, p.RAW_KEY_LENGTH = 32;
            class v extends d.SignIdentity {
                constructor(e, t) {
                    super(), a.set(this, void 0), s.set(this, void 0), y(this, a, p.from(e), "f"), y(this, s, new Uint8Array(t), "f")
                }
                static generate(e) {
                    if (e && 32 !== e.length) throw Error("Ed25519 Seed needs to be 32 bytes long.");
                    e || (e = f.UN.utils.randomPrivateKey()), (0, d.bufEquals)(e, new Uint8Array(Array(32).fill(0))) && console.warn("Seed is all zeros. This is not a secure seed. Please provide a seed with sufficient entropy if this is a production environment.");
                    let t = new Uint8Array(32);
                    for (let r = 0; r < 32; r++) t[r] = new Uint8Array(e)[r];
                    let r = f.UN.getPublicKey(t);
                    return v.fromKeyPair(r, t)
                }
                static fromParsedJson(e) {
                    let [t, r] = e;
                    return new v(p.fromDer((0, d.fromHex)(t)), (0, d.fromHex)(r))
                }
                static fromJSON(e) {
                    let t = JSON.parse(e);
                    if (Array.isArray(t)) {
                        if ("string" == typeof t[0] && "string" == typeof t[1]) return this.fromParsedJson([t[0], t[1]]);
                        throw Error("Deserialization error: JSON must have at least 2 items.")
                    }
                    throw Error(`Deserialization error: Invalid JSON type for string: ${JSON.stringify(e)}`)
                }
                static fromKeyPair(e, t) {
                    return new v(p.fromRaw(e), t)
                }
                static fromSecretKey(e) {
                    let t = f.UN.getPublicKey(new Uint8Array(e));
                    return v.fromKeyPair(t, e)
                }
                toJSON() {
                    return [(0, d.toHex)(h(this, a, "f").toDer()), (0, d.toHex)(h(this, s, "f"))]
                }
                getKeyPair() {
                    return {
                        secretKey: h(this, s, "f"),
                        publicKey: h(this, a, "f")
                    }
                }
                getPublicKey() {
                    return h(this, a, "f")
                }
                async sign(e) {
                    let t = new Uint8Array(e),
                        r = (0, d.uint8ToBuf)(f.UN.sign(t, h(this, s, "f").slice(0, 32)));
                    return Object.defineProperty(r, "__signature__", {
                        enumerable: !1,
                        value: void 0
                    }), r
                }
                static verify(e, t, r) {
                    let [n, i, o] = [e, t, r].map(e => ("string" == typeof e && (e = (0, d.fromHex)(e)), e instanceof Uint8Array && (e = e.buffer), new Uint8Array(e)));
                    return f.UN.verify(i, n, o)
                }
            }
            a = new WeakMap, s = new WeakMap;
            class _ extends Error {
                constructor(e) {
                    super(e), this.message = e, Object.setPrototypeOf(this, _.prototype)
                }
            }

            function m(e) {
                if (void 0 !== r.g && r.g.crypto && r.g.crypto.subtle) return r.g.crypto.subtle;
                if (e) return e;
                if ("undefined" != typeof crypto && crypto.subtle) return crypto.subtle;
                throw new _("Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto")
            }
            class w extends d.SignIdentity {
                constructor(e, t, r) {
                    super(), this._keyPair = e, this._derKey = t, this._subtleCrypto = r
                }
                static async generate(e) {
                    let {
                        extractable: t = !1,
                        keyUsages: r = ["sign", "verify"],
                        subtleCrypto: n
                    } = null != e ? e : {}, i = m(n), o = await i.generateKey({
                        name: "ECDSA",
                        namedCurve: "P-256"
                    }, t, r), a = await i.exportKey("spki", o.publicKey);
                    return new this(o, a, i)
                }
                static async fromKeyPair(e, t) {
                    let r = m(t),
                        n = await r.exportKey("spki", e.publicKey);
                    return new w(e, n, r)
                }
                getKeyPair() {
                    return this._keyPair
                }
                getPublicKey() {
                    let e = this._derKey,
                        t = Object.create(this._keyPair.publicKey);
                    return t.toDer = function() {
                        return e
                    }, t
                }
                async sign(e) {
                    return this._keyPair.privateKey, await this._subtleCrypto.sign({
                        name: "ECDSA",
                        hash: {
                            name: "SHA-256"
                        }
                    }, this._keyPair.privateKey, e)
                }
            }
            var b = r(29711),
                E = r(2061),
                I = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                O = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };
            class S {
                constructor(e) {
                    l.set(this, void 0), I(this, l, e, "f")
                }
                get rawKey() {
                    return O(this, l, "f").rawKey
                }
                get derKey() {
                    return O(this, l, "f").derKey
                }
                toDer() {
                    return O(this, l, "f").toDer()
                }
                getPublicKey() {
                    return O(this, l, "f")
                }
                getPrincipal() {
                    return b.Principal.from(O(this, l, "f").rawKey)
                }
                transformRequest() {
                    return Promise.reject("Not implemented. You are attempting to use a partial identity to sign calls, but this identity only has access to the public key.To sign calls, use a DelegationIdentity instead.")
                }
            }
            l = new WeakMap;
            var D = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                T = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                },
                P = function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                    return r
                };
            let A = new TextEncoder().encode("\x1aic-request-auth-delegation"),
                j = new TextEncoder().encode("\nic-request");

            function K(e) {
                if ("string" != typeof e || e.length < 64) throw Error("Invalid public key.");
                return (0, d.fromHex)(e)
            }
            class N {
                constructor(e, t, r) {
                    this.pubkey = e, this.expiration = t, this.targets = r
                }
                toCBOR() {
                    return E.value.map(Object.assign({
                        pubkey: E.value.bytes(this.pubkey),
                        expiration: E.value.u64(this.expiration.toString(16), 16)
                    }, this.targets && {
                        targets: E.value.array(this.targets.map(e => E.value.bytes(e.toUint8Array())))
                    }))
                }
                toJSON() {
                    return Object.assign({
                        expiration: this.expiration.toString(16),
                        pubkey: (0, d.toHex)(this.pubkey)
                    }, this.targets && {
                        targets: this.targets.map(e => e.toHex())
                    })
                }
            }
            async function C(e, t, r, n) {
                let i = new N(t.toDer(), BigInt(+r) * BigInt(1e6), n),
                    o = new Uint8Array([...A, ...new Uint8Array((0, d.requestIdOf)(i))]);
                return {
                    delegation: i,
                    signature: await e.sign(o)
                }
            }
            class x {
                constructor(e, t) {
                    this.delegations = e, this.publicKey = t
                }
                static async create(e, t, r = new Date(Date.now() + 9e5), n = {}) {
                    var i, o;
                    let a = await C(e, t, r, n.targets);
                    return new x([...(null === (i = n.previous) || void 0 === i ? void 0 : i.delegations) || [], a], (null === (o = n.previous) || void 0 === o ? void 0 : o.publicKey) || e.getPublicKey().toDer())
                }
                static fromJSON(e) {
                    let {
                        publicKey: t,
                        delegations: r
                    } = "string" == typeof e ? JSON.parse(e) : e;
                    if (!Array.isArray(r)) throw Error("Invalid delegations.");
                    return new this(r.map(e => {
                        let {
                            delegation: t,
                            signature: r
                        } = e, {
                            pubkey: n,
                            expiration: i,
                            targets: o
                        } = t;
                        if (void 0 !== o && !Array.isArray(o)) throw Error("Invalid targets.");
                        return {
                            delegation: new N(K(n), BigInt("0x" + i), o && o.map(e => {
                                if ("string" != typeof e) throw Error("Invalid target.");
                                return b.Principal.fromHex(e)
                            })),
                            signature: K(r)
                        }
                    }), K(t))
                }
                static fromDelegations(e, t) {
                    return new this(e, t)
                }
                toJSON() {
                    return {
                        delegations: this.delegations.map(e => {
                            let {
                                delegation: t,
                                signature: r
                            } = e, {
                                targets: n
                            } = t;
                            return {
                                delegation: Object.assign({
                                    expiration: t.expiration.toString(16),
                                    pubkey: (0, d.toHex)(t.pubkey)
                                }, n && {
                                    targets: n.map(e => e.toHex())
                                }),
                                signature: (0, d.toHex)(r)
                            }
                        }),
                        publicKey: (0, d.toHex)(this.publicKey)
                    }
                }
            }
            class k extends d.SignIdentity {
                constructor(e, t) {
                    super(), this._inner = e, this._delegation = t
                }
                static fromDelegation(e, t) {
                    return new this(e, t)
                }
                getDelegation() {
                    return this._delegation
                }
                getPublicKey() {
                    return {
                        derKey: this._delegation.publicKey,
                        toDer: () => this._delegation.publicKey
                    }
                }
                sign(e) {
                    return this._inner.sign(e)
                }
                async transformRequest(e) {
                    let {
                        body: t
                    } = e, r = P(e, ["body"]), n = await (0, d.requestIdOf)(t);
                    return Object.assign(Object.assign({}, r), {
                        body: {
                            content: t,
                            sender_sig: await this.sign(new Uint8Array([...j, ...new Uint8Array(n)])),
                            sender_delegation: this._delegation.delegations,
                            sender_pubkey: this._delegation.publicKey
                        }
                    })
                }
            }
            class R extends S {
                constructor(e, t) {
                    super(e), u.set(this, void 0), D(this, u, t, "f")
                }
                get delegation() {
                    return T(this, u, "f")
                }
                static fromDelegation(e, t) {
                    return new R(e, t)
                }
            }

            function M(e, t) {
                for (let {
                        delegation: t
                    } of e.delegations)
                    if (+new Date(Number(t.expiration / BigInt(1e6))) <= +Date.now()) return !1;
                let r = [],
                    n = null == t ? void 0 : t.scope;
                for (let t of (n && (Array.isArray(n) ? r.push(...n.map(e => "string" == typeof e ? b.Principal.fromText(e) : e)) : r.push("string" == typeof n ? b.Principal.fromText(n) : n)), r)) {
                    let r = t.toText();
                    for (let {
                            delegation: t
                        } of e.delegations) {
                        if (void 0 === t.targets) continue;
                        let e = !0;
                        for (let n of t.targets)
                            if (n.toText() === r) {
                                e = !1;
                                break
                            }
                        if (e) return !1
                    }
                }
                return !0
            }
            u = new WeakMap;
            var L = r(4044),
                U = r(68104),
                B = r(70764);
            class Y {
                constructor(e) {
                    this._cose = e, this._encodedKey = (0, d.wrapDER)(e, d.DER_COSE_OID).buffer
                }
                toDer() {
                    return this._encodedKey
                }
                getCose() {
                    return this._cose
                }
            }
            async function G(e) {
                let t = await navigator.credentials.create(null != e ? e : {
                    publicKey: {
                        authenticatorSelection: {
                            userVerification: "preferred"
                        },
                        attestation: "direct",
                        challenge: function(e = "<ic0.app>") {
                            return "string" == typeof e ? Uint8Array.from(e, e => e.charCodeAt(0)) : e
                        }(),
                        pubKeyCredParams: [{
                            type: "public-key",
                            alg: c.ECDSA_WITH_SHA256
                        }],
                        rp: {
                            name: "Internet Identity Service"
                        },
                        user: {
                            id: (0, U.O6)(16),
                            name: "Internet Identity",
                            displayName: "Internet Identity"
                        }
                    }
                });
                return null === t ? null : {
                    id: t.id,
                    response: t.response,
                    type: t.type,
                    authenticatorAttachment: t.authenticatorAttachment,
                    getClientExtensionResults: t.getClientExtensionResults,
                    rawId: (0, B.rS)(t.rawId)
                }
            }(n = c || (c = {}))[n.ECDSA_WITH_SHA256 = -7] = "ECDSA_WITH_SHA256";
            class F extends d.SignIdentity {
                constructor(e, t, r) {
                    super(), this.rawId = e, this.authenticatorAttachment = r, this._publicKey = new Y(t)
                }
                static fromJSON(e) {
                    let {
                        publicKey: t,
                        rawId: r
                    } = JSON.parse(e);
                    if ("string" != typeof t || "string" != typeof r) throw Error("Invalid JSON string.");
                    return new this((0, d.fromHex)(r), (0, d.fromHex)(t), void 0)
                }
                static async create(e) {
                    var t;
                    let r = await G(e);
                    if (!r || "public-key" !== r.type) throw Error("Could not create credentials.");
                    let n = r.response;
                    if (void 0 === n.attestationObject) throw Error("Was expecting an attestation response.");
                    let i = L.decodeFirst(new Uint8Array(n.attestationObject));
                    return new this(r.rawId, function(e) {
                        let t = new DataView(new ArrayBuffer(2));
                        [...new Uint8Array(e.slice(53, 55))].forEach((e, r) => t.setUint8(r, e));
                        let r = t.getUint16(0);
                        return e.slice(55 + r)
                    }(i.authData), null !== (t = r.authenticatorAttachment) && void 0 !== t ? t : void 0)
                }
                getPublicKey() {
                    return this._publicKey
                }
                getAuthenticatorAttachment() {
                    return this.authenticatorAttachment
                }
                async sign(e) {
                    let t = await navigator.credentials.get({
                        publicKey: {
                            allowCredentials: [{
                                type: "public-key",
                                id: this.rawId
                            }],
                            challenge: e,
                            userVerification: "preferred"
                        }
                    });
                    null !== t.authenticatorAttachment && (this.authenticatorAttachment = t.authenticatorAttachment);
                    let r = t.response,
                        n = L.encode(new L.Tagged(55799, {
                            authenticator_data: new Uint8Array(r.authenticatorData),
                            client_data_json: new TextDecoder().decode(r.clientDataJSON),
                            signature: new Uint8Array(r.signature)
                        }));
                    if (!n) throw Error("failed to encode cbor");
                    return n.buffer
                }
                toJSON() {
                    return {
                        publicKey: (0, d.toHex)(this._publicKey.getCose()),
                        rawId: (0, d.toHex)(this.rawId)
                    }
                }
            }
            class W {
                constructor() {
                    throw Error("Secp256k1KeyIdentity has been moved to a new repo: @dfinity/identity-secp256k1")
                }
            }
        },
        56759: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(2265);

            function i() {
                let [, e] = (0, n.useReducer)(e => !e, !1);
                return e
            }
        },
        21987: function(e, t, r) {
            let n = r(2265).createContext(null);
            n.displayName = "NavContext", t.Z = n
        },
        79161: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return i
                }
            });
            let n = r(2265).createContext(null),
                i = (e, t = null) => null != e ? String(e) : t || null;
            t.Z = n
        },
        45574: function(e, t, r) {
            r.d(t, {
                $c: function() {
                    return i
                }
            });
            var n = r(2265);

            function i(e, t, r) {
                let i = (0, n.useRef)(void 0 !== e),
                    [o, a] = (0, n.useState)(t),
                    s = void 0 !== e,
                    l = i.current;
                return i.current = s, !s && l && o !== t && a(t), [s ? e : o, (0, n.useCallback)((...e) => {
                    let [t, ...n] = e, i = null == r ? void 0 : r(t, ...n);
                    return a(t), i
                }, [r])]
            }
        },
        93907: function(e, t, r) {
            let n = r(2265).createContext(null);
            n.displayName = "NavbarContext", t.Z = n
        },
        81014: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "NIL", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "parse", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "stringify", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "v1", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), Object.defineProperty(t, "v3", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "v4", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "v5", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "validate", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "version", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            });
            var n = f(r(61653)),
                i = f(r(31741)),
                o = f(r(49309)),
                a = f(r(6612)),
                s = f(r(39120)),
                l = f(r(43888)),
                u = f(r(89588)),
                c = f(r(13663)),
                d = f(r(38681));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        28892: function(e, t) {
            function r(e) {
                return (e + 64 >>> 9 << 4) + 14 + 1
            }

            function n(e, t) {
                let r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }

            function i(e, t, r, i, o, a) {
                var s;
                return n((s = n(n(t, e), n(i, a))) << o | s >>> 32 - o, r)
            }

            function o(e, t, r, n, o, a, s) {
                return i(t & r | ~t & n, e, t, o, a, s)
            }

            function a(e, t, r, n, o, a, s) {
                return i(t & n | r & ~n, e, t, o, a, s)
            }

            function s(e, t, r, n, o, a, s) {
                return i(t ^ r ^ n, e, t, o, a, s)
            }

            function l(e, t, r, n, o, a, s) {
                return i(r ^ (t | ~n), e, t, o, a, s)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = function(e) {
                if ("string" == typeof e) {
                    let t = unescape(encodeURIComponent(e));
                    e = new Uint8Array(t.length);
                    for (let r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r)
                }
                return function(e) {
                    let t = [],
                        r = 32 * e.length,
                        n = "0123456789abcdef";
                    for (let i = 0; i < r; i += 8) {
                        let r = e[i >> 5] >>> i % 32 & 255,
                            o = parseInt(n.charAt(r >>> 4 & 15) + n.charAt(15 & r), 16);
                        t.push(o)
                    }
                    return t
                }(function(e, t) {
                    e[t >> 5] |= 128 << t % 32, e[r(t) - 1] = t;
                    let i = 1732584193,
                        u = -271733879,
                        c = -1732584194,
                        d = 271733878;
                    for (let t = 0; t < e.length; t += 16) {
                        let r = i,
                            f = u,
                            y = c,
                            h = d;
                        i = o(i, u, c, d, e[t], 7, -680876936), d = o(d, i, u, c, e[t + 1], 12, -389564586), c = o(c, d, i, u, e[t + 2], 17, 606105819), u = o(u, c, d, i, e[t + 3], 22, -1044525330), i = o(i, u, c, d, e[t + 4], 7, -176418897), d = o(d, i, u, c, e[t + 5], 12, 1200080426), c = o(c, d, i, u, e[t + 6], 17, -1473231341), u = o(u, c, d, i, e[t + 7], 22, -45705983), i = o(i, u, c, d, e[t + 8], 7, 1770035416), d = o(d, i, u, c, e[t + 9], 12, -1958414417), c = o(c, d, i, u, e[t + 10], 17, -42063), u = o(u, c, d, i, e[t + 11], 22, -1990404162), i = o(i, u, c, d, e[t + 12], 7, 1804603682), d = o(d, i, u, c, e[t + 13], 12, -40341101), c = o(c, d, i, u, e[t + 14], 17, -1502002290), u = o(u, c, d, i, e[t + 15], 22, 1236535329), i = a(i, u, c, d, e[t + 1], 5, -165796510), d = a(d, i, u, c, e[t + 6], 9, -1069501632), c = a(c, d, i, u, e[t + 11], 14, 643717713), u = a(u, c, d, i, e[t], 20, -373897302), i = a(i, u, c, d, e[t + 5], 5, -701558691), d = a(d, i, u, c, e[t + 10], 9, 38016083), c = a(c, d, i, u, e[t + 15], 14, -660478335), u = a(u, c, d, i, e[t + 4], 20, -405537848), i = a(i, u, c, d, e[t + 9], 5, 568446438), d = a(d, i, u, c, e[t + 14], 9, -1019803690), c = a(c, d, i, u, e[t + 3], 14, -187363961), u = a(u, c, d, i, e[t + 8], 20, 1163531501), i = a(i, u, c, d, e[t + 13], 5, -1444681467), d = a(d, i, u, c, e[t + 2], 9, -51403784), c = a(c, d, i, u, e[t + 7], 14, 1735328473), u = a(u, c, d, i, e[t + 12], 20, -1926607734), i = s(i, u, c, d, e[t + 5], 4, -378558), d = s(d, i, u, c, e[t + 8], 11, -2022574463), c = s(c, d, i, u, e[t + 11], 16, 1839030562), u = s(u, c, d, i, e[t + 14], 23, -35309556), i = s(i, u, c, d, e[t + 1], 4, -1530992060), d = s(d, i, u, c, e[t + 4], 11, 1272893353), c = s(c, d, i, u, e[t + 7], 16, -155497632), u = s(u, c, d, i, e[t + 10], 23, -1094730640), i = s(i, u, c, d, e[t + 13], 4, 681279174), d = s(d, i, u, c, e[t], 11, -358537222), c = s(c, d, i, u, e[t + 3], 16, -722521979), u = s(u, c, d, i, e[t + 6], 23, 76029189), i = s(i, u, c, d, e[t + 9], 4, -640364487), d = s(d, i, u, c, e[t + 12], 11, -421815835), c = s(c, d, i, u, e[t + 15], 16, 530742520), u = s(u, c, d, i, e[t + 2], 23, -995338651), i = l(i, u, c, d, e[t], 6, -198630844), d = l(d, i, u, c, e[t + 7], 10, 1126891415), c = l(c, d, i, u, e[t + 14], 15, -1416354905), u = l(u, c, d, i, e[t + 5], 21, -57434055), i = l(i, u, c, d, e[t + 12], 6, 1700485571), d = l(d, i, u, c, e[t + 3], 10, -1894986606), c = l(c, d, i, u, e[t + 10], 15, -1051523), u = l(u, c, d, i, e[t + 1], 21, -2054922799), i = l(i, u, c, d, e[t + 8], 6, 1873313359), d = l(d, i, u, c, e[t + 15], 10, -30611744), c = l(c, d, i, u, e[t + 6], 15, -1560198380), u = l(u, c, d, i, e[t + 13], 21, 1309151649), i = l(i, u, c, d, e[t + 4], 6, -145523070), d = l(d, i, u, c, e[t + 11], 10, -1120210379), c = l(c, d, i, u, e[t + 2], 15, 718787259), u = l(u, c, d, i, e[t + 9], 21, -343485551), i = n(i, r), u = n(u, f), c = n(c, y), d = n(d, h)
                    }
                    return [i, u, c, d]
                }(function(e) {
                    if (0 === e.length) return [];
                    let t = 8 * e.length,
                        n = new Uint32Array(r(t));
                    for (let r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
                    return n
                }(e), 8 * e.length))
            }
        },
        52169: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            let r = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto);
            t.default = {
                randomUUID: r
            }
        },
        39120: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = "00000000-0000-0000-0000-000000000000"
        },
        38681: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, i = (n = r(89588)) && n.__esModule ? n : {
                default: n
            };
            t.default = function(e) {
                let t;
                if (!(0, i.default)(e)) throw TypeError("Invalid UUID");
                let r = new Uint8Array(16);
                return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = 255 & t, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = 255 & t, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = 255 & t, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = 255 & t, r
            }
        },
        88159: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
        },
        35603: function(e, t) {
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return r(n)
            };
            let n = new Uint8Array(16)
        },
        74321: function(e, t) {
            function r(e, t) {
                return e << t | e >>> 32 - t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.default = function(e) {
                let t = [1518500249, 1859775393, 2400959708, 3395469782],
                    n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                if ("string" == typeof e) {
                    let t = unescape(encodeURIComponent(e));
                    e = [];
                    for (let r = 0; r < t.length; ++r) e.push(t.charCodeAt(r))
                } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                e.push(128);
                let i = Math.ceil((e.length / 4 + 2) / 16),
                    o = Array(i);
                for (let t = 0; t < i; ++t) {
                    let r = new Uint32Array(16);
                    for (let n = 0; n < 16; ++n) r[n] = e[64 * t + 4 * n] << 24 | e[64 * t + 4 * n + 1] << 16 | e[64 * t + 4 * n + 2] << 8 | e[64 * t + 4 * n + 3];
                    o[t] = r
                }
                o[i - 1][14] = (e.length - 1) * 8 / 4294967296, o[i - 1][14] = Math.floor(o[i - 1][14]), o[i - 1][15] = (e.length - 1) * 8 & 4294967295;
                for (let e = 0; e < i; ++e) {
                    let i = new Uint32Array(80);
                    for (let t = 0; t < 16; ++t) i[t] = o[e][t];
                    for (let e = 16; e < 80; ++e) i[e] = r(i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16], 1);
                    let a = n[0],
                        s = n[1],
                        l = n[2],
                        u = n[3],
                        c = n[4];
                    for (let e = 0; e < 80; ++e) {
                        let n = Math.floor(e / 20),
                            o = r(a, 5) + function(e, t, r, n) {
                                switch (e) {
                                    case 0:
                                        return t & r ^ ~t & n;
                                    case 1:
                                    case 3:
                                        return t ^ r ^ n;
                                    case 2:
                                        return t & r ^ t & n ^ r & n
                                }
                            }(n, s, l, u) + c + t[n] + i[e] >>> 0;
                        c = u, u = l, l = r(s, 30) >>> 0, s = a, a = o
                    }
                    n[0] = n[0] + a >>> 0, n[1] = n[1] + s >>> 0, n[2] = n[2] + l >>> 0, n[3] = n[3] + u >>> 0, n[4] = n[4] + c >>> 0
                }
                return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
            }
        },
        13663: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.unsafeStringify = a;
            var n, i = (n = r(89588)) && n.__esModule ? n : {
                default: n
            };
            let o = [];
            for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));

            function a(e, t = 0) {
                return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
            }
            t.default = function(e, t = 0) {
                let r = a(e, t);
                if (!(0, i.default)(r)) throw TypeError("Stringified UUID is invalid");
                return r
            }
        },
        61653: function(e, t, r) {
            let n, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, a = (o = r(35603)) && o.__esModule ? o : {
                    default: o
                },
                s = r(13663);
            let l = 0,
                u = 0;
            t.default = function(e, t, r) {
                let o = t && r || 0,
                    c = t || Array(16),
                    d = (e = e || {}).node || n,
                    f = void 0 !== e.clockseq ? e.clockseq : i;
                if (null == d || null == f) {
                    let t = e.random || (e.rng || a.default)();
                    null == d && (d = n = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]), null == f && (f = i = (t[6] << 8 | t[7]) & 16383)
                }
                let y = void 0 !== e.msecs ? e.msecs : Date.now(),
                    h = void 0 !== e.nsecs ? e.nsecs : u + 1,
                    g = y - l + (h - u) / 1e4;
                if (g < 0 && void 0 === e.clockseq && (f = f + 1 & 16383), (g < 0 || y > l) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                l = y, u = h, i = f;
                let p = ((268435455 & (y += 122192928e5)) * 1e4 + h) % 4294967296;
                c[o++] = p >>> 24 & 255, c[o++] = p >>> 16 & 255, c[o++] = p >>> 8 & 255, c[o++] = 255 & p;
                let v = y / 4294967296 * 1e4 & 268435455;
                c[o++] = v >>> 8 & 255, c[o++] = 255 & v, c[o++] = v >>> 24 & 15 | 16, c[o++] = v >>> 16 & 255, c[o++] = f >>> 8 | 128, c[o++] = 255 & f;
                for (let e = 0; e < 6; ++e) c[o + e] = d[e];
                return t || (0, s.unsafeStringify)(c)
            }
        },
        31741: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(r(70231)),
                i = o(r(28892));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let a = (0, n.default)("v3", 48, i.default);
            t.default = a
        },
        70231: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.URL = t.DNS = void 0, t.default = function(e, t, r) {
                function n(e, n, a, s) {
                    var l;
                    if ("string" == typeof e && (e = function(e) {
                            e = unescape(encodeURIComponent(e));
                            let t = [];
                            for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
                            return t
                        }(e)), "string" == typeof n && (n = (0, o.default)(n)), (null === (l = n) || void 0 === l ? void 0 : l.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    let u = new Uint8Array(16 + e.length);
                    if (u.set(n), u.set(e, n.length), (u = r(u))[6] = 15 & u[6] | t, u[8] = 63 & u[8] | 128, a) {
                        s = s || 0;
                        for (let e = 0; e < 16; ++e) a[s + e] = u[e];
                        return a
                    }
                    return (0, i.unsafeStringify)(u)
                }
                try {
                    n.name = e
                } catch (e) {}
                return n.DNS = a, n.URL = s, n
            };
            var n, i = r(13663),
                o = (n = r(38681)) && n.__esModule ? n : {
                    default: n
                };
            let a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
            t.DNS = a;
            let s = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
            t.URL = s
        },
        49309: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(52169)),
                i = a(r(35603)),
                o = r(13663);

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e, t, r) {
                if (n.default.randomUUID && !t && !e) return n.default.randomUUID();
                let a = (e = e || {}).random || (e.rng || i.default)();
                if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = a[e];
                    return t
                }
                return (0, o.unsafeStringify)(a)
            }
        },
        6612: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(r(70231)),
                i = o(r(74321));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let a = (0, n.default)("v5", 80, i.default);
            t.default = a
        },
        89588: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, i = (n = r(88159)) && n.__esModule ? n : {
                default: n
            };
            t.default = function(e) {
                return "string" == typeof e && i.default.test(e)
            }
        },
        43888: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, i = (n = r(89588)) && n.__esModule ? n : {
                default: n
            };
            t.default = function(e) {
                if (!(0, i.default)(e)) throw TypeError("Invalid UUID");
                return parseInt(e.slice(14, 15), 16)
            }
        },
        20585: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(11735);
            n.__exportStar(r(33804), t), n.__exportStar(r(2079), t), n.__exportStar(r(25599), t)
        },
        72928: function(e, t, r) {
            var n, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NfidAuthClient = t.ERROR_USER_INTERRUPT = t.DelegationType = void 0;
            let o = r(11735),
                a = r(20392),
                s = r(57389),
                l = r(64245),
                u = r(69793),
                c = r(92794),
                d = r(20565),
                f = r(29711);
            (i = n || (t.DelegationType = n = {}))[i.GLOBAL = 0] = "GLOBAL", i[i.ANONYMOUS = 1] = "ANONYMOUS";
            let y = "ECDSA",
                h = "Ed25519";
            t.ERROR_USER_INTERRUPT = "UserInterrupt";
            class g {
                static create(e = {}) {
                    var t, r, n;
                    return o.__awaiter(this, void 0, void 0, function*() {
                        let i;
                        console.debug("NfidAuthClient.create", {
                            keyType: e.keyType
                        });
                        let o = null !== (t = e.storage) && void 0 !== t ? t : new u.IdbStorage,
                            c = null !== (r = e.keyType) && void 0 !== r ? r : y,
                            d = null;
                        if (e.identity) d = e.identity;
                        else {
                            let e = yield o.get(u.KEY_STORAGE_KEY);
                            if (!e && u.isBrowser) try {
                                let t = new u.LocalStorage,
                                    r = yield t.get(u.KEY_STORAGE_DELEGATION), n = yield t.get(u.KEY_STORAGE_KEY);
                                r && n && c === y && (console.log("Discovered an identity stored in localstorage. Migrating to IndexedDB"), yield o.set(u.KEY_STORAGE_DELEGATION, r), yield o.set(u.KEY_STORAGE_KEY, n), e = r, yield t.remove(u.KEY_STORAGE_DELEGATION), yield t.remove(u.KEY_STORAGE_KEY))
                            } catch (e) {
                                console.error("error while attempting to recover localstorage: " + e)
                            }
                            if (e) try {
                                "object" == typeof e ? d = c === h && "string" == typeof e ? yield l.Ed25519KeyIdentity.fromJSON(e): yield l.ECDSAKeyIdentity.fromKeyPair(e): "string" == typeof e && (d = l.Ed25519KeyIdentity.fromJSON(e))
                            } catch (e) {}
                        }
                        let f = new a.AnonymousIdentity,
                            g = null;
                        if (d) try {
                            let t = yield o.get(u.KEY_STORAGE_DELEGATION);
                            if ("object" == typeof t && null !== t) throw Error("Delegation chain is incorrectly stored. A delegation chain should be stored as a string.");
                            e.identity ? f = e.identity : t && (g = l.DelegationChain.fromJSON(t), (0, l.isDelegationValid)(g) ? f = l.DelegationIdentity.fromDelegation(d, g) : (yield p(o), d = null))
                        } catch (e) {
                            console.error(e), yield p(o), d = null
                        }
                        return (null === (n = e.idleOptions) || void 0 === n ? void 0 : n.disableIdle) ? i = void 0 : (g || e.identity) && (i = s.IdleManager.create(e.idleOptions)), d || (d = yield v(o, c, e.storage)), new this(f, d, g, o, i, e)
                    })
                }
                constructor(e, t, r, n, i, o) {
                    var a;
                    this._identity = e, this._key = t, this._chain = r, this._storage = n, this.idleManager = i, this._createOptions = o;
                    let s = this.logout.bind(this),
                        l = null == o ? void 0 : o.idleOptions;
                    (null == l ? void 0 : l.onIdle) || (null == l ? void 0 : l.disableDefaultIdleCallback) || null === (a = this.idleManager) || void 0 === a || a.registerCallback(() => {
                        s(), location.reload()
                    })
                }
                getKey() {
                    var e, t;
                    return o.__awaiter(this, void 0, void 0, function*() {
                        return v(this._storage, null === (e = this._createOptions) || void 0 === e ? void 0 : e.keyType, null === (t = this._createOptions) || void 0 === t ? void 0 : t.storage)
                    })
                }
                getDelegationType() {
                    var e, t;
                    return (null === (t = null === (e = this._chain) || void 0 === e ? void 0 : e.delegations[0].delegation.targets) || void 0 === t ? void 0 : t.length) ? n.GLOBAL : n.ANONYMOUS
                }
                renewDelegation(e) {
                    var t, r;
                    return o.__awaiter(this, void 0, void 0, function*() {
                        console.debug("NfidAuthClient.renewDelegation");
                        let n = BigInt(8) * BigInt(36e11),
                            i = (0, c.getIframe)(),
                            o = yield(0, d.request)(i, {
                                method: "ic_renewDelegation",
                                params: [{
                                    sessionPublicKey: new Uint8Array(null === (t = this._key) || void 0 === t ? void 0 : t.getPublicKey().toDer()),
                                    maxTimeToLive: null !== (r = null == e ? void 0 : e.maxTimeToLive) && void 0 !== r ? r : n,
                                    targets: null == e ? void 0 : e.targets,
                                    derivationOrigin: null == e ? void 0 : e.derivationOrigin
                                }]
                            });
                        if ("error" in o) throw Error(o.error.message);
                        return this._handleSuccess(o.result)
                    })
                }
                login(e) {
                    var t;
                    return o.__awaiter(this, void 0, void 0, function*() {
                        this._key || (this._key = yield this.getKey());
                        let r = BigInt(8) * BigInt(36e11),
                            n = null == e ? void 0 : e.targets,
                            i = null == e ? void 0 : e.derivationOrigin,
                            o = (0, c.getIframe)(),
                            a = yield(0, d.request)(o, {
                                method: "ic_getDelegation",
                                params: [Object.assign(Object.assign({
                                    sessionPublicKey: new Uint8Array(this._key.getPublicKey().toDer()),
                                    maxTimeToLive: null !== (t = null == e ? void 0 : e.maxTimeToLive) && void 0 !== t ? t : r
                                }, n ? {
                                    targets: n
                                } : {}), i ? {
                                    derivationOrigin: i
                                } : {})]
                            });
                        if ("error" in a) throw Error(a.error.message);
                        return this._handleSuccess(a.result)
                    })
                }
                logout(e = {}) {
                    return o.__awaiter(this, void 0, void 0, function*() {
                        if (yield p(this._storage), this._identity = new a.AnonymousIdentity, this._key = null, this._chain = null, e.returnTo) try {
                            window.history.pushState({}, "", e.returnTo)
                        } catch (t) {
                            window.location.href = e.returnTo
                        }
                    })
                }
                getIdentity() {
                    return this._identity
                }
                get isAuthenticated() {
                    return !this.getIdentity().getPrincipal().isAnonymous() && null !== this._chain
                }
                _handleSuccess(e) {
                    var t, r;
                    return o.__awaiter(this, void 0, void 0, function*() {
                        let n = e.delegations.map(e => {
                            var t;
                            return {
                                delegation: new l.Delegation(e.delegation.pubkey, e.delegation.expiration, null === (t = e.delegation.targets) || void 0 === t ? void 0 : t.map(e => f.Principal.fromText(e))),
                                signature: e.signature.buffer
                            }
                        });
                        console.debug("NfidAuthClient._handleSuccess", {
                            delegations: n
                        });
                        let i = l.DelegationChain.fromDelegations(n, e.userPublicKey.buffer),
                            o = this._key;
                        if (!o) throw Error("missing key");
                        this._chain = i;
                        let a = l.DelegationIdentity.fromDelegation(o, this._chain);
                        if (this._identity = a, !this.idleManager) {
                            let e = null === (t = this._createOptions) || void 0 === t ? void 0 : t.idleOptions;
                            this.idleManager = s.IdleManager.create(e), (null == e ? void 0 : e.onIdle) || (null == e ? void 0 : e.disableDefaultIdleCallback) || null === (r = this.idleManager) || void 0 === r || r.registerCallback(() => {
                                this.logout(), location.reload()
                            })
                        }
                        return this._chain && (yield this._storage.set(u.KEY_STORAGE_DELEGATION, JSON.stringify(this._chain.toJSON()))), a
                    })
                }
            }

            function p(e) {
                return o.__awaiter(this, void 0, void 0, function*() {
                    yield e.remove(u.KEY_STORAGE_KEY), yield e.remove(u.KEY_STORAGE_DELEGATION), yield e.remove(u.KEY_VECTOR)
                })
            }

            function v(e, t, r) {
                return o.__awaiter(this, void 0, void 0, function*() {
                    let n;
                    return console.debug("getKey", {
                        keyType: t
                    }), t === h ? (n = yield l.Ed25519KeyIdentity.generate(null), yield e.set(u.KEY_STORAGE_KEY, JSON.stringify(n.toJSON()))) : (r && t === y && console.warn(`You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${h}' as the key type, as it can serialize to a string`), n = yield l.ECDSAKeyIdentity.generate(), yield e.set(u.KEY_STORAGE_KEY, n.getKeyPair())), n
                })
            }
            t.NfidAuthClient = g
        },
        88402: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IdbKeyVal = void 0;
            let n = r(11735),
                i = r(6512),
                o = r(69793),
                a = "nfid-auth-client-db",
                s = "ic-keyval",
                l = (e = a, t = s, r) => n.__awaiter(void 0, void 0, void 0, function*() {
                    return o.isBrowser && (null == localStorage ? void 0 : localStorage.getItem(o.KEY_STORAGE_DELEGATION)) && (localStorage.removeItem(o.KEY_STORAGE_DELEGATION), localStorage.removeItem(o.KEY_STORAGE_KEY)), yield(0, i.openDB)(e, r, {
                        upgrade: e => {
                            e.objectStoreNames, e.objectStoreNames.contains(t) && e.clear(t), e.createObjectStore(t)
                        }
                    })
                });
            class u {
                static create(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        let {
                            dbName: t = a,
                            storeName: r = s,
                            version: n = 1
                        } = null != e ? e : {};
                        return new u((yield l(t, r, n)), r)
                    })
                }
                constructor(e, t) {
                    this._db = e, this._storeName = t
                }
                set(e, t) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        return yield function(e, t, r, i) {
                            return n.__awaiter(this, void 0, void 0, function*() {
                                return yield e.put(t, i, r)
                            })
                        }(this._db, this._storeName, e, t)
                    })
                }
                get(e) {
                    var t;
                    return n.__awaiter(this, void 0, void 0, function*() {
                        return null !== (t = yield function(e, t, r) {
                            return n.__awaiter(this, void 0, void 0, function*() {
                                return yield e.get(t, r)
                            })
                        }(this._db, this._storeName, e)) && void 0 !== t ? t : null
                    })
                }
                remove(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        return yield function(e, t, r) {
                            return n.__awaiter(this, void 0, void 0, function*() {
                                return yield e.delete(t, r)
                            })
                        }(this._db, this._storeName, e)
                    })
                }
            }
            t.IdbKeyVal = u
        },
        25599: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(11735).__exportStar(r(72928), t)
        },
        69793: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IdbStorage = t.LocalStorage = t.isBrowser = t.DB_VERSION = t.KEY_VECTOR = t.KEY_STORAGE_DELEGATION = t.KEY_STORAGE_KEY = void 0;
            let n = r(11735),
                i = r(88402);
            t.KEY_STORAGE_KEY = "identity", t.KEY_STORAGE_DELEGATION = "delegation", t.KEY_VECTOR = "iv", t.DB_VERSION = 1, t.isBrowser = "undefined" != typeof window;
            class o {
                constructor(e = "ic-", t) {
                    this.prefix = e, this._localStorage = t
                }
                get(e) {
                    return Promise.resolve(this._getLocalStorage().getItem(this.prefix + e))
                }
                set(e, t) {
                    return this._getLocalStorage().setItem(this.prefix + e, t), Promise.resolve()
                }
                remove(e) {
                    return this._getLocalStorage().removeItem(this.prefix + e), Promise.resolve()
                }
                _getLocalStorage() {
                    if (this._localStorage) return this._localStorage;
                    let e = "undefined" == typeof window ? void 0 === r.g ? "undefined" == typeof self ? void 0 : self.localStorage : r.g.localStorage : window.localStorage;
                    if (!e) throw Error("Could not find local storage.");
                    return e
                }
            }
            t.LocalStorage = o;
            class a {
                get _db() {
                    return new Promise(e => {
                        if (this.initializedDb) {
                            e(this.initializedDb);
                            return
                        }
                        i.IdbKeyVal.create({
                            version: t.DB_VERSION
                        }).then(t => {
                            this.initializedDb = t, e(t)
                        })
                    })
                }
                get(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        let t = yield this._db;
                        return yield t.get(e)
                    })
                }
                set(e, t) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        let r = yield this._db;
                        yield r.set(e, t)
                    })
                }
                remove(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        let t = yield this._db;
                        yield t.remove(e)
                    })
                }
            }
            t.IdbStorage = a
        },
        82570: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IFRAME_ID = void 0, t.IFRAME_ID = "nfid-embed"
        },
        92794: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getIframe = void 0;
            let n = r(82570);
            t.getIframe = () => {
                let e = document.getElementById(n.IFRAME_ID);
                if (!e || !e.contentWindow) throw Error("nfid iframe not initialized");
                return e
            }
        },
        32067: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.buildIframe = t.baseStyle = void 0;
            let n = r(82570),
                i = r(92794);
            t.baseStyle = {
                position: "fixed",
                top: "0",
                left: "0",
                border: "none",
                width: "100%",
                height: "100%",
                zIndex: "9999",
                background: "rgba(9,10,19,0.5)",
                display: "none"
            };
            let o = e => (console.debug("buildQuery", {
                params: e
            }), Object.keys(e).filter(t => !!e[t]).length ? Object.keys(e).reduce((t, r, n) => `${t}${0===n?"?":"&"}${r}=${e[r]}`, "") : "");
            t.buildIframe = ({
                origin: e,
                applicationLogo: r,
                applicationName: a,
                onLoad: s
            }) => {
                let l;
                console.debug("buildIframe");
                let u = o({
                        applicationLogo: r,
                        applicationName: a
                    }),
                    c = "embed",
                    d = new URL(`${e}/${c}${u}`);
                console.debug("buildIframe", {
                    PROVIDER_URL: d,
                    QUERY: u,
                    PATH: c
                });
                try {
                    l = (0, i.getIframe)()
                } catch (e) {
                    l = document.createElement("iframe")
                }
                return l.id = n.IFRAME_ID, l.src = d.href, l.allow = "publickey-credentials-get", Object.assign(l.style, t.baseStyle), l.onload = s, document.body.appendChild(l), l
            }
        },
        33804: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IframeManager = void 0;
            let n = r(32067);
            class i {
                static init({
                    providerUrl: e,
                    onLoad: t
                }) {
                    console.debug("IframeManager.constructor", {
                        providerUrl: e
                    }), i._iframe = (0, n.buildIframe)({
                        origin: e,
                        onLoad: t
                    })
                }
                static show() {
                    if (!this._iframe) throw Error("IframeManager not initialized");
                    Object.assign(this._iframe.style, Object.assign(Object.assign({}, n.baseStyle), {
                        display: "block"
                    }))
                }
                static hide() {
                    if (!this._iframe) throw Error("IframeManager not initialized");
                    Object.assign(this._iframe.style, Object.assign(Object.assign({}, n.baseStyle), {
                        display: "none"
                    }))
                }
                static isVisible() {
                    return !1
                }
            }
            t.IframeManager = i
        },
        81384: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hideIframe = t.showIframe = t.mountIframe = void 0;
            let n = r(11735),
                i = r(92794),
                o = r(32067);
            t.mountIframe = ({
                iframe: e,
                onLoad: t
            }) => n.__awaiter(void 0, void 0, void 0, function*() {
                console.debug("mountIframe", {
                    iframe: e
                }), window.document.body.appendChild(e), e.onload = t
            }), t.showIframe = () => {
                let e = (0, i.getIframe)();
                e && (console.debug("showIframe", {
                    iframe: e
                }), Object.assign(e.style, Object.assign(Object.assign({}, o.baseStyle), {
                    display: "block"
                })))
            }, t.hideIframe = () => {
                let e = (0, i.getIframe)();
                e && (console.debug("hideIframe", {
                    iframe: e
                }), Object.assign(e.style, Object.assign(Object.assign({}, o.baseStyle), {
                    display: "none"
                })))
            }
        },
        2079: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NFID = void 0;
            let n = r(11735),
                i = r(32067),
                o = r(81384),
                a = r(25599),
                s = r(92794),
                l = r(20565);
            class u {
                constructor(e) {
                    this._nfidConfig = e, console.debug("NFID.constructor", {
                        _nfidConfig: e
                    })
                }
                static initIframe(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        return console.debug("NFID.initIframe", {
                            nfidConfig: e
                        }), new Promise(t => {
                            var r, n;
                            let o = (0, i.buildIframe)({
                                origin: e.origin,
                                applicationName: null === (r = e.application) || void 0 === r ? void 0 : r.name,
                                applicationLogo: null === (n = e.application) || void 0 === n ? void 0 : n.logo,
                                onLoad: () => {
                                    u.isIframeInstantiated = !0, u.nfidIframe = o, console.debug("NFID.initIframe: iframe loaded", {
                                        nfidIframe: o
                                    }), t(!0)
                                }
                            })
                        })
                    })
                }
                static init(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        let {
                            origin: t = "https://nfid.one"
                        } = e, r = n.__rest(e, ["origin"]);
                        return yield new Promise((e, n) => {
                            let i = () => {
                                    window.removeEventListener("message", s)
                                },
                                o = setTimeout(() => {
                                    i(), n(Error("NFID.init iframe did not respond in time"))
                                }, 3e4),
                                s = n => {
                                    "nfid_ready" === n.data.type && (i(), console.debug("NFID.init authClient initiated"), clearTimeout(o), e(new this(Object.assign({
                                        origin: t
                                    }, r))))
                                };
                            window.addEventListener("message", s), console.debug("NFID.init", Object.assign({
                                origin: t
                            }, r)), u.initIframe(Object.assign({
                                origin: t
                            }, r)), console.debug("NFID.init iframe initiated"), a.NfidAuthClient.create({
                                identity: r.identity,
                                storage: r.storage,
                                keyType: r.keyType,
                                idleOptions: r.idleOptions
                            }).then(e => {
                                u._authClient = e
                            })
                        })
                    })
                }
                getDelegation(e) {
                    var t, r;
                    return n.__awaiter(this, void 0, void 0, function*() {
                        console.debug("NFID.connect");
                        let n = (null == e ? void 0 : e.derivationOrigin) || (null === (r = null === (t = this._nfidConfig) || void 0 === t ? void 0 : t.ic) || void 0 === r ? void 0 : r.derivationOrigin);
                        if (!u.isIframeInstantiated) throw Error("NFID iframe not instantiated");
                        return (0, o.showIframe)(), new Promise((t, r) => {
                            u._authClient.login(Object.assign(Object.assign({}, e), {
                                derivationOrigin: n
                            })).then(e => t(e)).catch(e => r({
                                error: e.message
                            })).finally(o.hideIframe)
                        })
                    })
                }
                updateGlobalDelegation(e) {
                    var t, r;
                    return n.__awaiter(this, void 0, void 0, function*() {
                        let n = (null == e ? void 0 : e.derivationOrigin) || (null === (r = null === (t = this._nfidConfig) || void 0 === t ? void 0 : t.ic) || void 0 === r ? void 0 : r.derivationOrigin);
                        if (console.debug("NFID.renewDelegation"), u._authClient.getDelegationType() === a.DelegationType.ANONYMOUS) throw Error("You can not update delegation from anonymous user");
                        let i = yield u._authClient.renewDelegation(Object.assign(Object.assign({}, e), {
                            derivationOrigin: n
                        }));
                        if ("error" in i) throw Error(i.error.message);
                        return i
                    })
                }
                getDelegationType() {
                    return u._authClient.getDelegationType()
                }
                logout() {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        return u._authClient.logout()
                    })
                }
                requestTransferFT(e) {
                    var t, r;
                    return n.__awaiter(this, void 0, void 0, function*() {
                        console.debug("NFID.requestTransferFT");
                        let n = (null == e ? void 0 : e.derivationOrigin) || (null === (r = null === (t = this._nfidConfig) || void 0 === t ? void 0 : t.ic) || void 0 === r ? void 0 : r.derivationOrigin);
                        if (u._authClient.getDelegationType() === a.DelegationType.ANONYMOUS) throw Error("You can not call requestTransferFT from anonymous user");
                        if (!u.nfidIframe) throw Error("NFID iframe not instantiated");
                        (0, o.showIframe)();
                        let i = (0, s.getIframe)(),
                            c = yield(0, l.request)(i, {
                                method: "ic_requestTransfer",
                                params: [{
                                    receiver: e.receiver,
                                    amount: e.amount,
                                    memo: e.memo,
                                    derivationOrigin: n
                                }]
                            });
                        if ((0, o.hideIframe)(), "error" in c) throw Error(c.error.message);
                        return c.result
                    })
                }
                requestTransferNFT(e) {
                    var t, r;
                    return n.__awaiter(this, void 0, void 0, function*() {
                        console.debug("NFID.requestTransferNFT");
                        let n = (null == e ? void 0 : e.derivationOrigin) || (null === (r = null === (t = this._nfidConfig) || void 0 === t ? void 0 : t.ic) || void 0 === r ? void 0 : r.derivationOrigin);
                        if (u._authClient.getDelegationType() === a.DelegationType.ANONYMOUS) throw Error("You can not call requestTransferNFT from anonymous user");
                        if (!u.nfidIframe) throw Error("NFID iframe not instantiated");
                        (0, o.showIframe)();
                        let i = (0, s.getIframe)(),
                            c = yield(0, l.request)(i, {
                                method: "ic_requestTransfer",
                                params: [{
                                    receiver: e.receiver,
                                    tokenId: e.tokenId,
                                    derivationOrigin: n
                                }]
                            });
                        if ((0, o.hideIframe)(), "error" in c) throw Error(c.error.message);
                        return c.result
                    })
                }
                requestCanisterCall({
                    method: e,
                    canisterId: t,
                    parameters: r,
                    derivationOrigin: i
                }) {
                    var c, d;
                    return n.__awaiter(this, void 0, void 0, function*() {
                        if (console.debug("NFID.requestCanisterCall", {
                                method: e,
                                canisterId: t,
                                parameters: r,
                                derivationOrigin: i
                            }), u._authClient.getDelegationType() === a.DelegationType.ANONYMOUS) throw Error("You can not call requestCanisterCall from anonymous user");
                        if (!u.nfidIframe) throw Error("NFID iframe not instantiated");
                        (0, o.showIframe)();
                        let n = (0, s.getIframe)(),
                            f = yield(0, l.request)(n, {
                                method: "ic_canisterCall",
                                params: [{
                                    method: e,
                                    canisterId: t,
                                    parameters: r,
                                    derivationOrigin: i || (null === (d = null === (c = this._nfidConfig) || void 0 === c ? void 0 : c.ic) || void 0 === d ? void 0 : d.derivationOrigin)
                                }]
                            });
                        if ((0, o.hideIframe)(), "error" in f) throw Error(f.error.message);
                        return f.result
                    })
                }
                get isAuthenticated() {
                    return u._authClient.isAuthenticated
                }
                getIdentity() {
                    return u._authClient.getIdentity()
                }
            }
            t.NFID = u, u.isIframeInstantiated = !1
        },
        20565: function(e, t, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.request = t.RPC_BASE = void 0;
            let n = r(11735),
                i = r(81014);
            t.RPC_BASE = {
                jsonrpc: "2.0"
            };
            class o extends Error {
                constructor(e, t, r) {
                    super(e), this.code = t, this.data = r
                }
            }
            t.request = function(e, {
                method: t,
                params: r
            }, a = {}) {
                return n.__awaiter(this, void 0, void 0, function*() {
                    let n = i.v4(),
                        s = {
                            jsonrpc: "2.0",
                            id: n,
                            method: t,
                            params: r,
                            options: a
                        };
                    return console.debug("postmsg-rpc request", Object.assign({}, s)), new Promise((t, r) => {
                        let i = a.timeout && setTimeout(() => {
                                window.removeEventListener("message", l), r(new o("Request timed out", 408))
                            }, a.timeout),
                            l = e => {
                                e.data && e.data.id === n && (console.debug(`resolve id: ${n}`, {
                                    event: e
                                }), t(e.data), window.removeEventListener("message", l), i && clearTimeout(i))
                            };
                        window.addEventListener("message", l), e.contentWindow.postMessage(s, "*")
                    })
                })
            }
        },
        73165: function(e, t, r) {
            r.d(t, {
                gP: function() {
                    return u
                }
            });
            var n = r(2265);
            let i = {
                    prefix: String(Math.round(1e10 * Math.random())),
                    current: 0
                },
                o = n.createContext(i),
                a = n.createContext(!1),
                s = !!("undefined" != typeof window && window.document && window.document.createElement),
                l = new WeakMap,
                u = "function" == typeof n.useId ? function(e) {
                    let t = n.useId(),
                        [r] = (0, n.useState)("function" == typeof n.useSyncExternalStore ? n.useSyncExternalStore(f, c, d) : (0, n.useContext)(a)),
                        o = r ? "react-aria" : `react-aria${i.prefix}`;
                    return e || `${o}-${t}`
                } : function(e) {
                    let t = (0, n.useContext)(o);
                    t !== i || s || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
                    let r = function(e = !1) {
                            let t = (0, n.useContext)(o),
                                r = (0, n.useRef)(null);
                            if (null === r.current && !e) {
                                var i, a;
                                let e = null === (a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === a ? void 0 : null === (i = a.ReactCurrentOwner) || void 0 === i ? void 0 : i.current;
                                if (e) {
                                    let r = l.get(e);
                                    null == r ? l.set(e, {
                                        id: t.current,
                                        state: e.memoizedState
                                    }) : e.memoizedState !== r.state && (t.current = r.id, l.delete(e))
                                }
                                r.current = ++t.current
                            }
                            return r.current
                        }(!!e),
                        a = `react-aria${t.prefix}`;
                    return e || `${a}-${r}`
                };

            function c() {
                return !1
            }

            function d() {
                return !0
            }

            function f(e) {
                return () => {}
            }
        },
        6512: function(e, t, r) {
            let n, i, o;
            r.r(t), r.d(t, {
                deleteDB: function() {
                    return p
                },
                openDB: function() {
                    return g
                },
                unwrap: function() {
                    return h
                },
                wrap: function() {
                    return y
                }
            });
            let a = (e, t) => t.some(t => e instanceof t),
                s = new WeakMap,
                l = new WeakMap,
                u = new WeakMap,
                c = new WeakMap,
                d = new WeakMap,
                f = {
                    get(e, t, r) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return l.get(e);
                            if ("objectStoreNames" === t) return e.objectStoreNames || u.get(e);
                            if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                        }
                        return y(e[t])
                    },
                    set: (e, t, r) => (e[t] = r, !0),
                    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                };

            function y(e) {
                var t;
                if (e instanceof IDBRequest) return function(e) {
                    let t = new Promise((t, r) => {
                        let n = () => {
                                e.removeEventListener("success", i), e.removeEventListener("error", o)
                            },
                            i = () => {
                                t(y(e.result)), n()
                            },
                            o = () => {
                                r(e.error), n()
                            };
                        e.addEventListener("success", i), e.addEventListener("error", o)
                    });
                    return t.then(t => {
                        t instanceof IDBCursor && s.set(t, e)
                    }).catch(() => {}), d.set(t, e), t
                }(e);
                if (c.has(e)) return c.get(e);
                let r = "function" == typeof(t = e) ? t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                    return t.apply(h(this), e), y(s.get(this))
                } : function(...e) {
                    return y(t.apply(h(this), e))
                } : function(e, ...r) {
                    let n = t.call(h(this), e, ...r);
                    return u.set(n, e.sort ? e.sort() : [e]), y(n)
                } : (t instanceof IDBTransaction && function(e) {
                    if (l.has(e)) return;
                    let t = new Promise((t, r) => {
                        let n = () => {
                                e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o)
                            },
                            i = () => {
                                t(), n()
                            },
                            o = () => {
                                r(e.error || new DOMException("AbortError", "AbortError")), n()
                            };
                        e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o)
                    });
                    l.set(e, t)
                }(t), a(t, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(t, f) : t;
                return r !== e && (c.set(e, r), d.set(r, e)), r
            }
            let h = e => d.get(e);

            function g(e, t, {
                blocked: r,
                upgrade: n,
                blocking: i,
                terminated: o
            } = {}) {
                let a = indexedDB.open(e, t),
                    s = y(a);
                return n && a.addEventListener("upgradeneeded", e => {
                    n(y(a.result), e.oldVersion, e.newVersion, y(a.transaction), e)
                }), r && a.addEventListener("blocked", e => r(e.oldVersion, e.newVersion, e)), s.then(e => {
                    o && e.addEventListener("close", () => o()), i && e.addEventListener("versionchange", e => i(e.oldVersion, e.newVersion, e))
                }).catch(() => {}), s
            }

            function p(e, {
                blocked: t
            } = {}) {
                let r = indexedDB.deleteDatabase(e);
                return t && r.addEventListener("blocked", e => t(e.oldVersion, e)), y(r).then(() => void 0)
            }
            let v = ["get", "getKey", "getAll", "getAllKeys", "count"],
                _ = ["put", "add", "delete", "clear"],
                m = new Map;

            function w(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
                if (m.get(t)) return m.get(t);
                let r = t.replace(/FromIndex$/, ""),
                    n = t !== r,
                    i = _.includes(r);
                if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || v.includes(r))) return;
                let o = async function(e, ...t) {
                    let o = this.transaction(e, i ? "readwrite" : "readonly"),
                        a = o.store;
                    return n && (a = a.index(t.shift())), (await Promise.all([a[r](...t), i && o.done]))[0]
                };
                return m.set(t, o), o
            }
            f = { ...o = f,
                get: (e, t, r) => w(e, t) || o.get(e, t, r),
                has: (e, t) => !!w(e, t) || o.has(e, t)
            }
        },
        11735: function(e, t, r) {
            r.r(t), r.d(t, {
                __addDisposableResource: function() {
                    return x
                },
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return S
                },
                __asyncGenerator: function() {
                    return O
                },
                __asyncValues: function() {
                    return D
                },
                __await: function() {
                    return I
                },
                __awaiter: function() {
                    return h
                },
                __classPrivateFieldGet: function() {
                    return K
                },
                __classPrivateFieldIn: function() {
                    return C
                },
                __classPrivateFieldSet: function() {
                    return N
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return s
                },
                __disposeResources: function() {
                    return R
                },
                __esDecorate: function() {
                    return u
                },
                __exportStar: function() {
                    return v
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return g
                },
                __importDefault: function() {
                    return j
                },
                __importStar: function() {
                    return A
                },
                __makeTemplateObject: function() {
                    return T
                },
                __metadata: function() {
                    return y
                },
                __param: function() {
                    return l
                },
                __propKey: function() {
                    return d
                },
                __read: function() {
                    return m
                },
                __rest: function() {
                    return a
                },
                __runInitializers: function() {
                    return c
                },
                __setFunctionName: function() {
                    return f
                },
                __spread: function() {
                    return w
                },
                __spreadArray: function() {
                    return E
                },
                __spreadArrays: function() {
                    return b
                },
                __values: function() {
                    return _
                }
            });
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var o = function() {
                return (o = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function a(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            }

            function s(e, t, r, n) {
                var i, o = arguments.length,
                    a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }

            function l(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function u(e, t, r, n, i, o) {
                function a(e) {
                    if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
                    return e
                }
                for (var s, l = n.kind, u = "getter" === l ? "get" : "setter" === l ? "set" : "value", c = !t && e ? n.static ? e : e.prototype : null, d = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), f = !1, y = r.length - 1; y >= 0; y--) {
                    var h = {};
                    for (var g in n) h[g] = "access" === g ? {} : n[g];
                    for (var g in n.access) h.access[g] = n.access[g];
                    h.addInitializer = function(e) {
                        if (f) throw TypeError("Cannot add initializers after decoration has completed");
                        o.push(a(e || null))
                    };
                    var p = (0, r[y])("accessor" === l ? {
                        get: d.get,
                        set: d.set
                    } : d[u], h);
                    if ("accessor" === l) {
                        if (void 0 === p) continue;
                        if (null === p || "object" != typeof p) throw TypeError("Object expected");
                        (s = a(p.get)) && (d.get = s), (s = a(p.set)) && (d.set = s), (s = a(p.init)) && i.unshift(s)
                    } else(s = a(p)) && ("field" === l ? i.unshift(s) : d[u] = s)
                }
                c && Object.defineProperty(c, n.name, d), f = !0
            }

            function c(e, t, r) {
                for (var n = arguments.length > 2, i = 0; i < t.length; i++) r = n ? t[i].call(e, r) : t[i].call(e);
                return n ? r : void 0
            }

            function d(e) {
                return "symbol" == typeof e ? e : "".concat(e)
            }

            function f(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                })
            }

            function y(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function h(e, t, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function a(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((n = n.apply(e, t || [])).next())
                })
            }

            function g(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(s) {
                    return function(l) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, s[0] && (a = 0)), a;) try {
                                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            a.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && a.label < i[1]) {
                                            a.label = i[1], i = s;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(s);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                s = t.call(e, a)
                            } catch (e) {
                                s = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, l])
                    }
                }
            }
            var p = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }), Object.defineProperty(e, n, i)
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            };

            function v(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || p(t, e, r)
            }

            function _(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function m(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, o = r.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function w() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(m(arguments[t]));
                return e
            }

            function b() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var n = Array(e), i = 0, t = 0; t < r; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
                return n
            }

            function E(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function I(e) {
                return this instanceof I ? (this.v = e, this) : new I(e)
            }

            function O(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    o = [];
                return n = {}, a("next"), a("throw"), a("return", function(e) {
                    return function(t) {
                        return Promise.resolve(t).then(e, u)
                    }
                }), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function a(e, t) {
                    i[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            o.push([e, t, r, n]) > 1 || s(e, t)
                        })
                    }, t && (n[e] = t(n[e])))
                }

                function s(e, t) {
                    try {
                        var r;
                        (r = i[e](t)).value instanceof I ? Promise.resolve(r.value.v).then(l, u) : c(o[0][2], r)
                    } catch (e) {
                        c(o[0][3], e)
                    }
                }

                function l(e) {
                    s("next", e)
                }

                function u(e) {
                    s("throw", e)
                }

                function c(e, t) {
                    e(t), o.shift(), o.length && s(o[0][0], o[0][1])
                }
            }

            function S(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e
                }), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: I(e[n](t)),
                            done: !1
                        } : i ? i(t) : t
                    } : i
                }
            }

            function D(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = _(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, i) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function T(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var P = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function A(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && p(t, e, r);
                return P(t, e), t
            }

            function j(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function K(e, t, r, n) {
                if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
            }

            function N(e, t, r, n, i) {
                if ("m" === n) throw TypeError("Private method is not writable");
                if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
            }

            function C(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }

            function x(e, t, r) {
                if (null != t) {
                    var n, i;
                    if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.");
                    if (r) {
                        if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                        n = t[Symbol.asyncDispose]
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                        n = t[Symbol.dispose], r && (i = n)
                    }
                    if ("function" != typeof n) throw TypeError("Object not disposable.");
                    i && (n = function() {
                        try {
                            i.call(this)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }), e.stack.push({
                        value: t,
                        dispose: n,
                        async: r
                    })
                } else r && e.stack.push({
                    async: !0
                });
                return t
            }
            var k = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
            };

            function R(e) {
                function t(t) {
                    e.error = e.hasError ? new k(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
                }
                return function r() {
                    for (; e.stack.length;) {
                        var n = e.stack.pop();
                        try {
                            var i = n.dispose && n.dispose.call(n.value);
                            if (n.async) return Promise.resolve(i).then(r, function(e) {
                                return t(e), r()
                            })
                        } catch (e) {
                            t(e)
                        }
                    }
                    if (e.hasError) throw e.error
                }()
            }
            t.default = {
                __extends: i,
                __assign: o,
                __rest: a,
                __decorate: s,
                __param: l,
                __metadata: y,
                __awaiter: h,
                __generator: g,
                __createBinding: p,
                __exportStar: v,
                __values: _,
                __read: m,
                __spread: w,
                __spreadArrays: b,
                __spreadArray: E,
                __await: I,
                __asyncGenerator: O,
                __asyncDelegator: S,
                __asyncValues: D,
                __makeTemplateObject: T,
                __importStar: A,
                __importDefault: j,
                __classPrivateFieldGet: K,
                __classPrivateFieldSet: N,
                __classPrivateFieldIn: C,
                __addDisposableResource: x,
                __disposeResources: R
            }
        }
    }
]);