import React, { Suspense, Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// First we import some modules...
import { Link } from "react-router";

const People = React.lazy(() => import("./People"));

class App extends Component {
  state = {
    showPeople: false
  };
  loadPeople = () => {
    this.setState({
      showPeople: true
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>Apqwqwdp</h1>
          {/* change the <a>s to <Link>s */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/inbox">Inbox</Link>
            </li>
          </ul>

          {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
          {this.props.children}
        </div>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            React + Electron ={" "}
            <span role="img" aria-label="love">
              😍
            </span>
            <button onClick={this.loadPeople}>load people</button>
            <Suspense fallback={<div>Loading...</div>}>
              {this.state.showPeople && <People />}
            </Suspense>
          </h2>
        </div>
        <p className="App-intro">
          <b> Release 0.2.7 </b>
        </p>
      </div>
    );
  }
}

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
export default App;
