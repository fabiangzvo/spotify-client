import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isAuth, setIsAuth] = useState(() => {
        return process.browser && localStorage.getItem('token')
    })
    const value = {
        isAuth,
        user,
        activateAuth: (token) => {
            setIsAuth(true)
            process.browser && localStorage.setItem('token', token)
        },
        removeAuth: () => {
            setIsAuth(false)
            setUser({})
            process.browser && localStorage.removeItem('token')
        },
        activateUser: (user) => {
            setUser(user)
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default { Provider, Consumer: Context.Consumer }
