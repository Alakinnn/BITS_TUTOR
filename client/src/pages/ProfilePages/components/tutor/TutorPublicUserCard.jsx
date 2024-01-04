import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,

  // MDBListGroupItem,
} from "mdb-react-ui-kit";
import TagList from "../TagList";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

const TutorPublicUserCard = ({ tutor }) => {
  const { user } = useAuth();
  return (
    <MDBCard className="mb-4">
      <MDBCardBody className="text-center">
        <MDBCardImage
          src={tutor.profilePicUrl}
          alt="avatar"
          className="rounded-circle"
          fluid
        />
        <p className="text-muted mb-3">{tutor.username}</p>
        <TagList tags={tutor.tags} />
        {user.role == "student" ? (
          <Link to={`/schedule/${tutor._id}`}>
            <div className="d-flex justify-content-center mb-2">
              <MDBBtn className="bg-secondary">Book A Session</MDBBtn>
            </div>
          </Link>
        ) : (
          <div className="d-flex justify-content-center mb-2">
            <MDBBtn
              className="btn-dark"
              onClick={() =>
                window.alert("You cannot book another tutor's session")
              }
            >
              Book A Session
            </MDBBtn>
          </div>
        )}
      </MDBCardBody>
    </MDBCard>
  );
};

export default TutorPublicUserCard;
