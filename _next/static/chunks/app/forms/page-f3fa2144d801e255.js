(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5743, 7279, 2703, 7696], {
        66770: function(e, r, t) {
            Promise.resolve().then(t.bind(t, 70822)), Promise.resolve().then(t.bind(t, 84898)), Promise.resolve().then(t.bind(t, 41885)), Promise.resolve().then(t.bind(t, 29275)), Promise.resolve().then(t.bind(t, 54900)), Promise.resolve().then(t.bind(t, 49842)), Promise.resolve().then(t.bind(t, 35608)), Promise.resolve().then(t.bind(t, 45509)), Promise.resolve().then(t.bind(t, 40992)), Promise.resolve().then(t.bind(t, 86443)), Promise.resolve().then(t.t.bind(t, 33234, 23))
        },
        70822: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                Datepicker: function() {
                    return u
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(25890),
                i = t(1657),
                o = t(85754),
                l = t(97658),
                d = t(35216),
                c = t(97307);

            function u() {
                let [e, r] = a.useState();
                return (0, n.jsxs)(d.J2, {
                    children: [(0, n.jsx)(d.xo, {
                        asChild: !0,
                        children: (0, n.jsxs)(o.z, {
                            variant: "input",
                            className: (0, i.cn)("data-[state=open]:ring-3 data-[state=open]:ring-ring", !e && "text-muted-foreground"),
                            children: [(0, n.jsx)(c.Z, {
                                className: "-mt-px me-3 h-4 w-4"
                            }), e ? (0, s.WU)(e, "PPP") : (0, n.jsx)("span", {
                                children: "Pick a date"
                            })]
                        })
                    }), (0, n.jsx)(d.yk, {
                        className: "w-auto p-0",
                        align: "start",
                        children: (0, n.jsx)(l.f, {
                            mode: "single",
                            selected: e,
                            onSelect: r,
                            initialFocus: !0
                        })
                    })]
                })
            }
        },
        84898: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                PageHeader: function() {
                    return i
                }
            });
            var n = t(3827),
                a = t(37455),
                s = t(29796);
            let i = () => (0, n.jsx)(a.h, {
                title: "Typography",
                children: (0, n.jsxs)(s.a, {
                    className: "max-sm:hidden",
                    children: [(0, n.jsx)(s.g, {
                        href: "/",
                        children: "Miscellaneous"
                    }), (0, n.jsx)(s.g, {
                        children: "Content"
                    })]
                })
            })
        },
        41885: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                Content: function() {
                    return d
                }
            });
            var n = t(3827),
                a = t(49030),
                s = t(1657),
                i = t(69507);
            let o = {
                    default: "content-body group/content flex-1 overflow-hidden rounded-xl border-[7px] border-transparent bg-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.5)] dark:bg-[#0091ff0d] dark:shadow-[0_0_0_1px_rgb(0,145,255,0.15)]",
                    lg: "mx-auto w-full max-w-6xl",
                    md: "mx-auto w-full max-w-5xl",
                    sm: "mx-auto w-full max-w-4xl",
                    box: "mx-auto w-full max-w-md m-auto flex-none h-auto",
                    fill: "relative isolate before:absolute before:inset-0 before:-z-[1] before:rounded-lg before:bg-card"
                },
                l = ({
                    children: e
                }) => {
                    let {
                        cardToggled: r
                    } = (0, i.r)();
                    return (0, n.jsx)("div", {
                        className: (0, s.cn)("relative flex h-full md:gap-5", r && "toggled", o.default),
                        children: e
                    })
                },
                d = ({
                    sidebar: e,
                    list: r,
                    columns: t,
                    size: d,
                    scrollbar: c = !0,
                    fill: u = !1,
                    padding: f = !1,
                    className: m,
                    children: p
                }) => 2 === t ? (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("div", {
                        className: (0, s.cn)("relative flex h-full md:gap-5", o.default),
                        children: [e, (0, n.jsx)("div", {
                            className: "flex min-w-0 flex-1 flex-col",
                            children: p
                        })]
                    })
                }) : 3 === t ? (0, n.jsx)(i.G, {
                    children: (0, n.jsxs)(l, {
                        children: [e, r, (0, n.jsx)("div", {
                            className: "flex min-w-0 flex-1 translate-x-full transform-gpu flex-col transition-transform duration-300 group-[.toggled]/content:-translate-x-0 md:translate-x-0",
                            children: p
                        })]
                    })
                }) : (0, n.jsx)(n.Fragment, {
                    children: c ? (0, n.jsx)(a.ScrollArea, {
                        className: (0, s.cn)(o.default, "lg" === d && o.lg, "md" === d && o.md, "sm" === d && o.sm, "box" === d && o.box, u && o.fill, m),
                        children: f ? (0, n.jsx)("div", {
                            className: "p-7",
                            children: p
                        }) : p
                    }) : (0, n.jsx)("div", {
                        className: (0, s.cn)(o.default, "lg" === d && o.lg, "md" === d && o.md, "sm" === d && o.sm, u && o.fill, f && "p-7", m),
                        children: p
                    })
                })
        },
        37455: function(e, r, t) {
            "use strict";
            t.d(r, {
                h: function() {
                    return s
                }
            });
            var n = t(3827),
                a = t(25825);
            let s = ({
                children: e,
                title: r
            }) => (0, n.jsxs)("header", {
                className: "z-5 flex h-14 w-full shrink-0 items-center px-3 sm:h-16 print:hidden",
                children: [(0, n.jsx)(a.SidebarToggle, {
                    className: "me-3 hidden sm:flex xl:hidden"
                }), r && (0, n.jsx)("h2", {
                    className: "me-8 font-medium leading-none text-headings",
                    children: r
                }), e]
            })
        },
        29275: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                SIDEBAR_DATA: function() {
                    return y
                }
            });
            var n = t(92600),
                a = t(69805),
                s = t(77618),
                i = t(14130),
                o = t(82869),
                l = t(20606),
                d = t(45523),
                c = t(62784),
                u = t(90684),
                f = t(67366),
                m = t(46578),
                p = t(97307),
                h = t(69809),
                x = t(36636),
                b = t(69475),
                g = t(77249),
                v = t(86185);
            let y = [{
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
                    icon: s.Z,
                    url: "/analytics"
                }, {
                    name: "Project Management",
                    icon: i.Z,
                    url: "/project-management"
                }, {
                    name: "Email Marketing",
                    icon: o.Z,
                    url: "/email-marketing"
                }]
            }, {
                group: "Application Views",
                items: [{
                    name: "User",
                    icon: l.Z,
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
                    icon: d.Z,
                    url: "/file-manager",
                    shrunk: !0
                }, {
                    name: "Contacts",
                    icon: c.Z,
                    url: "/contacts",
                    shrunk: !0
                }, {
                    name: "Mail",
                    icon: u.Z,
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
                    icon: p.Z,
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
                    icon: x.Z,
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
                    icon: g.Z,
                    url: "https://ui.shadcn.com/docs/components/accordion"
                }, {
                    name: "Charts",
                    icon: v.Z,
                    url: "/charts"
                }]
            }]
        },
        25825: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                SidebarToggle: function() {
                    return o
                }
            });
            var n = t(3827),
                a = t(25786),
                s = t(85754),
                i = t(56368);
            let o = ({
                className: e
            }) => {
                let {
                    toggleSidebar: r
                } = (0, i.useSidebar)();
                return (0, n.jsx)(s.z, {
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
        29796: function(e, r, t) {
            "use strict";
            t.d(r, {
                a: function() {
                    return l
                },
                g: function() {
                    return o
                }
            });
            var n = t(3827),
                a = t(1657),
                s = t(37805),
                i = t(8792);
            let o = ({
                    href: e,
                    children: r,
                    className: t
                }) => (0, n.jsx)("li", {
                    children: e ? (0, n.jsxs)("span", {
                        className: (0, a.cn)("flex items-center", t),
                        children: [(0, n.jsx)(i.default, {
                            className: "hover:text-body",
                            href: e,
                            children: r
                        }), (0, n.jsx)(s.Z, {
                            className: "mx-2",
                            size: 10
                        })]
                    }) : (0, n.jsx)("span", {
                        children: r
                    })
                }),
                l = ({
                    children: e,
                    className: r
                }) => (0, n.jsx)("nav", {
                    className: (0, a.cn)("text-xs text-muted", r),
                    children: (0, n.jsx)("ul", {
                        className: "flex items-center",
                        children: e
                    })
                })
        },
        85754: function(e, r, t) {
            "use strict";
            t.d(r, {
                d: function() {
                    return l
                },
                z: function() {
                    return d
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(59143),
                i = t(57742),
                o = t(1657);
            let l = (0, i.j)("inline-flex gap-2 items-center rounded-md px-4 justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
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
                d = a.forwardRef(({
                    className: e,
                    variant: r,
                    size: t,
                    asChild: a = !1,
                    ...i
                }, d) => {
                    let c = a ? s.g7 : "button";
                    return (0, n.jsx)(c, {
                        className: (0, o.cn)(l({
                            variant: r,
                            size: t,
                            className: e
                        })),
                        ref: d,
                        ...i
                    })
                });
            d.displayName = "Button"
        },
        97658: function(e, r, t) {
            "use strict";
            t.d(r, {
                f: function() {
                    return d
                }
            });
            var n = t(3827);
            t(64090);
            var a = t(49108),
                s = t(37805),
                i = t(26463),
                o = t(1657),
                l = t(85754);

            function d({
                className: e,
                classNames: r,
                showOutsideDays: t = !0,
                ...d
            }) {
                return (0, n.jsx)(i._W, {
                    showOutsideDays: t,
                    className: (0, o.cn)("p-3", e),
                    classNames: {
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-sm font-medium",
                        nav: "space-x-1 flex items-center",
                        nav_button: (0, o.cn)((0, l.d)({
                            variant: "outline"
                        }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex",
                        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                        row: "flex w-full mt-2",
                        cell: "h-8 w-8 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-md first:[&:has([aria-selected])]:rounded-md last:[&:has([aria-selected])]:rounded-md focus-within:relative focus-within:z-20",
                        day: (0, o.cn)((0, l.d)({
                            variant: "ghost"
                        }), "h-8 w-8 p-0 text-xs font-normal aria-selected:opacity-100"),
                        day_range_end: "day-range-end rounded-md",
                        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                        day_today: "bg-accent text-accent-foreground",
                        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:text-muted-foreground aria-selected:opacity-100 aria-selected:text-primary-foreground",
                        day_disabled: "text-muted-foreground opacity-50",
                        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground rounded-none !text-body",
                        day_hidden: "invisible",
                        ...r
                    },
                    components: {
                        IconLeft: ({ ...e
                        }) => (0, n.jsx)(a.Z, {
                            className: "h-4 w-4"
                        }),
                        IconRight: ({ ...e
                        }) => (0, n.jsx)(s.Z, {
                            className: "h-4 w-4"
                        })
                    },
                    ...d
                })
            }
            d.displayName = "Calendar"
        },
        54900: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                Checkbox: function() {
                    return l
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(86969),
                i = t(80037),
                o = t(1657);
            let l = a.forwardRef(({
                className: e,
                invert: r = !1,
                ...t
            }, a) => (0, n.jsx)(s.fC, {
                ref: a,
                className: (0, o.cn)("peer h-5 w-5 shrink-0 rounded border-[1.5px]  focus:ring-4 focus:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", !r && "border-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white", r && "border-white text-headings data-[state=checked]:border-white data-[state=checked]:bg-white", e),
                ...t,
                children: (0, n.jsx)(s.z$, {
                    className: (0, o.cn)("flex items-center justify-center text-current"),
                    children: (0, n.jsx)(i.Z, {
                        size: 15
                    })
                })
            }));
            l.displayName = s.fC.displayName
        },
        49842: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                Label: function() {
                    return d
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(24602),
                i = t(57742),
                o = t(1657);
            let l = (0, i.j)("text-sm pt-px peer-disabled:cursor-not-allowed peer-disabled:opacity-75"),
                d = a.forwardRef(({
                    className: e,
                    ...r
                }, t) => (0, n.jsx)(s.f, {
                    ref: t,
                    className: (0, o.cn)(l(), e),
                    ...r
                }));
            d.displayName = s.f.displayName
        },
        35216: function(e, r, t) {
            "use strict";
            t.d(r, {
                J2: function() {
                    return o
                },
                xo: function() {
                    return l
                },
                yk: function() {
                    return d
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(57427),
                i = t(1657);
            let o = s.fC,
                l = s.xz,
                d = a.forwardRef(({
                    className: e,
                    align: r = "center",
                    sideOffset: t = 4,
                    ...a
                }, o) => (0, n.jsx)(s.h_, {
                    children: (0, n.jsx)(s.VY, {
                        ref: o,
                        align: r,
                        sideOffset: t,
                        className: (0, i.cn)("z-50 w-72 rounded-lg border border-popover bg-popover p-4 shadow-xl shadow-black/5 outline-none backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
                        ...a
                    })
                }));
            d.displayName = s.VY.displayName
        },
        35608: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                RadioGroup: function() {
                    return l
                },
                RadioGroupItem: function() {
                    return d
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(68928),
                i = t(37501),
                o = t(1657);
            let l = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)(s.fC, {
                className: (0, o.cn)("grid gap-2", e),
                ...r,
                ref: t
            }));
            l.displayName = s.fC.displayName;
            let d = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)(s.ck, {
                ref: t,
                className: (0, o.cn)("aspect-square h-5 w-5 rounded-full border-[1.5px] border-primary focus:outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
                ...r,
                children: (0, n.jsx)(s.z$, {
                    className: "flex items-center justify-center",
                    children: (0, n.jsx)(i.Z, {
                        className: "h-3 w-3 fill-current text-current"
                    })
                })
            }));
            d.displayName = s.ck.displayName
        },
        49030: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                ScrollArea: function() {
                    return o
                },
                ScrollBar: function() {
                    return l
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(19346),
                i = t(1657);
            let o = a.forwardRef(({
                className: e,
                children: r,
                onScroll: t,
                ...a
            }, o) => (0, n.jsxs)(s.fC, {
                ref: o,
                className: (0, i.cn)("relative overflow-hidden", e),
                ...a,
                children: [(0, n.jsx)(s.l_, {
                    className: "h-full w-full [&>div]:!block",
                    onScroll: t,
                    children: r
                }), (0, n.jsx)(l, {}), (0, n.jsx)(s.Ns, {})]
            }));
            o.displayName = s.fC.displayName;
            let l = a.forwardRef(({
                className: e,
                orientation: r = "vertical",
                ...t
            }, a) => (0, n.jsx)(s.gb, {
                ref: a,
                orientation: r,
                className: (0, i.cn)("flex touch-none select-none transition-colors", "vertical" === r && "h-full w-2 border-l border-l-transparent p-[1px]", "horizontal" === r && "h-2 flex-col border-t border-t-transparent p-[1px]", e),
                ...t,
                children: (0, n.jsx)(s.q4, {
                    className: "relative flex-1 rounded-full bg-scrollbar/60 transition-colors duration-300 hover:bg-scrollbar"
                })
            }));
            l.displayName = s.gb.displayName
        },
        45509: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                Select: function() {
                    return c
                },
                SelectContent: function() {
                    return x
                },
                SelectGroup: function() {
                    return u
                },
                SelectItem: function() {
                    return g
                },
                SelectLabel: function() {
                    return b
                },
                SelectScrollDownButton: function() {
                    return h
                },
                SelectScrollUpButton: function() {
                    return p
                },
                SelectSeparator: function() {
                    return v
                },
                SelectTrigger: function() {
                    return m
                },
                SelectValue: function() {
                    return f
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(78473),
                i = t(23441),
                o = t(85159),
                l = t(80037),
                d = t(1657);
            let c = s.fC,
                u = s.ZA,
                f = s.B4,
                m = a.forwardRef(({
                    className: e,
                    children: r,
                    ...t
                }, a) => (0, n.jsxs)(s.xz, {
                    ref: a,
                    className: (0, d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:border-input-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-75 data-[state=open]:border-input-foreground data-[state=open]:ring-3 data-[state=open]:ring-ring [&>span]:line-clamp-1", e),
                    ...t,
                    children: [r, (0, n.jsx)(s.JO, {
                        asChild: !0,
                        children: (0, n.jsx)(i.Z, {
                            className: "h-4 w-4 opacity-75"
                        })
                    })]
                }));
            m.displayName = s.xz.displayName;
            let p = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)(s.u_, {
                ref: t,
                className: (0, d.cn)("flex cursor-default items-center justify-center py-1", e),
                ...r,
                children: (0, n.jsx)(o.Z, {
                    className: "h-4 w-4"
                })
            }));
            p.displayName = s.u_.displayName;
            let h = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)(s.$G, {
                ref: t,
                className: (0, d.cn)("py- flex cursor-default items-center justify-center", e),
                ...r,
                children: (0, n.jsx)(i.Z, {
                    className: "h-4 w-4"
                })
            }));
            h.displayName = s.$G.displayName;
            let x = a.forwardRef(({
                className: e,
                children: r,
                position: t = "popper",
                ...a
            }, i) => (0, n.jsx)(s.h_, {
                children: (0, n.jsxs)(s.VY, {
                    ref: i,
                    className: (0, d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border border-popover-border bg-popover text-popover-foreground shadow-md backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === t && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
                    position: t,
                    ...a,
                    children: [(0, n.jsx)(p, {}), (0, n.jsx)(s.l_, {
                        className: (0, d.cn)("p-1", "popper" === t && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                        children: r
                    }), (0, n.jsx)(h, {})]
                })
            }));
            x.displayName = s.VY.displayName;
            let b = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)(s.__, {
                ref: t,
                className: (0, d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
                ...r
            }));
            b.displayName = s.__.displayName;
            let g = a.forwardRef(({
                className: e,
                children: r,
                ...t
            }, a) => (0, n.jsxs)(s.ck, {
                ref: a,
                className: (0, d.cn)("focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-75", e),
                ...t,
                children: [(0, n.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0, n.jsx)(s.wU, {
                        children: (0, n.jsx)(l.Z, {
                            className: "h-4 w-4"
                        })
                    })
                }), (0, n.jsx)(s.eT, {
                    children: r
                })]
            }));
            g.displayName = s.ck.displayName;
            let v = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)(s.Z0, {
                ref: t,
                className: (0, d.cn)("-mx-1 my-1 h-px bg-muted", e),
                ...r
            }));
            v.displayName = s.Z0.displayName
        },
        40992: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                Slider: function() {
                    return o
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(26579),
                i = t(1657);
            let o = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsxs)(s.fC, {
                ref: t,
                className: (0, i.cn)("relative flex w-full touch-none select-none items-center", e),
                ...r,
                children: [(0, n.jsx)(s.fQ, {
                    className: "relative h-2 w-full grow overflow-hidden rounded-full bg-accent",
                    children: (0, n.jsx)(s.e6, {
                        className: "absolute h-full bg-primary"
                    })
                }), (0, n.jsx)(s.bU, {
                    className: "block h-5 w-5 rounded-full border-2 border-primary bg-primary transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-75"
                })]
            }));
            o.displayName = s.fC.displayName
        },
        86443: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                Switch: function() {
                    return o
                }
            });
            var n = t(3827),
                a = t(64090),
                s = t(94845),
                i = t(1657);
            let o = a.forwardRef(({
                className: e,
                ...r
            }, t) => (0, n.jsx)(s.fC, {
                className: (0, i.cn)("peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border border-primary px-0.5 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-75 data-[state=checked]:bg-primary data-[state=unchecked]:bg-transparent", e),
                ...r,
                ref: t,
                children: (0, n.jsx)(s.bU, {
                    className: (0, i.cn)("pointer-events-none block h-3.5 w-3.5 rounded-full bg-primary ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white dark:data-[state=checked]:bg-background")
                })
            }));
            o.displayName = s.fC.displayName
        },
        69507: function(e, r, t) {
            "use strict";
            t.d(r, {
                G: function() {
                    return i
                },
                r: function() {
                    return o
                }
            });
            var n = t(3827),
                a = t(64090);
            let s = (0, a.createContext)(void 0),
                i = ({
                    children: e
                }) => {
                    let [r, t] = (0, a.useState)(!1);
                    return (0, n.jsx)(s.Provider, {
                        value: {
                            cardToggled: r,
                            toggleCard: e => {
                                t(e)
                            }
                        },
                        children: e
                    })
                },
                o = () => {
                    let e = (0, a.useContext)(s);
                    if (void 0 === e) throw Error("useContent must be used within a ContentProvider");
                    return e
                }
        },
        56368: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                SidebarProvider: function() {
                    return i
                },
                useSidebar: function() {
                    return o
                }
            });
            var n = t(3827),
                a = t(64090);
            let s = (0, a.createContext)(void 0),
                i = ({
                    children: e
                }) => {
                    let [r, t] = (0, a.useState)(!1), [i, o] = (0, a.useState)(!1);
                    return (0, n.jsx)(s.Provider, {
                        value: {
                            sidebarOpen: r,
                            toggleSidebar: () => {
                                t(!r)
                            },
                            contentSidebarOpen: i,
                            toggleContentSidebar: () => {
                                o(!i)
                            }
                        },
                        children: e
                    })
                },
                o = () => {
                    let e = (0, a.useContext)(s);
                    if (void 0 === e) throw Error("useSidebar must be used within a SidebarProvider");
                    return e
                }
        },
        1657: function(e, r, t) {
            "use strict";
            t.d(r, {
                V5: function() {
                    return p
                },
                Z6: function() {
                    return h
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
            var n = t(33234),
                a = t.n(n),
                s = t(75504),
                i = t(51367),
                o = t(29275),
                l = t(84780),
                d = t.n(l);

            function c(...e) {
                return (0, i.m6)((0, s.W)(e))
            }
            let u = o.SIDEBAR_DATA,
                f = e => {
                    for (let r of u)
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
                    for (let r of u)
                        for (let t of r.items) {
                            if (t.url && e.startsWith(t.url) && t.hiddenSidebars) return !0;
                            if (t.sub) {
                                for (let r of t.sub)
                                    if (r.url && e.startsWith(r.url) && r.hiddenSidebars) return !0
                            }
                        }
                    return !1
                },
                p = () => navigator.userAgent.toLowerCase().includes("mac"),
                h = e => d().sanitize(e)
        }
    },
    function(e) {
        e.O(0, [1936, 3407, 6349, 5250, 9346, 8751, 1257, 6436, 2641, 2971, 8069, 1744], function() {
            return e(e.s = 66770)
        }), _N_E = e.O()
    }
]);