import { call, put } from "redux-saga/effects";
import { setTags } from "../../slices/tagSlice";
import { requestGetTags } from "../requests/tag";

export function* handleGetTags(action) {
    try {
        const response = yield call(requestGetTags);
        const { data } = response;
        yield put(setTags({ data }));
    } catch (error) {
        console.log(error);
    }
}

