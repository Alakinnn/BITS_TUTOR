import { useEffect, useState } from "react";
import generateColor from "../../../utils/generateColor";

function Tag({ tag }) {
    const [tagColor, setTagColor] = useState("");

    useEffect(() => {
        setTagColor(generateColor(tag));
    }, [tag]);

    return (
        <p
            className="badge rounded-pill mx-2"
            style={{ backgroundColor: tagColor, color: "white" }}
        >
            {tag}
        </p>
    );
}

export default Tag;
