import * as actionType from './actionType';

const initialState = {
  shopitems: [],
  itemdetail: {},
  usercart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.shopItem:
      return { ...state, shopitems: action.shopitems };
    case actionType.itemDetail:
      return { ...state, itemdetail: action.itemdetail };
    case actionType.userComment:
      const copyitemdetail = {
        ...state.itemdetail,
        comments: [...action.comment],
      };
      return { ...state, itemdetail: copyitemdetail };
    case actionType.addtocart:
      console.log(action);
      const copyusercart = [...action.cartlist];
      console.log(action.cartlist);
      console.log(copyusercart);
      return { ...state, usercart: copyusercart };
    default:
      return state;
  }
};

export default reducer;
