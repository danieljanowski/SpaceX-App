import React from 'react';

function Search({ handleSearchDataChange }) {
  return (
    <div className="">
      {/* <form onSubmit={(e) => e.preventDefault()} className="search"> */}
      {/* <label htmlFor="textSearch">Search</label> */}
      <input
        onChange={handleSearchDataChange}
        className="text-search"
        type="text"
        placeholder="Search"
        name="textSearch"
      />
      <select
        onChange={handleSearchDataChange}
        className="launch-success-dropdown"
        placeholder="Launch success"
        name="launchSuccess"
      >
        <option value="no choice">Launch success choice</option>
        <option value="yes">Launch successful</option>
        <option value="no">Launch unsuccessful</option>
      </select>

      <select
        onChange={handleSearchDataChange}
        className="landing-success-dropdown"
        placeholder="Landing success"
        name="landingSuccess"
      >
        <option value="no choice">Landing success choice</option>
        <option value="yes">Landing successful</option>
        <option value="no">Landing unsuccessful</option>
      </select>
      {/* </form> */}
    </div>
  );
}

export default Search;
