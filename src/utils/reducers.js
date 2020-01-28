import {combineReducers} from "redux";
import loginUser from "../reducers/login";


const reducers= combineReducers({
    logIn: loginUser,
});

export default reducers;