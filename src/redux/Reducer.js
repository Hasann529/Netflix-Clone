import { combineReducers } from "redux";
import { actionReducer } from "./actionReducer";

export const Reducer = combineReducers({
    lists:actionReducer
})