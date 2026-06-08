(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6019, 7279, 2703, 7696], {
        55119: function(e, r, a) {
            Promise.resolve().then(a.bind(a, 42139)), Promise.resolve().then(a.bind(a, 45816)), Promise.resolve().then(a.bind(a, 41726)), Promise.resolve().then(a.bind(a, 93528)), Promise.resolve().then(a.bind(a, 22632)), Promise.resolve().then(a.bind(a, 41885)), Promise.resolve().then(a.bind(a, 86728)), Promise.resolve().then(a.bind(a, 29275)), Promise.resolve().then(a.bind(a, 25825)), Promise.resolve().then(a.t.bind(a, 33234, 23))
        },
        42139: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                BudgetExpenses: function() {
                    return x
                }
            });
            var t = a(3827),
                s = a(46136),
                n = a(41196),
                l = a(27815),
                i = a(12409),
                o = a(28814),
                d = a(98296),
                c = a(63915),
                u = a(57084),
                m = a(85754),
                g = a(91774);
            s.kL.register(s.uw, s.f$, s.od, s.jn, s.u, s.Gu);
            let x = () => {
                let {
                    theme: e
                } = (0, g.F)(), r = {
                    labels: ["Q2 19", "Q3 19", "Q4 19", "Q1 20", "Q2 20", "Q3 20", "Q4 20", "Q1 21", "Q2 21", "Q3 21", "Q4 21", "Q1 22", "Q2 22", "Q3 22", "Q4 22", "Q1 23", "Q2 23", "Q3 23", "Q4 23"],
                    datasets: [{
                        fill: !0,
                        label: "Receieved",
                        data: [114, 110, 110, 106, 108, 109, 106, 115, 110, 108, 108, 110, 105, 108, 105, 107, 106, 116, 107],
                        borderColor: `rgb(${u.DM.green})`,
                        backgroundColor: e => (0, u.sG)(e, `rgba(${u.DM.green}, 0.2)`, `rgba(${u.DM.green}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${u.DM.green})`,
                        pointBorderColor: `rgb(${u.DM.green})`,
                        pointHoverBorderColor: `rgb(${u.DM.green})`,
                        pointHoverBackgroundColor: `rgb(${u.DM.green})`
                    }, {
                        fill: !0,
                        label: "Converted",
                        data: [112, 113, 112, 111, 111, 113, 113, 110, 113, 112, 113, 113, 112, 114, 111, 113, 115, 112, 111],
                        borderColor: `rgb(${u.DM.orange})`,
                        backgroundColor: e => (0, u.sG)(e, `rgba(${u.DM.orange}, 0.2)`, `rgba(${u.DM.orange}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${u.DM.orange})`,
                        pointBorderColor: `rgb(${u.DM.orange})`,
                        pointHoverBorderColor: `rgb(${u.DM.orange})`,
                        pointHoverBackgroundColor: `rgb(${u.DM.orange})`
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
                            grid: { ...(0, u.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, u.t8)(e),
                                maxTicksLimit: 12
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, u.yW)(e)
                            },
                            min: 100,
                            max: 120,
                            ticks: { ...(0, u.t8)(e),
                                maxTicksLimit: 6,
                                callback: e => String(e) + "K"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, u.MS)(e)
                        }
                    }
                };
                return (0, t.jsxs)(l.Zb, {
                    children: [(0, t.jsxs)(l.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-emerald-500/10 text-emerald-500",
                            children: (0, t.jsx)(i.Z, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(l.ll, {
                            children: "Sales History"
                        }), (0, t.jsxs)("div", {
                            className: "ms-auto flex items-center",
                            children: [(0, t.jsx)(m.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, t.jsx)(o.Z, {
                                    className: "w-4"
                                })
                            }), (0, t.jsx)(m.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, t.jsx)(d.Z, {
                                    className: "w-4"
                                })
                            }), (0, t.jsx)(m.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, t.jsx)(c.Z, {
                                    className: "w-4"
                                })
                            }), (0, t.jsx)(m.z, {
                                variant: "outline",
                                size: "sm",
                                className: "ms-3 hidden sm:flex",
                                children: "Report"
                            })]
                        })]
                    }), (0, t.jsx)(l.aY, {
                        children: (0, t.jsx)(n.x1, {
                            height: 250,
                            options: a,
                            data: r
                        })
                    }), (0, t.jsx)(l.eW, {
                        children: (0, t.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, t.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, t.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${u.DM.orange})`
                                    }
                                }), (0, t.jsx)("span", {
                                    children: "Budget"
                                })]
                            }), (0, t.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, t.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${u.DM.green})`
                                    }
                                }), (0, t.jsx)("span", {
                                    children: "Expense"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        45816: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                BudgetUtilization: function() {
                    return x
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
            let i = (0, a(87461).Z)("Coins", [
                ["circle", {
                    cx: "8",
                    cy: "8",
                    r: "6",
                    key: "3yglwk"
                }],
                ["path", {
                    d: "M18.09 10.37A6 6 0 1 1 10.34 18",
                    key: "t5s6rm"
                }],
                ["path", {
                    d: "M7 6h1v4",
                    key: "1obek4"
                }],
                ["path", {
                    d: "m16.71 13.88.7.71-2.82 2.82",
                    key: "1rbuyh"
                }]
            ]);
            var o = a(28814),
                d = a(98296),
                c = a(63915),
                u = a(91774),
                m = a(41196),
                g = a(46136);
            g.kL.register(g.uw, g.f$, g.ZL, g.u);
            let x = () => {
                let {
                    theme: e
                } = (0, u.F)(), r = {
                    labels: ["#3243", "#4546", "#3001", "#6079", "#9943", "#1930"],
                    datasets: [{
                        label: "Current Utilization",
                        data: [83, 5, 69.25, 53, 0, 28],
                        backgroundColor: `rgb(${l.DM.cyan})`,
                        categoryPercentage: .15,
                        borderWidth: 0,
                        borderRadius: 10
                    }, {
                        label: "Proposed Budget",
                        data: [70, 70, 70, 70, 70, 70],
                        backgroundColor: `rgba(${l.DM.cyan},0.3)`,
                        categoryPercentage: .3,
                        borderWidth: 0,
                        borderRadius: 10,
                        grouped: !1
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
                    indexAxis: "y",
                    scales: {
                        x: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, l.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, l.t8)(e),
                                callback: e => e + "K"
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
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, l.MS)(e),
                            callbacks: {
                                label: e => e.formattedValue + "K"
                            }
                        }
                    }
                };
                return (0, t.jsxs)(n.Zb, {
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-cyan-500/10 text-cyan-500",
                            children: (0, t.jsx)(i, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "Budget Utilization"
                        }), (0, t.jsxs)("div", {
                            className: "ms-auto flex items-center",
                            children: [(0, t.jsx)(s.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, t.jsx)(o.Z, {
                                    className: "w-4"
                                })
                            }), (0, t.jsx)(s.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, t.jsx)(d.Z, {
                                    className: "w-4"
                                })
                            }), (0, t.jsx)(s.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "max-sm:hidden",
                                children: (0, t.jsx)(c.Z, {
                                    className: "w-4"
                                })
                            }), (0, t.jsx)(s.z, {
                                variant: "outline",
                                size: "sm",
                                className: "ms-3 max-sm:hidden",
                                children: "Report"
                            })]
                        })]
                    }), (0, t.jsx)(n.aY, {
                        children: (0, t.jsx)(m.$Q, {
                            height: 250,
                            data: r,
                            options: a
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
                                        background: `rgba(${l.DM.cyan}, 0.3)`
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
        41726: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                PlannedActuals: function() {
                    return u
                }
            });
            var t = a(3827),
                s = a(85754),
                n = a(27815),
                l = a(52810),
                i = a(57084),
                o = a(91774),
                d = a(41196),
                c = a(46136);
            c.kL.register(c.uw, c.f$, c.ZL, c.u);
            let u = () => {
                let {
                    theme: e
                } = (0, o.F)(), r = {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    datasets: [{
                        label: "Actual",
                        data: [80, 78, 50, 64, 40, 87, 90, 40, 70],
                        backgroundColor: `rgb(${i.DM.blue})`,
                        borderWidth: 0,
                        borderRadius: 10,
                        categoryPercentage: .25,
                        maxBarThickness: 10,
                        grouped: !1
                    }, {
                        label: "Planned",
                        data: [96, 64, 35, 76, 45, 109, 80, 50, 100],
                        backgroundColor: `rgba(${i.DM.blue},0.3)`,
                        borderWidth: 0,
                        borderRadius: 8,
                        categoryPercentage: .5,
                        maxBarThickness: 10,
                        grouped: !1
                    }, {
                        label: "Billable Hours",
                        data: [45, 50, 30, 60, 30, 70, 20, 35, 20],
                        backgroundColor: `rgb(${i.DM.orange})`,
                        borderWidth: 0,
                        borderRadius: 8,
                        categoryPercentage: .5,
                        maxBarThickness: 10,
                        grouped: !1
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
                            grid: { ...(0, i.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, i.t8)(e)
                            }
                        },
                        y: {
                            stacked: !0,
                            border: {
                                display: !1
                            },
                            grid: { ...(0, i.yW)(e)
                            },
                            ticks: { ...(0, i.t8)(e)
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, i.MS)(e),
                            callbacks: {
                                label: e => e.formattedValue + "K"
                            }
                        }
                    }
                };
                return (0, t.jsxs)(n.Zb, {
                    className: "mt-2",
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-blue-500/10 text-blue-500",
                            children: (0, t.jsx)(l.Z, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "Planned vs Actual"
                        }), (0, t.jsx)(s.z, {
                            variant: "outline",
                            size: "sm",
                            className: "ms-auto",
                            children: "Report"
                        })]
                    }), (0, t.jsx)(n.aY, {
                        children: (0, t.jsx)(d.$Q, {
                            height: 250,
                            data: r,
                            options: a
                        })
                    }), (0, t.jsx)(n.eW, {
                        children: (0, t.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, t.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, t.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgba(${i.DM.blue}, 0.3)`
                                    }
                                }), (0, t.jsx)("span", {
                                    children: "Planned"
                                })]
                            }), (0, t.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, t.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${i.DM.blue})`
                                    }
                                }), (0, t.jsx)("span", {
                                    children: "Actual"
                                })]
                            }), (0, t.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, t.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${i.DM.orange})`
                                    }
                                }), (0, t.jsx)("span", {
                                    children: "Billable Hours"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        93528: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                ProjectStatus: function() {
                    return h
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
            let i = (0, a(87461).Z)("Loader", [
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "2",
                    y2: "6",
                    key: "gza1u7"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "18",
                    y2: "22",
                    key: "1qhbu9"
                }],
                ["line", {
                    x1: "4.93",
                    x2: "7.76",
                    y1: "4.93",
                    y2: "7.76",
                    key: "xae44r"
                }],
                ["line", {
                    x1: "16.24",
                    x2: "19.07",
                    y1: "16.24",
                    y2: "19.07",
                    key: "bxnmvf"
                }],
                ["line", {
                    x1: "2",
                    x2: "6",
                    y1: "12",
                    y2: "12",
                    key: "89khin"
                }],
                ["line", {
                    x1: "18",
                    x2: "22",
                    y1: "12",
                    y2: "12",
                    key: "pb8tfm"
                }],
                ["line", {
                    x1: "4.93",
                    x2: "7.76",
                    y1: "19.07",
                    y2: "16.24",
                    key: "1uxjnu"
                }],
                ["line", {
                    x1: "16.24",
                    x2: "19.07",
                    y1: "7.76",
                    y2: "4.93",
                    key: "6duxfx"
                }]
            ]);
            var o = a(28814),
                d = a(31937),
                c = a(30660),
                u = a(91774),
                m = a(88219),
                g = a(46136),
                x = a(41196),
                p = a(1657);
            g.kL.register(g.uw, g.f$, g.ZL, g.u);
            let h = () => {
                let {
                    theme: e
                } = (0, u.F)(), r = {
                    labels: ["In Progress", "Completed", "Overdue", "On Hold", "Cancelled", "Planned"],
                    datasets: [{
                        label: "Current Month",
                        data: [96, 64, 35, 76, 14, 109],
                        backgroundColor: [`rgba(${l.DM.blue},0.1)`, `rgba(${l.DM.green},0.1)`, `rgba(${l.DM.orange},0.1)`, `rgba(${l.DM.cyan},0.1)`, `rgba(${l.DM.red},0.1)`, `rgba(${l.DM.purple},0.1)`],
                        borderColor: [`rgba(${l.DM.blue},0.9)`, `rgba(${l.DM.green},0.9)`, `rgba(${l.DM.orange},0.9)`, `rgba(${l.DM.cyan},0.9)`, `rgba(${l.DM.red},0.9)`, `rgba(${l.DM.purple},0.9)`],
                        borderRadius: 5,
                        borderWidth: 1.25
                    }]
                }, a = {
                    maintainAspectRatio: !1,
                    layout: {
                        padding: {
                            left: -5
                        }
                    },
                    plugins: {
                        tooltip: { ...(0, l.MS)(e),
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
                            grid: { ...(0, l.yW)(e)
                            },
                            ticks: { ...(0, l.t8)(e, 10, "center")
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
                    type: "In Progress",
                    change: 23.61,
                    className: "bg-blue-500",
                    projects: 96,
                    up: !0,
                    percentage: 24.3
                }, {
                    type: "Completed",
                    change: 2.35,
                    className: "bg-green-500",
                    projects: 64,
                    up: !0,
                    percentage: 16.2
                }, {
                    type: "Overdue",
                    change: 8.54,
                    className: "bg-orange-500",
                    projects: 35,
                    up: !1,
                    percentage: 8.8
                }, {
                    type: "On Hold",
                    change: 3.22,
                    className: "bg-cyan-500",
                    projects: 76,
                    up: !0,
                    percentage: 19.2
                }, {
                    type: "Cancelled",
                    change: 33.25,
                    className: "bg-pink-500",
                    projects: 16,
                    up: !1,
                    percentage: 4.1
                }, {
                    type: "Planned",
                    change: .83,
                    className: "bg-purple-400",
                    projects: 4.1,
                    up: !0,
                    percentage: 27.6
                }];
                return (0, t.jsxs)(n.Zb, {
                    className: "mt-2",
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-purple-500/10 text-purple-500",
                            children: (0, t.jsx)(i, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "Projects by Status"
                        }), (0, t.jsx)(s.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, t.jsx)(o.Z, {
                                className: "w-4"
                            })
                        }), (0, t.jsx)(s.z, {
                            variant: "outline",
                            size: "sm",
                            className: "max-sm:hidden",
                            children: "Report"
                        })]
                    }), (0, t.jsxs)(n.aY, {
                        children: [(0, t.jsx)("div", {
                            className: "mb-5",
                            children: (0, t.jsx)(x.$Q, {
                                height: 250,
                                data: r,
                                options: a
                            })
                        }), g.map((e, r) => (0, t.jsxs)("div", {
                            className: "flex items-start",
                            children: [(0, t.jsx)("i", {
                                className: (0, p.cn)("me-3 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full", [e.className])
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 flex-wrap items-center",
                                children: [(0, t.jsx)("div", {
                                    className: "flex-1 text-headings",
                                    children: e.type
                                }), (0, t.jsxs)("div", {
                                    className: (0, p.cn)("me-3 hidden items-center text-xs sm:flex", e.up ? "text-emerald-500" : "text-red-500"),
                                    children: [e.percentage, "%", e.up ? (0, t.jsx)(d.Z, {
                                        className: "ms-2 w-4  text-emerald-500"
                                    }) : (0, t.jsx)(c.Z, {
                                        className: "ms-2 w-4"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "w-12 text-end text-headings",
                                    children: [e.percentage, "%"]
                                }), (0, t.jsx)("div", {
                                    className: "hidden w-12 text-end text-headings sm:block",
                                    children: e.projects
                                }), (0, t.jsx)(m.Progress, {
                                    className: (0, p.cn)("mb-2 mt-3 h-0.5", r !== g.length - 1 && "mb-3"),
                                    value: e.percentage,
                                    color: e.className
                                })]
                            })]
                        }, r))]
                    })]
                })
            }
        },
        22632: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, {
                TicketsReopened: function() {
                    return g
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
            let l = (0, a(87461).Z)("Ticket", [
                ["path", {
                    d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
                    key: "qn84l0"
                }],
                ["path", {
                    d: "M13 5v2",
                    key: "dyzc3o"
                }],
                ["path", {
                    d: "M13 17v2",
                    key: "1ont0d"
                }],
                ["path", {
                    d: "M13 11v2",
                    key: "1wjjxi"
                }]
            ]);
            var i = a(31937),
                o = a(46136),
                d = a(41196),
                c = a(91774),
                u = a(57084),
                m = a(1657);
            o.kL.register(o.uw, o.f$, o.od, o.jn, o.u, o.Gu);
            let g = () => {
                let {
                    theme: e
                } = (0, c.F)(), r = {
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "15", "16", "17", "18"],
                    datasets: [{
                        fill: !0,
                        label: "Receieved",
                        data: [105, 105, 105, 107, 105, 107, 106, 106, 107, 107, 107, 109, 107, 109, 106, 107, 106, 106, 109],
                        borderColor: `rgb(${u.DM.green})`,
                        backgroundColor: e => (0, u.sG)(e, `rgba(${u.DM.green}, 0.2)`, `rgba(${u.DM.green}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${u.DM.green})`,
                        pointBorderColor: `rgb(${u.DM.green})`,
                        pointHoverBorderColor: `rgb(${u.DM.green})`,
                        pointHoverBackgroundColor: `rgb(${u.DM.green})`
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
                            grid: {
                                display: !1
                            },
                            distribution: "linear",
                            ticks: { ...(0, u.t8)(e),
                                maxTicksLimit: 12
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, u.yW)(e)
                            },
                            min: 80,
                            max: 120,
                            ticks: { ...(0, u.t8)(e),
                                maxTicksLimit: 6,
                                callback: e => String(e) + "K"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, u.MS)(e)
                        }
                    }
                };
                return (0, t.jsxs)(n.Zb, {
                    className: "mt-2",
                    children: [(0, t.jsxs)(n.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, t.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-green-500/10 text-green-500",
                            children: (0, t.jsx)(l, {
                                className: "w-5"
                            })
                        }), (0, t.jsx)(n.ll, {
                            children: "Tickets Reopened"
                        }), (0, t.jsx)(s.z, {
                            variant: "outline",
                            size: "sm",
                            className: "ms-auto",
                            children: "Report"
                        })]
                    }), (0, t.jsxs)(n.aY, {
                        children: [(0, t.jsx)("div", {
                            className: "mb-7 grid grid-cols-2 gap-3 sm:grid-cols-3",
                            children: [{
                                label: "Reopened Tickets",
                                value: 202,
                                up: !1,
                                percentage: !1,
                                important: !0
                            }, {
                                label: "Percentage",
                                value: 9.85,
                                up: !1,
                                percentage: !0,
                                important: !1
                            }, {
                                label: "vs. Previous Month",
                                value: 3.54,
                                up: !0,
                                percentage: !0,
                                important: !0
                            }].map((e, r) => (0, t.jsxs)("div", {
                                className: (0, m.cn)("border-border rounded-md border px-3 py-2", !e.important && "hidden sm:block"),
                                children: [(0, t.jsxs)("div", {
                                    className: (0, m.cn)("flex items-center text-xl", e.up ? "text-emerald-500" : "text-headings"),
                                    children: [e.value, e.percentage && "%", e.up && (0, t.jsx)(i.Z, {
                                        className: "relative -top-0.5 ms-2 w-5"
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "text-muted text-sm",
                                    children: e.label
                                })]
                            }, r))
                        }), (0, t.jsx)("div", {
                            children: (0, t.jsx)(d.x1, {
                                height: 250,
                                options: a,
                                data: r
                            })
                        })]
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
                g = (0, s.forwardRef)((e, r) => {
                    let {
                        __scopeProgress: a,
                        value: t,
                        max: l,
                        getValueLabel: o = p,
                        ...d
                    } = e, c = y(l) ? l : 100, m = f(t, c) ? t : null, g = b(m) ? o(m, c) : void 0;
                    return (0, s.createElement)(u, {
                        scope: a,
                        value: m,
                        max: c
                    }, (0, s.createElement)(i.WV.div, (0, n.Z)({
                        "aria-valuemax": c,
                        "aria-valuemin": 0,
                        "aria-valuenow": b(m) ? m : void 0,
                        "aria-valuetext": g,
                        role: "progressbar",
                        "data-state": h(m, c),
                        "data-value": null != m ? m : void 0,
                        "data-max": c
                    }, d, {
                        ref: r
                    })))
                });
            g.propTypes = {
                max(e, r, a) {
                    let t = e[r],
                        s = String(t);
                    return t && !y(t) ? Error(`Invalid prop \`max\` of value \`${s}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`) : null
                },
                value(e, r, a) {
                    let t = e[r],
                        s = String(t),
                        n = y(e.max) ? e.max : 100;
                    return null == t || f(t, n) ? null : Error(`Invalid prop \`value\` of value \`${s}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`)
                }
            };
            let x = (0, s.forwardRef)((e, r) => {
                var a;
                let {
                    __scopeProgress: t,
                    ...l
                } = e, o = m("ProgressIndicator", t);
                return (0, s.createElement)(i.WV.div, (0, n.Z)({
                    "data-state": h(o.value, o.max),
                    "data-value": null !== (a = o.value) && void 0 !== a ? a : void 0,
                    "data-max": o.max
                }, l, {
                    ref: r
                }))
            });

            function p(e, r) {
                return `${Math.round(e/r*100)}%`
            }

            function h(e, r) {
                return null == e ? "indeterminate" : e === r ? "complete" : "loading"
            }

            function b(e) {
                return "number" == typeof e
            }

            function y(e) {
                return b(e) && !isNaN(e) && e > 0
            }

            function f(e, r) {
                return b(e) && !isNaN(e) && e <= r && e >= 0
            }
            var v = a(1657);
            let j = s.forwardRef(({
                className: e,
                color: r,
                value: a,
                ...s
            }, n) => (0, t.jsx)(g, {
                ref: n,
                className: (0, v.cn)("relative h-2 w-full overflow-hidden rounded-full bg-border/50", e),
                ...s,
                children: (0, t.jsx)(x, {
                    className: (0, v.cn)("h-full w-full flex-1 bg-primary transition-all", r),
                    style: {
                        transform: `translateX(-${100-(a||0)}%)`
                    }
                })
            }));
            j.displayName = g.displayName
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
        52810: function(e, r, a) {
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
            let t = (0, a(87461).Z)("CalendarCheck", [
                ["path", {
                    d: "M8 2v4",
                    key: "1cmpym"
                }],
                ["path", {
                    d: "M16 2v4",
                    key: "4m81vk"
                }],
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "4",
                    rx: "2",
                    key: "1hopcy"
                }],
                ["path", {
                    d: "M3 10h18",
                    key: "8toen8"
                }],
                ["path", {
                    d: "m9 16 2 2 4-4",
                    key: "19s6y9"
                }]
            ])
        },
        12409: function(e, r, a) {
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
            let t = (0, a(87461).Z)("CircleDollarSign", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
                    key: "1h4pet"
                }],
                ["path", {
                    d: "M12 18V6",
                    key: "zqpxq5"
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
        63915: function(e, r, a) {
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
            let t = (0, a(87461).Z)("Printer", [
                ["polyline", {
                    points: "6 9 6 2 18 2 18 9",
                    key: "1306q4"
                }],
                ["path", {
                    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
                    key: "143wyd"
                }],
                ["rect", {
                    width: "12",
                    height: "8",
                    x: "6",
                    y: "14",
                    key: "5ipwut"
                }]
            ])
        }
    },
    function(e) {
        e.O(0, [7674, 1936, 3407, 6349, 9346, 8751, 1257, 6436, 1343, 5845, 2971, 8069, 1744], function() {
            return e(e.s = 55119)
        }), _N_E = e.O()
    }
]);