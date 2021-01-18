import React from 'react';

export default function MissionDetails(props) {
  return (
    <div>
      <p>mission details</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://api.spacexdata.com/v3/launches/past');
  const pastMissionsData = await res.json();
  const paths = pastMissionsData.map((mission) => ({
    params: { id: mission.flight_number },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {}
