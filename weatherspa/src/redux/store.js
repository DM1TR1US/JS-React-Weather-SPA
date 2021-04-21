import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk";
import detailedReducer from "./reducers/detailedReducer";


let reducers = combineReducers({
    detailedInfo: detailedReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;