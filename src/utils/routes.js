import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//import the components
import Home from "../pages/Home";
import Login from "../pages/Login";

import Auth from "../components/Auth";
import Accomodations from "../pages/Accomodations";
import Sights from "../pages/Sights";
import Edit from "../pages/Edit"
import AccAndSightEdit from "../pages/AccAndSightEdit";

const Routes = () => (
   <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Auth(Home)} />
            <Route exact path="/accomodations/:trainId" component={Auth(Accomodations)} />
            <Route exact path="/sights/:trainId" component={Auth(Sights)} />
            <Route exact path="/edit/:edit/:trainId" component={Auth(Edit)} />
            <Route exact path="/edit/:edit/:trainId/:id" component={Auth(AccAndSightEdit)} />
            <Route exact path="/asedit" component={Auth(AccAndSightEdit)} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
       
) 

export default Routes;