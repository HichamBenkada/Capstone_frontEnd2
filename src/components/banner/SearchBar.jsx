import React, { useRef } from "react";
import { TfiSearch } from "react-icons/tfi";

const SearchBar = ({ setSearch }) => {
  const searchRef = useRef(null);
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(searchRef.current.value);
      searchRef.current.value = "";
    }
  };

  return (
    <div>
      <input
        type="search"
        name="search"
        placeholder="Search a book"
        className="outline-none py-2 px-2 rounded-6-sm"
        ref={searchRef}
        onKeyDown={handleEnter}
      />
      <button
        className="bg-blue-500 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300"
        onClick={(e) => {
          setSearch(searchRef.current.value);
          searchRef.current.value = "";
        }}
      >
        <TfiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
