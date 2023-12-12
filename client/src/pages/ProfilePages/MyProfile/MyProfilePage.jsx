import { useContext } from "react";
import TutorMyProfilePage from "./TutorMyProfilePage";
import StudentMyProfilePage from "./StudentMyProfilePage";

import { UserContext } from "../../../App";
function MyProfilePage() {
    const user = useContext(UserContext);

    if (user.role === "tutor") {
        return <TutorMyProfilePage />;
    } else if (user.role === "student") {
        return <StudentMyProfilePage />;
    }
}

export default MyProfilePage;
