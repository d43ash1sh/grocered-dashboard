import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settings";
import userReducer from "./user";
import uiReducer from "./ui";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        user: userReducer,
        ui: uiReducer,
    },
});

export default store;