import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { UserData } from "../types/UserData"

interface AuthContexttype{
    user: UserData | null
    login: (userData: UserData) => void
    logout: () => void
    isAuthConticated: boolean
}

const AuthContext = createContext<AuthContexttype | undefined>(undefined)

export const AuthProvider = ({ children} : {children: ReactNode}) => {
        const [user, setUser] = useState<UserData | null>(null)

        useEffect(() => {
            const storedUser = localStorage.getItem("userSession")
            if(storedUser){
                try{
                 setUser(JSON.parse(storedUser))
                } catch(e){
                    localStorage.removeItem("userSession")
                }
            }
        },[])

        const login = (userData : UserData) => {
            localStorage.setItem("userSession", JSON.stringify(userData))
            setUser(userData)
        }
        const logout = () => {
            localStorage.removeItem("userSession")
            setUser(null)
        }

        return (
            <AuthContext.Provider value={{ user, login, logout, isAuthConticated: !!user}}>
                {children}
            </AuthContext.Provider>
     )
}

export const useAuth = () => {
    const context  = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth debe ser utilizado dentro de un AuthProvider")
    }
    return context
}