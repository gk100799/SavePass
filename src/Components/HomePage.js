import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Users from './Users'
import AddUser from './AddUser'
import { connect } from 'react-redux'
import { deleteUserAction, addUserAction } from '../Actions/userActions'
import { Button } from 'antd'
// import add from './add-button.svg'

const HomePage = (props) => {

  return (
    <div className="App">
      <div className="logout">
      <Button>
        Logout
      </Button>
      </div>
      <h1 className="Heading" style={{ marginBottom: '40px' }}>DETAILS</h1>
      <AddUser addUser={props.addUser} />
      {/* <Button type="primary" shape="round" icon={<add />} size="large">
        Download
        </Button> */}
      <br />
      <br />
      <Users users={props.users} deleteUser={props.deleteUser} />
      {/* <br /> */}
      {/* <br /> */}
      {/* <AddUser addUser={props.addUser} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
