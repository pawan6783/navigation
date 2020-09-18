import React, {Component} from 'react';
import '../stylesheets/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Project from '../components/Project';
import Service from '../components/Service';
import Contact from '../components/Contact';

class App extends Component {


  render(){
    return (
      <Router>
         <ul>
                <li><Link to = "/home">HOME</Link></li>
                <li><Link to = "/projects">PROJECTS</Link></li>
                <li><Link to = "/services">SERVICES</Link></li>
                <li><Link to = "/contacts">CONTACTS</Link></li>

          </ul>
          <Switch>
            <Route exact path = "/projects" component = {Project}></Route>
            <Route exact path = "/services" component = {Service}></Route>
            <Route exact path = "/contacts" component = {Contact}></Route>
            <Route exact path = "/home" component = {Home}></Route>
          </Switch>
      </Router>
    );
  }
  
}

export default App;
