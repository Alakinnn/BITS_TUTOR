import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,

  // MDBListGroupItem,
} from "mdb-react-ui-kit";
import TagList from "../TagList";
import { Link } from "react-router-dom";

const TutorPublicUserCard = ({ tutor }) => {
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
        <Link to={`/schedule/${tutor._id}`}>
          <div className="d-flex justify-content-center mb-2">
            <MDBBtn className="bg-secondary">Book A Session</MDBBtn>
          </div>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
};

export default TutorPublicUserCard;
