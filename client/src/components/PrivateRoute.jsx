import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Import your authentication library

const PrivateRoute = ({ Component }) => {
    const { isAuthenticated } = useAuth();
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const authStatus = await isAuthenticated();
                await setIsAuth(authStatus);
            } catch (error) {
                // Handle error (e.g., redirect to login page)
                await setIsAuth(false);
            }
        };

        checkAuthentication();
    }, []);

    if (isAuth === null) {
        // You can show a loading spinner or any other loading indicator here
        return <div>Loading...</div>;
    }

    return isAuth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
