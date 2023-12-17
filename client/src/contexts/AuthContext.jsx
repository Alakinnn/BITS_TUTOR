import React, { createContext, useContext, useState } from "react";
import validateUser from "../services/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(/* your initial user state */);

    const isAuthenticated = async () => {
        // FIXME: This is just a placeholder
        return true;

        // const localToken = localStorage.getItem("token");
        // if (!localToken) {
        //     return false;
        // }

        // const validatedUser = await validateUser(localToken);

        // if (!validatedUser) {
        //     return false;
        // }

        // setUser(validatedUser);
    };

    const loginUser = ({ newUser, newToken }) => {
        setUser(newUser);
        // Add to localStorage
        localStorage.setItem("token", newToken);
    };

    const logoutUser = () => {
        // Add any necessary cleanup logic
        setUser(null);
        // Remove from localStorage
        localStorage.removeItem("token");
    };

    const value = {
        user,
        setUser,
        isAuthenticated,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
