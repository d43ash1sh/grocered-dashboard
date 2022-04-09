// import { useState } from "react";
import { Bull, Ripple, Threedot } from "../xbl";

import mock from "../../assets/mock/imgs";

const OrderRow = ({ data }) => {

    return <div className="flex aic jcsb hover-dark p8 cp order-row pr">
        <div className="flex aic">
            <div className="ic40 br50 grayd mr10 bc" style={{
                backgroundImage: `url(${data.dp})`
            }}></div>
            <div className="flex aic">
                <div className="pr2">
                    <div className="f09 bold cgray7">{data.name}</div>
                    <Bull className="f08 cgray9" list={[
                        "Tilapara",
                        "2 days"
                    ]} />
                </div>

                <div className="lg-up flex aic ofh">
                    <ProductImg imgs={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 14, 15, 16, 17, 18]} />
                </div>


            </div>
        </div>



        <div className="flex aic">

            <div className="cgray7 pl125 bold amount" style={{ width: "100px" }}>
                <div className="rs">{data.amount.toLocaleString("en-IN")}</div>
            </div>

            <div className="p50 dn jcsb buttons pa r50 t50 tty-50 z10">
                <div className="ic40 hover-graye cgray7 ic br50 ix-call" title="Call"></div>
                <div className="ic40 hover-graye cgray7 ic br50 ix-whatsapp" title="Whatsapp"></div>
                <div className="ic40 hover-graye cgray7 ic br50  ix-chat" title="Chat"></div>
            </div>

            <Threedot>
                <Ripple><div className="p50 pl1">View</div></Ripple>
                <Ripple><div className="p50 pl1">Order</div></Ripple>
                <Ripple><div className="p50 pl1">Start processing</div></Ripple>

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
export default OrderRow;

function ProductImg({ imgs }) {
    const max = 6;
    const len = imgs.length;

    const products = mock.products;

    return <>
        {
            imgs.splice(0, max).map((img, i) => <div key={i} className="ic40 awhite br8 mr50 bc" style={{
                backgroundImage: `url(${products[i].image})`
            }} />)
        }
        {
            len > max && <div className="ic40 awhite br8 pr ofh bc" style={{
                backgroundImage: `url(${products[7].image})`
            }}>
                <div className="pa-100 black-06 ic fdc lh1 cwhite">
                    <div>{len - max}</div> <div className="f06">Items</div>
                </div>
            </div>
        }
    </>
}