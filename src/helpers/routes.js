import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Routes = () => (
  <BrowserRouter>
    <div>
      <h1>Navbar</h1>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/login"} component={Login} />
        <PrivateRoute path={"/app"} component={() => <h1>logado</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
