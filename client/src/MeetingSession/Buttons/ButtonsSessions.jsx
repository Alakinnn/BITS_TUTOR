import { MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";
const ButtonsSessions = ({ joinSessionFunction, joinLiveCodingFunction }) => {
  return (
    <div className="buttons">
      <button className="joinMeeting blueButton btn-dark" onClick={joinSessionFunction}>
        Join Meeting
      </button>
      <button
        className="liveCoding blueButton"
        onClick={joinLiveCodingFunction}
      >
        Live Coding
      </button>
    </div>
  );
};

export default ButtonsSessions;
