import React, { useState } from 'react'
import userContext from './UserContext'

const UserContextProvider = ({ children }) => {
    const [isUser, setIsUser] = useState(false)
    return (
        <userContext.Provider value={{ isUser, setIsUser }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider