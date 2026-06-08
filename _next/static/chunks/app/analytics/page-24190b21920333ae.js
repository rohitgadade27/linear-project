(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4109, 7279, 2703, 7696], {
        20242: function(e, r, a) {
            Promise.resolve().then(a.bind(a, 28002)), Promise.resolve().then(a.bind(a, 28311)), Promise.resolve().then(a.bind(a, 86075)), Promise.resolve().then(a.bind(a, 65306)), Promise.resolve().then(a.bind(a, 19606)), Promise.resolve().then(a.bind(a, 41885)), Promise.resolve().then(a.bind(a, 86728)), Promise.resolve().then(a.bind(a, 29275)), Promise.resolve().then(a.bind(a, 25825)), Promise.resolve().then(a.t.bind(a, 81749, 23)), Promise.resolve().then(a.t.bind(a, 33234, 23))
        },
        28002: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                ActiveUsers: function() {
                    return g
                }
            });
            var t = a(3827),
                s = a(85754),
                n = a(27815),
                l = a(57084),
                i = a(1657);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let o = (0, a(87461).Z)("Users", [
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
                ["path", {
                    d: "M22 21v-2a4 4 0 0 0-3-3.87",
                    key: "kshegd"
                }],
                ["path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75",
                    key: "1da9ce"
                }]
            ]);
            var d = a(28814),
                c = a(31937),
                u = a(30660),
                m = a(91774),
                h = a(41196);
            let g = () => {
                let {
                    theme: e
                } = (0, m.F)(), r = {
                    labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "21:00", "22:00", "23:00", "24:00"],
                    datasets: [{
                        label: "Users",
                        data: [100, 50, 105, 50, 240, 55, 110, 48, 145, 50, 99, 54, 200, 50, 190, 60, 95, 60, 170, 50, 200, 60, 190, 57, 90],
                        backgroundColor: `rgb(${l.DM.green})`,
                        barThickness: 3,
                        borderWidth: 0,
                        borderRadius: 10
                    }]
                }, a = {
                    maintainAspectRatio: !1,
                    layout: {
                        padding: {
                            left: -5
                        }
                    },
                    indexAxis: "x",
                    plugins: {
                        tooltip: { ...(0, l.MS)(e),
                            callbacks: {
                                label: e => e.formattedValue + "K"
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: !1
                            },
                            border: {
                                display: !1
                            },
                            ticks: { ...(0, l.t8)(e, 0, "center")
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, l.yW)(e)
                            },
                            ticks: { ...(0, l.t8)(e)
                            }
                        }
                    }
                }, g = [{
                    page: "/index.html",
                    users: 1480,
                    percentage: 78,
                    up: !0
                }, {
                    page: "/downloads/mobile.html",
                    users: 1143,
                    percentage: 69,
                    up: !0
                }, {
                    page: "/pricing.html",
                    users: 964,
                    percentage: 56,
                    up: !1
                }, {
                    page: "/blog/how-to-configure.html",
                    users: 542,
                    percentage: 35,
                    up: !0
                }, {
                    page: "/products/design.html",
                    users: 234,
                    percentage: 18,
                    up: !1
                }, {
                    page: "/develop.html",
                    users: 123,
                    percentage: 12,
                    up: !0
                }, {
                    page: "/products/market.html",
                    users: 64,
                    percentage: 8,
                    up: !1
                }, {
                    page: "/prototype.html",
                    users: 32,
                    percentage: 4,
                    up: !0
                }];
                return (0, t.jsxs)(n.Zb, {
                    className: "mb-2",
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-emerald-500/10 text-emerald-500",
                            children: (0, t.jsx)(o, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "Active Users"
                        }), (0, t.jsx)(s.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, t.jsx)(d.Z, {
                                className: "w-4"
                            })
                        }), (0, t.jsx)(s.z, {
                            variant: "outline",
                            size: "sm",
                            children: "Report"
                        })]
                    }), (0, t.jsxs)(n.aY, {
                        children: [(0, t.jsx)("div", {
                            className: "mb-5",
                            children: (0, t.jsx)(h.$Q, {
                                height: 250,
                                data: r,
                                options: a
                            })
                        }), g.map((e, r) => (0, t.jsxs)("div", {
                            className: (0, i.cn)("flex items-center border-border py-3", r !== g.length - 1 && "border-b"),
                            children: [(0, t.jsx)("div", {
                                className: "flex-1",
                                children: e.page
                            }), (0, t.jsx)("div", {
                                className: "text-headings",
                                children: e.users
                            }), (0, t.jsxs)("div", {
                                className: (0, i.cn)("hidden w-16 items-center justify-end text-sm sm:flex", e.up ? "text-emerald-500" : "text-red-500"),
                                children: [e.percentage, "%", e.up ? (0, t.jsx)(c.Z, {
                                    className: "ms-1 w-4 text-emerald-500"
                                }) : (0, t.jsx)(u.Z, {
                                    className: "ms-1 w-4"
                                })]
                            })]
                        }, r))]
                    })]
                })
            }
        },
        28311: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                AverageVisitDuration: function() {
                    return g
                }
            });
            var t = a(3827),
                s = a(85754),
                n = a(27815),
                l = a(57084);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let i = (0, a(87461).Z)("Clock12", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["polyline", {
                    points: "12 6 12 12",
                    key: "1fub01"
                }]
            ]);
            var o = a(31937),
                d = a(98296),
                c = a(28814),
                u = a(91774),
                m = a(41196),
                h = a(46136);
            h.kL.register(h.uw, h.f$, h.od, h.jn, h.u, h.Gu);
            let g = () => {
                let {
                    theme: e
                } = (0, u.F)(), r = {
                    labels: ["08/10", "08/11", "08/12", "08/13", "08/14", "08/15", "08/16", "08/17", "08/18", "08/19", "08/20", "08/21", "08/22", "08/23", "08/24", "08/25", "08/26", "08/27", "08/28"],
                    datasets: [{
                        fill: !0,
                        label: "Current Month",
                        data: [115, 115, 112, 110, 113, 110, 111, 115, 111, 111, 115, 112, 111, 111, 110, 111, 114, 115, 114],
                        borderColor: `rgb(${l.DM.cyan})`,
                        backgroundColor: e => (0, l.sG)(e, `rgba(${l.DM.cyan}, 0.2)`, `rgba(${l.DM.cyan}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${l.DM.cyan})`,
                        pointBorderColor: `rgb(${l.DM.cyan})`,
                        pointHoverBorderColor: `rgb(${l.DM.cyan})`,
                        pointHoverBackgroundColor: `rgb(${l.DM.cyan})`
                    }, {
                        fill: !0,
                        label: "Previous Month",
                        data: [108, 107, 108, 109, 106, 109, 109, 107, 106, 109, 109, 109, 107, 109, 109, 107, 109, 107, 109],
                        borderColor: `rgb(${l.DM.orange})`,
                        backgroundColor: e => (0, l.sG)(e, `rgba(${l.DM.orange}, 0.2)`, `rgba(${l.DM.orange}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${l.DM.orange})`,
                        pointBorderColor: `rgb(${l.DM.orange})`,
                        pointHoverBorderColor: `rgb(${l.DM.orange})`,
                        pointHoverBackgroundColor: `rgb(${l.DM.orange})`
                    }]
                }, a = {
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
                            grid: { ...(0, l.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, l.t8)(e),
                                maxTicksLimit: 8
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, l.yW)(e)
                            },
                            min: 100,
                            max: 120,
                            ticks: { ...(0, l.t8)(e),
                                maxTicksLimit: 7,
                                callback: e => String(e) + "K"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, l.MS)(e)
                        }
                    }
                };
                return (0, t.jsxs)(n.Zb, {
                    className: "mb-2",
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-amber-500/10 text-amber-500",
                            children: (0, t.jsx)(i, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "Average Visit Duration"
                        }), (0, t.jsxs)("div", {
                            className: "-me-1.5 -mt-3 ms-auto flex items-center",
                            children: [(0, t.jsxs)("div", {
                                className: "me-3 flex items-center text-xs text-emerald-500 max-sm:hidden",
                                children: [(0, t.jsx)(o.Z, {
                                    className: "me-1 w-4"
                                }), "33.47%"]
                            }), (0, t.jsx)(s.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "max-sm:hidden",
                                children: (0, t.jsx)(d.Z, {
                                    className: "w-4"
                                })
                            }), (0, t.jsx)(s.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, t.jsx)(c.Z, {
                                    className: "w-4"
                                })
                            })]
                        })]
                    }), (0, t.jsx)(n.aY, {
                        children: (0, t.jsx)(m.x1, {
                            height: 250,
                            options: a,
                            data: r
                        })
                    }), (0, t.jsx)(n.eW, {
                        children: (0, t.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, t.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, t.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${l.DM.cyan})`
                                    }
                                }), (0, t.jsx)("span", {
                                    children: "Current Year"
                                })]
                            }), (0, t.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, t.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${l.DM.orange})`
                                    }
                                }), (0, t.jsx)("span", {
                                    children: "Previous Year"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        86075: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                SessionsCountry: function() {
                    return m
                }
            });
            var t = a(3827),
                s = a(85754),
                n = a(27815);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let l = (0, a(87461).Z)("Compass", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["polygon", {
                    points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
                    key: "m9r19z"
                }]
            ]);
            var i = a(28814),
                o = a(57084),
                d = a(41196),
                c = a(91774),
                u = a(46136);
            u.kL.register(u.uw, u.f$, u.ZL, u.u);
            let m = () => {
                let {
                    theme: e
                } = (0, c.F)(), r = {
                    labels: ["USA", "China", "England", "Japan", "Canada", "France", "Germany"],
                    datasets: [{
                        label: "Sessions",
                        data: [83, 44, 32, 53, 62, 23, 44],
                        backgroundColor: "light" === e ? `rgb(${o.DM.cyan})` : `rgb(${o.DM.blue})`,
                        barThickness: 3,
                        borderWidth: 0,
                        borderRadius: 10
                    }]
                }, a = {
                    maintainAspectRatio: !1,
                    layout: {
                        padding: {
                            left: -5
                        }
                    },
                    indexAxis: "y",
                    plugins: {
                        tooltip: { ...(0, o.MS)(e),
                            callbacks: {
                                label: e => e.formattedValue + "K"
                            }
                        },
                        legend: {
                            display: !1
                        }
                    },
                    scales: {
                        x: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e),
                                callback: e => e
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e)
                            }
                        }
                    }
                };
                return (0, t.jsxs)(n.Zb, {
                    className: "mb-2",
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-cyan-500/10 text-cyan-500",
                            children: (0, t.jsx)(l, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "Sessions by Country"
                        }), (0, t.jsx)(s.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, t.jsx)(i.Z, {
                                className: "w-4"
                            })
                        }), (0, t.jsx)(s.z, {
                            variant: "outline",
                            size: "sm",
                            children: "Report"
                        })]
                    }), (0, t.jsx)(n.aY, {
                        children: (0, t.jsx)("div", {
                            children: (0, t.jsx)(d.$Q, {
                                height: 250,
                                data: r,
                                options: a
                            })
                        })
                    })]
                })
            }
        },
        65306: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                UserAquisition: function() {
                    return x
                }
            });
            var t = a(3827),
                s = a(85754),
                n = a(27815),
                l = a(43274),
                i = a(31937),
                o = a(30660),
                d = a(91774),
                c = a(46136),
                u = a(41196),
                m = a(57084),
                h = a(88219),
                g = a(1657);
            c.kL.register(c.uw, c.f$, c.ZL, c.u);
            let x = () => {
                let {
                    theme: e
                } = (0, d.F)(), r = {
                    labels: ["10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10"],
                    datasets: [{
                        label: "Organic Search",
                        data: [13, 23, 30, 8, 13, 27, 54],
                        backgroundColor: `rgb(${m.DM.blue})`,
                        borderRadius: 5,
                        hoverOffset: 0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 1.5,
                        barThickness: 7
                    }, {
                        label: "Paid Search",
                        data: [25, 20, 20, 40, 32, 10, 20],
                        backgroundColor: `rgb(${m.DM.green})`,
                        borderRadius: 5,
                        hoverOffset: 0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 1.5,
                        barThickness: 7
                    }, {
                        label: "Direct",
                        data: [20, 45, 20, 28, 10, 50, 45],
                        backgroundColor: `rgb(${m.DM.cyan})`,
                        borderRadius: 5,
                        hoverOffset: 0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 1.5,
                        barThickness: 7
                    }, {
                        label: "Others",
                        data: [10, 20, 35, 40, 12, 30, 18],
                        backgroundColor: `rgb(${m.DM.orange})`,
                        borderRadius: 5,
                        hoverOffset: 0,
                        borderColor: "rgba(0,0,0,0)",
                        borderWidth: 1.5,
                        barThickness: 7
                    }]
                }, a = {
                    maintainAspectRatio: !1,
                    layout: {
                        padding: {
                            left: -5
                        }
                    },
                    plugins: {
                        tooltip: { ...(0, m.MS)(e),
                            callbacks: {
                                label: e => e.formattedValue + "K"
                            }
                        },
                        legend: {
                            display: !1
                        }
                    },
                    scales: {
                        x: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, m.yW)(e)
                            },
                            ticks: { ...(0, m.t8)(e)
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, m.yW)(e)
                            },
                            ticks: { ...(0, m.t8)(e)
                            }
                        }
                    }
                }, c = [{
                    source: "Organic Search",
                    color: "bg-sky-500",
                    visits: 243.2,
                    percentage: 32.4,
                    opacity: 1,
                    up: !0
                }, {
                    source: "Paid Search",
                    color: "bg-emerald-500",
                    visits: 142.5,
                    percentage: 66.1,
                    opacity: .6,
                    up: !0
                }, {
                    source: "Direct",
                    color: "bg-cyan-500",
                    visits: 78.2,
                    percentage: 10.9,
                    opacity: .3,
                    up: !1
                }, {
                    source: "Others",
                    color: "bg-amber-500",
                    visits: 32.5,
                    percentage: 54.1,
                    opacity: .1,
                    up: !1
                }];
                return (0, t.jsxs)(n.Zb, {
                    className: "mb-2",
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-sky-500/10 text-sky-500",
                            children: (0, t.jsx)(l.Z, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "User Acquisition"
                        }), (0, t.jsx)(s.z, {
                            variant: "outline",
                            size: "sm",
                            className: "ms-auto",
                            children: "Report"
                        })]
                    }), (0, t.jsxs)(n.aY, {
                        children: [(0, t.jsx)("div", {
                            className: "mb-5",
                            children: (0, t.jsx)(u.$Q, {
                                height: 250,
                                data: r,
                                options: a
                            })
                        }), c.map((e, r) => (0, t.jsxs)("div", {
                            className: "flex items-start",
                            children: [(0, t.jsx)("i", {
                                className: (0, g.cn)("me-3 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full", [e.color])
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 flex-wrap items-center",
                                children: [(0, t.jsx)("div", {
                                    className: "flex-1 text-headings",
                                    children: e.source
                                }), (0, t.jsxs)("div", {
                                    className: (0, g.cn)("me-3 hidden items-center text-xs sm:flex", e.up ? "text-emerald-500" : "text-red-500"),
                                    children: [e.percentage, "%", e.up ? (0, t.jsx)(i.Z, {
                                        className: "ms-2 w-4 text-emerald-500"
                                    }) : (0, t.jsx)(o.Z, {
                                        className: "ms-2 w-4"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "w-12 text-end text-headings",
                                    children: [e.percentage, "%"]
                                }), (0, t.jsx)(h.Progress, {
                                    className: (0, g.cn)("mb-2 mt-3 h-0.5", r !== c.length - 1 && "mb-3"),
                                    value: e.percentage,
                                    color: e.color
                                })]
                            })]
                        }, r))]
                    })]
                })
            }
        },
        19606: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                VisitsSource: function() {
                    return p
                }
            });
            var t = a(3827),
                s = a(85754),
                n = a(27815),
                l = a(28084),
                i = a(28814),
                o = a(31937),
                d = a(30660),
                c = a(46136),
                u = a(41196),
                m = a(57084),
                h = a(91774),
                g = a(88219),
                x = a(1657);
            c.kL.register(c.qi, c.u);
            let p = () => {
                let {
                    theme: e
                } = (0, h.F)(), r = {
                    labels: ["Google", "Direct", "Bing", "Yahoo", "Others"],
                    datasets: [{
                        data: [23981, 16342, 9736, 7632, 5374],
                        backgroundColor: [`rgb(${m.DM.blue})`, `rgb(${m.DM.green})`, `rgb(${m.DM.purple})`, `rgb(${m.DM.cyan})`, `rgb(${m.DM.orange})`],
                        borderWidth: 4,
                        borderColor: "light" === e ? `rgb(${m.DM.border.light})` : `rgb(${m.DM.border.dark})`,
                        hoverOffset: 1,
                        hoverBorderWidth: 0,
                        borderRadius: 5
                    }]
                }, a = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    cutout: 80,
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, m.MS)(e)
                        }
                    }
                }, c = [{
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
                return (0, t.jsxs)(n.Zb, {
                    className: "mb-2",
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "mb-1 flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-teal-500/10 text-teal-500",
                            children: (0, t.jsx)(l.Z, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "Visits by Source"
                        }), (0, t.jsx)(s.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, t.jsx)(i.Z, {
                                className: "w-4"
                            })
                        }), (0, t.jsx)(s.z, {
                            variant: "outline",
                            size: "sm",
                            children: "Report"
                        })]
                    }), (0, t.jsxs)(n.aY, {
                        children: [(0, t.jsxs)("div", {
                            className: "relative mb-5",
                            children: [(0, t.jsx)(u.$I, {
                                height: 250,
                                data: r,
                                options: a
                            }), (0, t.jsxs)("div", {
                                className: "absolute start-0 top-0 flex h-full w-full flex-col items-center justify-center",
                                children: [(0, t.jsx)("div", {
                                    className: "text-2xl text-headings",
                                    children: "781K"
                                }), (0, t.jsx)("div", {
                                    className: "text-muted",
                                    children: "Total Sessions"
                                })]
                            })]
                        }), c.map((e, r) => (0, t.jsxs)("div", {
                            className: "flex items-start",
                            children: [(0, t.jsx)("i", {
                                className: (0, x.cn)("me-3 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full", [e.className])
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 flex-wrap items-center",
                                children: [(0, t.jsx)("div", {
                                    className: "flex-1 text-headings",
                                    children: e.source
                                }), (0, t.jsxs)("div", {
                                    className: (0, x.cn)("me-3 hidden items-center text-xs sm:flex", e.up ? "text-emerald-500" : "text-red-500"),
                                    children: [e.change, "%", e.up ? (0, t.jsx)(o.Z, {
                                        className: "ms-2 w-4  text-emerald-500"
                                    }) : (0, t.jsx)(d.Z, {
                                        className: "ms-2 w-4"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "w-12 text-end text-headings",
                                    children: [e.percentage, "%"]
                                }), (0, t.jsx)(g.Progress, {
                                    className: (0, x.cn)("mb-2 mt-3 h-0.5", r !== c.length - 1 && "mb-3"),
                                    value: e.percentage,
                                    color: e.className
                                })]
                            })]
                        }, r))]
                    })]
                })
            }
        },
        86728: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                DateSwitch: function() {
                    return m
                }
            });
            var t = a(3827),
                s = a(64090),
                n = a(3251),
                l = a(25890),
                i = a(1657),
                o = a(85754),
                d = a(97658),
                c = a(35216);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let u = (0, a(87461).Z)("Clock3", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["polyline", {
                    points: "12 6 12 12 16.5 12",
                    key: "1aq6pp"
                }]
            ]);

            function m({
                className: e
            }) {
                let [r, a] = s.useState({
                    from: new Date(2022, 0, 20),
                    to: (0, n.E)(new Date(2022, 0, 20), 20)
                });
                return (0, t.jsx)("div", {
                    className: (0, i.cn)("grid gap-2", e),
                    children: (0, t.jsxs)(c.J2, {
                        children: [(0, t.jsx)(c.xo, {
                            asChild: !0,
                            children: (0, t.jsxs)(o.z, {
                                id: "date",
                                size: "lg",
                                className: (0, i.cn)("h-10 w-56 justify-start rounded-full border border-white/50 bg-white/10 px-4 text-start text-sm font-normal text-body ring-white/25 hover:border-white hover:bg-white/20 hover:ring-4 focus:ring-4 data-[state=open]:ring-4 dark:border-border dark:bg-accent/5 dark:ring-ring", !r && "text-muted-foreground"),
                                children: [(0, t.jsx)(u, {
                                    size: 20,
                                    strokeWidth: 1.5,
                                    className: "-ms-1 me-2 shrink-0"
                                }), (null == r ? void 0 : r.from) ? r.to ? (0, t.jsxs)(t.Fragment, {
                                    children: [(0, l.WU)(r.from, "LLL dd, y"), " - ", (0, l.WU)(r.to, "LLL dd, y")]
                                }) : (0, l.WU)(r.from, "LLL dd, y") : (0, t.jsx)("span", {
                                    children: "Pick a date"
                                })]
                            })
                        }), (0, t.jsx)(c.yk, {
                            className: "w-auto p-0",
                            align: "start",
                            children: (0, t.jsx)(d.f, {
                                initialFocus: !0,
                                mode: "range",
                                defaultMonth: null == r ? void 0 : r.from,
                                selected: r,
                                onSelect: a,
                                numberOfMonths: 1
                            })
                        })]
                    })
                })
            }
        },
        97658: function(e, r, a) {
            "use strict";
            a.d(r, {
                f: function() {
                    return d
                }
            });
            var t = a(3827);
            a(64090);
            var s = a(49108),
                n = a(37805),
                l = a(26463),
                i = a(1657),
                o = a(85754);

            function d({
                className: e,
                classNames: r,
                showOutsideDays: a = !0,
                ...d
            }) {
                return (0, t.jsx)(l._W, {
                    showOutsideDays: a,
                    className: (0, i.cn)("p-3", e),
                    classNames: {
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-sm font-medium",
                        nav: "space-x-1 flex items-center",
                        nav_button: (0, i.cn)((0, o.d)({
                            variant: "outline"
                        }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex",
                        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                        row: "flex w-full mt-2",
                        cell: "h-8 w-8 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-md first:[&:has([aria-selected])]:rounded-md last:[&:has([aria-selected])]:rounded-md focus-within:relative focus-within:z-20",
                        day: (0, i.cn)((0, o.d)({
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
                        }) => (0, t.jsx)(s.Z, {
                            className: "h-4 w-4"
                        }),
                        IconRight: ({ ...e
                        }) => (0, t.jsx)(n.Z, {
                            className: "h-4 w-4"
                        })
                    },
                    ...d
                })
            }
            d.displayName = "Calendar"
        },
        35216: function(e, r, a) {
            "use strict";
            a.d(r, {
                J2: function() {
                    return i
                },
                xo: function() {
                    return o
                },
                yk: function() {
                    return d
                }
            });
            var t = a(3827),
                s = a(64090),
                n = a(57427),
                l = a(1657);
            let i = n.fC,
                o = n.xz,
                d = s.forwardRef(({
                    className: e,
                    align: r = "center",
                    sideOffset: a = 4,
                    ...s
                }, i) => (0, t.jsx)(n.h_, {
                    children: (0, t.jsx)(n.VY, {
                        ref: i,
                        align: r,
                        sideOffset: a,
                        className: (0, l.cn)("z-50 w-72 rounded-lg border border-popover bg-popover p-4 shadow-xl shadow-black/5 outline-none backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
                        ...s
                    })
                }));
            d.displayName = n.VY.displayName
        },
        88219: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                Progress: function() {
                    return j
                }
            });
            var t = a(3827),
                s = a(64090),
                n = a(14749),
                l = a(84104),
                i = a(29586);
            let o = "Progress",
                [d, c] = (0, l.b)(o),
                [u, m] = d(o),
                h = (0, s.forwardRef)((e, r) => {
                    let {
                        __scopeProgress: a,
                        value: t,
                        max: l,
                        getValueLabel: o = x,
                        ...d
                    } = e, c = f(l) ? l : 100, m = y(t, c) ? t : null, h = b(m) ? o(m, c) : void 0;
                    return (0, s.createElement)(u, {
                        scope: a,
                        value: m,
                        max: c
                    }, (0, s.createElement)(i.WV.div, (0, n.Z)({
                        "aria-valuemax": c,
                        "aria-valuemin": 0,
                        "aria-valuenow": b(m) ? m : void 0,
                        "aria-valuetext": h,
                        role: "progressbar",
                        "data-state": p(m, c),
                        "data-value": null != m ? m : void 0,
                        "data-max": c
                    }, d, {
                        ref: r
                    })))
                });
            h.propTypes = {
                max(e, r, a) {
                    let t = e[r],
                        s = String(t);
                    return t && !f(t) ? Error(`Invalid prop \`max\` of value \`${s}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`) : null
                },
                value(e, r, a) {
                    let t = e[r],
                        s = String(t),
                        n = f(e.max) ? e.max : 100;
                    return null == t || y(t, n) ? null : Error(`Invalid prop \`value\` of value \`${s}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`)
                }
            };
            let g = (0, s.forwardRef)((e, r) => {
                var a;
                let {
                    __scopeProgress: t,
                    ...l
                } = e, o = m("ProgressIndicator", t);
                return (0, s.createElement)(i.WV.div, (0, n.Z)({
                    "data-state": p(o.value, o.max),
                    "data-value": null !== (a = o.value) && void 0 !== a ? a : void 0,
                    "data-max": o.max
                }, l, {
                    ref: r
                }))
            });

            function x(e, r) {
                return `${Math.round(e/r*100)}%`
            }

            function p(e, r) {
                return null == e ? "indeterminate" : e === r ? "complete" : "loading"
            }

            function b(e) {
                return "number" == typeof e
            }

            function f(e) {
                return b(e) && !isNaN(e) && e > 0
            }

            function y(e, r) {
                return b(e) && !isNaN(e) && e <= r && e >= 0
            }
            var v = a(1657);
            let j = s.forwardRef(({
                className: e,
                color: r,
                value: a,
                ...s
            }, n) => (0, t.jsx)(h, {
                ref: n,
                className: (0, v.cn)("relative h-2 w-full overflow-hidden rounded-full bg-border/50", e),
                ...s,
                children: (0, t.jsx)(g, {
                    className: (0, v.cn)("h-full w-full flex-1 bg-primary transition-all", r),
                    style: {
                        transform: `translateX(-${100-(a||0)}%)`
                    }
                })
            }));
            j.displayName = h.displayName
        },
        30660: function(e, r, a) {
            "use strict";
            a.d(r, {
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
            let t = (0, a(87461).Z)("ArrowDownCircle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 8v8",
                    key: "napkw2"
                }],
                ["path", {
                    d: "m8 12 4 4 4-4",
                    key: "k98ssh"
                }]
            ])
        },
        31937: function(e, r, a) {
            "use strict";
            a.d(r, {
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
            let t = (0, a(87461).Z)("ArrowUpCircle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "m16 12-4-4-4 4",
                    key: "177agl"
                }],
                ["path", {
                    d: "M12 16V8",
                    key: "1sbj14"
                }]
            ])
        },
        98296: function(e, r, a) {
            "use strict";
            a.d(r, {
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
            let t = (0, a(87461).Z)("HardDriveDownload", [
                ["path", {
                    d: "M12 2v8",
                    key: "1q4o3n"
                }],
                ["path", {
                    d: "m16 6-4 4-4-4",
                    key: "6wukr"
                }],
                ["rect", {
                    width: "20",
                    height: "8",
                    x: "2",
                    y: "14",
                    rx: "2",
                    key: "w68u3i"
                }],
                ["path", {
                    d: "M6 18h.01",
                    key: "uhywen"
                }],
                ["path", {
                    d: "M10 18h.01",
                    key: "h775k"
                }]
            ])
        },
        43274: function(e, r, a) {
            "use strict";
            a.d(r, {
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
            let t = (0, a(87461).Z)("HeartHandshake", [
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
        28814: function(e, r, a) {
            "use strict";
            a.d(r, {
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
            let t = (0, a(87461).Z)("Info", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 16v-4",
                    key: "1dtifu"
                }],
                ["path", {
                    d: "M12 8h.01",
                    key: "e9boi3"
                }]
            ])
        },
        28084: function(e, r, a) {
            "use strict";
            a.d(r, {
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
            let t = (0, a(87461).Z)("MousePointerSquare", [
                ["path", {
                    d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
                    key: "14rsvq"
                }],
                ["path", {
                    d: "m12 12 4 10 1.7-4.3L22 16Z",
                    key: "64ilsv"
                }]
            ])
        },
        46993: function(e, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), Object.defineProperty(r, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return t
                }
            });
            let t = a(86921)._(a(64090)).default.createContext(null)
        }
    },
    function(e) {
        e.O(0, [7674, 1936, 3407, 6349, 9346, 1749, 8751, 1257, 6436, 1343, 5845, 2971, 8069, 1744], function() {
            return e(e.s = 20242)
        }), _N_E = e.O()
    }
]);