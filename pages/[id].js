import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { setApiData } from '../redux/actions/apiActions';

function MissionDetails(props) {
  const router = useRouter();
  const missionId = router.query.id;
  const { apiData } = props;

  // useEffect(() => {
  //   if (props.apiData.length == 0) router.push('/');
  // }),
  //   [];

  return (
    <>
      <p>Mission ID {missionId} passed into component, yay!</p>
      {apiData[missionId - 1].mission_name}
    </>
  );
}

const mapStateToProps = (state) => ({ apiData: state.apiReducer.apiData });

const mapDispatchToProps = { setApiData };

export default connect(mapStateToProps, mapDispatchToProps)(MissionDetails);
