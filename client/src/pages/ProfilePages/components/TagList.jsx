import { useEffect } from "react";
import Tag from "./Tag";
function TagList({ tags }) {
    return tags.map((tag, index) => <Tag tag={tag} key={index} />);
}

export default TagList;
