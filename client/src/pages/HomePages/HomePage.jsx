import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import GuestHomePage from "./GuestHomePage";
import TutorHomePage from "./TutorHomePage";
import StudentHomePage from "./StudentHomePage";

function HomePage() {
    const [user, setUser] = useState(null);
    const { getLocalUser } = useAuth();

    useEffect(() => {
        setUser(getLocalUser());
    }, []);

    if (!user)
        return (
            <div>
                <GuestHomePage></GuestHomePage>
            </div>
        );

    if (user.role === "tutor") {
        return (
            <div>
                <TutorHomePage tutor={user} />
            </div>
        );
    } else if (user.role === "student") {
        return (
            <div>
                <StudentHomePage student={user} />
            </div>
        );
    } else {
        return (
            <div>
                <GuestHomePage />
            </div>
        );
    }
}

export default HomePage;
