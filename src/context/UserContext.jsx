import { createContext, useState } from "react";
export const UserContext = createContext(null)
export const AuthProvider = ({ children }) => {
    const [loginuser, setloginuser] = useState(null)
    const [usertype, setusertype] = useState(null)

    return <UserContext.Provider value={{ loginuser, setloginuser, usertype, setusertype }}>
        {children}
    </UserContext.Provider>
}
