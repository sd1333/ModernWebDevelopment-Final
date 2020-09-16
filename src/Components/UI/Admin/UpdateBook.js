import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './input';
import { fechsinglebook } from '../../../stores/actions';


class UpdateForm extends Component {
  componentDidMount() {
    //feching single book
    this.props.getonebookeventhandler(this.props.match.params.id);
  }

  updateHandler(event) {
    event.preventDefault();
    this.props.onupdateeventhander(this.props.match.params.id);
    this.props.history.push('/admin/books');
  }

  render() {
    console.log(this.props);
    let UpdateBookFormArray = [];
    // copied booklist from the state
    for (let key in this.props.addbookform) {
      UpdateBookFormArray.push({
        id: key,
        configElem: this.props.addbookform[key],
      });
    }

    return (
      <div>
        <div className="container-fluid d-flex justify-content-center m-3">
          <form>
            {UpdateBookFormArray.map((item) => (
              <Input
                //passing all the item from state to child component
                key={item.id}
                singledata={this.props.data}
                id={item.id}
                label={item.configElem.lable}
                type={item.configElem.type}
                // passing function that handle event handler
                onchanged={(event) =>
                  this.props.inputeventhandler1(event, item.id)
                }
              />
            ))}

            <div>
              <br></br>
              <hr />
              <button
                className="btn btn-primary"
                onClick={(event) => {
                  this.updateHandler(event);
                }}
              >
                update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
// Extracting Data with mapStateToProps
const mapStateToProps = (state) => {
  return { ...state.admin };
};
// created functions that dispatch when called,and pass those functions as props to my component.
const mapDispatchToProps = (dispatch) => {
  return {
    //getting all the input event
    inputeventhandler1: (event, id) =>
      dispatch({ type: 'inputevent1', event: event, id: id }),
    //feching single book
    getonebookeventhandler: (id) => dispatch(fechsinglebook(id)),
    // function that handle my update button
    onupdateeventhander: (event, id) => {
      dispatch({ type: 'updatebook', id: id });
    },
  };
};
// connecting  a React component to a Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
