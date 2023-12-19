import React from "react";

function SearchBar() {
  return (
    <div>
      <div class="row">
        <div class="col-md-12">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search for..."
            />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">
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
