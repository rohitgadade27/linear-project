"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5845], {
        41885: function(e, r, t) {
            t.r(r), t.d(r, {
                Content: function() {
                    return u
                }
            });
            var n = t(3827),
                a = t(49030),
                o = t(1657),
                l = t(69507);
            let i = {
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
                    } = (0, l.r)();
                    return (0, n.jsx)("div", {
                        className: (0, o.cn)("relative flex h-full md:gap-5", r && "toggled", i.default),
                        children: e
                    })
                },
                u = ({
                    sidebar: e,
                    list: r,
                    columns: t,
                    size: u,
                    scrollbar: d = !0,
                    fill: c = !1,
                    padding: f = !1,
                    className: m,
                    children: g
                }) => 2 === t ? (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("div", {
                        className: (0, o.cn)("relative flex h-full md:gap-5", i.default),
                        children: [e, (0, n.jsx)("div", {
                            className: "flex min-w-0 flex-1 flex-col",
                            children: g
                        })]
                    })
                }) : 3 === t ? (0, n.jsx)(l.G, {
                    children: (0, n.jsxs)(s, {
                        children: [e, r, (0, n.jsx)("div", {
                            className: "flex min-w-0 flex-1 translate-x-full transform-gpu flex-col transition-transform duration-300 group-[.toggled]/content:-translate-x-0 md:translate-x-0",
                            children: g
                        })]
                    })
                }) : (0, n.jsx)(n.Fragment, {
                    children: d ? (0, n.jsx)(a.ScrollArea, {
                        className: (0, o.cn)(i.default, "lg" === u && i.lg, "md" === u && i.md, "sm" === u && i.sm, "box" === u && i.box, c && i.fill, m),
                        children: f ? (0, n.jsx)("div", {
                            className: "p-7",
                            children: g
                        }) : g
                    }) : (0, n.jsx)("div", {
                        className: (0, o.cn)(i.default, "lg" === u && i.lg, "md" === u && i.md, "sm" === u && i.sm, c && i.fill, f && "p-7", m),
                        children: g
                    })
                })
        },
        29275: function(e, r, t) {
            t.r(r), t.d(r, {
                SIDEBAR_DATA: function() {
                    return w
                }
            });
            var n = t(92600),
                a = t(69805),
                o = t(77618),
                l = t(14130),
                i = t(82869),
                s = t(20606),
                u = t(45523),
                d = t(62784),
                c = t(90684),
                f = t(67366),
                m = t(46578),
                g = t(97307),
                h = t(69809),
                p = t(36636),
                b = t(69475),
                x = t(77249),
                v = t(86185);
            let w = [{
                group: "Dashboards",
                items: [{
                    name: "E-Commerce",
                    icon: n.Z,
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
                    icon: l.Z,
                    url: "/project-management"
                }, {
                    name: "Email Marketing",
                    icon: i.Z,
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
                    icon: d.Z,
                    url: "/contacts",
                    shrunk: !0
                }, {
                    name: "Mail",
                    icon: c.Z,
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
                    icon: h.Z,
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
                    icon: p.Z,
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
                    icon: b.Z,
                    url: "/forms"
                }, {
                    name: "Components",
                    icon: x.Z,
                    url: "https://ui.shadcn.com/docs/components/accordion"
                }, {
                    name: "Charts",
                    icon: v.Z,
                    url: "/charts"
                }]
            }]
        },
        25825: function(e, r, t) {
            t.r(r), t.d(r, {
                SidebarToggle: function() {
                    return i
                }
            });
            var n = t(3827),
                a = t(25786),
                o = t(85754),
                l = t(56368);
            let i = ({
                className: e
            }) => {
                let {
                    toggleSidebar: r
                } = (0, l.useSidebar)();
                return (0, n.jsx)(o.z, {
                    variant: "highlight",
                    size: "icon",
                    className: e,
                    onClick: () => r(),
                    children: (0, n.jsx)(a.Z, {
                        className: "w-5"
                    })
                })
            }
        },
        85754: function(e, r, t) {
            t.d(r, {
                d: function() {
                    return s
                },
                z: function() {
                    return u
                }
            });
            var n = t(3827),
                a = t(64090),
                o = t(59143),
                l = t(57742),
                i = t(1657);
            let s = (0, l.j)("inline-flex gap-2 items-center rounded-md px-4 justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
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
                    size: t,
                    asChild: a = !1,
                    ...l
                }, u) => {
                    let d = a ? o.g7 : "button";
                    return (0, n.jsx)(d, {
                        className: (0, i.cn)(s({
                            variant: r,
                            size: t,
                            className: e
                        })),
                        ref: u,
                        ...l
                    })
                });
            u.displayName = "Button"
        },
        27815: function(e, r, t) {
            t.d(r, {
                Ol: function() {
                    return i
                },
                Zb: function() {
                    return l
                },
                aY: function() {
                    return u
                },
                eW: function() {
                    return d
                },
                ll: function() {
                    return s
                }
            });
            var n = t(3827),
                a = t(64090),
                o = t(1657);
            let l = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)("div", {
                ref: t,
                className: (0, o.cn)("inline-block w-full rounded-lg bg-card", e),
                ...r
            }));
            l.displayName = "Card";
            let i = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)("div", {
                ref: t,
                className: (0, o.cn)("flex flex-col gap-2 p-5", e),
                ...r
            }));
            i.displayName = "CardHeader";
            let s = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)("h3", {
                ref: t,
                className: (0, o.cn)("text-md font-medium leading-none text-headings", e),
                ...r
            }));
            s.displayName = "CardTitle", a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)("p", {
                ref: t,
                className: (0, o.cn)("text-sm text-muted-foreground", e),
                ...r
            })).displayName = "CardDescription";
            let u = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)("div", {
                ref: t,
                className: (0, o.cn)("p-5 pt-0", e),
                ...r
            }));
            u.displayName = "CardContent";
            let d = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)("div", {
                ref: t,
                className: (0, o.cn)("flex items-center p-5 pt-0", e),
                ...r
            }));
            d.displayName = "CardFooter"
        },
        49030: function(e, r, t) {
            t.r(r), t.d(r, {
                ScrollArea: function() {
                    return i
                },
                ScrollBar: function() {
                    return s
                }
            });
            var n = t(3827),
                a = t(64090),
                o = t(19346),
                l = t(1657);
            let i = a.forwardRef(({
                className: e,
                children: r,
                onScroll: t,
                ...a
            }, i) => (0, n.jsxs)(o.fC, {
                ref: i,
                className: (0, l.cn)("relative overflow-hidden", e),
                ...a,
                children: [(0, n.jsx)(o.l_, {
                    className: "h-full w-full [&>div]:!block",
                    onScroll: t,
                    children: r
                }), (0, n.jsx)(s, {}), (0, n.jsx)(o.Ns, {})]
            }));
            i.displayName = o.fC.displayName;
            let s = a.forwardRef(({
                className: e,
                orientation: r = "vertical",
                ...t
            }, a) => (0, n.jsx)(o.gb, {
                ref: a,
                orientation: r,
                className: (0, l.cn)("flex touch-none select-none transition-colors", "vertical" === r && "h-full w-2 border-l border-l-transparent p-[1px]", "horizontal" === r && "h-2 flex-col border-t border-t-transparent p-[1px]", e),
                ...t,
                children: (0, n.jsx)(o.q4, {
                    className: "relative flex-1 rounded-full bg-scrollbar/60 transition-colors duration-300 hover:bg-scrollbar"
                })
            }));
            s.displayName = o.gb.displayName
        },
        69507: function(e, r, t) {
            t.d(r, {
                G: function() {
                    return l
                },
                r: function() {
                    return i
                }
            });
            var n = t(3827),
                a = t(64090);
            let o = (0, a.createContext)(void 0),
                l = ({
                    children: e
                }) => {
                    let [r, t] = (0, a.useState)(!1);
                    return (0, n.jsx)(o.Provider, {
                        value: {
                            cardToggled: r,
                            toggleCard: e => {
                                t(e)
                            }
                        },
                        children: e
                    })
                },
                i = () => {
                    let e = (0, a.useContext)(o);
                    if (void 0 === e) throw Error("useContent must be used within a ContentProvider");
                    return e
                }
        },
        56368: function(e, r, t) {
            t.r(r), t.d(r, {
                SidebarProvider: function() {
                    return l
                },
                useSidebar: function() {
                    return i
                }
            });
            var n = t(3827),
                a = t(64090);
            let o = (0, a.createContext)(void 0),
                l = ({
                    children: e
                }) => {
                    let [r, t] = (0, a.useState)(!1), [l, i] = (0, a.useState)(!1);
                    return (0, n.jsx)(o.Provider, {
                        value: {
                            sidebarOpen: r,
                            toggleSidebar: () => {
                                t(!r)
                            },
                            contentSidebarOpen: l,
                            toggleContentSidebar: () => {
                                i(!l)
                            }
                        },
                        children: e
                    })
                },
                i = () => {
                    let e = (0, a.useContext)(o);
                    if (void 0 === e) throw Error("useSidebar must be used within a SidebarProvider");
                    return e
                }
        },
        57084: function(e, r, t) {
            t.d(r, {
                DM: function() {
                    return a
                },
                MS: function() {
                    return i
                },
                bK: function() {
                    return d
                },
                sG: function() {
                    return u
                },
                t8: function() {
                    return o
                },
                yW: function() {
                    return l
                }
            });
            var n = t(1657);
            let a = {
                    white: "#ffffff",
                    transparent: "rgba(0,0,0,0)",
                    blue: "35, 146, 249",
                    indigo: "92, 107, 192",
                    purple: "226, 108, 245",
                    pink: "240, 98, 146",
                    red: "253, 113, 113",
                    orange: "254, 168, 76",
                    yellow: "255, 235, 59",
                    green: "16, 185, 129",
                    teal: "51, 182, 169",
                    cyan: "38, 198, 218",
                    ticks: {
                        light: "hsl(207, 36%, 57%)",
                        dark: "hsl(207, 48%, 53%)"
                    },
                    tooltips: {
                        body: {
                            light: "hsl(207, 54%, 33%)",
                            dark: "hsl(207, 100%, 81%)"
                        },
                        title: {
                            light: "hsl(210, 57%, 26%)",
                            dark: "hsl(207, 100%, 87%)"
                        },
                        bg: {
                            light: "hsl(0, 0%, 100%)",
                            dark: "hsl(206, 100%, 28%)"
                        },
                        border: {
                            light: "hsla(0, 0%, 100%, 0.35)",
                            dark: "hsla(206, 100%, 32%, 0.2)"
                        }
                    },
                    grid: {
                        light: "hsl(202, 66%, 67%, 0.15)",
                        dark: "hsla(206, 100%, 32%, 0.15)"
                    },
                    border: {
                        light: "240, 245, 245",
                        dark: "2, 38, 85"
                    }
                },
                o = (e, r = 8, t = "inner") => ({
                    color: "light" === e ? a.ticks.light : a.ticks.dark,
                    source: "auto",
                    distribution: "linear",
                    autoSkip: !0,
                    maxRotation: 0,
                    padding: r,
                    align: t,
                    font: {
                        family: n.p4.style.fontFamily,
                        size: 10
                    }
                }),
                l = e => ({
                    drawBorder: !1,
                    drawTicks: !1,
                    color: "light" === e ? a.grid.light : a.grid.dark
                }),
                i = e => ({
                    titleFont: {
                        family: n.p4.style.fontFamily,
                        size: 10,
                        weight: "normal"
                    },
                    titleColor: "light" === e ? a.tooltips.title.light : a.tooltips.title.dark,
                    bodyFont: {
                        family: n.p4.style.fontFamily,
                        size: 10
                    },
                    bodyColor: "light" === e ? a.tooltips.body.light : a.tooltips.body.dark,
                    titleMarginBottom: 3,
                    backgroundColor: "light" === e ? a.tooltips.bg.light : a.tooltips.bg.dark,
                    padding: 10,
                    cornerRadius: 6,
                    multiKeyBackground: a.transparent,
                    displayColors: !1,
                    borderColor: "light" === e ? a.tooltips.border.light : a.tooltips.border.dark,
                    borderWidth: 6,
                    caretSize: 0
                }),
                s = (e, r, t, n, a) => {
                    let o, l, i;
                    let s = r.right - r.left,
                        u = r.bottom - r.top;
                    return (null === i || o !== s || l !== u) && (o = s, l = u, (i = e.createLinearGradient(0, r.bottom, 0, r.top)).addColorStop(0, a), i.addColorStop(t, n)), i
                },
                u = (e, r, t) => {
                    let {
                        ctx: n,
                        chartArea: a
                    } = e.chart;
                    return a ? s(n, a, .9, r, t) : null
                },
                d = e => ({
                    color: "light" === e ? a.ticks.light : a.ticks.dark,
                    boxWidth: 8,
                    boxHeight: 8,
                    padding: 20,
                    font: {
                        family: n.p4.style.fontFamily,
                        size: 10
                    }
                })
        },
        1657: function(e, r, t) {
            t.d(r, {
                V5: function() {
                    return g
                },
                Z6: function() {
                    return h
                },
                cn: function() {
                    return d
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
            var n = t(33234),
                a = t.n(n),
                o = t(75504),
                l = t(51367),
                i = t(29275),
                s = t(84780),
                u = t.n(s);

            function d(...e) {
                return (0, l.m6)((0, o.W)(e))
            }
            let c = i.SIDEBAR_DATA,
                f = e => {
                    for (let r of c)
                        for (let t of r.items) {
                            if (t.url && e.startsWith(t.url) && t.shrunk) return !0;
                            if (t.sub) {
                                for (let r of t.sub)
                                    if (r.url && e.startsWith(r.url) && r.shrunk) return !0
                            }
                        }
                    return !1
                },
                m = e => {
                    for (let r of c)
                        for (let t of r.items) {
                            if (t.url && e.startsWith(t.url) && t.hiddenSidebars) return !0;
                            if (t.sub) {
                                for (let r of t.sub)
                                    if (r.url && e.startsWith(r.url) && r.hiddenSidebars) return !0
                            }
                        }
                    return !1
                },
                g = () => navigator.userAgent.toLowerCase().includes("mac"),
                h = e => u().sanitize(e)
        }
    }
]);