import React from "react";
import "/src/css/SearchResults/SearchResults.css";

function ResultFilter({ user }) {
  return (
    <div className="col-md-3 col-md-push-9">
      <h4>
        Results <span className="fw-semi-bold">Filtering</span>
      </h4>
      <p className="text-muted fs-mini">
        Listed content is categorized by the following groups:
      </p>
      <ul className="nav nav-pills nav-stacked search-result-categories mt">
        <li>
          <a href="#/">
            Friends <span className="badge">34</span>
          </a>
        </li>
        <li>
          <a href="#/">
            Pages <span className="badge">9</span>
          </a>
        </li>
        <li>
          <a href="#/">Images</a>
        </li>
        <li>
          <a href="#/">Groups</a>
        </li>
        <li>
          <a href="#/">
            Globals <span className="badge">18</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ResultFilter;
