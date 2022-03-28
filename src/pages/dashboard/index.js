import { Col, Ripple } from "../../components/xbl";
import OrderRow from "../../components/rows/OrderRow";
import { ApexChart } from "../../components/charts/Line";


export default function Dashboard() {

    return (
        <div className="p50 flex fww">
            <Col lg="50" xl="66" className="">
                <div className=" flex fww">
                    <Col xl="50" className="p50" card="card">
                        <div className="header p1 flex jcsb aic">
                            <div>Received orders <span className="f08 cgray9">(18 orders)</span></div>
                            <Ripple>
                                <button className="mbtn theme-t8">View all</button>
                            </Ripple>
                        </div>
                        <div className="lh14">
                            {
                                [0, 1, 2, 3, 4].map(e => <OrderRow key={e} data={e} />)
                            }
                        </div>
                    </Col>

                    <Col xl="50" className="p50" card="card">
                        <div className="header p1 flex jcsb aic">
                            <div>Received orders <span className="f08 cgray9">(18 orders)</span></div>
                            <Ripple>
                                <button className="mbtn theme-t8">View all</button>
                            </Ripple>
                        </div>
                        <div className="lh14">
                            {
                                [0, 1, 2, 3, 4].map(e => <OrderRow key={e} data={e} />)
                            }
                        </div>
                    </Col>

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
                </div>
            </Col>



            <Col lg="50" xl="33" className="p50">
                <div className="card ">
                    <div className="header p1 flex jcsb aic">
                        <div>Received orders <span className="f08 cgray9">(18 orders)</span></div>
                        <Ripple>
                            <button className="mbtn theme-t8">View all</button>
                        </Ripple>
                    </div>
                    <div className="lh14">
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(e => <OrderRow key={e} data={e} />)
                        }
                    </div>
                </div>
            </Col>







        </div >
    )
}



