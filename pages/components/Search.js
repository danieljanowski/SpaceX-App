import React from 'react';
import styles from '../../styles/Search.module.scss';

function Search({ handleSearchDataChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        onChange={handleSearchDataChange}
        className={styles.textSearch}
        type="text"
        placeholder="Search"
        name="textSearch"
      />
      <select
        onChange={handleSearchDataChange}
        className={styles.launchSuccessDropdown}
        placeholder="Launch success"
        name="launchSuccess"
      >
        <option value="no choice">Launch success choice</option>
        <option value="yes">Launch successful</option>
        <option value="no">Launch unsuccessful</option>
      </select>

      <select
        onChange={handleSearchDataChange}
        className={styles.landingSuccessDropdown}
        placeholder="Landing success"
        name="landingSuccess"
      >
        <option value="no choice">Landing success choice</option>
        <option value="yes">Landing successful</option>
        <option value="no">Landing unsuccessful</option>
      </select>
    </div>
  );
}

export default Search;
