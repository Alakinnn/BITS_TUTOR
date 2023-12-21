import React, { useState } from "react";
import HandleSearch from "./functions/HandleSearch";
import "/src/css/SearchResults/SearchBar.css";

function SearchBar({ inputStr, setInputStr, setTutors }) {
  const handleChange = (event) => {
    setInputStr(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              onChange={handleChange}
              value={inputStr}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-default"
                type="button"
                onClick={() =>
                  HandleSearch({
                    inputStr,
                    minPrice: 0,
                    maxPrice: 100,
                    filterCriteria: "",
                    setTutors,
                  })
                }
              >
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
