import React from 'react';

const dropLastDigit = (props) => {
  return (
    <div className="ClearLastDigit">
      <button type="button" className="btn btn-clearLastDigit" onClick={props.click}><i className="fas fa-arrow-left"></i></button>
    </div>
  )
};

export default dropLastDigit;