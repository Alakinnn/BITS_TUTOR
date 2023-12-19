import React from "react";
import "/src/css/SearchResults/SearchResults.css";

function ResultFilter({ user }) {
  return (
    <div class="col-md-3 col-md-push-9">
      <h4>
        Results <span class="fw-semi-bold">Filtering</span>
      </h4>
      <p class="text-muted fs-mini">
        Listed content is categorized by the following groups:
      </p>
      <ul class="nav nav-pills nav-stacked search-result-categories mt">
        <li>
          <a href="#/">
            Friends <span class="badge">34</span>
          </a>
        </li>
        <li>
          <a href="#/">
            Pages <span class="badge">9</span>
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
            Globals <span class="badge">18</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ResultFilter;
