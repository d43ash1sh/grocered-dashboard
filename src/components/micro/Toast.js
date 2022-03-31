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
            className={"w100 flex aic pf"}
            data-show={ui.toast ? "1" : "0"}
            onClick={() => handleChange()}
        >
            <div id="toast_mgs" className="lc1">
                {ui.toast}
            </div>
            <div id="toast_close" className="cp tc">
                &#9587;
            </div>
        </div>
    );
}

export default Toast;
