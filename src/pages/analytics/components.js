import { Link } from "react-router-dom";
import { Col, Ripple } from "../../components/xbl";
import OrderMiniRow from "../../components/rows/OrderMiniRow";
import StoryCard from "../../components/cards/Story";
import { ApexChart } from "../../components/charts/Line";

import mock from "../../assets/mock/imgs";



export const ChartFinancial = () => {
    const data = {
        type: 'datetime',
        categories: [
            "2018-09-12T00:00:00.000Z",
            "2018-09-13T01:30:00.000Z",
            "2018-09-14T02:30:00.000Z",
            "2018-09-15T03:30:00.000Z",
            "2018-09-16T04:30:00.000Z",
            "2018-09-17T05:30:00.000Z",
            "2018-09-18T06:30:00.000Z",
            "2018-09-19T07:30:00.000Z",
            "2018-09-20T08:30:00.000Z",
            "2018-09-21T09:30:00.000Z",
            "2018-09-22T10:30:00.000Z",
            "2018-09-23T11:30:00.000Z"
        ],
        series: [{
            name: 'Sales',
            data: [31, 40, 28, 51, 42, 109, 86, 90, 86, 75, 60, 70]
        },
        {
            name: 'Expenditure',
            data: [5, 15, 12, 6, 4, 14, 16, 8, 12, 15, 7, 2]
        }]
    }



    return (
        <Col className="p50" card="card">
            <div className="header p1 flex jcsb aic">
                <div>Sales</div>
                <div className="flex bold">
                    <button className="mbtn trans">1D</button>
                    <button className="mbtn accent-t8">1W</button>
                    <button className="mbtn trans">1M</button>
                    <button className="mbtn trans">6M</button>
                    <button className="mbtn trans">1Y</button>
                </div>
            </div>
            <ApexChart height={200} data={data} />
        </Col>
    )
}



export const PieChart = () => {

    const data = {
        series: [40, 35, 25],
        labels: ['Sales', 'Expense', 'Profit']
    }
    return (
        <Col className="p50" card="card">
            <div className="header p1 flex jcsb aic">
                <div>Financial stats</div>
            </div>
            <div>
                <ApexChart height={300} type="donut" data={data} />
            </div>
        </Col>
    )
}



export const ChartOrder = () => {
    return (
        <Col xl="50" className="p50" card="card">
            <div className="header p1 flex jcsb aic">
                <div>Orders</div>
                <div className="flex bold">
                    <button className="mbtn trans">1D</button>
                    <button className="mbtn theme-t8">1W</button>
                    <button className="mbtn trans">1M</button>
                    <button className="mbtn trans">6M</button>
                    <button className="mbtn trans">1Y</button>
                </div>
            </div>
            <ApexChart full={false} type="area" height={150} />
        </Col>
    )
}








export const TrendingSearch = () => {
    const searches = ["Oats - 145", "Oil - 139", "Sunflower oil - 136", "Maggi - 125", "Dark fanatasy - 99", "Haldiram - 70", "Oats - 145", "Sunflower oil - 136", "Maggi - 125", "Dark fanatasy - 99", "Haldiram - 70"];

    return (
        <Col md="50" className="p50" card="card p1">
            <div className="header">
                Trending searches
            </div>
            <div className="flex fww pt1">
                {
                    searches.map((e, i) => <div key={i} className="badge graye mr50 mb50 f08 br20 p25 px75 ">{e}</div>)
                }
            </div>
        </Col>
    )
}



export const MostOrdersProducts = () => {
    const data = [
        { product: "Maggi", count: 113 },
        { product: "Popcorn", count: 97 },
        { product: "Rice bran Oil", count: 56 },
        { product: "Atta", count: 23 },
        { product: "Sugar", count: 15 },
    ]

    return (
        <Col md="50" className="p50" card="card p1">
            <div className="header">
                <div>Most ordered</div>
                <div className="f08 cgray9">Most ordered product in last 7 days</div>
            </div>

            <div className="pt1 zebra">
                {
                    data.map((e, i) => <div key={i} className="flex jcsb p50 ">
                        <span>{e.product}</span>
                        <span>{e.count}</span>
                    </div>)
                }
            </div>
        </Col>
    )
}



export const MostOrdersLcoation = () => {
    const data = [
        { location: "Bapujinagar", count: 113 },
        { location: "Durgamandir", count: 97 },
        { location: "Bhalukdubi", count: 56 },
        { location: "Tilapara", count: 23 },
        { location: "Boro Bazar", count: 15 },
    ]

    return (
        <Col md="50" className="p50" card="card p1">
            <div className="header">
                <div>Most ordered</div>
                <div className="f08 cgray9">Most ordered location in last 7 days</div>
            </div>

            <div className="pt1 zebra">
                {
                    data.map((e, i) => <div key={i} className="flex jcsb p50 ">
                        <span>{e.location}</span>
                        <span>{e.count}</span>
                    </div>)
                }
            </div>
        </Col>
    )
}


