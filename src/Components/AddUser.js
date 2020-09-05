import React, { useState } from 'react'

export default function AddUser({ addUser }) {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUser({
                ...user,
                username: e.target.value
            })
        } else {
            setUser({
                ...user,
                password: e.target.value
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(user)
        setUser({
            username: '',
            password: ''
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add a new User:</label>
                <input type="text" name="username" onChange={handleChange} value={user.username} />
                <input type="text" name="password" onChange={handleChange} value={user.password} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
