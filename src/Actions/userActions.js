export const deleteUserAction = (id) => {
    return {
        type: 'DELETE_USER',
        id
    }
}

export const addUserAction = (user) => {
    return {
        type: 'ADD_USER',
        user
    }
}