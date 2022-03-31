import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    toast: false
}


export const uiSlice = createSlice({
    name: "ui",
    initialState: { value: initialState },
    reducers: {
        showToast: (state, action) => {
            state.value = { ...state.value, toast: action.payload };
        },
    },
});

export const { showToast } = uiSlice.actions;

export default uiSlice.reducer;