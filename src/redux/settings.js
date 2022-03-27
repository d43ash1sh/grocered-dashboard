import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    theme: true
}


export const settingsSlice = createSlice({
    name: "theme",
    initialState: { value: initialState },
    reducers: {
        setSettings: (state, action) => {
            state.value = action.payload;
        },
        toggleTheme: (state) => {
            state.value = { ...state.value, theme: !state.value.theme };
        },
    },
});

export const { setSettings, toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;