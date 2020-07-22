import React from 'react';

// Este componente se reutiliza tal cual, no hay que tocarlo
function ContactData(props) {
  return (<div style={{backgroundColor: '#DDDDDD'}}>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.address}</p>
    </div>);
}

export default ContactData;