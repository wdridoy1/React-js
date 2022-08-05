import React, { useEffect, useState } from "react";
import style from "./search.css";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.searchProduct(searchText);
  }, [searchText]);

  return (
    <div>
      <form action="" className="form">
        <input
          type="search"
          name="search"
          className="search"
          id="search"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search Product"
        />
      </form>
    </div>
  );
};

export default Search;
