import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const Inbox = React.lazy(() => import("./Inbox"));

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="inbox" component={() => <Inbox />} />
      </Route>
    </Router>
  </Suspense>,
  document.getElementById("root")
);
