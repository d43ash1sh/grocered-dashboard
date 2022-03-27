import React from "react";
import { Link, Outlet } from "react-router-dom";

import useDarkMode from "../hooks/useDarkMode";

const Empty = ({ children }) => {
    const [theme, setTheme] = useDarkMode();
    const list = ["Home", "Logout"]
    return (
        <div className="main">
            <div id="sidebar" className="h100 t0 l0 pf z10 ofya tscroll">
                <div className="p1 pr0">
                    <input type="checkbox" onChange={() => setTheme(!theme)} />

                    {
                        list.map((e, i) => <div key={i} className={`item ${i === 0 ? "active" : ""}`}>
                            <Link to="/"><span className="icon br50 xbl-list-numbered ic30 ic" /> {e}</Link>
                        </div>)
                    }
                </div>
            </div>

            <div id="content">
                {children}
                <Outlet />
            </div>
        </div>
    );
};

export default Empty;
