import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "../components/shared/Header";
import RivalryPage from "../pages/Rivalry";
import NewRivalry from "../pages/NewRivalry";
import NewRivalryProvider from "../contexts/NewRivalryContext";
import CurrentUserProvider from "../contexts/CurrentUserContext";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <CurrentUserProvider>
          <Route exact path={"/"} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/rivalry/:rivalryId"} component={RivalryPage} />
          <PrivateRoute path={"/app"} component={() => <h1>logado</h1>} />
          <NewRivalryProvider>
            <PrivateRoute path={"/create"} component={NewRivalry} />
          </NewRivalryProvider>
        </CurrentUserProvider>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
