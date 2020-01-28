import React, {useEffect, useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../backend/logout";

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
              <li><button className="logout" onClick={logout}>LogOut</button></li>
          </React.Fragment>)


    return(
        <div className={styles.headerContainer}>
            {buttons}
      </div>
    )

}

export default withRouter(Nav);