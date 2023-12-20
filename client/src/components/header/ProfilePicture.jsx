function ProfilePicture({ profilePicUrl }) {
    return (
        <a href="/me">
            <img
                className="rounded-circle profilePicture"
                src={profilePicUrl}
                alt="pfp"
            />
        </a>
    );
}

export default ProfilePicture;
