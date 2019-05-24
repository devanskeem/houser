import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import routes from './routes'
import {HashRouter as Router, Link} from 'react-router-dom'


class App extends Component {
  render(){
    return (
        <Router>
          <div className="App">
            <Header/>
            {routes}
          </div>
        </Router>
    );
  }
}

export default App;
