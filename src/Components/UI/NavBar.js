import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreator from '../../stores/actions';

class NavBar extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.onGetUserCart();
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav className="navbar sticky-top navbar-light bg-light navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-church fa-2x"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-right text-dark"></i>
        </button>
        <div className="collapse navbar-collapse p" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {this.props.role === 'admin' ? (
              <>
                <li className="nav-item active">
                  <Link className="nav-link" to="/admin/addbook">
                    Add Books <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <Link className="nav-link" to="/admin/books">
                  STORE
                </Link>
                <Link
                  className="nav-link"
                  onClick={this.props.onLogoutEventHandler}
                  to="/"
                >
                  <i className="fas fa-user " aria-hidden="true"></i> LOGOUT
                </Link>
              </>
            ) : (
              <>
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    HOME <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    I'M NEW
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/store">
                    STORE
                    {this.props.user && (
                      <span className="badge badge-pill badge-light align-top">
                        {' '}
                        {this.props.usercart ? this.props.usercart.length : 0}
                      </span>
                    )}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <div className="dropdown">
                    <Link className="nav-link" to="#">
                      FORMS
                    </Link>
                    <div className="dropdown-content">
                      <Link to="#">forms 1</Link>
                      <Link to="#">forms 2</Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    CONTACT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    DONATE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <i
                      className="fa fa-play "
                      style={{ color: '#C31A1E' }}
                      aria-hidden="true"
                    >
                      {' '}
                      LIVE
                    </i>
                  </Link>
                </li>
                <li className="nav-item">
                  {!this.props.user ? (
                    <Link className="nav-link" to="/login">
                      <i className="fas fa-user " aria-hidden="true"></i> LOGIN
                    </Link>
                  ) : (
                    <Link
                      className="nav-link"
                      onClick={this.props.onLogoutEventHandler}
                      to="/"
                    >
                      <i className="fas fa-user " aria-hidden="true"></i> LOGOUT
                    </Link>
                  )}
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth,
    ...state.shop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutEventHandler: () => dispatch({ type: 'logout' }),
    onGetUserCart: () => dispatch(actionCreator.asyncgetUserCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
