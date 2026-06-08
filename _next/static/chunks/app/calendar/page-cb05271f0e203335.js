(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5329, 7279, 2703, 7696], {
        77702: function(e, r, n) {
            Promise.resolve().then(n.bind(n, 41885)), Promise.resolve().then(n.bind(n, 29275)), Promise.resolve().then(n.bind(n, 25825)), Promise.resolve().then(n.t.bind(n, 81749, 23)), Promise.resolve().then(n.t.bind(n, 25250, 23)), Promise.resolve().then(n.t.bind(n, 33234, 23))
        },
        41885: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                Content: function() {
                    return u
                }
            });
            var t = n(3827),
                a = n(49030),
                o = n(1657),
                i = n(69507);
            let l = {
                    default: "content-body group/content flex-1 overflow-hidden rounded-xl border-[7px] border-transparent bg-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.5)] dark:bg-[#0091ff0d] dark:shadow-[0_0_0_1px_rgb(0,145,255,0.15)]",
                    lg: "mx-auto w-full max-w-6xl",
                    md: "mx-auto w-full max-w-5xl",
                    sm: "mx-auto w-full max-w-4xl",
                    box: "mx-auto w-full max-w-md m-auto flex-none h-auto",
                    fill: "relative isolate before:absolute before:inset-0 before:-z-[1] before:rounded-lg before:bg-card"
                },
                s = ({
                    children: e
                }) => {
                    let {
                        cardToggled: r
                    } = (0, i.r)();
                    return (0, t.jsx)("div", {
                        className: (0, o.cn)("relative flex h-full md:gap-5", r && "toggled", l.default),
                        children: e
                    })
                },
                u = ({
                    sidebar: e,
                    list: r,
                    columns: n,
                    size: u,
                    scrollbar: c = !0,
                    fill: d = !1,
                    padding: f = !1,
                    className: m,
                    children: g
                }) => 2 === n ? (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                        className: (0, o.cn)("relative flex h-full md:gap-5", l.default),
                        children: [e, (0, t.jsx)("div", {
                            className: "flex min-w-0 flex-1 flex-col",
                            children: g
                        })]
                    })
                }) : 3 === n ? (0, t.jsx)(i.G, {
                    children: (0, t.jsxs)(s, {
                        children: [e, r, (0, t.jsx)("div", {
                            className: "flex min-w-0 flex-1 translate-x-full transform-gpu flex-col transition-transform duration-300 group-[.toggled]/content:-translate-x-0 md:translate-x-0",
                            children: g
                        })]
                    })
                }) : (0, t.jsx)(t.Fragment, {
                    children: c ? (0, t.jsx)(a.ScrollArea, {
                        className: (0, o.cn)(l.default, "lg" === u && l.lg, "md" === u && l.md, "sm" === u && l.sm, "box" === u && l.box, d && l.fill, m),
                        children: f ? (0, t.jsx)("div", {
                            className: "p-7",
                            children: g
                        }) : g
                    }) : (0, t.jsx)("div", {
                        className: (0, o.cn)(l.default, "lg" === u && l.lg, "md" === u && l.md, "sm" === u && l.sm, d && l.fill, f && "p-7", m),
                        children: g
                    })
                })
        },
        29275: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                SIDEBAR_DATA: function() {
                    return y
                }
            });
            var t = n(92600),
                a = n(69805),
                o = n(77618),
                i = n(14130),
                l = n(82869),
                s = n(20606),
                u = n(45523),
                c = n(62784),
                d = n(90684),
                f = n(67366),
                m = n(46578),
                g = n(97307),
                b = n(69809),
                h = n(36636),
                p = n(69475),
                v = n(77249),
                x = n(86185);
            let y = [{
                group: "Dashboards",
                items: [{
                    name: "E-Commerce",
                    icon: t.Z,
                    url: "/"
                }, {
                    name: "CRM",
                    icon: a.Z,
                    url: "/crm"
                }, {
                    name: "Analytics",
                    icon: o.Z,
                    url: "/analytics"
                }, {
                    name: "Project Management",
                    icon: i.Z,
                    url: "/project-management"
                }, {
                    name: "Email Marketing",
                    icon: l.Z,
                    url: "/email-marketing"
                }]
            }, {
                group: "Application Views",
                items: [{
                    name: "User",
                    icon: s.Z,
                    url: "/user",
                    sub: [{
                        name: "Profile",
                        url: "/user/profile"
                    }, {
                        name: "Timeline",
                        url: "/user/timeline"
                    }, {
                        name: "Connection",
                        url: "/user/connections"
                    }]
                }, {
                    name: "File Manager",
                    icon: u.Z,
                    url: "/file-manager",
                    shrunk: !0
                }, {
                    name: "Contacts",
                    icon: c.Z,
                    url: "/contacts",
                    shrunk: !0
                }, {
                    name: "Mail",
                    icon: d.Z,
                    url: "/mail",
                    shrunk: !0
                }, {
                    name: "Messages",
                    icon: f.Z,
                    url: "/messages",
                    shrunk: !0
                }, {
                    name: "Todo Lists",
                    icon: m.Z,
                    url: "/todo",
                    shrunk: !0
                }, {
                    name: "Calendar",
                    icon: g.Z,
                    url: "/calendar"
                }]
            }, {
                group: "Miscellaneous",
                items: [{
                    name: "Sample Pages",
                    icon: b.Z,
                    url: "/sample-pages",
                    sub: [{
                        name: "Invoice",
                        url: "/sample-pages/invoice"
                    }, {
                        name: "Pricing Table",
                        url: "/sample-pages/pricing-table"
                    }, {
                        name: "Search Results",
                        url: "/sample-pages/search-results",
                        shrunk: !0
                    }, {
                        name: "FAQ",
                        url: "/sample-pages/faq"
                    }, {
                        name: "Teams",
                        url: "/sample-pages/teams"
                    }, {
                        name: "Login",
                        url: "/sample-pages/login",
                        hiddenSidebars: !0
                    }, {
                        name: "Register",
                        url: "/sample-pages/register",
                        hiddenSidebars: !0
                    }, {
                        name: "Forgot Password",
                        url: "/sample-pages/forgot-password",
                        hiddenSidebars: !0
                    }, {
                        name: "Coming Soon",
                        url: "/sample-pages/coming-soon",
                        hiddenSidebars: !0
                    }, {
                        name: "Error",
                        url: "/sample-pages/error"
                    }]
                }, {
                    name: "Content",
                    icon: h.Z,
                    url: "/content",
                    sub: [{
                        name: "Typography",
                        url: "/content/typography"
                    }, {
                        name: "Icons",
                        url: "/content/icons"
                    }, {
                        name: "Tables",
                        url: "/content/tables"
                    }]
                }, {
                    name: "Forms",
                    icon: p.Z,
                    url: "/forms"
                }, {
                    name: "Components",
                    icon: v.Z,
                    url: "https://ui.shadcn.com/docs/components/accordion"
                }, {
                    name: "Charts",
                    icon: x.Z,
                    url: "/charts"
                }]
            }]
        },
        25825: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                SidebarToggle: function() {
                    return l
                }
            });
            var t = n(3827),
                a = n(25786),
                o = n(85754),
                i = n(56368);
            let l = ({
                className: e
            }) => {
                let {
                    toggleSidebar: r
                } = (0, i.useSidebar)();
                return (0, t.jsx)(o.z, {
                    variant: "highlight",
                    size: "icon",
                    className: e,
                    onClick: () => r(),
                    children: (0, t.jsx)(a.Z, {
                        className: "w-5"
                    })
                })
            }
        },
        85754: function(e, r, n) {
            "use strict";
            n.d(r, {
                d: function() {
                    return s
                },
                z: function() {
                    return u
                }
            });
            var t = n(3827),
                a = n(64090),
                o = n(59143),
                i = n(57742),
                l = n(1657);
            let s = (0, i.j)("inline-flex gap-2 items-center rounded-md px-4 justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input hover:bg-accent focus-visible:bg-accent bg-transparent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent focus-visible:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent",
                            link: "text-primary underline-offset-4 hover:underline",
                            highlight: "text-headings transition-[background,box-shadow] duration-300 hover:bg-white focus-visible:bg-white hover:ring-3 hover:ring-white/30 dark:hover:ring-accent/15 dark:hover:bg-accent/50 dark:focus-visible:bg-accent",
                            plain: "bg-transparent",
                            list: "py-2 px-3 hover:bg-accent focus-visible:bg-accent hover:text-accent-foreground w-full text-start",
                            input: "flex justify-start w-full border border-input bg-transparent px-3 text-sm focus-visible:border-input-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-75"
                        },
                        size: {
                            default: "h-10",
                            sm: "h-9 px-3 text-[0.8125rem]",
                            lg: "h-11 px-8",
                            icon: "h-9 w-9 p-0",
                            free: "h-auto"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                u = a.forwardRef(({
                    className: e,
                    variant: r,
                    size: n,
                    asChild: a = !1,
                    ...i
                }, u) => {
                    let c = a ? o.g7 : "button";
                    return (0, t.jsx)(c, {
                        className: (0, l.cn)(s({
                            variant: r,
                            size: n,
                            className: e
                        })),
                        ref: u,
                        ...i
                    })
                });
            u.displayName = "Button"
        },
        49030: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                ScrollArea: function() {
                    return l
                },
                ScrollBar: function() {
                    return s
                }
            });
            var t = n(3827),
                a = n(64090),
                o = n(19346),
                i = n(1657);
            let l = a.forwardRef(({
                className: e,
                children: r,
                onScroll: n,
                ...a
            }, l) => (0, t.jsxs)(o.fC, {
                ref: l,
                className: (0, i.cn)("relative overflow-hidden", e),
                ...a,
                children: [(0, t.jsx)(o.l_, {
                    className: "h-full w-full [&>div]:!block",
                    onScroll: n,
                    children: r
                }), (0, t.jsx)(s, {}), (0, t.jsx)(o.Ns, {})]
            }));
            l.displayName = o.fC.displayName;
            let s = a.forwardRef(({
                className: e,
                orientation: r = "vertical",
                ...n
            }, a) => (0, t.jsx)(o.gb, {
                ref: a,
                orientation: r,
                className: (0, i.cn)("flex touch-none select-none transition-colors", "vertical" === r && "h-full w-2 border-l border-l-transparent p-[1px]", "horizontal" === r && "h-2 flex-col border-t border-t-transparent p-[1px]", e),
                ...n,
                children: (0, t.jsx)(o.q4, {
                    className: "relative flex-1 rounded-full bg-scrollbar/60 transition-colors duration-300 hover:bg-scrollbar"
                })
            }));
            s.displayName = o.gb.displayName
        },
        69507: function(e, r, n) {
            "use strict";
            n.d(r, {
                G: function() {
                    return i
                },
                r: function() {
                    return l
                }
            });
            var t = n(3827),
                a = n(64090);
            let o = (0, a.createContext)(void 0),
                i = ({
                    children: e
                }) => {
                    let [r, n] = (0, a.useState)(!1);
                    return (0, t.jsx)(o.Provider, {
                        value: {
                            cardToggled: r,
                            toggleCard: e => {
                                n(e)
                            }
                        },
                        children: e
                    })
                },
                l = () => {
                    let e = (0, a.useContext)(o);
                    if (void 0 === e) throw Error("useContent must be used within a ContentProvider");
                    return e
                }
        },
        56368: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                SidebarProvider: function() {
                    return i
                },
                useSidebar: function() {
                    return l
                }
            });
            var t = n(3827),
                a = n(64090);
            let o = (0, a.createContext)(void 0),
                i = ({
                    children: e
                }) => {
                    let [r, n] = (0, a.useState)(!1), [i, l] = (0, a.useState)(!1);
                    return (0, t.jsx)(o.Provider, {
                        value: {
                            sidebarOpen: r,
                            toggleSidebar: () => {
                                n(!r)
                            },
                            contentSidebarOpen: i,
                            toggleContentSidebar: () => {
                                l(!i)
                            }
                        },
                        children: e
                    })
                },
                l = () => {
                    let e = (0, a.useContext)(o);
                    if (void 0 === e) throw Error("useSidebar must be used within a SidebarProvider");
                    return e
                }
        },
        1657: function(e, r, n) {
            "use strict";
            n.d(r, {
                V5: function() {
                    return g
                },
                Z6: function() {
                    return b
                },
                cn: function() {
                    return c
                },
                jm: function() {
                    return f
                },
                p4: function() {
                    return a.a
                },
                x3: function() {
                    return m
                }
            });
            var t = n(33234),
                a = n.n(t),
                o = n(75504),
                i = n(51367),
                l = n(29275),
                s = n(84780),
                u = n.n(s);

            function c(...e) {
                return (0, i.m6)((0, o.W)(e))
            }
            let d = l.SIDEBAR_DATA,
                f = e => {
                    for (let r of d)
                        for (let n of r.items) {
                            if (n.url && e.startsWith(n.url) && n.shrunk) return !0;
                            if (n.sub) {
                                for (let r of n.sub)
                                    if (r.url && e.startsWith(r.url) && r.shrunk) return !0
                            }
                        }
                    return !1
                },
                m = e => {
                    for (let r of d)
                        for (let n of r.items) {
                            if (n.url && e.startsWith(n.url) && n.hiddenSidebars) return !0;
                            if (n.sub) {
                                for (let r of n.sub)
                                    if (r.url && e.startsWith(r.url) && r.hiddenSidebars) return !0
                            }
                        }
                    return !1
                },
                g = () => navigator.userAgent.toLowerCase().includes("mac"),
                b = e => u().sanitize(e)
        },
        25786: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return t
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let t = (0, n(87461).Z)("AlignJustify", [
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "6",
                    y2: "6",
                    key: "4m8b97"
                }],
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "12",
                    y2: "12",
                    key: "10d38w"
                }],
                ["line", {
                    x1: "3",
                    x2: "21",
                    y1: "18",
                    y2: "18",
                    key: "kwyyxn"
                }]
            ])
        },
        57742: function(e, r, n) {
            "use strict";
            n.d(r, {
                j: function() {
                    return o
                }
            });
            let t = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                a = function() {
                    for (var e, r, n = 0, t = ""; n < arguments.length;)(e = arguments[n++]) && (r = function e(r) {
                        var n, t, a = "";
                        if ("string" == typeof r || "number" == typeof r) a += r;
                        else if ("object" == typeof r) {
                            if (Array.isArray(r))
                                for (n = 0; n < r.length; n++) r[n] && (t = e(r[n])) && (a && (a += " "), a += t);
                            else
                                for (n in r) r[n] && (a && (a += " "), a += n)
                        }
                        return a
                    }(e)) && (t && (t += " "), t += r);
                    return t
                },
                o = (e, r) => n => {
                    var o;
                    if ((null == r ? void 0 : r.variants) == null) return a(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: i,
                        defaultVariants: l
                    } = r, s = Object.keys(i).map(e => {
                        let r = null == n ? void 0 : n[e],
                            a = null == l ? void 0 : l[e];
                        if (null === r) return null;
                        let o = t(r) || t(a);
                        return i[e][o]
                    }), u = n && Object.entries(n).reduce((e, r) => {
                        let [n, t] = r;
                        return void 0 === t || (e[n] = t), e
                    }, {});
                    return a(e, s, null == r ? void 0 : null === (o = r.compoundVariants) || void 0 === o ? void 0 : o.reduce((e, r) => {
                        let {
                            class: n,
                            className: t,
                            ...a
                        } = r;
                        return Object.entries(a).every(e => {
                            let [r, n] = e;
                            return Array.isArray(n) ? n.includes({ ...l,
                                ...u
                            }[r]) : ({ ...l,
                                ...u
                            })[r] === n
                        }) ? [...e, n, t] : e
                    }, []), null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        }
    },
    function(e) {
        e.O(0, [3407, 6349, 5250, 9346, 1749, 2971, 8069, 1744], function() {
            return e(e.s = 77702)
        }), _N_E = e.O()
    }
]);