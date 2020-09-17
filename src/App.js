import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import AsyncHeavy from "./AsyncHeavy";
import Form from "./Form";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/heavy">Heavy</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
          <p>{process.env.NODE_ENV}</p>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/heavy/" component={AsyncHeavy} />
        <Route path="/form/" component={Form} />
      </div>
    </Router>
  );
}

export default hot(App);
