import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Game from "./pages/Game";
import Stats from "./pages/Stats";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/setup">
          <Setup />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
