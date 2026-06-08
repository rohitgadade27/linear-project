(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5066, 7279, 2703, 7696], {
        84592: function(e, r, t) {
            Promise.resolve().then(t.bind(t, 37535)), Promise.resolve().then(t.bind(t, 20849)), Promise.resolve().then(t.bind(t, 45449)), Promise.resolve().then(t.bind(t, 11565)), Promise.resolve().then(t.bind(t, 16069)), Promise.resolve().then(t.bind(t, 39888)), Promise.resolve().then(t.bind(t, 42605)), Promise.resolve().then(t.bind(t, 58519)), Promise.resolve().then(t.bind(t, 49325)), Promise.resolve().then(t.bind(t, 34790)), Promise.resolve().then(t.bind(t, 57294)), Promise.resolve().then(t.bind(t, 41885))
        },
        37535: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.uw, n.f$, n.od, n.jn, n.u, n.Gu), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["100", "200", "300", "400", "500", "600", "700"],
                    datasets: [{
                        label: "January",
                        data: [15, 3, 10, 9, 29, 5, 22],
                        fill: !0,
                        borderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        backgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.1)` : `rgba(${o.DM.blue}, 0.1)`,
                        hoverBackgroundColor: "light" === e ? `rgba(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        tension: .4,
                        pointBackgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        pointBorderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        pointHoverBorderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        pointHoverBorderWidth: 1.75,
                        pointHoverBackgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`
                    }]
                }, t = {
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
                            grid: { ...(0, o.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, o.t8)(e)
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e),
                                maxTicksLimit: 8
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)(i.ll, {
                            className: "",
                            children: "Area Chart"
                        }), (0, a.jsx)("p", {
                            children: "An area chart is a line chart where the area between the line and axes are filled with color or texture. Often, it is used to show trend data, and the comparison of two data sets."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.x1, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        20849: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.uw, n.f$, n.ZL, n.u, n.De), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["100", "200", "300", "400", "500", "600", "700"],
                    datasets: [{
                        label: "This Year",
                        data: [128, 117, 145, 180, 225, 150, 135],
                        borderRadius: 1,
                        backgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        borderWidth: 0,
                        barThickness: 8
                    }, {
                        label: "Last Year",
                        data: [100, 80, 180, 134, 180, 70, 225],
                        borderRadius: 1,
                        backgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        borderWidth: 0,
                        barThickness: 8
                    }]
                }, t = {
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
                            grid: { ...(0, o.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, o.t8)(e)
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e),
                                maxTicksLimit: 8
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Bar Chart"
                        }), (0, a.jsx)("p", {
                            children: "A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.$Q, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        45449: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.uw, n.f$, n.od, n.jn, n.u, n.Gu), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["100", "200", "300", "400", "500", "600", "700"],
                    datasets: [{
                        label: "This Year",
                        data: [15, 3, 10, 9, 29, 5, 22],
                        borderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        backgroundColor: "transparent",
                        hoverBackgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        tension: .4,
                        pointBackgroundColor: "transparent",
                        pointBorderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        pointHoverBorderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        pointHoverBorderWidth: 1.75,
                        pointHoverBackgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`
                    }, {
                        label: "February",
                        data: [5, 19, 15, 24, 12, 30, 9],
                        borderColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        backgroundColor: "transparent",
                        hoverBackgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        tension: .4,
                        pointBackgroundColor: "transparent",
                        pointBorderColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        pointHoverBorderColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        pointHoverBorderWidth: 1.75,
                        pointHoverBackgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`
                    }]
                }, t = {
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
                            grid: { ...(0, o.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, o.t8)(e)
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e),
                                maxTicksLimit: 8
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Curved Line Chart"
                        }), (0, a.jsxs)("p", {
                            children: ["Curved lines are possible using the ", (0, a.jsx)("code", {
                                children: "tension"
                            }), " property of the line chart."]
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.x1, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        11565: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.qi, n.u, n.De), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["Google", "Direct", "Bing", "Yahoo", "Others"],
                    datasets: [{
                        data: [23981, 16342, 9736, 7632, 5374],
                        backgroundColor: [`rgb(${o.DM.blue})`, `rgb(${o.DM.green})`, `rgb(${o.DM.purple})`, `rgb(${o.DM.cyan})`, `rgb(${o.DM.orange})`],
                        borderWidth: 4,
                        borderColor: "light" === e ? `rgb(${o.DM.border.light})` : `rgb(${o.DM.border.dark})`,
                        hoverOffset: 1,
                        hoverBorderWidth: 0,
                        borderRadius: 5
                    }]
                }, t = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Daughnut Chart"
                        }), (0, a.jsx)("p", {
                            children: "Doughnut charts are similar to pie charts, but have a cutout which looks like a doughnut. This can be used to show the relationship of a part to a whole."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.$I, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        16069: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.uw, n.f$, n.ZL, n.u, n.De), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["100", "200", "300", "400", "500", "600", "700"],
                    datasets: [{
                        label: "This Year",
                        data: [128, 117, 145, 180, 225, 150, 135],
                        borderRadius: 1,
                        backgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        borderWidth: 0,
                        barThickness: 8
                    }, {
                        label: "Last Year",
                        data: [100, 80, 180, 134, 180, 70, 225],
                        borderRadius: 1,
                        backgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        borderWidth: 0,
                        barThickness: 8
                    }]
                }, t = {
                    maintainAspectRatio: !1,
                    indexAxis: "y",
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
                            grid: { ...(0, o.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, o.t8)(e)
                            }
                        },
                        y: {
                            maxTicksLimit: 8,
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
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Horizontal Bar Chart"
                        }), (0, a.jsx)("p", {
                            children: "Horizontal bar chart is a type of bar chart where the bars are drawn horizontally from left to right, representing the data values for each category."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.$Q, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        39888: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.uw, n.f$, n.od, n.jn, n.u, n.Gu), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["100", "200", "300", "400", "500", "600", "700"],
                    datasets: [{
                        label: "This Year",
                        data: [15, 3, 10, 9, 29, 5, 22],
                        borderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        backgroundColor: "transparent",
                        hoverBackgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: "transparent",
                        pointBorderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        pointHoverBorderColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        pointHoverBorderWidth: 1.75,
                        pointHoverBackgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`
                    }, {
                        label: "February",
                        data: [5, 19, 15, 24, 12, 30, 9],
                        borderColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        backgroundColor: "transparent",
                        hoverBackgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        borderWidth: 1.25,
                        pointRadius: 0,
                        pointBackgroundColor: "transparent",
                        pointBorderColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        pointHoverBorderColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        pointHoverBorderWidth: 1.75,
                        pointHoverBackgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`
                    }]
                }, t = {
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
                            grid: { ...(0, o.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, o.t8)(e)
                            }
                        },
                        y: {
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e),
                                maxTicksLimit: 8
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Line Chart"
                        }), (0, a.jsx)("p", {
                            children: "A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.x1, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        42605: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                PageHeader: function() {
                    return l
                }
            });
            var a = t(3827),
                i = t(37455),
                o = t(29796);
            let l = () => (0, a.jsx)(i.h, {
                title: "Charts",
                children: (0, a.jsxs)(o.a, {
                    className: "max-sm:hidden",
                    children: [(0, a.jsx)(o.g, {
                        href: "/",
                        children: "Miscellaneous"
                    }), (0, a.jsx)(o.g, {
                        children: "Charts and Maps"
                    })]
                })
            })
        },
        58519: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.qi, n.u, n.De), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["Google", "Direct", "Bing", "Yahoo", "Others"],
                    datasets: [{
                        data: [23981, 16342, 9736, 7632, 5374],
                        backgroundColor: [`rgb(${o.DM.blue})`, `rgb(${o.DM.green})`, `rgb(${o.DM.purple})`, `rgb(${o.DM.cyan})`, `rgb(${o.DM.orange})`],
                        borderWidth: 4,
                        borderColor: "light" === e ? `rgb(${o.DM.border.light})` : `rgb(${o.DM.border.dark})`,
                        hoverOffset: 1,
                        hoverBorderWidth: 0,
                        borderRadius: 5
                    }]
                }, t = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Pie Chart"
                        }), (0, a.jsx)("p", {
                            children: "Pie charts are divided into segments, the arc of each segment shows the proportional value of each piece of data."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.by, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        49325: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.f$, n.od, n.jn, n.u, n.De), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["100", "200", "300", "400", "500", "600", "700"],
                    datasets: [{
                        label: "This Year",
                        data: [{
                            x: 16.4,
                            y: 5.4
                        }, {
                            x: 21.7,
                            y: 2
                        }, {
                            x: 25.4,
                            y: 3
                        }, {
                            x: 19,
                            y: 2
                        }, {
                            x: 10.9,
                            y: 1
                        }, {
                            x: 13.6,
                            y: 3.2
                        }, {
                            x: 10.9,
                            y: 7.4
                        }, {
                            x: 10.9,
                            y: 0
                        }, {
                            x: 10.9,
                            y: 8.2
                        }, {
                            x: 16.4,
                            y: 0
                        }, {
                            x: 16.4,
                            y: 1.8
                        }, {
                            x: 13.6,
                            y: .3
                        }, {
                            x: 13.6,
                            y: 0
                        }, {
                            x: 29.9,
                            y: 0
                        }, {
                            x: 27.1,
                            y: 2.3
                        }, {
                            x: 16.4,
                            y: 0
                        }, {
                            x: 13.6,
                            y: 3.7
                        }, {
                            x: 10.9,
                            y: 5.2
                        }, {
                            x: 16.4,
                            y: 6.5
                        }, {
                            x: 10.9,
                            y: 0
                        }, {
                            x: 24.5,
                            y: 7.1
                        }, {
                            x: 10.9,
                            y: 0
                        }, {
                            x: 8.1,
                            y: 4.7
                        }, {
                            x: 19,
                            y: 0
                        }, {
                            x: 21.7,
                            y: 1.8
                        }, {
                            x: 27.1,
                            y: 0
                        }, {
                            x: 24.5,
                            y: 0
                        }, {
                            x: 27.1,
                            y: 0
                        }, {
                            x: 29.9,
                            y: 1.5
                        }, {
                            x: 27.1,
                            y: .8
                        }, {
                            x: 22.1,
                            y: 2
                        }],
                        pointRadius: 5,
                        pointHoverRadius: 6,
                        pointBorderColor: "transparent",
                        pointHoverBorderColor: "transparent",
                        pointBackgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        pointHoverBackgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`
                    }, {
                        label: "Last Year",
                        data: [{
                            x: 36.4,
                            y: 13.4
                        }, {
                            x: 1.7,
                            y: 11
                        }, {
                            x: 5.4,
                            y: 8
                        }, {
                            x: 9,
                            y: 17
                        }, {
                            x: 1.9,
                            y: 4
                        }, {
                            x: 3.6,
                            y: 12.2
                        }, {
                            x: 1.9,
                            y: 14.4
                        }, {
                            x: 1.9,
                            y: 9
                        }, {
                            x: 1.9,
                            y: 13.2
                        }, {
                            x: 1.4,
                            y: 7
                        }, {
                            x: 6.4,
                            y: 8.8
                        }, {
                            x: 3.6,
                            y: 4.3
                        }, {
                            x: 1.6,
                            y: 10
                        }, {
                            x: 9.9,
                            y: 2
                        }, {
                            x: 7.1,
                            y: 15
                        }, {
                            x: 1.4,
                            y: 0
                        }, {
                            x: 3.6,
                            y: 13.7
                        }, {
                            x: 1.9,
                            y: 15.2
                        }, {
                            x: 6.4,
                            y: 16.5
                        }, {
                            x: .9,
                            y: 10
                        }, {
                            x: 4.5,
                            y: 17.1
                        }, {
                            x: 10.9,
                            y: 10
                        }, {
                            x: .1,
                            y: 14.7
                        }, {
                            x: 9,
                            y: 10
                        }, {
                            x: 12.7,
                            y: 11.8
                        }, {
                            x: 2.1,
                            y: 10
                        }, {
                            x: 2.5,
                            y: 10
                        }, {
                            x: 27.1,
                            y: 10
                        }, {
                            x: 2.9,
                            y: 11.5
                        }, {
                            x: 7.1,
                            y: 10.8
                        }, {
                            x: 2.1,
                            y: 12
                        }],
                        pointRadius: 5,
                        pointHoverRadius: 6,
                        pointBorderColor: "transparent",
                        pointHoverBorderColor: "transparent",
                        pointBackgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        pointHoverBackgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`
                    }]
                }, t = {
                    maintainAspectRatio: !1,
                    indexAxis: "y",
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
                            grid: { ...(0, o.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, o.t8)(e)
                            }
                        },
                        y: {
                            maxTicksLimit: 8,
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e),
                                maxTicksLimit: 10
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Horizontal Bar Chart"
                        }), (0, a.jsx)("p", {
                            children: "Bar chart with horizontal bars. This is a horizontal bar chart, where the bars are horizontal instead of vertical."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.bp, {
                            height: 300,
                            options: t,
                            data: r
                        })
                    })]
                })
            }
        },
        34790: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.uw, n.f$, n.ZL, n.u, n.De), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["100", "200", "300", "400", "500", "600", "700"],
                    datasets: [{
                        label: "This Year",
                        data: [128, 117, 145, 180, 225, 150, 135],
                        borderRadius: 1,
                        backgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        borderWidth: 0,
                        barThickness: 8
                    }, {
                        label: "Last Year",
                        data: [100, 80, 180, 134, 180, 70, 225],
                        borderRadius: 1,
                        backgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        borderWidth: 0,
                        barThickness: 8
                    }]
                }, t = {
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
                            grid: { ...(0, o.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, o.t8)(e)
                            }
                        },
                        y: {
                            stacked: !0,
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e),
                                maxTicksLimit: 8
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Stacked Bar Chart"
                        }), (0, a.jsx)("p", {
                            children: "Stacked bar charts are used to compare parts to a whole. They are useful for comparing the percentage of each category to the whole."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.$Q, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        57294: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(3827),
                i = t(27815),
                o = t(57084),
                l = t(91774),
                s = t(41196),
                n = t(46136);
            n.kL.register(n.uw, n.f$, n.ZL, n.u, n.De), r.default = () => {
                let {
                    theme: e
                } = (0, l.F)(), r = {
                    labels: ["100", "200", "300", "400", "500", "600", "700"],
                    datasets: [{
                        label: "This Year",
                        data: [128, 117, 145, 180, 225, 150, 135],
                        borderRadius: 1,
                        backgroundColor: "light" === e ? `rgb(${o.DM.teal})` : `rgb(${o.DM.blue})`,
                        borderWidth: 0,
                        barThickness: 8
                    }, {
                        label: "Last Year",
                        data: [100, 80, 180, 134, 180, 70, 225],
                        borderRadius: 1,
                        backgroundColor: "light" === e ? `rgba(${o.DM.teal}, 0.25)` : `rgba(${o.DM.blue}, 0.25)`,
                        borderWidth: 0,
                        barThickness: 8
                    }]
                }, t = {
                    maintainAspectRatio: !1,
                    indexAxis: "y",
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
                            grid: { ...(0, o.yW)(e)
                            },
                            distribution: "linear",
                            ticks: { ...(0, o.t8)(e)
                            }
                        },
                        y: {
                            stacked: !0,
                            border: {
                                display: !1
                            },
                            grid: { ...(0, o.yW)(e)
                            },
                            ticks: { ...(0, o.t8)(e),
                                maxTicksLimit: 8
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: !0,
                                ...(0, o.bK)(e)
                            }
                        },
                        tooltip: { ...(0, o.MS)(e)
                        }
                    }
                };
                return (0, a.jsxs)(i.Zb, {
                    className: "mb-2",
                    children: [(0, a.jsxs)(i.Ol, {
                        children: [(0, a.jsx)("h2", {
                            className: "mb-2 font-medium leading-none text-headings",
                            children: "Stacked Horizontal Bar Chart"
                        }), (0, a.jsx)("p", {
                            children: "Stacked bar chart can also be positioned horizontly as well."
                        })]
                    }), (0, a.jsx)(i.aY, {
                        children: (0, a.jsx)(s.$Q, {
                            height: 300,
                            data: r,
                            options: t
                        })
                    })]
                })
            }
        },
        37455: function(e, r, t) {
            "use strict";
            t.d(r, {
                h: function() {
                    return o
                }
            });
            var a = t(3827),
                i = t(25825);
            let o = ({
                children: e,
                title: r
            }) => (0, a.jsxs)("header", {
                className: "z-5 flex h-14 w-full shrink-0 items-center px-3 sm:h-16 print:hidden",
                children: [(0, a.jsx)(i.SidebarToggle, {
                    className: "me-3 hidden sm:flex xl:hidden"
                }), r && (0, a.jsx)("h2", {
                    className: "me-8 font-medium leading-none text-headings",
                    children: r
                }), e]
            })
        },
        29796: function(e, r, t) {
            "use strict";
            t.d(r, {
                a: function() {
                    return n
                },
                g: function() {
                    return s
                }
            });
            var a = t(3827),
                i = t(1657),
                o = t(37805),
                l = t(8792);
            let s = ({
                    href: e,
                    children: r,
                    className: t
                }) => (0, a.jsx)("li", {
                    children: e ? (0, a.jsxs)("span", {
                        className: (0, i.cn)("flex items-center", t),
                        children: [(0, a.jsx)(l.default, {
                            className: "hover:text-body",
                            href: e,
                            children: r
                        }), (0, a.jsx)(o.Z, {
                            className: "mx-2",
                            size: 10
                        })]
                    }) : (0, a.jsx)("span", {
                        children: r
                    })
                }),
                n = ({
                    children: e,
                    className: r
                }) => (0, a.jsx)("nav", {
                    className: (0, i.cn)("text-xs text-muted", r),
                    children: (0, a.jsx)("ul", {
                        className: "flex items-center",
                        children: e
                    })
                })
        },
        25786: function(e, r, t) {
            "use strict";
            t.d(r, {
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
            let a = (0, t(87461).Z)("AlignJustify", [
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
        37805: function(e, r, t) {
            "use strict";
            t.d(r, {
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
            let a = (0, t(87461).Z)("ChevronRight", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ])
        },
        8792: function(e, r, t) {
            "use strict";
            t.d(r, {
                default: function() {
                    return i.a
                }
            });
            var a = t(25250),
                i = t.n(a)
        },
        57742: function(e, r, t) {
            "use strict";
            t.d(r, {
                j: function() {
                    return o
                }
            });
            let a = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                i = function() {
                    for (var e, r, t = 0, a = ""; t < arguments.length;)(e = arguments[t++]) && (r = function e(r) {
                        var t, a, i = "";
                        if ("string" == typeof r || "number" == typeof r) i += r;
                        else if ("object" == typeof r) {
                            if (Array.isArray(r))
                                for (t = 0; t < r.length; t++) r[t] && (a = e(r[t])) && (i && (i += " "), i += a);
                            else
                                for (t in r) r[t] && (i && (i += " "), i += t)
                        }
                        return i
                    }(e)) && (a && (a += " "), a += r);
                    return a
                },
                o = (e, r) => t => {
                    var o;
                    if ((null == r ? void 0 : r.variants) == null) return i(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
                    let {
                        variants: l,
                        defaultVariants: s
                    } = r, n = Object.keys(l).map(e => {
                        let r = null == t ? void 0 : t[e],
                            i = null == s ? void 0 : s[e];
                        if (null === r) return null;
                        let o = a(r) || a(i);
                        return l[e][o]
                    }), d = t && Object.entries(t).reduce((e, r) => {
                        let [t, a] = r;
                        return void 0 === a || (e[t] = a), e
                    }, {});
                    return i(e, n, null == r ? void 0 : null === (o = r.compoundVariants) || void 0 === o ? void 0 : o.reduce((e, r) => {
                        let {
                            class: t,
                            className: a,
                            ...i
                        } = r;
                        return Object.entries(i).every(e => {
                            let [r, t] = e;
                            return Array.isArray(t) ? t.includes({ ...s,
                                ...d
                            }[r]) : ({ ...s,
                                ...d
                            })[r] === t
                        }) ? [...e, t, a] : e
                    }, []), null == t ? void 0 : t.class, null == t ? void 0 : t.className)
                }
        }
    },
    function(e) {
        e.O(0, [7674, 3407, 6349, 5250, 9346, 1343, 5845, 2971, 8069, 1744], function() {
            return e(e.s = 84592)
        }), _N_E = e.O()
    }
]);