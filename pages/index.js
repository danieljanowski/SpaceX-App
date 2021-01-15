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

  const searchResults = () =>
    pastMissionsData.filter(
      (mission) =>
        `${mission.mission_name} ${mission.details}`
          .toLowerCase()
          .search(searchData.textSearch.toLowerCase()) >= 0,
    );

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
