import { useState } from "react";

const useRipple = () => {
    const [coords, setCoords] = useState({});

    function rippleClick(e, onClick = null) {
        // const rect = e.target.getBoundingClientRect();
        const rect = e.target.closest(".ripple").getBoundingClientRect();
        
        setCoords({
            "--s": 0,
            "--o": 1
        });

        setTimeout(() => {
            setCoords({
                "--t": 1,
                "--o": 0,
                "--d": 2.5 * Math.max(rect.height, rect.width),
                "--x": e.clientX - rect.left,
                "--y": e.clientY - rect.top,
                "--ripple-duration": rect.width > 200 ? "1000ms" : "500ms"
            });
        }, 20);

        // onClick && onClick(e);
    }

    return { coords, rippleClick };
}

export default useRipple;
