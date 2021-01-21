import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { setApiData } from '../redux/actions/apiActions';

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
      <p>Mission ID {missionId} passed into component, yay!</p>
      {apiData && apiData[missionId - 1].mission_name}
    </>
  ) : (
    <p>Loading...</p>
  );
}

const mapStateToProps = (state) => ({ apiData: state.apiReducer.apiData });

const mapDispatchToProps = { setApiData };

export default connect(mapStateToProps, mapDispatchToProps)(MissionDetails);
