export const deleteUserAction = (_id) => {
    return {
        type: 'DELETE_USER',
        _id
    }
}

export const addUserAction = (user) => {
    return {
        type: 'ADD_USER',
        user
    }
}

export const loggedUserAction = (data) => {
    return {
        type: 'LOGGED_USER',
        data
    }
}

export const setUsersAction = (users) => {
    return {
        type: 'SET_USERS',
        users
    }
}