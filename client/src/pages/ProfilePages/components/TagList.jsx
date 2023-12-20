import { useEffect } from "react";
import Tag from "./Tag";

let TAGS_PER_LINE = 3;

function TagList({ tags, tagsPerLine }) {
  if (tagsPerLine) {
    TAGS_PER_LINE = tagsPerLine;
  }
  const renderTags = () => {
    const tagGroups = [];
    // If there are no tags, return an empty array
    if (!tags) {
      return tagGroups;
    }
    for (let i = 0; i < tags.length; i += TAGS_PER_LINE) {
      const tagsSlice = tags.slice(i, i + TAGS_PER_LINE);
      const tagGroup = (
        <div
          className=" justify-content-center align-items-center"
          key={i}
        >
          {/* d-flex tui note, đừng xoá (yuumi)*/}
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
