import React, { useState } from "react";
import "/src/css/SearchResults/SearchBar.css";

function SearchBar() {
  const [inputStr, setInputStr] = useState("");
  const handleChange = (event) => {
    setInputStr(event.target.value);
  };
  const handleSearch = async () => {
    // const response = await axios.post(
    //   ``,
    //   {

    //   }
    // );
    // setInputStr("");
    console.log(inputStr);
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
                onClick={handleSearch}
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
