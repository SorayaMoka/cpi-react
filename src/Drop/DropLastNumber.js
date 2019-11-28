import React from 'react';

const dropLastNumber = (props) => {
  return (
    <div className="ClearLastNumber">
      <button type="button" className="btn btn-clearLastNumber" onClick={props.click}><i className="fas fa-arrow-left"></i></button>
    </div>
  )
};

export default dropLastNumber;