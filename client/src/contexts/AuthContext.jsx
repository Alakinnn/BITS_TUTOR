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

    const getLocalUser = () => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        return localUser;
    };

    const storeAuth = ({ newUser, newToken }) => {
        setUser(newUser);
        // Add to localStorage
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(newUser))
    };

    const removeAuth = () => {
        // Add any necessary cleanup logic
        setUser(null);
        // Remove from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    const value = {
        user,
        getLocalUser,
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
