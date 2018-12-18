import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import MainNavbar from './components/layout/MainNavbar';

import AuthRoute from './routes/AuthRoute';
import GuestRoute from './routes/GuestRoute';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';

// default comments
// * comment highlighted
// TODO: todo comment
// !important comment
// ? something questional?
/*
* @param myParam text
*/

class App extends Component {
  render() {
    return (
     
        <div className="App">
          <MainNavbar />
          <div className="container">
            <Switch>
              <GuestRoute exact path="/signin" component={SignIn} />
              <GuestRoute exact path="/signup" component={SignUp} />

              <AuthRoute exact path="/dashboard" component={Dashboard} />

              <AuthRoute exact path="/projects/add" component={CreateProject} />
              <AuthRoute exact path="/projects/:id" component={ProjectDetails} />
            </Switch>
          </div>

        </div>
      
    );
  }
}

export default App;
