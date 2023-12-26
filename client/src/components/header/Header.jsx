import { useState, useEffect } from "react";
import GuestHeader from "./GuestHeader";
import StudentHeader from "./StudentHeader";
import TutorHeader from "./TutorHeader";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
    const [user, setUser] = useState(null);
    const { getLocalUser } = useAuth();

    useEffect(() => {
        setUser(getLocalUser());
    }, [getLocalUser]);

    if (!user) {
        return (
            <div>
                <GuestHeader />
            </div>
        );
    }

    if (user.role == "student") {
        return (
            <div>
                <StudentHeader student={user} />
            </div>
        );
    } else if (user.role == "tutor") {
        return (
            <div>
                <TutorHeader tutor={user} />
            </div>
        );
    }

    return null;
}

export default Header;
