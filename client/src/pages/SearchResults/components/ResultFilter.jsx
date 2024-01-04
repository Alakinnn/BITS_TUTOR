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
      <div className="dropdown-filter">
        <div className="select" onClick={() => Dropdown({ setFilterCriteria })}>
          <div className="selected">Default</div>
          <div className="caret"></div>
        </div>
        <ul className="menu">
          <li
            className="default-active"
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
      <div className="wrapper">
        <header>
          <p>Use slider or enter min and max price</p>
        </header>
        <div className="price-input">
          <div className="field">
            <span>Min</span>
            <input type="number" className="input-min" />
          </div>
          <div className="separator">-</div>
          <div className="field">
            <span>Max</span>
            <input type="number" className="input-max" />
          </div>
        </div>
        <div className="slider">
          <div className="progress"></div>
        </div>
        <div className="range-input">
          <input type="range" className="range-min" min="0" max="100" step="1" />
          <input type="range" className="range-max" min="0" max="100" step="1" />
        </div>
        <button
          className="confirm-range"
          onClick={() => {
            // Removed console.log statement
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