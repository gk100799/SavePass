import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import SignIn from './Components/SignIn'


const App = (props) => {

  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Route path="/home" exact component={HomePage} />
      <Route path="/" exact component={SignIn} />
    </Router>
  )
}


export default App;
