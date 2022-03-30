import { Col } from "../../../components/xbl";
import {
    Title,
    AddImage,
    Description,
    BasicInfo,
    DateInfo,
    Identification,
    CustomAttribute,
    Category,
    Keyword,
    Variant,
    SimilarProducts,
    PostButtons
} from "./components";

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
                <PostButtons />
            </Col>
        </div>
    )
}



