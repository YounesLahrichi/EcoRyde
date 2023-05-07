import React, { useState } from "react";
import CourseCardList from "./CourseCardList";

function SearchBar({ placeholder, data }) {

  const [filteredData, setFilteredData] = useState(data);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      //return value.title.toLowerCase().includes(searchWord.toLowerCase());
      return ((value.title.toLowerCase().includes(searchWord.toLowerCase()))||value.author.toLowerCase().includes(searchWord.toLowerCase())) 
    });
      setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />

        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <p>Search</p>
          ) : (
            <p>Close</p>
          )}
        </div> */}

      </div>

      {filteredData.length != 0 && (

        <div className="search-card-container">
          {filteredData.slice(0, 50).map((value, key) => {
            return (
                <CourseCardList title={value.title} author={value.author} key={key} />
            );
          })}
        </div>
      )}
      
    </div>
  );
}

export default SearchBar;