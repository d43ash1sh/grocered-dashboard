// import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Bull, Avatar, Ripple } from "../xbl";

const StoryCard = ({ data, width = "200px" }) => {

    return <div className="cp p50 story" style={{ width: width }}>
        <Link to={`/dashboard/stories/${data.id}`}>
            <div className="aspect-15-23 graye br10 ofh bc"
                style={{ backgroundImage: `url(${data.image})` }}>
                <Ripple>
                    <div className="gradient light">
                        <Avatar className="ic30 wbr m50" img={data.dp} />

                        <div className="text pa b0 w100 l0 p50">
                            <div className="lc3 mb50 f09">{data.text}</div>

                            <Bull className="f08 o6" list={[
                                "Jhon Doe",
                                "2d ago"
                            ]} />
                        </div>
                    </div>
                </Ripple>
            </div>
        </Link>
    </div>
}
export default StoryCard;