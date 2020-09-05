const initState = {
    users: [
        { id: 1, name: 'Google', username: 'Gopal Krishna', password: '123' },
        { id: 2, name: 'Facebook', username: 'Rajat Jain', password: '123' }
    ]
}

export default function rootReducer(state = initState, action) {
    if(action.type === 'DELETE_USER') {
        let newUsers = state.users.filter(user => action.id !== user.id)
        return {
            ...state,
            users: newUsers
        }
    }

    if(action.type === 'ADD_USER') {
        let user = action.user
        console.log(user)
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users,user]
        }
    }

    return (
        state
    )
}
