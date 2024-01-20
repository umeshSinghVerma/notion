'use client'

import { createContext, useState } from "react"

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [state,setState]=useState(null);
    return (
        <AuthContext.Provider value={{state,setState}}>
            {children}
        </AuthContext.Provider>
    )
}