import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import notesReducer from "./slices/notesSlice";
import tagReducer from "./slices/tagSlice";
import optionsReducer from "./slices/optionsSlice";


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({

    notes: notesReducer,
    tags: tagReducer,
    options: optionsReducer,
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(watcherSaga);

export default store;
