import React from 'react';

const Swap = (props) => {
  return (
    <div className="Swap">
      <button type="button" className="btn btn-action btn-swap" onClick={props.click}>{props.symbol}</button>
    </div>
  )
};

export default Swap;