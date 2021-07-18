import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import Welcome from '../Components/welcome';
import Winners from "../Components/WinnerPage"


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Welcome} exact={true} />
        <Route path="/Home" component={Home} exact={true} />
        <Route path="/Winners" component={Winners} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;