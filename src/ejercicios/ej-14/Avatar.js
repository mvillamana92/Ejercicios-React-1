import React from 'react';

function Avatar(props) {
  return <div style={{border: '2px solid #000'}}>
      <p>{props.userName} - {props.totalOrders}</p>
    </div>;
}

export default Avatar;