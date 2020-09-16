import React from 'react';

const input = (props) => {
  console.log(props.singledata._id, 'fddfdfd');
  console.log(props);
  // checking all my input type with if statment and assigning input value
  let inputtype = null;
  if (props.type === 'text' && props.label === 'Name') {
    inputtype = (
      <input
        value={`${props.singledata.Name}`}
        onChange={(event) => {
          // getting the function from parent component
          props.onchanged(event);
        }}
        className="form-control"
      ></input>
    );
  }
  if (props.type === 'text' && props.label === 'Image') {
    inputtype = (
      <input
        value={`${props.singledata.imageurl}`}
        onChange={(event) => {
          props.onchanged(event);
        }}
        className="form-control"
      ></input>
    );
  }
  if (props.type === 'text' && props.label === 'Author') {
    inputtype = (
      <input
        value={`${props.singledata.author}`}
        onChange={(event) => {
          props.onchanged(event);
        }}
        className="form-control"
      ></input>
    );
  }
  if (props.type === 'number' && props.label === 'Price') {
    inputtype = (
      <input
        value={`${props.singledata.price}`}
        onChange={(event) => {
          props.onchanged(event);
        }}
        className="form-control"
      ></input>
    );
  }

  if (props.type === 'text' && props.label === 'Book Title') {
    inputtype = (
      <input
        value={`${props.singledata.title}`}
        onChange={(event) => {
          props.onchanged(event);
        }}
        className="form-control"
      ></input>
    );
  }

  if (props.type === 'textarea') {
    inputtype = (
      <textarea
        value={`${props.singledata.description}`}
        onChange={(event) => {
          props.onchanged(event);
        }}
        className="form-control"
      ></textarea>
    );
  }

  return (
    //displaying my lable and inputfiled
    <div>
      <label htmlFor=""> {props.label}</label>
      {inputtype}
    </div>
  );
};

export default input;
