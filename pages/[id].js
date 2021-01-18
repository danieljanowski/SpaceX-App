import React from 'react';
import { useRouter } from 'next/router';

export default function MissionDetails() {
  const router = useRouter();
  const missionId = router.query.id;

  return (
    <>
      <p>Mission ID {missionId} passed into component, yay!</p>
    </>
  );
}
