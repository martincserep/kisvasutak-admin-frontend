import React, {useEffect, useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../backend/logout";

import firebase from "../../config/firebase";

import styles from './Header.module.scss'

import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";


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
            <Header aria-label="IBM Platform Name">
            <HeaderName href="#" prefix="IBM">
                [Platform]
            </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
            </HeaderNavigation>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                <AppSwitcher20 />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
            </Header>
      </div>
    )

}

export default withRouter(Nav);