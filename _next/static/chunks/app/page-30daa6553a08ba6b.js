(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931, 7279, 2703, 7696], {
        67530: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 30868)), Promise.resolve().then(r.bind(r, 53052)), Promise.resolve().then(r.bind(r, 41885)), Promise.resolve().then(r.bind(r, 86728)), Promise.resolve().then(r.bind(r, 29275)), Promise.resolve().then(r.bind(r, 25825)), Promise.resolve().then(r.t.bind(r, 81749, 23)), Promise.resolve().then(r.t.bind(r, 25250, 23)), Promise.resolve().then(r.t.bind(r, 33234, 23))
        },
        30868: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                SalesHistory: function() {
                    return g
                }
            });
            var a = r(3827),
                o = r(46136),
                n = r(41196),
                i = r(27815);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let s = (0, r(87461).Z)("History", [
                ["path", {
                    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
                    key: "1357e3"
                }],
                ["path", {
                    d: "M3 3v5h5",
                    key: "1xhq8a"
                }],
                ["path", {
                    d: "M12 7v5l4 2",
                    key: "1fdv2h"
                }]
            ]);
            var d = r(31937),
                l = r(98296),
                c = r(28814),
                u = r(57084),
                m = r(85754),
                h = r(91774);
            o.kL.register(o.uw, o.f$, o.od, o.jn, o.u, o.Gu);
            let g = () => {
                let {
                    theme: e
                } = (0, h.F)(), t = {
                    labels: ["08/10", "08/11", "08/12", "08/13", "08/14", "08/15", "08/16", "08/17", "08/18", "08/19", "08/20", "08/21", "08/22", "08/23", "08/24", "08/25", "08/26", "08/27", "08/28"],
                    datasets: [{
                        fill: !0,
                        label: "Current Month",
                        data: [115, 115, 112, 110, 113, 110, 111, 115, 111, 111, 115, 112, 111, 111, 110, 111, 114, 115, 114],
                        borderColor: `rgb(${u.DM.cyan})`,
                        backgroundColor: e => (0, u.sG)(e, `rgba(${u.DM.cyan}, 0.2)`, `rgba(${u.DM.cyan}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${u.DM.cyan})`,
                        pointBorderColor: `rgb(${u.DM.cyan})`,
                        pointHoverBorderColor: `rgb(${u.DM.cyan})`,
                        pointHoverBackgroundColor: `rgb(${u.DM.cyan})`
                    }, {
                        fill: !0,
                        label: "Previous Month",
                        data: [108, 107, 108, 109, 106, 109, 109, 107, 106, 109, 109, 109, 107, 109, 109, 107, 109, 107, 109],
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
                }, r = {
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
                                maxTicksLimit: 8
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
                                maxTicksLimit: 7,
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
                return (0, a.jsxs)(i.Zb, {
                    children: [(0, a.jsxs)(i.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, a.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-cyan-500/10 text-cyan-500",
                            children: (0, a.jsx)(s, {
                                className: "w-5"
                            })
                        }), (0, a.jsx)(i.ll, {
                            children: "Sales History"
                        }), (0, a.jsxs)("div", {
                            className: "-me-1.5 -mt-3 ms-auto flex items-center",
                            children: [(0, a.jsxs)("div", {
                                className: "me-3 flex items-center text-xs text-emerald-500 max-sm:hidden",
                                children: [(0, a.jsx)(d.Z, {
                                    className: "me-1 w-4"
                                }), "33.47%"]
                            }), (0, a.jsx)(m.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "max-sm:hidden",
                                children: (0, a.jsx)(l.Z, {
                                    className: "w-4"
                                })
                            }), (0, a.jsx)(m.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, a.jsx)(c.Z, {
                                    className: "w-4"
                                })
                            })]
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(n.x1, {
                            height: 250,
                            options: r,
                            data: t
                        })
                    })]
                })
            }
        },
        53052: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                StoreSessions: function() {
                    return g
                }
            });
            var a = r(3827),
                o = r(46136),
                n = r(41196),
                i = r(27815),
                s = r(23801),
                d = r(30660),
                l = r(98296),
                c = r(28814),
                u = r(57084),
                m = r(85754),
                h = r(91774);
            o.kL.register(o.uw, o.f$, o.od, o.jn, o.u, o.Gu);
            let g = () => {
                let {
                    theme: e
                } = (0, h.F)(), t = {
                    labels: ["08/10", "08/11", "08/12", "08/13", "08/14", "08/15", "08/16", "08/17", "08/18", "08/19", "08/20", "08/21", "08/22", "08/23", "08/24", "08/25", "08/26", "08/27", "08/28"],
                    datasets: [{
                        fill: !0,
                        label: "Current Month",
                        data: [67, 54, 48, 50, 47, 53, 48, 42, 52, 53, 67, 55, 68, 59, 63, 45, 68, 57, 60],
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
                        label: "Current Month",
                        data: [40, 48, 38, 31, 49, 41, 36, 41, 37, 46, 31, 34, 37, 38, 49, 43, 41, 33, 48],
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
                }, r = {
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
                                maxTicksLimit: 8
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, u.yW)(e)
                            },
                            min: 0,
                            max: 100,
                            ticks: { ...(0, u.t8)(e),
                                maxTicksLimit: 8,
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
                return (0, a.jsxs)(i.Zb, {
                    children: [(0, a.jsxs)(i.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, a.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-emerald-500/10 text-emerald-500",
                            children: (0, a.jsx)(s.Z, {
                                className: "w-5"
                            })
                        }), (0, a.jsx)(i.ll, {
                            children: "Store Sessions"
                        }), (0, a.jsxs)("div", {
                            className: "-me-1.5 -mt-3 ms-auto flex items-center",
                            children: [(0, a.jsxs)("div", {
                                className: "me-3 flex items-center text-xs text-red-500 max-sm:hidden",
                                children: [(0, a.jsx)(d.Z, {
                                    className: "me-1 w-4"
                                }), "9.39%"]
                            }), (0, a.jsx)(m.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "max-sm:hidden",
                                children: (0, a.jsx)(l.Z, {
                                    className: "w-4"
                                })
                            }), (0, a.jsx)(m.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, a.jsx)(c.Z, {
                                    className: "w-4"
                                })
                            })]
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(n.x1, {
                            height: 250,
                            options: r,
                            data: t
                        })
                    })]
                })
            }
        },
        86728: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DateSwitch: function() {
                    return m
                }
            });
            var a = r(3827),
                o = r(64090),
                n = r(3251),
                i = r(25890),
                s = r(1657),
                d = r(85754),
                l = r(97658),
                c = r(35216);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let u = (0, r(87461).Z)("Clock3", [
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
                let [t, r] = o.useState({
                    from: new Date(2022, 0, 20),
                    to: (0, n.E)(new Date(2022, 0, 20), 20)
                });
                return (0, a.jsx)("div", {
                    className: (0, s.cn)("grid gap-2", e),
                    children: (0, a.jsxs)(c.J2, {
                        children: [(0, a.jsx)(c.xo, {
                            asChild: !0,
                            children: (0, a.jsxs)(d.z, {
                                id: "date",
                                size: "lg",
                                className: (0, s.cn)("h-10 w-56 justify-start rounded-full border border-white/50 bg-white/10 px-4 text-start text-sm font-normal text-body ring-white/25 hover:border-white hover:bg-white/20 hover:ring-4 focus:ring-4 data-[state=open]:ring-4 dark:border-border dark:bg-accent/5 dark:ring-ring", !t && "text-muted-foreground"),
                                children: [(0, a.jsx)(u, {
                                    size: 20,
                                    strokeWidth: 1.5,
                                    className: "-ms-1 me-2 shrink-0"
                                }), (null == t ? void 0 : t.from) ? t.to ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, i.WU)(t.from, "LLL dd, y"), " - ", (0, i.WU)(t.to, "LLL dd, y")]
                                }) : (0, i.WU)(t.from, "LLL dd, y") : (0, a.jsx)("span", {
                                    children: "Pick a date"
                                })]
                            })
                        }), (0, a.jsx)(c.yk, {
                            className: "w-auto p-0",
                            align: "start",
                            children: (0, a.jsx)(l.f, {
                                initialFocus: !0,
                                mode: "range",
                                defaultMonth: null == t ? void 0 : t.from,
                                selected: t,
                                onSelect: r,
                                numberOfMonths: 1
                            })
                        })]
                    })
                })
            }
        },
        97658: function(e, t, r) {
            "use strict";
            r.d(t, {
                f: function() {
                    return l
                }
            });
            var a = r(3827);
            r(64090);
            var o = r(49108),
                n = r(37805),
                i = r(26463),
                s = r(1657),
                d = r(85754);

            function l({
                className: e,
                classNames: t,
                showOutsideDays: r = !0,
                ...l
            }) {
                return (0, a.jsx)(i._W, {
                    showOutsideDays: r,
                    className: (0, s.cn)("p-3", e),
                    classNames: {
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-sm font-medium",
                        nav: "space-x-1 flex items-center",
                        nav_button: (0, s.cn)((0, d.d)({
                            variant: "outline"
                        }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex",
                        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                        row: "flex w-full mt-2",
                        cell: "h-8 w-8 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-md first:[&:has([aria-selected])]:rounded-md last:[&:has([aria-selected])]:rounded-md focus-within:relative focus-within:z-20",
                        day: (0, s.cn)((0, d.d)({
                            variant: "ghost"
                        }), "h-8 w-8 p-0 text-xs font-normal aria-selected:opacity-100"),
                        day_range_end: "day-range-end rounded-md",
                        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                        day_today: "bg-accent text-accent-foreground",
                        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:text-muted-foreground aria-selected:opacity-100 aria-selected:text-primary-foreground",
                        day_disabled: "text-muted-foreground opacity-50",
                        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground rounded-none !text-body",
                        day_hidden: "invisible",
                        ...t
                    },
                    components: {
                        IconLeft: ({ ...e
                        }) => (0, a.jsx)(o.Z, {
                            className: "h-4 w-4"
                        }),
                        IconRight: ({ ...e
                        }) => (0, a.jsx)(n.Z, {
                            className: "h-4 w-4"
                        })
                    },
                    ...l
                })
            }
            l.displayName = "Calendar"
        },
        35216: function(e, t, r) {
            "use strict";
            r.d(t, {
                J2: function() {
                    return s
                },
                xo: function() {
                    return d
                },
                yk: function() {
                    return l
                }
            });
            var a = r(3827),
                o = r(64090),
                n = r(57427),
                i = r(1657);
            let s = n.fC,
                d = n.xz,
                l = o.forwardRef(({
                    className: e,
                    align: t = "center",
                    sideOffset: r = 4,
                    ...o
                }, s) => (0, a.jsx)(n.h_, {
                    children: (0, a.jsx)(n.VY, {
                        ref: s,
                        align: t,
                        sideOffset: r,
                        className: (0, i.cn)("z-50 w-72 rounded-lg border border-popover bg-popover p-4 shadow-xl shadow-black/5 outline-none backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
                        ...o
                    })
                }));
            l.displayName = n.VY.displayName
        },
        30660: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let a = (0, r(87461).Z)("ArrowDownCircle", [
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
        31937: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let a = (0, r(87461).Z)("ArrowUpCircle", [
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
        98296: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let a = (0, r(87461).Z)("HardDriveDownload", [
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
        28814: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let a = (0, r(87461).Z)("Info", [
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
        23801: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let a = (0, r(87461).Z)("Store", [
                ["path", {
                    d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
                    key: "ztvudi"
                }],
                ["path", {
                    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
                    key: "1b2hhj"
                }],
                ["path", {
                    d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",
                    key: "2ebpfo"
                }],
                ["path", {
                    d: "M2 7h20",
                    key: "1fcdvo"
                }],
                ["path", {
                    d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
                    key: "jon5kx"
                }]
            ])
        }
    },
    function(e) {
        e.O(0, [7674, 1936, 3407, 6349, 5250, 9346, 1749, 8751, 1257, 6436, 1343, 5845, 2971, 8069, 1744], function() {
            return e(e.s = 67530)
        }), _N_E = e.O()
    }
]);