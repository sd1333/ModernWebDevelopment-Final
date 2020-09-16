import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreator from '../../../stores/actions';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';

class Auth extends Component {
  render() {
    let loginFormArray = [];
    for (let key in this.props.loginForm) {
      loginFormArray.push({
        id: key,
        loginForm: this.props.loginForm[key],
      });
    }
    return (
      <div className="login">
        <div className="container-fluid d-flex justify-content-center">
          <div className="card mb-3 border-0 ml-5">
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body text-center">
                  {this.props.loginMessage && (
                    <div className="alert alert-danger mr-5 ml-5 ">
                      Wrong Password And user name
                    </div>
                  )}
                  <form
                    onSubmit={(event) => {
                      this.props.onLoginSubmitHandler(event);
                    }}
                    className="m-5  p-5"
                  >
                    {loginFormArray.map((formelem) => (
                      <Input
                        key={formelem.id}
                        label={formelem.loginForm.label}
                        elemConfig={formelem.loginForm.elemConfig}
                        onchangeHandler={(e) => {
                          this.props.onInputEventHandler(e, formelem.id);
                        }}
                      />
                    ))}

                    <button type="submit" className="btn btn-primary">
                      login
                    </button>
                  </form>
                  <hr />
                  <Link to="/signup"> SignUp</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputEventHandler: (event, insertedField) =>
      dispatch({
        type: 'loginInput',
        event: event,
        insertedField: insertedField,
      }),
    onLoginSubmitHandler: (e) => {
      e.preventDefault();
      dispatch(actionCreator.asyncLoginAuthentication());
    },
    onLogOutEventHandler: () => dispatch({ type: 'logout' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
