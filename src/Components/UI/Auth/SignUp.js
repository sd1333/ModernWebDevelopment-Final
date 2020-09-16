import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from '../../../stores/actionType';


class MakeAccount extends React.Component {
  formSubmitEventHandler = (event) => {
    // handling the form submission event here -SD
    event.preventDefault();
    // creating an object here to pass to our post request. Must fit our mongoose User schema -SD
    const data = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      password: this.props.password,
    };

    // creating an array to iterate through and check the validity of the input submissions -SD
    const validFormArray = [
      this.props.firstNameValid,
      this.props.lastNameValid,
      this.props.emailValid,
      this.props.passwordValid,
      this.props.password2Valid,
    ];

    // create a for loop. If any of the forms are invalid, the variable "valid" will be set to false. Innocent until proven guilty. -SD
    let valid = true;
    for (let e of validFormArray) {
      if (e === false) {
        valid = false;
      }
    }

    // if it passes the for loop and all of our input fields were validated, and "valid" is true. the http request happens. -SD
    if (valid) {
      axios
        .post(
          'https://eotcchurch.herokuapp.com/api/v1/church/createaccount',
          data,
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          alert(err);
        });

      this.props.history.push('/login');
    } else {
      // if valid is false, then one of the fields were not validated and we do not perform an http request. -SD
      alert('invalid!');
    }
  };

  // we are handling the input field changes here and passing them to another function to be handled in our reducer, since it will change the state. -SD
  fnameChangeEventHandler = (event) => {
    const currentName = event.target.value;
    this.props.onfirstNameChange(currentName);
  };

  lnameChangeEventHandler = (event) => {
    const currentName = event.target.value;
    this.props.onlastNameChange(currentName);
  };

  emailChangeEventHandler = (event) => {
    const currentName = event.target.value;
    this.props.onEmailChange(currentName);
  };

  passChangeEventHandler = (event) => {
    const currentName = event.target.value;
    this.props.onPasswordChange(currentName);
  };

  pass2ChangeEventHandler = (event) => {
    const currentName = event.target.value;
    this.props.onPassword2Change(currentName);
    console.log(this.props);
  };

  render() {
    return (
      <div className="text-center">
        <h3>Please create a new account here</h3>
        <div className="container d-flex justify-content-center m-3">
          <hr />
          <form
            onSubmit={(event) => {
              this.formSubmitEventHandler(event);
            }}
          >
            {/* {console.log('this.props: ', this.props)} */}
            <label htmlFor="firstName">First Name: </label>
            <input
              name="firstName"
              id="firstName"
              value={this.props.firstName}
              onChange={(event) => {
                this.fnameChangeEventHandler(event);
              }}
              className="form-control"
            />

            <label for="lastName">Last Name: </label>
            <input
              name="lastName"
              id="lastName"
              value={this.props.lastName}
              onChange={(event) => {
                this.lnameChangeEventHandler(event);
              }}
              className="form-control"
            />

            <label for="email">E-mail: </label>
            <input
              name="email"
              id="email"
              type="email"
              value={this.props.email}
              onChange={(event) => {
                this.emailChangeEventHandler(event);
              }}
              className="form-control"
            />

            <label for="password">Password: </label>
            <input
              name="password"
              type="password"
              id="password"
              value={this.props.password}
              onChange={(event) => this.passChangeEventHandler(event)}
              className="form-control"
            />

            <label for="password2">Re-enter Password: </label>
            <input
              name="password2"
              type="password"
              id="password2"
              value={this.props.password2}
              onChange={(event) => this.pass2ChangeEventHandler(event)}
              className="form-control"
            />

            <button type="submit" className="btn btn-primary">
              {' '}
              Create Account!{' '}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state.mar: ', state.mar)

  // we are specifying which parts of our state we would like to be in our props for use in this component. -SD
  return {
    firstName: state.mar.firstName.value,
    lastName: state.mar.lastName.value,
    email: state.mar.email.value,
    password: state.mar.password.value,
    password2: state.mar.password2.value,

    firstNameValid: state.mar.firstName.valid,
    lastNameValid: state.mar.lastName.valid,
    emailValid: state.mar.email.valid,
    passwordValid: state.mar.password.valid,
    password2Valid: state.mar.password2.valid,
  };
};

// we are specifying the functions that dispatch our actions here. -SD
const mapDispatchToProps = (dispatch) => {
  return {
    onfirstNameChange: (fname) => dispatch(actionTypes.fnamechange(fname)),
    onlastNameChange: (lname) => dispatch(actionTypes.lnamechange(lname)),
    onEmailChange: (email) => dispatch(actionTypes.emailchange(email)),
    onPasswordChange: (pass) => dispatch(actionTypes.passchange(pass)),
    onPassword2Change: (pass2) => dispatch(actionTypes.pass2change(pass2)),

    onSubmitReset: (event) => dispatch(actionTypes.submitreset(event)),
  };
};

// connecting to our store here with connect -SD
export default connect(mapStateToProps, mapDispatchToProps)(MakeAccount);

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

// onlastNameChange = (event) => {
//     const currentState = { ...this.state }
//     const currentElement = { ...this.state.lastName }
//     currentElement.value = event.target.value

//     if (currentElement.value === '') { currentElement.valid = false }
//     if (currentElement.value !== '') { currentElement.valid = true }

//     currentState.lastName.value = currentElement.value
//     currentState.lastName.valid = currentElement.valid
//     this.setState(currentState)
// }

// onEmailChange = (event) => {
//     const currentState = { ...this.state }
//     const currentElement = { ...this.state.email }
//     currentElement.value = event.target.value

//     if (currentElement.value === '') { currentElement.valid = false }
//     if (currentElement.value !== '') { currentElement.valid = true }

//     currentState.email.value = currentElement.value
//     currentState.email.valid = currentElement.valid
//     this.setState(currentState)
// }

// onPasswordChange = (event) => {
//     const currentState = { ...this.state }
//     const currentElement = { ...this.state.password }
//     currentElement.value = event.target.value

//     if (currentElement.value.length < 6) { currentElement.valid = false }
//     if (currentElement.value.length >= 6) { currentElement.valid = true }

//     currentState.password.value = currentElement.value
//     currentState.password.valid = currentElement.valid
//     this.setState(currentState)
// }

// onPassword2Change = (event) => {
//     const currentState = { ...this.state }
//     const currentElement = { ...this.state.password2 }
//     currentElement.value = event.target.value

//     if (currentState.password.value !== currentElement.value) { currentElement.valid = false }
//     if (currentState.password.value === currentElement.value) { currentElement.valid = true }

//     currentState.password2.value = currentElement.value
//     currentState.password2.valid = currentElement.valid
//     this.setState(currentState)
// }
