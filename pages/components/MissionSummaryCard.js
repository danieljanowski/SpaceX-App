import React from 'react';
import styles from '../../styles/MissionSummaryCard.module.scss';

function MissionSummaryCard({ missionId, apiData }) {
  return (
    <div className={styles.missionSummaryCard}>
      <div className={styles.headline}>
        <h1 className={styles.title}>{apiData[missionId - 1].mission_name}</h1>
      </div>
      <div className={styles.logo}>
        <img
          className={styles.logo}
          src={apiData[missionId - 1].links.mission_patch_small}
          alt="mission logo"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{apiData[missionId - 1].details}</p>
      </div>
      <div className={styles.detailsContainer}>
        <p>details container</p>
      </div>
    </div>
  );
}

export default MissionSummaryCard;
