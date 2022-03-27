
import { useEffect, useState } from "react";

function useDarkMode() {
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        window.document.documentElement.setAttribute('theme', theme ? "dark" : "light");
    }, [theme]);

    return [theme, setTheme];
}

export default useDarkMode;