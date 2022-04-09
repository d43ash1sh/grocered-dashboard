import { Link } from "react-router-dom";
import { Col, Ripple } from "../../components/xbl";
import OrderRow from "../../components/rows/OrderRow";
import StoryCard from "../../components/rows/StoryCard";
import { ApexChart } from "../../components/charts/Line";

import mock from "../../assets/mock/imgs";




export const ReceviedOrders = () => {
    const orders = mock.orders.slice(0, 5);

    return (
        <Col xl="50" className="p50" card="card">
            <div className="header p1 flex jcsb aic">
                <div>Received orders <span className="f08 cgray9">(18 orders)</span></div>
                <Ripple>
                    <button className="mbtn theme-t8">View all</button>
                </Ripple>
            </div>
            <div className="lh14">
                {
                    orders.map((e, i) => <OrderRow key={i} data={e} />)
                }
            </div>
        </Col>
    )
}



export const UpcommingDelivery = () => {
    const orders = mock.orders.slice(0, 5);

    return (
        <Col xl="50" className="p50" card="card">
            <div className="header p1 flex jcsb aic">
                <div>Upcomming delivery <span className="f08 cgray9">(5 orders)</span></div>
                <Ripple>
                    <button className="mbtn theme-t8">View all</button>
                </Ripple>
            </div>
            <div className="lh14">
                {
                    orders.map((e, i) => <OrderRow key={i} data={e} />)
                }
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


export const ChartSales = () => {
    return (
        <Col xl="50" className="p50" card="card">
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
            <ApexChart full={false} type="area" color={["#3F6CFF"]} height={150} />
        </Col>
    )
}


export const Expiry = () => {
    const products = mock.products

    return (
        <Col className="p50" card="card ofh">
            <div className="header p1">
                About to expire
            </div>
            <div className="w100 ofh">
                <div className="flex f08 p50 tc cgray7 pr">
                    {
                        products.map((e, i) => <Link to="/dashboard/products/expiring" key={i} className="p50">
                            <div className="ic100 grayd br10 bc" style={{
                                backgroundImage: `url(${e.image})`
                            }}></div>
                            <div className="mt10">30 Days</div>
                        </Link>)
                    }
                    <Link className="viewmore-right pa r0 t0 h100 p1 pl2" to="/dashboard/products/expiring">
                        <div className="ic50 mt75 f14 ic ix-arrow rot-90 theme-t8 br50 mbtn"></div>
                    </Link>
                </div>
            </div>
        </Col>
    )
}



export const Stories = () => {
    const stories = mock.stories;

    return (
        <Col className="p50" card="card ofh">
            <div className="header p1">
                Trending stories
            </div>
            <div className="w100 ofh">
                <div className="flex f08 p50 cwhite pr">
                    {
                        stories.map((e, i) => <StoryCard key={i} data={e} />)
                    }
                    <div className="viewmore-right pa r0 t0 h100 p1 pl3 flex fdc jcc">
                        <div className="ic50 mt75 f14 ic ix-arrow rot-90 theme-t8 br50 mbtn"></div>
                    </div>
                </div>
            </div>
        </Col>
    )
}




export const ProcessingOrders = () => {
    const orders = mock.orders;

    return (
        <Col className="p50" card="card">
            <div className="header p1 flex jcsb aic">
                <div>Processing orders <span className="f08 cgray9">(50 orders)</span></div>
                <Ripple>
                    <button className="mbtn theme-t8">View all</button>
                </Ripple>
            </div>
            <div className="lh14">
                {
                    orders.map((e, i) => <OrderRow key={i} data={e} />)
                }
            </div>
        </Col>
    )
}



export const TrendingSearch = () => {
    const searches = ["Oats - 145", "Oil - 139", "Sunflower oil - 136", "Maggi - 125", "Dark fanatasy - 99", "Haldiram - 70", "Oats - 145", "Sunflower oil - 136", "Maggi - 125", "Dark fanatasy - 99", "Haldiram - 70"];

    return (
        <Col className="p50" card="card p1">
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
        <Col className="p50" card="card p1">
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
        <Col className="p50" card="card p1">
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


