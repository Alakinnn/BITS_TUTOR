import { useContext, useState } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";
import { UserContext } from "../../../../App";
import Tag from "../Tag";
// String.prototype.toRandomRGB = function () {
//   // Generate random values for red, green, and blue
//   var r = Math.floor(Math.random() * 256);
//   var g = Math.floor(Math.random() * 256);
//   var b = Math.floor(Math.random() * 256);

//   // Return the RGB color string
//   return `rgb(${r}, ${g}, ${b})`;
// };

function TutorUserCardMyProfile() {
    const user = useContext(UserContext);
    const [tagsPerLine, setTagsPerLine] = useState(3);
    // var _USERTAG = user.tags[0];
    // var _USERTAG2 = user.tags[1];
    // const _tag_color = _USERTAG.toRandomRGB();
    // const _tag_color2 = _USERTAG2.toRandomRGB();

    // console.log(_tag_color);

    const renderTags = () => {
        const tagGroups = [];
        for (let i = 0; i < user.tags.length; i += tagsPerLine) {
            const tagsSlice = user.tags.slice(i, i + tagsPerLine);
            const tagGroup = (
                <div
                    className="d-flex justify-content-center align-items-center"
                    key={i}
                >
                    {tagsSlice.map((tag, key) => (
                        <Tag tag={tag} key={key} />
                    ))}
                </div>
            );
            tagGroups.push(tagGroup);
        }
        return tagGroups;
    };

    return (
        <MDBCard className="mb-4">
            <MDBCardBody className="text-center">
                <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                />
                <p className="text-muted mb-3">{user.username}</p>
                <p className="text-muted mb-3">{user.role}</p>
                {/* Render tags with maximum 5 tags per line */}
                {renderTags()}

                <div className="d-flex justify-content-center mb-2">
                    <MDBBtn className="bg-secondary">Edit Profile</MDBBtn>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default TutorUserCardMyProfile;
