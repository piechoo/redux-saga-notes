import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import notesReducer from "./slices/notesSlice";
import tagReducer from "./slices/tagSlice";


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({

    notes: notesReducer,
    tags: tagReducer
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(watcherSaga);

export default store;
