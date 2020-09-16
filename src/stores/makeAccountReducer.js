import * as actionTypes from './actionType';

// this is our central location for state -SD
const initialState = {
  firstName: {
    value: '',
    valid: false,
  },
  lastName: {
    value: '',
    valid: false,
  },
  email: {
    value: '',
    valid: false,
  },
  password: {
    value: '',
    valid: false,
  },
  password2: {
    value: '',
    valid: false,
  },
};

// reducer. where the magic happens. -SD
const reducer = (state = initialState, action) => {
  // console.log('initial state: ', state)
  // console.log('action: ', action)

  if (action.type === actionTypes.FNAMECHANGE) {
    const currentState = { ...state };
    const currentElement = { ...currentState.firstName };
    // currentState.firstName.value = action.fname;
    currentElement.value = action.fname;

    if (currentElement.value === '') {
      currentElement.valid = false;
    }
    if (currentElement.value !== '') {
      currentElement.valid = true;
    }

    currentState.firstName.value = currentElement.value;
    currentState.firstName.valid = currentElement.valid;
    // console.log("current state: ", currentState)
    return currentState;
  }

  if (action.type === actionTypes.LNAMECHANGE) {
    // actionTypes.LNAMECHANGE returns {type: LNAMECHANGE, lname: lname} accessed with action.type and action.lname-SD

    const currentState = { ...state }; // spreading the state, we must do things immutably.-SD
    const currentElement = { ...state.lastName }; // we also have to spread properties that are objects. Not doing so will result in performing a shallow copy. -SD
    currentElement.value = action.lname;

    if (currentElement.value === '') {
      currentElement.valid = false;
    }
    if (currentElement.value !== '') {
      currentElement.valid = true;
    }

    currentState.lastName.value = currentElement.value;
    currentState.lastName.valid = currentElement.valid;
    return currentState;
  }

  if (action.type === actionTypes.EMAILCHANGE) {
    const currentState = { ...state };
    const currentElement = { ...state.email };
    currentElement.value = action.email;

    if (currentElement.value === '') {
      currentElement.valid = false;
    }
    if (currentElement.value !== '') {
      currentElement.valid = true;
    }

    currentState.email.value = currentElement.value;
    currentState.email.valid = currentElement.valid;
    // console.log("current state: ", currentState)
    return currentState;
  }

  if (action.type === actionTypes.PASSCHANGE) {
    const currentState = { ...state };
    const currentElement = { ...state.password };
    currentElement.value = action.pass;

    if (currentElement.value.length < 6) {
      currentElement.valid = false;
    }
    if (currentElement.value.length >= 6) {
      currentElement.valid = true;
    }

    currentState.password.value = currentElement.value;
    currentState.password.valid = currentElement.valid;
    // console.log("current state: ", currentState)
    return currentState;
  }

  if (action.type === actionTypes.PASS2CHANGE) {
    const currentState = { ...state };
    const currentElement = { ...state.password2 };
    currentElement.value = action.pass2;

    if (currentState.password.value !== currentElement.value) {
      currentElement.valid = false;
    }
    if (currentState.password.value === currentElement.value) {
      currentElement.valid = true;
    }

    currentState.password2.value = currentElement.value;
    currentState.password2.valid = currentElement.valid;
    // console.log("current state: ", currentState)
    return currentState;
  }

  if (action.type === actionTypes.SUBRESET) {
    action.event.preventDefault();
    console.log(
      'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
    );
    let currentstate = {
      firstName: {
        value: '',
        valid: false,
      },
      lastName: {
        value: '',
        valid: false,
      },
      email: {
        value: '',
        valid: false,
      },
      password: {
        value: '',
        valid: false,
      },
      password2: {
        value: '',
        valid: false,
      },
    };
    return currentstate;
  }

  return state;
};

export default reducer;

// onfirstNameChange = (event) => {
//     const currentState = { ...this.state }
//     const currentElement = { ...this.state.firstName }
//     currentElement.value = event.target.value

//     if (currentElement.value === '') { currentElement.valid = false }
//     if (currentElement.value !== '') { currentElement.valid = true }

//     currentState.firstName.value = currentElement.value
//     currentState.firstName.valid = currentElement.valid
//     this.setState(currentState)
// }
