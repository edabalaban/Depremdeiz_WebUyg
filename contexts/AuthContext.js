import React, { useContext } from 'react'
import { auth } from '../src/firebase'

const AuthContexts = React.createContext()

export function useAuth(){
    return useContext(AuthContexts)
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState()
}

const value = {
    currentUser
}

export default function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
