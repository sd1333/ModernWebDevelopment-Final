import * as actionType from './actionType';

import axios from 'axios';

//action for storing bible verse
export const bibleVerseAction = (verse) => {
  return {
    type: actionType.verse,
    verse: verse,
  };
};

//action creator for fetching bible verse
export const asyncVerseFetch = () => {
  let versenumber = Math.ceil(Math.random() * 18 + 1);
  return (dispatch) => {
    axios
      .get('https://eotcchurch.herokuapp.com/api/v1/church/bibleverses', {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(bibleVerseAction(res.data.data[versenumber]));
      })
      .catch((err) => {
        throw new Error();
      });
  };
};

//action for user authentication
export const userLoginAction = (user, loginMessage, role) => {
  return {
    type: actionType.login,
    user: user,
    loginMessage: loginMessage,
    role: role,
  };
};

//action creator for fetching bible verse
export const asyncLoginAuthentication = () => {
  return (dispatch, getState) => {
    const email = getState().auth.loginForm.email.elemConfig.value;
    const password = getState().auth.loginForm.password.elemConfig.value;

    axios
      .post(
        'https://eotcchurch.herokuapp.com/api/v1/church/login',

        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        dispatch(userLoginAction(res.data.token, null, res.data.role));
      })
      .catch((err) => {
        dispatch(
          userLoginAction(null, 'Invalid User Name and Password', 'user')
        );
      });
  };
};

//action for storing shopitem
export const shopItemAction = (items) => {
  return {
    type: actionType.shopItem,
    shopitems: items,
  };
};

//action creator for fetching shop items
export const asyncShopItemFetch = () => {
  return (dispatch) => {
    axios
      .get('https://eotcchurch.herokuapp.com/api/v1/church/shopitems')
      .then((res) => {
        dispatch(shopItemAction(res.data.data));
      })
      .catch((err) => {
        throw new Error();
      });
  };
};

//action for getting detail for shop items
export const itemDetailAction = (itemdetail) => {
  return {
    type: actionType.itemDetail,
    itemdetail: itemdetail,
  };
};

//action creator for fetching shop item detail
export const asyncItemDetailFetch = (itemid) => {
  return (dispatch) => {
    axios
      .get(
        `https://eotcchurch.herokuapp.com/api/v1/church/shopitem/${itemid}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(itemDetailAction(res.data.data));
      })
      .catch((err) => {
        throw new Error();
      });
  };
};

//action for  posting  shop item comments
export const storeTheComment = (comment) => {
  return {
    type: actionType.userComment,
    comment: comment,
  };
};

//action creator for posting  shop item comments
export const asyncSubmitComment = (comment, itemid) => {
  return (dispatch, getState) => {
    const token = getState().auth.user;
    axios
      .post(
        `https://eotcchurch.herokuapp.com/api/v1/church/shopitemcomment/`,
        {
          itemid: itemid,
          comment: comment,
        },
        {
          withCredentials: true,
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(storeTheComment(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        throw new Error();
      });
  };
};

//action for  fetching  user cart
export const getUserCart = (cartlist) => {
  return {
    type: actionType.addtocart,
    cartlist: cartlist,
  };
};

//action creator for fetching  user cart
export function asyncgetUserCart() {
  return (dispatch, getState) => {
    axios
      .get(
        'https://eotcchurch.herokuapp.com/api/v1/church/cart',

        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res, 'getuser cart');
        dispatch(getUserCart(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        throw new Error();
      });
  };
}

//action for  addToCart shop item
export const addToCart = (cartlist) => {
  return {
    type: actionType.addtocart,
    cartlist: cartlist,
  };
};

//action creator for addToCart
export function asyncItemAddToCart(itemid) {
  return (dispatch, getState) => {
    const token = getState().auth.user;
    axios
      .post(
        `https://eotcchurch.herokuapp.com/api/v1/church/addtocart/`,
        {
          productid: itemid,
        },
        {
          withCredentials: true,
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, 'hhhh');
        dispatch(addToCart(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        throw new Error();
      });
  };
}

//action for  delete item from cart
export const deleteItemFromCart = (cartlist) => {
  return {
    type: actionType.addtocart,
    cartlist: cartlist,
  };
};

//action creator for addToCart
export function asyncDeleteItemFromCart(itemid) {
  return (dispatch, getState) => {
    const token = getState().auth.user;
    axios
      .delete(
        `https://eotcchurch.herokuapp.com/api/v1/church/deletecartitem/` +
          itemid,

        {
          withCredentials: true,
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(deleteItemFromCart(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        throw new Error();
      });
  };
}

//FT
//action for  adding book to the store
export const addBook = (count) => {
  return {
    type: actionType.bookAdded,
    productadd: count,
  };
};

export const asyncAddBook = () => {
  return (dispatch, getState) => {
    const title = getState().admin.addbookform.title.value;
    const author = getState().admin.addbookform.author.value;
    const price = getState().admin.addbookform.price.value;
    const imageurl = getState().admin.addbookform.imageurl.value;
    const description = getState().admin.addbookform.description.value;

    const token = getState().auth.user; // get the authorization token

    axios
      .post(
        'https://eotcchurch.herokuapp.com/api/v1/church/admin/addbook',
        {
          title: title,
          author: author,
          price: price,
          imageurl: imageurl,
          description: description,
        },
        {
          withCredentials: true,
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(addBook(1));
      });
  };
};

export const fetchAsync = () => {
  return (dispatch) => {
    axios
      .get('https://eotcchurch.herokuapp.com/api/v1/church/admin/getbooks', {
        withCredentials: true,
      })
      .then((res) => {
        dispatch({ type: 'fetch', data: res.data.data });
      });
  };
};

export const fechsinglebook = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://eotcchurch.herokuapp.com/api/v1/church/admin/getsingle/${id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch({ type: 'singlebook', sm: res.data.data });
      });
  };
};

export const deltesinglebook = (id) => {
  console.log(id);
  return (dispatch) => {
    axios
      .delete(
        `https://eotcchurch.herokuapp.com/api/v1/church/admin/deletbook/${id}`,
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        dispatch({ type: 'deleteSingleBook', id: id });
      });
  };
};
