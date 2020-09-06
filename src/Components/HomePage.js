import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Users from './Users'
import AddUser from './AddUser'
import { connect } from 'react-redux'
import { deleteUserAction, addUserAction, setUsersAction } from '../Actions/userActions'
import { Button } from 'antd'
import NavBar from './NavBar'
import { Redirect } from 'react-router-dom'
import { axiosInstance, request } from '../helpers'
// import add from './add-button.svg'

const HomePage = (props) => {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            request.get('account', {
                headers: {
                    "auth-token": localStorage.getItem('token'),
                }
            })
                .then(res => {
                    props.setUsers(res.data)
                })
        } else {
            props.history.push('/')
        }
    }, []);

    return (
        <div className="App">
            <NavBar />
            {/* <div className="logout">
            <Button>
                Logout
            </Button> */}
            {/* </div> */}
            {/* <h1 className="Heading" style={{ marginBottom: '40px' }}>DETAILS</h1> */}
            <br />
            <br />
            <AddUser addUser={props.addUser} />
            {/* <Button type="primary" shape="round" icon={<add />} size="large">
                Download
            </Button> */}
            <br />
            <br />
            <Users deleteUser={props.deleteUser} />
            {/* <br /> */}
            {/* <br /> */}
            {/* <AddUser addUser={props.addUser} /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.loggedIn)
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (_id) => { dispatch(deleteUserAction(_id)) },
        addUser: (user) => { dispatch(addUserAction(user)) },
        setUsers: (users) => { dispatch(setUsersAction(users)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
