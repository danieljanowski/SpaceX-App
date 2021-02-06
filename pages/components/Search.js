import React from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/Search.module.scss';
import { setSearchCriteria } from '../../redux/actions/searchActions';

function Search(props) {
  const { searchCriteria, setSearchCriteria } = props;

  const handleSearchDataChange = (e) => {
    setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
  };

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
        <option value="no choice">Launch success no choice</option>
        <option value="yes">Launch successful</option>
        <option value="no">Launch unsuccessful</option>
      </select>

      <select
        onChange={handleSearchDataChange}
        className={styles.landingSuccessDropdown}
        placeholder="Landing success"
        name="landingSuccess"
      >
        <option value="no choice">Landing success no choice</option>
        <option value="yes">Landing successful</option>
        <option value="no">Landing unsuccessful</option>
      </select>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchCriteria: state.searchReducer.searchCriteria,
});

const mapDispatchToProps = { setSearchCriteria };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
