// import { useState, useRef } from "react";

const StoryCard = ({ data }) => {

    return <div className="cp p50 story" style={{ width: "200px" }}>
        <div className="aspect-15-23 graye br10 ofh bc"
            style={{
                backgroundImage: `url(${data.image})`
            }}
        >
            <div className="gradient">
                <div className="text pa b0 w100 l0 p50">
                    <div className="flex aic">
                        <div className="ic30 awhite br50 mr50 bc" style={{
                            backgroundImage: `url(${data.dp})`
                        }}></div>
                        <div>
                            <div className="f08">Jhon Doe</div>
                            <div className="f06">2 Days ago</div>
                        </div>
                    </div>
                    <div className="lc2 mt50 lh14 f09" style={{ height: "33px" }}>
                        {data.text}
                    </div>
                </div>

            </div>
        </div>
    </div>
}
export default StoryCard;