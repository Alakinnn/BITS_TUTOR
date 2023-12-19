import React from "react";
import { Link } from "react-router-dom";
import TagList from "../../ProfilePages/components/TagList";

function ResultItem({ user }) {
  console.log(user._id);
  return (
    <Link to={`/tutor/${user._id}`}>
      <section className="search-result-item">
        <div className="image-link">
          <img className="image" src={user.profilePicUrl} />
        </div>
        <div className="search-result-item-body">
          <div className="row">
            <div className="col-sm-9">
              <h4 className="search-result-item-heading">{user.fullName}</h4>
              <TagList tags={user.tags} tagsPerLine={5} />
              <p className="description">{user.description}</p>
            </div>
            <div className="col-sm-3 text-align-center">
              <p className="value3 mt-sm">{user.hourlyRate}</p>
              <p className="fs-mini text-muted">PER HOUR</p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default ResultItem;
