import React, { useState, useEffect } from 'react';
import './App.css';
import Users from './Components/Users'
import AddUser from './Components/AddUser'
import { connect } from 'react-redux'
import { deleteUserAction, addUserAction } from './Actions/userActions'

const App = (props) => {

  
  console.log(props);

  // const addUser = (user) => {
    // user.id = Math.random();
    // let updatedUsers = [...users, user];
    // setUsers(updatedUsers)
  // }

  return (
    <div className="App">
      <h1 className="Heading" >Users</h1>
      <Users users={props.users} deleteUser={props.deleteUser} />
      <AddUser addUser={props.addUser} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => { dispatch(deleteUserAction(id)) },
    addUser: (user) => { dispatch(addUserAction(user)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
