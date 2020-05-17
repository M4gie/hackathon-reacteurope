import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Setup from "./pages/Setup";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/setup">
            <Setup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
