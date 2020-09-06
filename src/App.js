import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage'
import Login from './Components/Login'


const App = (props) => {

  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
    </Router>
  )
}


export default App;
