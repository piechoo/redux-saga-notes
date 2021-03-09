import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
    name: "tags",
    initialState:[],
    reducers: {
        getTags(state,action ) {
        },
        setTags(state, action) {
            const userData = action.payload.data;
            return  userData ;
        }
    }
});

export const { getTags, setTags} = tagSlice.actions;

export default tagSlice.reducer;
