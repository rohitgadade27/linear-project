(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185, 7279, 2703, 7696], {
        16234: function(e, i, a) {
            Promise.resolve().then(a.t.bind(a, 52445, 23)), Promise.resolve().then(a.bind(a, 31036)), Promise.resolve().then(a.bind(a, 87232)), Promise.resolve().then(a.bind(a, 70269)), Promise.resolve().then(a.bind(a, 56368)), Promise.resolve().then(a.t.bind(a, 91574, 23)), Promise.resolve().then(a.t.bind(a, 66974, 23))
        },
        31036: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                ContentWrapper: function() {
                    return J
                }
            });
            var t = a(3827),
                s = a(1657),
                r = a(47907),
                n = a(64090),
                l = a(37805),
                o = a(8792);
            let c = ({
                item: e,
                sidebarMin: i
            }) => {
                let [a, c] = (0, n.useState)(!1), [d, u] = (0, n.useState)(0), m = (0, n.useRef)(null), p = (0, r.usePathname)(), h = "text-headings relative flex w-full items-center px-3 py-2 rounded-full transition-colors duration-300", x = (e, i = "") => ("parent" === i ? p.includes(e.url) : p === e.url || "/" !== e.url && p.includes(e.url)) ? "text-[#05a2a1] dark:text-[#0398ff]" : "text-headings", f = e => (0, t.jsx)("span", {
                    className: (0, s.cn)(i && "group-hover:opacity-100 xl:opacity-0"),
                    children: e
                }), b = () => (0, t.jsx)("i", {
                    className: (0, s.cn)("absolute inset-px -z-[1] scale-90 rounded-full bg-gradient-to-r from-white/90 to-white/40 opacity-0 outline-none ring-3 ring-white/30 transition-all duration-300 group-hover/link:scale-100 group-hover/link:opacity-100 dark:from-[#0091ff40] dark:to-[#0091ff0d] dark:ring-[#0091ff0d]")
                });
                return ((0, n.useEffect)(() => {
                    m.current && u(m.current.scrollHeight)
                }, [d, p, a]), e.sub) ? (0, t.jsxs)("li", {
                    className: "group/link my-0.5",
                    children: [(0, t.jsxs)("button", {
                        type: "button",
                        className: (0, s.cn)([h], [x(e, "parent")]),
                        onClick: () => c(!a),
                        children: [(0, t.jsx)(e.icon, {
                            size: 18,
                            className: "me-2.5 shrink-0"
                        }), f(e.name), (0, t.jsx)(l.Z, {
                            className: (0, s.cn)("ms-auto w-3.5 transition-transform duration-300", a && "rotate-90")
                        }), (0, t.jsx)(b, {})]
                    }), (0, t.jsx)("ul", {
                        ref: m,
                        className: (0, s.cn)("mx-5 overflow-hidden rounded-xl bg-gradient-to-t from-white/80 to-white/0 px-2 text-sm transition-[height,opacity] duration-300 dark:from-[#0091ff26] dark:to-[#0091ff00]", a ? "mb-3 opacity-100" : "opacity-0", i && "group-hover:block xl:hidden"),
                        style: {
                            height: a ? d : "0px"
                        },
                        children: e.sub.map((e, i) => (0, t.jsx)("li", {
                            className: "first:pt-2 last:pb-2.5",
                            children: (0, t.jsx)(o.default, {
                                className: (0, s.cn)("mt-1 block rounded-full px-3 py-1 text-sm hover:bg-white/40 dark:hover:bg-[#0091ff13]", [x(e)]),
                                href: e.url,
                                children: e.name
                            })
                        }, i))
                    })]
                }) : (0, t.jsx)("li", {
                    className: "group/link my-0.5",
                    children: (0, t.jsxs)(o.default, {
                        href: e.url,
                        className: (0, s.cn)(h, x(e)),
                        children: [(0, t.jsx)(e.icon, {
                            size: 18,
                            className: "me-2.5 shrink-0"
                        }), f(e.name), (0, t.jsx)(b, {})]
                    })
                })
            };
            var d = a(29275),
                u = a(85754),
                m = a(52235),
                p = a(56368),
                h = a(765),
                x = a(49030);
            let f = () => {
                let e = (0, r.usePathname)(),
                    {
                        sidebarOpen: i,
                        toggleSidebar: a
                    } = (0, p.useSidebar)();
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("aside", {
                        className: (0, s.cn)("max-xl:bg-popover/25 group fixed start-0 top-0 z-[12] h-full w-56 -translate-x-full whitespace-nowrap rounded-e-2xl border-popover outline-none transition-all duration-300 max-xl:overflow-hidden max-xl:border-r max-xl:shadow-lg max-xl:backdrop-blur-lg xl:translate-x-0", (0, s.jm)(e) && "xl:hover:bg-popover/25 hover:shadow-lg xl:w-[4.25rem] xl:hover:w-60 xl:hover:border-r xl:hover:border-popover xl:hover:backdrop-blur-lg", i && "translate-x-0"),
                        children: [(0, t.jsx)(u.z, {
                            variant: "ghost",
                            size: "icon",
                            className: (0, s.cn)("absolute -right-11 top-3 z-[1] xl:hidden", !i && "pointer-events-none opacity-0"),
                            onClick: () => a(),
                            children: (0, t.jsx)(m.Z, {
                                className: "h-4 w-4"
                            })
                        }), (0, t.jsxs)(x.ScrollArea, {
                            className: "h-full p-2",
                            children: [(0, t.jsx)(o.default, {
                                href: "/",
                                className: "m-4 flex items-center",
                                children: (0, t.jsx)(h.T, {
                                    sidebarMin: (0, s.jm)(e)
                                })
                            }), d.SIDEBAR_DATA.map((i, a) => (0, t.jsxs)("div", {
                                className: "p-1",
                                children: [(0, t.jsxs)("div", {
                                    className: "mb-2 mt-3 ps-3 text-sm text-muted",
                                    children: [(0, t.jsx)("span", {
                                        className: (0, s.cn)((0, s.jm)(e) && "group-hover:opacity-100 xl:opacity-0", "text-xs"),
                                        children: i.group
                                    }), (0, s.jm)(e) && (0, t.jsx)("span", {
                                        className: "-mt-7 block ps-0.5 text-lg font-medium group-hover:opacity-0",
                                        children: "..."
                                    })]
                                }, a), (0, t.jsx)("ul", {
                                    children: i.items.map((i, a) => (0, t.jsx)(c, {
                                        item: i,
                                        sidebarMin: (0, s.jm)(e)
                                    }, a))
                                })]
                            }, a))]
                        })]
                    }), i && (0, t.jsx)("button", {
                        type: "button",
                        className: "fixed inset-0 z-10 cursor-pointer xl:hidden",
                        onClick: () => a(),
                        children: (0, t.jsx)("span", {
                            className: "sr-only",
                            children: "Close Sidebar"
                        })
                    })]
                })
            };
            var b = a(93930),
                g = a(20703),
                v = a(53118),
                j = a(12409),
                N = a(29910),
                w = a(81049),
                k = a(91774),
                q = a(72891),
                y = a(31047);

            function z() {
                let {
                    theme: e,
                    setTheme: i
                } = (0, k.F)();
                return (0, t.jsxs)(u.z, {
                    variant: "highlight",
                    size: "icon",
                    onClick: () => i("light" === e ? "dark" : "light"),
                    children: [(0, t.jsx)(q.Z, {
                        className: "h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0"
                    }), (0, t.jsx)(y.Z, {
                        className: "absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100"
                    }), (0, t.jsx)("span", {
                        className: "sr-only",
                        children: "Toggle theme"
                    })]
                })
            }
            let Z = n.forwardRef(({
                className: e,
                type: i,
                ...a
            }, r) => (0, t.jsx)("input", {
                type: i,
                className: (0, s.cn)("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:pe-3 file:ps-0 file:text-sm file:text-headings placeholder:text-muted-foreground focus-visible:border-input-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-75", e),
                ref: r,
                ...a
            }));
            Z.displayName = "Input";
            var C = a(28670),
                V = a(26490);
            let A = () => (0, t.jsx)("div", {
                className: "nav-bar-dropdown",
                children: (0, t.jsxs)(b.h_, {
                    children: [(0, t.jsx)(b.$F, {
                        asChild: !0,
                        children: (0, t.jsx)(u.z, {
                            variant: "highlight",
                            size: "icon",
                            children: (0, t.jsx)(C.Z, {
                                className: "h-5 w-5"
                            })
                        })
                    }), (0, t.jsxs)(b.AW, {
                        className: "flex flex-col sm:w-80",
                        children: [(0, t.jsxs)("div", {
                            className: "flex h-11 shrink-0 items-center px-3.5",
                            children: [(0, t.jsx)(b.Ju, {
                                children: "Search"
                            }), (0, t.jsx)(u.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "-me-2 ms-auto",
                                children: (0, t.jsx)(N.Z, {
                                    className: "h-4 w-4"
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "px-3.5",
                            children: [(0, t.jsxs)("div", {
                                className: "relative",
                                children: [(0, t.jsx)(C.Z, {
                                    size: 16,
                                    className: "absolute start-3 top-3"
                                }), (0, t.jsx)(Z, {
                                    className: "mb-5 ps-9",
                                    placeholder: "Type a keyword..."
                                })]
                            }), (0, t.jsx)("div", {
                                className: "mb-1 text-sm text-muted",
                                children: "Recent Searches"
                            })]
                        }), (0, t.jsx)(x.ScrollArea, {
                            className: "p-0.5",
                            children: ["Configuration Management Reports", "User Activity Log", "Performance Insights", "Access Control Setup", "Data Visualization", "System Health Check", "Security Reports", "User Analytics View", "Activity Monitoring", "Error Tracking Log"].map((e, i) => (0, t.jsxs)(b.Xi, {
                                children: [(0, t.jsx)(V.Z, {
                                    className: "me-3 w-4"
                                }), e]
                            }, i))
                        })]
                    })]
                })
            });
            var E = a(20606),
                L = a(19895),
                S = a(18216),
                M = a(38008),
                R = a(30438),
                P = a(81165),
                I = a(47367),
                F = a(45179),
                T = a(57976),
                D = a(60272),
                _ = a(50660);
            let U = () => {
                let e = [{
                        title: "New sales order received",
                        read: !1,
                        id: "#204",
                        time: "10 minutes ago",
                        icon: j.Z,
                        color: "bg-emerald-500	"
                    }, {
                        title: "New user account registered",
                        read: !1,
                        id: "#3102",
                        time: "23 minutes ago",
                        icon: E.Z,
                        color: "bg-emerald-500	"
                    }, {
                        title: "New product review received",
                        read: !1,
                        id: "#8973",
                        time: "48 minutes ago",
                        icon: L.Z,
                        color: "bg-blue-500"
                    }, {
                        title: "New product review received",
                        read: !1,
                        id: "#8972",
                        time: "50 minutes ago",
                        icon: L.Z,
                        color: "bg-blue-500"
                    }, {
                        title: "New sales order received",
                        read: !1,
                        id: "#203",
                        time: "55 minutes ago",
                        icon: j.Z,
                        color: "bg-emerald-500	"
                    }, {
                        title: "Review unpaid orders",
                        read: !0,
                        id: "#765",
                        time: "2 hours ago",
                        icon: S.Z,
                        color: "bg-amber-500"
                    }, {
                        title: "New issue filed by customer",
                        read: !1,
                        id: "#721",
                        time: "2 hours ago",
                        icon: M.Z,
                        color: "bg-red-500"
                    }, {
                        title: "New comment received",
                        read: !0,
                        id: "#976",
                        time: "3 hours ago",
                        icon: R.Z,
                        color: "bg-cyan-500"
                    }, {
                        title: "Thread responded and closed",
                        read: !1,
                        id: "#45",
                        time: "5 hours ago",
                        icon: P.Z,
                        color: "bg-cyan-500"
                    }, {
                        title: "Thread re-opened by administrator",
                        read: !0,
                        id: "#8972",
                        time: "6 hours ago",
                        icon: P.Z,
                        color: "bg-cyan-500"
                    }, {
                        title: "New support request received",
                        read: !0,
                        id: "#432",
                        time: "8 hours ago",
                        icon: I.Z,
                        color: "bg-amber-500"
                    }, {
                        title: "New issue filed by customer",
                        read: !0,
                        id: "#720",
                        time: "2 days ago",
                        icon: M.Z,
                        color: "bg-red-500"
                    }],
                    i = [],
                    a = [];
                e.forEach(e => {
                    e.read ? i.push(e) : a.push(e)
                });
                let r = e => (0, t.jsxs)(u.z, {
                    variant: "list",
                    size: "free",
                    className: "items-start",
                    children: [(0, t.jsx)(_.Avatar, {
                        className: "me-3",
                        children: (0, t.jsx)(_.AvatarFallback, {
                            className: (0, s.cn)([e.color], "text-white dark:text-black"),
                            children: (0, t.jsx)(e.icon, {})
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex-1",
                        children: [(0, t.jsx)("div", {
                            className: (0, s.cn)("text-headings antialiased", !e.read && "font-medium"),
                            children: e.title
                        }), (0, t.jsx)("div", {
                            className: "text-muted text-xs",
                            children: e.time
                        })]
                    }), !e.read && (0, t.jsx)("i", {
                        className: "mt-2 h-1.5 w-1.5 rounded-full bg-blue-500"
                    })]
                });
                return (0, t.jsx)("div", {
                    className: "nav-bar-dropdown",
                    children: (0, t.jsxs)(b.h_, {
                        children: [(0, t.jsx)(b.$F, {
                            asChild: !0,
                            children: (0, t.jsxs)(u.z, {
                                variant: "highlight",
                                size: "icon",
                                children: [(0, t.jsx)("i", {
                                    className: "duration-1500 absolute h-5 w-5 animate-ping rounded-full border border-red-500"
                                }), (0, t.jsx)(F.Z, {
                                    className: "h-5 w-5"
                                })]
                            })
                        }), (0, t.jsxs)(b.AW, {
                            className: "flex flex-col overflow-hidden sm:w-80",
                            children: [(0, t.jsxs)("div", {
                                className: "flex h-11 shrink-0 items-center px-3.5",
                                children: [(0, t.jsx)(b.Ju, {
                                    children: "Notifications"
                                }), (0, t.jsx)(u.z, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "ms-auto",
                                    children: (0, t.jsx)(T.Z, {
                                        className: "h-4 w-4"
                                    })
                                }), (0, t.jsx)(u.z, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: (0, t.jsx)(D.Z, {
                                        className: "h-4 w-4"
                                    })
                                }), (0, t.jsx)(u.z, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "-me-2",
                                    children: (0, t.jsx)(N.Z, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            }), (0, t.jsxs)(x.ScrollArea, {
                                className: "flex-1",
                                children: [a.map((e, i) => (0, t.jsx)(r, { ...e
                                }, i)), i.map((e, i) => (0, t.jsx)(r, { ...e
                                }, i))]
                            })]
                        })]
                    })
                })
            };
            var O = a(54900);
            let W = [{
                id: 1,
                label: "bug",
                color: "bg-red-500",
                title: "Mollit sint ad exercitation ullamco elit velit laboris esse voluptate.",
                description: "Sint commodo do do incididunt sunt Lorem. Proident aliqua veniam eu ea cillum ad. Incididunt occaecat exercitation consequat magna ex deserunt pariatur sunt eu officia reprehenderit. Velit et adipisicing in sit aute nisi in id enim fugiat magna.",
                completed: !1,
                due: {
                    date: "21-03-2030",
                    time: "02:34"
                },
                files: [{
                    name: "id.mp3",
                    size: "408.kb"
                }, {
                    name: "velit.mp3",
                    size: "470.kb"
                }],
                priority: "!!!"
            }, {
                id: 2,
                label: "documetation",
                color: "bg-green-500",
                title: "Ipsum sint dolore voluptate ea ex dolore laborum aute tempor aliquip ipsum.",
                description: "Amet sunt sit voluptate consequat nulla. Enim culpa anim dolore mollit duis ipsum velit labore Lorem fugiat amet. Enim nostrud labore labore mollit occaecat sunt est deserunt sit id. Ad ex cupidatat veniam ullamco cupidatat amet ea laborum irure.",
                completed: !1,
                due: {
                    date: "27-02-2030",
                    time: "13:26"
                },
                files: [{
                    name: "cillum.mp3",
                    size: "510.kb"
                }],
                priority: "!!!"
            }, {
                id: 3,
                label: "feature",
                color: "bg-blue-500",
                title: "In tempor aliqua dolor nulla magna nulla aliqua eu ipsum duis.",
                description: "Anim nisi dolore amet irure dolor. Excepteur ut velit cillum mollit Lorem voluptate ad eu magna sunt occaecat non laboris. Dolore laboris ullamco cillum enim esse ut dolore. Laboris sit ipsum aliquip irure Lorem dolor eiusmod magna id sit adipisicing consequat. Mollit irure dolor do excepteur consectetur occaecat est occaecat adipisicing eiusmod esse veniam. Id sint enim sunt ullamco in velit amet Lorem consectetur aliqua enim.",
                completed: !1,
                due: {
                    date: "28-03-2030",
                    time: "20:42"
                },
                files: [{
                    name: "sit.jpg",
                    size: "222.kb"
                }, {
                    name: "esse.txt",
                    size: "431.kb"
                }, {
                    name: "fugiat.gif",
                    size: "481.kb"
                }, {
                    name: "nisi.docx",
                    size: "360.kb"
                }],
                priority: "!!!"
            }, {
                id: 4,
                label: "bug",
                color: "bg-red-500",
                title: "Deserunt nisi dolore duis occaecat velit consectetur exercitation mollit sunt in.",
                description: "Exercitation consectetur proident enim cillum qui Lorem tempor. Deserunt officia eiusmod elit anim laboris esse labore. Incididunt in dolore mollit adipisicing reprehenderit Lorem sit anim exercitation incididunt incididunt sit. Enim pariatur exercitation cupidatat irure velit amet pariatur est. Et mollit culpa exercitation culpa anim consequat esse aliquip proident eiusmod laboris. Velit ipsum labore occaecat duis cillum ex magna excepteur.",
                completed: !1,
                due: {
                    date: "",
                    time: ""
                },
                files: [{
                    name: "enim.mp3",
                    size: "267.kb"
                }, {
                    name: "occaecat.mp3",
                    size: "55.kb"
                }],
                priority: "!"
            }, {
                id: 5,
                label: "discussion",
                color: "bg-amber-500",
                title: "Labore fugiat laboris veniam aliqua anim magna enim ad enim anim Lorem commodo pariatur duis.",
                description: "Reprehenderit velit excepteur labore nisi dolore laboris anim labore cillum eiusmod. Sit commodo eiusmod nisi ut adipisicing ipsum. Dolore est occaecat mollit fugiat ipsum id excepteur reprehenderit mollit reprehenderit eiusmod. Elit et incididunt occaecat minim ipsum pariatur. Minim ad velit esse cupidatat minim deserunt dolor laboris aliquip.",
                completed: !1,
                due: {
                    date: "",
                    time: ""
                },
                files: [],
                priority: "!!"
            }, {
                id: 6,
                label: "feature",
                color: "bg-blue-500",
                title: "Voluptate in est dolor voluptate fugiat elit ex.",
                description: "Nisi nostrud non dolore ullamco amet cillum exercitation ipsum irure do cupidatat. Ut exercitation magna ipsum ad nulla deserunt ea irure. Voluptate dolor esse consectetur incididunt labore qui amet. Irure reprehenderit quis laborum id velit esse velit irure aliquip nulla sint anim.",
                completed: !1,
                due: {
                    date: "26-03-2030",
                    time: "13:18"
                },
                files: [],
                priority: "!"
            }, {
                id: 7,
                label: "feature",
                color: "bg-blue-500",
                title: "Est commodo veniam irure eu pariatur nulla pariatur.",
                description: "Occaecat velit eiusmod labore eu consequat sint cillum sunt incididunt reprehenderit aliqua cillum consequat. Aute id pariatur ea proident minim est amet ad exercitation eu dolor. Do esse sunt cillum occaecat quis anim. Sint in pariatur ut aute exercitation quis sit duis esse est sint elit. Id dolore ullamco consequat eu ut elit. Laboris irure velit commodo id dolor incididunt laborum commodo labore aliquip sint incididunt. Occaecat amet consectetur mollit elit cillum id quis consequat cillum qui culpa eiusmod.",
                completed: !1,
                due: {
                    date: "31-03-2030",
                    time: "10:14"
                },
                files: [],
                priority: "!!!"
            }, {
                id: 8,
                label: "documentation",
                color: "bg-green-500",
                title: "Tempor aliquip eu in consequat esse ex.",
                description: "Nisi laboris est adipisicing incididunt tempor eiusmod non laborum deserunt nulla. Magna minim aute minim fugiat proident nulla. Incididunt veniam ex qui officia do et voluptate ea eu fugiat ipsum cupidatat aute pariatur. Tempor quis nulla consectetur officia sit commodo in qui eu anim incididunt enim minim officia. Id reprehenderit veniam fugiat nulla elit consequat deserunt ut eiusmod qui minim eu.",
                completed: !1,
                due: {
                    date: "07-03-2030",
                    time: "06:24"
                },
                files: [],
                priority: "!!!"
            }, {
                id: 9,
                label: "design",
                color: "bg-indigo-500",
                title: "Duis nostrud ea aliqua proident adipisicing cupidatat.",
                description: "Velit sint reprehenderit aliqua occaecat nisi laboris deserunt. Qui ea dolor consectetur ex amet pariatur pariatur cupidatat enim amet minim cupidatat reprehenderit sunt. Cupidatat fugiat occaecat ullamco occaecat nulla commodo enim fugiat tempor non qui laborum. Occaecat id duis velit nisi non officia culpa. Consequat duis incididunt laboris dolore ipsum et consectetur exercitation nostrud occaecat id ad nisi. Aliqua irure officia sint occaecat consectetur non dolore anim fugiat fugiat pariatur ex. Amet minim consectetur esse aute.",
                completed: !1,
                due: {
                    date: "",
                    time: ""
                },
                files: [{
                    name: "Lorem.mp3",
                    size: "533.kb"
                }, {
                    name: "mollit.txt",
                    size: "857.kb"
                }, {
                    name: "velit.pdf",
                    size: "274.kb"
                }, {
                    name: "commodo.jpg",
                    size: "513.kb"
                }, {
                    name: "pariatur.docx",
                    size: "162.kb"
                }],
                priority: "!!"
            }, {
                id: 10,
                label: "design",
                color: "bg-indigo-500",
                title: "Incididunt incididunt incididunt dolore commodo laborum ut ea pariatur ullamco.",
                description: "Ad non in laboris esse cillum anim dolor adipisicing anim labore deserunt anim ipsum. Consectetur adipisicing ex ullamco sint cupidatat pariatur dolore sunt culpa consequat magna minim id. Deserunt cillum occaecat irure anim.",
                completed: !1,
                due: {
                    date: "23-03-2030",
                    time: "01:50"
                },
                files: [{
                    name: "consequat.gif",
                    size: "790.kb"
                }],
                priority: "!!"
            }, {
                id: 11,
                label: "bug",
                color: "bg-red-500",
                title: "Eiusmod nulla aliquip laborum non aliquip nulla minim.",
                description: "Excepteur irure irure Lorem do cillum in irure. Officia enim qui qui incididunt id eu id aute eiusmod commodo non exercitation ipsum officia. Elit deserunt non est et ea anim sint ullamco ea. Qui enim tempor exercitation aute ipsum. Culpa est occaecat ipsum et deserunt veniam qui. Occaecat in sit eu qui ullamco nisi consequat ex voluptate duis.",
                completed: !1,
                due: {
                    date: "18-03-2030",
                    time: "02:36"
                },
                files: [{
                    name: "do.gif",
                    size: "868.kb"
                }, {
                    name: "ipsum.csv",
                    size: "539.kb"
                }, {
                    name: "irure.txt",
                    size: "472.kb"
                }, {
                    name: "officia.jpg",
                    size: "559.kb"
                }],
                priority: "!"
            }, {
                id: 12,
                label: "priority:severe",
                color: "bg-pink-500",
                title: "Irure cupidatat consequat anim aliquip esse consequat anim aute non occaecat et cillum.",
                description: "Excepteur exercitation deserunt enim ullamco ut commodo tempor elit eu sunt in ut magna. Velit dolor tempor aliquip consectetur irure adipisicing. Dolor eiusmod ex magna in et. Veniam minim deserunt Lorem esse pariatur Lorem. Labore laborum nostrud voluptate exercitation.",
                completed: !1,
                due: {
                    date: "",
                    time: ""
                },
                files: [],
                priority: "!"
            }, {
                id: 13,
                label: "security",
                color: "bg-orange",
                title: "Ipsum ad dolore in laborum occaecat tempor et commodo sunt occaecat proident exercitation consequat elit.",
                description: "Officia irure do velit Lorem enim enim. In ad dolor laboris esse cupidatat aliqua sint reprehenderit. Elit non ad consectetur ut voluptate ad cupidatat. Adipisicing voluptate labore officia ullamco enim in qui aute.",
                completed: !1,
                due: {
                    date: "",
                    time: ""
                },
                files: [],
                priority: "!"
            }, {
                id: 14,
                label: "bug",
                color: "bg-red-500",
                title: "Eiusmod incididunt do ea aute ad nisi sunt consequat.",
                description: "Ullamco magna est sit reprehenderit velit ut dolore proident aliquip dolore cillum. Commodo incididunt proident veniam proident Lorem. Sit adipisicing voluptate non id sit. Et ad duis cillum in elit sit officia duis. Incididunt incididunt nisi in aliqua sit sint sit duis consectetur.",
                completed: !1,
                due: {
                    date: "",
                    time: ""
                },
                files: [],
                priority: "!"
            }, {
                id: 15,
                label: "feature",
                color: "bg-blue-500",
                title: "Ullamco excepteur amet consequat eiusmod.",
                description: "Ipsum aute ut laborum reprehenderit non duis. Esse aute aute enim nostrud deserunt magna aliquip incididunt excepteur occaecat eiusmod eiusmod. Elit ad quis nostrud pariatur non adipisicing. Incididunt tempor elit ut laboris anim nisi exercitation. Consequat voluptate et aliqua proident. Cillum ad exercitation laboris esse nisi anim fugiat sint ipsum est quis voluptate.",
                completed: !1,
                due: {
                    date: "31-03-2030",
                    time: "08:27"
                },
                files: [{
                    name: "labore.docx",
                    size: "445.kb"
                }, {
                    name: "nisi.docx",
                    size: "518.kb"
                }, {
                    name: "voluptate.txt",
                    size: "194.kb"
                }],
                priority: "!!!"
            }, {
                id: 16,
                label: "obsolete",
                color: "bg-dark-500",
                title: "Officia est est eu non ea esse nisi reprehenderit ut.",
                description: "Officia incididunt nulla ut reprehenderit consequat. Et deserunt id enim quis irure consequat quis enim. Esse in enim Lorem excepteur ad amet fugiat labore sunt culpa fugiat adipisicing do.",
                completed: !1,
                due: {
                    date: "11-03-2030",
                    time: "01:41"
                },
                files: [{
                    name: "est.csv",
                    size: "535.kb"
                }, {
                    name: "dolore.jpg",
                    size: "947.kb"
                }, {
                    name: "non.pdf",
                    size: "104.kb"
                }, {
                    name: "consequat.txt",
                    size: "754.kb"
                }],
                priority: "!!!"
            }, {
                id: 17,
                label: "obsolete",
                color: "bg-dark-500",
                title: "Officia sint nisi dolor eiusmod ex dolore fugiat nisi laborum sint.",
                description: "Nisi adipisicing cupidatat nisi adipisicing consectetur voluptate duis eu est irure sint cillum. Dolor minim ut minim nisi in fugiat duis reprehenderit qui magna. Nisi sint velit enim officia aliqua. Deserunt irure ullamco non nisi ullamco fugiat aute officia minim proident ad nisi anim esse. Nisi ullamco aliquip commodo mollit. Elit nostrud dolore qui nisi id voluptate Lorem duis magna nisi Lorem consectetur adipisicing commodo.",
                completed: !1,
                due: {
                    date: "19-03-2030",
                    time: "16:55"
                },
                files: [{
                    name: "velit.docx",
                    size: "448.kb"
                }],
                priority: "!!!"
            }, {
                id: 18,
                label: "obsolete",
                color: "bg-dark-500",
                title: "Velit veniam incididunt aute irure enim enim exercitation eiusmod mollit amet.",
                description: "Est pariatur dolore occaecat Lorem laboris irure aliqua qui dolore velit aliqua veniam. Exercitation cillum ad qui irure aliqua enim ea veniam laboris voluptate cillum tempor Lorem. Velit est amet proident eu reprehenderit. Laborum magna minim officia est aute ullamco adipisicing proident proident aliqua sunt. Id aliqua ex et sunt.",
                completed: !1,
                due: {
                    date: "05-03-2030",
                    time: "07:51"
                },
                files: [{
                    name: "eiusmod.txt",
                    size: "908.kb"
                }, {
                    name: "aliquip.csv",
                    size: "557.kb"
                }, {
                    name: "ad.gif",
                    size: "16.kb"
                }, {
                    name: "dolore.txt",
                    size: "851.kb"
                }],
                priority: "!!"
            }, {
                id: 19,
                label: "version 2.0",
                color: "bg-bg-purple-500",
                title: "Cupidatat aute exercitation nisi culpa do nisi qui esse irure elit.",
                description: "Et ipsum officia sunt Lorem do non quis nostrud proident nostrud. Irure commodo veniam irure anim culpa nostrud cupidatat. Ullamco amet laborum commodo aliqua eu qui amet cupidatat. Minim excepteur esse anim aute proident reprehenderit qui exercitation magna. Aliquip id ea commodo culpa non velit ut mollit enim qui excepteur enim voluptate. Fugiat occaecat ex minim occaecat sint ad.",
                completed: !1,
                due: {
                    date: "11-03-2030",
                    time: "03:45"
                },
                files: [{
                    name: "reprehenderit.docx",
                    size: "243.kb"
                }, {
                    name: "laboris.mp3",
                    size: "763.kb"
                }, {
                    name: "esse.csv",
                    size: "91.kb"
                }, {
                    name: "magna.jpg",
                    size: "430.kb"
                }, {
                    name: "voluptate.docx",
                    size: "741.kb"
                }],
                priority: "!!"
            }, {
                id: 20,
                label: "documentation",
                color: "bg-green-500",
                title: "Culpa qui ex do cillum irure quis pariatur nulla occaecat.",
                description: "Cillum in aute aute duis ut nulla veniam culpa magna mollit nisi eu quis mollit. Sint est cupidatat aliqua dolore. Ullamco nulla velit nostrud sit duis nisi velit officia. Sit cillum elit pariatur irure labore.",
                completed: !1,
                due: {
                    date: "",
                    time: ""
                },
                files: [],
                priority: "!"
            }, {
                id: 21,
                label: "bug",
                color: "bg-red-500",
                title: "Exercitation pariatur fugiat sit aute in laborum aliquip ea aute adipisicing irure amet.",
                description: "Elit non fugiat eu dolor incididunt in dolore cupidatat fugiat. Laborum veniam veniam sunt ex. Lorem esse laborum cillum cupidatat reprehenderit qui commodo veniam id culpa commodo culpa. Sunt ut elit incididunt voluptate voluptate incididunt irure adipisicing ullamco fugiat irure cupidatat. Do sunt incididunt veniam sint pariatur ad enim. Quis duis non reprehenderit commodo ad veniam nisi reprehenderit non. Reprehenderit reprehenderit et minim irure exercitation minim ad sint anim deserunt aliqua enim culpa Lorem.",
                completed: !1,
                due: {
                    date: "26-02-2030",
                    time: "22:17"
                },
                files: [{
                    name: "magna.docx",
                    size: "348.kb"
                }, {
                    name: "officia.docx",
                    size: "918.kb"
                }, {
                    name: "ea.csv",
                    size: "339.kb"
                }, {
                    name: "commodo.jpg",
                    size: "873.kb"
                }],
                priority: "!!"
            }, {
                id: 22,
                label: "design",
                color: "bg-indigo-500",
                title: "Reprehenderit sint ipsum aliquip commodo incididunt quis pariatur.",
                description: "Culpa est et velit in consectetur enim eu enim ipsum ullamco. Consequat adipisicing non laboris quis excepteur laboris exercitation amet qui tempor id enim aute in. Amet ad occaecat tempor dolor sit ut voluptate. Elit dolore anim excepteur in. In nostrud exercitation labore labore voluptate nisi. Cillum dolore deserunt occaecat commodo fugiat excepteur aliqua deserunt tempor. Non sit do nisi cillum qui exercitation proident ipsum amet.",
                completed: !1,
                due: {
                    date: "17-03-2030",
                    time: "07:39"
                },
                files: [{
                    name: "Lorem.docx",
                    size: "140.kb"
                }],
                priority: "!!!"
            }, {
                id: 23,
                label: "design",
                color: "bg-indigo-500",
                title: "Lorem officia eu sit voluptate cillum irure sunt eiusmod non.",
                description: "Reprehenderit pariatur ea aute incididunt est esse qui sint ex esse laborum proident. Labore aliquip aliquip magna qui excepteur consequat amet. Eiusmod dolor sit culpa dolore eiusmod pariatur enim voluptate exercitation deserunt cillum exercitation sint. Non nisi fugiat elit ex voluptate do dolore quis reprehenderit exercitation exercitation aliquip. Aliquip eiusmod quis culpa esse. Voluptate in ex commodo anim magna amet tempor esse.",
                completed: !1,
                due: {
                    date: "26-02-2030",
                    time: "15:11"
                },
                files: [{
                    name: "ad.csv",
                    size: "182.kb"
                }, {
                    name: "ex.gif",
                    size: "120.kb"
                }, {
                    name: "quis.txt",
                    size: "980.kb"
                }, {
                    name: "aute.txt",
                    size: "819.kb"
                }],
                priority: "!!!"
            }, {
                id: 24,
                label: "priority:severe",
                color: "bg-pink-500",
                title: "Est laborum consequat commodo non ex irure et anim qui.",
                description: "Dolor adipisicing quis eu irure ea veniam nulla ad. Aliquip aliquip commodo irure non cillum. Quis ea cillum qui nisi excepteur commodo commodo quis tempor. Anim laborum eu nostrud minim nulla fugiat proident velit pariatur excepteur fugiat.",
                completed: !1,
                due: {
                    date: "",
                    time: ""
                },
                files: [],
                priority: "!"
            }, {
                id: 25,
                label: "priority:severe",
                color: "bg-pink-500",
                title: "Sit cillum dolor tempor enim.",
                description: "Eu nisi consectetur pariatur reprehenderit dolor aute excepteur consequat id ea proident minim labore amet. Nulla quis amet occaecat duis veniam ipsum. Aliqua deserunt irure quis nisi ullamco. Nulla laborum tempor do laborum consequat nulla ea anim. Ullamco ex consequat sit sit minim id exercitation sint excepteur. Consequat occaecat eu voluptate mollit nulla occaecat officia esse ex labore occaecat enim aliquip cupidatat. Anim in nostrud quis reprehenderit nostrud nisi ex.",
                completed: !1,
                due: {
                    date: "26-03-2030",
                    time: "17:36"
                },
                files: [{
                    name: "quis.gif",
                    size: "136.kb"
                }, {
                    name: "magna.csv",
                    size: "827.kb"
                }],
                priority: "!"
            }, {
                id: 26,
                label: "blocked",
                color: "bg-dark-500",
                title: "Tempor irure eu Lorem esse proident qui tempor laboris consectetur ipsum Lorem elit incididunt dolor.",
                description: "Et laboris do cillum consequat sunt nostrud ut officia. Eu enim mollit do esse do aute dolor cupidatat. Reprehenderit incididunt do elit dolore. Laboris adipisicing quis culpa anim dolor consectetur fugiat nulla nulla.",
                completed: !1,
                due: {
                    date: "06-03-2030",
                    time: "06:37"
                },
                files: [],
                priority: "!"
            }, {
                id: 27,
                label: "bug",
                color: "bg-red-500",
                title: "Esse sunt ex cillum excepteur in id laborum dolor est.",
                description: "Consequat Lorem ex ex nisi in esse sint reprehenderit Lorem et esse amet ullamco. Labore dolore irure nulla et qui non eiusmod Lorem labore esse. Mollit id anim esse sunt id esse. Cillum sit eu voluptate adipisicing eiusmod aute ipsum aliquip occaecat ipsum elit nulla occaecat. Qui tempor aliqua tempor ea ullamco voluptate dolore eu sit pariatur officia adipisicing aliquip elit. Consequat sit aute mollit commodo est pariatur aliqua consequat labore minim ex ipsum.",
                completed: !1,
                due: {
                    date: "11-03-2030",
                    time: "04:05"
                },
                files: [{
                    name: "commodo.pdf",
                    size: "977.kb"
                }, {
                    name: "cillum.csv",
                    size: "769.kb"
                }, {
                    name: "mollit.docx",
                    size: "72.kb"
                }, {
                    name: "fugiat.docx",
                    size: "439.kb"
                }, {
                    name: "exercitation.txt",
                    size: "423.kb"
                }],
                priority: "!"
            }, {
                id: 28,
                label: "bug",
                color: "bg-red-500",
                title: "Velit eiusmod esse tempor reprehenderit ut ea aute elit reprehenderit in ex voluptate.",
                description: "Velit aliquip deserunt consequat laborum dolor cupidatat. Sit pariatur anim culpa cillum tempor consectetur. Ullamco irure nostrud laboris quis esse consectetur ipsum officia. Dolore laborum dolore veniam nostrud occaecat occaecat eu aute ipsum in exercitation. Laboris ea excepteur aute ullamco sint qui ad aliquip qui ad ipsum. Non nulla amet reprehenderit minim id non excepteur.",
                completed: !1,
                due: {
                    date: "05-03-2030",
                    time: "00:07"
                },
                files: [],
                priority: "!"
            }, {
                id: 29,
                label: "bug",
                color: "bg-red-500",
                title: "Do aute tempor esse eiusmod ut sit dolor laboris labore proident nostrud.",
                description: "Laborum exercitation ad nisi tempor anim qui irure officia mollit exercitation sunt dolore ullamco ex. Anim voluptate reprehenderit ad non officia minim enim et ipsum anim aute labore duis. Mollit magna consequat aute in proident dolore. Enim laboris magna consectetur eiusmod labore consequat deserunt pariatur esse ad voluptate anim laborum. Elit veniam consectetur elit fugiat eiusmod ipsum sit sint deserunt aute. Non ea do id velit mollit enim.",
                completed: !1,
                due: {
                    date: "24-03-2030",
                    time: "11:50"
                },
                files: [],
                priority: "!!!"
            }, {
                id: 30,
                label: "feature",
                color: "bg-blue-500",
                title: "Proident voluptate qui proident nostrud quis duis eiusmod fugiat.",
                description: "Excepteur voluptate ut nostrud est. Reprehenderit aute veniam nisi cillum laboris aliqua deserunt. Duis irure ea irure ut cillum. Mollit est ullamco fugiat reprehenderit et. Sint duis ex proident adipisicing consectetur exercitation irure.",
                completed: !1,
                due: {
                    date: "16-03-2030",
                    time: "16:57"
                },
                files: [{
                    name: "laboris.mp3",
                    size: "176.kb"
                }, {
                    name: "ullamco.gif",
                    size: "775.kb"
                }, {
                    name: "velit.txt",
                    size: "255.kb"
                }, {
                    name: "laborum.pdf",
                    size: "344.kb"
                }],
                priority: "!!"
            }];
            var X = a(31478);
            let $ = () => (0, t.jsx)("div", {
                className: "nav-bar-dropdown hidden sm:block",
                children: (0, t.jsxs)(b.h_, {
                    children: [(0, t.jsx)(b.$F, {
                        asChild: !0,
                        children: (0, t.jsx)(u.z, {
                            variant: "highlight",
                            size: "icon",
                            children: (0, t.jsx)(T.Z, {
                                className: "h-5 w-5"
                            })
                        })
                    }), (0, t.jsxs)(b.AW, {
                        className: "flex w-80 flex-col overflow-hidden",
                        children: [(0, t.jsxs)("div", {
                            className: "flex h-11 shrink-0 items-center px-3.5",
                            children: [(0, t.jsx)(b.Ju, {
                                children: "Tasks"
                            }), (0, t.jsx)(u.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "ms-auto",
                                children: (0, t.jsx)(T.Z, {
                                    className: "h-4 w-4"
                                })
                            }), (0, t.jsx)(u.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, t.jsx)(D.Z, {
                                    className: "h-4 w-4"
                                })
                            }), (0, t.jsx)(u.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "-me-2",
                                children: (0, t.jsx)(N.Z, {
                                    className: "h-4 w-4"
                                })
                            })]
                        }), (0, t.jsx)(x.ScrollArea, {
                            className: "flex-1 pt-3",
                            children: W.slice(0, 10).map((e, i) => (0, t.jsxs)("div", {
                                className: "flex items-start px-3.5",
                                children: [(0, t.jsx)(O.Checkbox, {
                                    className: "me-3 rounded-full",
                                    id: `nbt-${i}`
                                }), (0, t.jsx)("div", {
                                    className: (0, s.cn)("mb-3 truncate pb-3", i < 9 && "border-border/30 border-b"),
                                    children: (0, t.jsxs)("label", {
                                        htmlFor: `nbt-${i}`,
                                        className: "block",
                                        children: [(0, t.jsx)("div", {
                                            className: "text-headings mb-1 truncate leading-tight",
                                            children: e.title
                                        }), (0, t.jsxs)("div", {
                                            className: "text-muted flex items-center gap-2",
                                            children: [(0, t.jsx)(X.C, {
                                                className: (0, s.cn)([e.color], "text-white"),
                                                children: e.label
                                            }), (0, t.jsx)("span", {
                                                children: "-"
                                            }), e.due.date && (0, t.jsxs)(t.Fragment, {
                                                children: [(0, t.jsx)("span", {
                                                    className: "text-xs font-medium",
                                                    children: e.due.date
                                                }), (0, t.jsx)("span", {
                                                    children: "-"
                                                })]
                                            }), (0, t.jsx)("span", {
                                                className: "text-sm font-medium",
                                                children: e.priority
                                            })]
                                        })]
                                    })
                                })]
                            }, i))
                        })]
                    })]
                })
            });
            var B = a(25825);
            let H = () => (0, t.jsx)("aside", {
                    className: "nav-bar fixed bottom-0 z-[9] w-full py-1 max-sm:bg-popover sm:end-1 sm:top-2 sm:z-[8] sm:w-16 print:hidden",
                    children: (0, t.jsxs)("nav", {
                        className: "flex flex-row-reverse items-center justify-around gap-5 sm:flex-col",
                        children: [(0, t.jsxs)(b.h_, {
                            children: [(0, t.jsx)(b.$F, {
                                asChild: !0,
                                children: (0, t.jsx)(u.z, {
                                    variant: "highlight",
                                    className: "h-11 w-11 justify-center rounded-full p-0",
                                    children: (0, t.jsx)(g.default, {
                                        src: "/img/contacts/2.jpg",
                                        className: "h-8 w-8 rounded-full",
                                        width: 50,
                                        height: 50,
                                        alt: "Profile"
                                    })
                                })
                            }), (0, t.jsxs)(b.AW, {
                                align: "end",
                                children: [(0, t.jsxs)(b.Xi, {
                                    children: [(0, t.jsx)(v.Z, {
                                        className: "me-2 h-4.5 w-4.5"
                                    }), "Profile"]
                                }), (0, t.jsxs)(b.Xi, {
                                    children: [(0, t.jsx)(j.Z, {
                                        className: "me-2 h-4.5 w-4.5"
                                    }), "Billing"]
                                }), (0, t.jsxs)(b.Xi, {
                                    children: [(0, t.jsx)(N.Z, {
                                        className: "me-2 h-4.5 w-4.5"
                                    }), "Preferences"]
                                }), (0, t.jsxs)(b.Xi, {
                                    children: [(0, t.jsx)(w.Z, {
                                        className: "me-2 h-4.5 w-4.5"
                                    }), "Logout"]
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "hidden sm:block",
                            children: (0, t.jsxs)(b.h_, {
                                children: [(0, t.jsx)(b.$F, {
                                    asChild: !0,
                                    children: (0, t.jsx)(u.z, {
                                        variant: "highlight",
                                        size: "icon",
                                        children: (0, t.jsx)(g.default, {
                                            src: "/img/flags/england.svg",
                                            className: "h-6 w-6 rounded-full",
                                            width: 30,
                                            height: 30,
                                            alt: "Lnaguage"
                                        })
                                    })
                                }), (0, t.jsxs)(b.AW, {
                                    align: "end",
                                    children: [(0, t.jsxs)(b.Xi, {
                                        children: [(0, t.jsx)(g.default, {
                                            src: "/img/flags/japan.svg",
                                            className: "me-3 h-6 w-6 rounded-full",
                                            width: 30,
                                            height: 30,
                                            alt: "Japanese"
                                        }), "Japanese"]
                                    }), (0, t.jsxs)(b.Xi, {
                                        children: [(0, t.jsx)(g.default, {
                                            src: "/img/flags/germany.svg",
                                            className: "me-3 h-6 w-6 rounded-full",
                                            width: 30,
                                            height: 30,
                                            alt: "German"
                                        }), "German"]
                                    }), (0, t.jsxs)(b.Xi, {
                                        children: [(0, t.jsx)(g.default, {
                                            src: "/img/flags/china.svg",
                                            className: "me-3 h-6 w-6 rounded-full",
                                            width: 30,
                                            height: 30,
                                            alt: "Chinese"
                                        }), "Chinese"]
                                    }), (0, t.jsxs)(b.Xi, {
                                        children: [(0, t.jsx)(g.default, {
                                            src: "/img/flags/france.svg",
                                            className: "me-3 h-6 w-6 rounded-full",
                                            width: 30,
                                            height: 30,
                                            alt: "French"
                                        }), "French"]
                                    })]
                                })]
                            })
                        }), (0, t.jsx)(A, {}), (0, t.jsx)(U, {}), (0, t.jsx)($, {}), (0, t.jsx)(z, {}), (0, t.jsx)(B.SidebarToggle, {
                            className: "sm:hidden"
                        })]
                    })
                }),
                J = ({
                    children: e
                }) => {
                    let i = (0, r.usePathname)(),
                        a = (0, s.jm)(i),
                        n = (0, s.x3)(i);
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(() => {
                            if (!n) return (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(f, {}), (0, t.jsx)(H, {})]
                            })
                        })(), (0, t.jsx)("div", {
                            className: (0, s.cn)("content flex h-full flex-col overflow-hidden px-3 transition-[padding] duration-300 will-change-[padding]", n && "py-3", !n && "pb-16 sm:pb-3 sm:pe-[4.5rem]", a && !n && "xl:ps-16", !a && !n && "xl:ps-60"),
                            children: e
                        })]
                    })
                }
        },
        765: function(e, i, a) {
            "use strict";
            a.d(i, {
                T: function() {
                    return r
                }
            });
            var t = a(3827),
                s = a(1657);
            let r = ({
                sidebarMin: e
            }) => (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    fill: "none",
                    className: "me-3 shrink-0",
                    children: [(0, t.jsx)("path", {
                        fill: "url(#a)",
                        d: "M36.102 13.373V15.5h-5.318v-2.127h5.318Zm-4.527-10.67V15.5H29V2.703h2.575Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#b)",
                        d: "M40.074 5.99v9.51h-2.47V5.99h2.47ZM37.49 3.53c0-.382.12-.695.36-.941.247-.252.575-.378.985-.378.416 0 .744.126.984.378.24.246.36.56.36.94 0 .375-.122.689-.368.94-.24.247-.563.37-.967.37-.416 0-.747-.123-.993-.37a1.31 1.31 0 0 1-.36-.94Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#c)",
                        d: "M44.442 8.02v7.48h-2.47V5.99h2.312l.158 2.03Zm-.369 2.4-.659.018c-.012-.715.056-1.357.202-1.925.153-.569.366-1.052.642-1.45a2.933 2.933 0 0 1 1.002-.923c.392-.217.829-.326 1.31-.326.368 0 .705.065 1.01.194.31.129.577.334.8.615.222.281.395.656.518 1.125.123.463.185 1.031.185 1.705V15.5h-2.47V9.436c0-.41-.04-.727-.123-.95-.082-.228-.205-.386-.369-.474a1.225 1.225 0 0 0-.615-.14 1.02 1.02 0 0 0-.624.201 1.534 1.534 0 0 0-.457.536 3.189 3.189 0 0 0-.273.809 4.96 4.96 0 0 0-.079 1.002Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#d)",
                        d: "M54.717 15.676c-.65 0-1.228-.1-1.732-.299-.498-.2-.92-.486-1.265-.861-.346-.381-.61-.841-.791-1.38-.182-.54-.273-1.155-.273-1.846v-.782c0-.774.088-1.45.264-2.03.176-.586.425-1.079.747-1.477a2.953 2.953 0 0 1 1.186-.888c.475-.199 1.011-.299 1.609-.299.598 0 1.122.1 1.573.3.457.193.835.486 1.134.878.299.387.524.867.677 1.442.152.574.228 1.242.228 2.004v1.124h-6.372v-1.73h3.955v-.22c0-.387-.04-.71-.123-.967-.082-.264-.21-.46-.386-.59-.176-.128-.41-.193-.704-.193-.246 0-.454.05-.624.15-.17.1-.304.255-.404.466-.1.21-.173.486-.22.826a8.82 8.82 0 0 0-.07 1.204v.782c0 .44.038.809.114 1.108.076.292.188.533.334.72.153.182.337.314.554.396.217.076.469.114.756.114.433 0 .823-.076 1.169-.229.351-.158.65-.372.896-.641l.985 1.494a3.53 3.53 0 0 1-.703.668 3.836 3.836 0 0 1-1.073.545c-.416.14-.896.21-1.441.21Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#e)",
                        d: "M63.69 13.312V8.917c0-.287-.035-.516-.105-.686a.682.682 0 0 0-.299-.369.867.867 0 0 0-.474-.123.978.978 0 0 0-.528.132.807.807 0 0 0-.316.378 1.61 1.61 0 0 0-.097.589h-2.47c0-.41.08-.797.238-1.16.158-.37.39-.692.694-.967.31-.281.68-.501 1.107-.66a4.132 4.132 0 0 1 1.442-.237c.633 0 1.195.109 1.687.326.492.21.882.548 1.17 1.01.286.463.43 1.064.43 1.802v4.236c0 .534.026.967.08 1.301.058.334.143.621.254.862v.149h-2.479a4.124 4.124 0 0 1-.255-.984c-.052-.399-.079-.8-.079-1.204Zm.3-3.622.008 1.477h-.905c-.235 0-.44.038-.616.114-.17.076-.313.185-.43.325a1.342 1.342 0 0 0-.264.475c-.053.182-.079.375-.079.58 0 .229.032.422.097.58a.746.746 0 0 0 .29.36.833.833 0 0 0 .457.124c.27 0 .504-.056.703-.167.2-.112.346-.246.44-.405.099-.158.131-.304.096-.44l.563.959a4.35 4.35 0 0 1-.29.677 2.86 2.86 0 0 1-.449.65c-.181.2-.407.363-.676.492a2.207 2.207 0 0 1-.94.185c-.51 0-.976-.117-1.398-.352a2.608 2.608 0 0 1-1.002-.984c-.24-.422-.36-.923-.36-1.503 0-.48.076-.914.228-1.3.158-.393.392-.725.703-.994.31-.275.703-.486 1.178-.633.474-.146 1.031-.22 1.67-.22h.975Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#f)",
                        d: "M70.45 8.108V15.5h-2.462V5.99h2.32l.141 2.118Zm2.24-2.188-.035 2.452a3.113 3.113 0 0 0-.404-.053 5.341 5.341 0 0 0-.404-.017c-.276 0-.51.044-.703.132a1.172 1.172 0 0 0-.484.378c-.123.164-.217.369-.281.615a3.886 3.886 0 0 0-.114.835l-.466-.176c0-.621.047-1.19.14-1.705.1-.522.247-.973.44-1.354.193-.386.425-.685.694-.896.276-.211.586-.317.932-.317.117 0 .24.012.369.036.135.017.24.04.316.07Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#g)",
                        d: "M82.85 4.988 80.1 15.5h-2.716l3.999-12.797h1.696l-.228 2.285ZM85.023 15.5l-2.77-10.512-.254-2.285h1.723L87.755 15.5h-2.733Zm.096-4.773v2.136h-5.774v-2.136h5.774Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#h)",
                        d: "M93.459 13.4V2h2.47v13.5l-2.233.009-.237-2.11Zm-4.93-2.32v-.634c0-.773.064-1.45.193-2.03.135-.58.334-1.063.597-1.45.264-.387.586-.674.967-.862.387-.193.83-.29 1.327-.29.451 0 .847.115 1.187.343.346.223.639.536.879.94.24.405.433.882.58 1.433.146.551.249 1.155.307 1.81v.915c-.07.621-.178 1.201-.325 1.74a5.122 5.122 0 0 1-.58 1.406c-.24.399-.53.712-.87.94-.34.224-.735.335-1.186.335-.499 0-.94-.1-1.328-.299-.38-.2-.703-.492-.966-.879-.258-.393-.455-.873-.59-1.441a9.082 9.082 0 0 1-.193-1.978Zm2.46-.634v.633c0 .445.02.83.062 1.151.047.317.12.578.22.783.105.199.243.348.413.448.17.094.38.14.632.14.328 0 .595-.082.8-.246.205-.17.358-.4.457-.694.106-.299.164-.641.176-1.028V9.972a4.235 4.235 0 0 0-.114-.87 2.188 2.188 0 0 0-.273-.66 1.259 1.259 0 0 0-.44-.421c-.17-.1-.368-.15-.597-.15-.246 0-.457.05-.633.15-.17.1-.304.254-.404.465-.1.205-.176.472-.228.8-.047.322-.07.71-.07 1.16Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#i)",
                        d: "M100.262 7.959V15.5h-2.47V5.99h2.32l.15 1.969Zm-.352 2.46-.677.018a7.658 7.658 0 0 1 .176-1.845 4.814 4.814 0 0 1 .58-1.468c.264-.416.595-.738.994-.967.398-.228.864-.343 1.397-.343.346 0 .665.065.958.194.293.123.548.32.765.589.216.263.383.609.501 1.037.117.422.175.928.175 1.52V15.5h-2.461V9.453c0-.422-.041-.744-.123-.967-.082-.228-.199-.386-.351-.474a1.055 1.055 0 0 0-.563-.14c-.234 0-.439.064-.615.192a1.41 1.41 0 0 0-.431.545 3.513 3.513 0 0 0-.246.809c-.053.31-.079.645-.079 1.002Zm4.632-.245-.888.114a7.278 7.278 0 0 1 .167-1.749c.123-.545.314-1.02.572-1.424.258-.41.58-.73.966-.958.393-.228.847-.343 1.363-.343.387 0 .738.065 1.054.194.317.129.586.337.809.624.229.281.401.653.519 1.116.123.463.184 1.025.184 1.688V15.5h-2.47V9.444c0-.427-.041-.756-.123-.984-.082-.229-.199-.384-.351-.466a1.133 1.133 0 0 0-.545-.123.905.905 0 0 0-.554.176 1.389 1.389 0 0 0-.386.492 2.658 2.658 0 0 0-.238.73 4.8 4.8 0 0 0-.079.905Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#j)",
                        d: "M113.727 5.99v9.51h-2.47V5.99h2.47Zm-2.584-2.46c0-.382.12-.695.36-.941.246-.252.574-.378.984-.378.416 0 .745.126.985.378.24.246.36.56.36.94 0 .375-.123.689-.369.94-.24.247-.562.37-.967.37-.416 0-.747-.123-.993-.37a1.31 1.31 0 0 1-.36-.94Z"
                    }), (0, t.jsx)("path", {
                        fill: "url(#k)",
                        d: "M118.095 8.02v7.48h-2.47V5.99h2.312l.158 2.03Zm-.369 2.4-.659.018c-.012-.715.055-1.357.202-1.925.152-.569.366-1.052.641-1.45a2.937 2.937 0 0 1 1.002-.923 2.665 2.665 0 0 1 1.31-.326c.369 0 .706.065 1.011.194.31.129.577.334.799.615.223.281.396.656.519 1.125.123.463.184 1.031.184 1.705V15.5h-2.469V9.436c0-.41-.041-.727-.123-.95-.082-.228-.205-.386-.369-.474a1.231 1.231 0 0 0-.616-.14c-.234 0-.442.066-.624.201a1.539 1.539 0 0 0-.457.536 3.181 3.181 0 0 0-.272.809c-.059.31-.085.645-.079 1.002Z"
                    }), (0, t.jsx)("path", {
                        fill: "#0660B8",
                        d: "M2 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                    }), (0, t.jsx)("path", {
                        fill: "#22A279",
                        d: "M16 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                    }), (0, t.jsx)("path", {
                        fill: "#0660B8",
                        d: "M2 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                    })]
                }), (0, t.jsxs)("svg", {
                    width: "94",
                    height: "14",
                    fill: "none",
                    className: (0, s.cn)(e && "group-hover:opacity-100 xl:opacity-0", "transition-opacity duration-300"),
                    children: [(0, t.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M63.791 13.341c.305-.204.57-.477.794-.819l.111.987 2.233-.009V0h-2.47v4.771c-.193-.251-.412-.455-.659-.614-.34-.228-.736-.343-1.187-.343-.497 0-.94.097-1.327.29-.381.188-.703.475-.967.862s-.462.87-.597 1.45c-.129.58-.193 1.257-.193 2.03v.634l-.001-.001c-.008.664.056 1.328.193 1.978.135.568.332 1.048.59 1.441a2.66 2.66 0 0 0 .966.879c.388.199.829.299 1.328.299.451 0 .846-.111 1.186-.335zm.571-6.899l.097.173v4.313c-.09.17-.205.312-.343.427-.205.164-.472.246-.8.246a1.29 1.29 0 0 1-.632-.14c-.17-.1-.308-.249-.413-.448-.1-.205-.173-.466-.22-.783s-.062-.706-.062-1.151v-.633c0-.45.024-.838.071-1.16.052-.328.128-.595.228-.8.1-.211.234-.365.404-.465.176-.1.387-.15.633-.15.229 0 .427.05.597.15a1.26 1.26 0 0 1 .44.421zM11.074 3.99v9.51h-2.47V3.99h2.47zM8.49 1.53a1.29 1.29 0 0 1 .36-.941c.247-.252.575-.378.985-.378.416 0 .744.126.984.378.24.246.36.56.36.94s-.122.689-.368.94c-.24.247-.563.37-.967.37-.416 0-.747-.123-.993-.37a1.31 1.31 0 0 1-.36-.94l-.001.001zm-1.388 9.843V13.5H2.575h-.791H0V.703h2.575v10.67h4.527zm8.34-4.796V13.5h-2.47V3.99h2.312l.073.935a2.93 2.93 0 0 1 .903-.785 2.66 2.66 0 0 1 1.31-.326c.368 0 .705.065 1.01.194.31.129.577.334.8.615s.395.656.518 1.125c.123.463.185 1.031.185 1.705V13.5h-2.47V7.436c0-.41-.04-.727-.123-.95-.082-.228-.205-.386-.369-.474-.189-.1-.401-.148-.615-.14a1.02 1.02 0 0 0-.624.201c-.182.134-.332.306-.44.504zm10.275 7.099c-.65 0-1.228-.1-1.732-.299-.498-.2-.92-.486-1.265-.861-.346-.381-.61-.841-.791-1.38s-.273-1.155-.273-1.846v-.782c0-.774.088-1.45.264-2.03.176-.586.425-1.079.747-1.477.313-.392.722-.698 1.186-.888.475-.199 1.011-.299 1.609-.299s1.122.1 1.573.3c.457.193.835.486 1.134.878s.524.867.677 1.442.228 1.242.228 2.004v1.124h-4.943c.013.322.049.601.109.836.076.292.188.533.334.72.153.182.337.314.554.396.217.076.469.114.756.114.433 0 .823-.076 1.169-.229a2.7 2.7 0 0 0 .896-.641l.985 1.494c-.203.254-.439.479-.703.668-.327.237-.689.421-1.073.545-.416.14-.896.211-1.441.211zm-1.521-6.372l-.051.528h2.512v-.22c0-.387-.04-.71-.123-.967-.082-.264-.21-.46-.386-.59s-.41-.193-.704-.193c-.246 0-.454.05-.624.15a1.03 1.03 0 0 0-.404.466c-.1.21-.173.486-.22.826zm10.612 5.455c-.061.083-.127.163-.197.24-.181.2-.407.363-.676.492a2.21 2.21 0 0 1-.94.185c-.51 0-.976-.117-1.398-.352a2.61 2.61 0 0 1-1.002-.984c-.24-.422-.36-.923-.36-1.503 0-.48.076-.914.228-1.3a2.55 2.55 0 0 1 .703-.994c.31-.275.703-.486 1.178-.633s1.031-.22 1.67-.22h.676v-.773c0-.287-.035-.516-.105-.686-.052-.155-.158-.286-.299-.369s-.308-.128-.474-.123a.98.98 0 0 0-.528.132c-.142.09-.253.222-.316.378a1.61 1.61 0 0 0-.097.589h-2.47c0-.41.08-.797.238-1.16.158-.37.39-.692.694-.967a3.39 3.39 0 0 1 1.107-.66 4.13 4.13 0 0 1 1.442-.237c.633 0 1.195.109 1.687.326.492.21.882.548 1.17 1.01s.43 1.064.43 1.802v4.236c0 .534.026.967.08 1.301s.143.621.254.862v.149h-2.479c-.095-.24-.167-.488-.216-.741zm-.118-1.605c-.094.158-.24.292-.439.403a1.42 1.42 0 0 1-.703.167c-.161.004-.32-.039-.457-.124s-.234-.212-.29-.36c-.065-.158-.097-.351-.097-.58 0-.205.026-.398.079-.58a1.34 1.34 0 0 1 .264-.475 1.18 1.18 0 0 1 .43-.325c.176-.076.381-.114.616-.114h.597v1.988zm6.76 2.345V7.202c.056-.149.127-.279.21-.39a1.17 1.17 0 0 1 .484-.378c.193-.088.427-.132.703-.132l.404.017a3.11 3.11 0 0 1 .404.053l.035-2.452c-.076-.03-.181-.053-.316-.07a2.02 2.02 0 0 0-.369-.036c-.346 0-.656.106-.932.317-.269.211-.501.51-.694.896l-.001.003-.07-1.04h-2.32v9.51h2.462zM54.079.703h.643L58.755 13.5h-2.732l-.695-2.637H51.79L51.1 13.5h-2.716L52.383.703h.616 1.08zm-1.73 8.024h2.417l-1.213-4.602-1.204 4.602zm18.913-2.175V13.5h-2.47V3.99h2.32l.066.867a2.78 2.78 0 0 1 .805-.7c.398-.228.864-.343 1.397-.343a2.35 2.35 0 0 1 .958.194c.293.123.548.32.765.589.116.141.218.306.305.494.255-.399.572-.711.951-.934.393-.228.847-.343 1.363-.343.387 0 .738.065 1.054.194a1.94 1.94 0 0 1 .809.624c.229.281.401.653.519 1.116.123.463.184 1.025.184 1.688V13.5h-2.47V7.444c0-.427-.041-.756-.123-.984s-.199-.384-.351-.466c-.169-.086-.356-.128-.545-.123-.199-.004-.394.058-.554.176a1.39 1.39 0 0 0-.386.492l-.09.203.01.412V13.5h-2.461V7.453c0-.422-.041-.744-.123-.967-.082-.228-.199-.386-.351-.474-.171-.098-.366-.147-.563-.14-.234 0-.439.064-.615.192a1.41 1.41 0 0 0-.404.488zM84.727 3.99v9.51h-2.47V3.99h2.47zm-2.584-2.46a1.29 1.29 0 0 1 .36-.941c.246-.252.574-.378.984-.378.416 0 .745.126.985.378.24.246.36.56.36.94a1.29 1.29 0 0 1-.369.94c-.24.247-.562.37-.967.37-.416 0-.747-.123-.993-.37a1.31 1.31 0 0 1-.274-.434c-.062-.161-.091-.332-.086-.505zm6.952 5.045V13.5h-2.47V3.99h2.312l.073.934a2.94 2.94 0 0 1 .902-.784c.401-.219.853-.332 1.31-.326a2.57 2.57 0 0 1 1.011.194c.31.129.577.334.799.615s.396.656.519 1.125c.123.463.184 1.031.184 1.705V13.5h-2.469V7.436c0-.41-.041-.727-.123-.95s-.205-.386-.369-.474a1.23 1.23 0 0 0-.616-.14 1.02 1.02 0 0 0-.624.201 1.54 1.54 0 0 0-.439.502z",
                        fill: "url(#A)"
                    }), (0, t.jsx)("defs", {
                        children: (0, t.jsxs)("linearGradient", {
                            id: "A",
                            x1: "-.5",
                            y1: "9.48",
                            x2: "92.291",
                            y2: "-.197",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, t.jsx)("stop", {
                                stopColor: "#0762b7"
                            }), (0, t.jsx)("stop", {
                                offset: "1",
                                stopColor: "#22a279"
                            })]
                        })
                    })]
                })]
            })
        },
        29275: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                SIDEBAR_DATA: function() {
                    return j
                }
            });
            var t = a(92600),
                s = a(69805),
                r = a(77618),
                n = a(14130),
                l = a(82869),
                o = a(20606),
                c = a(45523),
                d = a(62784),
                u = a(90684),
                m = a(67366),
                p = a(46578),
                h = a(97307),
                x = a(69809),
                f = a(36636),
                b = a(69475),
                g = a(77249),
                v = a(86185);
            let j = [{
                group: "Dashboards",
                items: [{
                    name: "E-Commerce",
                    icon: t.Z,
                    url: "/"
                }, {
                    name: "CRM",
                    icon: s.Z,
                    url: "/crm"
                }, {
                    name: "Analytics",
                    icon: r.Z,
                    url: "/analytics"
                }, {
                    name: "Project Management",
                    icon: n.Z,
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
                    icon: o.Z,
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
                    icon: d.Z,
                    url: "/contacts",
                    shrunk: !0
                }, {
                    name: "Mail",
                    icon: u.Z,
                    url: "/mail",
                    shrunk: !0
                }, {
                    name: "Messages",
                    icon: m.Z,
                    url: "/messages",
                    shrunk: !0
                }, {
                    name: "Todo Lists",
                    icon: p.Z,
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
                    icon: x.Z,
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
                    icon: f.Z,
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
        25825: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                SidebarToggle: function() {
                    return l
                }
            });
            var t = a(3827),
                s = a(25786),
                r = a(85754),
                n = a(56368);
            let l = ({
                className: e
            }) => {
                let {
                    toggleSidebar: i
                } = (0, n.useSidebar)();
                return (0, t.jsx)(r.z, {
                    variant: "highlight",
                    size: "icon",
                    className: e,
                    onClick: () => i(),
                    children: (0, t.jsx)(s.Z, {
                        className: "w-5"
                    })
                })
            }
        },
        87232: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                PageLoader: function() {
                    return d
                }
            });
            var t = a(3827),
                s = a(64090),
                r = a(47907),
                n = a(765),
                l = a(1657);

            function o({
                className: e,
                ...i
            }) {
                return (0, t.jsx)("div", {
                    className: (0, l.cn)("animate-pulse rounded-md bg-accent/30", e),
                    ...i
                })
            }
            var c = a(18994);

            function d() {
                let e = (0, r.usePathname)(),
                    i = (0, r.useSearchParams)(),
                    [a, l] = (0, s.useState)(!0);
                return (0, s.useEffect)(() => {
                    l(!1)
                }, [e, i]), (0, t.jsx)(t.Fragment, {
                    children: a && (0, t.jsxs)("div", {
                        className: "fixed inset-0 z-50 flex items-start bg-background/50 backdrop-blur-lg",
                        children: [(0, t.jsxs)("div", {
                            className: "w-56 shrink-0 p-6 max-xl:hidden",
                            children: [(0, t.jsx)("div", {
                                className: "mb-10 flex items-center",
                                children: (0, t.jsx)(n.T, {
                                    sidebarMin: !1
                                })
                            }), (0, t.jsx)(o, {
                                className: "mb-6 mt-4 h-1.5 w-24"
                            }), (0, t.jsxs)("div", {
                                className: "mb-10 flex flex-col gap-5",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-28"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-16"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-32"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-20"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-24"
                                    })]
                                })]
                            }), (0, t.jsx)(o, {
                                className: "mb-6 mt-4 h-1.5 w-20"
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col gap-5",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-20"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-32"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-16"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-24"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-16"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-28"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-32"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(o, {
                                        className: "h-5 w-5 shrink-0 rounded-full"
                                    }), (0, t.jsx)(o, {
                                        className: "h-2 w-20"
                                    })]
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "flex-1",
                            children: (0, t.jsxs)("div", {
                                className: "flex h-14 items-center gap-4 px-7 max-sm:pe-8 sm:h-16",
                                children: [(0, t.jsx)(o, {
                                    className: "h-2 w-32 md:w-48"
                                }), (0, t.jsx)("i", {
                                    className: "ms-auto"
                                }), (0, t.jsx)(o, {
                                    className: "h-10 w-56 rounded-full max-sm:hidden"
                                }), (0, t.jsx)(o, {
                                    className: "ms-3 h-6 w-6 rounded-full"
                                }), (0, t.jsx)(o, {
                                    className: "h-6 w-6 rounded-full"
                                }), (0, t.jsx)(o, {
                                    className: "h-6 w-6 rounded-full"
                                })]
                            })
                        }), (0, t.jsxs)("div", {
                            className: "bottom-0 start-0 flex w-full shrink-0 items-center gap-8 py-5 pe-1.5 max-sm:fixed max-sm:h-14 max-sm:justify-around sm:w-16 sm:flex-col",
                            children: [(0, t.jsx)(o, {
                                className: "h-8 w-8 rounded-full max-sm:hidden"
                            }), (0, t.jsx)(o, {
                                className: "h-6 w-6 rounded-full"
                            }), (0, t.jsx)(o, {
                                className: "h-6 w-6 rounded-full"
                            }), (0, t.jsx)(o, {
                                className: "h-6 w-6 rounded-full"
                            }), (0, t.jsx)(o, {
                                className: "h-6 w-6 rounded-full"
                            }), (0, t.jsx)(o, {
                                className: "h-6 w-6 rounded-full"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "fixed inset-0 grid place-content-center",
                            children: (0, t.jsx)(c.Z, {
                                size: 44,
                                strokeWidth: 1,
                                className: "animate-spin text-muted"
                            })
                        })]
                    })
                })
            }
        },
        70269: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                ThemeProvider: function() {
                    return r
                }
            });
            var t = a(3827);
            a(64090);
            var s = a(91774);

            function r({
                children: e,
                ...i
            }) {
                return (0, t.jsx)(s.f, { ...i,
                    children: e
                })
            }
        },
        50660: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                Avatar: function() {
                    return l
                },
                AvatarFallback: function() {
                    return c
                },
                AvatarImage: function() {
                    return o
                }
            });
            var t = a(3827),
                s = a(64090),
                r = a(12178),
                n = a(1657);
            let l = s.forwardRef(({
                className: e,
                ...i
            }, a) => (0, t.jsx)(r.fC, {
                ref: a,
                className: (0, n.cn)("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full [&_svg]:w-5 [&_svg]:stroke-[1.25]", e),
                ...i
            }));
            l.displayName = r.fC.displayName;
            let o = s.forwardRef(({
                className: e,
                ...i
            }, a) => (0, t.jsx)(r.Ee, {
                ref: a,
                className: (0, n.cn)("aspect-square h-full w-full", e),
                ...i
            }));
            o.displayName = r.Ee.displayName;
            let c = s.forwardRef(({
                className: e,
                ...i
            }, a) => (0, t.jsx)(r.NY, {
                ref: a,
                className: (0, n.cn)("flex h-full w-full items-center justify-center rounded-full bg-accent text-base text-white dark:text-black [&.bg-accent]:text-headings", e),
                ...i
            }));
            c.displayName = r.NY.displayName
        },
        31478: function(e, i, a) {
            "use strict";
            a.d(i, {
                C: function() {
                    return l
                }
            });
            var t = a(3827);
            a(64090);
            var s = a(57742),
                r = a(1657);
            let n = (0, s.j)("inline-flex items-center rounded leading-none border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        outline: "border border-border/50"
                    },
                    size: {
                        default: "px-1.5 py-0.5",
                        lg: "px-2 py-1"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function l({
                className: e,
                variant: i,
                size: a = "default",
                ...s
            }) {
                return (0, t.jsx)("div", {
                    className: (0, r.cn)(n({
                        variant: i,
                        size: a
                    }), e),
                    ...s
                })
            }
        },
        85754: function(e, i, a) {
            "use strict";
            a.d(i, {
                d: function() {
                    return o
                },
                z: function() {
                    return c
                }
            });
            var t = a(3827),
                s = a(64090),
                r = a(59143),
                n = a(57742),
                l = a(1657);
            let o = (0, n.j)("inline-flex gap-2 items-center rounded-md px-4 justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
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
                c = s.forwardRef(({
                    className: e,
                    variant: i,
                    size: a,
                    asChild: s = !1,
                    ...n
                }, c) => {
                    let d = s ? r.g7 : "button";
                    return (0, t.jsx)(d, {
                        className: (0, l.cn)(o({
                            variant: i,
                            size: a,
                            className: e
                        })),
                        ref: c,
                        ...n
                    })
                });
            c.displayName = "Button"
        },
        54900: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                Checkbox: function() {
                    return o
                }
            });
            var t = a(3827),
                s = a(64090),
                r = a(86969),
                n = a(80037),
                l = a(1657);
            let o = s.forwardRef(({
                className: e,
                invert: i = !1,
                ...a
            }, s) => (0, t.jsx)(r.fC, {
                ref: s,
                className: (0, l.cn)("peer h-5 w-5 shrink-0 rounded border-[1.5px]  focus:ring-4 focus:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", !i && "border-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white", i && "border-white text-headings data-[state=checked]:border-white data-[state=checked]:bg-white", e),
                ...a,
                children: (0, t.jsx)(r.z$, {
                    className: (0, l.cn)("flex items-center justify-center text-current"),
                    children: (0, t.jsx)(n.Z, {
                        size: 15
                    })
                })
            }));
            o.displayName = r.fC.displayName
        },
        93930: function(e, i, a) {
            "use strict";
            a.d(i, {
                $F: function() {
                    return u
                },
                AW: function() {
                    return m
                },
                Ju: function() {
                    return h
                },
                Xi: function() {
                    return p
                },
                h_: function() {
                    return d
                }
            });
            var t = a(3827),
                s = a(64090),
                r = a(81100),
                n = a(37805),
                l = a(80037),
                o = a(37501),
                c = a(1657);
            let d = r.fC,
                u = r.xz;
            r.ZA, r.Uv, r.Tr, r.Ee, s.forwardRef(({
                className: e,
                inset: i,
                children: a,
                ...s
            }, l) => (0, t.jsxs)(r.fF, {
                ref: l,
                className: (0, c.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", i && "pl-8", e),
                ...s,
                children: [a, (0, t.jsx)(n.Z, {
                    className: "ml-auto h-4 w-4"
                })]
            })).displayName = r.fF.displayName, s.forwardRef(({
                className: e,
                ...i
            }, a) => (0, t.jsx)(r.tu, {
                ref: a,
                className: (0, c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2  data-[side=top]:slide-in-from-bottom-2", e),
                ...i
            })).displayName = r.tu.displayName;
            let m = s.forwardRef(({
                className: e,
                sideOffset: i = 4,
                ...a
            }, s) => (0, t.jsx)(r.VY, {
                ref: s,
                sideOffset: i,
                className: (0, c.cn)("border-popover/100 z-50 h-full min-w-[10rem] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-dropdown backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:shadow-black/10", e),
                ...a
            }));
            m.displayName = r.VY.displayName;
            let p = s.forwardRef(({
                className: e,
                inset: i,
                ...a
            }, s) => (0, t.jsx)(r.ck, {
                ref: s,
                className: (0, c.cn)("relative flex cursor-default select-none items-center rounded-md px-2.5 py-1.5 text-md text-sm outline-none transition-colors hover:bg-accent focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50", i && "pl-8", e),
                ...a
            }));
            p.displayName = r.ck.displayName, s.forwardRef(({
                className: e,
                children: i,
                checked: a,
                ...s
            }, n) => (0, t.jsxs)(r.oC, {
                ref: n,
                className: (0, c.cn)("focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
                checked: a,
                ...s,
                children: [(0, t.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0, t.jsx)(r.wU, {
                        children: (0, t.jsx)(l.Z, {
                            className: "h-4 w-4"
                        })
                    })
                }), i]
            })).displayName = r.oC.displayName, s.forwardRef(({
                className: e,
                children: i,
                ...a
            }, s) => (0, t.jsxs)(r.Rk, {
                ref: s,
                className: (0, c.cn)("focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
                ...a,
                children: [(0, t.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0, t.jsx)(r.wU, {
                        children: (0, t.jsx)(o.Z, {
                            className: "h-2 w-2 fill-current"
                        })
                    })
                }), i]
            })).displayName = r.Rk.displayName;
            let h = s.forwardRef(({
                className: e,
                inset: i,
                ...a
            }, s) => (0, t.jsx)(r.__, {
                ref: s,
                className: (0, c.cn)("flex items-center text-md font-medium text-headings", i && "pl-8", e),
                ...a
            }));
            h.displayName = r.__.displayName, s.forwardRef(({
                className: e,
                ...i
            }, a) => (0, t.jsx)(r.Z0, {
                ref: a,
                className: (0, c.cn)("-mx-1 my-1 h-px bg-slate-100", e),
                ...i
            })).displayName = r.Z0.displayName
        },
        49030: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                ScrollArea: function() {
                    return l
                },
                ScrollBar: function() {
                    return o
                }
            });
            var t = a(3827),
                s = a(64090),
                r = a(19346),
                n = a(1657);
            let l = s.forwardRef(({
                className: e,
                children: i,
                onScroll: a,
                ...s
            }, l) => (0, t.jsxs)(r.fC, {
                ref: l,
                className: (0, n.cn)("relative overflow-hidden", e),
                ...s,
                children: [(0, t.jsx)(r.l_, {
                    className: "h-full w-full [&>div]:!block",
                    onScroll: a,
                    children: i
                }), (0, t.jsx)(o, {}), (0, t.jsx)(r.Ns, {})]
            }));
            l.displayName = r.fC.displayName;
            let o = s.forwardRef(({
                className: e,
                orientation: i = "vertical",
                ...a
            }, s) => (0, t.jsx)(r.gb, {
                ref: s,
                orientation: i,
                className: (0, n.cn)("flex touch-none select-none transition-colors", "vertical" === i && "h-full w-2 border-l border-l-transparent p-[1px]", "horizontal" === i && "h-2 flex-col border-t border-t-transparent p-[1px]", e),
                ...a,
                children: (0, t.jsx)(r.q4, {
                    className: "relative flex-1 rounded-full bg-scrollbar/60 transition-colors duration-300 hover:bg-scrollbar"
                })
            }));
            o.displayName = r.gb.displayName
        },
        56368: function(e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                SidebarProvider: function() {
                    return n
                },
                useSidebar: function() {
                    return l
                }
            });
            var t = a(3827),
                s = a(64090);
            let r = (0, s.createContext)(void 0),
                n = ({
                    children: e
                }) => {
                    let [i, a] = (0, s.useState)(!1), [n, l] = (0, s.useState)(!1);
                    return (0, t.jsx)(r.Provider, {
                        value: {
                            sidebarOpen: i,
                            toggleSidebar: () => {
                                a(!i)
                            },
                            contentSidebarOpen: n,
                            toggleContentSidebar: () => {
                                l(!n)
                            }
                        },
                        children: e
                    })
                },
                l = () => {
                    let e = (0, s.useContext)(r);
                    if (void 0 === e) throw Error("useSidebar must be used within a SidebarProvider");
                    return e
                }
        },
        1657: function(e, i, a) {
            "use strict";
            a.d(i, {
                V5: function() {
                    return h
                },
                Z6: function() {
                    return x
                },
                cn: function() {
                    return d
                },
                jm: function() {
                    return m
                },
                p4: function() {
                    return s.a
                },
                x3: function() {
                    return p
                }
            });
            var t = a(33234),
                s = a.n(t),
                r = a(75504),
                n = a(51367),
                l = a(29275),
                o = a(84780),
                c = a.n(o);

            function d(...e) {
                return (0, n.m6)((0, r.W)(e))
            }
            let u = l.SIDEBAR_DATA,
                m = e => {
                    for (let i of u)
                        for (let a of i.items) {
                            if (a.url && e.startsWith(a.url) && a.shrunk) return !0;
                            if (a.sub) {
                                for (let i of a.sub)
                                    if (i.url && e.startsWith(i.url) && i.shrunk) return !0
                            }
                        }
                    return !1
                },
                p = e => {
                    for (let i of u)
                        for (let a of i.items) {
                            if (a.url && e.startsWith(a.url) && a.hiddenSidebars) return !0;
                            if (a.sub) {
                                for (let i of a.sub)
                                    if (i.url && e.startsWith(i.url) && i.hiddenSidebars) return !0
                            }
                        }
                    return !1
                },
                h = () => navigator.userAgent.toLowerCase().includes("mac"),
                x = e => c().sanitize(e)
        },
        52445: function() {}
    },
    function(e) {
        e.O(0, [3407, 6349, 5250, 9346, 1749, 8751, 1257, 371, 7668, 2971, 8069, 1744], function() {
            return e(e.s = 16234)
        }), _N_E = e.O()
    }
]);