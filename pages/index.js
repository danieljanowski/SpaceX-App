import React from 'react';
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
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to SpaceX App</h1>
        <Search />
        <div className={styles.grid}>
          {pastMissionsData.map((mission) => (
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
