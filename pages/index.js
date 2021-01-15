import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Card from './components/Card';
import Search from './components/Search';

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

export default function Home({ pastMissionsData }) {
  const [searchData, setSearchData] = useState({ textSearch: '' });

  const handleSearchDataChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const searchResults = () => {
    let selectorSearchResult = {};
    switch (searchData.launchSuccess) {
      case 'yes':
        selectorSearchResult = pastMissionsData.filter(
          (mission) => mission.launch_success === true,
        );
        break;
      case 'no':
        selectorSearchResult = pastMissionsData.filter(
          (mission) => mission.launch_success === false,
        );
        break;
      default:
        selectorSearchResult = pastMissionsData;
    }

    switch (searchData.landingSuccess) {
      case 'yes':
        selectorSearchResult = selectorSearchResult.filter(
          (mission) =>
            mission.rocket.first_stage.cores[0].land_success === true,
        );
        break;
      case 'no':
        selectorSearchResult = selectorSearchResult.filter(
          (mission) =>
            mission.rocket.first_stage.cores[0].land_success === false,
        );
        break;
      default:
        break;
    }

    return selectorSearchResult.filter(
      (mission) =>
        `${mission.mission_name} ${mission.details}`
          .toLowerCase()
          .search(searchData.textSearch.toLowerCase()) >= 0,
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to SpaceX App</h1>
        <Search handleSearchDataChange={handleSearchDataChange} />
        <div className={styles.grid}>
          {searchResults().map((mission) => (
            <Card mission={mission} key={mission.flight_number} />
          ))}
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
