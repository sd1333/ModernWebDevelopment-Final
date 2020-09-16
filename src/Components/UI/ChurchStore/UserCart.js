import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionCreator from '../../../stores/actions';

class NavBar extends Component {
  componentDidMount() {
    this.props.onGetUserCart();
  }
  render() {
    console.log(this.props);
    return (
      <div className="usercart mt-3">
        <div className="container text-center">
          <div className="conatiner float-right"></div>
          <div className="clearfix"></div>
          <div className="card-columns">
            {this.props.usercart.map((item) => (
              <div className="card border-0 ">
                <span className="badge badge-primary badge-pill float-right">
                  {item.quantity}
                </span>
                <img
                  className="card-img"
                  src={item.productId.imageurl}
                  alt={item.productId.title}
                />
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    this.props.onDeleteUserCart(item.productId._id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <button className="btn btn-primary btn-lg text-center" type="submit">
            Continue to checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.shop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserCart: () => dispatch(actionCreator.asyncgetUserCart()),
    onDeleteUserCart: (id) =>
      dispatch(actionCreator.asyncDeleteItemFromCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
