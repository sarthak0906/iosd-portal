import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/video_test2'
import Nav from './components/video_test1'
import Login_test from './components/Login_test'
import Register_test from './components/Register'
import PrivateRoute from './components/common/PrivateRoute'
import Player from "./components/Player"

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser, clearCurrentProfile } from './actions/authAction';
import Bar from './components/layout/Bar';
import Home from './components/Home';
import Manage from './components/Manage';
import AddEvent from './components/Forms/AddEvent';
import AddLecture from './components/Forms/AddLecture';
import AddReimburse from './components/Forms/AddReimbursement'
import AddAssignment from './components/Forms/AddAssignment'
import AddEnroll from './components/Forms/AddEnroll';

import Enrollment from './components/dashboard-admin/Enrollment'
import Event from './components/dashboard-admin/Event'
import Assignment from './components/dashboard-admin/Assignment'
import Lecture from './components/dashboard-admin/Lecture'
import Reimbursement  from './components/dashboard-admin/Reimbursement'

//Check for Token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token to get user
  const decoded = jwt_decode(localStorage.jwtToken)
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //check if token is expired
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    window.location.href = '/login';
  }
}
class App extends Component {
  render() {
    //response.removeHeader('X-Content-Type-Options');
    return (
      <Provider store={store}>
        <Router>
        <Bar/>
        <Route exact path="/" component={Home} />
          <Route exact path="/0" component={Nav} />
          <Route exact path="/1" component={Navbar} />
          <Route exact path="/course" component={Player} />
          <Route exact path="/login" component={Login_test} />
          <Route exact path="/register" component={Register_test} />
          <Route exact path="/course/:curr_url" component={Player} key="reload" />
          <Switch>
            <PrivateRoute exact path="/enrollment" component={Enrollment} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/event" component={Event} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/lecture" component={Lecture} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/assignment" component={Assignment} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/reimburse" component={Reimbursement} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/manage-users" component={Manage} />
          </Switch>
          <Route exact path="/add-event" component={AddEvent} />
          <Route exact path="/add-lecture" component={AddLecture} />
          <Route exact path="/add-reimburse" component={AddReimburse} />
          <Route exact path="/add-assignment" component={AddAssignment}/>
          <Route exact path="/add-enrollment" component={AddEnroll}/>
        </Router>
      </Provider>

    );
  }
}

export default App;
