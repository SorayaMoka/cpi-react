import React from 'react';

const DropPiles = (props) => {
  return (
    <div className="DropPiles">
      <button type="button" className="btn btn-action btn-dropPiles" onClick={props.click}>{props.symbol}</button>
    </div>
  )
};

export default DropPiles;