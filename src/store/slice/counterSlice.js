import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    changed: false
};

const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        setTitle: (state, actions) => {
            state.changed = actions.payload
        },
    },
});


const counterReducer = counterSlice.reducer;


export const { setTitle } = counterSlice.actions;
export default counterReducer;
