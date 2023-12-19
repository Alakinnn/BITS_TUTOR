import { useContext } from "react";
import TutorMyProfilePage from "./TutorMyProfilePage";
import StudentMyProfilePage from "./StudentMyProfilePage";

import { UserContext } from "../../../App";
import { useAuth } from "../../../contexts/AuthContext";
function MyProfilePage() {
    const { user } = useAuth();

    if (user.role === "tutor") {
        return <TutorMyProfilePage />;
    } else if (user.role === "student") {
        return <StudentMyProfilePage />;
    }
}

export default MyProfilePage;
