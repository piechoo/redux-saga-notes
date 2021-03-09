import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "notes",
    initialState:{
        notes:[]
    },
    reducers: {
        getNotes(state,action ) {
        },
        setNotes(state, action) {
            const userData = action.payload.data;
            return  userData ;
        },
        deleteNote(state, action) {
        },
        editNote(state, action) {
        },
        addNote(state, action) {
        },
        getLikedNotes(state, action) {
        },
        getSearchNotes(state, action) {
        },
        getTagedNotes(state, action) {
        },
        likeNote(state, action) {
        }

    }
});

export const { getNotes, setNotes, deleteNote,editNote, addNote, getLikedNotes, getSearchNotes, getTagedNotes, likeNote } = notesSlice.actions;

export default notesSlice.reducer;
