import React from "react";
import { Outlet } from "react-router-dom";

const Empty = (props) => {
    const { children } = props;
    return (
        <div className="main">
            {children}
            <Outlet />
        </div>
    );
};

export default Empty;
