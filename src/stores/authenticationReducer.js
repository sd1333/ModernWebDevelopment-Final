import * as actionType from './actionType';

const initialState = {
  user: null,

  loginForm: {
    email: {
      label: 'Email',
      elemConfig: {
        type: 'email',
        value: '',
        placeholder: 'Enter your email here',
        className: 'form-control',
        required: true,
      },
      validation: {
        required: true,
      },
      isValid: true,
    },
    password: {
      label: 'Password',
      elemConfig: {
        type: 'password',
        value: '',
        placeholder: 'Enter your password here',
        className: 'form-control',
        required: true,
      },
      validation: {
        required: true,
      },
      isValid: true,
    },
  },

  loginMessage: null,
  role: 'user',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.loginInput:
      const copyOfLoginForm = { ...state.loginForm };
      const copyOfElement = { ...copyOfLoginForm[action.insertedField] };
      copyOfElement.isValid = validate(
        action.event.target.value,
        copyOfElement.validation
      );
      const copyOfElementConfig = copyOfElement.elemConfig;
      copyOfElementConfig.value = action.event.target.value;
      copyOfElement.elemConfig = copyOfElementConfig;
      copyOfLoginForm[action.insertedField] = copyOfElement;
      return { ...state, loginForm: copyOfLoginForm };
    case actionType.login: //
      return {
        ...state,
        user: action.user,
        loginMessage: action.loginMessage,
        role: action.role,
      };

    case actionType.setToken: // assigning the cookie token to the state
      const pair = document.cookie
        .split('; ')
        .find((x) => x.startsWith('churchtoken='));
      if (pair) {
        const user = pair.split('=')[1];
        return { ...state, user: user };
      }
      return { ...state };

    case actionType.logout:
      document.cookie =
        'churchtoken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'; // delete cookie by assiging passed date
      return { ...state, user: null, loginMessage: null, role: 'user' };
    default:
      return state;
  }
};

//validate user input
const validate = (value, rules) => {
  return rules.required && value.trim() !== '' ? true : false;
};

export default reducer;
