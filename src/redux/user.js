import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Jhon Doe",
    email: "jhon@grocered.in",
    dp: "dp",
}


export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialState },
    reducers: {
        setUserDetails: (state, action) => {
            state.value = action.payload;
        },

    },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;