import React from "react";

function SearchBar() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
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
