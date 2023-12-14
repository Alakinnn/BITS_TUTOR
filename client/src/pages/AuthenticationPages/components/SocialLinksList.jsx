import SocialLinkInput from "./SocialLinkInput";

function SocialLinksList({ socialLinks, handleAdd }) {
    return socialLinks.map((link, index) => {
        let isLast = index + 1 === socialLinks.length;

        return (
            <SocialLinkInput
                index={5 + index}
                order={index}
                placeholder="Add your socials"
                isLast={isLast}
                handleAdd={handleAdd}
                key={index}
            />
        );
    });
}

export default SocialLinksList;
