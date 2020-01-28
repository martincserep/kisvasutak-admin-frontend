import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//import the components
import Home from "../pages/Home";
import Login from "../pages/Login";

import Auth from "../components/Auth";

const Routes = () => (
   <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Auth(Home)} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
       
) 

export default Routes;