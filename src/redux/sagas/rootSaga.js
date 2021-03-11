import { takeEvery } from "redux-saga/effects";
import {handleDeleteNote, handleGetNotes, handleEditNote, handleAddNote, handleGetLikedNotes, handleGetSearchNotes, handleGetTagedNotes, handleLikeNote} from "./handlers/note";
import {handleGetTags} from "./handlers/tag";
import { getNotes, deleteNote,editNote,addNote, getLikedNotes, getSearchNotes, getTagedNotes, likeNote } from "../slices/notesSlice";
import { getTags} from "../slices/tagSlice";

export function* watcherSaga() {
    yield takeEvery(getNotes.type, handleGetNotes);
    yield takeEvery(getLikedNotes.type, handleGetLikedNotes);
    yield takeEvery(getSearchNotes.type, handleGetSearchNotes);
    yield takeEvery(getTagedNotes.type, handleGetTagedNotes);
    yield takeEvery(deleteNote.type, handleDeleteNote);
    yield takeEvery(editNote.type, handleEditNote);
    yield takeEvery(addNote.type, handleAddNote);
    yield takeEvery(likeNote.type, handleLikeNote);

    yield takeEvery(getTags.type, handleGetTags);

}
