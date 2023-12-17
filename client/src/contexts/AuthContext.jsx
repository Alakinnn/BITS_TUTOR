import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(/* your initial user state */);

    const isAuthenticated = () => {
        // FIXME: Implement this function
        return true;
    };

    const value = {
        user,
        setUser,
        isAuthenticated,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
