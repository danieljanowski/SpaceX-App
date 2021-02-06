import * as t from '../types';

const searchReducer = (
  state = {
    searchCriteria: {
      textSearch: '',
      launchSuccess: 'no choice',
      landingSuccess: 'no choice',
    },
  },
  action,
) => {
  switch (action.type) {
    case t.SET_SEARCHCRITERIA:
      return { ...state, searchCriteria: action.payload };
    default:
      return { ...state };
  }
};

export default searchReducer;
