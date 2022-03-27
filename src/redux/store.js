import { configureStore } from "@reduxjs/toolkit";
// import { throttle } from 'lodash';
import settingsReducer from "./settings";
import userReducer from "./user";


const store = configureStore({
    reducer: {
        settings: settingsReducer,
        user: userReducer,
    },
});


// store.subscribe(throttle(() => {
//     localStorage.setItem('settings', JSON.stringify({
//         ...store.getState().settings.value,
//         date: Date.now()
//     }));
// }, 2000));

export default store;