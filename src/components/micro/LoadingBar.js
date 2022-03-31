import { useState, useEffect } from "react";

const LoadingBar = () => {
    const [width, setWidth] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            if (width < 60) {
                setWidth(width + 20);
            }
            else if (width < 70) {
                setWidth(width + 5);
            }
            else if (width < 85) {
                setWidth(width + 3);
            }
            else {
                if (width < 95) {
                    setWidth(width + 1);
                }
                else {
                    clearInterval(timer);
                }
            }

            console.log("width", width);
        }, 300)

        return () => {
            clearInterval(timer);
        }
    })


    return <div className="loading-bar pf t0 w100 l0">
        <div className="theme tr8" style={{ width: `${width}%` }} />
    </div>
}
export default LoadingBar;