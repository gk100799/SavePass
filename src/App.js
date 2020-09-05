import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import NavBar from './Components/NavBar'

const App = (props) => {

  return (
    <Router basename={process.env.PUBLIC_URL} >
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
    </Router>
  )
}


export default App;
