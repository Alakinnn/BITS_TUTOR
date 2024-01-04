import React from "react";
import { Link } from "react-router-dom";
import TagList from "../../ProfilePages/components/TagList";

function ResultItem({ user }) {
  // console.log(user._id);
  return (
    <Link to={`/tutor/${user._id}`}>
      <section className="search-result-item">
        <div className="image-link">
          <img className="image" src={user.profilePicUrl} />
        </div>
        <div className="search-result-item-body">
          <div className="row">
            <div className="col-sm-9">
              <h5 className="search-result-item-heading">{user.username}</h5>
              <div className="style-tags">
                <TagList tags={user.tags} tagsPerLine={5} />
              </div>
              <p className="description">{user.description}</p>
            </div>
            <div className="col-sm-3 text-align-center">
              <p className="value3 mt-sm">{user.hourlyRate}</p>
              <p className="fs-mini text-muted">
                <span>/</span>PER HOUR
              </p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default ResultItem;
