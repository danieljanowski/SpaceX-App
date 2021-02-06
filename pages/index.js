import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import styles from '../styles/Home.module.scss';
import Card from './components/Card';
import Search from './components/Search';
import searchResults from '../utils/searchResults';
import { setApiData } from '../redux/actions/apiActions';
import { setSearchCriteria } from '../redux/actions/searchActions';

export const getStaticProps = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches/past');
  const pastMissionsData = await res.json();

  if (!pastMissionsData) {
    return {
      props: {
        noData: true,
      },
    };
  }

  return {
    props: {
      pastMissionsData,
    },
  };
};

function Home(props) {
  const { setApiData, apiData } = props;

  useEffect(() => {
    setApiData(props.pastMissionsData);
  }, []);

  return !props.pastMissionsData ? (
    <p>No data</p>
  ) : (
    <div className={styles.container}>
      <Head>
        <title>SpaceX App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>SpaceX App</h1> <Search />
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {props.pastMissionsData.map(
            // {searchResults(props.pastMissionsData, props.searchCriteria).map(
            (mission) => (
              <Card mission={mission} key={mission.flight_number} />
            ),
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  apiData: state.apiReducer.apiData,
  searchCriteria: state.searchReducer.searchCriteria,
});

const mapDispatchToProps = { setApiData, setSearchCriteria };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
