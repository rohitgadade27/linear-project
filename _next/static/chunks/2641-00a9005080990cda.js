"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2641], {
        80037: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = (0, n(87461).Z)("Check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        23441: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = (0, n(87461).Z)("ChevronDown", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        85159: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = (0, n(87461).Z)("ChevronUp", [
                ["path", {
                    d: "m18 15-6-6-6 6",
                    key: "153udz"
                }]
            ])
        },
        37501: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = (0, n(87461).Z)("Circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        8792: function(e, t, n) {
            n.d(t, {
                default: function() {
                    return o.a
                }
            });
            var r = n(25250),
                o = n.n(r)
        },
        86969: function(e, t, n) {
            n.d(t, {
                fC: function() {
                    return C
                },
                z$: function() {
                    return k
                }
            });
            var r = n(14749),
                o = n(64090),
                l = n(61266),
                a = n(84104),
                i = n(44991),
                u = n(9310),
                c = n(65030),
                d = n(76769),
                s = n(12642),
                f = n(29586);
            let p = "Checkbox",
                [m, v] = (0, a.b)(p),
                [h, w] = m(p),
                g = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeCheckbox: n,
                        name: a,
                        checked: c,
                        defaultChecked: d,
                        required: s,
                        disabled: p,
                        value: m = "on",
                        onCheckedChange: v,
                        ...w
                    } = e, [g, b] = (0, o.useState)(null), C = (0, l.e)(t, e => b(e)), k = (0, o.useRef)(!1), R = !g || !!g.closest("form"), [x = !1, _] = (0, u.T)({
                        prop: c,
                        defaultProp: d,
                        onChange: v
                    }), M = (0, o.useRef)(x);
                    return (0, o.useEffect)(() => {
                        let e = null == g ? void 0 : g.form;
                        if (e) {
                            let t = () => _(M.current);
                            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
                        }
                    }, [g, _]), (0, o.createElement)(h, {
                        scope: n,
                        state: x,
                        disabled: p
                    }, (0, o.createElement)(f.WV.button, (0, r.Z)({
                        type: "button",
                        role: "checkbox",
                        "aria-checked": y(x) ? "mixed" : x,
                        "aria-required": s,
                        "data-state": S(x),
                        "data-disabled": p ? "" : void 0,
                        disabled: p,
                        value: m
                    }, w, {
                        ref: C,
                        onKeyDown: (0, i.M)(e.onKeyDown, e => {
                            "Enter" === e.key && e.preventDefault()
                        }),
                        onClick: (0, i.M)(e.onClick, e => {
                            _(e => !!y(e) || !e), R && (k.current = e.isPropagationStopped(), k.current || e.stopPropagation())
                        })
                    })), R && (0, o.createElement)(E, {
                        control: g,
                        bubbles: !k.current,
                        name: a,
                        value: m,
                        checked: x,
                        required: s,
                        disabled: p,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                b = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeCheckbox: n,
                        forceMount: l,
                        ...a
                    } = e, i = w("CheckboxIndicator", n);
                    return (0, o.createElement)(s.z, {
                        present: l || y(i.state) || !0 === i.state
                    }, (0, o.createElement)(f.WV.span, (0, r.Z)({
                        "data-state": S(i.state),
                        "data-disabled": i.disabled ? "" : void 0
                    }, a, {
                        ref: t,
                        style: {
                            pointerEvents: "none",
                            ...e.style
                        }
                    })))
                }),
                E = e => {
                    let {
                        control: t,
                        checked: n,
                        bubbles: l = !0,
                        ...a
                    } = e, i = (0, o.useRef)(null), u = (0, c.D)(n), s = (0, d.t)(t);
                    return (0, o.useEffect)(() => {
                        let e = i.current,
                            t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                        if (u !== n && t) {
                            let r = new Event("click", {
                                bubbles: l
                            });
                            e.indeterminate = y(n), t.call(e, !y(n) && n), e.dispatchEvent(r)
                        }
                    }, [u, n, l]), (0, o.createElement)("input", (0, r.Z)({
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: !y(n) && n
                    }, a, {
                        tabIndex: -1,
                        ref: i,
                        style: { ...e.style,
                            ...s,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function y(e) {
                return "indeterminate" === e
            }

            function S(e) {
                return y(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }
            let C = g,
                k = b
        },
        27533: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return i
                }
            });
            var r = n(64090),
                o = n(84104),
                l = n(61266),
                a = n(59143);

            function i(e) {
                let t = e + "CollectionProvider",
                    [n, i] = (0, o.b)(t),
                    [u, c] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e + "CollectionSlot",
                    s = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o
                        } = e, i = c(d, n), u = (0, l.e)(t, i.collectionRef);
                        return r.createElement(a.g7, {
                            ref: u
                        }, o)
                    }),
                    f = e + "CollectionItemSlot",
                    p = "data-radix-collection-item";
                return [{
                    Provider: e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), l = r.useRef(new Map).current;
                        return r.createElement(u, {
                            scope: t,
                            itemMap: l,
                            collectionRef: o
                        }, n)
                    },
                    Slot: s,
                    ItemSlot: r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...i
                        } = e, u = r.useRef(null), d = (0, l.e)(t, u), s = c(f, n);
                        return r.useEffect(() => (s.itemMap.set(u, {
                            ref: u,
                            ...i
                        }), () => void s.itemMap.delete(u))), r.createElement(a.g7, {
                            [p]: "",
                            ref: d
                        }, o)
                    })
                }, function(t) {
                    let n = c(e + "CollectionConsumer", t);
                    return r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll(`[${p}]`));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, i]
            }
        },
        24602: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return a
                }
            });
            var r = n(14749),
                o = n(64090),
                l = n(29586);
            let a = (0, o.forwardRef)((e, t) => (0, o.createElement)(l.WV.label, (0, r.Z)({}, e, {
                ref: t,
                onMouseDown: t => {
                    var n;
                    null === (n = e.onMouseDown) || void 0 === n || n.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault()
                }
            })))
        },
        68928: function(e, t, n) {
            n.d(t, {
                ck: function() {
                    return L
                },
                fC: function() {
                    return A
                },
                z$: function() {
                    return W
                }
            });
            var r = n(14749),
                o = n(64090),
                l = n(44991),
                a = n(61266),
                i = n(84104),
                u = n(29586),
                c = n(23715),
                d = n(9310),
                s = n(12275),
                f = n(76769),
                p = n(65030),
                m = n(12642);
            let v = "Radio",
                [h, w] = (0, i.b)(v),
                [g, b] = h(v),
                E = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRadio: n,
                        name: i,
                        checked: c = !1,
                        required: d,
                        disabled: s,
                        value: f = "on",
                        onCheck: p,
                        ...m
                    } = e, [v, h] = (0, o.useState)(null), w = (0, a.e)(t, e => h(e)), b = (0, o.useRef)(!1), E = !v || !!v.closest("form");
                    return (0, o.createElement)(g, {
                        scope: n,
                        checked: c,
                        disabled: s
                    }, (0, o.createElement)(u.WV.button, (0, r.Z)({
                        type: "button",
                        role: "radio",
                        "aria-checked": c,
                        "data-state": C(c),
                        "data-disabled": s ? "" : void 0,
                        disabled: s,
                        value: f
                    }, m, {
                        ref: w,
                        onClick: (0, l.M)(e.onClick, e => {
                            c || null == p || p(), E && (b.current = e.isPropagationStopped(), b.current || e.stopPropagation())
                        })
                    })), E && (0, o.createElement)(S, {
                        control: v,
                        bubbles: !b.current,
                        name: i,
                        value: f,
                        checked: c,
                        required: d,
                        disabled: s,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                y = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRadio: n,
                        forceMount: l,
                        ...a
                    } = e, i = b("RadioIndicator", n);
                    return (0, o.createElement)(m.z, {
                        present: l || i.checked
                    }, (0, o.createElement)(u.WV.span, (0, r.Z)({
                        "data-state": C(i.checked),
                        "data-disabled": i.disabled ? "" : void 0
                    }, a, {
                        ref: t
                    })))
                }),
                S = e => {
                    let {
                        control: t,
                        checked: n,
                        bubbles: l = !0,
                        ...a
                    } = e, i = (0, o.useRef)(null), u = (0, p.D)(n), c = (0, f.t)(t);
                    return (0, o.useEffect)(() => {
                        let e = i.current,
                            t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                        if (u !== n && t) {
                            let r = new Event("click", {
                                bubbles: l
                            });
                            t.call(e, n), e.dispatchEvent(r)
                        }
                    }, [u, n, l]), (0, o.createElement)("input", (0, r.Z)({
                        type: "radio",
                        "aria-hidden": !0,
                        defaultChecked: n
                    }, a, {
                        tabIndex: -1,
                        ref: i,
                        style: { ...e.style,
                            ...c,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function C(e) {
                return e ? "checked" : "unchecked"
            }
            let k = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
                R = "RadioGroup",
                [x, _] = (0, i.b)(R, [c.Pc, w]),
                M = (0, c.Pc)(),
                D = w(),
                [P, I] = x(R),
                T = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRadioGroup: n,
                        name: l,
                        defaultValue: a,
                        value: i,
                        required: f = !1,
                        disabled: p = !1,
                        orientation: m,
                        dir: v,
                        loop: h = !0,
                        onValueChange: w,
                        ...g
                    } = e, b = M(n), E = (0, s.gm)(v), [y, S] = (0, d.T)({
                        prop: i,
                        defaultProp: a,
                        onChange: w
                    });
                    return (0, o.createElement)(P, {
                        scope: n,
                        name: l,
                        required: f,
                        disabled: p,
                        value: y,
                        onValueChange: S
                    }, (0, o.createElement)(c.fC, (0, r.Z)({
                        asChild: !0
                    }, b, {
                        orientation: m,
                        dir: E,
                        loop: h
                    }), (0, o.createElement)(u.WV.div, (0, r.Z)({
                        role: "radiogroup",
                        "aria-required": f,
                        "aria-orientation": m,
                        "data-disabled": p ? "" : void 0,
                        dir: E
                    }, g, {
                        ref: t
                    }))))
                }),
                Z = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRadioGroup: n,
                        disabled: i,
                        ...u
                    } = e, d = I("RadioGroupItem", n), s = d.disabled || i, f = M(n), p = D(n), m = (0, o.useRef)(null), v = (0, a.e)(t, m), h = d.value === u.value, w = (0, o.useRef)(!1);
                    return (0, o.useEffect)(() => {
                        let e = e => {
                                k.includes(e.key) && (w.current = !0)
                            },
                            t = () => w.current = !1;
                        return document.addEventListener("keydown", e), document.addEventListener("keyup", t), () => {
                            document.removeEventListener("keydown", e), document.removeEventListener("keyup", t)
                        }
                    }, []), (0, o.createElement)(c.ck, (0, r.Z)({
                        asChild: !0
                    }, f, {
                        focusable: !s,
                        active: h
                    }), (0, o.createElement)(E, (0, r.Z)({
                        disabled: s,
                        required: d.required,
                        checked: h
                    }, p, u, {
                        name: d.name,
                        ref: v,
                        onCheck: () => d.onValueChange(u.value),
                        onKeyDown: (0, l.M)(e => {
                            "Enter" === e.key && e.preventDefault()
                        }),
                        onFocus: (0, l.M)(u.onFocus, () => {
                            var e;
                            w.current && (null === (e = m.current) || void 0 === e || e.click())
                        })
                    })))
                }),
                V = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRadioGroup: n,
                        ...l
                    } = e, a = D(n);
                    return (0, o.createElement)(y, (0, r.Z)({}, a, l, {
                        ref: t
                    }))
                }),
                A = T,
                L = Z,
                W = V
        },
        23715: function(e, t, n) {
            n.d(t, {
                Pc: function() {
                    return y
                },
                ck: function() {
                    return P
                },
                fC: function() {
                    return D
                }
            });
            var r = n(14749),
                o = n(64090),
                l = n(44991),
                a = n(27533),
                i = n(61266),
                u = n(84104),
                c = n(38687),
                d = n(29586),
                s = n(39830),
                f = n(9310),
                p = n(12275);
            let m = "rovingFocusGroup.onEntryFocus",
                v = {
                    bubbles: !1,
                    cancelable: !0
                },
                h = "RovingFocusGroup",
                [w, g, b] = (0, a.B)(h),
                [E, y] = (0, u.b)(h, [b]),
                [S, C] = E(h),
                k = (0, o.forwardRef)((e, t) => (0, o.createElement)(w.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(w.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(R, (0, r.Z)({}, e, {
                    ref: t
                }))))),
                R = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: a,
                        loop: u = !1,
                        dir: c,
                        currentTabStopId: h,
                        defaultCurrentTabStopId: w,
                        onCurrentTabStopIdChange: b,
                        onEntryFocus: E,
                        ...y
                    } = e, C = (0, o.useRef)(null), k = (0, i.e)(t, C), R = (0, p.gm)(c), [x = null, _] = (0, f.T)({
                        prop: h,
                        defaultProp: w,
                        onChange: b
                    }), [D, P] = (0, o.useState)(!1), I = (0, s.W)(E), T = g(n), Z = (0, o.useRef)(!1), [V, A] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = C.current;
                        if (e) return e.addEventListener(m, I), () => e.removeEventListener(m, I)
                    }, [I]), (0, o.createElement)(S, {
                        scope: n,
                        orientation: a,
                        dir: R,
                        loop: u,
                        currentTabStopId: x,
                        onItemFocus: (0, o.useCallback)(e => _(e), [_]),
                        onItemShiftTab: (0, o.useCallback)(() => P(!0), []),
                        onFocusableItemAdd: (0, o.useCallback)(() => A(e => e + 1), []),
                        onFocusableItemRemove: (0, o.useCallback)(() => A(e => e - 1), [])
                    }, (0, o.createElement)(d.WV.div, (0, r.Z)({
                        tabIndex: D || 0 === V ? -1 : 0,
                        "data-orientation": a
                    }, y, {
                        ref: k,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, l.M)(e.onMouseDown, () => {
                            Z.current = !0
                        }),
                        onFocus: (0, l.M)(e.onFocus, e => {
                            let t = !Z.current;
                            if (e.target === e.currentTarget && t && !D) {
                                let t = new CustomEvent(m, v);
                                if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                    let e = T().filter(e => e.focusable);
                                    M([e.find(e => e.active), e.find(e => e.id === x), ...e].filter(Boolean).map(e => e.ref.current))
                                }
                            }
                            Z.current = !1
                        }),
                        onBlur: (0, l.M)(e.onBlur, () => P(!1))
                    })))
                }),
                x = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: a = !0,
                        active: i = !1,
                        tabStopId: u,
                        ...s
                    } = e, f = (0, c.M)(), p = u || f, m = C("RovingFocusGroupItem", n), v = m.currentTabStopId === p, h = g(n), {
                        onFocusableItemAdd: b,
                        onFocusableItemRemove: E
                    } = m;
                    return (0, o.useEffect)(() => {
                        if (a) return b(), () => E()
                    }, [a, b, E]), (0, o.createElement)(w.ItemSlot, {
                        scope: n,
                        id: p,
                        focusable: a,
                        active: i
                    }, (0, o.createElement)(d.WV.span, (0, r.Z)({
                        tabIndex: v ? 0 : -1,
                        "data-orientation": m.orientation
                    }, s, {
                        ref: t,
                        onMouseDown: (0, l.M)(e.onMouseDown, e => {
                            a ? m.onItemFocus(p) : e.preventDefault()
                        }),
                        onFocus: (0, l.M)(e.onFocus, () => m.onItemFocus(p)),
                        onKeyDown: (0, l.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                m.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let t = function(e, t, n) {
                                var r;
                                let o = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return _[o]
                            }(e, m.orientation, m.dir);
                            if (void 0 !== t) {
                                e.preventDefault();
                                let o = h().filter(e => e.focusable).map(e => e.ref.current);
                                if ("last" === t) o.reverse();
                                else if ("prev" === t || "next" === t) {
                                    var n, r;
                                    "prev" === t && o.reverse();
                                    let l = o.indexOf(e.currentTarget);
                                    o = m.loop ? (n = o, r = l + 1, n.map((e, t) => n[(r + t) % n.length])) : o.slice(l + 1)
                                }
                                setTimeout(() => M(o))
                            }
                        })
                    })))
                }),
                _ = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function M(e) {
                let t = document.activeElement;
                for (let n of e)
                    if (n === t || (n.focus(), document.activeElement !== t)) return
            }
            let D = k,
                P = x
        },
        78473: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return ex
                },
                ZA: function() {
                    return eM
                },
                JO: function() {
                    return ek
                },
                ck: function() {
                    return eP
                },
                wU: function() {
                    return eT
                },
                eT: function() {
                    return eI
                },
                __: function() {
                    return eD
                },
                h_: function() {
                    return eR
                },
                fC: function() {
                    return ey
                },
                $G: function() {
                    return eV
                },
                u_: function() {
                    return eZ
                },
                Z0: function() {
                    return eA
                },
                xz: function() {
                    return eS
                },
                B4: function() {
                    return eC
                },
                l_: function() {
                    return e_
                }
            });
            var r = n(14749),
                o = n(64090),
                l = n(89542),
                a = n(22219),
                i = n(44991),
                u = n(27533),
                c = n(61266),
                d = n(84104),
                s = n(12275),
                f = n(1260),
                p = n(46165),
                m = n(78082),
                v = n(38687),
                h = n(12338),
                w = n(37881),
                g = n(29586),
                b = n(59143),
                E = n(39830),
                y = n(9310),
                S = n(32618),
                C = n(65030);
            let k = (0, o.forwardRef)((e, t) => (0, o.createElement)(g.WV.span, (0, r.Z)({}, e, {
                ref: t,
                style: {
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal",
                    ...e.style
                }
            })));
            var R = n(66674),
                x = n(47225);
            let _ = [" ", "Enter", "ArrowUp", "ArrowDown"],
                M = [" ", "Enter"],
                D = "Select",
                [P, I, T] = (0, u.B)(D),
                [Z, V] = (0, d.b)(D, [T, h.D7]),
                A = (0, h.D7)(),
                [L, W] = Z(D),
                [O, F] = Z(D),
                H = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        disabled: l = !1,
                        ...a
                    } = e, u = A(n), d = W("SelectTrigger", n), s = d.disabled || l, f = (0, c.e)(t, d.onTriggerChange), p = I(n), [m, v, w] = eb(e => {
                        let t = p().filter(e => !e.disabled),
                            n = t.find(e => e.value === d.value),
                            r = eE(t, e, n);
                        void 0 !== r && d.onValueChange(r.value)
                    }), b = () => {
                        s || (d.onOpenChange(!0), w())
                    };
                    return (0, o.createElement)(h.ee, (0, r.Z)({
                        asChild: !0
                    }, u), (0, o.createElement)(g.WV.button, (0, r.Z)({
                        type: "button",
                        role: "combobox",
                        "aria-controls": d.contentId,
                        "aria-expanded": d.open,
                        "aria-required": d.required,
                        "aria-autocomplete": "none",
                        dir: d.dir,
                        "data-state": d.open ? "open" : "closed",
                        disabled: s,
                        "data-disabled": s ? "" : void 0,
                        "data-placeholder": ew(d.value) ? "" : void 0
                    }, a, {
                        ref: f,
                        onClick: (0, i.M)(a.onClick, e => {
                            e.currentTarget.focus()
                        }),
                        onPointerDown: (0, i.M)(a.onPointerDown, e => {
                            let t = e.target;
                            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (b(), d.triggerPointerDownPosRef.current = {
                                x: Math.round(e.pageX),
                                y: Math.round(e.pageY)
                            }, e.preventDefault())
                        }),
                        onKeyDown: (0, i.M)(a.onKeyDown, e => {
                            let t = "" !== m.current;
                            e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || v(e.key), (!t || " " !== e.key) && _.includes(e.key) && (b(), e.preventDefault())
                        })
                    })))
                }),
                K = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: l,
                        style: a,
                        children: i,
                        placeholder: u = "",
                        ...d
                    } = e, s = W("SelectValue", n), {
                        onValueNodeHasChildrenChange: f
                    } = s, p = void 0 !== i, m = (0, c.e)(t, s.onValueNodeChange);
                    return (0, S.b)(() => {
                        f(p)
                    }, [f, p]), (0, o.createElement)(g.WV.span, (0, r.Z)({}, d, {
                        ref: m,
                        style: {
                            pointerEvents: "none"
                        }
                    }), ew(s.value) ? (0, o.createElement)(o.Fragment, null, u) : i)
                }),
                B = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        children: l,
                        ...a
                    } = e;
                    return (0, o.createElement)(g.WV.span, (0, r.Z)({
                        "aria-hidden": !0
                    }, a, {
                        ref: t
                    }), l || "▼")
                }),
                q = "SelectContent",
                N = (0, o.forwardRef)((e, t) => {
                    let n = W(q, e.__scopeSelect),
                        [a, i] = (0, o.useState)();
                    return ((0, S.b)(() => {
                        i(new DocumentFragment)
                    }, []), n.open) ? (0, o.createElement)(G, (0, r.Z)({}, e, {
                        ref: t
                    })) : a ? (0, l.createPortal)((0, o.createElement)(U, {
                        scope: e.__scopeSelect
                    }, (0, o.createElement)(P.Slot, {
                        scope: e.__scopeSelect
                    }, (0, o.createElement)("div", null, e.children))), a) : null
                }),
                [U, z] = Z(q),
                G = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        position: l = "item-aligned",
                        onCloseAutoFocus: a,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: d,
                        side: s,
                        sideOffset: v,
                        align: h,
                        alignOffset: w,
                        arrowPadding: g,
                        collisionBoundary: E,
                        collisionPadding: y,
                        sticky: S,
                        hideWhenDetached: C,
                        avoidCollisions: k,
                        ..._
                    } = e, M = W(q, n), [D, P] = (0, o.useState)(null), [T, Z] = (0, o.useState)(null), V = (0, c.e)(t, e => P(e)), [A, L] = (0, o.useState)(null), [O, F] = (0, o.useState)(null), H = I(n), [K, B] = (0, o.useState)(!1), N = (0, o.useRef)(!1);
                    (0, o.useEffect)(() => {
                        if (D) return (0, R.Ry)(D)
                    }, [D]), (0, p.EW)();
                    let z = (0, o.useCallback)(e => {
                            let [t, ...n] = H().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
                            for (let n of e)
                                if (n === o || (null == n || n.scrollIntoView({
                                        block: "nearest"
                                    }), n === t && T && (T.scrollTop = 0), n === r && T && (T.scrollTop = T.scrollHeight), null == n || n.focus(), document.activeElement !== o)) return
                        }, [H, T]),
                        G = (0, o.useCallback)(() => z([A, D]), [z, A, D]);
                    (0, o.useEffect)(() => {
                        K && G()
                    }, [K, G]);
                    let {
                        onOpenChange: j,
                        triggerPointerDownPosRef: Y
                    } = M;
                    (0, o.useEffect)(() => {
                        if (D) {
                            let e = {
                                    x: 0,
                                    y: 0
                                },
                                t = t => {
                                    var n, r, o, l;
                                    e = {
                                        x: Math.abs(Math.round(t.pageX) - (null !== (n = null === (r = Y.current) || void 0 === r ? void 0 : r.x) && void 0 !== n ? n : 0)),
                                        y: Math.abs(Math.round(t.pageY) - (null !== (o = null === (l = Y.current) || void 0 === l ? void 0 : l.y) && void 0 !== o ? o : 0))
                                    }
                                },
                                n = n => {
                                    e.x <= 10 && e.y <= 10 ? n.preventDefault() : D.contains(n.target) || j(!1), document.removeEventListener("pointermove", t), Y.current = null
                                };
                            return null !== Y.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                                capture: !0,
                                once: !0
                            })), () => {
                                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                                    capture: !0
                                })
                            }
                        }
                    }, [D, j, Y]), (0, o.useEffect)(() => {
                        let e = () => j(!1);
                        return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                            window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                        }
                    }, [j]);
                    let [J, Q] = eb(e => {
                        let t = H().filter(e => !e.disabled),
                            n = t.find(e => e.ref.current === document.activeElement),
                            r = eE(t, e, n);
                        r && setTimeout(() => r.ref.current.focus())
                    }), ee = (0, o.useCallback)((e, t, n) => {
                        let r = !N.current && !n;
                        (void 0 !== M.value && M.value === t || r) && (L(e), r && (N.current = !0))
                    }, [M.value]), et = (0, o.useCallback)(() => null == D ? void 0 : D.focus(), [D]), en = (0, o.useCallback)((e, t, n) => {
                        let r = !N.current && !n;
                        (void 0 !== M.value && M.value === t || r) && F(e)
                    }, [M.value]), er = "popper" === l ? $ : X;
                    return (0, o.createElement)(U, {
                        scope: n,
                        content: D,
                        viewport: T,
                        onViewportChange: Z,
                        itemRefCallback: ee,
                        selectedItem: A,
                        onItemLeave: et,
                        itemTextRefCallback: en,
                        focusSelectedItem: G,
                        selectedItemText: O,
                        position: l,
                        isPositioned: K,
                        searchRef: J
                    }, (0, o.createElement)(x.Z, {
                        as: b.g7,
                        allowPinchZoom: !0
                    }, (0, o.createElement)(m.M, {
                        asChild: !0,
                        trapped: M.open,
                        onMountAutoFocus: e => {
                            e.preventDefault()
                        },
                        onUnmountAutoFocus: (0, i.M)(a, e => {
                            var t;
                            null === (t = M.trigger) || void 0 === t || t.focus({
                                preventScroll: !0
                            }), e.preventDefault()
                        })
                    }, (0, o.createElement)(f.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: d,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: () => M.onOpenChange(!1)
                    }, (0, o.createElement)(er, (0, r.Z)({
                        role: "listbox",
                        id: M.contentId,
                        "data-state": M.open ? "open" : "closed",
                        dir: M.dir,
                        onContextMenu: e => e.preventDefault()
                    }, _, er === $ ? {
                        side: s,
                        sideOffset: v,
                        align: h,
                        alignOffset: w,
                        arrowPadding: g,
                        collisionBoundary: E,
                        collisionPadding: y,
                        sticky: S,
                        hideWhenDetached: C,
                        avoidCollisions: k
                    } : {}, {
                        onPlaced: () => B(!0),
                        ref: V,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ..._.style
                        },
                        onKeyDown: (0, i.M)(_.onKeyDown, e => {
                            let t = e.ctrlKey || e.altKey || e.metaKey;
                            if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || Q(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                let t = H().filter(e => !e.disabled).map(e => e.ref.current);
                                if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                    let n = e.target,
                                        r = t.indexOf(n);
                                    t = t.slice(r + 1)
                                }
                                setTimeout(() => z(t)), e.preventDefault()
                            }
                        })
                    }))))))
                }),
                X = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        onPlaced: l,
                        ...i
                    } = e, u = W(q, n), d = z(q, n), [s, f] = (0, o.useState)(null), [p, m] = (0, o.useState)(null), v = (0, c.e)(t, e => m(e)), h = I(n), w = (0, o.useRef)(!1), b = (0, o.useRef)(!0), {
                        viewport: E,
                        selectedItem: y,
                        selectedItemText: C,
                        focusSelectedItem: k
                    } = d, R = (0, o.useCallback)(() => {
                        if (u.trigger && u.valueNode && s && p && E && y && C) {
                            let e = u.trigger.getBoundingClientRect(),
                                t = p.getBoundingClientRect(),
                                n = u.valueNode.getBoundingClientRect(),
                                r = C.getBoundingClientRect();
                            if ("rtl" !== u.dir) {
                                let o = r.left - t.left,
                                    l = n.left - o,
                                    i = e.left - l,
                                    u = e.width + i,
                                    c = Math.max(u, t.width),
                                    d = window.innerWidth - 10,
                                    f = (0, a.u)(l, [10, d - c]);
                                s.style.minWidth = u + "px", s.style.left = f + "px"
                            } else {
                                let o = t.right - r.right,
                                    l = window.innerWidth - n.right - o,
                                    i = window.innerWidth - e.right - l,
                                    u = e.width + i,
                                    c = Math.max(u, t.width),
                                    d = window.innerWidth - 10,
                                    f = (0, a.u)(l, [10, d - c]);
                                s.style.minWidth = u + "px", s.style.right = f + "px"
                            }
                            let o = h(),
                                i = window.innerHeight - 20,
                                c = E.scrollHeight,
                                d = window.getComputedStyle(p),
                                f = parseInt(d.borderTopWidth, 10),
                                m = parseInt(d.paddingTop, 10),
                                v = parseInt(d.borderBottomWidth, 10),
                                g = f + m + c + parseInt(d.paddingBottom, 10) + v,
                                b = Math.min(5 * y.offsetHeight, g),
                                S = window.getComputedStyle(E),
                                k = parseInt(S.paddingTop, 10),
                                R = parseInt(S.paddingBottom, 10),
                                x = e.top + e.height / 2 - 10,
                                _ = y.offsetHeight / 2,
                                M = f + m + (y.offsetTop + _);
                            if (M <= x) {
                                let e = y === o[o.length - 1].ref.current;
                                s.style.bottom = "0px";
                                let t = p.clientHeight - E.offsetTop - E.offsetHeight;
                                s.style.height = M + Math.max(i - x, _ + (e ? R : 0) + t + v) + "px"
                            } else {
                                let e = y === o[0].ref.current;
                                s.style.top = "0px";
                                let t = Math.max(x, f + E.offsetTop + (e ? k : 0) + _);
                                s.style.height = t + (g - M) + "px", E.scrollTop = M - x + E.offsetTop
                            }
                            s.style.margin = "10px 0", s.style.minHeight = b + "px", s.style.maxHeight = i + "px", null == l || l(), requestAnimationFrame(() => w.current = !0)
                        }
                    }, [h, u.trigger, u.valueNode, s, p, E, y, C, u.dir, l]);
                    (0, S.b)(() => R(), [R]);
                    let [x, _] = (0, o.useState)();
                    (0, S.b)(() => {
                        p && _(window.getComputedStyle(p).zIndex)
                    }, [p]);
                    let M = (0, o.useCallback)(e => {
                        e && !0 === b.current && (R(), null == k || k(), b.current = !1)
                    }, [R, k]);
                    return (0, o.createElement)(j, {
                        scope: n,
                        contentWrapper: s,
                        shouldExpandOnScrollRef: w,
                        onScrollButtonChange: M
                    }, (0, o.createElement)("div", {
                        ref: f,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: x
                        }
                    }, (0, o.createElement)(g.WV.div, (0, r.Z)({}, i, {
                        ref: v,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...i.style
                        }
                    }))))
                }),
                $ = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        align: l = "start",
                        collisionPadding: a = 10,
                        ...i
                    } = e, u = A(n);
                    return (0, o.createElement)(h.VY, (0, r.Z)({}, u, i, {
                        ref: t,
                        align: l,
                        collisionPadding: a,
                        style: {
                            boxSizing: "border-box",
                            ...i.style,
                            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                [j, Y] = Z(q, {}),
                J = "SelectViewport",
                Q = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...l
                    } = e, a = z(J, n), u = Y(J, n), d = (0, c.e)(t, a.onViewportChange), s = (0, o.useRef)(0);
                    return (0, o.createElement)(o.Fragment, null, (0, o.createElement)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        }
                    }), (0, o.createElement)(P.Slot, {
                        scope: n
                    }, (0, o.createElement)(g.WV.div, (0, r.Z)({
                        "data-radix-select-viewport": "",
                        role: "presentation"
                    }, l, {
                        ref: d,
                        style: {
                            position: "relative",
                            flex: 1,
                            overflow: "auto",
                            ...l.style
                        },
                        onScroll: (0, i.M)(l.onScroll, e => {
                            let t = e.currentTarget,
                                {
                                    contentWrapper: n,
                                    shouldExpandOnScrollRef: r
                                } = u;
                            if (null != r && r.current && n) {
                                let e = Math.abs(s.current - t.scrollTop);
                                if (e > 0) {
                                    let r = window.innerHeight - 20,
                                        o = Math.max(parseFloat(n.style.minHeight), parseFloat(n.style.height));
                                    if (o < r) {
                                        let l = o + e,
                                            a = Math.min(r, l),
                                            i = l - a;
                                        n.style.height = a + "px", "0px" === n.style.bottom && (t.scrollTop = i > 0 ? i : 0, n.style.justifyContent = "flex-end")
                                    }
                                }
                            }
                            s.current = t.scrollTop
                        })
                    }))))
                }),
                [ee, et] = Z("SelectGroup"),
                en = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...l
                    } = e, a = (0, v.M)();
                    return (0, o.createElement)(ee, {
                        scope: n,
                        id: a
                    }, (0, o.createElement)(g.WV.div, (0, r.Z)({
                        role: "group",
                        "aria-labelledby": a
                    }, l, {
                        ref: t
                    })))
                }),
                er = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...l
                    } = e, a = et("SelectLabel", n);
                    return (0, o.createElement)(g.WV.div, (0, r.Z)({
                        id: a.id
                    }, l, {
                        ref: t
                    }))
                }),
                eo = "SelectItem",
                [el, ea] = Z(eo),
                ei = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        value: l,
                        disabled: a = !1,
                        textValue: u,
                        ...d
                    } = e, s = W(eo, n), f = z(eo, n), p = s.value === l, [m, h] = (0, o.useState)(null != u ? u : ""), [w, b] = (0, o.useState)(!1), E = (0, c.e)(t, e => {
                        var t;
                        return null === (t = f.itemRefCallback) || void 0 === t ? void 0 : t.call(f, e, l, a)
                    }), y = (0, v.M)(), S = () => {
                        a || (s.onValueChange(l), s.onOpenChange(!1))
                    };
                    if ("" === l) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, o.createElement)(el, {
                        scope: n,
                        value: l,
                        disabled: a,
                        textId: y,
                        isSelected: p,
                        onItemTextChange: (0, o.useCallback)(e => {
                            h(t => {
                                var n;
                                return t || (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim()
                            })
                        }, [])
                    }, (0, o.createElement)(P.ItemSlot, {
                        scope: n,
                        value: l,
                        disabled: a,
                        textValue: m
                    }, (0, o.createElement)(g.WV.div, (0, r.Z)({
                        role: "option",
                        "aria-labelledby": y,
                        "data-highlighted": w ? "" : void 0,
                        "aria-selected": p && w,
                        "data-state": p ? "checked" : "unchecked",
                        "aria-disabled": a || void 0,
                        "data-disabled": a ? "" : void 0,
                        tabIndex: a ? void 0 : -1
                    }, d, {
                        ref: E,
                        onFocus: (0, i.M)(d.onFocus, () => b(!0)),
                        onBlur: (0, i.M)(d.onBlur, () => b(!1)),
                        onPointerUp: (0, i.M)(d.onPointerUp, S),
                        onPointerMove: (0, i.M)(d.onPointerMove, e => {
                            if (a) {
                                var t;
                                null === (t = f.onItemLeave) || void 0 === t || t.call(f)
                            } else e.currentTarget.focus({
                                preventScroll: !0
                            })
                        }),
                        onPointerLeave: (0, i.M)(d.onPointerLeave, e => {
                            if (e.currentTarget === document.activeElement) {
                                var t;
                                null === (t = f.onItemLeave) || void 0 === t || t.call(f)
                            }
                        }),
                        onKeyDown: (0, i.M)(d.onKeyDown, e => {
                            var t;
                            (null === (t = f.searchRef) || void 0 === t ? void 0 : t.current) !== "" && " " === e.key || (M.includes(e.key) && S(), " " === e.key && e.preventDefault())
                        })
                    }))))
                }),
                eu = "SelectItemText",
                ec = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: a,
                        style: i,
                        ...u
                    } = e, d = W(eu, n), s = z(eu, n), f = ea(eu, n), p = F(eu, n), [m, v] = (0, o.useState)(null), h = (0, c.e)(t, e => v(e), f.onItemTextChange, e => {
                        var t;
                        return null === (t = s.itemTextRefCallback) || void 0 === t ? void 0 : t.call(s, e, f.value, f.disabled)
                    }), w = null == m ? void 0 : m.textContent, b = (0, o.useMemo)(() => (0, o.createElement)("option", {
                        key: f.value,
                        value: f.value,
                        disabled: f.disabled
                    }, w), [f.disabled, f.value, w]), {
                        onNativeOptionAdd: E,
                        onNativeOptionRemove: y
                    } = p;
                    return (0, S.b)(() => (E(b), () => y(b)), [E, y, b]), (0, o.createElement)(o.Fragment, null, (0, o.createElement)(g.WV.span, (0, r.Z)({
                        id: f.textId
                    }, u, {
                        ref: h
                    })), f.isSelected && d.valueNode && !d.valueNodeHasChildren ? (0, l.createPortal)(u.children, d.valueNode) : null)
                }),
                ed = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...l
                    } = e;
                    return ea("SelectItemIndicator", n).isSelected ? (0, o.createElement)(g.WV.span, (0, r.Z)({
                        "aria-hidden": !0
                    }, l, {
                        ref: t
                    })) : null
                }),
                es = "SelectScrollUpButton",
                ef = (0, o.forwardRef)((e, t) => {
                    let n = z(es, e.__scopeSelect),
                        l = Y(es, e.__scopeSelect),
                        [a, i] = (0, o.useState)(!1),
                        u = (0, c.e)(t, l.onScrollButtonChange);
                    return (0, S.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let t = n.viewport;

                            function e() {
                                i(t.scrollTop > 0)
                            }
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), a ? (0, o.createElement)(ev, (0, r.Z)({}, e, {
                        ref: u,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    })) : null
                }),
                ep = "SelectScrollDownButton",
                em = (0, o.forwardRef)((e, t) => {
                    let n = z(ep, e.__scopeSelect),
                        l = Y(ep, e.__scopeSelect),
                        [a, i] = (0, o.useState)(!1),
                        u = (0, c.e)(t, l.onScrollButtonChange);
                    return (0, S.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let t = n.viewport;

                            function e() {
                                let e = t.scrollHeight - t.clientHeight;
                                i(Math.ceil(t.scrollTop) < e)
                            }
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), a ? (0, o.createElement)(ev, (0, r.Z)({}, e, {
                        ref: u,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    })) : null
                }),
                ev = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        onAutoScroll: l,
                        ...a
                    } = e, u = z("SelectScrollButton", n), c = (0, o.useRef)(null), d = I(n), s = (0, o.useCallback)(() => {
                        null !== c.current && (window.clearInterval(c.current), c.current = null)
                    }, []);
                    return (0, o.useEffect)(() => () => s(), [s]), (0, S.b)(() => {
                        var e;
                        let t = d().find(e => e.ref.current === document.activeElement);
                        null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                            block: "nearest"
                        })
                    }, [d]), (0, o.createElement)(g.WV.div, (0, r.Z)({
                        "aria-hidden": !0
                    }, a, {
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...a.style
                        },
                        onPointerDown: (0, i.M)(a.onPointerDown, () => {
                            null === c.current && (c.current = window.setInterval(l, 50))
                        }),
                        onPointerMove: (0, i.M)(a.onPointerMove, () => {
                            var e;
                            null === (e = u.onItemLeave) || void 0 === e || e.call(u), null === c.current && (c.current = window.setInterval(l, 50))
                        }),
                        onPointerLeave: (0, i.M)(a.onPointerLeave, () => {
                            s()
                        })
                    }))
                }),
                eh = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...l
                    } = e;
                    return (0, o.createElement)(g.WV.div, (0, r.Z)({
                        "aria-hidden": !0
                    }, l, {
                        ref: t
                    }))
                });

            function ew(e) {
                return "" === e || void 0 === e
            }
            let eg = (0, o.forwardRef)((e, t) => {
                let {
                    value: n,
                    ...l
                } = e, a = (0, o.useRef)(null), i = (0, c.e)(t, a), u = (0, C.D)(n);
                return (0, o.useEffect)(() => {
                    let e = a.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (u !== n && t) {
                        let r = new Event("change", {
                            bubbles: !0
                        });
                        t.call(e, n), e.dispatchEvent(r)
                    }
                }, [u, n]), (0, o.createElement)(k, {
                    asChild: !0
                }, (0, o.createElement)("select", (0, r.Z)({}, l, {
                    ref: i,
                    defaultValue: n
                })))
            });

            function eb(e) {
                let t = (0, E.W)(e),
                    n = (0, o.useRef)(""),
                    r = (0, o.useRef)(0),
                    l = (0, o.useCallback)(e => {
                        let o = n.current + e;
                        t(o),
                            function e(t) {
                                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
                            }(o)
                    }, [t]),
                    a = (0, o.useCallback)(() => {
                        n.current = "", window.clearTimeout(r.current)
                    }, []);
                return (0, o.useEffect)(() => () => window.clearTimeout(r.current), []), [n, l, a]
            }

            function eE(e, t, n) {
                var r;
                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    l = (r = Math.max(n ? e.indexOf(n) : -1, 0), e.map((t, n) => e[(r + n) % e.length]));
                1 === o.length && (l = l.filter(e => e !== n));
                let a = l.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return a !== n ? a : void 0
            }
            eg.displayName = "BubbleSelect";
            let ey = e => {
                    let {
                        __scopeSelect: t,
                        children: n,
                        open: r,
                        defaultOpen: l,
                        onOpenChange: a,
                        value: i,
                        defaultValue: u,
                        onValueChange: c,
                        dir: d,
                        name: f,
                        autoComplete: p,
                        disabled: m,
                        required: w
                    } = e, g = A(t), [b, E] = (0, o.useState)(null), [S, C] = (0, o.useState)(null), [k, R] = (0, o.useState)(!1), x = (0, s.gm)(d), [_ = !1, M] = (0, y.T)({
                        prop: r,
                        defaultProp: l,
                        onChange: a
                    }), [D, I] = (0, y.T)({
                        prop: i,
                        defaultProp: u,
                        onChange: c
                    }), T = (0, o.useRef)(null), Z = !b || !!b.closest("form"), [V, W] = (0, o.useState)(new Set), F = Array.from(V).map(e => e.props.value).join(";");
                    return (0, o.createElement)(h.fC, g, (0, o.createElement)(L, {
                        required: w,
                        scope: t,
                        trigger: b,
                        onTriggerChange: E,
                        valueNode: S,
                        onValueNodeChange: C,
                        valueNodeHasChildren: k,
                        onValueNodeHasChildrenChange: R,
                        contentId: (0, v.M)(),
                        value: D,
                        onValueChange: I,
                        open: _,
                        onOpenChange: M,
                        dir: x,
                        triggerPointerDownPosRef: T,
                        disabled: m
                    }, (0, o.createElement)(P.Provider, {
                        scope: t
                    }, (0, o.createElement)(O, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: (0, o.useCallback)(e => {
                            W(t => new Set(t).add(e))
                        }, []),
                        onNativeOptionRemove: (0, o.useCallback)(e => {
                            W(t => {
                                let n = new Set(t);
                                return n.delete(e), n
                            })
                        }, [])
                    }, n)), Z ? (0, o.createElement)(eg, {
                        key: F,
                        "aria-hidden": !0,
                        required: w,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: D,
                        onChange: e => I(e.target.value),
                        disabled: m
                    }, void 0 === D ? (0, o.createElement)("option", {
                        value: ""
                    }) : null, Array.from(V)) : null))
                },
                eS = H,
                eC = K,
                ek = B,
                eR = e => (0, o.createElement)(w.h, (0, r.Z)({
                    asChild: !0
                }, e)),
                ex = N,
                e_ = Q,
                eM = en,
                eD = er,
                eP = ei,
                eI = ec,
                eT = ed,
                eZ = ef,
                eV = em,
                eA = eh
        },
        26579: function(e, t, n) {
            n.d(t, {
                bU: function() {
                    return N
                },
                e6: function() {
                    return q
                },
                fC: function() {
                    return K
                },
                fQ: function() {
                    return B
                }
            });
            var r = n(14749),
                o = n(64090),
                l = n(22219),
                a = n(44991),
                i = n(61266),
                u = n(84104),
                c = n(9310),
                d = n(12275),
                s = n(65030),
                f = n(76769),
                p = n(29586),
                m = n(27533);
            let v = ["PageUp", "PageDown"],
                h = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
                w = {
                    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
                    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
                    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
                    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
                },
                g = "Slider",
                [b, E, y] = (0, m.B)(g),
                [S, C] = (0, u.b)(g, [y]),
                [k, R] = S(g),
                x = (0, o.forwardRef)((e, t) => {
                    let {
                        name: n,
                        min: u = 0,
                        max: d = 100,
                        step: s = 1,
                        orientation: f = "horizontal",
                        disabled: p = !1,
                        minStepsBetweenThumbs: m = 0,
                        defaultValue: w = [u],
                        value: g,
                        onValueChange: E = () => {},
                        onValueCommit: y = () => {},
                        inverted: S = !1,
                        ...C
                    } = e, [R, x] = (0, o.useState)(null), _ = (0, i.e)(t, e => x(e)), M = (0, o.useRef)(new Set), I = (0, o.useRef)(0), T = "horizontal" === f, Z = !R || !!R.closest("form"), [V = [], A] = (0, c.T)({
                        prop: g,
                        defaultProp: w,
                        onChange: e => {
                            var t;
                            null === (t = [...M.current][I.current]) || void 0 === t || t.focus(), E(e)
                        }
                    }), L = (0, o.useRef)(V);

                    function W(e, t, {
                        commit: n
                    } = {
                        commit: !1
                    }) {
                        let r = (String(s).split(".")[1] || "").length,
                            o = function(e, t) {
                                let n = Math.pow(10, t);
                                return Math.round(e * n) / n
                            }(Math.round((e - u) / s) * s + u, r),
                            a = (0, l.u)(o, [u, d]);
                        A((e = []) => {
                            var r, o;
                            let l = function(e = [], t, n) {
                                let r = [...e];
                                return r[n] = t, r.sort((e, t) => e - t)
                            }(e, a, t);
                            if (r = l, !(!((o = m * s) > 0) || Math.min(...r.slice(0, -1).map((e, t) => r[t + 1] - e)) >= o)) return e; {
                                I.current = l.indexOf(a);
                                let t = String(l) !== String(e);
                                return t && n && y(l), t ? l : e
                            }
                        })
                    }
                    return (0, o.createElement)(k, {
                        scope: e.__scopeSlider,
                        disabled: p,
                        min: u,
                        max: d,
                        valueIndexToChangeRef: I,
                        thumbs: M.current,
                        values: V,
                        orientation: f
                    }, (0, o.createElement)(b.Provider, {
                        scope: e.__scopeSlider
                    }, (0, o.createElement)(b.Slot, {
                        scope: e.__scopeSlider
                    }, (0, o.createElement)(T ? D : P, (0, r.Z)({
                        "aria-disabled": p,
                        "data-disabled": p ? "" : void 0
                    }, C, {
                        ref: _,
                        onPointerDown: (0, a.M)(C.onPointerDown, () => {
                            p || (L.current = V)
                        }),
                        min: u,
                        max: d,
                        inverted: S,
                        onSlideStart: p ? void 0 : function(e) {
                            let t = function(e, t) {
                                if (1 === e.length) return 0;
                                let n = e.map(e => Math.abs(e - t));
                                return n.indexOf(Math.min(...n))
                            }(V, e);
                            W(e, t)
                        },
                        onSlideMove: p ? void 0 : function(e) {
                            W(e, I.current)
                        },
                        onSlideEnd: p ? void 0 : function() {
                            let e = L.current[I.current];
                            V[I.current] !== e && y(V)
                        },
                        onHomeKeyDown: () => !p && W(u, 0, {
                            commit: !0
                        }),
                        onEndKeyDown: () => !p && W(d, V.length - 1, {
                            commit: !0
                        }),
                        onStepKeyDown: ({
                            event: e,
                            direction: t
                        }) => {
                            if (!p) {
                                let n = v.includes(e.key) || e.shiftKey && h.includes(e.key),
                                    r = I.current;
                                W(V[r] + s * (n ? 10 : 1) * t, r, {
                                    commit: !0
                                })
                            }
                        }
                    })))), Z && V.map((e, t) => (0, o.createElement)(O, {
                        key: t,
                        name: n ? n + (V.length > 1 ? "[]" : "") : void 0,
                        value: e
                    })))
                }),
                [_, M] = S(g, {
                    startEdge: "left",
                    endEdge: "right",
                    size: "width",
                    direction: 1
                }),
                D = (0, o.forwardRef)((e, t) => {
                    let {
                        min: n,
                        max: l,
                        dir: a,
                        inverted: u,
                        onSlideStart: c,
                        onSlideMove: s,
                        onSlideEnd: f,
                        onStepKeyDown: p,
                        ...m
                    } = e, [v, h] = (0, o.useState)(null), g = (0, i.e)(t, e => h(e)), b = (0, o.useRef)(), E = (0, d.gm)(a), y = "ltr" === E, S = y && !u || !y && u;

                    function C(e) {
                        let t = b.current || v.getBoundingClientRect(),
                            r = H([0, t.width], S ? [n, l] : [l, n]);
                        return b.current = t, r(e - t.left)
                    }
                    return (0, o.createElement)(_, {
                        scope: e.__scopeSlider,
                        startEdge: S ? "left" : "right",
                        endEdge: S ? "right" : "left",
                        direction: S ? 1 : -1,
                        size: "width"
                    }, (0, o.createElement)(I, (0, r.Z)({
                        dir: E,
                        "data-orientation": "horizontal"
                    }, m, {
                        ref: g,
                        style: { ...m.style,
                            "--radix-slider-thumb-transform": "translateX(-50%)"
                        },
                        onSlideStart: e => {
                            let t = C(e.clientX);
                            null == c || c(t)
                        },
                        onSlideMove: e => {
                            let t = C(e.clientX);
                            null == s || s(t)
                        },
                        onSlideEnd: () => {
                            b.current = void 0, null == f || f()
                        },
                        onStepKeyDown: e => {
                            let t = w[S ? "from-left" : "from-right"].includes(e.key);
                            null == p || p({
                                event: e,
                                direction: t ? -1 : 1
                            })
                        }
                    })))
                }),
                P = (0, o.forwardRef)((e, t) => {
                    let {
                        min: n,
                        max: l,
                        inverted: a,
                        onSlideStart: u,
                        onSlideMove: c,
                        onSlideEnd: d,
                        onStepKeyDown: s,
                        ...f
                    } = e, p = (0, o.useRef)(null), m = (0, i.e)(t, p), v = (0, o.useRef)(), h = !a;

                    function g(e) {
                        let t = v.current || p.current.getBoundingClientRect(),
                            r = H([0, t.height], h ? [l, n] : [n, l]);
                        return v.current = t, r(e - t.top)
                    }
                    return (0, o.createElement)(_, {
                        scope: e.__scopeSlider,
                        startEdge: h ? "bottom" : "top",
                        endEdge: h ? "top" : "bottom",
                        size: "height",
                        direction: h ? 1 : -1
                    }, (0, o.createElement)(I, (0, r.Z)({
                        "data-orientation": "vertical"
                    }, f, {
                        ref: m,
                        style: { ...f.style,
                            "--radix-slider-thumb-transform": "translateY(50%)"
                        },
                        onSlideStart: e => {
                            let t = g(e.clientY);
                            null == u || u(t)
                        },
                        onSlideMove: e => {
                            let t = g(e.clientY);
                            null == c || c(t)
                        },
                        onSlideEnd: () => {
                            v.current = void 0, null == d || d()
                        },
                        onStepKeyDown: e => {
                            let t = w[h ? "from-bottom" : "from-top"].includes(e.key);
                            null == s || s({
                                event: e,
                                direction: t ? -1 : 1
                            })
                        }
                    })))
                }),
                I = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSlider: n,
                        onSlideStart: l,
                        onSlideMove: i,
                        onSlideEnd: u,
                        onHomeKeyDown: c,
                        onEndKeyDown: d,
                        onStepKeyDown: s,
                        ...f
                    } = e, m = R(g, n);
                    return (0, o.createElement)(p.WV.span, (0, r.Z)({}, f, {
                        ref: t,
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            "Home" === e.key ? (c(e), e.preventDefault()) : "End" === e.key ? (d(e), e.preventDefault()) : v.concat(h).includes(e.key) && (s(e), e.preventDefault())
                        }),
                        onPointerDown: (0, a.M)(e.onPointerDown, e => {
                            let t = e.target;
                            t.setPointerCapture(e.pointerId), e.preventDefault(), m.thumbs.has(t) ? t.focus() : l(e)
                        }),
                        onPointerMove: (0, a.M)(e.onPointerMove, e => {
                            e.target.hasPointerCapture(e.pointerId) && i(e)
                        }),
                        onPointerUp: (0, a.M)(e.onPointerUp, e => {
                            let t = e.target;
                            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), u(e))
                        })
                    }))
                }),
                T = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSlider: n,
                        ...l
                    } = e, a = R("SliderTrack", n);
                    return (0, o.createElement)(p.WV.span, (0, r.Z)({
                        "data-disabled": a.disabled ? "" : void 0,
                        "data-orientation": a.orientation
                    }, l, {
                        ref: t
                    }))
                }),
                Z = "SliderRange",
                V = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSlider: n,
                        ...l
                    } = e, a = R(Z, n), u = M(Z, n), c = (0, o.useRef)(null), d = (0, i.e)(t, c), s = a.values.length, f = a.values.map(e => F(e, a.min, a.max));
                    return (0, o.createElement)(p.WV.span, (0, r.Z)({
                        "data-orientation": a.orientation,
                        "data-disabled": a.disabled ? "" : void 0
                    }, l, {
                        ref: d,
                        style: { ...e.style,
                            [u.startEdge]: (s > 1 ? Math.min(...f) : 0) + "%",
                            [u.endEdge]: 100 - Math.max(...f) + "%"
                        }
                    }))
                }),
                A = "SliderThumb",
                L = (0, o.forwardRef)((e, t) => {
                    let n = E(e.__scopeSlider),
                        [l, a] = (0, o.useState)(null),
                        u = (0, i.e)(t, e => a(e)),
                        c = (0, o.useMemo)(() => l ? n().findIndex(e => e.ref.current === l) : -1, [n, l]);
                    return (0, o.createElement)(W, (0, r.Z)({}, e, {
                        ref: u,
                        index: c
                    }))
                }),
                W = (0, o.forwardRef)((e, t) => {
                    var n;
                    let {
                        __scopeSlider: l,
                        index: u,
                        ...c
                    } = e, d = R(A, l), s = M(A, l), [m, v] = (0, o.useState)(null), h = (0, i.e)(t, e => v(e)), w = (0, f.t)(m), g = d.values[u], E = void 0 === g ? 0 : F(g, d.min, d.max), y = (n = d.values.length) > 2 ? `Value ${u+1} of ${n}` : 2 === n ? ["Minimum", "Maximum"][u] : void 0, S = null == w ? void 0 : w[s.size], C = S ? function(e, t, n) {
                        let r = e / 2,
                            o = H([0, 50], [0, r]);
                        return (r - o(t) * n) * n
                    }(S, E, s.direction) : 0;
                    return (0, o.useEffect)(() => {
                        if (m) return d.thumbs.add(m), () => {
                            d.thumbs.delete(m)
                        }
                    }, [m, d.thumbs]), (0, o.createElement)("span", {
                        style: {
                            transform: "var(--radix-slider-thumb-transform)",
                            position: "absolute",
                            [s.startEdge]: `calc(${E}% + ${C}px)`
                        }
                    }, (0, o.createElement)(b.ItemSlot, {
                        scope: e.__scopeSlider
                    }, (0, o.createElement)(p.WV.span, (0, r.Z)({
                        role: "slider",
                        "aria-label": e["aria-label"] || y,
                        "aria-valuemin": d.min,
                        "aria-valuenow": g,
                        "aria-valuemax": d.max,
                        "aria-orientation": d.orientation,
                        "data-orientation": d.orientation,
                        "data-disabled": d.disabled ? "" : void 0,
                        tabIndex: d.disabled ? void 0 : 0
                    }, c, {
                        ref: h,
                        style: void 0 === g ? {
                            display: "none"
                        } : e.style,
                        onFocus: (0, a.M)(e.onFocus, () => {
                            d.valueIndexToChangeRef.current = u
                        })
                    }))))
                }),
                O = e => {
                    let {
                        value: t,
                        ...n
                    } = e, l = (0, o.useRef)(null), a = (0, s.D)(t);
                    return (0, o.useEffect)(() => {
                        let e = l.current,
                            n = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                        if (a !== t && n) {
                            let r = new Event("input", {
                                bubbles: !0
                            });
                            n.call(e, t), e.dispatchEvent(r)
                        }
                    }, [a, t]), (0, o.createElement)("input", (0, r.Z)({
                        style: {
                            display: "none"
                        }
                    }, n, {
                        ref: l,
                        defaultValue: t
                    }))
                };

            function F(e, t, n) {
                return (0, l.u)(100 / (n - t) * (e - t), [0, 100])
            }

            function H(e, t) {
                return n => {
                    if (e[0] === e[1] || t[0] === t[1]) return t[0];
                    let r = (t[1] - t[0]) / (e[1] - e[0]);
                    return t[0] + r * (n - e[0])
                }
            }
            let K = x,
                B = T,
                q = V,
                N = L
        },
        94845: function(e, t, n) {
            n.d(t, {
                bU: function() {
                    return S
                },
                fC: function() {
                    return y
                }
            });
            var r = n(14749),
                o = n(64090),
                l = n(44991),
                a = n(61266),
                i = n(84104),
                u = n(9310),
                c = n(65030),
                d = n(76769),
                s = n(29586);
            let f = "Switch",
                [p, m] = (0, i.b)(f),
                [v, h] = p(f),
                w = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: n,
                        name: i,
                        checked: c,
                        defaultChecked: d,
                        required: f,
                        disabled: p,
                        value: m = "on",
                        onCheckedChange: h,
                        ...w
                    } = e, [g, y] = (0, o.useState)(null), S = (0, a.e)(t, e => y(e)), C = (0, o.useRef)(!1), k = !g || !!g.closest("form"), [R = !1, x] = (0, u.T)({
                        prop: c,
                        defaultProp: d,
                        onChange: h
                    });
                    return (0, o.createElement)(v, {
                        scope: n,
                        checked: R,
                        disabled: p
                    }, (0, o.createElement)(s.WV.button, (0, r.Z)({
                        type: "button",
                        role: "switch",
                        "aria-checked": R,
                        "aria-required": f,
                        "data-state": E(R),
                        "data-disabled": p ? "" : void 0,
                        disabled: p,
                        value: m
                    }, w, {
                        ref: S,
                        onClick: (0, l.M)(e.onClick, e => {
                            x(e => !e), k && (C.current = e.isPropagationStopped(), C.current || e.stopPropagation())
                        })
                    })), k && (0, o.createElement)(b, {
                        control: g,
                        bubbles: !C.current,
                        name: i,
                        value: m,
                        checked: R,
                        required: f,
                        disabled: p,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                g = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: n,
                        ...l
                    } = e, a = h("SwitchThumb", n);
                    return (0, o.createElement)(s.WV.span, (0, r.Z)({
                        "data-state": E(a.checked),
                        "data-disabled": a.disabled ? "" : void 0
                    }, l, {
                        ref: t
                    }))
                }),
                b = e => {
                    let {
                        control: t,
                        checked: n,
                        bubbles: l = !0,
                        ...a
                    } = e, i = (0, o.useRef)(null), u = (0, c.D)(n), s = (0, d.t)(t);
                    return (0, o.useEffect)(() => {
                        let e = i.current,
                            t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                        if (u !== n && t) {
                            let r = new Event("click", {
                                bubbles: l
                            });
                            t.call(e, n), e.dispatchEvent(r)
                        }
                    }, [u, n, l]), (0, o.createElement)("input", (0, r.Z)({
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: n
                    }, a, {
                        tabIndex: -1,
                        ref: i,
                        style: { ...e.style,
                            ...s,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function E(e) {
                return e ? "checked" : "unchecked"
            }
            let y = w,
                S = g
        },
        65030: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return o
                }
            });
            var r = n(64090);

            function o(e) {
                let t = (0, r.useRef)({
                    value: e,
                    previous: e
                });
                return (0, r.useMemo)(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
            }
        }
    }
]);