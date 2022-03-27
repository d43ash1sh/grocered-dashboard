import React from "react";
import Select, { components } from "react-select";

const Option = (props) => {
    return (
        <components.Option {...props}>{props.children}</components.Option>
    );
};


const IndicatorSeparator = ({
    innerProps
}) => {
    return <span style={{ display: "none" }} {...innerProps} />;
};


const CustomSelect = ({ ...rest }) => {
    return (
        <Select
            components={{ Option, IndicatorSeparator }}
            classNamePrefix="select"
            {...rest}
        // menuIsOpen={true}
        ></Select>
    );
};
export default CustomSelect;