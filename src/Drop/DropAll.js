import React from 'react';

const DropAll = (props) => {
  return (
    <div className="DropAll">
      <button type="button" className="btn btn-action btn-dropAll" onClick={props.click}>{props.symbol}</button>
    </div>
  )
};

export default DropAll;