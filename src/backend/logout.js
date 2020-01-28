import firebase from "../config/firebase";
import { Redirect } from "react-router";

export const logoutUser = () => {
 
    return async function(dispatch){
 
        await firebase.logout();
        dispatch({type: "LOGIN_USER", payload: {} });
        window.location.reload();
  
    }
 

}