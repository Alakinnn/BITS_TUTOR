import React, { useEffect } from "react";
import "/src/css/SearchResults/SearchResults.css";
import { SliderFunction } from "./functions/SliderFunction.jsx";
import Dropdown from "./functions/Dropdown.jsx";
import HandleSearch from "./functions/HandleSearch.jsx";

function ResultFilter({
  inputStr,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  filterCriteria,
  setFilterCriteria,
  setTutors,
}) {
  useEffect(() => {
    SliderFunction({
      minPrice,
      maxPrice,
      setMinPrice,
      setMaxPrice,
      filterCriteria,
    });
  }, []);
  return (
    <div className="filter col-md-3 col-md-push-9">
      <h4>
        <span className="fw-semi-bold">Price Filtering</span>
      </h4>
      <div class="dropdown">
        <div class="select" onClick={() => Dropdown({ setFilterCriteria })}>
          <div class="selected">Default</div>
          <div class="caret"></div>
        </div>
        <ul class="menu">
          <li
            class="active"
            onClick={() =>
              HandleSearch({
                inputStr,
                minPrice,
                maxPrice,
                filterCriteria,
                setTutors,
              })
            }
          >
            Default
          </li>
          <li
            onClick={() =>
              HandleSearch({
                inputStr,
                minPrice,
                maxPrice,
                filterCriteria,
                setTutors,
              })
            }
          >
            {" "}
            High to Low
          </li>
          <li
            onClick={() =>
              HandleSearch({
                inputStr,
                minPrice,
                maxPrice,
                filterCriteria,
                setTutors,
              })
            }
          >
            {" "}
            Low to High
          </li>
        </ul>
      </div>
      <div class="wrapper">
        <header>
          <p>Use slider or enter min and max price</p>
        </header>
        <div class="price-input">
          <div class="field">
            <span>Min</span>
            <input type="number" class="input-min" />
          </div>
          <div class="separator">-</div>
          <div class="field">
            <span>Max</span>
            <input type="number" class="input-max" />
          </div>
        </div>
        <div class="slider">
          <div class="progress"></div>
        </div>
        <div class="range-input">
          <input type="range" class="range-min" min="0" max="100" step="1" />
          <input type="range" class="range-max" min="0" max="100" step="1" />
        </div>
        <button
          className="confirm-range"
          onClick={() => {
            console.log(minPrice, maxPrice, filterCriteria);
            HandleSearch({
              inputStr,
              minPrice,
              maxPrice,
              filterCriteria,
              setTutors,
            });
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ResultFilter;
