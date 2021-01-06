import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Navigation from './components/Navigation.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/Gallery" exact component={() => <Gallery />} />
            <Route path="/About" exact component={() => <About />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
