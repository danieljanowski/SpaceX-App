import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from '../../styles/Card.module.scss';

function Card({ mission }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h3 className={styles.titleText}>
          {' '}
          {mission.flight_number}. {mission.mission_name}{' '}
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

      {/* getting error when using "Image" image:1 GET  500 (Internal Server Error) CERT_HAS_EXPIRED */}
      {/* <div className={styles.logo}>
        {mission.links.mission_patch_small && (
          <Image
            src={mission.links.mission_patch_small}
            alt="misson logo"
            width={500}
            height={500}
            // layout="fill"
          />
        )}
      </div> */}

      <div className={styles.missionDetails}>
        <p>
          Launch:
          {mission.launch_success ? ' successful' : ' failure'}
        </p>

        {mission.launch_success &&
          (mission.rocket.first_stage.cores[0].landing_intent ? (
            <p>Landing attempt: yes</p>
          ) : (
            <p>Landing attempt: no</p>
          ))}

        {mission.launch_success &&
          mission.rocket.first_stage.cores[0].landing_intent &&
          (mission.rocket.first_stage.cores[0].land_success ? (
            <p>Landing success: yes</p>
          ) : (
            <p>Landing success: no</p>
          ))}

        {mission.links.article_link && (
          // <Link href={mission.links.article_link}>
          //   <a className="articleLink">Article link</a>
          // </Link>

          <Link href={`/${mission.flight_number}`}>
            <button className={styles.moreButton} type="button">
              MORE DETAILS
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
