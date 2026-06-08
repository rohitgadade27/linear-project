"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8100], {
        56961: function(e, n, t) {
            t.d(n, {
                y: function() {
                    return a
                }
            });
            var r = t(3827);
            let a = ({
                children: e
            }) => (0, r.jsx)("header", {
                className: "flex h-11 shrink-0 items-center px-3 text-headings",
                children: e
            })
        },
        9835: function(e, n, t) {
            t.r(n), t.d(n, {
                ListItem: function() {
                    return i
                }
            });
            var r = t(3827),
                a = t(69507),
                l = t(1657),
                s = t(8792);
            let i = ({
                children: e,
                href: n = "#",
                className: t
            }) => {
                let {
                    toggleCard: i
                } = (0, a.r)();
                return (0, r.jsx)(s.default, {
                    href: n,
                    className: (0, l.cn)("mb-px flex rounded-md px-3 py-2.5 hover:bg-accent/10", t),
                    onClick: () => i(!0),
                    children: e
                })
            }
        },
        18527: function(e, n, t) {
            t.d(n, {
                r: function() {
                    return d
                }
            });
            var r = t(3827),
                a = t(1657),
                l = t(52235),
                s = t(8792),
                i = t(85754),
                u = t(47907),
                c = t(56368),
                o = t(49030);
            let d = ({
                data: e,
                className: n,
                children: t
            }) => {
                let d = (0, u.usePathname)(),
                    {
                        contentSidebarOpen: f,
                        toggleContentSidebar: m
                    } = (0, c.useSidebar)();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("aside", {
                        className: (0, a.cn)("fixed start-0 top-0 z-[11] h-full w-60 shrink-0 -translate-x-full rounded-r-xl border-r border-white/50 bg-[#d4e5e48c] shadow-lg backdrop-blur-md transition-transform duration-300 lg:relative lg:translate-x-0 lg:border-none lg:bg-transparent lg:shadow-none", f && "translate-x-0"),
                        children: [(0, r.jsx)(i.z, {
                            variant: "ghost",
                            size: "icon",
                            className: (0, a.cn)("absolute end-0 top-0 -me-10 mt-2 lg:hidden", !f && "pointer-events-none opacity-0"),
                            onClick: () => m(),
                            children: (0, r.jsx)(l.Z, {
                                className: "h-4 w-4"
                            })
                        }), (0, r.jsxs)(o.ScrollArea, {
                            className: (0, a.cn)("h-full px-3 pt-6 lg:px-1 lg:pt-4", n),
                            children: [(0, r.jsx)("ul", {
                                children: e.map((e, n) => (0, r.jsxs)("li", {
                                    className: "mb-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "mb-1.5 px-2.5 text-xs text-muted",
                                        children: e.group
                                    }), (0, r.jsx)("ul", {
                                        className: "w-full",
                                        children: e.items.map((e, n) => (0, r.jsx)("li", {
                                            children: (0, r.jsxs)(s.default, {
                                                href: e.href,
                                                className: (0, a.cn)(e.href === d ? "bg-accent/20" : "hover:bg-accent/10", "mb-px flex items-center rounded-md p-2.5 leading-none text-headings"),
                                                children: [e.icon && (0, r.jsx)(e.icon, {
                                                    className: (0, a.cn)("me-3 h-4 w-4", (e.color, e.color))
                                                }), (0, r.jsx)("span", {
                                                    className: "flex-1",
                                                    children: e.label
                                                })]
                                            })
                                        }, n))
                                    })]
                                }, n))
                            }), t]
                        })]
                    }), f && (0, r.jsx)("button", {
                        type: "button",
                        className: "fixed inset-0 z-[10] cursor-pointer lg:hidden",
                        onClick: () => m(),
                        children: (0, r.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })
                    })]
                })
            }
        },
        27867: function(e, n, t) {
            t.r(n), t.d(n, {
                ContentSidebarToggle: function() {
                    return i
                }
            });
            var r = t(3827),
                a = t(65694),
                l = t(85754),
                s = t(56368);
            let i = ({
                className: e
            }) => {
                let {
                    toggleContentSidebar: n
                } = (0, s.useSidebar)();
                return (0, r.jsx)(l.z, {
                    variant: "ghost",
                    size: "icon",
                    className: `-ms-1.5 -mt-0.5 me-3 ${e}`,
                    onClick: () => n(),
                    children: (0, r.jsx)(a.Z, {
                        className: "h-4.5 w-4.5"
                    })
                })
            }
        },
        50660: function(e, n, t) {
            t.r(n), t.d(n, {
                Avatar: function() {
                    return i
                },
                AvatarFallback: function() {
                    return c
                },
                AvatarImage: function() {
                    return u
                }
            });
            var r = t(3827),
                a = t(64090),
                l = t(12178),
                s = t(1657);
            let i = a.forwardRef(({
                className: e,
                ...n
            }, t) => (0, r.jsx)(l.fC, {
                ref: t,
                className: (0, s.cn)("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full [&_svg]:w-5 [&_svg]:stroke-[1.25]", e),
                ...n
            }));
            i.displayName = l.fC.displayName;
            let u = a.forwardRef(({
                className: e,
                ...n
            }, t) => (0, r.jsx)(l.Ee, {
                ref: t,
                className: (0, s.cn)("aspect-square h-full w-full", e),
                ...n
            }));
            u.displayName = l.Ee.displayName;
            let c = a.forwardRef(({
                className: e,
                ...n
            }, t) => (0, r.jsx)(l.NY, {
                ref: t,
                className: (0, s.cn)("flex h-full w-full items-center justify-center rounded-full bg-accent text-base text-white dark:text-black [&.bg-accent]:text-headings", e),
                ...n
            }));
            c.displayName = l.NY.displayName
        },
        65694: function(e, n, t) {
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
            let r = (0, t(87461).Z)("AlignLeft", [
                ["line", {
                    x1: "21",
                    x2: "3",
                    y1: "6",
                    y2: "6",
                    key: "1fp77t"
                }],
                ["line", {
                    x1: "15",
                    x2: "3",
                    y1: "12",
                    y2: "12",
                    key: "v6grx8"
                }],
                ["line", {
                    x1: "17",
                    x2: "3",
                    y1: "18",
                    y2: "18",
                    key: "1awlsn"
                }]
            ])
        },
        26490: function(e, n, t) {
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
            let r = (0, t(87461).Z)("Clock", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["polyline", {
                    points: "12 6 12 12 16 14",
                    key: "68esgv"
                }]
            ])
        },
        9047: function(e, n, t) {
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
            let r = (0, t(87461).Z)("MoveLeft", [
                ["path", {
                    d: "M6 8L2 12L6 16",
                    key: "kyvwex"
                }],
                ["path", {
                    d: "M2 12H22",
                    key: "1m8cig"
                }]
            ])
        },
        29295: function(e, n, t) {
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
            let r = (0, t(87461).Z)("SquarePen", [
                ["path", {
                    d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                    key: "1m0v6g"
                }],
                ["path", {
                    d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",
                    key: "1lpok0"
                }]
            ])
        },
        50489: function(e, n, t) {
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
            let r = (0, t(87461).Z)("Trash2", [
                ["path", {
                    d: "M3 6h18",
                    key: "d0wm0j"
                }],
                ["path", {
                    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
                    key: "4alrt4"
                }],
                ["path", {
                    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
                    key: "v07s0e"
                }],
                ["line", {
                    x1: "10",
                    x2: "10",
                    y1: "11",
                    y2: "17",
                    key: "1uufr5"
                }],
                ["line", {
                    x1: "14",
                    x2: "14",
                    y1: "11",
                    y2: "17",
                    key: "xtxkd"
                }]
            ])
        },
        52235: function(e, n, t) {
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
            let r = (0, t(87461).Z)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        8792: function(e, n, t) {
            t.d(n, {
                default: function() {
                    return a.a
                }
            });
            var r = t(25250),
                a = t.n(r)
        },
        47907: function(e, n, t) {
            var r = t(15313);
            t.o(r, "usePathname") && t.d(n, {
                usePathname: function() {
                    return r.usePathname
                }
            }), t.o(r, "useRouter") && t.d(n, {
                useRouter: function() {
                    return r.useRouter
                }
            }), t.o(r, "useSearchParams") && t.d(n, {
                useSearchParams: function() {
                    return r.useSearchParams
                }
            })
        },
        12178: function(e, n, t) {
            t.d(n, {
                Ee: function() {
                    return g
                },
                F$: function() {
                    return x
                },
                NY: function() {
                    return y
                },
                fC: function() {
                    return v
                },
                qE: function() {
                    return h
                }
            });
            var r = t(14749),
                a = t(64090),
                l = t(84104),
                s = t(39830),
                i = t(32618),
                u = t(29586);
            let c = "Avatar",
                [o, d] = (0, l.b)(c),
                [f, m] = o(c),
                h = (0, a.forwardRef)((e, n) => {
                    let {
                        __scopeAvatar: t,
                        ...l
                    } = e, [s, i] = (0, a.useState)("idle");
                    return (0, a.createElement)(f, {
                        scope: t,
                        imageLoadingStatus: s,
                        onImageLoadingStatusChange: i
                    }, (0, a.createElement)(u.WV.span, (0, r.Z)({}, l, {
                        ref: n
                    })))
                }),
                x = (0, a.forwardRef)((e, n) => {
                    let {
                        __scopeAvatar: t,
                        src: l,
                        onLoadingStatusChange: c = () => {},
                        ...o
                    } = e, d = m("AvatarImage", t), f = function(e) {
                        let [n, t] = (0, a.useState)("idle");
                        return (0, i.b)(() => {
                            if (!e) {
                                t("error");
                                return
                            }
                            let n = !0,
                                r = new window.Image,
                                a = e => () => {
                                    n && t(e)
                                };
                            return t("loading"), r.onload = a("loaded"), r.onerror = a("error"), r.src = e, () => {
                                n = !1
                            }
                        }, [e]), n
                    }(l), h = (0, s.W)(e => {
                        c(e), d.onImageLoadingStatusChange(e)
                    });
                    return (0, i.b)(() => {
                        "idle" !== f && h(f)
                    }, [f, h]), "loaded" === f ? (0, a.createElement)(u.WV.img, (0, r.Z)({}, o, {
                        ref: n,
                        src: l
                    })) : null
                }),
                p = (0, a.forwardRef)((e, n) => {
                    let {
                        __scopeAvatar: t,
                        delayMs: l,
                        ...s
                    } = e, i = m("AvatarFallback", t), [c, o] = (0, a.useState)(void 0 === l);
                    return (0, a.useEffect)(() => {
                        if (void 0 !== l) {
                            let e = window.setTimeout(() => o(!0), l);
                            return () => window.clearTimeout(e)
                        }
                    }, [l]), c && "loaded" !== i.imageLoadingStatus ? (0, a.createElement)(u.WV.span, (0, r.Z)({}, s, {
                        ref: n
                    })) : null
                }),
                v = h,
                g = x,
                y = p
        },
        57742: function(e, n, t) {
            t.d(n, {
                j: function() {
                    return l
                }
            });
            let r = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                a = function() {
                    for (var e, n, t = 0, r = ""; t < arguments.length;)(e = arguments[t++]) && (n = function e(n) {
                        var t, r, a = "";
                        if ("string" == typeof n || "number" == typeof n) a += n;
                        else if ("object" == typeof n) {
                            if (Array.isArray(n))
                                for (t = 0; t < n.length; t++) n[t] && (r = e(n[t])) && (a && (a += " "), a += r);
                            else
                                for (t in n) n[t] && (a && (a += " "), a += t)
                        }
                        return a
                    }(e)) && (r && (r += " "), r += n);
                    return r
                },
                l = (e, n) => t => {
                    var l;
                    if ((null == n ? void 0 : n.variants) == null) return a(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
                    let {
                        variants: s,
                        defaultVariants: i
                    } = n, u = Object.keys(s).map(e => {
                        let n = null == t ? void 0 : t[e],
                            a = null == i ? void 0 : i[e];
                        if (null === n) return null;
                        let l = r(n) || r(a);
                        return s[e][l]
                    }), c = t && Object.entries(t).reduce((e, n) => {
                        let [t, r] = n;
                        return void 0 === r || (e[t] = r), e
                    }, {});
                    return a(e, u, null == n ? void 0 : null === (l = n.compoundVariants) || void 0 === l ? void 0 : l.reduce((e, n) => {
                        let {
                            class: t,
                            className: r,
                            ...a
                        } = n;
                        return Object.entries(a).every(e => {
                            let [n, t] = e;
                            return Array.isArray(t) ? t.includes({ ...i,
                                ...c
                            }[n]) : ({ ...i,
                                ...c
                            })[n] === t
                        }) ? [...e, t, r] : e
                    }, []), null == t ? void 0 : t.class, null == t ? void 0 : t.className)
                }
        }
    }
]);