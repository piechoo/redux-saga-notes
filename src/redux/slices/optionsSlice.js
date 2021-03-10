import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
    name: "options",
    initialState:{
        search:false,
        searchItem:'',
        tag:false,
        tagItem:''
    },
    reducers: {
        setTag(state,action ) {
            const {  tagItem}=action.payload
            return Object.assign({}, state, {
                tag: true,
                tagItem:tagItem
            });
        },
        setSearch(state, action) {
            const {searchItem}=action.payload
            return Object.assign({}, state, {
                search: true,
                searchItem:searchItem
            });
        },
        freeTag(state,action ) {
            return Object.assign({}, state, {
                tag: false,
                tagItem:''
            });
        },
        freeSearch(state,action ) {
            return Object.assign({}, state, {
                search: false,
                searchItem:''
            });
        },

    }
});

export const { setTag, setSearch, freeSearch, freeTag} = optionsSlice.actions;

export default optionsSlice.reducer;
