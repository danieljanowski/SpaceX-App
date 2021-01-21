import * as t from '../types';

const apiReducer = (state, action) => {
  switch (action.type) {
    case t.SET_SPACEXMISSIONS:
      return { ...state, apiData: action.payload };
    default:
      return { ...state };
  }
};

export default apiReducer;
