import * as t from '../types';

export const setApiData = (apiData) => ({
  type: t.SET_SPACEXMISSIONS,
  payload: apiData,
});
