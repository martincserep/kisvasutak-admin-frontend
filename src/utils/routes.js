import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//import the components
import Home from "../pages/Home";
import Login from "../pages/Login";

import Auth from "../components/Auth";
import Accomodations from "../pages/Accomodations";
import Sights from "../pages/Sights";
import TrainEdit from "../pages/TrainEdit";

const Routes = () => (
   <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Auth(Home)} />
            <Route exact path="/accomodations" component={Auth(Accomodations)} />
            <Route exact path="/sights" component={Auth(Sights)} />
            <Route exact path="/trainedit" component={Auth(TrainEdit)} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
       
) 

export default Routes;