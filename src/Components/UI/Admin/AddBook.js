import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionType from '../../../stores/actionType';
import * as actionCreator from '../../../stores/actions';

import Input from '../../Input/Input';

class AddBook extends Component {
  submiteventhander(event) {
    event.preventDefault();
    this.props.onsubmiteventhander();
    this.props.history.push('/admin/books');
  }

  render() {
    console.log(this.props);
    //pushing all form from my state  to an array  to esily pass it to child component
    let addBookFormArray = [];
    //looping state obj
    for (let key in this.props.addbookform) {
      addBookFormArray.push({
        id: key,
        elemConfig: this.props.addbookform[key],
      });
    }
    return (
      <div className="addbook">
        <div className="container-fluid d-flex justify-content-center">
          <form>
            {addBookFormArray.map((inputElem) => (
              <Input
                key={inputElem.id}
                elemConfig={inputElem.elemConfig}
                label={inputElem.elemConfig.lable}
                onchangeHandler={(event) => {
                  this.props.inputeventhandler(event, inputElem.id);
                }}
              />
            ))}

            <button
              type="submit"
              onClick={(event) => {
                this.submiteventhander(event);
              }}
              className="btn btn-primary mt-3"
            >
              Addbook
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.admin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //getting each input event
    inputeventhandler: (event, id) =>
      dispatch({ type: actionType.addBookInputEvent, event: event, id: id }),
    //getting all the event and passing all the event to db
    onsubmiteventhander: () => {
      dispatch(actionCreator.asyncAddBook());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
