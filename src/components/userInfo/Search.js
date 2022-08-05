import React, { useEffect, useState } from "react";
import style from "./search.css";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.onSearchData(searchText);
  }, [searchText]);

  return (
    <div>
      <form action="">
        <input
          type="search"
          name="search"
          className="search"
          id="search"
          value={searchText}
          onChange={handleChange}
          placeholder="Search Here..."
        />
      </form>
    </div>
  );
};

export default Search;
