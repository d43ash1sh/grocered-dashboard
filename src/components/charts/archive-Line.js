
import React from 'react';
import Chart from "react-apexcharts";


// Area gradient
export const LineChart = ({ height = 300 }) => {

    const options = {
        stroke: { curve: 'smooth' },
        grid: { show: false },
        dataLabels: {
            enabled: false
        },
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            }
        },
        xaxis: {
            tickAmount: 1,

            axisTicks: {
                borderType: 'solid',
                color: 'var(--grayd)',
            },
            axisBorder: {
                color: 'var(--graye)',
            },
            // labels: {
            //     formatter: (value) => value + "$"
            // },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
            show: false
        }
    }
    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }]

    return <Chart
        options={options}
        series={series}
        type="area"
        height={height}
    />;
}















// Line gradient
export const LineGradientChart = ({ height = 300 }) => {

    const options = {
        stroke: { curve: 'smooth' },
        grid: { show: false },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    {
                        offset: 0,
                        color: "#00DBEA",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "#3F6CFF",
                        opacity: 1
                    },
                ]
            }
        },
        chart: {
            id: "basic-bar",
            type: "line",
            toolbar: {
                show: false
            }
        },
        xaxis: {
            tickAmount: 1,

            axisTicks: {
                borderType: 'solid',
                color: 'var(--grayd)',
            },
            axisBorder: {
                color: 'var(--graye)',
            },
            // labels: {
            //     formatter: (value) => value + "$"
            // },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
            show: false
        }
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






// Line gradient, no xaxis or yaxis
export const LineChart = ({ height = 300 }) => {

    const options = {
        grid: { show: false },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            lineCap: 'round',
            width: 3,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    {
                        offset: 0,
                        color: "#00DBEA",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "#3F6CFF",
                        opacity: 1
                    },
                ]
            }
        },
        chart: {
            id: "basic-bar",
            type: "line",
            toolbar: {
                show: false
            }
        },
        xaxis: {
            tickAmount: 2,
            tickPlacement: 'on',
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
            // labels: {
            //     formatter: (value) => value + "$"
            // },
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
            show: false
        }
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


/*
Stroke colors
----------
    stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: 3,
        colors: ["#00DBEA", "#3F6CFF"],
    },
*/


<Col xl="50" className="p50" card="card">
    <ApexChart height={150} />
</Col>
<Col xl="50" className="p50" card="card">
    <ApexChart full={false} height={150} />
</Col>
<Col xl="50" className="p50" card="card">
    <ApexChart gradient={true} height={150} />
</Col>

<Col xl="50" className="p50" card="card">
    <ApexChart type="area" height={150} />
</Col>
<Col xl="50" className="p50" card="card">
    <ApexChart type="area" color={["#f00"]} height={150} />
</Col>


