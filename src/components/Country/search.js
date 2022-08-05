import React, { useEffect, useState } from "react";

// ============================== components import ==============================
import style from "./search.css";
const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div>
      <form action="">
        <input
          type="search"
          name="search"
          id="search"
          className="search"
          value={searchText}
          onChange={handleChange}
          placeholder="Country Search..."
        />
      </form>
    </div>
  );
};

export default Search;
