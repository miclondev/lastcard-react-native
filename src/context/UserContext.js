import React, { createContext } from "react"

export const UserContext = createContext()

export function UserProvider(props) {
    return (
        <UserContext.Provider value={{ userId: undefined, loggedIn: false }}>
            {props.children}
        </UserContext.Provider>
    )
}
