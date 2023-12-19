import React from "react";

function Pagination() {
  return (
    <div>
      <div class="text-align-center">
        <ul class="pagination pagination-sm">
          <li class="disabled">
            <a href="#/">Prev</a>
          </li>
          <li class="active">
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
