import React from 'react';

export default function Input(props) {
  let inputElem = null;
  switch (props.elemConfig.type) {
    case 'text':
      inputElem = (
        <input
          {...props.elemConfig}
          onChange={(e) => {
            props.onchangeHandler(e);
          }}
        />
      );
      break;
    case 'password':
      inputElem = (
        <input
          {...props.elemConfig}
          onChange={(e) => {
            props.onchangeHandler(e);
          }}
        />
      );
      break;
    case 'number':
      inputElem = (
        <input
          {...props.elemConfig}
          onChange={(e) => {
            props.onchangeHandler(e);
          }}
        />
      );
      break;
    case 'textarea':
      inputElem = (
        <textarea
          {...props.elemConfig}
          onChange={(e) => {
            props.onchangeHandler(e);
          }}
        />
      );
      break;
    default:
      inputElem = (
        <input
          {...props.elemConfig}
          onChange={(e) => {
            props.onchangeHandler(e);
          }}
        />
      );
  }

  return (
    <div>
      <label htmlFor="">{props.label}</label>
      {inputElem}
    </div>
  );
}
