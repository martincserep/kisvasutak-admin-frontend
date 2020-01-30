import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../backend/logout";

import { menu } from '../../utils/menu'

import firebase from "../../config/firebase";

import styles from './Header.module.scss'

const Nav = (props) => {
  
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const logoutUserAction = () => dispatch(logoutUser());

  useEffect(() => {
    firebase.getUserState().then(user => {
     setUserState(user);
    });
  })

  

  const logout = async() => {
    console.log("logout user");
    setUserState(null);
    await logoutUserAction();
    props.history.replace("/")
  }


  

  let buttons = (  
          <React.Fragment>
              
          </React.Fragment>)


    return(
      <nav>
        <>
        {
						menu.getAllMenuItems().map(currMenuItem => (
							<a key={currMenuItem.id} href={currMenuItem.target}>
								{currMenuItem.label}
							</a>
						))
					}
        </>
        <a onClick={logout}>Logout</a>
      </nav>
    )

}

export default withRouter(Nav);