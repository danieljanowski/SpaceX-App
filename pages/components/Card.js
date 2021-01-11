import React from 'react';
import Link from 'next/Link';
// import Image from 'next/Image';
import styles from '../../styles/Card.module.css';

function Card({ mission }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h3 className={styles.titleText}>
          {' '}
          # {mission.flight_number} {mission.mission_name}{' '}
        </h3>
      </div>

      {/* {mission.links.mission_patch_small && (
        <Link href={mission.links.mission_patch_small}>
          <a>Image link</a>
        </Link>
      )} */}

      <img
        className={styles.logo}
        src={mission.links.mission_patch_small}
        alt="mission logo"
      />

      {/* getting error when using "Image" image:1 GET  500 (Internal Server Error) */}
      {/* {mission.links.mission_patch_small && (
        <Image
          src={mission.links.mission_patch_small}
          alt="misson logo"
          layout="responsive"
        />
      )} */}

      <div className={styles.missionDetails}>
        {mission.links.article_link && (
          <Link href={mission.links.article_link}>
            <a>Article link</a>
          </Link>
        )}

        <h6>
          Launch:
          {mission.launch_success ? ' successful' : ' failure'}
        </h6>
      </div>
    </div>
  );
}

export default Card;
