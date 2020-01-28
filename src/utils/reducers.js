import {combineReducers} from "redux";
import loginUser from "../reducers/login";
import logoutUser from "../reducers/logout";


const reducers= combineReducers({
    logIn: loginUser,
    logOut: logoutUser
});

export default reducers;