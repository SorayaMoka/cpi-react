import React from 'react';

const Enter = (props) => {
  return (
    <div className="Push">
      <button type="button" className="btn btn-round btn-enter" onClick={props.click}>Enter</button>
    </div>
  )
};

export default Enter;