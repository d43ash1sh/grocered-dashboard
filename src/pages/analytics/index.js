import { Col } from "../../components/xbl";

import {
    PieChart,
    ChartOrder,
    ChartFinancial,
    TrendingSearch,
    MostOrdersProducts,
    MostOrdersLcoation,
} from "./components";

export default function Analytics() {

    return (
        <div className="p50 flex fww aifs">
            <Col lg="60" xl="66" className="flex fww ">
                <ChartFinancial />

                <TrendingSearch />
                <TrendingSearch />

                <MostOrdersProducts />
                <MostOrdersLcoation />

                <ChartOrder />
                <ChartOrder />
            </Col>

            <Col lg="40" xl="33">
                <PieChart />
            </Col>

        </div>
    )
}



