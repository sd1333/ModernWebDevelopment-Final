import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../Components/UI/NavBar';
import Header from '../Components/UI/Headers/Header';
import Footer from '../Components/UI/Footer';

import AsyncComponent from '../Components/Hoc/AsyncComponent';

import * as actionType from '../stores/actionType';
import MainBody from '../Components/UI/MainBody/MainBody';
import ChurchStore from '../Components/UI/ChurchStore/ChurchStore';
import Login from '../Components/UI/Auth/Login';
import ShopItemDetail from '../Components/UI/ChurchStore/ShopItemDetail';
import SignUp from '../Components/UI/Auth/SignUp';
//import UserCart from '../Components/UI/ChurchStore/UserCart';
import AddBook from '../Components/UI/Admin/AddBook';
import Books from '../Components/UI/Admin/Books';
// import UpdateBook from '../Components/UI/Admin/UpdateBook';

//Loading Routes Lazily
const AsyncUserCart = AsyncComponent(() => {
  return import('../Components/UI/ChurchStore/UserCart');
});

const AsyncUpdateBook = AsyncComponent(() => {
  return import('../Components/UI/Admin/UpdateBook');
});

class Main extends Component {
  componentDidMount() {
    this.props.setTokenFromCookie();
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={MainBody} />
          <Route path="/store" exact component={ChurchStore} />
          <Route path="/itemdetail/:itemid" exact component={ShopItemDetail} />
          {this.props.user && (
            <Route path="/cart" exact component={AsyncUserCart} />
          )}
          {this.props.user && <Redirect from="/login" to="/" />}
          <Route path="/login" exact component={Login} />
          {!this.props.user && (
            <Route path="/signup" exact component={SignUp} />
          )}
          <Route path="/addbibleverse" exact component={ChurchStore} />

          <Route path="/admin/books" exact component={Books} />

          {/*  admins routes*/}

          {this.props.role === 'admin' && (
            <Route path="/admin/addbook" exact component={AddBook} />
          )}
          {this.props.role === 'admin' && (
            <Route path="/admin/addbook" exact component={AddBook} />
          )}
          {this.props.role === 'admin' && (
            <Route path="/admin/update/:id" exact component={AsyncUpdateBook} />
          )}
          
          <Redirect from="*" to="/login" />
        </Switch>
        <Footer />
      </Fragment>
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
    setTokenFromCookie: () => dispatch({ type: actionType.setToken }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
