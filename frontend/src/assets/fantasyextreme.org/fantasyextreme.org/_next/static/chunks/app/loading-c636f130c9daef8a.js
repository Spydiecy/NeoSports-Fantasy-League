(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8555], {
        36313: function(t, n, e) {
            Promise.resolve().then(e.bind(e, 12514))
        },
        9772: function(t, n) {
            var e;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                        var e = arguments[n];
                        if (e) {
                            var i = typeof e;
                            if ("string" === i || "number" === i) t.push(e);
                            else if (Array.isArray(e)) {
                                if (e.length) {
                                    var u = o.apply(null, e);
                                    u && t.push(u)
                                }
                            } else if ("object" === i) {
                                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) {
                                    t.push(e.toString());
                                    continue
                                }
                                for (var c in e) r.call(e, c) && e[c] && t.push(c)
                            }
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (o.default = o, t.exports = o) : void 0 !== (e = (function() {
                    return o
                }).apply(n, [])) && (t.exports = e)
            }()
        },
        12514: function(t, n, e) {
            "use strict";
            var r = e(9772),
                o = e.n(r),
                i = e(2265),
                u = e(72574),
                c = e(57437);
            let s = i.forwardRef((t, n) => {
                let {
                    bsPrefix: e,
                    variant: r,
                    animation: i = "border",
                    size: s,
                    as: a = "div",
                    className: f,
                    ...l
                } = t;
                e = (0, u.vE)(e, "spinner");
                let p = "".concat(e, "-").concat(i);
                return (0, c.jsx)(a, {
                    ref: n,
                    ...l,
                    className: o()(f, p, s && "".concat(p, "-").concat(s), r && "text-".concat(r))
                })
            });
            s.displayName = "Spinner", n.default = s
        },
        72574: function(t, n, e) {
            "use strict";
            e.d(n, {
                SC: function() {
                    return f
                },
                pi: function() {
                    return s
                },
                vE: function() {
                    return c
                },
                zG: function() {
                    return a
                }
            });
            var r = e(2265);
            e(57437);
            let o = r.createContext({
                    prefixes: {},
                    breakpoints: ["xxl", "xl", "lg", "md", "sm", "xs"],
                    minBreakpoint: "xs"
                }),
                {
                    Consumer: i,
                    Provider: u
                } = o;

            function c(t, n) {
                let {
                    prefixes: e
                } = (0, r.useContext)(o);
                return t || e[n] || n
            }

            function s() {
                let {
                    breakpoints: t
                } = (0, r.useContext)(o);
                return t
            }

            function a() {
                let {
                    minBreakpoint: t
                } = (0, r.useContext)(o);
                return t
            }

            function f() {
                let {
                    dir: t
                } = (0, r.useContext)(o);
                return "rtl" === t
            }
        }
    },
    function(t) {
        t.O(0, [2971, 7023, 1744], function() {
            return t(t.s = 36313)
        }), _N_E = t.O()
    }
]);