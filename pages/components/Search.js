import React from 'react';

function Search({ handleSearchDataChange }) {
  return (
    <div>
      <p>This is search component</p>
      {/* <form onSubmit={(e) => e.preventDefault()} className="search"> */}
      {/* <label htmlFor="textSearch">Search</label> */}
      <input
        onChange={handleSearchDataChange}
        className="text-search"
        type="text"
        placeholder="Search"
        name="textSearch"
      />
      {/* </form> */}
    </div>
  );
}

export default Search;
