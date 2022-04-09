import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Bull, Ripple, Threedot } from "../xbl";
import useOnOutside from "../../hooks/useOnOutside";

import mock from "../../assets/mock/imgs";

const priorityList = ["Low", "Mid", "High"];

const FeedbackRow = ({ data }) => {


    return <div className="flex-md aic jcsb hover-dark p8 cp feedback-row pr">
        <Link to={`/dashboard/feedbacks/${data.id}`} className="pa-100" />

        <div className="flex aic w100 mw300 jcsb">
            <div className="flex aic">
                <div className="ic40 br50 grayd mr10 bc" style={{
                    backgroundImage: `url(${data.dp})`
                }}></div>
                <div>
                    <div className=" bold cgray5">{data.name}</div>
                    <div className="cgray9 f08">{data.date}</div>
                </div>
            </div>
            <Priority priority={data.priority} />
        </div>
        <div className="flex aic text jcsb ">
            <div className="p50 w-50">
                <div className="cgray9 lc2">
                    Apple juice is a fruit juice made by the maceration and pressing of an apple. The resulting expelled juice may be further treated by enzymatic and centrifugal clarification to remove the starch and
                </div>
            </div>

            <div className="ic40 md-up ic ix-arrow rot-90 theme-t8 br50 mbtn"></div>
        </div>
    </div>
}
export default FeedbackRow;


function Priority({ priority }) {
    const [more, setmore] = useState(false);

    const refMenu = useRef();
    useOnOutside(refMenu, () => setmore(false));

    return (<div className="pr priority" priority={priority}>
        <Ripple onClick={() => setmore(true)}>
            <div className="button flex aic f08 p25 px50 br20 light">
                <span>{priorityList[priority - 1]} priority</span> <span className="ix-arrow f08 ic pl50"></span>
            </div>
        </Ripple>
        {
            more && <div ref={refMenu} className="white bslg dark pa t0 mt2 l0 br10 z10 w150p f09">
                {
                    priorityList.map((e, i) => <div key={i} className="p50 pl1 hover-dark">{priorityList[i + 1]} priority</div>)
                }
            </div>
        }
    </div>
    );
}