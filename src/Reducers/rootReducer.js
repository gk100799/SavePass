const initState = {
    users: [
        // { _id: 1, name: 'Google', username: 'Gopal Krishna', password: '123' },
        // { _id: 2, name: 'Facebook', username: 'Rajat Jain', password: '123' }
    ],
    loggedIn: false,
    name: ''
}

export default function rootReducer(state = initState, action) {
    if(action.type === 'DELETE_USER') {
        let newUsers = state.users.filter(user => action._id !== user._id)
        return {
            ...state,
            users: newUsers
        }
    }

    if(action.type === 'ADD_USER') {
        let user = action.user
        // console.log(user)
        user._id = Math.random()
        return {
            ...state,
            users: [...state.users,user]
        }
    }

    if(action.type === 'LOGGED_USER') {
        // console.log(action.data)
        // user.id = Math.random()
        return {
            ...state,
            loggedIn: action.data.loggedIn,
            name: action.data.name
        }
    }

    if(action.type === 'SET_USERS') {
        // console.log(action.users,"yeah here you are")
        // user.id = Math.random()
        return {
            ...state,
            users: action.users
        }
    }

    return (
        state
    )
}
