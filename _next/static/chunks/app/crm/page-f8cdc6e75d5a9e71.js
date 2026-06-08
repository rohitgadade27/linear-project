(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9535, 7279, 2703, 7696], {
        9354: function(e, a, s) {
            Promise.resolve().then(s.bind(s, 35885))
        },
        35885: function(e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return G
                }
            });
            var r = s(3827),
                l = s(41885),
                t = s(86728),
                n = s(37455),
                i = s(85754),
                c = s(87461);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let d = (0, c.Z)("PlusCircle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M8 12h8",
                    key: "1wcyev"
                }],
                ["path", {
                    d: "M12 8v8",
                    key: "napkw2"
                }]
            ]);
            var o = s(98296),
                m = s(29910),
                g = s(27815),
                x = s(31937),
                u = s(30660),
                h = s(31478),
                p = s(1657);
            let b = e => {
                    let {
                        value: a,
                        iconBg: s,
                        color: l,
                        label: t,
                        up: n,
                        percentage: i
                    } = e;
                    return (0, r.jsxs)(g.Zb, {
                        className: (0, p.cn)("items-cente flex p-3", [l]),
                        children: [(0, r.jsx)("div", {
                            className: (0, p.cn)("me-3 flex h-11 w-11 items-center justify-center rounded-md", [s]),
                            children: (0, r.jsx)(e.icon, {})
                        }), (0, r.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, r.jsxs)("div", {
                                className: "mb-1 flex items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "text-lg leading-none",
                                    children: a
                                }), (0, r.jsxs)(h.C, {
                                    className: (0, p.cn)("ms-auto h-6 rounded-full text-[0.65rem] leading-none", n ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500 dark:bg-red-500/20"),
                                    children: [n ? (0, r.jsx)(x.Z, {
                                        className: "-ms-px me-1 w-3.5"
                                    }) : (0, r.jsx)(u.Z, {
                                        className: "-ms-px me-1 w-3.5"
                                    }), i, "%"]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "text-headings text-sm leading-none",
                                children: t
                            })]
                        })]
                    })
                },
                j = (0, c.Z)("UserPlus", [
                    ["path", {
                        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                        key: "1yyitq"
                    }],
                    ["circle", {
                        cx: "9",
                        cy: "7",
                        r: "4",
                        key: "nufk8"
                    }],
                    ["line", {
                        x1: "19",
                        x2: "19",
                        y1: "8",
                        y2: "14",
                        key: "1bvyxn"
                    }],
                    ["line", {
                        x1: "22",
                        x2: "16",
                        y1: "11",
                        y2: "11",
                        key: "1shjgl"
                    }]
                ]);
            var f = s(43274);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let y = (0, c.Z)("CalendarRange", [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2",
                    key: "1hopcy"
                }],
                ["path", {
                    d: "M16 2v4",
                    key: "4m81vk"
                }],
                ["path", {
                    d: "M3 10h18",
                    key: "8toen8"
                }],
                ["path", {
                    d: "M8 2v4",
                    key: "1cmpym"
                }],
                ["path", {
                    d: "M17 14h-6",
                    key: "bkmgh3"
                }],
                ["path", {
                    d: "M13 18H7",
                    key: "bb0bb7"
                }],
                ["path", {
                    d: "M7 14h.01",
                    key: "1qa3f1"
                }],
                ["path", {
                    d: "M17 18h.01",
                    key: "1bdyru"
                }]
            ]);
            var N = s(47367);
            let v = () => {
                let e = [{
                    value: "324",
                    icon: j,
                    iconBg: "bg-sky-500/10",
                    color: "text-sky-500",
                    label: "New Leads Today",
                    up: !1,
                    percentage: 8.07
                }, {
                    value: "98",
                    icon: f.Z,
                    iconBg: "bg-emerald-500/10",
                    color: "text-emerald-500",
                    label: "Opened Deals",
                    up: !1,
                    percentage: 5.32
                }, {
                    value: "32",
                    icon: y,
                    iconBg: "bg-cyan-500/20",
                    color: "text-cyan-500",
                    label: "Appointments",
                    up: !0,
                    percentage: 2.93
                }, {
                    value: "452",
                    icon: N.Z,
                    iconBg: "bg-red-500/10",
                    color: "text-red-500",
                    label: "Support Requests",
                    up: !0,
                    percentage: 33.47
                }];
                return (0, r.jsx)("div", {
                    className: "mb-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
                    children: e.map((e, a) => (0, r.jsx)(b, { ...e
                    }, a))
                })
            };
            var k = s(57084),
                w = s(86185),
                M = s(91774),
                $ = s(41196),
                D = s(46136);
            D.kL.register(D.uw, D.f$, D.ZL, D.u);
            let C = () => {
                let {
                    theme: e
                } = (0, M.F)(), a = {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
                    datasets: [{
                        label: "This Year",
                        data: [128, 117, 145, 180, 225, 150, 135, 100, 128, 60, 70],
                        borderRadius: 10,
                        backgroundColor: "light" === e ? `rgb(${k.DM.teal})` : `rgb(${k.DM.blue})`,
                        borderWidth: 0,
                        maxBarThickness: 10,
                        categoryPercentage: .5
                    }, {
                        label: "Last Year",
                        data: [100, 80, 180, 134, 180, 70, 225, 150, 35, 100, 120],
                        borderRadius: 10,
                        backgroundColor: "light" === e ? `rgba(${k.DM.teal}, 0.25)` : `rgba(${k.DM.blue}, 0.25)`,
                        borderWidth: 0,
                        maxBarThickness: 10,
                        categoryPercentage: .5
                    }]
                }, s = {
                    maintainAspectRatio: !1,
                    interaction: {
                        intersect: !1
                    },
                    layout: {
                        padding: {
                            left: -5
                        }
                    },
                    scales: {
                        x: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, k.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, k.t8)(e)
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, k.yW)(e)
                            },
                            ticks: { ...(0, k.t8)(e)
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, k.MS)(e)
                        }
                    }
                }, l = {
                    current: "light" === e ? `rgb(${k.DM.teal})` : `rgb(${k.DM.blue})`,
                    last: "light" === e ? `rgba(${k.DM.teal},0.3)` : `rgba(${k.DM.blue},0.3)`
                };
                return (0, r.jsxs)(g.Zb, {
                    children: [(0, r.jsxs)(g.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-teal-500/10 text-teal-500",
                            children: (0, r.jsx)(w.Z, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(g.ll, {
                            children: "Leads Generation Rate"
                        }), (0, r.jsxs)("div", {
                            className: "me-3 ms-auto flex items-center text-xs text-emerald-500 max-sm:hidden",
                            children: [(0, r.jsx)(x.Z, {
                                className: "me-1 w-4"
                            }), "6.33%"]
                        }), (0, r.jsx)(i.z, {
                            variant: "outline",
                            size: "sm",
                            className: "max-sm:hidden",
                            children: "Report"
                        })]
                    }), (0, r.jsx)(g.aY, {
                        children: (0, r.jsx)($.$Q, {
                            height: 250,
                            data: a,
                            options: s
                        })
                    }), (0, r.jsx)(g.eW, {
                        children: (0, r.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `${l.current}`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Current Year"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `${l.last}`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Previous Year"
                                })]
                            })]
                        })
                    })]
                })
            };
            var Z = s(83368);
            D.kL.register(D.uw, D.f$, D.ZL, D.u, D.Gu);
            let _ = () => {
                let {
                    theme: e
                } = (0, M.F)(), a = {
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15", "16", "17", "18"],
                    datasets: [{
                        label: "Receieved",
                        data: [109, 106, 105, 106, 108, 109, 106, 109, 107, 105, 105, 105, 105, 108, 105, 107, 106, 109, 107],
                        fill: !0,
                        backgroundColor: e => (0, k.sG)(e, `rgbA(${k.DM.green}, 0.25)`, `rgba(${k.DM.green}, 0)`),
                        borderColor: `rgb(${k.DM.green})`,
                        borderWidth: 1.25,
                        tension: .4,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${k.DM.green})`,
                        pointBorderColor: `rgb(${k.DM.green})`,
                        pointHoverBorderColor: `rgb(${k.DM.green})`,
                        pointHoverBackgroundColor: `rgb(${k.DM.green})`
                    }, {
                        label: "Converted",
                        data: [112, 113, 112, 111, 111, 113, 113, 110, 113, 112, 113, 113, 112, 114, 111, 113, 115, 115, 111],
                        fill: !0,
                        backgroundColor: e => (0, k.sG)(e, `rgba(${k.DM.orange}, 0.2)`, `rgba(${k.DM.orange}, 0)`),
                        borderColor: `rgb(${k.DM.orange})`,
                        borderWidth: 1.25,
                        tension: .4,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${k.DM.orange})`,
                        pointBorderColor: `rgb(${k.DM.orange})`,
                        pointHoverBorderColor: `rgb(${k.DM.orange})`,
                        pointHoverBackgroundColor: `rgb(${k.DM.orange})`
                    }]
                }, s = {
                    maintainAspectRatio: !1,
                    interaction: {
                        intersect: !1
                    },
                    layout: {
                        padding: {
                            left: -5
                        }
                    },
                    scales: {
                        x: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, k.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, k.t8)(e),
                                maxTicksLimit: 12
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, k.yW)(e)
                            },
                            min: 100,
                            max: 120,
                            ticks: { ...(0, k.t8)(e),
                                maxTicksLimit: 6,
                                callback: e => e + "K"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, k.MS)(e)
                        }
                    }
                };
                return (0, r.jsxs)(g.Zb, {
                    children: [(0, r.jsxs)(g.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-orange-500/10 text-orange-500",
                            children: (0, r.jsx)(Z.Z, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(g.ll, {
                            children: "Converted Leads"
                        }), (0, r.jsxs)("div", {
                            className: "me-3 ms-auto flex items-center text-xs text-emerald-500 max-sm:hidden",
                            children: [(0, r.jsx)(u.Z, {
                                className: "me-1 w-4"
                            }), "2.87%"]
                        }), (0, r.jsx)(i.z, {
                            variant: "outline",
                            size: "sm",
                            className: "max-sm:hidden",
                            children: "Report"
                        })]
                    }), (0, r.jsx)(g.aY, {
                        children: (0, r.jsx)($.x1, {
                            height: 250,
                            data: a,
                            options: s
                        })
                    }), (0, r.jsx)(g.eW, {
                        children: (0, r.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2.5 w-2.5 rounded-full",
                                    style: {
                                        background: `rgb(${k.DM.orange})`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Recived"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2.5 w-2.5 rounded-full",
                                    style: {
                                        background: `rgb(${k.DM.green})`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Converted"
                                })]
                            })]
                        })
                    })]
                })
            };
            var z = s(12178),
                R = s(75879),
                W = s(28814);
            let B = () => {
                    let e = [{
                        img: 11,
                        name: "John Smith",
                        total_sales: 12e5,
                        deals_closed: 45,
                        performance: 10.5
                    }, {
                        img: 12,
                        name: "Jane Johnson",
                        total_sales: 95e4,
                        deals_closed: 50,
                        performance: 7.2
                    }, {
                        img: 13,
                        name: "Michael Williams",
                        total_sales: 85e4,
                        deals_closed: 38,
                        performance: 8.1
                    }, {
                        img: 14,
                        name: "Emily Davis",
                        total_sales: 78e4,
                        deals_closed: 42,
                        performance: 9.5
                    }, {
                        img: 15,
                        name: "David Brown",
                        total_sales: 72e4,
                        deals_closed: 40,
                        performance: 8.9
                    }, {
                        img: 16,
                        name: "Mary Miller",
                        total_sales: 65e4,
                        deals_closed: 35,
                        performance: 7.8
                    }, {
                        img: 10,
                        name: "Robert Wilson",
                        total_sales: 62e4,
                        deals_closed: 30,
                        performance: 6.5
                    }];
                    return (0, r.jsxs)(g.Zb, {
                        className: "mt-2",
                        children: [(0, r.jsxs)(g.Ol, {
                            className: "mb-3 flex flex-row items-center",
                            children: [(0, r.jsx)("i", {
                                className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-orange-500/10 text-orange-500",
                                children: (0, r.jsx)(R.Z, {
                                    className: "w-5"
                                })
                            }), (0, r.jsx)(g.ll, {
                                children: "Top Rainmakers"
                            }), (0, r.jsx)(i.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "ms-auto",
                                children: (0, r.jsx)(W.Z, {
                                    className: "w-4"
                                })
                            }), (0, r.jsx)(i.z, {
                                variant: "outline",
                                size: "sm",
                                className: "max-sm:hidden",
                                children: "Report"
                            })]
                        }), (0, r.jsx)(g.aY, {
                            children: e.map((a, s) => (0, r.jsxs)("div", {
                                className: (0, p.cn)("flex items-start", s !== e.length - 1 && "mb-5"),
                                children: [(0, r.jsx)(z.qE, {
                                    className: "me-3 rounded-full border border-orange-500/30 p-0.5",
                                    children: (0, r.jsx)(z.F$, {
                                        className: "rounded-full",
                                        width: "40",
                                        src: `/img/contacts/${a.img}.jpg`,
                                        alt: a.name
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-headings mb-1 leading-tight",
                                        children: a.name
                                    }), (0, r.jsxs)("div", {
                                        className: "text-muted flex items-center gap-1",
                                        children: [(0, r.jsxs)(h.C, {
                                            variant: "outline",
                                            children: ["Deals Closed: ", a.deals_closed]
                                        }), (0, r.jsxs)(h.C, {
                                            variant: "outline",
                                            children: ["Performance: ", a.performance]
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "text-headings",
                                    children: ["$", a.total_sales]
                                })]
                            }, s))
                        })]
                    })
                },
                S = (0, c.Z)("Shrink", [
                    ["path", {
                        d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8",
                        key: "17vawe"
                    }],
                    ["path", {
                        d: "M9 19.8V15m0 0H4.2M9 15l-6 6",
                        key: "chjx8e"
                    }],
                    ["path", {
                        d: "M15 4.2V9m0 0h4.8M15 9l6-6",
                        key: "lav6yq"
                    }],
                    ["path", {
                        d: "M9 4.2V9m0 0H4.2M9 9 3 3",
                        key: "1pxi2q"
                    }]
                ]);
            var L = s(88219);
            D.kL.register(D.uw, D.f$, D.od, D.jn, D.u, D.Gu);
            let A = () => {
                let {
                    theme: e
                } = (0, M.F)(), a = [{
                    source: "Advertisements",
                    percentage: 58,
                    change: 23.1,
                    className: "bg-emerald-500",
                    up: !1
                }, {
                    source: "Cold Calls",
                    percentage: 41,
                    change: 1.2,
                    className: "bg-purple-500",
                    up: !0
                }, {
                    source: "Custom Referrals",
                    percentage: 30,
                    change: 43.2,
                    className: "bg-blue-500",
                    up: !1
                }, {
                    source: "Employee Referrals",
                    percentage: 21,
                    change: 9.83,
                    className: "bg-red-500",
                    up: !1
                }, {
                    source: "Others",
                    percentage: 9,
                    change: 21.43,
                    className: "bg-amber-500",
                    up: !0
                }], s = {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                    datasets: [{
                        label: "Cold Calls",
                        data: [166, 177, 166, 178, 168, 178, 161, 170, 168, 177, 176, 167, 161, 161, 178, 174, 178, 176, 164, 176],
                        fill: !0,
                        backgroundColor: "transparent",
                        borderColor: `rgb(${k.DM.purple})`,
                        borderWidth: 1.5,
                        tension: .4,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${k.DM.purple})`,
                        pointBorderColor: `rgb(${k.DM.purple})`,
                        pointHoverBorderColor: `rgb(${k.DM.purple})`,
                        pointHoverBackgroundColor: `rgb(${k.DM.purple})`
                    }, {
                        label: "Custom Referrals",
                        data: [138, 135, 138, 144, 144, 141, 147, 143, 148, 138, 142, 132, 146, 134, 141, 140, 136, 148, 135, 149],
                        fill: !0,
                        backgroundColor: "transparent",
                        borderColor: `rgb(${k.DM.blue})`,
                        borderWidth: 1.5,
                        tension: .4,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${k.DM.blue})`,
                        pointBorderColor: `rgb(${k.DM.blue})`,
                        pointHoverBorderColor: `rgb(${k.DM.blue})`,
                        pointHoverBackgroundColor: `rgb(${k.DM.blue})`
                    }, {
                        label: "Employee Referrals",
                        data: [90, 84, 98, 87, 85, 82, 82, 87, 92, 83, 89, 89, 83, 96, 95, 94, 96, 97, 91, 93],
                        fill: !0,
                        backgroundColor: "transparent",
                        borderColor: `rgb(${k.DM.red})`,
                        borderWidth: 1.5,
                        tension: .4,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${k.DM.red})`,
                        pointBorderColor: `rgb(${k.DM.red})`,
                        pointHoverBorderColor: `rgb(${k.DM.red})`,
                        pointHoverBackgroundColor: `rgb(${k.DM.red})`
                    }, {
                        label: "Others",
                        data: [53, 54, 58, 59, 52, 59, 51, 56, 59, 59, 59, 58, 52, 54, 57, 53, 53, 55, 52, 58],
                        fill: !0,
                        backgroundColor: "transparent",
                        borderColor: `rgb(${k.DM.orange})`,
                        borderWidth: 1.5,
                        tension: .4,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${k.DM.orange})`,
                        pointBorderColor: `rgb(${k.DM.orange})`,
                        pointHoverBorderColor: `rgb(${k.DM.orange})`,
                        pointHoverBackgroundColor: `rgb(${k.DM.orange})`
                    }]
                }, l = {
                    maintainAspectRatio: !1,
                    interaction: {
                        intersect: !1
                    },
                    layout: {
                        padding: {
                            left: -5
                        }
                    },
                    scales: {
                        x: {
                            border: {
                                display: !1
                            },
                            grid: {
                                display: !1,
                                drawBorder: !1,
                                drawOnChartArea: !1,
                                drawTicks: !1
                            },
                            ticks: { ...(0, k.t8)(e),
                                maxTicksLimit: 8
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, k.yW)(e)
                            },
                            min: 0,
                            max: 200,
                            ticks: { ...(0, k.t8)(e),
                                maxTicksLimit: 10,
                                callback: e => e + "K"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, k.MS)(e)
                        }
                    }
                };
                return (0, r.jsxs)(g.Zb, {
                    className: "mt-2",
                    children: [(0, r.jsxs)(g.Ol, {
                        className: "mb-3 flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-red-500/10 text-red-500",
                            children: (0, r.jsx)(S, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(g.ll, {
                            children: "Leads Sources"
                        }), (0, r.jsx)(i.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, r.jsx)(W.Z, {
                                className: "w-4"
                            })
                        }), (0, r.jsx)(i.z, {
                            variant: "outline",
                            size: "sm",
                            className: "max-sm:hidden",
                            children: "Report"
                        })]
                    }), (0, r.jsxs)(g.aY, {
                        children: [(0, r.jsx)("div", {
                            className: "mb-7",
                            children: (0, r.jsx)($.x1, {
                                height: 250,
                                options: l,
                                data: s
                            })
                        }), a.map((e, s) => (0, r.jsxs)("div", {
                            className: "flex items-start",
                            children: [(0, r.jsx)("i", {
                                className: (0, p.cn)("me-3 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full", [e.className])
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-1 flex-wrap items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "flex-1 text-headings",
                                    children: e.source
                                }), (0, r.jsxs)("div", {
                                    className: (0, p.cn)("me-3 hidden items-center text-xs sm:flex", e.up ? "text-emerald-500" : "text-red-500"),
                                    children: [e.change, "%", e.up ? (0, r.jsx)(x.Z, {
                                        className: "ms-2 w-4  text-emerald-500"
                                    }) : (0, r.jsx)(u.Z, {
                                        className: "ms-2 w-4"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "w-12 text-end text-headings",
                                    children: [e.percentage, "%"]
                                }), (0, r.jsx)(L.Progress, {
                                    className: (0, p.cn)("mb-2 mt-3 h-0.5", s !== a.length - 1 && "mb-3"),
                                    value: e.percentage,
                                    color: e.className
                                })]
                            })]
                        }, s))]
                    })]
                })
            };
            var q = s(77618),
                T = s(20703);
            let O = () => {
                    let e = [{
                        img: "us",
                        country: "United States of America",
                        leads: 6732,
                        up: !0,
                        percentage: 44,
                        change: 4.58
                    }, {
                        img: "japan",
                        country: "Japan",
                        leads: 4532,
                        up: !0,
                        percentage: 32,
                        change: .43
                    }, {
                        img: "england",
                        country: "United Kingdom",
                        leads: 4487,
                        up: !1,
                        percentage: 24,
                        change: 5.43
                    }, {
                        img: "china",
                        country: "China",
                        leads: 3982,
                        up: !0,
                        percentage: 19,
                        change: 21.54
                    }, {
                        img: "germany",
                        country: "Germany",
                        leads: 3241,
                        up: !1,
                        percentage: 16,
                        change: 10.32
                    }, {
                        img: "france",
                        country: "France",
                        leads: 2985,
                        up: !0,
                        percentage: 9,
                        change: .54
                    }];
                    return (0, r.jsxs)(g.Zb, {
                        className: "mt-2",
                        children: [(0, r.jsxs)(g.Ol, {
                            className: "mb-3 flex flex-row items-center",
                            children: [(0, r.jsx)("i", {
                                className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-cyan-500/10 text-cyan-500",
                                children: (0, r.jsx)(q.Z, {
                                    className: "w-5"
                                })
                            }), (0, r.jsx)(g.ll, {
                                children: "Leads Distribution by Country"
                            }), (0, r.jsx)(i.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "ms-auto",
                                children: (0, r.jsx)(W.Z, {
                                    className: "w-4"
                                })
                            }), (0, r.jsx)(i.z, {
                                variant: "outline",
                                size: "sm",
                                className: "max-sm:hidden",
                                children: "Report"
                            })]
                        }), (0, r.jsx)(g.aY, {
                            children: e.map((a, s) => (0, r.jsxs)("div", {
                                className: "flex items-start",
                                children: [(0, r.jsx)(T.default, {
                                    src: `/img/flags/${a.img}.svg`,
                                    width: 50,
                                    height: 50,
                                    alt: a.country,
                                    className: "me-4 h-6 w-6 shrink-0 rounded-full"
                                }), (0, r.jsxs)("div", {
                                    className: (0, p.cn)("flex flex-1 items-center border-border", s !== e.length - 1 && "mb-2 border-b pb-2.5"),
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex-1",
                                        children: [(0, r.jsx)("div", {
                                            className: "mb-1 text-headings",
                                            children: a.country
                                        }), (0, r.jsxs)("div", {
                                            className: "text-xs text-muted",
                                            children: [a.leads, " Leads"]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: (0, p.cn)("me-3 hidden items-center text-xs sm:flex", a.up ? "text-emerald-500" : "text-red-500"),
                                        children: [a.change, "%", a.up ? (0, r.jsx)(x.Z, {
                                            className: "ms-2 w-4  text-emerald-500"
                                        }) : (0, r.jsx)(u.Z, {
                                            className: "ms-2 w-4"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "w-12 text-end text-lg text-headings",
                                        children: [a.percentage, "%"]
                                    })]
                                })]
                            }, s))
                        })]
                    })
                },
                H = (0, c.Z)("Factory", [
                    ["path", {
                        d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
                        key: "159hny"
                    }],
                    ["path", {
                        d: "M17 18h1",
                        key: "uldtlt"
                    }],
                    ["path", {
                        d: "M12 18h1",
                        key: "s9uhes"
                    }],
                    ["path", {
                        d: "M7 18h1",
                        key: "1neino"
                    }]
                ]);
            D.kL.register(D.qi, D.u);
            let E = () => {
                let {
                    theme: e
                } = (0, M.F)(), a = {
                    labels: ["Software and Technology", "Energy", "Project Development", "Consultant", "Others"],
                    datasets: [{
                        data: [23981, 16342, 9736, 7632, 4535],
                        backgroundColor: [`rgb(${k.DM.blue})`, `rgb(${k.DM.teal})`, `rgb(${k.DM.purple})`, `rgb(${k.DM.cyan})`, `rgb(${k.DM.orange})`],
                        borderWidth: 3,
                        borderColor: "light" === e ? `rgb(${k.DM.border.light})` : `rgb(${k.DM.border.dark})`,
                        hoverOffset: 1,
                        hoverBorderWidth: 0,
                        borderRadius: 5
                    }]
                }, s = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    cutout: 80,
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, k.MS)(e)
                        }
                    }
                }, l = [{
                    source: "Software and Technology",
                    percentage: 43,
                    change: 52.6,
                    className: "bg-sky-500",
                    leads: 23981,
                    up: !0
                }, {
                    source: "Energy",
                    percentage: 37,
                    change: 31.3,
                    className: "bg-teal-500",
                    leads: 16342,
                    up: !0
                }, {
                    source: "Project Development",
                    percentage: 32,
                    change: 10.5,
                    className: "bg-purple-500",
                    leads: 9736,
                    up: !1
                }, {
                    source: "Consultant",
                    percentage: 19,
                    change: 17.2,
                    className: "bg-cyan-500",
                    leads: 7632,
                    up: !1
                }, {
                    source: "Miscellaneous",
                    percentage: 12,
                    change: 23.1,
                    className: "bg-amber-500",
                    leads: 4535,
                    up: !1
                }];
                return (0, r.jsxs)(g.Zb, {
                    className: "mt-2",
                    children: [(0, r.jsxs)(g.Ol, {
                        className: "mb-1 flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-blue-500/10 text-blue-500",
                            children: (0, r.jsx)(H, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(g.ll, {
                            children: "Leads by Industry"
                        }), (0, r.jsx)(i.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, r.jsx)(W.Z, {
                                className: "w-4"
                            })
                        }), (0, r.jsx)(i.z, {
                            variant: "outline",
                            size: "sm",
                            className: "max-sm:hidden",
                            children: "Report"
                        })]
                    }), (0, r.jsxs)(g.aY, {
                        children: [(0, r.jsx)("div", {
                            className: "mb-5",
                            children: (0, r.jsx)($.$I, {
                                height: 250,
                                data: a,
                                options: s
                            })
                        }), l.map((e, a) => (0, r.jsxs)("div", {
                            className: "flex items-start",
                            children: [(0, r.jsx)("i", {
                                className: (0, p.cn)("me-3 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full", [e.className])
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-1 flex-wrap items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "flex-1 text-headings",
                                    children: e.source
                                }), (0, r.jsxs)("div", {
                                    className: (0, p.cn)("me-3 hidden items-center text-xs sm:flex", e.up ? "text-emerald-500" : "text-red-500"),
                                    children: [e.change, "%", e.up ? (0, r.jsx)(x.Z, {
                                        className: "ms-2 w-4  text-emerald-500"
                                    }) : (0, r.jsx)(u.Z, {
                                        className: "ms-2 w-4"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "w-12 text-end text-headings",
                                    children: [e.percentage, "%"]
                                }), (0, r.jsx)(L.Progress, {
                                    className: (0, p.cn)("mb-2 mt-3 h-0.5", a !== l.length - 1 && "mb-3"),
                                    value: e.percentage,
                                    color: e.className
                                })]
                            })]
                        }, a))]
                    })]
                })
            };
            var Y = s(12409);
            let F = () => (0, r.jsxs)(g.Zb, {
                className: "mt-2",
                children: [(0, r.jsxs)(g.Ol, {
                    className: "mb-1 flex flex-row items-center",
                    children: [(0, r.jsx)("i", {
                        className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-purple-500/10 text-purple-500",
                        children: (0, r.jsx)(Y.Z, {
                            className: "w-5"
                        })
                    }), (0, r.jsx)(g.ll, {
                        children: "Opportunities"
                    }), (0, r.jsx)(i.z, {
                        variant: "ghost",
                        size: "icon",
                        className: "ms-auto",
                        children: (0, r.jsx)(W.Z, {
                            className: "w-4"
                        })
                    }), (0, r.jsx)(i.z, {
                        variant: "outline",
                        size: "sm",
                        className: "max-sm:hidden",
                        children: "Report"
                    })]
                }), (0, r.jsxs)(g.aY, {
                    children: [(0, r.jsxs)("div", {
                        className: "text-muted flex h-8 items-center justify-between rounded px-3 text-xs",
                        children: [(0, r.jsx)("div", {
                            className: "flex-1",
                            children: "Employee Name"
                        }), (0, r.jsx)("div", {
                            className: "hidden w-20 text-end sm:block",
                            children: "Qualified"
                        }), (0, r.jsx)("div", {
                            className: "w-10 shrink-0 text-end sm:w-20",
                            children: "Won"
                        }), (0, r.jsx)("div", {
                            className: "w-20 shrink-0 text-end sm:ms-2",
                            children: "Value"
                        })]
                    }), [{
                        employee_name: "John Doe",
                        img: 1,
                        qualified: 45,
                        won: 62,
                        total_amount: 657321
                    }, {
                        employee_name: "Jane Smith",
                        img: 2,
                        qualified: 36,
                        won: 27,
                        total_amount: 576099
                    }, {
                        employee_name: "Michael Johnson",
                        img: 3,
                        qualified: 59,
                        won: 25,
                        total_amount: 498567
                    }, {
                        employee_name: "Emily Brown",
                        img: 4,
                        qualified: 68,
                        won: 45,
                        total_amount: 310393
                    }, {
                        employee_name: "David Lee",
                        img: 5,
                        qualified: 29,
                        won: 54,
                        total_amount: 125478
                    }, {
                        employee_name: "Sarah Wilson",
                        img: 6,
                        qualified: 64,
                        won: 63,
                        total_amount: 98563
                    }, {
                        employee_name: "Alex Martinez",
                        img: 7,
                        qualified: 48,
                        won: 22,
                        total_amount: 83476
                    }, {
                        employee_name: "Jessica Taylor",
                        img: 8,
                        qualified: 20,
                        won: 45,
                        total_amount: 80986
                    }, {
                        employee_name: "William Anderson",
                        img: 9,
                        qualified: 56,
                        won: 37,
                        total_amount: 78965
                    }, {
                        employee_name: "Olivia Harris",
                        img: 10,
                        qualified: 43,
                        won: 40,
                        total_amount: 50093
                    }].map((e, a) => (0, r.jsxs)("div", {
                        className: (0, p.cn)("flex h-12 items-center justify-between rounded px-3", a % 2 == 0 && "bg-accent/15"),
                        children: [(0, r.jsx)("div", {
                            className: "shrink-0",
                            children: (0, r.jsx)(T.default, {
                                width: 80,
                                height: 80,
                                className: "me-3 h-8 w-8 rounded-full",
                                src: `/img/contacts/${e.img}.jpg`,
                                alt: e.employee_name
                            })
                        }), (0, r.jsx)("div", {
                            className: "flex-1 truncate",
                            children: e.employee_name
                        }), (0, r.jsx)("div", {
                            className: "hidden w-20 text-end sm:block",
                            children: e.qualified
                        }), (0, r.jsx)("div", {
                            className: "w-10 shrink-0 text-end sm:w-20",
                            children: e.won
                        }), (0, r.jsxs)("div", {
                            className: "w-20 shrink-0 text-end sm:ms-2",
                            children: ["$", e.total_amount.toLocaleString()]
                        })]
                    }, a))]
                })]
            });
            var P = s(32805);
            D.kL.register(D.uw, D.f$, D.ZL, D.u);
            let V = () => {
                    let {
                        theme: e
                    } = (0, M.F)(), a = {
                        labels: ["Email", "Phone", "Twitter", "Facebook", "Web", "In Person", "Mobile App"],
                        datasets: [{
                            label: "Sessions",
                            data: [83, 44, 32, 53, 62, 23, 42],
                            backgroundColor: [`rgb(${k.DM.green})`, `rgb(${k.DM.purple})`, `rgb(${k.DM.cyan})`, `rgb(${k.DM.blue})`, `rgb(${k.DM.orange})`, `rgb(${k.DM.red})`, `rgb(${k.DM.teal})`],
                            barThickness: 3,
                            borderWidth: 0,
                            borderRadius: 10
                        }]
                    }, s = {
                        maintainAspectRatio: !1,
                        layout: {
                            padding: {
                                left: -5
                            }
                        },
                        indexAxis: "y",
                        plugins: {
                            tooltip: { ...(0, k.MS)(e),
                                callbacks: {
                                    label: e => e.formattedValue + "K"
                                }
                            }
                        },
                        scales: {
                            x: {
                                border: {
                                    display: !1
                                },
                                grid: { ...(0, k.yW)(e)
                                },
                                ticks: { ...(0, k.t8)(e),
                                    callback: e => e
                                }
                            },
                            y: {
                                border: {
                                    display: !1
                                },
                                grid: { ...(0, k.yW)(e)
                                },
                                ticks: { ...(0, k.t8)(e)
                                }
                            }
                        }
                    };
                    return (0, r.jsxs)(g.Zb, {
                        className: "mt-2",
                        children: [(0, r.jsxs)(g.Ol, {
                            className: "-mb-3 flex flex-row items-center",
                            children: [(0, r.jsx)("i", {
                                className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-pink-500/10 text-pink-500",
                                children: (0, r.jsx)(P.Z, {
                                    className: "w-5"
                                })
                            }), (0, r.jsx)(g.ll, {
                                children: "Resolution by Channel"
                            }), (0, r.jsx)(i.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "ms-auto",
                                children: (0, r.jsx)(W.Z, {
                                    className: "w-4"
                                })
                            }), (0, r.jsx)(i.z, {
                                variant: "outline",
                                size: "sm",
                                className: "max-sm:hidden",
                                children: "Report"
                            })]
                        }), (0, r.jsx)(g.aY, {
                            children: (0, r.jsx)($.$Q, {
                                height: 250,
                                data: a,
                                options: s
                            })
                        })]
                    })
                },
                J = (0, c.Z)("PhoneOutgoing", [
                    ["polyline", {
                        points: "22 8 22 2 16 2",
                        key: "1g204g"
                    }],
                    ["line", {
                        x1: "16",
                        x2: "22",
                        y1: "8",
                        y2: "2",
                        key: "1ggias"
                    }],
                    ["path", {
                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                        key: "foiqr5"
                    }]
                ]);
            D.kL.register(D.uw, D.f$, D.ZL, D.u);
            let I = () => {
                let {
                    theme: e
                } = (0, M.F)(), a = {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{
                        label: "This Year",
                        data: [128, 117, 145, 180, 225, 100, 89],
                        barThickness: 7,
                        borderRadius: 10,
                        backgroundColor: "light" === e ? `rgb(${k.DM.teal})` : `rgb(${k.DM.blue})`,
                        borderWidth: 0
                    }, {
                        label: "Last Year",
                        data: [100, 80, 180, 134, 180, 90, 65],
                        barThickness: 7,
                        borderRadius: 10,
                        backgroundColor: "light" === e ? `rgba(${k.DM.teal}, 0.25)` : `rgba(${k.DM.blue}, 0.25)`,
                        borderWidth: 0
                    }]
                }, s = {
                    maintainAspectRatio: !1,
                    layout: {
                        padding: {
                            left: -5
                        }
                    },
                    plugins: {
                        tooltip: { ...(0, k.MS)(e),
                            callbacks: {
                                label: e => e.formattedValue + "K"
                            }
                        }
                    },
                    scales: {
                        x: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, k.yW)(e)
                            },
                            ticks: { ...(0, k.t8)(e),
                                callback: e => e
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, k.yW)(e)
                            },
                            ticks: { ...(0, k.t8)(e)
                            }
                        }
                    }
                }, l = {
                    current: "light" === e ? `rgb(${k.DM.teal})` : `rgb(${k.DM.blue})`,
                    last: "light" === e ? `rgba(${k.DM.teal},0.3)` : `rgba(${k.DM.blue},0.3)`
                };
                return (0, r.jsxs)(g.Zb, {
                    className: "mt-2",
                    children: [(0, r.jsxs)(g.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-teal-500/10 text-teal-500",
                            children: (0, r.jsx)(J, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(g.ll, {
                            children: "Outbound Calls"
                        }), (0, r.jsx)(i.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, r.jsx)(W.Z, {
                                className: "w-4"
                            })
                        }), (0, r.jsx)(i.z, {
                            variant: "outline",
                            size: "sm",
                            className: "max-sm:hidden",
                            children: "Report"
                        })]
                    }), (0, r.jsx)(g.aY, {
                        children: (0, r.jsx)($.$Q, {
                            height: 250,
                            data: a,
                            options: s
                        })
                    }), (0, r.jsx)(g.eW, {
                        children: (0, r.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `${l.current}`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Current Year"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `${l.last}`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Previous Year"
                                })]
                            })]
                        })
                    })]
                })
            };
            var G = () => (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(n.h, {
                    title: "CRM",
                    children: [(0, r.jsx)("i", {
                        className: "ms-auto"
                    }), (0, r.jsx)(t.DateSwitch, {
                        className: "hidden sm:block"
                    }), (0, r.jsxs)("div", {
                        className: "me-1 ms-5 flex items-center gap-1",
                        children: [(0, r.jsx)(i.z, {
                            variant: "highlight",
                            size: "icon",
                            children: (0, r.jsx)(d, {
                                className: "h-4.5 w-4.5"
                            })
                        }), (0, r.jsx)(i.z, {
                            variant: "highlight",
                            size: "icon",
                            children: (0, r.jsx)(o.Z, {
                                className: "h-4.5 w-4.5"
                            })
                        }), (0, r.jsx)(i.z, {
                            variant: "highlight",
                            size: "icon",
                            children: (0, r.jsx)(m.Z, {
                                className: "h-4.5 w-4.5"
                            })
                        })]
                    })]
                }), (0, r.jsxs)(l.Content, {
                    children: [(0, r.jsx)(v, {}), (0, r.jsxs)("div", {
                        className: "grid grid-cols-1 gap-2 lg:grid-cols-2",
                        children: [(0, r.jsx)(C, {}), (0, r.jsx)(_, {})]
                    }), (0, r.jsxs)("div", {
                        className: "columns-1 gap-2 lg:columns-2 2xl:columns-3",
                        children: [(0, r.jsx)(B, {}), (0, r.jsx)(A, {}), (0, r.jsx)(F, {}), (0, r.jsx)(E, {}), (0, r.jsx)(O, {}), (0, r.jsx)(V, {}), (0, r.jsx)(I, {})]
                    })]
                })]
            })
        },
        37455: function(e, a, s) {
            "use strict";
            s.d(a, {
                h: function() {
                    return t
                }
            });
            var r = s(3827),
                l = s(25825);
            let t = ({
                children: e,
                title: a
            }) => (0, r.jsxs)("header", {
                className: "z-5 flex h-14 w-full shrink-0 items-center px-3 sm:h-16 print:hidden",
                children: [(0, r.jsx)(l.SidebarToggle, {
                    className: "me-3 hidden sm:flex xl:hidden"
                }), a && (0, r.jsx)("h2", {
                    className: "me-8 font-medium leading-none text-headings",
                    children: a
                }), e]
            })
        },
        31478: function(e, a, s) {
            "use strict";
            s.d(a, {
                C: function() {
                    return i
                }
            });
            var r = s(3827);
            s(64090);
            var l = s(57742),
                t = s(1657);
            let n = (0, l.j)("inline-flex items-center rounded leading-none border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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

            function i({
                className: e,
                variant: a,
                size: s = "default",
                ...l
            }) {
                return (0, r.jsx)("div", {
                    className: (0, t.cn)(n({
                        variant: a,
                        size: s
                    }), e),
                    ...l
                })
            }
        },
        43274: function(e, a, s) {
            "use strict";
            s.d(a, {
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
            let r = (0, s(87461).Z)("HeartHandshake", [
                ["path", {
                    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
                    key: "c3ymky"
                }],
                ["path", {
                    d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
                    key: "12sd6o"
                }],
                ["path", {
                    d: "m18 15-2-2",
                    key: "60u0ii"
                }],
                ["path", {
                    d: "m15 18-2-2",
                    key: "6p76be"
                }]
            ])
        },
        47367: function(e, a, s) {
            "use strict";
            s.d(a, {
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
            let r = (0, s(87461).Z)("LifeBuoy", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "m4.93 4.93 4.24 4.24",
                    key: "1ymg45"
                }],
                ["path", {
                    d: "m14.83 9.17 4.24-4.24",
                    key: "1cb5xl"
                }],
                ["path", {
                    d: "m14.83 14.83 4.24 4.24",
                    key: "q42g0n"
                }],
                ["path", {
                    d: "m9.17 14.83-4.24 4.24",
                    key: "bqpfvv"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4",
                    key: "4exip2"
                }]
            ])
        },
        29910: function(e, a, s) {
            "use strict";
            s.d(a, {
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
            let r = (0, s(87461).Z)("Settings", [
                ["path", {
                    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
                    key: "1qme2f"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ])
        },
        32805: function(e, a, s) {
            "use strict";
            s.d(a, {
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
            let r = (0, s(87461).Z)("Share2", [
                ["circle", {
                    cx: "18",
                    cy: "5",
                    r: "3",
                    key: "gq8acd"
                }],
                ["circle", {
                    cx: "6",
                    cy: "12",
                    r: "3",
                    key: "w7nqdw"
                }],
                ["circle", {
                    cx: "18",
                    cy: "19",
                    r: "3",
                    key: "1xt0gg"
                }],
                ["line", {
                    x1: "8.59",
                    x2: "15.42",
                    y1: "13.51",
                    y2: "17.49",
                    key: "47mynk"
                }],
                ["line", {
                    x1: "15.41",
                    x2: "8.59",
                    y1: "6.51",
                    y2: "10.49",
                    key: "1n3mei"
                }]
            ])
        },
        75879: function(e, a, s) {
            "use strict";
            s.d(a, {
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
            let r = (0, s(87461).Z)("Star", [
                ["polygon", {
                    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
                    key: "8f66p6"
                }]
            ])
        },
        12178: function(e, a, s) {
            "use strict";
            s.d(a, {
                Ee: function() {
                    return j
                },
                F$: function() {
                    return h
                },
                NY: function() {
                    return f
                },
                fC: function() {
                    return b
                },
                qE: function() {
                    return u
                }
            });
            var r = s(14749),
                l = s(64090),
                t = s(84104),
                n = s(39830),
                i = s(32618),
                c = s(29586);
            let d = "Avatar",
                [o, m] = (0, t.b)(d),
                [g, x] = o(d),
                u = (0, l.forwardRef)((e, a) => {
                    let {
                        __scopeAvatar: s,
                        ...t
                    } = e, [n, i] = (0, l.useState)("idle");
                    return (0, l.createElement)(g, {
                        scope: s,
                        imageLoadingStatus: n,
                        onImageLoadingStatusChange: i
                    }, (0, l.createElement)(c.WV.span, (0, r.Z)({}, t, {
                        ref: a
                    })))
                }),
                h = (0, l.forwardRef)((e, a) => {
                    let {
                        __scopeAvatar: s,
                        src: t,
                        onLoadingStatusChange: d = () => {},
                        ...o
                    } = e, m = x("AvatarImage", s), g = function(e) {
                        let [a, s] = (0, l.useState)("idle");
                        return (0, i.b)(() => {
                            if (!e) {
                                s("error");
                                return
                            }
                            let a = !0,
                                r = new window.Image,
                                l = e => () => {
                                    a && s(e)
                                };
                            return s("loading"), r.onload = l("loaded"), r.onerror = l("error"), r.src = e, () => {
                                a = !1
                            }
                        }, [e]), a
                    }(t), u = (0, n.W)(e => {
                        d(e), m.onImageLoadingStatusChange(e)
                    });
                    return (0, i.b)(() => {
                        "idle" !== g && u(g)
                    }, [g, u]), "loaded" === g ? (0, l.createElement)(c.WV.img, (0, r.Z)({}, o, {
                        ref: a,
                        src: t
                    })) : null
                }),
                p = (0, l.forwardRef)((e, a) => {
                    let {
                        __scopeAvatar: s,
                        delayMs: t,
                        ...n
                    } = e, i = x("AvatarFallback", s), [d, o] = (0, l.useState)(void 0 === t);
                    return (0, l.useEffect)(() => {
                        if (void 0 !== t) {
                            let e = window.setTimeout(() => o(!0), t);
                            return () => window.clearTimeout(e)
                        }
                    }, [t]), d && "loaded" !== i.imageLoadingStatus ? (0, l.createElement)(c.WV.span, (0, r.Z)({}, n, {
                        ref: a
                    })) : null
                }),
                b = u,
                j = h,
                f = p
        }
    },
    function(e) {
        e.O(0, [7674, 1936, 3407, 6349, 9346, 1749, 8751, 1257, 6436, 1343, 5845, 5955, 2971, 8069, 1744], function() {
            return e(e.s = 9354)
        }), _N_E = e.O()
    }
]);