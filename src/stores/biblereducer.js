import * as actionType from './actionType';

const initialState = {
  bibleverse: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.verse:
      return { ...state, bibleverse: action.verse };
     
    default:
      return state;
  }
};

export default reducer;
