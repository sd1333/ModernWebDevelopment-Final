export const verse = 'verse';

export const login = 'login';
export const logout = 'logout';
export const loginInput = 'loginInput';
export const setToken = 'setTokenFromCookie';

export const shopItem = 'getShopItemFromServer';
export const itemDetail = 'itemDetail';
export const addtocart = 'addtocart';

export const userComment = 'userComment';
export const submitBookEvent = 'submitBookEvent';

//FT
export const addBookInputEvent = 'addBookInputEvent';
export const addBook = 'addBook';
export const bookAdded = 'bookAdded';

//SD
export const FNAMECHANGE = 'fnamechange';
export const LNAMECHANGE = 'lnamechange';
export const EMAILCHANGE = 'emailchange';
export const PASSCHANGE = 'pass1change';
export const PASS2CHANGE = 'pass2change';
export const SUBRESET = 'subreset';

export const LOGINEMAILCHANGE = 'loginemailchange';
export const LOGINPASSCHANGE = 'loginpasswordchange';
export const LOGINSUBRESET = 'loginsubreset';

export const TOKENCHANGE = 'tokenchange';

// creating functions that return our actions -SD
export const fnamechange = (fname) => {
  return {
    type: FNAMECHANGE,
    fname: fname,
  };
};

export const lnamechange = (lname) => {
  return {
    type: LNAMECHANGE,
    lname: lname,
  };
};

export const emailchange = (email) => {
  return {
    type: EMAILCHANGE,
    email: email,
  };
};

export const passchange = (pass) => {
  return {
    type: PASSCHANGE,
    pass: pass,
  };
};

export const pass2change = (pass2) => {
  return {
    type: PASS2CHANGE,
    pass2: pass2,
  };
};

export const submitreset = (event) => {
  return {
    type: SUBRESET,
    event: event,
  };
};

export const loginemailchange = (email) => {
  return {
    type: LOGINEMAILCHANGE,
    email: email,
  };
};

export const loginpasschange = (pass) => {
  return {
    type: LOGINPASSCHANGE,
    pass: pass,
  };
};

export const loginsubmitreset = (event) => {
  return {
    type: LOGINSUBRESET,
    event: event,
  };
};

export const tokenchange = (tok) => {
  return {
    type: TOKENCHANGE,
    token: tok,
  };
};

export const asyncSubmit = () => {};
