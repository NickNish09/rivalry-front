import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={() => <h1>oi</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
