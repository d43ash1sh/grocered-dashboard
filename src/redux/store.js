import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settings";
import userReducer from "./user";

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        user: userReducer,
    },
});

export default store;