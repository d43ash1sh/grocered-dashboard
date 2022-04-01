import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showToast } from "../../redux/ui";

let timer;

function Toast() {
    const dispatch = useDispatch();
    const ui = useSelector(state => state.ui.value);


    const handleChange = (delay = false) => {
        if (timer) {
            clearTimeout(timer);
        }

        if (delay) {
            timer = setTimeout(() => {
                dispatch(showToast(false));
            }, 4000);
        }
        else {
            dispatch(showToast(false));
        }
    }

    useEffect(() => {
        if (ui.toast && ui.toast.length > 0) {
            handleChange(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ui.toast]);

    return (
        <div
            id="toast"
            className="flex aic pf w100 tr2 z9000 l50"
            data-show={ui.toast ? "1" : "0"}
            onClick={() => handleChange()}
        >
            <div className="lc1 mgs">{ui.toast}</div>
            <div className="cp tc close ic40 ic ix-x"></div>
        </div>
    );
}

export default Toast;
