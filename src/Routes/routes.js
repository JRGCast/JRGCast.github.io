import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
// const About = lazy(() => import("../pages/About"));
// const Home = lazy(() => import("../pages/Home"));
// const Projects = lazy(() => import("../pages/Projects"));
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/projects' component={ Projects } />
    </Switch>
  );
};

export default Routes;
