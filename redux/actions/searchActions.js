import * as t from '../types';

export const setSearchCriteria = (searchCriteria) => ({
  type: t.SET_SEARCHCRITERIA,
  payload: searchCriteria,
});
