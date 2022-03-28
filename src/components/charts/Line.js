
import React from 'react';
import Chart from "react-apexcharts";

const colors = ["#00DBEA", "#3F6CFF"];


export const ApexChart = ({ type = "line", ...rest }) => {

    if (type === "area") {
        return <AreaChart {...rest} />;
    }

    return <LineChart {...rest} />;
}






export const LineChart = ({ full = true, gradient = false, height = 300 }) => {
    if (gradient === true || (Array.isArray(gradient) && gradient.length === 0)) {
        gradient = colors
    }
    else if (gradient.length === 1) {
        gradient[1] = colors[1];
    }

    const options = {
        grid: { show: false },
        dataLabels: {
            enabled: false
        },
        legend: { show: false },
        stroke: {
            curve: 'smooth',
            lineCap: 'round',
            width: 2,
            colors,
        },
        fill: gradient.length > 1 ? {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    {
                        offset: 0,
                        color: gradient[0],
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: gradient[1],
                        opacity: 1
                    },
                ]
            }
        } : {},
        chart: {
            id: "basic-bar",
            type: "line",
            foreColor: 'var(--graya)',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            tickAmount: 2,
            tickPlacement: 'on',
            axisTicks: {
                show: full,
                borderType: 'solid',
                color: 'var(--grayc)',
            },
            axisBorder: {
                show: full,
                color: 'var(--grayc)',
            },
            labels: {
                show: full,
            },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
            show: false
        },
    }
    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }]

    return <Chart
        options={options}
        series={series}
        type="line"
        height={height}
    />;
}











// Line gradient
export const AreaChart = ({ color = colors[0], full = true, height = 300 }) => {
    if (typeof color === "string") {
        color = [color];
    }
    else if (Array.isArray(color) && color.length === 0) {
        color = colors;
    }

    const options = {
        stroke: {
            curve: 'smooth',
            lineCap: 'round',
            width: 2,
            colors: color,
        },
        grid: { show: false },
        dataLabels: {
            enabled: false
        },
        fill: color.length < 1 ? {} : {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    {
                        offset: 0,
                        color: color[0],
                        opacity: 0.4
                    },
                    {
                        offset: 100,
                        color: color[0],
                        opacity: 0
                    },
                ]
            }
        },
        chart: {
            id: "basic-bar",
            type: "area",
            foreColor: 'var(--graya)',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            tickAmount: 1,

            axisTicks: {
                show: full,
                borderType: 'solid',
                color: 'var(--grayc)',
            },
            axisBorder: {
                show: full,
                color: 'var(--grayc)',
            },
            labels: {
                show: full,
            },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z"]
        },
        yaxis: {
            show: false
        }
    }
    const series = [{
        name: 'series1',
        data: [4, 20, 40, 25, 35, 60, 30, 40, 80]
    }]

    return <Chart
        options={options}
        series={series}
        type="area"
        height={height}
    />;
}