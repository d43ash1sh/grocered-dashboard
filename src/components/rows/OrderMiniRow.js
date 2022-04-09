import { useState, useRef } from "react";
import { Bull, Ripple, Threedot } from "../xbl";
import useOnOutside from "../../hooks/useOnOutside";

const OrderMiniRow = ({ data }) => {
    const [more, setmore] = useState(false);

    const refFooter = useRef();
    useOnOutside(refFooter, () => setmore(false));


    return <div className="flex aic jcsb hover-dark p8 cp">
        <div className="flex aic">
            <div className="ic40 br50 grayd mr10 bc" style={{
                backgroundImage: `url(${data.dp})`
            }}></div>
            <div>
                <div className="f09 bold cgray7">{data.name}</div>
                <Bull className="f08 cgray9" list={[
                    "Tilapara",
                    "2 days ago"
                ]} />
            </div>
        </div>
        <div className="flex aic">
            <div className="tc  cgray7 mr50">
                <div className="rs bold">{data.amount.toLocaleString("en-IN")}</div>
                <div className="f08 cgray9">14 items</div>
            </div>

            <Threedot>
                <Ripple><div className="p50">View</div></Ripple>
                <Ripple><div className="p50">Order</div></Ripple>
                <Ripple><div className="p50">Start processing</div></Ripple>

                <div className="p25 flex jcsb tc" style={{ width: "190px" }}>
                    <Ripple>
                        <div className="w33 br10 p50 px25">
                            <div className="ic40 graye dark-grayd cgray7 ic br50 ix-call mauto"></div>
                            <small className="f06">Call</small>
                        </div>
                    </Ripple>
                    <Ripple>
                        <div className="w33 br10 p50 px25">
                            <div className="ic40 graye dark-grayd cgray7 ic br50 ix-whatsapp mauto"></div>
                            <small className="f06">WhatsApp</small>
                        </div>
                    </Ripple>
                    <Ripple>
                        <div className="w33 br10 p50 px25">
                            <div className="ic40 graye dark-grayd cgray7 ic br50  ix-chat mauto"></div>
                            <small className="f06">Chat</small>
                        </div>
                    </Ripple>
                </div>
            </Threedot>


        </div>
    </div>
}
export default OrderMiniRow;