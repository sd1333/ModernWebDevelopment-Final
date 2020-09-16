import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionCreator from '../../../stores/actions';

import { Link } from 'react-router-dom';
class ShopItemDetail extends Component {
  constructor(props) {
    super(props);
    this.commentRefElem = React.createRef();
  }
  submitEventHandler(event) {
    event.preventDefault();
    const userComment = this.commentRefElem.current.value;
    const productId = this.props.itemdetail._id;
    this.commentRefElem.current.value = '';
    this.props.onSubmitComment(userComment, productId);
  }

  componentDidMount() {
    // getting store item detail
    const itemid = this.props.match.params.itemid;
    this.props.onItemDetail(itemid);
  }

  componentDidUpdate(prevProps) {
    // getting store item detail

    if (prevProps.itemdetail.comments) {
      if (
        this.props.itemdetail.comments.length !==
        prevProps.itemdetail.comments.length
      ) {
        const itemid = this.props.match.params.itemid;
        this.props.onItemDetail(itemid);
      }
    }
  }
  render() {
    return (
      <div className="shopdetail">
        <hr />
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img
                src={this.props.itemdetail.imageurl}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8 col-sm-12 pl-4">
              <div className="row">
                <h2>{this.props.itemdetail.title}</h2>
              </div>
              <h4>
                <small className="text-muted">Buy Now on:</small>
              </h4>
              <ul>
                <li className="list-item" href="">
                  <Link to="">Amazon</Link>
                </li>

                <li className="list-item" href="">
                  <Link to="">Barnes Noble</Link>
                </li>
                <li className="list-item" href="">
                  <Link to="">Google book</Link>
                </li>
              </ul>
              <div className="row pt-4">
                <h5>
                  <small className="text-muted">
                    {/* description about the book */}
                    {this.props.itemdetail.description}
                  </small>
                </h5>
              </div>
              <div className="row pt-2">
                <h5>
                  <small className="text-muted">Rates</small>
                </h5>
              </div>
              <div className="row pt-2 pl-5">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="row pt-2">
                <h5>
                  <small className="text-muted">
                    $ {this.props.itemdetail.price}
                  </small>
                </h5>
              </div>
              <div className="row pt-3 pl-3">
                {!this.props.user ? (
                  <Link to="/login">
                    <h5>
                      <i className="fas fa-cart-plus"> buy</i>
                    </h5>
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      this.props.onItemAddToCart(
                        this.props.match.params.itemid
                      );
                    }}
                  >
                    <h5>
                      <i className="fas fa-cart-plus"> buy</i>
                    </h5>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="conatiner mt-5">
            <h5>
              <small className="text-muted">Comments About the book</small>
            </h5>
            {this.props.itemdetail.comments
              ? this.props.itemdetail.comments.map((comment, index) => (
                  <div className="row" key={index}>
                    <blockquote className="blockquote text-right">
                      <p className="mb-0">{comment.text}</p>
                      <footer className="blockquote-footer">
                        {comment.user.firstName}{' '}
                      </footer>
                    </blockquote>
                  </div>
                ))
              : null}
          </div>

          <div className="conatiner">
            <form>
              <div className="form-group" style={{ width: '80%' }}>
                <label htmlFor="exampleTextarea">Your Comment</label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  ref={this.commentRefElem}
                ></textarea>
              </div>
              {!this.props.user ? (
                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                  disabled
                >
                  Login to Comment
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={(event) => {
                    this.submitEventHandler(event);
                  }}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.shop,
    ...state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemDetail: (itemid) =>
      dispatch(actionCreator.asyncItemDetailFetch(itemid)),
    onSubmitComment: (comment, itemid) => {
      dispatch(actionCreator.asyncSubmitComment(comment, itemid));
    },
    onItemAddToCart: (itemid) =>
      dispatch(actionCreator.asyncItemAddToCart(itemid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopItemDetail);
