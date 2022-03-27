import { useSelector } from "react-redux";

import logoColored from "../../assets/icons/full-colored.svg";
import logoWhite from "../../assets/icons/full-white.svg";


function Logo(props) {
    const settings = useSelector(state => state.settings.value);

    return (
        <>
            <img src={settings.theme ? logoWhite : logoColored} alt="Logo" {...props} />
        </>
    );
}

export default Logo;
