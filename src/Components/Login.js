import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { axiosInstance, request } from '../helpers'
import { Redirect } from 'react-router-dom'
import { loggedUserAction } from '../Actions/userActions'
import { connect } from 'react-redux'
import './Login.css'

const Login = (props) => {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosInstance.get('user/login/currentUser/')
                .then(res => props.history.push('/home'))
        }
    }, []);
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        let data = {
            "username": values.username,
            "password": values.password,
        }
        request.post('/user/login/', data)
            .then(async (res) => {
                await localStorage.setItem('token', res.data.token);
                props.loggedUser({ name: res.data.name, loggedIn: true })
            })
            .then(res => props.history.push('/home'))
            .then(res => message.success("Logged in successfully!"))
            .then(res => console.log("Logged In"))
            .catch(err => message.error("Invalid Credentials"));
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
        </Button>
            </Form.Item>
        </Form>
    );
};

const mapStateToProps = (state) => {
    return {
        //   users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loggedUser: (data) => { dispatch(loggedUserAction(data)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);