import React, { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon,
    MDBCardText,
} from "mdb-react-ui-kit";
import { SocialIcon } from "react-social-icons";
import "/src/css/Profile/SocialLink.css";

function SocialLinks({ user }) {
    const [links, setLinks] = useState([]);
    useEffect(() => {
        setLinks(user.socialLinks);
    }, [user]);

    const renderSocialLinks = () => {
        if (!links) {
            return <div>Loading...</div>;
        }

        return links.map((link, index) => {
            return (
                <MDBListGroupItem
                    key={index}
                    className="d-flex justify-content-between align-items-center p-3"
                >
                    <SocialIcon className="social-icon" url={link} />
                    <MDBCardText>{link}</MDBCardText>
                </MDBListGroupItem>
            );
        });
    };
    return (
        <MDBCard className="mb-4 mb-lg-0">
            <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                    {renderSocialLinks()}
                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>
    );
}

export default SocialLinks;
