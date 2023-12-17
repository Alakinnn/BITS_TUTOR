import { useEffect } from "react";
import Tag from "./Tag";

const TAGS_PER_LINE = 3;

function TagList({ tags }) {
    const renderTags = () => {
        const tagGroups = [];
        for (let i = 0; i < tags.length; i += TAGS_PER_LINE) {
            const tagsSlice = tags.slice(i, i + TAGS_PER_LINE);
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

    return renderTags();
}

export default TagList;
