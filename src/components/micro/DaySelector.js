import { useState } from "react";

function DaySelector({ className, repeat = [], disabled }) {
    const [active, setActive] = useState(repeat);

    const clickHandler = (index) => {
        if (disabled) return;
        const temp = active.includes(index) ? [...active].filter(e => e !== index) : [...active, index];
        setActive(temp);
    }

    return (
        <div className={`day-selector flex aic ${className}`}>
            {
                ["S", "M", "T", "W", "T", "F", "S"].map((e, i) => <div key={i} className={`ic30 br50 ic cp m25 cwhite ${active.includes(i) ? "theme cwhite" : "grayd"}`} onClick={() => clickHandler(i)}>{e}</div>)
            }
        </div>
    );
}

export default DaySelector;
