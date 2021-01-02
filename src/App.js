import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="circle-container">
            <h1>my artwork</h1>
            <div id="cc">
              <div class="circle" id="five"></div>
              <div class="circle" id="four"></div>
              <div class="circle" id="three"></div>
              <div class="circle" id="two"></div>
              <div class="circle" id="one"></div>
            </div>
          </div>
        </header>
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
