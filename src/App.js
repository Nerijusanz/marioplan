import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import './assets/main.css';

import MainNavbar from './components/layout/MainNavbar';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import Dashboard from './components/dashboard/Dashboard';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/signin" component={SignIn}></Route>
              <Route exact path="/signup" component={SignUp}></Route>

              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route exact path="/projects" component={ProjectList}></Route>
              <Route exact path="/projects/add" component={CreateProject}></Route>
              <Route exact path="/projects/:id" component={ProjectDetails}></Route>
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
