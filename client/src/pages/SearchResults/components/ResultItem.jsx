import React from "react";
import { Link } from "react-router-dom";
import TagList from "../../ProfilePages/components/TagList";

function ResultItem({ user }) {
  console.log(user._id);
  return (
    <Link to={`/tutor/${user._id}`}>
      <section class="search-result-item">
        <div className="image-link">
          <img class="image" src={user.profilePicUrl} />
        </div>
        <div class="search-result-item-body">
          <div class="row">
            <div class="col-sm-9">
              <h4 class="search-result-item-heading">{user.fullName}</h4>
              <TagList tags={user.tags} tagsPerLine={5} />
              <p class="description">{user.description}</p>
            </div>
            <div class="col-sm-3 text-align-center">
              <p class="value3 mt-sm">{user.hourlyRate}</p>
              <p class="fs-mini text-muted">PER HOUR</p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default ResultItem;
