import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Ripple } from "../../../components/xbl";

import mock from "../../../assets/mock/imgs";


const StoriesSidebar = ({ id }) => {
    const stories = mock.stories;

    const [data, setData] = useState(null);

    useEffect(() => {
        const tempid = parseInt(id);
        setData(stories.find(e => e.id === tempid))
    }, [id]);

    const title = "18 easy recipes to use up lots of tomatoes";



    const [storyCount, setStoryCount] = useState(1)
    const [progress, setProgress] = useState(20)

    const calcStoryCount = (count) => {
        console.log(count);
        setStoryCount((100 / count) - 2);
    }



    if (!data) return <></>;

    return (<div className="sidebar right pf h100 t0 r0 ofh tr2 white z10">
        <div className="wrap pa-100 obc oya tscroll">


            <div className="p1 story story-read">

                <div className="pr w100 progress br2 ofh">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99 2" fill="none" className="w100 db">
                        <line x1="0" x2="100" y1="0.5" y2="0.5" style={{
                            stroke: "var(--graya)",
                            strokeDasharray: `${storyCount},2`
                        }} />
                        <line stroke="#00DDA8" x1="0" x2={progress} y1="0.5" y2="0.5" style={{
                            strokeDasharray: `${storyCount},2`
                        }} />
                    </svg>
                </div>


                <div className="aspect-15-23 graye br10 ofh cwhite mt75">
                    <div>
                        <div className="pa-100 bc" style={{
                            backgroundImage: `url(${data.image})`,
                            filter: "blur(2px) brightness(0.5)"
                        }} />
                        <div className="pa-100 gradient">
                            <div className="flex jcsb aic">
                                <div className="flex aic f09 ">
                                    <Avatar className="ic40 wbr m1" img={data.dp} />
                                    <div>
                                        <div className="">Jhon Doe</div>
                                        <div className="f09 o8">2d ago</div>
                                    </div>
                                </div>
                                <div className="flex aic p1">
                                    <Link to="/dashboard/stories" className="ic40 black-03 ic ix-x  br50 mbtn"></Link>
                                </div>
                            </div>


                            <div className="pa b0 w100 l0 p1">
                                <div className="mb1">
                                    <span className="head bold f12 flex fww">
                                        {title.split(" ").map((e, i) => <span key={i}>{e}</span>)}
                                    </span>
                                </div>
                                <span className="text f09">{data.text}</span>

                                <div className="flex aic pt1 o6">
                                    <div className="pr1">
                                        <div className="ic30 ic ix-love" />
                                        <div className="f07 tc">134</div>
                                    </div>

                                    <div className="pr1">
                                        <div className="ic30 ic ix-share" />
                                        <div className="f07 tc">Share</div>
                                    </div>
                                </div>
                            </div>


                            <div className="o4">
                                <input type="range" min="0" max="20" onChange={(e) => calcStoryCount(e.target.value)} />
                                <input type="range" min="0" max="100" onChange={(e) => setProgress(e.target.value)} />
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>);
}
export default StoriesSidebar;

