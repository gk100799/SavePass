import React, { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd';
import './AddUser.css'

export default function AddUser({ addUser }) {

    const [form] = Form.useForm();
    
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = values => {
        console.log(values);
        const user = {
            name: values.name,
            username: values.username,
            password: values.password
        }
        addUser(user)
        form.resetFields();
    };

    return (
        <div className="form">
            <h3 style={{marginTop: '3px', marginRight: '30px'}} >Add Item:</h3>
            <Form
                form={form}
                layout="inline"
                name="addUser"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item name={['name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['username']} label="Username" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['password']} label="Password" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
            {/* <form onSubmit={handleSubmit}>
                <label>Add a new User:</label>
                <Input type="text" name="username" onChange={handleChange} value={user.username} />
                <Input type="text" name="password" onChange={handleChange} value={user.password} />
                <Input type="submit" value="Add" />
            </form> */}
        </div>
    )
}
