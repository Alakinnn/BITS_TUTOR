import React, { createContext, useContext, useState } from "react";
import validateUser from "../services/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(/* your initial user state */);

    const isAuthenticated = async () => {
        const localToken = localStorage.getItem("token");
        if (!localToken) {
            return false;
        }

        const validatedUser = await validateUser(localToken);

        if (!validatedUser) {
            return false;
        }

        await setUser(validatedUser);
        return true;
    };

    const getUser = () => {
        return user;
    };

    const storeAuth = ({ newUser, newToken }) => {
        setUser(newUser);
        // Add to localStorage
        localStorage.setItem("token", newToken);
    };

    const removeAuth = () => {
        // Add any necessary cleanup logic
        setUser(null);
        // Remove from localStorage
        localStorage.removeItem("token");
    };

    const value = {
        user,
        getUser,
        setUser,
        isAuthenticated,
        storeAuth,
        removeAuth,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
