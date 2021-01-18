import React from 'react';

export default function MissionDetail({ match }) {
  return (
    <div>
      <p>mission details {match.params.id}</p>
    </div>
  );
}
