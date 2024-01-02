import { MDBBtn } from "mdb-react-ui-kit";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function SignOutButton() {
    const { removeAuth } = useAuth();
    const navigate = useNavigate();
    const handleSignOut = () => {
        removeAuth();
        location.reload();
        navigate("/login");
    };
    return (
        <MDBBtn
            onClick={handleSignOut}
            style={{ padding: "15px" }}
            className="btn btn-white text-nowrap border rounded"
        >
            Sign Out
        </MDBBtn>
    );
}

export default SignOutButton;
