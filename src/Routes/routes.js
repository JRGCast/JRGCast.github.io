import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import ContactMe from "../pages/ContactMe";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/projects' component={ Projects } />
      <Route path='/contactme' component={ ContactMe } />
    </Switch>
  );
};

export default Routes;
