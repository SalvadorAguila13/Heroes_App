import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

// const initialState = {
//     logged: false
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user: user
    }
}

const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {}, init)

    // Login user
    const login = (name = '') => {
        const user = {id: 1, name}
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

    // Logout user
    const logout = () => {
        localStorage.removeItem('user')
        const action = {
            type: types.logout,
        }
        dispatch(action)
    }
    

  return (
    <AuthContext.Provider value={{
        ...state, 
        logout: logout,
        login: login
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider