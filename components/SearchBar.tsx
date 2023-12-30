"use client";

import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
