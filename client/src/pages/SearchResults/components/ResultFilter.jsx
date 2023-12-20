import React, { useEffect } from "react";
import "/src/css/SearchResults/SearchResults.css";
import {filterFunction} from "./FilterFunction.js";

function ResultFilter({ user }) {
  useEffect(() => {
    filterFunction();
  }, []);
  return (
    <div className="filter col-md-3 col-md-push-9">
      <h4>
        Results <span className="fw-semi-bold">Filtering</span>
      </h4>
      {/* <p className="text-muted fs-mini">
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
      </ul> */}
       <div class="dropdown">
      <div class="select">
        <div class="selected">Name</div>
        <div class="caret"></div>
      </div>
      <ul class="menu">
        <li class="active">default</li>
        <li>xyz</li>
        <li>zxc</li>
      </ul>
    </div>
    <div class="wrapper">
      <header>
        <p>Use slider or enter min and max price</p>
      </header>
      <div class="price-input">
        <div class="field">
          <span>Min</span>
          <input type="number" class="input-min" value="2500" />
        </div>
        <div class="separator">-</div>
        <div class="field">
          <span>Max</span>
          <input type="number" class="input-max" value="7500" />
        </div>
      </div>
      <div class="slider">
        <div class="progress"></div>
      </div>
      <div class="range-input">
        <input
          type="range"
          class="range-min"
          min="0"
          max="10000"
          value="2500"
          step="100"
        />
        <input
          type="range"
          class="range-max"
          min="0"
          max="10000"
          value="7500"
          step="100"
        />
      </div>
    </div>
    </div>
  );
}

export default ResultFilter;
