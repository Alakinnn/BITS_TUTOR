import React from "react";
import ResultItem from "./components/ResultItem.jsx";
import "/src/css/SearchResults/SearchResults.css";
// import Pagination from "./components/Pagination.jsx";
import ResultFilter from "./components/ResultFilter.jsx";
import SearchBar from "./components/SearchBar.jsx";
import HandleSearch from "./components/functions/HandleSearch.jsx";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function SearchResult() {
  const [inputStr, setInputStr] = React.useState("");
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [filterCriteria, setFilterCriteria] = React.useState("");
  const [tutors, setTutors] = React.useState([]);

  React.useEffect(() => {
    HandleSearch({
      inputStr: "",
      minPrice: 0,
      maxPrice: 100,
      filterCriteria: "",
      setTutors,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="search-container">
        <SearchBar
          inputStr={inputStr}
          setInputStr={setInputStr}
          setTutors={setTutors}
        />
        <div className="row ng-scope">
          <ResultFilter
            inputStr={inputStr}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            filterCriteria={filterCriteria}
            setFilterCriteria={setFilterCriteria}
            setTutors={setTutors}
          />
          <div className="col-md-9 col-md-pull-3">
            {tutors.map((tutor) => (
              <ResultItem user={tutor} />
            ))}
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchResult;
