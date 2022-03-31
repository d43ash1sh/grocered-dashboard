import { Col, Ripple } from "../../../components/xbl";

import {
    Title,
    Description,
    BasicInfo,
    DateInfo,
    Identification,
    CustomAttribute,
} from "./details";
import { AddImage } from "./image";
import { Category, Keyword } from "./tags";
import { Variant, SimilarProducts } from "./products";



export default function AddProducts() {

    return (
        <div className="p50 flex fww aifs">
            <Col lg="50" xl="66">

                <Title />
                <AddImage />
                <Description />
                <BasicInfo />
                <DateInfo />
                <Identification />
                <CustomAttribute />
            </Col>

            <Col lg="50" xl="33">
                <Category />
                <Keyword />
                <Variant />
                <SimilarProducts />

                <Col className="mt3 flex aic fww">
                    <Col xs="50" className="p50">
                        <Ripple>
                            <button className="btn p75 accent w100 light">Preview</button>
                        </Ripple>
                    </Col>
                    <Col xs="50" className="p50">
                        <Ripple>
                            <button className="btn p75 theme w100 light">Publish</button>
                        </Ripple>
                    </Col>
                </Col>

            </Col>
        </div>
    )
}



