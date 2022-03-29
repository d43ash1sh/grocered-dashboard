import { Col } from "../../components/xbl";
import {
    ReceviedOrders,
    ProcessingOrders,
    UpcommingDelivery,
    Expiry,
    ChartOrder,
    ChartSales,
    Stories,
    TrendingSearch,
    MostOrdersProducts,
    MostOrdersLcoation,
} from "./components";


export default function Dashboard() {

    return (
        <div className="p50 flex fww aifs">
            <Col lg="50" xl="66" className="flex fww ">
                <ReceviedOrders />
                <UpcommingDelivery />
                <ChartOrder />
                <ChartSales />
                <Expiry />
                <Stories />
            </Col>

            <Col lg="50" xl="33">
                <ProcessingOrders />
                <TrendingSearch />
                <MostOrdersProducts />
                <MostOrdersLcoation />
            </Col>

        </div>
    )
}



