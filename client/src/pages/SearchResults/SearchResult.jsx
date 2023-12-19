import React from "react";
import ResultItem from "./components/ResultItem.jsx";
import "/src/css/SearchResults/SearchResults.css";
import Pagination from "./components/Pagination.jsx";
import ResultFilter from "./components/ResultFilter.jsx";
import SearchBar from "./components/SearchBar.jsx";

function SearchResult({ users }) {
  console.log(users);
  return (
    <div class="container">
      <SearchBar />
      <div class="row ng-scope">
        <ResultFilter />
        <div class="col-md-9 col-md-pull-3">
          {users.map((user) => (
            <ResultItem user={user} />
          ))}
          <Pagination />
        </div>
      </div>
    </div>
  );
}
export default SearchResult;
