import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { setApiData } from '../redux/actions/apiActions';
import styles from '../styles/MissionDetails.module.scss';
import MissionSummaryCard from './components/MissionSummaryCard';

function MissionDetails(props) {
  const router = useRouter();
  const missionId = router.query.id;
  const { apiData } = props;

  useEffect(() => {
    props.apiData || router.push('/');
  }),
    [];

  return apiData ? (
    <>
      <Head>
        <title>SpaceX - {apiData[missionId - 1].mission_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/* <h1 className={styles.heading}> */}
        {/*  {apiData[missionId - 1].mission_name} */}
        {/* </h1> */}
        <div className={styles.missionSummaryCardContainer}>
          <MissionSummaryCard missionId={missionId} apiData={apiData} />
        </div>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}

const mapStateToProps = (state) => ({ apiData: state.apiReducer.apiData });

const mapDispatchToProps = { setApiData };

export default connect(mapStateToProps, mapDispatchToProps)(MissionDetails);
