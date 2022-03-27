
import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import routes from "./routes";
import useLocalStorage from "./hooks/useLocalStorage";
import useDarkMode from "./hooks/useDarkMode";

import { setSettings } from "./redux/settings";

const App = () => {
    const dispatch = useDispatch();
    const content = useRoutes(routes);

    // internal
    const [count, setCount] = useState(0);

    // hooks
    const [getSettings, saveSettings] = useLocalStorage("settings", {});
    const [, setTheme] = useDarkMode();

    // redux
    const settings = useSelector(state => state.settings.value);


    useEffect(() => {
        setTheme(settings.theme);

        //ignore first and second effect
        if (count === 0) {
            dispatch(setSettings(getSettings));
            setCount(count + 1);
        }
        else if (count === 1) {
            setCount(count + 1);
        }
        else {
            saveSettings(settings);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings])


    return <>
        {content}
    </>
}


export default App