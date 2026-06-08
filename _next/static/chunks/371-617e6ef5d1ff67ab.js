"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [371], {
        80037: function(e, n, t) {
            t.d(n, {
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
            let r = (0, t(87461).Z)("Check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        37501: function(e, n, t) {
            t.d(n, {
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
            let r = (0, t(87461).Z)("Circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        8792: function(e, n, t) {
            t.d(n, {
                default: function() {
                    return o.a
                }
            });
            var r = t(25250),
                o = t.n(r)
        },
        12178: function(e, n, t) {
            t.d(n, {
                Ee: function() {
                    return h
                },
                F$: function() {
                    return v
                },
                NY: function() {
                    return E
                },
                fC: function() {
                    return w
                },
                qE: function() {
                    return m
                }
            });
            var r = t(14749),
                o = t(64090),
                a = t(84104),
                u = t(39830),
                l = t(32618),
                c = t(29586);
            let i = "Avatar",
                [d, s] = (0, a.b)(i),
                [f, p] = d(i),
                m = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeAvatar: t,
                        ...a
                    } = e, [u, l] = (0, o.useState)("idle");
                    return (0, o.createElement)(f, {
                        scope: t,
                        imageLoadingStatus: u,
                        onImageLoadingStatusChange: l
                    }, (0, o.createElement)(c.WV.span, (0, r.Z)({}, a, {
                        ref: n
                    })))
                }),
                v = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeAvatar: t,
                        src: a,
                        onLoadingStatusChange: i = () => {},
                        ...d
                    } = e, s = p("AvatarImage", t), f = function(e) {
                        let [n, t] = (0, o.useState)("idle");
                        return (0, l.b)(() => {
                            if (!e) {
                                t("error");
                                return
                            }
                            let n = !0,
                                r = new window.Image,
                                o = e => () => {
                                    n && t(e)
                                };
                            return t("loading"), r.onload = o("loaded"), r.onerror = o("error"), r.src = e, () => {
                                n = !1
                            }
                        }, [e]), n
                    }(a), m = (0, u.W)(e => {
                        i(e), s.onImageLoadingStatusChange(e)
                    });
                    return (0, l.b)(() => {
                        "idle" !== f && m(f)
                    }, [f, m]), "loaded" === f ? (0, o.createElement)(c.WV.img, (0, r.Z)({}, d, {
                        ref: n,
                        src: a
                    })) : null
                }),
                g = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeAvatar: t,
                        delayMs: a,
                        ...u
                    } = e, l = p("AvatarFallback", t), [i, d] = (0, o.useState)(void 0 === a);
                    return (0, o.useEffect)(() => {
                        if (void 0 !== a) {
                            let e = window.setTimeout(() => d(!0), a);
                            return () => window.clearTimeout(e)
                        }
                    }, [a]), i && "loaded" !== l.imageLoadingStatus ? (0, o.createElement)(c.WV.span, (0, r.Z)({}, u, {
                        ref: n
                    })) : null
                }),
                w = m,
                h = v,
                E = g
        },
        27533: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return l
                }
            });
            var r = t(64090),
                o = t(84104),
                a = t(61266),
                u = t(59143);

            function l(e) {
                let n = e + "CollectionProvider",
                    [t, l] = (0, o.b)(n),
                    [c, i] = t(n, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e + "CollectionSlot",
                    s = r.forwardRef((e, n) => {
                        let {
                            scope: t,
                            children: o
                        } = e, l = i(d, t), c = (0, a.e)(n, l.collectionRef);
                        return r.createElement(u.g7, {
                            ref: c
                        }, o)
                    }),
                    f = e + "CollectionItemSlot",
                    p = "data-radix-collection-item";
                return [{
                    Provider: e => {
                        let {
                            scope: n,
                            children: t
                        } = e, o = r.useRef(null), a = r.useRef(new Map).current;
                        return r.createElement(c, {
                            scope: n,
                            itemMap: a,
                            collectionRef: o
                        }, t)
                    },
                    Slot: s,
                    ItemSlot: r.forwardRef((e, n) => {
                        let {
                            scope: t,
                            children: o,
                            ...l
                        } = e, c = r.useRef(null), d = (0, a.e)(n, c), s = i(f, t);
                        return r.useEffect(() => (s.itemMap.set(c, {
                            ref: c,
                            ...l
                        }), () => void s.itemMap.delete(c))), r.createElement(u.g7, {
                            [p]: "",
                            ref: d
                        }, o)
                    })
                }, function(n) {
                    let t = i(e + "CollectionConsumer", n);
                    return r.useCallback(() => {
                        let e = t.collectionRef.current;
                        if (!e) return [];
                        let n = Array.from(e.querySelectorAll(`[${p}]`));
                        return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
                    }, [t.collectionRef, t.itemMap])
                }, l]
            }
        },
        81100: function(e, n, t) {
            t.d(n, {
                oC: function() {
                    return eJ
                },
                VY: function() {
                    return eN
                },
                ZA: function() {
                    return eq
                },
                ck: function() {
                    return ej
                },
                wU: function() {
                    return e1
                },
                __: function() {
                    return e$
                },
                Uv: function() {
                    return eH
                },
                Ee: function() {
                    return eQ
                },
                Rk: function() {
                    return e0
                },
                fC: function() {
                    return eX
                },
                Z0: function() {
                    return e2
                },
                Tr: function() {
                    return e4
                },
                tu: function() {
                    return e6
                },
                fF: function() {
                    return e3
                },
                xz: function() {
                    return eY
                }
            });
            var r = t(14749),
                o = t(64090),
                a = t(44991),
                u = t(61266),
                l = t(84104),
                c = t(9310),
                i = t(29586),
                d = t(27533),
                s = t(12275),
                f = t(1260),
                p = t(46165),
                m = t(78082),
                v = t(38687),
                g = t(12338),
                w = t(37881),
                h = t(12642),
                E = t(23715),
                M = t(59143),
                _ = t(39830),
                C = t(66674),
                b = t(47225);
            let R = ["Enter", " "],
                y = ["ArrowUp", "PageDown", "End"],
                D = ["ArrowDown", "PageUp", "Home", ...y],
                k = {
                    ltr: [...R, "ArrowRight"],
                    rtl: [...R, "ArrowLeft"]
                },
                I = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                P = "Menu",
                [x, T, F] = (0, d.B)(P),
                [Z, O] = (0, l.b)(P, [F, g.D7, E.Pc]),
                S = (0, g.D7)(),
                A = (0, E.Pc)(),
                [L, K] = Z(P),
                [V, W] = Z(P),
                G = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeMenu: t,
                        ...a
                    } = e, u = S(t);
                    return (0, o.createElement)(g.ee, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                U = "MenuPortal",
                [B, z] = Z(U, {
                    forceMount: void 0
                }),
                X = "MenuContent",
                [Y, H] = Z(X),
                N = (0, o.forwardRef)((e, n) => {
                    let t = z(X, e.__scopeMenu),
                        {
                            forceMount: a = t.forceMount,
                            ...u
                        } = e,
                        l = K(X, e.__scopeMenu),
                        c = W(X, e.__scopeMenu);
                    return (0, o.createElement)(x.Provider, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(h.z, {
                        present: a || l.open
                    }, (0, o.createElement)(x.Slot, {
                        scope: e.__scopeMenu
                    }, c.modal ? (0, o.createElement)(q, (0, r.Z)({}, u, {
                        ref: n
                    })) : (0, o.createElement)($, (0, r.Z)({}, u, {
                        ref: n
                    })))))
                }),
                q = (0, o.forwardRef)((e, n) => {
                    let t = K(X, e.__scopeMenu),
                        l = (0, o.useRef)(null),
                        c = (0, u.e)(n, l);
                    return (0, o.useEffect)(() => {
                        let e = l.current;
                        if (e) return (0, C.Ry)(e)
                    }, []), (0, o.createElement)(j, (0, r.Z)({}, e, {
                        ref: c,
                        trapFocus: t.open,
                        disableOutsidePointerEvents: t.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, a.M)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => t.onOpenChange(!1)
                    }))
                }),
                $ = (0, o.forwardRef)((e, n) => {
                    let t = K(X, e.__scopeMenu);
                    return (0, o.createElement)(j, (0, r.Z)({}, e, {
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => t.onOpenChange(!1)
                    }))
                }),
                j = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeMenu: t,
                        loop: l = !1,
                        trapFocus: c,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: d,
                        disableOutsidePointerEvents: s,
                        onEntryFocus: v,
                        onEscapeKeyDown: w,
                        onPointerDownOutside: h,
                        onFocusOutside: _,
                        onInteractOutside: C,
                        onDismiss: R,
                        disableOutsideScroll: k,
                        ...I
                    } = e, P = K(X, t), x = W(X, t), F = S(t), Z = A(t), O = T(t), [L, V] = (0, o.useState)(null), G = (0, o.useRef)(null), U = (0, u.e)(n, G, P.onContentChange), B = (0, o.useRef)(0), z = (0, o.useRef)(""), H = (0, o.useRef)(0), N = (0, o.useRef)(null), q = (0, o.useRef)("right"), $ = (0, o.useRef)(0), j = k ? b.Z : o.Fragment, J = k ? {
                        as: M.g7,
                        allowPinchZoom: !0
                    } : void 0, Q = e => {
                        var n, t;
                        let r = z.current + e,
                            o = O().filter(e => !e.disabled),
                            a = document.activeElement,
                            u = null === (n = o.find(e => e.ref.current === a)) || void 0 === n ? void 0 : n.textValue,
                            l = function(e, n, t) {
                                var r;
                                let o = n.length > 1 && Array.from(n).every(e => e === n[0]) ? n[0] : n,
                                    a = (r = Math.max(t ? e.indexOf(t) : -1, 0), e.map((n, t) => e[(r + t) % e.length]));
                                1 === o.length && (a = a.filter(e => e !== t));
                                let u = a.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return u !== t ? u : void 0
                            }(o.map(e => e.textValue), r, u),
                            c = null === (t = o.find(e => e.textValue === l)) || void 0 === t ? void 0 : t.ref.current;
                        ! function e(n) {
                            z.current = n, window.clearTimeout(B.current), "" !== n && (B.current = window.setTimeout(() => e(""), 1e3))
                        }(r), c && setTimeout(() => c.focus())
                    };
                    (0, o.useEffect)(() => () => window.clearTimeout(B.current), []), (0, p.EW)();
                    let ee = (0, o.useCallback)(e => {
                        var n, t, r;
                        return q.current === (null === (n = N.current) || void 0 === n ? void 0 : n.side) && !!(r = null === (t = N.current) || void 0 === t ? void 0 : t.area) && function(e, n) {
                            let {
                                x: t,
                                y: r
                            } = e, o = !1;
                            for (let e = 0, a = n.length - 1; e < n.length; a = e++) {
                                let u = n[e].x,
                                    l = n[e].y,
                                    c = n[a].x,
                                    i = n[a].y;
                                l > r != i > r && t < (c - u) * (r - l) / (i - l) + u && (o = !o)
                            }
                            return o
                        }({
                            x: e.clientX,
                            y: e.clientY
                        }, r)
                    }, []);
                    return (0, o.createElement)(Y, {
                        scope: t,
                        searchRef: z,
                        onItemEnter: (0, o.useCallback)(e => {
                            ee(e) && e.preventDefault()
                        }, [ee]),
                        onItemLeave: (0, o.useCallback)(e => {
                            var n;
                            ee(e) || (null === (n = G.current) || void 0 === n || n.focus(), V(null))
                        }, [ee]),
                        onTriggerLeave: (0, o.useCallback)(e => {
                            ee(e) && e.preventDefault()
                        }, [ee]),
                        pointerGraceTimerRef: H,
                        onPointerGraceIntentChange: (0, o.useCallback)(e => {
                            N.current = e
                        }, [])
                    }, (0, o.createElement)(j, J, (0, o.createElement)(m.M, {
                        asChild: !0,
                        trapped: c,
                        onMountAutoFocus: (0, a.M)(i, e => {
                            var n;
                            e.preventDefault(), null === (n = G.current) || void 0 === n || n.focus()
                        }),
                        onUnmountAutoFocus: d
                    }, (0, o.createElement)(f.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: s,
                        onEscapeKeyDown: w,
                        onPointerDownOutside: h,
                        onFocusOutside: _,
                        onInteractOutside: C,
                        onDismiss: R
                    }, (0, o.createElement)(E.fC, (0, r.Z)({
                        asChild: !0
                    }, Z, {
                        dir: x.dir,
                        orientation: "vertical",
                        loop: l,
                        currentTabStopId: L,
                        onCurrentTabStopIdChange: V,
                        onEntryFocus: (0, a.M)(v, e => {
                            x.isUsingKeyboardRef.current || e.preventDefault()
                        })
                    }), (0, o.createElement)(g.VY, (0, r.Z)({
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": eM(P.open),
                        "data-radix-menu-content": "",
                        dir: x.dir
                    }, F, I, {
                        ref: U,
                        style: {
                            outline: "none",
                            ...I.style
                        },
                        onKeyDown: (0, a.M)(I.onKeyDown, e => {
                            let n = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                t = e.ctrlKey || e.altKey || e.metaKey,
                                r = 1 === e.key.length;
                            n && ("Tab" === e.key && e.preventDefault(), !t && r && Q(e.key));
                            let o = G.current;
                            if (e.target !== o || !D.includes(e.key)) return;
                            e.preventDefault();
                            let a = O().filter(e => !e.disabled).map(e => e.ref.current);
                            y.includes(e.key) && a.reverse(),
                                function(e) {
                                    let n = document.activeElement;
                                    for (let t of e)
                                        if (t === n || (t.focus(), document.activeElement !== n)) return
                                }(a)
                        }),
                        onBlur: (0, a.M)(e.onBlur, e => {
                            e.currentTarget.contains(e.target) || (window.clearTimeout(B.current), z.current = "")
                        }),
                        onPointerMove: (0, a.M)(e.onPointerMove, eb(e => {
                            let n = e.target,
                                t = $.current !== e.clientX;
                            if (e.currentTarget.contains(n) && t) {
                                let n = e.clientX > $.current ? "right" : "left";
                                q.current = n, $.current = e.clientX
                            }
                        }))
                    })))))))
                }),
                J = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeMenu: t,
                        ...a
                    } = e;
                    return (0, o.createElement)(i.WV.div, (0, r.Z)({
                        role: "group"
                    }, a, {
                        ref: n
                    }))
                }),
                Q = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeMenu: t,
                        ...a
                    } = e;
                    return (0, o.createElement)(i.WV.div, (0, r.Z)({}, a, {
                        ref: n
                    }))
                }),
                ee = "MenuItem",
                en = "menu.itemSelect",
                et = (0, o.forwardRef)((e, n) => {
                    let {
                        disabled: t = !1,
                        onSelect: l,
                        ...c
                    } = e, d = (0, o.useRef)(null), s = W(ee, e.__scopeMenu), f = H(ee, e.__scopeMenu), p = (0, u.e)(n, d), m = (0, o.useRef)(!1);
                    return (0, o.createElement)(er, (0, r.Z)({}, c, {
                        ref: p,
                        disabled: t,
                        onClick: (0, a.M)(e.onClick, () => {
                            let e = d.current;
                            if (!t && e) {
                                let n = new CustomEvent(en, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener(en, e => null == l ? void 0 : l(e), {
                                    once: !0
                                }), (0, i.jH)(e, n), n.defaultPrevented ? m.current = !1 : s.onClose()
                            }
                        }),
                        onPointerDown: n => {
                            var t;
                            null === (t = e.onPointerDown) || void 0 === t || t.call(e, n), m.current = !0
                        },
                        onPointerUp: (0, a.M)(e.onPointerUp, e => {
                            var n;
                            m.current || null === (n = e.currentTarget) || void 0 === n || n.click()
                        }),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            let n = "" !== f.searchRef.current;
                            !t && (!n || " " !== e.key) && R.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    }))
                }),
                er = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeMenu: t,
                        disabled: l = !1,
                        textValue: c,
                        ...d
                    } = e, s = H(ee, t), f = A(t), p = (0, o.useRef)(null), m = (0, u.e)(n, p), [v, g] = (0, o.useState)(!1), [w, h] = (0, o.useState)("");
                    return (0, o.useEffect)(() => {
                        let e = p.current;
                        if (e) {
                            var n;
                            h((null !== (n = e.textContent) && void 0 !== n ? n : "").trim())
                        }
                    }, [d.children]), (0, o.createElement)(x.ItemSlot, {
                        scope: t,
                        disabled: l,
                        textValue: null != c ? c : w
                    }, (0, o.createElement)(E.ck, (0, r.Z)({
                        asChild: !0
                    }, f, {
                        focusable: !l
                    }), (0, o.createElement)(i.WV.div, (0, r.Z)({
                        role: "menuitem",
                        "data-highlighted": v ? "" : void 0,
                        "aria-disabled": l || void 0,
                        "data-disabled": l ? "" : void 0
                    }, d, {
                        ref: m,
                        onPointerMove: (0, a.M)(e.onPointerMove, eb(e => {
                            l ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus())
                        })),
                        onPointerLeave: (0, a.M)(e.onPointerLeave, eb(e => s.onItemLeave(e))),
                        onFocus: (0, a.M)(e.onFocus, () => g(!0)),
                        onBlur: (0, a.M)(e.onBlur, () => g(!1))
                    }))))
                }),
                eo = (0, o.forwardRef)((e, n) => {
                    let {
                        checked: t = !1,
                        onCheckedChange: u,
                        ...l
                    } = e;
                    return (0, o.createElement)(ed, {
                        scope: e.__scopeMenu,
                        checked: t
                    }, (0, o.createElement)(et, (0, r.Z)({
                        role: "menuitemcheckbox",
                        "aria-checked": e_(t) ? "mixed" : t
                    }, l, {
                        ref: n,
                        "data-state": eC(t),
                        onSelect: (0, a.M)(l.onSelect, () => null == u ? void 0 : u(!!e_(t) || !t), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }),
                [ea, eu] = Z("MenuRadioGroup", {
                    value: void 0,
                    onValueChange: () => {}
                }),
                el = (0, o.forwardRef)((e, n) => {
                    let {
                        value: t,
                        onValueChange: a,
                        ...u
                    } = e, l = (0, _.W)(a);
                    return (0, o.createElement)(ea, {
                        scope: e.__scopeMenu,
                        value: t,
                        onValueChange: l
                    }, (0, o.createElement)(J, (0, r.Z)({}, u, {
                        ref: n
                    })))
                }),
                ec = (0, o.forwardRef)((e, n) => {
                    let {
                        value: t,
                        ...u
                    } = e, l = eu("MenuRadioItem", e.__scopeMenu), c = t === l.value;
                    return (0, o.createElement)(ed, {
                        scope: e.__scopeMenu,
                        checked: c
                    }, (0, o.createElement)(et, (0, r.Z)({
                        role: "menuitemradio",
                        "aria-checked": c
                    }, u, {
                        ref: n,
                        "data-state": eC(c),
                        onSelect: (0, a.M)(u.onSelect, () => {
                            var e;
                            return null === (e = l.onValueChange) || void 0 === e ? void 0 : e.call(l, t)
                        }, {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }),
                ei = "MenuItemIndicator",
                [ed, es] = Z(ei, {
                    checked: !1
                }),
                ef = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeMenu: t,
                        forceMount: a,
                        ...u
                    } = e, l = es(ei, t);
                    return (0, o.createElement)(h.z, {
                        present: a || e_(l.checked) || !0 === l.checked
                    }, (0, o.createElement)(i.WV.span, (0, r.Z)({}, u, {
                        ref: n,
                        "data-state": eC(l.checked)
                    })))
                }),
                ep = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeMenu: t,
                        ...a
                    } = e;
                    return (0, o.createElement)(i.WV.div, (0, r.Z)({
                        role: "separator",
                        "aria-orientation": "horizontal"
                    }, a, {
                        ref: n
                    }))
                }),
                em = ((e, n) => {
                    let {
                        __scopeMenu: t,
                        ...a
                    } = e, u = S(t);
                    return (0, o.createElement)(g.Eh, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }, "MenuSub"),
                [ev, eg] = Z(em),
                ew = "MenuSubTrigger",
                eh = (0, o.forwardRef)((e, n) => {
                    let t = K(ew, e.__scopeMenu),
                        l = W(ew, e.__scopeMenu),
                        c = eg(ew, e.__scopeMenu),
                        i = H(ew, e.__scopeMenu),
                        d = (0, o.useRef)(null),
                        {
                            pointerGraceTimerRef: s,
                            onPointerGraceIntentChange: f
                        } = i,
                        p = {
                            __scopeMenu: e.__scopeMenu
                        },
                        m = (0, o.useCallback)(() => {
                            d.current && window.clearTimeout(d.current), d.current = null
                        }, []);
                    return (0, o.useEffect)(() => m, [m]), (0, o.useEffect)(() => {
                        let e = s.current;
                        return () => {
                            window.clearTimeout(e), f(null)
                        }
                    }, [s, f]), (0, o.createElement)(G, (0, r.Z)({
                        asChild: !0
                    }, p), (0, o.createElement)(er, (0, r.Z)({
                        id: c.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": t.open,
                        "aria-controls": c.contentId,
                        "data-state": eM(t.open)
                    }, e, {
                        ref: (0, u.F)(n, c.onTriggerChange),
                        onClick: n => {
                            var r;
                            null === (r = e.onClick) || void 0 === r || r.call(e, n), e.disabled || n.defaultPrevented || (n.currentTarget.focus(), t.open || t.onOpenChange(!0))
                        },
                        onPointerMove: (0, a.M)(e.onPointerMove, eb(n => {
                            i.onItemEnter(n), n.defaultPrevented || e.disabled || t.open || d.current || (i.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
                                t.onOpenChange(!0), m()
                            }, 100))
                        })),
                        onPointerLeave: (0, a.M)(e.onPointerLeave, eb(e => {
                            var n, r;
                            m();
                            let o = null === (n = t.content) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (o) {
                                let n = null === (r = t.content) || void 0 === r ? void 0 : r.dataset.side,
                                    a = "right" === n,
                                    u = o[a ? "left" : "right"],
                                    l = o[a ? "right" : "left"];
                                i.onPointerGraceIntentChange({
                                    area: [{
                                        x: e.clientX + (a ? -5 : 5),
                                        y: e.clientY
                                    }, {
                                        x: u,
                                        y: o.top
                                    }, {
                                        x: l,
                                        y: o.top
                                    }, {
                                        x: l,
                                        y: o.bottom
                                    }, {
                                        x: u,
                                        y: o.bottom
                                    }],
                                    side: n
                                }), window.clearTimeout(s.current), s.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300)
                            } else {
                                if (i.onTriggerLeave(e), e.defaultPrevented) return;
                                i.onPointerGraceIntentChange(null)
                            }
                        })),
                        onKeyDown: (0, a.M)(e.onKeyDown, n => {
                            let r = "" !== i.searchRef.current;
                            if (!e.disabled && (!r || " " !== n.key) && k[l.dir].includes(n.key)) {
                                var o;
                                t.onOpenChange(!0), null === (o = t.content) || void 0 === o || o.focus(), n.preventDefault()
                            }
                        })
                    })))
                }),
                eE = (0, o.forwardRef)((e, n) => {
                    let t = z(X, e.__scopeMenu),
                        {
                            forceMount: l = t.forceMount,
                            ...c
                        } = e,
                        i = K(X, e.__scopeMenu),
                        d = W(X, e.__scopeMenu),
                        s = eg("MenuSubContent", e.__scopeMenu),
                        f = (0, o.useRef)(null),
                        p = (0, u.e)(n, f);
                    return (0, o.createElement)(x.Provider, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(h.z, {
                        present: l || i.open
                    }, (0, o.createElement)(x.Slot, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(j, (0, r.Z)({
                        id: s.contentId,
                        "aria-labelledby": s.triggerId
                    }, c, {
                        ref: p,
                        align: "start",
                        side: "rtl" === d.dir ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: e => {
                            var n;
                            d.isUsingKeyboardRef.current && (null === (n = f.current) || void 0 === n || n.focus()), e.preventDefault()
                        },
                        onCloseAutoFocus: e => e.preventDefault(),
                        onFocusOutside: (0, a.M)(e.onFocusOutside, e => {
                            e.target !== s.trigger && i.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: (0, a.M)(e.onEscapeKeyDown, e => {
                            d.onClose(), e.preventDefault()
                        }),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            let n = e.currentTarget.contains(e.target),
                                t = I[d.dir].includes(e.key);
                            if (n && t) {
                                var r;
                                i.onOpenChange(!1), null === (r = s.trigger) || void 0 === r || r.focus(), e.preventDefault()
                            }
                        })
                    })))))
                });

            function eM(e) {
                return e ? "open" : "closed"
            }

            function e_(e) {
                return "indeterminate" === e
            }

            function eC(e) {
                return e_(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function eb(e) {
                return n => "mouse" === n.pointerType ? e(n) : void 0
            }
            let eR = e => {
                    let {
                        __scopeMenu: n,
                        open: t = !1,
                        children: r,
                        dir: a,
                        onOpenChange: u,
                        modal: l = !0
                    } = e, c = S(n), [i, d] = (0, o.useState)(null), f = (0, o.useRef)(!1), p = (0, _.W)(u), m = (0, s.gm)(a);
                    return (0, o.useEffect)(() => {
                        let e = () => {
                                f.current = !0, document.addEventListener("pointerdown", n, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", n, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            n = () => f.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", n, {
                                capture: !0
                            }), document.removeEventListener("pointermove", n, {
                                capture: !0
                            })
                        }
                    }, []), (0, o.createElement)(g.fC, c, (0, o.createElement)(L, {
                        scope: n,
                        open: t,
                        onOpenChange: p,
                        content: i,
                        onContentChange: d
                    }, (0, o.createElement)(V, {
                        scope: n,
                        onClose: (0, o.useCallback)(() => p(!1), [p]),
                        isUsingKeyboardRef: f,
                        dir: m,
                        modal: l
                    }, r)))
                },
                ey = e => {
                    let {
                        __scopeMenu: n,
                        forceMount: t,
                        children: r,
                        container: a
                    } = e, u = K(U, n);
                    return (0, o.createElement)(B, {
                        scope: n,
                        forceMount: t
                    }, (0, o.createElement)(h.z, {
                        present: t || u.open
                    }, (0, o.createElement)(w.h, {
                        asChild: !0,
                        container: a
                    }, r)))
                },
                eD = e => {
                    let {
                        __scopeMenu: n,
                        children: t,
                        open: r = !1,
                        onOpenChange: a
                    } = e, u = K(em, n), l = S(n), [c, i] = (0, o.useState)(null), [d, s] = (0, o.useState)(null), f = (0, _.W)(a);
                    return (0, o.useEffect)(() => (!1 === u.open && f(!1), () => f(!1)), [u.open, f]), (0, o.createElement)(g.fC, l, (0, o.createElement)(L, {
                        scope: n,
                        open: r,
                        onOpenChange: f,
                        content: d,
                        onContentChange: s
                    }, (0, o.createElement)(ev, {
                        scope: n,
                        contentId: (0, v.M)(),
                        triggerId: (0, v.M)(),
                        trigger: c,
                        onTriggerChange: i
                    }, t)))
                },
                ek = "DropdownMenu",
                [eI, eP] = (0, l.b)(ek, [O]),
                ex = O(),
                [eT, eF] = eI(ek),
                eZ = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        disabled: l = !1,
                        ...c
                    } = e, d = eF("DropdownMenuTrigger", t), s = ex(t);
                    return (0, o.createElement)(G, (0, r.Z)({
                        asChild: !0
                    }, s), (0, o.createElement)(i.WV.button, (0, r.Z)({
                        type: "button",
                        id: d.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": d.open,
                        "aria-controls": d.open ? d.contentId : void 0,
                        "data-state": d.open ? "open" : "closed",
                        "data-disabled": l ? "" : void 0,
                        disabled: l
                    }, c, {
                        ref: (0, u.F)(n, d.triggerRef),
                        onPointerDown: (0, a.M)(e.onPointerDown, e => {
                            l || 0 !== e.button || !1 !== e.ctrlKey || (d.onOpenToggle(), d.open || e.preventDefault())
                        }),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            !l && (["Enter", " "].includes(e.key) && d.onOpenToggle(), "ArrowDown" === e.key && d.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                        })
                    })))
                }),
                eO = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...u
                    } = e, l = eF("DropdownMenuContent", t), c = ex(t), i = (0, o.useRef)(!1);
                    return (0, o.createElement)(N, (0, r.Z)({
                        id: l.contentId,
                        "aria-labelledby": l.triggerId
                    }, c, u, {
                        ref: n,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, e => {
                            var n;
                            i.current || null === (n = l.triggerRef.current) || void 0 === n || n.focus(), i.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, a.M)(e.onInteractOutside, e => {
                            let n = e.detail.originalEvent,
                                t = 0 === n.button && !0 === n.ctrlKey,
                                r = 2 === n.button || t;
                            (!l.modal || r) && (i.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                eS = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(J, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                eA = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(Q, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                eL = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(et, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                eK = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(eo, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                eV = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(el, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                eW = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(ec, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                eG = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(ef, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                eU = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(ep, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                eB = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(eh, (0, r.Z)({}, u, a, {
                        ref: n
                    }))
                }),
                ez = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeDropdownMenu: t,
                        ...a
                    } = e, u = ex(t);
                    return (0, o.createElement)(eE, (0, r.Z)({}, u, a, {
                        ref: n,
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                eX = e => {
                    let {
                        __scopeDropdownMenu: n,
                        children: t,
                        dir: a,
                        open: u,
                        defaultOpen: l,
                        onOpenChange: i,
                        modal: d = !0
                    } = e, s = ex(n), f = (0, o.useRef)(null), [p = !1, m] = (0, c.T)({
                        prop: u,
                        defaultProp: l,
                        onChange: i
                    });
                    return (0, o.createElement)(eT, {
                        scope: n,
                        triggerId: (0, v.M)(),
                        triggerRef: f,
                        contentId: (0, v.M)(),
                        open: p,
                        onOpenChange: m,
                        onOpenToggle: (0, o.useCallback)(() => m(e => !e), [m]),
                        modal: d
                    }, (0, o.createElement)(eR, (0, r.Z)({}, s, {
                        open: p,
                        onOpenChange: m,
                        dir: a,
                        modal: d
                    }), t))
                },
                eY = eZ,
                eH = e => {
                    let {
                        __scopeDropdownMenu: n,
                        ...t
                    } = e, a = ex(n);
                    return (0, o.createElement)(ey, (0, r.Z)({}, a, t))
                },
                eN = eO,
                eq = eS,
                e$ = eA,
                ej = eL,
                eJ = eK,
                eQ = eV,
                e0 = eW,
                e1 = eG,
                e2 = eU,
                e4 = e => {
                    let {
                        __scopeDropdownMenu: n,
                        children: t,
                        open: a,
                        onOpenChange: u,
                        defaultOpen: l
                    } = e, i = ex(n), [d = !1, s] = (0, c.T)({
                        prop: a,
                        defaultProp: l,
                        onChange: u
                    });
                    return (0, o.createElement)(eD, (0, r.Z)({}, i, {
                        open: d,
                        onOpenChange: s
                    }), t)
                },
                e3 = eB,
                e6 = ez
        },
        23715: function(e, n, t) {
            t.d(n, {
                Pc: function() {
                    return _
                },
                ck: function() {
                    return x
                },
                fC: function() {
                    return P
                }
            });
            var r = t(14749),
                o = t(64090),
                a = t(44991),
                u = t(27533),
                l = t(61266),
                c = t(84104),
                i = t(38687),
                d = t(29586),
                s = t(39830),
                f = t(9310),
                p = t(12275);
            let m = "rovingFocusGroup.onEntryFocus",
                v = {
                    bubbles: !1,
                    cancelable: !0
                },
                g = "RovingFocusGroup",
                [w, h, E] = (0, u.B)(g),
                [M, _] = (0, c.b)(g, [E]),
                [C, b] = M(g),
                R = (0, o.forwardRef)((e, n) => (0, o.createElement)(w.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(w.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(y, (0, r.Z)({}, e, {
                    ref: n
                }))))),
                y = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeRovingFocusGroup: t,
                        orientation: u,
                        loop: c = !1,
                        dir: i,
                        currentTabStopId: g,
                        defaultCurrentTabStopId: w,
                        onCurrentTabStopIdChange: E,
                        onEntryFocus: M,
                        ..._
                    } = e, b = (0, o.useRef)(null), R = (0, l.e)(n, b), y = (0, p.gm)(i), [D = null, k] = (0, f.T)({
                        prop: g,
                        defaultProp: w,
                        onChange: E
                    }), [P, x] = (0, o.useState)(!1), T = (0, s.W)(M), F = h(t), Z = (0, o.useRef)(!1), [O, S] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = b.current;
                        if (e) return e.addEventListener(m, T), () => e.removeEventListener(m, T)
                    }, [T]), (0, o.createElement)(C, {
                        scope: t,
                        orientation: u,
                        dir: y,
                        loop: c,
                        currentTabStopId: D,
                        onItemFocus: (0, o.useCallback)(e => k(e), [k]),
                        onItemShiftTab: (0, o.useCallback)(() => x(!0), []),
                        onFocusableItemAdd: (0, o.useCallback)(() => S(e => e + 1), []),
                        onFocusableItemRemove: (0, o.useCallback)(() => S(e => e - 1), [])
                    }, (0, o.createElement)(d.WV.div, (0, r.Z)({
                        tabIndex: P || 0 === O ? -1 : 0,
                        "data-orientation": u
                    }, _, {
                        ref: R,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, a.M)(e.onMouseDown, () => {
                            Z.current = !0
                        }),
                        onFocus: (0, a.M)(e.onFocus, e => {
                            let n = !Z.current;
                            if (e.target === e.currentTarget && n && !P) {
                                let n = new CustomEvent(m, v);
                                if (e.currentTarget.dispatchEvent(n), !n.defaultPrevented) {
                                    let e = F().filter(e => e.focusable);
                                    I([e.find(e => e.active), e.find(e => e.id === D), ...e].filter(Boolean).map(e => e.ref.current))
                                }
                            }
                            Z.current = !1
                        }),
                        onBlur: (0, a.M)(e.onBlur, () => x(!1))
                    })))
                }),
                D = (0, o.forwardRef)((e, n) => {
                    let {
                        __scopeRovingFocusGroup: t,
                        focusable: u = !0,
                        active: l = !1,
                        tabStopId: c,
                        ...s
                    } = e, f = (0, i.M)(), p = c || f, m = b("RovingFocusGroupItem", t), v = m.currentTabStopId === p, g = h(t), {
                        onFocusableItemAdd: E,
                        onFocusableItemRemove: M
                    } = m;
                    return (0, o.useEffect)(() => {
                        if (u) return E(), () => M()
                    }, [u, E, M]), (0, o.createElement)(w.ItemSlot, {
                        scope: t,
                        id: p,
                        focusable: u,
                        active: l
                    }, (0, o.createElement)(d.WV.span, (0, r.Z)({
                        tabIndex: v ? 0 : -1,
                        "data-orientation": m.orientation
                    }, s, {
                        ref: n,
                        onMouseDown: (0, a.M)(e.onMouseDown, e => {
                            u ? m.onItemFocus(p) : e.preventDefault()
                        }),
                        onFocus: (0, a.M)(e.onFocus, () => m.onItemFocus(p)),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                m.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let n = function(e, n, t) {
                                var r;
                                let o = (r = e.key, "rtl" !== t ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                if (!("vertical" === n && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === n && ["ArrowUp", "ArrowDown"].includes(o))) return k[o]
                            }(e, m.orientation, m.dir);
                            if (void 0 !== n) {
                                e.preventDefault();
                                let o = g().filter(e => e.focusable).map(e => e.ref.current);
                                if ("last" === n) o.reverse();
                                else if ("prev" === n || "next" === n) {
                                    var t, r;
                                    "prev" === n && o.reverse();
                                    let a = o.indexOf(e.currentTarget);
                                    o = m.loop ? (t = o, r = a + 1, t.map((e, n) => t[(r + n) % t.length])) : o.slice(a + 1)
                                }
                                setTimeout(() => I(o))
                            }
                        })
                    })))
                }),
                k = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function I(e) {
                let n = document.activeElement;
                for (let t of e)
                    if (t === n || (t.focus(), document.activeElement !== n)) return
            }
            let P = R,
                x = D
        }
    }
]);