import SocialLinkInput from "./SocialLinkInput";

function SocialLinksList({ baseIndex, socialLinks, handleAdd }) {
    return socialLinks.map((link, index) => {
        let isLast = index + 1 === socialLinks.length;

        return (
            <SocialLinkInput
                index={baseIndex + index}
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
