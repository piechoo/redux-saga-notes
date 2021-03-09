import { call, put } from "redux-saga/effects";
import { setNotes, getNotes } from "../../slices/notesSlice";
import { requestGetNotes, requestDeleteNote , requestEditNote, requestAddNote, requestGetSearchNotes, requestGetLikedNotes, requestGetTagedNotes } from "../requests/note";

export function* handleGetNotes(action) {
    try {
        const response = yield call(requestGetNotes);
        const { data } = response;
        yield put(setNotes({ data }));
    } catch (error) {
        console.log(error);
    }
}
export function* handleGetLikedNotes(action) {
    try {
        const response = yield call(requestGetLikedNotes);
        const { data } = response;
        yield put(setNotes({ data }));
    } catch (error) {
        console.log(error);
    }
}
export function* handleGetSearchNotes(action) {
    try {
        const {payload} = action
        const response = yield call(requestGetSearchNotes,payload);
        const { data } = response;
        yield put(setNotes({ data }));
    } catch (error) {
        console.log(error);
    }
}
export function* handleGetTagedNotes(action) {
    try {
        const {payload} = action
        const response = yield call(requestGetTagedNotes,payload);
        const { data } = response;
        yield put(setNotes({ data }));
    } catch (error) {
        console.log(error);
    }
}
export function* handleDeleteNote(action) {
    try {
        const { payload } = action;
        yield call(requestDeleteNote,payload);
        yield put(getNotes());
    } catch (error) {
        console.log(error);
    }
}

export function* handleEditNote(action) {
    try {
        const { payload } = action;
        yield call(requestEditNote,payload);
        yield put(getNotes());
    } catch (error) {
        console.log(error);
    }
}

export function* handleLikeNote(action) {
    try {
        const { payload } = action;
        yield call(requestEditNote,payload);
        yield put(getNotes());
    } catch (error) {
        console.log(error);
    }
}

export function* handleAddNote(action) {
    try {
        const { payload } = action;
        yield call(requestAddNote,payload);
        yield put(getNotes());
    } catch (error) {
        console.log(error);
    }
}