import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const THEME_PALETTE_LIGHT = {
  mode: "light",
  common: {
    black: "181b2a",
    white: "ffffff"
  },
  primary: {
    main: "#00dbea"
  },
  secondary: {
    main: "#3f6cff"
  },
  grey: {
    "50": "#f6f8fa",
    "100": "#eff1f7",
    "200": "#e9ebf3",
    "300": "#b9bdcc",
    "400": "#a7adc2",
    "500": "#555a70",
    "600": "#4b5066",
    "700": "#3f4459",
    "800": "#373c51",
    "900": "#2e3349",
  }



}


const THEME_PALETTE_DARK = {
  ...THEME_PALETTE_LIGHT,

  mode: "dark",
  common: {
    black: "dbdfe8",
    white: "1b2131"
  },
  primary: {
    main: "#00c4d1"
  },
  grey: {
    "50": "#181b2a",
    "100": "#22273c",
    "200": "#2e3349",
    "300": "#3e485d",
    "400": "#495368",
    "500": "#5f6b84",
    "600": "#75829c",
    "700": "#8b98b3",
    "800": "#96a4c3",
    "900": "#b4c0d9"
  }
};


const usePalette = () => {
  const settings = useSelector(state => state.settings.value);

  const [palette, setPalette] = useState(THEME_PALETTE_LIGHT);

  useEffect(() => {
    setPalette(settings.theme ? THEME_PALETTE_DARK : THEME_PALETTE_LIGHT);
  }, [settings.theme]);

  return palette;
};

export default usePalette;
