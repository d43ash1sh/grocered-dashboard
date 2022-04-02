import React, { useState, useRef } from 'react';

import { Ripple, Bull } from "../../../components/xbl";
import useOnOutside from "../../../hooks/useOnOutside";



const ChatItem = ({ data, onClick }) => {
    const [more, setMore] = useState(false);

    const refFooter = useRef();
    useOnOutside(refFooter, () => setMore(false));

    const contextMenu = ["Pin to top", "Assign someone", "Mark priority", "Freeze"]

    const handleClick = (e) => {
        if (e.nativeEvent.button === 2) {
            e.preventDefault();
            const rect = e.target.closest(".chat-list").getBoundingClientRect();
            // console.log(rect);
            setMore({
                left: e.clientX > (rect.width + rect.left - 180) ? (rect.width - 180) : (e.clientX - rect.left),
                top: e.clientY > (window.innerHeight - 200) ? (window.innerHeight - 200) : (e.clientY - rect.top),
            });
        }
    };


    return <div onClick={onClick} onContextMenu={handleClick} className="hover-dark">
        <Ripple>
            <div className="p10 cp pr flex aic jcsb ofh">
                <div className="ic40 br50 grayd mr10 bc" style={{
                    backgroundImage: `url(${data.dp})`
                }}></div>
                <div className='w-50'>
                    <div className="flex jcsb aic">
                        <div className='lc1 f08 bold cgray5'>{data.name}</div>
                        <Bull className="f08 cgraya" list={[data.date, "9:40"]} />
                    </div>
                    <div className="f08 cgray8 lc1 pr2">{data.text}</div>
                </div>

            </div>
        </Ripple>
        {
            more && <div ref={refFooter} style={more} className="white bslg dark pa br10 z10 ofh f08">
                {
                    contextMenu.map((e, i) => <Ripple key={i}><div className="p50 pl1 pr1 cp hover-dark">{e}</div></Ripple>)
                }
            </div>
        }
    </div>
}

export default ChatItem;