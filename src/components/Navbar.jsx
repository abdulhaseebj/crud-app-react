import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const Navbar = () => {
    const { isUser, setIsUser } = useContext(userContext)
    // console.log(names);
    return (
        <div>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                {isUser ? <div>
                    <li onClick={()=> setIsUser(false)}>logout</li>
                </div > : <div>
                        <li onClick={()=> setIsUser(true)}>login</li>
                        <li>register</li>
                </div>}
            </ul>
        </div>
    )
}

export default Navbar