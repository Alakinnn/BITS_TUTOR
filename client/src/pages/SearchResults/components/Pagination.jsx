import React from "react";

function Pagination() {
  return (
    <div>
      <div className="text-align-center">
        <ul className="pagination pagination-sm">
          <li className="disabled">
            <a href="#/">Prev</a>
          </li>
          <li className="active">
            <a href="#/">1</a>
          </li>
          <li>
            <a href="#/">2</a>
          </li>
          <li>
            <a href="#/">3</a>
          </li>
          <li>
            <a href="#/">4</a>
          </li>
          <li>
            <a href="#/">5</a>
          </li>
          <li>
            <a href="#/">Next</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
