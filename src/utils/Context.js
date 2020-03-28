import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return process.browser && localStorage.getItem('token')
    })
    const value = {
        isAuth,
        activateAuth: (token) => {
            setIsAuth(true)
            process.browser && localStorage.setItem('token', token)
        },
        removeAuth: () => {
            setIsAuth(false)
            process.browser && localStorage.removeItem('token')
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default { Provider, Consumer: Context.Consumer }
