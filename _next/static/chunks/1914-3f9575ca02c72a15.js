"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1914], {
        41885: function(e, r, n) {
            n.r(r), n.d(r, {
                Content: function() {
                    return c
                }
            });
            var t = n(3827),
                a = n(49030),
                o = n(1657),
                l = n(69507);
            let s = {
                    default: "content-body group/content flex-1 overflow-hidden rounded-xl border-[7px] border-transparent bg-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.5)] dark:bg-[#0091ff0d] dark:shadow-[0_0_0_1px_rgb(0,145,255,0.15)]",
                    lg: "mx-auto w-full max-w-6xl",
                    md: "mx-auto w-full max-w-5xl",
                    sm: "mx-auto w-full max-w-4xl",
                    box: "mx-auto w-full max-w-md m-auto flex-none h-auto",
                    fill: "relative isolate before:absolute before:inset-0 before:-z-[1] before:rounded-lg before:bg-card"
                },
                i = ({
                    children: e
                }) => {
                    let {
                        cardToggled: r
                    } = (0, l.r)();
                    return (0, t.jsx)("div", {
                        className: (0, o.cn)("relative flex h-full md:gap-5", r && "toggled", s.default),
                        children: e
                    })
                },
                c = ({
                    sidebar: e,
                    list: r,
                    columns: n,
                    size: c,
                    scrollbar: u = !0,
                    fill: d = !1,
                    padding: m = !1,
                    className: f,
                    children: h
                }) => 2 === n ? (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                        className: (0, o.cn)("relative flex h-full md:gap-5", s.default),
                        children: [e, (0, t.jsx)("div", {
                            className: "flex min-w-0 flex-1 flex-col",
                            children: h
                        })]
                    })
                }) : 3 === n ? (0, t.jsx)(l.G, {
                    children: (0, t.jsxs)(i, {
                        children: [e, r, (0, t.jsx)("div", {
                            className: "flex min-w-0 flex-1 translate-x-full transform-gpu flex-col transition-transform duration-300 group-[.toggled]/content:-translate-x-0 md:translate-x-0",
                            children: h
                        })]
                    })
                }) : (0, t.jsx)(t.Fragment, {
                    children: u ? (0, t.jsx)(a.ScrollArea, {
                        className: (0, o.cn)(s.default, "lg" === c && s.lg, "md" === c && s.md, "sm" === c && s.sm, "box" === c && s.box, d && s.fill, f),
                        children: m ? (0, t.jsx)("div", {
                            className: "p-7",
                            children: h
                        }) : h
                    }) : (0, t.jsx)("div", {
                        className: (0, o.cn)(s.default, "lg" === c && s.lg, "md" === c && s.md, "sm" === c && s.sm, d && s.fill, m && "p-7", f),
                        children: h
                    })
                })
        },
        39488: function(e, r, n) {
            n.r(r), n.d(r, {
                Search: function() {
                    return c
                }
            });
            var t = n(3827),
                a = n(1657),
                o = n(28670),
                l = n(64090);
            let s = (0, t.jsx)("svg", {
                    fill: "currentColor",
                    height: "10",
                    width: "18",
                    children: (0, t.jsx)("path", {
                        d: "m2.298 9.196a1.8 1.8 0 0 1 -.929-.247 1.91 1.91 0 0 1 -.673-.673 1.8 1.8 0 0 1 -.247-.929c0-.338.082-.652.247-.933a1.91 1.91 0 0 1 .673-.673 1.78 1.78 0 0 1 .929-.251h.989v-1.714h-.989a1.8 1.8 0 0 1 -.929-.247 1.92 1.92 0 0 1 -.673-.669c-.165-.281-.247-.592-.247-.933a1.79 1.79 0 0 1 .247-.93c.168-.281.392-.504.673-.669a1.78 1.78 0 0 1 .929-.251 1.79 1.79 0 0 1 .933.251c.281.165.506.388.673.669a1.78 1.78 0 0 1 .251.929v.98h1.713v-.98a1.79 1.79 0 0 1 .247-.929c.168-.281.391-.504.669-.669a1.79 1.79 0 0 1 .933-.251 1.77 1.77 0 0 1 .929.251 1.84 1.84 0 0 1 .669.669 1.76 1.76 0 0 1 .251.929 1.79 1.79 0 0 1 -.251.933c-.165.278-.388.501-.669.669a1.79 1.79 0 0 1 -.929.247h-.98v1.713h.98a1.77 1.77 0 0 1 .929.251 1.9 1.9 0 0 1 .669.673 1.79 1.79 0 0 1 .251.933 1.78 1.78 0 0 1 -.251.929c-.165.281-.388.506-.669.673a1.79 1.79 0 0 1 -.929.247c-.341 0-.652-.082-.933-.247a1.92 1.92 0 0 1 -.669-.673 1.8 1.8 0 0 1 -.247-.929v-.989h-1.712v.989a1.78 1.78 0 0 1 -.251.929 1.91 1.91 0 0 1 -.673.673c-.281.165-.592.247-.933.247zm0-.869c.182 0 .347-.044.494-.132a1.02 1.02 0 0 0 .358-.354.94.94 0 0 0 .136-.494v-.989h-.989a.94.94 0 0 0 -.494.136.99.99 0 0 0 -.354.358c-.088.151-.132.313-.132.494a.96.96 0 0 0 .132.494 1 1 0 0 0 .354.354.96.96 0 0 0 .494.132zm0-5.42h.989v-.98a.92.92 0 0 0 -.136-.494 1.02 1.02 0 0 0 -.358-.354.96.96 0 0 0 -.495-.133.96.96 0 0 0 -.494.132 1 1 0 0 0 -.354.354.95.95 0 0 0 -.132.494.97.97 0 0 0 .132.499 1 1 0 0 0 .354.354.95.95 0 0 0 .494.128zm4.44 0h.98a.97.97 0 0 0 .494-.128 1 1 0 0 0 .354-.354.97.97 0 0 0 .132-.499c0-.182-.044-.347-.132-.494a1.01 1.01 0 0 0 -.354-.354.95.95 0 0 0 -.494-.132.97.97 0 0 0 -.499.132 1 1 0 0 0 -.354.354.97.97 0 0 0 -.128.494v.98zm.98 5.42c.182 0 .347-.044.494-.132a1.01 1.01 0 0 0 .354-.354.96.96 0 0 0 .132-.494c0-.182-.044-.347-.132-.494a1.02 1.02 0 0 0 -.354-.358.95.95 0 0 0 -.494-.136h-.98v.989c0 .179.043.344.128.494a.96.96 0 0 0 .354.354.97.97 0 0 0 .499.132zm-3.562-2.838h1.713v-1.713h-1.713zm8.854-5.02v8.531h-1.078v-8.531zm4.289 0-2.935 3.979-1.717 2.068-.193-1.207 1.26-1.652 2.296-3.188zm-1.072 8.531-2.514-4.16.639-.896 3.158 5.056z"
                    })
                }),
                i = (0, t.jsx)("svg", {
                    fill: "currentColor",
                    height: "10",
                    width: "26",
                    children: (0, t.jsx)("path", {
                        d: "m5.191 6.287h1.079c-.027.586-.146 1.092-.357 1.518a2.21 2.21 0 0 1 -.908.973c-.395.227-.889.34-1.482.34a2.59 2.59 0 0 1 -1.154-.252 2.53 2.53 0 0 1 -.885-.721 3.43 3.43 0 0 1 -.557-1.137c-.129-.442-.195-.938-.195-1.488v-1.577c0-.547.064-1.041.193-1.482s.322-.818.568-1.131a2.52 2.52 0 0 1 .908-.727c.355-.168.766-.252 1.219-.252.555 0 1.023.111 1.406.334s.684.541.891.967.328.939.352 1.553h-1.078c-.027-.449-.098-.814-.211-1.096s-.281-.494-.504-.627-.504-.205-.855-.205c-.312 0-.584.063-.814.188s-.414.305-.562.539-.254.51-.328.838-.105.688-.105 1.09v1.588a5.9 5.9 0 0 0 .088 1.049 2.98 2.98 0 0 0 .293.855c.137.242.314.432.533.568a1.48 1.48 0 0 0 .797.205c.395 0 .707-.064.938-.193s.4-.334.51-.615.188-.648.223-1.102zm4.711-3.627v.832h-2.959v-.832zm-1.992-1.541h1.037v6.311c0 .215.025.377.076.486s.123.182.205.217a.66.66 0 0 0 .264.053 1.32 1.32 0 0 0 .234-.023l.176-.047-.006.884a1.73 1.73 0 0 1 -.281.076 2.31 2.31 0 0 1 -.445.041 1.27 1.27 0 0 1 -.621-.158c-.191-.105-.346-.281-.463-.527s-.176-.586-.176-1.008zm4.266 2.537v5.344h-1.037v-6.34h1.002zm1.576-1.031.006 1.008a1.42 1.42 0 0 0 -.234-.035c-.066-.008-.145-.012-.234-.012-.195 0-.367.039-.516.117a1.15 1.15 0 0 0 -.375.328c-.105.141-.189.309-.252.504a3.02 3.02 0 0 0 -.129.633l-.27.176c0-.383.029-.742.088-1.078a3.36 3.36 0 0 1 .287-.891 1.61 1.61 0 0 1 .492-.609c.199-.144.445-.223.727-.223a1.14 1.14 0 0 1 .229.029c.09.019.154.033.182.053zm2.156-2.625v9h-1.031v-9zm5.614.469v8.531h-1.078v-8.531zm4.289 0-2.936 3.979-1.717 2.068-.193-1.207 1.26-1.652 2.297-3.188zm-1.073 8.531-2.514-4.16.639-.896 3.159 5.056h-1.283z"
                    })
                }),
                c = ({
                    placeholder: e = "",
                    className: r
                }) => {
                    let [n, c] = (0, l.useState)(null), u = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => {
                        c((0, a.V5)() ? s : i);
                        let e = e => {
                            if ("k" === e.key && (e.metaKey || e.ctrlKey)) {
                                var r;
                                e.preventDefault(), null === (r = u.current) || void 0 === r || r.focus()
                            }
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, []), (0, t.jsxs)("div", {
                        className: (0, a.cn)("relative", r),
                        children: [(0, t.jsx)(o.Z, {
                            className: "absolute left-4 top-1/2 w-4 -translate-y-1/2 transform"
                        }), (0, t.jsx)("input", {
                            ref: u,
                            type: "search",
                            placeholder: `${e}...`,
                            className: "h-10 w-full rounded-full border border-white/60 bg-white/20 pe-10 ps-10 text-sm ring-white/20 placeholder:text-body focus:border-white/90 focus:ring-3 dark:border-border/40 dark:bg-accent/5 dark:focus:border-border/75 dark:focus:ring-accent/10"
                        }), (0, t.jsx)("kbd", {
                            className: "absolute end-4 top-3.5 mt-px flex shrink-0 items-center text-xs",
                            children: n
                        })]
                    })
                }
        },
        29275: function(e, r, n) {
            n.r(r), n.d(r, {
                SIDEBAR_DATA: function() {
                    return w
                }
            });
            var t = n(92600),
                a = n(69805),
                o = n(77618),
                l = n(14130),
                s = n(82869),
                i = n(20606),
                c = n(45523),
                u = n(62784),
                d = n(90684),
                m = n(67366),
                f = n(46578),
                h = n(97307),
                g = n(69809),
                b = n(36636),
                v = n(69475),
                x = n(77249),
                p = n(86185);
            let w = [{
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
                    icon: l.Z,
                    url: "/project-management"
                }, {
                    name: "Email Marketing",
                    icon: s.Z,
                    url: "/email-marketing"
                }]
            }, {
                group: "Application Views",
                items: [{
                    name: "User",
                    icon: i.Z,
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
                    icon: c.Z,
                    url: "/file-manager",
                    shrunk: !0
                }, {
                    name: "Contacts",
                    icon: u.Z,
                    url: "/contacts",
                    shrunk: !0
                }, {
                    name: "Mail",
                    icon: d.Z,
                    url: "/mail",
                    shrunk: !0
                }, {
                    name: "Messages",
                    icon: m.Z,
                    url: "/messages",
                    shrunk: !0
                }, {
                    name: "Todo Lists",
                    icon: f.Z,
                    url: "/todo",
                    shrunk: !0
                }, {
                    name: "Calendar",
                    icon: h.Z,
                    url: "/calendar"
                }]
            }, {
                group: "Miscellaneous",
                items: [{
                    name: "Sample Pages",
                    icon: g.Z,
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
                    icon: b.Z,
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
                    icon: v.Z,
                    url: "/forms"
                }, {
                    name: "Components",
                    icon: x.Z,
                    url: "https://ui.shadcn.com/docs/components/accordion"
                }, {
                    name: "Charts",
                    icon: p.Z,
                    url: "/charts"
                }]
            }]
        },
        25825: function(e, r, n) {
            n.r(r), n.d(r, {
                SidebarToggle: function() {
                    return s
                }
            });
            var t = n(3827),
                a = n(25786),
                o = n(85754),
                l = n(56368);
            let s = ({
                className: e
            }) => {
                let {
                    toggleSidebar: r
                } = (0, l.useSidebar)();
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
            n.d(r, {
                d: function() {
                    return i
                },
                z: function() {
                    return c
                }
            });
            var t = n(3827),
                a = n(64090),
                o = n(59143),
                l = n(57742),
                s = n(1657);
            let i = (0, l.j)("inline-flex gap-2 items-center rounded-md px-4 justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
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
                c = a.forwardRef(({
                    className: e,
                    variant: r,
                    size: n,
                    asChild: a = !1,
                    ...l
                }, c) => {
                    let u = a ? o.g7 : "button";
                    return (0, t.jsx)(u, {
                        className: (0, s.cn)(i({
                            variant: r,
                            size: n,
                            className: e
                        })),
                        ref: c,
                        ...l
                    })
                });
            c.displayName = "Button"
        },
        49030: function(e, r, n) {
            n.r(r), n.d(r, {
                ScrollArea: function() {
                    return s
                },
                ScrollBar: function() {
                    return i
                }
            });
            var t = n(3827),
                a = n(64090),
                o = n(19346),
                l = n(1657);
            let s = a.forwardRef(({
                className: e,
                children: r,
                onScroll: n,
                ...a
            }, s) => (0, t.jsxs)(o.fC, {
                ref: s,
                className: (0, l.cn)("relative overflow-hidden", e),
                ...a,
                children: [(0, t.jsx)(o.l_, {
                    className: "h-full w-full [&>div]:!block",
                    onScroll: n,
                    children: r
                }), (0, t.jsx)(i, {}), (0, t.jsx)(o.Ns, {})]
            }));
            s.displayName = o.fC.displayName;
            let i = a.forwardRef(({
                className: e,
                orientation: r = "vertical",
                ...n
            }, a) => (0, t.jsx)(o.gb, {
                ref: a,
                orientation: r,
                className: (0, l.cn)("flex touch-none select-none transition-colors", "vertical" === r && "h-full w-2 border-l border-l-transparent p-[1px]", "horizontal" === r && "h-2 flex-col border-t border-t-transparent p-[1px]", e),
                ...n,
                children: (0, t.jsx)(o.q4, {
                    className: "relative flex-1 rounded-full bg-scrollbar/60 transition-colors duration-300 hover:bg-scrollbar"
                })
            }));
            i.displayName = o.gb.displayName
        },
        69507: function(e, r, n) {
            n.d(r, {
                G: function() {
                    return l
                },
                r: function() {
                    return s
                }
            });
            var t = n(3827),
                a = n(64090);
            let o = (0, a.createContext)(void 0),
                l = ({
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
                s = () => {
                    let e = (0, a.useContext)(o);
                    if (void 0 === e) throw Error("useContent must be used within a ContentProvider");
                    return e
                }
        },
        56368: function(e, r, n) {
            n.r(r), n.d(r, {
                SidebarProvider: function() {
                    return l
                },
                useSidebar: function() {
                    return s
                }
            });
            var t = n(3827),
                a = n(64090);
            let o = (0, a.createContext)(void 0),
                l = ({
                    children: e
                }) => {
                    let [r, n] = (0, a.useState)(!1), [l, s] = (0, a.useState)(!1);
                    return (0, t.jsx)(o.Provider, {
                        value: {
                            sidebarOpen: r,
                            toggleSidebar: () => {
                                n(!r)
                            },
                            contentSidebarOpen: l,
                            toggleContentSidebar: () => {
                                s(!l)
                            }
                        },
                        children: e
                    })
                },
                s = () => {
                    let e = (0, a.useContext)(o);
                    if (void 0 === e) throw Error("useSidebar must be used within a SidebarProvider");
                    return e
                }
        },
        1657: function(e, r, n) {
            n.d(r, {
                V5: function() {
                    return h
                },
                Z6: function() {
                    return g
                },
                cn: function() {
                    return u
                },
                jm: function() {
                    return m
                },
                p4: function() {
                    return a.a
                },
                x3: function() {
                    return f
                }
            });
            var t = n(33234),
                a = n.n(t),
                o = n(75504),
                l = n(51367),
                s = n(29275),
                i = n(84780),
                c = n.n(i);

            function u(...e) {
                return (0, l.m6)((0, o.W)(e))
            }
            let d = s.SIDEBAR_DATA,
                m = e => {
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
                f = e => {
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
                h = () => navigator.userAgent.toLowerCase().includes("mac"),
                g = e => c().sanitize(e)
        },
        25786: function(e, r, n) {
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
        28670: function(e, r, n) {
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
            let t = (0, n(87461).Z)("Search", [
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8",
                    key: "4ej97u"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3",
                    key: "1qie3q"
                }]
            ])
        }
    }
]);