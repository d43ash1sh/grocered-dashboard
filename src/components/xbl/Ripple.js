import React, { cloneElement } from "react";
import useRipple from "../hooks/useRipple";

export const Ripple = ({ children, onClick }) => {
    const { coords, rippleClick } = useRipple();

    return (
        <>
            {cloneElement(children, {
                className: `${children.props.className} ripple`,
                onMouseDown: (e) => rippleClick(e),
                onClick,
                style: coords
            })}
        </>
    );
};