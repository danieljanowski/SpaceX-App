export default function searchResults(pastMissionsData, searchData) {
  let selectorSearchResult = {};
  switch (searchData.launchSuccess) {
    case 'yes':
      selectorSearchResult = pastMissionsData.filter(
        (mission) => mission.launch_success === true,
      );
      break;
    case 'no':
      selectorSearchResult = pastMissionsData.filter(
        (mission) => mission.launch_success === false,
      );
      break;
    default:
      selectorSearchResult = pastMissionsData;
  }

  switch (searchData.landingSuccess) {
    case 'yes':
      selectorSearchResult = selectorSearchResult.filter(
        (mission) => mission.rocket.first_stage.cores[0].land_success === true,
      );
      break;
    case 'no':
      selectorSearchResult = selectorSearchResult.filter(
        (mission) => mission.rocket.first_stage.cores[0].land_success === false,
      );
      break;
    default:
      break;
  }

  return selectorSearchResult.filter(
    (mission) =>
      `${mission.mission_name} ${mission.details}`
        .toLowerCase()
        .search(searchData.textSearch.toLowerCase()) >= 0,
  );
}
