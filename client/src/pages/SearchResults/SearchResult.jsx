import React from "react";
import ResultItem from "./components/ResultItem.jsx";
import "/src/css/SearchResults/SearchResults.css";
import Pagination from "./components/Pagination.jsx";
import ResultFilter from "./components/ResultFilter.jsx";
import SearchBar from "./components/SearchBar.jsx";

function SearchResult({ users }) {
  const [inputStr, setInputStr] = React.useState("");
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [filterCriteria, setFilterCriteria] = React.useState("");

  return (
    <div className="container">
      <SearchBar inputStr={inputStr} setInputStr={setInputStr} />
      <div className="row ng-scope">
        <ResultFilter
          inputStr={inputStr}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          filterCriteria={filterCriteria}
          setFilterCriteria={setFilterCriteria}
        />
        <div className="col-md-9 col-md-pull-3">
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
