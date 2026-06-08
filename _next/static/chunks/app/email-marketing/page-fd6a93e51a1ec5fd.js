(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1207, 7279, 2703, 7696], {
        94967: function(e, s, a) {
            Promise.resolve().then(a.bind(a, 48282)), Promise.resolve().then(a.bind(a, 81566)), Promise.resolve().then(a.bind(a, 56033)), Promise.resolve().then(a.bind(a, 11838)), Promise.resolve().then(a.bind(a, 92821)), Promise.resolve().then(a.bind(a, 9372)), Promise.resolve().then(a.bind(a, 41885)), Promise.resolve().then(a.bind(a, 86728)), Promise.resolve().then(a.bind(a, 29275)), Promise.resolve().then(a.bind(a, 25825)), Promise.resolve().then(a.bind(a, 88219)), Promise.resolve().then(a.t.bind(a, 33234, 23))
        },
        48282: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                CampaignReach: function() {
                    return x
                }
            });
            var r = a(3827),
                n = a(85754),
                t = a(27815),
                l = a(83368),
                i = a(28814),
                c = a(57084),
                d = a(91774),
                o = a(41196),
                m = a(46136);
            m.kL.register(m.uw, m.f$, m.ZL, m.u);
            let x = () => {
                let {
                    theme: e
                } = (0, d.F)(), s = {
                    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"],
                    datasets: [{
                        label: "Impressions",
                        data: [100, 150, 180, 100, 240, 150, 200, 140, 145, 160, 220, 180, 100, 150, 190, 160, 195, 160, 170, 150, 200, 160, 190, 157, 190],
                        backgroundColor: `rgba(${c.DM.blue},0.25)`,
                        categoryPercentage: .25,
                        borderWidth: 0,
                        borderRadius: 5
                    }, {
                        label: "Views",
                        data: [50, 100, 120, 50, 180, 100, 150, 100, 100, 130, 170, 150, 90, 120, 150, 110, 140, 100, 150, 100, 170, 110, 160, 100, 140],
                        backgroundColor: `rgba(${c.DM.blue},0.5)`,
                        categoryPercentage: .25,
                        borderWidth: 0,
                        borderRadius: 5
                    }, {
                        label: "Clicks",
                        data: [10, 30, 40, 10, 60, 20, 40, 10, 20, 20, 50, 20, 10, 30, 40, 20, 40, 30, 50, 20, 35, 40, 50, 10, 30],
                        backgroundColor: `rgb(${c.DM.blue})`,
                        categoryPercentage: .25,
                        borderWidth: 0,
                        borderRadius: 5
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
                            stacked: !0,
                            border: {
                                display: !1
                            },
                            grid: {
                                display: !1
                            },
                            distribution: "linear",
                            ticks: { ...(0, c.t8)(e, 0, "center")
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, c.yW)(e)
                            },
                            ticks: { ...(0, c.t8)(e)
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, c.MS)(e),
                            callbacks: {
                                label: e => e.formattedValue + "K"
                            }
                        }
                    }
                };
                return (0, r.jsxs)(t.Zb, {
                    className: "mt-2",
                    children: [(0, r.jsxs)(t.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-blue-500/10 text-blue-500",
                            children: (0, r.jsx)(l.Z, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(t.ll, {
                            children: "Campaigns Reach"
                        }), (0, r.jsx)(n.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, r.jsx)(i.Z, {
                                className: "w-4"
                            })
                        }), (0, r.jsx)(n.z, {
                            variant: "outline",
                            size: "sm",
                            children: "Report"
                        })]
                    }), (0, r.jsx)(t.aY, {
                        children: (0, r.jsx)(o.$Q, {
                            height: 250,
                            data: s,
                            options: a
                        })
                    }), (0, r.jsx)(t.eW, {
                        children: (0, r.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgba(${c.DM.blue}, 0.25)`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Impressions"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgba(${c.DM.blue}, 0.5)`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Views"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${c.DM.blue})`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Clicks"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        81566: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                DeliveredOpen: function() {
                    return g
                }
            });
            var r = a(3827),
                n = a(85754),
                t = a(27815),
                l = a(52810),
                i = a(31937),
                c = a(98296),
                d = a(28814),
                o = a(57084),
                m = a(91774),
                x = a(41196),
                h = a(46136);
            h.kL.register(h.uw, h.f$, h.ZL, h.u);
            let g = () => {
                let {
                    theme: e
                } = (0, m.F)(), s = {
                    opened: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                    delivered: "light" === e ? `rgba(${o.DM.teal},0.3)` : `rgba(${o.DM.blue},0.3)`
                }, a = {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20],
                    datasets: [{
                        label: "Opened",
                        data: [75, 54, 145, 110, 145, 35, 135, 100, 30, 60, 70, 90, 100, 80, 180, 134, 180, 70, 225, 150, 35],
                        categoryPercentage: .25,
                        borderRadius: 15,
                        backgroundColor: s.opened,
                        borderWidth: 0,
                        grouped: !1,
                        maxBarThickness: 6
                    }, {
                        label: "Delivered",
                        data: [100, 80, 180, 134, 180, 70, 225, 150, 35, 100, 120, 160, 120, 145, 200, 145, 200, 135, 230, 180, 60],
                        categoryPercentage: .5,
                        borderRadius: 15,
                        backgroundColor: s.delivered,
                        borderWidth: 0,
                        maxBarThickness: 12
                    }]
                }, h = {
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
                            ticks: { ...(0, o.t8)(e),
                                maxTicksLimit: 10
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
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, o.MS)(e),
                            callbacks: {
                                label: e => e.formattedValue + "K"
                            }
                        }
                    }
                };
                return (0, r.jsxs)(t.Zb, {
                    children: [(0, r.jsxs)(t.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-teal-500/10 text-teal-500",
                            children: (0, r.jsx)(l.Z, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(t.ll, {
                            children: "Delivered vs Opened"
                        }), (0, r.jsxs)("div", {
                            className: "-me-1.5 -mt-3 ms-auto flex items-center",
                            children: [(0, r.jsxs)("div", {
                                className: "me-3 flex items-center text-xs text-emerald-500 max-sm:hidden",
                                children: [(0, r.jsx)(i.Z, {
                                    className: "me-1 w-4"
                                }), "2.45%"]
                            }), (0, r.jsx)(n.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "max-sm:hidden",
                                children: (0, r.jsx)(c.Z, {
                                    className: "w-4"
                                })
                            }), (0, r.jsx)(n.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, r.jsx)(d.Z, {
                                    className: "w-4"
                                })
                            })]
                        })]
                    }), (0, r.jsx)(t.aY, {
                        children: (0, r.jsx)(x.$Q, {
                            height: 250,
                            data: a,
                            options: h
                        })
                    }), (0, r.jsx)(t.eW, {
                        children: (0, r.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `${s.delivered}`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Delivered"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `${s.opened}`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Opened"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        56033: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                EmailCampaignSales: function() {
                    return g
                }
            });
            var r = a(3827),
                n = a(46136),
                t = a(41196),
                l = a(27815),
                i = a(23801),
                c = a(30660),
                d = a(98296),
                o = a(28814),
                m = a(57084),
                x = a(85754),
                h = a(91774);
            n.kL.register(n.uw, n.f$, n.od, n.jn, n.u, n.Gu);
            let g = () => {
                let {
                    theme: e
                } = (0, h.F)(), s = {
                    labels: ["08/10", "08/11", "08/12", "08/13", "08/14", "08/15", "08/16", "08/17", "08/18", "08/19", "08/20", "08/21", "08/22", "08/23", "08/24", "08/25", "08/26", "08/27", "08/28"],
                    datasets: [{
                        fill: !0,
                        label: "Current Month",
                        data: [67, 54, 48, 50, 47, 53, 48, 42, 52, 53, 67, 55, 68, 59, 63, 45, 68, 57, 60],
                        borderColor: `rgb(${m.DM.cyan})`,
                        backgroundColor: e => (0, m.sG)(e, `rgba(${m.DM.cyan}, 0.2)`, `rgba(${m.DM.cyan}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${m.DM.cyan})`,
                        pointBorderColor: `rgb(${m.DM.cyan})`,
                        pointHoverBorderColor: `rgb(${m.DM.cyan})`,
                        pointHoverBackgroundColor: `rgb(${m.DM.cyan})`
                    }, {
                        fill: !0,
                        label: "Current Month",
                        data: [40, 48, 38, 31, 49, 41, 36, 41, 37, 46, 31, 34, 37, 38, 49, 43, 41, 33, 48],
                        borderColor: `rgb(${m.DM.orange})`,
                        backgroundColor: e => (0, m.sG)(e, `rgba(${m.DM.orange}, 0.2)`, `rgba(${m.DM.orange}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${m.DM.orange})`,
                        pointBorderColor: `rgb(${m.DM.orange})`,
                        pointHoverBorderColor: `rgb(${m.DM.orange})`,
                        pointHoverBackgroundColor: `rgb(${m.DM.orange})`
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
                            grid: { ...(0, m.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, m.t8)(e),
                                maxTicksLimit: 8
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, m.yW)(e)
                            },
                            min: 0,
                            max: 100,
                            ticks: { ...(0, m.t8)(e),
                                maxTicksLimit: 8,
                                callback: e => String(e) + "K"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltip: { ...(0, m.MS)(e)
                        }
                    }
                };
                return (0, r.jsxs)(l.Zb, {
                    children: [(0, r.jsxs)(l.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-amber-500/10 text-amber-500",
                            children: (0, r.jsx)(i.Z, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(l.ll, {
                            children: "Email Campaign Sales"
                        }), (0, r.jsxs)("div", {
                            className: "-me-1.5 -mt-3 ms-auto flex items-center",
                            children: [(0, r.jsxs)("div", {
                                className: "me-3 flex items-center text-xs text-red-500 max-sm:hidden",
                                children: [(0, r.jsx)(c.Z, {
                                    className: "me-1 w-4"
                                }), "9.39%"]
                            }), (0, r.jsx)(x.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "max-sm:hidden",
                                children: (0, r.jsx)(d.Z, {
                                    className: "w-4"
                                })
                            }), (0, r.jsx)(x.z, {
                                variant: "ghost",
                                size: "icon",
                                children: (0, r.jsx)(o.Z, {
                                    className: "w-4"
                                })
                            })]
                        })]
                    }), (0, r.jsx)(l.aY, {
                        children: (0, r.jsx)(t.x1, {
                            height: 250,
                            options: a,
                            data: s
                        })
                    }), (0, r.jsx)(l.eW, {
                        children: (0, r.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${m.DM.cyan})`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Transections"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${m.DM.orange})`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Revenue"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        11838: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                EmailMarketingFunnel: function() {
                    return u
                }
            });
            var r = a(3827),
                n = a(85754),
                t = a(27815),
                l = a(37211),
                i = a(28814),
                c = a(87461);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let d = (0, c.Z)("MailCheck", [
                ["path", {
                    d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
                    key: "12jkf8"
                }],
                ["path", {
                    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
                    key: "1ocrg3"
                }],
                ["path", {
                    d: "m16 19 2 2 4-4",
                    key: "1b14m6"
                }]
            ]);
            var o = a(83368);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let m = (0, c.Z)("MailOpen", [
                ["path", {
                    d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
                    key: "1jhwl8"
                }],
                ["path", {
                    d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",
                    key: "1qfld7"
                }]
            ]);
            var x = a(28084),
                h = a(12409);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let g = (0, c.Z)("TrendingUp", [
                    ["polyline", {
                        points: "22 7 13.5 15.5 8.5 10.5 2 17",
                        key: "126l90"
                    }],
                    ["polyline", {
                        points: "16 7 22 7 22 13",
                        key: "kwv8wd"
                    }]
                ]),
                u = () => (0, r.jsxs)(t.Zb, {
                    className: "mt-2",
                    children: [(0, r.jsxs)(t.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-blue-500/10 text-blue-500",
                            children: (0, r.jsx)(l.Z, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(t.ll, {
                            children: "Email Marketing Funnel"
                        }), (0, r.jsx)(n.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, r.jsx)(i.Z, {
                                className: "w-4"
                            })
                        }), (0, r.jsx)(n.z, {
                            variant: "outline",
                            size: "sm",
                            children: "Report"
                        })]
                    }), (0, r.jsxs)(t.aY, {
                        className: "text-headings",
                        children: [(0, r.jsxs)("div", {
                            className: "flex h-24 items-end rounded-t bg-sky-500/10 px-5 pb-2",
                            children: [(0, r.jsx)(d, {
                                className: "me-3 w-5"
                            }), (0, r.jsx)("div", {
                                children: "Total Sent"
                            }), (0, r.jsx)("div", {
                                className: "ms-auto",
                                children: "98.2%"
                            }), (0, r.jsx)("div", {
                                className: "w-16 text-end",
                                children: "10,982"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex h-20 items-end bg-sky-500/25 px-5 pb-2",
                            children: [(0, r.jsx)(o.Z, {
                                className: "me-3 w-5"
                            }), (0, r.jsx)("div", {
                                children: "Delivered"
                            }), (0, r.jsx)("div", {
                                className: "ms-auto",
                                children: "75.1%"
                            }), (0, r.jsx)("div", {
                                className: "w-16 text-end",
                                children: "9,721"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex h-16 items-end bg-sky-500/50 px-5 pb-2",
                            children: [(0, r.jsx)(m, {
                                className: "me-3 w-5"
                            }), (0, r.jsx)("div", {
                                children: "Openes"
                            }), (0, r.jsx)("div", {
                                className: "ms-auto",
                                children: "59.8%"
                            }), (0, r.jsx)("div", {
                                className: "w-16 text-end",
                                children: "7,212"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex h-10 items-center rounded-b bg-sky-500/90 px-5",
                            children: [(0, r.jsx)(x.Z, {
                                className: "me-3 w-5"
                            }), (0, r.jsx)("div", {
                                children: "Clicks"
                            }), (0, r.jsx)("div", {
                                className: "ms-auto",
                                children: "34.5%"
                            }), (0, r.jsx)("div", {
                                className: "w-16 text-end",
                                children: "4,943"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "mt-3 flex items-center ps-5",
                            children: [(0, r.jsx)(h.Z, {
                                className: "me-3 w-5"
                            }), (0, r.jsx)("div", {
                                children: "Total Conversion Rate"
                            }), (0, r.jsxs)("div", {
                                className: "ms-auto flex items-center rounded bg-emerald-500/10 px-2 py-1 text-sm text-emerald-500",
                                children: ["62.5%", (0, r.jsx)(g, {
                                    className: "ms-2 w-4"
                                })]
                            })]
                        })]
                    })]
                })
        },
        92821: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                GeographicalEngagements: function() {
                    return x
                }
            });
            var r = a(3827),
                n = a(85754),
                t = a(27815);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let l = (0, a(87461).Z)("Globe", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                    key: "13o1zl"
                }],
                ["path", {
                    d: "M2 12h20",
                    key: "9i4pu4"
                }]
            ]);
            var i = a(28814),
                c = a(31937),
                d = a(30660),
                o = a(20703),
                m = a(1657);
            let x = () => {
                let e = [{
                    img: "us",
                    country: "United States of America",
                    clicks: 6732,
                    up: !0,
                    percentage: 44,
                    change: 4.58
                }, {
                    img: "japan",
                    country: "Japan",
                    clicks: 4532,
                    up: !0,
                    percentage: 32,
                    change: .43
                }, {
                    img: "england",
                    country: "United Kingdom",
                    clicks: 4487,
                    up: !1,
                    percentage: 24,
                    change: 5.43
                }, {
                    img: "china",
                    country: "China",
                    clicks: 3982,
                    up: !0,
                    percentage: 19,
                    change: 21.54
                }, {
                    img: "germany",
                    country: "Germany",
                    clicks: 3241,
                    up: !1,
                    percentage: 16,
                    change: 10.32
                }, {
                    img: "france",
                    country: "France",
                    clicks: 2985,
                    up: !0,
                    percentage: 9,
                    change: .54
                }];
                return (0, r.jsxs)(t.Zb, {
                    className: "mt-2",
                    children: [(0, r.jsxs)(t.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 shrink-0 place-content-center rounded bg-amber-500/10 text-amber-500",
                            children: (0, r.jsx)(l, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(t.ll, {
                            children: "Geographical Engagements"
                        }), (0, r.jsx)(n.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, r.jsx)(i.Z, {
                                className: "w-4"
                            })
                        }), (0, r.jsx)(n.z, {
                            variant: "outline",
                            size: "sm",
                            className: "max-sm:hidden",
                            children: "Report"
                        })]
                    }), (0, r.jsx)(t.aY, {
                        children: e.map((s, a) => (0, r.jsxs)("div", {
                            className: "flex items-start",
                            children: [(0, r.jsx)(o.default, {
                                src: `/img/flags/${s.img}.svg`,
                                width: 50,
                                height: 50,
                                alt: s.country,
                                className: "me-4 h-6 w-6 shrink-0 rounded-full"
                            }), (0, r.jsxs)("div", {
                                className: (0, m.cn)("flex flex-1 items-center border-border", a !== e.length - 1 && "mb-2 border-b pb-2.5"),
                                children: [(0, r.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, r.jsx)("div", {
                                        className: "mb-1 text-headings",
                                        children: s.country
                                    }), (0, r.jsxs)("div", {
                                        className: "text-xs text-muted",
                                        children: [s.clicks, " Clicks"]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: (0, m.cn)("me-3 hidden items-center text-xs sm:flex", s.up ? "text-emerald-500" : "text-red-500"),
                                    children: [s.change, "%", s.up ? (0, r.jsx)(c.Z, {
                                        className: "ms-2 w-4  text-emerald-500"
                                    }) : (0, r.jsx)(d.Z, {
                                        className: "ms-2 w-4"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "w-12 text-end text-lg text-headings",
                                    children: [s.percentage, "%"]
                                })]
                            })]
                        }, a))
                    })]
                })
            }
        },
        9372: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                SentNotSent: function() {
                    return x
                }
            });
            var r = a(3827),
                n = a(85754),
                t = a(27815),
                l = a(57084);
            /**
             * @license lucide-react v0.341.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let i = (0, a(87461).Z)("Send", [
                ["path", {
                    d: "m22 2-7 20-4-9-9-4Z",
                    key: "1q3vgg"
                }],
                ["path", {
                    d: "M22 2 11 13",
                    key: "nzbqef"
                }]
            ]);
            var c = a(28814),
                d = a(91774),
                o = a(41196),
                m = a(46136);
            m.kL.register(m.uw, m.f$, m.od, m.jn, m.u, m.Gu);
            let x = () => {
                let {
                    theme: e
                } = (0, d.F)(), s = {
                    labels: ["08/10", "08/11", "08/12", "08/13", "08/14", "08/15", "08/16", "08/17", "08/18", "08/19", "08/20", "08/21", "08/22", "08/23", "08/24", "08/25", "08/26", "08/27", "08/28"],
                    datasets: [{
                        fill: !0,
                        label: "Current Month",
                        data: [115, 115, 112, 110, 113, 110, 111, 115, 111, 111, 115, 112, 111, 111, 110, 111, 114, 115, 114],
                        borderColor: `rgb(${l.DM.orange})`,
                        backgroundColor: e => (0, l.sG)(e, `rgba(${l.DM.orange}, 0.2)`, `rgba(${l.DM.orange}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${l.DM.orange})`,
                        pointBorderColor: `rgb(${l.DM.orange})`,
                        pointHoverBorderColor: `rgb(${l.DM.orange})`,
                        pointHoverBackgroundColor: `rgb(${l.DM.orange})`
                    }, {
                        fill: !0,
                        label: "Previous Month",
                        data: [108, 107, 108, 109, 106, 109, 109, 107, 106, 109, 109, 109, 107, 109, 109, 107, 109, 107, 109],
                        borderColor: `rgb(${l.DM.green})`,
                        backgroundColor: e => (0, l.sG)(e, `rgba(${l.DM.green}, 0.2)`, `rgba(${l.DM.green}, 0)`),
                        tension: .35,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: `rgb(${l.DM.green})`,
                        pointBorderColor: `rgb(${l.DM.green})`,
                        pointHoverBorderColor: `rgb(${l.DM.green})`,
                        pointHoverBackgroundColor: `rgb(${l.DM.green})`
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
                return (0, r.jsxs)(t.Zb, {
                    className: "mt-2",
                    children: [(0, r.jsxs)(t.Ol, {
                        className: "flex flex-row items-center",
                        children: [(0, r.jsx)("i", {
                            className: "me-3 grid h-8 w-8 place-content-center rounded bg-emerald-500/10 text-emerald-500",
                            children: (0, r.jsx)(i, {
                                className: "w-5"
                            })
                        }), (0, r.jsx)(t.ll, {
                            children: "Sent vs Not Sent"
                        }), (0, r.jsx)(n.z, {
                            variant: "ghost",
                            size: "icon",
                            className: "ms-auto",
                            children: (0, r.jsx)(c.Z, {
                                className: "w-4"
                            })
                        }), (0, r.jsx)(n.z, {
                            variant: "outline",
                            size: "sm",
                            children: "Report"
                        })]
                    }), (0, r.jsx)(t.aY, {
                        children: (0, r.jsx)(o.x1, {
                            height: 250,
                            options: a,
                            data: s
                        })
                    }), (0, r.jsx)(t.eW, {
                        children: (0, r.jsxs)("ul", {
                            className: "mx-auto flex items-center justify-center gap-5 text-xs",
                            children: [(0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${l.DM.green})`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Current Year"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "flex items-center",
                                children: [(0, r.jsx)("i", {
                                    className: "me-2 h-2 w-2 rounded-full",
                                    style: {
                                        background: `rgb(${l.DM.orange})`
                                    }
                                }), (0, r.jsx)("span", {
                                    children: "Previous Year"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        52810: function(e, s, a) {
            "use strict";
            a.d(s, {
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
            let r = (0, a(87461).Z)("CalendarCheck", [
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
        37211: function(e, s, a) {
            "use strict";
            a.d(s, {
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
            let r = (0, a(87461).Z)("Filter", [
                ["polygon", {
                    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
                    key: "1yg77f"
                }]
            ])
        },
        28084: function(e, s, a) {
            "use strict";
            a.d(s, {
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
            let r = (0, a(87461).Z)("MousePointerSquare", [
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
        23801: function(e, s, a) {
            "use strict";
            a.d(s, {
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
            let r = (0, a(87461).Z)("Store", [
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
        e.O(0, [7674, 1936, 3407, 6349, 9346, 1749, 8751, 1257, 6436, 1343, 5845, 5955, 2971, 8069, 1744], function() {
            return e(e.s = 94967)
        }), _N_E = e.O()
    }
]);